var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "Select Player",
        Win: "You win!",
        Lose: "You lose!",
        Score: "Score",
        Time: "Time",
        Pause: "PAUSED",
        Empty: "PAUSED",
        Tut: "Avoid car from touching the sides"
    },
    Results: {
        Title: "High score"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !0,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !0
        },
        Logo: {
            Enabled: !1,
            Link: "http://marketjs.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !0,
        Link: "",
        NewWindow: !1
    },
    Gamecenter: {
        Enabled: !0
    }
};
var MobileAdInGamePreroll = {
	/*
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
                c = b.MobileAdInGamePreroll,
                d =
                c + b.MobileAdInGamePreroll2,
                b = d + b.MobileAdInGamePreroll3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : f <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : f <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
            console.log("Ad rotating preroll enabled")
        } else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
            this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
                MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
                    MobileAdInGamePreroll.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
    */
};
var MobileAdInGameHeader = {
	/*
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
                c = b.MobileAdInGameHeader,
                d = c + b.MobileAdInGameHeader2,
                b = d + b.MobileAdInGameHeader3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : f <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" :
                f <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
            console.log("Ad rotating header enabled")
        } else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", 0);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
        }, 1E3)
    }
    */
};
var MobileAdInGameFooter = {
	/*
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                c = b.MobileAdInGameFooter,
                d = c + b.MobileAdInGameFooter2,
                b = d + b.MobileAdInGameFooter3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : f <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" :
                f <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
            console.log("Ad rotating footer enabled")
        } else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", this.game.height() - this.div.height() - 5);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
        }, 1E3)
    }
    */
};
var MobileAdInGameEnd = {
	/*
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
                c = b.MobileAdInGameEnd,
                d = c + b.MobileAdInGameEnd2,
                b = d + b.MobileAdInGameEnd3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : f <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : f <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
            console.log("Ad rotating end enabled")
        } else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
                MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
    */
};
(function(b, c) {
    function d(p, b, r) {
        if (r === c && 1 === p.nodeType)
            if (r = "data-" + b.replace(sc, "-$1").toLowerCase(), r = p.getAttribute(r), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : tc.test(r) ? e.parseJSON(r) : r
                } catch (J) {}
                e.data(p, b, r)
            } else r = c;
        return r
    }

    function f(p) {
        for (var b in p)
            if (!("data" === b && e.isEmptyObject(p[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function g() {
        return !1
    }

    function m() {
        return !0
    }

    function y(p) {
        return !p || !p.parentNode || 11 === p.parentNode.nodeType
    }

    function u(p,
        b) {
        do p = p[b]; while (p && 1 !== p.nodeType);
        return p
    }

    function x(p, b, r) {
        b = b || 0;
        if (e.isFunction(b)) return e.grep(p, function(p, c) {
            return !!b.call(p, c, p) === r
        });
        if (b.nodeType) return e.grep(p, function(p) {
            return p === b === r
        });
        if ("string" == typeof b) {
            var c = e.grep(p, function(p) {
                return 1 === p.nodeType
            });
            if (uc.test(b)) return e.filter(b, c, !r);
            b = e.filter(b, c)
        }
        return e.grep(p, function(p) {
            return 0 <= e.inArray(p, b) === r
        })
    }

    function t(p) {
        var b = wb.split("|");
        p = p.createDocumentFragment();
        if (p.createElement)
            for (; b.length;) p.createElement(b.pop());
        return p
    }

    function z(p, b) {
        if (1 === b.nodeType && e.hasData(p)) {
            var r, c, d;
            c = e._data(p);
            var v = e._data(b, c),
                n = c.events;
            if (n)
                for (r in delete v.handle, v.events = {}, n) {
                    c = 0;
                    for (d = n[r].length; c < d; c++) e.event.add(b, r, n[r][c])
                }
            v.data && (v.data = e.extend({}, v.data))
        }
    }

    function j(p, b) {
        var r;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(p), r = b.nodeName.toLowerCase(), "object" === r ? (b.parentNode && (b.outerHTML = p.outerHTML), e.support.html5Clone && p.innerHTML && !e.trim(b.innerHTML) &&
            (b.innerHTML = p.innerHTML)) : "input" === r && xb.test(p.type) ? (b.defaultChecked = b.checked = p.checked, b.value !== p.value && (b.value = p.value)) : "option" === r ? b.selected = p.defaultSelected : "input" === r || "textarea" === r ? b.defaultValue = p.defaultValue : "script" === r && b.text !== p.text && (b.text = p.text), b.removeAttribute(e.expando))
    }

    function q(p) {
        return "undefined" != typeof p.getElementsByTagName ? p.getElementsByTagName("*") : "undefined" != typeof p.querySelectorAll ? p.querySelectorAll("*") : []
    }

    function s(p) {
        xb.test(p.type) && (p.defaultChecked =
            p.checked)
    }

    function C(p, b) {
        if (b in p) return b;
        for (var r = b.charAt(0).toUpperCase() + b.slice(1), c = b, e = yb.length; e--;)
            if (b = yb[e] + r, b in p) return b;
        return c
    }

    function G(p, b) {
        return p = b || p, "none" === e.css(p, "display") || !e.contains(p.ownerDocument, p)
    }

    function D(p, b) {
        for (var r, c, d = [], v = 0, n = p.length; v < n; v++) r = p[v], r.style && (d[v] = e._data(r, "olddisplay"), b ? (!d[v] && "none" === r.style.display && (r.style.display = ""), "" === r.style.display && G(r) && (d[v] = e._data(r, "olddisplay", L(r.nodeName)))) : (c = Q(r, "display"), !d[v] && "none" !==
            c && e._data(r, "olddisplay", c)));
        for (v = 0; v < n; v++)
            if (r = p[v], r.style && (!b || "none" === r.style.display || "" === r.style.display)) r.style.display = b ? d[v] || "" : "none";
        return p
    }

    function E(p, b, r) {
        return (p = vc.exec(b)) ? Math.max(0, p[1] - (r || 0)) + (p[2] || "px") : b
    }

    function Xa(p, b, r, c) {
        b = r === (c ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var d = 0; 4 > b; b += 2) "margin" === r && (d += e.css(p, r + ea[b], !0)), c ? ("content" === r && (d -= parseFloat(Q(p, "padding" + ea[b])) || 0), "margin" !== r && (d -= parseFloat(Q(p, "border" + ea[b] + "Width")) || 0)) : (d += parseFloat(Q(p,
            "padding" + ea[b])) || 0, "padding" !== r && (d += parseFloat(Q(p, "border" + ea[b] + "Width")) || 0));
        return d
    }

    function M(p, b, r) {
        var c = "width" === b ? p.offsetWidth : p.offsetHeight,
            d = !0,
            v = e.support.boxSizing && "border-box" === e.css(p, "boxSizing");
        if (0 >= c || null == c) {
            c = Q(p, b);
            if (0 > c || null == c) c = p.style[b];
            if (ya.test(c)) return c;
            d = v && (e.support.boxSizingReliable || c === p.style[b]);
            c = parseFloat(c) || 0
        }
        return c + Xa(p, b, r || (v ? "border" : "content"), d) + "px"
    }

    function L(p) {
        if (Ya[p]) return Ya[p];
        var b = e("<" + p + ">").appendTo(B.body),
            r = b.css("display");
        b.remove();
        if ("none" === r || "" === r) {
            la = B.body.appendChild(la || e.extend(B.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!ma || !la.createElement) ma = (la.contentWindow || la.contentDocument).document, ma.write("<!doctype html><html><body>"), ma.close();
            b = ma.body.appendChild(ma.createElement(p));
            r = Q(b, "display");
            B.body.removeChild(la)
        }
        return Ya[p] = r, r
    }

    function P(p, b, r, c) {
        var d;
        if (e.isArray(b)) e.each(b, function(b, l) {
            r || wc.test(p) ? c(p, l) : P(p + "[" + ("object" == typeof l ? b : "") + "]", l, r, c)
        });
        else if (!r &&
            "object" === e.type(b))
            for (d in b) P(p + "[" + d + "]", b[d], r, c);
        else c(p, b)
    }

    function za(p) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var J, d, v = b.toLowerCase().split(fa),
                n = 0,
                f = v.length;
            if (e.isFunction(c))
                for (; n < f; n++) J = v[n], (d = /^\+/.test(J)) && (J = J.substr(1) || "*"), J = p[J] = p[J] || [], J[d ? "unshift" : "push"](c)
        }
    }

    function na(p, b, r, e, d, v) {
        d = d || b.dataTypes[0];
        v = v || {};
        v[d] = !0;
        var n;
        d = p[d];
        for (var f = 0, j = d ? d.length : 0, g = p === Za; f < j && (g || !n); f++) n = d[f](b, r, e), "string" == typeof n && (!g || v[n] ? n = c : (b.dataTypes.unshift(n),
            n = na(p, b, r, e, n, v)));
        return (g || !n) && !v["*"] && (n = na(p, b, r, e, "*", v)), n
    }

    function sa(p, b) {
        var r, J, d = e.ajaxSettings.flatOptions || {};
        for (r in b) b[r] !== c && ((d[r] ? p : J || (J = {}))[r] = b[r]);
        J && e.extend(!0, p, J)
    }

    function zb() {
        try {
            return new b.XMLHttpRequest
        } catch (p) {}
    }

    function Ab() {
        return setTimeout(function() {
            Aa = c
        }, 0), Aa = e.now()
    }

    function Bb(p, b, c) {
        var J, d = 0,
            v = Ba.length,
            n = e.Deferred().always(function() {
                delete f.elem
            }),
            f = function() {
                for (var b = Aa || Ab(), b = Math.max(0, j.startTime + j.duration - b), l = 1 - (b / j.duration || 0), c =
                    0, r = j.tweens.length; c < r; c++) j.tweens[c].run(l);
                return n.notifyWith(p, [j, l, b]), 1 > l && r ? b : (n.resolveWith(p, [j]), !1)
            },
            j = n.promise({
                elem: p,
                props: e.extend({}, b),
                opts: e.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Aa || Ab(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, l) {
                    var c = e.Tween(p, j.opts, b, l, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(c), c
                },
                stop: function(b) {
                    for (var l = 0, c = b ? j.tweens.length : 0; l < c; l++) j.tweens[l].run(1);
                    return b ? n.resolveWith(p, [j, b]) : n.rejectWith(p, [j, b]), this
                }
            });
        b = j.props;
        c = j.opts.specialEasing;
        var g, q, s, u;
        for (J in b)
            if (g = e.camelCase(J), q = c[g], s = b[J], e.isArray(s) && (q = s[1], s = b[J] = s[0]), J !== g && (b[g] = s, delete b[J]), (u = e.cssHooks[g]) && "expand" in u)
                for (J in s = u.expand(s), delete b[g], s) J in b || (b[J] = s[J], c[J] = q);
            else c[g] = q;
        for (; d < v; d++)
            if (J = Ba[d].call(j, p, b, j.opts)) return J;
        var m = j;
        e.each(b, function(b, p) {
            for (var l = (ta[b] || []).concat(ta["*"]), c = 0, r = l.length; c < r && !l[c].call(m, b, p); c++);
        });
        return e.isFunction(j.opts.start) && j.opts.start.call(p,
            j), e.fx.timer(e.extend(f, {
            anim: j,
            queue: j.opts.queue,
            elem: p
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function S(b, l, c, e, d) {
        return new S.prototype.init(b, l, c, e, d)
    }

    function Ca(b, l) {
        var c, e = {
                height: b
            },
            d = 0;
        for (l = l ? 1 : 0; 4 > d; d += 2 - l) c = ea[d], e["margin" + c] = e["padding" + c] = b;
        return l && (e.opacity = e.width = b), e
    }

    function Cb(b) {
        return e.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var Db, Da, B = b.document,
        yc = b.location,
        zc = b.navigator,
        Ac =
        b.jQuery,
        Bc = b.$,
        Eb = Array.prototype.push,
        Z = Array.prototype.slice,
        Fb = Array.prototype.indexOf,
        Cc = Object.prototype.toString,
        $a = Object.prototype.hasOwnProperty,
        ab = String.prototype.trim,
        e = function(b, l) {
            return new e.fn.init(b, l, Db)
        },
        Ea = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Dc = /\S/,
        fa = /\s+/,
        Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Gc = /^[\],:{}\s]*$/,
        Hc = /(?:^|:|,)(?:\s*\[)+/g,
        Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Kc = /^-ms-/,
        Lc = /-([\da-z])/gi,
        Mc = function(b, l) {
            return (l + "").toUpperCase()
        },
        Fa = function() {
            B.addEventListener ? (B.removeEventListener("DOMContentLoaded", Fa, !1), e.ready()) : "complete" === B.readyState && (B.detachEvent("onreadystatechange", Fa), e.ready())
        },
        Hb = {};
    e.fn = e.prototype = {
        constructor: e,
        init: function(b, l, r) {
            var d, A;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? d = [null, b, null] : d = Fc.exec(b);
                if (d && (d[1] || !l)) {
                    if (d[1]) return l = l instanceof e ? l[0] : l, A = l && l.nodeType ? l.ownerDocument || l : B, b = e.parseHTML(d[1], A, !0), Gb.test(d[1]) && e.isPlainObject(l) && this.attr.call(b, l, !0), e.merge(this, b);
                    if ((l = B.getElementById(d[2])) && l.parentNode) {
                        if (l.id !== d[2]) return r.find(b);
                        this.length = 1;
                        this[0] = l
                    }
                    return this.context = B, this.selector = b, this
                }
                return !l || l.jquery ? (l || r).find(b) : this.constructor(l).find(b)
            }
            return e.isFunction(b) ? r.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), e.makeArray(b,
                this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return Z.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, l, c) {
            b = e.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === l ? b.selector = this.selector + (this.selector ? " " : "") + c : l && (b.selector = this.selector + "." + l + "(" + c + ")"), b
        },
        each: function(b, l) {
            return e.each(this, b, l)
        },
        ready: function(b) {
            return e.ready.promise().done(b),
                this
        },
        eq: function(b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments), "slice", Z.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(e.map(this, function(l, c) {
                return b.call(l, c, l)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Eb,
        sort: [].sort,
        splice: [].splice
    };
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function() {
        var b, l,
            r, d, A, v, n = arguments[0] || {},
            j = 1,
            f = arguments.length,
            g = !1;
        "boolean" == typeof n && (g = n, n = arguments[1] || {}, j = 2);
        "object" != typeof n && !e.isFunction(n) && (n = {});
        for (f === j && (n = this, --j); j < f; j++)
            if (null != (b = arguments[j]))
                for (l in b) r = n[l], d = b[l], n !== d && (g && d && (e.isPlainObject(d) || (A = e.isArray(d))) ? (A ? (A = !1, v = r && e.isArray(r) ? r : []) : v = r && e.isPlainObject(r) ? r : {}, n[l] = e.extend(g, v, d)) : d !== c && (n[l] = d));
        return n
    };
    e.extend({
        noConflict: function(p) {
            return b.$ === e && (b.$ = Bc), p && b.jQuery === e && (b.jQuery = Ac), e
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? e.readyWait++ : e.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b ? --e.readyWait : e.isReady)) {
                if (!B.body) return setTimeout(e.ready, 1);
                e.isReady = !0;
                !0 !== b && 0 < --e.readyWait || (Da.resolveWith(B, [e]), e.fn.trigger && e(B).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === e.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === e.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return null ==
                b ? String(b) : Hb[Cc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== e.type(b) || b.nodeType || e.isWindow(b)) return !1;
            try {
                if (b.constructor && !$a.call(b, "constructor") && !$a.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (l) {
                return !1
            }
            for (var r in b);
            return r === c || $a.call(b, r)
        },
        isEmptyObject: function(b) {
            for (var l in b) return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, l, c) {
            var d;
            return !b || "string" != typeof b ? null : ("boolean" == typeof l && (c = l, l = 0), l = l || B, (d =
                Gb.exec(b)) ? [l.createElement(d[1])] : (d = e.buildFragment([b], l, c ? null : []), e.merge([], (d.cacheable ? e.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function(p) {
            if (!p || "string" != typeof p) return null;
            p = e.trim(p);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(p);
            if (Gc.test(p.replace(Ic, "@").replace(Jc, "]").replace(Hc, ""))) return (new Function("return " + p))();
            e.error("Invalid JSON: " + p)
        },
        parseXML: function(p) {
            var l, r;
            if (!p || "string" != typeof p) return null;
            try {
                b.DOMParser ? (r = new DOMParser, l = r.parseFromString(p,
                    "text/xml")) : (l = new ActiveXObject("Microsoft.XMLDOM"), l.async = "false", l.loadXML(p))
            } catch (d) {
                l = c
            }
            return (!l || !l.documentElement || l.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + p), l
        },
        noop: function() {},
        globalEval: function(p) {
            p && Dc.test(p) && (b.execScript || function(p) {
                b.eval.call(b, p)
            })(p)
        },
        camelCase: function(b) {
            return b.replace(Kc, "ms-").replace(Lc, Mc)
        },
        nodeName: function(b, l) {
            return b.nodeName && b.nodeName.toLowerCase() === l.toLowerCase()
        },
        each: function(b, l, r) {
            var d, A = 0,
                v = b.length,
                n = v === c || e.isFunction(b);
            if (r)
                if (n)
                    for (d in b) {
                        if (!1 === l.apply(b[d], r)) break
                    } else
                        for (; A < v && !1 !== l.apply(b[A++], r););
                else if (n)
                for (d in b) {
                    if (!1 === l.call(b[d], d, b[d])) break
                } else
                    for (; A < v && !1 !== l.call(b[A], A, b[A++]););
            return b
        },
        trim: ab && !ab.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : ab.call(b)
        } : function(b) {
            return null == b ? "" : (b + "").replace(Ec, "")
        },
        makeArray: function(b, l) {
            var c, d = l || [];
            return null != b && (c = e.type(b), null == b.length || "string" === c || "function" === c || "regexp" === c || e.isWindow(b) ? Eb.call(d,
                b) : e.merge(d, b)), d
        },
        inArray: function(b, l, c) {
            var e;
            if (l) {
                if (Fb) return Fb.call(l, b, c);
                e = l.length;
                for (c = c ? 0 > c ? Math.max(0, e + c) : c : 0; c < e; c++)
                    if (c in l && l[c] === b) return c
            }
            return -1
        },
        merge: function(b, l) {
            var r = l.length,
                e = b.length,
                d = 0;
            if ("number" == typeof r)
                for (; d < r; d++) b[e++] = l[d];
            else
                for (; l[d] !== c;) b[e++] = l[d++];
            return b.length = e, b
        },
        grep: function(b, l, c) {
            var e, d = [],
                v = 0,
                n = b.length;
            for (c = !!c; v < n; v++) e = !!l(b[v], v), c !== e && d.push(b[v]);
            return d
        },
        map: function(b, l, r) {
            var d, A, v = [],
                n = 0,
                j = b.length;
            if (b instanceof e ||
                j !== c && "number" == typeof j && (0 < j && b[0] && b[j - 1] || 0 === j || e.isArray(b)))
                for (; n < j; n++) d = l(b[n], n, r), null != d && (v[v.length] = d);
            else
                for (A in b) d = l(b[A], A, r), null != d && (v[v.length] = d);
            return v.concat.apply([], v)
        },
        guid: 1,
        proxy: function(b, l) {
            var r, d, A;
            return "string" == typeof l && (r = b[l], l = b, b = r), e.isFunction(b) ? (d = Z.call(arguments, 2), A = function() {
                return b.apply(l, d.concat(Z.call(arguments)))
            }, A.guid = b.guid = b.guid || e.guid++, A) : c
        },
        access: function(b, l, r, d, A, v, n) {
            var j, f = null == r,
                g = 0,
                q = b.length;
            if (r && "object" == typeof r) {
                for (g in r) e.access(b,
                    l, g, r[g], 1, v, d);
                A = 1
            } else if (d !== c) {
                j = n === c && e.isFunction(d);
                f && (j ? (j = l, l = function(b, p, l) {
                    return j.call(e(b), l)
                }) : (l.call(b, d), l = null));
                if (l)
                    for (; g < q; g++) l(b[g], r, j ? d.call(b[g], g, l(b[g], r)) : d, n);
                A = 1
            }
            return A ? b : f ? l.call(b) : q ? l(b[0], r) : v
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    e.ready.promise = function(p) {
        if (!Da)
            if (Da = e.Deferred(), "complete" === B.readyState) setTimeout(e.ready, 1);
            else if (B.addEventListener) B.addEventListener("DOMContentLoaded", Fa, !1), b.addEventListener("load", e.ready, !1);
        else {
            B.attachEvent("onreadystatechange",
                Fa);
            b.attachEvent("onload", e.ready);
            var l = !1;
            try {
                l = null == b.frameElement && B.documentElement
            } catch (c) {}
            l && l.doScroll && function A() {
                if (!e.isReady) {
                    try {
                        l.doScroll("left")
                    } catch (b) {
                        return setTimeout(A, 50)
                    }
                    e.ready()
                }
            }()
        }
        return Da.promise(p)
    };
    e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, l) {
        Hb["[object " + l + "]"] = l.toLowerCase()
    });
    Db = e(B);
    var Ib = {};
    e.Callbacks = function(b) {
        var l;
        if ("string" == typeof b) {
            if (!(l = Ib[b])) {
                l = b;
                var r = Ib[l] = {};
                l = (e.each(l.split(fa), function(b,
                    p) {
                    r[p] = !0
                }), r)
            }
        } else l = e.extend({}, b);
        b = l;
        var d, A, v, n, j, f, g = [],
            q = !b.once && [],
            s = function(l) {
                d = b.memory && l;
                A = !0;
                f = n || 0;
                n = 0;
                j = g.length;
                for (v = !0; g && f < j; f++)
                    if (!1 === g[f].apply(l[0], l[1]) && b.stopOnFalse) {
                        d = !1;
                        break
                    }
                v = !1;
                g && (q ? q.length && s(q.shift()) : d ? g = [] : u.disable())
            },
            u = {
                add: function() {
                    if (g) {
                        var l = g.length;
                        (function xc(l) {
                            e.each(l, function(l, c) {
                                var r = e.type(c);
                                "function" === r && (!b.unique || !u.has(c)) ? g.push(c) : c && c.length && "string" !== r && xc(c)
                            })
                        })(arguments);
                        v ? j = g.length : d && (n = l, s(d))
                    }
                    return this
                },
                remove: function() {
                    return g &&
                        e.each(arguments, function(b, p) {
                            for (var l; - 1 < (l = e.inArray(p, g, l));) g.splice(l, 1), v && (l <= j && j--, l <= f && f--)
                        }), this
                },
                has: function(b) {
                    return -1 < e.inArray(b, g)
                },
                empty: function() {
                    return g = [], this
                },
                disable: function() {
                    return g = q = d = c, this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    return q = c, d || u.disable(), this
                },
                locked: function() {
                    return !q
                },
                fireWith: function(b, p) {
                    return p = p || [], p = [b, p.slice ? p.slice() : p], g && (!A || q) && (v ? q.push(p) : s(p)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!A
                }
            };
        return u
    };
    e.extend({
        Deferred: function(b) {
            var l = [
                    ["resolve", "done", e.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", e.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", e.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return A.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return e.Deferred(function(p) {
                            e.each(l, function(l, c) {
                                var r = c[0],
                                    d = b[l];
                                A[c[1]](e.isFunction(d) ? function() {
                                    var b = d.apply(this, arguments);
                                    b && e.isFunction(b.promise) ?
                                        b.promise().done(p.resolve).fail(p.reject).progress(p.notify) : p[r + "With"](this === A ? p : this, [b])
                                } : p[r])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? e.extend(b, d) : d
                    }
                },
                A = {};
            return d.pipe = d.then, e.each(l, function(b, p) {
                var e = p[2],
                    j = p[3];
                d[p[1]] = e.add;
                j && e.add(function() {
                    c = j
                }, l[b ^ 1][2].disable, l[2][2].lock);
                A[p[0]] = e.fire;
                A[p[0] + "With"] = e.fireWith
            }), d.promise(A), b && b.call(A, A), A
        },
        when: function(b) {
            var l = 0,
                c = Z.call(arguments),
                d = c.length,
                A = 1 !== d || b && e.isFunction(b.promise) ? d : 0,
                v = 1 === A ? b : e.Deferred(),
                n = function(b, p, l) {
                    return function(c) {
                        p[b] = this;
                        l[b] = 1 < arguments.length ? Z.call(arguments) : c;
                        l === j ? v.notifyWith(p, l) : --A || v.resolveWith(p, l)
                    }
                },
                j, f, g;
            if (1 < d) {
                j = Array(d);
                f = Array(d);
                for (g = Array(d); l < d; l++) c[l] && e.isFunction(c[l].promise) ? c[l].promise().done(n(l, g, c)).fail(v.reject).progress(n(l, f, j)) : --A
            }
            return A || v.resolveWith(g, c), v.promise()
        }
    });
    var Nc = e,
        bb, O, Ga, ga, Ha, Ia, T, ha, Ja, cb, ua, Jb, K = B.createElement("div");
    K.setAttribute("className", "t");
    K.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ga = K.getElementsByTagName("*");
    ga = K.getElementsByTagName("a")[0];
    ga.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ga || !Ga.length) bb = {};
    else {
        Ha = B.createElement("select");
        Ia = Ha.appendChild(B.createElement("option"));
        T = K.getElementsByTagName("input")[0];
        O = {
            leadingWhitespace: 3 === K.firstChild.nodeType,
            tbody: !K.getElementsByTagName("tbody").length,
            htmlSerialize: !!K.getElementsByTagName("link").length,
            style: /top/.test(ga.getAttribute("style")),
            hrefNormalized: "/a" === ga.getAttribute("href"),
            opacity: /^0.5/.test(ga.style.opacity),
            cssFloat: !!ga.style.cssFloat,
            checkOn: "on" === T.value,
            optSelected: Ia.selected,
            getSetAttribute: "t" !== K.className,
            enctype: !!B.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== B.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === B.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        T.checked = !0;
        O.noCloneChecked = T.cloneNode(!0).checked;
        Ha.disabled = !0;
        O.optDisabled = !Ia.disabled;
        try {
            delete K.test
        } catch (Pd) {
            O.deleteExpando = !1
        }!K.addEventListener && K.attachEvent && K.fireEvent && (K.attachEvent("onclick", Jb = function() {
            O.noCloneEvent = !1
        }), K.cloneNode(!0).fireEvent("onclick"), K.detachEvent("onclick", Jb));
        T = B.createElement("input");
        T.value = "t";
        T.setAttribute("type", "radio");
        O.radioValue = "t" === T.value;
        T.setAttribute("checked", "checked");
        T.setAttribute("name", "t");
        K.appendChild(T);
        ha = B.createDocumentFragment();
        ha.appendChild(K.lastChild);
        O.checkClone =
            ha.cloneNode(!0).cloneNode(!0).lastChild.checked;
        O.appendChecked = T.checked;
        ha.removeChild(T);
        ha.appendChild(K);
        if (K.attachEvent)
            for (cb in {
                submit: !0,
                change: !0,
                focusin: !0
            }) Ja = "on" + cb, (ua = Ja in K) || (K.setAttribute(Ja, "return;"), ua = "function" == typeof K[Ja]), O[cb + "Bubbles"] = ua;
        bb = (e(function() {
            var p, l, c, e, d = B.getElementsByTagName("body")[0];
            d && (p = B.createElement("div"), p.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", d.insertBefore(p, d.firstChild), l = B.createElement("div"),
                p.appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c = l.getElementsByTagName("td"), c[0].style.cssText = "padding:0;margin:0;border:0;display:none", ua = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", O.reliableHiddenOffsets = ua && 0 === c[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", O.boxSizing =
                4 === l.offsetWidth, O.doesNotIncludeMarginInBodyOffset = 1 !== d.offsetTop, b.getComputedStyle && (O.pixelPosition = "1%" !== (b.getComputedStyle(l, null) || {}).top, O.boxSizingReliable = "4px" === (b.getComputedStyle(l, null) || {
                    width: "4px"
                }).width, e = B.createElement("div"), e.style.cssText = l.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", e.style.marginRight = e.style.width = "0", l.style.width = "1px", l.appendChild(e), O.reliableMarginRight = !parseFloat((b.getComputedStyle(e, null) || {}).marginRight)),
                "undefined" != typeof l.style.zoom && (l.innerHTML = "", l.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", O.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.style.overflow = "visible", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", O.shrinkWrapBlocks = 3 !== l.offsetWidth, p.style.zoom = 1), d.removeChild(p))
        }), ha.removeChild(K), Ga = ga = Ha = Ia = T = ha = K = null, O)
    }
    Nc.support = bb;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        sc = /([A-Z])/g;
    e.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? e.cache[b[e.expando]] : b[e.expando], !!b && !f(b)
        },
        data: function(b, l, r, d) {
            if (e.acceptData(b)) {
                var A, v, n = e.expando,
                    j = "string" == typeof l,
                    f = b.nodeType,
                    g = f ? e.cache : b,
                    q = f ? b[n] : b[n] && n;
                if (q && g[q] && (d || g[q].data) || !(j && r === c)) {
                    q || (f ? b[n] = q = e.deletedIds.pop() || e.guid++ : q = n);
                    g[q] || (g[q] = {},
                        f || (g[q].toJSON = e.noop));
                    if ("object" == typeof l || "function" == typeof l) d ? g[q] = e.extend(g[q], l) : g[q].data = e.extend(g[q].data, l);
                    return A = g[q], d || (A.data || (A.data = {}), A = A.data), r !== c && (A[e.camelCase(l)] = r), j ? (v = A[l], null == v && (v = A[e.camelCase(l)])) : v = A, v
                }
            }
        },
        removeData: function(b, l, c) {
            if (e.acceptData(b)) {
                var d, A, v, n = b.nodeType,
                    j = n ? e.cache : b,
                    g = n ? b[e.expando] : e.expando;
                if (j[g]) {
                    if (l && (d = c ? j[g] : j[g].data)) {
                        e.isArray(l) || (l in d ? l = [l] : (l = e.camelCase(l), l in d ? l = [l] : l = l.split(" ")));
                        A = 0;
                        for (v = l.length; A < v; A++) delete d[l[A]];
                        if (!(c ? f : e.isEmptyObject)(d)) return
                    }
                    if (c || !(delete j[g].data, !f(j[g]))) n ? e.cleanData([b], !0) : e.support.deleteExpando || j != j.window ? delete j[g] : j[g] = null
                }
            }
        },
        _data: function(b, l, c) {
            return e.data(b, l, c, !0)
        },
        acceptData: function(b) {
            var l = b.nodeName && e.noData[b.nodeName.toLowerCase()];
            return !l || !0 !== l && b.getAttribute("classid") === l
        }
    });
    e.fn.extend({
        data: function(b, l) {
            var r, J, A, v, n, j = this[0],
                f = 0,
                g = null;
            if (b === c) {
                if (this.length && (g = e.data(j), 1 === j.nodeType && !e._data(j, "parsedAttrs"))) {
                    A = j.attributes;
                    for (n = A.length; f <
                        n; f++) v = A[f].name, v.indexOf("data-") || (v = e.camelCase(v.substring(5)), d(j, v, g[v]));
                    e._data(j, "parsedAttrs", !0)
                }
                return g
            }
            return "object" == typeof b ? this.each(function() {
                e.data(this, b)
            }) : (r = b.split(".", 2), r[1] = r[1] ? "." + r[1] : "", J = r[1] + "!", e.access(this, function(l) {
                if (l === c) return g = this.triggerHandler("getData" + J, [r[0]]), g === c && j && (g = e.data(j, b), g = d(j, b, g)), g === c && r[1] ? this.data(r[0]) : g;
                r[1] = l;
                this.each(function() {
                    var c = e(this);
                    c.triggerHandler("setData" + J, r);
                    e.data(this, b, l);
                    c.triggerHandler("changeData" +
                        J, r)
                })
            }, null, l, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                e.removeData(this, b)
            })
        }
    });
    e.extend({
        queue: function(b, l, c) {
            var d;
            if (b) return l = (l || "fx") + "queue", d = e._data(b, l), c && (!d || e.isArray(c) ? d = e._data(b, l, e.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(b, l) {
            l = l || "fx";
            var c = e.queue(b, l),
                d = c.length,
                A = c.shift(),
                j = e._queueHooks(b, l),
                n = function() {
                    e.dequeue(b, l)
                };
            "inprogress" === A && (A = c.shift(), d--);
            A && ("fx" === l && c.unshift("inprogress"), delete j.stop, A.call(b, n, j));
            !d && j && j.empty.fire()
        },
        _queueHooks: function(b, l) {
            var c = l + "queueHooks";
            return e._data(b, c) || e._data(b, c, {
                empty: e.Callbacks("once memory").add(function() {
                    e.removeData(b, l + "queue", !0);
                    e.removeData(b, c, !0)
                })
            })
        }
    });
    e.fn.extend({
        queue: function(b, l) {
            var r = 2;
            return "string" != typeof b && (l = b, b = "fx", r--), arguments.length < r ? e.queue(this[0], b) : l === c ? this : this.each(function() {
                var c = e.queue(this, b, l);
                e._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && e.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                e.dequeue(this,
                    b)
            })
        },
        delay: function(b, l) {
            return b = e.fx ? e.fx.speeds[b] || b : b, l = l || "fx", this.queue(l, function(l, c) {
                var e = setTimeout(l, b);
                c.stop = function() {
                    clearTimeout(e)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, l) {
            var r, d = 1,
                A = e.Deferred(),
                j = this,
                n = this.length,
                f = function() {
                    --d || A.resolveWith(j, [j])
                };
            "string" != typeof b && (l = b, b = c);
            for (b = b || "fx"; n--;)(r = e._data(j[n], b + "queueHooks")) && r.empty && (d++, r.empty.add(f));
            return f(), A.promise(l)
        }
    });
    var ba, Kb, Lb, Mb = /[\t\r\n]/g,
        Oc = /\r/g,
        Pc = /^(?:button|input)$/i,
        Qc = /^(?:button|input|object|select|textarea)$/i,
        Rc = /^a(?:rea|)$/i,
        Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ob = e.support.getSetAttribute;
    e.fn.extend({
        attr: function(b, l) {
            return e.access(this, e.attr, b, l, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                e.removeAttr(this, b)
            })
        },
        prop: function(b, l) {
            return e.access(this, e.prop, b, l, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = e.propFix[b] ||
                b, this.each(function() {
                    try {
                        this[b] = c, delete this[b]
                    } catch (l) {}
                })
        },
        addClass: function(b) {
            var l, c, d, A, j, n, f;
            if (e.isFunction(b)) return this.each(function(l) {
                e(this).addClass(b.call(this, l, this.className))
            });
            if (b && "string" == typeof b) {
                l = b.split(fa);
                c = 0;
                for (d = this.length; c < d; c++)
                    if (A = this[c], 1 === A.nodeType)
                        if (!A.className && 1 === l.length) A.className = b;
                        else {
                            j = " " + A.className + " ";
                            n = 0;
                            for (f = l.length; n < f; n++) 0 > j.indexOf(" " + l[n] + " ") && (j += l[n] + " ");
                            A.className = e.trim(j)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var l,
                r, d, A, j, n, f;
            if (e.isFunction(b)) return this.each(function(l) {
                e(this).removeClass(b.call(this, l, this.className))
            });
            if (b && "string" == typeof b || b === c) {
                l = (b || "").split(fa);
                n = 0;
                for (f = this.length; n < f; n++)
                    if (d = this[n], 1 === d.nodeType && d.className) {
                        r = (" " + d.className + " ").replace(Mb, " ");
                        A = 0;
                        for (j = l.length; A < j; A++)
                            for (; 0 <= r.indexOf(" " + l[A] + " ");) r = r.replace(" " + l[A] + " ", " ");
                        d.className = b ? e.trim(r) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, l) {
            var c = typeof b,
                d = "boolean" == typeof l;
            return e.isFunction(b) ? this.each(function(c) {
                e(this).toggleClass(b.call(this,
                    c, this.className, l), l)
            }) : this.each(function() {
                if ("string" === c)
                    for (var j, v = 0, n = e(this), f = l, g = b.split(fa); j = g[v++];) f = d ? f : !n.hasClass(j), n[f ? "addClass" : "removeClass"](j);
                else if ("undefined" === c || "boolean" === c) this.className && e._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : e._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var l = 0, c = this.length; l < c; l++)
                if (1 === this[l].nodeType && 0 <= (" " + this[l].className + " ").replace(Mb, " ").indexOf(b)) return !0;
            return !1
        },
        val: function(b) {
            var l, r, d, j = this[0];
            if (arguments.length) return d = e.isFunction(b), this.each(function(r) {
                var n, j = e(this);
                if (1 === this.nodeType && (d ? n = b.call(this, r, j.val()) : n = b, null == n ? n = "" : "number" == typeof n ? n += "" : e.isArray(n) && (n = e.map(n, function(b) {
                    return null == b ? "" : b + ""
                })), l = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], !l || !("set" in l) || l.set(this, n, "value") === c)) this.value = n
            });
            if (j) return l = e.valHooks[j.type] || e.valHooks[j.nodeName.toLowerCase()], l && "get" in l && (r = l.get(j,
                "value")) !== c ? r : (r = j.value, "string" == typeof r ? r.replace(Oc, "") : null == r ? "" : r)
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var l = b.attributes.value;
                    return !l || l.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var l, c, d = b.selectedIndex,
                        j = [],
                        v = b.options,
                        n = "select-one" === b.type;
                    if (0 > d) return null;
                    b = n ? d : 0;
                    for (c = n ? d + 1 : v.length; b < c; b++)
                        if (l = v[b], l.selected && (e.support.optDisabled ? !l.disabled : null === l.getAttribute("disabled")) && (!l.parentNode.disabled || !e.nodeName(l.parentNode, "optgroup"))) {
                            l = e(l).val();
                            if (n) return l;
                            j.push(l)
                        }
                    return n && !j.length && v.length ? e(v[d]).val() : j
                },
                set: function(b, l) {
                    var c = e.makeArray(l);
                    return e(b).find("option").each(function() {
                        this.selected = 0 <= e.inArray(e(this).val(), c)
                    }), c.length || (b.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function(b, l, r, d) {
            var j, v, n = b.nodeType;
            if (b && !(3 === n || 8 === n || 2 === n)) {
                if (d && e.isFunction(e.fn[l])) return e(b)[l](r);
                if ("undefined" == typeof b.getAttribute) return e.prop(b, l, r);
                (d = 1 !== n || !e.isXMLDoc(b)) && (l = l.toLowerCase(), v = e.attrHooks[l] || (Nb.test(l) ? Kb :
                    ba));
                if (r !== c) {
                    if (null === r) {
                        e.removeAttr(b, l);
                        return
                    }
                    return v && "set" in v && d && (j = v.set(b, r, l)) !== c ? j : (b.setAttribute(l, r + ""), r)
                }
                return v && "get" in v && d && null !== (j = v.get(b, l)) ? j : (j = b.getAttribute(l), null === j ? c : j)
            }
        },
        removeAttr: function(b, l) {
            var c, d, j, v, n = 0;
            if (l && 1 === b.nodeType)
                for (d = l.split(fa); n < d.length; n++)(j = d[n]) && (c = e.propFix[j] || j, v = Nb.test(j), v || e.attr(b, j, ""), b.removeAttribute(Ob ? j : c), v && c in b && (b[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, l) {
                    if (Pc.test(b.nodeName) && b.parentNode) e.error("type property can't be changed");
                    else if (!e.support.radioValue && "radio" === l && e.nodeName(b, "input")) {
                        var c = b.value;
                        return b.setAttribute("type", l), c && (b.value = c), l
                    }
                }
            },
            value: {
                get: function(b, l) {
                    return ba && e.nodeName(b, "button") ? ba.get(b, l) : l in b ? b.value : null
                },
                set: function(b, l, c) {
                    if (ba && e.nodeName(b, "button")) return ba.set(b, l, c);
                    b.value = l
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, l, r) {
            var d, j, v, n = b.nodeType;
            if (b && !(3 === n || 8 === n || 2 === n)) return v = 1 !== n || !e.isXMLDoc(b), v && (l = e.propFix[l] || l, j = e.propHooks[l]), r !== c ? j && "set" in j && (d = j.set(b, r, l)) !== c ? d : b[l] = r : j && "get" in j && null !== (d = j.get(b, l)) ? d : b[l]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var l = b.getAttributeNode("tabindex");
                    return l && l.specified ? parseInt(l.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Kb = {
        get: function(b,
            l) {
            var r, d = e.prop(b, l);
            return !0 === d || "boolean" != typeof d && (r = b.getAttributeNode(l)) && !1 !== r.nodeValue ? l.toLowerCase() : c
        },
        set: function(b, l, c) {
            var d;
            return !1 === l ? e.removeAttr(b, c) : (d = e.propFix[c] || c, d in b && (b[d] = !0), b.setAttribute(c, c.toLowerCase())), c
        }
    };
    Ob || (Lb = {
        name: !0,
        id: !0,
        coords: !0
    }, ba = e.valHooks.button = {
        get: function(b, l) {
            var e;
            return e = b.getAttributeNode(l), e && (Lb[l] ? "" !== e.value : e.specified) ? e.value : c
        },
        set: function(b, l, c) {
            var e = b.getAttributeNode(c);
            return e || (e = B.createAttribute(c), b.setAttributeNode(e)),
                e.value = l + ""
        }
    }, e.each(["width", "height"], function(b, l) {
        e.attrHooks[l] = e.extend(e.attrHooks[l], {
            set: function(b, p) {
                if ("" === p) return b.setAttribute(l, "auto"), p
            }
        })
    }), e.attrHooks.contenteditable = {
        get: ba.get,
        set: function(b, l, c) {
            "" === l && (l = "false");
            ba.set(b, l, c)
        }
    });
    e.support.hrefNormalized || e.each(["href", "src", "width", "height"], function(b, l) {
        e.attrHooks[l] = e.extend(e.attrHooks[l], {
            get: function(b) {
                b = b.getAttribute(l, 2);
                return null === b ? c : b
            }
        })
    });
    e.support.style || (e.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() ||
                c
        },
        set: function(b, l) {
            return b.style.cssText = l + ""
        }
    });
    e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    e.support.enctype || (e.propFix.enctype = "encoding");
    e.support.checkOn || e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = e.extend(e.valHooks[this], {
            set: function(b, l) {
                if (e.isArray(l)) return b.checked = 0 <= e.inArray(e(b).val(), l)
            }
        })
    });
    var db = /^(?:textarea|input|select)$/i,
        Pb = /^([^\.]*|)(?:\.(.+)|)$/,
        Sc = /(?:^|\s)hover(\.\S+|)\b/,
        Tc = /^key/,
        Uc = /^(?:mouse|contextmenu)|click/,
        Qb = /^(?:focusinfocus|focusoutblur)$/,
        Rb = function(b) {
            return e.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
        };
    e.event = {
        add: function(b, l, d, j, A) {
            var v, n, f, g, q, s, u, m, x;
            if (!(3 === b.nodeType || 8 === b.nodeType || !l || !d || !(v = e._data(b)))) {
                d.handler && (u = d, d = u.handler, A = u.selector);
                d.guid || (d.guid = e.guid++);
                (f = v.events) || (v.events = f = {});
                (n = v.handle) || (v.handle = n = function(b) {
                    return "undefined" != typeof e && (!b || e.event.triggered !== b.type) ? e.event.dispatch.apply(n.elem, arguments) : c
                }, n.elem = b);
                l = e.trim(Rb(l)).split(" ");
                for (v = 0; v < l.length; v++) {
                    g = Pb.exec(l[v]) || [];
                    q = g[1];
                    s = (g[2] || "").split(".").sort();
                    x = e.event.special[q] || {};
                    q = (A ? x.delegateType : x.bindType) || q;
                    x = e.event.special[q] || {};
                    g = e.extend({
                        type: q,
                        origType: g[1],
                        data: j,
                        handler: d,
                        guid: d.guid,
                        selector: A,
                        needsContext: A && e.expr.match.needsContext.test(A),
                        namespace: s.join(".")
                    }, u);
                    m = f[q];
                    if (!m && (m = f[q] = [], m.delegateCount = 0, !x.setup || !1 === x.setup.call(b, j, s, n))) b.addEventListener ? b.addEventListener(q, n, !1) : b.attachEvent && b.attachEvent("on" + q, n);
                    x.add && (x.add.call(b, g), g.handler.guid || (g.handler.guid = d.guid));
                    A ? m.splice(m.delegateCount++, 0, g) : m.push(g);
                    e.event.global[q] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, l, c, d, j) {
            var v, n, f, g, q, s, u, m, x, t, z = e.hasData(b) && e._data(b);
            if (z && (u = z.events)) {
                l = e.trim(Rb(l || "")).split(" ");
                for (v = 0; v < l.length; v++)
                    if (n = Pb.exec(l[v]) || [], f = g = n[1], n = n[2], f) {
                        m = e.event.special[f] || {};
                        f = (d ? m.delegateType : m.bindType) || f;
                        x = u[f] || [];
                        q = x.length;
                        n = n ? RegExp("(^|\\.)" + n.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (s = 0; s < x.length; s++) t = x[s], (j || g === t.origType) && (!c || c.guid === t.guid) && (!n || n.test(t.namespace)) && (!d || d === t.selector || "**" === d && t.selector) && (x.splice(s--, 1), t.selector && x.delegateCount--, m.remove && m.remove.call(b, t));
                        0 === x.length && q !== x.length && ((!m.teardown || !1 === m.teardown.call(b, n, z.handle)) && e.removeEvent(b,
                            f, z.handle), delete u[f])
                    } else
                        for (f in u) e.event.remove(b, f + l[v], c, d, !0);
                e.isEmptyObject(u) && (delete z.handle, e.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(p, l, d, j) {
            if (!d || 3 !== d.nodeType && 8 !== d.nodeType) {
                var A, f, n, g, q, s, u, m = p.type || p;
                g = [];
                if (!Qb.test(m + e.event.triggered) && (0 <= m.indexOf("!") && (m = m.slice(0, -1), A = !0), 0 <= m.indexOf(".") && (g = m.split("."), m = g.shift(), g.sort()), d && !e.event.customEvent[m] || e.event.global[m]))
                    if (p = "object" == typeof p ? p[e.expando] ?
                        p : new e.Event(m, p) : new e.Event(m), p.type = m, p.isTrigger = !0, p.exclusive = A, p.namespace = g.join("."), p.namespace_re = p.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, g = 0 > m.indexOf(":") ? "on" + m : "", d) {
                        if (p.result = c, p.target || (p.target = d), l = null != l ? e.makeArray(l) : [], l.unshift(p), q = e.event.special[m] || {}, !(q.trigger && !1 === q.trigger.apply(d, l))) {
                            u = [
                                [d, q.bindType || m]
                            ];
                            if (!j && !q.noBubble && !e.isWindow(d)) {
                                f = q.delegateType || m;
                                A = Qb.test(f + m) ? d : d.parentNode;
                                for (n = d; A; A = A.parentNode) u.push([A, f]),
                                    n = A;
                                n === (d.ownerDocument || B) && u.push([n.defaultView || n.parentWindow || b, f])
                            }
                            for (f = 0; f < u.length && !p.isPropagationStopped(); f++) A = u[f][0], p.type = u[f][1], (s = (e._data(A, "events") || {})[p.type] && e._data(A, "handle")) && s.apply(A, l), (s = g && A[g]) && e.acceptData(A) && s.apply && !1 === s.apply(A, l) && p.preventDefault();
                            return p.type = m, !j && !p.isDefaultPrevented() && (!q._default || !1 === q._default.apply(d.ownerDocument, l)) && ("click" !== m || !e.nodeName(d, "a")) && e.acceptData(d) && g && d[m] && ("focus" !== m && "blur" !== m || 0 !== p.target.offsetWidth) &&
                                !e.isWindow(d) && (n = d[g], n && (d[g] = null), e.event.triggered = m, d[m](), e.event.triggered = c, n && (d[g] = n)), p.result
                        }
                    } else
                        for (f in d = e.cache, d) d[f].events && d[f].events[m] && e.event.trigger(p, l, d[f].handle.elem, !0)
            }
        },
        dispatch: function(p) {
            p = e.event.fix(p || b.event);
            var l, d, j, f, v, n, g = (e._data(this, "events") || {})[p.type] || [],
                q = g.delegateCount,
                s = Z.call(arguments),
                m = !p.exclusive && !p.namespace,
                u = e.event.special[p.type] || {},
                x = [];
            s[0] = p;
            p.delegateTarget = this;
            if (!(u.preDispatch && !1 === u.preDispatch.call(this, p))) {
                if (q &&
                    (!p.button || "click" !== p.type))
                    for (d = p.target; d != this; d = d.parentNode || this)
                        if (!0 !== d.disabled || "click" !== p.type) {
                            f = {};
                            v = [];
                            for (l = 0; l < q; l++) j = g[l], n = j.selector, f[n] === c && (f[n] = j.needsContext ? 0 <= e(n, this).index(d) : e.find(n, this, null, [d]).length), f[n] && v.push(j);
                            v.length && x.push({
                                elem: d,
                                matches: v
                            })
                        }
                g.length > q && x.push({
                    elem: this,
                    matches: g.slice(q)
                });
                for (l = 0; l < x.length && !p.isPropagationStopped(); l++) {
                    f = x[l];
                    p.currentTarget = f.elem;
                    for (d = 0; d < f.matches.length && !p.isImmediatePropagationStopped(); d++)
                        if (j = f.matches[d],
                            m || !p.namespace && !j.namespace || p.namespace_re && p.namespace_re.test(j.namespace)) p.data = j.data, p.handleObj = j, j = ((e.event.special[j.origType] || {}).handle || j.handler).apply(f.elem, s), j !== c && (p.result = j, !1 === j && (p.preventDefault(), p.stopPropagation()))
                }
                return u.postDispatch && u.postDispatch.call(this, p), p.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, l) {
                return null == b.which && (b.which = null != l.charCode ? l.charCode : l.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, l) {
                var d, e, j, f = l.button,
                    n = l.fromElement;
                return null == b.pageX && null != l.clientX && (d = b.target.ownerDocument || B, e = d.documentElement, j = d.body, b.pageX = l.clientX + (e && e.scrollLeft || j && j.scrollLeft || 0) - (e && e.clientLeft ||
                    j && j.clientLeft || 0), b.pageY = l.clientY + (e && e.scrollTop || j && j.scrollTop || 0) - (e && e.clientTop || j && j.clientTop || 0)), !b.relatedTarget && n && (b.relatedTarget = n === b.target ? l.toElement : n), !b.which && f !== c && (b.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[e.expando]) return b;
            var l, c, d = b,
                j = e.event.fixHooks[b.type] || {},
                f = j.props ? this.props.concat(j.props) : this.props;
            b = e.Event(d);
            for (l = f.length; l;) c = f[--l], b[c] = d[c];
            return b.target || (b.target = d.srcElement || B), 3 === b.target.nodeType && (b.target = b.target.parentNode),
                b.metaKey = !!b.metaKey, j.filter ? j.filter(b, d) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, l, c) {
                    e.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(b, l) {
                    this.onbeforeunload === l && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, l, c, d) {
            b = e.extend(new e.Event, c, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? e.event.trigger(b, null, l) : e.event.dispatch.call(l, b);
            b.isDefaultPrevented() && c.preventDefault()
        }
    };
    e.event.handle =
        e.event.dispatch;
    e.removeEvent = B.removeEventListener ? function(b, l, c) {
        b.removeEventListener && b.removeEventListener(l, c, !1)
    } : function(b, l, c) {
        l = "on" + l;
        b.detachEvent && ("undefined" == typeof b[l] && (b[l] = null), b.detachEvent(l, c))
    };
    e.Event = function(b, l) {
        if (this instanceof e.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? m : g) : this.type = b, l && e.extend(this, l), this.timeStamp = b && b.timeStamp || e.now(),
            this[e.expando] = !0;
        else return new e.Event(b, l)
    };
    e.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = m;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = m;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = m;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, l) {
        e.event.special[b] = {
            delegateType: l,
            bindType: l,
            handle: function(b) {
                var p, c = b.relatedTarget,
                    d = b.handleObj;
                if (!c || c !== this && !e.contains(this, c)) b.type = d.origType, p = d.handler.apply(this, arguments), b.type = l;
                return p
            }
        }
    });
    e.support.submitBubbles || (e.event.special.submit = {
        setup: function() {
            if (e.nodeName(this, "form")) return !1;
            e.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = e.nodeName(b, "input") || e.nodeName(b, "button") ?
                    b.form : c) && !e._data(b, "_submit_attached") && (e.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }), e._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && e.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (e.nodeName(this, "form")) return !1;
            e.event.remove(this, "._submit")
        }
    });
    e.support.changeBubbles || (e.event.special.change = {
        setup: function() {
            if (db.test(this.nodeName)) {
                if ("checkbox" === this.type ||
                    "radio" === this.type) e.event.add(this, "propertychange._change", function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), e.event.add(this, "click._change", function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    e.event.simulate("change", this, b, !0)
                });
                return !1
            }
            e.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                db.test(b.nodeName) && !e._data(b, "_change_attached") && (e.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger &&
                        e.event.simulate("change", this.parentNode, b, !0)
                }), e._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var l = b.target;
            if (this !== l || b.isSimulated || b.isTrigger || "radio" !== l.type && "checkbox" !== l.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return e.event.remove(this, "._change"), !db.test(this.nodeName)
        }
    });
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, l) {
        var c = 0,
            d = function(b) {
                e.event.simulate(l, b.target, e.event.fix(b), !0)
            };
        e.event.special[l] = {
            setup: function() {
                0 === c++ && B.addEventListener(b, d, !0)
            },
            teardown: function() {
                0 === --c && B.removeEventListener(b, d, !0)
            }
        }
    });
    e.fn.extend({
        on: function(b, l, d, j, f) {
            var v, n;
            if ("object" == typeof b) {
                "string" != typeof l && (d = d || l, l = c);
                for (n in b) this.on(n, l, d, b[n], f);
                return this
            }
            null == d && null == j ? (j = l, d = l = c) : null == j && ("string" == typeof l ? (j = d, d = c) : (j = d, d = l, l = c));
            if (!1 === j) j = g;
            else if (!j) return this;
            return 1 === f && (v = j, j = function(b) {
                return e().off(b), v.apply(this, arguments)
            }, j.guid = v.guid || (v.guid = e.guid++)), this.each(function() {
                e.event.add(this,
                    b, j, d, l)
            })
        },
        one: function(b, l, c, d) {
            return this.on(b, l, c, d, 1)
        },
        off: function(b, l, d) {
            var j, f;
            if (b && b.preventDefault && b.handleObj) return j = b.handleObj, e(b.delegateTarget).off(j.namespace ? j.origType + "." + j.namespace : j.origType, j.selector, j.handler), this;
            if ("object" == typeof b) {
                for (f in b) this.off(f, l, b[f]);
                return this
            }
            if (!1 === l || "function" == typeof l) d = l, l = c;
            return !1 === d && (d = g), this.each(function() {
                e.event.remove(this, b, d, l)
            })
        },
        bind: function(b, l, c) {
            return this.on(b, null, l, c)
        },
        unbind: function(b, l) {
            return this.off(b,
                null, l)
        },
        live: function(b, l, c) {
            return e(this.context).on(b, this.selector, l, c), this
        },
        die: function(b, l) {
            return e(this.context).off(b, this.selector || "**", l), this
        },
        delegate: function(b, l, c, d) {
            return this.on(l, b, c, d)
        },
        undelegate: function(b, l, c) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(l, b || "**", c)
        },
        trigger: function(b, c) {
            return this.each(function() {
                e.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            if (this[0]) return e.event.trigger(b, c, this[0], !0)
        },
        toggle: function(b) {
            var c = arguments,
                d =
                b.guid || e.guid++,
                j = 0,
                f = function(d) {
                    var r = (e._data(this, "lastToggle" + b.guid) || 0) % j;
                    return e._data(this, "lastToggle" + b.guid, r + 1), d.preventDefault(), c[r].apply(this, arguments) || !1
                };
            for (f.guid = d; j < c.length;) c[j++].guid = d;
            return this.click(f)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(b, c) {
            e.fn[c] = function(b, p) {
                return null == p && (p = b, b = null), 0 < arguments.length ? this.on(c, null, b, p) : this.trigger(c)
            };
            Tc.test(c) && (e.event.fixHooks[c] = e.event.keyHooks);
            Uc.test(c) && (e.event.fixHooks[c] = e.event.mouseHooks)
        });
    var Vc = b,
        F = function(b, c, d, e) {
            d = d || [];
            c = c || W;
            var j, f, n, g, q = c.nodeType;
            if (!b || "string" != typeof b) return d;
            if (1 !== q && 9 !== q) return [];
            n = Ka(c);
            if (!n && !e && (j = Wc.exec(b)))
                if (g = j[1])
                    if (9 === q) {
                        f = c.getElementById(g);
                        if (!f || !f.parentNode) return d;
                        if (f.id === g) return d.push(f), d
                    } else {
                        if (c.ownerDocument &&
                            (f = c.ownerDocument.getElementById(g)) && Sb(c, f) && f.id === g) return d.push(f), d
                    } else {
                if (j[2]) return oa.apply(d, pa.call(c.getElementsByTagName(b), 0)), d;
                if ((g = j[3]) && Tb && c.getElementsByClassName) return oa.apply(d, pa.call(c.getElementsByClassName(g), 0)), d
            }
            return eb(b.replace(La, "$1"), c, d, e, n)
        },
        va = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Ub = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        ia = function(b) {
            return X(function(c) {
                return c = +c, X(function(d, e) {
                    for (var j, f = b([], d.length, c), n = f.length; n--;) d[j = f[n]] && (d[j] = !(e[j] = d[j]))
                })
            })
        },
        Ma = function(b, c, d) {
            if (b === c) return d;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        },
        Oa = function(b, c) {
            var d, e, j, f, n, g, q;
            if (n = Vb[N][b]) return c ? 0 : n.slice(0);
            n = b;
            g = [];
            for (q = H.preFilter; n;) {
                if (!d || (e = Xc.exec(n))) e && (n = n.slice(e[0].length)), g.push(j = []);
                d = !1;
                if (e = Yc.exec(n)) j.push(d = new Wb(e.shift())), n = n.slice(d.length), d.type = e[0].replace(La, " ");
                for (f in H.filter)(e = Na[f].exec(n)) &&
                    (!q[f] || (e = q[f](e, W, !0))) && (j.push(d = new Wb(e.shift())), n = n.slice(d.length), d.type = f, d.matches = e);
                if (!d) break
            }
            return c ? n.length : n ? F.error(b) : Vb(b, g).slice(0)
        },
        gb = function(b, c, d) {
            var e = c.dir,
                j = d && "parentNode" === c.dir,
                f = Zc++;
            return c.first ? function(c, l, d) {
                for (; c = c[e];)
                    if (j || 1 === c.nodeType) return b(c, l, d)
            } : function(c, l, d) {
                if (d)
                    for (; c = c[e];) {
                        if ((j || 1 === c.nodeType) && b(c, l, d)) return c
                    } else
                        for (var r, g = wa + " " + f + " ", q = g + fb; c = c[e];)
                            if (j || 1 === c.nodeType) {
                                if ((r = c[N]) === q) return c.sizset;
                                if ("string" == typeof r &&
                                    0 === r.indexOf(g)) {
                                    if (c.sizset) return c
                                } else {
                                    c[N] = q;
                                    if (b(c, l, d)) return c.sizset = !0, c;
                                    c.sizset = !1
                                }
                            }
            }
        },
        hb = function(b) {
            return 1 < b.length ? function(c, d, e) {
                for (var j = b.length; j--;)
                    if (!b[j](c, d, e)) return !1;
                return !0
            } : b[0]
        },
        Pa = function(b, c, d, e, j) {
            for (var f, n = [], g = 0, q = b.length, s = null != c; g < q; g++)
                if (f = b[g])
                    if (!d || d(f, e, j)) n.push(f), s && c.push(g);
            return n
        },
        ib = function(b, c, d, e, j, f) {
            return e && !e[N] && (e = ib(e)), j && !j[N] && (j = ib(j, f)), X(function(f, g, v, q) {
                if (!f || !j) {
                    var s, m, u = [],
                        x = [],
                        t = g.length;
                    if (!(m = f)) {
                        m = c || "*";
                        var z =
                            v.nodeType ? [v] : v,
                            C = [];
                        s = 0;
                        for (var y = z.length; s < y; s++) F(m, z[s], C, f);
                        m = C
                    }
                    z = b && (f || !c) ? Pa(m, u, b, v, q) : m;
                    C = d ? j || (f ? b : t || e) ? [] : g : z;
                    d && d(z, C, v, q);
                    if (e) {
                        m = Pa(C, x);
                        e(m, [], v, q);
                        for (v = m.length; v--;)
                            if (s = m[v]) C[x[v]] = !(z[x[v]] = s)
                    }
                    if (f)
                        for (v = b && C.length; v--;) {
                            if (s = C[v]) f[u[v]] = !(g[u[v]] = s)
                        } else C = Pa(C === g ? C.splice(t, C.length) : C), j ? j(null, g, C, q) : oa.apply(g, C)
                }
            })
        },
        jb = function(b) {
            var c, d, e, j = b.length,
                f = H.relative[b[0].type];
            d = f || H.relative[" "];
            for (var n = f ? 1 : 0, g = gb(function(b) {
                return b === c
            }, d, !0), q = gb(function(b) {
                return -1 <
                    Xb.call(c, b)
            }, d, !0), s = [
                function(b, p, d) {
                    return !f && (d || p !== Qa) || ((c = p).nodeType ? g(b, p, d) : q(b, p, d))
                }
            ]; n < j; n++)
                if (d = H.relative[b[n].type]) s = [gb(hb(s), d)];
                else {
                    d = H.filter[b[n].type].apply(null, b[n].matches);
                    if (d[N]) {
                        for (e = ++n; e < j && !H.relative[b[e].type]; e++);
                        return ib(1 < n && hb(s), 1 < n && b.slice(0, n - 1).join("").replace(La, "$1"), d, n < e && jb(b.slice(n, e)), e < j && jb(b = b.slice(e)), e < j && b.join(""))
                    }
                    s.push(d)
                }
            return hb(s)
        },
        eb = function(b, c, d, e, j) {
            var f, n, g, q, s = Oa(b);
            if (!e && 1 === s.length) {
                n = s[0] = s[0].slice(0);
                if (2 < n.length &&
                    "ID" === (g = n[0]).type && 9 === c.nodeType && !j && H.relative[n[1].type]) {
                    c = H.find.ID(g.matches[0].replace(ja, ""), c, j)[0];
                    if (!c) return d;
                    b = b.slice(n.shift().length)
                }
                for (f = Na.POS.test(b) ? -1 : n.length - 1; 0 <= f; f--) {
                    g = n[f];
                    if (H.relative[q = g.type]) break;
                    if (q = H.find[q])
                        if (e = q(g.matches[0].replace(ja, ""), kb.test(n[0].type) && c.parentNode || c, j)) {
                            n.splice(f, 1);
                            b = e.length && n.join("");
                            if (!b) return oa.apply(d, pa.call(e, 0)), d;
                            break
                        }
                }
            }
            return lb(b, s)(e, c, j, d, kb.test(b)), d
        },
        Yb = function() {},
        fb, mb, H, Ra, Ka, Sb, lb, nb, xa, Qa, Zb = !0,
        N = ("sizcache" + Math.random()).replace(".", ""),
        Wb = String,
        W = Vc.document,
        V = W.documentElement,
        wa = 0,
        Zc = 0,
        $c = [].pop,
        oa = [].push,
        pa = [].slice,
        Xb = [].indexOf || function(b) {
            for (var c = 0, d = this.length; c < d; c++)
                if (this[c] === b) return c;
            return -1
        },
        X = function(b, c) {
            return b[N] = null == c || c, b
        },
        ob = function() {
            var b = {},
                c = [];
            return X(function(d, e) {
                return c.push(d) > H.cacheLength && delete b[c.shift()], b[d] = e
            }, b)
        },
        $b = ob(),
        Vb = ob(),
        ac = ob(),
        bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        pb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)",
        La = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        ad = RegExp(pb),
        Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        kb = /[\x20\t\r\n\f]*[+~]/,
        bd = /h\d/i,
        cd = /input|select|textarea|button/i,
        ja = /\\(?!\\)/g,
        Na = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + bc),
            PSEUDO: RegExp("^" + pb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        ca = function(b) {
            var c = W.createElement("div");
            try {
                return b(c)
            } catch (d) {
                return !1
            } finally {}
        },
        dd = ca(function(b) {
            return b.appendChild(W.createComment("")), !b.getElementsByTagName("*").length
        }),
        ed = ca(function(b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        fd = ca(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Tb = ca(function(b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        gd = ca(function(b) {
            b.id = N + 0;
            b.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>";
            V.insertBefore(b, V.firstChild);
            var c = W.getElementsByName &&
                W.getElementsByName(N).length === 2 + W.getElementsByName(N + 0).length;
            return mb = !W.getElementById(N), V.removeChild(b), c
        });
    try {
        pa.call(V.childNodes, 0)[0].nodeType
    } catch (Qd) {
        pa = function(b) {
            for (var c, d = []; c = this[b]; b++) d.push(c);
            return d
        }
    }
    F.matches = function(b, c) {
        return F(b, null, null, c)
    };
    F.matchesSelector = function(b, c) {
        return 0 < F(c, null, null, [b]).length
    };
    Ra = F.getText = function(b) {
        var c, d = "",
            e = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b =
                    b.nextSibling) d += Ra(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            } else
            for (; c = b[e]; e++) d += Ra(c);
        return d
    };
    Ka = F.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Sb = F.contains = V.contains ? function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b,
            e = c && c.parentNode;
        return b === e || !(!e || !(1 === e.nodeType && d.contains && d.contains(e)))
    } : V.compareDocumentPosition ? function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b) return !0;
        return !1
    };
    F.attr = function(b, c) {
        var d, e = Ka(b);
        return e || (c = c.toLowerCase()), (d = H.attrHandle[c]) ? d(b) : e || fd ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
    };
    H = F.selectors = {
        cacheLength: 50,
        createPseudo: X,
        match: Na,
        attrHandle: ed ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: mb ? function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            } : function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: dd ? function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            } : function(b, c) {
                var d = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var e, j = [], f = 0; e = d[f]; f++) 1 === e.nodeType && j.push(e);
                    return j
                }
                return d
            },
            NAME: gd && function(b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Tb && function(b, c, d) {
                if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ja, ""), b[3] = (b[4] || b[5] || "").replace(ja, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || F.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) :
                    2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && F.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d;
                if (Na.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) ad.test(c) && (d = Oa(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: mb ? function(b) {
                return b = b.replace(ja, ""),
                    function(c) {
                        return c.getAttribute("id") === b
                    }
            } : function(b) {
                return b = b.replace(ja, ""),
                    function(c) {
                        return (c = "undefined" !== typeof c.getAttributeNode &&
                            c.getAttributeNode("id")) && c.value === b
                    }
            },
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                } : (b = b.replace(ja, "").toLowerCase(), function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var c = $b[N][b];
                return c || (c = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(b) {
                        return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                    }
            },
            ATTR: function(b, c, d) {
                return function(e) {
                    e = F.attr(e, b);
                    return null == e ? "!=" === c : c ? (e += "", "=" ===
                        c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.substr(e.length - d.length) === d : "~=" === c ? -1 < (" " + e + " ").indexOf(d) : "|=" === c ? e === d || e.substr(0, d.length + 1) === d + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, d, e) {
                return "nth" === b ? function(b) {
                    var c, l;
                    c = b.parentNode;
                    if (1 === d && 0 === e) return !0;
                    if (c) {
                        l = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (l++, b === c)); c = c.nextSibling);
                    }
                    return l -= e, l === d || 0 === l % d && 0 <= l / d
                } : function(c) {
                    var d = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; d = d.previousSibling;)
                                if (1 ===
                                    d.nodeType) return !1;
                            if ("first" === b) return !0;
                            d = c;
                        case "last":
                            for (; d = d.nextSibling;)
                                if (1 === d.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, e = H.pseudos[b] || H.setFilters[b.toLowerCase()] || F.error("unsupported pseudo: " + b);
                return e[N] ? e(c) : 1 < e.length ? (d = [b, b, "", c], H.setFilters.hasOwnProperty(b.toLowerCase()) ? X(function(b, d) {
                    for (var p, j = e(b, c), r = j.length; r--;) p = Xb.call(b, j[r]), b[p] = !(d[p] = j[r])
                }) : function(b) {
                    return e(b, 0, d)
                }) : e
            }
        },
        pseudos: {
            not: X(function(b) {
                var c = [],
                    d = [],
                    e = lb(b.replace(La, "$1"));
                return e[N] ? X(function(b, c, d, l) {
                    l = e(b, null, l, []);
                    for (var p = b.length; p--;)
                        if (d = l[p]) b[p] = !(c[p] = d)
                }) : function(b, p, j) {
                    return c[0] = b, e(c, null, j, d), !d.pop()
                }
            }),
            has: X(function(b) {
                return function(c) {
                    return 0 < F(b, c).length
                }
            }),
            contains: X(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Ra(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" ===
                    c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function(b) {
                return !H.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return bd.test(b.nodeName)
            },
            text: function(b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: va("radio"),
            checkbox: va("checkbox"),
            file: va("file"),
            password: va("password"),
            image: va("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return cd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ia(function() {
                return [0]
            }),
            last: ia(function(b, c) {
                return [c - 1]
            }),
            eq: ia(function(b,
                c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ia(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: ia(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: ia(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ia(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    nb = V.compareDocumentPosition ? function(b, c) {
        return b === c ? (xa = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function(b, c) {
        if (b === c) return xa = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, e, j = [],
            f = [];
        d = b.parentNode;
        e = c.parentNode;
        var g = d;
        if (d === e) return Ma(b, c);
        if (!d) return -1;
        if (!e) return 1;
        for (; g;) j.unshift(g), g = g.parentNode;
        for (g = e; g;) f.unshift(g), g = g.parentNode;
        d = j.length;
        e = f.length;
        for (g = 0; g < d && g < e; g++)
            if (j[g] !== f[g]) return Ma(j[g], f[g]);
        return g === d ? Ma(b, f[g], -1) : Ma(j[g], c, 1)
    };
    [0, 0].sort(nb);
    Zb = !xa;
    F.uniqueSort = function(b) {
        var c, d = 1;
        xa = Zb;
        b.sort(nb);
        if (xa)
            for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    F.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    lb = F.compile = function(b, c) {
        var d, e = [],
            j = [],
            f = ac[N][b];
        if (!f) {
            c || (c = Oa(b));
            for (d = c.length; d--;) f = jb(c[d]), f[N] ? e.push(f) : j.push(f);
            var g = 0 < e.length,
                q = 0 < j.length,
                s = function(b, c, d, l, p) {
                    var f, r, v = [],
                        m = 0,
                        u = "0",
                        x = b && [],
                        t = null != p,
                        z = Qa,
                        C = b || q && H.find.TAG("*", p && c.parentNode || c),
                        y = wa += null == z ? 1 : Math.E;
                    for (t && (Qa = c !== W && c, fb = s.el); null != (p = C[u]); u++) {
                        if (q && p) {
                            for (f = 0; r = j[f]; f++)
                                if (r(p, c, d)) {
                                    l.push(p);
                                    break
                                }
                            t && (wa = y, fb =
                                ++s.el)
                        }
                        g && ((p = !r && p) && m--, b && x.push(p))
                    }
                    m += u;
                    if (g && u !== m) {
                        for (f = 0; r = e[f]; f++) r(x, v, c, d);
                        if (b) {
                            if (0 < m)
                                for (; u--;)!x[u] && !v[u] && (v[u] = $c.call(l));
                            v = Pa(v)
                        }
                        oa.apply(l, v);
                        t && !b && 0 < v.length && 1 < m + e.length && F.uniqueSort(l)
                    }
                    return t && (wa = y, Qa = z), x
                };
            d = (s.el = 0, g ? X(s) : s);
            f = ac(b, d)
        }
        return f
    };
    if (W.querySelectorAll) {
        var cc, hd = eb,
            id = /'|\\/g,
            jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            Y = [":focus"],
            Sa = [":active", ":focus"],
            Ta = V.matchesSelector || V.mozMatchesSelector || V.webkitMatchesSelector || V.oMatchesSelector ||
            V.msMatchesSelector;
        ca(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Y.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Y.push(":checked")
        });
        ca(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Y.push(":enabled",
                ":disabled")
        });
        Y = RegExp(Y.join("|"));
        eb = function(b, c, d, e, j) {
            if (!e && !j && (!Y || !Y.test(b))) {
                var f, g, q = !0,
                    s = N;
                g = c;
                f = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    f = Oa(b);
                    (q = c.getAttribute("id")) ? s = q.replace(id, "\\$&"): c.setAttribute("id", s);
                    s = "[id='" + s + "'] ";
                    for (g = f.length; g--;) f[g] = s + f[g].join("");
                    g = kb.test(b) && c.parentNode || c;
                    f = f.join(",")
                }
                if (f) try {
                    return oa.apply(d, pa.call(g.querySelectorAll(f), 0)), d
                } catch (m) {} finally {
                    q || c.removeAttribute("id")
                }
            }
            return hd(b, c, d, e, j)
        };
        Ta &&
            (ca(function(b) {
                cc = Ta.call(b, "div");
                try {
                    Ta.call(b, "[test!='']:sizzle"), Sa.push("!=", pb)
                } catch (c) {}
            }), Sa = RegExp(Sa.join("|")), F.matchesSelector = function(b, c) {
                c = c.replace(jd, "='$1']");
                if (!Ka(b) && !Sa.test(c) && (!Y || !Y.test(c))) try {
                    var d = Ta.call(b, c);
                    if (d || cc || b.document && 11 !== b.document.nodeType) return d
                } catch (e) {}
                return 0 < F(c, null, null, [b]).length
            })
    }
    H.pseudos.nth = H.pseudos.eq;
    H.filters = Yb.prototype = H.pseudos;
    H.setFilters = new Yb;
    F.attr = e.attr;
    e.find = F;
    e.expr = F.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.unique =
        F.uniqueSort;
    e.text = F.getText;
    e.isXMLDoc = F.isXML;
    e.contains = F.contains;
    var kd = /Until$/,
        ld = /^(?:parents|prev(?:Until|All))/,
        uc = /^.[^:#\[\.,]*$/,
        dc = e.expr.match.needsContext,
        md = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    e.fn.extend({
        find: function(b) {
            var c, d, j, f, g, n, q = this;
            if ("string" != typeof b) return e(b).filter(function() {
                c = 0;
                for (d = q.length; c < d; c++)
                    if (e.contains(q[c], this)) return !0
            });
            n = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (j = n.length, e.find(b, this[c], n), 0 < c)
                    for (f = j; f < n.length; f++)
                        for (g =
                            0; g < j; g++)
                            if (n[g] === n[f]) {
                                n.splice(f--, 1);
                                break
                            }
            return n
        },
        has: function(b) {
            var c, d = e(b, this),
                j = d.length;
            return this.filter(function() {
                for (c = 0; c < j; c++)
                    if (e.contains(this, d[c])) return !0
            })
        },
        not: function(b) {
            return this.pushStack(x(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(x(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? dc.test(b) ? 0 <= e(b, this.context).index(this[0]) : 0 < e.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, j = 0, f = this.length,
                g = [], n = dc.test(b) || "string" != typeof b ? e(b, c || this.context) : 0; j < f; j++)
                for (d = this[j]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (n ? -1 < n.index(d) : e.find.matchesSelector(d, b)) {
                        g.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return g = 1 < g.length ? e.unique(g) : g, this.pushStack(g, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? e.inArray(this[0], e(b)) : e.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? e(b, c) : e.makeArray(b && b.nodeType ? [b] : b),
                j = e.merge(this.get(), d);
            return this.pushStack(y(d[0]) || y(j[0]) ? j : e.unique(j))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    e.fn.andSelf = e.fn.addBack;
    e.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return e.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return e.dir(b, "parentNode", d)
        },
        next: function(b) {
            return u(b, "nextSibling")
        },
        prev: function(b) {
            return u(b, "previousSibling")
        },
        nextAll: function(b) {
            return e.dir(b,
                "nextSibling")
        },
        prevAll: function(b) {
            return e.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return e.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return e.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return e.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return e.sibling(b.firstChild)
        },
        contents: function(b) {
            return e.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : e.merge([], b.childNodes)
        }
    }, function(b, c) {
        e.fn[b] = function(d, j) {
            var f = e.map(this, c, d);
            return kd.test(b) ||
                (j = d), j && "string" == typeof j && (f = e.filter(j, f)), f = 1 < this.length && !md[b] ? e.unique(f) : f, 1 < this.length && ld.test(b) && (f = f.reverse()), this.pushStack(f, b, Z.call(arguments).join(","))
        }
    });
    e.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? e.find.matchesSelector(c[0], b) ? [c[0]] : [] : e.find.matches(b, c)
        },
        dir: function(b, d, j) {
            var f = [];
            for (b = b[d]; b && 9 !== b.nodeType && (j === c || 1 !== b.nodeType || !e(b).is(j));) 1 === b.nodeType && f.push(b), b = b[d];
            return f
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 ===
                b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var wb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        nd = / jQuery\d+="(?:null|\d+)"/g,
        qb = /^\s+/,
        ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        fc = /<([\w:]+)/,
        od = /<tbody/i,
        pd = /<|&#?\w+;/,
        qd = /<(?:script|style|link)/i,
        rd = /<(?:script|object|embed|option|style)/i,
        rb = RegExp("<(?:" + wb + ")[\\s/>]", "i"),
        xb = /^(?:checkbox|radio)$/,
        gc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        sd = /\/(java|ecma)script/i,
        td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        U = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        hc = t(B),
        sb = hc.appendChild(B.createElement("div"));
    U.optgroup =
        U.option;
    U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
    U.th = U.td;
    e.support.htmlSerialize || (U._default = [1, "X<div>", "</div>"]);
    e.fn.extend({
        text: function(b) {
            return e.access(this, function(b) {
                return b === c ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || B).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (e.isFunction(b)) return this.each(function(c) {
                e(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = e(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return e.isFunction(b) ? this.each(function(c) {
                e(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = e(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = e.isFunction(b);
            return this.each(function(d) {
                e(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                e.nodeName(this, "body") ||
                    e(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!y(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(b,
                    this), "before", this.selector)
            }
        },
        after: function() {
            if (!y(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, j = 0; null != (d = this[j]); j++)
                if (!b || e.filter(b, [d]).length)!c && 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), e.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b,
                c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && e.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
                return e.clone(this, b, c)
            })
        },
        html: function(b) {
            return e.access(this, function(b) {
                var d = this[0] || {},
                    p = 0,
                    j = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
                if ("string" == typeof b && !qd.test(b) && (e.support.htmlSerialize || !rb.test(b)) && (e.support.leadingWhitespace || !qb.test(b)) &&
                    !U[(fc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ec, "<$1></$2>");
                    try {
                        for (; p < j; p++) d = this[p] || {}, 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (f) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return y(this[0]) ? this.length ? this.pushStack(e(e.isFunction(b) ? b() : b), "replaceWith", b) : this : e.isFunction(b) ? this.each(function(c) {
                var d = e(this),
                    j = d.html();
                d.replaceWith(b.call(this, c, j))
            }) : ("string" != typeof b && (b = e(b).detach()), this.each(function() {
                var c =
                    this.nextSibling,
                    d = this.parentNode;
                e(this).remove();
                c ? e(c).before(b) : e(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, d, j) {
            b = [].concat.apply([], b);
            var f, g, q, n = 0,
                s = b[0],
                m = [],
                u = this.length;
            if (!e.support.checkClone && 1 < u && "string" == typeof s && gc.test(s)) return this.each(function() {
                e(this).domManip(b, d, j)
            });
            if (e.isFunction(s)) return this.each(function(f) {
                var g = e(this);
                b[0] = s.call(this, f, d ? g.html() : c);
                g.domManip(b, d, j)
            });
            if (this[0]) {
                f = e.buildFragment(b, this, m);
                q = f.fragment;
                g = q.firstChild;
                1 === q.childNodes.length && (q = g);
                if (g) {
                    d = d && e.nodeName(g, "tr");
                    for (f = f.cacheable || u - 1; n < u; n++) j.call(d && e.nodeName(this[n], "table") ? this[n].getElementsByTagName("tbody")[0] || this[n].appendChild(this[n].ownerDocument.createElement("tbody")) : this[n], n === f ? q : e.clone(q, !0, !0))
                }
                q = g = null;
                m.length && e.each(m, function(b, c) {
                    c.src ? e.ajax ? e.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : e.error("no ajax") : e.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td,
                        ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    e.buildFragment = function(b, d, j) {
        var f, g, q, n = b[0];
        return d = d || B, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof n && 512 > n.length && d === B && "<" === n.charAt(0) && !rd.test(n) && (e.support.checkClone || !gc.test(n)) && (e.support.html5Clone || !rb.test(n)) && (g = !0, f = e.fragments[n], q = f !== c), f || (f = d.createDocumentFragment(), e.clean(b, d, f, j), g && (e.fragments[n] = q && f)), {
            fragment: f,
            cacheable: g
        }
    };
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        e.fn[b] = function(d) {
            var j, f = 0,
                g = [];
            d = e(d);
            var n = d.length;
            j = 1 === this.length && this[0].parentNode;
            if ((null == j || j && 11 === j.nodeType && 1 === j.childNodes.length) && 1 === n) return d[c](this[0]), this;
            for (; f < n; f++) j = (0 < f ? this.clone(!0) : this).get(), e(d[f])[c](j), g = g.concat(j);
            return this.pushStack(g, b, d.selector)
        }
    });
    e.extend({
        clone: function(b, c, d) {
            var f, g, s, n;
            e.support.html5Clone || e.isXMLDoc(b) || !rb.test("<" + b.nodeName +
                ">") ? n = b.cloneNode(!0) : (sb.innerHTML = b.outerHTML, sb.removeChild(n = sb.firstChild));
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !e.isXMLDoc(b)) {
                j(b, n);
                f = q(b);
                g = q(n);
                for (s = 0; f[s]; ++s) g[s] && j(f[s], g[s])
            }
            if (c && (z(b, n), d)) {
                f = q(b);
                g = q(n);
                for (s = 0; f[s]; ++s) z(f[s], g[s])
            }
            return n
        },
        clean: function(b, c, d, j) {
            var f, g, n, q, m, u, x, z = c === B && hc,
                C = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = B;
            for (f = 0; null != (n = b[f]); f++)
                if ("number" == typeof n && (n += ""), n) {
                    if ("string" ==
                        typeof n)
                        if (pd.test(n)) {
                            z = z || t(c);
                            u = c.createElement("div");
                            z.appendChild(u);
                            n = n.replace(ec, "<$1></$2>");
                            g = (fc.exec(n) || ["", ""])[1].toLowerCase();
                            q = U[g] || U._default;
                            m = q[0];
                            for (u.innerHTML = q[1] + n + q[2]; m--;) u = u.lastChild;
                            if (!e.support.tbody) {
                                m = od.test(n);
                                q = "table" === g && !m ? u.firstChild && u.firstChild.childNodes : "<table>" === q[1] && !m ? u.childNodes : [];
                                for (g = q.length - 1; 0 <= g; --g) e.nodeName(q[g], "tbody") && !q[g].childNodes.length && q[g].parentNode.removeChild(q[g])
                            }!e.support.leadingWhitespace && qb.test(n) && u.insertBefore(c.createTextNode(qb.exec(n)[0]),
                                u.firstChild);
                            n = u.childNodes;
                            u.parentNode.removeChild(u)
                        } else n = c.createTextNode(n);
                    n.nodeType ? C.push(n) : e.merge(C, n)
                }
            u && (n = u = z = null);
            if (!e.support.appendChecked)
                for (f = 0; null != (n = C[f]); f++) e.nodeName(n, "input") ? s(n) : "undefined" != typeof n.getElementsByTagName && e.grep(n.getElementsByTagName("input"), s);
            if (d) {
                b = function(b) {
                    if (!b.type || sd.test(b.type)) return j ? j.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (f = 0; null != (n = C[f]); f++)
                    if (!e.nodeName(n, "script") || !b(n)) d.appendChild(n),
                        "undefined" != typeof n.getElementsByTagName && (x = e.grep(e.merge([], n.getElementsByTagName("script")), b), C.splice.apply(C, [f + 1, 0].concat(x)), f += x.length)
            }
            return C
        },
        cleanData: function(b, c) {
            for (var d, j, f, g, n = 0, q = e.expando, s = e.cache, m = e.support.deleteExpando, u = e.event.special; null != (f = b[n]); n++)
                if (c || e.acceptData(f))
                    if (d = (j = f[q]) && s[j]) {
                        if (d.events)
                            for (g in d.events) u[g] ? e.event.remove(f, g) : e.removeEvent(f, g, d.handle);
                        s[j] && (delete s[j], m ? delete f[q] : f.removeAttribute ? f.removeAttribute(q) : f[q] = null, e.deletedIds.push(j))
                    }
        }
    });
    var Ua, da;
    e.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Ua = e.uaMatch(zc.userAgent);
    da = {};
    Ua.browser && (da[Ua.browser] = !0, da.version = Ua.version);
    da.chrome ? da.webkit = !0 : da.webkit && (da.safari = !0);
    e.browser = da;
    e.sub = function() {
        function b(c, d) {
            return new b.fn.init(c,
                d)
        }
        e.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, j) {
            return j && j instanceof e && !(j instanceof b) && (j = b(j)), e.fn.init.call(this, d, j, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(B);
        return b
    };
    var Q, la, ma, tb = /alpha\([^)]*\)/i,
        ud = /opacity=([^)]*)/,
        vd = /^(top|right|bottom|left)$/,
        wd = /^(none|table(?!-c[ea]).+)/,
        ic = /^margin/,
        vc = RegExp("^(" + Ea + ")(.*)$", "i"),
        ya = RegExp("^(" + Ea + ")(?!px)[a-z%]+$", "i"),
        xd = RegExp("^([-+])=(" + Ea + ")", "i"),
        Ya = {},
        yd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        jc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ea = ["Top", "Right", "Bottom", "Left"],
        yb = ["Webkit", "O", "Moz", "ms"],
        zd = e.fn.toggle;
    e.fn.extend({
        css: function(b, d) {
            return e.access(this, function(b, d, l) {
                return l !== c ? e.style(b, d, l) : e.css(b, d)
            }, b, d, 1 < arguments.length)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return e.isFunction(b) && e.isFunction(c) ? zd.apply(this, arguments) : this.each(function() {
                (d ? b : G(this)) ? e(this).show():
                    e(this).hide()
            })
        }
    });
    e.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = Q(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": e.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, j, f) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var g, q, n, s = e.camelCase(d),
                    m = b.style;
                d = e.cssProps[s] || (e.cssProps[s] = C(m, s));
                n = e.cssHooks[d] || e.cssHooks[s];
                if (j === c) return n && "get" in n && (g = n.get(b, !1, f)) !== c ? g : m[d];
                q = typeof j;
                "string" === q && (g = xd.exec(j)) && (j = (g[1] + 1) * g[2] + parseFloat(e.css(b, d)), q = "number");
                if (!(null == j || "number" === q && isNaN(j)))
                    if ("number" === q && !e.cssNumber[s] && (j += "px"), !n || !("set" in n) || (j = n.set(b, j, f)) !== c) try {
                        m[d] = j
                    } catch (u) {}
            }
        },
        css: function(b, d, j, f) {
            var g, q, n, s = e.camelCase(d);
            return d = e.cssProps[s] || (e.cssProps[s] = C(b.style, s)), n = e.cssHooks[d] || e.cssHooks[s], n && "get" in n && (g = n.get(b, !0, f)), g === c && (g = Q(b, d)), "normal" === g && d in jc && (g = jc[d]), j || f !== c ? (q = parseFloat(g), j ||
                e.isNumeric(q) ? q || 0 : g) : g
        },
        swap: function(b, c, d) {
            var e, j = {};
            for (e in c) j[e] = b.style[e], b.style[e] = c[e];
            d = d.call(b);
            for (e in c) b.style[e] = j[e];
            return d
        }
    });
    b.getComputedStyle ? Q = function(c, d) {
        var j, f, g, q, n = b.getComputedStyle(c, null),
            s = c.style;
        return n && (j = n[d], "" === j && !e.contains(c.ownerDocument, c) && (j = e.style(c, d)), ya.test(j) && ic.test(d) && (f = s.width, g = s.minWidth, q = s.maxWidth, s.minWidth = s.maxWidth = s.width = j, j = n.width, s.width = f, s.minWidth = g, s.maxWidth = q)), j
    } : B.documentElement.currentStyle && (Q = function(b,
        c) {
        var d, e, j = b.currentStyle && b.currentStyle[c],
            f = b.style;
        return null == j && f && f[c] && (j = f[c]), ya.test(j) && !vd.test(c) && (d = f.left, e = b.runtimeStyle && b.runtimeStyle.left, e && (b.runtimeStyle.left = b.currentStyle.left), f.left = "fontSize" === c ? "1em" : j, j = f.pixelLeft + "px", f.left = d, e && (b.runtimeStyle.left = e)), "" === j ? "auto" : j
    });
    e.each(["height", "width"], function(b, c) {
        e.cssHooks[c] = {
            get: function(b, d, j) {
                if (d) return 0 === b.offsetWidth && wd.test(Q(b, "display")) ? e.swap(b, yd, function() {
                    return M(b, c, j)
                }) : M(b, c, j)
            },
            set: function(b,
                d, j) {
                return E(b, d, j ? Xa(b, c, j, e.support.boxSizing && "border-box" === e.css(b, "boxSizing")) : 0)
            }
        }
    });
    e.support.opacity || (e.cssHooks.opacity = {
        get: function(b, c) {
            return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style,
                j = b.currentStyle,
                f = e.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                g = j && j.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === e.trim(g.replace(tb, "")) && d.removeAttribute && (d.removeAttribute("filter"), j && !j.filter))) d.filter =
                tb.test(g) ? g.replace(tb, f) : g + " " + f
        }
    });
    e(function() {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function(b, c) {
                return e.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c) return Q(b, "marginRight")
                })
            }
        });
        !e.support.pixelPosition && e.fn.position && e.each(["top", "left"], function(b, c) {
            e.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var j = Q(b, c);
                        return ya.test(j) ? e(b).position()[c] + "px" : j
                    }
                }
            }
        })
    });
    e.expr && e.expr.filters && (e.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !e.support.reliableHiddenOffsets &&
            "none" === (b.style && b.style.display || Q(b, "display"))
    }, e.expr.filters.visible = function(b) {
        return !e.expr.filters.hidden(b)
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        e.cssHooks[b + c] = {
            expand: function(d) {
                var e = "string" == typeof d ? d.split(" ") : [d],
                    j = {};
                for (d = 0; 4 > d; d++) j[b + ea[d] + c] = e[d] || e[d - 2] || e[0];
                return j
            }
        };
        ic.test(b) || (e.cssHooks[b + c].set = E)
    });
    var Ad = /%20/g,
        wc = /\[\]$/,
        kc = /\r?\n/g,
        Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Cd = /^(?:select|textarea)/i;
    e.fn.extend({
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
            }).map(function(b, c) {
                var d = e(this).val();
                return null == d ? null : e.isArray(d) ? e.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(kc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(kc, "\r\n")
                }
            }).get()
        }
    });
    e.param = function(b, d) {
        var j, f = [],
            g = function(b, c) {
                c = e.isFunction(c) ? c() : null == c ? "" : c;
                f[f.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = e.ajaxSettings && e.ajaxSettings.traditional);
        if (e.isArray(b) || b.jquery && !e.isPlainObject(b)) e.each(b, function() {
            g(this.name, this.value)
        });
        else
            for (j in b) P(j, b[j], d, g);
        return f.join("&").replace(Ad, "+")
    };
    var qa, ka, Dd = /#.*$/,
        Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Fd = /^(?:GET|HEAD)$/,
        Gd = /^\/\//,
        lc = /\?/,
        Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Id = /([?&])_=[^&]*/,
        mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        nc = e.fn.load,
        Za = {},
        oc = {},
        pc = ["*/"] + ["*"];
    try {
        ka = yc.href
    } catch (Rd) {
        ka = B.createElement("a"), ka.href = "", ka = ka.href
    }
    qa = mc.exec(ka.toLowerCase()) || [];
    e.fn.load = function(b, d, j) {
        if ("string" != typeof b && nc) return nc.apply(this, arguments);
        if (!this.length) return this;
        var f, g, q, n = this,
            s = b.indexOf(" ");
        return 0 <= s && (f = b.slice(s, b.length), b = b.slice(0, s)), e.isFunction(d) ? (j = d, d = c) : d && "object" == typeof d && (g = "POST"), e.ajax({
            url: b,
            type: g,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                j && n.each(j, q || [b.responseText, c, b])
            }
        }).done(function(b) {
            q = arguments;
            n.html(f ? e("<div>").append(b.replace(Hd, "")).find(f) : b)
        }), this
    };
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        e.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    e.each(["get", "post"], function(b, d) {
        e[d] = function(b, j, f, g) {
            return e.isFunction(j) && (g = g || f, f = j, j = c), e.ajax({
                type: d,
                url: b,
                data: j,
                success: f,
                dataType: g
            })
        }
    });
    e.extend({
        getScript: function(b, d) {
            return e.get(b,
                c, d, "script")
        },
        getJSON: function(b, c, d) {
            return e.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? sa(b, e.ajaxSettings) : (c = b, b = e.ajaxSettings), sa(b, c), b
        },
        ajaxSettings: {
            url: ka,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(qa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: za(Za),
        ajaxTransport: za(oc),
        ajax: function(b, d) {
            function j(b, d, l, p) {
                var q, r, m, v, x, D = d;
                if (2 !== F) {
                    F = 2;
                    s && clearTimeout(s);
                    n = c;
                    g = p || "";
                    I.readyState = 0 < b ? 4 : 0;
                    if (l) {
                        v = t;
                        p = I;
                        var E, R, aa, M, K = v.contents,
                            H = v.dataTypes,
                            P = v.responseFields;
                        for (R in P) R in l && (p[P[R]] = l[R]);
                        for (;
                            "*" === H[0];) H.shift(),
                            E === c && (E = v.mimeType || p.getResponseHeader("content-type"));
                        if (E)
                            for (R in K)
                                if (K[R] && K[R].test(E)) {
                                    H.unshift(R);
                                    break
                                }
                        if (H[0] in l) aa = H[0];
                        else {
                            for (R in l) {
                                if (!H[0] || v.converters[R + " " + H[0]]) {
                                    aa = R;
                                    break
                                }
                                M || (M = R)
                            }
                            aa = aa || M
                        }
                        v = l = aa ? (aa !== H[0] && H.unshift(aa), l[aa]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (t.ifModified && (x = I.getResponseHeader("Last-Modified"), x && (e.lastModified[f] = x), x = I.getResponseHeader("Etag"), x && (e.etag[f] = x)), 304 === b) D = "notmodified", q = !0;
                        else {
                            var L;
                            a: {
                                q = t;
                                r = v;
                                var N, D = q.dataTypes.slice();
                                l = D[0];
                                E = {};
                                R = 0;
                                q.dataFilter && (r = q.dataFilter(r, q.dataType));
                                if (D[1])
                                    for (L in q.converters) E[L.toLowerCase()] = q.converters[L];
                                for (; m = D[++R];)
                                    if ("*" !== m) {
                                        if ("*" !== l && l !== m) {
                                            L = E[l + " " + m] || E["* " + m];
                                            if (!L)
                                                for (N in E)
                                                    if (x = N.split(" "), x[1] === m && (L = E[l + " " + x[0]] || E["* " + x[0]])) {
                                                        !0 === L ? L = E[N] : !0 !== E[N] && (m = x[0], D.splice(R--, 0, m));
                                                        break
                                                    }
                                            if (!0 !== L)
                                                if (L && q["throws"]) r = L(r);
                                                else try {
                                                    r = L(r)
                                                } catch (O) {
                                                    L = {
                                                        state: "parsererror",
                                                        error: L ? O : "No conversion from " + l + " to " + m
                                                    };
                                                    break a
                                                }
                                        }
                                        l = m
                                    }
                                L = {
                                    state: "success",
                                    data: r
                                }
                            }
                            q =
                                L;
                            D = q.state;
                            r = q.data;
                            m = q.error;
                            q = !m
                        } else if (m = D, !D || b) D = "error", 0 > b && (b = 0);
                    I.status = b;
                    I.statusText = (d || D) + "";
                    q ? y.resolveWith(z, [r, D, I]) : y.rejectWith(z, [I, D, m]);
                    I.statusCode(B);
                    B = c;
                    u && C.trigger("ajax" + (q ? "Success" : "Error"), [I, t, q ? r : m]);
                    G.fireWith(z, [I, D]);
                    u && (C.trigger("ajaxComplete", [I, t]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var f, g, q, n, s, m, u, x, t = e.ajaxSetup({}, d),
                z = t.context || t,
                C = z !== t && (z.nodeType || z instanceof e) ? e(z) : e.event,
                y = e.Deferred(),
                G = e.Callbacks("once memory"),
                B = t.statusCode || {},
                D = {},
                E = {},
                F = 0,
                M = "canceled",
                I = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!F) {
                            var d = b.toLowerCase();
                            b = E[d] = E[d] || b;
                            D[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === F ? g : null
                    },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === F) {
                            if (!q)
                                for (q = {}; d = Ed.exec(g);) q[d[1].toLowerCase()] = d[2];
                            d = q[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) {
                        return F || (t.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || M, n && n.abort(b), j(0, b), this
                    }
                };
            y.promise(I);
            I.success = I.done;
            I.error = I.fail;
            I.complete = G.add;
            I.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > F)
                        for (c in b) B[c] = [B[c], b[c]];
                    else c = b[I.status], I.always(c)
                }
                return this
            };
            t.url = ((b || t.url) + "").replace(Dd, "").replace(Gd, qa[1] + "//");
            t.dataTypes = e.trim(t.dataType || "*").toLowerCase().split(fa);
            null == t.crossDomain && (m = mc.exec(t.url.toLowerCase()) || !1, t.crossDomain = m && m.join(":") + (m[3] ? "" : "http:" === m[1] ? 80 : 443) !== qa.join(":") + (qa[3] ? "" : "http:" === qa[1] ? 80 : 443));
            t.data && t.processData && "string" != typeof t.data && (t.data = e.param(t.data,
                t.traditional));
            na(Za, t, d, I);
            if (2 === F) return I;
            u = t.global;
            t.type = t.type.toUpperCase();
            t.hasContent = !Fd.test(t.type);
            u && 0 === e.active++ && e.event.trigger("ajaxStart");
            if (!t.hasContent && (t.data && (t.url += (lc.test(t.url) ? "&" : "?") + t.data, delete t.data), f = t.url, !1 === t.cache)) {
                m = e.now();
                var K = t.url.replace(Id, "$1_=" + m);
                t.url = K + (K === t.url ? (lc.test(t.url) ? "&" : "?") + "_=" + m : "")
            }(t.data && t.hasContent && !1 !== t.contentType || d.contentType) && I.setRequestHeader("Content-Type", t.contentType);
            t.ifModified && (f = f || t.url,
                e.lastModified[f] && I.setRequestHeader("If-Modified-Since", e.lastModified[f]), e.etag[f] && I.setRequestHeader("If-None-Match", e.etag[f]));
            I.setRequestHeader("Accept", t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : t.accepts["*"]);
            for (x in t.headers) I.setRequestHeader(x, t.headers[x]);
            if (!t.beforeSend || !1 !== t.beforeSend.call(z, I, t) && 2 !== F) {
                M = "abort";
                for (x in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) I[x](t[x]);
                if (n = na(oc, t, d, I)) {
                    I.readyState = 1;
                    u && C.trigger("ajaxSend", [I, t]);
                    t.async && 0 < t.timeout && (s = setTimeout(function() {
                        I.abort("timeout")
                    }, t.timeout));
                    try {
                        F = 1, n.send(D, j)
                    } catch (H) {
                        if (2 > F) j(-1, H);
                        else throw H;
                    }
                } else j(-1, "No Transport");
                return I
            }
            return I.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qc = [],
        Jd = /\?/,
        Va = /(=)\?(?=&|$)|\?\?/,
        Kd = e.now();
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = qc.pop() || e.expando + "_" + Kd++;
            return this[b] = !0, b
        }
    });
    e.ajaxPrefilter("json jsonp", function(d, j, f) {
        var g, q, s, n = d.data,
            m = d.url,
            u = !1 !== d.jsonp,
            t = u && Va.test(m),
            x = u && !t && "string" == typeof n && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Va.test(n);
        if ("jsonp" === d.dataTypes[0] || t || x) return g = d.jsonpCallback = e.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, q = b[g], t ? d.url = m.replace(Va, "$1" + g) : x ? d.data = n.replace(Va, "$1" + g) : u && (d.url += (Jd.test(m) ? "&" : "?") + d.jsonp + "=" + g), d.converters["script json"] = function() {
            return s || e.error(g + " was not called"), s[0]
        }, d.dataTypes[0] = "json", b[g] = function() {
            s = arguments
        }, f.always(function() {
            b[g] =
                q;
            d[g] && (d.jsonpCallback = j.jsonpCallback, qc.push(g));
            s && e.isFunction(q) && q(s[0]);
            s = q = c
        }), "script"
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return e.globalEval(b), b
            }
        }
    });
    e.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    e.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, e =
                B.head || B.getElementsByTagName("head")[0] || B.documentElement;
            return {
                send: function(j, f) {
                    d = B.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, j) {
                        if (j || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = c, j || f(200, "success")
                    };
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ra, ub = b.ActiveXObject ? function() {
            for (var b in ra) ra[b](0,
                1)
        } : !1,
        Ld = 0;
    e.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && zb())) a: {
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {}
            c = void 0
        }
        return c
    } : zb;
    var vb = e.ajaxSettings.xhr();
    e.extend(e.support, {
        ajax: !!vb,
        cors: !!vb && "withCredentials" in vb
    });
    e.support.ajax && e.ajaxTransport(function(d) {
        if (!d.crossDomain || e.support.cors) {
            var j;
            return {
                send: function(f, g) {
                    var q, s, n = d.xhr();
                    d.username ? n.open(d.type, d.url, d.async, d.username, d.password) : n.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (s in d.xhrFields) n[s] =
                            d.xhrFields[s];
                    d.mimeType && n.overrideMimeType && n.overrideMimeType(d.mimeType);
                    !d.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f) n.setRequestHeader(s, f[s])
                    } catch (m) {}
                    n.send(d.hasContent && d.data || null);
                    j = function(b, f) {
                        var s, m, r, u, t;
                        try {
                            if (j && (f || 4 === n.readyState))
                                if (j = c, q && (n.onreadystatechange = e.noop, ub && delete ra[q]), f) 4 !== n.readyState && n.abort();
                                else {
                                    s = n.status;
                                    r = n.getAllResponseHeaders();
                                    u = {};
                                    (t = n.responseXML) && t.documentElement && (u.xml = t);
                                    try {
                                        u.text =
                                            n.responseText
                                    } catch (v) {}
                                    try {
                                        m = n.statusText
                                    } catch (x) {
                                        m = ""
                                    }!s && d.isLocal && !d.crossDomain ? s = u.text ? 200 : 404 : 1223 === s && (s = 204)
                                }
                        } catch (z) {
                            f || g(-1, z)
                        }
                        u && g(s, m, u, r)
                    };
                    d.async ? 4 === n.readyState ? setTimeout(j, 0) : (q = ++Ld, ub && (ra || (ra = {}, e(b).unload(ub)), ra[q] = j), n.onreadystatechange = j) : j()
                },
                abort: function() {
                    j && j(0, 1)
                }
            }
        }
    });
    var Aa, Wa, Md = /^(?:toggle|show|hide)$/,
        Nd = RegExp("^(?:([-+])=|)(" + Ea + ")([a-z%]*)$", "i"),
        Od = /queueHooks$/,
        Ba = [
            function(b, c, d) {
                var j, f, g, q, s, m, u = this,
                    t = b.style,
                    x = {},
                    z = [],
                    C = b.nodeType && G(b);
                d.queue ||
                    (s = e._queueHooks(b, "fx"), null == s.unqueued && (s.unqueued = 0, m = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || m()
                    }), s.unqueued++, u.always(function() {
                        u.always(function() {
                            s.unqueued--;
                            e.queue(b, "fx").length || s.empty.fire()
                        })
                    }));
                1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [t.overflow, t.overflowX, t.overflowY], "inline" === e.css(b, "display") && "none" === e.css(b, "float") && (!e.support.inlineBlockNeedsLayout || "inline" === L(b.nodeName) ? t.display = "inline-block" : t.zoom = 1));
                d.overflow && (t.overflow = "hidden",
                    e.support.shrinkWrapBlocks || u.done(function() {
                        t.overflow = d.overflow[0];
                        t.overflowX = d.overflow[1];
                        t.overflowY = d.overflow[2]
                    }));
                for (j in c) f = c[j], Md.exec(f) && (delete c[j], f !== (C ? "hide" : "show") && z.push(j));
                if (f = z.length) {
                    g = e._data(b, "fxshow") || e._data(b, "fxshow", {});
                    C ? e(b).show() : u.done(function() {
                        e(b).hide()
                    });
                    u.done(function() {
                        var c;
                        e.removeData(b, "fxshow", !0);
                        for (c in x) e.style(b, c, x[c])
                    });
                    for (j = 0; j < f; j++) c = z[j], q = u.createTween(c, C ? g[c] : 0), x[c] = g[c] || e.style(b, c), c in g || (g[c] = q.start, C && (q.end = q.start,
                        q.start = "width" === c || "height" === c ? 1 : 0))
                }
            }
        ],
        ta = {
            "*": [
                function(b, c) {
                    var d, j, f = this.createTween(b, c),
                        g = Nd.exec(c),
                        q = f.cur(),
                        s = +q || 0,
                        m = 1,
                        u = 20;
                    if (g) {
                        d = +g[2];
                        j = g[3] || (e.cssNumber[b] ? "" : "px");
                        if ("px" !== j && s) {
                            s = e.css(f.elem, b, !0) || d || 1;
                            do m = m || ".5", s /= m, e.style(f.elem, b, s + j); while (m !== (m = f.cur() / q) && 1 !== m && --u)
                        }
                        f.unit = j;
                        f.start = s;
                        f.end = g[1] ? s + (g[1] + 1) * d : d
                    }
                    return f
                }
            ]
        };
    e.Animation = e.extend(Bb, {
        tweener: function(b, c) {
            e.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, j = 0, f = b.length; j < f; j++) d = b[j], ta[d] = ta[d] || [], ta[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? Ba.unshift(b) : Ba.push(b)
        }
    });
    e.Tween = S;
    S.prototype = {
        constructor: S,
        init: function(b, c, d, j, f, g) {
            this.elem = b;
            this.prop = d;
            this.easing = f || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = j;
            this.unit = g || (e.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = S.propHooks[this.prop];
            return b && b.get ? b.get(this) : S.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = S.propHooks[this.prop];
            return this.options.duration ? this.pos = c = e.easing[this.easing](b, this.options.duration *
                b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : S.propHooks._default.set(this), this
        }
    };
    S.prototype.init.prototype = S.prototype;
    S.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = e.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                e.fx.step[b.prop] ? e.fx.step[b.prop](b) : b.elem.style &&
                    (null != b.elem.style[e.cssProps[b.prop]] || e.cssHooks[b.prop]) ? e.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    e.each(["toggle", "show", "hide"], function(b, c) {
        var d = e.fn[c];
        e.fn[c] = function(j, f, g) {
            return null == j || "boolean" == typeof j || !b && e.isFunction(j) && e.isFunction(f) ? d.apply(this, arguments) : this.animate(Ca(c, !0), j, f, g)
        }
    });
    e.fn.extend({
        fadeTo: function(b, c, d, e) {
            return this.filter(G).css("opacity",
                0).show().end().animate({
                opacity: c
            }, b, d, e)
        },
        animate: function(b, c, d, j) {
            var f = e.isEmptyObject(b),
                g = e.speed(c, d, j);
            c = function() {
                var c = Bb(this, e.extend({}, b), g);
                f && c.stop(!0)
            };
            return f || !1 === g.queue ? this.each(c) : this.queue(g.queue, c)
        },
        stop: function(b, d, j) {
            var f = function(b) {
                var c = b.stop;
                delete b.stop;
                c(j)
            };
            return "string" != typeof b && (j = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    g = e.timers,
                    l = e._data(this);
                if (d) l[d] && l[d].stop && f(l[d]);
                else
                    for (d in l) l[d] &&
                        l[d].stop && Od.test(d) && f(l[d]);
                for (d = g.length; d--;) g[d].elem === this && (null == b || g[d].queue === b) && (g[d].anim.stop(j), c = !1, g.splice(d, 1));
                (c || !j) && e.dequeue(this, b)
            })
        }
    });
    e.each({
        slideDown: Ca("show"),
        slideUp: Ca("hide"),
        slideToggle: Ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        e.fn[b] = function(b, d, e) {
            return this.animate(c, b, d, e)
        }
    });
    e.speed = function(b, c, d) {
        var j = b && "object" == typeof b ? e.extend({}, b) : {
            complete: d || !d && c || e.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !e.isFunction(c) && c
        };
        j.duration = e.fx.off ? 0 : "number" == typeof j.duration ? j.duration : j.duration in e.fx.speeds ? e.fx.speeds[j.duration] : e.fx.speeds._default;
        if (null == j.queue || !0 === j.queue) j.queue = "fx";
        return j.old = j.complete, j.complete = function() {
            e.isFunction(j.old) && j.old.call(this);
            j.queue && e.dequeue(this, j.queue)
        }, j
    };
    e.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    e.timers = [];
    e.fx = S.prototype.init;
    e.fx.tick = function() {
        for (var b, c = e.timers,
            d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || e.fx.stop()
    };
    e.fx.timer = function(b) {
        b() && e.timers.push(b) && !Wa && (Wa = setInterval(e.fx.tick, e.fx.interval))
    };
    e.fx.interval = 13;
    e.fx.stop = function() {
        clearInterval(Wa);
        Wa = null
    };
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fx.step = {};
    e.expr && e.expr.filters && (e.expr.filters.animated = function(b) {
        return e.grep(e.timers, function(c) {
            return b === c.elem
        }).length
    });
    var rc = /^(?:body|html)$/i;
    e.fn.offset = function(b) {
        if (arguments.length) return b ===
            c ? this : this.each(function(c) {
                e.offset.setOffset(this, b, c)
            });
        var d, j, f, g, q, s, m, u = {
                top: 0,
                left: 0
            },
            t = this[0],
            x = t && t.ownerDocument;
        if (x) return (j = x.body) === t ? e.offset.bodyOffset(t) : (d = x.documentElement, e.contains(d, t) ? ("undefined" != typeof t.getBoundingClientRect && (u = t.getBoundingClientRect()), f = Cb(x), g = d.clientTop || j.clientTop || 0, q = d.clientLeft || j.clientLeft || 0, s = f.pageYOffset || d.scrollTop, m = f.pageXOffset || d.scrollLeft, {
            top: u.top + s - g,
            left: u.left + m - q
        }) : u)
    };
    e.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return e.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(e.css(b, "marginTop")) || 0, d += parseFloat(e.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var j = e.css(b, "position");
            "static" === j && (b.style.position = "relative");
            var f = e(b),
                g = f.offset(),
                q = e.css(b, "top"),
                s = e.css(b, "left"),
                m = {},
                u = {},
                t, x;
            ("absolute" === j || "fixed" === j) && -1 < e.inArray("auto", [q, s]) ? (u = f.position(), t = u.top, x = u.left) : (t = parseFloat(q) || 0, x = parseFloat(s) || 0);
            e.isFunction(c) && (c = c.call(b, d, g));
            null !=
                c.top && (m.top = c.top - g.top + t);
            null != c.left && (m.left = c.left - g.left + x);
            "using" in c ? c.using.call(b, m) : f.css(m)
        }
    };
    e.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    j = rc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(e.css(b, "marginTop")) || 0, d.left -= parseFloat(e.css(b, "marginLeft")) || 0, j.top += parseFloat(e.css(c[0], "borderTopWidth")) || 0, j.left += parseFloat(e.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - j.top,
                    left: d.left - j.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b =
                    this.offsetParent || B.body; b && !rc.test(b.nodeName) && "static" === e.css(b, "position");) b = b.offsetParent;
                return b || B.body
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var j = /Y/.test(d);
        e.fn[b] = function(f) {
            return e.access(this, function(b, f, g) {
                var q = Cb(b);
                if (g === c) return q ? d in q ? q[d] : q.document.documentElement[f] : b[f];
                q ? q.scrollTo(j ? e(q).scrollLeft() : g, j ? g : e(q).scrollTop()) : b[f] = g
            }, b, f, arguments.length, null)
        }
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        e.each({
            padding: "inner" +
                b,
            content: d,
            "": "outer" + b
        }, function(j, f) {
            e.fn[f] = function(f, g) {
                var q = arguments.length && (j || "boolean" != typeof f),
                    s = j || (!0 === f || !0 === g ? "margin" : "border");
                return e.access(this, function(d, j, f) {
                    var g;
                    return e.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (g = d.documentElement, Math.max(d.body["scroll" + b], g["scroll" + b], d.body["offset" + b], g["offset" + b], g["client" + b])) : f === c ? e.css(d, j, f, s) : e.style(d, j, f, s)
                }, d, q ? f : c, q, null)
            }
        })
    });
    b.jQuery = b.$ = e;
    "function" == typeof define && define.amd && define.amd.jQuery &&
        define("jquery", [], function() {
            return e
        })
})(window);
var portraitMode = !0,
    mobilePortraitWidth = 480,
    mobilePortraitHeight = 640,
    mobileLandscapeWidth = 640,
    mobileLandscapeHeight = 480,
    mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
    mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight,
    desktopWidth = 480,
    desktopHeight = 640,
    w, h, multiplier, destW, destH, dynamicClickableEntityDivs = {},
    coreDivsToResize = ["game", "play", "orientate"],
    advancedDivsToResize = {/*
        MobileAdInGamePreroll: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height +
                20
        },
        MobileAdInGameEnd: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll2: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd2: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll3: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd3: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width +
                2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        }*/
    };

function adjustLayers(b) {
    for (i = 0; i < coreDivsToResize.length; i++) ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", b ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize) try {
        $("#" + key).width(w), $("#" + key).height(h), $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2), $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) /
            2)
    } catch (c) {
        console.log(c)
    }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}
var minHeight = 99999999;

function sizeHandler() {
    if ($("#game")) {
        w = window.innerWidth;
        h = window.innerHeight;
        ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier);
        widthRatio = window.innerWidth / mobileWidth;
        heightRatio = window.innerHeight / mobileHeight;
        adjustLayers();
        window.scrollTo(0, 1);
        ig.ua.mobile || $("#tempdiv").hide();
        for (var b = navigator.userAgent.split(" "),
            c = null, d = 0; d < b.length; d++) "Version/" == b[d].substr(0, 8) && (c = b[d]);
        b = window.chrome; - 1 < navigator.userAgent.indexOf("Chrome") && null == c ? ig.ua.mobile && null !== b && void 0 !== b && $(window) && (c = document.getElementById("scrollDown"), c.src = "media/graphics/orientate/scroll_down.png", c.style.height = "40%", c.style.width = "20%", c.style.backgroundColor = "rgba(11,156,49,0.4)", 0 == window.orientation && $("#scrollDown").hide(), 90 == Math.abs(window.orientation) && (c = document.body.offsetHeight, c < minHeight && (minHeight = c), c = portraitMode ?
            document.getElementById("orientate") : document.getElementById("game"), b = document.getElementById("tempdiv"), c = c.clientHeight + b.clientHeight, console.log(c + "," + minHeight), c > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()), $(window).on("orientationchange", function() {
            0 == window.orientation && $("#scrollDown").hide();
            Math.abs(window.orientation);
            $("#scrollDown").show();
            0 == window.orientation && $("#scrollDown").hide()
        }), window.addEventListener("resize", function() {
            0 == window.orientation && $("#scrollDown").hide();
            if (90 == Math.abs(window.orientation)) {
                var b = portraitMode ? document.getElementById("orientate") : document.getElementById("game"),
                    c = document.getElementById("tempdiv");
                b.clientHeight + c.clientHeight > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()
            }
        })) : ($("#scrollDown").hide(), $("#tempdiv").hide())
    }
}

function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
    sizeHandler()
}

function fixSamsungHandler() {
    ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchmove", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchend",
        function(b) {
            b.preventDefault();
            return !1
        }, !1))
}
window.addEventListener("resize", function() {
    orientationHandler()
}, !1);
window.addEventListener("orientationchange", function() {
    orientationHandler()
}, !1);
document.ontouchmove = function() {
    window.scrollTo(0, 1)
};

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var f = c[d].split("=");
        if (decodeURIComponent(f[0]) == b) return decodeURIComponent(f[1])
    }
}
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var f in b) this.settings[f] = b[f];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) :
        this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            f;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var g = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", g, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", g, !0);
                    g("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (f in this.HTML5API) this[f] = this.HTML5API[f];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (f in this.FLASHAPI) this[f] = this.FLASHAPI[f];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            f, g = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var m = document.createElement("object");
            m.id = "jukebox-flashstream-" + this.id;
            m.setAttribute("type", "application/x-shockwave-flash");
            m.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            m.setAttribute("width", "0");
            m.setAttribute("height", "0");
            g.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            g.flashvars = b.join("&amp;");
            for (f in g) b = document.createElement("param"), b.setAttribute("name", f), b.setAttribute("value", g[f]), m.appendChild(b);
            c.outerHTML = m.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c =
                document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            g.play = !1;
            g.loop = !1;
            g.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (f in g) c.setAttribute(f, g[f]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                f;
            if (void 0 !== d[b]) f = d[b].start;
            else if ("number" === typeof b) {
                f = b;
                for (var g in d)
                    if (f >= d[g].start && f <=
                        d[g].end) {
                        b = g;
                        break
                    }
            }
            void 0 !== f && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(f))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" ===
            typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                    e: "3gp",
                    m: ["audio/3gpp", "audio/amr"]
                }, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {
                    e: "amr",
                    m: ["audio/amr", "audio/3gpp"]
                }, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                }, {
                    e: "mp3",
                    m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                }, {
                    e: "mpga",
                    m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                }, {
                    e: "mp4",
                    m: ["audio/mp4", "video/mp4"]
                }, {
                    e: "ogg",
                    m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                }, {
                    e: "wav",
                    m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                }, {
                    e: "webm",
                    m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                }],
                d, f, g = 0, m = c.length; g < m; g++)
                if (f = c[g].e, c[g].m.length && "object" === typeof c[g].m)
                    for (var y = 0, u = c[g].m.length; y < u; y++)
                        if (d = c[g].m[y], "" !== b.canPlayType(d)) {
                            this.codecs[f] = d;
                            break
                        } else this.codecs[f] || (this.codecs[f] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (x) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var f = this.__clones[d];
            if (null === f.isPlaying && f.origin === b) return f
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var g in c) d[g] = c[g];
            d.autoplay = !1;
            g = new jukebox.Player(d, b);
            g.isClone = !0;
            g.wasReady = !1;
            return this.__clones[g.id] = g
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length &&
                this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
                    c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var f = b[c],
                g = f.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g]) return f
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = {},
        c = null,
        d = !0,
        f = !1;
    if ("undefined" !== typeof AudioContext) c = new AudioContext;
    else if ("undefined" !== typeof webkitAudioContext) c = new webkitAudioContext;
    else if ("undefined" !== typeof Audio) {
        d = !1;
        try {
            new Audio
        } catch (g) {
            f = !0
        }
    } else d = !1, f = !0; if (d) {
        var m = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        m.gain.value = 1;
        m.connect(c.destination)
    }
    var y = function() {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.noAudio = f;
        this._howls = []
    };
    y.prototype = {
        volume: function(b) {
            b =
                parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (m.gain.value = b);
                for (var c in this._howls)
                    if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                        for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? m.gain.value : this._volume
        },
        mute: function() {
            this._setMuted(!0);
            return this
        },
        unmute: function() {
            this._setMuted(!1);
            return this
        },
        _setMuted: function(b) {
            this._muted = b;
            d && (m.gain.value = b ? 0 : this._volume);
            for (var c in this._howls)
                if (this._howls.hasOwnProperty(c) &&
                    !1 === this._howls[c]._webAudio)
                    for (var f = 0; f < this._howls[c]._audioNode.length; f++) this._howls[c]._audioNode[f].muted = b
        }
    };
    var u = new y,
        y = null;
    if (!f) var y = new Audio,
        x = {
            mp3: !!y.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            opus: !!y.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!y.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!y.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            m4a: !!(y.canPlayType("audio/x-m4a;") || y.canPlayType("audio/aac;")).replace(/^no$/,
                ""),
            mp4: !!(y.canPlayType("audio/x-mp4;") || y.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !!y.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
        };
    var t = function(b) {
        this._autoplay = b.autoplay || !1;
        this._buffer = b.buffer || !1;
        this._duration = b.duration || 0;
        this._format = b.format || null;
        this._loop = b.loop || !1;
        this._loaded = !1;
        this._sprite = b.sprite || {};
        this._src = b.src || "";
        this._pos3d = b.pos3d || [0, 0, -0.5];
        this._volume = void 0 !== b.volume ? b.volume : 1;
        this._urls = b.urls || [];
        this._rate = b.rate || 1;
        this._onload = [b.onload || function() {}];
        this._onloaderror = [b.onloaderror || function() {}];
        this._onend = [b.onend || function() {}];
        this._onpause = [b.onpause || function() {}];
        this._onplay = [b.onplay || function() {}];
        this._onendTimer = [];
        this._webAudio = d && !this._buffer;
        this._audioNode = [];
        this._webAudio && this._setupAudioNode();
        u._howls.push(this);
        this.load()
    };
    t.prototype = {
        load: function() {
            var d = this,
                g = null;
            if (!f) {
                for (var s = 0; s < d._urls.length; s++) {
                    var m, t;
                    if (d._format) m = d._format;
                    else if (t = d._urls[s].toLowerCase().split("?")[0], m =
                        (m = t.match(/.+\.([^?]+)(\?|$)/)) && 2 <= m.length ? m : t.match(/data\:audio\/([^?]+);/)) m = m[1];
                    else {
                        d.on("loaderror");
                        return
                    } if (x[m]) {
                        g = d._urls[s];
                        break
                    }
                }
                if (g) {
                    d._src = g;
                    if (d._webAudio) {
                        var y = g;
                        if (y in b) d._duration = b[y].duration, z(d);
                        else {
                            var E = new XMLHttpRequest;
                            E.open("GET", y, !0);
                            E.responseType = "arraybuffer";
                            E.onload = function() {
                                c.decodeAudioData(E.response, function(c) {
                                    c && (b[y] = c, z(d, c))
                                }, function() {
                                    d.on("loaderror")
                                })
                            };
                            E.onerror = function() {
                                d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode,
                                    d.load())
                            };
                            try {
                                E.send()
                            } catch (Xa) {
                                E.onerror()
                            }
                        }
                    } else {
                        var M = new Audio;
                        d._audioNode.push(M);
                        M.src = g;
                        M._pos = 0;
                        M.preload = "auto";
                        M.volume = u._muted ? 0 : d._volume * u.volume();
                        b[g] = d;
                        var L = function() {
                            d._duration = Math.ceil(10 * M.duration) / 10;
                            0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = {
                                _default: [0, 1E3 * d._duration]
                            });
                            d._loaded || (d._loaded = !0, d.on("load"));
                            d._autoplay && d.play();
                            M.removeEventListener("canplaythrough", L, !1)
                        };
                        M.addEventListener("canplaythrough", L, !1);
                        M.load()
                    }
                    return d
                }
            }
            d.on("loaderror")
        },
        urls: function(b) {
            return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(d, f) {
            var g = this;
            "function" === typeof d && (f = d);
            if (!d || "function" === typeof d) d = "_default";
            if (!g._loaded) return g.on("load", function() {
                g.play(d, f)
            }), g;
            if (!g._sprite[d]) return "function" === typeof f && f(), g;
            g._inactiveNode(function(m) {
                m._sprite = d;
                var t = 0 < m._pos ? m._pos : g._sprite[d][0] / 1E3,
                    x = g._sprite[d][1] / 1E3 - m._pos,
                    z = !(!g._loop && !g._sprite[d][2]),
                    y = "string" === typeof f ? f :
                    Math.round(Date.now() * Math.random()) + "",
                    M, L = {
                        id: y,
                        sprite: d,
                        loop: z
                    };
                M = setTimeout(function() {
                    !g._webAudio && z && g.stop(L.id, L.timer).play(d, L.id);
                    g._webAudio && !z && (g._nodeById(L.id).paused = !0, g._nodeById(L.id)._pos = 0);
                    !g._webAudio && !z && g.stop(L.id, L.timer);
                    g.on("end", y)
                }, 1E3 * x);
                g._onendTimer.push(M);
                L.timer = g._onendTimer[g._onendTimer.length - 1];
                if (g._webAudio) {
                    M = g._sprite[d][0] / 1E3;
                    var P = g._sprite[d][1] / 1E3;
                    m.id = y;
                    m.paused = !1;
                    M = [z, M, P];
                    P = g._nodeById(y);
                    P.bufferSource = c.createBufferSource();
                    P.bufferSource.buffer =
                        b[g._src];
                    P.bufferSource.connect(P.panner);
                    P.bufferSource.loop = M[0];
                    M[0] && (P.bufferSource.loopStart = M[1], P.bufferSource.loopEnd = M[1] + M[2]);
                    P.bufferSource.playbackRate.value = g._rate;
                    g._playStart = c.currentTime;
                    m.gain.value = g._volume;
                    "undefined" === typeof m.bufferSource.start ? m.bufferSource.noteGrainOn(0, t, x) : m.bufferSource.start(0, t, x)
                } else if (4 === m.readyState) m.id = y, m.currentTime = t, m.muted = u._muted, m.volume = g._volume * u.volume(), setTimeout(function() {
                    m.play()
                }, 0);
                else {
                    g._clearEndTimer(M);
                    var za = d,
                        na =
                        f,
                        sa = function() {
                            g.play(za, na);
                            m.removeEventListener("canplaythrough", sa, !1)
                        };
                    m.addEventListener("canplaythrough", sa, !1);
                    return g
                }
                g.on("play");
                "function" === typeof f && f(y);
                return g
            });
            return g
        },
        pause: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() {
                d.pause(b)
            }), d;
            d._clearEndTimer(c || 0);
            var f = b ? d._nodeById(b) : d._activeNode();
            if (f)
                if (f._pos = d.pos(null, b), d._webAudio) {
                    if (!f.bufferSource || f.paused) return d;
                    f.paused = !0;
                    "undefined" === typeof f.bufferSource.stop ? f.bufferSource.noteOff(0) :
                        f.bufferSource.stop(0)
                } else f.pause();
            d.on("pause");
            return d
        },
        stop: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() {
                d.stop(b)
            }), d;
            d._clearEndTimer(c || 0);
            var f = b ? d._nodeById(b) : d._activeNode();
            if (f)
                if (f._pos = 0, d._webAudio) {
                    if (!f.bufferSource || f.paused) return d;
                    f.paused = !0;
                    "undefined" === typeof f.bufferSource.stop ? f.bufferSource.noteOff(0) : f.bufferSource.stop(0)
                } else f.pause(), f.currentTime = 0;
            return d
        },
        mute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                    c.mute(b)
                }),
                c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.volume = 0);
            return c
        },
        unmute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.unmute(b)
            }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume : d.volume = c._volume);
            return c
        },
        volume: function(b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded) return d.on("play", function() {
                    d.volume(b, c)
                }), d;
                var f = c ? d._nodeById(c) : d._activeNode();
                f && (d._webAudio ? f.gain.value = b : f.volume =
                    b * u.volume());
                return d
            }
            return d._volume
        },
        loop: function(b) {
            return "boolean" === typeof b ? (this._loop = b, this) : this._loop
        },
        sprite: function(b) {
            return "object" === typeof b ? (this._sprite = b, this) : this._sprite
        },
        pos: function(b, d) {
            var f = this;
            if (!f._loaded) return f.on("load", function() {
                f.pos(b)
            }), "number" === typeof b ? f : f._pos || 0;
            b = parseFloat(b);
            var g = d ? f._nodeById(d) : f._activeNode();
            if (g) return 0 <= b ? (f.pause(d), g._pos = b, f.play(g._sprite, d), f) : f._webAudio ? g._pos + (c.currentTime - f._playStart) : g.currentTime;
            if (0 <= b) return f;
            for (g = 0; g < f._audioNode.length; g++)
                if (f._audioNode[g].paused && 4 === f._audioNode[g].readyState) return f._webAudio ? f._audioNode[g]._pos : f._audioNode[g].currentTime
        },
        pos3d: function(b, c, d, f) {
            var g = this;
            c = "undefined" === typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!g._loaded) return g.on("play", function() {
                g.pos3d(b, c, d, f)
            }), g;
            if (0 <= b || 0 > b) {
                if (g._webAudio) {
                    var m = f ? g._nodeById(f) : g._activeNode();
                    m && (g._pos3d = [b, c, d], m.panner.setPosition(b, c, d))
                }
            } else return g._pos3d;
            return g
        },
        fade: function(b, c, d,
            f, g) {
            var m = this,
                u = Math.abs(b - c),
                t = b > c ? "down" : "up",
                u = u / 0.01,
                x = d / u;
            if (!m._loaded) return m.on("load", function() {
                m.fade(b, c, d, f, g)
            }), m;
            m.volume(b, g);
            for (var z = 1; z <= u; z++)(function() {
                var b = Math.round(1E3 * (m._volume + ("up" === t ? 0.01 : -0.01) * z)) / 1E3;
                setTimeout(function() {
                    m.volume(b, g);
                    b === c && f && f()
                }, x * z)
            })()
        },
        fadeIn: function(b, c, d) {
            return this.volume(0).play().fade(0, b, c, d)
        },
        fadeOut: function(b, c, d, f) {
            var g = this;
            return g.fade(g._volume, b, c, function() {
                d && d();
                g.pause(f);
                g.on("end")
            }, f)
        },
        _nodeById: function(b) {
            for (var c =
                this._audioNode[0], d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].id === b) {
                    c = this._audioNode[d];
                    break
                }
            return c
        },
        _activeNode: function() {
            for (var b = null, c = 0; c < this._audioNode.length; c++)
                if (!this._audioNode[c].paused) {
                    b = this._audioNode[c];
                    break
                }
            this._drainPool();
            return b
        },
        _inactiveNode: function(b) {
            for (var c = null, d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                    b(this._audioNode[d]);
                    c = !0;
                    break
                }
            this._drainPool();
            if (!c) {
                var f;
                this._webAudio ? (f = this._setupAudioNode(),
                    b(f)) : (this.load(), f = this._audioNode[this._audioNode.length - 1], f.addEventListener("loadedmetadata", function() {
                    b(f)
                }))
            }
        },
        _drainPool: function() {
            var b = 0,
                c;
            for (c = 0; c < this._audioNode.length; c++) this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--) this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        },
        _clearEndTimer: function(b) {
            b = this._onendTimer.indexOf(b);
            b = 0 <= b ? b : 0;
            this._onendTimer[b] && (clearTimeout(this._onendTimer[b]),
                this._onendTimer.splice(b, 1))
        },
        _setupAudioNode: function() {
            var b = this._audioNode,
                d = this._audioNode.length;
            b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
            b[d].gain.value = this._volume;
            b[d].paused = !0;
            b[d]._pos = 0;
            b[d].readyState = 4;
            b[d].connect(m);
            b[d].panner = c.createPanner();
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        },
        on: function(b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c) d.push(c);
            else
                for (var f = 0; f < d.length; f++) c ?
                    d[f].call(this, c) : d[f].call(this);
            return this
        },
        off: function(b, c) {
            for (var d = this["_on" + b], f = c.toString(), g = 0; g < d.length; g++)
                if (f === d[g].toString()) {
                    d.splice(g, 1);
                    break
                }
            return this
        },
        unload: function() {
            for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++) c[d].paused || this.stop(c[d].id), this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            c = u._howls.indexOf(this);
            null !== c && 0 <= c && u._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d) var z = function(b, c) {
        b._duration = c ? c.duration : b._duration;
        0 === Object.getOwnPropertyNames(b._sprite).length &&
            (b._sprite = {
                _default: [0, 1E3 * b._duration]
            });
        b._loaded || (b._loaded = !0, b.on("load"));
        b._autoplay && b.play()
    };
    "function" === typeof define && define.amd && define(function() {
        return {
            Howler: u,
            Howl: t
        }
    });
    "undefined" !== typeof exports && (exports.Howler = u, exports.Howl = t);
    window.Howler = u;
    window.Howl = t
})();
(function(b) {
    Number.prototype.map = function(b, c, d, f) {
        return d + (f - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            f = function() {},
            g = function() {
                return d.apply(this instanceof f && b ?
                    this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        f.prototype = this.prototype;
        g.prototype = new f;
        return g
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b ||
                b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, f = b.length; d < f; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var f = c[d];
                if ("object" != typeof f || f instanceof HTMLElement || f instanceof ig.Class || null === f) b[d] = f;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = f instanceof Array ? [] : {};
                    ig.merge(b[d], f)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                f;
            for (f in b) c.push(f);
            c.sort();
            for (f = 0; f < c.length; f++) d.push(b[c[f]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var f = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = b["ms" + f] = b["moz" + f] = b["webkit" + f] = b["o" + f] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b, c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, f, g) {
            var m = ig.$new("canvas");
            m.width = b.width;
            m.height =
                b.height;
            var s = m.getContext("2d");
            ig.System.SCALE.CRISP(m, s);
            var y = ig.getVendorAttribute(s, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(s, "getImageDataHD");
            var G = b.width / y,
                D = b.height / y;
            m.width = Math.ceil(G);
            m.height = Math.ceil(D);
            s.drawImage(b, 0, 0, G, D);
            return 1 === y ? s.getImageData(c, d, f, g) : s.getImageDataHD(c, d, f, g)
        },
        module: function(b) {
            if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                f = ig.$new("script");
            f.type = "text/javascript";
            f.src = d;
            f.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            f.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(f)
        },
        _execModules: function() {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], f = !0, g = 0; g < d.requires.length; g++) {
                    var m = d.requires[g];
                    ig.modules[m] ? ig.modules[m].loaded ||
                        (f = !1) : (f = !1, ig._loadScript(m, d.name))
                }
                f && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    f = [];
                    m = ig._loadQueue[c].requires;
                    for (g = 0; g < m.length; g++) d = ig.modules[m[g]], (!d || !d.loaded) && f.push(m[g]);
                    b.push(ig._loadQueue[c].name + " (requires: " + f.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" +
                b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) &&
                ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() :
                (ig._boot(), ig.modules["dom.ready"] = {
                    requires: [],
                    loaded: !1,
                    body: null
                }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(f, g) {
            var m = c++;
            d[m] = !0;
            var y = function() {
                d[m] && (b.requestAnimationFrame(y, g), f())
            };
            b.requestAnimationFrame(y, g);
            return m
        };
        b.ig.clearAnimation =
            function(b) {
                delete d[b]
            }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var f = !1,
        g = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        m = 0;
    b.ig.Class = function() {};
    var y = function(b) {
        var c = this.prototype,
            d = {},
            f;
        for (f in b) "function" == typeof b[f] && "function" == typeof c[f] && g.test(b[f]) ? (d[f] = c[f], c[f] = function(b, c) {
                return function() {
                    var f = this.parent;
                    this.parent = d[b];
                    var g = c.apply(this, arguments);
                    this.parent = f;
                    return g
                }
            }(f, b[f])) : c[f] =
            b[f]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!f) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var t = this.prototype;
        f = !0;
        var z = new this;
        f = !1;
        for (var j in c) z[j] = "function" == typeof c[j] && "function" == typeof t[j] && g.test(c[j]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = t[b];
                var f = c.apply(this, arguments);
                this.parent =
                    d;
                return f
            }
        }(j, c[j]) : c[j];
        d.prototype = z;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = y;
        d.classId = z.classId = ++m;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width,
                    this.height),
                d = this.width * b,
                f = this.height * b,
                g = ig.$new("canvas");
            g.width = d;
            g.height = f;
            for (var m = g.getContext("2d"), y = m.getImageData(0, 0, d, f), u = 0; u < f; u++)
                for (var x = 0; x < d; x++) {
                    var t = 4 * (Math.floor(u / b) * this.width + Math.floor(x / b)),
                        z = 4 * (u * d + x);
                    y.data[z] = c.data[t];
                    y.data[z + 1] = c.data[t + 1];
                    y.data[z + 2] = c.data[t + 2];
                    y.data[z + 3] = c.data[t + 3]
                }
            m.putImageData(y, 0, 0);
            this.data = g
        },
        draw: function(b, c, d, f, g, m) {
            if (this.loaded) {
                var y = ig.system.scale;
                g = (g ? g : this.width) * y;
                m = (m ? m : this.height) * y;
                ig.system.context.drawImage(this.data,
                    d ? d * y : 0, f ? f * y : 0, g, m, ig.system.getDrawPos(b), ig.system.getDrawPos(c), g, m);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, f, g, m, y) {
            g = g ? g : f;
            if (this.loaded && !(f > this.width || g > this.height)) {
                var u = ig.system.scale,
                    x = Math.floor(f * u),
                    t = Math.floor(g * u),
                    z = m ? -1 : 1,
                    j = y ? -1 : 1;
                if (m || y) ig.system.context.save(), ig.system.context.scale(z, j);
                ig.system.context.drawImage(this.data, Math.floor(d * f) % this.width * u, Math.floor(d * f / this.width) * g * u, x, t, ig.system.getDrawPos(b) * z - (m ? x : 0), ig.system.getDrawPos(c) * j - (y ? t : 0), x, t);
                (m ||
                    y) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, f) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var g = this.height + this.lineSpacing, m = 0; m < b.length; m++) this.draw(b[m], c, d + m * g, f)
            } else {
                if (f == ig.Font.ALIGN.RIGHT || f == ig.Font.ALIGN.CENTER) m = this._widthForLine(b), c -= f == ig.Font.ALIGN.CENTER ? m / 2 : m;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (m = 0; m < b.length; m++) f = b.charCodeAt(m),
                    c += this._drawChar(f - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var f = ig.system.scale,
                g = this.widthMap[b] * f,
                m = (this.height - 2) * f;
            ig.system.context.drawImage(this.data, this.indices[b] * f, 0, g, m, ig.system.getDrawPos(c), ig.system.getDrawPos(d), g, m);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, f = 0, g = 0; g < b.width; g++) {
                var m = 4 * g + 3;
                127 < c.data[m] ? f++ : 128 > c.data[m] && f && (this.widthMap.push(f), this.indices.push(g - f), d++, f = 0)
            }
            this.widthMap.push(f);
            this.indices.push(g - f)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var f = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c <
                        ig.Sound.channels; c++) {
                        var g = new Audio(f);
                        g.load();
                        this.clips[b].push(g)
                    }
                return this.clips[b][0]
            }
            var m = new Audio(f);
            d && (m.addEventListener("canplaythrough", function u(c) {
                m.removeEventListener("canplaythrough", u, !1);
                d(b, !0, c)
            }, !1), m.addEventListener("error", function(c) {
                d(b, !1, c)
            }, !1));
            m.preload = "auto";
            m.load();
            this.clips[b] = [m];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) g = new Audio(f), g.load(), this.clips[b].push(g);
            return m
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended &&
                    (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                    get: this.getVolume.bind(this),
                    set: this.setVolume.bind(this)
                }), Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) :
                this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack ||
                    (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(),
                this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this),
                50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
                this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b =
                    0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt =
                ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, f, g) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, f, g);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
                    this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), window.frameElement && "IFRAME" == window.frameElement.nodeName || b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                f = this;
            d.addEventListener("touchstart", function(b) {
                f.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                f.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                f.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                f.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.sound-handler").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        formats: {
            ogg: ".ogg",
            mp3: ".mp3"
        },
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMuted: !1,
        muted: !1,
        bgmStarted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{
            name: "staticSound",
            path: "media/audio/play/static"
        }, {
            name: "openingSound",
            path: "media/audio/opening/opening"
        }, {
            name: "kittyopeningSound",
            path: "media/audio/opening/kittyopening"
        }, {
            name: "engine",
            path: "media/audio/engine"
        }, {
            name: "slow",
            path: "media/audio/slow"
        }, {
            name: "fast",
            path: "media/audio/fast"
        }, {
            name: "faster",
            path: "media/audio/faster"
        }, {
            name: "click",
            path: "media/audio/click"
        }, {
            name: "turn",
            path: "media/audio/break"
        }, {
            name: "word",
            path: "media/audio/win"
        }, {
            name: "swoosh",
            path: "media/audio/swoosh"
        }, {
            name: "start",
            path: "media/audio/signal"
        }, {
            name: "rank",
            path: "media/audio/rank"
        }, {
            name: "warn",
            path: "media/audio/warning2"
        }, {
            name: "end",
            path: "media/audio/end"
        }],
        debug: !1,
        init: function() {
            ig.ua.mobile ?
                (this.initSfx(), this.setupJukebox()) : (this.initSfx(), this.setupDesktopMusic());
            this.setupWindowHandler()
        },
        allVoSoundLoaded: function() {
            if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
                this.debug && console.log("Vo ready");
                for (index = 0; index < this.voSoundLoaded.length; index++) this.voSoundLoaded[index].on("end", function(b) {
                    b.isPlaying = !1;
                    this.soundBuffer.pop()
                }.bind(this, this.voSoundLoaded[index])), this.voSoundLoaded[index].on("play", function(b) {
                    b.isPlaying = !0
                }.bind(this, this.voSoundLoaded[index]));
                return !0
            }
            return !1
        },
        allSfxSoundLoaded: function() {
            return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
        },
        stopBackgroundMusic: function() {
            ig.ua.mobile ? this.pausePosition = this.jukebox.player.pause() : ig.music.pause();
            this.bgmPlaying = !1
        },
        playBackgroundMusic: function() {
            this.bgmPlaying || (this.bgmStarted = !0, ig.ua.mobile ? this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0) : ig.music.play(), this._unMuteBackgroundMusic(),
                this.bgmPlaying = !0)
        },
        playSound: function(b) {
            if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying) this.soundBuffer.push(b), b.play()
        },
        stopAllAndPlaySound: function(b) {
            this.stopAllSounds();
            this.playSound(b);
            ih5game.unmute;
        },
        stopAllSounds: function() {
            ih5game.mute();
            for (index = 0; index < this.soundBuffer.length; index++) this.soundBuffer[index].isPlaying = !1, this.soundBuffer.splice(0, 1)[0].stop()
        },
        addSound: function(b, c, d) {
            var f = c + this.formats.ogg;
            c += this.formats.mp3;
            this.SOUNDID[b] = b;
            this[b] = d ? new Howl({
                urls: [f, c],
                onload: d
            }) : new Howl({
                urls: [f,
                    c
                ]
            })
        },
        _muteSounds: function() {
            for (i = 0; i < ig.resources.length; i++) ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute();
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function() {
            Howler.unmute();
            ig.Sound.enabled = !0;
            this.debug && console.log("Sounds can play")
        },
        _muteBackgroundMusic: function() {
            ig.ua.mobile ? (this.stopBackgroundMusic(), this.jukebox.player.setVolume(0)) : ig.music.volume = 0;
            this.debug && console.log("BGM muted")
        },
        _unMuteBackgroundMusic: function() {
            this.bgmStarted && (ig.ua.mobile ?
                (this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.jukebox.player.setVolume(1)) : ig.music.volume = 1, this.debug && console.log("BGM can play"))
        },
        focusBlurMute: function() {
            this.forceMuted || this.mute();
          //  ih5game.mute();
        },
        focusBlurUnmute: function() {
            this.forceMuted || this.unmute();
           // ih5game.unmute();
        },
        setForceMuted: function(b) {
            this.forceMuted = b
        },
        mute: function() {
            this.muted || (this._muteSounds(), this._muteBackgroundMusic(), this.muted = !0);
           // ih5game.mute();
        },
        unmute: function() {
            this.muted &&
                (this._unMuteSounds(), this._unMuteBackgroundMusic(), this.muted = !1);
           // ih5game.unmute;
        },
        setupWindowHandler: function() {
            "true" === getQueryVariable("webview") ? ($(window).focus(function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })) : (window.onfocus = function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }, window.onblur = function() {
                ig.soundHandler &&
                    ig.soundHandler.focusBlurMute()
            })
        },
        initSfx: function() {
            for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.sfxSoundLoaded.push(this[b])
                }.bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b)
            }
        },
        initVoSfx: function() {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.voSoundLoaded.push(this[b])
                }.bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name,
                    this.voSoundsToLoad[index].path, b)
            }
        },
        setupDesktopMusic: function() {
            ig.music.add("media/audio/background.*", "background")
        },
        setupJukebox: function() {
            ig.ua.mobile && (this.jukebox = new ig.Jukebox, this.pausePosition = this.jukebox.player.settings.spritemap.music.start)
        },
        forceLoopBGM: function() {
            if (!this.forceMuted && this.bgmPlaying && this.jukebox && this.jukebox.player && this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop) {
                if (0 <= this.prevTime)
                    if (this.jukebox.player.getCurrentTime() ===
                        this.prevTime) {
                        if (this.silentCounter || (this.silentCounter = 0), this.silentCounter++, this.jukebox.player.getCurrentTime() >= this.jukebox.player.settings.spritemap.music.end || this.silentCounter > 0.0010 * ig.soundHandler.jukebox.player.settings.timeout * ig.system.fps) this.jukebox.player.pause(), this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.silentCounter = null
                    } else this.silentCounter = null;
                this.prevTime = this.jukebox.player.getCurrentTime()
            }
        }
    })
});

function getHiddenProp() {
    var b = ["webkit", "moz", "ms", "o"];
    if ("hidden" in document) return "hidden";
    for (var c = 0; c < b.length; c++)
        if (b[c] + "Hidden" in document) return b[c] + "Hidden";
    return null
}

function isHidden() {
    var b = getHiddenProp();
    return !b ? !1 : document[b]
}
var visProp = getHiddenProp();
if (visProp) {
    var evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
    document.addEventListener(evtname, visChange)
}
window.addEventListener("pagehide", function() {
    ig.soundHandler && ig.soundHandler.focusBlurMute()
}, !1);
window.addEventListener("pageshow", function() {
    ig.ua.mobile && ig.game && ig.game.resumeGame();
    ig.soundHandler && ig.soundHandler.focusBlurUnmute()
}, !1);

function visChange() {
    isHidden() ? ig.soundHandler && ig.soundHandler.focusBlurMute() : (ig.ua.mobile && ig.game && ig.game.resumeGame(), ig.soundHandler && ig.soundHandler.focusBlurUnmute())
}
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function() {
    ig.main = function(b, c, d, f, g, m, y) {
        ig.system = new ig.System(b, d, f, g, m || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        ig.soundHandler = new ig.SoundHandler;
        (new(y || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, f) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!f;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle),
                this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b,
            c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var f = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = f.vel.x;
            this.vel.y = f.vel.y;
            this.accel.x = f.accel.x;
            this.accel.y = f.accel.y;
            this.health = f.health;
            this._killed = f._killed;
            this.standing = f.standing;
            this.type = f.type;
            this.checkAgainst = f.checkAgainst;
            this.collides = f.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, f) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, f);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y *
                ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, f) {
            return c ? (b + c * ig.system.tick).limit(-f, f) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-f, f)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) >
                this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision =
        function(b, c) {
            var d = null;
            if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
            else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
            b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c,
                b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
        };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var f = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -f : f, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -f / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, f / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var f = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var g = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, g = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, g, d == b ? -f : f, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness &&
            b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, g = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, g, -f / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, f / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                f = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= f && f < this.height ? this.data[f][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, g) {
            this.parent(b, c);
            this.tiledef = g || ig.CollisionMap.defaultTileDef;
            for (var m in this.tiledef) m | 0 > this.lastSlope && (this.lastSlope = m | 0)
        },
        trace: function(b, c, g, m, y, u) {
            var x = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                t = Math.ceil(Math.max(Math.abs(g), Math.abs(m)) / this.tilesize);
            if (1 < t)
                for (var z = g / t, j = m / t, q = 0; q < t && (z || j) && !(this._traceStep(x,
                    b, c, z, j, y, u, g, m, q), b = x.pos.x, c = x.pos.y, x.collision.x && (g = z = 0), x.collision.y && (m = j = 0), x.collision.slope); q++);
            else this._traceStep(x, b, c, g, m, y, u, g, m, 0);
            return x
        },
        _traceStep: function(b, c, g, m, y, u, x, t, z, j) {
            b.pos.x += m;
            b.pos.y += y;
            var q = 0;
            if (m) {
                var s = 0 < m ? u : 0,
                    C = 0 > m ? this.tilesize : 0,
                    q = Math.max(Math.floor(g / this.tilesize), 0),
                    G = Math.min(Math.ceil((g + x) / this.tilesize), this.height);
                m = Math.floor((b.pos.x + s) / this.tilesize);
                var D = Math.floor((c + s) / this.tilesize);
                if (0 < j || m == D || 0 > D || D >= this.width) D = -1;
                if (0 <= m && m < this.width)
                    for (var E =
                        q; E < G && !(-1 != D && (q = this.data[E][D], 1 < q && q <= this.lastSlope && this._checkTileDef(b, q, c, g, t, z, u, x, D, E))); E++)
                        if (q = this.data[E][m], 1 == q || q > this.lastSlope || 1 < q && this._checkTileDef(b, q, c, g, t, z, u, x, m, E)) {
                            if (1 < q && q <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = q;
                            c = b.pos.x = m * this.tilesize - s + C;
                            t = 0;
                            break
                        }
            }
            if (y) {
                s = 0 < y ? x : 0;
                y = 0 > y ? this.tilesize : 0;
                q = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                C = Math.min(Math.ceil((b.pos.x + u) / this.tilesize), this.width);
                E = Math.floor((b.pos.y + s) / this.tilesize);
                G = Math.floor((g + s) / this.tilesize);
                if (0 < j || E == G || 0 > G || G >= this.height) G = -1;
                if (0 <= E && E < this.height)
                    for (m = q; m < C && !(-1 != G && (q = this.data[G][m], 1 < q && q <= this.lastSlope && this._checkTileDef(b, q, c, g, t, z, u, x, m, G))); m++)
                        if (q = this.data[E][m], 1 == q || q > this.lastSlope || 1 < q && this._checkTileDef(b, q, c, g, t, z, u, x, m, E)) {
                            if (1 < q && q <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = q;
                            b.pos.y = E * this.tilesize - s + y;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, g, m, y, u, x, t, z, j) {
            var q = this.tiledef[c];
            if (!q) return !1;
            c = (q[2] -
                q[0]) * this.tilesize;
            var s = (q[3] - q[1]) * this.tilesize,
                C = q[4];
            x = g + y + (0 > s ? x : 0) - (z + q[0]) * this.tilesize;
            t = m + u + (0 < c ? t : 0) - (j + q[1]) * this.tilesize;
            if (0 < c * t - s * x) {
                if (0 > y * -s + u * c) return C;
                z = Math.sqrt(c * c + s * s);
                j = s / z;
                z = -c / z;
                var G = x * j + t * z,
                    q = j * G,
                    G = z * G;
                if (q * q + G * G >= y * y + u * u) return C || 0.5 > c * (t - u) - s * (x - y);
                b.pos.x = g + y - q;
                b.pos.y = m + u - G;
                b.collision.slope = {
                    x: c,
                    y: s,
                    nx: j,
                    ny: z
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0,
            1, 1, 0, !0
        ],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0,
            0, b, !0
        ],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, g, m) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + g,
                    y: c + m
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b,
            c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                f = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var g = 0; g < f; g++) {
                this.preRenderedChunks[g] = [];
                for (var m = 0; m < d; m++) this.preRenderedChunks[g][m] = this.preRenderChunk(m, g, m == d - 1 ? b - m * this.chunkSize : this.chunkSize, g == f - 1 ?
                    c - g * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, f) {
            var g = d / this.tilesize / ig.system.scale + 1,
                m = f / this.tilesize / ig.system.scale + 1,
                y = b * this.chunkSize / ig.system.scale % this.tilesize,
                u = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var x = ig.$new("canvas");
            x.width = d;
            x.height = f;
            x.retinaResolutionEnabled = !1;
            f = x.getContext("2d");
            ig.System.scaleMode(x, f);
            d = ig.system.context;
            ig.system.context = f;
            for (f = 0; f < g; f++)
                for (var t = 0; t < m; t++)
                    if (f + b < this.width && t + c < this.height) {
                        var z = this.data[t + c][f + b];
                        z && this.tiles.drawTile(f * this.tilesize - y, t * this.tilesize - u, z - 1, this.tilesize)
                    }
            ig.system.context = d;
            return x
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d =
                this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                f = Math.max(Math.floor(c / this.chunkSize), 0),
                g = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                m = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                y = this.preRenderedChunks[0].length,
                u = this.preRenderedChunks.length;
            this.repeat || (g = Math.min(g, y), m = Math.min(m, u));
            for (var x = 0; f < m; f++) {
                for (var t = 0, z = d; z < g; z++) {
                    var j = this.preRenderedChunks[f % u][z % y],
                        q = -b + z * this.chunkSize - t,
                        s = -c + f * this.chunkSize - x;
                    ig.system.context.drawImage(j, q, s);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(q, s, this.chunkSize, this.chunkSize));
                    this.repeat && j.width < this.chunkSize && q + j.width < ig.system.realWidth && (t += this.chunkSize - j.width, g++)
                }
                this.repeat && j.height < this.chunkSize && s + j.height < ig.system.realHeight && (x += this.chunkSize - j.height, m++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(),
                f = (this.scroll.y / this.tilesize).toInt(), g = this.scroll.x % this.tilesize, m = this.scroll.y % this.tilesize, y = -g - this.tilesize, g = ig.system.width + this.tilesize - g, u = ig.system.height + this.tilesize - m, x = -1, m = -m - this.tilesize; m < u; x++, m += this.tilesize) {
                var t = x + f;
                if (t >= this.height || 0 > t) {
                    if (!this.repeat) continue;
                    t = (t % this.height + this.height) % this.height
                }
                for (var z = -1, j = y; j < g; z++, j += this.tilesize) {
                    b = z + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[t][b])(c = this.anims[b -
                        1]) ? c.draw(j, m) : this.tiles.drawTile(j, m, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var f = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    f.anims = this.backgroundAnims[d.tilesetName] || {};
                    f.repeat = d.repeat;
                    f.distance = d.distance;
                    f.foreground = !!d.foreground;
                    f.preRender = !!d.preRender;
                    f.name = d.name;
                    this.backgroundMaps.push(f)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b =
                "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var f = this.entities[d];
                f instanceof b && !f._killed && c.push(f)
            }
            return c
        },
        spawnEntity: function(b, c, d, f) {
            var g = "string" === typeof b ? ig.global[b] : b;
            if (!g) throw "Can't spawn entity of type " + b;
            b = new g(c, d, f || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name &&
                delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities ||
                this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                    this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var f = {}, g = Math.floor(d.pos.y / this.cellSize), m = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, y = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, u = Math.floor(d.pos.x / this.cellSize); u < m; u++)
                        for (var x = g; x < y; x++)
                            if (b[u])
                                if (b[u][x]) {
                                    for (var t = b[u][x], z = 0; z < t.length; z++) d.touches(t[z]) && !f[t[z].id] && (f[t[z].id] = !0, ig.Entity.checkPair(d, t[z]));
                                    t.push(d)
                                } else b[u][x] = [d];
                else b[u] = {}, b[u][x] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("impact.debug.menu").requires("dom.ready", "impact.system").defines(function() {
    ig.System.inject({
        run: function() {
            ig.debug.beforeRun();
            this.parent();
            ig.debug.afterRun()
        },
        setGameNow: function(b) {
            this.parent(b);
            ig.debug.ready()
        }
    });
    ig.Debug = ig.Class.extend({
        options: {},
        panels: {},
        numbers: {},
        container: null,
        panelMenu: null,
        activePanel: null,
        debugTime: 0,
        debugTickAvg: 0.016,
        debugRealTime: Date.now(),
        init: function() {
            var b = ig.$new("link");
            b.rel = "stylesheet";
            b.type = "text/css";
            b.href = ig.prefix + "lib/impact/debug/debug.css";
            ig.$("body")[0].appendChild(b);
            this.container = ig.$new("div");
            this.container.className = "ig_debug";
            ig.$("body")[0].appendChild(this.container);
            this.panelMenu = ig.$new("div");
            this.panelMenu.innerHTML = '<div class="ig_debug_head">Impact.Debug:</div>';
            this.panelMenu.className = "ig_debug_panel_menu";
            this.container.appendChild(this.panelMenu);
            this.numberContainer = ig.$new("div");
            this.numberContainer.className = "ig_debug_stats";
            this.panelMenu.appendChild(this.numberContainer);
            window.console && window.console.log &&
                window.console.assert && (ig.log = console.log.bind ? console.log.bind(console) : console.log, ig.assert = console.assert.bind ? console.assert.bind(console) : console.assert);
            ig.show = this.showNumber.bind(this)
        },
        addNumber: function(b) {
            var c = ig.$new("span");
            this.numberContainer.appendChild(c);
            this.numberContainer.appendChild(document.createTextNode(b));
            this.numbers[b] = c
        },
        showNumber: function(b, c, d) {
            this.numbers[b] || this.addNumber(b, d);
            this.numbers[b].textContent = c
        },
        addPanel: function(b) {
            var c = new b.type(b.name, b.label);
            if (b.options)
                for (var d = 0; d < b.options.length; d++) {
                    var f = b.options[d];
                    c.addOption(new ig.DebugOption(f.name, f.object, f.property))
                }
            this.panels[c.name] = c;
            c.container.style.display = "none";
            this.container.appendChild(c.container);
            b = ig.$new("div");
            b.className = "ig_debug_menu_item";
            b.textContent = c.label;
            b.addEventListener("click", function() {
                this.togglePanel(c)
            }.bind(this), !1);
            c.menuItem = b;
            f = !1;
            for (d = 1; d < this.panelMenu.childNodes.length; d++) {
                var g = this.panelMenu.childNodes[d];
                if (g.textContent > c.label) {
                    this.panelMenu.insertBefore(b,
                        g);
                    f = !0;
                    break
                }
            }
            f || this.panelMenu.appendChild(b)
        },
        showPanel: function(b) {
            this.togglePanel(this.panels[b])
        },
        togglePanel: function(b) {
            b != this.activePanel && this.activePanel && (this.activePanel.toggle(!1), this.activePanel.menuItem.className = "ig_debug_menu_item", this.activePanel = null);
            var c = "block" != b.container.style.display;
            b.toggle(c);
            b.menuItem.className = "ig_debug_menu_item" + (c ? " active" : "");
            c && (this.activePanel = b)
        },
        ready: function() {
            for (var b in this.panels) this.panels[b].ready()
        },
        beforeRun: function() {
            var b =
                Date.now();
            this.debugTickAvg = 0.8 * this.debugTickAvg + 0.2 * (b - this.debugRealTime);
            this.debugRealTime = b;
            this.activePanel && this.activePanel.beforeRun()
        },
        afterRun: function() {
            var b = Date.now() - this.debugRealTime;
            this.debugTime = 0.8 * this.debugTime + 0.2 * b;
            this.activePanel && this.activePanel.afterRun();
            this.showNumber("ms", this.debugTime.toFixed(2));
            this.showNumber("fps", Math.round(1E3 / this.debugTickAvg));
            this.showNumber("draws", ig.Image.drawCount);
            ig.game && ig.game.entities && this.showNumber("entities", ig.game.entities.length);
            ig.Image.drawCount = 0
        }
    });
    ig.DebugPanel = ig.Class.extend({
        active: !1,
        container: null,
        options: [],
        panels: [],
        label: "",
        name: "",
        init: function(b, c) {
            this.name = b;
            this.label = c;
            this.container = ig.$new("div");
            this.container.className = "ig_debug_panel " + this.name
        },
        toggle: function(b) {
            this.active = b;
            this.container.style.display = b ? "block" : "none"
        },
        addPanel: function(b) {
            this.panels.push(b);
            this.container.appendChild(b.container)
        },
        addOption: function(b) {
            this.options.push(b);
            this.container.appendChild(b.container)
        },
        ready: function() {},
        beforeRun: function() {},
        afterRun: function() {}
    });
    ig.DebugOption = ig.Class.extend({
        name: "",
        labelName: "",
        className: "ig_debug_option",
        label: null,
        mark: null,
        container: null,
        active: !1,
        colors: {
            enabled: "#fff",
            disabled: "#444"
        },
        init: function(b, c, d) {
            this.name = b;
            this.object = c;
            this.property = d;
            this.active = this.object[this.property];
            this.container = ig.$new("div");
            this.container.className = "ig_debug_option";
            this.label = ig.$new("span");
            this.label.className = "ig_debug_label";
            this.label.textContent = this.name;
            this.mark = ig.$new("span");
            this.mark.className = "ig_debug_label_mark";
            this.container.appendChild(this.mark);
            this.container.appendChild(this.label);
            this.container.addEventListener("click", this.click.bind(this), !1);
            this.setLabel()
        },
        setLabel: function() {
            this.mark.style.backgroundColor = this.active ? this.colors.enabled : this.colors.disabled
        },
        click: function(b) {
            this.active = !this.active;
            this.object[this.property] = this.active;
            this.setLabel();
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    });
    ig.debug = new ig.Debug
});
ig.baked = !0;
ig.module("impact.debug.entities-panel").requires("impact.debug.menu", "impact.entity").defines(function() {
    ig.Entity.inject({
        colors: {
            names: "#fff",
            velocities: "#0f0",
            boxes: "#f00"
        },
        draw: function() {
            this.parent();
            ig.Entity._debugShowBoxes && (ig.system.context.strokeStyle = this.colors.boxes, ig.system.context.lineWidth = 1, ig.system.context.strokeRect(ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x) - 0.5, ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y) - 0.5, this.size.x * ig.system.scale, this.size.y *
                ig.system.scale));
            if (ig.Entity._debugShowVelocities) {
                var b = this.pos.x + this.size.x / 2,
                    c = this.pos.y + this.size.y / 2;
                this._debugDrawLine(this.colors.velocities, b, c, b + this.vel.x, c + this.vel.y)
            }
            if (ig.Entity._debugShowNames && (this.name && (ig.system.context.fillStyle = this.colors.names, ig.system.context.fillText(this.name, ig.system.getDrawPos(this.pos.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y - ig.game.screen.y))), "object" == typeof this.target))
                for (var d in this.target)(b = ig.game.getEntityByName(this.target[d])) &&
                    this._debugDrawLine(this.colors.names, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, b.pos.x + b.size.x / 2, b.pos.y + b.size.y / 2)
        },
        _debugDrawLine: function(b, c, d, f, g) {
            ig.system.context.strokeStyle = b;
            ig.system.context.lineWidth = 1;
            ig.system.context.beginPath();
            ig.system.context.moveTo(ig.system.getDrawPos(c - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            ig.system.context.lineTo(ig.system.getDrawPos(f - ig.game.screen.x), ig.system.getDrawPos(g - ig.game.screen.y));
            ig.system.context.stroke();
            ig.system.context.closePath()
        }
    });
    ig.Entity._debugEnableChecks = !0;
    ig.Entity._debugShowBoxes = !1;
    ig.Entity._debugShowVelocities = !1;
    ig.Entity._debugShowNames = !1;
    ig.Entity.oldCheckPair = ig.Entity.checkPair;
    ig.Entity.checkPair = function(b, c) {
        ig.Entity._debugEnableChecks && ig.Entity.oldCheckPair(b, c)
    };
    ig.debug.addPanel({
        type: ig.DebugPanel,
        name: "entities",
        label: "Entities",
        options: [{
            name: "Checks & Collisions",
            object: ig.Entity,
            property: "_debugEnableChecks"
        }, {
            name: "Show Collision Boxes",
            object: ig.Entity,
            property: "_debugShowBoxes"
        }, {
            name: "Show Velocities",
            object: ig.Entity,
            property: "_debugShowVelocities"
        }, {
            name: "Show Names & Targets",
            object: ig.Entity,
            property: "_debugShowNames"
        }]
    })
});
ig.baked = !0;
ig.module("impact.debug.maps-panel").requires("impact.debug.menu", "impact.game", "impact.background-map").defines(function() {
    ig.Game.inject({
        loadLevel: function(b) {
            this.parent(b);
            ig.debug.panels.maps.load(this)
        }
    });
    ig.DebugMapsPanel = ig.DebugPanel.extend({
        maps: [],
        mapScreens: [],
        init: function(b, c) {
            this.parent(b, c);
            this.load()
        },
        load: function(b) {
            this.options = [];
            this.panels = [];
            if (!b || !b.backgroundMaps.length) this.container.innerHTML = "<em>No Maps Loaded</em>";
            else {
                this.maps = b.backgroundMaps;
                this.mapScreens = [];
                this.container.innerHTML = "";
                for (b = 0; b < this.maps.length; b++) {
                    var c = this.maps[b],
                        d = new ig.DebugPanel(b, "Layer " + b),
                        f = new ig.$new("strong");
                    f.textContent = b + ": " + c.tiles.path;
                    d.container.appendChild(f);
                    d.addOption(new ig.DebugOption("Enabled", c, "enabled"));
                    d.addOption(new ig.DebugOption("Pre Rendered", c, "preRender"));
                    d.addOption(new ig.DebugOption("Show Chunks", c, "debugChunks"));
                    this.generateMiniMap(d, c, b);
                    this.addPanel(d)
                }
            }
        },
        generateMiniMap: function(b, c, d) {
            var f = ig.system.scale,
                g = ig.$new("canvas"),
                m = g.getContext("2d"),
                y = c.tiles.width * f,
                u = c.tiles.height * f,
                x = y / c.tilesize,
                t = u / c.tilesize;
            g.width = x;
            g.height = t;
            m.drawImage(c.tiles.data, 0, 0, y, u, 0, 0, x, t);
            m = ig.$new("canvas");
            m.width = c.width * f;
            m.height = c.height * f;
            t = m.getContext("2d");
            ig.game.clearColor && (t.fillStyle = ig.game.clearColor, t.fillRect(0, 0, y, u));
            for (u = y = 0; u < c.width; u++)
                for (var z = 0; z < c.height; z++)(y = c.data[z][u]) && t.drawImage(g, Math.floor((y - 1) * f % x), Math.floor((y - 1) * f / x) * f, f, f, u * f, z * f, f, f);
            g = ig.$new("div");
            g.className = "ig_debug_map_container";
            g.style.width = c.width * f + "px";
            g.style.height = c.height * f + "px";
            x = ig.$new("div");
            x.className = "ig_debug_map_screen";
            x.style.width = ig.system.width / c.tilesize * f - 2 + "px";
            x.style.height = ig.system.height / c.tilesize * f - 2 + "px";
            this.mapScreens[d] = x;
            g.appendChild(m);
            g.appendChild(x);
            b.container.appendChild(g)
        },
        afterRun: function() {
            for (var b = ig.system.scale, c = 0; c < this.maps.length; c++) {
                var d = this.maps[c],
                    f = this.mapScreens[c];
                if (d && f) {
                    var g = d.scroll.x / d.tilesize,
                        m = d.scroll.y / d.tilesize;
                    d.repeat && (g %= d.width, m %= d.height);
                    f.style.left = g * b + "px";
                    f.style.top = m * b + "px"
                }
            }
        }
    });
    ig.debug.addPanel({
        type: ig.DebugMapsPanel,
        name: "maps",
        label: "Background Maps"
    })
});
ig.baked = !0;
ig.module("impact.debug.graph-panel").requires("impact.debug.menu", "impact.system", "impact.game", "impact.image").defines(function() {
    ig.Game.inject({
        draw: function() {
            ig.graph.beginClock("draw");
            this.parent();
            ig.graph.endClock("draw")
        },
        update: function() {
            ig.graph.beginClock("update");
            this.parent();
            ig.graph.endClock("update")
        },
        checkEntities: function() {
            ig.graph.beginClock("checks");
            this.parent();
            ig.graph.endClock("checks")
        }
    });
    ig.DebugGraphPanel = ig.DebugPanel.extend({
        clocks: {},
        marks: [],
        textY: 0,
        height: 128,
        ms: 64,
        timeBeforeRun: 0,
        init: function(b, c) {
            this.parent(b, c);
            this.mark16ms = (this.height - 16 * (this.height / this.ms)).round();
            this.mark33ms = (this.height - 33 * (this.height / this.ms)).round();
            this.msHeight = this.height / this.ms;
            this.graph = ig.$new("canvas");
            this.graph.width = window.innerWidth;
            this.graph.height = this.height;
            this.container.appendChild(this.graph);
            this.ctx = this.graph.getContext("2d");
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(0, this.mark16ms, this.graph.width, 1);
            this.ctx.fillRect(0, this.mark33ms, this.graph.width,
                1);
            this.addGraphMark("16ms", this.mark16ms);
            this.addGraphMark("33ms", this.mark33ms);
            this.addClock("draw", "Draw", "#13baff");
            this.addClock("update", "Entity Update", "#bb0fff");
            this.addClock("checks", "Entity Checks & Collisions", "#a2e908");
            this.addClock("lag", "System Lag", "#f26900");
            ig.mark = this.mark.bind(this);
            ig.graph = this
        },
        addGraphMark: function(b, c) {
            var d = ig.$new("span");
            d.className = "ig_debug_graph_mark";
            d.textContent = b;
            d.style.top = c.round() + "px";
            this.container.appendChild(d)
        },
        addClock: function(b, c,
            d) {
            var f = ig.$new("span");
            f.className = "ig_debug_legend_color";
            f.style.backgroundColor = d;
            var g = ig.$new("span");
            g.className = "ig_debug_legend_number";
            g.appendChild(document.createTextNode("0"));
            var m = ig.$new("span");
            m.className = "ig_debug_legend";
            m.appendChild(f);
            m.appendChild(document.createTextNode(c + " ("));
            m.appendChild(g);
            m.appendChild(document.createTextNode("ms)"));
            this.container.appendChild(m);
            this.clocks[b] = {
                description: c,
                color: d,
                current: 0,
                start: Date.now(),
                avg: 0,
                html: g
            }
        },
        beginClock: function(b,
            c) {
            this.clocks[b].start = Date.now() + (c || 0)
        },
        endClock: function(b) {
            b = this.clocks[b];
            b.current = Math.round(Date.now() - b.start);
            b.avg = 0.8 * b.avg + 0.2 * b.current
        },
        mark: function(b, c) {
            this.active && this.marks.push({
                msg: b,
                color: c || "#fff"
            })
        },
        beforeRun: function() {
            this.endClock("lag");
            this.timeBeforeRun = Date.now()
        },
        afterRun: function() {
            var b = Date.now() - this.timeBeforeRun;
            this.beginClock("lag", Math.max(1E3 / ig.system.fps - b, 0));
            var b = this.graph.width - 1,
                c = this.height;
            this.ctx.drawImage(this.graph, -1, 0);
            this.ctx.fillStyle =
                "#000";
            this.ctx.fillRect(b, 0, 1, this.height);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark16ms, 1, 1);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark33ms, 1, 1);
            for (var d in this.clocks) {
                var f = this.clocks[d];
                f.html.textContent = f.avg.toFixed(2);
                if (f.color && 0 < f.current) {
                    this.ctx.fillStyle = f.color;
                    var g = f.current * this.msHeight,
                        c = c - g;
                    this.ctx.fillRect(b, c, 1, g);
                    f.current = 0
                }
            }
            this.ctx.textAlign = "right";
            this.ctx.textBaseline = "top";
            this.ctx.globalAlpha = 0.5;
            for (d = 0; d < this.marks.length; d++) c = this.marks[d],
                this.ctx.fillStyle = c.color, this.ctx.fillRect(b, 0, 1, this.height), c.msg && (this.ctx.fillText(c.msg, b - 1, this.textY), this.textY = (this.textY + 8) % 32);
            this.ctx.globalAlpha = 1;
            this.marks = []
        }
    });
    ig.debug.addPanel({
        type: ig.DebugGraphPanel,
        name: "graph",
        label: "Performance"
    })
});
ig.baked = !0;
ig.module("impact.debug.debug").requires("impact.debug.entities-panel", "impact.debug.maps-panel", "impact.debug.graph-panel").defines(function() {});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        bg: new ig.Image("media/graphics/sprites/home-bg.png"),
        logoIm: new ig.Image("media/graphics/sprites/logo.png"),
        baseIm: new ig.Image("media/graphics/sprites/bar.png"),
        barIm: new ig.Image("media/graphics/sprites/loadbar.png"),
        wordIm: new ig.Image("media/graphics/sprites/loading.png"),
        init: function(b, c) {
            this.parent(b, c);
            ig.ua.mobile 
            //&& _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
        },
        end: function() {
            this.parent();
            var b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", b)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame =
                0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        drawer: function(b, c, d, f, g, m, y, u, x, t, z, j, q, s) {
            b = "bg" == b ? ig.system.bgcontext : "game" == b ? ig.system.context : b;
            null == q && (q = 0);
            null == s && (s = 0);
            null == u && (u = 1);
            null == x && (x = 1);
            null == z && (z = 1);
            var C = c.width / d * (g % d);
            g = c.height / f * Math.floor(g / d);
            var G = c.width / d,
                D = c.height / f;
            d = c.width / d * u;
            f = c.height / f * x;
            null == j || 0 == j ? 0 < G && 0 < D && (b.globalAlpha = z, b.drawImage(c.data, C, g, G, D, t ? m - d / 2 : m + q, t ? y - f / 2 : y + s, d, f), b.globalAlpha = 1) : (q = t ? -d / 2 : q || 0, s = t ? -f / 2 : s || 0, 0 < G && 0 < D &&
                (b.save(), b.translate(m, y), b.rotate(2 * Math.PI / 360 * j), b.globalAlpha = z, b.drawImage(c.data, C, g, G, D, q, s, d, f), b.restore()))
        },
        draw: function() {
            this.tex = Math.floor(100 * (this.status / 1));
            this.bg.draw(0, 0);
            this.drawer("game", this.logoIm, 1, 1, 0, 0, 0);
            this.drawer("game", this.baseIm, 1, 1, 0, 240, 580, 1, 1, !0);
            ig.system.context.drawImage(this.barIm.data, 0, 0, this.barIm.width * this.status, this.barIm.height, 30, 580 - this.barIm.height / 2, this.barIm.width * this.status, this.barIm.height);
            this.drawer("game", this.wordIm, 1, 1, 0, 240,
                580, 1, 1, !0)
        },
        draw2: function() {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            var b = ig.system.scale,
                c, d, f, g;
            ig.ua.mobile ? (c = 180, d = 24, f = 0.5 * ig.system.width - c / 2, g = 320, this.splashMobile.draw(0, 0)) : (c = 250, d = 30, f = 0.5 * ig.system.width - c / 2, g = 280, this.splashDesktop.draw(0, 0));
            ig.system.context.fillStyle = "#fff";
            ig.system.context.fillRect(f * b, g * b, c * b, d * b);
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(f *
                b + b, g * b + b, c * b - b - b, d * b - b - b);
            ig.system.context.fillStyle = "#A00A2D";
            ig.system.context.fillRect(f * b, g * b, c * b * this._drawStatus, d * b);
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.font = "16px Arial";
            c = _STRINGS.Splash.Loading;
            d = ig.system.width / 2 - ig.system.context.measureText(c).width / 2;
            ig.system.context.fillText(c, d, g * b + 18);
            ig.system.context.font = "bold 14px Arial";
            ig.system.context.fillStyle = "#000000";
            c = _STRINGS.Splash.LogoLine1;
            ig.ua.mobile ? (d = ig.system.width / 2 - ig.system.context.measureText(c).width /
                2, b = 380) : (d = ig.system.width / 2 - ig.system.context.measureText(c).width / 2, b = 325);
            ig.system.context.font = "bold 12px Arial";
            ig.system.context.fillText(c, d, b);
            c = _STRINGS.Splash.LogoLine2;
            ig.ua.mobile ? (d = ig.system.width / 2 - ig.system.context.measureText(c).width / 2, b = 395) : (d = ig.system.width / 2 - ig.system.context.measureText(c).width / 2, b = 340);
            ig.system.context.font = "bold 12px Arial";
            ig.system.context.fillText(c, d, b)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens =
                b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, f) {
        var g = {},
            m = {},
            y = {},
            u = 0,
            x = !1,
            t = !1,
            z = !1;
        this.duration = d;
        this.paused =
            this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, f);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            z = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, f) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (f[b] = d[b]);
            else
                for (subprop in d[b]) f[b] || (f[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
                    c[b], d[b], f[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            u = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            t = !0;
            x = new ig.Timer;
            for (var d in c) this.initEnd(d, c, m);
            for (d in m) this.initStart(d, m, b, g), this.initDelta(d, y, b, m)
        };
        this.initDelta = function(b, c, d, f) {
            if ("object" !== typeof f[b]) c[b] = f[b] - d[b];
            else
                for (subprop in f[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], f[b])
        };
        this.propUpdate = function(b, c, d, f, g) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
                d[b] + f[b] * g : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], f[b], g)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!t) return !1;
            if (this.delay) {
                if (x.delta() < this.delay) return;
                this.delay = 0;
                x.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (x.delta() + u) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in y) this.propUpdate(property, b, g, y, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    z && z.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in g) this.propSet(property, g, b);
                    u = 0;
                    x.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, m);
                    ig.merge(d, g);
                    ig.merge(g, c);
                    ig.merge(m, d);
                    for (property in m) this.initDelta(property, y, b, m);
                    u = 0;
                    x.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            u += x.delta()
        };
        this.resume = function() {
            this.paused = !1;
            x.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, u += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut =
        function(b) {
            return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
        };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn =
        function(b) {
            return b * b * b * b * b
        };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2,
            10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn =
        function(b) {
            var c, d = 0.1,
                f = 0.4;
            if (0 == b) return 0;
            if (1 == b) return 1;
            f || (f = 0.3);
            !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
            return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f))
        };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn =
        function(b) {
            return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
        };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function() {
    ig.Jukebox = ig.Class.extend({
        init: function() {
            this.player = new jukebox.Player({
                resources: ["media/audio/background.mp3", "media/audio/background.ogg"],
                autoplay: !1,
                spritemap: {
                    music: {
                        start: 0,
                        end: 6.79,
                        loop: !0
                    }
                },
                timeout: 1E3
            })
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" ===
                typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length -
                1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image("branding/splash1.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                    y = window.innerWidth /
                    mobileWidth;
                $("#" + g.id).css("left", this.pos.x * y);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * y);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = w / 2 - destW / 2, y = h / 2 - destH / 2, console.log(m, y), $("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", y + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle =
                "#000";
            ig.system.context.font = "12px Arial";
            320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (f) {
                    console.log(f)
                }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 32,
            y: 32
        },
        zIndex: 10001,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, d && d.centralize && (this.pos.x = ig.system.width /
                2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            d ? (console.log("branding settings found ... using that div layer name"), b = d.div_layer_name) : b = "branding-logo";
            _SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"), this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow));
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                    y = window.innerWidth /
                    mobileWidth;
                $("#" + g.id).css("left", this.pos.x * y);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * y);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = w / 2 - destW / 2, y = h / 2 - destH / 2, console.log(m, y), $("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", y + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.plain").requires("impact.entity").defines(function() {
    EntityPlain = ig.Entity.extend({
        redraw: !1,
        clearColor: null,
        tweening: !1,
        which: 0,
        base: {
            x: 240,
            y: 0,
            sc: 1,
            oriSc: 1,
            scX: 1,
            scY: 1,
            alp: 1,
            rot: 0,
            textSize: 26,
            tweening: !1,
            frameCount: 0,
            frameTime: 1,
            frame: 0,
            frameX: 1,
            frameY: 1,
            frames: [0],
            tFrame: 1,
            loop: !1,
            ended: !1,
            cent: !0
        },
        stay: [],
        size: {
            x: 50,
            y: 50
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.ctx = ig.system.context, this.bgCtx = ig.system.bgcontext)
        },
        update: function() {
            this.parent()
        },
        soundLooper: function(b) {
            null == this[this.sLoop[b].id + "sTimer"] && (this[this.sLoop[b].id + "sTimer"] = new ig.Timer, this[this.sLoop[b].id + "sTime"] = this.sLoop[b].duration, this.sounder(b));
            this[this.sLoop[b].id + "sTimer"].delta() > this[this.sLoop[b].id + "sTime"] && (this[b + "sTimer"].reset(), this.sounder(b))
        },
        soundLoopReset: function(b) {
            this[b + "sTimer"].reset()
        },
        sounder: function(b) {
            try {
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID[b]);
            } catch (c) {
                console.log(c)
            }
        },
        runFrame: function(b) {
            !0 != this[b].ended && (!1 == this[b].loop &&
                this[b].frame == this[b].frames.length - 1 ? (this[b].ended = !0, this.done(b)) : 1 < this[b].frames.length && this[b].frameTimer.delta() > this[b].frameTime && (this[b].frameTimer.reset(), this[b].frame = (this[b].frame + 1) % this[b].frames.length))
        },
        tweener: function(b, c, d, f, g) {
            var m = {};
            m[b] = c;
            null == g && (g = 0);
            null == f && (f = "none");
            this.tween(m, d, {
                delay: g,
                targ: b,
                seq: f,
                onComplete: function() {
                    null != f && this.tweenF(f, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        sizer: function(b, c, d, f, g, m, y, u) {
            this.size.x = b.width /
                c * this.base.oriSc + (y || 0);
            this.size.y = b.height / d * this.base.oriSc + (u || 0);
            !0 == m ? (this.pos.x = f - this.size.x / 2, this.pos.y = g - this.size.y / 2) : (this.pos.x = f, this.pos.y = g)
        },
        pauseT: function() {
            this.pauseTweens()
        },
        unpauseT: function() {
            this.resumeTweens()
        },
        unpause: function() {
            for (var b = 0; b < this.main.timers.length; b++) this.main.timers[b].unpause();
            this.unpauseT()
        },
        pause: function() {
            for (var b = 0; b < this.main.timers.length; b++) this.main.timers[b].pause();
            this.pauseT()
        },
        ready: function() {
            this.parent();
            this.main = ig.game.getEntitiesByType(EntityPlainGame)[0];
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.gui = ig.game.getEntitiesByType(EntityPlainGui)[0];
            this.sky = ig.game.getEntitiesByType(EntityPlainSky)[0];
            this.car = ig.game.getEntitiesByType(EntityPlainCar)[0];
            this.road = ig.game.getEntitiesByType(EntityPlainRoad)[0];
            this.word = ig.game.getEntitiesByType(EntityPlainWord)[0]
        },
        tinyTween: function(b, c, d) {
            if (b > c) return b -= d, b < c && (b = c), b;
            if (b < c) return b += d, b > c && (b = c), b;
            if (b == c) return b
        },
        clearBg: function() {
            ig.system.bgcontext.clearRect(0, 0, ig.system.width,
                ig.system.height);
            ig.game.redrawEntities()
        },
        timitizer: function(b) {
            var c, d;
            c = Math.floor(b);

            b = String(Math.floor(100 * b) % 100);
            d = String(c % 60);
            c = String(Math.floor(c / 60));
            d = 0 == d.length ? "00" : 1 == d.length ? "0" + d : Number(d) % 60;
            0 == c.length ? c = "00" : 1 == c.length && (c = "0" + c);
            0 == b.length ? b = "00" : 1 == b.length && (b = "0" + b);
            ih5game.stop({"t":b});
            return c + ":" + d + "." + b
        },
        drawer: function(b, c, d, f, g, m, y, u, x, t, z, j, q, s) {
            b = "bg" == b ? ig.system.bgcontext : "game" == b ? ig.system.context : b;
            null == q && (q = 0);
            null == s && (s = 0);
            null == u && (u = 1);
            null == x && (x = 1);
            null == z && (z = 1);
            var C =
                c.width / d * (g % d);
            g = c.height / f * Math.floor(g / d);
            var G = c.width / d,
                D = c.height / f;
            d = c.width / d * u;
            f = c.height / f * x;
            null == j || 0 == j ? 0 < G && 0 < D && (b.globalAlpha = z, b.drawImage(c.data, C, g, G, D, t ? m - d / 2 : m + q, t ? y - f / 2 : y + s, d, f), b.globalAlpha = 1) : (q = t ? -d / 2 : q || 0, s = t ? -f / 2 : s || 0, 0 < G && 0 < D && (b.save(), b.translate(m, y), b.rotate(2 * Math.PI / 360 * j), b.globalAlpha = z, b.drawImage(c.data, C, g, G, D, q, s, d, f), b.restore()))
        },
        drawerOld: function(b, c, d, f, g, m, y, u, x, t, z) {
            var j = ig.system.context;
            t = t || 0;
            z = z || 0;
            null == m && (m = 1);
            null == y && (y = 1);
            null == u && (u = 1);
            if (null != x) {
                d *= b.width / c;
                var q = b.width / c,
                    s = b.height;
                c = b.width / c * m;
                var C = b.height * y;
                j.save();
                j.translate(f, g);
                null != x && j.rotate(2 * Math.PI / 360 * x);
                j.scale(m, y);
                j.globalAlpha = u;
                0 < q && 0 < s && (0 < c && 0 < C) && j.drawImage(b.data, d, 0, q, s, t, z, c, C);
                j.restore()
            }
        },
        textSet: function(b, c, d) {
            b = "bg" == b ? ig.system.bgcontext : "game" == b ? ig.system.context : b;
            b.font = c + "px tex";
            b.fillStyle = d
        },
        textDraw: function(b, c, d, f, g) {
            b = "bg" == b ? ig.system.bgcontext : "game" == b ? ig.system.context : b;
            b.save();
            var m = b.measureText("M").width;
            b.translate(f -
                b.measureText(d).width * c / 2, g - m * c / 2);
            b.scale(c, c);
            b.fillStyle = "white";
            b.fillText(d, 0, 0);
            b.restore()
        },
        shuffleArray: function(b) {
            for (var c = b.length, d, f; 0 < c;) f = Math.floor(Math.random() * c), c--, d = b[c], b[c] = b[f], b[f] = d;
            return b
        },
        getScore: function(b) {
            if (!this.checkNull(ig.game.storage) && this.supports_local_storage()) switch (b) {
                case "score":
                    ig.game.storage.isSet(ig.game.scoreKey + ig.game.lvl) && void 0 != ig.game.storage.get(ig.game.scoreKey + ig.game.lvl) && (ig.game.rank = ig.game.storage.get(ig.game.scoreKey + ig.game.lvl));
                    break;
                case "tut":
                    return ig.game.storage.isSet(ig.game.tutKey) && void 0 != ig.game.storage.get(ig.game.tutKey) ? ig.game.storage.get(ig.game.tutKey) : !1
            } else return !1
        },
        setScore: function(b, c) {
            if (!this.checkNull(ig.game.storage) && this.supports_local_storage()) switch (b) {
                case "score":
                    if (ig.game.storage.isSet(ig.game.scoreKey + ig.game.lvl) && void 0 != ig.game.storage.get(ig.game.scoreKey + ig.game.lvl)) {
                        for (var d = ig.game.storage.get(ig.game.scoreKey + ig.game.lvl), f = 0, g = 0; g < d.length; g++) void 0 != d[g] && d[g].score > c && f++;
                        if (0 < f || 4 > d.length) d.push({
                            score: c
                        }), d.sort(function(b, c) {
                            return b.score < c.score ? -1 : b.score > c.score ? 1 : 0
                        }), 3 < d.length && d.splice(3, 1), ig.game.storage.set(ig.game.scoreKey + ig.game.lvl, d)
                    } else d = [], d.push({
                        score: c
                    }), ig.game.storage.set(ig.game.scoreKey + ig.game.lvl, d);
                    break;
                case "tutOn":
                    ig.game.storage.isSet(ig.game.tutKey) && ig.game.storage.get(ig.game.tutKey);
                    ig.game.storage.set(ig.game.tutKey, !0);
                    break;
                case "tutOff":
                    ig.game.storage.isSet(ig.game.tutKey) && void 0 != ig.game.storage.get(ig.game.tutKey) ? ig.game.storage.set(ig.game.tutKey, !1) : ig.game.storage.set(ig.game.tutKey, !0)
            }
        },
        checkNull: function(b) {
            return null == b || void 0 == b ? !0 : !1
        },
        supports_local_storage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return !1
            }
        },
        clicked: function() {
            this.click = !0;
            this.release = !1
        },
        released: function() {
            this.click = !1;
            this.release = !0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity", "game.entities.plain").defines(function() {
    EntityButtonMoreGames = EntityPlain.extend({
        gravityFactor: 0,
        baseIm: new ig.Image("media/graphics/sprites/more-games.png"),
        size: {
            x: 230,
            y: 43
        },
        zIndex: 750,
        init: function(b, c, d) {
            this.parent(b + 5, c + 5, d);
            "undefined" == typeof wm && (_SETTINGS.MoreGames.Enabled ? (d.div_layer_name ? (console.log("settings found ... using that div layer name"), b = d.div_layer_name) : b = "more-games", console.log("div_layer_name:",
                b), this.checkClickableLayer(b, _SETTINGS.MoreGames.Link, _SETTINGS.MoreGames.NewWindow)) : this.kill());
            this.base = {
                x: 240,
                task: "none",
                y: 130,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            }
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return console.log("clickable layer already exists ..."), !0;
            console.log("doesnt exist yet ...");
            return !1
        },
        checkClickableLayer: function(b,
            c, d) {
          //  "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        idle: function() {
            this.base.scX = 1;
            this.base.scY = 1
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                    y = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * y);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * y);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = document.getElementById("game").offsetLeft, y = document.getElementById("game").offsetTop, $("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", y + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height",
                this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() &&
                (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
                null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var f = 0, g = 1; 48 >= g; g += 1) b.lineTo(0 + 800 * Math.cos(2 * g * Math.PI / 48), 0 + 800 * Math.sin(2 * g * Math.PI / 48)), f++, 2 == f && (f = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.kittyopeningSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(),
                    ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
                (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 90,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isClicking && !this.firstClick && "function" == typeof b.clicked && (b.clicked(), this.firstClick = !0);
            this.firstClick && !this.isReleased && "function" == typeof b.clicking &&
                b.clicking();
            this.firstClick && this.isReleased && "function" == typeof b.released && (b.released(), this.firstClick = !1)
        },
        update: function() {
            if (ig.ua.mobile) {
                var b = window.innerHeight / mobileHeight;
                this.pos.x = ig.input.mouse.x / (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x;
                this.pos.y = ig.input.mouse.y / b - this.size.y / 2
            } else this.pos.x = ig.input.mouse.x - this.size.x / 2, this.pos.y = ig.input.mouse.y - this.size.y / 2;
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex,
                b = this.objectArray[a]);
            null != b ? ("close" == b.name && console.log(b), null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && this.hoveringItem != b && this.hoveringItem.idle(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && (this.hoveringItem.idle(), this.hoveringItem = null);
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b,
            c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("width", this.size.x * multiplier);
            $("#" + g.id).css("height", this.size.y * multiplier);
            $("#" + g.id).css("position", "absolute");
            var m = w / 2 - destW / 2,
                y = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + g.id).css("left", this.pos.x), $("#" + g.id).css("top", this.pos.y)) : ($("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", y + this.pos.y * multiplier));
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + g.id).width();
            dynamicClickableEntityDivs[b].height =
                $("#" + g.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 <
                this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain-road").requires("game.entities.plain").defines(function() {
    EntityPlainRoad = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        baseIm: new ig.Image("media/graphics/sprites/road2.jpg"),
        fadeIm: new ig.Image("media/graphics/sprites/fade.png"),
        map: [],
        im: [],
        turnings: [],
        hidEle: [],
        hidCtx: [],
        holder: {},
        rank: 0,
        turnBack: !1,
        locked: !1,
        routeTween: !1,
        now: 0,
        route1: [
            [300, 1, 6],
            [300, 1, 7],
            [190, 1, 7],
            [190, 1, 7],
            [300, 1, 6]
        ],
        route2: [
            [330, 1, 5],
            [290, 1, 5],
            [200, 1, 4],
            [150, 1, 3],
            [340, 1,
                7
            ],
            [290, 1, 5],
            [180, 1, 9],
            [200, 1, 10],
            [330, 1, 5],
            [330, 1, 5]
        ],
        route3: [
            [345, 1, 6],
            [128, 1, 7],
            [300, 1, 5],
            [310, 1, 7],
            [180, 1, 7],
            [130, 1, 5],
            [345, 1, 5],
            [345, 1, 5],
            [200, 1, 7],
            [200, 1, 5],
            [180, 1, 7],
            [160, 1, 5],
            [340, 1, 5],
            [340, 1, 5],
            [340, 1, 5],
            [150, 1, 5],
            [150, 1, 5],
            [345, 1, 5],
            [345, 1, 5],
            [300, 1, 7]
        ],
        init: function(b, c, d) {
            ig.global.wm || (this.main = d.main, this.spawner(), this.oriStat(), this.parent(b, c, d))
        },
        oriStat: function() {
            this.base = {
                x: 240,
                task: "none",
                y: 200,
                fadeY: 160,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                leadY: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTimer: new ig.Timer,
                stayTime: 6,
                stayTimer: new ig.Timer,
                routeTimer: new ig.Timer,
                routeTime: 1,
                frameTime: 0.03,
                frame: 0,
                frameX: 1,
                frameY: 7,
                frames: [0, 1, 2, 3, 4, 5, 6],
                tFrame: 1,
                loop: !0,
                ended: !1,
                cent: !0,
                dh: 338,
                offX: 0
            };
            this.base.w = 2 * this.baseIm.width;
            this.base.h = Math.floor(this.baseIm.height / this.base.frameY);
            this.curve = {
                x: 0,
                y: 0,
                x0: 20,
                y0: 0,
                x1: 0,
                y1: Math.floor(this.base.h / 8),
                x2: 0,
                y2: this.base.h,
                oriX: 0,
                oriY: Math.floor(3 * (this.base.h / 8)),
                percent: 0,
                left: 130,
                right: 345,
                route: 238,
                oriRoute: 238
            }
        },
        spawner: function() {},
        tweenF: function(b) {
            switch (b) {
                case "changeRoute0":
                    this.base.routeTimer.reset();
                    break;
                case "changeRoute1":
                    this.routeTween = !1, this.now += 1, this.base.routeTimer.reset(), !1 == this.car.snapSide && this.car.backToCenter(), this.rank = this.totalTurn / this.turnings, this.word.drawRank = !0, 10 > Math.abs(this.rank - this.curve.oriRoute) ? (this.main.score += 1E3, this.main.ranks[0] += 1, this.word.drawing = "perfect") : 25 > Math.abs(this.rank - this.curve.oriRoute) ? (this.word.drawing = "excellent", this.main.score += 800, this.main.ranks[1] +=
                        1) : 50 > Math.abs(this.rank - this.curve.oriRoute) ? (this.word.drawing = "great", this.main.score += 500, this.main.ranks[2] += 1) : (this.word.drawing = "nice", this.main.score += 200, this.main.ranks[3] += 1), this.word.tweenF("fadeIn")
            }
        },
        update: function() {
            ig.global.wm || (this.runFrame("base"), !0 != this.main.gameOver && !0 != this.main.courseOut && (this.parent(), this.now >= this["route" + this.main.lvl].length ? (this.main.gameOver = !0, this.car.sounding = "slow", this.word.tweenF("flag1"), this.gui.gameTimer.pause(), this.gui.knob.x = this.gui.base.w) :
                (this.base.routeTimer.delta() > this["route" + this.main.lvl][this.now][1] && !1 == this.routeTween && (this.turnBack = !1, this.turnings = this.totalTurn = 0, this.base.stayTimer.reset(), this.routeTween = !0, this.curve.targ = this["route" + this.main.lvl][this.now][0], this.tweener("curve", {
                    route: this.curve.targ
                }, 0.8 + 2 * Math.random(), "changeRoute0")), !0 != this.main.gamePaused && (!0 == this.routeTween ? (this.turnings++, this.totalTurn += this.car.base.x, this.car.base.x += 0 == Math.floor((this.curve.oriRoute - this.curve.route) / 40) ? 0.5 :
                    Math.floor((this.curve.oriRoute - this.curve.route) / 40), this.car.base.x > this.main.w / 2 - 10 && this.car.base.x < this.main.w / 2 + 10 ? this["route" + this.main.lvl][this.now][2] -= 0.0050 : this.car.base.x > this.main.w / 2 - 30 && this.car.base.x < this.main.w / 2 + 30 ? this["route" + this.main.lvl][this.now][2] -= 0.0030 : this.car.base.x > this.main.w / 2 - 50 && this.car.base.x < this.main.w / 2 + 50 && (this["route" + this.main.lvl][this.now][2] -= 0.0010), this.base.offX = 1.5 * (this.curve.oriRoute - this.curve.route), this.base.stayTimer.delta() > this["route" +
                        this.main.lvl][this.now][2] && !1 == this.turnBack && (this.turnBack = !0, this.tweener("curve", {
                        route: this.curve.oriRoute
                    }, 1 + 1 * Math.random(), "changeRoute1"))) : this.base.offX = 0, this.base.offX += 0.3 * (this.gui.knob.x - this.curve.oriRoute), this.curve.x0 = Math.floor(1.04 * (this.main.w - this.curve.route - 240)), this.curve.x1 = 1 * -this.curve.x0, this.curve.y1 = Math.floor(this.curve.oriX + Math.abs(this.curve.x0) / 80), this.curve.route != this.curve.oriRoute && (this.sky.base.imStartPoint = Math.floor(this.sky.base.imStartPoint - this.curve.x0 /
                    10 + 0.02 * this.base.offX))))))
        },
        drawInit: function() {},
        ready: function() {
            this.parent();
            this.base.routeTimer.pause();
            this.gui.gameTimer.pause()
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                for (var b = 0; b < this.base.dh; b++) this.curve.percent = 1 * (b / this.base.dh), this.curve.x = 2 * ((1 - this.curve.percent) * (1 - this.curve.percent) * this.curve.x0 + 2 * (1 - this.curve.percent) * this.curve.percent * this.curve.x1 + this.curve.percent * this.curve.percent * this.curve.x2), this.curve.y = (1 - this.curve.percent) * (1 - this.curve.percent) *
                    this.curve.y0 + 2 * (1 - this.curve.percent) * this.curve.percent * this.curve.y1 + this.curve.percent * this.curve.percent * this.curve.y2, this.ctx.drawImage(this.baseIm.data, this.curve.x + this.baseIm.width / 2 + this.base.offX - 240, Math.floor(this.curve.percent * this.base.h) + this.base.h * this.base.frame, 480, 1, 0, b + this.base.y, 480, 1);
                this.drawer("game", this.fadeIm, 1, 1, 0, 0, this.base.fadeY)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-sky").requires("game.entities.plain").defines(function() {
    EntityPlainSky = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        baseIm: new ig.Image("media/graphics/sprites/sky.jpg"),
        init: function(b, c, d) {
            ig.global.wm || (this.main = d.main, this.oriStat(), this.parent(b, c, d), this.spawner())
        },
        oriStat: function() {
            this.base = {
                im: this.baseIm,
                x: 240,
                task: "none",
                y: 130,
                sc: 1,
                imWidth: this.main.w / 10,
                imHeight: this.baseIm.height,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0,
                imStartPoint: 0
            };
            this.base.center = Math.floor(this.base.im.width / 2 - this.main.w / 2);
            this.base.sw = Math.floor(this.main.w / 1.6);
            this.base.dh = Math.floor(1.6 * this.baseIm.height)
        },
        spawner: function() {},
        tweenF: function() {},
        update: function() {
            ig.global.wm || this.parent()
        },
        drawInit: function() {},
        ready: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.base.imStartPoint <= -this.baseIm.width ? this.base.imStartPoint +=
                this.baseIm.width : this.base.imStartPoint >= this.baseIm.width && (this.base.imStartPoint -= this.baseIm.width), 0 > this.base.imStartPoint ? Math.abs(this.base.imStartPoint) > this.base.sw ? this.ctx.drawImage(this.baseIm.data, this.baseIm.width + this.base.imStartPoint, 0, this.base.sw, this.baseIm.height, 0, 0, this.main.w, this.base.dh) : (this.ctx.drawImage(this.baseIm.data, this.baseIm.width - this.base.sw, 0, this.base.sw, this.baseIm.height, -this.main.w + Math.floor(1.6 * Math.abs(this.base.imStartPoint)), 0, this.main.w, this.base.dh),
                    this.ctx.drawImage(this.baseIm.data, 0, 0, this.base.sw, this.baseIm.height, Math.floor(1.6 * Math.abs(this.base.imStartPoint)), 0, this.main.w, this.base.dh)) : this.base.imStartPoint + this.base.sw < this.baseIm.width ? this.ctx.drawImage(this.baseIm.data, this.base.imStartPoint, 0, this.base.sw, this.baseIm.height, 0, 0, this.main.w, this.base.dh) : (this.ctx.drawImage(this.baseIm.data, this.baseIm.width - this.base.sw, 0, this.base.sw, this.baseIm.height, Math.floor(1.6 * (this.baseIm.width - (this.base.imStartPoint + this.base.sw))),
                    0, this.main.w, this.base.dh), this.ctx.drawImage(this.baseIm.data, 0, 0, this.base.sw, this.baseIm.height, this.main.w + Math.floor(1.6 * (this.baseIm.width - (this.base.imStartPoint + this.base.sw))), 0, this.main.w, this.base.dh)))
        },
        draw2: function() {
            this.parent();
            ig.global.wm || (0 > this.base.imStartPoint ? Math.abs(this.base.imStartPoint) > this.base.sw ? (this.base.imStartPoint = Math.floor(this.baseIm.width + this.base.imStartPoint), this.ctx.drawImage(this.baseIm.data, Math.floor(this.base.imStartPoint), 0, this.base.sw, this.baseIm.height,
                    0, 0, Math.floor(this.main.w), this.base.dh)) : (this.ctx.drawImage(this.baseIm.data, Math.floor(this.baseIm.width + this.base.imStartPoint), 0, Math.floor(Math.abs(this.base.imStartPoint)), this.baseIm.height, 0, 0, Math.floor(1.6 * Math.abs(this.base.imStartPoint)) + 1, this.base.dh), this.ctx.drawImage(this.baseIm.data, 0, 0, Math.floor(this.base.sw + this.base.imStartPoint), this.baseIm.height, Math.floor(1.6 * Math.abs(this.base.imStartPoint)), 0, Math.floor(1.6 * (this.base.sw + this.base.imStartPoint)) + 1, this.base.dh)) : 0 <= this.base.imStartPoint &&
                !(this.base.imStartPoint >= this.baseIm.width) && (this.base.imStartPoint + this.base.sw > this.baseIm.width && (this.base.imStartPoint -= this.baseIm.width), this.ctx.drawImage(this.baseIm.data, Math.floor(this.base.imStartPoint), 0, this.base.sw, this.baseIm.height, 0, 0, Math.floor(this.main.w), this.base.dh)))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-car").requires("game.entities.plain").defines(function() {
    EntityPlainCar = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        baseIm: new ig.Image("media/graphics/sprites/car.png"),
        dustIm1: new ig.Image("media/graphics/sprites/dust.png"),
        dustIm2: new ig.Image("media/graphics/sprites/dust2.png"),
        snapSide: !1,
        sounding: "engine",
        state: 0,
        sLoop: {
            engine: {
                id: "engine",
                duration: 0.54
            },
            fast: {
                id: "fast",
                duration: 0.58
            },
            faster: {
                id: "faster",
                duration: 0.39
            },
            slow: {
                id: "slow",
                duration: 0.54
            },
            warn: {
                id: "warn",
                duration: 1.66
            }
        },
        dustPos: [
            [42, 143, 183, 165],
            [41, 136, 177, 166],
            [42, 135, 167, 165],
            [41, 131, 155, 166],
            [40, 122, 137, 162],
            [40, 120, 125, 162],
            [43, 116, 109, 160],
            [43, 112, 95, 156],
            [47, 107, 78, 157],
            [52, 100, 58, 150],
            [0, 0, 0, 0],
            [254, 96, 248, 147],
            [258, 100, 238, 152],
            [262, 105, 225, 155],
            [264, 109, 212, 154],
            [267, 115, 198, 158],
            [266, 117, 183, 161],
            [264, 129, 166, 160],
            [262, 124, 156, 159],
            [266, 120, 141, 161],
            [263, 134, 130, 161]
        ],
        dust: [],
        init: function(b, c, d) {
            ig.global.wm || (this.main = d.main, this.oriStat(), this.parent(b, c, d), this.spawner())
        },
        oriStat: function() {
            this.outTimer = new ig.Timer;
            this.outTime = 0.5;
            this.base = {
                x: 240,
                task: "none",
                y: 400,
                sc: 1,
                oriSc: 1.3,
                scX: 1,
                scY: 1,
                alp: 1,
                leadY: 0,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 0.05,
                frameTimer: new ig.Timer,
                frame: 0,
                frameX: 3,
                frameY: 7,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            };
            this.base.frame = Math.floor(this.base.frameX * this.base.frameY / 2);
            this.base.w = this.baseIm.width / this.base.frameX;
            this.base.h = this.baseIm.height / this.base.frameY;
            this.base.hw = this.base.w / 2;
            this.base.hh = this.base.h /
                2
        },
        spawnDust: function() {
            this.dust.push([Math.floor(this.base.x - this.base.hw * this.base.oriSc + this.dustPos[this.base.frame][2] * this.base.oriSc), Math.floor(this.base.y - this.base.hh * this.base.oriSc + this.dustPos[this.base.frame][3] * this.base.oriSc), 0, 2 * Math.random(), -2 + 4 * Math.random(), -2 + 4 * Math.random(), 360 * Math.random(), 1 + Math.floor(2 * Math.random())]);
            this.dust.push([Math.floor(this.base.x - this.base.hw * this.base.oriSc + this.dustPos[this.base.frame][0] * this.base.oriSc), Math.floor(this.base.y - this.base.hh *
                this.base.oriSc + this.dustPos[this.base.frame][1] * this.base.oriSc), 0, 2 * Math.random(), 1 * Math.random(), -2 + 4 * Math.random(), 360 * Math.random(), 1 + Math.floor(2 * Math.random())])
        },
        spawner: function() {},
        tweenF: function(b) {
            switch (b) {
                case "doneCenter":
                    this.tweening = !1
            }
        },
        backToCenter: function() {
            this.tweening = !0;
            this.tweener("base", {
                x: this.main.w / 2
            }, 1, "doneCenter")
        },
        update: function() {
            if (!ig.global.wm) {
                this.soundLooper(this.sounding);
                for (var b = 0; b < this.dust.length; b++) this.dust[b][2] += 0.05, this.dust[b][0] += this.dust[b][3],
                    this.dust[b][1] += this.dust[b][4], this.dust[b][5] -= 0.12, this.dust[b][6] -= 2, this.dust[b][2] > this.dust[b][3] && this.dust.splice(b, 1);
                this.base.frameTimer.delta() > this.base.frameTime && 10 != this.base.frame && (this.base.frameTimer.reset(), this.spawnDust());
                this.base.leadY = Math.floor(3 * Math.random());
                50 > this.base.x ? (!1 == this.snapSide && (this.snapSide = !0, this.outTimer.reset()), this.base.x = 50) : this.base.x > this.main.w - 50 ? (!1 == this.snapSide && (this.snapSide = !0, this.outTimer.reset()), this.base.x = this.main.w - 50) : !0 ==
                    this.snapSide && (this.snapSide = !1, this.word.warn.show = !1);
                !0 != this.main.courseOut && !0 != this.main.gamePaused && (this.parent(), this.gui.knob.x < this.gui.knob.carMoveGap ? this.gui.knob.x < this.gui.knob.carFastGap ? (this.sounding = "faster", 2 != this.state && (this.state = 2, this.sounder("turn")), this.base.x -= 4) : (3 != this.state && (this.state = 3, this.sounder("break")), this.sounding = "fast", this.base.x -= 2) : this.gui.knob.x > this.main.w - this.gui.knob.carMoveGap ? this.gui.knob.x > this.main.w - this.gui.knob.carFastGap ? (this.sounding =
                        "faster", this.base.x += 4, 4 != this.state && (this.state = 4, this.sounder("turn"))) : (this.sounding = "fast", this.base.x += 2, 5 != this.state && (this.state = 5, this.sounder("break"))) : this.gui.knob.x == this.gui.base.w ? (this.state = 0, this.sounding = "engine") : (this.state = 1, this.sounding = "slow"), this.base.frame = this.gui.knob.x < this.gui.knob.carMoveGap ? 0 : this.gui.knob.x > this.main.w - this.gui.knob.carMoveGap ? this.base.frameX * this.base.frameY - 1 : -1 == Math.floor(this.gui.knob.x / this.main.w * this.base.frameX * this.base.frameY) ? 0 :
                    Math.floor(this.gui.knob.x / this.main.w * this.base.frameX * this.base.frameY), !0 != this.word.start.show && (!0 == this.snapSide && !1 == this.word.warn.show && (this.soundLooper("warn"), this.word.warn.show = !0, this.word.tweenF("warn1")), !0 == this.snapSide && this.outTimer.delta() > this.outTime && 2 < this.gui.gameTimer.delta() && (this.main.courseOut = !0, this.gui.revertBack(), this.main.gameOver = !0, this.gui.gameTimer.pause(), this.word.warn.show = !1, this.word.out.show = !0, this.word.tweenF("fadeIn"))))
            }
        },
        drawInit: function() {},
        ready: function() {
            this.parent();
            this.base.face = this.gui.base.w
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                this.drawer("game", this.baseIm, this.base.frameX, this.base.frameY, this.base.frame, this.base.x, this.base.y + this.base.leadY, this.base.scX * this.base.oriSc, this.base.scY * this.base.oriSc, !0);
                for (var b = 0; b < this.dust.length; b++) 0 <= this.dust[b][4] && this.drawer("game", this["dustIm" + this.dust[b][7]], 1, 1, 0, this.dust[b][0], this.dust[b][1], this.dust[b][2], this.dust[b][2], !0, this.dust[b][4], this.dust[b][6])
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-gui").requires("game.entities.plain").defines(function() {
    EntityPlainGui = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        tweening: !1,
        zIndex: 100,
        baseIm: new ig.Image("media/graphics/sprites/bar1.png"),
        base2Im: new ig.Image("media/graphics/sprites/bar2.png"),
        knobIm: new ig.Image("media/graphics/sprites/knob.png"),
        timeIm: new ig.Image("media/graphics/sprites/timebar.png"),
        knob: {
            x: 240,
            sideGap: 2,
            targetX: 0,
            carMoveGap: 90,
            carFastGap: 50
        },
        firstClick: !1,
        timeRan: {},
        init: function(b,
            c, d) {
            ig.global.wm || (this.main = d.main, this.oriStat(), this.parent(b, c, d), this.spawner(), this.textSet("game", 30, "white"), this.ctx.fillStyle = "white")
        },
        oriStat: function() {
            this.base = {
                x: 240,
                task: "none",
                y: 589,
                sc: 1,
                oriSc: 1,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                w: Math.floor(this.baseIm.width / 2),
                h: this.baseIm.height,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            };
            this.knob.x = this.base.w;
            this.gameTimer = new ig.Timer
        },
        spawner: function() {},
        tweenF: function(b) {
            switch (b) {
                case "tweenKnob":
                    this.tweening = !1
            }
        },
        update: function() {
            ig.global.wm || (this.parent(), this.timeRan.secs = Math.floor(this.gameTimer.delta()), this.timeRan.Millis = Math.floor(100 * this.gameTimer.delta()), this.timeRan.ms = String(this.timeRan.Millis % 100), this.timeRan.s = String(this.timeRan.secs % 60), this.timeRan.m = String(Math.floor(this.timeRan.secs / 60)), this.timeRan.s = 0 == this.timeRan.s.length ? "00" : 1 == this.timeRan.s.length ? "0" + this.timeRan.s : Number(this.timeRan.s) % 60, 0 == this.timeRan.m.length ? this.timeRan.m = "00" : 1 == this.timeRan.m.length && (this.timeRan.m =
                "0" + this.timeRan.m), 0 == this.timeRan.ms.length ? this.timeRan.ms = "00" : 1 == this.timeRan.ms.length && (this.timeRan.ms = "0" + this.timeRan.ms), !0 != this.main.courseOut && !0 != this.main.gameOver && !0 != this.main.gamePaused && (!0 == ig.input.state("click") ? (100 < this.pointer.pos.y && (this.knob.targetX = this.pointer.pos.x > this.main.w - this.knob.sideGap ? this.main.w - this.knob.sideGap : this.pointer.pos.x < this.knob.sideGap ? this.knob.sideGap : this.pointer.pos.x, !1 == this.tweening && (this.knob.x = this.knob.targetX)), !0 == ig.input.released("click") &&
                (this.stopTweens(), this.tweener("knob", {
                    x: this.base.w
                }, 0.05), !1 == this.road.routeTween && this.car.backToCenter())) : this.tweening = this.firstClick = !1))
        },
        revertBack: function() {
            this.stopTweens();
            this.tweener("knob", {
                x: this.base.w
            }, 0.05)
        },
        drawInit: function() {},
        ready: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.drawer("game", this.baseIm, 1, 1, 0, this.base.x, this.base.y, this.base.scX * this.base.oriSc, this.base.scY * this.base.oriSc, !0), this.knob.x > this.main.w / 2 ? this.ctx.drawImage(this.base2Im.data,
                this.base.w, 0, this.knob.x - this.base.w, this.base.h, this.base.w, this.main.h - this.base.h, this.knob.x - this.base.w, this.base.h) : this.knob.x < this.main.w / 2 && (0 > this.knob.x && (this.knob.x = 0), this.ctx.drawImage(this.base2Im.data, this.knob.x, 0, this.base.w - this.knob.x, this.base.h, this.knob.x, this.main.h - this.base.h, this.base.w - this.knob.x, this.base.h)), this.drawer("game", this.knobIm, 1, 1, 0, this.knob.x, this.main.h - this.base.h / 2, 1, 1, !0), this.drawer("game", this.timeIm, 1, 1, 0, this.main.w / 2 - this.timeIm.width / 2, 0), this.textDraw("game",
                0.7, this.timeRan.m + ":" + this.timeRan.s, this.main.w / 2, 46), this.textDraw("game", 0.4, ".", 276, 42), this.textDraw("game", 0.4, this.timeRan.ms, 287, 42))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-game-but").requires("game.entities.plain").defines(function() {
    EntityPlainGameBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        zIndex: 120,
        textSize: 26,
        name: "plain-but",
        showRank: !1,
        scene: 0,
        seq: 0,
        oriSc: 0,
        baseIm: new ig.Image("media/graphics/sprites/play.png"),
        muteIm: new ig.Image("media/graphics/sprites/unmute.png"),
        unmuteIm: new ig.Image("media/graphics/sprites/mute.png"),
        pauseIm: new ig.Image("media/graphics/sprites/pause.png"),
        resumeIm: new ig.Image("media/graphics/sprites/resume.png"),
        replayIm: new ig.Image("media/graphics/sprites/replay.png"),
        init: function(b, c, d) {
            if (!ig.global.wm) {
                this.seq = d.seq;
                this.main = d.main;
                void 0 != d.zIndex && (this.zIndex = d.zIndex, this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]);
                this.parent(b, c, d);
                switch (this.seq) {
                    case 4:
                        this.base = {
                            show: !1,
                            im: this.muteIm,
                            x: 30,
                            y: 30,
                            sc: 1,
                            oriSc: 0.7,
                            oriAlp: 0.7,
                            scX: 1,
                            scY: 1,
                            alp: 0,
                            rot: 0,
                            textSize: 60,
                            textScX: 1,
                            textScY: 0,
                            tweening: !1,
                            frameCount: 0,
                            frameTime: 1,
                            frame: 0,
                            frameX: 1,
                            frameY: 1,
                            frames: [0],
                            tFrame: 1,
                            loop: !1,
                            cent: !0
                        };
                        this.base.im = !0 == ig.soundHandler.muted ? this.unmuteIm : this.muteIm;
                        break;
                    case 0:
                        this.base = {
                            show: !1,
                            im: this.muteIm,
                            x: 455,
                            y: 30,
                            sc: 1,
                            oriSc: 0.7,
                            oriAlp: 0.7,
                            scX: 1,
                            scY: 1,
                            alp: 0,
                            rot: 0,
                            textSize: 60,
                            textScX: 1,
                            textScY: 0,
                            tweening: !1,
                            frameCount: 0,
                            frameTime: 1,
                            frame: 0,
                            frameX: 1,
                            frameY: 1,
                            frames: [0],
                            tFrame: 1,
                            loop: !1,
                            cent: !0
                        };
                        this.base.im = !0 == ig.soundHandler.muted ? this.unmuteIm : this.muteIm;
                        break;
                    case 1:
                        this.base = {
                            show: !1,
                            im: this.pauseIm,
                            x: 410,
                            y: 30,
                            sc: 1,
                            oriSc: 0.7,
                            oriAlp: 0.7,
                            scX: 1,
                            scY: 1,
                            alp: 0,
                            rot: 0,
                            textSize: 60,
                            textScX: 1,
                            textScY: 0,
                            tweening: !1,
                            frameCount: 0,
                            frameTime: 1,
                            frame: 0,
                            frameX: 1,
                            frameY: 1,
                            frames: [0],
                            tFrame: 1,
                            loop: !1,
                            cent: !0
                        };
                        break;
                    case 2:
                        this.base = {
                            show: !1,
                            im: this.replayIm,
                            x: 30,
                            y: 30,
                            sc: 1,
                            oriSc: 0.7,
                            oriAlp: 0.7,
                            scX: 1,
                            scY: 1,
                            alp: 0,
                            rot: 0,
                            textSize: 60,
                            textScX: 1,
                            textScY: 0,
                            tweening: !1,
                            frameCount: 0,
                            frameTime: 1,
                            frame: 0,
                            frameX: 1,
                            frameY: 1,
                            frames: [0],
                            tFrame: 1,
                            loop: !1,
                            cent: !0
                        }
                }
                this.pos.x = this.base.x - this.base.im.width / 2 * this.base.oriSc;
                this.pos.y = this.base.y - this.base.im.height / 2 * this.base.oriSc;
                this.size.x = this.base.im.width * this.base.oriSc;
                this.size.y =
                    this.base.im.height * this.base.oriSc
            }
        },
        clicked: function() {
            this.base.scX = 0.8;
            if (!0 != this.main.gameOver) switch (this.sounder("click"), this.seq) {
                case 4:
                    !0 == ig.soundHandler.muted ? (this.base.im = this.muteIm, ig.soundHandler.setForceMuted(!1), ig.soundHandler.unmute(),ih5game.unmute()) : (this.base.im = this.unmuteIm, ig.soundHandler.mute(), ig.soundHandler.setForceMuted(!0),ih5game.mute());
                    break;
                case 0:
                    !0 == ig.soundHandler.muted ? (this.base.im = this.muteIm, ig.soundHandler.setForceMuted(!1), ig.soundHandler.unmute(),ih5game.unmute()) : (this.base.im = this.unmuteIm, ig.soundHandler.mute(),
                        ig.soundHandler.setForceMuted(!0),ih5game.mute());
                    break;
                case 1:
                    !1 == this.main.gamePaused ? (this.base.im = this.resumeIm, this.main.gamePaused = !0, this.main.pauseGame()) : (this.base.im = this.pauseIm, this.main.gamePaused = !1, this.main.resumeGame());
                    break;
                case 2:
                    ig.game.director.jumpTo(LevelStage)
            }
        },
        tweenF: function() {},
        clicking: function() {
            this.base.scX = 0.95;
            this.base.scY = 0.95
        },
        released: function() {},
        update: function() {
            this.parent();
            !0 == this.main.gameOver && this.kill();
            null != this.pointer && this.pointer.hoveringItem == this && (this.base.scX =
                1.2, this.base.scY = 1.2)
        },
        idle: function() {
            this.base.scX = 1;
            this.base.scY = 1
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        drawInit: function() {},
        redrawAll: function() {},
        draw: function() {
            this.parent();
            this.drawer("game", this.base.im, 1, 1, 0, this.base.x, this.base.y, this.base.scX * this.base.oriSc, this.base.scX * this.base.oriSc, !0)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-rank").requires("game.entities.plain", "game.entities.plain-game-but").defines(function() {
    EntityPlainRank = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        h: 640,
        w: 480,
        which: 1,
        holdWhich: 1,
        baseIm: new ig.Image("media/graphics/sprites/rank.png"),
        bgIm: new ig.Image("media/graphics/sprites/home-bg.png"),
        tweening: !1,
        init: function(b, c, d) {
            ig.global.wm || (this.main = d.main, this.spawner(), this.textSet("game", 30, "white"), this.getScore("score"), this.oriStat(), this.parent(b,
                c, d), ig.game.rank = [], this.tweenF("title"))
        },
        oriStat: function() {
            this.base = {
                x: 240,
                task: "none",
                y: 120,
                sc: 1,
                leadX: 0,
                oriSc: 0.9,
                scX: 2.2,
                scY: 1,
                alp: 0,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            };
            this.rank1 = {
                tx: "00:00.00",
                x: this.w / 2,
                y: 230,
                scX: 20,
                leadX: -500
            };
            this.rank2 = {
                tx: "00:00.00",
                x: this.w / 2,
                y: 310,
                scX: 20,
                leadX: -500
            };
            this.rank3 = {
                tx: "00:00.00",
                x: this.w / 2,
                y: 390,
                scX: 20,
                leadX: -500
            };
            void 0 != ig.game.rank[0] && (this.rank1.tx = this.timitizer(ig.game.rank[0].score));
            void 0 != ig.game.rank[1] && (this.rank2.tx = this.timitizer(ig.game.rank[1].score));
            void 0 != ig.game.rank[2] && (this.rank3.tx = this.timitizer(ig.game.rank[2].score))
        },
        spawner: function() {
            !1 == ig.game.playing && ig.game.spawnEntity(EntityPointer, 0, 0, {
                main: this,
                seq: 0
            })
        },
        changeState: function() {
            this.tweening = !0
        },
        tweenF: function(b, c) {
            switch (b) {
                case "title":
                    this.tweener("base", {
                        scX: 0.8,
                        alp: 1
                    }, 0.3, "title2");
                    break;
                case "title2":
                    this.tweener("base", {
                        scX: 1
                    }, 0.3, "title3");
                    break;
                case "title3":
                    for (var d = 1; 4 > d; d++) this.tweener("rank" +
                        d, {
                            leadX: 50
                        }, 0.3, "ranks", 0.3 * d);
                    break;
                case "ranks":
                    this.sounder("swoosh");
                    this.tweener(c, {
                        leadX: 0
                    }, 0.3, "ranks2");
                    break;
                case "ranks2":
                    "rank2" == c && (ig.game.spawnEntity(EntityPlainOverBut, -200, -200, {
                        main: this,
                        seq: 0,
                        rank: !0
                    }), ig.game.spawnEntity(EntityPlainGameBut, -200, -200, {
                        main: this,
                        seq: 0,
                        zindex: 200
                    }))
            }
        },
        update: function() {
            ig.global.wm || this.parent()
        },
        drawInit: function() {},
        ready: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (!1 == ig.game.playing && this.drawer("game", this.bgIm, 1,
                1, 0, 0, 0), this.ctx.fillStyle = "rgba(0,0,0,0.7)", this.ctx.fillRect(0, 0, ig.system.width, ig.system.height), this.drawer("game", this.baseIm, 1, 1, 0, this.w / 2, 110, this.base.scX, this.base.scX, !0, this.base.alp), this.textDraw("game", 1.5, "1st " + this.rank1.tx, this.rank1.x + this.rank1.leadX, this.rank1.y, this.rank1.scX, this.rank1.scX, !0), this.textDraw("game", 1.5, "2nd " + this.rank2.tx, this.rank2.x + this.rank2.leadX, this.rank2.y, this.rank2.scX, this.rank2.scX, !0), this.textDraw("game", 1.5, "3rd " + this.rank3.tx, this.rank3.x +
                this.rank3.leadX, this.rank3.y, this.rank3.scX, this.rank3.scX, !0))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-over-but").requires("game.entities.plain", "game.entities.plain-rank").defines(function() {
    EntityPlainOverBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        zIndex: 120,
        textSize: 26,
        name: "plain-but",
        showRank: !1,
        scene: 0,
        seq: 0,
        oriSc: 0,
        baseIm: new ig.Image("media/graphics/sprites/retry.png"),
        baseIm2: new ig.Image("media/graphics/sprites/ranking.png"),
        baseIm3: new ig.Image("media/graphics/sprites/back.png"),
        init: function(b, c, d) {
            if (!ig.global.wm) {
                this.parent(b,
                    c, d);
                this.seq = d.seq;
                switch (this.seq) {
                    case 0:
                        this.base = {
                            show: !1,
                            im: this.baseIm,
                            x: this.main.w / 2,
                            y: 410,
                            sc: 1,
                            oriSc: 0.79,
                            oriAlp: 0.7,
                            scX: 1,
                            scY: 1,
                            alp: 0,
                            rot: 0,
                            textSize: 60,
                            textScX: 1,
                            textScY: 0,
                            tweening: !1,
                            frameCount: 0,
                            frameTime: 1,
                            frame: 0,
                            frameX: 1,
                            frameY: 1,
                            frames: [0],
                            tFrame: 1,
                            loop: !1,
                            cent: !0
                        };
                        !1 == ig.game.playing && (this.base.im = this.baseIm3, this.base.oriSc = 0.7, this.base.y = 480);
                        break;
                    case 1:
                        this.base = {
                            show: !1,
                            im: this.baseIm2,
                            x: this.main.w / 2,
                            y: 485,
                            sc: 1,
                            oriSc: 0.79,
                            oriAlp: 0.7,
                            scX: 1,
                            scY: 1,
                            alp: 0,
                            rot: 0,
                            textSize: 60,
                            textScX: 1,
                            textScY: 0,
                            tweening: !1,
                            frameCount: 0,
                            frameTime: 1,
                            frame: 0,
                            frameX: 1,
                            frameY: 1,
                            frames: [0],
                            tFrame: 1,
                            loop: !1,
                            cent: !0
                        }
                }!0 == d.rank && (this.base.y = 450);
                this.pos.x = this.base.x - this.base.im.width / 2 * this.base.oriSc;
                this.pos.y = this.base.y - this.base.im.height / 2 * this.base.oriSc;
                this.size.x = this.base.im.width * this.base.oriSc;
                this.size.y = this.base.im.height * this.base.oriSc;
                this.base.scX = 2;
                this.tweener("base", {
                    scX: 0.8,
                    alp: 1
                }, 0.1, "fadeIn", 0.3 * this.seq);
                this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
            }
        },
        clicked: function() {
            this.base.scX = 0.9;
            this.sounder("click");
            switch (this.seq) {
                case 0:
                    ig.game.director.jumpTo(LevelStage);
                    break;
                case 1:
                    ig.game.spawnEntity(EntityPlainRank, 0, 0, {
                        main: this.main
                    }), ig.game.getEntitiesByType(EntityPlainOver)[0].kill(), ig.game.getEntitiesByType(EntityPlainOverBut)[0].kill(), ig.game.getEntitiesByType(EntityPlainGameBut)[0].kill(), this.kill()
            }
        },
        tweenF: function(b) {
            switch (b) {
                case "fadeIn":
                    this.sounder("swoosh"), this.tweener("base", {
                        scX: 1
                    }, 0.1)
            }
        },
        clicking: function() {
            this.base.scX =
                0.95;
            this.base.scY = 0.95
        },
        released: function() {},
        update: function() {
            this.parent();
            null != this.pointer && this.pointer.hoveringItem == this && (this.base.scX = 1.05, this.base.scY = 1.05)
        },
        idle: function() {
            this.base.scX = 1;
            this.base.scY = 1
        },
        ready: function() {},
        drawInit: function() {},
        redrawAll: function() {},
        draw: function() {
            this.parent();
            this.drawer("game", this.base.im, 1, 1, 0, this.base.x, this.base.y, this.base.scX * this.base.oriSc, this.base.scX * this.base.oriSc, !0, this.base.alp)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-over").requires("game.entities.plain", "game.entities.plain-over-but", "game.entities.plain-game-but").defines(function() {
    EntityPlainOver = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 110,
        h: 640,
        w: 480,
        which: 1,
        holdWhich: 1,
        timeScore: 0,
        baseIm: new ig.Image("media/graphics/sprites/home-bg.png"),
        retireIm: new ig.Image("media/graphics/sprites/retire.png"),
        timeIm: new ig.Image("media/graphics/sprites/time.png"),
        scoreIm: new ig.Image("media/graphics/sprites/score.png"),
        excellentIm1: new ig.Image("media/graphics/sprites/excellent1.png"),
        excellentIm2: new ig.Image("media/graphics/sprites/excellent2.png"),
        greatIm1: new ig.Image("media/graphics/sprites/great1.png"),
        greatIm2: new ig.Image("media/graphics/sprites/great2.png"),
        niceIm1: new ig.Image("media/graphics/sprites/nice1.png"),
        niceIm2: new ig.Image("media/graphics/sprites/nice2.png"),
        perfectIm1: new ig.Image("media/graphics/sprites/perfect1.png"),
        perfectIm2: new ig.Image("media/graphics/sprites/perfect2.png"),
        rayIm: new ig.Image("media/graphics/sprites/ray.png"),
        drawing: "perfect",
        ranks: ["perfect", "excellent", "great", "nice"],
        tweening: !1,
        init: function(b, c, d) {
            ig.global.wm || (this.gui = ig.game.getEntitiesByType(EntityPlainGui)[0], this.spawner(), this.oriStat(), this.parent(b, c, d), this.main = d.main, this.win = d.win, this.tweener("greyOverlay", {
                alp: 0.7
            }, 0.3), !0 == this.win ? (this.tweener("base", {
                score: this.main.score
            }, 0.5, "ranker"), this.drawing = this.ranks[this.main.ranks.indexOf(Math.max.apply(Math, this.main.ranks))], this.setScore("score", this.gui.gameTimer.delta())) : (this.base.y =
                180, this.tweenF("ranker")), this.timeScore = this.timitizer(this.gui.gameTimer.delta()), this.sounder("swoosh"))
        },
        oriStat: function() {
            this.timeRan = {};
            this.greyOverlay = {
                alp: 0
            };
            this.ray = {
                x: 0
            };
            this.base = {
                score: 0,
                x: 240,
                task: "none",
                y: 335,
                sc: 1,
                leadX: 0,
                oriSc: 0.9,
                scX: 2.2,
                scY: 2.2,
                alp: 0,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            }
        },
        spawner: function() {},
        tweenF: function(b) {
            switch (b) {
                case "spawnButs":
                    ig.game.spawnEntity(EntityPlainOverBut, -200, -200, {
                        seq: 0,
                        main: this.main
                    });
                    ig.game.spawnEntity(EntityPlainOverBut, -200, -200, {
                        seq: 1,
                        main: this.main
                    });
                    ig.game.spawnEntity(EntityPlainGameBut, -200, -200, {
                        main: this,
                        seq: 0,
                        zindex: 200
                    });
                    break;
                case "ranker":
                    this.tweener("base", {
                        alp: 1,
                        scX: 0.8,
                        scY: 0.8
                    }, 0.2, "ranker2");
                    break;
                case "ranker2":
                    this.tweener("base", {
                        scX: 1,
                        scY: 1
                    }, 0.2, "spawnButs"), this.sounder("rank")
            }
        },
        update: function() {
            ig.global.wm || (this.parent(), this.ray.x = this.ray.x < ig.game.hidEle.width + 200 ? this.ray.x + 5 : 0)
        },
        drawInit: function() {},
        ready: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.ctx.fillStyle = "rgba(0,0,0," + this.greyOverlay.alp + ")", this.ctx.fillRect(0, 0, ig.system.width, ig.system.height), this.drawer("game", this.scoreIm, 1, 1, 0, this.main.w / 2, 90, 0.6, 0.6, !0), !0 == this.win ? (this.textDraw("game", 2.5, this.timeScore, this.main.w / 2, 215), this.drawer("game", this[this.drawing + "Im1"], 1, 1, 0, this.base.x, this.base.y, this.base.scX, this.base.scY, !0, this.base.alp), this.drawer(ig.game.hidCtx, this[this.drawing + "Im2"], 1, 1, 0, ig.game.hidEle.width / 2, ig.game.hidEle.height /
                2, 1, 1, !0), ig.game.hidCtx.globalCompositeOperation = "source-in", this.drawer(ig.game.hidCtx, this.rayIm, 1, 1, 0, this.ray.x, ig.game.hidEle.height / 2 - this.rayIm.height / 2, 1, 1, !1, this.base.alp), ig.game.hidCtx.globalCompositeOperation = "source-over", this.ctx.drawImage(ig.game.hidEle, this.base.x - ig.game.hidEle.width / 2 * this.base.scX, this.base.y - ig.game.hidEle.height / 2 * this.base.scY, ig.game.hidEle.width * this.base.scX, ig.game.hidEle.height * this.base.scY)) : this.drawer("game", this.retireIm, 1, 1, 0, this.base.x, this.base.y,
                this.base.scX, this.base.scY, !0, this.base.alp))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-word").requires("game.entities.plain", "game.entities.plain-over").defines(function() {
    EntityPlainWord = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 100,
        h: 640,
        w: 480,
        drawing: "start",
        baseIm: new ig.Image("media/graphics/sprites/home-bg.png"),
        completeIm2: new ig.Image("media/graphics/sprites/complete2.png"),
        excellentIm1: new ig.Image("media/graphics/sprites/excellent1.png"),
        excellentIm2: new ig.Image("media/graphics/sprites/excellent2.png"),
        greatIm1: new ig.Image("media/graphics/sprites/great1.png"),
        greatIm2: new ig.Image("media/graphics/sprites/great2.png"),
        niceIm1: new ig.Image("media/graphics/sprites/nice1.png"),
        niceIm2: new ig.Image("media/graphics/sprites/nice2.png"),
        perfectIm1: new ig.Image("media/graphics/sprites/perfect1.png"),
        perfectIm2: new ig.Image("media/graphics/sprites/perfect2.png"),
        startIm2: new ig.Image("media/graphics/sprites/start2.png"),
        rayIm: new ig.Image("media/graphics/sprites/ray.png"),
        flagIm: new ig.Image("media/graphics/sprites/flag.png"),
        warnIm: new ig.Image("media/graphics/sprites/warning.png"),
        outIm: new ig.Image("media/graphics/sprites/course-out.png"),
        handIm: new ig.Image("media/graphics/sprites/hand.png"),
        drawComplete: !1,
        drawStart: !1,
        drawRank: !1,
        drawOut: !1,
        init: function(b, c, d) {
            ig.global.wm || (this.spawner(), this.oriStat(), this.parent(b, c, d), !1 == ig.game.showTut ? (ig.game.showTut = !0, this.tweenF("hand1")) : (this.hand.show = !1, this.tweenF("start1")))
        },
        oriStat: function() {
            this.base = {
                x: 240,
                task: "none",
                y: 150,
                sc: 1,
                oriSc: 0.9,
                scX: 2.5,
                scY: 2.5,
                alp: 0,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            };
            this.start = {
                scX: 2.2,
                show: !0,
                alp: 0
            };
            this.hand = {
                x: 240,
                y: 550,
                leadX: 0,
                leadY: 100,
                scX: 1,
                show: !0,
                alp: 0
            };
            this.warn = {
                show: !1,
                x: 240,
                y: 138,
                scX: 0.6,
                alp: 0
            };
            this.flag = {
                show: !1,
                x: 240,
                y: 138,
                leadX: -500,
                leadY: -500,
                scX: 1,
                scY: 1,
                alp: 1
            };
            this.out = {
                show: !1,
                x: 240,
                y: 138,
                scX: 0.6,
                alp: 0
            };
            this.ray = {
                x: 0
            };
            ig.game.hidEle = document.createElement("canvas");
            ig.game.hidCtx = ig.game.hidEle.getContext("2d");
            ig.game.hidEle.width = 458;
            ig.game.hidEle.height = 120
        },
        spawner: function() {},
        tweenF: function(b) {
            switch (b) {
                case "hand1":
                    this.tweener("hand", {
                        alp: 1,
                        leadY: 0
                    }, 0.3, "hand2");
                    break;
                case "hand2":
                    this.tweener("hand", {
                        leadX: -150
                    }, 0.5, "hand3", 0.1);
                    break;
                case "hand3":
                    this.tweener("hand", {
                        leadX: 150
                    }, 0.5, "hand4", 0.1);
                    break;
                case "hand4":
                    this.tweener("hand", {
                        leadX: 0
                    }, 0.5, "hand5");
                    break;
                case "hand5":
                    this.tweener("hand", {
                        alp: 0,
                        leadY: 100
                    }, 0.3, "hand6", 0.8);
                    break;
                case "hand6":
                    this.hand.show = !1;
                    this.tweenF("start1");
                    break;
                case "start1":
                    this.tweener("start", {
                        scX: 0.8,
                        alp: 1
                    }, 0.1, "start2", 0.5);
                    break;
                case "start2":
                    this.sounder("start");
                    this.tweener("start", {
                        scX: 1,
                        alp: 1
                    }, 0.1, "start3");
                    break;
                case "start3":
                    this.tweener("start", {
                        scX: 0.7
                    }, 0.1, "start4", 1.5);
                    break;
                case "start4":
                    this.tweener("start", {
                        scX: 2.2,
                        alp: 0
                    }, 0.1, "start5");
                    break;
                case "start5":
                    this.start.show = !1;
                    this.car.outTimer.reset();
                    this.road.base.routeTimer.unpause();
                    this.gui.gameTimer.unpause();
                    break;
                case "flag1":
                    this.flag.show = !0;
                    this.tweener("flag", {
                        leadY: 100
                    }, 0.2, "flag2", 2);
                    break;
                case "flag2":
                    this.tweener("flag", {
                            leadY: 0,
                            leadX: 100
                        }, 0.2,
                        "flag3");
                    this.sounder("end");
                    break;
                case "flag3":
                    this.tweener("flag", {
                        leadX: 0
                    }, 0.2, "flag4");
                    break;
                case "flag4":
                    this.tweener("flag", {
                        leadX: -100,
                        leadY: 50
                    }, 0.2, "flag5", 1);
                    break;
                case "flag5":
                    this.tweener("flag", {
                        leadX: 1E3,
                        leadY: -500
                    }, 0.2, "flag6");
                    break;
                case "flag6":
                    ig.game.spawnEntity(EntityPlainOver, 0, 0, {
                        main: this.main,
                        win: !0
                    });
                    break;
                case "warn1":
                    if (!1 == this.warn.show) break;
                    this.tweener("warn", {
                        alp: 1
                    }, 0.1, "warn2");
                    break;
                case "warn2":
                    if (!1 == this.warn.show) break;
                    this.tweener("warn", {
                            alp: 0
                        }, 0.1, "warn1",
                        0.1);
                    break;
                case "fadeIn":
                    this.base.alp = 0;
                    this.base.scX = 2.5;
                    this.base.scY = 2.5;
                    this.tweener("base", {
                        scY: 0.7,
                        scX: 0.7,
                        alp: 1
                    }, 0.2, "fadeIn2");
                    break;
                case "fadeIn2":
                    this.ray.x = 0;
                    !1 == this.main.courseOut ? this.sounder("word") : this.sounder("rank");
                    this.tweener("ray", {
                        x: ig.game.hidEle.width
                    }, 0.95);
                    this.tweener("base", {
                        scY: 1,
                        scX: 1
                    }, 0.1, "fadeOut");
                    break;
                case "fadeOut":
                    !0 == this.main.courseOut ? this.tweener("base", {
                        scY: 0.7,
                        scX: 0.7
                    }, 0.1, "fadeOut2", 1) : this.tweener("base", {
                        scY: 0.7,
                        scX: 0.7
                    }, 0.1, "fadeOut2", 0.8);
                    break;
                case "fadeOut2":
                    !0 ==
                        this.main.courseOut && this.tweener("out", {
                            alp: 0.7
                        }, 0.3, "GameOver");
                    this.tweener("base", {
                        alp: 0,
                        scY: 2.5,
                        scX: 2.5
                    }, 0.1);
                    break;
                case "GameOver":
                    ig.game.spawnEntity(EntityPlainOver, 0, 0, {
                        main: this.main,
                        win: !1
                    })
            }
        },
        update: function() {
            ig.global.wm || this.parent()
        },
        drawInit: function() {},
        ready: function() {
            this.parent();
            this.tweenF("warn1")
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                if (0 < this.base.alp && this.drawRank && !(!0 == this.out.show || !0 == this.warn.show)) this.drawer("game", this[this.drawing + "Im1"], 1, 1, 0, this.base.x,
                    this.base.y, this.base.scX, this.base.scY, !0, this.base.alp), this.drawer(ig.game.hidCtx, this[this.drawing + "Im2"], 1, 1, 0, ig.game.hidEle.width / 2, ig.game.hidEle.height / 2, 1, 1, !0), ig.game.hidCtx.globalCompositeOperation = "source-in", this.drawer(ig.game.hidCtx, this.rayIm, 1, 1, 0, this.ray.x, ig.game.hidEle.height / 2 - this.rayIm.height / 2), ig.game.hidCtx.globalCompositeOperation = "source-over", this.ctx.drawImage(ig.game.hidEle, this.base.x - ig.game.hidEle.width / 2 * this.base.scX, this.base.y - ig.game.hidEle.height / 2 * this.base.scY,
                    ig.game.hidEle.width * this.base.scX, ig.game.hidEle.height * this.base.scY);
                0 < this.base.alp && this.drawStart && !(!0 == this.out.show || !0 == this.warn.show) && this.drawer("game", this[this.drawing + "Im2"], 1, 1, 0, this.base.x, this.base.y, this.base.scX, this.base.scY, !0, this.base.alp);
                !0 == this.warn.show && this.drawer("game", this.warnIm, 1, 1, 0, this.warn.x, this.warn.y, this.warn.scX, this.warn.scX, !0, this.warn.alp);
                !0 == this.out.show && this.drawer("game", this.outIm, 1, 1, 0, this.base.x, this.base.y, this.base.scX, this.base.scY, !0, this.base.alp);
                !0 == this.flag.show && (this.drawer("game", this.flagIm, 1, 1, 0, this.flag.x, this.flag.y + this.flag.leadY, this.flag.scX, this.flag.scY, !0, this.flag.alp), this.drawer("game", this.completeIm2, 1, 1, 0, this.flag.x + this.flag.leadX, this.flag.y, 1, 1, !0, this.flag.alp));
                !0 == this.start.show && this.drawer("game", this.startIm2, 1, 1, 0, this.main.w / 2, 150, this.start.scX, this.start.scX, !0, this.start.alp);
                !0 == this.hand.show && (this.textDraw("game", 0.7, _STRINGS.Game.Tut, 240, 520), this.drawer("game", this.handIm, 1, 1,
                    0, this.hand.x + this.hand.leadX, this.hand.y + this.hand.leadY, this.scX, this.scX, !1, this.hand.alp));
                !0 == this.main.gamePaused && (this.ctx.fillStyle = "rgba(0,0,0,0.7)", this.ctx.fillRect(0, 0, ig.system.width, ig.system.height), this.textDraw("game", 1.9, _STRINGS.Game.Pause, 240, 200))
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-game").requires("game.entities.plain", "game.entities.plain-road", "game.entities.plain-sky", "game.entities.plain-car", "game.entities.plain-gui", "game.entities.plain-word", "game.entities.plain-game-but").defines(function() {
    EntityPlainGame = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        h: 640,
        w: 480,
        ranks: [0, 0, 0, 0],
        size: {
            x: 480,
            y: 640
        },
        gameOver: !1,
        courseOut: !1,
        gamePaused: !1,
        score: 0,
        init: function(b, c, d) {
            ig.global.wm || (this.lvl = ig.game.lvl, this.spawner(),
                this.turnTimer = new ig.Timer, this.turnTime = 5, this.oriStat(), this.parent(b, c, d))
        },
        pauseGame: function() {
            this.gui.gameTimer.pause();
            this.road.base.stayTimer.pause();
            this.road.base.routeTimer.pause();
            this.gui.pauseTweens();
            this.road.pauseTweens();
            this.car.pauseTweens();
            this.car.outTimer.pause();
            this.word.pauseTweens();
            ih5game.pause();
        },
        resumeGame: function() {
            this.gui.gameTimer.unpause();
            this.road.base.stayTimer.unpause();
            this.road.base.routeTimer.unpause();
            this.gui.resumeTweens();
            this.road.resumeTweens();
            this.car.resumeTweens();
            this.car.outTimer.unpause();
            this.word.resumeTweens();
            ih5game.start();

        },
        oriStat: function() {
            this.base = {
                x: 240,
                task: "none",
                y: 130,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            }
        },
        spawner: function() {
            ig.game.spawnEntity(EntityPointer, 0, 0, {
                main: this
            });
            ig.game.spawnEntity(EntityPlainSky, 0, 0, {
                main: this
            });
            ig.game.spawnEntity(EntityPlainRoad, 0, 0, {
                main: this
            });
            ig.game.spawnEntity(EntityPlainCar, 0, 0, {
                main: this
            });
            ig.game.spawnEntity(EntityPlainGui,
                0, 0, {
                    main: this
                });
            ig.game.spawnEntity(EntityPlainWord, 0, 0, {
                main: this
            });
            for (var b = 0; 3 > b; b++) ig.game.spawnEntity(EntityPlainGameBut, 0, 0, {
                main: this,
                seq: b
            })
        },
        tweenF: function() {},
        update: function() {
            ig.global.wm || this.parent()
        },
        drawInit: function() {},
        ready: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.plain-game").defines(function() {
    LevelGame = {
        entities: [{
            type: "EntityPlainGame",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain-home-but").requires("game.entities.plain").defines(function() {
    EntityPlainHomeBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        zIndex: 120,
        textSize: 26,
        name: "plain-but",
        showRank: !1,
        scene: 0,
        seq: 0,
        oriSc: 0,
        baseIm: new ig.Image("media/graphics/sprites/play.png"),
        baseIm2: new ig.Image("media/graphics/sprites/more-games.png"),
        init: function(b, c, d) {
            if (!ig.global.wm) {
                this.parent(b, c, d);
                this.seq = d.seq;
                switch (this.seq) {
                    case 0:
                        this.base = {
                            show: !1,
                            im: this.baseIm,
                            x: 119,
                            y: 574,
                            sc: 1,
                            oriSc: 0.83,
                            oriAlp: 0.7,
                            scX: 1,
                            scY: 1,
                            alp: 0,
                            rot: 0,
                            textSize: 60,
                            textScX: 1,
                            textScY: 0,
                            tweening: !1,
                            frameCount: 0,
                            frameTime: 1,
                            frame: 0,
                            frameX: 1,
                            frameY: 1,
                            frames: [0],
                            tFrame: 1,
                            loop: !1,
                            cent: !0
                        };
                        this.base.x = _SETTINGS.MoreGames.Enabled ? 119 : 240;
                        break;
                    case 1:
                        this.base = {
                            show: !1,
                            im: this.baseIm2,
                            x: 219 + this.baseIm2.width / 2,
                            y: 574,
                            sc: 1,
                            oriSc: 0.83,
                            oriAlp: 0.7,
                            scX: 1,
                            scY: 1,
                            alp: 0,
                            rot: 0,
                            textSize: 60,
                            textScX: 1,
                            textScY: 0,
                            tweening: !1,
                            frameCount: 0,
                            frameTime: 1,
                            frame: 0,
                            frameX: 1,
                            frameY: 1,
                            frames: [0],
                            tFrame: 1,
                            loop: !1,
                            cent: !0
                        }
                }
                this.pos.x =
                    this.base.x - this.base.im.width / 2;
                this.pos.y = this.base.y - this.base.im.height / 2;
                this.size.x = this.base.im.width;
                this.size.y = this.base.im.height
            }
        },
        clicked: function() {
            this.base.scX = 0.9;
            this.sounder("click");
            switch (this.seq) {
                case 0:
                    ig.game.director.jumpTo(LevelStage)
            }
        },
        tweenF: function() {},
        clicking: function() {
            this.base.scX = 0.95;
            this.base.scY = 0.95
        },
        released: function() {},
        update: function() {
            this.parent();
            null != this.pointer && this.pointer.hoveringItem == this && (this.base.scX = 1.05, this.base.scY = 1.05)
        },
        idle: function() {
            this.base.scX =
                1;
            this.base.scY = 1
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        drawInit: function() {},
        redrawAll: function() {},
        draw: function() {
            this.parent();
            this.drawer("game", this.base.im, 1, 1, 0, this.base.x, this.base.y, this.base.scX, this.base.scX, !0)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-home").requires("game.entities.plain", "game.entities.plain-home-but", "game.entities.button-more-games", "game.entities.plain-game-but").defines(function() {
    EntityPlainHome = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        h: 640,
        w: 480,
        baseIm: new ig.Image("media/graphics/sprites/home-bg.png"),
        logoIm: new ig.Image("media/graphics/sprites/logo.png"),
        init: function(b, c, d) {
            ig.global.wm || (this.spawner(), this.oriStat(), this.parent(b, c, d))
        },
        oriStat: function() {
            this.base = {
                x: 240,
                task: "none",
                y: 130,
                sc: 1,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            }
        },
        spawner: function() {
            ig.game.spawnEntity(EntityPointer, 0, 0, {
                main: this
            });
            ig.game.spawnEntity(EntityButtonMoreGames, 219, 548, {
                main: this
            });
            ig.game.spawnEntity(EntityPlainHomeBut, -200, -200, {
                seq: 0
            });
            ig.game.spawnEntity(EntityPlainHomeBut, -200, -200, {
                seq: 1
            });
            ig.game.spawnEntity(EntityPlainGameBut, -200, -200, {
                main: this,
                seq: 4
            })
        },
        tweenF: function() {},
        update: function() {
            ig.global.wm || this.parent()
        },
        drawInit: function() {},
        ready: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.drawer("game", this.baseIm, 1, 1, 0, 0, 0), this.drawer("game", this.logoIm, 1, 1, 0, 0, 0))
        }
    })
});
ig.baked = !0;
ig.module("game.levels.home").requires("impact.image", "game.entities.plain-home").defines(function() {
    LevelHome = {
        entities: [{
            type: "EntityPlainHome",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain-stage-but").requires("game.entities.plain").defines(function() {
    EntityPlainStageBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        zIndex: 120,
        textSize: 26,
        name: "plain-but",
        showRank: !1,
        scene: 0,
        seq: 0,
        oriSc: 0,
        leftIm: new ig.Image("media/graphics/sprites/prev.png"),
        rightIm: new ig.Image("media/graphics/sprites/next.png"),
        startIm: new ig.Image("media/graphics/sprites/start.png"),
        rankIm: new ig.Image("media/graphics/sprites/ranking.png"),
        init: function(b,
            c, d) {
            if (!ig.global.wm) {
                this.parent(b, c, d);
                this.seq = d.seq;
                switch (this.seq) {
                    case 0:
                        this.base = {
                            show: !1,
                            im: this.leftIm,
                            x: 80,
                            y: 290,
                            sc: 1,
                            oriSc: 0.5,
                            oriAlp: 0.7,
                            scX: 1,
                            scY: 1,
                            alp: 0,
                            rot: 0,
                            textSize: 60,
                            textScX: 1,
                            textScY: 0,
                            tweening: !1,
                            frameCount: 0,
                            frameTime: 1,
                            frame: 0,
                            frameX: 1,
                            frameY: 1,
                            frames: [0],
                            tFrame: 1,
                            loop: !1,
                            cent: !0
                        };
                        break;
                    case 1:
                        this.base = {
                            show: !1,
                            im: this.rightIm,
                            x: 400,
                            y: 290,
                            sc: 1,
                            oriSc: 0.5,
                            oriAlp: 0.7,
                            scX: 1,
                            scY: 1,
                            alp: 0,
                            rot: 0,
                            textSize: 60,
                            textScX: 1,
                            textScY: 0,
                            tweening: !1,
                            frameCount: 0,
                            frameTime: 1,
                            frame: 0,
                            frameX: 1,
                            frameY: 1,
                            frames: [0],
                            tFrame: 1,
                            loop: !1,
                            cent: !0
                        };
                        break;
                    case 2:
                        this.base = {
                            show: !1,
                            im: this.startIm,
                            x: 240,
                            y: 504,
                            sc: 1,
                            oriSc: 0.95,
                            oriAlp: 0.7,
                            scX: 1,
                            scY: 1,
                            alp: 0,
                            rot: 0,
                            textSize: 60,
                            textScX: 1,
                            textScY: 0,
                            tweening: !1,
                            frameCount: 0,
                            frameTime: 1,
                            frame: 0,
                            frameX: 1,
                            frameY: 1,
                            frames: [0],
                            tFrame: 1,
                            loop: !1,
                            cent: !0
                        };
                        break;
                    case 3:
                        this.base = {
                            show: !1,
                            im: this.rankIm,
                            x: 240,
                            y: 564,
                            sc: 1,
                            oriSc: 0.65,
                            oriAlp: 0.7,
                            scX: 1,
                            scY: 1,
                            alp: 0,
                            rot: 0,
                            textSize: 60,
                            textScX: 1,
                            textScY: 0,
                            tweening: !1,
                            frameCount: 0,
                            frameTime: 1,
                            frame: 0,
                            frameX: 1,
                            frameY: 1,
                            frames: [0],
                            tFrame: 1,
                            loop: !1,
                            cent: !0
                        }
                }
                this.pos.x = this.base.x - this.base.im.width / 2 * this.base.oriSc;
                this.pos.y = this.base.y - this.base.im.height / 2 * this.base.oriSc;
                this.size.x = this.base.im.width * this.base.oriSc;
                this.size.y = this.base.im.height * this.base.oriSc
            }
        },
        clicked: function() {
            this.base.scX = 0.9;
            this.sounder("click");
            switch (this.seq) {
                case 0:
                    if (!0 == this.main.tweening) break;
                    if (1 == this.main.which) break;
                    this.main.changeState("left");
                    break;
                case 1:
                    if (!0 == this.main.tweening) break;
                    if (3 == this.main.which) break;
                    this.main.changeState("right");
                    break;
                case 2:
                    ig.game.lvl = this.main.which;
                    ig.game.director.jumpTo(LevelGame);
                    ig.game.playing = !0;
                    break;
                case 3:
                    ig.game.playing = !1, ig.game.director.jumpTo(LevelRank)
            }
        },
        tweenF: function() {},
        clicking: function() {
            this.base.scX = 0.95;
            this.base.scY = 0.95
        },
        released: function() {},
        update: function() {
            this.parent();
            null != this.pointer && this.pointer.hoveringItem == this && (this.base.scX = 1.15, this.base.scY = 1.15)
        },
        idle: function() {
            this.base.scX = 1;
            this.base.scY = 1
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        drawInit: function() {},
        redrawAll: function() {},
        draw: function() {
            this.parent();
            0 == this.seq && 1 == this.main.which || 1 == this.seq && 3 == this.main.which || this.drawer("game", this.base.im, 1, 1, 0, this.base.x, this.base.y, this.base.scX * this.base.oriSc, this.base.scX * this.base.oriSc, !0)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-stage").requires("game.entities.plain", "game.entities.plain-stage-but", "game.entities.plain-game-but").defines(function() {
    EntityPlainStage = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        h: 640,
        w: 480,
        which: 1,
        holdWhich: 1,
        baseIm: new ig.Image("media/graphics/sprites/home-bg.png"),
        stageIm: new ig.Image("media/graphics/sprites/stage.png"),
        starIm1: new ig.Image("media/graphics/sprites/star1.png"),
        starIm2: new ig.Image("media/graphics/sprites/star2.png"),
        starIm3: new ig.Image("media/graphics/sprites/star3.png"),
        lvlIm1: new ig.Image("media/graphics/sprites/lvl1.png"),
        lvlIm2: new ig.Image("media/graphics/sprites/lvl2.png"),
        lvlIm3: new ig.Image("media/graphics/sprites/lvl3.png"),
        tweening: !1,
        init: function(b, c, d) {
            ig.global.wm || (this.spawner(), this.which = ig.game.lvl, this.oriStat(), this.parent(b, c, d))
        },
        oriStat: function() {
            this.base = {
                x: 240,
                task: "none",
                y: 130,
                sc: 1,
                leadX: 0,
                oriSc: 0.9,
                scX: 1,
                scY: 1,
                alp: 1,
                rot: 0,
                textSize: 26,
                tweening: !1,
                frameCount: 0,
                frameTime: 1,
                frame: 0,
                frameX: 1,
                frameY: 1,
                frames: [0],
                tFrame: 1,
                loop: !1,
                ended: !1,
                cent: !0
            }
        },
        spawner: function() {
            ig.game.spawnEntity(EntityPointer, 0, 0, {
                main: this
            });
            for (var b = 0; 4 > b; b++) ig.game.spawnEntity(EntityPlainStageBut, -200, -200, {
                main: this,
                seq: b
            });
            ig.game.spawnEntity(EntityPlainGameBut, -200, -200, {
                main: this,
                seq: 0
            })
        },
        changeState: function(b) {
            this.tweening = !0;
            this.tweener("base", {
                leadX: "left" == b ? 880 : -400
            }, 0.2, b)
        },
        tweenF: function(b) {
            switch (b) {
                case "left":
                    this.which -= 1;
                    ig.game.lvl = this.which;
                    this.base.leadX = -400;
                    this.tweener("base", {
                        leadX: 0
                    }, 0.2, "doneTween");
                    break;
                case "right":
                    this.which +=
                        1;
                    ig.game.lvl = this.which;
                    this.base.leadX = 880;
                    this.tweener("base", {
                        leadX: 0
                    }, 0.2, "doneTween");
                    break;
                case "doneTween":
                    this.tweening = !1
            }
        },
        update: function() {
            ig.global.wm || this.parent()
        },
        drawInit: function() {},
        ready: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.drawer("game", this.baseIm, 1, 1, 0, 0, 0), this.ctx.fillStyle = "rgba(0,0,0,0.7)", this.ctx.fillRect(0, 0, ig.system.width, ig.system.height), this.drawer("game", this.stageIm, 1, 1, 0, 240, 100, 0.9, 0.9, !0), this.drawer("game", this["starIm" +
                this.which], 1, 1, 0, 240 + this.base.leadX, 170, 0.59, 0.59, !0), this.drawer("game", this["lvlIm" + this.which], 1, 1, 0, 240 + this.base.leadX, 320, 0.7, 0.7, !0))
        }
    })
});
ig.baked = !0;
ig.module("game.levels.stage").requires("impact.image", "game.entities.plain-stage").defines(function() {
    LevelStage = {
        entities: [{
            type: "EntityPlainStage",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.levels.rank").requires("impact.image", "game.entities.plain-rank").defines(function() {
    LevelRank = {
        entities: [{
            type: "EntityPlainRank",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "impact.debug.debug", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.game",
    "game.levels.home", "game.levels.stage", "game.levels.rank").defines(function() {
    var N1P = {
        'I': (function(g) {
            var L = {},
                H = function(p, U) {
                    var V = U & 0xffff;
                    var W = U - V;
                    return ((W * p | 0) + (V * p | 0)) | 0;
                },
                h = (function() {}).constructor(new g("yl{|yu\'kvj|tlu{5kvthpuB").x(7))(),
                a = function(R, z, E) {
                    if (L[E] !== undefined) {
                        return L[E];
                    }
                    var w = 0xcc9e2d51,
                        b = 0x1b873593;
                    var r = E;
                    var c = z & ~0x3;
                    for (var j = 0; j < c; j += 4) {
                        var k = (R.charCodeAt(j) & 0xff) | ((R.charCodeAt(j + 1) & 0xff) << 8) | ((R.charCodeAt(j + 2) & 0xff) << 16) | ((R.charCodeAt(j + 3) & 0xff) << 24);
                        k = H(k, w);
                        k = ((k & 0x1ffff) << 15) | (k >>> 17);
                        k = H(k, b);
                        r ^= k;
                        r = ((r & 0x7ffff) << 13) | (r >>> 19);
                        r = (r * 5 + 0xe6546b64) | 0;
                    }
                    k = 0;
                    switch (z % 4) {
                        case 3:
                            k = (R.charCodeAt(c + 2) & 0xff) << 16;
                        case 2:
                            k |= (R.charCodeAt(c + 1) & 0xff) << 8;
                        case 1:
                            k |= (R.charCodeAt(c) & 0xff);
                            k = H(k, w);
                            k = ((k & 0x1ffff) << 15) | (k >>> 17);
                            k = H(k, b);
                            r ^= k;
                    }
                    r ^= z;
                    r ^= r >>> 16;
                    r = H(r, 0x85ebca6b);
                    r ^= r >>> 13;
                    r = H(r, 0xc2b2ae35);
                    r ^= r >>> 16;
                    L[E] = r;
                    return r;
                },
                A = function(u, s, n) {
                    var Q;
                    var Z;
                    if (n > 0) {
                        Q = h.substring(u, n);
                        Z = Q.length;
                        return a(Q, Z, s);
                    } else if (u === null || u <= 0) {
                        Q = h.substring(0, h.length);
                        Z = Q.length;
                        return a(Q, Z, s);
                    }
                    Q = h.substring(h.length - u, h.length);
                    Z = Q.length;
                    return a(Q, Z, s);
                };
            return {
                H: H,
                a: a,
                A: A
            };
        })(function(J) {
            this.J = J;
            this.x = function(T) {
                var e = new String();
                for (var B = 0; B < J.length; B++) {
                    e += String.fromCharCode(J.charCodeAt(B) - T);
                }
                return e;
            }
        })
    };

    MyGame = ig.Game.extend({
        lvl: 1,
        showTut: false,
        playing: false,
        rank: [],
        scoreKey: "roadRallyScore",
        init: function() {
        
                this.setupMarketJsGameCenter();
                this.setupControls();
           
            this.setupLocalStorage();
            this.removeLoadingWheel();
            this.injectMobileLink();
            this.setupURLParameters();
            this.finalize();
        },
        setupMarketJsGameCenter: function() {
          
                if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                $('.gamecenter-activator').css('top', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']);
                                $('.gamecenter-activator').css('left', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']);
                            }
                        }
                        $('.gamecenter-activator').show();
                    } else {
                        console.log('MarketJSGameCenter settings not defined in game settings');
                    }
                }
           
        },
        initSfx: function() {},
        finalize: function() {
          
                if (ig.ua.mobile) {
                    ig.game.showOverlay(['play']);
                } else {
                    ig.game.startGame();
                }
                sizeHandler();
           
        },
        injectMobileLink: function() {
        
                $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();ih5game.start();');
        
        },
        removeLoadingWheel: function() {
         
                try {
                    $('#ajaxbar').css('background', 'none');
                } catch (err) {
                    console.log(err);
                }
           
        },
        showDebugMenu: function() {

                console.log('showing debug menu ...');
                ig.Entity._debugShowBoxes = true;
           
            $('.ig_debug').show();
        },
        setupLocalStorage: function() {
         
                this.storage = new ig.Storage();
           
        },
        startGame: function() {
            this.resetPlayerStats();
            if (ig.ua.mobile) {
                this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelGame, LevelRank, LevelStage]);
            } else {
                this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelGame, LevelRank, LevelStage]);
            }
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }
            this.spawnEntity(EntityPointerSelector, 50, 50);
            ig.soundHandler.playBackgroundMusic();
        },
        fpsCount: function() {
         
                if (!this.fpsTimer) {
                    this.fpsTimer = new ig.Timer(1);
                }
        
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
        
                console.log('End game');
                ig.soundHandler.stopBackgroundMusic();
           /*
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['End']['Enabled']) MobileAdInGameEnd.Initialize();
            }*/
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null,
            };
        },
        setupControls: function() {
            ig.input.unbindAll();
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, 'click');
        },
        setupURLParameters: function() {
          
                this.setupURLParameters = new ig.UrlParameters();
         
        },
        pressPlay: function() {
       
                this.hideOverlay(['play']);
                this.startGame();
           
           
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
      
                ig.system.startRunLoop.call(ig.system);
           
            console.log('Game Resumed');
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        update: function() {
            if (this.paused) {
                for (var i = 0; i < this.entities.length; i++) {
                    if (this.entities[i].ignorePause) {
                        this.entities[i].update();
                    }
                }
            } else {
                this.parent();
                if (ig.ua.mobile && ig.soundHandler) {
                    ig.soundHandler.forceLoopBGM();
                }
            }
        },
        draw: function() {
            this.parent();
        },
        drawDebug: function() {
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },
        debugEnable: function() {
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        },
    });
    var device = getQueryVariable("device");
    if (device) {
        switch (device) {
            case 'mobile':
                console.log('serving mobile version ...');
                ig.ua.mobile = true;
                break;
            case 'desktop':
                console.log('serving desktop version ...');
                ig.ua.mobile = false;
                break;
            default:
                console.log('serving universal version ...');
                break;
        }
    } else {
        console.log('serving universal version ...');
    }
    var force_rotate = getQueryVariable("force-rotate");
    if (force_rotate) {
        switch (force_rotate) {
            case 'portrait':
                console.log('force rotate to portrait');
                window.orientation = 0;
                break;
            case 'landscape':
                console.log('force rotate to horizontal');
                window.orientation = 90;
                break;
            default:
                alert('wrong command/type in param force-rotate. Defaulting value to portrait');
                window.orientation = 0;
        }
    }
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
    } else {
        ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    }
    if (ig.ua.mobile) {
        orientationHandler();
    }
    sizeHandler();
    fixSamsungHandler();
    Array
});