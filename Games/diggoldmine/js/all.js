var mainSheet;
var heroSheet;
var font2Sheet;

function initData() {
    var _0xc7dfx5 = {
        "images": [preloader["getResult"]("images/sheets/main.png", false)],
        "frames": [
            [1849, 913, 46, 75],
            [1782, 325, 86, 86],
            [1782, 565, 67, 75],
            [1289, 1849, 50, 75],
            [1031, 1825, 63, 75],
            [1405, 1855, 59, 75],
            [1782, 413, 74, 75],
            [1161, 1849, 62, 75],
            [1096, 1825, 63, 75],
            [1225, 1849, 62, 75],
            [1782, 642, 64, 75],
            [1341, 1855, 62, 75],
            [1581, 1860, 50, 73],
            [1212, 1926, 47, 73],
            [644, 1851, 186, 91],
            [1345, 1682, 133, 171],
            [1647, 1431, 136, 176],
            [1647, 1609, 136, 176],
            [990, 1851, 39, 77],
            [1601, 1935, 40, 77],
            [1601, 1935, 40, 77],
            [1643, 1935, 39, 77],
            [832, 1851, 156, 93],
            [1480, 1765, 156, 93],
            [1062, 1902, 47, 75],
            [1757, 776, 138, 135],
            [1480, 776, 275, 275],
            [489, 1926, 151, 68],
            [1480, 1258, 224, 171],
            [642, 1944, 112, 61],
            [1261, 1926, 47, 73],
            [1858, 413, 37, 73],
            [1776, 2, 90, 117],
            [1757, 913, 90, 117],
            [1785, 1395, 90, 117],
            [1785, 1514, 90, 117],
            [1178, 172, 300, 300],
            [1178, 474, 300, 300],
            [1178, 776, 300, 300],
            [1178, 1078, 300, 300],
            [1178, 1380, 300, 300],
            [1480, 172, 300, 300],
            [1480, 474, 300, 300],
            [1859, 488, 36, 73],
            [1310, 1932, 47, 75],
            [1178, 2, 596, 168],
            [1706, 1395, 30, 30],
            [681, 2007, 30, 30],
            [1201, 2001, 30, 30],
            [642, 2007, 37, 39],
            [1164, 2001, 35, 45],
            [1505, 1935, 46, 73],
            [1638, 1787, 135, 60],
            [1868, 2, 24, 73],
            [1785, 1633, 100, 100],
            [756, 1946, 100, 100],
            [858, 1946, 100, 100],
            [960, 1946, 100, 100],
            [1785, 1735, 100, 100],
            [1782, 121, 100, 100],
            [1782, 223, 100, 100],
            [1633, 1860, 31, 73],
            [1161, 1926, 49, 73],
            [1730, 1924, 34, 73],
            [1466, 1860, 60, 73],
            [2, 2, 640, 960],
            [1666, 1849, 45, 73],
            [1359, 1932, 47, 75],
            [1685, 1053, 210, 173],
            [1851, 565, 44, 73],
            [489, 1996, 49, 45],
            [1782, 719, 49, 45],
            [540, 1996, 49, 45],
            [591, 1996, 49, 45],
            [1062, 2001, 49, 45],
            [1113, 2001, 49, 45],
            [1480, 1431, 165, 165],
            [1178, 1682, 165, 165],
            [1706, 1228, 165, 165],
            [1480, 1598, 165, 165],
            [1480, 1053, 203, 203],
            [644, 1825, 374, 24],
            [2, 1926, 485, 117],
            [1848, 642, 47, 82],
            [1713, 1849, 45, 73],
            [644, 942, 532, 881],
            [1849, 990, 46, 46],
            [1800, 1837, 46, 46],
            [1800, 1885, 46, 46],
            [1848, 1837, 46, 46],
            [1848, 1885, 46, 46],
            [1833, 726, 46, 46],
            [1684, 1999, 46, 46],
            [1732, 1999, 46, 46],
            [1766, 1933, 46, 46],
            [1814, 1933, 46, 46],
            [1408, 1932, 46, 75],
            [644, 2, 532, 938],
            [1684, 1924, 44, 73],
            [1553, 1935, 46, 74],
            [1528, 1860, 51, 73],
            [1782, 490, 75, 73],
            [2, 964, 640, 960],
            [1111, 1902, 48, 73],
            [1456, 1935, 47, 73],
            [1760, 1849, 38, 73]
        ],
        "animations": {
            "$": [0],
            "+": [1],
            "0": [2],
            "1": [3],
            "2": [4],
            "3": [5],
            "4": [6],
            "5": [7],
            "6": [8],
            "7": [9],
            "8": [10],
            "9": [11],
            "a": [12],
            "b": [13],
            "block": [14],
            "bombIcon": [15],
            "bomb_active": [16],
            "bomb_inactive": [17],
            "buyLine1": [18],
            "buyLine2": [19],
            "buyLine3": [20],
            "buyLine4": [21],
            "buy_active": [22],
            "buy_inactive": [23],
            "c": [24],
            "chest": [25],
            "chestLights": [26],
            "cloud1": [27],
            "cloud2": [28],
            "cloud3": [29],
            "d": [30],
            "e": [31],
            "energyIcon1": [32],
            "energyIcon2": [33],
            "energyIcon3": [34],
            "energyIcon4": [35],
            "explosion": [36, 42],
            "f": [43],
            "g": [44],
            "gameTitle": [45],
            "groundItem1": [46],
            "groundItem2": [47],
            "groundItem3": [48],
            "groundItem4": [49],
            "groundItem5": [50],
            "h": [51],
            "heightTracker": [52],
            "i": [53],
            "itemEffect": [54, 60],
            "j": [61],
            "k": [62],
            "l": [63],
            "m": [64],
            "mainMenu_bg": [65],
            "n": [66],
            "o": [67],
            "okBtn": [68],
            "p": [69],
            "particle1": [70],
            "particle2": [71],
            "particle3": [72],
            "particle4": [73],
            "particle5": [74],
            "particle9": [75],
            "pick1": [76],
            "pick2": [77],
            "pick3": [78],
            "pick4": [79],
            "playBtn": [80],
            "progress_bar": [81],
            "progress_bar_bg": [82],
            "q": [83],
            "r": [84],
            "resultsBg": [85],
            "rock0": [86],
            "rock1": [87],
            "rock2": [88],
            "rock3": [89],
            "rock4": [90],
            "rock5": [91],
            "rock9": [92],
            "rock_crack/0000": [93],
            "rock_crack/0001": [94],
            "rock_crack/0002": [95],
            "s": [96],
            "shop": [97],
            "t": [98],
            "u": [99],
            "v": [100],
            "w": [101],
            "winPage": [102],
            "x": [103],
            "y": [104],
            "z": [105]
        }
    };
    var _0xc7dfx6 = {
        "images": [preloader["getResult"]("images/sheets/hero.png", false)],
        "frames": [
            [2, 2, 90, 70],
            [2, 74, 90, 70],
            [2, 146, 90, 70],
            [94, 2, 90, 70],
            [94, 74, 90, 70],
            [94, 146, 90, 70],
            [186, 2, 90, 70],
            [186, 74, 90, 70],
            [186, 146, 90, 70],
            [278, 2, 90, 70],
            [278, 74, 90, 70],
            [278, 146, 90, 70],
            [370, 2, 90, 70],
            [370, 74, 90, 70],
            [2, 2, 90, 70],
            [370, 146, 90, 70],
            [462, 2, 90, 70],
            [462, 74, 90, 70],
            [462, 146, 90, 70],
            [554, 2, 90, 70],
            [554, 74, 90, 70],
            [554, 146, 90, 70],
            [646, 2, 90, 70],
            [646, 74, 90, 70],
            [646, 146, 90, 70],
            [738, 2, 90, 70],
            [738, 74, 90, 70],
            [738, 146, 90, 70],
            [830, 2, 90, 70],
            [370, 146, 90, 70],
            [830, 74, 90, 70],
            [830, 146, 90, 70],
            [922, 2, 90, 70],
            [922, 74, 90, 70],
            [922, 146, 90, 70],
            [1014, 2, 90, 70],
            [1014, 74, 90, 70],
            [1014, 146, 90, 70],
            [1106, 2, 90, 70],
            [1106, 74, 90, 70],
            [1106, 146, 90, 70],
            [1198, 2, 90, 70],
            [1198, 74, 90, 70],
            [1198, 146, 90, 70],
            [830, 74, 90, 70],
            [1290, 2, 90, 70],
            [1290, 74, 90, 70],
            [1290, 146, 90, 70],
            [1382, 2, 90, 70],
            [1382, 74, 90, 70],
            [1382, 146, 90, 70],
            [1474, 2, 90, 70],
            [1474, 74, 90, 70],
            [1474, 146, 90, 70],
            [1566, 2, 90, 70],
            [1658, 2, 90, 70],
            [1566, 74, 90, 70],
            [1658, 74, 90, 70],
            [1566, 146, 90, 70],
            [1290, 2, 90, 70]
        ],
        "animations": {
            "hero_move1": [0, 14],
            "hero_move2": [15, 29],
            "hero_move3": [30, 44],
            "hero_move4": [45, 59]
        }
    };
    var _0xc7dfx7 = {
        "images": [preloader["getResult"]("images/sheets/font2.png", false)],
        "frames": [
            [2, 77, 54, 78],
            [2, 776, 32, 73],
            [2, 540, 44, 75],
            [2, 157, 49, 77],
            [2, 388, 45, 75],
            [2, 465, 45, 73],
            [2, 697, 42, 77],
            [2, 236, 49, 73],
            [2, 311, 46, 75],
            [2, 617, 42, 78],
            [2, 2, 60, 73]
        ],
        "animations": {
            "0": [0],
            "1": [1],
            "2": [2],
            "3": [3],
            "4": [4],
            "5": [5],
            "6": [6],
            "7": [7],
            "8": [8],
            "9": [9],
            "M": [10]
        }
    };
    mainSheet = new createjs.SpriteSheet(_0xc7dfx5);
    heroSheet = new createjs.SpriteSheet(_0xc7dfx6);
    font2Sheet = new createjs.SpriteSheet(_0xc7dfx7);
}
var GamePage = function() {
    this["initDone"] = false;
    this["view"] = new createjs["Container"];
    this["effectsContainer"] = new createjs["Container"];
    this["bgHidden"] = new createjs["Container"];
    this["bgHidden"]["alpha"] = 0.5;
    var _0xc7dfx9 = new createjs.Shape();
    _0xc7dfx9["graphics"]["beginFill"]("#cccccc")["drawRect"](0, 0, $width, $height);
    _0xc7dfx9["graphics"]["endFill"]();
    this["bgHidden"]["addChild"](_0xc7dfx9);
    this["view"]["addChild"](this["bgHidden"]);
    this["resultsPage"] = new ResultsPage();
    this["mainContainer"] = new createjs["Container"];
    this["shaker"] = new Shaker(stage, $width, $height);
    this["controlsContainer"] = new createjs["Container"];
    this["groundContainer"] = new createjs["Container"];
    this["groundContainer"]["mouseChildren"] = this["groundContainer"]["mouseEnabled"] = false;
    this["effectsContainer"]["mouseChildren"] = this["effectsContainer"]["mouseEnabled"] = false;
    this["bgGroundContainer"] = new createjs["Container"];
    this["bgGroundContainerTop"] = new createjs["Container"];
    this["bgContainersArr"] = [];
    this["heightPerRow"] = 8;
    this["particleCountPerGround"] = 4;
    this["rowsPerContainer"] = 25;
    this["rowMax"] = 500;
    this["columnsMax"] = 14;
    this["rockWidth"] = 45;
    this["rockHeight"] = 45;
    this["offSetY"] = $height - Math["ceil"]($height / this["rockHeight"] * 0.4) * this["rockHeight"];
    this["createChest"]();
    this["createGrounds"]();
    CrackPool["setupPool"](10);
    this["superPool"] = SuperPool["getInstance"]();
    this["superPool"]["setupAPoolFor"]("particle1", 20);
    this["superPool"]["setupAPoolFor"]("particle2", 10);
    this["superPool"]["setupAPoolFor"]("particle3", 10);
    this["superPool"]["setupAPoolFor"]("particle4", 10);
    this["superPool"]["setupAPoolFor"]("particle5", 10);
    this["superPool"]["setupAPoolFor"]("itemEffect", 5);
    this["superPool"]["setupAPoolFor"]("groundItem1", 5);
    this["superPool"]["setupAPoolFor"]("groundItem2", 5);
    this["superPool"]["setupAPoolFor"]("groundItem3", 5);
    this["superPool"]["setupAPoolFor"]("groundItem4", 5);
    this["superPool"]["setupAPoolFor"]("groundItem5", 5);
};
GamePage["prototype"]["clearAll"] = function() {
    log("GamePage.prototype.clearAll");
    this["currentHeight"] = 0;
    this["groundItems1Count"] = 0;
    this["groundItems2Count"] = 0;
    this["groundItems3Count"] = 0;
    TweenMax["killTweensOf"](this["groundContainer"]);
    this["groundContainer"]["y"] = 820;
    clearDisplayObject(this["effectsContainer"]);
    if (this["fallingBlocks"]) {
        for (var _0xc7dfxa = 0; _0xc7dfxa < this["fallingBlocks"]["length"]; _0xc7dfxa++) {
            var _0xc7dfxb = this["fallingBlocks"][_0xc7dfxa];
            this["superPool"]["returnObject"](_0xc7dfxb, _0xc7dfxb["id"]);
            this["effectsContainer"]["removeChild"](_0xc7dfxb);
        }
    };
    this["fallingBlocks"] = [];
    this["deadGroundsArr"] = [];
    this["energyProgress"]["setTime"](gameSettings["upgrade"]["energyValue"][gameData["upgrade"]["energy"] - 1]);
    this["bombCount"] = gameSettings["upgrade"]["bombValue"][gameData["upgrade"]["bomb"] - 1];
    this["bombButton"]["update"]();
    this["particleCountPerGround"] = 4;
    if (gameData["upgrade"]["pick"] == 2) {
        this["particleCountPerGround"] = 3
    };
    if (gameData["upgrade"]["pick"] == 3 && gameData["upgrade"]["pick"] == 4) {
        this["particleCountPerGround"] = 2
    };
    this["heightControls"]["visible"] = false;
    this["gameStarted"] = false;
    this["updateGrounds"]();
    this["hero"]["clearAll"]();
    this["updateHeightIndicator"]();
    this["updateTF"]();
};
GamePage["prototype"]["show"] = function() {
    this["view"]["uncache"]();
    pagesContainer["addChild"](this["view"]);
};
GamePage["prototype"]["init"] = function() {
    var _0xc7dfxc = this;
    if (!this["initDone"]) {
        this["createView"]();
        this["initDone"] = true;
    };
    this["clearAll"]();
    this["initControls"]();
};
GamePage["prototype"]["createView"] = function() {
    var _0xc7dfxc = this;
    var _0xc7dfxd = new createjs.Sprite(mainSheet, "mainMenu_bg");
    this["mainContainer"]["addChild"](_0xc7dfxd);
    this["createClouds"]();
    this["title"] = new createjs.Sprite(mainSheet, "gameTitle");
    this["title"]["x"] = (630 - 597) / 2;
    this["title"]["y"] = 80;
    this["mainContainer"]["addChild"](this["title"]);
    this["playBtn"] = new createjs.Sprite(mainSheet, "playBtn");
    this["playBtn"]["addEventListener"]("click", function() {
        TweenMax["killTweensOf"](_0xc7dfxc["playBtn"]);
        TweenMax["to"](_0xc7dfxc["playBtn"], 0.1, {
            scaleX: 1.2,
            scaleY: 0.7,
            ease: Cubic["cubicOut"],
            onComplete: function() {
                TweenMax["to"](_0xc7dfxc["playBtn"], 0.4, {
                    scaleX: 1,
                    scaleY: 1,
                    ease: Elastic["easeOut"],
                    onComplete: function() {
                        _0xc7dfxe()
                    }
                })
            }
        });

        function _0xc7dfxe() {
            var _0xc7dfxf = ((gamePage["rowMax"] * gamePage["rockHeight"]) + gamePage["groundContainer"]["y"] - $height) * -1;
            var _0xc7dfx10 = 3.5;
            if (testMode) {
                _0xc7dfx10 = 0
            };

            function _0xc7dfx11() {
                var _0xc7dfx12 = -_0xc7dfxc["offSetY"];
                var _0xc7dfx13 = _0xc7dfxf;
                var _0xc7dfx14 = (gamePage["mainContainer"]["y"] - _0xc7dfx12) / (_0xc7dfx13 - _0xc7dfx12);
                var _0xc7dfx15 = Math["ceil"](_0xc7dfx14 * _0xc7dfxc["rowMax"] * _0xc7dfxc["heightPerRow"]);
                _0xc7dfxc["heightFont"]["text"] = _0xc7dfx15 + "M";
            }
            TweenMax["to"](gamePage["mainContainer"], _0xc7dfx10, {
                y: _0xc7dfxf,
                onComplete: function() {},
                onStart: function() {
                    _0xc7dfxc["heightControls"]["visible"] = true
                },
                onUpdate: function() {
                    _0xc7dfx11()
                }
            });
            TweenMax["to"](gamePage["mainContainer"], _0xc7dfx10, {
                y: -_0xc7dfxc["offSetY"],
                delay: _0xc7dfx10 + 3,
                ease: Sine["easeOut"],
                onStart: function() {
                    _0xc7dfxc["chest"]["scaleX"] = _0xc7dfxc["chest"]["scaleY"] = 1;
                    _0xc7dfxc["playBtn"]["visible"] = false;
                    _0xc7dfxc["title"]["visible"] = false;
                    _0xc7dfxc["moreGamesBtn"]["visible"] = false;
                },
                onComplete: function() {
                    _0xc7dfxc["startGame"]()
                },
                onUpdate: function() {
                    _0xc7dfx11()
                }
            });
        }
    });
    this["playBtn"]["regX"] = this["playBtn"]["regY"] = 203 / 2;
    this["playBtn"]["x"] = $width / 2;
    this["playBtn"]["y"] = 520;
    this["bombButton"] = new BombButton();
    this["bombButton"]["view"]["x"] = 20;
    this["bombButton"]["view"]["y"] = $height - 200;
    this["controlsContainer"]["addChild"](this["bombButton"]["view"]);
    this["bombButton"]["view"]["visible"] = false;
    this["energyProgress"] = new ProgressBar();
    this["energyProgress"]["view"]["x"] = 72;
    this["energyProgress"]["view"]["y"] = 20;
    this["controlsContainer"]["addChild"](this["energyProgress"]["view"]);
    this["energyProgress"]["view"]["visible"] = false;
    this["explosionAnim"] = new createjs.Sprite(mainSheet, "explosion");
    this["explosionAnim"]["regY"] = this["explosionAnim"]["regX"] = 150;
    this["explosionAnim"]["addEventListener"]("animationend", function(_0xc7dfx16) {
        _0xc7dfx16["target"]["stop"]();
        _0xc7dfx16["target"]["parent"]["removeChild"](_0xc7dfx16["target"]);
    });
    TweenMax["to"](this["playBtn"], 5, {
        scaleX: 1.3,
        scaleY: 1.3,
        repeat: -1,
        yoyo: true,
        ease: Sine["easeInOut"]
    });

    function _0xc7dfx17() {
        var _0xc7dfx18 = 1.3;
        TweenMax["to"](_0xc7dfxc["playBtn"], 5, {
            scaleX: _0xc7dfx18,
            scaleY: _0xc7dfx18,
            ease: Sine["easeInOut"],
            onComplete: _0xc7dfx19
        });
    }

    function _0xc7dfx19() {
        var _0xc7dfx18 = 0.8;
        TweenMax["to"](_0xc7dfxc["playBtn"], 5, {
            scaleX: _0xc7dfx18,
            scaleY: _0xc7dfx18,
            ease: Sine["easeInOut"],
            onComplete: _0xc7dfx19
        });
    }
    this["moreGamesBtn"] = new createjs.Bitmap(res_path + "images/moreGames.png");
    this["moreGamesBtn"]["on"]("click", function() {
        spilApi["Branding"]["getLink"]("more_games")["action"]()
    });
    this["moreGamesBtn"]["x"] = 30;
    this["moreGamesBtn"]["y"] = 850;
    this["groundContainer"]["addChild"](this["bgGroundContainer"]);
    this["groundContainer"]["addChild"](this["bgGroundContainerTop"]);
    this["mainContainer"]["addChild"](this["groundContainer"]);
    if (hasBranding) {
        this["mainContainer"]["addChild"](this["moreGamesBtn"])
    };
    this["mainContainer"]["addChild"](this["playBtn"]);
    log("create view");
    this["hero"] = new Hero();
    this["heightControls"] = new createjs["Container"];
    var _0xc7dfxd = new createjs.Sprite(mainSheet, "heightTracker");
    this["heightControls"]["addChild"](_0xc7dfxd);
    this["heightFont"] = new createjs.BitmapText("0M", font2Sheet);
    this["heightFont"]["scaleX"] = this["heightFont"]["scaleY"] = 0.4;
    this["heightFont"]["x"] = 10;
    this["heightFont"]["y"] = 14;
    this["heightControls"]["addChild"](this["heightFont"]);
    this["heightControls"]["y"] = 400;
    this["controlsContainer"]["addChild"](this["heightControls"]);
    this["view"]["addChild"](this["mainContainer"]);
    this["view"]["addChild"](this["effectsContainer"]);
    this["view"]["addChild"](this["controlsContainer"]);
};
GamePage["prototype"]["createClouds"] = function() {
    this["cloundsContainer"] = new createjs["Container"];
    var _0xc7dfx1a = 4;
    var _0xc7dfx1b = 1;
    for (var _0xc7dfxa = 0; _0xc7dfxa < _0xc7dfx1a; _0xc7dfxa++) {
        var _0xc7dfx1c = new createjs.Sprite(mainSheet, "cloud" + _0xc7dfx1b);
        _0xc7dfx1b++;
        if (_0xc7dfx1b > 3) {
            _0xc7dfx1b = 1
        };
        _0xc7dfx1c["y"] = randRange(108, 150);
        _0xc7dfx1c["x"] = _0xc7dfxa * $width / _0xc7dfx1a + 1;
        _0xc7dfx1d(_0xc7dfx1c);
        this["cloundsContainer"]["addChild"](_0xc7dfx1c);
    };

    function _0xc7dfx1d(_0xc7dfx1c) {
        var _0xc7dfx1e = 10;
        var _0xc7dfx1f = -300;
        var _0xc7dfx20 = Math["abs"](_0xc7dfx1f - _0xc7dfx1c["x"]);
        TweenMax["to"](_0xc7dfx1c, _0xc7dfx20 / _0xc7dfx1e, {
            x: _0xc7dfx1f,
            onComplete: _0xc7dfx21,
            onCompleteParams: [_0xc7dfx1c]
        });
    }

    function _0xc7dfx21(_0xc7dfx1c) {
        _0xc7dfx1c["x"] = 800;
        _0xc7dfx1d(_0xc7dfx1c);
    }
    this["cloundsContainer"]["x"] = 62;
    this["cloundsContainer"]["y"] = 380;
    this["mainContainer"]["addChild"](this["cloundsContainer"]);
};
GamePage["prototype"]["tryDoBomb"] = function() {
    if (gamePage["bombCount"] > 0) {
        gamePage["bombCount"]--;
        this["doBomb"]();
    }
};
GamePage["prototype"]["doBomb"] = function() {
    this["shaker"]["startShake"](0.3);
    var _0xc7dfx22 = [];
    _0xc7dfx22["push"](this["getGround"](this["hero"]["rowNum"], this["hero"]["columnNum"] + 1));
    _0xc7dfx22["push"](this["getGround"](this["hero"]["rowNum"], this["hero"]["columnNum"] - 1));
    _0xc7dfx22["push"](this["getGround"](this["hero"]["rowNum"] + 1, this["hero"]["columnNum"] + 1));
    _0xc7dfx22["push"](this["getGround"](this["hero"]["rowNum"] + 1, this["hero"]["columnNum"]));
    _0xc7dfx22["push"](this["getGround"](this["hero"]["rowNum"] + 1, this["hero"]["columnNum"] - 1));
    _0xc7dfx22["push"](this["getGround"](this["hero"]["rowNum"] + 2, this["hero"]["columnNum"] + 1));
    _0xc7dfx22["push"](this["getGround"](this["hero"]["rowNum"] + 2, this["hero"]["columnNum"]));
    _0xc7dfx22["push"](this["getGround"](this["hero"]["rowNum"] + 2, this["hero"]["columnNum"] - 1));
    for (var _0xc7dfxa = 0; _0xc7dfxa < _0xc7dfx22["length"]; _0xc7dfxa++) {
        var _0xc7dfx23 = _0xc7dfx22[_0xc7dfxa];
        if (_0xc7dfx23) {
            _0xc7dfx23["damage"](99)
        };
    };
    var _0xc7dfx24 = this["hero"]["view"]["localToGlobal"](0, 0);
    var _0xc7dfx25 = this["effectsContainer"]["globalToLocal"](_0xc7dfx24["x"], _0xc7dfx24["y"]);
    this["explosionAnim"]["gotoAndPlay"]("explosion");
    this["explosionAnim"]["x"] = _0xc7dfx25["x"];
    this["explosionAnim"]["y"] = _0xc7dfx25["y"];
    this["effectsContainer"]["addChild"](this["explosionAnim"]);
    this["hero"]["rowNum"] = this["hero"]["rowNum"] + 1;
    this["hero"]["updateMove"]();
    this["updateCamera"]();
    soundManager["playSound"]("boom");
};
GamePage["prototype"]["initControls"] = function() {
    var _0xc7dfxc = this;
    var _0xc7dfx26 = 38;
    var _0xc7dfx27 = 40;
    var _0xc7dfx28 = 13;
    var _0xc7dfx29 = 32;
    var _0xc7dfx2a = 37;
    var _0xc7dfx2b = 39;
    var _0xc7dfx2c = 87;
    var _0xc7dfx2d = 83;
    var _0xc7dfx2e = 65;
    var _0xc7dfx2f = 68;
    var _0xc7dfx30 = 82;
    var _0xc7dfx31 = [];

    function _0xc7dfx32(_0xc7dfx16) {
        if (!_0xc7dfx16) {
            var _0xc7dfx16 = window["event"]
        };
        _0xc7dfx16["preventDefault"]();
        log("key pressed");
        if (!gamePage["gameStarted"]) {
            return
        };
        _0xc7dfx31[_0xc7dfx16["keyCode"]] = true;
        if (_0xc7dfx31[_0xc7dfx27] && _0xc7dfx31[_0xc7dfx2a]) {
            _0xc7dfxc["hero"]["setMoveDirection"]("dl")
        } else {
            if (_0xc7dfx31[_0xc7dfx27] && _0xc7dfx31[_0xc7dfx2b]) {
                _0xc7dfxc["hero"]["setMoveDirection"]("dr")
            } else {
                if (_0xc7dfx31[_0xc7dfx27]) {
                    _0xc7dfxc["hero"]["setMoveDirection"]("d")
                } else {
                    if (_0xc7dfx31[_0xc7dfx2a]) {
                        _0xc7dfxc["hero"]["setMoveDirection"]("l")
                    } else {
                        if (_0xc7dfx31[_0xc7dfx2b]) {
                            _0xc7dfxc["hero"]["setMoveDirection"]("r")
                        }
                    }
                }
            }
        };
        if (_0xc7dfx31[_0xc7dfx29]) {
            _0xc7dfxc["tryDoBomb"]()
        };
    }

    function _0xc7dfx33(_0xc7dfx16) {
        log("key released");
        _0xc7dfx31[_0xc7dfx16["keyCode"]] = false;
        if (!_0xc7dfx16) {
            var _0xc7dfx16 = window["event"]
        };
        _0xc7dfx16["preventDefault"]();
    }
    window["addEventListener"]("keydown", _0xc7dfx32, false);
    window["addEventListener"]("keyup", _0xc7dfx33, false);
    this["bgHidden"]["on"]("mousedown", function(_0xc7dfx16) {
        _0xc7dfxc["updateMoveDirection"](_0xc7dfx16)
    });
    this["bgHidden"]["on"]("pressup", function(_0xc7dfx16) {
        _0xc7dfxc["updateMoveDirection"](_0xc7dfx16)
    });
};
GamePage["prototype"]["restartGame"] = function() {
    gamePage["startGame"]()
};
GamePage["prototype"]["startGame"] = function() {
    var _0xc7dfxc = this;
    this["view"]["y"] = 0;
    this["mainContainer"]["y"] = -this["offSetY"];
    this["hero"]["updateMove"](true);
    TweenMax["from"](this["hero"]["view"], 3, {
        x: 0,
        onComplete: function() {
            gamePage["onGameStarted"]()
        }
    });
    this["hero"]["addToStage"]();
    this["updateContainersVisible"]();
};
GamePage["prototype"]["showAllContainers"] = function() {
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["bgContainersArr"]["length"]; _0xc7dfxa++) {
        var _0xc7dfx34 = this["bgContainersArr"][_0xc7dfxa];
        _0xc7dfx34["visible"] = true;
    }
};
GamePage["prototype"]["onGameStarted"] = function() {
    this["gameStarted"] = true;
    this["bombButton"]["view"]["visible"] = true;
    this["energyProgress"]["view"]["visible"] = true;
    this["heightControls"]["visible"] = true;
};
GamePage["prototype"]["updateMoveDirection"] = function(_0xc7dfx16) {
    if (!this["gameStarted"]) {
        return
    };
    var _0xc7dfx35 = this["hero"]["view"]["localToGlobal"](0, 0);
    var _0xc7dfx36 = "s";
    var _0xc7dfx37 = _0xc7dfx16["stageX"];
    var _0xc7dfx38 = _0xc7dfx16["stageY"];
    if (_0xc7dfx38 < _0xc7dfx35["y"] + 100) {
        if (_0xc7dfx37 < _0xc7dfx35["x"]) {
            _0xc7dfx36 = "l"
        };
        if (_0xc7dfx37 > _0xc7dfx35["x"]) {
            _0xc7dfx36 = "r"
        };
    } else {
        if (_0xc7dfx37 < 0.33 * $width) {
            _0xc7dfx36 = "dl"
        } else {
            if (_0xc7dfx37 < 0.66 * $width) {
                _0xc7dfx36 = "d"
            } else {
                _0xc7dfx36 = "dr"
            }
        };
        var _0xc7dfx39 = _0xc7dfx37 - _0xc7dfx35["x"];
        if (_0xc7dfx39 > 50) {
            _0xc7dfx36 = "dr"
        } else {
            if (_0xc7dfx39 > 50) {
                _0xc7dfx36 = "dr"
            } else {
                if (_0xc7dfx39 < -50) {
                    _0xc7dfx36 = "dl"
                } else {
                    if (_0xc7dfx39 < -50) {
                        _0xc7dfx36 = "dl"
                    } else {
                        _0xc7dfx36 = "d"
                    }
                }
            }
        };
    };
    this["hero"]["setMoveDirection"](_0xc7dfx36);
};
GamePage["prototype"]["addItemEffect"] = function(_0xc7dfx3a) {
    var _0xc7dfxc = this;
    var _0xc7dfx3b = this["superPool"]["getItem"]("itemEffect");
    _0xc7dfx3b["addEventListener"]("animationend", function(_0xc7dfx16) {
        _0xc7dfx16["target"]["stop"]();
        _0xc7dfxc["superPool"]["returnObject"](_0xc7dfx3b, "itemEffect");
        _0xc7dfxc["effectsContainer"]["removeChild"](_0xc7dfx16["target"]);
    });
    var _0xc7dfx3c = _0xc7dfx3a["view"]["localToGlobal"](0, 0);
    var _0xc7dfx25 = this["effectsContainer"]["globalToLocal"](_0xc7dfx3c["x"], _0xc7dfx3c["y"]);
    _0xc7dfx3b["gotoAndPlay"]("itemEffect");
    _0xc7dfx3b["x"] = _0xc7dfx25["x"] + 45 / 2;
    _0xc7dfx3b["y"] = _0xc7dfx25["y"] + 45 / 2;
    _0xc7dfx3b["regY"] = _0xc7dfx3b["regX"] = 50;
    _0xc7dfx3b["scaleX"] = _0xc7dfx3b["scaleY"] = 2;
    this["effectsContainer"]["addChild"](_0xc7dfx3b);
};
GamePage["prototype"]["removeBlock"] = function(_0xc7dfx3a) {
    this["throwBlocks"](_0xc7dfx3a["groundType"]);
    if (_0xc7dfx3a["itemType"]) {
        if (_0xc7dfx3a["itemType"] == 1) {
            this["groundItems1Count"]++;
            this["addItemEffect"](_0xc7dfx3a);
            soundManager["playSound"]("item" + randRange(1, 3));
        };
        if (_0xc7dfx3a["itemType"] == 2) {
            this["groundItems2Count"]++;
            this["addItemEffect"](_0xc7dfx3a);
            soundManager["playSound"]("item" + randRange(1, 3));
        };
        if (_0xc7dfx3a["itemType"] == 3) {
            this["groundItems3Count"]++;
            this["addItemEffect"](_0xc7dfx3a);
            soundManager["playSound"]("item" + randRange(1, 3));
        };
        if (_0xc7dfx3a["itemType"] == 4) {
            this["energyProgress"]["addTime"](gameSettings["energyAdd"]);
            soundManager["playSound"]("energy");
        };
        if (_0xc7dfx3a["itemType"] == 5) {
            this["doBomb"]()
        };
    };
};
GamePage["prototype"]["createChest"] = function() {
    var _0xc7dfxc = this;
    this["chest"] = new createjs["Container"];
    this["chest"]["visible"] = false;
    this["chest"]["setVisible"] = function(_0xc7dfx3d) {
        if (_0xc7dfxc["chest"]["visible"] != _0xc7dfx3d) {
            _0xc7dfxc["chest"]["visible"] = _0xc7dfx3d;
            if (_0xc7dfxc["chest"]["visible"]) {
                TweenMax["to"](_0xc7dfx3f, 5, {
                    rotation: "360",
                    ease: Linear["easeNone"],
                    repeat: -1
                })
            } else {
                TweenMax["killTweensOf"](_0xc7dfxc["chest"]["lights"])
            };
        }
    };
    var _0xc7dfx3e = new createjs.Sprite(mainSheet, "chest");
    _0xc7dfx3e["scaleX"] = _0xc7dfx3e["scaleY"] = 1.3;
    _0xc7dfx3e["x"] = 275 / 2;
    _0xc7dfx3e["y"] = 275 / 2;
    _0xc7dfx3e["regX"] = _0xc7dfx3e["getBounds"]()["width"] / 2;
    _0xc7dfx3e["regY"] = _0xc7dfx3e["getBounds"]()["height"] / 2;
    var _0xc7dfx3f = new createjs.Sprite(mainSheet, "chestLights");
    _0xc7dfx3f["regX"] = 275 / 2;
    _0xc7dfx3f["regY"] = 275 / 2;
    _0xc7dfx3f["x"] = _0xc7dfx3f["regX"];
    _0xc7dfx3f["y"] = _0xc7dfx3f["regY"];
    this["chest"]["lights"] = _0xc7dfx3f;
    this["chest"]["regX"] = 275 / 2;
    this["chest"]["regY"] = 275 / 2;
    this["chest"]["rowsArr"] = [this["rowMax"] - 10, this["rowMax"] - 9, this["rowMax"] - 8, this["rowMax"] - 7];
    this["chest"]["columnsArr"] = [5, 6, 7, 8];
    this["chest"]["x"] = $width / 2;
    this["chest"]["y"] = (this["rowMax"] - 8) * this["rockHeight"];
    this["chest"]["addChild"](_0xc7dfx3f);
    this["chest"]["addChild"](_0xc7dfx3e);
    this["chest"]["setVisible"](true);
};
GamePage["prototype"]["createGrounds"] = function() {
    this["blocksArr"] = [];
    var _0xc7dfx40 = Math["ceil"](this["rowMax"] / this["rowsPerContainer"]);
    for (var _0xc7dfxa = 0; _0xc7dfxa < _0xc7dfx40; _0xc7dfxa++) {
        this["bgContainersArr"]["push"](new createjs.Container)
    };
    var _0xc7dfx41 = 0;
    var _0xc7dfx42 = this["bgContainersArr"][_0xc7dfx41];
    var _0xc7dfx43 = 0;
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["rowMax"]; _0xc7dfxa++) {
        this["blocksArr"][_0xc7dfxa] = [];
        for (var _0xc7dfx44 = 0; _0xc7dfx44 < this["columnsMax"]; _0xc7dfx44++) {
            var _0xc7dfx3a = new Ground(_0xc7dfxa, _0xc7dfx44);
            this["blocksArr"][_0xc7dfxa][_0xc7dfx44] = _0xc7dfx3a;
        };
        if (_0xc7dfx43 >= this["rowsPerContainer"]) {
            _0xc7dfx43 = 0;
            _0xc7dfx41++;
            _0xc7dfx42 = this["bgContainersArr"][_0xc7dfx41];
            _0xc7dfx42["y"] = _0xc7dfx41 * this["rowsPerContainer"] * this["rockHeight"];
        };
        _0xc7dfx43++;
    };
};
GamePage["prototype"]["updateGrounds"] = function() {
    log("GamePage.prototype.updateGrounds");
    clearDisplayObject(this["bgGroundContainerTop"]);
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["bgContainersArr"]["length"]; _0xc7dfxa++) {
        clearDisplayObject(this["bgContainersArr"][_0xc7dfxa])
    };
    var _0xc7dfx41 = 0;
    var _0xc7dfx42 = this["bgContainersArr"][_0xc7dfx41];
    var _0xc7dfx43 = 0;
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["rowMax"]; _0xc7dfxa++) {
        for (var _0xc7dfx44 = 0; _0xc7dfx44 < this["columnsMax"]; _0xc7dfx44++) {
            var _0xc7dfx3a = this["blocksArr"][_0xc7dfxa][_0xc7dfx44];
            _0xc7dfx3a["recreate"]();
            _0xc7dfx3a["setPosition"](_0xc7dfx44 * gamePage["rockWidth"], _0xc7dfx43 * gamePage["rockHeight"]);
            _0xc7dfx42["addChild"](_0xc7dfx3a["view"]);
        };
        _0xc7dfx43++;
        if (_0xc7dfx43 >= this["rowsPerContainer"]) {
            _0xc7dfx43 = 0;
            _0xc7dfx41++;
            _0xc7dfx42 = this["bgContainersArr"][_0xc7dfx41];
        };
    };
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["bgContainersArr"]["length"]; _0xc7dfxa++) {
        var _0xc7dfx34 = this["bgContainersArr"][_0xc7dfxa];
        _0xc7dfx34["cache"](0, 0, $width, this["rowsPerContainer"] * this["rockHeight"]);
        this["bgGroundContainer"]["addChild"](_0xc7dfx34);
    };
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["rowMax"]; _0xc7dfxa++) {
        for (var _0xc7dfx44 = 0; _0xc7dfx44 < this["columnsMax"]; _0xc7dfx44++) {
            var _0xc7dfx3a = this["blocksArr"][_0xc7dfxa][_0xc7dfx44];
            _0xc7dfx3a["dispose"]();
        }
    };
    this["bgGroundContainer"]["addChild"](this["chest"]);
};
GamePage["prototype"]["updateContainersVisible"] = function() {
    var _0xc7dfx45 = this["hero"]["rowNum"] + Math["ceil"]((this["offSetY"]) / this["rockHeight"]) + 2;
    var _0xc7dfx46 = this["hero"]["rowNum"] - Math["ceil"](($height - this["offSetY"]) / this["rockHeight"]);
    _0xc7dfx46 -= 3;
    _0xc7dfx46 = Math["max"](0, _0xc7dfx46);
    var _0xc7dfx43 = this["bgContainersArr"]["length"];
    var _0xc7dfx47 = 0;
    for (var _0xc7dfxa = 0; _0xc7dfxa < _0xc7dfx43; _0xc7dfxa++) {
        var _0xc7dfx34 = this["bgContainersArr"][_0xc7dfxa];
        _0xc7dfx34["visible"] = true;
        if ((_0xc7dfxa + 1) * this["rowsPerContainer"] < _0xc7dfx46) {
            _0xc7dfx34["visible"] = false;
            _0xc7dfx47++;
        };
        if (_0xc7dfxa * this["rowsPerContainer"] > _0xc7dfx45) {
            _0xc7dfx34["visible"] = false;
            _0xc7dfx47++;
        };
    };
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["deadGroundsArr"]["length"]; _0xc7dfxa++) {
        var _0xc7dfx3a = this["deadGroundsArr"][_0xc7dfxa];
        if (_0xc7dfx3a["row"] < _0xc7dfx46 - 2) {
            this["deadGroundsArr"]["splice"](_0xc7dfxa, 1);
            this["bgGroundContainerTop"]["removeChild"](_0xc7dfx3a["view"]);
        };
    };
    if (this["hero"]["rowNum"] < this["rowMax"] - 24) {
        this["chest"]["setVisible"](false)
    } else {
        this["chest"]["setVisible"](true)
    };
};
GamePage["prototype"]["update"] = function(_0xc7dfx16) {
    if (this["gameStarted"]) {
        this["bombButton"]["update"]();
        this["hero"]["update"]();
        this["shaker"]["update"]();
        this["energyProgress"]["update"](_0xc7dfx16["delta"]);
        this["updateFallingBlocks"]();
    }
};
GamePage["prototype"]["updateTF"] = function() {};
GamePage["prototype"]["gameOver"] = function() {
    // GameAPI["GameBreak"]["request"](function() {}, function() {});
    this["gameStarted"] = false;
    this["hero"]["anim"]["stop"]();
    this["view"]["cache"](0, 0, $width, $height);
    showResultsPage();
};
GamePage["prototype"]["updateHeightIndicator"] = function() {
    var _0xc7dfx3d = this["hero"]["rowNum"] * this["heightPerRow"];
    if (_0xc7dfx3d < 0) {
        _0xc7dfx3d = 0
    };
    this["currentHeight"] = _0xc7dfx3d;
    this["heightFont"]["text"] = this["currentHeight"] + "M";
};
GamePage["prototype"]["updateCamera"] = function() {
    if (this["gameStarted"]) {
        var _0xc7dfx48 = -this["hero"]["view"]["y"] - this["offSetY"];
        var _0xc7dfx49 = (this["rowMax"] * this["rockHeight"]) + this["groundContainer"]["y"] - $height;
        _0xc7dfx49 = _0xc7dfx49 * -1;
        if (_0xc7dfx48 < _0xc7dfx49) {
            _0xc7dfx48 = _0xc7dfx49
        };
        TweenMax["to"](this["mainContainer"], 0.5, {
            y: _0xc7dfx48
        });
    };
    this["updateContainersVisible"]();
    this["updateHeightIndicator"]();
};
GamePage["prototype"]["gameWin"] = function() {
    this["gameStarted"] = false;
    var _0xc7dfx4a = new createjs["Container"];
    var _0xc7dfxd = new createjs.Shape();
    _0xc7dfxd["graphics"]["beginFill"](bgColor)["drawRect"](0, 0, $width, $height);
    _0xc7dfxd["graphics"]["endFill"]();
    _0xc7dfxd["alpha"] = 0.8;
    _0xc7dfx4a["addChild"](_0xc7dfxd);
    var _0xc7dfx4b = new createjs.Sprite(mainSheet, "winPage");
    _0xc7dfx4a["addChild"](_0xc7dfx4b);
    this["view"]["addChild"](_0xc7dfx4a);
    var scorePlay68 = gameData["scores"];
    //updateShare(scorePlay68,4000);
    commonGameOver(4000);
    //Play68.setRankingLevelScoreDesc(scorePlay68,4000,Play68.rankingShowType.RANKING_SHOW);
    //soundManager["play\xokSound"]("win");
};
GamePage["prototype"]["getGround"] = function(_0xc7dfx4c, _0xc7dfx4d) {
    if (_0xc7dfx4c < 0 || _0xc7dfx4c > this["rowMax"] - 1 || _0xc7dfx4d < 0 && _0xc7dfx4d > this["columnsMax"] - 1) {
        return null
    } else {
        return this["blocksArr"][_0xc7dfx4c][_0xc7dfx4d]
    }
};
GamePage["prototype"]["throwBlocks"] = function(_0xc7dfx4e) {
    var _0xc7dfx4f;
    var _0xc7dfx25 = this["hero"]["view"]["localToGlobal"](0, 0);
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["particleCountPerGround"]; _0xc7dfxa++) {
        _0xc7dfx4f = this["superPool"]["getItem"]("particle" + _0xc7dfx4e);
        _0xc7dfx4f["dx"] = Math["round"](-20 + Math["random"]() * 40);
        _0xc7dfx4f["dy"] = Math["round"](-1 * Math["random"]() * 30);
        _0xc7dfx4f["x"] = _0xc7dfx25["x"];
        _0xc7dfx4f["y"] = _0xc7dfx25["y"];
        _0xc7dfx4f["rotation"] = randRange(0, 300);
        this["fallingBlocks"]["push"](_0xc7dfx4f);
        _0xc7dfx4f["scaleX"] = _0xc7dfx4f["scaleY"] = 0.8;
        this["effectsContainer"]["addChildAt"](_0xc7dfx4f, 0);
    };
};
GamePage["prototype"]["updateFallingBlocks"] = function() {
    var _0xc7dfxb;
    var _0xc7dfx50;
    var _0xc7dfx51;
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["fallingBlocks"]["length"]; _0xc7dfxa++) {
        _0xc7dfxb = this["fallingBlocks"][_0xc7dfxa];
        _0xc7dfx50 = _0xc7dfxb["dx"];
        _0xc7dfx51 = _0xc7dfxb["dy"];
        if (!_0xc7dfx50) {
            _0xc7dfx50 = 0
        };
        if (!_0xc7dfx51) {
            _0xc7dfx51 = 0
        };
        _0xc7dfxb["x"] += _0xc7dfx50;
        _0xc7dfxb["y"] += _0xc7dfx51;
        _0xc7dfxb["dy"] += 2;
        if (_0xc7dfxb["x"] > 320) {
            _0xc7dfxb["rotation"] += 4
        } else {
            _0xc7dfxb["rotation"] += -4
        };
        _0xc7dfxb["x"] = _0xc7dfxb["x"];
        _0xc7dfxb["y"] = _0xc7dfxb["y"];
        _0xc7dfxb["rotation"] = _0xc7dfxb["rotation"];
        if (_0xc7dfxb["y"] > $height) {
            this["fallingBlocks"]["splice"](_0xc7dfxa, 1);
            this["superPool"]["returnObject"](_0xc7dfxb, _0xc7dfxb["id"]);
            this["effectsContainer"]["removeChild"](_0xc7dfxb);
        };
    };
};
var ParticlePool = function() {
    this["dict"];
    this["view"] = new createjs.Sprite(mainSheet);
};
ParticlePool["prototype"]["dispose"] = function() {
    if (this["view"]["parent"]) {
        this["view"]["parent"]["removeChild"](this["view"])
    }
};
var ItemEffectPool = function() {
    this["view"] = new createjs.Sprite(mainSheet)
};
ItemEffectPool["prototype"]["dispose"] = function() {
    if (this["view"]["parent"]) {
        this["view"]["parent"]["removeChild"](this["view"])
    }
};
var CrackPool = function() {
    this["view"] = new createjs.Sprite(mainSheet)
};
CrackPool["prototype"]["dispose"] = function() {
    if (this["view"]["parent"]) {
        this["view"]["parent"]["removeChild"](this["view"])
    }
};
var GroundItemPool = function() {
    this["view"] = new createjs.Sprite(mainSheet)
};
GroundItemPool["prototype"]["dispose"] = function() {
    if (this["view"]["parent"]) {
        this["view"]["parent"]["removeChild"](this["view"])
    }
};
var ProgressBar = function() {
    this["time"] = 1;
    this["timeLeft"] = 1;
    this["maxTime"] = gameSettings["upgrade"]["energyValue"][3];
    this["view"] = new createjs["Container"];
    var _0xc7dfxd = new createjs.Sprite(mainSheet, "progress_bar_bg");
    this["progress_bar"] = new createjs.Sprite(mainSheet, "progress_bar");
    this["progress_bar"]["x"] = 20;
    this["progress_bar"]["y"] = 46;
    this["progressWidth"] = this["progress_bar"]["getBounds"]()["width"];
    this["maskShape"] = new createjs.Shape();
    this["maskShape"]["x"] = this["progress_bar"]["x"];
    this["maskShape"]["y"] = this["progress_bar"]["y"];
    this["maskShape"]["graphics"]["clear"]();
    this["maskShape"]["graphics"]["beginFill"]("#FF0000")["drawRect"](0, 0, this["progressWidth"], 24);
    this["maskShape"]["graphics"]["endFill"]();
    this["progress_bar"]["mask"] = this["maskShape"];
    this["view"]["addChild"](_0xc7dfxd);
    this["view"]["addChild"](this["progress_bar"]);
    this["updateView"]();
};
ProgressBar["prototype"]["update"] = function(_0xc7dfx57) {
    this["timeLeft"] -= 1 / 30 * 1000;
    this["updateView"]();
};
ProgressBar["prototype"]["updateView"] = function() {
    var _0xc7dfx58 = this["timeLeft"] / this["maxTime"];
    this["setProgress"](_0xc7dfx58);
    if (_0xc7dfx58 <= 0) {
        gamePage["gameOver"]()
    };
};
ProgressBar["prototype"]["setTime"] = function(_0xc7dfx57) {
    this["time"] = _0xc7dfx57;
    this["timeLeft"] = this["time"];
    this["updateView"]();
};
ProgressBar["prototype"]["addTime"] = function(_0xc7dfx57) {
    this["timeLeft"] += _0xc7dfx57;
    this["timeLeft"] = Math["min"](this["timeLeft"], this["maxTime"]);
};
ProgressBar["prototype"]["setProgress"] = function(_0xc7dfx58) {
    this["maskShape"]["scaleX"] = _0xc7dfx58
};
var BombButton = function() {
    var _0xc7dfxc = this;
    this["view"] = new createjs["Container"];
    this["button"] = new createjs.Sprite(mainSheet, "bomb_active");
    this["view"]["addChild"](this["button"]);
    this["view"]["addEventListener"]("mousedown", function(_0xc7dfx16) {
        if (gamePage["gameStarted"]) {
            gamePage["tryDoBomb"]();
            _0xc7dfxc["update"]();
        }
    });
    this["bombText"] = new createjs.BitmapText("", mainSheet);
    this["bombText"]["scaleX"] = this["bombText"]["scaleY"] = 0.5;
    this["bombText"]["x"] = 43;
    this["bombText"]["y"] = 105;
    this["view"]["addChild"](this["bombText"]);
};
BombButton["prototype"]["update"] = function() {
    if (gamePage["gameStarted"]) {
        if (gamePage["bombCount"] > 0) {
            this["button"]["gotoAndStop"]("bomb_active")
        } else {
            this["button"]["gotoAndStop"]("bomb_inactive")
        }
    };
    this["bombText"]["text"] = "" + gamePage["bombCount"];
};
var Shaker = function(_0xc7dfx5b, _0xc7dfx5c, _0xc7dfx5d, _0xc7dfx5e, _0xc7dfx5f, _0xc7dfx60, _0xc7dfx61) {
    if (typeof _0xc7dfx5e === "undefined") {
        _0xc7dfx5e = 80
    };
    if (typeof _0xc7dfx5f === "undefined") {
        _0xc7dfx5f = 0.9
    };
    if (typeof _0xc7dfx60 === "undefined") {
        _0xc7dfx60 = false
    };
    if (typeof _0xc7dfx61 === "undefined") {
        _0xc7dfx61 = 1
    };
    var _0xc7dfx62 = this;
    this["isShaking"] = false;
    this["degRad"] = Math["PI"] / 180;
    this["w"] = _0xc7dfx5c / 2;
    this["h"] = _0xc7dfx5d / 2;
    this["hipotenuse"] = Math["sqrt"](this["w"] * this["w"] + this["h"] * this["h"]);
    this["addAngle"] = Math["atan2"](this["h"], this["w"]);
    this["defPower"] = _0xc7dfx5e;
    this["frame"] = 0;
    this["decay"] = _0xc7dfx5f;
    this["mc"] = _0xc7dfx5b;
    this["_shakeType"] = _0xc7dfx61;
    this["_autoUpdate"] = _0xc7dfx60;
    if (this["_autoUpdate"]) {
        createjs["Ticker"]["addEventListener"]("tick", function(_0xc7dfx63) {
            return _0xc7dfx62["update"](_0xc7dfx63)
        })
    };
};
Shaker["prototype"]["startShake"] = function(_0xc7dfx64) {
    if (typeof _0xc7dfx64 === "undefined") {
        _0xc7dfx64 = 1
    };
    this["isShaking"] = true;
    this["power"] = this["defPower"] * _0xc7dfx64;
};
Shaker["prototype"]["update"] = function(_0xc7dfx16) {
    if (typeof _0xc7dfx16 === "undefined") {
        _0xc7dfx16 = null
    };
    this["frame"]++;
    if (this["isShaking"]) {
        if (this["_shakeType"] == 0) {
            this["shakeRotate"]()
        } else {
            if (this["_shakeType"] == 1) {
                this["verticalShake"]()
            }
        }
    } else {
        this["mc"]["rotation"] = 0;
        this["mc"]["y"] = 0;
        this["mc"]["x"] = 0;
    };
};
Shaker["prototype"]["shakeRotate"] = function() {
    this["mc"]["rotation"] = Math["sin"](this["frame"] * 1) * (this["power"] / 18);
    this["mc"]["y"] = this["h"] - this["hipotenuse"] * Math["sin"](this["mc"]["rotation"] * this["degRad"] + this["addAngle"]);
    this["mc"]["x"] = this["w"] - this["hipotenuse"] * Math["cos"](this["mc"]["rotation"] * this["degRad"] + this["addAngle"]);
    this["power"] *= this["decay"];
    if (this["power"] < 4) {
        this["power"] = 0;
        this["isShaking"] = false;
    };
};
Shaker["prototype"]["verticalShake"] = function() {
    this["mc"]["y"] = Math["sin"](this["frame"] * 1) * (this["power"] / 2);
    this["power"] *= this["decay"];
    if (this["power"] < 4) {
        this["power"] = 0;
        this["isShaking"] = false;
    };
};
Shaker["prototype"]["destroy"] = function() {
    this["mc"] = null;
    this["isShaking"] = false;
};
var ResultsPage = function() {
    var _0xc7dfxc = this;
    this["view"] = new createjs["Container"];
    var _0xc7dfxd = new createjs.Shape();
    _0xc7dfxd["graphics"]["beginFill"](bgColor)["drawRect"](0, 0, $width, $height);
    _0xc7dfxd["graphics"]["endFill"]();
    _0xc7dfxd["alpha"] = 0.8;
    this["view"]["addChild"](_0xc7dfxd);
    var _0xc7dfxd = new createjs.Sprite(mainSheet, "resultsBg");
    _0xc7dfxd["x"] = 50;
    _0xc7dfxd["y"] = 50;
    this["view"]["addChild"](_0xc7dfxd);
    var _0xc7dfx66 = new createjs.Sprite(mainSheet, "okBtn");
    _0xc7dfx66["addEventListener"]("click", function() {
        pagesContainer["removeChild"](_0xc7dfxc["view"]);
        showUpgradesPage();
    });
    _0xc7dfx66["x"] = 350;
    _0xc7dfx66["y"] = 730;
    this["view"]["addChild"](_0xc7dfx66);
    this["groundItem1Text"] = new createjs.BitmapText("10", font2Sheet);
    this["groundItem1Text"]["x"] = 100;
    this["groundItem1Text"]["y"] = 220;
    this["groundItem1TotalText"] = new createjs.BitmapText("100", mainSheet);
    this["groundItem1TotalText"]["x"] = 360;
    this["groundItem1TotalText"]["y"] = 220 + 75 / 2;
    this["view"]["addChild"](this["groundItem1Text"]);
    this["view"]["addChild"](this["groundItem1TotalText"]);
    this["groundItem2Text"] = new createjs.BitmapText("20", font2Sheet);
    this["groundItem2Text"]["x"] = 100;
    this["groundItem2Text"]["y"] = 350;
    this["groundItem2TotalText"] = new createjs.BitmapText("200", mainSheet);
    this["groundItem2TotalText"]["x"] = 360;
    this["groundItem2TotalText"]["y"] = 350 + 75 / 2;
    this["view"]["addChild"](this["groundItem2Text"]);
    this["view"]["addChild"](this["groundItem2TotalText"]);
    this["groundItem3Text"] = new createjs.BitmapText("30", font2Sheet);
    this["groundItem3Text"]["x"] = 100;
    this["groundItem3Text"]["y"] = 480;
    this["groundItem3TotalText"] = new createjs.BitmapText("300", mainSheet);
    this["groundItem3TotalText"]["x"] = 360;
    this["groundItem3TotalText"]["y"] = 480 + 75 / 2;
    this["view"]["addChild"](this["groundItem3Text"]);
    this["view"]["addChild"](this["groundItem3TotalText"]);
    this["height4Text"] = new createjs.BitmapText("350", mainSheet);
    this["height4Text"]["x"] = 360;
    this["height4Text"]["y"] = 610 + 75 / 2;
    this["view"]["addChild"](this["height4Text"]);
    this["totalPriceText"] = new createjs.BitmapText("350", mainSheet);
    this["totalPriceText"]["x"] = 100;
    this["totalPriceText"]["y"] = 810 + 75 / 2;
    this["view"]["addChild"](this["totalPriceText"]);
};
ResultsPage["prototype"]["update"] = function() {
    this["groundItem1Text"]["text"] = "" + gamePage["groundItems1Count"];
    this["groundItem2Text"]["text"] = "" + gamePage["groundItems2Count"];
    this["groundItem3Text"]["text"] = "" + gamePage["groundItems3Count"];
    this["groundItem1TotalText"]["text"] = "" + (gamePage["groundItems1Count"] * gameSettings["bonusItems"]["groundItem1"]);
    this["groundItem2TotalText"]["text"] = "" + (gamePage["groundItems2Count"] * gameSettings["bonusItems"]["groundItem2"]);
    this["groundItem3TotalText"]["text"] = "" + (gamePage["groundItems3Count"] * gameSettings["bonusItems"]["groundItem3"]);
    this["height4Text"]["text"] = "" + (gamePage["currentHeight"] * gameSettings["scoresPerHeight"]);
    var _scores = (parseInt(this["height4Text"]["text"]) + parseInt(this["groundItem1TotalText"]["text"]) + parseInt(this["groundItem2TotalText"]["text"]) + parseInt(this["groundItem3TotalText"]["text"]));
    this["totalPriceText"]["text"] = "" + _scores;
    gameData["scores"] += _scores;
    // GameAPI["Score"]["submit"](_scores);
    console.log('submit :' + _scores);
    var scorePlay68 = _scores;
    var d = parseInt(this["height4Text"]["text"]);
    //console.log(d);
    commonGameOver(d);
    //updateShare(scorePlay68,d);
    //Play68.setRankingLevelScoreDesc(scorePlay68,d,Play68.rankingShowType.RANKING_SHOW);
    fixTextSize(this["groundItem1TotalText"]);
    fixTextSize(this["groundItem2TotalText"]);
    fixTextSize(this["groundItem3TotalText"]);
    fixTextSize(this["height4Text"]);
    fixTextSize(this["totalPriceText"]);
};

