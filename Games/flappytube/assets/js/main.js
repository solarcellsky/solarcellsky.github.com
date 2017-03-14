// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
/** @license MIT License (c) copyright 2011-2013 original author or authors */

/**
 * A lightweight CommonJS Promises/A and when() implementation
 * when is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author Brian Cavalier
 * @author John Hann
 * @version 2.1.0
 */

/*!
 * Joseph Myer's md5() algorithm wrapped in a self-invoked function to prevent
 * global namespace polution, modified to hash unicode characters as UTF-8.
 *  
 * Copyright 1999-2010, Joseph Myers, Paul Johnston, Greg Holt, Will Bond <will@wbond.net>
 * http://www.myersdaily.org/joseph/javascript/md5-text.html
 * http://pajhome.org.uk/crypt/md5
 * 
 * Released under the BSD license
 * http://www.opensource.org/licenses/bsd-license
 */

/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org


 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

(function(e) {
    function n(e, n, r, i, s, o) {
        return cc.Director.getInstance().getScheduler().scheduleCallbackForTarget(e, n, r / 1e3, i, s, o),
        t.push(n),
        t.length - 1
    }
    function r(e, n) {
        var r = t[n];
        r != null && (cc.Director.getInstance().getScheduler().unscheduleCallbackForTarget(e, r), t[n] = null)
    }
    function i(e) {
        cc.Director.getInstance().getScheduler().unscheduleAllCallbacksForTarget(e)
    }
    function a(e) {
        return Array.isArray(e)
    }
    function f(e) {
        return typeof e == "boolean"
    }
    function l(e) {
        return e === null
    }
    function c(e) {
        return e == null
    }
    function h(e) {
        return typeof e == "number"
    }
    function p(e) {
        return typeof e == "string"
    }
    function d(e) {
        return typeof e == "symbol"
    }
    function v(e) {
        return e === void 0
    }
    function m(e) {
        return g(e) && objectToString(e) === "[object RegExp]"
    }
    function g(e) {
        return typeof e == "object" && e !== null
    }
    function y(e) {
        return g(e) && objectToString(e) === "[object Date]"
    }
    function b(e) {
        return g(e) && (objectToString(e) === "[object Error]" || e instanceof Error)
    }
    function w(e) {
        return typeof e == "function"
    }
    function E(e) {
        if (typeof e != "string") return e;
        e = e.trim();
        var t = [0, 0, 0];
        if (e[0] === "#") return e = e.slice(1),
        e.length === 3 && (e = e.replace(/(\w)/g, "$1$1")),
        t = e.match(/\w\w/g).map(function(e) {
            return parseInt(e, 16)
        }),
        cc.c3b.apply(null, t);
        if (e.slice(0, 4) === "rgb(") return e = e.slice(4, -1),
        t = cc.strToArray(e),
        cc.c3b.apply(null, t);
        if (e.slice(0, 5) === "rgba(") return e = e.slice(5, -1),
        t = cc.strToArray(e),
        cc.c4b.apply(null, t)
    }
    e.console || (e.console = {
        log: cc.log
    }),
    cc.Assert || (cc.Assert = function(e, t) {
        if (!e) throw new Error(t)
    });
    var t = [null];
    cc.Node.prototype.setTimeout = function(t, r) {
        return n(this || e, t, r || 0, 0, 0, !1)
    },
    cc.Node.prototype.setInterval = function(t, r) {
        return n(this || e, t, r || 0, cc.REPEAT_FOREVER, 0, !1)
    },
    cc.Node.prototype.clearAllTimers = function() {
        return i(this || e)
    },
    cc.Node.prototype.clearInterval = cc.Node.prototype.clearTimeout = function(t) {
        return r(this || e, t)
    },
    e.setTimeout == undefined && (e.setTimeout = cc.Node.prototype.setTimeout, e.setInterval = cc.Node.prototype.setInterval, e.clearTimeout = cc.Node.prototype.clearTimeout, e.clearInterval = cc.Node.prototype.clearInterval);
    var s = navigator.userAgent.indexOf("Cocos2dx") < 0,
    o = navigator.userAgent.indexOf("Android") >= 0,
    u = navigator.userAgent.indexOf("iOS") >= 0;
    cc.mixin = function(e, t, n) {
        n = n ||
        function(e, t) {
            if (typeof e == "undefined") return t
        },
        n == 1 && (n = function(e, t) {
            return t
        });
        for (var r in t) {
            var i = n(e[r], t[r], r, e, t);
            typeof i != "undefined" && (e[r] = i)
        }
        return e
    },
    cc.isArray = a,
    cc.isBoolean = f,
    cc.isNull = l,
    cc.isNullOrUndefined = c,
    cc.isNumber = h,
    cc.isString = p,
    cc.isSymbol = d,
    cc.isUndefined = v,
    cc.isRegExp = m,
    cc.isObject = g,
    cc.isDate = y,
    cc.isError = b,
    cc.isFunction = w,
    Object.defineProperty(e, "director", {
        get: function() {
            return cc.Director.getInstance()
        },
        enumerable: !0,
        configurable: !1
    }),
    Object.defineProperty(e, "scene", {
        get: function() {
            return cc.Director.getInstance().getRunningScene()
        },
        enumerable: !0,
        configurable: !1
    }),
    cc.random = function(e) {
        if (typeof e == "number") return 0 | Math.random() * e;
        if (e instanceof Array) {
            var t = e.length;
            return e[0 | Math.random() * t]
        }
    },
    cc.arrayShuffle = function(e) {
        for (var t = e.length - 1; t > 0; t--) {
            var n = 0 | Math.random() * (t + 1),
            r = e[t];
            e[t] = e[n],
            e[n] = r
        }
    },
    cc.strToArray = function(e) {
        return e.trim().split(/\s*,\s*/).map(function(e) {
            return parseInt(e)
        })
    },
    cc.color = function(e, t, n, r) {
        return typeof e == "string" ? E(e) : typeof r == "undefined" ? cc.c3b(e, t, n) : cc.c4b(e, t, n, r)
    }
})(this),
define("cqwrap/base",
function() {}),
define("cqwrap/events", ["require", "exports", "module"],
function(e, t, n) {
    function r() {
        this._events = this._events || {},
        this._maxListeners = this._maxListeners || undefined
    }
    r.EventEmitter = r,
    r.prototype._events = undefined,
    r.prototype._maxListeners = undefined,
    r.defaultMaxListeners = 10,
    r.prototype.setMaxListeners = function(e) {
        if (!cc.isNumber(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e,
        this
    },
    r.prototype.emit = function(e) {
        var t, n, r, i, s, o;
        this._events || (this._events = {});
        if (e === "error" && !this._events.error) throw t = arguments[1],
        t instanceof Error ? t: Error('Uncaught, unspecified "error" event.');
        n = this._events[e];
        if (cc.isUndefined(n)) return ! 1;
        if (cc.isFunction(n)) switch (arguments.length) {
        case 1:
            n.call(this);
            break;
        case 2:
            n.call(this, arguments[1]);
            break;
        case 3:
            n.call(this, arguments[1], arguments[2]);
            break;
        default:
            r = arguments.length,
            i = new Array(r - 1);
            for (s = 1; s < r; s++) i[s - 1] = arguments[s];
            n.apply(this, i)
        } else if (cc.isObject(n)) {
            r = arguments.length,
            i = new Array(r - 1);
            for (s = 1; s < r; s++) i[s - 1] = arguments[s];
            o = n.slice(),
            r = o.length;
            for (s = 0; s < r; s++) o[s].apply(this, i)
        }
        return ! 0
    },
    r.prototype.addListener = function(e, t) {
        var n;
        if (!cc.isFunction(t)) throw TypeError("listener must be a function");
        this._events || (this._events = {}),
        this._events.newListener && this.emit("newListener", e, cc.isFunction(t.listener) ? t.listener: t),
        this._events[e] ? cc.isObject(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t;
        if (cc.isObject(this._events[e]) && !this._events[e].warned) {
            var n;
            cc.isUndefined(this._maxListeners) ? n = r.defaultMaxListeners: n = this._maxListeners,
            n && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), console.trace())
        }
        return this
    },
    r.prototype.on = r.prototype.addListener,
    r.prototype.once = function(e, t) {
        function r() {
            this.removeListener(e, r),
            n || (n = !0, t.apply(this, arguments))
        }
        if (!cc.isFunction(t)) throw TypeError("listener must be a function");
        var n = !1;
        return r.listener = t,
        this.on(e, r),
        this
    },
    r.prototype.removeListener = function(e, t) {
        var n, r, i, s;
        if (!cc.isFunction(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        n = this._events[e],
        i = n.length,
        r = -1;
        if (n === t || cc.isFunction(n.listener) && n.listener === t) delete this._events[e],
        this._events.removeListener && this.emit("removeListener", e, t);
        else if (cc.isObject(n)) {
            for (s = i; s-->0;) if (n[s] === t || n[s].listener && n[s].listener === t) {
                r = s;
                break
            }
            if (r < 0) return this;
            n.length === 1 ? (n.length = 0, delete this._events[e]) : n.splice(r, 1),
            this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    },
    r.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return arguments.length === 0 ? this._events = {}: this._events[e] && delete this._events[e],
        this;
        if (arguments.length === 0) {
            for (t in this._events) {
                if (t === "removeListener") continue;
                this.removeAllListeners(t)
            }
            return this.removeAllListeners("removeListener"),
            this._events = {},
            this
        }
        n = this._events[e];
        if (cc.isFunction(n)) this.removeListener(e, n);
        else if (Array.isArray(n)) while (n.length) this.removeListener(e, n[n.length - 1]);
        return delete this._events[e],
        this
    },
    r.prototype.listeners = function(e) {
        var t;
        return ! this._events || !this._events[e] ? t = [] : cc.isFunction(this._events[e]) ? t = [this._events[e]] : t = this._events[e].slice(),
        t
    },
    r.listenerCount = function(e, t) {
        var n;
        return ! e._events || !e._events[t] ? n = 0 : cc.isFunction(e._events[t]) ? n = 1 : n = e._events[t].length,
        n
    },
    n.exports = {
        EventEmitter: r
    }
}),
function(e, t) {
    e("cqwrap/when", [],
    function() {
        function e(e, t, n, i) {
            return r(e).then(t, n, i)
        }
        function n(e, t) {
            this.then = e,
            this.inspect = t
        }
        function r(e) {
            return o(function(t) {
                t(e)
            })
        }
        function i(t) {
            return e(t, f)
        }
        function s() {
            function i(i, s, o) {
                e.resolve = e.resolver.resolve = function(e) {
                    return n ? r(e) : (n = !0, i(e), t)
                },
                e.reject = e.resolver.reject = function(e) {
                    return n ? r(f(e)) : (n = !0, s(e), t)
                },
                e.notify = e.resolver.notify = function(e) {
                    return o(e),
                    e
                }
            }
            var e, t, n;
            return e = {
                promise: D,
                resolve: D,
                reject: D,
                notify: D,
                resolver: {
                    resolve: D,
                    reject: D,
                    notify: D
                }
            },
            e.promise = t = o(i),
            e
        }
        function o(e) {
            function i(e, n, i) {
                return o(function(s, o, u) {
                    r ? r.push(function(t) {
                        t.then(e, n, i).then(s, o, u)
                    }) : P(function() {
                        t.then(e, n, i).then(s, o, u)
                    })
                })
            }
            function s() {
                return t ? t.inspect() : x()
            }
            function a(e) {
                if (!r) return;
                t = u(e),
                c(r, t),
                r = D
            }
            function h(e) {
                a(f(e))
            }
            function p(e) {
                r && c(r, l(e))
            }
            var t, r = [];
            return e(a, h, p),
            new n(i, s)
        }
        function u(e) {
            return e instanceof n ? e: e === Object(e) && "then" in e ? o(function(t, n, r) {
                P(function() {
                    try {
                        var i = e.then;
                        typeof i == "function" ? C(i, e, t, n, r) : t(a(e))
                    } catch(s) {
                        n(s)
                    }
                })
            }) : a(e)
        }
        function a(e) {
            var t = new n(function(n) {
                try {
                    return typeof n == "function" ? u(n(e)) : t
                } catch(r) {
                    return f(r)
                }
            },
            function() {
                return E(e)
            });
            return t
        }
        function f(e) {
            var t = new n(function(n, r) {
                try {
                    return typeof r == "function" ? u(r(e)) : t
                } catch(i) {
                    return f(i)
                }
            },
            function() {
                return S(e)
            });
            return t
        }
        function l(e) {
            var t = new n(function(n, r, i) {
                try {
                    return typeof i == "function" ? l(i(e)) : t
                } catch(s) {
                    return l(s)
                }
            });
            return t
        }
        function c(e, t) {
            P(function() {
                var n, r = 0;
                while (n = e[r++]) n(t)
            })
        }
        function h(e) {
            return e && typeof e.then == "function"
        }
        function p(t, n, r, i, s) {
            return e(t,
            function(t) {
                function u(r, i, s) {
                    function d(e) {
                        c(e)
                    }
                    function v(e) {
                        l(e)
                    }
                    var o, u, a, f, l, c, h, p;
                    h = t.length >>> 0,
                    o = Math.max(0, Math.min(n, h)),
                    a = [],
                    u = h - o + 1,
                    f = [];
                    if (!o) r(a);
                    else {
                        c = function(e) {
                            f.push(e),
                            --u || (l = c = j, i(f))
                        },
                        l = function(e) {
                            a.push(e),
                            --o || (l = c = j, r(a))
                        };
                        for (p = 0; p < h; ++p) p in t && e(t[p], v, d, s)
                    }
                }
                return o(u).then(r, i, s)
            })
        }
        function d(e, t, n, r) {
            function i(e) {
                return t ? t(e[0]) : e[0]
            }
            return p(e, 1, i, n, r)
        }
        function v(e, t, n, r) {
            return b(e, j).then(t, n, r)
        }
        function m() {
            return b(arguments, j)
        }
        function g(e) {
            return b(e, E, S)
        }
        function y(e, t) {
            return b(e, t)
        }
        function b(t, n, r) {
            return e(t,
            function(t) {
                function i(i, s, o) {
                    var u, a, f, l, c;
                    f = a = t.length >>> 0,
                    u = [];
                    if (!f) {
                        i(u);
                        return
                    }
                    l = function(t, a) {
                        e(t, n, r).then(function(e) {
                            u[a] = e,
                            --f || i(u)
                        },
                        s, o)
                    };
                    for (c = 0; c < a; c++) c in t ? l(t[c], c) : --f
                }
                return o(i)
            })
        }
        function w(t, n) {
            var r = C(N, arguments, 1);
            return e(t,
            function(t) {
                var i;
                return i = t.length,
                r[0] = function(t, r, s) {
                    return e(t,
                    function(t) {
                        return e(r,
                        function(e) {
                            return n(t, e, s, i)
                        })
                    })
                },
                T.apply(t, r)
            })
        }
        function E(e) {
            return {
                state: "fulfilled",
                value: e
            }
        }
        function S(e) {
            return {
                state: "rejected",
                reason: e
            }
        }
        function x() {
            return {
                state: "pending"
            }
        }
        function P(e) {
            L.push(e) === 1 && H()
        }
        function H() {
            k(B)
        }
        function B() {
            var e, t = 0;
            while (e = L[t++]) e();
            L = []
        }
        function j(e) {
            return e
        }
        e.defer = s,
        e.resolve = r,
        e.reject = i,
        e.join = m,
        e.all = v,
        e.map = y,
        e.reduce = w,
        e.settle = g,
        e.any = d,
        e.some = p,
        e.isPromise = h,
        e.promise = o,
        n.prototype = {
            otherwise: function(e) {
                return this.then(D, e)
            },
            ensure: function(e) {
                function t() {
                    return r(e())
                }
                return this.then(t, t).yield(this)
            },
            yield: function(e) {
                return this.then(function() {
                    return e
                })
            },
            spread: function(e) {
                return this.then(function(t) {
                    return v(t,
                    function(t) {
                        return e.apply(D, t)
                    })
                })
            },
            always: function(e, t) {
                return this.then(e, e, t)
            }
        };
        var T, N, C, k, L, A, O, M, _, D;
        return L = [],
        A = t.setTimeout,
        k = typeof setImmediate == "function" ? setImmediate.bind(t) : typeof process == "object" && process.nextTick ? process.nextTick: typeof vertx == "object" ? vertx.runOnLoop: function(e) {
            A(e, 0)
        },
        O = Function.prototype,
        M = O.call,
        C = O.bind ? M.bind(M) : function(e, t) {
            return e.apply(t, N.call(arguments, 2))
        },
        _ = [],
        N = _.slice,
        T = _.reduce ||
        function(e) {
            var t, n, r, i, s;
            s = 0,
            t = Object(this),
            i = t.length >>> 0,
            n = arguments;
            if (n.length <= 1) for (;;) {
                if (s in t) {
                    r = t[s++];
                    break
                }
                if (++s >= i) throw new TypeError
            } else r = n[1];
            for (; s < i; ++s) s in t && (r = e(r, t[s], s, t));
            return r
        },
        e
    })
} (typeof define == "function" && define.amd ? define: function(e) {
    typeof module != "undefined" ? module.exports = e() : typeof window != "undefined" && (window.when = e())
},
this),
define("cqwrap/native", ["require", "exports", "module", "cqwrap/when"],
function(e, t, n) {
    var r = e("cqwrap/when"),
    i = 0,
    s = [];
    global.native || (global.native = {
        postMessage: function() {
            cc.log("native interface not found, ignored.")
        }
    }),
    Object.defineProperty(native, "onmessage", {
        value: function(e) {
            var e = JSON.parse(e);
            if (e && e.jsonrpc == "2.0") {
                var t = s[e.id];
                t && t(e)
            } else if (e && e.protocal == "weizoo") {
                var n = decodeURIComponent(e.code);
                n && (new Function(n))()
            }
        },
        enumerable: !1,
        writable: !1,
        configurable: !1
    }),
    native.call = function(e, t) {
        var n = r.defer();
        t = t || {};
        var o = {
            jsonrpc: "2.0",
            method: e,
            params: t,
            id: i++
        };
        return s[o.id] = function(e) {
            e.result ? n.resolve(e.result) : n.reject(e.error)
        },
        native.postMessage(JSON.stringify(o)),
        n.promise
    },
    n.exports = native
}),
function() {
    function e(e, t) {
        var o = e[0],
        u = e[1],
        a = e[2],
        f = e[3];
        o = n(o, u, a, f, t[0], 7, -680876936),
        f = n(f, o, u, a, t[1], 12, -389564586),
        a = n(a, f, o, u, t[2], 17, 606105819),
        u = n(u, a, f, o, t[3], 22, -1044525330),
        o = n(o, u, a, f, t[4], 7, -176418897),
        f = n(f, o, u, a, t[5], 12, 1200080426),
        a = n(a, f, o, u, t[6], 17, -1473231341),
        u = n(u, a, f, o, t[7], 22, -45705983),
        o = n(o, u, a, f, t[8], 7, 1770035416),
        f = n(f, o, u, a, t[9], 12, -1958414417),
        a = n(a, f, o, u, t[10], 17, -42063),
        u = n(u, a, f, o, t[11], 22, -1990404162),
        o = n(o, u, a, f, t[12], 7, 1804603682),
        f = n(f, o, u, a, t[13], 12, -40341101),
        a = n(a, f, o, u, t[14], 17, -1502002290),
        u = n(u, a, f, o, t[15], 22, 1236535329),
        o = r(o, u, a, f, t[1], 5, -165796510),
        f = r(f, o, u, a, t[6], 9, -1069501632),
        a = r(a, f, o, u, t[11], 14, 643717713),
        u = r(u, a, f, o, t[0], 20, -373897302),
        o = r(o, u, a, f, t[5], 5, -701558691),
        f = r(f, o, u, a, t[10], 9, 38016083),
        a = r(a, f, o, u, t[15], 14, -660478335),
        u = r(u, a, f, o, t[4], 20, -405537848),
        o = r(o, u, a, f, t[9], 5, 568446438),
        f = r(f, o, u, a, t[14], 9, -1019803690),
        a = r(a, f, o, u, t[3], 14, -187363961),
        u = r(u, a, f, o, t[8], 20, 1163531501),
        o = r(o, u, a, f, t[13], 5, -1444681467),
        f = r(f, o, u, a, t[2], 9, -51403784),
        a = r(a, f, o, u, t[7], 14, 1735328473),
        u = r(u, a, f, o, t[12], 20, -1926607734),
        o = i(o, u, a, f, t[5], 4, -378558),
        f = i(f, o, u, a, t[8], 11, -2022574463),
        a = i(a, f, o, u, t[11], 16, 1839030562),
        u = i(u, a, f, o, t[14], 23, -35309556),
        o = i(o, u, a, f, t[1], 4, -1530992060),
        f = i(f, o, u, a, t[4], 11, 1272893353),
        a = i(a, f, o, u, t[7], 16, -155497632),
        u = i(u, a, f, o, t[10], 23, -1094730640),
        o = i(o, u, a, f, t[13], 4, 681279174),
        f = i(f, o, u, a, t[0], 11, -358537222),
        a = i(a, f, o, u, t[3], 16, -722521979),
        u = i(u, a, f, o, t[6], 23, 76029189),
        o = i(o, u, a, f, t[9], 4, -640364487),
        f = i(f, o, u, a, t[12], 11, -421815835),
        a = i(a, f, o, u, t[15], 16, 530742520),
        u = i(u, a, f, o, t[2], 23, -995338651),
        o = s(o, u, a, f, t[0], 6, -198630844),
        f = s(f, o, u, a, t[7], 10, 1126891415),
        a = s(a, f, o, u, t[14], 15, -1416354905),
        u = s(u, a, f, o, t[5], 21, -57434055),
        o = s(o, u, a, f, t[12], 6, 1700485571),
        f = s(f, o, u, a, t[3], 10, -1894986606),
        a = s(a, f, o, u, t[10], 15, -1051523),
        u = s(u, a, f, o, t[1], 21, -2054922799),
        o = s(o, u, a, f, t[8], 6, 1873313359),
        f = s(f, o, u, a, t[15], 10, -30611744),
        a = s(a, f, o, u, t[6], 15, -1560198380),
        u = s(u, a, f, o, t[13], 21, 1309151649),
        o = s(o, u, a, f, t[4], 6, -145523070),
        f = s(f, o, u, a, t[11], 10, -1120210379),
        a = s(a, f, o, u, t[2], 15, 718787259),
        u = s(u, a, f, o, t[9], 21, -343485551),
        e[0] = c(o, e[0]),
        e[1] = c(u, e[1]),
        e[2] = c(a, e[2]),
        e[3] = c(f, e[3])
    }
    function t(e, t, n, r, i, s) {
        return t = c(c(t, e), c(r, s)),
        c(t << i | t >>> 32 - i, n)
    }
    function n(e, n, r, i, s, o, u) {
        return t(n & r | ~n & i, e, n, s, o, u)
    }
    function r(e, n, r, i, s, o, u) {
        return t(n & i | r & ~i, e, n, s, o, u)
    }
    function i(e, n, r, i, s, o, u) {
        return t(n ^ r ^ i, e, n, s, o, u)
    }
    function s(e, n, r, i, s, o, u) {
        return t(r ^ (n | ~i), e, n, s, o, u)
    }
    function o(t) { / [\x80 - \xFF] / .test(t) && (t = unescape(encodeURI(t))),
        txt = "";
        var n = t.length,
        r = [1732584193, -271733879, -1732584194, 271733878],
        i;
        for (i = 64; i <= t.length; i += 64) e(r, u(t.substring(i - 64, i)));
        t = t.substring(i - 64);
        var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < t.length; i++) s[i >> 2] |= t.charCodeAt(i) << (i % 4 << 3);
        s[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            e(r, s);
            for (i = 0; i < 16; i++) s[i] = 0
        }
        return s[14] = n * 8,
        e(r, s),
        r
    }
    function u(e) {
        var t = [],
        n;
        for (n = 0; n < 64; n += 4) t[n >> 2] = e.charCodeAt(n) + (e.charCodeAt(n + 1) << 8) + (e.charCodeAt(n + 2) << 16) + (e.charCodeAt(n + 3) << 24);
        return t
    }
    function f(e) {
        var t = "",
        n = 0;
        for (; n < 4; n++) t += a[e >> n * 8 + 4 & 15] + a[e >> n * 8 & 15];
        return t
    }
    function l(e) {
        for (var t = 0; t < e.length; t++) e[t] = f(e[t]);
        return e.join("")
    }
    function c(e, t) {
        return e + t & 4294967295
    }
    var a = "0123456789abcdef".split("");
    md5 = function(e) {
        return l(o(e))
    };
    if (md5("hello") != "5d41402abc4b2a76b9719d911017c592") function c(e, t) {
        var n = (e & 65535) + (t & 65535),
        r = (e >> 16) + (t >> 16) + (n >> 16);
        return r << 16 | n & 65535
    }
} (),
define("cqwrap/md5",
function() {}),
define("cqwrap/data", ["require", "exports", "module"],
function(e, t, n) {
    var r = "weizoo",
    i = cc.Class.extend({
        ctor: function(e, t) {
            this.name = e,
            this.salt = t || r
        },
        getRootKey: function() {
            return [this.salt, this.name].join("::")
        },
        get: function(e, t) {
            var n = sys.localStorage.getItem(this.getRootKey()) || "{}";
            return n = JSON.parse(n),
            e == null ? n: n[e] != null ? n[e] : t
        },
        set: function(e, t) {
            var n = this.get();
            n[e] = t,
            sys.localStorage.setItem(this.getRootKey(), JSON.stringify(n))
        }
    }),
    s = new i("gameSettings"),
    o = new i("userData");
    n.exports = {
        SimpleStorage: i,
        GameSettings: s,
        UserData: o
    }
}),
define("cqwrap/style", ["require", "exports", "module"],
function(e, t, n) {
    function i(e) {
        return e.replace(/\-(\w)/ig,
        function(e, t) {
            return t.toUpperCase()
        })
    }
    var r = cc.strToArray,
    s = {
        anchor: {
            set: function(e, t) {
                return e && e.setAnchorPoint ? (typeof t == "string" && (t = r(t)), typeof t == "number" && (t = [t, t]), t instanceof Array && (t = cc.p.apply(null, t)), e.setAnchorPoint(t), !0) : !1
            },
            get: function(e) {
                if (e && e.getAnchorPoint) return e.getAnchorPoint()
            }
        },
        texture: {
            set: function(e, t) {
                if (t instanceof cc.Texture2D) {
                    var n = t.getContentSize();
                    e.setTextureRect(cc.rect(0, 0, n.width, n.height)),
                    e.setTexture(t)
                }
                t = t.trim();
                var i = t.match(/(.*)\s*(?:rect\((.*)\))/),
                s = null;
                i && (t = i[1].trim(), s = r(i[2]), s = cc.rect.apply(null, s));
                var o = t && cc.SpriteFrameCache.getInstance().getSpriteFrame(t);
                if (o) return e.setDisplayFrame(o),
                !0;
                var u = cc.TextureCache.getInstance().addImage(t),
                a = e.getTextureRect().width;
                return a <= 0 ? s ? e.initWithTexture(u, s) : e.initWithTexture(u) : (s && e.setTextureRect(s), e.setTexture(u)),
                !0
            },
            get: function(e) {
                return e.getTexture()
            }
        },
        position: {
            set: function(e, t) {
                return e && e.setPosition ? (typeof t == "string" && (t = r(t)), t instanceof Array && (t = cc.p.apply(null, t)), e.setPosition(t), !0) : !1
            },
            get: function(e) {
                if (e && e.getPosition) return e.getPosition()
            }
        },
        positionX: {
            set: function(e, t) {
                var n = e.getPosition();
                return u.setStyle(e, "position", cc.p(t, n.y))
            },
            get: function() {
                if (node && node.getPosition) return node.getPosition().x
            }
        },
        positionY: {
            set: function(e, t) {
                var n = e.getPosition();
                return u.setStyle(e, "position", cc.p(n.x, t))
            },
            get: function() {
                if (node && node.getPosition) return node.getPosition().y
            }
        },
        size: {
            set: function(e, t) {
                return e && e.setContentSize ? (typeof t == "string" && (t = r(t)), t instanceof Array && (t = cc.size.apply(null, t)), e.setContentSize(t), e.setDimensions && e.setDimensions(t), !0) : !1
            },
            get: function(e) {
                if (e && e.getContentSize) return e.getContentSize()
            }
        },
        width: {
            set: function(e, t) {
                var n = e.getContentSize();
                return u.setStyle(e, "size", cc.size(t, n.height))
            },
            get: function(e) {
                if (e && e.getContentSize) return e.getContentSize().width
            }
        },
        height: {
            set: function(e, t) {
                var n = e.getContentSize();
                return u.setStyle(e, "size", cc.size(n.width, t))
            },
            get: function(e) {
                if (e && e.getContentSize) return e.getContentSize().height
            }
        },
        zOrder: {
            set: function(e, t) {
                return e && e.setZOrder ? (e.setZOrder(t), !0) : !1
            },
            get: function(e) {
                if (e && e.getZOrder) return e.getZOrder()
            }
        },
        color: {
            set: function(e, t) {
                return e && e.setColor ? (t = cc.color(t), e.setColor(t), !0) : !1
            },
            get: function(e) {
                if (e && e.getColor) return e.getColor()
            }
        },
        fontFamily: {
            set: function(e, t) {
                return e && e.setFontName ? (e.setFontName(t), !0) : !1
            },
            get: function(e) {
                if (e && e.getFontName) return e.getFontName()
            }
        },
        fontSize: {
            set: function(e, t) {
                return e && e.setFontSize ? (e.setFontSize(t), !0) : !1
            },
            get: function(e) {
                if (e && e.getFontSize) return e.getFontSize()
            }
        },
        textAlign: {
            set: function(e, t) {
                if (e && e.setHorizontalAlignment) {
                    var n = {
                        center: cc.TEXT_ALIGNMENT_CENTER,
                        left: cc.TEXT_ALIGNMENT_LEFT,
                        right: cc.TEXT_ALIGNMENT_RIGHT
                    };
                    return typeof t == "string" && (t = n[t]),
                    e.setHorizontalAlignment(t),
                    !0
                }
                return ! 1
            },
            get: function(e) {
                if (e && e.getHorizontalAlignment) return e.getHorizontalAlignment()
            }
        },
        vAlign: {
            set: function(e, t) {
                if (e && e.setVerticalAlignment) {
                    var n = {
                        middle: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
                        top: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
                        bottom: cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM
                    };
                    return typeof t == "string" && (t = n[t]),
                    e.setVerticalAlignment(t),
                    !0
                }
                return ! 1
            },
            get: function(e) {
                if (e && e.getVerticalAlignment) return e.getVerticalAlignment()
            }
        },
        opacity: {
            set: function(e, t) {
                return e && e.setOpacity ? (e.setOpacity(t), !0) : !1
            },
            get: function(e) {
                if (e && e.getOpacity) return e.getOpacity()
            }
        },
        scale: {
            set: function(e, t) {
                return e && e.setScale ? (typeof t == "string" && (t = r(t)), t instanceof Array ? e.setScale.apply(e, t) : e.setScale(t), !0) : !1
            },
            get: function(e) {
                if (e && e.getScale) return e.getScale()
            }
        },
        scaleX: {
            set: function(e, t) {
                return e && e.setScaleX ? (e.setScaleX(t), !0) : !1
            },
            get: function(e, t) {
                if (e && e.getScaleX) return e.getScaleX()
            }
        },
        scaleY: {
            set: function(e, t) {
                return e && e.setScaleY ? (e.setScaleY(t), !0) : !1
            },
            get: function(e, t) {
                if (e && e.getScaleY) return e.getScaleY()
            }
        },
        flipX: {
            set: function(e, t) {
                return e && e.setFlipX ? (e.setFlipX(t), !0) : e && e.setFlippedX ? (e.setFlippedX(t), !0) : !1
            },
            get: function(e, t) {
                if (e && e.getFlipX) return e.getFlipX();
                if (e && e.getFlippedX) return e.getFlippedX()
            }
        },
        flipY: {
            set: function(e, t) {
                return e && e.setFlipY ? (e.setFlipY(t), !0) : e && e.setFlippedY ? (e.setFlippedY(t), !0) : !1
            },
            get: function(e, t) {
                if (e && e.getFlipY) return e.getFlipY();
                if (e && e.getFlippedY) return e.getFlippedY()
            }
        },
        rotate: {
            set: function(e, t) {
                if (e && e.setRotation) return e.setRotation(t),
                !0
            },
            get: function(e) {
                if (e && e.getRotation) return e.getRotation()
            }
        }
    },
    o = {
        zIndex: "zOrder",
        xy: "position",
        x: "positionX",
        y: "positionY",
        wh: "size",
        w: "width",
        h: "height"
    },
    u = {
        setStyle: function(e, t, n) {
            if (typeof t != "object") {
                t = i(t),
                t = o[t] || t;
                if (!s[t]) {
                    var u = e[i("set-" + t)];
                    if (u) try {
                        return u.call(e, n),
                        !0
                    } catch(a) {
                        return ! 1
                    }
                    return ! 1
                }
                return s[t].set(e, n)
            }
            for (var r in t) this.setStyle(e, r, t[r])
        },
        getStyle: function(e, t) {
            t = i(t),
            t = o[t] || t;
            if (!s[t]) {
                var n = e[i("get-" + t)];
                if (n) try {
                    return n.call(e)
                } catch(r) {
                    return null
                }
                return null
            }
            return s[t].get(e)
        }
    };
    cc.Node.prototype.setStyle = function(e, t) {
        u.setStyle(this, e, t)
    },
    cc.Node.prototype.getStyle = function(e, t) {
        return u.getStyle(this, e)
    },
    n.exports = {
        StyleManager: u
    }
}),
define("cqwrap/nodes", ["require", "exports", "module"],
function(e, t, n) {
    var r = cc.Node.extend({
        ctor: function() {
            this._super(),
            this.init.apply(this, arguments),
            cc.associateWithNative(this, cc.Sprite)
        },
        init: function() {
            this._super()
        }
    });
    n.exports = {
        BaseNode: r
    }
}),
define("cqwrap/tiles.js", ["require", "exports", "module", "cqwrap/nodes"],
function(e, t, n) {
    var r = e("cqwrap/nodes").BaseNode,
    i = r.extend({
        init: function(e, t) {
            t = t || e,
            this.width = e,
            this.height = t
        },
        addChild: function(e, t, n) {
            this.setXY(e, t, n),
            this._super(e)
        },
        setXY: function(e, t, n) {
            if (!e._pos) {
                var r = e.getStyle("xy");
                e._pos = cc.p(r.x, r.y)
            }
            e.setStyle({
                xy: [t * this.width + e._pos.x, n * this.height + e._pos.y]
            })
        },
        locationToXY: function(e) {
            var t = this.getPosition(),
            n = 0 | (e.x - t.x) / this.width,
            r = 0 | (e.y - t.y) / this.height;
            return cc.p(n, r)
        }
    });
    n.exports = {
        TileNode: i
    }
}),
define("cqwrap/labels", ["require", "exports", "module", "cqwrap/sprites"],
function(e, t, n) {
    var r = e("cqwrap/sprites").BaseSprite;
    cc.LabelTTF.extend = cc.Sprite.extend;
    var i = cc.LabelTTF.extend({
        ctor: function(e) {
            this._super.apply(this, arguments),
            this.init.apply(this, arguments),
            cc.associateWithNative(this, cc.LabelTTF)
        },
        init: function(e) {
            this.initWithString(e, "Arial", 16),
            this.setCascadeOpacityEnabled(!0),
            this.setCascadeColorEnabled(!0)
        }
    });
    n.exports = {
        BaseLabel: i
    }
}),
define("cqwrap/sprites", ["require", "exports", "module", "cqwrap/labels"],
function(e, t, n) {
    var r = cc.Sprite.extend({
        ctor: function() {
            this._super(),
            this.init.apply(this, arguments),
            cc.associateWithNative(this, cc.Sprite)
        },
        init: function(e, t) {
            var n = e && cc.SpriteFrameCache.getInstance().getSpriteFrame(e);
            n ? this.initWithSpriteFrame(n) : this._super.apply(this, arguments),
            this.setCascadeOpacityEnabled(!0),
            this.setCascadeColorEnabled(!0)
        }
    });
    cc.createSprite = function(t, n) {
        typeof t == "object" && !(t instanceof cc.Sprite) && n == null && (n = t, t = new r),
        n = n || {};
        if (typeof t == "string") if (t[0] === "@") {
            var i = e("cqwrap/labels").BaseLabel;
            t = new i(t.slice(1))
        } else t = new r(t);
        return t.setStyle(n),
        t
    },
    n.exports = {
        BaseSprite: r
    }
}),
define("cqwrap/animate", ["require", "exports", "module", "cqwrap/sprites"],
function(e, t, n) {
    function u() {}
    var r = {},
    i = e("cqwrap/sprites").BaseSprite,
    s = function(e) {
        var t = cc.SpriteFrameCache.getInstance(),
        n = [],
        r = 0;
        do {
            var i = e.replace("%d", r), s = t.getSpriteFrame(i);
            if (!s) break;
            n.push(s)
        } while (++ r );
        return n
    };
    r.createAnimFromPng = function(e, t) {
        var n = s(e),
        r = cc.Animation.create(n, t);
        return cc.Animate.create(r)
    },
    r.createRFAnimFromPng = function(e, t) {
        return cc.RepeatForever.create(r.createAnimFromPng(e, t))
    };
    var o = i.extend({
        init: function(e) {
            return this._super(),
            this.img = e,
            this.animate = null,
            !0
        },
        animate: function(e, t) {
            if (!this.animate) {
                var n = this.img;
                /%d/.test(this.img) || (n = this.img.replace(/\./, "%d."));
                var i = t ? "createRFAnimFromPng": "createAnimFromPng";
                this.animate = r[i](n, e)
            }
            this.runAction(this.animate)
        }
    });
    cc.mixin(u.prototype, {
        getActions: function() {
            return this._animSeq = this._animSeq || [],
            this._animSeq
        },
        addAction: function(e, t, n, r) {
            for (var i = t.length - 1; i >= 0; i--) if (t[i] !== undefined) break;
            t.length = i + 1;
            var s = [e.create.apply(e, t)];
            if (n) {
                var o = [].slice.call(arguments, 3);
                for (var i = o.length - 1; i >= 0; i--) if (o[i] !== undefined) break;
                o.length = i + 1,
                s[0] = n.create.apply(n, [s[0]].concat(o))
            }
            var u = this.getActions();
            return u.push.apply(u, s),
            this
        },
        clearActions: function() {
            return this.getActions().length = 0,
            this
        },
        delay: function(e) {
            return this.addAction(cc.DelayTime, [e])
        },
        repeat: function(e) {
            e = e || 9999999;
            var t = this.getActions();
            if (t.length > 0) {
                var n = t[t.length - 1];
                n = cc.Repeat.create(n, e),
                t[t.length - 1] = n
            }
            return this
        },
        repeatAll: function(e) {
            e = e || 9999999;
            var t = this.getActions();
            if (t.length > 0) {
                var n = cc.Sequence.create.apply(cc.Sequence, t);
                n = cc.Repeat.create(n, e),
                t.length = 0,
                t.push(n)
            }
            return this
        },
        reverse: function() {
            var e = this.getActions();
            if (e.length > 0) {
                var t = e[e.length - 1];
                e.push(t.reverse())
            }
            return this
        },
        reverseAll: function() {
            var e = this.getActions();
            if (e.length > 0) {
                var t = cc.Sequence.create.apply(cc.Sequence, e);
                e.push(t.reverse())
            }
            return this
        },
        then: function(e) {
            return e = cc.CallFunc.create(e, this),
            this.getActions().push(e),
            this
        },
        animate: function(e) {
            var t = [].slice.call(arguments, 1);
            if (/%d/.test(t[0])) t = s(t[0]);
            else {
                var n = cc.SpriteFrameCache.getInstance();
                t = t.map(function(e) {
                    return n.getSpriteFrame(e)
                })
            }
            var r = cc.Animation.create(t, e / t.length);
            return this.getActions().push(cc.Animate.create(r)),
            this
        },
        bezierBy: function(e, t, n, r) {
            return this.addAction(cc.BezierBy, [e, t], n, r)
        },
        bezierTo: function(e, t, n, r) {
            return this.addAction(cc.BezierTo, [e, t], n, r)
        },
        blink: function(e, t, n, r) {
            return this.addAction(cc.Blink, [e, t], n, r)
        },
        fadeIn: function(e, t, n) {
            return this.addAction(cc.FadeIn, [e], t, n)
        },
        fadeOut: function(e, t, n) {
            return this.addAction(cc.FadeOut, [e], t, n)
        },
        fadeTo: function(e, t, n, r) {
            return this.addAction(cc.FadeTo, [e, t], n, r)
        },
        jumpBy: function(e, t, n, r, i, s) {
            return this.runAction(cc.JumpBy, [e, t, n, r || 1], i, s)
        },
        jumpTo: function(e, t, n, r, i, s) {
            return this.runAction(cc.JumpTo, [e, t, n, r || 1], i, s)
        },
        moveBy: function(e, t, n, r) {
            return this.addAction(cc.MoveBy, [e, t], n, r)
        },
        moveTo: function(e, t, n, r) {
            return this.addAction(cc.MoveTo, [e, t], n, r)
        },
        rotateBy: function(e, t, n, r, i) {
            return this.addAction(cc.RotateBy, [e, t, n], r, i)
        },
        rotateTo: function(e, t, n, r, i) {
            return this.addAction(cc.RotateTo, [e, t, n], r, i)
        },
        scaleBy: function(e, t, n, r, i) {
            return this.addAction(cc.ScaleBy, [e, t, n], r, i)
        },
        scaleTo: function(e, t, n, r, i) {
            return this.addAction(cc.ScaleTo, [e, t, n], r, i)
        },
        skewBy: function(e, t, n, r, i) {
            return this.addAction(cc.SkewBy, [e, t, n], r, i)
        },
        skewTo: function(e, t, n, r, i) {
            return this.addAction(cc.SkewTo, [e, t, n], r, i)
        },
        tineBy: function(e, t, n, r, i, s) {
            return this.addAction(cc.TineBy, [e, t, n, r], i, s)
        },
        tineTo: function(e, t, n, r, i, s) {
            return this.addAction(cc.TineTo, [e, t, n, r], i, s)
        }
    }),
    cc.Node.prototype.act = function(e) {
        return e ? this.runAction(e) : this.getActions().length > 0 && (e = cc.Sequence.create.apply(cc.Sequence, this.getActions()), this.runAction(e), this.clearActions()),
        this
    },
    cc.mixin(cc.Node.prototype, new u),
    n.exports = {
        AnimationTool: r,
        FrameAnimSprite: o,
        AnimationTask: u
    }
}),
define("cqwrap/layers", ["require", "exports", "module", "cqwrap/events", "cqwrap/sprites"],
function(e, t, n) {
    function u(e, t, n) {
        var r = t.getLocation(),
        i = e._touchTargets;
        for (var s = 0; s < i.length; s++) {
            var o = i[s],
            u = o.convertToNodeSpace(r),
            a = o.getContentSize(),
            f = cc.rect(0, 0, a.width, a.height);
            if (cc.rectContainsPoint(f, u)) return t.returnValue = !0,
            t.preventDefault = function() {
                t.returnValue = !1
            },
            n === "touchstart" && (e._touchedTarget = o, e._currentTarget = o),
            n === "touchmove" && o !== e._currentTarget && (e._currentTarget && e._currentTarget.emit("touchleave", t, e._currentTarget, e), o.emit("touchenter", t, o, e), e._currentTarget = o),
            e._touchedTarget && n === "touchmove" && o !== e._touchedTarget && (e._touchedTarget.emit("touchend", t, e._touchedTarget, e), e._moved = !0, delete e._touchedTarget),
            o.emit(n, t, o, e),
            t.returnValue
        }
        return e._touchedTarget && (n === "touchmove" || n === "touchend") && (e._touchedTarget.emit("touchend", t, e._touchedTarget, e), e._currentTarget && (e._currentTarget.emit("touchleave", t, e._currentTarget, e), delete e._currentTarget), e._moved = !0, delete e._touchedTarget),
        !1
    }
    var r = e("cqwrap/events").EventEmitter,
    i = e("cqwrap/sprites").BaseSprite,
    s = cc.Layer.extend({
        ctor: function() {
            this._super(),
            this.init.apply(this, arguments),
            cc.associateWithNative(this, cc.Layer)
        },
        onEnter: function() {
            this._super()
        },
        onExit: function() {
            this._super(),
            this.clearAllTimers()
        }
    }),
    o = s.extend({
        init: function(e) {
            this._super();
            var t = director.getWinSize(),
            n = new i(e);
            return n.setPosition(cc.p(t.width / 2, t.height / 2)),
            this.addChild(n),
            !0
        }
    }),
    a = s.extend({
        init: function() {
            this._super();
            var e = director.offsetY || 0;
            this.setPosition(cc.p(0, e)),
            this._touchTargets = [],
            this._clickAndMove = !0,
            this.backClicked && this.setKeypadEnabled && this.setKeypadEnabled(!0)
        },
        onEnter: function() {
            this._super(),
            this.registerDelegate();
            if (this.backClicked && typeof history != "undefined") {
                var e = this;
                history.pushState({},
                "");
                var t = function(t) {
                    e.backClicked()
                };
                this._pushState = t,
                window.addEventListener("popstate", t)
            }
        },
        onExit: function() {
            this.unregisterDelegate(),
            this.backClicked && typeof history != "undefined" && this._pushState && (window.removeEventListener("popstate", this._pushState), this._pushState = null),
            this._super()
        },
        addChild: function(e) {
            this._super.apply(this, arguments),
            e.on && this.delegate(e)
        },
        setTouchRect: function(e) {
            this._touchRect = e
        },
        setClickAndMove: function(e) {
            this._clickAndMove = e
        },
        addSprite: function(e, t, n) {
            var n = n || this;
            e = cc.createSprite(e, t),
            n.addChild(e)
        },
        delegate: function(e, t, n) {
            this._touchTargets.indexOf(e) < 0 && (e.on || cc.mixin(e, new r), this._touchTargets.push(e), this._touchTargets.sort(function(e, t) {
                return t.getZOrder() - e.getZOrder()
            })),
            t && e.on(t, n)
        },
        undelegate: function(e, t) {
            var n = this._touchTargets.indexOf(e);
            n >= 0 && (t ? e.removeAllListeners(t) : (this._touchTargets.splice(n, 1), e.removeAllListeners()))
        },
        registerDelegate: function() {
            cc.registerTargetedDelegate( - this.getZOrder(), !0, this)
        },
        unregisterDelegate: function() {
            cc.unregisterTouchDelegate(this)
        },
        onTouchBegan: function(e, t) {
            return this._touchRect && !cc.rectContainsPoint(this._touchRect, e.getLocation()) ? !1 : (this._touchPoint = e.getLocation(), u(this, e, "touchstart"))
        },
        onTouchMoved: function(e, t) {
            var n = e.getLocation(),
            r = director.getWinSize();
            return ! this._clickAndMove && (Math.abs(this._touchPoint.x - n.x) >= r.width / 30 || Math.abs(this._touchPoint.y - n.y) >= r.height / 30) && (this._moved = !0),
            u(this, e, "touchmove")
        },
        onTouchEnded: function(e, t) {
            return u(this, e, "touchend"),
            this._moved || u(this, e, "click"),
            this._moved = !1,
            e.returnValue
        },
        onTouchCancelled: function(e, t) {
            return u(this, e, "touchcancel")
        }
    });
    n.exports = {
        BaseLayer: s,
        BgLayer: o,
        GameLayer: a
    }
}),
define("cqwrap/scenes", ["require", "exports", "module", "cqwrap/layers"],
function(e, t, n) {
    function u(e, t, n) {
        n(t);
        if (t.length <= 0) return;
        e.addSpriteFrames(t[0][0], t[0][1]),
        setTimeout(function() {
            u(e, t.slice(1), n)
        },
        100)
    }
    var r = e("cqwrap/layers"),
    i = r.BaseLayer,
    s = r.BgLayer,
    o = cc.Scene.extend({
        ctor: function() {
            this._super(),
            this.init.apply(this, arguments),
            cc.associateWithNative(this, cc.Scene)
        }
    }),
    a = i.extend({
        init: function(e) {
            this._super();
            var t = this;
            setTimeout(function() {
                var n = cc.SpriteFrameCache.getInstance();
                u(n, e,
                function(n) {
                    t.getParent().onProgressChange(1 - n.length / e.length),
                    n.length <= 0 && setTimeout(function() {
                        t.getParent().onLoaded()
                    },
                    200)
                })
            },
            100),
            this.setKeypadEnabled && this.setKeypadEnabled(!0)
        },
        backClicked: function() {
            this.getParent().backClicked()
        }
    }),
    f = o.extend({
        init: function(e) {
            this._super();
            var t = new a(e);
            this.addChild(t)
        },
        onProgressChange: function() {},
        onLoaded: function() {},
        backClicked: function() {
            director.end()
        }
    });
    n.exports = {
        BaseScene: o,
        LoadingScene: f
    }
}),
define("cqwrap/buttons", ["require", "exports", "module", "cqwrap/nodes", "cqwrap/sprites", "cqwrap/events"],
function(e, t, n) {
    var r = e("cqwrap/nodes").BaseNode,
    i = e("cqwrap/sprites").BaseSprite,
    s = e("cqwrap/events").EventEmitter,
    o = r.extend({
        init: function(e, t, n) {
            function u() {
                e.setAnchorPoint(cc.p(0, 0)),
                e.setPosition(cc.p(0, 0)),
                o.addChild(e),
                o.setContentSize(e.getContentSize())
            }
            this._super();
            var r;
            typeof t == "function" && (n = t, t = "click"),
            typeof e == "string" && (e = new i(e)),
            typeof e == "object" && !(e instanceof cc.Sprite) && (r = e, e = cc.createSprite(r.texture), delete r.texture),
            cc.mixin(this, new s),
            this.on("touchstart",
            function() {
                e.setScaleY(.9),
                e.setOpacity(e.getOpacity() * .8)
            }),
            this.on("touchend",
            function() {
                var t = e.getScaleY();
                Math.abs(t - .9) < .01 && (e.setScaleY(1), e.setOpacity(e.getOpacity() / .8))
            }),
            n && this.on("click", n);
            var o = this;
            u(),
            r && this.setStyle(r),
            this.setContentSprite = function(t) {
                e.removeFromParent(!0),
                e = t,
                u()
            },
            this.getContentSprite = function() {
                return e
            }
        }
    });
    n.exports = {
        Button: o
    }
}),
define("cqwrap/transitions", ["require", "exports", "module", "cqwrap/sprites"],
function(e, t, n) {
    var r = e("cqwrap/sprites").BaseSprite,
    i = {
        create: function(e, t, n) {
            if (t instanceof r) {
                n = n || 255,
                t.setOpacity(0);
                var i = cc.FadeTo.create(e, n);
                return t.runAction(i),
                t
            }
            return new cc.TransitionFade(e, t, n)
        }
    };
    n.exports = {
        TransitionFade: i
    }
}),
define("cqwrap/physics", ["require", "exports", "module", "cqwrap/sprites", "cqwrap/layers"],
function(e, t, n) {
    if (typeof cp == "undefined") {
        cc.log("chipmunk not available!");
        return
    }
    var r = e("cqwrap/sprites").BaseSprite,
    i = e("cqwrap/layers").GameLayer;
    cc.RADIANS_TO_DEGREES || (cc.RADIANS_TO_DEGREES = function(e) {
        return e * 180 / Math.PI
    }),
    cc.DEGREES_TO_RADIANS || (cc.DEGREES_TO_RADIANS = function(e) {
        return e * Math.PI / 180
    });
    var s = new cp.Space;
    s.iterations = 5,
    s.gravity = cp.v(0, -750);
    var o = r.extend({
        init: function(e, t, n, r, i) {
            this._super(e),
            n = n || 5;
            var o = s.addBody(new cp.Body(n, cp.momentForBox(n, this.getContentSize().width, this.getContentSize().height)));
            o.setPos(cp.v(t.x, t.y));
            var u = s.addShape(new cp.BoxShape(o, this.getContentSize().width, this.getContentSize().height));
            u.setElasticity(r || .2),
            u.setFriction(i || .8),
            this.body = o,
            this.shape = u,
            this.scheduleUpdate()
        },
        update: function(e) {
            cc.Assert(this.body, "no body?");
            var t = this.body.p;
            this.setPosition(t.x, t.y),
            this.setRotation(cc.RADIANS_TO_DEGREES( - 1 * this.body.a)),
            this._super(e)
        }
    }),
    u = i.extend({
        init: function() {
            this._super(),
            this.scheduleUpdate()
        },
        update: function(e) {
            s.step(e)
        }
    });
    n.exports = {
        CPSprite: o,
        CPLayer: u,
        Space: s
    }
}),
define("cqwrap/index.js", ["require", "exports", "module", "cqwrap/base", "cqwrap/events", "cqwrap/when", "cqwrap/native", "cqwrap/md5", "cqwrap/data", "cqwrap/style", "cqwrap/nodes", "cqwrap/tiles.js", "cqwrap/sprites", "cqwrap/animate", "cqwrap/labels", "cqwrap/scenes", "cqwrap/layers", "cqwrap/buttons", "cqwrap/transitions", "cqwrap/physics"],
function(e, t, n) {
    e("cqwrap/base"),
    e("cqwrap/events"),
    e("cqwrap/when"),
    e("cqwrap/native"),
    global.md5 || e("cqwrap/md5"),
    e("cqwrap/data"),
    e("cqwrap/style"),
    e("cqwrap/nodes"),
    e("cqwrap/tiles.js"),
    e("cqwrap/sprites"),
    e("cqwrap/animate"),
    e("cqwrap/labels"),
    e("cqwrap/scenes"),
    e("cqwrap/layers"),
    e("cqwrap/buttons"),
    e("cqwrap/transitions"),
    cc.PhysicsDebugNode && typeof cp != "undefined" && e("cqwrap/physics")
});
var g_resources = [{
    src: "assets/res/flappy_packer.png"
},
{
    src: "assets/res/flappy_packer_2.png"
},
{
    src: "assets/res/bg.png"
},
{
    src: "assets/res/ground.png"
},
{
    src: "assets/res/flappy_packer.plist"
},
{
    src: "assets/res/flappy_packer_2.plist"
}];
define("src/resource.js",
function() {}),
define("src/view/play_scene.js", ["require", "exports", "module", "cqwrap/layers", "cqwrap/scenes", "cqwrap/buttons", "cqwrap/data", "cqwrap/native"],
function(e, t, n) {
    var r = e("cqwrap/layers"),
    i = e("cqwrap/scenes").BaseScene,
    s = r.GameLayer,
    o = r.BgLayer,
    u = e("cqwrap/buttons").Button,
    a = e("cqwrap/data").UserData,
    f = e("cqwrap/native"),
    l = s.extend({
        init: function() {
            function u(e, t) {
                var n, r = o.speed;
                Math.random() < o.greyBird ? (n = cc.createSprite("birddie.png", {
                    anchor: [.5, 0],
                    xy: [e, t],
                    zOrder: 3,
                    scale: 2.5
                }), r += 75, n.grey = !0) : Math.random() < o.goldBird ? (n = cc.createSprite("birdy.png", {
                    anchor: [.5, 0],
                    xy: [e, t],
                    zOrder: 2,
                    scale: 2.5
                }), r += 75, n.gold = !0) : (n = cc.createSprite("bird1.png", {
                    anchor: [.5, 0],
                    xy: [e, t],
                    zOrder: 1,
                    flipX: !0
                }), r += Math.random() * 50 | 0, n.animate(.6, "bird1.png", "bird2.png", "bird3.png").repeat().act());
                var i = e + 500;
                n.moveBy(i / r, cc.p( - i, 0)).then(function() {
                    n.stopAllActions();
                    var e = o.birds.indexOf(n);
                    o.birds.splice(e, 1),
                    n.removeFromParent(!0)
                }).act(),
                o.birds.push(n),
                o.addChild(n)
            }
            this._super(),
            WeixinApi.ready(function(e) {
                e.hideOptionMenu()
            }),
            this.score = 0,
            this.level = 5,
            this.speed = 200,
            this.greyBird = .05,
            this.goldBird = .05;
            var e = cc.createSprite("assets/res/ground.png", {
                anchor: [0, 0],
                xy: [0, 0],
                zOrder: 3
            });
            e.moveBy(100 / this.speed, cc.p( - 120, 0)).moveBy(0, cc.p(120, 0)).repeatAll().act(),
            this.addChild(e);
            var t = cc.createSprite("getready.png", {
                anchor: [.5, 0],
                xy: [360, 780]
            });
            this.addChild(t);
            var n = cc.createSprite("@小心灰鸟", {
                anchor: [.5, 0],
                xy: [360, 680],
                fontSize: 42
            });
            n.fadeOut(1).fadeIn(1).delay(1.5).repeatAll().act(),
            this.addChild(n);
            var r = cc.createSprite("click.png", {
                anchor: [.5, 0],
                xy: [360, 420]
            });
            this.addChild(r);
            var i = cc.createSprite("@0", {
                anchor: [.5, 0],
                xy: [360, 1e3],
                fontSize: 64,
                zOrder: 10
            });
            this.addChild(i),
            this.scoreSprite = i;
            var s = cc.createSprite("tube.png", {
                anchor: [.5, 0],
                xy: [200, 630],
                zOrder: 2,
                scale: 3
            });
            s.moveBy(.3, cc.p(0, -20)).reverse().repeatAll().act(),
            this.addChild(s),
            this.tube = s,
            this.delegate(this),
            this.status = "ready";
            var o = this;
            o.birds = [],
            this.setInterval(function() {
                this.level < 50 && (this.level += 5),
                this.speed < 1e3 && (this.speed += 25, e.stopAllActions(), e.setPosition(cc.p(0, 0)), e.moveBy(100 / this.speed, cc.p( - 120, 0)).moveBy(0, cc.p(120, 0)).repeatAll().act()),
                this.greyBird < .3 && (this.greyBird += .05)
            },
            15e3),
            this.on("touchstart",
            function() {
                o.status == "ready" && (o.setInterval(function() {
                    var e = Math.random() * o.level | 0;
                    for (var t = 0; t < e; t++) {
                        var n = Math.random() * 500,
                        r = Math.random() * 800 + 380; (function(e, t) {
                            o.setTimeout(function() {
                                u(1200 + e, t)
                            },
                            0)
                        })(n, r)
                    }
                },
                1500), t.fadeOut(.5).act(), r.fadeOut(.5).act(), n.stopAllActions(), n.fadeOut(.5).act(), f.call("hideAd"), o.status = "playing");
                if (o.status == "playing") {
                    var i = s.getPositionX(),
                    l = s.getPositionY(),
                    c = l / 1e3;
                    s.stopAllActions();
                    var h = Math.min(1280 - l, 120);
                    s.moveBy(.2, cc.p(0, h), cc.EaseOut, 2).act(),
                    s.rotateTo(.2, 0).act(),
                    s.delay(.2).moveTo(c, cc.p(i, 316), cc.EaseIn, 2).then(function() {
                        o.status == "playing" && (e.stopAllActions(), a.fadeIn(.1).fadeOut(.1).act()),
                        s.stopAllActions(),
                        o.status = "gameover",
                        o.setTimeout(function() {
                            o.onGameOver()
                        },
                        200)
                    }).act(),
                    s.delay(.5).rotateTo(c - .3, 90, 90, cc.EaseIn, 2).act()
                }
            });
            var a = cc.LayerColor.create(cc.color("rgba(255,255,255,255)"));
            return a.setStyle({
                zOrder: 88,
                opacity: 0
            }),
            this.addChild(a),
            this.layerMask = a,
            this.scheduleUpdate(),
            !0
        },
        update: function() {
            var e = this,
            t = this.tube;
            if (e.status == "playing") {
                var n = t.getBoundingBox(),
                r = cc.p(n.x + n.width / 2, n.y),
                i = cc.p(n.x + n.width, n.y + n.height / 2),
                s = cc.p(n.x, n.y + n.height / 2),
                o = cc.p(n.x + n.width / 2, n.y + n.height);
                e.birds.some(function(t) {
                    if (!t.killed) {
                        var n = t.getBoundingBox();
                        t.getPositionX() > 0 && t.getPositionX() < 720 && (cc.rectContainsPoint(n, s) || cc.rectContainsPoint(n, i) || cc.rectContainsPoint(n, o) || cc.rectContainsPoint(n, r)) && e.killBird(t)
                    }
                })
            }
        },
        backClicked: function() {},
        killBird: function(e) {
            var t = this;
            e.gold ? (this.layerMask.fadeIn(.1).fadeOut(.1).act(), this.birds.forEach(function(e) { ! e.gold && !e.grey && !e.killed && e.getPositionX() > 0 && e.getPositionX() < 720 && t.killBird(e),
                !e.killed && (e.gold || e.grey) && e.getPositionX() > 0 && e.getPositionX() < 720 && (e.stopAllActions(), e.removeFromParent(!0), e.killed = !0)
            })) : e.grey ? (this.status = "falling", e.fadeOut(.05).fadeIn(.05).repeat(3).act()) : (e.stopAllActions(), e.animate(.6, "blood0.png", "blood1.png", "blood2.png").delay(1.5).animate(3, "blood3.png", "blood4.png", "blood5.png").delay(.5).then(function() {
                e.removeFromParent(!0)
            }).act(), e.delay(.1).scaleTo(.1, 2).act(), this.addScore()),
            e.killed = !0
        },
        addScore: function() {
            this.scoreSprite.setString(++this.score)
        },
        onGameOver: function() {
            cc.log("gameover"),
           // f.call("showAd"),
            this.scoreSprite.fadeOut(.1).moveTo(.6, cc.p(550, 665)).fadeIn(.1).act();
            var e = a.get("best", 0);
            this.score > e && (e = this.score, a.set("best", e));
            var e = cc.createSprite("@" + e, {
                anchor: [.5, 0],
                xy: [550, 555],
                fontSize: 64,
                zOrder: 10,
                opacity: 0
            });
            e.delay(.7).fadeIn(.1).act(),
            this.addChild(e);
            var t = cc.createSprite("gameover.png", {
                anchor: [.5, 0],
                xy: [360, 850],
                zOrder: 5
            });
            t.moveBy(.1, cc.p(0, 10)).reverse().act(),
            this.addChild(t);
            var n = cc.createSprite("base.png", {
                anchor: [.5, 0],
                xy: [360, -520],
                zOrder: 5
            });
            n.delay(.5).moveTo(.2, cc.p(360, 520)).act(),
            this.addChild(n);
            var r = !1,
            i = new u({
                texture: "start.png",
                anchor: [0, 0],
                xy: [70, 256],
                zOrder: 5
            },
            function() {
                r && director.replaceScene(cc.TransitionFade.create(.5, new c))
            });
            i.getContentSprite().setOpacity(0),
            i.getContentSprite().delay(.8).then(function() {
                r = !0
            }).fadeIn(.1).act(),
            this.addChild(i);
            var s = new u({
                texture: "grade.png",
                anchor: [0, 0],
                xy: [370, 256],
                zOrder: 5
            },
            function() {});
            s.getContentSprite().setOpacity(0),
            s.getContentSprite().delay(.8).fadeIn(.1).act();
            if (this.score >= 100) {
                var o = this;
                this.setTimeout(function() {
                    var e = o.score >= 200 ? "gold.png": "silver.png",
                    t = cc.createSprite(e, {
                        anchor: [.5, .5],
                        xy: [191, 651],
                        zOrder: 5
                    });
                    o.addChild(t)
                },
                800)
            }
            this.addChild(s);
			if(this.score > 0)
				{
					document.domain = 'code.dev';
					var str = this.score;
					try{parent.__finishgame(str);}catch(e){}
				}
            var o = this,
            l = cc.LayerColor.create(cc.color("rgba(0,0,0,128)"));
            l.setStyle({
                zOrder: 88,
                opacity: 0
            }),
            this.addChild(l),
          //  l.delay(1.5).then(function() {
              //  l.setStyle("opacity", 128);
               // var e = cc.createSprite("./share.png", {
                  //  anchor: [1, 1],
                  //  xy: [720, 1280],
                  //  opacity: 0
              //  });
               // l.addChild(e),
               // e.fadeIn(.5).act()
           // }).act(),
		   	//alert(this.score);
		
            WeixinApi.ready(function(e) {
                e.showOptionMenu();
                var t = {
                    appId: "",
                    imgUrl: "http://h.4399.com/cms/cms10/20141107/115352_8403.jpg",
                    link: window.location.href,
                    desc: "让你飞呀，让你飞呀，会跳舞的水管一共干掉了" + o.score + "只小鸟，这下世界清净了~~",
                    title: "水管逆袭成功！-7K7K手机小游戏"
                },
                n = {
                    ready: function() {},
                    cancel: function(e) {},
                    fail: function(e) {},
                    confirm: function(e) {},
                    all: function(e) {
                        l.removeFromParent(!0),
                        window.location && (window.location.href = "")
                    }
                };
                e.shareToFriend(t, n),
                e.shareToTimeline(t, n),
                e.shareToWeibo(t, n)
            })
        }
    }),
    c = i.extend({
        init: function() {
            this._super();
            var e = new o("assets/res/bg.png");
            this.addChild(e);
            var t = new l;
            this.addChild(t)
        }
    });
    n.exports = c
}),
require(["cqwrap/index.js", "src/resource.js", "src/view/play_scene.js"],
function(e, e, t) {
    var n = cc.Application.extend({
        config: document.ccConfig,
        ctor: function(e) {
            this._super(),
            this.startScene = e,
            cc.COCOS2D_DEBUG = this.config.COCOS2D_DEBUG,
            cc.initDebugSetting(),
            cc.setup(this.config.tag),
            cc.AppController.shareAppController().didFinishLaunchingWithOptions()
        },
        applicationDidFinishLaunching: function() {
            if (cc.RenderDoesnotSupport()) return alert("Browser doesn't support WebGL"),
            !1;
            var e = cc.Director.getInstance();
            return cc.EGLView.getInstance().resizeWithBrowserSize(!0),
            cc.EGLView.getInstance().setDesignResolutionSize(720, 1280, cc.RESOLUTION_POLICY.SHOW_ALL),
            e.setDisplayStats(this.config.showFPS),
            e.setAnimationInterval(1 / this.config.frameRate),
            cc.LoaderScene.preload(g_resources,
            function() {
                var t = cc.SpriteFrameCache.getInstance();
                t.addSpriteFrames("assets/res/flappy_packer.plist", "assets/res/flappy_packer.png"),
                t.addSpriteFrames("assets/res/flappy_packer_2.plist", "assets/res/flappy_packer_2.png"),
                e.replaceScene(new this.startScene)
            },
            this),
            !0
        }
    }),
    r = new n(t)
}),
define("main-src",
function() {});