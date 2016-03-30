(function($) {
    var game = window.game_th = {};
    var path = "images/tiehuan/";
    var ver = 0.9;
    const DW = 640,
        DH = 1136;
    var canvas;
    var stageW, stageH;
    var levels = 3;
    var isPlaying = false;
    game.updateCanvas = function() {
        if (lovarv.game != 2) return;
        canvas = document.getElementById("gameStage");
        stageW = devicePixelRatio * window.innerWidth;
        stageH = devicePixelRatio * window.innerHeight;
        canvas.width = stageW;
        canvas.height = stageH;
    };
    game.resize = function() {
        game.updateCanvas();
        try {
            game.bg.resize();
            game.ground.resize();
            game.ui.resize();
        } catch (e) {

        }
    };
    game.update = function() {
        try {
            game.stage.update();
            game.ui.update();
        } catch (e) {

        }
        game.point();
    };
    game.point = function() {
        $gameCountText.text(parseInt(lovarv.score));
        lovarv.score += 0.7;

    };
    game.init = function() {
        
        // canvas.addEventListener("click", function() {
        //     if (!isPlaying) game.play();
        // })
        $gameCountImg.attr('src', preload.getResult('images/tiehuan/mi.png').src);
        game.updateCanvas();

        var stage = game.stage = lovarv.Gstage;

        //添加背景
        var bg = game.bg = game.bg || {};
        bg.resize = function() {
            var b = bg.content;
            if (b) {
                var rect = b.getBounds();
                var scale = Math.max(stageW / rect.width, stageH / rect.height);
                b.scaleX = b.scaleY = scale;
                b.x = 0.5 * (stageW - rect.width * scale);
                b.y = 0.5 * (stageH - rect.height * scale);
            }
        };
        bg.init = function() {
            var img = new Image();
            img.onload = function() {
                var a = bg.content = new createjs.Bitmap(img);
                stage.addChildAt(a, 0);
                bg.resize();
                game.stage.update();
            }
            img.src = path + "back.jpg";
        }();
        //添加地面容器
        var ground = game.ground = new createjs.Container();
        ground.resize = function() {
            var scale = stageW / DW;
            ground.scaleX = ground.scaleY = scale;
            ground.y = stageH;
        };
        ground.init = function() {
            stage.addChild(ground);
            ground.resize();
        }();

        //添加道路
        var road = game.road = game.road || {};
        road.resize = function() {
            var a = road.content;
            if (a) {
                var rect = a.getBounds();
                a.regY = rect.height;
            }
        };
        road.init = function() {
            var images = [];
            for (var i = 0; i < 4; i++) {
                images.push(path + "road" + i + ".png");
            }
            var data = {
                images: images,
                frames: {
                    width: 640,
                    height: 806
                },
                animations: {
                    __stop: 0,
                    __run: [1, 3, '__run', 0.8]
                }
            };
            var spriteSheet = new createjs.SpriteSheet(data);
            var a = new createjs.Sprite(spriteSheet, "__stop");
            spriteSheet.addEventListener("complete", function() {
                road.content = a;
                road.resize();
            })
            ground.addChildAt(a, 0);
        }();
        road.play = function() {
            var c = road.content;
            if (c) {
                c.gotoAndPlay("__run");
            }
        };
        road.stop = function() {
            var c = road.content;
            if (c) {
                c.gotoAndStop("__stop");
            }
        };
        //添加小姑娘
        var girl = game.girl = game.girl || {};
        girl.resize = function() {
            var a = girl.content;
            if (a) {
                var rect = a.getBounds();
                a.regY = rect.height;
                a.x = 3 * rect.width;
                a.y = -1.8 * rect.height;
            }
        };
        girl.init = function() {
            var images = [];
            for (var i = 0; i < 2; i++) {
                images.push(path + "npc-girl" + i + ".png");
            }
            var data = {
                images: images,
                frames: {
                    width: 85,
                    height: 178
                },
                animations: {
                    __stop: 0,
                    __run: [0, 1, '__run', 0.1]
                }
            };
            var spriteSheet = new createjs.SpriteSheet(data);
            var a = new createjs.Sprite(spriteSheet, "__stop");
            spriteSheet.addEventListener("complete", function() {
                girl.content = a;
                girl.resize();
            })
            ground.addChild(a);
        }();
        girl.play = function() {
            var c = girl.content;
            if (c) {
                c.gotoAndPlay("__run");
            }
        };
        girl.stop = function() {
            var c = girl.content;
            if (c) {
                c.gotoAndStop("__stop");
            }
        };
        //添加npc
        var npc = game.npc = new createjs.Container();
        npc.speed = 1;
        npc.tarSpeed = 1;
        npc.hei = 150;
        npc.x = 0.5 * DW;
        npc.y = -390;
        npc.offsetX = 60;
        npc.xyrate = 1.95;
        npc.pool = ["npc0.png", "npc1.png", "npc2.png", "npc3.png"];
        npc.list = [];
        npc.pointer = -1;
        ground.addChild(npc);
        npc.updateSpeed = function() {
            npc.speed += (npc.tarSpeed - npc.speed) * 0.1;
            if (npc.speed <= 0.01) {
                npc.speed = 0;
                createjs.Ticker.removeEventListener("tick", npc.updateSpeed);
            }

        };
        npc.setSpeed = function(s) {
            npc.tarSpeed = s;
            createjs.Ticker.removeEventListener("tick", npc.updateSpeed);
            createjs.Ticker.addEventListener("tick", npc.updateSpeed);
        };
        npc.addNpc = function(dir, prog) {
            ++npc.pointer;
            if (npc.pointer >= npc.pool.length) {
                npc.pointer = 0;
            }
            var type = npc.pointer;
            var url = path + npc.pool[type];
            var img = new Image();
            img.onload = function() {
                var man = new createjs.Bitmap(img);
                var p = {
                    content: man,
                    dir: dir,
                    progress: prog
                };
                npc.list.push(p);
                var rect = man.getBounds();
                man.regX = 0.5 * rect.width;
                man.regY = rect.height;
                npc.render(p);
                npc.addChildAt(man, 0);
                game.stage.update();
            }
            img.src = url;
        };
        npc.init = function() {
            npc.addNpc(-1, 0.7);
            npc.addNpc(-1, 0.2);
            npc.addNpc(1, 0.9);
            npc.addNpc(1, 0.4);
        }();
        npc.render = function(p) {
            var man = p.content;
            var dir = p.dir;
            var prog = p.progress;
            man.scaleY = 1.8 * prog;
            man.scaleX = dir * man.scaleY;
            man.y = prog * npc.hei;
            man.x = p.dir * (npc.offsetX + npc.xyrate * man.y);
        };
        npc.update = function() {
            for (var i = npc.list.length - 1; i >= 0; i--) {
                var p = npc.list[i];
                p.progress += (npc.speed ? 0.003 : 0) + Math.pow(p.progress, 2) * npc.speed * 0.8;
                if (p.progress > 1) {
                    npc.removeChild(p.content);
                    npc.list.splice(i, 1);
                    npc.addNpc(p.dir, Math.random() * 0.01 + 0.01);
                }
                npc.render(p);
            };
        };
        npc.play = function() {
            npc.speed = 0.01;
            npc.setSpeed(1);
            createjs.Ticker.addEventListener("tick", npc.update);
        };
        npc.stop = function() {
            createjs.Ticker.removeEventListener("tick", npc.update);
        };
        //添加玩铁环
        var boy = game.boy = game.boy || {};
        var level = 0;
        boy.getLevel = function() {
            return level;
        }
        boy.resize = function() {
            var a = boy.content;
            if (a) {
                var rect = a.getBounds();
                a.regY = rect.height;
            }
        };
        boy.init = function() {
            var images = [];
            for (var i = 0; i < 15; i++) {
                images.push(path + "play" + i + ".png");
            }
            var data = {
                images: images,
                frames: {
                    width: 640,
                    height: 609
                },
                animations: {
                    __stop: 6,
                    __run0: [6, 8, '__run0', 1],
                    __run1: {
                        frames: [3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3],
                        next: "__run1",
                        speed: 1.5
                    },
                    __run2: {
                        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
                        next: "__run2",
                        speed: 2
                    },
                }
            };
            var spriteSheet = new createjs.SpriteSheet(data);
            var a = new createjs.Sprite(spriteSheet, "__stop");
            spriteSheet.addEventListener("complete", function() {
                boy.content = a;
                boy.resize();
            })
            ground.addChild(a);
        }();
        boy.play = function(l) {
            level = l;
            var c = boy.content;
            if (c) {
                c.gotoAndPlay("__run" + level);
            }
            npc.setSpeed(1 - level / 3);
        };
        boy.stop = function() {
            var c = boy.content;
            if (c) {
                c.gotoAndStop("__stop");
            }
        };
        //添加ui
        var ui = game.ui = new createjs.Container();
        stage.addChild(ui);
        ui.resize = function() {
            ui.x = 0.5 * stageW;
            ui.y = 0.1 * stageH;
            try {
                ui.btns.resize();
            } catch (e) {

            }
        };
        ui.init = function() {
            var titleImg = new Image();
            titleImg.onload = function() {
                var title = new createjs.Bitmap(titleImg);
                var rect = title.getBounds();
                title.regX = 0.5 * rect.width;
                title.y = -70;
                ui.addChild(title);
                game.stage.update();
            }
            titleImg.src = path + "title.png";
            var progress = ui.progress = new createjs.Container();
            ui.addChild(progress);

            var proLength = 0;
            var proValue = 0;
            var handleLength = 0;

            var core_timeout, core_fout, core_rot, core_g, core_p, core_Gl, core_Gs, core_beta, core_omega, core_f, core_a, core_v, core_leftIsDown, core_rightIsDown, core_score, core_rotate;
            progress.reset = function() {
                proValue = 0, core_timeout = 20, core_fout = 1, core_rot = 0, core_g = 3, core_p = Math.random() > 0.5 ? 0.05 : -0.05, core_Gl = 3, core_Gs = 2, core_beta = 0, core_omega = 0, core_f = 0, core_a = 0, core_v = 0, core_leftIsDown = false, core_rightIsDown = false, core_score = 0, core_rotate = 0;
            };
            progress.init = function() {
                progress.reset();
                var barImg = new Image();
                barImg.onload = function() {
                    var bar = progress.bar = new createjs.Bitmap(barImg);
                    var rect = bar.getBounds();
                    proLength = rect.width;
                    bar.regX = 0.5 * rect.width;
                    bar.y = 40;
                    ui.addChildAt(bar, 0);
                    game.stage.update();
                }
                barImg.src = path + "ui_bar.png";

                var handleImg = new Image();
                handleImg.onload = function() {
                    var handle = progress.handle = new createjs.Bitmap(handleImg);
                    var rect = handle.getBounds();
                    handleLength = rect.width;
                    handle.regX = 0.5 * rect.width;
                    handle.y = 30;
                    ui.addChild(handle);
                    game.stage.update();
                }
                handleImg.src = path + "ui_btn.png";
            }();
            progress.setProgress = function(v) {
                    proValue = Math.max(-1, Math.min(v, 1));
                    var abv = Math.abs(proValue);
                    var level = Math.floor(abv * 3);
                    if (level != boy.getLevel()) {
                        boy.play(level);
                    }
                    try {
                        progress.handle.x = proValue * 0.5 * (proLength - handleLength);
                    } catch (e) {
                        console.log(e);
                    }
                    if (abv >= 1) {
                        progress.setProgress(0);
                        game.fail();
                    }
                }
                //

            progress.setRot = function(r) {
                core_rotate = r * 180 / Math.PI;
                // ui.rotation = core_rotate;
            }
            progress.update = function() {
                progress.setProgress(core_p);
                var max = 0.2;
                core_beta = core_p == 0 ? 0 : core_g * Math.cos(core_rot) * core_p * (core_Gs / core_Gl) * (1 + core_Gs / core_Gl);

                core_omega += core_beta * (core_timeout / 1000);
                core_rot += core_omega * (core_timeout / 1000);
                if (core_rot > max * Math.PI) core_rot = max * Math.PI;
                else if (core_rot < -max * Math.PI) core_rot = -max * Math.PI;
                progress.setRot(core_rot);
                core_f = 0;
                if (core_leftIsDown) core_f -= core_fout;
                if (core_rightIsDown) core_f += core_fout;
                core_a = core_g * (core_f / core_Gs + Math.sin(core_rot));
                core_p += core_v * core_timeout / 1000 + 0.5 * core_a * Math.pow(core_timeout / 1000, 2);

                core_v += core_a * core_timeout / 1000;
                if (core_p > 1) core_p = 1;
                else if (core_p < -1) core_p = -1;
            };

            var btns = ui.btns = new createjs.Container();
            stage.addChild(btns);
            btns.resize = function() {
                btns.scaleX = stageW / DW;
                btns.scaleY = stageH / DH;
                // console.log(btns.scaleX, btns.scaleY)
            };
            btns.init = function() {
                $leftBtn.on('touchstart', function(event) {
                     event.preventDefault();
                    core_leftIsDown = true;
                    
                }).on('touchend', function(event) {
                   core_leftIsDown = false;
                });
                $rightBtn.on('touchstart', function(event) {
                     event.preventDefault();
                   core_rightIsDown = true;
                    
                }).on('touchend', function(event) {
                    core_rightIsDown = false;
                });
            }();
            ui.resize();
        }();
        ui.update = function() {
            if (isPlaying) {
                ui.progress.update();
            }
        };
        ui.play = function() {
            ui.progress.reset();
        };
        //刷新canvas
        createjs.Ticker.setFPS(24);
        window.addEventListener("resize", game.resize);
    }
    game.fail = function() {
        game.stop();
    }
    game.play = function() {
        isPlaying = true;
        game.ui.play();
        game.road.play();
        game.girl.play();
        game.npc.play();
        game.boy.play(0);
        createjs.Ticker.addEventListener("tick", game.update);
        lovarv.score = 0;

    };
    game.stop = function() {
        isPlaying = false;
        game.road.stop();
        game.girl.stop();
        game.npc.stop();
        game.boy.stop();
        createjs.Ticker.removeEventListener("tick", game.update);
        game.stage.update();
        $leftBtn.off();
        $rightBtn.off();
        lovarv.showResult();
        createjs.Ticker.removeAllEventListeners();


    };

})(Zepto)