function fixTextSize(_0xc7dfx69) {
    var _0xc7dfx18 = 1;
    if (_0xc7dfx69["text"]["length"] == 4) {
        _0xc7dfx18 = 0.8
    } else {
        if (_0xc7dfx69["text"]["length"] == 5) {
            _0xc7dfx18 = 0.65
        } else {
            if (_0xc7dfx69["text"]["length"] == 6) {
                _0xc7dfx18 = 0.6
            } else {
                if (_0xc7dfx69["text"]["length"] == 7) {
                    _0xc7dfx18 = 0.55
                }
            }
        }
    };
    _0xc7dfx69["regY"] = 75 / 2;
    _0xc7dfx69["scaleX"] = _0xc7dfx69["scaleY"] = _0xc7dfx18;
}
ResultsPage["prototype"]["show"] = function() {
    pagesContainer["addChild"](this["view"]);
    this["update"]();
};
var Ground = function(_0xc7dfx4c, _0xc7dfx4d) {
    this["row"] = _0xc7dfx4c;
    this["column"] = _0xc7dfx4d;
    this["bgContainerY"] = 0;
    this["viewX"] = 0;
    this["viewY"] = 0;
};
Ground["prototype"]["updateData"] = function() {
    this["groundType"] = gameSettings["ground"]["getGroundType"](this["row"]);
    this["lives"] = gameSettings["groundLives"][this["groundType"] - 1];
    this["basicLives"] = this["lives"];
    this["itemType"] = null;
    this["damaged"] = false;
    this["removeCrack"]();
    this["removeItem"]();
    this["isChest"] = false;
    if (gamePage["chest"]["rowsArr"]["indexOf"](this["row"]) >= 0 && gamePage["chest"]["columnsArr"]["indexOf"](this["column"]) >= 0) {
        this["isChest"] = true
    } else {
        this["itemType"] = gameSettings["ground"]["getItemType"](this["row"])
    };
};
Ground["prototype"]["recreate"] = function() {
    this["updateData"]();
    this["createView"]();
};
Ground["prototype"]["setPosition"] = function(_0xc7dfx6b, _0xc7dfx6c) {
    this["viewX"] = _0xc7dfx6b;
    this["viewY"] = _0xc7dfx6c;
    this["view"]["x"] = this["viewX"];
    this["view"]["y"] = this["viewY"];
};
Ground["prototype"]["createView"] = function() {
    if (this["view"]) {
        clearDisplayObject(this["view"]);
        this["view"] = null;
    };
    this["view"] = new createjs["Container"];
    this["ground"] = new createjs.Sprite(mainSheet);
    this["view"]["x"] = this["viewX"];
    this["view"]["y"] = this["viewY"];
    this["ground"]["gotoAndStop"]("rock" + this["groundType"]);
    this["view"]["addChild"](this["ground"]);
    this["updateView"]();
    if (this["isChest"]) {
        this["ground"]["gotoAndStop"]("rock0")
    } else {
        this["addItem"]()
    };
};
Ground["prototype"]["addItem"] = function() {
    var _0xc7dfx22 = ["groundItem1", "groundItem2", "groundItem3", "groundItem4", "groundItem5"];
    if (this["itemType"] == null) {
        return
    };
    this["item"] = gamePage["superPool"]["getItem"](_0xc7dfx22[this["itemType"] - 1]);
    this["item"]["id"] = _0xc7dfx22[this["itemType"] - 1];
    this["item"]["x"] = gamePage["rockWidth"] / 2;
    this["item"]["y"] = gamePage["rockHeight"] / 2;
    this["item"]["regX"] = 30 / 2;
    this["item"]["regY"] = 30 / 2;
    if (this["itemType"] == 4) {
        this["item"]["regX"] = 37 / 2;
        this["item"]["regY"] = 39 / 2;
    };
    if (this["itemType"] == 5) {
        this["item"]["regX"] = 35 / 2;
        this["item"]["regY"] = 45 / 2;
    };
    this["view"]["addChild"](this["item"]);
};
Ground["prototype"]["dispose"] = function() {
    this["bgContainerY"] = this["view"]["parent"]["y"];
    clearDisplayObject(this["view"]);
    this["ground"] = null;
    this["removeCrack"]();
    this["removeItem"]();
};
Ground["prototype"]["damage"] = function(_0xc7dfx6d) {
    if (this["isChest"]) {
        gamePage["gameWin"]();
        return;
    };
    if (this["isDead"]() == false) {
        this["lives"] -= _0xc7dfx6d;
        if (this["isDead"]() == true) {
            gamePage["removeBlock"](this)
        };
    };
    this["updateView"]();
};
Ground["prototype"]["isDead"] = function() {
    return this["lives"] <= 0
};
Ground["prototype"]["removeCrack"] = function() {
    if (this["crack"]) {
        this["crack"]["pdispose"]();
        this["crack"] = null;
    }
};
Ground["prototype"]["removeItem"] = function() {
    if (this["item"]) {
        gamePage["superPool"]["returnObject"](this["item"], this["item"]["id"]);
        if (this["item"]["parent"]) {
            this["item"]["parent"]["removeChild"](this["item"])
        };
        this["item"] = null;
    }
};
Ground["prototype"]["updateView"] = function() {
    if (this["ground"] == null) {
        this["createView"]()
    };
    if (this["lives"] < this["basicLives"]) {
        if (this["damaged"] == false) {
            this["damaged"] = true;
            var _0xc7dfx48 = this["view"]["y"] + this["bgContainerY"];
            this["view"]["y"] = _0xc7dfx48;
            gamePage["bgGroundContainerTop"]["addChild"](this["view"]);
            gamePage["deadGroundsArr"]["push"](this);
            this["crack"] = CrackPool["pnew"]();
            this["view"]["addChildAt"](this["crack"]["view"], 1);
            this["crack"]["view"]["gotoAndStop"]("rock_crack/0000");
        }
    };
    if (this["lives"] <= 0) {
        this["ground"]["gotoAndStop"]("rock0");
        this["removeCrack"]();
        this["removeItem"]();
    } else {
        if (this["lives"] <= this["basicLives"] * 0.7) {
            this["crack"]["view"]["gotoAndStop"]("rock_crack/0001")
        } else {
            if (this["lives"] <= this["basicLives"] * 0.4) {
                this["crack"]["view"]["gotoAndStop"]("rock_crack/0002")
            }
        }
    };
};
var Hero = function() {
    var _0xc7dfxc = this;
    this["view"] = new createjs["Container"];
    this["anim"] = new createjs.Sprite(heroSheet, "hero_move1");
    this["view"]["addChild"](this["anim"]);
};
Hero["prototype"]["clearAll"] = function() {
    this["anim"]["scaleX"] = 1;
    this["rowNum"] = -1;
    this["columnNum"] = Math["floor"](gamePage["columnsMax"] / 2);
    this["hitGroundsArr"] = [];
    this["moveDirection"] = "d";
    this["timeValue"] = 0;
    this["updateHero"]();
    this["findHitGrounds"]();
};
Hero["prototype"]["update"] = function() {
    var _0xc7dfx6f = this["getDownGround"]();
    if (_0xc7dfx6f && _0xc7dfx6f["isDead"]() && this["hitGroundsArr"]["length"] != 3) {
        this["rowNum"] = _0xc7dfx6f["row"];
        this["findHitGrounds"]();
        this["updateMove"]();
        gamePage["updateCamera"]();
    };
    this["timeValue"]++;
    if (this["timeValue"] > gameSettings["hitSpeed"][gameData["upgrade"]["pick"] - 1]) {
        this["timeValue"] = 0;
        this["doHit"]();
    };
};
Hero["prototype"]["setMoveDirection"] = function(_0xc7dfx70) {
    if (this["moveDirection"] != _0xc7dfx70) {
        this["moveDirection"] = _0xc7dfx70;
        this["findHitGrounds"]();
        if (this["moveDirection"] == "l" || this["moveDirection"] == "dl" || this["moveDirection"] == "dll") {
            this["anim"]["scaleX"] = -1;
            this["setCorrectPosition"]();
        } else {
            this["anim"]["scaleX"] = 1;
            this["setCorrectPosition"]();
        };
    }
};
Hero["prototype"]["findHitGrounds"] = function() {
    var _0xc7dfx71 = this["moveDirection"];
    var _0xc7dfx22 = [];
    if (_0xc7dfx71 == "dl") {
        _0xc7dfx22 = [this["getLeftCornerGround"](), this["getDownGround"](), this["getLeftGround"]()]
    };
    if (_0xc7dfx71 == "dr") {
        _0xc7dfx22 = [this["getRightCornerGround"](), this["getDownGround"](), this["getRightGround"]()]
    };
    if (_0xc7dfx71 == "d") {
        _0xc7dfx22 = [this["getDownGround"]()]
    };
    if (_0xc7dfx71 == "r") {
        _0xc7dfx22 = [this["getRightGround"]()]
    };
    if (_0xc7dfx71 == "l") {
        _0xc7dfx22 = [this["getLeftGround"]()]
    };
    this["hitGroundsArr"] = [];
    for (var _0xc7dfxa = 0; _0xc7dfxa < _0xc7dfx22["length"]; _0xc7dfxa++) {
        var _0xc7dfx23 = _0xc7dfx22[_0xc7dfxa];
        if (_0xc7dfx23) {
            this["hitGroundsArr"]["push"](_0xc7dfx23)
        };
    };
};
Hero["prototype"]["getDownGround"] = function() {
    return gamePage["getGround"](this["rowNum"] + 1, this["columnNum"])
};
Hero["prototype"]["getLeftGround"] = function() {
    return gamePage["getGround"](this["rowNum"], this["columnNum"] - 1)
};
Hero["prototype"]["getRightGround"] = function() {
    return gamePage["getGround"](this["rowNum"], this["columnNum"] + 1)
};
Hero["prototype"]["getLeftCornerGround"] = function() {
    return gamePage["getGround"](this["rowNum"] + 1, this["columnNum"] - 1)
};
Hero["prototype"]["getRightCornerGround"] = function() {
    return gamePage["getGround"](this["rowNum"] + 1, this["columnNum"] + 1)
};
Hero["prototype"]["updateHero"] = function() {
    this["anim"]["gotoAndPlay"]("hero_move" + (gameData["upgrade"]["pick"]));
    this["updateMove"]();
    this["setCorrectPosition"]();
};
Hero["prototype"]["setCorrectPosition"] = function() {
    if (this["anim"]["scaleX"] == -1) {
        this["anim"]["regX"] = 50 / 2;
        this["anim"]["regY"] = 100 / 2;
    } else {
        this["anim"]["regX"] = 90 / 2;
        this["anim"]["regY"] = 100 / 2;
    }
};
Hero["prototype"]["addToStage"] = function() {
    gamePage["groundContainer"]["addChild"](this["view"])
};
Hero["prototype"]["doHit"] = function() {
    var _0xc7dfx72 = false;
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["hitGroundsArr"]["length"]; _0xc7dfxa++) {
        var _0xc7dfx23 = this["hitGroundsArr"][_0xc7dfxa];
        if (_0xc7dfx23["isDead"]() == false) {
            var _0xc7dfx6d = gameSettings["upgrade"]["pickValue"][gameData["upgrade"]["pick"] - 1];
            if (this["hitGroundsArr"]["length"] > 1) {
                _0xc7dfx6d = _0xc7dfx6d / 2
            };
            _0xc7dfx23["damage"](_0xc7dfx6d);
        };
        if (_0xc7dfx23["isDead"]() == false) {
            _0xc7dfx72 = true
        };
    };
    if (_0xc7dfx72 == false) {
        this["newPosition"]()
    };
};
Hero["prototype"]["newPosition"] = function() {
    if (this["moveDirection"] == "l") {
        this["columnNum"]--
    };
    if (this["moveDirection"] == "r") {
        this["columnNum"]++
    };
    if (this["moveDirection"] == "d") {
        this["rowNum"]++
    };
    if (this["moveDirection"] == "dl") {
        this["rowNum"]++;
        this["columnNum"]--;
    };
    if (this["moveDirection"] == "dr") {
        this["rowNum"]++;
        this["columnNum"]++;
    };
    this["rowNum"] = Math["min"](this["rowNum"], gamePage["rowMax"] - 1);
    this["columnNum"] = Math["min"](this["columnNum"], gamePage["columnsMax"] - 1);
    this["rowNum"] = Math["max"](this["rowNum"], -1);
    this["columnNum"] = Math["max"](this["columnNum"], 0);
    this["updateMove"]();
    gamePage["updateCamera"]();
    this["findHitGrounds"]();
};
Hero["prototype"]["updateMove"] = function(_0xc7dfx73) {
    var _0xc7dfx1f = this["columnNum"] * gamePage["rockWidth"] + 90 / 2;
    var _0xc7dfx48 = this["rowNum"] * gamePage["rockHeight"] + 70 / 2;
    TweenMax["killTweensOf"](this["view"]);
    if (_0xc7dfx73 == true) {
        this["view"]["x"] = _0xc7dfx1f;
        this["view"]["y"] = _0xc7dfx48;
    } else {
        TweenMax["to"](this["view"], 0.2, {
            x: _0xc7dfx1f,
            y: _0xc7dfx48
        })
    };
};
var stage;
var canvas;
var logoContainer;
var pagesContainer;
var topContainer;
var SPIL_API;
var $width = 630;
var $height = 960;
var showStats = false;
var testMode = false;
var gamePreloader;
var bgColor = "#171C09";
var spilApi;
var hasBranding = false;

