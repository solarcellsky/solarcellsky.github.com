var Meiriq_game = function() {
    function A(A, e) {
        this.haveShare = 1,
        this.haveGamelist = 0,
        this.resourceCDN = "",
        this.orientation = 1,
        this.gameName = A,
        this.gameType = e,
        this.gameScore,
        this.gameLevel,
        this.permitStart = 1,
        this.gameScore = window.localStorage.getItem(A + "Score") ? Number(window.localStorage.getItem(A + "Score")) : 0,
        this.gameLevel = window.localStorage.getItem(A + "Level") ? Number(window.localStorage.getItem(A + "Level")) : 0
    }
    var e = A.prototype;
    return e.cb_gameover = function(A, e) {
        function t(A, e) {
            var t = document.querySelector("#btnWrap"),
            Q = document.createElement("img");
            return t ? (Q.setAttribute("src", A), Q.style.width = "45%", Q.style.padding = "0 2%", t.appendChild(Q), window.navigator.userAgent.toLowerCase().indexOf("mobile") >= 0 ? (Q.addEventListener("touchstart",
            function(A) {
                A.preventDefault(),
                this.setAttribute("src", e)
            },
            !1), Q.addEventListener("touchend",
            function(e) {
                e.preventDefault(),
                this.setAttribute("src", A)
            },
            !1)) : (Q.addEventListener("mousedown",
            function(A) {
                A.preventDefault(),
                Q.setAttribute("src", e)
            },
            !1), document.addEventListener("mouseup",
            function(e) {
                e.preventDefault(),
                Q.setAttribute("src", A)
            },
            !0)), Q) : !1
        }
        function Q(A, e) {
            c += e,
            c >= A ? c = A: setTimeout(function() {
                Q(A, e)
            },
            50);
            for (var t = Math.floor(c), i = 0; v - 1 > i; i++) {
                var I = Math.pow(10, v - i - 1);
                h[i].src = s[Math.floor(t / I)],
                t %= I
            }
            h[i].src = s[t]
        }
        if (A = Number(A), "undefined" == typeof window.post_score || 0 !== window.post_score(A)) {
            var i = this,
            I = "resource/assets/replay.png",
            g = "resource/assets/replay.png",
            a = "resource/assets/paihang.png",
            E = "resource/assets/paihang.png",
            C = "resource/assets/more.png",
            o = "resource/assets/more.png",
            n = this.updateScore(A),
            r = document.createElement("div");
            r.setAttribute("id", "meiriq_over"),
            r.style.position = "absolute",
            r.style.width = "100%",
            r.style.height = "100%",
            r.style.top = "0",
            r.style.left = "0",
            r.style.bottom = "0",
            r.style.right = "0",
            r.style.textAlign = "center",
            r.style.zIndex = "100",
            r.innerHTML = '<div style="width:100%;height:100%;background-color: #000000;opacity: 0.5;"></div><div id="mainWrap" style="width:80%;background-color: #ffffff;border-radius: 10px;position:absolute;bottom:0;left:0;right:0;top:0;margin:auto;"><div id="scoreWrap" style="text-align: center;margin-top:-20%;width: 100%;"></div><div id="highscoreWrap" style="width:100%;"><span id="highscore" style="color:#565656;font-size: 18px;"></span></div><div id="iconWrap" style="position:relative;width:100%;margin-top: 2%;"></div><div id="btnWrap"  style="text-align: center;position: absolute;bottom: -10%;width: 100%;"></div>',
            document.body.appendChild(r);
            var f = document.querySelector("#mainWrap");
            window.innerHeight >= window.innerWidth || (f.style.width = "40%"),
            f.style.height = .85 * f.offsetWidth + "px";
            var B = t(I, g);
            window.navigator.userAgent.toLowerCase().indexOf("mobile") >= 0 ? B.addEventListener("touchend",
            function(A) {
                i.cb_restart()
            },
            !1) : B.addEventListener("click",
            function(A) {
                i.cb_restart()
            },
            !1);
            var R = null; ! this.haveShare && this.haveGamelist ? (R = t(C, o), window.navigator.userAgent.toLowerCase().indexOf("mobile") >= 0 ? R.addEventListener("touchend",
            function(A) {
                i.cb_more()
            },
            !1) : R.addEventListener("click",
            function(A) {
                i.cb_more()
            },
            !1)) : (this.haveShare || this.haveGamelist) && (R = t(a, E), window.navigator.userAgent.toLowerCase().indexOf("mobile") >= 0 ? R.addEventListener("touchend",
            function(A) {
                i.cb_paihang()
            },
            !1) : R.addEventListener("click",
            function(A) {
                i.cb_paihang()
            },
            !1));
            var s = ["resource/assets/num/0.png","resource/assets/num/1.png","resource/assets/num/2.png","resource/assets/num/3.png","resource/assets/num/4.png","resource/assets/num/5.png","resource/assets/num/6.png","resource/assets/num/7.png","resource/assets/num/8.png","resource/assets/num/9.png"],
            h = [],
            S = document.querySelector("#scoreWrap"),
            v = A.toString().length,
            c = 0,
            J = A / 10,
            M = "20%";

            v > 3 && (M = "14%", S.style.marginTop = "-12%");
            for (var d = 0; v > d; d++) {
                var k = document.createElement("img");
                h.push(k),
                k.id = "score" + d,
                k.style.width = M,
                k.src = s[0],
                S.appendChild(k)
            }
            Q(A, J);
            var U = document.querySelector("#highscore");
            U.innerHTML = "score" == this.gameType ? "最高分：" + this.gameScore: "最高分：" + this.gameLevel;
            console.log(this.gameScore);
            var w = document.querySelector("#iconWrap"),
            j = document.querySelector("#highscoreWrap");
            if (e) {
                var F = document.createElement("img");
                F.style.width = "70%",
                F.src = "resource/assets/" + e,
                w.appendChild(F),
                F.onload = function() {
                    F.offsetWidth / F.offsetHeight < 1.6 && (F.style.width = "40%");
                    var A = f.offsetHeight,
                    e = (A - j.offsetHeight - .1 * A - (S.offsetHeight - .2 * A) - F.offsetHeight) / 2;
                    w.style.marginTop = e + "px"
                }
            } else if ("win" == n) {
                var G = "resource/assets/win.png",
                p = "resource/assets/light.png",
                m = document.createElement("img");

                m.src = p,
                m.style.width = "50%",
                m.id = "winlight",
                w.appendChild(m);
                var K = document.createElement("img");
                K.src = G,
                K.style.width = "30%",
                K.style.position = "absolute",
                w.appendChild(K),
                K.onload = function() {
                    K.style.left = (w.offsetWidth - K.offsetWidth) / 2 + "px",
                    K.style.top = (w.offsetHeight - K.offsetHeight) / 2 + "px";
                    var A = 0;
                    winIni = setInterval(function() {
                        A += 90,
                        m.style.webkitTransform = "rotate(" + A + "deg)"
                    },
                    100)
                }
            } else {
                var Y = "resource/assets/lost.png",
                N = "resource/assets/wuya.png";
                w.style.marginTop = "10%";
                var W = document.createElement("img");
                W.src = N,
                W.style.width = "20%",
                W.id = "karas",
                W.style.position = "absolute",
                w.appendChild(W);
                var b = document.createElement("img");
                b.src = Y,
                b.style.width = "70%",
                w.appendChild(b),
                b.onload = function() {
                    W.style.top = (b.offsetHeight - W.offsetHeight) / 2 + "px",
                    W.style.left = b.offsetWidth + "px"
                };
                var H = document.createElement("style");
                H.innerHTML = '@-webkit-keyframes "loseAni" {0%{left:' + b.offsetWidth + 'px;opacity:1} 50%{opacity:1;} 100%{left:0px;opacity:0}} #karas{-webkit-animation-name:"loseAni"; -webkit-animation-duration: 1.5s;-webkit-animation-timing-function: ease-in;-webkit-animation-iteration-count: infinite;-webkit-animation-direction:normal;}',
                document.head.appendChild(H)
            }
        }
    },
    e.cb_levelwin = function(A) {
        this.updateScore(A)
    },
    e.cb_finishload = function() {},
    e.cb_start = function() {
        return this.permitStart
    },
    e.cb_restart = function() {
        this.removeGameover(),
        this.home()
    },
    e.cb_paihang = function() {
        alert('排行');
    },
    e.cb_more = function() {
        // alert('msg');
    },
    e.home = function() {
        "function" == typeof window.home && window.home.call(window.home_context)
    },
    e.pause = function() {
        window.pause.call(window.pause_context)
    },
    e.resume = function() {
        window.resume.call(window.resume_context)
    },
    e.removeGameover = function() {
        "undefined" != typeof winIni && clearInterval(winIni);
        var A = document.querySelector("#meiriq_over");
        A && A.parentNode.removeChild(A)
    },
    e.updateScore = function(A) {
        if ("score" == this.gameType) {
            if (A > this.gameScore) return window.localStorage.setItem(this.gameName + "Score", String(A)),
            this.gameScore = A,
            "win"
        } else if (A > this.gameLevel) return window.localStorage.setItem(this.gameName + "Level", String(A)),
        this.gameLevel = A,
        "win";
        return "lose"
    },
    e.__class__ = "Meiriq_game",
    A
} ();