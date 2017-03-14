/*
Copyright 2014, KISSY v1.4.10
MIT Licensed
build time: Dec 10 15:06
*/
var KISSY = function(a) {
    function e(a) {
        var k = {},
            e;
        for (e in m)(function(b, g) {
            b[g] = function(c) {
                return h.log(c, g, a)
            }
        })(k, e);
        return k
    }
    var h, l = 0,
        m = {
            debug: 10,
            info: 20,
            warn: 30,
            error: 40
        };
    h = {
        __BUILD_TIME: "20141210150549",
        Env: {
            host: this
        },
        Config: {
            debug: "",
            fns: {}
        },
        version: "1.4.10",
        config: function(d, e) {
            var j, b, g = this,
                c, f = h.Config,
                s = f.fns;
            h.isObject(d) ? h.each(d, function(a, n) {
                (c = s[n]) ? c.call(g, a): f[n] = a
            }) : (j = s[d], e === a ? b = j ? j.call(g) : f[d] : j ? b = j.call(g, e) : f[d] = e);
            return b
        },
        log: function() {
            return a
        },
        getLogger: function(a) {
            return e(a)
        },
        error: function() {},
        guid: function(a) {
            return (a || "") + l++
        },
        Logger: {}
    };
    h.Logger.Level = {
        DEBUG: "debug",
        INFO: "info",
        WARN: "warn",
        ERROR: "error"
    };
    return h
}();
(function(a, e) {
    function h() {}

    function l(g, i, c, f, b, k) {
        if (!i || !g) return g;
        var t, q, v, p;
        i[d] = g;
        k.push(i);
        v = a.keys(i);
        p = v.length;
        for (t = 0; t < p; t++)
            if (q = v[t], q !== d) {
                var h = g,
                    m = i,
                    x = c,
                    F = f,
                    H = b,
                    K = k;
                if (x || !(q in h) || H) {
                    var y = h[q],
                        w = m[q];
                    if (y === w) y === e && (h[q] = y);
                    else if (F && (w = F.call(m, q, w)), H && w && (a.isArray(w) || a.isPlainObject(w))) w[d] ? h[q] = w[d] : (m = y && (a.isArray(y) || a.isPlainObject(y)) ? y : a.isArray(w) ? [] : {}, h[q] = m, l(m, w, x, F, j, K));
                    else if (w !== e && (x || !(q in h))) h[q] = w
                }
            }
        return g
    }

    function m(a, i) {
        return "constructor" ===
            a ? e : i
    }
    var d = "__MIX_CIRCULAR",
        k = this,
        j = !0,
        b = Object,
        g = b.create,
        c = !{
            toString: 1
        }.propertyIsEnumerable("toString"),
        f = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toString,toLocaleString,valueOf".split(",");
    (function(a, i) {
        for (var g in i) a[g] = i[g]
    })(a, {
        stamp: function(g, i, c) {
            var c = c || "__~ks_stamped",
                f = g[c];
            if (!f && !i) try {
                f = g[c] = a.guid(c)
            } catch (b) {
                f = e
            }
            return f
        },
        keys: b.keys || function(a) {
            var i = [],
                g, b;
            for (g in a) a.hasOwnProperty(g) && i.push(g);
            if (c)
                for (b = f.length - 1; 0 <= b; b--) g = f[b], a.hasOwnProperty(g) &&
                    i.push(g);
            return i
        },
        mix: function(g, i, c, f, b) {
            "object" === typeof c && (f = c.whitelist, b = c.deep, c = c.overwrite);
            if (f && "function" !== typeof f) var h = f,
                f = function(i, g) {
                    return a.inArray(i, h) ? g : e
                };
            c === e && (c = j);
            var t = [],
                q = 0;
            for (l(g, i, c, f, b, t); i = t[q++];) delete i[d];
            return g
        },
        merge: function(g) {
            var g = a.makeArray(arguments),
                i = {},
                c, f = g.length;
            for (c = 0; c < f; c++) a.mix(i, g[c]);
            return i
        },
        augment: function(g, i) {
            var c = a.makeArray(arguments),
                f = c.length - 2,
                b = 1,
                d, t, q = c[f],
                v = c[f + 1];
            c[1] = i;
            a.isArray(v) || (q = v, v = e, f++);
            "boolean" !== typeof q &&
                (q = e, f++);
            for (; b < f; b++) {
                t = c[b];
                if (d = t.prototype) t = a.mix({}, d, !0, m);
                a.mix(g.prototype, t, q, v)
            }
            return g
        },
        extend: function(c, i, f, b) {
            var d = i.prototype;
            d.constructor = i;
            g ? i = g(d) : (h.prototype = d, i = new h);
            i.constructor = c;
            c.prototype = a.mix(i, c.prototype);
            c.superclass = d;
            f && a.mix(i, f);
            b && a.mix(c, b);
            return c
        },
        namespace: function() {
            var g = a.makeArray(arguments),
                i = g.length,
                c = null,
                f, b, d, t = g[i - 1] === j && i--;
            for (f = 0; f < i; f++) {
                d = ("" + g[f]).split(".");
                c = t ? k : this;
                for (b = k[d[0]] === c ? 1 : 0; b < d.length; ++b) c = c[d[b]] = c[d[b]] || {}
            }
            return c
        }
    })
})(KISSY);
(function(a, e) {
    var h = Array.prototype,
        l = h.indexOf,
        m = h.lastIndexOf,
        d = h.filter,
        k = h.every,
        j = h.some,
        b = h.map;
    a.mix(a, {
        each: function(g, c, f) {
            if (g) {
                var b, i, d = 0;
                b = g && g.length;
                i = b === e || "function" === a.type(g);
                f = f || null;
                if (i)
                    for (i = a.keys(g); d < i.length && !(b = i[d], !1 === c.call(f, g[b], b, g)); d++);
                else
                    for (i = g[0]; d < b && !1 !== c.call(f, i, d, g); i = g[++d]);
            }
            return g
        },
        indexOf: l ? function(a, c) {
            return l.call(c, a)
        } : function(a, c) {
            for (var f = 0, b = c.length; f < b; ++f)
                if (c[f] === a) return f;
            return -1
        },
        lastIndexOf: m ? function(a, c) {
            return m.call(c,
                a)
        } : function(a, c) {
            for (var f = c.length - 1; 0 <= f && c[f] !== a; f--);
            return f
        },
        unique: function(g, c) {
            var f = g.slice();
            c && f.reverse();
            for (var b = 0, i, d; b < f.length;) {
                for (d = f[b];
                    (i = a.lastIndexOf(d, f)) !== b;) f.splice(i, 1);
                b += 1
            }
            c && f.reverse();
            return f
        },
        inArray: function(g, c) {
            return -1 < a.indexOf(g, c)
        },
        filter: d ? function(a, c, f) {
            return d.call(a, c, f || this)
        } : function(g, c, f) {
            var b = [];
            a.each(g, function(a, g, d) {
                c.call(f || this, a, g, d) && b.push(a)
            });
            return b
        },
        map: b ? function(a, c, f) {
            return b.call(a, c, f || this)
        } : function(a, c, f) {
            for (var b =
                    a.length, i = Array(b), d = 0; d < b; d++) {
                var e = "string" === typeof a ? a.charAt(d) : a[d];
                if (e || d in a) i[d] = c.call(f || this, e, d, a)
            }
            return i
        },
        reduce: function(a, c, f) {
            var b = a.length;
            if ("function" !== typeof c) throw new TypeError("callback is not function!");
            if (0 === b && 2 === arguments.length) throw new TypeError("arguments invalid");
            var i = 0,
                d;
            if (3 <= arguments.length) d = f;
            else {
                do {
                    if (i in a) {
                        d = a[i++];
                        break
                    }
                    i += 1;
                    if (i >= b) throw new TypeError;
                } while (1)
            }
            for (; i < b;) i in a && (d = c.call(e, d, a[i], i, a)), i++;
            return d
        },
        every: k ? function(a, c,
            f) {
            return k.call(a, c, f || this)
        } : function(a, c, f) {
            for (var b = a && a.length || 0, i = 0; i < b; i++)
                if (i in a && !c.call(f, a[i], i, a)) return !1;
            return !0
        },
        some: j ? function(a, c, f) {
            return j.call(a, c, f || this)
        } : function(a, c, f) {
            for (var b = a && a.length || 0, i = 0; i < b; i++)
                if (i in a && c.call(f, a[i], i, a)) return !0;
            return !1
        },
        makeArray: function(b) {
            if (null == b) return [];
            if (a.isArray(b)) return b;
            var c = typeof b.length,
                f = typeof b;
            if ("number" !== c || b.alert || "string" === f || "function" === f && !("item" in b && "number" === c)) return [b];
            for (var c = [], f = 0, d = b.length; f <
                d; f++) c[f] = b[f];
            return c
        }
    })
})(KISSY);
(function(a, e) {
    function h(a) {
        var c = typeof a;
        return null == a || "object" !== c && "function" !== c
    }

    function l() {
        if (b) return b;
        var c = d;
        a.each(k, function(a) {
            c += a + "|"
        });
        c = c.slice(0, -1);
        return b = RegExp(c, "g")
    }

    function m() {
        if (g) return g;
        var c = d;
        a.each(j, function(a) {
            c += a + "|"
        });
        c += "&#(\\d{1,5});";
        return g = RegExp(c, "g")
    }
    var d = "",
        k = {
            "&amp;": "&",
            "&gt;": ">",
            "&lt;": "<",
            "&#x60;": "`",
            "&#x2F;": "/",
            "&quot;": '"',
            "&#x27;": "'"
        },
        j = {},
        b, g, c = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
    (function() {
        for (var a in k) j[k[a]] = a
    })();
    a.mix(a, {
        urlEncode: function(a) {
            return encodeURIComponent("" +
                a)
        },
        urlDecode: function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        fromUnicode: function(a) {
            return a.replace(/\\u([a-f\d]{4})/ig, function(a, c) {
                return String.fromCharCode(parseInt(c, 16))
            })
        },
        escapeHtml: function(a) {
            return (a + "").replace(l(), function(a) {
                return j[a]
            })
        },
        escapeRegExp: function(a) {
            return a.replace(c, "\\$&")
        },
        unEscapeHtml: function(a) {
            return a.replace(m(), function(a, c) {
                return k[a] || String.fromCharCode(+c)
            })
        },
        param: function(c, b, i, g) {
            b = b || "&";
            i = i || "=";
            g === e && (g = !0);
            var k = [],
                r, j, t, q, v, p =
                a.urlEncode;
            for (r in c)
                if (v = c[r], r = p(r), h(v)) k.push(r), v !== e && k.push(i, p(v + d)), k.push(b);
                else if (a.isArray(v) && v.length) {
                j = 0;
                for (q = v.length; j < q; ++j) t = v[j], h(t) && (k.push(r, g ? p("[]") : d), t !== e && k.push(i, p(t + d)), k.push(b))
            }
            k.pop();
            return k.join(d)
        },
        unparam: function(c, b, i) {
            if ("string" !== typeof c || !(c = a.trim(c))) return {};
            for (var i = i || "=", d = {}, g, k = a.urlDecode, c = c.split(b || "&"), h = 0, t = c.length; h < t; ++h) {
                g = c[h].indexOf(i);
                if (-1 === g) b = k(c[h]), g = e;
                else {
                    b = k(c[h].substring(0, g));
                    g = c[h].substring(g + 1);
                    try {
                        g = k(g)
                    } catch (q) {}
                    a.endsWith(b,
                        "[]") && (b = b.substring(0, b.length - 2))
                }
                b in d ? a.isArray(d[b]) ? d[b].push(g) : d[b] = [d[b], g] : d[b] = g
            }
            return d
        }
    });
    a.escapeHTML = a.escapeHtml;
    a.unEscapeHTML = a.unEscapeHtml
})(KISSY);
(function(a) {
    function e(a, e, m) {
        function d() {}
        var k = [].slice,
            j = k.call(arguments, 3),
            b = function() {
                var b = k.call(arguments);
                return e.apply(this instanceof d ? this : m || this, a ? b.concat(j) : j.concat(b))
            };
        d.prototype = e.prototype;
        b.prototype = new d;
        return b
    }
    a.mix(a, {
        noop: function() {},
        bind: e(0, e, null, 0),
        rbind: e(0, e, null, 1),
        later: function(e, l, m, d, k) {
            var l = l || 0,
                j = e,
                b = a.makeArray(k),
                g;
            "string" === typeof e && (j = d[e]);
            e = function() {
                j.apply(d, b)
            };
            g = m ? setInterval(e, l) : setTimeout(e, l);
            return {
                id: g,
                interval: m,
                cancel: function() {
                    this.interval ?
                        clearInterval(g) : clearTimeout(g)
                }
            }
        },
        throttle: function(e, l, m) {
            l = l || 150;
            if (-1 === l) return function() {
                e.apply(m || this, arguments)
            };
            var d = a.now();
            return function() {
                var k = a.now();
                k - d > l && (d = k, e.apply(m || this, arguments))
            }
        },
        buffer: function(e, l, m) {
            function d() {
                d.stop();
                k = a.later(e, l, 0, m || this, arguments)
            }
            l = l || 150;
            if (-1 === l) return function() {
                e.apply(m || this, arguments)
            };
            var k = null;
            d.stop = function() {
                k && (k.cancel(), k = 0)
            };
            return d
        }
    })
})(KISSY);
(function(a, e) {
    function h(b, g, c) {
        var f = b,
            e, i, n, j;
        if (!b) return f;
        if (b[k]) return c[b[k]].destination;
        if ("object" === typeof b) {
            j = b.constructor;
            if (a.inArray(j, [Boolean, String, Number, Date, RegExp])) f = new j(b.valueOf());
            else if (e = a.isArray(b)) f = g ? a.filter(b, g) : b.concat();
            else if (i = a.isPlainObject(b)) f = {};
            b[k] = j = a.guid("c");
            c[j] = {
                destination: f,
                input: b
            }
        }
        if (e)
            for (b = 0; b < f.length; b++) f[b] = h(f[b], g, c);
        else if (i)
            for (n in b)
                if (n !== k && (!g || g.call(b, b[n], n, b) !== d)) f[n] = h(b[n], g, c);
        return f
    }

    function l(b, d, c, f) {
        if (b[j] ===
            d && d[j] === b) return m;
        b[j] = d;
        d[j] = b;
        var k = function(a, c) {
                return null !== a && a !== e && a[c] !== e
            },
            i;
        for (i in d) !k(b, i) && k(d, i) && c.push("expected has key " + i + '", but missing from actual.');
        for (i in b) !k(d, i) && k(b, i) && c.push('expected missing key "' + i + '", but present in actual.');
        for (i in d) i !== j && (a.equals(b[i], d[i], c, f) || f.push('"' + i + '" was "' + (d[i] ? d[i].toString() : d[i]) + '" in expected, but was "' + (b[i] ? b[i].toString() : b[i]) + '" in actual.'));
        a.isArray(b) && a.isArray(d) && b.length !== d.length && f.push("arrays were not the same length");
        delete b[j];
        delete d[j];
        return 0 === c.length && 0 === f.length
    }
    var m = !0,
        d = !1,
        k = "__~ks_cloned",
        j = "__~ks_compared";
    a.mix(a, {
        equals: function(a, d, c, f) {
            c = c || [];
            f = f || [];
            return a === d ? m : a === e || null === a || d === e || null === d ? null == a && null == d : a instanceof Date && d instanceof Date ? a.getTime() === d.getTime() : "string" === typeof a && "string" === typeof d || "number" === typeof a && "number" === typeof d ? a === d : "object" === typeof a && "object" === typeof d ? l(a, d, c, f) : a === d
        },
        clone: function(b, d) {
            var c = {},
                f = h(b, d, c);
            a.each(c, function(a) {
                a = a.input;
                if (a[k]) try {
                    delete a[k]
                } catch (c) {
                    a[k] = e
                }
            });
            c = null;
            return f
        },
        now: Date.now || function() {
            return +new Date
        }
    })
})(KISSY);
(function(a, e) {
    var h = /^[\s\xa0]+|[\s\xa0]+$/g,
        l = String.prototype.trim,
        m = /\\?\{([^{}]+)\}/g;
    a.mix(a, {
        trim: l ? function(a) {
            return null == a ? "" : l.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(h, "")
        },
        substitute: function(a, k, j) {
            return "string" !== typeof a || !k ? a : a.replace(j || m, function(a, d) {
                return "\\" === a.charAt(0) ? a.slice(1) : k[d] === e ? "" : k[d]
            })
        },
        ucfirst: function(a) {
            a += "";
            return a.charAt(0).toUpperCase() + a.substring(1)
        },
        startsWith: function(a, e) {
            return 0 === a.lastIndexOf(e, 0)
        },
        endsWith: function(a, e) {
            var j =
                a.length - e.length;
            return 0 <= j && a.indexOf(e, j) === j
        }
    })
})(KISSY);
(function(a, e) {
    var h = {},
        l = Object.prototype,
        m = l.toString;
    a.mix(a, {
        type: function(a) {
            return null == a ? "" + a : h[m.call(a)] || "object"
        },
        isNull: function(a) {
            return null === a
        },
        isUndefined: function(a) {
            return a === e
        },
        isEmptyObject: function(a) {
            for (var k in a)
                if (k !== e) return !1;
            return !0
        },
        isPlainObject: function(d) {
            if (!d || "object" !== a.type(d) || d.nodeType || d.window == d) return !1;
            var k, j;
            try {
                if ((j = d.constructor) && !l.hasOwnProperty.call(d, "constructor") && !l.hasOwnProperty.call(j.prototype, "isPrototypeOf")) return !1
            } catch (b) {
                return !1
            }
            for (k in d);
            return k === e || l.hasOwnProperty.call(d, k)
        }
    });
    a.each("Boolean,Number,String,Function,Date,RegExp,Object,Array".split(","), function(d, e) {
        h["[object " + d + "]"] = e = d.toLowerCase();
        a["is" + d] = function(d) {
            return a.type(d) === e
        }
    });
    a.isArray = Array.isArray || a.isArray
})(KISSY);
(function(a) {
    function e() {
        for (var a = 0, b; b = h[a++];) try {
            b()
        } catch (d) {
            setTimeout(function() {
                throw d;
            }, 0)
        }
        1 < a && (h = []);
        l = 0
    }
    var h = [],
        l = 0;
    a.setImmediate = function(a) {
        h.push(a);
        l || (l = 1, m())
    };
    var m;
    if ("function" === typeof setImmediate) m = function() {
        setImmediate(e)
    };
    else if ("undefined" !== typeof process && "function" === typeof process.nextTick) m = function() {
        process.nextTick(e)
    };
    else if ("undefined" !== typeof MessageChannel) {
        var d = new MessageChannel;
        d.port1.onmessage = function() {
            m = k;
            d.port1.onmessage = e;
            e()
        };
        var k = function() {
            d.port2.postMessage(0)
        };
        m = function() {
            setTimeout(e, 0);
            k()
        }
    } else m = function() {
        setTimeout(e, 0)
    }
})(KISSY);
(function(a) {
    function e(a, d) {
        for (var e = 0, h = a.length - 1, b = [], g; 0 <= h; h--) g = a[h], "." !== g && (".." === g ? e++ : e ? e-- : b[b.length] = g);
        if (d)
            for (; e--; e) b[b.length] = "..";
        return b = b.reverse()
    }
    var h = /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/,
        l = a.Path = {
            resolve: function() {
                var h = "",
                    d, k = arguments,
                    j, b = 0;
                for (d = k.length - 1; 0 <= d && !b; d--) j = k[d], "string" === typeof j && j && (h = j + "/" + h, b = "/" === j.charAt(0));
                h = e(a.filter(h.split("/"), function(a) {
                    return !!a
                }), !b).join("/");
                return (b ? "/" : "") + h || "."
            },
            normalize: function(h) {
                var d =
                    "/" === h.charAt(0),
                    k = "/" === h.slice(-1),
                    h = e(a.filter(h.split("/"), function(a) {
                        return !!a
                    }), !d).join("/");
                !h && !d && (h = ".");
                h && k && (h += "/");
                return (d ? "/" : "") + h
            },
            join: function() {
                var e = a.makeArray(arguments);
                return l.normalize(a.filter(e, function(a) {
                    return a && "string" === typeof a
                }).join("/"))
            },
            relative: function(e, d) {
                var e = l.normalize(e),
                    d = l.normalize(d),
                    h = a.filter(e.split("/"), function(a) {
                        return !!a
                    }),
                    j = [],
                    b, g, c = a.filter(d.split("/"), function(a) {
                        return !!a
                    });
                g = Math.min(h.length, c.length);
                for (b = 0; b < g && h[b] === c[b]; b++);
                for (g = b; b < h.length;) j.push(".."), b++;
                j = j.concat(c.slice(g));
                return j = j.join("/")
            },
            basename: function(a, d) {
                var e;
                e = (a.match(h) || [])[3] || "";
                d && e && e.slice(-1 * d.length) === d && (e = e.slice(0, -1 * d.length));
                return e
            },
            dirname: function(a) {
                var d = a.match(h) || [],
                    a = d[1] || "",
                    d = d[2] || "";
                if (!a && !d) return ".";
                d && (d = d.substring(0, d.length - 1));
                return a + d
            },
            extname: function(a) {
                return (a.match(h) || [])[4] || ""
            }
        }
})(KISSY);
(function(a, e) {
    function h(c) {
        c._queryMap || (c._queryMap = a.unparam(c._query))
    }

    function l(a) {
        this._query = a || ""
    }

    function m(a, c) {
        return encodeURI(a).replace(c, function(a) {
            a = a.charCodeAt(0).toString(16);
            return "%" + (1 === a.length ? "0" + a : a)
        })
    }

    function d(c) {
        if (c instanceof d) return c.clone();
        var b = this;
        a.mix(b, {
            scheme: "",
            userInfo: "",
            hostname: "",
            port: "",
            path: "",
            query: "",
            fragment: ""
        });
        c = d.getComponents(c);
        a.each(c, function(c, i) {
            c = c || "";
            if ("query" === i) b.query = new l(c);
            else {
                try {
                    c = a.urlDecode(c)
                } catch (d) {}
                b[i] = c
            }
        });
        return b
    }
    var k = /[#\/\?@]/g,
        j = /[#\?]/g,
        b = /[#@]/g,
        g = /#/g,
        c = RegExp("^(?:([\\w\\d+.-]+):)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
        f = a.Path,
        s = {
            scheme: 1,
            userInfo: 2,
            hostname: 3,
            port: 4,
            path: 5,
            query: 6,
            fragment: 7
        };
    l.prototype = {
        constructor: l,
        clone: function() {
            return new l(this.toString())
        },
        reset: function(a) {
            this._query = a || "";
            this._queryMap = null;
            return this
        },
        count: function() {
            var c = 0,
                b, d;
            h(this);
            b = this._queryMap;
            for (d in b) a.isArray(b[d]) ?
                c += b[d].length : c++;
            return c
        },
        has: function(c) {
            var b;
            h(this);
            b = this._queryMap;
            return c ? c in b : !a.isEmptyObject(b)
        },
        get: function(a) {
            var c;
            h(this);
            c = this._queryMap;
            return a ? c[a] : c
        },
        keys: function() {
            h(this);
            return a.keys(this._queryMap)
        },
        set: function(c, b) {
            var d;
            h(this);
            d = this._queryMap;
            "string" === typeof c ? this._queryMap[c] = b : (c instanceof l && (c = c.get()), a.each(c, function(a, c) {
                d[c] = a
            }));
            return this
        },
        remove: function(a) {
            h(this);
            a ? delete this._queryMap[a] : this._queryMap = {};
            return this
        },
        add: function(a, c) {
            var b,
                d;
            if ("string" === typeof a) h(this), b = this._queryMap, d = b[a], d = d === e ? c : [].concat(d).concat(c), b[a] = d;
            else
                for (b in a instanceof l && (a = a.get()), a) this.add(b, a[b]);
            return this
        },
        toString: function(c) {
            h(this);
            return a.param(this._queryMap, e, e, c)
        }
    };
    d.prototype = {
        constructor: d,
        clone: function() {
            var c = new d,
                b = this;
            a.each(s, function(a, d) {
                c[d] = b[d]
            });
            c.query = c.query.clone();
            return c
        },
        resolve: function(c) {
            "string" === typeof c && (c = new d(c));
            var b = 0,
                g, e = this.clone();
            a.each("scheme,userInfo,hostname,port,path,query,fragment".split(","),
                function(d) {
                    if (d === "path")
                        if (b) e[d] = c[d];
                        else {
                            if (d = c.path) {
                                b = 1;
                                if (!a.startsWith(d, "/"))
                                    if (e.hostname && !e.path) d = "/" + d;
                                    else if (e.path) {
                                    g = e.path.lastIndexOf("/");
                                    g !== -1 && (d = e.path.slice(0, g + 1) + d)
                                }
                                e.path = f.normalize(d)
                            }
                        } else if (d === "query") {
                        if (b || c.query.toString()) {
                            e.query = c.query.clone();
                            b = 1
                        }
                    } else if (b || c[d]) {
                        e[d] = c[d];
                        b = 1
                    }
                });
            return e
        },
        getScheme: function() {
            return this.scheme
        },
        setScheme: function(a) {
            this.scheme = a;
            return this
        },
        getHostname: function() {
            return this.hostname
        },
        setHostname: function(a) {
            this.hostname =
                a;
            return this
        },
        setUserInfo: function(a) {
            this.userInfo = a;
            return this
        },
        getUserInfo: function() {
            return this.userInfo
        },
        setPort: function(a) {
            this.port = a;
            return this
        },
        getPort: function() {
            return this.port
        },
        setPath: function(a) {
            this.path = a;
            return this
        },
        getPath: function() {
            return this.path
        },
        setQuery: function(c) {
            "string" === typeof c && (a.startsWith(c, "?") && (c = c.slice(1)), c = new l(m(c, b)));
            this.query = c;
            return this
        },
        getQuery: function() {
            return this.query
        },
        getFragment: function() {
            return this.fragment
        },
        setFragment: function(c) {
            a.startsWith(c,
                "#") && (c = c.slice(1));
            this.fragment = c;
            return this
        },
        isSameOriginAs: function(a) {
            return this.hostname.toLowerCase() === a.hostname.toLowerCase() && this.scheme.toLowerCase() === a.scheme.toLowerCase() && this.port.toLowerCase() === a.port.toLowerCase()
        },
        toString: function(c) {
            var b = [],
                d, e;
            if (d = this.scheme) b.push(m(d, k)), b.push(":");
            if (d = this.hostname) {
                b.push("//");
                if (e = this.userInfo) b.push(m(e, k)), b.push("@");
                b.push(encodeURIComponent(d));
                if (e = this.port) b.push(":"), b.push(e)
            }
            if (e = this.path) d && !a.startsWith(e, "/") &&
                (e = "/" + e), e = f.normalize(e), b.push(m(e, j));
            if (c = this.query.toString.call(this.query, c)) b.push("?"), b.push(c);
            if (c = this.fragment) b.push("#"), b.push(m(c, g));
            return b.join("")
        }
    };
    d.Query = l;
    d.getComponents = function(b) {
        var d = (b || "").match(c) || [],
            f = {};
        a.each(s, function(a, c) {
            f[c] = d[a]
        });
        return f
    };
    a.Uri = d
})(KISSY);
(function(a, e) {
    function h(a) {
        var c = 0;
        return parseFloat(a.replace(/\./g, function() {
            return 0 === c++ ? "." : ""
        }))
    }

    function l(a, c) {
        var b;
        c.trident = 0.1;
        if ((b = a.match(/Trident\/([\d.]*)/)) && b[1]) c.trident = h(b[1]);
        c.core = "trident"
    }

    function m(a) {
        var c, b;
        return (c = a.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (b = c[1] || c[2]) ? h(b) : 0
    }

    function d(a) {
        var c, b = "",
            d = "",
            f, g = [6, 9],
            t, q = j && j.createElement("div"),
            v = [],
            p = {
                webkit: e,
                trident: e,
                gecko: e,
                presto: e,
                chrome: e,
                safari: e,
                firefox: e,
                ie: e,
                ieMode: e,
                opera: e,
                mobile: e,
                core: e,
                shell: e,
                phantomjs: e,
                os: e,
                ipad: e,
                iphone: e,
                ipod: e,
                ios: e,
                android: e,
                nodejs: e
            };
        q && q.getElementsByTagName && (q.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", ""), v = q.getElementsByTagName("s"));
        if (0 < v.length) {
            l(a, p);
            f = g[0];
            for (g = g[1]; f <= g; f++)
                if (q.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", f), 0 < v.length) {
                    p[d = "ie"] = f;
                    break
                }
            if (!p.ie && (t = m(a))) p[d = "ie"] = t
        } else if ((f = a.match(/AppleWebKit\/*([\d.]*)/)) && f[1]) {
            p[b = "webkit"] = h(f[1]);
            if ((f =
                    a.match(/OPR\/(\d+\.\d+)/)) && f[1]) p[d = "opera"] = h(f[1]);
            else if ((f = a.match(/Chrome\/([\d.]*)/)) && f[1]) p[d = "chrome"] = h(f[1]);
            else if ((f = a.match(/\/([\d.]*) Safari/)) && f[1]) p[d = "safari"] = h(f[1]);
            if (/ Mobile\//.test(a) && a.match(/iPad|iPod|iPhone/)) {
                p.mobile = "apple";
                if ((f = a.match(/OS ([^\s]*)/)) && f[1]) p.ios = h(f[1].replace("_", "."));
                c = "ios";
                if ((f = a.match(/iPad|iPod|iPhone/)) && f[0]) p[f[0].toLowerCase()] = p.ios
            } else if (/ Android/i.test(a)) {
                if (/Mobile/.test(a) && (c = p.mobile = "android"), (f = a.match(/Android ([^\s]*);/)) &&
                    f[1]) p.android = h(f[1])
            } else if (f = a.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) p.mobile = f[0].toLowerCase();
            if ((f = a.match(/PhantomJS\/([^\s]*)/)) && f[1]) p.phantomjs = h(f[1])
        } else if ((f = a.match(/Presto\/([\d.]*)/)) && f[1]) {
            if (p[b = "presto"] = h(f[1]), (f = a.match(/Opera\/([\d.]*)/)) && f[1]) {
                p[d = "opera"] = h(f[1]);
                if ((f = a.match(/Opera\/.* Version\/([\d.]*)/)) && f[1]) p[d] = h(f[1]);
                if ((f = a.match(/Opera Mini[^;]*/)) && f) p.mobile = f[0].toLowerCase();
                else if ((f = a.match(/Opera Mobi[^;]*/)) && f) p.mobile = f[0]
            }
        } else if (t =
            m(a)) p[d = "ie"] = t, l(a, p);
        else if (f = a.match(/Gecko/)) {
            p[b = "gecko"] = 0.1;
            if ((f = a.match(/rv:([\d.]*)/)) && f[1]) p[b] = h(f[1]), /Mobile|Tablet/.test(a) && (p.mobile = "firefox");
            if ((f = a.match(/Firefox\/([\d.]*)/)) && f[1]) p[d = "firefox"] = h(f[1])
        }
        c || (/windows|win32/i.test(a) ? c = "windows" : /macintosh|mac_powerpc/i.test(a) ? c = "macintosh" : /linux/i.test(a) ? c = "linux" : /rhino/i.test(a) && (c = "rhino"));
        p.os = c;
        p.core = p.core || b;
        p.shell = d;
        p.ieMode = p.ie && j.documentMode || p.ie;
        return p
    }
    var k = a.Env.host,
        j = k.document,
        k = k.navigator,
        b = KISSY.UA =
        d(k && k.userAgent || "");
    if ("object" === typeof process) {
        var g, c;
        if ((g = process.versions) && (c = g.node)) b.os = process.platform, b.nodejs = h(c)
    }
    b.getDescriptorFromUserAgent = d;
    g = "webkit,trident,gecko,presto,chrome,safari,firefox,ie,opera".split(",");
    c = j && j.documentElement;
    var f = "";
    c && (a.each(g, function(a) {
        var c = b[a];
        c && (f += " ks-" + a + (parseInt(c) + ""), f += " ks-" + a)
    }), a.trim(f) && (c.className = a.trim(c.className + f)))
})(KISSY);
(function(a, e) {
    function h(a) {
        if (x[a]) return x[a];
        if (!u || a in u) x[a] = {
            name: a,
            prefix: ""
        };
        else {
            for (var c = a.charAt(0).toUpperCase() + a.slice(1), b, f = d.length; f--;) b = d[f] + c, b in u && (x[a] = {
                name: b,
                prefix: d[f]
            });
            x[a] = x[a] || {
                name: a,
                prefix: !1
            }
        }
        return x[a]
    }
    var l = a.Env.host,
        m = a.UA,
        d = ["", "Webkit", "Moz", "O", "ms"],
        k = l.document || {},
        j, b, g, c, f, s, i, n = k.documentElement,
        u, r = !0,
        o = !1,
        t = "ontouchstart" in k && !m.phantomjs,
        q = m.ieMode;
    if (n && (n.querySelector && 8 !== q && (o = !0), u = n.style, a.each(d, function(a) {
            var b = a ? a + "Transition" : "transition",
                d = a ? a + "Transform" : "transform";
            f === e && b in u && (f = a, g = b);
            s === e && d in u && (s = a, c = d)
        }), r = "classList" in n, m = l.navigator || {}, j = "msPointerEnabled" in m, b = "pointerEnabled" in m, c)) try {
        var v = k.createElement("p");
        n.insertBefore(v, n.firstChild);
        v.style[c] = "translate3d(1px,1px,1px)";
        var p = l.getComputedStyle(v),
            E = p.getPropertyValue(c) || p[c];
        n.removeChild(v);
        i = E !== e && 0 < E.length && "none" !== E
    } catch (L) {
        i = !0
    }
    var x = {};
    a.Features = {
        isMsPointerSupported: function() {
            return j
        },
        isPointerSupported: function() {
            return b
        },
        isTouchEventSupported: function() {
            return t
        },
        isTouchGestureSupported: function() {
            return t || b || j
        },
        isDeviceMotionSupported: function() {
            return !!l.DeviceMotionEvent
        },
        isHashChangeSupported: function() {
            return "onhashchange" in l && (!q || 7 < q)
        },
        isTransitionSupported: function() {
            return f !== e
        },
        isTransformSupported: function() {
            return s !== e
        },
        isTransform3dSupported: function() {
            return i
        },
        isClassListSupported: function() {
            return r
        },
        isQuerySelectorSupported: function() {
            return !a.config("dom/selector") && o
        },
        isIELessThan: function(a) {
            return !!(q && q < a)
        },
        getTransitionPrefix: function() {
            return f
        },
        getTransformPrefix: function() {
            return s
        },
        getTransitionProperty: function() {
            return g
        },
        getTransformProperty: function() {
            return c
        },
        getVendorCssPropPrefix: function(a) {
            return h(a).prefix
        },
        getVendorCssPropName: function(a) {
            return h(a).name
        }
    }
})(KISSY);
(function(a) {
    (a.Loader = {}).Status = {
        ERROR: -1,
        INIT: 0,
        LOADING: 1,
        LOADED: 2,
        READY_TO_ATTACH: 3,
        ATTACHING: 4,
        ATTACHED: 5
    }
})(KISSY);
(function(a) {
    function e(a) {
        if ("string" === typeof a) return h(a);
        for (var c = [], b = 0, d = a.length; b < d; b++) c[b] = h(a[b]);
        return c
    }

    function h(c) {
        "/" === c.charAt(c.length - 1) && (c += "index");
        a.endsWith(c, ".js") && (c = c.slice(0, -3));
        return c
    }

    function l(c, b) {
        var d = b.indexOf("!");
        if (-1 !== d) {
            var f = b.substring(0, d),
                b = b.substring(d + 1);
            a.use(f, {
                sync: !0,
                success: function(a, d) {
                    d.alias && (b = d.alias(c, b, f))
                }
            })
        }
        return b
    }
    var m = a.Loader,
        d = a.Path,
        k = a.Env.host,
        j = a.startsWith,
        b = m.Status,
        g = b.ATTACHED,
        c = b.READY_TO_ATTACH,
        f = b.LOADED,
        s =
        b.ATTACHING,
        i = b.ERROR,
        n = m.Utils = {},
        u = k.document;
    a.mix(n, {
        docHead: function() {
            return u.getElementsByTagName("head")[0] || u.documentElement
        },
        normalDepModuleName: function(a, c) {
            var b = 0,
                f;
            if (!c) return c;
            if ("string" === typeof c) return j(c, "../") || j(c, "./") ? d.resolve(d.dirname(a), c) : d.normalize(c);
            for (f = c.length; b < f; b++) c[b] = n.normalDepModuleName(a, c[b]);
            return c
        },
        createModulesInfo: function(c, b) {
            a.each(b, function(a) {
                n.createModuleInfo(c, a)
            })
        },
        createModuleInfo: function(c, b, d) {
            var b = h(b),
                f = c.Env.mods,
                g = f[b];
            return g ? g : f[b] = g = new m.Module(a.mix({
                name: b,
                runtime: c
            }, d))
        },
        getModules: function(c, b) {
            var d = [c],
                f, g, e, i, h = c.Env.mods;
            a.each(b, function(b) {
                f = h[b];
                !f || "css" !== f.getType() ? (g = n.unalias(c, b), (e = a.reduce(g, function(a, c) {
                    i = h[c];
                    return a && i && i.status >= s
                }, !0)) ? d.push(h[g[0]].exports) : d.push(null)) : d.push(void 0)
            });
            return d
        },
        attachModsRecursively: function(a, c) {
            var b, d = a.length;
            for (b = 0; b < d; b++) n.attachModRecursively(a[b], c)
        },
        checkModsLoadRecursively: function(a, c, b, d, f) {
            var b = b || [],
                f = f || {},
                g, e = 1,
                i = a.length,
                h = b.length;
            for (g = 0; g < i; g++) e = e && n.checkModLoadRecursively(a[g], c, b, d, f), b.length = h;
            return !!e
        },
        checkModLoadRecursively: function(a, b, d, g, e) {
            var h, k = b.Env.mods[a];
            if (a in e) return e[a];
            if (!k) return e[a] = !1;
            h = k.status;
            return h === i ? (g.push(k), e[a] = !1) : h >= c ? e[a] = !0 : h !== f ? e[a] = !1 : n.checkModsLoadRecursively(k.getNormalizedRequires(), b, d, g, e) ? (k.status = c, e[a] = !0) : e[a] = !1
        },
        attachModRecursively: function(a, c) {
            var b = c.Env.mods[a];
            b.status >= s || (b.status = s, b.cjs || n.attachModsRecursively(b.getNormalizedRequires(),
                c), n.attachMod(c, b))
        },
        attachMod: function(c, b) {
            var d = b.factory;
            if ("function" === typeof d) {
                var f;
                b.cjs && 1 < d.length && (f = a.bind(b.require, b));
                d = d.apply(b, b.cjs ? [c, f, b.exports, b] : n.getModules(c, b.getRequiresWithAlias()));
                void 0 !== d && (b.exports = d)
            } else b.exports = d;
            b.status = g
        },
        getModNamesAsArray: function(a) {
            "string" === typeof a && (a = a.replace(/\s+/g, "").split(","));
            return a
        },
        normalizeModNames: function(a, c, b) {
            return n.unalias(a, n.normalizeModNamesWithAlias(a, c, b))
        },
        unalias: function(a, c) {
            for (var b = [].concat(c),
                    d, f, g, i = 0, h, k = a.Env.mods; !i;) {
                i = 1;
                for (d = b.length - 1; 0 <= d; d--)
                    if ((f = k[b[d]]) && "alias" in f) {
                        i = 0;
                        g = f.alias;
                        "string" === typeof g && (g = [g]);
                        for (h = g.length - 1; 0 <= h; h--) g[h] || g.splice(h, 1);
                        b.splice.apply(b, [d, 1].concat(e(g)))
                    }
            }
            return b
        },
        normalizeModNamesWithAlias: function(a, c, b) {
            var d = [],
                f, g;
            if (c) {
                f = 0;
                for (g = c.length; f < g; f++) c[f] && d.push(l(a, e(c[f])))
            }
            b && (d = n.normalDepModuleName(b, d));
            return d
        },
        registerModule: function(c, b, d, g) {
            var b = h(b),
                e = c.Env.mods,
                i = e[b];
            i && void 0 !== i.factory || (n.createModuleInfo(c, b), i = e[b],
                a.mix(i, {
                    name: b,
                    status: f,
                    factory: d
                }), a.mix(i, g))
        },
        getHash: function(a) {
            var c = 5381,
                b;
            for (b = a.length; - 1 < --b;) c = (c << 5) + c + a.charCodeAt(b);
            return c + ""
        },
        getRequiresFromFn: function(a) {
            var c = [];
            a.toString().replace(r, "").replace(o, function(a, b) {
                c.push(b.match(/^\s*["']([^'"\s]+)["']\s*$/)[1])
            });
            return c
        }
    });
    var r = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        o = /[^.'"]\s*require\s*\(([^)]+)\)/g
})(KISSY);
(function(a) {
    function e(a, b) {
        return b in a ? a[b] : a.runtime.Config[b]
    }

    function h(c) {
        a.mix(this, c)
    }

    function l(c) {
        this.exports = {};
        this.status = k.Status.INIT;
        this.factory = this.name = void 0;
        this.cjs = 1;
        a.mix(this, c);
        this.waitedCallbacks = []
    }

    function m(a) {
        for (var b = [], d = 0; d < a.length; d++) b[d] = a[d];
        return b
    }

    function d(a) {
        "function" === typeof a && (a = {
            success: a
        });
        if (a && a.success) {
            var b = a.success;
            a.success = function() {
                b.apply(this, m(arguments).slice(1))
            };
            a.sync = 1;
            return a
        }
    }
    var k = a.Loader,
        j = a.Path,
        b = k.Utils;
    h.prototype = {
        constructor: h,
        reset: function(c) {
            a.mix(this, c)
        },
        getTag: function() {
            return e(this, "tag")
        },
        getName: function() {
            return this.name
        },
        getBase: function() {
            return e(this, "base")
        },
        getPrefixUriForCombo: function() {
            var a = this.name;
            return this.getBase() + (a && !this.isIgnorePackageNameInUri() ? a + "/" : "")
        },
        getPackageUri: function() {
            this.packageUri || (this.packageUri = new a.Uri(this.getPrefixUriForCombo()));
            return this.packageUri
        },
        getBaseUri: function() {
            return e(this, "baseUri")
        },
        isDebug: function() {
            return e(this, "debug")
        },
        isIgnorePackageNameInUri: function() {
            return e(this,
                "ignorePackageNameInUri")
        },
        getCharset: function() {
            return e(this, "charset")
        },
        isCombine: function() {
            return e(this, "combine")
        },
        getGroup: function() {
            return e(this, "group")
        }
    };
    k.Package = h;
    l.prototype = {
        kissy: 1,
        constructor: l,
        use: function(a, d) {
            a = b.getModNamesAsArray(a);
            return KISSY.use(b.normalDepModuleName(this.name, a), d)
        },
        resolve: function(a) {
            return this.getFullPathUri().resolve(a)
        },
        resolveByName: function(a) {
            return b.normalDepModuleName(this.name, a)
        },
        require: function(c) {
            if ("string" === typeof c) return a.require(c,
                this.name);
            for (var b = c, g = 0; g < b.length; g++) b[g] = this.resolveByName(b[g]);
            g = m(arguments);
            g[0] = b;
            g[1] = d(g[1]);
            a.use.apply(a, g)
        },
        wait: function(a) {
            this.waitedCallbacks.push(a)
        },
        notifyAll: function() {
            for (var a, b = this.waitedCallbacks.length, d = 0; d < b; d++) {
                a = this.waitedCallbacks[d];
                try {
                    a(this)
                } catch (g) {
                    setTimeout(function() {
                        throw g;
                    }, 0)
                }
            }
            this.waitedCallbacks = []
        },
        getType: function() {
            var a = this.type;
            a || (this.type = a = ".css" === j.extname(this.name).toLowerCase() ? "css" : "js");
            return a
        },
        getFullPathUri: function() {
            var c,
                b, d, g;
            if (!this.fullPathUri) {
                if (this.fullpath) b = new a.Uri(this.fullpath);
                else {
                    b = this.getPackage();
                    c = b.getBaseUri();
                    g = this.getPath();
                    if (b.isIgnorePackageNameInUri() && (d = b.name)) g = j.relative(d, g);
                    b = c.resolve(g);
                    if (c = this.getTag()) c += "." + this.getType(), b.query.set("t", c)
                }
                this.fullPathUri = b
            }
            return this.fullPathUri
        },
        getFullPath: function() {
            var a;
            this.fullpath || (a = this.getFullPathUri(), this.fullpath = a.toString());
            return this.fullpath
        },
        getPath: function() {
            var a;
            if (!(a = this.path)) {
                a = this.name;
                var b = "." + this.getType(),
                    d = "-min";
                a = j.join(j.dirname(a), j.basename(a, b));
                this.getPackage().isDebug() && (d = "");
                a = this.path = a + d + b
            }
            return a
        },
        getName: function() {
            return this.name
        },
        getPackage: function() {
            var b;
            if (!(b = this.packageInfo)) {
                var d = this.name;
                b = this.runtime.config("packages");
                var d = d + "/",
                    e = "",
                    i;
                for (i in b) a.startsWith(d, i + "/") && i.length > e.length && (e = i);
                b = this.packageInfo = b[e] || g
            }
            return b
        },
        getTag: function() {
            return this.tag || this.getPackage().getTag()
        },
        getCharset: function() {
            return this.charset || this.getPackage().getCharset()
        },
        getRequiresWithAlias: function() {
            var a = this.requiresWithAlias,
                d = this.requires;
            if (!d || 0 === d.length) return d || [];
            a || (this.requiresWithAlias = a = b.normalizeModNamesWithAlias(this.runtime, d, this.name));
            return a
        },
        getRequiredMods: function() {
            var c = this.runtime;
            return a.map(this.getNormalizedRequires(), function(a) {
                return b.createModuleInfo(c, a)
            })
        },
        getNormalizedRequires: function() {
            var a, d = this.normalizedRequiresStatus,
                g = this.status,
                e = this.requires;
            if (!e || 0 === e.length) return e || [];
            if ((a = this.normalizedRequires) &&
                d === g) return a;
            this.normalizedRequiresStatus = g;
            return this.normalizedRequires = b.normalizeModNames(this.runtime, e, this.name)
        }
    };
    k.Module = l;
    var g = new h({
        name: "",
        runtime: a
    })
})(KISSY);
(function(a) {
    function e(a) {
        var d = 0;
        if (m.webkit) a.sheet && (d = 1);
        else if (a.sheet) try {
            a.sheet.cssRules && (d = 1)
        } catch (c) {
            "NS_ERROR_DOM_SECURITY_ERR" === c.name && (d = 1)
        }
        return d
    }

    function h() {
        for (var b in j) {
            var d = j[b],
                c = d.node;
            e(c, b) && (d.callback && d.callback.call(c), delete j[b])
        }
        k = a.isEmptyObject(j) ? 0 : setTimeout(h, l)
    }
    var l = 30,
        m = a.UA,
        d = a.Loader.Utils,
        k = 0,
        j = {};
    d.pollCss = function(a, d) {
        var c;
        c = j[a.href] = {};
        c.node = a;
        c.callback = d;
        k || h()
    };
    d.isCssLoaded = e
})(KISSY);
(function(a) {
    var e = a.Env.host.document,
        h = a.Loader.Utils,
        l = a.Path,
        m = {},
        d, k = a.UA;
    a.getScript = function(j, b, g) {
        function c() {
            var a = o.readyState;
            if (!a || "loaded" === a || "complete" === a) o.onreadystatechange = o.onload = null, t(0)
        }
        var f = b,
            s = 0,
            i, n, u, r;
        a.startsWith(l.extname(j).toLowerCase(), ".css") && (s = 1);
        a.isPlainObject(f) && (b = f.success, i = f.error, n = f.timeout, g = f.charset, u = f.attrs);
        f = m[j] = m[j] || [];
        f.push([b, i]);
        if (1 < f.length) return f.node;
        var o = e.createElement(s ? "link" : "script");
        u && a.each(u, function(a, b) {
            o.setAttribute(b,
                a)
        });
        g && (o.charset = g);
        s ? (o.href = j, o.rel = "stylesheet") : (o.src = j, o.async = !0);
        f.node = o;
        var t = function(b) {
                var c;
                if (r) {
                    r.cancel();
                    r = void 0
                }
                a.each(m[j], function(a) {
                    (c = a[b]) && c.call(o)
                });
                delete m[j]
            },
            b = "onload" in o,
            g = a.Config.forceCssPoll || k.webkit && 536 > k.webkit;
        s && g && b && (b = !1);
        b ? (o.onload = c, o.onerror = function() {
            o.onerror = null;
            t(1)
        }) : s ? h.pollCss(o, function() {
            t(0)
        }) : o.onreadystatechange = c;
        n && (r = a.later(function() {
            t(1)
        }, 1E3 * n));
        d || (d = h.docHead());
        s ? d.appendChild(o) : d.insertBefore(o, d.firstChild);
        return o
    }
})(KISSY);
(function(a, e) {
    function h(b) {
        b = b.replace(/\\/g, "/");
        "/" !== b.charAt(b.length - 1) && (b += "/");
        k ? b = k.resolve(b) : (a.startsWith(b, "file:") || (b = "file:" + b), b = new a.Uri(b));
        return b
    }
    var l = a.Loader,
        m = l.Utils,
        d = a.Env.host.location,
        k, j, b = a.Config.fns;
    if (!a.UA.nodejs && d && (j = d.href)) k = new a.Uri(j);
    a.Config.loadModsFn = function(b, c) {
        a.getScript(b.fullpath, c)
    };
    b.packages = function(b) {
        var c, d = this.Config,
            k = d.packages = d.packages || {};
        return b ? (a.each(b, function(b, d) {
            c = b.name || d;
            var f = h(b.base || b.path);
            b.name = c;
            b.base = f.toString();
            b.baseUri = f;
            b.runtime = a;
            delete b.path;
            k[c] ? k[c].reset(b) : k[c] = new l.Package(b)
        }), e) : !1 === b ? (d.packages = {}, e) : k
    };
    b.modules = function(b) {
        var c = this;
        b && a.each(b, function(b, d) {
            var e = m.createModuleInfo(c, d, b);
            e.status === l.Status.INIT && a.mix(e, b)
        })
    };
    b.base = function(a) {
        var b = this.Config;
        if (!a) return b.base;
        a = h(a);
        b.base = a.toString();
        b.baseUri = a;
        return e
    }
})(KISSY);
(function(a, e) {
    function h(b, c, d, f, h) {
        var i = c && c.length,
            j = [],
            l = [];
        a.each(c, function(c) {
            var q, m = {
                timeout: h,
                success: function() {
                    l.push(c);
                    q && r && (g.registerModule(b, q.name, r.factory, r.config), r = e);
                    --i || d(l, j)
                },
                error: function() {
                    j.push(c);
                    --i || d(l, j)
                },
                charset: f
            };
            c.combine || (q = c.mods[0], "css" === q.getType() ? q = e : k && (o = q.name, a.now(), m.attrs = {
                "data-mod-name": q.name
            }));
            a.Config.loadModsFn(c, m)
        })
    }

    function l(b, c) {
        a.mix(this, {
            runtime: b,
            waitingModules: c
        })
    }

    function m(a, b) {
        if (!a && "function" === typeof b && 1 < b.length) {
            var c =
                g.getRequiresFromFn(b);
            c.length && (a = a || {}, a.requires = c)
        } else a && a.requires && !a.cjs && (a.cjs = 0);
        return a
    }

    function d(a, b) {
        for (var a = a.split(/\//), b = b.split(/\//), c = Math.min(a.length, b.length), d = 0; d < c && a[d] === b[d]; d++);
        return a.slice(0, d).join("/") + "/"
    }
    var k = 10 > a.UA.ieMode,
        j = a.Loader,
        b = j.Status,
        g = j.Utils,
        c = g.getHash,
        f = b.LOADING,
        s = b.LOADED,
        i = b.READY_TO_ATTACH,
        n = b.ERROR,
        u = a.now();
    l.groupTag = u;
    var r, o;
    l.add = function(b, c, d, f, h) {
        if (3 === h && a.isArray(c)) var i = c,
            c = d,
            d = {
                requires: i,
                cjs: 1
            };
        if ("function" === typeof b ||
            1 === h)
            if (d = c, c = b, d = m(d, c), k) {
                for (var b = a.Env.host.document.getElementsByTagName("script"), j, h = b.length - 1; 0 <= h; h--)
                    if (i = b[h], "interactive" === i.readyState) {
                        j = i;
                        break
                    }
                b = j ? j.getAttribute("data-mod-name") : o;
                g.registerModule(f, b, c, d);
                o = null
            } else r = {
                factory: c,
                config: d
            };
        else k ? o = null : r = e, d = m(d, c), g.registerModule(f, b, c, d)
    };
    a.augment(l, {
        use: function(b) {
            var c = a.Config.timeout,
                d = this.runtime,
                b = a.keys(this.calculate(b));
            g.createModulesInfo(d, b);
            b = this.getComboUrls(b);
            a.each(b.css, function(b) {
                h(d, b, function(b,
                    c) {
                    a.each(b, function(b) {
                        a.each(b.mods, function(b) {
                            g.registerModule(d, b.name, a.noop);
                            b.notifyAll()
                        })
                    });
                    a.each(c, function(b) {
                        a.each(b.mods, function(a) {
                            a.status = n;
                            a.notifyAll()
                        })
                    })
                }, b.charset, c)
            });
            a.each(b.js, function(b) {
                h(d, b, function() {
                    a.each(b, function(b) {
                        a.each(b.mods, function(a) {
                            a.factory || (a.status = n);
                            a.notifyAll()
                        })
                    })
                }, b.charset, c)
            })
        },
        calculate: function(a, b, c) {
            var d, e, h, k, j = this.waitingModules,
                l = this.runtime,
                c = c || {},
                b = b || {};
            for (d = 0; d < a.length; d++) e = a[d], b[e] || (b[e] = 1, h = g.createModuleInfo(l, e),
                k = h.status, k >= i || (k !== s && !j.contains(e) && (k !== f && (h.status = f, c[e] = 1), h.wait(function(a) {
                    j.remove(a.name);
                    j.notifyAll()
                }), j.add(e)), this.calculate(h.getNormalizedRequires(), b, c)));
            return c
        },
        getComboMods: function(b, c) {
            for (var f = {}, e, h = this.runtime, i = 0, k = b.length, j, l, m, o, n, s, r, G, I; i < k; ++i) {
                j = b[i];
                j = g.createModuleInfo(h, j);
                m = j.getType();
                I = j.getFullPath();
                l = j.getPackage();
                r = l.name;
                n = l.getCharset();
                o = l.getTag();
                G = l.getGroup();
                s = l.getPrefixUriForCombo();
                e = l.getPackageUri();
                var z = r;
                (j.canBeCombined = l.isCombine() &&
                    a.startsWith(I, s)) && G ? (z = G + "_" + n + "_" + u, (l = c[z]) ? l.isSameOriginAs(e) ? l.setPath(d(l.getPath(), e.getPath())) : (z = r, c[r] = e) : c[z] = e.clone()) : c[r] = e;
                e = f[m] = f[m] || {};
                (m = e[z]) ? 1 === m.tags.length && m.tags[0] === o || m.tags.push(o): (m = e[z] = [], m.charset = n, m.tags = [o]);
                m.push(j)
            }
            return f
        },
        getComboUrls: function(a) {
            var b = this.runtime.Config,
                d = b.comboPrefix,
                f = b.comboSep,
                e = b.comboMaxFileNum,
                b = b.comboMaxUrlLength,
                g = {},
                a = this.getComboMods(a, g),
                h = {},
                i;
            for (i in a) {
                h[i] = {};
                for (var k in a[i]) {
                    var j = [],
                        l = [],
                        m = a[i][k],
                        o = m.tags,
                        n = (o = 1 < o.length ? c(o.join("")) : o[0]) ? "?t=" + encodeURIComponent(o) + "." + i : "",
                        o = n.length,
                        s = g[k].toString(),
                        r = s.length,
                        u = s + d,
                        A = h[i][k] = [],
                        s = u.length;
                    A.charset = m.charset;
                    A.mods = [];
                    for (var J = function() {
                            A.push({
                                combine: 1,
                                fullpath: u + j.join(f) + n,
                                mods: l
                            })
                        }, C = 0; C < m.length; C++) {
                        var B = m[C];
                        A.mods.push(B);
                        var D = B.getFullPath();
                        if (B.canBeCombined) {
                            if (D = D.slice(r).replace(/\?.*$/, ""), j.push(D), l.push(B), j.length > e || s + j.join(f).length + o > b) j.pop(), l.pop(), J(), j = [], l = [], C--
                        } else A.push({
                            combine: 0,
                            fullpath: D,
                            mods: [B]
                        })
                    }
                    j.length &&
                        J()
                }
            }
            return h
        }
    });
    j.ComboLoader = l
})(KISSY);
(function(a, e) {
    function h(b) {
        a.mix(this, {
            fn: b,
            waitMods: {}
        })
    }
    var l = a.Loader,
        m = a.Env,
        d = l.Utils,
        k = a.setImmediate,
        j = l.ComboLoader;
    h.prototype = {
        constructor: h,
        notifyAll: function() {
            var b = this.fn;
            b && a.isEmptyObject(this.waitMods) && (this.fn = null, b())
        },
        add: function(a) {
            this.waitMods[a] = 1
        },
        remove: function(a) {
            delete this.waitMods[a]
        },
        contains: function(a) {
            return this.waitMods[a]
        }
    };
    l.WaitingModules = h;
    a.mix(a, {
        add: function(b, d, c) {
            j.add(b, d, c, a, arguments.length)
        },
        use: function(b, g, c) {
            function f() {
                ++u;
                var b = [];
                a.now();
                d.checkModsLoadRecursively(l, a, e, b) ? (d.attachModsRecursively(l, a), g && (m ? r() : k(r))) : b.length ? c && (m ? c.apply(a, b) : k(function() {
                    c.apply(a, b)
                })) : (o.fn = f, i.use(l))
            }
            var l, i, m, u = 0,
                r, o = new h(f);
            a.isPlainObject(g) && (m = g.sync, c = g.error, g = g.success);
            r = function() {
                g.apply(a, d.getModules(a, b))
            };
            b = d.getModNamesAsArray(b);
            b = d.normalizeModNamesWithAlias(a, b);
            l = d.unalias(a, b);
            i = new j(a, o);
            m ? o.notifyAll() : k(function() {
                o.notifyAll()
            });
            return a
        },
        require: function(b, e) {
            if (b) {
                var c = d.unalias(a, d.normalizeModNamesWithAlias(a, [b], e));
                d.attachModsRecursively(c, a);
                return d.getModules(a, c)[1]
            }
        }
    });
    m.mods = {}
})(KISSY);
(function(a) {
    function e(c) {
        var f = c.src || "";
        if (!f.match(g)) return 0;
        var c = (c = c.getAttribute("data-config")) ? (new Function("return " + c))() : {},
            e = c.comboPrefix || k,
            h = c.comboSep || j,
            l, u = f.indexOf(e); - 1 === u ? l = f.replace(b, "$1") : (l = f.substring(0, u), "/" !== l.charAt(l.length - 1) && (l += "/"), e = f.substring(u + e.length).split(h), a.each(e, function(a) {
            if (a.match(g)) return l += a.replace(b, "$1"), !1
        }));
        "tag" in c || (e = f.lastIndexOf("?t="), -1 !== e && (f = f.substring(e + 1), c.tag = m.getHash(d + f)));
        c.base = c.base || l;
        return c
    }

    function h() {
        var a =
            l.getElementsByTagName("script"),
            b, d;
        for (b = a.length - 1; 0 <= b; b--)
            if (d = e(a[b])) return d;
        return null
    }
    var l = a.Env.host && a.Env.host.document,
        m = a.Loader.Utils,
        d = "20141210150549",
        k = "??",
        j = ",",
        b = /^(.*)(seed|kissy)(?:-min)?\.js[^/]*/i,
        g = /(seed|kissy)(?:-min)?\.js/i;
    a.config({
        comboPrefix: k,
        comboSep: j,
        charset: "utf-8",
        lang: "zh-cn"
    });
    a.UA.nodejs ? a.config({
        charset: "utf-8",
        base: __dirname.replace(/\\/g, "/").replace(/\/$/, "") + "/"
    }) : l && l.getElementsByTagName && a.config(a.mix({
        comboMaxUrlLength: 2E3,
        comboMaxFileNum: 40
    }, h()))
})(KISSY);
KISSY.add("i18n", {
    alias: function(a, e) {
        return e + "/i18n/" + a.Config.lang
    }
});
(function(a, e) {
    function h() {
        if (!b) {
            d && !m.nodejs && u(l, i, h);
            b = 1;
            for (var c = 0; c < g.length; c++) try {
                g[c](a)
            } catch (e) {
                setTimeout(function() {
                    throw e;
                }, 0)
            }
        }
    }
    var l = a.Env.host,
        m = a.UA,
        d = l.document,
        k = d && d.documentElement,
        j = l.location,
        b = 0,
        g = [],
        c = /^#?([\w-]+)$/,
        f = /\S/,
        s = !(!d || !d.addEventListener),
        i = "load",
        n = s ? function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : function(a, b, c) {
            a.attachEvent("on" + b, c)
        },
        u = s ? function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent("on" + b, c)
        };
    a.mix(a, {
        isWindow: function(a) {
            return null !=
                a && a == a.window
        },
        parseXML: function(a) {
            if (a.documentElement) return a;
            var b;
            try {
                l.DOMParser ? b = (new DOMParser).parseFromString(a, "text/xml") : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.loadXML(a))
            } catch (c) {
                b = e
            }!b || !b.documentElement || b.getElementsByTagName("parsererror");
            return b
        },
        globalEval: function(a) {
            a && f.test(a) && (l.execScript ? l.execScript(a) : l.eval.call(l, a))
        },
        ready: function(c) {
            if (b) try {
                c(a)
            } catch (d) {
                setTimeout(function() {
                    throw d;
                }, 0)
            } else g.push(c);
            return this
        },
        available: function(b, e) {
            var b =
                (b + "").match(c)[1],
                f = 1,
                g = a.later(function() {
                    if (500 < ++f) g.cancel();
                    else {
                        var a = d.getElementById(b);
                        a && (e(a), g.cancel())
                    }
                }, 40, !0)
        }
    });
    if (j && -1 !== (j.search || "").indexOf("ks-debug")) a.Config.debug = !0;
    (function() {
        if (!d || "complete" === d.readyState) h();
        else if (n(l, i, h), s) {
            var a = function() {
                u(d, "DOMContentLoaded", a);
                h()
            };
            n(d, "DOMContentLoaded", a)
        } else {
            var b = function() {
                "complete" === d.readyState && (u(d, "readystatechange", b), h())
            };
            n(d, "readystatechange", b);
            var c, e = k && k.doScroll;
            try {
                c = null === l.frameElement
            } catch (f) {
                c = !1
            }
            if (e && c) {
                var g = function() {
                    try {
                        e("left"), h()
                    } catch (a) {
                        setTimeout(g, 40)
                    }
                };
                g()
            }
        }
    })();
    if (m.ie) try {
        d.execCommand("BackgroundImageCache", !1, !0)
    } catch (r) {}
})(KISSY, void 0);
(function(a) {
    a.config({
        modules: {
            core: {
                alias: "dom,event,io,anim,base,node,json,ua,cookie".split(",")
            },
            ajax: {
                alias: "io"
            },
            "rich-base": {
                alias: "base"
            }
        }
    });
    if ("undefined" !== typeof location) {
        var e = a.startsWith(location.href, "https") ? "https://s.tbcdn.cn/s/kissy/" : "http://a.tbcdn.cn/s/kissy/";
        a.config({
            packages: {
                gallery: {
                    base: e
                },
                kg: {
                    base: "//g.alicdn.com/"
                },
                mobile: {
                    base: e
                }
            }
        })
    }
})(KISSY);
(function(a, e, h) {
    a({
        "anim/transition?": {
            alias: KISSY.Features.isTransitionSupported() ? "anim/transition" : ""
        }
    });
    a({
        anim: {
            requires: ["anim/base", "anim/timer", "anim/transition?"]
        }
    });
    a({
        "anim/base": {
            requires: ["dom", "promise"]
        }
    });
    a({
        "anim/timer": {
            requires: ["dom", "anim/base"]
        }
    });
    a({
        "anim/transition": {
            requires: ["dom", "anim/base"]
        }
    });
    a({
        attribute: {
            requires: ["event/custom"]
        }
    });
    a({
        base: {
            requires: ["attribute"]
        }
    });
    a({
        button: {
            requires: ["node", "component/control"]
        }
    });
    a({
        color: {
            requires: ["attribute"]
        }
    });
    a({
        combobox: {
            requires: ["node",
                "component/control", "menu", "attribute", "io"
            ]
        }
    });
    a({
        "component/container": {
            requires: ["component/control", "component/manager"]
        }
    });
    a({
        "component/control": {
            requires: ["node", "base", "promise", "component/manager", "xtemplate/runtime"]
        }
    });
    a({
        "component/extension/align": {
            requires: ["node"]
        }
    });
    a({
        "component/extension/content-render": {
            requires: ["component/extension/content-xtpl"]
        }
    });
    a({
        "component/extension/delegate-children": {
            requires: ["node", "component/manager"]
        }
    });
    a({
        "component/plugin/drag": {
            requires: ["dd"]
        }
    });
    a({
        "component/plugin/resize": {
            requires: ["resizable"]
        }
    });
    a({
        "date/format": {
            requires: ["date/gregorian", "i18n!date"]
        }
    });
    a({
        "date/gregorian": {
            requires: ["i18n!date"]
        }
    });
    a({
        "date/picker": {
            requires: "node,date/gregorian,i18n!date/picker,component/control,date/format,date/picker-xtpl".split(",")
        }
    });
    a({
        "date/popup-picker": {
            requires: ["date/picker-xtpl", "date/picker", "component/extension/shim", "component/extension/align"]
        }
    });
    a({
        dd: {
            requires: ["node", "base"]
        }
    });
    a({
        "dd/plugin/constrain": {
            requires: ["node", "base"]
        }
    });
    a({
        "dd/plugin/proxy": {
            requires: ["node", "dd", "base"]
        }
    });
    a({
        "dd/plugin/scroll": {
            requires: ["node", "dd", "base"]
        }
    });
    a({
        "dom/basic": {
            alias: ["dom/base", e.isIELessThan(9) ? "dom/ie" : "", e.isClassListSupported() ? "" : "dom/class-list"]
        },
        dom: {
            alias: ["dom/basic", !e.isQuerySelectorSupported() ? "dom/selector" : ""]
        }
    });
    a({
        "dom/base": {
            requires: ["ua"]
        }
    });
    a({
        "dom/class-list": {
            requires: ["dom/base"]
        }
    });
    a({
        "dom/ie": {
            requires: ["dom/base"]
        }
    });
    a({
        "dom/selector": {
            requires: ["dom/basic"]
        }
    });
    a({
        editor: {
            requires: ["node", "html-parser",
                "component/control", "ua"
            ]
        }
    });
    a({
        event: {
            requires: ["event/dom", "event/custom"]
        }
    });
    a({
        "event/custom": {
            requires: ["event/base"]
        }
    });
    a({
        "event/dom": {
            alias: ["event/dom/base", e.isTouchGestureSupported() ? "event/dom/touch" : "", e.isDeviceMotionSupported() ? "event/dom/shake" : "", e.isHashChangeSupported() ? "" : "event/dom/hashchange", e.isIELessThan(9) ? "event/dom/ie" : "", h.ie ? "" : "event/dom/focusin"]
        }
    });
    a({
        "event/dom/base": {
            requires: ["event/base", "dom"]
        }
    });
    a({
        "event/dom/focusin": {
            requires: ["event/dom/base"]
        }
    });
    a({
        "event/dom/hashchange": {
            requires: ["event/dom/base",
                "dom"
            ]
        }
    });
    a({
        "event/dom/ie": {
            requires: ["event/dom/base", "dom"]
        }
    });
    a({
        "event/dom/shake": {
            requires: ["event/dom/base"]
        }
    });
    a({
        "event/dom/touch": {
            requires: ["event/dom/base", "dom"]
        }
    });
    a({
        "filter-menu": {
            requires: ["menu", "component/extension/content-xtpl", "component/extension/content-render"]
        }
    });
    a({
        io: {
            requires: ["dom", "event/custom", "promise", "event/dom"]
        }
    });
    a({
        kison: {
            requires: ["base"]
        }
    });
    a({
        menu: {
            requires: "node,component/container,component/extension/delegate-children,component/control,component/extension/content-render,component/extension/content-xtpl,component/extension/align,component/extension/shim".split(",")
        }
    });
    a({
        menubutton: {
            requires: ["node", "button", "component/extension/content-xtpl", "component/extension/content-render", "menu"]
        }
    });
    a({
        mvc: {
            requires: ["io", "json", "attribute", "node"]
        }
    });
    a({
        node: {
            requires: ["dom", "event/dom", "anim"]
        }
    });
    a({
        overlay: {
            requires: "component/container,component/extension/shim,component/extension/align,node,component/extension/content-xtpl,component/extension/content-render".split(",")
        }
    });
    a({
        resizable: {
            requires: ["node", "base", "dd"]
        }
    });
    a({
        "resizable/plugin/proxy": {
            requires: ["node", "base"]
        }
    });
    a({
        "scroll-view": {
            alias: e.isTouchGestureSupported() ? "scroll-view/drag" : "scroll-view/base"
        }
    });
    a({
        "scroll-view/base": {
            requires: ["node", "anim", "component/container", "component/extension/content-render"]
        }
    });
    a({
        "scroll-view/drag": {
            requires: ["scroll-view/base", "node", "anim"]
        }
    });
    a({
        "scroll-view/plugin/pull-to-refresh": {
            requires: ["base"]
        }
    });
    a({
        "scroll-view/plugin/scrollbar": {
            requires: ["base", "node", "component/control"]
        }
    });
    a({
        separator: {
            requires: ["component/control"]
        }
    });
    a({
        "split-button": {
            requires: ["component/container",
                "button", "menubutton"
            ]
        }
    });
    a({
        stylesheet: {
            requires: ["dom"]
        }
    });
    a({
        swf: {
            requires: ["dom", "json", "attribute"]
        }
    });
    a({
        tabs: {
            requires: ["component/container", "toolbar", "button"]
        }
    });
    a({
        toolbar: {
            requires: ["component/container", "component/extension/delegate-children", "node"]
        }
    });
    a({
        tree: {
            requires: ["node", "component/container", "component/extension/content-xtpl", "component/extension/content-render", "component/extension/delegate-children"]
        }
    });
    a({
        xtemplate: {
            requires: ["xtemplate/runtime", "xtemplate/compiler"]
        }
    });
    a({
        "xtemplate/compiler": {
            requires: ["xtemplate/runtime"]
        }
    });
    a({
        "xtemplate/runtime": {
            requires: ["path"]
        }
    })
})(function(a) {
    KISSY.config("modules", a)
}, KISSY.Features, KISSY.UA);
(function(a) {
    a.add("ua", function() {
        return a.UA
    });
    a.add("uri", function() {
        return a.Uri
    });
    a.add("path", function() {
        return a.Path
    });
    var e = a.UA,
        h = a.Env.host,
        l = (e.nodejs && "object" === typeof global ? global : h).JSON;
    9 > e.ieMode && (l = null);
    if (l) a.add("json", function() {
        return a.JSON = l
    }), a.parseJson = function(a) {
        return l.parse(a)
    };
    else {
        var m = /^[\],:{}\s]*$/,
            d = /(?:^|:|,)(?:\s*\[)+/g,
            k = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;
        a.parseJson = function(b) {
            return null ===
                b ? b : "string" === typeof b && (b = a.trim(b)) && m.test(b.replace(k, "@").replace(j, "]").replace(d, "")) ? (new Function("return " + b))() : a.error("Invalid Json: " + b)
        }
    }
    a.UA.nodejs && (a.KISSY = a, module.exports = a)
})(KISSY);
KISSY.add("mui/global-pc", function(e, a, t) {
    var n = window;
    var s = document;
    var i = TB.globalToolFn.isDaily();
    var o = TB.environment.isHttps;
    var r = "hover";
    var l = !!g_config.isInternational;
    var c = !!g_config.isSellerSite;
    var g = !"0" [0];
    var f = g && !n.XMLHttpRequest;
    var d = g || !!n.XDomainRequest;
    var m = navigator.userAgent;
    var u = i ? ".daily.taobao.net" : ".taobao.com";
    var v = e.Env.mods;
    var p = TB.globalToolFn.isPadApp();
    var h = TB.Global._elCont;
    var _ = e.unparam(n.location.search.replace("?", ""))["global-debug"] == "1";
    var b = g_config.appId == 1 || g_config.appId == 2;
    var T = g_config.appId == 2;
    var y = g_config.appId == 1;
    var M = g_config.pageId == "mallfp" || g_config.bizId == "mallfp";
    var w = g_config.appId == 2003;
    var I = g_config.appId == 15;
    var B = !!g_config.bizId;
    var C = g_config.sysId == "act";
    if (!M) {
        g_config.showSiteNavLogo = true
    }
    var S = TB.globalToolFn.record;
    var x = TB.globalToolFn.contentReady;
    var j = TB.globalToolFn.smartLazy;
    var N = TB.globalToolFn.safeUse;
    var L = TB.globalToolFn.formatPoint;
    var k = TB.globalToolFn.getLoginUrl;
    var H = TB.globalToolFn.getLogoutUrl;
    var E = function(e) {
        N("dom, event, cookie, ua", e)
    };
    var q = TB.Global._siteNavConfig;
    TB._openFlags = {};
    x("login-info", function() {
        TB.Global._writeLoginInfo()
    });
    x("site-nav", function() {
        TB.Global._init()
    });
    e.mix(TB.Global, {
        _init: function() {
            E(function(e) {
                b = g_config.appId == 1 || g_config.appId == 2;
                T = g_config.appId == 2;
                y = g_config.appId == 1;
                M = g_config.pageId == "mallfp" || g_config.bizId == "mallfp";
                w = g_config.appId == 2003;
                I = g_config.appId == 15;
                B = !!g_config.bizId;
                C = g_config.sysId == "act";
                if (!this._subMenus) {
                    this._subMenus = []
                }
                for (var a in A) {
                    A[a]()
                }
                e.ready(function() {
                    for (var e in D) {
                        D[e]()
                    }
                })
            })
        },
        writeLoginInfo: function(a) {
            q = e.merge(q, a);
            TB.environment.isApp = q.isApp;
            TB.environment.passCookie = q.passCookie
        },
        _writeLoginInfo: function() {
            E(function() {
                var a = e.DOM;
                var t = h.siteNavElem = s.getElementById("site-nav");
                var n = h.loginInfo = s.getElementById("login-info");
                var i = g_config.brandSiteInfo;
                if (i && i.brandSiteUrl && i.brandSiteName) {
                    var o = '<p id="simple-logo" class="sn-simple-logo">                        <a class="sn-simple-logo-link" href="//www.tmall.com/" title="\u5929\u732b\u9996\u9875">\u5929\u732b\u9996\u9875</a>';
                    o = o + '<a class="sn-simple-logo-shop" href="' + i.brandSiteUrl + '" title="' + i.brandSiteName + '">' + i.brandSiteName + "</a>";
                    o = a.create(o + "</p>");
                    a.insertBefore(o, n)
                } else if (g_config.showSiteNavLogo) {
                    var r = '<p class="sn-back-home"><i class="mui-global-iconfont">&#xf012b;</i><a href="//www.tmall.com/">\u5929\u732b\u9996\u9875</a></p>';
                    r = a.create(r);
                    a.insertBefore(r, n)
                }
                if (g_config.subUserNick) {
                    var l = '\u60a8\u597d\uff0c<span class="sn-user-nick">' + g_config.subUserNick + '</span>                            <a target="_top" href="//login' + u + '/member/logout.jhtml" id="J_Logout">\u9000\u51fa</a>';
                    n.innerHTML = l;
                    return
                }
                var c = TB.Global;
                c.loginStatusReady(function(e) {
                    c._initUserInfo(e, t, q)
                });
                c._initLoginStatus()
            })
        },
        updateLoginInfo: function() {
            TB._isLoginStatusReady = false;
            TB._isMemberInfoReady = false;
            TB.environment.isApp = false;
            var e = h.siteNavElem;
            TB.Global.loginStatusReady(function(a) {
                TB.Global._initUserInfo(a, e, q)
            });
            TB.Global._initLoginStatus()
        },
        _initUserInfo: function(a, t, o) {
            var r = TB.Global;
            var f = e.DOM;
            var d = o.spaceServer;
            var m = o.registerServer;
            var u = o.miaoxinServer;
            var v = u;
            var p = k();
            var h = H();
            if (i) {
                d = "//vip.daily.tmall.net/vip/index.htm";
                m += "?isDaily=1";
                u = "//vip.daily.tmall.net";
                v = u + "/messagebox/index.htm"
            }
            d += "?t=" + e.now();
            var _ = s.getElementById("login-info");
            if (!_) {
                return
            }
            var b = "";
            if (a.isLogin) {
                b = '<span class="sn-welcome-info">                                <span>Hi\uff0c</span>                                <a target="_top"class="j_Username j_UserNick sn-user-nick" href="' + d + '" title="' + a.nick + '">' + a.nick + '</a>                                <a class="j_Identity sn-identity hidden" target="_top"></a>                                <a class="j_Point sn-point hidden" target="_top" href="//vip.tmall.com/point/all?from=top&scm=1027.1.1.4">\u79ef\u5206<em class="j_PointValue sn-point-value">0</em>                                </a>                        </span>                        <span class="j_Message hidden sn-message-cont">                            <span class="j_MessageCont">                                <a target="_top" href="//vip.tmall.com/message/tmaller?spm=3.1000473.0.4.equqSK&from=messagebox&scm=1027.1.1.5" class="j_MessageText sn-all-msg menu-hd">\u6d88\u606f<em class="j_MessageNum sn-msg-num">0</em>                                </a>                            </span>                        </span>                        <span class="sn-msg-box j_MesssageBox hidden">                            <i class="sn-msg-hd"></i>                            <span class="sn-msg-bd">                                <a href="#" class="j_MessageTitle sn-msg-title">\u52a0\u5165\u79ef\u5206\u805a\u4e50\u90e8</a>                                <b class="j_CloseMessage sn-msg-close">&times;</b>                            </span>                        </span>                        <span class="sn-welcome-info">                            <a class="sn-logout" target="_top" href="' + h + '" id="J_Logout">\u9000\u51fa</a>                        </span>';
                _.innerHTML = b;
                var T = s.getElementById("sn-bd");
                var y = f.get(".j_UserNick", t);
                var M = 110;
                if (T && T.offsetWidth < 990) {
                    M = 80;
                    y.style.maxWidth = M + "px"
                }
                if (g) {
                    if (y.offsetWidth > M) {
                        y.style.width = M
                    }
                }
                if (l || n.g_config.notNeedMemberInfo) {} else {
                    r.memberInfoReady(function(e) {
                        if (c) {
                            r._initSellerFlag(e)
                        } else {
                            r._initMemberInfoDetail(e, v)
                        }
                    })
                }
                r._initMemberInfo()
            } else {
                b = '<em>\u55b5\uff0c\u6b22\u8fce\u6765\u5929\u732b</em><a class="sn-login" href="' + p + '" target="_top">\u8bf7\u767b\u5f55</a><a class="sn-register" href="' + m + '" target="_top">\u514d\u8d39\u6ce8\u518c</a>';
                if (l) {
                    b = '<em>\u55b5\uff0c\u6b22\u8fce\u6765\u5929\u732b\u56fd\u9645</em><a class="sn-login" href="' + p + '" target="_top">\u8bf7\u767b\u5f55</a>'
                }
                _.innerHTML = b;
                r._fireMemberInfoReadyFnList()
            }
        },
        _initSellerFlag: function(a) {
            var t = e.DOM;
            var n = e.Event;
            var s = h.siteNavElem;
            var i = a.memberInfo;
            var o = t.get(".j_Identity", s);
            var r = t.get(".j_Username", s);
            if (c && a.isMallSeller) {
                r.href = "//zhaoshang.mall.taobao.com/udform/udfPageFromPc.htm?from=top&scm=1027.1.1.6"
            }
            if (a.isMallSeller) {
                t.addClass(o, "sn-vip1");
                o.href = "//zhaoshang.mall.taobao.com/udform/udfPageFromPc.htm?from=top&scm=1027.1.1.7";
                o.title = "\u5546\u5bb6\u8d26\u53f7";
                o.innerHTML = "<span>\u5546</span>";
                t.removeClass(o, "hidden")
            } else {
                if (i.activeStatus != -99) {
                    if (i.activeStatus >= 1) {
                        t.addClass(o, "sn-vip" + i.activeStatus);
                        o.href = "//vip.tmall.com/vip/index.htm?from=top&scm=1027.1.1.2";
                        o.title = "T" + i.activeStatus + "\u5929\u732b\u4f1a\u5458";
                        o.innerHTML = "<span>T" + i.activeStatus + "</span>"
                    } else {
                        o.innerHTML = "<span>T</span>";
                        o.href = "//vip.tmall.com/vip/index.htm?layer=activation&from=top&scm=1027.1.1.3";
                        o.title = "\u52a0\u5165Tmall\u4ff1\u4e50\u90e8\uff0c\u6210\u4e3a\u5929\u732b\u4f1a\u5458"
                    }
                    t.removeClass(o, "hidden")
                }
            }
        },
        _initMemberInfoDetail: function(a, t) {
            var s = e.DOM;
            var o = e.Event;
            var r = h.siteNavElem;
            var l = a.memberInfo;
            if (!l || !a.isLogin || l.status == "error") {
                return
            }
            var c = '<a target="_top" href="' + t + '" class="j_MessageText sn-all-msg menu-hd">\u6d88\u606f<em class="j_MessageNum sn-msg-num">0</em>                    <b></b>                </a>                <span class="sn-msg-body j_MessageBody menu-bd">                    <a class="sn-shop-msg" href="' + t + '?tab=index&scm=1040.1.0.0"><em>0</em><span>\u5e97\u94fa\u6d88\u606f</span></a>                    <a class="sn-tmaller-msg" href="' + t + '?tab=tmaller&scm=1040.4.0.0&nbsp"><em>0</em><span>\u8fbe\u4eba\u6d88\u606f</span></a>                    <a class="sn-system-msg" href="' + t + '?tab=system&scm=1040.3.0.0"><em>0</em><span>\u7cfb\u7edf\u6d88\u606f</span></a>                    <a class="sn-infant-msg" href="' + t + '?tab=infant&scm=1040.2.0.0"><em>0</em><span>\u6bcd\u5a74\u6d88\u606f</span></a>                </span>';
            var g;
            var m = l.lastMessageType;
            var u = ["", "index", "tmaller", "system", "infant"];
            var v = u[m];
            var p = h.snMessageCont = s.get(".j_MessageCont");
            var _ = h.snMessage = s.get(".j_Message");
            if (false) {
                s.addClass(p, "sn-menu");
                s.addClass(_, "sn-miao-message");
                p.innerHTML = c;
                setTimeout(function() {
                    TB.Global._addMenu(s.get(".sn-menu", s.get(".j_Message")), s, o);
                    var a = s.get(".j_MessageBody");
                    var t = a.getElementsByTagName("a");
                    e.each(l.newMsgList, function(e, a) {
                        t[a - 1].getElementsByTagName("em")[0].innerHTML = e
                    })
                }, 10);
                g = t + "?tab=" + v + "&scm=1040." + m + ".0.0"
            } else {
                g = l.lastMessageUrl
            }
            if (l.activeStatus != -99) {
                var b = s.get(".j_Identity", r);
                if (l.activeStatus >= 1) {
                    s.addClass(b, "sn-vip" + l.activeStatus);
                    b.href = "//vip.tmall.com/vip/index.htm?from=top&scm=1027.1.1.2";
                    b.title = "T" + l.activeStatus + "\u5929\u732b\u4f1a\u5458";
                    b.innerHTML = "<span>T" + l.activeStatus + "</span>"
                } else {
                    b.innerHTML = "<span>T</span>";
                    b.href = "//vip.tmall.com/vip/index.htm?layer=activation&from=top&scm=1027.1.1.3";
                    b.title = "\u52a0\u5165Tmall\u4ff1\u4e50\u90e8\uff0c\u6210\u4e3a\u5929\u732b\u4f1a\u5458"
                }
                s.removeClass(b, "hidden")
            }
            if (l.availablePoints >= 0 && l.availablePoints != -99) {
                var T = s.get(".j_PointValue", r);
                T.innerHTML = L(l.availablePoints);
                var y = s.get(".j_Point", r);
                s.removeClass(y, "hidden")
            }
            if (l.newMessage > 0 && l.lastMessage && v) {
                h.snMsgText = s.get(".j_MessageText", r);
                h.snMsgText.href = g
            }
            if ((l.newMessage || l.newMessage == 0) && l.newMessage != -99) {
                var M = s.get(".j_MessageNum", r);
                var w = "56px";
                if (l.newMessage < 10) {
                    M.innerHTML = l.newMessage
                } else if (l.newMessage <= 99) {
                    M.innerHTML = l.newMessage;
                    w = "64px"
                } else {
                    M.innerHTML = "99+";
                    w = "74px"
                }
                var I = s.get(".j_Message", r);
                if (f) {
                    I.style.width = w
                }
                s.removeClass(I, "hidden")
            }
            if (l.newMessage > 0 && l.messagePopup && l.lastMessage) {
                var B = h.snMsgBox || s.get(".j_MesssageBox", r);
                var C = s.get(".j_MessageTitle", r);
                var x = s.get(".j_CloseMessage", r);
                C.innerHTML = l.lastMessage;
                C.href = g;
                o.on(x, "click", function(a) {
                    var t = "//tmm.taobao.com/member/close_message_popup.do";
                    if (i) {
                        t = "//tmm.daily.taobao.net/member/close_message_popup.do"
                    }
                    t += "?callback=_closeMessageCallback&t=" + e.now();
                    n._closeMessageCallback = function() {
                        s.addClass(B, "hidden")
                    };
                    e.getScript(t)
                });
                if (l.taskId) {
                    S("//gm.mmstat.com/messagebox.1.1?taskid=" + l.taskId)
                }
                s.removeClass(B, "hidden");
                if (d) {
                    if (C.offsetWidth >= 150) {
                        C.style.width = "150px";
                        C.innerHTML = C.innerHTML + "...";
                        C.parentNode.style.width = "158px"
                    }
                }
            }
        },
        _addMenu: function(a, t, n) {
            if (!a) {
                return
            }
            var i = this;
            var l = t.get(".menu-hd", a);
            var c = t.get(".menu-bd", a);
            if (!c || !l) {
                return
            }
            l.tabIndex = 0;
            if (!i._subMenus) {
                i._subMenus = []
            }
            i._subMenus.push(c);
            c.setAttribute("role", "menu");
            c.setAttribute("aria-hidden", "true");
            if (!c.getAttribute("id")) {
                c.setAttribute("id", e.guid("menu-"))
            }
            l.setAttribute("aria-haspopup", c.getAttribute("id"));
            l.setAttribute("aria-label", "\u53f3\u952e\u5f39\u51fa\u83dc\u5355\uff0ctab\u952e\u5bfc\u822a\uff0cesc\u5173\u95ed\u5f53\u524d\u83dc\u5355");
            var g = false;
            if (!o && f) {
                g = s.createElement("iframe");
                g.src = "about: blank";
                g.className = "menu-bd";
                a.insertBefore(g, c)
            }
            n.on(a, "mouseover", function(n) {
                var s = n.relatedTarget;
                while (s && s !== a) {
                    s = s.parentNode
                }
                if (!h.snMsgBox) {
                    h.snMsgBox = t.get(".j_MesssageBox")
                }
                var o = n.target;
                if (h.snMsgBox && h.snMsgBox.style.display !== "none") {
                    if (o.parentNode.parentNode.className.indexOf("j_Message") >= 0) {
                        h.snMsgBox.style.display = "none"
                    }
                }
                if (s !== a) {
                    e.each(i._subMenus, function(e) {
                        if (e !== c) {
                            t.removeClass(e.parentNode, r);
                            e.setAttribute("aria-hidden", "true")
                        }
                    });
                    t.addClass(a, r);
                    c.setAttribute("aria-hidden", "false");
                    if (!g) {
                        return
                    }
                    g.style.height = parseInt(c.offsetHeight) + 25 + "px";
                    g.style.width = parseInt(c.offsetWidth) + 1 + "px"
                }
            });
            n.on(a, "mouseout", function(n) {
                var s = n.relatedTarget;
                while (s && s !== a) {
                    s = s.parentNode
                }
                if (s !== a) {
                    t.removeClass(a, r);
                    c.setAttribute("aria-hidden", "true");
                    e.each(c.getElementsByTagName("input"), function(e) {
                        if (e.getAttribute("type") !== "hidden") {
                            e.blur()
                        }
                    })
                }
            });
            n.on(a, "keydown", function(e) {
                var n = e.keyCode;
                if (n == 27 || n == 37 || n == 38) {
                    t.removeClass(a, r);
                    c.setAttribute("aria-hidden", "true");
                    l.focus();
                    e.preventDefault()
                } else if (n == 39 || n == 40) {
                    t.addClass(a, r);
                    c.setAttribute("aria-hidden", "false");
                    e.preventDefault()
                }
            });
            var d;
            n.on(a, "focusin", function() {
                if (d) {
                    clearTimeout(d);
                    d = null
                }
            });
            n.on(a, "focusout", function() {
                d = setTimeout(function() {
                    t.removeClass(a, r);
                    c.setAttribute("aria-hidden", "true")
                }, 100)
            })
        },
        run: function() {},
        getCartElem: function() {
            var a = e.DOM;
            var t = h.siteNavElem;
            return t && a.get(".sn-cart", t)
        },
        addPadGuide: function(a) {
            e.use("mui/app-guide/main", function(e, t) {
                var n = new t({
                    container: a,
                    type: "small-head"
                });
                n.show()
            })
        }
    });
    var A = {
        siteNav: function() {
            var a = e.Event;
            var t = e.DOM;
            var n = h.siteNavElem;
            if (!n) return;
            n.setAttribute("role", "navigation");
            e.each(t.query(".sn-menu", n), function(e) {
                TB.Global._addMenu(e, t, a)
            });
            TB.Global.loginStatusReady(function(e) {
                if (e.isLogin) {
                    if (e.isMallSeller) {
                        var a = t.get(".j_MyTaobao", n);
                        var s = t.get(".j_SellerCenter", n);
                        if (s && a) {
                            t.addClass(a, "hidden");
                            t.removeClass(s, "hidden")
                        }
                    }
                }
            })
        },
        sellerCenter: function() {
            var a = e.DOM;
            if (i) {
                var t = a.get("a", ".j_SellerCenter");
                a.attr(t, "href", "//mai.daily.taobao.net/seller_admin.htm")
            }
        },
        initLogout: function() {
            var a = s.getElementById("#J_Logout");
            if (!a) {
                return
            }
            e.Event.on(a, "click", function(e) {
                e.halt();
                var t = a.href;
                (new Image).src = "//taobao.alipay.com/user/logout.htm";
                setTimeout(function() {
                    n.location.href = t
                }, 20)
            })
        },
        initHeader: function() {
            var e = n.TMall || {};
            e.THeader = {
                init: function() {},
                setNav: function(e) {}
            };
            window.TMall = e
        },
        padHandler: function() {
            var a = e.DOM;
            if (p) {
                a.addClass("body", "mui-global-in-pad-app");
                g_config.needMallBar = false;
                g_config.needMiniBag = false
            }
            if (e.UA.ipad) {
                a.addClass("body", "mui-global-in-pad");
                var t = B || w || T || l || C;
                if (I || M || y || p) {
                    t = false
                }
                if (t) {
                    var n = a.get("#mallPage");
                    if (!n) {
                        n = "body"
                    }
                    a.prepend(a.create('<div id="J_GlobalPadGuide"></div>'), n);
                    TB.Global.addPadGuide("#J_GlobalPadGuide")
                }
            }
        },
        ieHandler: function() {
            if (I || y) {
                return
            }
            var e = a.create('<div id="J_BrowserUpdate" class="browser-update" data-spm="a2226mw">                <span class="update-inner">                    <span class="update-cat"></span>                    <span id="J_updateNotice">\u55b5~\u4e3a\u9884\u9632\u8d2d\u7269\u98ce\u9669\uff0c\u4eab\u53d7\u66f4\u68d2\u7684\u4f53\u9a8c\uff0c\u5929\u732b\u5efa\u8bae\u60a8<b class="update-ie"></b><a href="//microsoftstore.tmall.com/p/rd834279.htm" target="_blank" title="\u70b9\u51fb\u5347\u7ea7\u6d4f\u89c8\u5668">\u5347\u7ea7IE\u6d4f\u89c8\u5668</a>\u6216\u8005\u70b9\u51fb\u4e0b\u8f7d<a class="uc-link" href="http://down2.uc.cn/pcbrowser/index.php?id=101&pid=4415" title="UC\u6d4f\u89c8\u5668web\u7248">UC\u6d4f\u89c8\u5668</a>\u6216<b class="update-chrome" title="\u8c37\u6b4c\u6d4f\u89c8\u5668"></b><a href="http://www.google.cn/intl/zh-CN/chrome/">\u8c37\u6b4c\u6d4f\u89c8\u5668</a>                    </span>                    <span id="J_BtnClose" class="update-close"></span>                </span>            </div>');
            if (d) {
                a.prepend(e, s.body);
                t.on("#J_BtnClose", "click", function(e) {
                    a.get("#J_BrowserUpdate").style.display = "none";
                    e.halt()
                })
            }
        }
    };
    var D = {
        subNav: function() {
            var a = g_config.bizId || g_config.pageId;
            if (!g_config.removeSubNav && a && !M && !w && a !== "chaoshi" && !b) {
                N("node", function() {
                    e.ready(function() {
                        var a = e.Node('<div data-spm="a2227i4" class="mui-global-sub-nav"><h2>\u66f4\u591a<i></i></h2><div class="mui-global-nav-list"><ul></ul></div><b class="mui-global-kill-line"></b></div>');
                        var t = e.one("#mallLogo");
                        var n = "mui-global-sub-nav-hover";
                        if (t) {
                            t.append(a);
                            a.on("mouseenter tap", function() {
                                a.detach("mouseenter tap", arguments.callee);
                                a.addClass(n);
                                e.getScript("//www.tmall.com/wow/tmbase/act/global-sub-nav?t=" + +new Date, function() {
                                    if (__rgn && __rgn["global-sub-nav"]) {
                                        var t = a.one("ul");
                                        t.append(e.Node(__rgn["global-sub-nav"]));
                                        a.on("tap", function() {
                                            if (a.hasClass(n)) {
                                                a.removeClass(n)
                                            } else {
                                                a.addClass(n)
                                            }
                                        });
                                        a.on("mouseenter", function() {
                                            a.addClass(n)
                                        });
                                        a.on("mouseleave", function() {
                                            a.removeClass(n)
                                        })
                                    }
                                })
                            })
                        }
                    })
                })
            }
        },
        hotQuery: function() {
            if (g_config.removeHotQuery) {
                return
            }
            N("io, dom, event", function() {
                var a = g_config.hotKeyId || g_config.bizId;
                var t = g_config.actId || g_config.hotKeyId;
                var s = "tmall-hq";
                var i;
                if (t) {
                    i = g_config.actType || 2;
                    s = "tmall-activity"
                }
                if ((a || t) && !b) {
                    e.ready(function() {
                        var o = "//suggest.taobao.com/sug";
                        if (n.location.href.indexOf("__dev__") >= 0) {
                            o = "//suggest.proxy.taobao.org/sug"
                        }
                        var r = "//list.tmall.com/search_product.htm?";
                        var l = e.DOM;
                        var c = e.Event;

                        function g(a) {
                            if (a && a.success && a.model && a.model.list && a.model.list.length) {
                                var n = l.create('<ul data-spm="a1z5h"></ul>');
                                n.className = "hot-query";
                                var s = [];
                                var o = [];
                                var g;
                                e.each(a.model.list, function(e, a) {
                                    var c = [];
                                    c.push(g_config.bizId || "");
                                    c.push(g_config.sysId || "");
                                    c.push("pc");
                                    c = c.join(".");
                                    g = c + "_" + (e.xiaoer ? "1" : "0") + "." + a + "_hq";
                                    if (t) {
                                        g = i + "_" + t + "_aq"
                                    }
                                    var f = r + "from=" + g + "&click_id=" + e.query + "&q=" + e.query;
                                    var d = l.create('<li><a href="' + f + '">' + e.query + "</a></li>");
                                    if (e.highlight) {
                                        l.addClass(d, "hot-query-highlight")
                                    }
                                    n.appendChild(d);
                                    s.push(e.query);
                                    o.push(g)
                                });
                                (window.goldlog_queue || (window.goldlog_queue = [])).push({
                                    action: "goldlog.record",
                                    arguments: ["/msearch.3.1", "tmallsearch", s.join(",") + "|" + o.join(","), "H46777383"]
                                });
                                var f = l.get("#mallSearch");
                                if (f) {
                                    f.appendChild(n);
                                    var d = '<form method="GET" accept-charset="gbk" target="_blank" class="hidden" action="{action}">                                            <input type="hidden" value="{q}" name="q"/>                                                <input type="hidden" value="{click_id}" name="click_id"/>                                                <input type="hidden" value="{from}" name="from"/>                                                <input type="hidden" value="{spm}" name="spm"/>                                            </form>';
                                    var m = l.get(".hot-query");
                                    c.delegate(m, "click", "a", function(a) {
                                        var t = a.currentTarget;
                                        var n = l.attr(t, "href");
                                        var s = e.unparam(n.split("?")[1]);
                                        s.action = n;
                                        var i = e.DOM.create(e.substitute(d, s));
                                        l.insertAfter(i, f);
                                        i.submit();
                                        a.halt()
                                    })
                                }
                            }
                        }
                        TB.globalToolFn.requestHotQuery = TB.globalToolFn.createLoader(function(n) {
                            if (g_config.searchbarHQ) {
                                n(g_config.searchbarHQ)
                            } else {
                                new e.IO({
                                    type: "get",
                                    url: o,
                                    data: {
                                        area: s,
                                        code: "utf-8",
                                        actId: t,
                                        type: i,
                                        src: [a || "", g_config.sysId || "", g_config.devId || "pc"].join(".")
                                    },
                                    scriptCharset: "utf-8",
                                    dataType: "jsonp",
                                    success: function(e) {
                                        g_config.searchbarHQ = e;
                                        n(e)
                                    }
                                })
                            }
                        });
                        TB.globalToolFn.requestHotQuery(function(e) {
                            g(e)
                        })
                    })
                }
            })
        },
        searchbar: function() {
            if (!g_config.notInitSearchBar) {
                N("dom, event, ua", function(e) {
                    var a = e.Event;
                    var t = e.DOM;
                    var n = e.get("#mallSearch");
                    if (n) {
                        var s = e.get("#mq");
                        var i = t.get("label", n);
                        if (!e.trim(s.value)) {
                            i.style.visibility = "visible"
                        }

                        function o() {
                            e.use("mui/searchbar/instance/default", function(e, a) {
                                TB.instance.searchbar = a.build({
                                    autoFocus: M,
                                    extraParams: {
                                        vmarket: g_config.chnConfig && g_config.chnConfig.marketId
                                    }
                                });
                                TB.Global.fire("searchbarReady");
                                TB.globalToolFn.instanceHandler("mui/searchbar", TB.instance.searchbar);
                                e.log("Successfully!");
                                setTimeout(function() {
                                    i.style.display = "none"
                                }, 200)
                            })
                        }
                        j(function() {
                            o()
                        })
                    }
                })
            }
        },
        lazyRun: function() {
            j(function() {
                N("io, dom, event", function() {
                    var a = e.DOM;
                    var t = e.Event;
                    var n = a.get(".sn-seller", "#site-nav");
                    var s = a.get(".sn-sitemap", "#site-nav");
                    t.on(n, "mouseenter", function() {
                        t.detach(n, "mouseenter", arguments.callee);
                        var s = a.get(".sn-seller-lazy");
                        if (g_config.isInternational) {
                            e.IO({
                                url: "//ald.taobao.com/recommend.htm",
                                data: {
                                    appId: "201508061"
                                },
                                dataType: "jsonp",
                                complete: function(e) {
                                    var e = e.data;
                                    if (e && e.length > 0) {
                                        var t = "<ul>",
                                            n = "<li><h3>\u5546\u5bb6\uff1a</h3>",
                                            i = "<li><h3>\u5e2e\u52a9\uff1a</h3>",
                                            o, r, l = e.length;
                                        for (var c = 0; c < l; c++) {
                                            var g = e[c];
                                            if (g.parent == "\u5546\u5bb6") {
                                                o = 1;
                                                n += '<a target="_top" href="' + g.link + '">' + g.title + "</a>"
                                            } else if (g.parent == "\u5e2e\u52a9") {
                                                r = 1;
                                                i += '<a target="_top" href="' + g.link + '">' + g.title + "</a>"
                                            }
                                        }
                                        n += "</li>";
                                        i += "</li>";
                                        !!o && (t += n);
                                        !!o && (t += i);
                                        t += "</ul>";
                                        a.append(a.create(t), s)
                                    }
                                },
                                timeout: 5
                            })
                        } else {
                            var i = "header-sellernav";
                            e.getScript("//www.tmall.com/wow/tmbase/act/" + i + "?t=" + +new Date, {
                                charset: "utf-8",
                                success: function() {
                                    if (window["__rgn"] && window["__rgn"][i]) {
                                        var e = window["__rgn"][i];
                                        a.append(a.create(e), s)
                                    }
                                }
                            })
                        }
                    });
                    t.on(s, "mouseenter", function() {
                        t.detach(s, "mouseenter", arguments.callee);
                        var n = a.get(".sn-sitemap-lazy");
                        var i = "header-sitemap";
                        if (g_config.isSellerSite) {
                            i = "header-sellersitemap"
                        }
                        if (g_config.isInternational) {
                            i = "header-hksitemap"
                        }
                        e.getScript("//www.tmall.com/wow/tmbase/act/" + i + "?t=" + +new Date, {
                            charset: "utf-8",
                            success: function() {
                                if (window["__rgn"] && window["__rgn"][i]) {
                                    var e = window["__rgn"][i];
                                    a.append(a.create(e), n)
                                }
                            }
                        })
                    });
                    var i = a.query(".mui-global-footer-lazy");
                    var o = a.get("#footer");
                    if (i.length) {
                        e.use("mui/view-port-listen/index", function(e, a) {
                            var t = new a({
                                listenItems: e.all(i),
                                listenCallback: function() {
                                    var a = e.one(this);
                                    var t = e.JSON.parse(a.attr("lazytms-cfg").replace(/'/g, '"')).tmsId.replace(".php", "");
                                    e.getScript("//www.tmall.com/tms/read-tms3.php?id=" + t + "&t=" + +new Date, {
                                        charset: "utf-8",
                                        success: function() {
                                            if (window["__rgn"] && window["__rgn"][t]) {
                                                a.html(window["__rgn"][t])
                                            }
                                        }
                                    })
                                },
                                diff: {
                                    top: 200,
                                    bottom: 200
                                }
                            });
                            TB.globalToolFn.instanceHandler("mui/view-port-listen/index", t)
                        })
                    }
                })
            })
        },
        headerFix: function() {
            if (g_config.needHeaderFixed && e.UA.ie != 6 || _) {
                j(function() {
                    N("dom, event, node", function() {
                        var a = e.one("#header");
                        var t = e.one(h.siteNavElem);
                        if (a) {
                            var s;
                            var i;
                            var o = e.one(n);
                            o.on("scroll", function() {
                                i = o.scrollTop();
                                s = t.offset().top + 36;
                                if (i > s) {
                                    a.addClass("mui-global-header-fixed")
                                } else {
                                    a.removeClass("mui-global-header-fixed")
                                }
                            })
                        }
                    })
                })
            }
        }
    }
}, {
    requires: ["dom", "event"]
});
var TB = KISSY.app ? KISSY.app("TB") : KISSY;
(function(e, a, n, t) {
    var i = n.version === "1.20" || n.version === "1.1.6";

    function o() {
        var i = n;
        var o = t;
        var s = e.g_config = e.g_config || {};
        if (i) {
            var r = s.loadedCss,
                l = s.seed;
            if (r && r.length) {
                for (var c in r) {
                    i.add(r[c], function() {})
                }
            }
            if (l) {
                i.config(l)
            }
        }
        if ((i.version >= "1.40" || i.version.replace(/\./g, "") >= "140") && !s.removeGlobalAlias) {
            i.config({
                modules: {
                    sizzle: {
                        alias: ["node"]
                    },
                    calendar: {
                        alias: ["gallery/calendar-deprecated/1.0/"]
                    },
                    datalazyload: {
                        alias: ["gallery/datalazyload/1.1/"]
                    },
                    switchable: {
                        alias: ["gallery/switchable/1.3.1/"]
                    },
                    imagezoom: {
                        alias: ["gallery/imagezoom/1.0/"]
                    },
                    waterfall: {
                        alias: ["gallery/waterfall/1.0/"]
                    },
                    flash: {
                        alias: ["gallery/flash/1.0/"]
                    }
                }
            })
        }
        o.loginHttp = "https";
        o._isLoginStatusReady = false;
        o._loginStatusReadyFnList = [];
        o._isMemberInfoReady = false;
        o._memberInfoReadyFnList = [];
        o.userInfo = {
            memberInfo: {}
        };
        o.instance = {};
        var f = e;
        var u = a;
        var m = f.location.hostname.indexOf("tmall.com") >= 0 || f.location.hostname.indexOf("tmall.net") >= 0 || f.location.hostname.indexOf("tmall.hk") >= 0;
        var g = /\.net$|com\.hk$/.test(f.location.hostname);
        var d = s.devId == "mobile" || s.devId == "m";
        var v = f.location.href.indexOf("https://") === 0;
        var p = "";
        var b = "";
        o.environment = i.merge(o.environment || {}, {
            isTmall: m,
            isDaily: g,
            isHttps: v
        });
        s.tmallConfig = {
            commonJS: {
                memberInfo: {},
                tDog: {},
                tLabs: {},
                mpp: {},
                miniCart: {},
                brandBar: {},
                miniBag: {},
                checkB2BUser: {},
                shareFB: {}
            }
        };
        s.moduleTimeStamp = {
            minilogin: "",
            globalCss: "",
            globalJs: ""
        };
        var _ = s.globalInstanceStatus = {};
        var h = s.tmallConfig;
        var y = {};
        var I = navigator.userAgent;
        var T = g ? "assets.daily.taobao.net" : "assets.alicdn.com";
        var M = g ? "g-assets.daily.taobao.net" : "g.alicdn.com";
        var w = i.unparam(f.location.search.substring(1));
        var S = i.Env.mods;
        var k = false;
        var C = +new Date;
        var L = 4e3;
        var B = 4e3;
        var x = "load";
        var R = "scroll";
        var F = "mousemove keydown mousedown touchstart touchend";
        var j;
        var N = w.ttid;
        if (i.isString(N)) {
            if (N.indexOf("@taobao_") >= 0 || N.indexOf("@tmall_") >= 0 || I.indexOf("-PD/") >= 0 && I.indexOf("AliApp") >= 0) {
                j = true
            }
        }
        var H = {
            isApp: false,
            passCookie: true,
            loginServer: d ? "//login.tmall.com/" : "//login.tmall.com/",
            logoutServer: d ? "//login.m.taobao.com/logout.htm" : "//login.taobao.com/member/logout.jhtml",
            registerServer: "//register.tmall.com/",
            spaceServer: "//vip.tmall.com",
            miaoxinServer: "//miaoxin.tmall.com",
            loginHkServer: "//www.tmall.hk/market/tmallhk/login.php"
        };
        o.globalToolFn = {
            isDaily: function() {
                return g
            },
            isPadApp: function() {
                return j
            },
            getAssetsHost: function(e) {
                if (e === "g") {
                    return M
                } else {
                    return T
                }
            },
            isHttps: function() {
                return v
            },
            record: function(e) {
                if (!e) return;
                (new Image).src = e
            },
            escapeHTML: function(e) {
                var a = u.createElement("div"),
                    n = u.createTextNode(e);
                a.appendChild(n);
                return a.innerHTML
            },
            isInBlacklist: function() {
                var e = h.commonJS.miniBag.blacklist;
                if (!e) return false;
                for (var a = 0; a < e.length; a++) {
                    if (f.location.href.indexOf(e[a]) > -1) {
                        return true
                    }
                }
                return w.frm && w.frm == "tmalltiyan"
            },
            available: function(e, a) {
                var n = false;
                setTimeout(function() {
                    n = true
                }, 5e3);
                setTimeout(function() {
                    if (u.getElementById(e)) {
                        a()
                    } else if (!n) {
                        setTimeout(arguments.callee, 50)
                    }
                }, 50)
            },
            contentReady: function(e, a) {
                var n = false;
                setTimeout(function() {
                    n = true
                }, 5e3);
                setTimeout(function() {
                    var t = u.getElementById(e);
                    if (t && t.childNodes) {
                        a()
                    } else if (!n) {
                        setTimeout(arguments.callee, 50)
                    }
                }, 50)
            },
            safeUse: function(e, a) {
                if (i.version < "1.40") {
                    e = e.replace("io", "ajax")
                }
                i.use(e, a)
            },
            createLoader: function(e) {
                var a, n, t = [],
                    i;
                return function(o, s) {
                    if (s !== 0 && !s) {
                        s = 1
                    }
                    if (s & 1 && !n) {
                        n = true;
                        e(function(e) {
                            a = e;
                            while (i = t.shift()) {
                                i && i.apply(null, [a])
                            }
                        })
                    }
                    if (a !== undefined) {
                        o && o.apply(null, [a]);
                        return a
                    }
                    if (!(s & 2)) {
                        o && t.push(o)
                    }
                    return a
                }
            },
            whenInstanceReady: function(e, a) {
                A(function() {
                    i.ready(function() {
                        if (_[e]) {
                            a(i, o.instance[e])
                        } else {
                            o.Global.on(e + ":ready", function() {
                                a(i, o.instance[e])
                            })
                        }
                    })
                })
            },
            instanceHandler: function(e, a) {
                A(function() {
                    i.ready(function() {
                        _[e] = true;
                        o.instance[e] = a;
                        o.Global.fire(e + ":ready")
                    })
                })
            },
            smartLazy: function(e, a) {
                i.ready(function() {
                    A(function() {
                        var n = y.bodyEl || (y.bodyEl = u.body);
                        var t = i.Event;
                        var s;
                        var r = {
                            scroll: true,
                            action: true,
                            load: true,
                            timeout: true
                        };
                        if (i.isFunction(e)) {
                            r.callback = e;
                            r.customDelay = a
                        } else {
                            r = i.merge(r, e)
                        }
                        var l = r.customDelay || L;
                        var c = r.scroll;
                        var m = r.action;
                        var g = r.load;
                        var d = r.timeout;
                        var v = o.globalToolFn.createLoader(function(e) {
                            var a = function() {
                                setTimeout(function() {
                                    e(true)
                                }, 0);
                                if (c) {
                                    t.detach(f, R, o)
                                }
                                if (m) {
                                    t.detach(n, F, o)
                                }
                                if (d) {
                                    clearTimeout(s)
                                }
                            };
                            var o = i.buffer(a);
                            if (g) {
                                if (!k) {
                                    t.on(f, x, function() {
                                        i.later(function() {
                                            a()
                                        }, B)
                                    })
                                } else {
                                    var r = +new Date;
                                    var u = B - (r - (C || r));
                                    i.later(function() {
                                        a()
                                    }, u > 0 ? u : 0)
                                }
                            }
                            if (d) {
                                s = setTimeout(o, l + B)
                            }
                            if (m) {
                                t.on(n, F, o)
                            }
                            if (c) {
                                t.on(f, R, o)
                            }
                        });
                        if (i.isFunction(r.callback)) {
                            v(function() {
                                r.callback()
                            }, 1)
                        }
                    })
                })
            },
            formatPoint: function(e) {
                var a = "";
                if (e >= 0 && e < 1e4) {
                    a = e
                } else if (e == 1e4) {
                    a = "1\u4e07"
                } else if (e < 1e5) {
                    a = parseInt(e / 1e3) / 10 + "\u4e07";
                    if (e % 1e3 > 0) {
                        a += "+"
                    }
                } else if (e < 1e6) {
                    a = parseInt(e / 1e4) + "\u4e07";
                    if (e % 1e4 > 0) {
                        a += "+"
                    }
                } else if (e < 1e7) {
                    a = parseInt(e / 1e6) + "\u767e\u4e07";
                    if (e % 1e6 > 0) {
                        a += "+"
                    }
                } else if (e < 1e8) {
                    a = parseInt(e / 1e7) + "\u5343\u4e07";
                    if (e % 1e7 > 0) {
                        a += "+"
                    }
                } else {
                    a = parseInt(e / 1e8) + "\u4ebf";
                    if (e % 1e8 > 0) {
                        a += "+"
                    }
                }
                return a
            },
            getLoginUrl: function() {
                if (p) {
                    return p
                } else {
                    var e = H.loginServer;
                    var a = H.loginHkServer;
                    var n = f.location.href;
                    if (/^http.*(\/member\/login\.jhtml)$/i.test(n)) {
                        n = ""
                    }
                    var t = H.redirectUrl || n;
                    var i = t;
                    if (t) {
                        if (s.isInternational) {
                            e = a + "?redirect_url=" + encodeURIComponent(i)
                        } else {
                            e += "?redirectURL=" + encodeURIComponent(i)
                        }
                    }
                    if (g) {
                        e = "//login.daily.taobao.net/?redirect_url=" + encodeURIComponent(i)
                    }
                    return p = e
                }
            },
            getLogoutUrl: function() {
                if (b) {
                    return b
                } else {
                    var e = "";
                    if (g) {
                        e = "//login.daily.taobao.net/member/logout.jhtml?f=top&redirectURL=" + (d ? encodeURIComponent(f.location.href) : encodeURIComponent(D()))
                    } else {
                        e = H.logoutServer + "?redirectURL=" + (d ? encodeURIComponent(f.location.href) : encodeURIComponent(D()))
                    }
                    return b = e
                }
            }
        };
        var U = o.globalToolFn.escapeHTML;
        var E = o.globalToolFn.safeUse;
        var G = o.globalToolFn.record;
        var D = o.globalToolFn.getLoginUrl;
        var A = function(e) {
            E("dom, event, cookie, ua", e)
        };
        o.Global = {
            _elCont: y,
            _siteNavConfig: H,
            _initLoginStatus: function() {
                var e = o.Global;
                var a = o.userInfo;
                var n = i.Cookie.get("_nk_") || "";
                n = U(unescape(n.replace(/\\u/g, "%u")));
                var t = i.Cookie.get("_l_g_") || "";
                e._seedLoginApi(function() {
                    o.userInfo.status = "success";
                    a.nick = U(unescape(userCookie["_nk_"].replace(/\\u/g, "%u")));
                    a.tracknick = U(unescape(userCookie["tracknick"].replace(/\\u/g, "%u")));
                    a.isLogin = !!(userCookie["_l_g_"] && a.nick);
                    a.trackId = userCookie["t"] || "";
                    a.unb = userCookie["unb"] || "";
                    a.uc1 = userCookie["uc1"] || "";
                    a.cookie2 = userCookie["cookie2"] || "";
                    a.tbToken = userCookie["_tb_token_"] || "";
                    a.isMallSeller = !!i.unparam(a.uc1).tmb;
                    if (a.isLogin && (a.nick != n || !a.tbToken)) {
                        var t = "//tmcc.tmall.com/pass.htm";
                        if (g) {
                            t = "//tmcc.daily.tmall.net/pass.htm"
                        }
                        G(t)
                    }
                    e._fireLoginStatusReadyFnList()
                }, function() {
                    o.userInfo.status = "error";
                    e._fireLoginStatusReadyFnList()
                })
            },
            _seedLoginApi: function(e, a) {
                var n = "//www.taobao.com/go/app/tmall/login-api.php";
                if (g) {
                    n = "//www.daily.taobao.net/go/app/tmall/login-api.php"
                }
                n += "?" + Math.random();
                i.getScript(n, {
                    success: e,
                    error: a,
                    timeout: 3
                })
            },
            loginStatusReady: function(e) {
                if (o._isLoginStatusReady) {
                    e.call(f, o.userInfo)
                } else {
                    if (o._loginStatusReadyFnList) {
                        o._loginStatusReadyFnList.push(e)
                    }
                }
            },
            _fireLoginStatusReadyFnList: function() {
                if (o._isLoginStatusReady) {
                    return
                }
                o._isLoginStatusReady = true;
                if (o._loginStatusReadyFnList) {
                    for (var e = 0; e < o._loginStatusReadyFnList.length; e++) {
                        o._loginStatusReadyFnList[e].call(f, o.userInfo)
                    }
                    o._loginStatusReadyFnList = []
                }
            },
            _initMemberInfo: function() {
                var e = o.Global;
                var a = o.userInfo;
                var n = "//top-tmm.taobao.com/member/query_member_top.do";
                if (g) {
                    n = "//tmm.daily.taobao.net/member/query_member_top.do"
                }
                n += "?callback=_initMemberInfoCallback&is_new=true&t=" + i.now();
                f._initMemberInfoCallback = function(n) {
                    a.memberInfo = n;
                    a.memberInfo.cookies = {
                        unb: {
                            value: a.unb
                        },
                        t: {
                            value: a.t
                        },
                        uc1: {
                            value: a.uc1
                        },
                        login: true
                    };
                    a.memberInfo.mallSeller = a.isMallSeller;
                    a.memberInfo.status = "success";
                    e._fireMemberInfoReadyFnList()
                };
                i.getScript(n, {
                    error: function() {
                        a.memberInfo.status = "error";
                        e._fireMemberInfoReadyFnList()
                    },
                    timeout: 3
                })
            },
            memberInfoReady: function(e) {
                if (o._isMemberInfoReady) {
                    e.call(f, o.userInfo)
                } else {
                    if (o._memberInfoReadyFnList) {
                        o._memberInfoReadyFnList.push(e)
                    }
                }
            },
            _fireMemberInfoReadyFnList: function() {
                if (o._isMemberInfoReady) {
                    return
                }
                o._isMemberInfoReady = true;
                if (o._memberInfoReadyFnList) {
                    for (var e = 0; e < o._memberInfoReadyFnList.length; e++) {
                        o._memberInfoReadyFnList[e].call(f, o.userInfo)
                    }
                }
            },
            isLogin: function() {
                var e = i.Cookie.get("tracknick"),
                    a = i.Cookie.get("_nk_") || e;
                return !!(i.Cookie.get("_l_g_") && a || i.Cookie.get("ck1") && e)
            }
        };
        A(function() {
            i.log("::global::begin use global module");
            i.Event.on(f, "load", function() {
                k = true;
                C = +new Date
            });
            if (S["mui/global-pc"]) {
                i.use("mui/global-pc")
            }
            o.Global = i.mix(o.Global, i.EventTarget);
            o.Global.on("mainReady", function() {
                o.Global.isMainReady = true
            });
            i.ready(function() {
                if (i.DOM.get("#J_TSiteNav") || d) {
                    o.Global._initLoginStatus();
                    if (d && s.needMemberInfoMobile || !d) {
                        o.Global._initMemberInfo()
                    }
                }
                if (S["mui/globalmodule/global-mod"]) {
                    i.use("mui/globalmodule/global-mod")
                }
            })
        })
    }
    if (i) {
        TB.add("mod~global", o)
    } else {
        TB.add("mod~global", function() {});
        o()
    }
})(window, document, KISSY, TB);
KISSY.config({
    modules: {
        "mui/mallbar/index": {
            requires: ["base", "event", "node", "anim", "ua", "swf", "dom", "cookie", "ajax", "xtemplate", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/model", "mui/mallbar/mallbar-item", "mui/mallbar/store", "mui/mallbar/mallbar.css", "mui/mallbar/mallbar-tab.css", "mui/mallbar/mallbar-guide", "mui/mallbar/plugin-prof", "mui/mallbar/plugin-asset", "mui/mallbar/plugin-brand", "mui/mallbar/plugin-live", "mui/mallbar/plugin-foot", "mui/mallbar/plugin-top", "mui/mallbar/plugin-ue", "mui/mallbar/plugin-qrcode", "mui/mallbar/plugin-favor", "mui/mallbar/plugin-charge", "mui/mallbar/plugin-cart", "mui/mallbar/plugin-nav", "mui/mallbar/plugin-worth"]
        },
        "mui/mallbar/mallbar-guide": {
            requires: ["node", "event", "dom", "mui/mallbar/mallbar-guide.css"]
        },
        "mui/mallbar/mallbar-item": {
            requires: ["base", "event", "node", "anim", "xtemplate", "mui/minilogin/index", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store"]
        },
        "mui/mallbar/model": {
            requires: ["base", "cookie", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store"]
        },
        "mui/mallbar/plugin-asset": {
            requires: ["base", "node", "anim", "event", "mui/mallbar/conf", "mui/mallbar/util", "xtemplate", "mui/mallbar/store", "mui/mallbar/plugin-asset.css"]
        },
        "mui/mallbar/plugin-brand": {
            requires: ["base", "xtemplate", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "mui/mallbar/plugin-brand.css"]
        },
        "mui/mallbar/plugin-cal": {
            requires: ["base", "node", "event", "ua", "xtemplate", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "mui/mallbar/plugin-cal.css"]
        },
        "mui/mallbar/plugin-cart": {
            requires: ["base", "event", "ua", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "mui/minicart/minicart", "mui/minicart/model", "mui/mallbar/plugin-cart.css"]
        },
        "mui/mallbar/plugin-charge": {
            requires: ["base", "node", "event", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/plugin-charge.css"]
        },
        "mui/mallbar/plugin-example": {
            requires: ["base", "node", "event", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/plugin-example.css"]
        },
        "mui/mallbar/plugin-favor": {
            requires: ["base", "node", "event", "ajax", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/plugin-favor.css"]
        },
        "mui/mallbar/plugin-foot": {
            requires: ["base", "node", "ajax", "event", "anim", "ua", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "mui/mallbar/plugin-foot.css"]
        },
        "mui/mallbar/plugin-live": {
            requires: ["base", "node", "event", "xtemplate", "anim", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "cookie", "json", "mui/mallbar/plugin-live.css"]
        },
        "mui/mallbar/plugin-my": {
            requires: ["base", "node", "event", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "mui/mallbar/plugin-my.css"]
        },
        "mui/mallbar/plugin-nav": {
            requires: ["base", "node", "ua", "event", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "mui/mallbar/plugin-nav.css"]
        },
        "mui/mallbar/plugin-prof": {
            requires: ["cookie", "base", "dom", "node", "event", "ajax", "mui/minilogin/index", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "xtemplate", "mui/mallbar/plugin-prof.css"]
        },
        "mui/mallbar/plugin-promotion": {
            requires: ["base", "node", "dom", "event", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "mui/mallbar/plugin-promotion.css"]
        },
        "mui/mallbar/plugin-qrcode": {
            requires: ["base", "dom", "node", "event", "mui/minilogin/index", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "xtemplate", "mui/mallbar/plugin-qrcode.css"]
        },
        "mui/mallbar/plugin-top": {
            requires: ["base", "node", "event", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "mui/mallbar/plugin-top.css"]
        },
        "mui/mallbar/plugin-trip": {
            requires: ["base", "node", "event", "ua", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "mui/mallbar/plugin-trip.css"]
        },
        "mui/mallbar/plugin-ue": {
            requires: ["base", "node", "event", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "mui/mallbar/plugin-ue.css"]
        },
        "mui/mallbar/plugin-worth": {
            requires: ["base", "node", "event", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/store", "xtemplate", "sizzle", "mui/mallbar/plugin-worth.css"]
        },
        "mui/mallbar/prof-muying": {
            requires: ["xtemplate", "io", "node", "mui/mallbar/conf", "mui/mallbar/util", "mui/mallbar/prof-muying.css"]
        },
        "mui/mallbar/store": {
            requires: ["mui/mallbar/conf", "mui/mallbar/util", "mui/storage/index"]
        },
        "mui/mallbar/util": {
            requires: ["cookie", "ajax", "event", "dom", "ua", "mui/mallbar/conf", "mui/minilogin/index", "mui/code-tracker/code-tracker"]
        },
        "mui/button/index": {
            requires: ["dom", "event"]
        },
        "mui/hybrid": {
            alias: "mui/hybrid/index"
        },
        "mui/share/index": {
            requires: ["dom", "event", "node", "mui/hybrid"]
        },
        "mui/share/model": {
            requires: ["event"]
        },
        "mui/share/share_pc": {
            requires: ["dom", "mui/share/model", "mui/overlay/index", "mui/minilogin/index", "./template", "mui/zeroclipboard/index", "mui/overlay/overlay.css", "./share_pc.css"]
        },
        "mui/brandbar/brandbar-m": {
            requires: ["dom", "event", "io"]
        },
        "mui/brandbar/brandbar": {
            requires: ["dom", "event"]
        },
        "mui/brandbar/fly": {
            requires: ["dom"]
        },
        "mui/brandbar/utils": {
            requires: ["dom", "event"]
        },
        "mui/bottombar/bottombar": {
            requires: ["dom", "event"]
        },
        "mui/searchbar/base": {
            requires: ["node", "rich-base", "dom", "combobox", "ua", "cookie", "event", "io"]
        },
        "mui/searchbar/index": {
            requires: ["mui/searchbar/base", "mui/searchbar/plugin/spm", "mui/searchbar/plugin/hq4Mb", "mui/searchbar/plugin/hq4Pc", "mui/searchbar/plugin/placeholder", "mui/searchbar/plugin/inShop", "mui/searchbar/plugin/history/index", "mui/searchbar/template/index", "mui/searchbar/suggest.css"]
        },
        "mui/searchbar/instance/chaoshi-m": {
            requires: ["node", "ajax", "mui/searchbar/base", "mui/searchbar/plugin/spm", "mui/searchbar/plugin/placeholder", "mui/searchbar/plugin/hq4Mb", "mui/searchbar/template/hq", "mui/searchbar/template/list"]
        },
        "mui/searchbar/instance/chaoshi": {
            requires: ["node", "ajax", "mui/searchbar/base", "mui/searchbar/plugin/spm", "mui/searchbar/plugin/placeholder", "mui/searchbar/template/cat", "mui/searchbar/template/list", "mui/searchbar/suggest.css"]
        },
        "mui/searchbar/instance/default-m": {
            requires: ["node", "ajax", "mui/searchbar/base", "mui/searchbar/plugin/spm", "mui/searchbar/plugin/placeholder", "mui/searchbar/plugin/hq4Mb", "mui/searchbar/template/hq4Mb", "mui/searchbar/template/act", "mui/searchbar/template/cat", "mui/searchbar/template/list", "mui/searchbar/plugin/popSearchBar", "mui/searchbar/template/meetingPlace4Mb", "mui/searchbar/instance/native"]
        },
        "mui/searchbar/instance/default": {
            requires: ["node", "ajax", "mui/searchbar/base", "mui/searchbar/plugin/spm", "mui/searchbar/plugin/placeholder", "mui/searchbar/plugin/hubaccess", "mui/searchbar/template/act", "mui/searchbar/template/shipShop", "mui/searchbar/template/cat", "mui/searchbar/template/list", "mui/searchbar/template/shop", "mui/searchbar/template/quickSearch", "mui/bucket/index", "mui/searchbar/template/meetingPlace", "mui/searchbar/suggest.css"]
        },
        "mui/searchbar/instance/detail": {
            requires: ["node", "ajax", "json", "cookie", "mui/searchbar/base", "mui/searchbar/plugin/spm", "mui/searchbar/plugin/placeholder", "mui/searchbar/plugin/inShop", "mui/searchbar/template/act", "mui/searchbar/template/shipShop", "mui/searchbar/template/cat", "mui/searchbar/template/list", "mui/searchbar/template/shop", "mui/searchbar/template/quickSearch", "mui/searchbar/plugin/hq4Pc", "mui/bucket/index", "mui/searchbar/template/meetingPlace", "mui/searchbar/suggest.css"]
        },
        "mui/searchbar/instance/h5": {
            requires: ["dom", "event"]
        },
        "mui/searchbar/instance/hk": {
            requires: ["node", "ajax", "mui/searchbar/base", "mui/searchbar/plugin/spm", "mui/searchbar/plugin/placeholder", "mui/searchbar/template/list", "mui/searchbar/suggest.css"]
        },
        "mui/searchbar/instance/list-m": {
            requires: ["ajax", "mui/searchbar/base", "mui/searchbar/plugin/spm", "mui/searchbar/plugin/placeholder", "mui/searchbar/template/act", "mui/searchbar/template/cat", "mui/searchbar/template/list"]
        },
        "mui/searchbar/instance/tmhk": {
            requires: ["node", "ajax", "mui/searchbar/base", "mui/searchbar/plugin/spm", "mui/searchbar/plugin/placeholder", "mui/searchbar/template/act", "mui/searchbar/template/cat", "mui/searchbar/template/list", "mui/searchbar/template/quickSearch", "mui/bucket/index", "mui/searchbar/plugin/hq4Pc", "mui/searchbar/suggest.css"]
        },
        "mui/searchbar/plugin/history4Mb": {
            requires: ["dom", "base", "ajax"]
        },
        "mui/searchbar/plugin/hq4Mb": {
            requires: ["dom", "base", "ajax"]
        },
        "mui/searchbar/plugin/hq4Pc": {
            requires: ["dom", "event", "base", "ajax"]
        },
        "mui/searchbar/plugin/hubaccess": {
            requires: ["dom", "base", "event", "uri", "ua"]
        },
        "mui/searchbar/plugin/inShop": {
            requires: ["event", "base", "node"]
        },
        "mui/searchbar/plugin/login4Mb": {
            requires: ["dom", "base", "mui/login-m"]
        },
        "mui/searchbar/plugin/placeholder": {
            requires: ["dom", "base"]
        },
        "mui/searchbar/plugin/popSearchBar": {
            requires: ["dom", "base", "ajax", "event", "mui/searchbar/suggest-m.css"]
        },
        "mui/searchbar/plugin/spm": {
            requires: ["dom", "base"]
        },
        "mui/searchbar/template/act": {
            requires: ["ajax"]
        },
        "mui/searchbar/template/cat": {
            requires: ["dom"]
        },
        "mui/searchbar/template/history": {
            requires: ["dom"]
        },
        "mui/searchbar/template/hq4Mb": {
            requires: ["dom", "event"]
        },
        "mui/searchbar/template/index": {
            requires: ["mui/searchbar/template/act", "mui/searchbar/template/history", "mui/searchbar/template/cat", "mui/searchbar/template/list", "mui/searchbar/template/item", "mui/searchbar/template/shop", "mui/searchbar/template/quickSearch"]
        },
        "mui/searchbar/template/meetingPlace": {
            requires: ["dom", "uri"]
        },
        "mui/searchbar/template/meetingPlace4Mb": {
            requires: ["dom", "uri"]
        },
        "mui/searchbar/plugin/history/cloud": {
            requires: ["base", "ajax", "cookie"]
        },
        "mui/searchbar/plugin/history/index": {
            requires: ["base", "event", "node", "ajax", "cookie", "mui/searchbar/plugin/history/remoteBridge", "mui/searchbar/template/history"]
        },
        "mui/searchbar/plugin/history/localBridge": {
            requires: ["base", "mui/searchbar/plugin/history/storage"]
        },
        "mui/searchbar/plugin/history/remoteBridge": {
            requires: ["base", "mui/searchbar/plugin/history/cloud"]
        },
        "mui/searchbar/plugin/history/storage": {
            requires: ["base", "ua"]
        },
        "mui/msg/index": {
            requires: ["dom", "event", "anim"]
        },
        "mui/minilogin/index": {
            requires: ["mui/overlay/dialog", "io"],
            requires_async: []
        },
        "mui/minilogin/seed": {
            requires: [],
            requires_async: []
        },
        "mui/storage/basic": {
            requires: ["json"]
        },
        "mui/storage/index": {
            requires: ["event", "json", "mui/storage/conf", "mui/storage/util", "mui/storage/xd"]
        },
        "mui/storage/proxy": {
            requires: ["event", "json", "mui/storage/xd", "mui/storage/basic", "mui/storage/conf", "mui/storage/util"]
        },
        "mui/storage/util": {
            requires: ["mui/storage/conf"]
        },
        "mui/storage/xd": {
            requires: ["event", "json", "mui/storage/conf", "mui/storage/util", "mui/storage/name"]
        },
        "mui/storage/index.xtpl": {
            requires: ["kg/xtemplate/4.1.3/runtime"]
        },
        "mui/minicart/fly": {
            requires: ["dom", "event", "anim"]
        },
        "mui/minicart/fullext": {
            requires: ["mui/minicart/proxy", "mui/minicart/modelext", "mui/minicart/minicartext"]
        },
        "mui/minicart/minicart": {
            requires: ["dom", "event", "anim", "ua", "mui/minicart/model", "mui/minicart/util", "mui/minicart/minicart.css"]
        },
        "mui/minicart/minicartext": {
            requires: ["dom", "event", "anim", "json", "ua", "ajax", "mui/minicart", "mui/minicart/model", "mui/minicart/util"]
        },
        "mui/minicart/model": {
            requires: ["ajax", "base", "json", "event", "promise", "mui/minilogin"]
        },
        "mui/minicart/modelext": {
            requires: ["json", "mui/minicart/model"]
        },
        "mui/minicart/proxy": {
            requires: ["dom", "ajax"]
        },
        "mui/minicart/util": {
            requires: ["dom"]
        },
        "mui/minicart/chaoshi/cart": {
            requires: ["dom", "event", "anim", "mui/minicart/model", "mui/minicart/util", "mui/minicart/fly", "mui/minicart/modelext", "mui/minicart/chaoshi/cart.css"]
        },
        "mui/minicart/trip/cart": {
            requires: ["dom", "event", "anim", "ua", "cookie", "mui/minicart/model", "mui/minicart/util", "mui/minicart/fly", "mui/minicart/trip/cart.css"]
        },
        "mui/minicart/trip/cartext": {
            requires: ["dom", "event", "anim", "json", "ua", "ajax", "mui/minicart/trip/cart", "mui/minicart/model", "mui/minicart/util"]
        },
        "mui/minicart/trip/fullext": {
            requires: ["mui/minicart/proxy", "mui/minicart/modelext", "mui/minicart/trip/cartext"]
        },
        "mui/code-tracker/report": {
            requires: ["dom", "mvc", "tabs", "mui/code-tracker/report.css"]
        },
        "mui/code-tracker/lib/tip": {
            requires: ["dom", "event", "overlay", "mui/code-tracker/lib/tip.css"]
        },
        "mui/code-tracker/treechart": {
            requires: ["kg/kcharts/2.0.0/linechart/index", "kg/kcharts/2.0.2/raphael/index"]
        },
        "mui/code-tracker/report/detail": {
            requires: ["dom", "event", "mui/code-tracker/datahandler", "mui/code-tracker/report/view", "mui/code-tracker/report/util", "mui/code-tracker/lib/juicer"]
        },
        "mui/code-tracker/report/monitor": {
            requires: ["dom", "event", "mui/code-tracker/report/monitor.tpl"]
        },
        "mui/code-tracker/report/view": {
            requires: ["node", "dom", "event", "tabs", "mui/code-tracker/lib/juicer", "kg/t-able/2.0.0/index", "mui/code-tracker/datahandler"]
        },
        "mui/app-guide/main": {
            requires: ["node", "dom", "event", "mui/smartbanner/index", "mui/app-guide/config", "mui/app-guide/model", "mui/app-guide/tpl", "mui/app-guide/css/app-guide.css"]
        },
        "mui/app-guide/model": {
            requires: ["io", "json", "mui/storage", "mui/app-guide/config"]
        },
        "mui/app-guide/tpl": {
            requires: ["xtemplate"]
        },
        "mui/view-port-listen/index": {
            requires: ["base", "node"]
        },
        "mui/overlay/alert": {
            requires: ["mui/overlay/dialog"]
        },
        "mui/overlay/confirm": {
            requires: ["mui/overlay/dialog"]
        },
        "mui/overlay/dialog": {
            requires: ["overlay", "mui/overlay/overlay.css", "mui/button/btn.css", "mui/button/btn-tb.css", "mui/msg/msg.css"]
        },
        "mui/overlay/index": {
            requires: ["mui/overlay/dialog", "mui/overlay/confirm", "mui/overlay/alert", "mui/overlay/prompt"]
        },
        "mui/overlay/prompt": {
            requires: ["mui/overlay/dialog"]
        },
        "mui/overlay/tip/index": {
            requires: ["overlay", "mui/overlay/tip/index.css"]
        },
        "mui/global-nav/index": {
            requires: ["dom", "event", "mui/global-nav/index.css"]
        },
        "mui/tabs/index": {
            requires: ["base", "node"]
        },
        "mui/tabs/sticky": {
            requires: ["base", "node"]
        },
        "mui/cover/index": {
            requires: ["base", "node", "./index.css"]
        },
        "mui/cover/sliding-menu/index": {
            requires: ["../index", "./index.css"]
        },
        "mui/city-selector/index": {
            requires: ["base", "node", "ajax", "mui/cover/sliding-menu/index", "./index.tpl", "mui/prompt/indicator/index", "./index.css"]
        },
        "mui/lib/az": {
            requires: ["dom", "event"]
        },
        "mui/prompt/loading": {
            requires: ["dom", "event"]
        },
        "mui/prompt/indicator/index": {
            requires: ["dom", "mui/prompt/css/loading.css", "mui/prompt/css/indicator/index.css"]
        },
        "mui/nav-tab/index": {
            requires: ["dom", "event", "io", "mui/lib/iscroll5/iscroll-lite", "mui/nav-tab/xtpl/index/container.xtpl", "mui/nav-tab/xtpl/index/banner.xtpl", "mui/nav-tab/xtpl/index/list.xtpl", "mui/nav-tab/xtpl/index/menu.xtpl", "mui/nav-tab/xtpl/index/nav.xtpl", "mui/prompt/css/loading.css", "./index.css"]
        },
        "mui/nav-tab/mtop": {
            requires: ["dom", "event", "io", "mui/lib/iscroll5/iscroll-lite", "mui/nav-tab/xtpl/mtop/container.xtpl", "mui/nav-tab/xtpl/mtop/list.xtpl", "mui/nav-tab/xtpl/mtop/menu.xtpl", "mui/nav-tab/xtpl/mtop/nav.xtpl", "mui/prompt/css/loading.css", "./mtop.css"]
        },
        "mui/nav-tab/sync": {
            requires: ["dom", "event", "io", "mui/lib/iscroll5/iscroll-lite", "mui/nav-tab/xtpl/sync/container.xtpl", "mui/nav-tab/xtpl/sync/menu.xtpl", "mui/nav-tab/xtpl/sync/nav.xtpl", "./index.css"]
        },
        "mui/nav-tab/xtpl/index/banner.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/nav-tab/xtpl/index/container.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/nav-tab/xtpl/index/list.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/nav-tab/xtpl/index/menu.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/nav-tab/xtpl/index/nav.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/nav-tab/xtpl/mtop/container.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/nav-tab/xtpl/mtop/list.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/nav-tab/xtpl/mtop/menu.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/nav-tab/xtpl/mtop/nav.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/nav-tab/xtpl/sync/container.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/nav-tab/xtpl/sync/menu.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/nav-tab/xtpl/sync/nav.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/smartbanner/index": {
            requires: ["dom", "event", "base", "cookie", "io"],
            requires_async: []
        },
        "mui/smartbanner/seed": {
            requires: [],
            requires_async: []
        },
        "mui/smart-banner": {
            requires: ["dom", "event", "base", "cookie", "io"],
            requires_async: []
        },
        "mui/smartbanner/smartbanner": {
            requires: [],
            requires_async: []
        },
        "mui/smartbanner/smartbannerUI": {
            requires: [],
            requires_async: []
        },
        "mui/pushwindow/index": {
            requires: ["node", "event", "mui/hybrid"]
        },
        "mui/pushwindow/index.xtpl": {
            requires: ["kg/xtemplate/4.1.4/runtime"]
        },
        "mui/backtop/index": {
            requires: ["dom", "event", "anim"]
        },
        "mui/globalmodule/global-mod-m": {
            requires: ["dom", "event", "cookie", "mui/prompt/indicator/index"]
        },
        "mui/globalmodule/global-mod-pc": {
            requires: ["dom", "event", "ajax", "cookie", "json"]
        },
        "mui/globalmodule/global-mod": {
            requires: ["dom", "event", "cookie"]
        },
        "mui/globalModule": {
            requires: ["dom", "event", "ajax", "cookie", "json"]
        }
    },
    packages: {
        "mui/mallbar": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.2.4",
            path: "//g.alicdn.com/mui/mallbar/3.2.4/"
        },
        "mui/button": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.3",
            path: "//g.alicdn.com/mui/button/3.0.3/",
            group: "tm"
        },
        kissy: {
            base: "//g.alicdn.com/kissy/k/1.4.14/",
            version: "1.4.14"
        },
        "mui/zeroclipboard": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.0",
            path: "//g.alicdn.com/mui/zeroclipboard/3.0.0/",
            group: "tm"
        },
        "mui/hybrid": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "2.0.5",
            path: "//g.alicdn.com/hybrid/api/2.0.5/",
            group: "tm"
        },
        "mui/share": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.7",
            path: "//g.alicdn.com/mui/share/3.0.7/",
            group: "tm"
        },
        "mui/wishlist": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.2",
            path: "//g.alicdn.com/mui/wishlist/3.0.2/"
        },
        "mui/tbuser": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.2",
            path: "//g.alicdn.com/mui/tbuser/3.0.2/"
        },
        "mui/brandbar": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.6",
            path: "//g.alicdn.com/mui/brandbar/3.0.6/"
        },
        "mui/bottombar": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.3",
            path: "//g.alicdn.com/mui/bottombar/3.0.3/"
        },
        "mui/searchbar": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.3.24",
            path: "//g.alicdn.com/mui/searchbar/3.3.24/",
            group: "tm"
        },
        "mui/msg": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.5",
            path: "//g.alicdn.com/mui/msg/3.0.5/",
            group: "tm"
        },
        "mui/minilogin": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.9",
            path: "//g.alicdn.com/mui/minilogin/3.0.9/",
            group: "tm"
        },
        "mui/storage": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.4",
            path: "//g.alicdn.com/mui/storage/3.0.4/",
            group: "tm"
        },
        "mui/minicart": {
            debug: true,
            ignorePackageNameInUri: true,
            notUseGConfigPath: true,
            version: "3.0.12",
            path: "//g.alicdn.com/mui/minicart/3.0.12/"
        },
        "mui/code-tracker": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.1.2",
            path: "//g.alicdn.com/mui/code-tracker/3.1.2/"
        },
        "mui/app-guide": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.0",
            path: "//g.alicdn.com/mui/app-guide/3.0.0/"
        },
        mui: {
            path: "//g.alicdn.com",
            charset: "utf-8",
            combine: true
        },
        "mui/view-port-listen": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.1",
            path: "//g.alicdn.com/mui/view-port-listen/3.0.1/"
        },
        "mui/overlay": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.10",
            path: "//g.alicdn.com/mui/overlay/3.0.10/",
            group: "tm"
        },
        "mui/chongzhi": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.1.0",
            path: "//g.alicdn.com/mui/chongzhi/3.1.0/",
            group: "tm"
        },
        "mui/global-nav": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.3",
            path: "//g.alicdn.com/mui/global-nav/3.0.3/"
        },
        "mui/tabs": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.1.9",
            path: "//g.alicdn.com/mui/tabs/3.1.9/",
            group: "tm"
        },
        "mui/cover": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.3",
            path: "//g.alicdn.com/mui/cover/3.0.3/"
        },
        "mui/city-selector": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.1.0",
            path: "//g.alicdn.com/mui/city-selector/3.1.0/"
        },
        "mui/lib": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.25",
            path: "//g.alicdn.com/mui/lib/3.0.25/",
            group: "tm"
        },
        "mui/prompt": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.8",
            path: "//g.alicdn.com/mui/prompt/3.0.8/"
        },
        "mui/nav-tab": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.2.11",
            path: "//g.alicdn.com/mui/nav-tab/3.2.11/",
            group: "tm"
        },
        "mui/smartbanner": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.22",
            path: "//g.alicdn.com/mui/smartbanner/3.0.22/"
        },
        "mui/pushwindow": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.8",
            path: "//g.alicdn.com/mui/pushwindow/3.0.8/",
            group: "tm"
        },
        "mui/backtop": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.10",
            path: "//g.alicdn.com/mui/backtop/3.0.10/"
        },
        "mui/globalmodule": {
            debug: true,
            ignorePackageNameInUri: true,
            version: "3.0.35",
            path: "//g.alicdn.com/mui/globalmodule/3.0.35/"
        }
    },
    combine: true,
    tag: 1,
    group: "tm"
});
KISSY.add("mui/btscfg-g/index", function() {
    return [{
        id: "001",
        type: "001",
        name: "searchbar",
        desc: "\u641c\u7d22\u6846\u4e0b\u62c9\u63d0\u793a\u5206\u6876",
        bts: "9",
        owner: "\u738b\u7f55\uff0c\u5353\u98ce\uff0c\u9879\u6881",
        st: "2014-11-17",
        nd: "2015-12-31",
        "class": "code",
        codes: {
            modules: {}
        },
        other: function() {
            window.g_config = window.g_config || {};
            var e = g_config.searchbarCfg = g_config.searchbarCfg || {};
            e.isTestBt = true
        }
    }]
});
KISSY.add("mui/bucket/tool", function(t) {
    function e(t, e) {
        e = e || 0;
        return Math.random() * t + e
    }

    function n(t) {
        var e = new Date;
        e.setDate(1);
        e.setMonth((t || e.getMonth()) + 1);
        var n = new Date(e.getTime() - 1e3 * 60 * 60 * 24);
        return n.getDate()
    }
    var a;

    function i() {
        if (!a) {
            this.lastReadDay_RandomHash = 0;
            this.randomHash = 2146271213;
            a = this
        }
        return a
    }
    i.prototype.analyzeBucketHash = function(t, e) {
        var n = this.time33Hash(t);
        return this.bucket(n, e)
    };
    i.prototype.bucket = function(t, e) {
        return (t & 65535) % e
    };
    i.prototype.time33Hash = function(t) {
        var e = 2146271213;
        for (var n = 0, a = t.length; n < a; n++) {
            e = (e << 5) + e + t.charCodeAt(n)
        }
        return e
    };
    i.prototype.getRandomByDay = function() {
        var t = n();
        if (t != this.lastReadDay_RandomHash) {
            this.randomHash = e();
            this.lastReadDay_RandomHash = t
        }
        return this.randomHash
    };
    i.prototype.getHashCode = function(t, e, n) {
        for (var a = 0, i = e.length; a < i; a++) {
            t = (t << 5) + t + e.charCodeAt(a)
        }
        return (t & 65535) % n + 1
    };
    return i
});
KISSY.add("mui/bucket/index", function(t, e, n, i, r) {
    function a(t) {
        a.superclass.constructor.call(this, t || {})
    }
    t.extend(a, e, {
        pluginInitializer: function(t) {
            this.set("caller", t);
            this.init()
        },
        init: function() {
            var e = this,
                i = this.getCurBt(),
                r = this.get("cfgUrl"),
                a = this.get("callback"),
                c = this.get("cfgs"),
                l = function(n) {
                    var c = e.getCurBt();
                    if (c !== i) {
                        t.log("mui/bucket::current bucket id is changed! It is " + i);
                        r && o(r, i = c);
                        return
                    }
                    if (!n || !a) return;
                    var l = [],
                        f = [];
                    for (var g = 0, h = n.length, d; g < h; g++) {
                        d = n[g];
                        d["bts"] = s(u(t.trim(d["bts"])), -1, e.get("size") - 1);
                        var p = d["bts"].split(",");
                        if (t.inArray("" + i, p) || p.length == 0 || t.inArray("-1", p)) {
                            var b = d["st"].split(/[-/.]/),
                                k = +new Date(b[0], parseInt(b[1], 10) - 1 + "", b[2], 0, 0, 0),
                                v = new Date((b = d["nd"].split(/[-/.]/))[0], parseInt(b[1], 10) - 1 + "", b[2], 0, 0, 0),
                                m = +new Date;
                            v.setDate(v.getDate() + 1);
                            v = v.getTime();
                            if (m >= k && m < v) {
                                l.push(d["id"]);
                                f.push(d)
                            }
                        }
                    }
                    a(l, f, i)
                },
                o = function(t, r) {
                    n.jsonp(t || e.get("cfgUrl"), {
                        bucket_id: r || i
                    }, l)
                };
            t.log("mui/bucket::current bucket id: " + i);
            if (r) {
                o(r, i)
            } else if (c) {
                l(c)
            }
        },
        getCurBt: function() {
            var e = t.unparam(location.search.substr(1))["bucket_id"],
                n = this.get("size");
            if (typeof e == "undefined") {
                e = (new r).analyzeBucketHash(i.get("t") || "", n)
            } else {
                e = parseInt(e, 10);
                if (isNaN(e) || e < -1 || e >= n) {
                    t.log("mui/bucket::the parameter `bucket_id` in the url is illegal and the reasonable interval is -1" + " to " + n + ". So program calculates the bucket id with internal bucket tool.", "warn");
                    e = (new r).analyzeBucketHash(i.get("t") || "", n)
                }
            }
            return e
        }
    }, {
        ATTRS: {
            callback: {
                value: undefined,
                setter: function(t) {
                    return t && typeof t === "function" ? t : undefined
                }
            },
            size: {
                value: 20,
                setter: function(t) {
                    return Math.abs(parseInt(t, 10)) || 20
                }
            },
            cfgUrl: {
                value: ""
            },
            cfgs: {
                value: undefined,
                setter: function(e) {
                    return t.isArray(e) && e.length !== 0 ? e : undefined
                }
            }
        }
    });

    function u(t) {
        return (t || "").replace(/[^0-9-,]/gi, "")
    }

    function s(t, e, n) {
        return (t || "").replace(/(\d+)-(\d+)/gi, function(t, i, r) {
            var a = parseInt(i, 10),
                u = parseInt(r, 10),
                s, c = [];
            if (a > u) {
                s = a;
                a = u;
                u = s
            }
            a = Math.max(a, e);
            u = Math.min(u, n);
            do {
                c.push(a++)
            } while (a <= u);
            return c.join(",")
        })
    }
    return a
}, {
    requires: ["base", "ajax", "cookie", "mui/bucket/tool"]
});
KISSY.add("mui/globalmodule/global-mod-pc", function(a, n, e, i, t) {
    var o = document;
    var r = window;
    var n = a.DOM;
    var e = a.Event;
    var l = TB.globalToolFn.record;
    TB.Global = TB.Global || {};
    var c = TB.globalToolFn.isInBlacklist;
    var s = KISSY.version === "1.20" || KISSY.version === "1.1.6";
    var u = TB.globalToolFn.getAssetsHost("g");
    var d = TB.globalToolFn.getAssetsHost();
    var f = TB._openFlags;
    var m = TB.globalToolFn.isDaily();
    var g = r.g_config || {};
    var p = "g_config" in r ? "appId" in r["g_config"] ? parseInt(r["g_config"]["appId"]) : undefined : undefined;
    var b = a.unparam(r.location.search.substring(1));
    var v = "";
    var h = "mini-cart";
    var T;
    var B;
    var y;
    var k = a.unparam(r.location.search.replace("?", ""));
    var w = a.Env.mods;
    var C = g.devId == "m" || g.devId == "mobile";
    var _ = o.getElementById("site-nav");
    var x = g.closeMiniBag || c();
    var M = function(a) {
        if (!s) {
            a()
        }
    };
    var S = [];

    function I() {
        if (!s && !C) {
            var i = !!a.DOM.get("#J_TSiteNav");
            if (i && w["mui/minicart/trip/cart"]) {
                a.config({
                    modules: {
                        "mui/minicart": {
                            alias: ["mui/minicart/trip/cart"]
                        }
                    }
                })
            }
        }
        a.mix(TB.Global, {
            miniBag: function() {
                TB.Global.loginStatusReady(function(n) {
                    var e = a.unparam(a.Cookie.get("cq"));
                    var i = false;
                    if (!n.isLogin) {
                        e.ccp = "1";
                        a.Cookie.set("cq", a.param(e), 365);
                        TB.Global.initMiniBag()
                    } else if (n.isLogin && e && e.ccp === "1") {
                        setTimeout(function() {
                            if (!i) {
                                i = true;
                                TB.Global.initMiniBag()
                            }
                        }, 5e3);
                        r._syncCallback = function(n) {
                            if (!i) {
                                i = true;
                                TB.Global.initMiniBag();
                                e.ccp = "0";
                                a.Cookie.set("cq", a.param(e), 365);
                                if (n && a.isPlainObject(n.sss) && n.sss.quantity && n.sss.token) {
                                    (new Image).src = "//" + (m ? "cart.daily.taobao.net" : "cart.taobao.com") + "/sss.htm" + "?quantity=" + n.sss.quantity + "&tk=" + n.sss.token
                                }
                            }
                        };
                        var t = "//" + (m ? "cart.daily.tmall.net" : "cart.tmall.com") + "/cart/syncCart.htm?callback=_syncCallback&t=" + a.now();
                        a.getScript(t, {
                            error: function() {
                                if (!i) {
                                    i = true;
                                    TB.Global.initMiniBag()
                                }
                            },
                            timeout: 5
                        })
                    } else {
                        TB.Global.initMiniBag()
                    }
                })
            },
            initMiniBag: function() {
                if (g.removeMiniBag || (!T || s)) {
                    TB.Global.initMiniCart();
                    return
                }
                if (i) {
                    a.use("mui/minicart,mui/bottombar/bottombar", function(a, n, e) {
                        if (!g.removeMiniBag) {
                            var i = a.DOM.create("<div></div>");
                            e.add(i, {
                                order: 50
                            });
                            n.init(i)
                        }
                    })
                }
            },
            initMiniCart: function() {
                if (g.closeMiniCart || !TB.Global.getCartElem()) {
                    return
                }
                var n, e = "//" + (m ? "count.config-vip.taobao.net:8888" : "count.taobao.com") + "/counter6";
                TB.Global.memberInfoReady(function(i) {
                    if (i.isLogin) {
                        n = i.memberInfo.cookies && i.memberInfo.cookies.unb ? i.memberInfo.cookies.unb.value : i.trackId
                    } else {
                        n = i.trackId
                    }
                    if (!n) {
                        return
                    }
                    e += "?keys=TCART_234_" + n + "_q&callback=_loadCartNumCallback&t=" + a.now();
                    r._loadCartNumCallback = function(a) {
                        var e = a["TCART_234_" + n + "_q"] || 0;
                        if (e < 0) {
                            return
                        }
                        TB.Global.setCartNum(e)
                    };
                    a.getScript(e)
                })
            },
            setCartNum: function(e) {
                if (!a.isNumber(e) && !a.isBoolean(e)) {
                    return
                }
                var i = TB.Global.getCartElem();
                if (!i) return;
                var t = i.getElementsByTagName("a")[0];
                var o = "\u8d2d\u7269\u8f66";
                if (n.hasClass(i, "cart")) {
                    o = '<span class="mini-cart-line"></span><s></s>' + "\u8d2d\u7269\u8f66"
                }
                var r = "//" + (m ? "cart.daily.tmall.net" : "cart.tmall.com") + "/cart/myCart.htm?from=btop";
                if (g.toTaobaoCart) {
                    r = "//cart.taobao.com/cart.htm?from=btop"
                }
                if (e < 0 || e === false) {
                    t.innerHTML = o;
                    n.removeClass(i, h);
                    return
                }
                t.innerHTML = o + '<span class="mc-count' + (e < 10 ? " mc-pt3" : v) + '">' + e + "</span>" + "\u4ef6";
                t.href = r;
                n.addClass(i, h);
                n.addClass(i, "menu");
                t.id = "mc-menu-hd"
            }
        });
        TB.Cart = a.merge({}, {
            domain: o.domain.indexOf("taobao.com") > -1 || o.domain.indexOf("tmall.com") > -1 ? "taobao.com" : "daily.taobao.net",
            API: "//cart.%domain%/check_cart_login.htm",
            cache: {},
            popup: null,
            redirect: function(n, e) {
                var i = a.makeArray(arguments);
                var t = arguments.callee;
                var o = this;
                if (!a.DOM || !a.Event) {
                    safeUse("dom, event", function() {
                        t.apply(o, i)
                    });
                    return
                }
                a.use("mui/minilogin/index", function(a, n) {
                    n && n.show(function() {
                        r.location.href = e
                    }, {
                        needRedirect: false,
                        check: true
                    })
                })
            },
            redirectCallback: function(n) {
                var e = n.guid;
                var i = a.trim(this.cache[e][1]);
                if (!n["needLogin"]) {
                    r.location.href = i;
                    return
                }
                if (!e) {
                    throw Error("[error] guid not found in callback data")
                }
                if (!this.popup) {
                    this.popup = this._initPopup()
                }
                this._initLoginIframe(i)
            },
            hidePopup: function(n) {
                n && n.preventDefault && n.preventDefault();
                a.DOM.css(this.popup, "display", "none")
            },
            showPopup: function() {
                var n = new Date;
                n.setDate(n.getDate() - 1);
                o.cookie = "cookie2=;expires=" + n.toGMTString() + ";path=/;domain=.tmall.com";
                this._centerPopup();
                a.DOM.css(this.popup, "display", "block")
            },
            _centerPopup: function() {
                var n = (a.DOM.viewportHeight() - parseInt(a.DOM.css(this.popup, "height"), 10)) / 2;
                n = n < 0 ? 0 : n;
                a.DOM.css(this.popup, "top", n)
            },
            _addStyleSheetOnce: function() {
                if (!this._stylesheetAdded) {
                    a.DOM.addStyleSheet("" + "#g-cartlogin{position:fixed;_position:absolute;border:1px solid #aaa;left:50%;top:120px;margin-left:-206px;width:412px;height:272px;z-index:90010;background:#fafafa;-moz-box-shadow:rgba(0,0,0,0.2) 3px 3px 3px;-webkit-box-shadow:3px 3px 3px rgba(0,0,0,0.2);filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=3,OffY=3,Color=#16000000,Positive=true);} #g_minicart_login_close{position:absolute;right:5px;top:5px;width:17px;height:17px;background:url(//img.alicdn.com/tps/i1/T1krl0Xk8zXXXXXXXX-194-382.png) no-repeat -100px -69px;text-indent:-999em;overflow:hidden;}" + "#g-cartlogin-close{cursor:pointer;position:absolute;right:5px;top:5px;width:17px;height:17px;line-height:0;overflow:hidden;background:url(//img.alicdn.com/tps/i1/T1k.tYXadGXXXXXXXX-146-77.png) no-repeat -132px 0;text-indent:-999em;}" + "");
                    this._stylesheetAdded = true
                }
            },
            _initPopup: function() {
                var n = a.DOM.create('<div id="g-cartlogin"></div>');
                a.DOM.append(n, a.DOM.get("body"));
                return n
            },
            _initLoginIframe: function(n) {
                var e = "https://login." + this.domain + "/member/login.jhtml?from=globalcart&style=mini" + "&redirectURL=" + encodeURIComponent(n) + "&full_redirect=true";
                this.popup.innerHTML = "" + '<iframe src="' + e + '" width="410" height="270" frameborder="0" scrolling="0"></iframe>' + '<span title="\u5173\u95ed" id="g-cartlogin-close">\u5173\u95ed</span>';
                a.Event.on("#g-cartlogin-close", "click", this.hidePopup, this);
                this.showPopup()
            }
        });
        if (!C) {
            var t = {
                initHeaderLinks: function() {
                    if (!m) {
                        return
                    }
                    var a = a;
                    var n = a ? a.getElementsByTagName("a") : [];
                    for (var e = 0; e < n.length; e++) {
                        if (n[e].href.indexOf("register") < 0 && n[e].href.indexOf(".php") < 0) {
                            n[e].href = n[e].href.replace("taobao.com/", "daily.taobao.net/").replace("tmall.com/", "daily.tmall.net/")
                        }
                    }
                },
                initMy1111: function() {
                    var a = new Date;
                    var e = a.getMonth() + 1;
                    var i = a.getDate();
                    if (e === 11 && i <= 11 && i >= 0) {
                        var t = n.get("#J_SnMyBrand");
                        if (t) {
                            n.text(t, "\u6211\u7684\u53cc11");
                            n.attr(t, "href", "//my1111.tmall.com")
                        }
                    }
                },
                assist: function() {
                    if (a.Cookie.get("test_accouts") && o.domain.indexOf("taobao.net") >= 0) {
                        a.ready(function() {
                            a.getScript("//assets.daily.taobao.net/p/assist/login/login.js")
                        })
                    }
                },
                cartJumpControl: function() {
                    var a = n.get(".sn-cart", _) || n.get(".cart", _);
                    e.detach ? e.detach(a, "click") : e.remove(a, "click");
                    e.on(a, "click", function(a) {
                        var n = a.target;
                        if (n.nodeName != "A" && n.parentNode.nodeName === "A") {
                            n = n.parentNode
                        }
                        if (n.nodeName === "A" && n.href.indexOf("myCart.htm") >= 0) {
                            if (r.location.host.indexOf(".tmall.") >= 0) {
                                a.preventDefault();
                                TB.Cart && TB.Cart.redirect(n, n.href)
                            }
                        }
                    })
                },
                brandGoldReord: function() {
                    var n = o.getElementById("J_SnMyBrand");
                    if (!n) {
                        return
                    }
                    a.Event.on(n, "click", function() {
                        l("//gm.mmstat.com/tmallbrand.1002.1.2.3")
                    })
                },
                miniCartRecord: function() {
                    var n = TB.Global.getCartElem();
                    if (!n) {
                        return
                    }
                    a.Event.on(n, "click", function() {
                        l("//gm.mmstat.com/tmalljy.2.5?action=btopcart")
                    })
                },
                mobileQcode: function() {
                    var a = n.get(".sn-mobile");
                    var i = n.get(".sn-qrcode", a);
                    if (a && !i) {
                        e.on(a, "mouseenter", function() {
                            if (!i) {
                                n.append(n.create('<div class="sn-qrcode" style="display:none"><div class="sn-qrcode-content"></div><p>\u626b\u4e00\u626b\uff0c\u5b9a\u5236\u6211\u7684\u5929\u732b\uff01</p><b></b></div>'), a)
                            }
                            setTimeout(function() {
                                i = i || n.get(".sn-qrcode", a);
                                n.show(i)
                            }, 10)
                        });
                        e.on(a, "mouseleave", function() {
                            n.hide(i)
                        })
                    }
                },
                padHide: function() {
                    if (window.shop_config && window.shop_config.shopId) {
                        var e = window.location.search;
                        e = e.replace("?", "");
                        e = a.unparam(e);
                        var i = e.ttid;
                        if (a.isString(i)) {
                            if (i.indexOf("@taobao_") >= 0 || i.indexOf("@tmall_") >= 0) {
                                g.removeMallBar = true;
                                n.addStyleSheet("#site-nav{display:none!important}#header{display:none!important}#footer{display:none!important}#J_CommonBottomBar{display:none!important}#tstart{display:none!important}")
                            }
                        }
                    }
                }
            };
            a.each(t, function(a) {
                a()
            })
        }
        var c = {
            minBag: function() {
                if (C) {
                    return
                }
                TB.Global.miniBag()
            },
            brandBar: function() {
                if (C) {
                    return
                }
                if (!y) {
                    return
                }
                if (!s) {
                    S.push({
                        moduleName: "mui/brandbar/brandbar",
                        callback: function(a, n) {
                            var e = m ? "brand.daily.tmall.net" : "brand.tmall.com";
                            n.bindEl(".j_CollectBrand", {
                                addServer: "//" + e + "/ajax/brandAddToFav.htm"
                            });
                            return n
                        }
                    })
                }
            },
            tDog: function() {
                if (g.closeWW || C) {
                    return
                }
                g = g || {};
                g.toolbar = false;
                g.webww = true;
                if (p && p != -1 && p != 2e3 || "tstart" in b || "tdog" in b) {
                    a.getScript("//" + u + "/aliww/web.ww/scripts/webww.js")
                }
            },
            initMallBar: function() {
                if (B && !s && !g["removeMallBar"] && !C) {
                    S.push({
                        moduleName: "mui/mallbar/index",
                        callback: function(a, n) {
                            var e = r.shop_config || null;
                            TB.Global.mallbar = new n({
                                shopConfig: e
                            });
                            return TB.Global.mallbar
                        }
                    })
                }
            },
            useControlExcute: function() {
                if (S.length > 0) {
                    var n = [];
                    var e = [];
                    a.each(S, function(a) {
                        n.push(a.moduleName);
                        e.push(a.callback)
                    });
                    a.use(n.join(","), function(a) {
                        var n = arguments;
                        a.each(S, function(e, i) {
                            var t = e.callback.apply(a, [a, n[i + 1]]);
                            !!TB.globalToolFn.instanceHandler && TB.globalToolFn.instanceHandler(e.moduleName, t)
                        })
                    })
                }
            },
            accessibilityRecord: function() {
                var a = 0;
                var n = function(i) {
                    if (9 == i.keyCode) {
                        a++
                    }
                    if (10 === a) {
                        TB.Global.sendJstracker({
                            url: "http://tmall.com/code-tracker/accessibility",
                            category: "accessibility-pc",
                            desc: "\u65e0\u969c\u788d\u53d7\u4f17\u8005pc\u57cb\u70b9",
                            sampling: 100
                        });
                        e.detach(window, "keydown", n)
                    }
                };
                e.on(window, "keydown", n)
            }
        };

        function k() {
            var n = [];
            var e = [];
            a.each(f, function(a) {
                if (a.open) {
                    n.push(a.url);
                    a.callback && e.push(a.callback)
                }
            });
            if (n.length) {
                var i = "//" + d + "/??" + n.join(",") + "?t=20130704";
                a.getScript(i, function() {
                    a.each(e, function(a) {
                        a()
                    })
                })
            }
        }

        function x() {
            a.each(c, function(a) {
                a()
            });
            k()
        }
        var M;
        M = TB.globalToolFn.smartLazy;
        var I = function() {
            M(function() {
                x()
            })
        };
        if (g.controlModuleOwn && !TB.Global.isMainReady && TB.Global.on) {
            a.log("::global::module lazy close");
            TB.Global.on("mainReady", function() {
                a.log("::global::main content ready");
                I()
            })
        } else {
            I()
        }
    }
    if (!s) {
        M(function() {
            var n = r.location.hostname;
            var e = r.location.pathname;
            var i = function(a, i) {
                if (a in g) {
                    return g[a]
                }
                if (window.shop_config) {
                    return true
                }
                if (window.g_config.bizId) {
                    return true
                }
                var t = i || /^(www|vip|new|list|mdetail|detail|detail1|detail2|item|brand|temai|yushou|3c|mei|book|subject|mybrand)\b/i;
                if (n.match(t)) {
                    return true
                }
                if (e.match(/\.php/i)) {
                    return true
                }
                return false
            };
            T = (i("needMiniBag") || "loadMallMiniCart" in window) && !x && !g["removeMiniBag"] && !n.match(/^(trade.|buy.|cart.|chaoshi.)/);
            B = i("needMallBar", /.*/);
            y = (g["needBrandBar"] || !g["removeBrandBar"]) && !(g.closeBrandBar || c());
            if (w["mui/bucket/index"] && w["mui/btscfg-g/index"]) {
                a.use("mui/btscfg-g/index,mui/bucket/index", function(a, n, e) {
                    TB.instance.bucket = new e({
                        cfgs: n,
                        callback: function(n, e) {
                            for (var i = 0, t = e.length, o, r, l; i < t; i++) {
                                o = e[i]["codes"];
                                r = e[i]["class"];
                                l = e[i]["other"];
                                if (o) {
                                    try {
                                        switch (r) {
                                            case "package":
                                                a.config(o);
                                                break;
                                            case "module":
                                                a.config(o);
                                                break;
                                            case "code":
                                                break;
                                            default:
                                        }
                                        if (l) {
                                            if (typeof l === "function") {
                                                l()
                                            } else if (typeof l === "object") {
                                                g = a.merge(g, l.g_config)
                                            }
                                        }
                                        a.log("mui/globalModule::bucket engine starts...")
                                    } catch (c) {
                                        a.log(c, "error")
                                    }
                                }
                            }
                            I()
                        }
                    });
                    TB.instance.bucket.init();
                    TB.Global.fire("bucketReady")
                })
            } else {
                I()
            }
        })
    }
}, {
    requires: ["dom", "event", "ajax", "cookie", "json"]
});
(function(e) {
    var a = e.Loader.Module;
    a.prototype._getFullPath = a.prototype.getFullPath;
    a.prototype.getFullPath = function() {
        if (!this.fullpath) {
            var e = this._getFullPath();
            this.fullpath = e;
            var a = /(\d+\.\d+\.\d+\/.*)\d+\.\d+\.\d+\//;
            if (a.test(e)) {
                e = e.replace(a, "$1");
                this.fullpath = e
            }
        }
        return this.fullpath
    };
    e.config({
        modules: {
            "mui/mallbar": {
                alias: "mui/mallbar/index"
            },
            "mui/share": {
                alias: "mui/share/share_pc"
            },
            "mui/share-m": {
                alias: "mui/share/index"
            },
            "mui/overlay": {
                alias: "mui/overlay/index"
            },
            "mui/wishlist": {
                alias: "mui/wishlist/wishlist"
            },
            "mui/tbuser": {
                alias: "mui/tbuser/tbuser"
            },
            "mui/brandbar": {
                alias: "mui/brandbar/brandbar"
            },
            "mui/bottombar": {
                alias: "mui/bottombar/bottombar"
            },
            "mui/minilogin": {
                alias: "mui/minilogin/index"
            },
            "mui/storage": {
                alias: "mui/storage/index"
            },
            "mui/minicart": {
                alias: "mui/minicart/minicart"
            },
            "mui/code-tracker": {
                alias: "mui/code-tracker/code-tracker"
            },
            "mui/tabs": {
                alias: "mui/tabs/index"
            },
            "mui/cover": {
                alias: "mui/cover/index"
            },
            "mui/msg": {
                alias: "mui/msg/index"
            },
            "mui/prompt": {
                alias: "mui/prompt/index"
            },
            "mui/lib": {
                alias: "mui/lib/index"
            },
            "mui/overlay/tip": {
                alias: ["mui/overlay/tip/index"]
            },
            "mui/view-port-listen": {
                alias: ["mui/view-port-listen/index"]
            },
            "mui/cover/sliding-menu": {
                alias: ["mui/cover/sliding-menu/index"]
            },
            "mui/btscfg-g": {
                alias: ["mui/btscfg-g/index"]
            },
            "mui/bucket": {
                alias: ["mui/bucket/index"]
            },
            "mui/searchbar/plugin/history": {
                alias: ["mui/searchbar/plugin/history/index"]
            },
            "mui/searchbar/template": {
                alias: ["mui/searchbar/template/index"]
            },
            "mui/searchbar": {
                alias: ["mui/searchbar/index"]
            }
        }
    })
})(KISSY);
KISSY.add("mui/globalmodule/global-mod", function(e, a, n, t) {
    var i = window;
    var a = e.DOM;
    TB.Global = TB.Global || {};
    var o = e.version === "1.20" || e.version === "1.1.6";
    var r = TB.globalToolFn.getAssetsHost("g");
    var l = TB.globalToolFn.isDaily();
    var c = i.g_config || {};
    var s = e.unparam(i.location.search.replace("?", ""));
    var u = e.Env.mods;
    var m = s["local-debug"] == 1;
    if (o) {
        return
    } else {
        if (u["mui/globalmodule/global-mod-pc"] && u["mui/globalmodule/global-mod-pc"].status > 0) {
            e.use("mui/globalmodule/global-mod-pc")
        } else if (u["mui/globalmodule/global-mod-m"] && u["mui/globalmodule/global-mod-m"].status > 0) {
            e.use("mui/globalmodule/global-mod-m")
        }
    }
    e.mix(TB.Global, {
        sendJstracker: function(n) {
            var t = function() {
                if (location.protocol == "https:") {
                    return "https://log.mmstat.com/jstracker.2?"
                } else {
                    return "http://gm.mmstat.com/jstracker.2?"
                }
            }();
            var i = n.time || e.now();
            var o = n.url || "";
            var r = n.category || "";
            var l = n.desc || "";
            var c = n.sampling || 1;
            var s = n.line || 0;
            var u = ["[u" + o + "]", "[t" + i + "]", "[c" + r + "]", "[r" + c + "]"].join("") + (l || "");
            var m = "",
                d;
            try {
                d = /_nk_=([^;]+)/.exec(document.cookie);
                if (d) {
                    m = decodeURIComponent(d[1])
                }
            } catch (f) {}
            TB.globalToolFn.record(t + ["type=9", "id=jstracker", "v=1.0.11", "nick=" + m, "msg=" + encodeURIComponent(u), "file=" + encodeURIComponent(location.href), "ua=" + encodeURIComponent(navigator.userAgent), "line=" + s, "scrolltop=" + +(document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop || 0), "screen=" + screen.width + "x" + screen.height, "viewport=" + a.viewportWidth() + "x" + a.viewportHeight(), "t=" + (new Date).valueOf()].join("&"))
        }
    });
    var d = {
        medFix: function() {
            var e = navigator.userAgent;
            var a;
            if (e.toLowerCase().indexOf("aliapp(") >= 0 && e.toLowerCase().indexOf("-PD/") < 0) {
                a = true
            }
            var n = t.get("_med");
            var i;
            try {
                i = parseInt(n.split("&")[0].split(":")[1], 10);
                if (a && i > 640) {
                    t.set("_med", "dw:320&dh" + n.split("dh")[1])
                }
            } catch (o) {}
        },
        POCMonitor: function() {
            if (c.closePoc) {
                return
            }
            var e = i["_ap"] || [],
                a = i["g_config"] && i["g_config"]["ap_mods"],
                n = i.location.search && i.location.search.indexOf("ap-debug") != -1,
                t = {
                    poc: [.001],
                    cdn: [.01],
                    exit: [.01],
                    jstracker: [.001]
                },
                o = function(e, a, t) {
                    if (n || Math.random() <= a) {
                        r += "," + (t ? t.join("-min.js,") : e + "/m") + ".js"
                    }
                },
                r = "";
            for (var l in t) {
                var s = a && a[l];
                if (l == "jstracker" && c.removeJsTracker) {
                    return
                }
                o(l, s && s[0] || t[l][0], s && s[1])
            }
            for (var l in a) {
                if (!t[l]) {
                    o(l, a[l][0], a[l][1])
                }
            }
            if (r) {
                var u = document.createElement("script");
                u.type = "text/javascript";
                u.async = true;
                u.src = "//g.alicdn.com/tb/ap/1.0/??p.js" + r;
                document.getElementsByTagName("head")[0].appendChild(u)
            }
            i._ap = i["_ap"] || [];
            if (a && a["jstracker"] && a["jstracker"][0] == 0) {
                return
            } else {
                i.onerror = function() {
                    i._ap.push(["jstracker", "_trackCustom", "msg=" + (arguments[0] ? encodeURIComponent(arguments[0]) : "") + "&file=" + (arguments[1] ? encodeURIComponent(arguments[1]) : "") + "&line=" + (arguments[2] ? encodeURIComponent(arguments[2]) : "")])
                }
            }
        }
    };
    e.each(d, function(e) {
        e()
    });
    var f = {
        monafly: function() {
            if (e.UA.webkit) {
                setTimeout(function() {
                    if (Math.random() > 1e-4 && !l && !m) {
                        return
                    }
                    var a = "monafly-version";
                    e.getScript("//www.tmall.com/wow/tmbase/act/" + a + "?t=" + +new Date, function() {
                        if (__rgn && __rgn[a]) {
                            e.getScript("//" + r + "/mui/monafly/" + __rgn[a] + "/monafly.js")
                        }
                    })
                }, 1e3)
            }
        },
        jstracker: function() {
            if (Math.random() < .01 || m) {
                setTimeout(function() {
                    function n() {
                        var e = document.getElementsByTagName("meta"),
                            a = [];
                        for (var n = 0; n < e.length; n++) {
                            var t = e[n];
                            if (t && t.name && (t.name == "data-spm" || t.name == "spm-id")) {
                                a.push(t.content)
                            }
                        }
                        if (document.body && document.body.getAttribute("data-spm")) {
                            a.push(document.body.getAttribute("data-spm"))
                        }
                        a = a.length ? a.join(".") : 0;
                        if (a && a.indexOf(".") == -1) {
                            a += ".0"
                        }
                        return a
                    }
                    var t = "",
                        o;
                    try {
                        o = /_nk_=([^;]+)/.exec(document.cookie);
                        if (o) {
                            t = decodeURIComponent(o[1])
                        }
                    } catch (r) {}
                    var l = location.protocol + "//" + location.hostname + location.pathname;
                    var c = function(i) {
                        var o = {
                            msg: "",
                            file: "",
                            line: 0,
                            category: "",
                            spm: n(),
                            sampling: 100,
                            url: l,
                            ua: navigator.userAgent,
                            scrolltop: document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop || 0,
                            screen: screen.width + "x" + screen.height,
                            nick: encodeURIComponent(t)
                        };
                        var r = e.mix(o, i);
                        var c = [];
                        if (r.url != location.href) {
                            c.push("[u" + r.url + "]")
                        }
                        if (r.category) {
                            c.push("[c" + r.category + "]")
                        }
                        if (r.spm) {
                            c.push("[s" + r.spm + "]")
                        }
                        if (r.sampling) {
                            c.push("[r" + r.sampling + "]")
                        }
                        if (r.msg) {
                            c.push(r.msg)
                        }
                        c = c.join("");
                        var s = function() {
                            if (location.protocol == "https:") {
                                return "//log.mmstat.com/jstracker.2?"
                            } else {
                                return "//gm.mmstat.com/jstracker.2?"
                            }
                        }();
                        TB.globalToolFn.record(s + ["type=9", "id=jstracker", "v=1.0.11", "nick=" + r.nick, "msg=" + encodeURIComponent(c), "file=" + encodeURIComponent(r.file), "ua=" + encodeURIComponent(r.ua), "line=" + r.line, "scrolltop=" + r.scrolltop, "screen=" + screen.width + "x" + screen.height, "viewport=" + a.viewportWidth() + "x" + a.viewportHeight(), "t=" + (new Date).valueOf()].join("&"))
                    };
                    var s = {},
                        u = "";
                    if (i.performance) {
                        var m = i.performance.timing;
                        s.dns = m.domainLookupEnd - m.domainLookupStart;
                        s.con = m.connectEnd - m.connectStart;
                        s.req = m.responseStart - m.requestStart;
                        s.res = m.responseEnd - m.responseStart;
                        s.dcl = m.domContentLoadedEventEnd - m.domLoading;
                        s.onload = m.loadEventStart - m.domLoading;
                        s.type = window.performance.navigation.type;
                        try {
                            u = JSON.stringify(s)
                        } catch (r) {}
                    }
                    c({
                        msg: u,
                        category: "__PV"
                    })
                }, 2e3)
            }
        },
        safeNotice: function() {
            if (!l) {
                TB.globalToolFn.safeUse("ua", function(e) {
                    if (window["console"]) {
                        if (e.isFunction(console.log)) {
                            if (!e.UA.ie) {
                                console.log("%c \u5b89\u5168\u8b66\u544a\uff01", "font-size:50px;color:red;-webkit-text-fill-color:red;-webkit-text-stroke: 1px black;");
                                console.log("%c \u6b64\u6d4f\u89c8\u5668\u529f\u80fd\u4e13\u4f9b\u5f00\u53d1\u8005\u4f7f\u7528\u3002\u8bf7\u4e0d\u8981\u5728\u6b64\u7c98\u8d34\u6267\u884c\u4efb\u4f55\u5185\u5bb9\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u60a8\u7684\u8d26\u6237\u53d7\u5230\u653b\u51fb\uff0c\u7ed9\u60a8\u5e26\u6765\u635f\u5931 \uff01", "font-size: 20px;color:#333")
                            } else {
                                console.log("\u5b89\u5168\u8b66\u544a\uff01");
                                console.log("\u6b64\u6d4f\u89c8\u5668\u529f\u80fd\u4e13\u4f9b\u5f00\u53d1\u8005\u4f7f\u7528\u3002\u8bf7\u4e0d\u8981\u5728\u6b64\u7c98\u8d34\u6267\u884c\u4efb\u4f55\u5185\u5bb9\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u60a8\u7684\u8d26\u6237\u53d7\u5230\u653b\u51fb\uff0c\u7ed9\u60a8\u5e26\u6765\u635f\u5931 \uff01")
                            }
                        }
                    }
                })
            }
        }
    };
    var g = function() {
        e.each(f, function(e) {
            e()
        })
    };
    TB.globalToolFn.smartLazy(function() {
        g()
    })
}, {
    requires: ["dom", "event", "cookie"]
});
(function(e) {
    var t = function() {
        var i = e,
            r = document,
            n = r.documentElement,
            a = 0;
        return {
            getUid: function(e) {
                var t = ++a;
                if (e) {
                    var i = e.charCodeAt(e.length - 1);
                    if (i >= 48 && i <= 57) e += "_";
                    return e + t
                }
                return t
            },
            viewToString: function(e) {
                var t, i = e;
                while (i) {
                    t = t ? i.id + "." + t : i.id;
                    i = i.parent
                }
                return t
            },
            copy: function(e, t, i) {
                for (var r in t) {
                    e[r] = t[r]
                }
                return e
            },
            browser: function() {
                var e = navigator.userAgent;
                var t = {
                    iphone: /iphone/i.test(e),
                    ipad: /ipad/i.test(e),
                    ipod: /ipod/i.test(e),
                    ios: /iphone|ipad|ipod/i.test(e),
                    android: /android/i.test(e),
                    webkit: /webkit/i.test(e),
                    chrome: /chrome/i.test(e),
                    safari: /safari/i.test(e),
                    firefox: /firefox/i.test(e),
                    ie: /msie/i.test(e),
                    opera: /opera/i.test(e),
                    supportTouch: "ontouchstart" in i,
                    supportCanvas: r.createElement("canvas").getContext != null,
                    supportStorage: false,
                    supportOrientation: "orientation" in i,
                    supportDeviceMotion: "ondevicemotion" in i
                };
                try {
                    var a = "hilo";
                    localStorage.setItem(a, a);
                    localStorage.removeItem(a);
                    t.supportStorage = true
                } catch (o) {}
                var s = t.jsVendor = t.webkit ? "webkit" : t.firefox ? "Moz" : t.opera ? "O" : t.ie ? "ms" : "";
                var c = t.cssVendor = "-" + s + "-";
                var h = r.createElement("div"),
                    u = h.style;
                var l = u[s + "Transform"] != undefined;
                var m = u[s + "Perspective"] != undefined;
                if (m) {
                    h.id = "test3d";
                    u = r.createElement("style");
                    u.textContent = "@media (" + c + "transform-3d){#test3d{height:3px}}";
                    r.head.appendChild(u);
                    n.appendChild(h);
                    m = h.offsetHeight == 3;
                    r.head.removeChild(u);
                    n.removeChild(h)
                }
                t.supportTransform = l;
                t.supportTransform3D = m;
                return t
            }(),
            event: function() {
                var e = "ontouchstart" in i;
                return {
                    POINTER_START: e ? "touchstart" : "mousedown",
                    POINTER_MOVE: e ? "touchmove" : "mousemove",
                    POINTER_END: e ? "touchend" : "mouseup"
                }
            }(),
            align: {
                TOP_LEFT: "TL",
                TOP: "T",
                TOP_RIGHT: "TR",
                LEFT: "L",
                CENTER: "C",
                RIGHT: "R",
                BOTTOM_LEFT: "BL",
                BOTTOM: "B",
                BOTTOM_RIGHT: "BR"
            },
            getElementRect: function(e) {
                try {
                    var t = e.getBoundingClientRect()
                } catch (r) {
                    t = {
                        top: e.offsetTop,
                        left: e.offsetLeft,
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    }
                }
                var a = (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) || 0;
                var o = (i.pageYOffset || n.scrollTop) - (n.clientTop || 0) || 0;
                var s = i.getComputedStyle ? getComputedStyle(e) : e.currentStyle;
                var c = parseInt;
                var h = c(s.paddingLeft) + c(s.borderLeftWidth) || 0;
                var u = c(s.paddingTop) + c(s.borderTopWidth) || 0;
                var l = c(s.paddingRight) + c(s.borderRightWidth) || 0;
                var m = c(s.paddingBottom) + c(s.borderBottomWidth) || 0;
                var d = t.top || 0;
                var f = t.left || 0;
                return {
                    left: f + a + h,
                    top: d + o + u,
                    width: t.right - l - f - h,
                    height: t.bottom - m - d - u
                }
            },
            createElement: function(e, t) {
                var i = r.createElement(e),
                    n, a, o;
                for (n in t) {
                    a = t[n];
                    if (n === "style") {
                        for (o in a) i.style[o] = a[o]
                    } else {
                        i[n] = a
                    }
                }
                return i
            },
            getElement: function(e) {
                return r.getElementById(e)
            },
            setElementStyleByView: function(e) {
                var i = e.drawable,
                    r = i.domElement.style,
                    n = e._stateCache || (e._stateCache = {}),
                    a = t.browser.jsVendor,
                    o = "px",
                    s = false;
                if (this.cacheStateIfChanged(e, ["visible"], n)) {
                    r.display = !e.visible ? "none" : ""
                }
                if (this.cacheStateIfChanged(e, ["alpha"], n)) {
                    r.opacity = e.alpha
                }
                if (!e.visible || e.alpha <= 0) return;
                if (this.cacheStateIfChanged(e, ["width"], n)) {
                    r.width = e.width + o
                }
                if (this.cacheStateIfChanged(e, ["height"], n)) {
                    r.height = e.height + o
                }
                if (this.cacheStateIfChanged(e, ["depth"], n)) {
                    r.zIndex = e.depth + 1
                }
                if (s = this.cacheStateIfChanged(e, ["pivotX", "pivotY"], n)) {
                    r[a + "TransformOrigin"] = e.pivotX + o + " " + e.pivotY + o
                }
                if (this.cacheStateIfChanged(e, ["x", "y", "rotation", "scaleX", "scaleY"], n) || s) {
                    r[a + "Transform"] = this.getTransformCSS(e)
                }
                if (this.cacheStateIfChanged(e, ["background"], n)) {
                    r.backgroundColor = e.background
                }
                if (!r.pointerEvents) {
                    r.pointerEvents = "none"
                }
                var c = i.image;
                if (c) {
                    var h = c.src;
                    if (h !== n.image) {
                        n.image = h;
                        r.backgroundImage = "url(" + h + ")"
                    }
                    var u = i.rect;
                    if (u) {
                        var l = u[0],
                            m = u[1];
                        if (l !== n.sx) {
                            n.sx = l;
                            r.backgroundPositionX = -l + o
                        }
                        if (m !== n.sy) {
                            n.sy = m;
                            r.backgroundPositionY = -m + o
                        }
                    }
                }
                var d = e.mask;
                if (d) {
                    var f = d.drawable.domElement.style.backgroundImage;
                    if (f !== n.maskImage) {
                        n.maskImage = f;
                        r[a + "MaskImage"] = f;
                        r[a + "MaskRepeat"] = "no-repeat"
                    }
                    var p = d.x,
                        v = d.y;
                    if (p !== n.maskX || v !== n.maskY) {
                        n.maskX = p;
                        n.maskY = v;
                        r[a + "MaskPosition"] = p + o + " " + v + o
                    }
                }
            },
            cacheStateIfChanged: function(e, t, i) {
                var r, n, a, o, s = false;
                for (r = 0, n = t.length; r < n; r++) {
                    a = t[r];
                    o = e[a];
                    if (o != i[a]) {
                        i[a] = o;
                        s = true
                    }
                }
                return s
            },
            getTransformCSS: function(e) {
                var t = this.browser.supportTransform3D,
                    i = t ? "3d" : "";
                return "translate" + i + "(" + (e.x - e.pivotX) + "px, " + (e.y - e.pivotY) + (t ? "px, 0px)" : "px)") + "rotate" + i + (t ? "(0, 0, 1, " : "(") + e.rotation + "deg)" + "scale" + i + "(" + e.scaleX + ", " + e.scaleY + (t ? ", 1)" : ")")
            }
        }
    }();
    var i = function() {
        var e = function(e) {
            e = e || {};
            var i = e.hasOwnProperty("constructor") ? e.constructor : function() {};
            t.call(i, e);
            return i
        };
        var t = function(e) {
            var t = {},
                r, a;
            for (r in e) {
                a = e[r];
                if (i.hasOwnProperty(r)) {
                    i[r].call(this, a)
                } else {
                    t[r] = a
                }
            }
            n(this.prototype, t)
        };
        var i = {
            Extends: function(e) {
                var t = this.prototype,
                    i = r(e.prototype);
                n(this, e);
                n(i, t);
                i.constructor = this;
                this.prototype = i;
                this.superclass = e.prototype
            },
            Mixes: function(e) {
                e instanceof Array || (e = [e]);
                var t = this.prototype,
                    i;
                while (i = e.shift()) {
                    n(t, i.prototype || i)
                }
            },
            Statics: function(e) {
                n(this, e)
            }
        };
        var r = function() {
            if (Object.__proto__) {
                return function(e) {
                    return {
                        __proto__: e
                    }
                }
            } else {
                var e = function() {};
                return function(t) {
                    e.prototype = t;
                    return new e
                }
            }
        }();
        var n = function(e) {
            for (var t = 1, i = arguments.length; t < i; t++) {
                var r = arguments[t],
                    n;
                for (var a in r) {
                    var s = r[a];
                    if (s && typeof s === "object") {
                        if (s.value !== undefined || typeof s.get === "function" || typeof s.set === "function") {
                            n = n || {};
                            n[a] = s;
                            continue
                        }
                    }
                    e[a] = s
                }
                if (n) o(e, n)
            }
            return e
        };
        try {
            var a = Object.defineProperty,
                o = Object.defineProperties;
            a({}, "$", {
                value: 0
            })
        } catch (s) {
            if ("__defineGetter__" in Object) {
                a = function(e, t, i) {
                    if ("value" in i) e[t] = i.value;
                    if ("get" in i) e.__defineGetter__(t, i.get);
                    if ("set" in i) e.__defineSetter__(t, i.set);
                    return e
                };
                o = function(e, t) {
                    for (var i in t) {
                        if (t.hasOwnProperty(i)) {
                            a(e, i, t[i])
                        }
                    }
                    return e
                }
            }
        }
        return {
            create: e,
            mix: n
        }
    }();
    var r = {
        _listeners: null,
        on: function(e, t, i) {
            var r = this._listeners = this._listeners || {};
            var n = r[e] = r[e] || [];
            for (var a = 0, o = n.length; a < o; a++) {
                var s = n[a];
                if (s.listener === t) return
            }
            n.push({
                listener: t,
                once: i
            });
            return this
        },
        off: function(e, t) {
            if (arguments.length == 0) {
                this._listeners = null;
                return this
            }
            var i = this._listeners && this._listeners[e];
            if (i) {
                if (arguments.length == 1) {
                    delete this._listeners[e];
                    return this
                }
                for (var r = 0, n = i.length; r < n; r++) {
                    var a = i[r];
                    if (a.listener === t) {
                        i.splice(r, 1);
                        if (i.length === 0) delete this._listeners[e];
                        break
                    }
                }
            }
            return this
        },
        fire: function(e, t) {
            var i, r;
            if (typeof e === "string") {
                r = e
            } else {
                i = e;
                r = e.type
            }
            var a = this._listeners;
            if (!a) return false;
            var o = a[r];
            if (o) {
                o = o.slice(0);
                i = i || new n(r, this, t);
                if (i._stopped) return false;
                for (var s = 0; s < o.length; s++) {
                    var c = o[s];
                    c.listener.call(this, i);
                    if (c.once) o.splice(s--, 1)
                }
                if (o.length == 0) delete a[r];
                return true
            }
            return false
        }
    };
    var n = i.create({
        constructor: function U(e, t, i) {
            this.type = e;
            this.target = t;
            this.detail = i;
            this.timeStamp = +new Date
        },
        type: null,
        target: null,
        detail: null,
        timeStamp: 0,
        stopImmediatePropagation: function() {
            this._stopped = true
        }
    });
    var a = e.Event;
    if (a) {
        var o = a.prototype,
            s = o.stopImmediatePropagation;
        o.stopImmediatePropagation = function() {
            s && s.call(this);
            this._stopped = true
        }
    }
    var c = i.create({
        constructor: function(e) {
            e = e || {};
            t.copy(this, e, true)
        },
        canvas: null,
        stage: null,
        startDraw: function(e) {},
        draw: function(e) {},
        endDraw: function(e) {},
        transform: function() {},
        hide: function() {},
        remove: function(e) {},
        clear: function(e, t, i, r) {},
        resize: function(e, t) {}
    });
    var h = i.create({
        Extends: c,
        constructor: function(e) {
            h.superclass.constructor.call(this, e);
            this.context = this.canvas.getContext("2d")
        },
        context: null,
        __imgCache: {},
        startDraw: function(e) {
            if (e.visible && e.alpha > 0) {
                if (e === this.stage) {
                    this.context.clearRect(0, 0, e.width, e.height)
                }
                e.needSave && this.context.save();
                return true
            }
            return false
        },
        draw: function(e) {
            var i = this.context,
                r = e.width,
                n = e.height;
            var a = e.background;
            if (a) {
                i.fillStyle = a;
                i.fillRect(0, 0, r, n)
            }
            var o = e.drawable,
                s = o && o.image;
            if (s) {
                var c = o.rect,
                    h = c[2],
                    u = c[3],
                    l = c[4],
                    m = c[5];
                if (!h || !u) {
                    return
                }
                if (!r && !n) {
                    r = e.width = h;
                    n = e.height = u
                }
                if (l || m) i.translate(l - h * .5, m - u * .5);
                if (e.needSave) {
                    i.drawImage(s, c[0], c[1], h, u, 0, 0, r, n)
                } else {
                    i.drawImage(s, c[0], c[1], h, u, e.x - e.pivotX, e.y - e.pivotY, r, n)
                }
                t._drawImageNum++
            }
        },
        endDraw: function(e) {
            e.needSave && this.context.restore()
        },
        transform: function(e) {
            var t = this.context;
            if (e.needSave) {
                var i = e.scaleX,
                    r = e.scaleY,
                    n = e.x,
                    a = e.y,
                    o = e.pivotX,
                    s = e.pivotY,
                    c = e.rotation % 360;
                if (n != 0 || a != 0) t.translate(n, a);
                if (c != 0) t.rotate(c * Math.PI / 180);
                if (i != 1 || r != 1) t.scale(i, r);
                if (o != 0 || s != 0) t.translate(-o, -s)
            }
            if (e.alpha > 0) t.globalAlpha *= e.alpha
        },
        remove: function(e) {
            var t = e.drawable;
            var i = t && t.domElement;
            if (i) {
                var r = i.parentNode;
                if (r) {
                    r.removeChild(i)
                }
            }
        },
        clear: function(e, t, i, r) {
            this.context.clearRect(e, t, i, r)
        },
        resize: function(e, t) {
            this.canvas.width = e;
            this.canvas.height = t
        }
    });
    var u = function() {
        return i.create({
            Extends: c,
            constructor: function(e) {
                u.superclass.constructor.call(this, e)
            },
            startDraw: function(t) {
                var i = t.drawable = t.drawable || new m;
                i.domElement = i.domElement || e(t, i);
                return true
            },
            draw: function(e) {
                var t = e.parent,
                    i = e.drawable.domElement,
                    r = i.parentNode;
                if (t) {
                    var n = t.drawable.domElement;
                    if (n != r) {
                        n.appendChild(i)
                    }
                } else if (e === this.stage && !r) {
                    i.style.overflow = "hidden";
                    this.canvas.appendChild(i)
                }
            },
            transform: function(e) {
                t.setElementStyleByView(e);
                if (e === this.stage) {
                    var i = this.canvas.style,
                        r = e._scaleX,
                        n = e._scaleY,
                        a = e.scaleX,
                        o = e.scaleY;
                    if (!r && a != 1 || r && r != a) {
                        e._scaleX = a;
                        i.width = a * e.width + "px"
                    }
                    if (!n && o != 1 || n && n != o) {
                        e._scaleY = o;
                        i.height = o * e.height + "px"
                    }
                }
            },
            remove: function(e) {
                var t = e.drawable;
                var i = t && t.domElement;
                if (i) {
                    var r = i.parentNode;
                    if (r) {
                        r.removeChild(i)
                    }
                }
            },
            hide: function(e) {
                var t = e.drawable && e.drawable.domElement;
                if (t) t.style.display = "none"
            },
            resize: function(e, t) {
                var i = this.canvas.style;
                i.width = e + "px";
                i.height = t + "px";
                if (i.position != "absolute") {
                    i.position = "relative"
                }
            }
        });

        function e(e, i) {
            var r = e.tagName || "div",
                n = i.image,
                a = e.width || n && n.width,
                o = e.height || n && n.height,
                s = t.createElement(r),
                c = s.style;
            if (e.id) s.id = e.id;
            c.position = "absolute";
            c.left = (e.left || 0) + "px";
            c.top = (e.top || 0) + "px";
            c.width = a + "px";
            c.height = o + "px";
            if (r == "canvas") {
                s.width = a;
                s.height = o;
                if (n) {
                    var h = s.getContext("2d");
                    var u = i.rect || [0, 0, a, o];
                    h.drawImage(n, u[0], u[1], u[2], u[3], e.x || 0, e.y || 0, e.width || u[2], e.height || u[3])
                }
            } else {
                c.opacity = e.alpha != undefined ? e.alpha : 1;
                if (e === this.stage || e.clipChildren) c.overflow = "hidden";
                if (n && n.src) {
                    c.backgroundImage = "url(" + n.src + ")";
                    var l = e.rectX || 0,
                        m = e.rectY || 0;
                    c.backgroundPosition = -l + "px " + -m + "px"
                }
            }
            return s
        }
    }();
    var l = i.create({
        constructor: function(e, t, i, r, n, a) {
            this.a = e;
            this.b = t;
            this.c = i;
            this.d = r;
            this.tx = n;
            this.ty = a
        },
        concat: function(e) {
            var t = arguments,
                i = this.a,
                r = this.b,
                n = this.c,
                a = this.d,
                o = this.tx,
                s = this.ty;
            if (t.length >= 6) {
                var c = t[0],
                    h = t[1],
                    u = t[2],
                    l = t[3],
                    m = t[4],
                    d = t[5]
            } else {
                c = e.a;
                h = e.b;
                u = e.c;
                l = e.d;
                m = e.tx;
                d = e.ty
            }
            this.a = i * c + r * u;
            this.b = i * h + r * l;
            this.c = n * c + a * u;
            this.d = n * h + a * l;
            this.tx = o * c + s * u + m;
            this.ty = o * h + s * l + d;
            return this
        },
        rotate: function(e) {
            var t = Math.sin(e),
                i = Math.cos(e),
                r = this.a,
                n = this.b,
                a = this.c,
                o = this.d,
                s = this.tx,
                c = this.ty;
            this.a = r * i - n * t;
            this.b = r * t + n * i;
            this.c = a * i - o * t;
            this.d = a * t + o * i;
            this.tx = s * i - c * t;
            this.ty = s * t + c * i;
            return this
        },
        scale: function(e, t) {
            this.a *= e;
            this.d *= t;
            this.c *= e;
            this.b *= t;
            this.tx *= e;
            this.ty *= t;
            return this
        },
        translate: function(e, t) {
            this.tx += e;
            this.ty += t;
            return this
        },
        identity: function() {
            this.a = this.d = 1;
            this.b = this.c = this.tx = this.ty = 0;
            return this
        },
        invert: function() {
            var e = this.a;
            var t = this.b;
            var i = this.c;
            var r = this.d;
            var n = this.tx;
            var a = e * r - t * i;
            this.a = r / a;
            this.b = -t / a;
            this.c = -i / a;
            this.d = e / a;
            this.tx = (i * this.ty - r * n) / a;
            this.ty = -(e * this.ty - t * n) / a;
            return this
        },
        transformPoint: function(e, t, i) {
            var r = e.x * this.a + e.y * this.c + this.tx,
                n = e.x * this.b + e.y * this.d + this.ty;
            if (t) {
                r = r + .5 >> 0;
                n = n + .5 >> 0
            }
            if (i) return {
                x: r,
                y: n
            };
            e.x = r;
            e.y = n;
            return e
        }
    });
    var m = i.create({
        constructor: function(e) {
            this.init(e)
        },
        image: null,
        rect: null,
        init: function(e) {
            var i = this,
                r = i.image;
            if (m.isDrawable(e)) {
                i.image = e
            } else if (e) {
                t.copy(i, e, true)
            }
            var n = i.image;
            if (n && !n.notLoad && !i.rect) i.rect = [0, 0, n.width, n.height]
        },
        Statics: {
            isDrawable: function(e) {
                if (!e || !e.tagName) return false;
                var t = e.tagName.toLowerCase();
                return t === "img" || t === "canvas" || t === "video"
            }
        }
    });
    var d = function() {
        return i.create({
            Mixes: r,
            constructor: function(e) {
                e = e || {};
                this.id = this.id || e.id || t.getUid("View");
                t.copy(this, e, true)
            },
            needRender: true,
            needSave: true,
            id: null,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            alpha: 1,
            rotation: 0,
            visible: true,
            pivotX: 0,
            pivotY: 0,
            scaleX: 1,
            scaleY: 1,
            pointerEnabled: false,
            background: null,
            mask: null,
            align: null,
            drawable: null,
            boundsArea: null,
            parent: null,
            depth: -1,
            getStage: function() {
                var e = this,
                    t;
                while (t = e.parent) e = t;
                if (e.canvas) return e;
                return null
            },
            getScaledWidth: function() {
                return this.width * this.scaleX
            },
            getScaledHeight: function() {
                return this.height * this.scaleY
            },
            addTo: function(e, t) {
                if (typeof t === "number") e.addChildAt(this, t);
                else e.addChild(this);
                return this
            },
            removeFromParent: function() {
                var e = this.parent;
                if (e) e.removeChild(this);
                return this
            },
            getBounds: function() {
                var e = this.width,
                    t = this.height,
                    i = this.getConcatenatedMatrix(),
                    r = this.boundsArea || [{
                        x: 0,
                        y: 0
                    }, {
                        x: e,
                        y: 0
                    }, {
                        x: e,
                        y: t
                    }, {
                        x: 0,
                        y: t
                    }],
                    n = [],
                    a, o, s, c, h, u, l;
                for (var m = 0, d = r.length; m < d; m++) {
                    a = i.transformPoint(r[m], true, true);
                    o = a.x;
                    s = a.y;
                    if (m == 0) {
                        c = h = o;
                        u = l = s
                    } else {
                        if (c > o) c = o;
                        else if (h < o) h = o;
                        if (u > s) u = s;
                        else if (l < s) l = s
                    }
                    n[m] = a
                }
                n.x = c;
                n.y = u;
                n.width = h - c;
                n.height = l - u;
                return n
            },
            getConcatenatedMatrix: function(e) {
                var t = new l(1, 0, 0, 1, 0, 0);
                for (var i = this; i != e && i.parent; i = i.parent) {
                    var r = 1,
                        n = 0,
                        a = i.rotation % 360,
                        o = i.pivotX,
                        s = i.pivotY,
                        c = i.scaleX,
                        h = i.scaleY;
                    if (a) {
                        var u = a * Math.PI / 180;
                        r = Math.cos(u);
                        n = Math.sin(u)
                    }
                    if (o != 0) t.tx -= o;
                    if (s != 0) t.ty -= s;
                    t.concat(r * c, n * c, -n * h, r * h, i.x, i.y)
                }
                return t
            },
            hitTestPoint: function(t, i, r) {
                var n = this.getBounds(),
                    a = t >= n.x && t <= n.x + n.width && i >= n.y && i <= n.y + n.height;
                if (a && r) {
                    a = e(t, i, n)
                }
                return a
            },
            hitTestObject: function(e, t) {
                var i = this.getBounds(),
                    r = e.getBounds(),
                    a = i.x <= r.x + r.width && r.x <= i.x + i.width && i.y <= r.y + r.height && r.y <= i.y + i.height;
                if (a && t) {
                    a = n(i, r)
                }
                return !!a
            },
            _render: function(e, t) {
                if ((!this.onUpdate || this.onUpdate(t) !== false) && e.startDraw(this)) {
                    e.transform(this);
                    this.render(e, t);
                    e.endDraw(this)
                }
            },
            _fireMouseEvent: function(e) {
                e.eventCurrentTarget = this;
                this.fire(e);
                if (e.type == "mousemove") {
                    if (!this.__mouseOver) {
                        this.__mouseOver = true;
                        var i = t.copy({}, e);
                        i.type = "mouseover";
                        this.fire(i)
                    }
                } else if (e.type == "mouseout") {
                    this.__mouseOver = false
                }
                var r = this.parent;
                if (!e._stopped && !e._stopPropagationed && r) {
                    if (e.type == "mouseout" || e.type == "touchout") {
                        if (!r.hitTestPoint(e.stageX, e.stageY, true)) {
                            r._fireMouseEvent(e)
                        }
                    } else {
                        r._fireMouseEvent(e)
                    }
                }
            },
            onUpdate: null,
            render: function(e, t) {
                e.draw(this)
            },
            toString: function() {
                return t.viewToString(this)
            }
        });

        function e(e, t, i) {
            var r = 0,
                n = false,
                a, o, s, c;
            for (var h = 0, u = i.length; h < u; h++) {
                var l = i[h],
                    m = i[(h + 1) % u];
                if (l.y == m.y && t == l.y) {
                    l.x > m.x ? (a = m.x, o = l.x) : (a = l.x, o = m.x);
                    if (e >= a && e <= o) {
                        n = true;
                        continue
                    }
                }
                l.y > m.y ? (s = m.y, c = l.y) : (s = l.y, c = m.y);
                if (t < s || t > c) continue;
                var d = (t - l.y) * (m.x - l.x) / (m.y - l.y) + l.x;
                if (d > e) r++;
                else if (d == e) n = true;
                if (l.x > e && l.y == t) {
                    var f = i[(u + h - 1) % u];
                    if (f.y < t && m.y > t || f.y > t && m.y < t) {
                        r++
                    }
                }
            }
            return n || r % 2 == 1
        }

        function n(e, t) {
            var i = a(e, t, {
                overlap: -Infinity,
                normal: {
                    x: 0,
                    y: 0
                }
            });
            if (i) return a(t, e, i);
            return false
        }

        function a(e, t, i) {
            var r = e.length,
                n = t.length,
                a, o, s, c, h, u, l, m, d, f = {
                    x: 0,
                    y: 0
                };
            for (var p = 0; p < r; p++) {
                a = e[p];
                o = e[p < r - 1 ? p + 1 : 0];
                f.x = a.y - o.y;
                f.y = o.x - a.x;
                s = Math.sqrt(f.x * f.x + f.y * f.y);
                f.x /= s;
                f.y /= s;
                c = h = e[0].x * f.x + e[0].y * f.y;
                for (var v = 1; v < r; v++) {
                    m = e[v].x * f.x + e[v].y * f.y;
                    if (m > h) h = m;
                    else if (m < c) c = m
                }
                u = l = t[0].x * f.x + t[0].y * f.y;
                for (v = 1; v < n; v++) {
                    m = t[v].x * f.x + t[v].y * f.y;
                    if (m > l) l = m;
                    else if (m < u) u = m
                }
                if (c < u) {
                    d = u - h;
                    f.x = -f.x;
                    f.y = -f.y
                } else {
                    d = c - l
                }
                if (d >= 0) {
                    return false
                } else if (d > i.overlap) {
                    i.overlap = d;
                    i.normal.x = f.x;
                    i.normal.y = f.y
                }
            }
            return i
        }
    }();
    var f = i.create({
        Extends: d,
        constructor: function(e) {
            e = e || {};
            this.id = this.id || e.id || t.getUid("Container");
            f.superclass.constructor.call(this, e);
            if (this.children) this._updateChildren();
            else this.children = []
        },
        children: null,
        pointerChildren: false,
        clipChildren: false,
        getNumChildren: function() {
            return this.children.length
        },
        addChildAt: function(e, t) {
            var i = this.children,
                r = i.length,
                n = e.parent;
            t = t < 0 ? 0 : t > r ? r : t;
            var a = this.getChildIndex(e);
            if (a == t) {
                return this
            } else if (a >= 0) {
                i.splice(a, 1);
                t = t == r ? r - 1 : t
            } else if (n) {
                n.removeChild(e)
            }
            i.splice(t, 0, e);
            if (a < 0) {
                this._updateChildren(t)
            } else {
                var o = a < t ? a : t;
                var s = a < t ? t : a;
                this._updateChildren(o, s + 1)
            }
            return this
        },
        addChild: function(e) {
            var t = this.children.length,
                i = arguments;
            for (var r = 0, n = i.length; r < n; r++) {
                this.addChildAt(i[r], t + r)
            }
            return this
        },
        removeChildAt: function(e) {
            var t = this.children;
            if (e < 0 || e >= t.length) return null;
            var i = t[e];
            if (i) {
                if (!i.__renderer) {
                    var r = i;
                    while (r = r.parent) {
                        if (r.renderer) {
                            i.__renderer = r.renderer;
                            break
                        } else if (r.__renderer) {
                            i.__renderer = r.__renderer;
                            break
                        }
                    }
                }
                if (i.__renderer) {
                    i.__renderer.remove(i)
                }
                i.parent = null;
                i.depth = -1
            }
            t.splice(e, 1);
            this._updateChildren(e);
            return i
        },
        removeChild: function(e) {
            return this.removeChildAt(this.getChildIndex(e))
        },
        removeChildById: function(e) {
            var t = this.children,
                i;
            for (var r = 0, n = t.length; r < n; r++) {
                i = t[r];
                if (i.id === e) {
                    this.removeChildAt(r);
                    return i
                }
            }
            return null
        },
        removeAllChildren: function() {
            while (this.children.length) this.removeChildAt(0);
            return this
        },
        getChildAt: function(e) {
            var t = this.children;
            if (e < 0 || e >= t.length) return null;
            return t[e]
        },
        getChildById: function(e) {
            var t = this.children,
                i;
            for (var r = 0, n = t.length; r < n; r++) {
                i = t[r];
                if (i.id === e) return i
            }
            return null
        },
        getChildIndex: function(e) {
            return this.children.indexOf(e)
        },
        setChildIndex: function(e, t) {
            var i = this.children,
                r = i.indexOf(e);
            if (r >= 0 && r != t) {
                var n = i.length;
                t = t < 0 ? 0 : t >= n ? n - 1 : t;
                i.splice(r, 1);
                i.splice(t, 0, e);
                this._updateChildren()
            }
            return this
        },
        swapChildren: function(e, t) {
            var i = this.children,
                r = this.getChildIndex(e),
                n = this.getChildIndex(t);
            e.depth = n;
            i[n] = e;
            t.depth = r;
            i[r] = t
        },
        swapChildrenAt: function(e, t) {
            var i = this.children,
                r = this.getChildAt(e),
                n = this.getChildAt(t);
            r.depth = t;
            i[t] = r;
            n.depth = e;
            i[e] = n
        },
        sortChildren: function(e) {
            var t = e,
                i = this.children;
            if (typeof t == "string") {
                var r = t;
                t = function(e, t) {
                    return t[r] - e[r]
                }
            }
            i.sort(t);
            this._updateChildren()
        },
        _updateChildren: function(e, t) {
            var i = this.children,
                r, e = e || 0,
                t = t || i.length;
            for (var n = e; n < t; n++) {
                r = i[n];
                r.depth = n + 1;
                r.parent = this
            }
        },
        contains: function(e) {
            while (e = e.parent) {
                if (e === this) {
                    return true
                }
            }
            return false
        },
        getViewAtPoint: function(e, t, i, r, n) {
            var a = r ? [] : null,
                o = this.children,
                s, c;
            for (var h = o.length - 1; h >= 0; h--) {
                s = o[h];
                if (!s || !s.visible || s.alpha <= 0 || n && !s.pointerEnabled) continue;
                if (s.children && s.children.length && !(n && !s.pointerChildren)) {
                    c = s.getViewAtPoint(e, t, i, r, n)
                }
                if (c) {
                    if (!r) return c;
                    else if (c.length) a = a.concat(c)
                } else if (s.hitTestPoint(e, t, i)) {
                    if (!r) return s;
                    else a.push(s)
                }
            }
            return r && a.length ? a : null
        },
        render: function(e, t) {
            f.superclass.render.call(this, e, t);
            var i = this.children.slice(0),
                r, n, a;
            for (r = 0, n = i.length; r < n; r++) {
                a = i[r];
                a.needRender && a._render(e, t)
            }
        }
    });
    var p = i.create({
        Extends: f,
        constructor: function(e) {
            e = e || {};
            this.id = this.id || e.id || t.getUid("Stage");
            p.superclass.constructor.call(this, e);
            this._initRenderer(e);
            var i = this.width,
                r = this.height,
                n = this.updateViewport();
            if (!e.width) i = n && n.width || 320;
            if (!e.height) r = n && n.height || 480;
            this.resize(i, r, true)
        },
        viewScale: 1,
        canvas: null,
        renderer: null,
        paused: false,
        viewport: null,
        _initRenderer: function(e) {
            var i = this.canvas;
            if (typeof i === "string") i = t.getElement(i);
            var r = e.container;
            if (typeof r === "string") r = t.getElement(r);
            if (!i) {
                i = t.createElement("canvas", {
                    style: {
                        position: "absolute"
                    }
                })
            }
            this.canvas = i;
            if (r) r.appendChild(i);
            var n = i.getContext,
                a = {
                    canvas: i,
                    stage: this
                };
            if (n) {
                if (e.webgl) {
                    this.renderer = new WebGLRenderer(a)
                } else {
                    this.renderer = new h(a)
                }
            } else {
                this.renderer = new u(a)
            }
        },
        addTo: function(e) {
            var t = this.canvas;
            if (t.parentNode !== e) {
                e.appendChild(t)
            }
            return this
        },
        tick: function(e) {
            if (!this.paused) {
                t._drawImageNum = 0;
                this._render(this.renderer, e);
                t.drawImageNum = t._drawImageNum
            }
        },
        enableDOMEvent: function(e, t) {
            var i = this,
                r = i.canvas,
                n = typeof e === "string" ? [e] : e,
                t = t !== false,
                a = i._domListener || (i._domListener = function(e) {
                    i._onDOMEvent(e)
                });
            for (var o = 0; o < n.length; o++) {
                var e = n[o];
                if (t) {
                    r.addEventListener(e, a, false)
                } else {
                    r.removeEventListener(e, a)
                }
            }
            return i
        },
        _onDOMEvent: function(e) {
            var i = e.type,
                r = e,
                n = i.indexOf("touch") == 0;
            var a = e;
            if (n) {
                var o = e.touches,
                    s = e.changedTouches;
                a = o && o.length ? o[0] : s && s.length ? s[0] : null
            }
            var c = a.pageX || a.clientX,
                h = a.pageY || a.clientY,
                u = this.viewport || this.updateViewport();
            r.stageX = c = (c - u.left) / this.viewScale;
            r.stageY = h = (h - u.top) / this.viewScale;
            r.stopPropagation = function() {
                this._stopPropagationed = true
            };
            var l = this.getViewAtPoint(c, h, true, false, true) || this,
                m = this.canvas,
                d = this._eventTarget;
            var f = i === "mouseout";
            if (d && (d != l && (!d.contains || !d.contains(l)) || f)) {
                var p = i === "touchmove" ? "touchout" : i === "mousemove" || f || !l ? "mouseout" : null;
                if (p) {
                    var v = t.copy({}, r);
                    v.type = p;
                    v.eventTarget = d;
                    d._fireMouseEvent(v)
                }
                r.lastEventTarget = d;
                this._eventTarget = null
            }
            if (l && l.pointerEnabled && i !== "mouseout") {
                r.eventTarget = this._eventTarget = l;
                l._fireMouseEvent(r)
            }
            if (e.type === t.event.POINTER_START) {
                this._lastStagePointer = {
                    x: c,
                    y: h,
                    time: Date.now()
                }
            } else if (e.type === t.event.POINTER_END) {
                var _ = 10;
                var g = this._lastStagePointer;
                if (g) {
                    this._lastStagePointer = null;
                    if (Date.now() - g.time < 300) {
                        if (Math.abs(g.x - c) < _ && Math.abs(g.y - h) < _) {
                            var b = {
                                type: "click",
                                eventTarget: d
                            };
                            d._fireMouseEvent(b)
                        }
                    }
                }
            }
            if (!n) {
                var y = l && l.pointerEnabled && l.useHandCursor ? "pointer" : "";
                m.style.cursor = y
            }
            if (t.browser.android && i === "touchmove") {
                e.preventDefault()
            }
        },
        updateViewport: function() {
            var e = this.canvas,
                i = null;
            if (e.parentNode) {
                i = this.viewport = t.getElementRect(e)
            }
            return i
        },
        resize: function(e, t, i) {
            if (i || this.width !== e || this.height !== t) {
                this.width = e;
                this.height = t;
                this.renderer.resize(e, t);
                this.updateViewport()
            }
        }
    });
    var v = i.create({
        Extends: d,
        constructor: function(e) {
            e = e || {};
            this.id = this.id || e.id || t.getUid("Bitmap");
            v.superclass.constructor.call(this, e);
            this.drawable = new m(e);
            if (!this.width || !this.height) {
                var i = this.drawable.rect;
                if (i) {
                    this.width = i[2];
                    this.height = i[3]
                }
            }
        },
        setImage: function(e, t) {
            this.drawable.init({
                image: e,
                rect: t
            });
            if (t) {
                this.width = t[2];
                this.height = t[3]
            }
            return this
        }
    });
    var _ = i.create({
        Extends: d,
        constructor: function(e) {
            e = e || {};
            this.id = this.id || e.id || t.getUid("Sprite");
            _.superclass.constructor.call(this, e);
            this._frames = [];
            this._frameNames = {};
            this.drawable = new m;
            if (e.frames) this.addFrame(e.frames)
        },
        _frames: null,
        _frameNames: null,
        _frameElapsed: 0,
        _firstRender: true,
        paused: false,
        loop: true,
        timeBased: false,
        interval: 1,
        currentFrame: 0,
        getNumFrames: function() {
            return this._frames ? this._frames.length : 0
        },
        addFrame: function(e, t) {
            var i = t != null ? t : this._frames.length;
            if (e instanceof Array) {
                for (var r = 0, n = e.length; r < n; r++) {
                    this.setFrame(e[r], i + r)
                }
            } else {
                this.setFrame(e, i)
            }
            return this
        },
        setFrame: function(e, t) {
            var i = this._frames,
                r = i.length;
            t = t < 0 ? 0 : t > r ? r : t;
            i[t] = e;
            if (e.name) this._frameNames[e.name] = e;
            if (t == 0 && !this.width || !this.height) {
                this.width = e.rect[2];
                this.height = e.rect[3]
            }
            return this
        },
        getFrame: function(e) {
            if (typeof e === "number") {
                var t = this._frames;
                if (e < 0 || e >= t.length) return null;
                return t[e]
            }
            return this._frameNames[e]
        },
        getFrameIndex: function(e) {
            var t = this._frames,
                i = t.length,
                r = -1;
            if (typeof e === "number") {
                r = e
            } else {
                var n = typeof e === "string" ? this._frameNames[e] : e;
                if (n) {
                    for (var a = 0; a < i; a++) {
                        if (n === t[a]) {
                            r = a;
                            break
                        }
                    }
                }
            }
            return r
        },
        play: function() {
            this.paused = false;
            return this
        },
        stop: function() {
            this.paused = true;
            return this
        },
        "goto": function(e, t) {
            var i = this._frames.length,
                r = this.getFrameIndex(e);
            this.currentFrame = r < 0 ? 0 : r >= i ? i - 1 : r;
            this.paused = t;
            this._firstRender = true;
            return this
        },
        _render: function(e, t) {
            if (!this.visible || this.alpha <= 0) {
                return
            }
            var i = this.currentFrame,
                r;
            if (this._firstRender) {
                r = i;
                this._firstRender = false
            } else {
                r = this._nextFrame(t)
            }
            if (r != i) {
                this.currentFrame = r;
                var n = this._frames[r].callback;
                n && n.call(this)
            }
            if (this.onEnterFrame) this.onEnterFrame(r);
            this.drawable.init(this._frames[r]);
            _.superclass._render.call(this, e, t)
        },
        _nextFrame: function(e) {
            var t = this._frames,
                i = t.length,
                r = this.currentFrame,
                n = t[r],
                a = n.duration || this.interval,
                o = this._frameElapsed;
            var s = r == 0 && !this.drawable ? 0 : o + (this.timeBased ? e : 1);
            o = this._frameElapsed = s < a ? s : 0;
            if (n.stop || !this.loop && r >= i - 1) {
                this.stop()
            }
            if (!this.paused && o == 0) {
                if (n.next != null) {
                    r = this.getFrameIndex(n.next)
                } else if (r >= i - 1) {
                    r = 0
                } else if (this.drawable) {
                    r++
                }
            }
            return r
        },
        setFrameCallback: function(e, t) {
            e = this.getFrame(e);
            if (e) e.callback = t;
            return this
        },
        onEnterFrame: null
    });
    var g = i.create({
        Extends: d,
        constructor: function(e) {
            e = e || {};
            this.id = this.id || e.id || t.getUid("DOMElement");
            g.superclass.constructor.call(this, e);
            this.drawable = new m;
            var i = this.drawable.domElement = e.element || t.createElement("div");
            i.id = this.id
        },
        _render: function(e, t) {
            if (!this.onUpdate || this.onUpdate(t) !== false) {
                e.transform(this);
                if (this.visible && this.alpha > 0) {
                    this.render(e, t)
                }
            }
        },
        render: function(e, t) {
            var i = e.canvas;
            if (i.getContext) {
                var r = this.drawable.domElement,
                    n = this.depth,
                    a = i.nextSibling,
                    o;
                if (r.parentNode) return;
                while (a && a.nodeType != 3) {
                    o = parseInt(a.style.zIndex) || 0;
                    if (o <= 0 || o > n) {
                        break
                    }
                    a = a.nextSibling
                }
                i.parentNode.insertBefore(this.drawable.domElement, a)
            } else {
                e.draw(this)
            }
        }
    });
    var b = function() {
        var e = document.createElement("canvas");
        var r = e.getContext && e.getContext("2d");
        return i.create({
            Extends: d,
            constructor: function(e) {
                e = e || {};
                this.id = this.id || e.id || t.getUid("Graphics");
                b.superclass.constructor.call(this, e);
                this._actions = [];
                this._cache = null
            },
            lineWidth: 1,
            lineAlpha: 1,
            lineCap: null,
            lineJoin: null,
            miterLimit: 10,
            hasStroke: false,
            strokeStyle: "0",
            hasFill: false,
            fillStyle: "0",
            fillAlpha: 0,
            lineStyle: function(e, t, i, r, n, a) {
                var o = this,
                    s = o._addAction;
                s.call(o, ["lineWidth", o.lineWidth = e || 1]);
                s.call(o, ["strokeStyle", o.strokeStyle = t || "0"]);
                s.call(o, ["lineAlpha", o.lineAlpha = i || 1]);
                if (r != undefined) s.call(o, ["lineCap", o.lineCap = r]);
                if (n != undefined) s.call(o, ["lineJoin", o.lineJoin = n]);
                if (a != undefined) s.call(o, ["miterLimit", o.miterLimit = a]);
                o.hasStroke = true;
                return o
            },
            beginFill: function(e, t) {
                var i = this,
                    r = i._addAction;
                r.call(i, ["fillStyle", i.fillStyle = e]);
                r.call(i, ["fillAlpha", i.fillAlpha = t || 1]);
                i.hasFill = true;
                return i
            },
            endFill: function() {
                var e = this,
                    t = e._addAction;
                if (e.hasStroke) t.call(e, ["stroke"]);
                if (e.hasFill) t.call(e, ["fill"]);
                return e
            },
            beginLinearGradientFill: function(e, t, i, n, a, o) {
                var s = this,
                    c = r.createLinearGradient(e, t, i, n);
                for (var h = 0, u = a.length; h < u; h++) {
                    c.addColorStop(o[h], a[h])
                }
                s.hasFill = true;
                return s._addAction(["fillStyle", s.fillStyle = c])
            },
            beginRadialGradientFill: function(e, t, i, n, a, o, s, c) {
                var h = this,
                    u = r.createRadialGradient(e, t, i, n, a, o);
                for (var l = 0, m = s.length; l < m; l++) {
                    u.addColorStop(c[l], s[l])
                }
                h.hasFill = true;
                return h._addAction(["fillStyle", h.fillStyle = u])
            },
            beginBitmapFill: function(e, t) {
                var i = this,
                    n = r.createPattern(e, t || "");
                i.hasFill = true;
                return i._addAction(["fillStyle", i.fillStyle = n])
            },
            beginPath: function() {
                return this._addAction(["beginPath"])
            },
            closePath: function() {
                return this._addAction(["closePath"])
            },
            moveTo: function(e, t) {
                return this._addAction(["moveTo", e, t])
            },
            lineTo: function(e, t) {
                return this._addAction(["lineTo", e, t])
            },
            quadraticCurveTo: function(e, t, i, r) {
                return this._addAction(["quadraticCurveTo", e, t, i, r])
            },
            bezierCurveTo: function(e, t, i, r, n, a) {
                return this._addAction(["bezierCurveTo", e, t, i, r, n, a])
            },
            drawRect: function(e, t, i, r) {
                return this._addAction(["rect", e, t, i, r])
            },
            drawRoundRectComplex: function(e, t, i, r, n, a, o, s) {
                var c = this,
                    h = c._addAction;
                h.call(c, ["moveTo", e + n, t]);
                h.call(c, ["lineTo", e + i - a, t]);
                h.call(c, ["arc", e + i - a, t + a, a, -Math.PI / 2, 0, false]);
                h.call(c, ["lineTo", e + i, t + r - o]);
                h.call(c, ["arc", e + i - o, t + r - o, o, 0, Math.PI / 2, false]);
                h.call(c, ["lineTo", e + s, t + r]);
                h.call(c, ["arc", e + s, t + r - s, s, Math.PI / 2, Math.PI, false]);
                h.call(c, ["lineTo", e, t + n]);
                h.call(c, ["arc", e + n, t + n, n, Math.PI, Math.PI * 3 / 2, false]);
                return c
            },
            drawRoundRect: function(e, t, i, r, n) {
                return this.drawRoundRectComplex(e, t, i, r, n, n, n, n)
            },
            drawCircle: function(e, t, i) {
                return this._addAction(["arc", e + i, t + i, i, 0, Math.PI * 2, 0])
            },
            drawEllipse: function(e, t, i, r) {
                var n = this;
                if (i == r) return n.drawCircle(e, t, i);
                var a = n._addAction;
                var o = i / 2,
                    s = r / 2,
                    c = .5522847498307933,
                    h = c * o,
                    u = c * s;
                e = e + o;
                t = t + s;
                a.call(n, ["moveTo", e + o, t]);
                a.call(n, ["bezierCurveTo", e + o, t - u, e + h, t - s, e, t - s]);
                a.call(n, ["bezierCurveTo", e - h, t - s, e - o, t - u, e - o, t]);
                a.call(n, ["bezierCurveTo", e - o, t + u, e - h, t + s, e, t + s]);
                a.call(n, ["bezierCurveTo", e + h, t + s, e + o, t + u, e + o, t]);
                return n
            },
            drawSVGPath: function(e) {
                var t = this,
                    i = t._addAction,
                    r = e.split(/,| (?=[a-zA-Z])/);
                i.call(t, ["beginPath"]);
                for (var n = 0, a = r.length; n < a; n++) {
                    var o = r[n],
                        s = o[0].toUpperCase(),
                        c = o.substring(1).split(/,| /);
                    if (c[0].length == 0) c.shift();
                    switch (s) {
                        case "M":
                            i.call(t, ["moveTo", c[0], c[1]]);
                            break;
                        case "L":
                            i.call(t, ["lineTo", c[0], c[1]]);
                            break;
                        case "C":
                            i.call(t, ["bezierCurveTo", c[0], c[1], c[2], c[3], c[4], c[5]]);
                            break;
                        case "Z":
                            i.call(t, ["closePath"]);
                            break
                    }
                }
                return t
            },
            _draw: function(e) {
                var t = this,
                    i = t._actions,
                    r = i.length,
                    n;
                e.beginPath();
                for (n = 0; n < r; n++) {
                    var a = i[n],
                        o = a[0],
                        s = a.length > 1 ? a.slice(1) : null;
                    if (typeof e[o] == "function") e[o].apply(e, s);
                    else e[o] = a[1]
                }
            },
            render: function(e, t) {
                var i = this,
                    r = e.canvas;
                if (r.getContext) {
                    i._draw(e.context)
                } else {
                    var n = i.drawable;
                    if (!n.image) {
                        n.image = i.toImage()
                    }
                    e.draw(i)
                }
            },
            cache: function(e) {
                var i = this,
                    r = i._cache;
                if (!r) {
                    r = i._cache = t.createElement("canvas", {
                        width: i.width,
                        height: i.height
                    });
                    i._draw(r.getContext("2d"))
                }
                if (e) r = i._cache = i.toImage();
                return r
            },
            uncache: function() {
                this._cache = null
            },
            toImage: function(e) {
                var i = this,
                    r = i._cache,
                    n = i.width,
                    a = i.height;
                if (!r) {
                    r = t.createElement("canvas", {
                        width: n,
                        height: a
                    });
                    i._draw(r.getContext("2d"))
                }
                if (!(r instanceof HTMLImageElement)) {
                    var o = r.toDataURL(e || "image/png");
                    r = new Image;
                    r.src = o;
                    r.width = n;
                    r.height = a
                }
                return r
            },
            clear: function() {
                var e = this;
                e._actions.length = 0;
                e._cache = null;
                e.lineWidth = 1;
                e.lineAlpha = 1;
                e.lineCap = null;
                e.lineJoin = null;
                e.miterLimit = 10;
                e.hasStroke = false;
                e.strokeStyle = "0";
                e.hasFill = false;
                e.fillStyle = "0";
                e.fillAlpha = 1;
                return e
            },
            _addAction: function(e) {
                var t = this;
                t._actions.push(e);
                return t
            }
        })
    }();
    var y = i.create({
        Extends: d,
        constructor: function(e) {
            e = e || {};
            this.id = this.id || e.id || t.getUid("Text");
            y.superclass.constructor.call(this, e);
            if (!e.font) this.font = "12px arial";
            this._fontHeight = y.measureFontHeight(this.font)
        },
        text: null,
        color: "#000",
        textAlign: null,
        textVAlign: null,
        outline: false,
        lineSpacing: 0,
        maxWidth: 200,
        font: null,
        textWidth: 0,
        textHeight: 0,
        setFont: function(e) {
            var t = this;
            if (t.font !== e) {
                t.font = e;
                t._fontHeight = y.measureFontHeight(e)
            }
            return t
        },
        render: function(e, t) {
            var i = this,
                r = e.canvas;
            if (r.getContext) {
                i._draw(e.context)
            } else {
                var n = i.drawable;
                var a = n.domElement;
                var o = a.style;
                o.font = i.font;
                o.textAlign = i.textAlign;
                o.color = i.color;
                o.width = i.width + "px";
                o.height = i.height + "px";
                o.lineHeight = i._fontHeight + i.lineSpacing + "px";
                a.innerHTML = i.text;
                e.draw(this)
            }
        },
        _draw: function(e) {
            var t = this,
                i = t.text.toString();
            if (!i) return;
            e.font = t.font;
            e.textAlign = t.textAlign;
            e.textBaseline = "top";
            var r = i.split(/\r\n|\r|\n|<br(?:[ \/])*>/);
            var n = 0,
                a = 0;
            var o = t._fontHeight + t.lineSpacing;
            var s, c, h;
            var u = [];
            for (s = 0, len = r.length; s < len; s++) {
                c = r[s];
                h = e.measureText(c).width;
                if (h <= t.maxWidth) {
                    u.push({
                        text: c,
                        y: a
                    });
                    if (n < h) n = h;
                    a += o;
                    continue
                }
                var l = "",
                    m = 0,
                    d, f, p;
                for (f = 0, wlen = c.length; f < wlen; f++) {
                    p = c[f];
                    d = e.measureText(l + p).width;
                    if (d > t.maxWidth) {
                        u.push({
                            text: l,
                            y: a
                        });
                        if (n < m) n = m;
                        a += o;
                        l = p
                    } else {
                        m = d;
                        l += p
                    }
                    if (f == wlen - 1) {
                        u.push({
                            text: l,
                            y: a
                        });
                        if (l !== p && n < d) n = d;
                        a += o
                    }
                }
            }
            t.textWidth = n;
            t.textHeight = a;
            if (!t.width) t.width = n;
            if (!t.height) t.height = a;
            var v = 0;
            switch (t.textVAlign) {
                case "middle":
                    v = t.height - t.textHeight >> 1;
                    break;
                case "bottom":
                    v = t.height - t.textHeight;
                    break
            }
            var _ = t.background;
            if (_) {
                e.fillStyle = _;
                e.fillRect(0, 0, t.width, t.height)
            }
            if (t.outline) e.strokeStyle = t.color;
            else e.fillStyle = t.color;
            for (var s = 0; s < u.length; s++) {
                var c = u[s];
                t._drawTextLine(e, c.text, v + c.y)
            }
        },
        _drawTextLine: function(e, t, i) {
            var r = this,
                n = 0,
                a = r.width;
            switch (r.textAlign) {
                case "center":
                    n = a >> 1;
                    break;
                case "right":
                case "end":
                    n = a;
                    break
            }
            if (r.outline) e.strokeText(t, n, i);
            else e.fillText(t, n, i)
        },
        Statics: {
            measureFontHeight: function(e) {
                var i = document.documentElement,
                    r;
                var n = t.createElement("div", {
                    style: {
                        font: e,
                        position: "absolute"
                    },
                    innerHTML: "M"
                });
                i.appendChild(n);
                r = n.offsetHeight;
                i.removeChild(n);
                return r
            }
        }
    });
    var k = i.create({
        Extends: f,
        constructor: function(e) {
            e = e || {};
            this.id = this.id || e.id || t.getUid("BitmapText");
            k.superclass.constructor.call(this, e);
            var i = e.text + "";
            if (i) {
                this.text = "";
                this.setText(i)
            }
            this.pointerChildren = false
        },
        glyphs: null,
        letterSpacing: 0,
        text: "",
        textAlign: "left",
        setText: function(e) {
            var t = this,
                i = e.toString(),
                r = i.length;
            if (t.text == i) return;
            t.text = i;
            var n, a, o, s, c = 0,
                h = 0,
                u = 0;
            for (n = 0; n < r; n++) {
                a = i.charAt(n);
                o = t.glyphs[a];
                if (o) {
                    u = c + (c > 0 ? t.letterSpacing : 0);
                    if (t.children[n]) {
                        s = t.children[n];
                        s.setImage(o.image, o.rect)
                    } else {
                        s = t._createBitmap(o);
                        t.addChild(s)
                    }
                    s.x = u;
                    c = u + o.rect[2];
                    h = Math.max(h, o.rect[3])
                }
            }
            for (n = t.children.length - 1; n >= r; n--) {
                t._releaseBitmap(t.children[n]);
                t.children[n].removeFromParent()
            }
            t.width = c;
            t.height = h;
            this.setTextAlign();
            return t
        },
        _createBitmap: function(e) {
            var t;
            if (k._pool.length) {
                t = k._pool.pop();
                t.setImage(e.image, e.rect)
            } else {
                t = new v({
                    image: e.image,
                    rect: e.rect
                })
            }
            return t
        },
        _releaseBitmap: function(e) {
            k._pool.push(e);
        },
        setTextAlign: function(e) {
            this.textAlign = e || this.textAlign;
            switch (this.textAlign) {
                case "center":
                    this.pivotX = this.width * .5;
                    break;
                case "right":
                    this.pivotX = this.width;
                    break;
                case "left":
                default:
                    this.pivotX = 0;
                    break
            }
            return this
        },
        hasGlyphs: function(e) {
            var t = this.glyphs;
            if (!t) return false;
            var e = e.toString(),
                i = e.length,
                r;
            for (r = 0; r < i; r++) {
                if (!t[e.charAt(r)]) return false
            }
            return true
        },
        Statics: {
            _pool: [],
            createGlyphs: function(e, t, i, r) {
                var n = e.toString();
                i = i || n.length;
                r = r || 1;
                var a = t.width / i;
                var o = t.height / r;
                var s = {};
                for (var c = 0, h = e.length; c < h; c++) {
                    charStr = n.charAt(c);
                    s[charStr] = {
                        image: t,
                        rect: [a * (c % i), o * Math.floor(c / i), a, o]
                    }
                }
                return s
            }
        }
    });
    var x = i.create({
        Extends: d,
        constructor: function(e) {
            e = e || {};
            this.id = this.id || e.id || t.getUid("Button");
            x.superclass.constructor.call(this, e);
            this.drawable = new m(e);
            this.setState(x.UP)
        },
        upState: null,
        overState: null,
        downState: null,
        disabledState: null,
        state: null,
        enabled: true,
        useHandCursor: true,
        setEnabled: function(e) {
            if (this.enabled != e) {
                if (!e) {
                    this.setState(x.DISABLED)
                } else {
                    this.setState(x.UP)
                }
            }
            return this
        },
        setState: function(e) {
            if (this.state !== e) {
                this.state = e;
                this.pointerEnabled = this.enabled = e !== x.DISABLED;
                var i;
                switch (e) {
                    case x.UP:
                        i = this.upState;
                        break;
                    case x.OVER:
                        i = this.overState;
                        break;
                    case x.DOWN:
                        i = this.downState;
                        break;
                    case x.DISABLED:
                        i = this.disabledState;
                        break
                }
                if (i) {
                    this.drawable.init(i);
                    t.copy(this, i, true)
                }
            }
            return this
        },
        fire: function(e, t) {
            if (!this.enabled) return;
            var i = typeof e === "string" ? e : e.type;
            switch (i) {
                case "mousedown":
                case "touchstart":
                case "touchmove":
                    this.setState(x.DOWN);
                    break;
                case "mouseover":
                    this.setState(x.OVER);
                    break;
                case "mouseup":
                    if (this.overState) this.setState(x.OVER);
                    else if (this.upState) this.setState(x.UP);
                    break;
                case "touchend":
                case "touchout":
                case "mouseout":
                    this.setState(x.UP);
                    break
            }
            return x.superclass.fire.call(this, e, t)
        },
        Statics: {
            UP: "up",
            OVER: "over",
            DOWN: "down",
            DISABLED: "disabled"
        }
    });
    var w = function() {
        return i.create({
            constructor: function(i) {
                this._frames = e(i);
                this._sprites = t(i, this._frames)
            },
            _frames: null,
            _sprites: null,
            getFrame: function(e) {
                var t = this._frames;
                return t && t[e]
            },
            getSprite: function(e) {
                var t = this._sprites;
                return t && t[e]
            },
            Statics: {
                createSpriteFrames: function(e, t, i, r, n, a, o, s) {
                    if (Object.prototype.toString.call(e) === "[object Array]") {
                        var t = [];
                        for (var c = 0, h = e.length; c < h; c++) {
                            t = t.concat(this.createSpriteFrames.apply(this, e[c]))
                        }
                        return t
                    } else {
                        if (typeof t === "string") {
                            var u = t.split(",");
                            t = [];
                            for (var l = 0, m = u.length; l < m; l++) {
                                var d = u[l].split("-");
                                if (d.length == 1) {
                                    t.push(parseInt(d[0]))
                                } else {
                                    for (var c = parseInt(d[0]), h = parseInt(d[1]); c <= h; c++) {
                                        t.push(c)
                                    }
                                }
                            }
                        }
                        var s = i.width || s;
                        var f = Math.floor(s / r);
                        i.frames = t;
                        for (var c = 0; c < t.length; c++) {
                            var p = t[c];
                            t[c] = {
                                rect: [r * (p % f), n * Math.floor(p / f), r, n],
                                image: i,
                                duration: o
                            }
                        }
                        t[0].name = e;
                        if (a) {
                            t[t.length - 1].next = e
                        } else {
                            t[t.length - 1].stop = true
                        }
                        return t
                    }
                }
            }
        });

        function e(e) {
            var t = e.frames;
            if (!t) return null;
            var i = [],
                r;
            if (t instanceof Array) {
                for (var n = 0, a = t.length; n < a; n++) {
                    r = t[n];
                    i[n] = {
                        image: e.image,
                        rect: r
                    }
                }
            } else {
                var o = t.frameWidth;
                var s = t.frameHeight;
                var c = e.width / o | 0;
                var h = e.height / s | 0;
                var u = t.numFrames || c * h;
                for (var n = 0; n < u; n++) {
                    i[n] = {
                        image: e.image,
                        rect: [n % c * o, (n / c | 0) * s, o, s]
                    }
                }
            }
            return i
        }

        function t(e, t) {
            var i = e.sprites;
            if (!i) return null;
            var a = {},
                o, s, c;
            for (var h in i) {
                o = i[h];
                if (n(o)) {
                    s = r(t[o])
                } else if (o instanceof Array) {
                    s = [];
                    for (var u = 0, l = o.length; u < l; u++) {
                        var m = o[u],
                            d;
                        if (n(m)) {
                            c = r(t[m])
                        } else {
                            d = m.rect;
                            if (n(d)) d = t[m.rect];
                            c = r(d, m)
                        }
                        s[u] = c
                    }
                } else {
                    s = [];
                    for (var u = o.from; u <= o.to; u++) {
                        s[u - o.from] = r(t[u], o[u])
                    }
                }
                a[h] = s
            }
            return a
        }

        function r(e, t) {
            var i = {
                image: e.image,
                rect: e.rect
            };
            if (t) {
                i.name = t.name || null;
                i.duration = t.duration || 0;
                i.stop = !!t.stop;
                i.next = t.next || null
            }
            return i
        }

        function n(e) {
            return typeof e === "number"
        }
    }();
    var T = i.create({
        constructor: function(e) {
            this._targetFPS = e || 30;
            this._interval = 1e3 / this._targetFPS;
            this._tickers = []
        },
        _paused: false,
        _targetFPS: 0,
        _interval: 0,
        _intervalId: null,
        _tickers: null,
        _lastTime: 0,
        _tickCount: 0,
        _tickTime: 0,
        _measuredFPS: 0,
        start: function(i) {
            if (this._intervalId) return;
            this._lastTime = +new Date;
            var r = this,
                n = this._interval,
                a = e.requestAnimationFrame || e[t.browser.jsVendor + "RequestAnimationFrame"];
            if (i && a) {
                var o = function() {
                    r._tick()
                };
                var s = function() {
                    r._intervalId = setTimeout(s, n);
                    a(o)
                }
            } else {
                s = function() {
                    r._intervalId = setTimeout(s, n);
                    r._tick()
                }
            }
            s()
        },
        stop: function() {
            clearTimeout(this._intervalId);
            this._intervalId = null;
            this._lastTime = 0
        },
        pause: function() {
            this._paused = true
        },
        resume: function() {
            this._paused = false
        },
        _tick: function() {
            if (this._paused) return;
            var e = +new Date,
                t = e - this._lastTime,
                i = this._tickers.slice();
            if (++this._tickCount >= this._targetFPS) {
                this._measuredFPS = 1e3 / (this._tickTime / this._tickCount) + .5 >> 0;
                this._tickCount = 0;
                this._tickTime = 0
            } else {
                this._tickTime += e - this._lastTime
            }
            this._lastTime = e;
            for (var r = 0, n = i.length; r < n; r++) {
                i[r].tick(t)
            }
        },
        getMeasuredFPS: function() {
            return this._measuredFPS
        },
        addTick: function(e) {
            if (!e || typeof e.tick != "function") {
                throw new Error("Ticker: The tick object must implement the tick method.")
            }
            this._tickers.push(e);
            return e
        },
        requestNextTick: function(e) {
            var t = this;
            var i = this.addTick({
                tick: function() {
                    t.removeTick(i);
                    e && e()
                }
            })
        },
        removeTick: function(e) {
            var t = this._tickers,
                i = t.indexOf(e);
            if (i >= 0) {
                t.splice(i, 1)
            }
        }
    });
    var z = Array.prototype,
        A = z.slice;
    z.indexOf = z.indexOf || function(e, t) {
        t = t || 0;
        var i = this.length,
            r;
        if (i == 0 || t >= i) return -1;
        if (t < 0) t = i + t;
        for (r = t; r < i; r++) {
            if (this[r] === e) return r
        }
        return -1
    };
    var E = Function.prototype;
    E.bind = E.bind || function(e) {
        var t = this,
            i = A.call(arguments, 1),
            r = function() {};

        function n() {
            var r = i.concat(A.call(arguments));
            return t.apply(this instanceof n ? this : e, r)
        }
        r.prototype = t.prototype;
        n.prototype = new r;
        return n
    };
    var S = {
        startDrag: function(e) {
            var i = this;
            var r;
            this.setDragBounds(e);
            var n = {
                x: 0,
                y: 0,
                preX: 0,
                preY: 0
            };

            function a(e) {
                e.stopPropagation();
                n.preX = n.x = e.stageX;
                n.preY = n.y = e.stageY;
                i.off(t.event.POINTER_START, a);
                i.fire("dragStart", n);
                i.__dragX = i.x - n.x;
                i.__dragY = i.y - n.y;
                if (!r) {
                    r = this.getStage()
                }
                r.on(t.event.POINTER_MOVE, s);
                document.addEventListener(t.event.POINTER_END, o)
            }

            function o(e) {
                document.removeEventListener(t.event.POINTER_END, o);
                r && r.off(t.event.POINTER_MOVE, s);
                i.fire("dragEnd", n);
                i.on(t.event.POINTER_START, a)
            }

            function s(e) {
                n.preX = n.x;
                n.preY = n.y;
                n.x = e.stageX;
                n.y = e.stageY;
                i.fire("dragMove", n);
                var t = n.x + i.__dragX;
                var r = n.y + i.__dragY;
                i.x = Math.max(i._dragMinX, Math.min(i._dragMaxX, t));
                i.y = Math.max(i._dragMinY, Math.min(i._dragMaxY, r))
            }

            function c() {
                document.removeEventListener(t.event.POINTER_END, o);
                r && r.off(t.event.POINTER_MOVE, s);
                i.off(t.event.POINTER_START, a)
            }
            i.on(t.event.POINTER_START, a);
            i.stopDrag = c
        },
        setDragBounds: function(e) {
            var e = e || [-Infinity, -Infinity, Infinity, Infinity];
            this._dragMinX = e[0];
            this._dragMinY = e[1];
            this._dragMaxX = e[2] == Infinity ? Infinity : this._dragMinX + e[2];
            this._dragMaxY = e[3] == Infinity ? Infinity : this._dragMinY + e[3]
        },
        stopDrag: function() {}
    };
    var C = function() {
        function e() {
            return +new Date
        }
        return i.create({
            constructor: function(e, t, i, r) {
                var n = this;
                n.target = e;
                n._startTime = 0;
                n._seekTime = 0;
                n._pausedTime = 0;
                n._pausedStartTime = 0;
                n._reverseFlag = 1;
                n._repeatCount = 0;
                if (arguments.length == 3) {
                    r = i;
                    i = t;
                    t = null
                }
                for (var a in r) n[a] = r[a];
                n.setProps(t, i);
                if (!r.duration && r.time) {
                    n.duration = r.time || 0;
                    n.time = 0
                }
            },
            target: null,
            duration: 0,
            delay: 0,
            paused: false,
            loop: false,
            reverse: false,
            repeat: 0,
            repeatDelay: 0,
            ease: null,
            time: 0,
            onStart: null,
            onUpdate: null,
            onComplete: null,
            setProps: function(e, t) {
                var i = this,
                    r = i.target,
                    n = e || t,
                    a = i._fromProps = {},
                    o = i._toProps = {};
                e = e || r;
                t = t || r;
                for (var s in n) {
                    o[s] = t[s] || 0;
                    r[s] = a[s] = e[s] || 0
                }
                return i
            },
            start: function() {
                var t = this;
                t._startTime = e() + t.delay;
                t._seekTime = 0;
                t._pausedTime = 0;
                t.paused = false;
                C.add(t);
                return t
            },
            stop: function() {
                C.remove(this);
                return this
            },
            pause: function() {
                var t = this;
                t.paused = true;
                t._pausedStartTime = e();
                return t
            },
            resume: function() {
                var t = this;
                t.paused = false;
                if (t._pausedStartTime) t._pausedTime += e() - t._pausedStartTime;
                t._pausedStartTime = 0;
                return t
            },
            seek: function(t, i) {
                var r = this,
                    n = e();
                r._startTime = n;
                r._seekTime = t;
                r._pausedTime = 0;
                if (i !== undefined) r.paused = i;
                r._update(n, true);
                C.add(r);
                return r
            },
            link: function(e) {
                var t = this,
                    i = e.delay,
                    r = t._startTime;
                if (typeof i === "string") {
                    var n = i.indexOf("+") == 0,
                        a = i.indexOf("-") == 0;
                    i = n || a ? Number(i.substr(1)) * (n ? 1 : -1) : Number(i)
                }
                e.delay = i;
                e._startTime = n || a ? r + t.duration + i : r + i;
                t._next = e;
                C.remove(e);
                return t
            },
            _render: function(e) {
                var t = this,
                    i = t.target,
                    r = t._fromProps,
                    n;
                for (n in r) i[n] = r[n] + (t._toProps[n] - r[n]) * e
            },
            _update: function(t, i) {
                var r = this;
                if (r.paused && !i) return;
                var n = t - r._startTime - r._pausedTime + r._seekTime;
                if (n < 0) return;
                var a = n / r.duration,
                    o = false,
                    s;
                a = a <= 0 ? 0 : a >= 1 ? 1 : r.ease ? r.ease(a) : a;
                if (r.reverse) {
                    if (r._reverseFlag < 0) a = 1 - a;
                    if (a < 1e-7) {
                        if (r.repeat > 0 && r._repeatCount++ >= r.repeat || r.repeat == 0 && !r.loop) {
                            o = true
                        } else {
                            r._startTime = e();
                            r._pausedTime = 0;
                            r._reverseFlag *= -1
                        }
                    }
                }
                if (r.time == 0 && (s = r.onStart)) s.call(r, r);
                r.time = n;
                r._render(a);
                (s = r.onUpdate) && s.call(r, a, r);
                if (a >= 1) {
                    if (r.reverse) {
                        r._startTime = e();
                        r._reverseFlag *= -1
                    } else if (r.loop || r.repeat > 0 && r._repeatCount++ < r.repeat) {
                        r._startTime = e() + r.repeatDelay;
                        r._pausedTime = 0
                    } else {
                        o = true
                    }
                }
                var c = r._next;
                if (c && c.time <= 0) {
                    var h = c._startTime;
                    if (h > 0 && h <= t) {
                        c._render(a);
                        c.time = n;
                        C.add(c)
                    } else if (o && (h < 0 || h > t)) {
                        c.start()
                    }
                }
                if (o) {
                    (s = r.onComplete) && s.call(r, r);
                    return true
                }
            },
            Statics: {
                _tweens: [],
                tick: function() {
                    var t = C._tweens,
                        i, r, n = t.length;
                    for (r = 0; r < n; r++) {
                        i = t[r];
                        if (i && i._update(e())) {
                            t.splice(r, 1);
                            r--
                        }
                    }
                    return C
                },
                add: function(e) {
                    var t = C._tweens;
                    if (t.indexOf(e) == -1) t.push(e);
                    return C
                },
                remove: function(e) {
                    if (e instanceof Array) {
                        for (var t = 0, i = e.length; t < i; t++) {
                            C.remove(e[t])
                        }
                        return C
                    }
                    var r = C._tweens,
                        t;
                    if (e instanceof C) {
                        t = r.indexOf(e);
                        if (t > -1) r.splice(t, 1)
                    } else {
                        for (t = 0; t < r.length; t++) {
                            if (r[t].target === e) {
                                r.splice(t, 1);
                                t--
                            }
                        }
                    }
                    return C
                },
                removeAll: function() {
                    C._tweens.length = 0;
                    return C
                },
                fromTo: function(e, t, i, r) {
                    var n = e instanceof Array;
                    e = n ? e : [e];
                    var a, o, s = r.stagger,
                        c = [];
                    for (o = 0; o < e.length; o++) {
                        a = new C(e[o], t, i, r);
                        if (s) a.delay = (r.delay || 0) + (o * s || 0);
                        a.start();
                        c.push(a)
                    }
                    return n ? c : a
                },
                to: function(e, t, i) {
                    return C.fromTo(e, null, t, i)
                },
                from: function(e, t, i) {
                    return C.fromTo(e, t, null, i)
                }
            }
        })
    }();
    var I = function() {
        function e(e, t, i, r, n) {
            e = e || {};
            t && (e.EaseIn = t);
            i && (e.EaseOut = i);
            r && (e.EaseInOut = r);
            n && (e.EaseNone = n);
            return e
        }
        var t = e(null, null, null, null, function(e) {
            return e
        });
        var i = e(null, function(e) {
            return e * e
        }, function(e) {
            return -e * (e - 2)
        }, function(e) {
            return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
        });
        var r = e(null, function(e) {
            return e * e * e
        }, function(e) {
            return --e * e * e + 1
        }, function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        });
        var n = e(null, function(e) {
            return e * e * e * e
        }, function(e) {
            return -(--e * e * e * e - 1)
        }, function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
        });
        var a = e(null, function(e) {
            return e * e * e * e * e
        }, function(e) {
            return (e = e - 1) * e * e * e * e + 1
        }, function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        });
        var o = Math,
            s = o.PI,
            c = s * .5,
            h = o.sin,
            u = o.cos,
            l = o.pow,
            m = o.sqrt;
        var d = e(null, function(e) {
            return -u(e * c) + 1
        }, function(e) {
            return h(e * c)
        }, function(e) {
            return -.5 * (u(s * e) - 1)
        });
        var f = e(null, function(e) {
            return e == 0 ? 0 : l(2, 10 * (e - 1))
        }, function(e) {
            return e == 1 ? 1 : -l(2, -10 * e) + 1
        }, function(e) {
            if (e == 0 || e == 1) return e;
            if ((e *= 2) < 1) return .5 * l(2, 10 * (e - 1));
            return .5 * (-l(2, -10 * (e - 1)) + 2)
        });
        var p = e(null, function(e) {
            return -(m(1 - e * e) - 1)
        }, function(e) {
            return m(1 - --e * e)
        }, function(e) {
            if ((e /= .5) < 1) return -.5 * (m(1 - e * e) - 1);
            return .5 * (m(1 - (e -= 2) * e) + 1)
        });
        var v = e({
            a: 1,
            p: .4,
            s: .1,
            config: function(e, t) {
                v.a = e;
                v.p = t;
                v.s = t / (2 * s) * Math.asin(1 / e) || 0
            }
        }, function(e) {
            return -(v.a * l(2, 10 * (e -= 1)) * h((e - v.s) * (2 * s) / v.p))
        }, function(e) {
            return v.a * l(2, -10 * e) * h((e - v.s) * (2 * s) / v.p) + 1
        }, function(e) {
            return (e *= 2) < 1 ? -.5 * (v.a * l(2, 10 * (e -= 1)) * h((e - v.s) * (2 * s) / v.p)) : v.a * l(2, -10 * (e -= 1)) * h((e - v.s) * (2 * s) / v.p) * .5 + 1
        });
        var _ = e({
            o: 1.70158,
            s: 2.59491,
            config: function(e) {
                _.o = e;
                _.s = e * 1.525
            }
        }, function(e) {
            return e * e * ((_.o + 1) * e - _.o)
        }, function(e) {
            return (e = e - 1) * e * ((_.o + 1) * e + _.o) + 1
        }, function(e) {
            return (e *= 2) < 1 ? .5 * (e * e * ((_.s + 1) * e - _.s)) : .5 * ((e -= 2) * e * ((_.s + 1) * e + _.s) + 2)
        });
        var g = e(null, function(e) {
            return 1 - g.EaseOut(1 - e)
        }, function(e) {
            if ((e /= 1) < .36364) {
                return 7.5625 * e * e
            } else if (e < .72727) {
                return 7.5625 * (e -= .54545) * e + .75
            } else if (e < .90909) {
                return 7.5625 * (e -= .81818) * e + .9375
            } else {
                return 7.5625 * (e -= .95455) * e + .984375
            }
        }, function(e) {
            return e < .5 ? g.EaseIn(e * 2) * .5 : g.EaseOut(e * 2 - 1) * .5 + .5
        });
        return {
            Linear: t,
            Quad: i,
            Cubic: r,
            Quart: n,
            Quint: a,
            Sine: d,
            Expo: f,
            Circ: p,
            Elastic: v,
            Back: _,
            Bounce: g
        }
    }();
    var P = i.create({
        load: function(e) {
            var t = this;
            var i = new Image;
            if (e.crossOrigin) {
                i.crossOrigin = e.crossOrigin
            }
            i.onload = function() {
                t.onLoad(i)
            };
            i.onerror = i.onabort = t.onError.bind(i);
            i.src = e.src + (e.noCache ? (e.src.indexOf("?") == -1 ? "?" : "&") + "t=" + +new Date : "")
        },
        onLoad: function(t) {
            t = t || e.event;
            var i = t;
            i.onload = i.onerror = i.onabort = null;
            return i
        },
        onError: function(e) {
            var t = e.target;
            t.onload = t.onerror = t.onabort = null;
            return e
        }
    });
    var L = i.create({
        load: function(t) {
            var i = this,
                r = t.src,
                n = t.type == "jsonp";
            if (n) {
                var a = t.callbackName || "callback";
                var o = t.callback || "jsonp" + ++L._count;
                var s = e;
                if (!s[o]) {
                    s[o] = function(e) {
                        delete s[o]
                    }
                }
            }
            if (n) r += (r.indexOf("?") == -1 ? "?" : "&") + a + "=" + o;
            if (t.noCache) r += (r.indexOf("?") == -1 ? "?" : "&") + "t=" + +new Date;
            var c = document.createElement("script");
            c.type = "text/javascript";
            c.async = true;
            c.onload = i.onLoad.bind(i);
            c.onerror = i.onError.bind(i);
            c.src = r;
            if (t.id) c.id = t.id;
            document.getElementsByTagName("head")[0].appendChild(c)
        },
        onLoad: function(e) {
            var t = e.target;
            t.onload = t.onerror = null;
            return t
        },
        onError: function(e) {
            var t = e.target;
            t.onload = t.onerror = null;
            return e
        },
        Statics: {
            _count: 0
        }
    });
    var R = i.create({
        Mixes: r,
        constructor: function(e) {
            this._source = [];
            this.add(e)
        },
        maxConnections: 2,
        _source: null,
        _loaded: 0,
        _connections: 0,
        _currentIndex: -1,
        add: function(e) {
            var t = this;
            if (e) {
                e = e instanceof Array ? e : [e];
                t._source = t._source.concat(e)
            }
            return t
        },
        get: function(e) {
            if (e) {
                var t = this._source;
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    if (r.id === e || r.src === e) {
                        return r
                    }
                }
            }
            return null
        },
        getContent: function(e) {
            var t = this.get(e);
            return t && t.content
        },
        start: function() {
            var e = this;
            e._loadNext();
            return e
        },
        _loadNext: function() {
            var e = this,
                t = e._source,
                i = t.length;
            if (e._loaded >= i) {
                e.fire("complete");
                return
            }
            if (e._currentIndex < i - 1 && e._connections < e.maxConnections) {
                var r = ++e._currentIndex;
                var n = t[r];
                var a = e._getLoader(n);
                if (a) {
                    var o = a.onLoad,
                        s = a.onError;
                    a.onLoad = function(t) {
                        a.onLoad = o;
                        a.onError = s;
                        var i = o && o.call(a, t) || t.target;
                        e._onItemLoad(r, i)
                    };
                    a.onError = function(t) {
                        a.onLoad = o;
                        a.onError = s;
                        s && s.call(a, t);
                        e._onItemError(r, t)
                    };
                    e._connections++
                }
                e._loadNext();
                a && a.load(n)
            }
        },
        _getLoader: function(e) {
            var t = this,
                i = e.loader;
            if (i) return i;
            var r = e.type || M(e.src);
            switch (r) {
                case "png":
                case "jpg":
                case "jpeg":
                case "gif":
                    i = new P;
                    break;
                case "js":
                case "jsonp":
                    i = new L;
                    break
            }
            return i
        },
        _onItemLoad: function(e, t) {
            var i = this,
                r = i._source[e];
            r.loaded = true;
            r.content = t;
            i._connections--;
            i._loaded++;
            i.fire("load", r);
            i._loadNext()
        },
        _onItemError: function(e, t) {
            var i = this,
                r = i._source[e];
            r.error = t;
            i._connections--;
            i._loaded++;
            i.fire("error", r);
            i._loadNext()
        },
        getSize: function(e) {
            var t = 0,
                i = this._source;
            for (var r = 0; r < i.length; r++) {
                var n = i[r];
                t += (e ? n.loaded && n.size : n.size) || 0
            }
            return t
        },
        getLoaded: function() {
            return this._loaded
        },
        getTotal: function() {
            return this._source.length
        }
    });

    function M(e) {
        var t = /\/?[^/]+\.(\w+)(\?\S+)?$/i,
            i, r;
        if (i = e.match(t)) {
            r = i[1].toLowerCase()
        }
        return r || null
    }
    var B = i.create({
        Mixes: r,
        constructor: function(e) {
            t.copy(this, e, true);
            this._onAudioEvent = this._onAudioEvent.bind(this)
        },
        src: null,
        loop: false,
        autoPlay: false,
        loaded: false,
        playing: false,
        duration: 0,
        volume: 1,
        muted: false,
        _element: null,
        load: function() {
            if (!this._element) {
                try {
                    var e = this._element = new Audio;
                    e.addEventListener("canplaythrough", this._onAudioEvent, false);
                    e.addEventListener("ended", this._onAudioEvent, false);
                    e.addEventListener("error", this._onAudioEvent, false);
                    e.src = this.src;
                    e.volume = this.volume;
                    e.load()
                } catch (t) {
                    var e = this._element = {};
                    e.play = e.pause = function() {}
                }
            }
            return this
        },
        _onAudioEvent: function(e) {
            var t = e.type;
            switch (t) {
                case "canplaythrough":
                    e.target.removeEventListener(t, this._onAudioEvent);
                    this.loaded = true;
                    this.duration = this._element.duration;
                    this.fire("load");
                    if (this.autoPlay) this._doPlay();
                    break;
                case "ended":
                    this.playing = false;
                    this.fire("end");
                    if (this.loop) this._doPlay();
                    break;
                case "error":
                    this.fire("error");
                    break
            }
        },
        _doPlay: function() {
            if (!this.playing) {
                this._element.volume = this.muted ? 0 : this.volume;
                this._element.play();
                this.playing = true
            }
        },
        play: function() {
            if (this.playing) this.stop();
            if (!this._element) {
                this.autoPlay = true;
                this.load()
            } else if (this.loaded) {
                this._doPlay()
            }
            return this
        },
        pause: function() {
            if (this.playing) {
                this._element.pause();
                this.playing = false
            }
            return this
        },
        resume: function() {
            if (!this.playing) {
                this._doPlay()
            }
            return this
        },
        stop: function() {
            if (this.playing) {
                this._element.pause();
                this._element.currentTime = 0;
                this.playing = false
            }
            return this
        },
        setVolume: function(e) {
            if (this.volume != e) {
                this.volume = e;
                this._element.volume = e
            }
            return this
        },
        setMute: function(e) {
            if (this.muted != e) {
                this.muted = e;
                this._element.volume = e ? 0 : this.volume
            }
            return this
        },
        Statics: {
            isSupported: e.Audio !== null
        }
    });
    var q = function() {
        var n = e.AudioContext || e.webkitAudioContext;
        var a = n ? new n : null;
        return i.create({
            Mixes: r,
            constructor: function(e) {
                t.copy(this, e, true);
                this._init()
            },
            src: null,
            loop: false,
            autoPlay: false,
            loaded: false,
            playing: false,
            duration: 0,
            volume: 1,
            muted: false,
            _context: null,
            _gainNode: null,
            _buffer: null,
            _audioNode: null,
            _startTime: 0,
            _offset: 0,
            _init: function() {
                this._context = a;
                this._gainNode = a.createGain ? a.createGain() : a.createGainNode();
                this._gainNode.connect(a.destination);
                this._onAudioEvent = this._onAudioEvent.bind(this);
                this._onDecodeComplete = this._onDecodeComplete.bind(this);
                this._onDecodeError = this._onDecodeError.bind(this)
            },
            load: function() {
                if (!this._buffer) {
                    var e = new XMLHttpRequest;
                    e.src = this.src;
                    e.open("GET", this.src, true);
                    e.responseType = "arraybuffer";
                    e.onload = this._onAudioEvent;
                    e.onprogress = this._onAudioEvent;
                    e.onerror = this._onAudioEvent;
                    e.send();
                    this._buffer = true
                }
                return this
            },
            _onAudioEvent: function(e) {
                var t = e.type;
                switch (t) {
                    case "load":
                        var i = e.target;
                        i.onload = i.onprogress = i.onerror = null;
                        this._context.decodeAudioData(i.response, this._onDecodeComplete, this._onDecodeError);
                        i = null;
                        break;
                    case "ended":
                        this.playing = false;
                        this.fire("end");
                        if (this.loop) this._doPlay();
                        break;
                    case "progress":
                        this.fire(e);
                        break;
                    case "error":
                        this.fire(e);
                        break
                }
            },
            _onDecodeComplete: function(e) {
                this._buffer = e;
                this.loaded = true;
                this.duration = e.duration;
                this.fire("load");
                if (this.autoPlay) this._doPlay()
            },
            _onDecodeError: function() {
                this.fire("error")
            },
            _doPlay: function() {
                this._clearAudioNode();
                var e = this._context.createBufferSource();
                if (!e.start) {
                    e.start = e.noteOn;
                    e.stop = e.noteOff
                }
                e.buffer = this._buffer;
                e.onended = this._onAudioEvent;
                this._gainNode.gain.value = this.muted ? 0 : this.volume;
                e.connect(this._gainNode);
                e.start(0, this._offset);
                this._audioNode = e;
                this._startTime = this._context.currentTime;
                this.playing = true
            },
            _clearAudioNode: function() {
                var e = this._audioNode;
                if (e) {
                    e.onended = null;
                    e.disconnect(0);
                    this._audioNode = null
                }
            },
            play: function() {
                if (this.playing) this.stop();
                if (this.loaded) {
                    this._doPlay()
                } else if (!this._buffer) {
                    this.autoPlay = true;
                    this.load()
                }
                return this
            },
            pause: function() {
                if (this.playing) {
                    this._audioNode.stop(0);
                    this._offset += this._context.currentTime - this._startTime;
                    this.playing = false
                }
                return this
            },
            resume: function() {
                if (!this.playing) {
                    this._doPlay()
                }
                return this
            },
            stop: function() {
                if (this.playing) {
                    this._audioNode.stop(0);
                    this._audioNode.disconnect();
                    this._offset = 0;
                    this.playing = false
                }
                return this
            },
            setVolume: function(e) {
                if (this.volume != e) {
                    this.volume = e;
                    this._gainNode.gain.value = e
                }
                return this
            },
            setMute: function(e) {
                if (this.muted != e) {
                    this.muted = e;
                    this._gainNode.gain.value = e ? 0 : this.volume
                }
                return this
            },
            Statics: {
                isSupported: n != null,
                enabled: false,
                enable: function() {
                    if (!this.enabled && a) {
                        var e = a.createBufferSource();
                        e.buffer = a.createBuffer(1, 1, 22050);
                        e.connect(a.destination);
                        e.start ? e.start(0, 0, 0) : e.noteOn(0, 0, 0);
                        this.enabled = true;
                        return true
                    }
                    return this.enabled
                }
            }
        })
    }();
    var N = {
        _audios: {},
        enableAudio: function() {
            if (q.isSupported) {
                q.enable()
            }
        },
        getAudio: function(e) {
            e = this._normalizeSource(e);
            var t = this._audios[e.src];
            if (!t) {
                if (q.isSupported) {
                    t = new q(e)
                } else if (B.isSupported) {
                    t = new B(e)
                }
                this._audios[e.src] = t
            }
            return t
        },
        removeAudio: function(e) {
            var t = typeof e === "string" ? e : e.src;
            var i = this._audios[t];
            if (i) {
                i.stop();
                i.off();
                this._audios[t] = null;
                delete this._audios[t]
            }
        },
        _normalizeSource: function(e) {
            var i = {};
            if (typeof e === "string") i = {
                src: e
            };
            else t.copy(i, e);
            return i
        }
    };
    var O = i.create({
        constructor: function(e) {
            this.width = 0;
            this.height = 0;
            this.target = null;
            this.deadzone = null;
            this.bounds = null;
            this.scroll = {
                x: 0,
                y: 0
            };
            t.copy(this, e)
        },
        tick: function(e) {
            var t = this.target;
            var i = this.scroll;
            var r = this.bounds;
            var n = this.deadzone;
            if (t) {
                var a, o;
                if (n) {
                    a = Math.min(Math.max(t.x - i.x, n[0]), n[0] + n[2]);
                    o = Math.min(Math.max(t.y - i.y, n[1]), n[1] + n[3])
                } else {
                    a = this.width * .5;
                    o = this.height * .5
                }
                i.x = t.x - a;
                i.y = t.y - o;
                if (r) {
                    i.x = Math.min(Math.max(i.x, r[0]), r[0] + r[2]);
                    i.y = Math.min(Math.max(i.y, r[1]), r[1] + r[3])
                }
            } else {
                i.x = 0;
                i.y = 0
            }
        },
        follow: function(e, t) {
            this.target = e;
            if (t !== undefined) {
                this.deadzone = t
            }
            this.tick()
        }
    });
    var D = function() {
        var e = Math.PI / 180;

        function r(e, t, i, r, n) {
            return {
                x: e,
                y: t * r - i * n,
                z: t * n + i * r
            }
        }

        function n(e, t, i, r, n) {
            return {
                x: e * r - i * n,
                y: t,
                z: e * n + i * r
            }
        }

        function a(e, t, i, r, n) {
            return {
                x: e * r - t * n,
                y: e * n + t * r,
                z: i
            }
        }
        var o = i.create({
            constructor: function(e) {
                e.x = e.x || 0;
                e.y = e.y || 0;
                e.z = e.z || 0;
                e.rotationX = e.rotationX || 0;
                e.rotationY = e.rotationY || 0;
                e.rotationZ = e.rotationZ || 0;
                t.copy(this, e)
            },
            translate: function(e, t, i) {
                this.tx = e;
                this.ty = t;
                this.tz = i
            },
            rotateX: function(e) {
                this.rotationX = e
            },
            rotateY: function(e) {
                this.rotationY = e
            },
            rotateZ: function(e) {
                this.rotationZ = e
            },
            project: function(t, i) {
                var o = this.rotationX * e,
                    s = this.rotationY * e,
                    c = this.rotationZ * e,
                    h = Math.cos(o),
                    u = Math.sin(o),
                    l = Math.cos(s),
                    m = Math.sin(s),
                    d = Math.cos(c),
                    f = Math.sin(c),
                    p = t.x - this.x,
                    v = t.y - this.y,
                    _ = t.z - this.z,
                    g = a(p, v, _, d, f);
                g = n(g.x, g.y, g.z, l, m);
                g = r(g.x, g.y, g.z, h, u);
                if (this.tx) g.x -= this.tx;
                if (this.ty) g.y -= this.ty;
                if (this.tz) g.z -= this.tz;
                var b = this.fv / (this.fv + g.z),
                    y = g.x * b,
                    k = -g.y * b;
                if (i) {
                    i.x = y + this.fx;
                    i.y = k + this.fy;
                    i.z = -g.z;
                    i.scaleX = b;
                    i.scaleY = b
                } else {
                    return {
                        x: y + this.fx,
                        y: k + this.fy,
                        z: -g.z,
                        scale: b
                    }
                }
            },
            sortZ: function() {
                this.stage.children.sort(function(e, t) {
                    return e.z > t.z
                })
            },
            tick: function() {
                this.sortZ()
            }
        });
        return o
    }();
    var F = function() {
        var e = ["x", "y", "vx", "vy", "ax", "ay", "rotation", "rotationV", "scale", "scaleV", "alpha", "alphaV", "life"];
        var r = [];
        for (var n = 0, a = e.length; n < a; n++) {
            var o = e[n];
            r.push(o);
            r.push(o + "Var")
        }
        var s = {
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            ax: 0,
            ay: 0,
            scale: 1,
            scaleV: 0,
            alpha: 1,
            alphaV: 0,
            rotation: 0,
            rotationV: 0,
            life: 1
        };
        var c = [];
        var h = i.create({
            Extends: f,
            constructor: function p(e) {
                this.id = this.id || e.id || t.getUid("ParticleSystem");
                this.emitterX = 0;
                this.emitterY = 0;
                this.gx = 0;
                this.gy = 0;
                this.totalTime = Infinity;
                this.emitNum = 10;
                this.emitNumVar = 0;
                this.emitTime = .2;
                this.emitTimeVar = 0;
                this.particle = {};
                p.superclass.constructor.call(this, e);
                this.reset(e)
            },
            Statics: {
                PROPS: r,
                PROPS_DEFAULT: s,
                diedParticles: c
            },
            reset: function(e) {
                t.copy(this, e);
                this.particle.system = this;
                if (this.totalTime <= 0) {
                    this.totalTime = Infinity
                }
            },
            onUpdate: function(e) {
                e *= .001;
                if (this._isRun) {
                    this._totalRunTime += e;
                    this._currentRunTime += e;
                    if (this._currentRunTime >= this._emitTime) {
                        this._currentRunTime = 0;
                        this._emitTime = l(this.emitTime, this.emitTimeVar);
                        this._emit()
                    }
                    if (this._totalRunTime >= this.totalTime) {
                        this.stop()
                    }
                }
            },
            _emit: function() {
                var e = l(this.emitNum, this.emitNumVar) >> 0;
                for (var t = 0; t < e; t++) {
                    this.addChild(u.create(this.particle))
                }
            },
            start: function() {
                this.stop(true);
                this._currentRunTime = 0;
                this._totalRunTime = 0;
                this._isRun = true;
                this._emitTime = l(this.emitTime, this.emitTimeVar)
            },
            stop: function(e) {
                this.isRun = false;
                if (e) {
                    for (var t = this.children.length - 1; t >= 0; t--) {
                        this.children[t].destroy()
                    }
                }
            }
        });
        var u = i.create({
            Extends: d,
            constructor: function v(e) {
                this.id = this.id || e.id || t.getUid("Particle");
                v.superclass.constructor.call(this, e);
                this.init(e)
            },
            onUpdate: function(e) {
                e *= .001;
                if (this._died) {
                    return
                }
                var t = this.ax + this.system.gx;
                var i = this.ay + this.system.gy;
                this.vx += t * e;
                this.vy += i * e;
                this.x += this.vx * e;
                this.y += this.vy * e;
                this.rotation += this.rotationV;
                if (this._time > .1) {
                    this.alpha += this.alphaV
                }
                this.scale += this.scaleV;
                this.scaleX = this.scaleY = this.scale;
                this._time += e;
                if (this._time >= this.life || this.alpha < 0) {
                    this.destroy()
                }
            },
            setImage: function(e, t) {
                this.drawable = this.drawable || new m;
                var t = t || [0, 0, e.width, e.height];
                this.width = t[2];
                this.height = t[3];
                this.drawable.rect = t;
                this.drawable.image = e
            },
            destroy: function() {
                this.died = true;
                this.removeFromParent();
                c.push(this)
            },
            init: function(e) {
                this.system = e.system;
                this._died = false;
                this._time = 0;
                this.alpha = 1;
                for (var t = 0, i = r.length; t < i; t++) {
                    var n = r[t];
                    var a = e[n] === undefined ? s[n] : e[n];
                    this[n] = l(a, e[n + "Var"])
                }
                this.x += this.system.emitterX;
                this.y += this.system.emitterY;
                if (e.image) {
                    var o = e.frame;
                    if (o && o[0].length) {
                        o = o[Math.random() * o.length >> 0]
                    }
                    this.setImage(e.image, o);
                    if (e.pivotX !== undefined) {
                        this.pivotX = e.pivotX * o[2]
                    }
                    if (e.pivotY !== undefined) {
                        this.pivotY = e.pivotY * o[3]
                    }
                }
            },
            Statics: {
                create: function(e) {
                    if (c.length > 0) {
                        var t = c.pop();
                        t.init(e);
                        return t
                    } else {
                        return new u(e)
                    }
                }
            }
        });

        function l(e, t) {
            return t ? e + (Math.random() - .5) * 2 * t : e
        }
        return h
    }();
    t.Class = i;
    t.EventMixin = r;
    t.Renderer = c;
    t.CanvasRenderer = h;
    t.DOMRenderer = u;
    t.Matrix = l;
    t.Drawable = m;
    t.View = d;
    t.Container = f;
    t.Stage = p;
    t.Bitmap = v;
    t.Sprite = _;
    t.DOMElement = g;
    t.Graphics = b;
    t.Text = y;
    t.BitmapText = k;
    t.Button = x;
    t.TextureAtlas = w;
    t.Ticker = T;
    t.drag = S;
    t.Tween = C;
    t.Ease = I;
    t.ImageLoader = P;
    t.ScriptLoader = L;
    t.LoadQueue = R;
    t.HTMLAudio = B;
    t.WebAudio = q;
    t.WebSound = N;
    t.Camera = O;
    t.Camera3d = D;
    t.ParticleSystem = F;
    e.Hilo = t;
    if (!e.H) e.H = t
})(window);
KISSY.add("mui/zebra-khc/common/hilo", function(e) {
    return Hilo
});
var Class = Hilo.Class;
var Renderer = Hilo.Renderer;
var Matrix = Hilo.Matrix;
var WebGLRenderer = Class.create({
    Extends: Renderer,
    constructor: function(e) {
        window.__render = this;
        WebGLRenderer.superclass.constructor.call(this, e);
        var t = this.gl = window.gl = this.context = this.canvas.getContext("webgl");
        t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE);
        t.colorMask(1, 1, 1, 1);
        t.clearColor(0, 0, 0, 0);
        t.disable(t.DEPTH_TEST);
        t.disable(t.CULL_FACE);
        t.enable(t.BLEND);
        this.verticesBuffer = t.createBuffer();
        this.transformBuffer = t.createBuffer();
        this.verticesIndexBuffer = t.createBuffer();
        this.verticesIndexNum = 0;
        this._updateVerticesIndex(1);
        this._initShaders();
        this.defaultShader.active()
    },
    context: null,
    startDraw: function(e) {
        if (e.visible && e.alpha > 0) {
            if (e === this.stage) {
                this.clear()
            } else if (e.isBatchContainer) {
                this.__batchPos = this.__batchPos || new ArrayPool(5e3 * 6 * 4);
                this.__batchPos.reset();
                this.__batchTransform = this.__batchTransform || new ArrayPool(5e3 * 6 * 9);
                this.__batchTransform.reset()
            }
            return true
        }
        return false
    },
    draw: function(e) {
        var t = this.context,
            i = e.width,
            r = e.height;
        var n = e.background;
        if (n) {}
        var a = e.drawable,
            o = a && a.image;
        if (o) {
            Hilo._drawImageNum++;
            var s = this.gl;
            if (!o.texture) {
                this.activeShader.uploadTexture(o)
            }
            s.bindTexture(s.TEXTURE_2D, o.texture);
            var c = a.rect,
                h = c[2],
                u = c[3],
                l = c[4],
                m = c[5];
            if (!i && !r) {
                i = e.width = h;
                r = e.height = u
            }
            if (e.parent && e.parent.isBatchContainer) {
                this._createPos(o, c[0], c[1], h, u, -e.pivotX, -e.pivotY, i, r, e.__matrixElements, this.__batchPos);
                this.__batchTransform.push(e.__matrixElements)
            } else {
                var d = this._createPos(o, c[0], c[1], h, u, -e.pivotX, -e.pivotY, i, r);
                s.bindBuffer(s.ARRAY_BUFFER, this.verticesBuffer);
                s.bufferData(s.ARRAY_BUFFER, d, s.STATIC_DRAW);
                var f = d.BYTES_PER_ELEMENT;
                s.vertexAttribPointer(this.a_Position, 2, s.FLOAT, false, f * 4, 0);
                s.enableVertexAttribArray(this.a_Position);
                s.vertexAttribPointer(this.a_TexCoord, 2, s.FLOAT, false, f * 4, f * 2);
                s.enableVertexAttribArray(this.a_TexCoord);
                s.bindBuffer(s.ARRAY_BUFFER, this.transformBuffer);
                s.bufferData(s.ARRAY_BUFFER, e.__matrixElements, s.STATIC_DRAW);
                s.vertexAttribPointer(this.a_Transform1, 3, s.FLOAT, false, f * 9, 0);
                s.enableVertexAttribArray(this.a_Transform1);
                s.vertexAttribPointer(this.a_Transform2, 3, s.FLOAT, false, f * 9, f * 3);
                s.enableVertexAttribArray(this.a_Transform2);
                s.vertexAttribPointer(this.a_Transform3, 3, s.FLOAT, false, f * 9, f * 6);
                s.enableVertexAttribArray(this.a_Transform3);
                s.drawElements(s.TRIANGLES, 6, s.UNSIGNED_SHORT, 0)
            }
        }
    },
    endDraw: function(e) {
        if (e && e.isBatchContainer) {
            var t = this.gl;
            var i = this.__batchPos.getArr(e.children.length * 4 * 4);
            var r = this.__batchTransform.getArr(e.children.length * 4 * 9);
            var n = i.length / 16 >> 0;
            if (n) {
                t.bindBuffer(t.ARRAY_BUFFER, this.verticesBuffer);
                t.bufferData(t.ARRAY_BUFFER, i, t.STATIC_DRAW);
                var a = i.BYTES_PER_ELEMENT;
                t.vertexAttribPointer(this.a_Position, 2, t.FLOAT, false, a * 4, 0);
                t.enableVertexAttribArray(this.a_Position);
                t.vertexAttribPointer(this.a_TexCoord, 2, t.FLOAT, false, a * 4, a * 2);
                t.enableVertexAttribArray(this.a_TexCoord);
                t.bindBuffer(t.ARRAY_BUFFER, this.transformBuffer);
                t.bufferData(t.ARRAY_BUFFER, r, t.STATIC_DRAW);
                t.vertexAttribPointer(this.a_Transform1, 3, t.FLOAT, false, a * 9, 0);
                t.enableVertexAttribArray(this.a_Transform1);
                t.vertexAttribPointer(this.a_Transform2, 3, t.FLOAT, false, a * 9, a * 3);
                t.enableVertexAttribArray(this.a_Transform2);
                t.vertexAttribPointer(this.a_Transform3, 3, t.FLOAT, false, a * 9, a * 6);
                t.enableVertexAttribArray(this.a_Transform3);
                if (n > this.verticesIndexNum) {
                    this._updateVerticesIndex(n)
                }
                t.drawElements(t.TRIANGLES, n * 6, t.UNSIGNED_SHORT, 0)
            }
        }
    },
    transform: function(e) {
        var t = e.drawable;
        if (t && t.domElement) {
            Hilo.setElementStyleByView(e);
            return
        }
        var i = this.context,
            r = e.scaleX,
            n = e.scaleY;
        if (e === this.stage) {
            var a = this.canvas.style,
                o = e._scaleX,
                s = e._scaleY;
            if (!o && r != 1 || o && o != r) {
                e._scaleX = r;
                a.width = r * e.width + "px"
            }
            if (!s && n != 1 || s && s != n) {
                e._scaleY = n;
                a.height = n * e.height + "px"
            }
            e.__matrix = e.__matrix || new Hilo.Matrix(1, 0, 0, 1, 0, 0);
            var c = e.__matrix;
            e.__matrixElements = e.__matrixElements || new Float32Array(36);
            var h = 4;
            var u = 0;
            while (h--) {
                e.__matrixElements[u++] = c.a;
                e.__matrixElements[u++] = c.c;
                e.__matrixElements[u++] = 0;
                e.__matrixElements[u++] = c.b;
                e.__matrixElements[u++] = c.d;
                e.__matrixElements[u++] = 0;
                e.__matrixElements[u++] = c.tx - 1;
                e.__matrixElements[u++] = -c.ty + 1;
                e.__matrixElements[u++] = 1
            }
        } else {
            e.__matrix = e.__matrix || new Matrix;
            this._setConcatenatedMatrix(e, e.parent);
            var c = e.__matrix;
            e.__matrixElements = e.__matrixElements || new Float32Array(36);
            var h = 4;
            var u = 0;
            while (h--) {
                e.__matrixElements[u++] = c.a;
                e.__matrixElements[u++] = c.c;
                e.__matrixElements[u++] = 0;
                e.__matrixElements[u++] = c.b;
                e.__matrixElements[u++] = c.d;
                e.__matrixElements[u++] = 0;
                e.__matrixElements[u++] = c.tx - 1 + e.pivotX;
                e.__matrixElements[u++] = -c.ty + 1 - e.pivotY;
                e.__matrixElements[u++] = 1
            }
        }
        if (e.alpha > 0) {
            if (e.parent && e.parent.__renderAlpha) {
                e.__renderAlpha = e.alpha * e.parent.__renderAlpha
            } else {
                e.__renderAlpha = e.alpha
            }
            this.gl.uniform1f(this.u_Alpha, e.__renderAlpha)
        }
    },
    remove: function(e) {
        var t = e.drawable;
        var i = t && t.domElement;
        if (i) {
            var r = i.parentNode;
            if (r) {
                r.removeChild(i)
            }
        }
    },
    clear: function(e, t, i, r) {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
    },
    resize: function(e, t) {
        if (this.width !== e || this.height !== t) {
            this.width = this.canvas.width = e;
            this.height = this.canvas.height = t;
            this.gl.viewport(0, 0, e, t);
            this.canvasHalfWidth = e * .5;
            this.canvasHalfHeight = t * .5;
            this._uploadProjectionTransform(true)
        }
    },
    _uploadProjectionTransform: function(e) {
        if (!this._projectionTransformElements || e) {
            this._projectionTransformElements = new Float32Array([1 / this.canvasHalfWidth, 0, 0, 0, 1 / this.canvasHalfHeight, 0, -1, 1, 1])
        }
        this.gl.uniformMatrix3fv(this.u_projectionTransform, false, this._projectionTransformElements)
    },
    _initShaders: function() {
        var e = "            attribute vec2 a_Position;\n            attribute vec2 a_TexCoord;\n            attribute vec3 a_Transform1;\n            attribute vec3 a_Transform2;\n            attribute vec3 a_Transform3;\n            uniform mat3 u_projectionTransform;\n            varying vec2 v_TexCoord;\n            void main(){\n                gl_Position =  vec4((u_projectionTransform  * mat3(a_Transform1, a_Transform2, a_Transform3) * vec3(a_Position, 1.0)).xy, 1.0, 1.0);\n                v_TexCoord = a_TexCoord;\n            }\n        ";
        var t = "\n            precision mediump float;\n            uniform sampler2D u_Sampler;\n            uniform float u_Alpha;\n            varying vec2 v_TexCoord;\n            vec4 originColor;\n            void main(){\n                gl_FragColor = texture2D(u_Sampler, v_TexCoord).rgba;\n                gl_FragColor.a *= u_Alpha;\n            }\n        ";
        this.defaultShader = new Shader(this, {
            v: e,
            f: t
        }, {
            attributes: ["a_Position", "a_TexCoord", "a_Transform1", "a_Transform2", "a_Transform3"],
            uniforms: ["u_projectionTransform", "u_Alpha", "u_Sampler"]
        });
        var e = "            attribute vec2 a_Position;\n            attribute vec2 a_TexCoord;\n            attribute vec3 a_Transform1;\n            attribute vec3 a_Transform2;\n            attribute vec3 a_Transform3;\n            uniform mat3 u_projectionTransform;\n            varying vec2 v_TexCoord;\n            void main(){\n                gl_Position =  vec4((u_projectionTransform  * mat3(a_Transform1, a_Transform2, a_Transform3) * vec3(a_Position, 1.0)).xy, 1.0, 1.0);\n                v_TexCoord = a_TexCoord;\n            }\n        ";
        var t = "\n            precision mediump float;\n            uniform sampler2D u_Sampler;\n            uniform float u_Alpha;\n            varying vec2 v_TexCoord;\n            vec4 originColor;\n            void main(){\n                gl_FragColor = texture2D(u_Sampler, v_TexCoord).brga;\n                gl_FragColor.a *= u_Alpha;\n                gl_FragColor.b *= 12.0;\n                gl_FragColor.r *= 12.0;\n            }\n        ";
        this.testShader = new Shader(this, {
            v: e,
            f: t
        }, {
            attributes: ["a_Position", "a_TexCoord", "a_Transform1", "a_Transform2", "a_Transform3"],
            uniforms: ["u_projectionTransform", "u_Alpha", "u_Sampler"]
        })
    },
    _createPos: function(e, t, i, r, n, a, o, s, c, h, u) {
        var l = u && u.arr || this.__tempPos || new Float32Array(16);
        var m = e.width;
        var d = e.height;
        r = r / m;
        n = n / d;
        t = t / m;
        i = i / d;
        s = s;
        c = c;
        a = a;
        o = o;
        if (r + t > 1) {
            r = 1 - t
        }
        if (n + i > 1) {
            n = 1 - i
        }
        i = 1 - i - n;
        o = -c - o;
        var f = u ? u.index : 0;
        var p = -1;
        l[++p + f] = a;
        l[++p + f] = o;
        l[++p + f] = t;
        l[++p + f] = i;
        l[++p + f] = a + s;
        l[++p + f] = o;
        l[++p + f] = t + r;
        l[++p + f] = i;
        l[++p + f] = a;
        l[++p + f] = o + c;
        l[++p + f] = t;
        l[++p + f] = i + n;
        l[++p + f] = a + s;
        l[++p + f] = o + c;
        l[++p + f] = t + r;
        l[++p + f] = i + n;
        if (u) {
            u.index += 16
        }
        return l
    },
    _setConcatenatedMatrix: function(e, t) {
        var i = e.__matrix;
        var r = 1,
            n = 0,
            a = e.rotation % 360,
            o = e.pivotX,
            s = e.pivotY,
            c = e.scaleX,
            h = e.scaleY;
        if (a) {
            var u = a * Math.PI / 180;
            r = Math.cos(u);
            n = Math.sin(u)
        }
        i.a = r * c;
        i.b = n * c;
        i.c = -n * h;
        i.d = r * h;
        i.tx = e.x - o;
        i.ty = e.y - s;
        var l = t.__matrix;
        i.concat(l.a, l.b, l.c, l.d, l.tx + t.pivotX, l.ty - t.pivotY)
    },
    _updateVerticesIndex: function(e) {
        if (e > this.verticesIndexNum) {
            var t = [];
            e = Math.max(this.verticesIndexNum + 500, e);
            for (var i = 0; i <= e; i++) {
                t.push(0 + i * 4);
                t.push(1 + i * 4);
                t.push(2 + i * 4);
                t.push(1 + i * 4);
                t.push(2 + i * 4);
                t.push(3 + i * 4)
            }
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.verticesIndexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(t), gl.STATIC_DRAW);
            this.verticesIndexNum = e
        }
    }
});
var ArrayPool = function(e) {
    this.arr = new Float32Array(e);
    this.buffer = this.arr.buffer;
    this.index = 0
};
ArrayPool.prototype = {
    reset: function() {
        this.index = 0
    },
    push: function(e) {
        for (var t = 0, i = e.length; t < i; t++) {
            this.arr[this.index++] = e[t]
        }
    },
    getArr: function(e) {
        return new Float32Array(this.buffer, 0, e)
    }
};
var _cacheTexture = {};
var Shader = function(e, t, i) {
    this.renderer = e;
    this.gl = e.gl;
    this.program = this._createProgram(gl, t.v, t.f);
    i = i || {};
    this.attributes = i.attributes || [];
    this.uniforms = i.uniforms || []
};
Shader.prototype = {
    active: function() {
        var e = this;
        var t = e.renderer;
        var i = e.gl;
        var r = e.program;
        if (r && i) {
            t.activeShader = e;
            i.useProgram(r);
            e.attributes.forEach(function(e) {
                t[e] = i.getAttribLocation(r, e)
            });
            e.uniforms.forEach(function(e) {
                t[e] = i.getUniformLocation(r, e)
            });
            if (e.width !== t.width || e.height !== t.height) {
                e.width = t.width;
                e.height = t.height;
                t._uploadProjectionTransform()
            }
        }
    },
    uploadTexture: function(e) {
        var t = this.gl;
        var i = this.renderer;
        if (_cacheTexture[e.src]) {
            e.texture = _cacheTexture[e.src]
        } else {
            var r = t.createTexture();
            var n = i.u_Sampler;
            t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, 1);
            t.activeTexture(t.TEXTURE0);
            t.bindTexture(t.TEXTURE_2D, r);
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR);
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR);
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE);
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
            t.uniform1i(n, 0);
            t.bindTexture(t.TEXTURE_2D, null);
            e.texture = r;
            _cacheTexture[e.src] = r
        }
    },
    _createProgram: function(e, t, i) {
        var r = this._createShader(e, e.VERTEX_SHADER, t);
        var n = this._createShader(e, e.FRAGMENT_SHADER, i);
        if (!r || !n) {
            return null
        }
        var a = e.createProgram();
        if (a) {
            e.attachShader(a, r);
            e.attachShader(a, n);
            e.linkProgram(a);
            e.deleteShader(n);
            e.deleteShader(r);
            var o = e.getProgramParameter(a, e.LINK_STATUS);
            if (!o) {
                var s = e.getProgramInfoLog(a);
                console.log("Failed to link program: " + s);
                e.deleteProgram(a);
                return null
            }
        }
        return a
    },
    _createShader: function(e, t, i) {
        var r = e.createShader(t);
        if (r) {
            e.shaderSource(r, i);
            e.compileShader(r);
            var n = e.getShaderParameter(r, e.COMPILE_STATUS);
            if (!n) {
                var a = e.getShaderInfoLog(r);
                console.log("Failed to compile shader: " + a);
                e.deleteShader(r);
                return null
            }
        }
        return r
    }
};
Hilo.Container.prototype.cache = function(e) {
    if (!this._cacheRendererDict) {
        this._preRender = this.render;
        this.render = this.renderCache;
        var t = this.cacheMaxW = this.cacheMaxW || 512;
        var i = this.cacheMaxH = this.cacheMaxH || 512;
        var r = this.width;
        var n = this.height;
        var a = this.cacheMaxNumX = Math.ceil(r / t);
        var o = this.cacheMaxNumY = Math.ceil(n / i);
        var s = {};
        var c = [];
        for (var h = 0; h < a; h++) {
            var u = t;
            if (h == a - 1) {
                u = r - h * t
            }
            for (var l = 0; l < o; l++) {
                var m = i;
                if (l == o - 1) {
                    m = n - l * i
                }
                var d = document.createElement("canvas");
                d.width = u;
                d.height = m;
                var f = new Hilo.CanvasRenderer({
                    canvas: d,
                    x: h * t,
                    y: l * i,
                    width: u,
                    height: m
                });
                if (this.cacheDebug) {
                    f.context.fillStyle = "red";
                    f.context.fillRect(0, 0, f.width, f.height);
                    f.context.fillStyle = "blue";
                    f.context.fillRect(1, 1, f.width - 2, f.height - 2)
                }
                f.context.translate(-f.x, -f.y);
                s[h + "-" + l] = f;
                c.push(f)
            }
        }
        this._cacheRendererList = c;
        this._cacheRendererDict = s
    }
    if (e) {
        this.multiRender(e);
        var p = this.children.indexOf(e);
        if (p >= 0) {
            for (var h = p + 1, v = this.children.length; h < v; h++) {
                var _ = this.children[h];
                if (_ && _.drawable) {
                    var g = Math.max(_.x, e.x);
                    var b = Math.min(_.x + _.width, e.x + e.width);
                    var y = Math.max(_.y, e.y);
                    var k = Math.min(_.y + _.height, e.y + e.height);
                    if (g < b && y < k) {
                        var x = _.drawable.rect;
                        var w = _.width;
                        var T = _.height;
                        var z = _.x;
                        var A = _.y;
                        _.x = g;
                        _.y = y;
                        _.width = b - g;
                        _.height = k - y;
                        var E = x[2] / w;
                        var S = x[3] / T;
                        _.drawable.rect = [x[0] + (g - z) * E, x[1] + (y - A) * S, _.width * E, _.height * S];
                        this.multiRender(_);
                        _.drawable.rect = x;
                        _.width = w;
                        _.height = T;
                        _.x = z;
                        _.y = A
                    }
                }
            }
        }
    } else {
        for (var h = 0; h < this.children.length; h++) {
            this.multiRender(this.children[h])
        }
        this.render = this.renderCache
    }
};
Hilo.Container.prototype.multiRender = function(e) {
    var t = Math.floor(e.x / this.cacheMaxW);
    var i = Math.ceil((e.x + e.width) / this.cacheMaxW);
    var r = Math.floor(e.y / this.cacheMaxH);
    var n = Math.ceil((e.y + e.height) / this.cacheMaxH);
    t = Math.max(t, 0);
    r = Math.max(r, 0);
    i = Math.min(i, this.cacheMaxNumX);
    n = Math.min(n, this.cacheMaxNumY);
    for (var a = t; a < i; a++) {
        for (var o = r; o < n; o++) {
            var s = this._cacheRendererDict[a + "-" + o];
            e._render(s, 0)
        }
    }
};
Hilo.Container.prototype.renderCache = function(e, t) {
    if (this._cacheRendererDict) {
        var i = -this.cachePos.y;
        var r = i + this.stage.height;
        for (var n = 0; n < this._cacheRendererList.length; n++) {
            var a = this._cacheRendererList[n];
            if (a.y + a.height > i && a.y < r) {
                Hilo._drawImageNum++;
                e.context.drawImage(a.canvas, a.x, a.y)
            }
        }
    }
};
Hilo.Container.prototype.uncache = function() {
    if (this._preRender) {
        this.render = this._preRender;
        this._preRender = null;
        this._cacheBmp = null;
        this._cacheCanvas.width = 0;
        this._cacheCanvas.height = 0
    }
};
Hilo.Container.prototype.toImage = function() {
    var e = new Hilo.CanvasRenderer({
        canvas: document.createElement("canvas")
    });
    e.canvas.width = this.width;
    e.canvas.height = this.height;
    for (var t = 0; t < this.children.length; t++) {
        this.children[t].render && this.children[t].render(e, 0)
    }
    var i = new Image;
    var r = e.canvas.toDataURL();
    r = r.split(",");
    var n = atob(r[1]);
    var a = n.length;
    var o = new ArrayBuffer(a);
    var s = new Uint8Array(o);
    for (var t = 0; t < a; t++) {
        s[t] = n.charCodeAt(t)
    }
    var c = new Blob([s], {
        type: r[0].split(":")[1].split(";")[0]
    });
    return URL.createObjectURL(c)
};
(function() {
    window.$zebra = window.$zebra || {};
    if ($zebra._isLoaded) {
        return
    }
    $zebra._isLoaded = true;
    window._CTK3769 = window._CTK3769 || function() {
        var e = {},
            r = "",
            o = 0;

        function n(e) {
            var r = 0,
                o, n, t;
            if (e.length === 0) return r;
            for (o = 0, t = e.length; o < t; o++) {
                n = e.charCodeAt(o);
                r = (r << 5) - r + n;
                r |= 0
            }
            return r
        }
        return function(t, a, i, c) {
            c = c || {};
            if (c.reject) {
                if (typeof c.reject != "object") {
                    c.reject = [c.reject]
                }
                for (var u = c.reject.length - 1; u >= 0; u--) {
                    if (e[c.reject[u]]) {
                        return
                    }
                }
            }
            if (!r) {
                r = a
            }
            var d = (new Date).valueOf();
            e[a] = d;
            var f;
            if (a == r) {
                var l = window.g_config && g_config.startTime;
                f = l ? d - l : 0
            } else {
                f = d - (e[i || r] || e[r])
            }
            switch (c.autoGroup) {
                case "time":
                    c.group = c.autoGroup + "_" + (f <= 0 ? 0 : Math.floor(Math.log(f) / Math.log(2)));
                    break
            }
            if (typeof t == "object") {
                t = t[c.group || "_"] || Math.round(Math.log((undefined || 8192) / (undefined || 1 / 16)) / Math.log(2))
            }
            var m = [],
                s = m && m[Math.floor((d + 288e5) / (864e5 / 144)) % 144] || 1,
                h = Math.round(Math.max(Math.pow(2, t) * s / (undefined || 8192), 1));
            if (Math.floor(Math.random() * h) > 0) {
                return
            }

            function g(e, r) {
                var t = "undefined" + o++,
                    a = window[t] = new Image;
                a.onload = a.onerror = function() {
                    window[t] = null
                };
                var i = ["type=" + encodeURIComponent(c.type || "normal"), "name=" + encodeURIComponent(e), "parent=" + encodeURIComponent(r || ""), "module=" + encodeURIComponent(c.dataId || "23"), "msg=" + encodeURIComponent(c.msg || ""), "version=" + encodeURIComponent("3.0.11"), "sample=" + h, "time=" + (f > 0 ? f : 0)].join("&");
                a.src = "//gm.mmstat.com/tmjs.1.1?" + i + "&hash=" + n(i)
            }
            if (c.group) {
                g(a + "|" + c.group, a)
            }
            g(a, i)
        }
    }();
    _CTK3769(20, "codetrack.init");
    _CTK3769(20, "zebra-loader.init");
    if (!window.KISSY) return;
    KISSY.use(["dom"], function(e, r, o) {
        e.ready(function() {
            var r = e.DOM.query("[data-mod-name]");
            if (!r.length) return;
            var o = [],
                n = [];
            e.each(r, function(r) {
                var t = e.DOM.attr(r, "data-mod-name");
                var a = e.DOM.attr(r, "data-config") || "";
                if (!t) return;
                n.push(t);
                o.push({
                    mod: t,
                    el: r,
                    cfg: a
                })
            });
            var t = function(r) {
                r = e.isString(r) ? r : "\u6709\u7ec4\u4ef6\u4e0d\u5b58\u5728\uff0c\u65e0\u6cd5\u52a0\u8f7d";
                try {
                    console.error(r)
                } catch (o) {}
                _CTK3769(0, "error:loader.loaderError", "zebra-loader.init", {
                    msg: "\u7ec4\u4ef6\u8bf7\u6c42\u5931\u8d25\uff1a" + r,
                    type: "error"
                });
                return r
            };
            var a = function(r, n, a) {
                n = e.isFunction(n) ? n : t;
                e.use(r, function(e) {
                    var r = Array.prototype.slice.call(arguments),
                        n;
                    r.shift();
                    n = r.length;
                    e.each(r, function(r, t) {
                        if (e.isFunction(r)) {
                            t = n === 1 ? a || 0 : t;
                            var i = o[t].el;
                            try {
                                r(i, o[t].cfg)
                            } catch (c) {
                                try {
                                    console.error(c)
                                } catch (u) {}
                                _CTK3769(0, "error:loader.jsError", "zebra-loader.init", {
                                    msg: "\u7ec4\u4ef6\u5185\u90e8\u5b58\u5728\u963b\u585e\u811a\u672c\u9519\u8bef\uff1a" + c,
                                    type: "error"
                                })
                            }
                        }
                    })
                }, n)
            };
            a(n, function() {
                e.each(n, function(e, r) {
                    a(e, function() {
                        var e = o[r];
                        t(e.mod + " \u7ec4\u4ef6\u4e0d\u5b58\u5728\uff0c\u4e3a\u4e86\u907f\u514d\u95ee\u9898\u5f53\u524d\u8282\u70b9\u5df2\u9690\u85cf");
                        e.el && (e.el.style.display = "none")
                    }, r)
                })
            })
        })
    })
})();