function jesusMode() {
    return;
    gameData["upgrade"]["bomb"] = 1;
    gameData["upgrade"]["energy"] = 1;
    gameData["upgrade"]["pick"] = 1;
    gameData["scores"] = 0;
}
var gameSettings = {
    groundLives: [15, 20, 30, 40, 60],
    bonusItems: {
        groundItem1: 50,
        groundItem2: 200,
        groundItem3: 400
    },
    energyAdd: 5000,
    scoresPerHeight: 1,
    hitSpeed: [2, 3, 4, 5],
    upgrade: {
        bombPrice: [0, 300, 1000, 3000],
        energyPrice: [0, 1000, 5000, 12000],
        pickPrice: [0, 2000, 6000, 15000],
        energyValue: [10000, 15000, 20000, 25000],
        bombValue: [3, 5, 7, 9],
        pickValue: [5, 10, 20, 30]
    },
    ground: {
        getGroundType: function(_0xc7dfx84) {
            var _0xc7dfx4e = 1;
            if (_0xc7dfx84 < gamePage["rowMax"] * 0.25) {
                _0xc7dfx4e = getRandomValue([{
                    perc: 80,
                    value: 1
                }, {
                    perc: 20,
                    value: 2
                }])
            } else {
                if (_0xc7dfx84 < gamePage["rowMax"] * 0.5) {
                    _0xc7dfx4e = getRandomValue([{
                        perc: 80,
                        value: 2
                    }, {
                        perc: 20,
                        value: 3
                    }])
                } else {
                    if (_0xc7dfx84 < gamePage["rowMax"] * 0.75) {
                        _0xc7dfx4e = getRandomValue([{
                            perc: 80,
                            value: 3
                        }, {
                            perc: 20,
                            value: 4
                        }])
                    } else {
                        if (_0xc7dfx84 <= gamePage["rowMax"] * 1) {
                            _0xc7dfx4e = getRandomValue([{
                                perc: 80,
                                value: 4
                            }, {
                                perc: 20,
                                value: 5
                            }])
                        }
                    }
                }
            };
            return _0xc7dfx4e;
        },
        getItemType: function(_0xc7dfx84) {
            var _0xc7dfx85;
            var _0xc7dfx86 = randRange(0, 100);
            if (_0xc7dfx84 <= gamePage["rowMax"] * 0.15) {
                if (_0xc7dfx86 < 10) {
                    _0xc7dfx85 = getRandomValue([{
                        perc: 80,
                        value: 1
                    }, {
                        perc: 10,
                        value: 4
                    }, {
                        perc: 10,
                        value: 5
                    }])
                }
            } else {
                if (_0xc7dfx84 <= gamePage["rowMax"] * 0.3) {
                    if (_0xc7dfx86 < 8) {
                        _0xc7dfx85 = getRandomValue([{
                            perc: 60,
                            value: 1
                        }, {
                            perc: 20,
                            value: 2
                        }, {
                            perc: 10,
                            value: 4
                        }, {
                            perc: 10,
                            value: 5
                        }])
                    }
                } else {
                    if (_0xc7dfx84 <= gamePage["rowMax"] * 0.5) {
                        if (_0xc7dfx86 < 8) {
                            _0xc7dfx85 = getRandomValue([{
                                perc: 30,
                                value: 1
                            }, {
                                perc: 40,
                                value: 2
                            }, {
                                perc: 10,
                                value: 3
                            }, {
                                perc: 10,
                                value: 4
                            }, {
                                perc: 10,
                                value: 5
                            }])
                        }
                    } else {
                        if (_0xc7dfx84 <= gamePage["rowMax"] * 0.8) {
                            if (_0xc7dfx86 < 5) {
                                _0xc7dfx85 = getRandomValue([{
                                    perc: 40,
                                    value: 2
                                }, {
                                    perc: 30,
                                    value: 3
                                }, {
                                    perc: 10,
                                    value: 4
                                }, {
                                    perc: 20,
                                    value: 5
                                }])
                            }
                        } else {
                            if (_0xc7dfx86 <= 3) {
                                _0xc7dfx85 = getRandomValue([{
                                    perc: 20,
                                    value: 3
                                }, {
                                    perc: 40,
                                    value: 4
                                }, {
                                    perc: 40,
                                    value: 5
                                }])
                            }
                        }
                    }
                }
            };
            return _0xc7dfx85;
        }
    }
};
var gameData;
clearGameData();

function clearGameData() {
    gameData = {
        upgrade: {
            bomb: 1,
            energy: 1,
            pick: 1
        },
        scores: 0
    }
}
var gameState = "mainMenu";
var progressShape;
var stats;
var soundButtonsContainer;

function addStats() {
    if (showStats) {
        stats = new Stats();
        stats["setMode"](2);
        stats["domElement"]["style"]["position"] = "absolute";
        stats["domElement"]["style"]["left"] = "10px";
        stats["domElement"]["style"]["top"] = "100px";
        document["body"]["appendChild"](stats["domElement"]);
    }
}
window["onload"] = function() {
    canvas = document["getElementById"]("canvas");
    ctx = canvas["getContext"]("2d");
    ctx["imageSmoothingEnabled"] = ctx["mozImageSmoothingEnabled"] = true;
    stage = new createjs.Stage(canvas);
    logoContainer = new createjs["Container"];
    pagesContainer = new createjs["Container"];
    topContainer = new createjs["Container"];
    stage["addChild"](pagesContainer);
    stage["addChild"](topContainer);
    createjs["Touch"]["enable"](stage);
    addStats();
    window["addEventListener"]("scroll", function() {
        if (document["activeElement"] === document["body"] && window["scrollY"] > 0) {
            document["body"]["scrollTop"] = 0
        }
    }, true);

    function _0xc7dfx8e(_0xc7dfx16) {
        log("key up");
        if (!_0xc7dfx16) {
            var _0xc7dfx16 = window["event"]
        };
        _0xc7dfx16["preventDefault"]();
    }
    document["onkeyup"] = _0xc7dfx8e;
    document["onkeydown"] = _0xc7dfx8e;

    function _0xc7dfx8f(_0xc7dfx16) {
        log(_0xc7dfx16["keyCode"])
    }
    log("here");
    canvas["addEventListener"]("keydown", _0xc7dfx8f, true);
    logoContainer["visible"] = false;
    topContainer["addChild"](logoContainer);
    logoData = {};
    logoData["width"] = 202;
    logoData["height"] = 50;
    log("test 3");
    log("easejs version: " + createjs["EaselJS"]["version"]);
    var _0xc7dfx90 = {
        id: "576742227280296043"
    };
    // Initialise the Spil HTML5 API -->
    // GameAPI["loadAPI"](function(_0xc7dfx91) {
    /*	spilApi = _0xc7dfx91;
    		if (window["console"] && window["console"]["log"]) {
    			log("GameAPI version " + _0xc7dfx91["version"] + " loaded!")
    		};
    		var _0xc7dfx92 = _0xc7dfx91["Branding"]["getLogo"]();
    		if (_0xc7dfx92["image"]) {
    			var _0xc7dfx93 = new createjs.Bitmap(_0xc7dfx92["image"]);
    			_0xc7dfx93["image"]["onload"] = function() {
    				var _0xc7dfx94 = new createjs["Shape"];
    				_0xc7dfx94["graphics"]["beginFill"]("#FFFFFF")["drawRect"](0, 0, _0xc7dfx93["image"]["width"], _0xc7dfx93["image"]["height"]);
    				_0xc7dfx94["alpha"] = 0.05;
    				logoContainer["addChild"](_0xc7dfx94);
    				hasBranding = true;
    				_0xc7dfx94["on"]("click", function() {
    					_0xc7dfx92["action"]()
    				});
    			};
    			logoContainer["addChild"](_0xc7dfx93);
    		};*/
    // }, _0xc7dfx90);
    soundButtonsContainer = new createjs["Container"];
    stage["addChild"](soundButtonsContainer);
    stage["snapToPixelsEnabled"] = true;
    stage["enableMouseOver"](0);
    stage["mouseMoveOutside"] = false;
    stage["mouseMoveOutside"] = true;
    stage["on"]("stagemousedown", function(_0xc7dfx95) {
        window["focus"]()
    });
    createjs["Ticker"]["setFPS"](30);
    createjs["Ticker"]["addEventListener"]("tick", update);
    window["addEventListener"]("resize", resize, false);
    resize();
    soundManager = new SoundManager();
    gamePreloader = new GamePreloader();
    gamePreloader["startPreloader"]();
};

function addSpash() {
    var _0xc7dfxc = this;
    var _0xc7dfx97 = new createjs.Bitmap("images/splash.png");
    _0xc7dfx97["addEventListener"]("click", function() {
        splashScreenClick()
    });
    pagesContainer["addChild"](_0xc7dfx97);
    setTimeout(function() {
        pagesContainer["removeChild"](_0xc7dfx97);
        _0xc7dfxc["initApp"]();
    }, 3000);
}

function openCustomURL(_0xc7dfx99) {
    var _0xc7dfx9a = window["open"](_0xc7dfx99, "_blank");
    _0xc7dfx9a["focus"]();
}

function logoClick() {
    openCustomURL("http://www.a10.com")
}

function moreGamesButtonClick() {
    openCustomURL("http://www.a10.com")
}

function splashScreenClick() {
    openCustomURL("http://www.a10.com")
}

function initApp() {
    jesusMode();
    loadGameData();
    logoContainer["visible"] = true;
    gamePage = new GamePage();
    gamePage["init"]();
    upgradesPage = new UpgradesPage();
    resize();
    soundManager["playLoop"]();
    TweenMax["delayedCall"](2, function() {
        startGame();
        gamePreloader["dispose"]();
    });
    return;
    pausePage = new PausePage();
}

function update(_0xc7dfx16) {
    if (stats) {
        stats["begin"]()
    };
    if (gameState == "gameplay") {
        gamePage["update"](_0xc7dfx16)
    };
    stage["update"](_0xc7dfx16);
    if (stats) {
        stats["end"]()
    };
}

function resize() {
    document["body"]["scrollTop"] = 0;
    var _0xc7dfxa1 = document["getElementById"]("gameArea");
    var _0xc7dfxa2 = $width / $height;
    var _0xc7dfxa3 = window["innerWidth"];
    var _0xc7dfxa4 = window["innerHeight"];
    var _0xc7dfxa5 = _0xc7dfxa3 / _0xc7dfxa4;
    if (_0xc7dfxa5 > _0xc7dfxa2) {
        _0xc7dfxa3 = _0xc7dfxa4 * _0xc7dfxa2;
        _0xc7dfxa1["style"]["height"] = (_0xc7dfxa4) + "px";
        _0xc7dfxa1["style"]["width"] = _0xc7dfxa3 + "px";
    } else {
        _0xc7dfxa4 = _0xc7dfxa3 / _0xc7dfxa2;
        _0xc7dfxa1["style"]["width"] = _0xc7dfxa3 + "px";
        _0xc7dfxa1["style"]["height"] = _0xc7dfxa4 + "px";
    };
    _0xc7dfxa1["style"]["marginTop"] = (-_0xc7dfxa4 / 2) + "px";
    _0xc7dfxa1["style"]["marginLeft"] = (-_0xc7dfxa3 / 2) + "px";
}

function updateLogoPosition() {
    if (hasBranding == false) {
        return
    };
    switch (gameState) {
        case "mainMenu":
            logoContainer["x"] = 630 - logoContainer["getBounds"]()["width"];
            logoContainer["y"] = 960 - logoContainer["getBounds"]()["height"];
            break;;
        case "pausePage":
            ;
        case "gameOver":
            logoContainer["visible"] = false;
            logoContainer["x"] = (960 - 202) / 2;
            logoContainer["y"] = 30;
            break;;
        case "gameplay":
            logoContainer["visible"] = true;
            logoContainer["x"] = 630 - logoContainer["getBounds"]()["width"];
            logoContainer["y"] = 960 - logoContainer["getBounds"]()["height"] - 20;
            break;;
        case "resultsPage":
            logoContainer["visible"] = false;
            break;;
        case "upgradesPage":
            ;
        case "shopPage":
            ;
        case "awardsPage":
            break;;
    };
}

function startNewGame() {
    clearGameData();
    saveGameData();
    jesusMode();
    startGame();
}

function startGame() {
    console.log('game start!');
    var bgSound = createjs.Sound.play("bg");
    bgSound.loop = -1;
    clearDisplayObject(pagesContainer);
    resize();
    gameState = "gameplay";
    gamePage["show"]();
    if ((gameData["currentWave"] + 1) % 3 == 0) {
        log("show IAD");
        if (SPIL_API) {
            SPIL_API["GameBreak"]["request"](pauseGame, resumeGame)
        };
    };
    updateLogoPosition();
}

function restartGame() {
    //make letter dim
    console.log('restartGame');
    clearDisplayObject(pagesContainer);
    gameState = "gameplay";
    gamePage["show"]();
    gamePage["restartGame"]();
    soundManager["playSound"]("slide");
    updateLogoPosition();
}

function gameOver() {
    gameState = "gameOver";
    updateLogoPosition();
}

function showResultsPage() {
    gameState = "resultsPage";
    gamePage["resultsPage"]["show"]();
    updateLogoPosition();
    soundManager["playSound"]("levelComplete");
}

function showUpgradesPage() {
    gameState = "upgradesPage";
    upgradesPage["show"]();
    updateLogoPosition();
    soundManager["playSound"]("slide");
}
var preloader1;
var GamePreloader = function() {
    this["progressContainer"] = new createjs["Container"];
    this["maskProgressShape"] = new createjs.Shape();
    preloader1 = new createjs.LoadQueue(true, res_path + "");
};
GamePreloader["prototype"]["startPreloader"] = function() {
    var _0xc7dfxc = this;
    var _0xc7dfxaf = ["images/progress_bg.png", "images/progress_bar.png"];
    preloader1["addEventListener"]("complete", function() {
        _0xc7dfxc["preloaderDataComplete"]()
    });
    preloader1["loadManifest"](_0xc7dfxaf);
};
GamePreloader["prototype"]["preloaderDataComplete"] = function() {
    var _0xc7dfxb0 = new createjs.Shape();
    _0xc7dfxb0["graphics"]["beginFill"]("#6CE2D9")["drawRect"](0, 0, $width, $height);
    _0xc7dfxb0["graphics"]["endFill"]();
    this["progressContainer"]["addChild"](_0xc7dfxb0);
    var _0xc7dfxb1 = new createjs.Container();
    var _0xc7dfxd = new createjs.Bitmap(preloader1["getResult"]("images/progress_bg.png", false));
    this["progress_bar"] = new createjs.Bitmap(preloader1["getResult"]("images/progress_bar.png", false));
    this["progress_bar"]["x"] = 22;
    this["progress_bar"]["y"] = 19;
    _0xc7dfxb1["addChild"](_0xc7dfxd);
    _0xc7dfxb1["addChild"](this["progress_bar"]);
    this["progressWidth"] = 402;
    this["progress_bar"]["mask"] = this["maskProgressShape"];
    _0xc7dfxb1["regX"] = 446 / 2;
    _0xc7dfxb1["regY"] = 61 / 2;
    _0xc7dfxb1["x"] = $width / 2;
    _0xc7dfxb1["y"] = $height / 2;
    this["progressContainer"]["addChild"](_0xc7dfxb1);
    stage["addChild"](this["progressContainer"]);
    this["loadMainData"]();
};
GamePreloader["prototype"]["loadMainData"] = function() {
    var _0xc7dfxc = this;
    var _0xc7dfxaf = ["images/sheets/main.png", "images/sheets/hero.png", "images/sheets/font2.png", {
        src: "sounds/bgm.mp3",
        id: "bg"
    }];
    soundManager["initSoundModule"]();
    preloader = new createjs.LoadQueue(true, res_path + "");
    //for android and ios
    createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]); // need this so it doesn't default to Web Audio
    preloader.installPlugin(createjs.Sound);
    var _0xc7dfxb2 = function() {
        var _0xc7dfx14 = (preloader["progress"] + soundManager["loadedAudioFiles"] / soundManager["totalAudioFiles"]) / 2;
        log(_0xc7dfx14);
        _0xc7dfxc["handleProgress"](_0xc7dfx14);
        log(_0xc7dfx14);
        if (_0xc7dfx14 >= 1) {
            createjs["Ticker"]["removeEventListener"]("tick", _0xc7dfxb2);
            _0xc7dfxc["handleComplete"]();
        };
    };
    createjs["Ticker"]["addEventListener"]("tick", _0xc7dfxb2);
    preloader["loadManifest"](_0xc7dfxaf);
};
GamePreloader["prototype"]["handleProgress"] = function(_0xc7dfx58) {
    if (_0xc7dfx58 < 0) {
        _0xc7dfx58 = 0
    };
    this["maskProgressShape"]["graphics"]["clear"]();
    this["maskProgressShape"]["graphics"]["beginFill"]("#FF0000")["drawRect"](this["progress_bar"]["x"], this["progress_bar"]["y"], _0xc7dfx58 * this["progressWidth"], 24);
    this["maskProgressShape"]["graphics"]["endFill"]();
};
GamePreloader["prototype"]["handleComplete"] = function() {
    setTimeout(function() {
        initData();
        initApp();
    }, 500)
};
GamePreloader["prototype"]["dispose"] = function() {
    stage["removeChild"](this["progressContainer"]);
    clearDisplayObject(this["progressContainer"]);
    this["progressContainer"] = null;
    this["maskProgressShape"]["graphics"]["clear"]();
    this["maskProgressShape"] = null;
};

function saveSoundSettings() {
    localStorage["setItem"]("allowSound_digger", allowSound);
    localStorage["setItem"]("allowMusic_digger", allowMusic);
}

function loadSoundSettings() {
    allowMusic = localStorage["getItem"]("allowMusic_digger");
    allowSound = localStorage["getItem"]("allowSound_digger");
    if (allowMusic == null) {
        allowMusic = true
    };
    if (allowSound == null) {
        allowSound = true
    };
    allowSound == "true" ? allowSound = true : 0;
    allowSound == "false" ? allowSound = false : 0;
    allowMusic == "true" ? allowMusic = true : 0;
    allowMusic == "false" ? allowMusic = false : 0;
    allowMusic = allowSound = false;
}

function saveGameData() {
    if (isLocalStorageNameSupported()) {
        localStorage["setItem"]("gameData_digger", JSON["stringify"](gameData))
    }
}

function loadGameData() {
    if (isLocalStorageNameSupported()) {
        var _0xc7dfx3d = localStorage["getItem"]("gameData_digger");
        log("her123");
        log(_0xc7dfx3d);
        if (_0xc7dfx3d) {
            log("here");
            log(_0xc7dfx3d);
            gameData = JSON["parse"](_0xc7dfx3d);
        };
    }
}

function isLocalStorageNameSupported() {
    var _0xc7dfxb8 = "gameData_digger";
    try {
        localStorage["setItem"](_0xc7dfxb8, "1");
        localStorage["removeItem"](_0xc7dfxb8);
        return true;
    } catch (error) {
        return false
    };
}
var UpgradesPage = function() {
    this["initDone"] = false;
    this["view"] = new createjs["Container"];
    this["itemsArr"] = [];
    for (var _0xc7dfxa = 0; _0xc7dfxa < 3; _0xc7dfxa++) {
        var _0xc7dfx85 = ["bomb", "energy", "pick"];
        var _0xc7dfxba = new UpgradeItem(_0xc7dfx85[_0xc7dfxa]);
        this["itemsArr"]["push"](_0xc7dfxba);
    };
};
UpgradesPage["prototype"]["show"] = function() {
    if (!this["initDone"]) {
        this["createView"]();
        this["initDone"] = true;
    };
    this["update"]();
    pagesContainer["addChild"](this["view"]);
};
UpgradesPage["prototype"]["updateItems"] = function() {
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["itemsArr"]["length"]; _0xc7dfxa++) {
        this["itemsArr"][_0xc7dfxa]["update"]()
    };
    this["scoresTF"]["text"] = "$" + gameData["scores"];
    fixTextSize(this["scoresTF"]);
};
UpgradesPage["prototype"]["hasItemWhichCanBeSelled"] = function() {
    var _0xc7dfxbb = false;
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["itemsArr"]["length"]; _0xc7dfxa++) {
        if (this["itemsArr"][_0xc7dfxa]["hasEnoughMoney"]()) {
            _0xc7dfxbb = true
        }
    };
    return _0xc7dfxbb;
};
UpgradesPage["prototype"]["createView"] = function() {
    var _0xc7dfxc = this;
    var _0xc7dfxd = new createjs.Shape();
    _0xc7dfxd["graphics"]["beginFill"](bgColor)["drawRect"](0, 0, $width, $height);
    _0xc7dfxd["graphics"]["endFill"]();
    _0xc7dfxd["alpha"] = 0.8;
    this["view"]["addChild"](_0xc7dfxd);
    this["blockContainer"] = new createjs.Container();
    var _0xc7dfxbc = new createjs.Shape();
    _0xc7dfxbc["graphics"]["beginFill"]("#000000")["drawRect"](0, 0, $width, $height);
    _0xc7dfxbc["graphics"]["endFill"]();
    _0xc7dfxbc["alpha"] = 0.8;
    var _0xc7dfxb1 = new createjs.Container();
    var _0xc7dfxd = new createjs.Bitmap(preloader1["getResult"]("images/progress_bg.png", false));
    this["progress_bar"] = new createjs.Bitmap(preloader1["getResult"]("images/progress_bar.png", false));
    this["progress_bar"]["x"] = 22;
    this["progress_bar"]["y"] = 19;
    _0xc7dfxb1["addChild"](_0xc7dfxd);
    _0xc7dfxb1["addChild"](this["progress_bar"]);
    this["progressWidth"] = 402;
    this["maskShape"] = new createjs.Shape();
    this["maskShape"]["x"] = this["progress_bar"]["x"];
    this["maskShape"]["y"] = this["progress_bar"]["y"];
    this["maskShape"]["graphics"]["clear"]();
    this["maskShape"]["graphics"]["beginFill"]("#FF0000")["drawRect"](0, 0, this["progressWidth"], 24);
    this["maskShape"]["graphics"]["endFill"]();
    this["progress_bar"]["mask"] = this["maskShape"];
    _0xc7dfxb1["regX"] = 446 / 2;
    _0xc7dfxb1["regY"] = 61 / 2;
    _0xc7dfxb1["x"] = $width / 2;
    _0xc7dfxb1["y"] = $height / 2;
    this["blockContainer"]["addChild"](_0xc7dfxbc);
    this["blockContainer"]["addChild"](_0xc7dfxb1);

    function _0xc7dfxbd(_0xc7dfx58) {
        _0xc7dfx58 = Math["max"](0, _0xc7dfx58);
        _0xc7dfx58 = Math["min"](1, _0xc7dfx58);
        _0xc7dfxc["maskShape"]["scaleX"] = _0xc7dfx58;
    }
    var _0xc7dfxd = new createjs.Sprite(mainSheet, "shop");
    _0xc7dfxd["x"] = 50;
    _0xc7dfxd["y"] = 0;
    this["view"]["addChild"](_0xc7dfxd);
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["itemsArr"]["length"]; _0xc7dfxa++) {
        var _0xc7dfxba = this["itemsArr"][_0xc7dfxa];
        _0xc7dfxba["view"]["x"] = -15;
        _0xc7dfxba["view"]["y"] = 205 + _0xc7dfxa * 187;
        this["view"]["addChild"](_0xc7dfxba["view"]);
    };
    var _0xc7dfx66 = new createjs.Sprite(mainSheet, "okBtn");
    _0xc7dfx66["addEventListener"]("click", function() {
        _0xc7dfxbd(0);
        _0xc7dfxc["view"]["addChild"](_0xc7dfxc["blockContainer"]);
        TweenMax["delayedCall"](0.1, function() {
            gamePage["clearAll"]();
            createjs["Ticker"]["addEventListener"]("tick", _0xc7dfxbf);
        });
        var _0xc7dfxbe = 0;

        function _0xc7dfxbf() {
            log("my function");
            _0xc7dfxbe++;
            var _0xc7dfx58 = _0xc7dfxbe / 30;
            _0xc7dfxbd(_0xc7dfx58);
            if (_0xc7dfxbe > 30) {
                _0xc7dfxc["view"]["removeChild"](_0xc7dfxc["blockContainer"]);
                createjs["Ticker"]["removeEventListener"]("tick", _0xc7dfxbf);
                restartGame();
            };
        }
    });
    _0xc7dfx66["x"] = 350;
    _0xc7dfx66["y"] = 730;
    this["view"]["addChild"](_0xc7dfx66);
    this["scoresTF"] = new createjs.BitmapText("", mainSheet);
    this["scoresTF"]["regY"] = 75 / 2;
    this["scoresTF"]["x"] = 100;
    this["scoresTF"]["y"] = 815 + this["scoresTF"]["regY"];
    this["view"]["addChild"](this["scoresTF"]);
};
UpgradesPage["prototype"]["update"] = function() {
    this["updateItems"]();
    saveGameData();
};
var UpgradeItem = function(_0xc7dfx85) {
    var _0xc7dfxc = this;
    this["view"] = new createjs["Container"];
    this["itemType"] = _0xc7dfx85;
    this["buyBtn"] = new createjs.Sprite(mainSheet, "buy_active");
    this["buyBtn"]["addEventListener"]("click", function() {
        if (_0xc7dfxc["hasEnoughMoney"]()) {
            gameData["upgrade"][_0xc7dfxc["itemType"]] += 1;
            gameData["scores"] -= _0xc7dfxc["price"];
            _0xc7dfxc["updatePrice"]();
            soundManager["playSound"]("itemBuy");
            upgradesPage["update"]();
        }
    });
    this["buyBtn"]["x"] = 400;
    this["buyBtn"]["y"] = 20;
    this["progressBar"] = new UpgradeProgressBar();
    this["progressBar"]["view"]["x"] = 200;
    this["progressBar"]["view"]["y"] = 20;
    this["view"]["addChild"](this["progressBar"]["view"]);
    if (_0xc7dfx85 == "bomb") {
        this["icon"] = new createjs.Sprite(mainSheet, "bombIcon");
        this["icon"]["x"] = 80;
        this["icon"]["y"] = -50;
        this["bombText"] = new createjs.BitmapText("", mainSheet);
        this["bombText"]["scaleX"] = this["bombText"]["scaleY"] = 0.5;
        this["bombText"]["x"] = 45 + 80;
        this["bombText"]["y"] = 105 - 50;
    };
    if (_0xc7dfx85 == "energy") {
        this["icon"] = new createjs.Sprite(mainSheet, "energyIcon1");
        this["icon"]["x"] = 100;
        this["icon"]["y"] = -20;
    };
    if (_0xc7dfx85 == "pick") {
        this["icon"] = new createjs.Sprite(mainSheet, "pick1");
        this["icon"]["x"] = 60;
        this["icon"]["y"] = -30;
    };
    this["view"]["addChild"](this["buyBtn"]);
    this["view"]["addChild"](this["icon"]);
    this["priceText"] = new createjs.BitmapText("$" + this["price"], mainSheet);
    this["priceText"]["scaleX"] = this["priceText"]["scaleY"] = 0.5;
    this["priceText"]["x"] = 400;
    this["priceText"]["y"] = -48;
    this["view"]["addChild"](this["priceText"]);
    this["updatePrice"]();
    this["update"]();
};
UpgradeItem["prototype"]["updatePrice"] = function() {
    this["price"] = gameSettings["upgrade"][this["itemType"] + "Price"][gameData["upgrade"][this["itemType"]]];
    if (gameData["upgrade"][this["itemType"]] == 4) {
        this["priceText"]["text"] = "MAX"
    } else {
        this["priceText"]["text"] = "$" + this["price"]
    };
};
UpgradeItem["prototype"]["hasEnoughMoney"] = function() {
    if (gameData["scores"] >= this["price"]) {
        return true
    } else {
        return false
    }
};
UpgradeItem["prototype"]["update"] = function() {
    var _0xc7dfxc1 = gameData["upgrade"][this["itemType"]];
    if (this["hasEnoughMoney"]() && _0xc7dfxc1 != 4) {
        this["buyBtn"]["gotoAndStop"]("buy_active")
    } else {
        this["buyBtn"]["gotoAndStop"]("buy_inactive")
    };
    this["progressBar"]["setProgress"](_0xc7dfxc1);
    if (this["itemType"] == "pick") {
        var _0xc7dfxc2 = _0xc7dfxc1;
        _0xc7dfxc2 = Math["min"](_0xc7dfxc2, 4);
        this["icon"]["gotoAndStop"]("pick" + _0xc7dfxc2);
    };
    if (this["itemType"] == "energy") {
        this["icon"]["gotoAndStop"]("energyIcon" + _0xc7dfxc1)
    };
    if (this["itemType"] == "bomb") {
        this["bombText"]["text"] = "" + gameSettings["upgrade"]["bombValue"][gameData["upgrade"]["bomb"] - 1];
        this["view"]["addChild"](this["bombText"]);
    };
};
var UpgradeProgressBar = function() {
    this["view"] = new createjs["Container"];
    this["view"]["addChild"](new createjs.Sprite(mainSheet, "block"));
    this["items"] = [];
    for (var _0xc7dfxa = 0; _0xc7dfxa < 4; _0xc7dfxa++) {
        var _0xc7dfxba = new createjs.Sprite(mainSheet, "buyLine" + (_0xc7dfxa + 1));
        _0xc7dfxba["x"] = 7 + _0xc7dfxa * 44;
        _0xc7dfxba["y"] = 7;
        this["view"]["addChild"](_0xc7dfxba);
        this["items"]["push"](_0xc7dfxba);
    };
};
UpgradeProgressBar["prototype"]["setProgress"] = function(_0xc7dfxc4) {
    for (var _0xc7dfxa = 0; _0xc7dfxa < this["items"]["length"]; _0xc7dfxa++) {
        if (_0xc7dfxc4 > _0xc7dfxa) {
            this["items"][_0xc7dfxa]["visible"] = true
        } else {
            this["items"][_0xc7dfxa]["visible"] = false
        }
    }
};

function clearDisplayObject(_0xc7dfxc6) {
    _0xc7dfxc6["removeAllChildren"]();
    while (_0xc7dfxc6["getNumChildren"]() > 0) {
        _0xc7dfxc6["removeChildAt"](0)
    };
}

function randRange(_0xc7dfxc8, _0xc7dfxc9) {
    var _0xc7dfxca = Math["floor"](Math["random"]() * (_0xc7dfxc9 - _0xc7dfxc8 + 1)) + _0xc7dfxc8;
    return _0xc7dfxca;
}

function getRandomValue(_0xc7dfxcc) {
    var _0xc7dfxcd = 0;
    for (var _0xc7dfxa = 0; _0xc7dfxa < _0xc7dfxcc["length"]; _0xc7dfxa++) {
        _0xc7dfxcd += _0xc7dfxcc[_0xc7dfxa]["perc"];
        _0xc7dfxcc[_0xc7dfxa]["sum"] = _0xc7dfxcd;
    };
    if (_0xc7dfxcd != 100) {
        log("ERROR: total sum of percent must be 100")
    };
    var _0xc7dfx86 = randRange(1, 100);
    var _0xc7dfxce;
    for (var _0xc7dfxa = _0xc7dfxcc["length"] - 1; _0xc7dfxa >= 0; _0xc7dfxa--) {
        if (_0xc7dfx86 <= _0xc7dfxcc[_0xc7dfxa]["sum"]) {
            _0xc7dfxce = _0xc7dfxcc[_0xc7dfxa]["value"]
        }
    };
    return _0xc7dfxce;
}

function secondsToHms(_0xc7dfxd0) {
    var _0xc7dfxd1 = parseInt(_0xc7dfxd0, 10);
    var _0xc7dfxd2 = Math["floor"](_0xc7dfxd1 / 3600);
    var _0xc7dfxd3 = Math["floor"]((_0xc7dfxd1 - (_0xc7dfxd2 * 3600)) / 60);
    var _0xc7dfxd4 = _0xc7dfxd1 - (_0xc7dfxd2 * 3600) - (_0xc7dfxd3 * 60);
    if (_0xc7dfxd2 < 10) {
        _0xc7dfxd2 = "0" + _0xc7dfxd2
    };
    if (_0xc7dfxd3 < 10) {
        _0xc7dfxd3 = "0" + _0xc7dfxd3
    };
    if (_0xc7dfxd4 < 10) {
        _0xc7dfxd4 = "0" + _0xc7dfxd4
    };
    var _0xc7dfx10 = _0xc7dfxd3 + ":" + _0xc7dfxd4;
    return _0xc7dfx10;
}
Array["prototype"]["shuffle"] = function() {
    var _0xc7dfxa = this["length"],
        _0xc7dfx44, _0xc7dfxd5;
    if (_0xc7dfxa == 0) {
        return this
    };
    while (--_0xc7dfxa) {
        _0xc7dfx44 = Math["floor"](Math["random"]() * (_0xc7dfxa + 1));
        _0xc7dfxd5 = this[_0xc7dfxa];
        this[_0xc7dfxa] = this[_0xc7dfx44];
        this[_0xc7dfx44] = _0xc7dfxd5;
    };
    return this;
};

function intersect(_0xc7dfxd7, _0xc7dfxd8) {
    return (_0xc7dfxd7["left"] <= _0xc7dfxd8["right"] && _0xc7dfxd8["left"] <= _0xc7dfxd7["right"] && _0xc7dfxd7["top"] <= _0xc7dfxd8["bottom"] && _0xc7dfxd8["top"] <= _0xc7dfxd7["bottom"])
}

function sortByKey(_0xc7dfxda, _0xc7dfxdb) {
    return _0xc7dfxda["sort"](function(_0xc7dfxd7, _0xc7dfxd8) {
        var _0xc7dfx6b = _0xc7dfxd7[_0xc7dfxdb];
        var _0xc7dfx6c = _0xc7dfxd8[_0xc7dfxdb];
        return ((_0xc7dfx6b < _0xc7dfx6c) ? -1 : ((_0xc7dfx6b > _0xc7dfx6c) ? 1 : 0));
    })
}

function log(_0xc7dfxdd) {}

function clone(_0xc7dfxdf) {
    if (null == _0xc7dfxdf || "object" != typeof _0xc7dfxdf) {
        return _0xc7dfxdf
    };
    if (_0xc7dfxdf instanceof Date) {
        var _0xc7dfxe0 = new Date();
        _0xc7dfxe0["setTime"](_0xc7dfxdf["getTime"]());
        return _0xc7dfxe0;
    };
    if (_0xc7dfxdf instanceof Array) {
        var _0xc7dfxe0 = [];
        for (var _0xc7dfxa = 0, _0xc7dfxe1 = _0xc7dfxdf["length"]; _0xc7dfxa < _0xc7dfxe1; _0xc7dfxa++) {
            _0xc7dfxe0[_0xc7dfxa] = clone(_0xc7dfxdf[_0xc7dfxa])
        };
        return _0xc7dfxe0;
    };
    if (_0xc7dfxdf instanceof Object) {
        var _0xc7dfxe0 = {};
        for (var _0xc7dfxe2 in _0xc7dfxdf) {
            if (_0xc7dfxdf["hasOwnProperty"](_0xc7dfxe2)) {
                _0xc7dfxe0[_0xc7dfxe2] = clone(_0xc7dfxdf[_0xc7dfxe2])
            }
        };
        return _0xc7dfxe0;
    };
    throw new Error("Unable to copy obj! Its type isn't supported.");
}
var soundOn = false;
var SoundManager = function() {};
SoundManager["prototype"]["playSound"] = function(_0xc7dfxe5) {
    if (soundOn) {
        createjs["Sound"]["play"](_0xc7dfxe5)
    }
};
SoundManager["prototype"]["updateSounds"] = function() {
    if (assetsLoaded && soundButton) {
        if (soundOn) {
            soundButton["gotoAndStop"]("sound_on")
        } else {
            soundButton["gotoAndStop"]("sound_off")
        }
    }
};
SoundManager["prototype"]["playLoop"] = function() {
    if (soundOn) {}
};
SoundManager["prototype"]["initSoundModule"] = function() {
    this["totalAudioFiles"] = 1;
    this["loadedAudioFiles"] = 1;
    return;
    createjs["HTMLAudioPlugin"]["enableIOS"] = true;
    var _0xc7dfxe6 = "sounds/";
    var _0xc7dfxe7 = [{
        id: "boom",
        src: "boom.mp3"
    }, {
        id: "itemBuy",
        src: "itemBuy.mp3"
    }, {
        id: "levelComplete",
        src: "levelComplete.mp3"
    }, {
        id: "slide",
        src: "slide.mp3"
    }, {
        id: "win",
        src: "win.mp3"
    }, {
        id: "item1",
        src: "item1.mp3"
    }, {
        id: "item2",
        src: "item2.mp3"
    }, {
        id: "item3",
        src: "item3.mp3"
    }, {
        id: "energy",
        src: "energy.mp3"
    }, {
        id: "loop",
        src: "loop.mp3"
    }];
    this["totalAudioFiles"] = _0xc7dfxe7["length"];
    this["loadedAudioFiles"] = 0;
    createjs["Sound"]["initializeDefaultPlugins"]();
    createjs["Sound"]["addEventListener"]("fileload", this["audioFileLoadHandle"]["bind"](this));
    createjs["Sound"]["registerSounds"](_0xc7dfxe7, _0xc7dfxe6);
    console.log(createjs["Sound"]["registerSounds"](_0xc7dfxe7, _0xc7dfxe6))
};
SoundManager["prototype"]["audioFileLoadHandle"] = function(_0xc7dfx16) {
    log(_0xc7dfx16["id"]);
    this["loadedAudioFiles"]++;
};
