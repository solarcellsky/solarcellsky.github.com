! function(a, b) {
    b.site = a,
        function c(a, b, d) {
            function e(g, h) {
                if (!b[g]) {
                    if (!a[g]) {
                        var i = "function" == typeof require && require;
                        if (!h && i) return i(g, !0);
                        if (f) return f(g, !0);
                        var j = new Error("Cannot find module '" + g + "'");
                        throw j.code = "MODULE_NOT_FOUND", j
                    }
                    var k = b[g] = {
                        exports: {}
                    };
                    a[g][0].call(k.exports, function(b) {
                        var c = a[g][1][b];
                        return e(c ? c : b)
                    }, k, k.exports, c, a, b, d)
                }
                return b[g].exports
            }
            for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
            return e
        }({
            1: [function(a, b) {
                ! function(a, c) {
                    "use strict";

                    function d() {
                        e.READY || (t.determineEventTypes(), s.each(e.gestures, function(a) {
                            v.register(a)
                        }), t.onTouch(e.DOCUMENT, o, v.detect), t.onTouch(e.DOCUMENT, p, v.detect), e.READY = !0)
                    }
                    var e = function w(a, b) {
                        return new w.Instance(a, b || {})
                    };
                    e.VERSION = "1.1.3", e.defaults = {
                        behavior: {
                            userSelect: "none",
                            touchAction: "pan-y",
                            touchCallout: "none",
                            contentZooming: "none",
                            userDrag: "none",
                            tapHighlightColor: "rgba(0,0,0,0)"
                        }
                    }, e.DOCUMENT = document, e.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, e.HAS_TOUCHEVENTS = "ontouchstart" in a, e.IS_MOBILE = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent), e.NO_MOUSEEVENTS = e.HAS_TOUCHEVENTS && e.IS_MOBILE || e.HAS_POINTEREVENTS, e.CALCULATE_INTERVAL = 25;
                    var f = {},
                        g = e.DIRECTION_DOWN = "down",
                        h = e.DIRECTION_LEFT = "left",
                        i = e.DIRECTION_UP = "up",
                        j = e.DIRECTION_RIGHT = "right",
                        k = e.POINTER_MOUSE = "mouse",
                        l = e.POINTER_TOUCH = "touch",
                        m = e.POINTER_PEN = "pen",
                        n = e.EVENT_START = "start",
                        o = e.EVENT_MOVE = "move",
                        p = e.EVENT_END = "end",
                        q = e.EVENT_RELEASE = "release",
                        r = e.EVENT_TOUCH = "touch";
                    e.READY = !1, e.plugins = e.plugins || {}, e.gestures = e.gestures || {};
                    var s = e.utils = {
                            extend: function(a, b, d) {
                                for (var e in b) !b.hasOwnProperty(e) || a[e] !== c && d || (a[e] = b[e]);
                                return a
                            },
                            on: function(a, b, c) {
                                a.addEventListener(b, c, !1)
                            },
                            off: function(a, b, c) {
                                a.removeEventListener(b, c, !1)
                            },
                            each: function(a, b, d) {
                                var e, f;
                                if ("forEach" in a) a.forEach(b, d);
                                else if (a.length !== c) {
                                    for (e = 0, f = a.length; f > e; e++)
                                        if (b.call(d, a[e], e, a) === !1) return
                                } else
                                    for (e in a)
                                        if (a.hasOwnProperty(e) && b.call(d, a[e], e, a) === !1) return
                            },
                            inStr: function(a, b) {
                                return a.indexOf(b) > -1
                            },
                            inArray: function(a, b) {
                                if (a.indexOf) {
                                    var c = a.indexOf(b);
                                    return -1 === c ? !1 : c
                                }
                                for (var d = 0, e = a.length; e > d; d++)
                                    if (a[d] === b) return d;
                                return !1
                            },
                            toArray: function(a) {
                                return Array.prototype.slice.call(a, 0)
                            },
                            hasParent: function(a, b) {
                                for (; a;) {
                                    if (a == b) return !0;
                                    a = a.parentNode
                                }
                                return !1
                            },
                            getCenter: function(a) {
                                var b = [],
                                    c = [],
                                    d = [],
                                    e = [],
                                    f = Math.min,
                                    g = Math.max;
                                return 1 === a.length ? {
                                    pageX: a[0].pageX,
                                    pageY: a[0].pageY,
                                    clientX: a[0].clientX,
                                    clientY: a[0].clientY
                                } : (s.each(a, function(a) {
                                    b.push(a.pageX), c.push(a.pageY), d.push(a.clientX), e.push(a.clientY)
                                }), {
                                    pageX: (f.apply(Math, b) + g.apply(Math, b)) / 2,
                                    pageY: (f.apply(Math, c) + g.apply(Math, c)) / 2,
                                    clientX: (f.apply(Math, d) + g.apply(Math, d)) / 2,
                                    clientY: (f.apply(Math, e) + g.apply(Math, e)) / 2
                                })
                            },
                            getVelocity: function(a, b, c) {
                                return {
                                    x: Math.abs(b / a) || 0,
                                    y: Math.abs(c / a) || 0
                                }
                            },
                            getAngle: function(a, b) {
                                var c = b.clientX - a.clientX,
                                    d = b.clientY - a.clientY;
                                return 180 * Math.atan2(d, c) / Math.PI
                            },
                            getDirection: function(a, b) {
                                var c = Math.abs(a.clientX - b.clientX),
                                    d = Math.abs(a.clientY - b.clientY);
                                return c >= d ? a.clientX - b.clientX > 0 ? h : j : a.clientY - b.clientY > 0 ? i : g
                            },
                            getDistance: function(a, b) {
                                var c = b.clientX - a.clientX,
                                    d = b.clientY - a.clientY;
                                return Math.sqrt(c * c + d * d)
                            },
                            getScale: function(a, b) {
                                return a.length >= 2 && b.length >= 2 ? this.getDistance(b[0], b[1]) / this.getDistance(a[0], a[1]) : 1
                            },
                            getRotation: function(a, b) {
                                return a.length >= 2 && b.length >= 2 ? this.getAngle(b[1], b[0]) - this.getAngle(a[1], a[0]) : 0
                            },
                            isVertical: function(a) {
                                return a == i || a == g
                            },
                            setPrefixedCss: function(a, b, c, d) {
                                var e = ["", "Webkit", "Moz", "O", "ms"];
                                b = s.toCamelCase(b);
                                for (var f = 0; f < e.length; f++) {
                                    var g = b;
                                    if (e[f] && (g = e[f] + g.slice(0, 1).toUpperCase() + g.slice(1)), g in a.style) {
                                        a.style[g] = (null == d || d) && c || "";
                                        break
                                    }
                                }
                            },
                            toggleBehavior: function(a, b, c) {
                                if (b && a && a.style) {
                                    s.each(b, function(b, d) {
                                        s.setPrefixedCss(a, d, b, c)
                                    });
                                    var d = c && function() {
                                        return !1
                                    };
                                    "none" == b.userSelect && (a.onselectstart = d), "none" == b.userDrag && (a.ondragstart = d)
                                }
                            },
                            toCamelCase: function(a) {
                                return a.replace(/[_-]([a-z])/g, function(a) {
                                    return a[1].toUpperCase()
                                })
                            }
                        },
                        t = e.event = {
                            preventMouseEvents: !1,
                            started: !1,
                            shouldDetect: !1,
                            on: function(a, b, c, d) {
                                var e = b.split(" ");
                                s.each(e, function(b) {
                                    s.on(a, b, c), d && d(b)
                                })
                            },
                            off: function(a, b, c, d) {
                                var e = b.split(" ");
                                s.each(e, function(b) {
                                    s.off(a, b, c), d && d(b)
                                })
                            },
                            onTouch: function(a, b, c) {
                                var d = this,
                                    g = function(f) {
                                        var g, h = f.type.toLowerCase(),
                                            i = e.HAS_POINTEREVENTS,
                                            j = s.inStr(h, "mouse");
                                        j && d.preventMouseEvents || (j && b == n && 0 === f.button ? (d.preventMouseEvents = !1, d.shouldDetect = !0) : i && b == n ? d.shouldDetect = 1 === f.buttons || u.matchType(l, f) : j || b != n || (d.preventMouseEvents = !0, d.shouldDetect = !0), i && b != p && u.updatePointer(b, f), d.shouldDetect && (g = d.doDetect.call(d, f, b, a, c)), g == p && (d.preventMouseEvents = !1, d.shouldDetect = !1, u.reset()), i && b == p && u.updatePointer(b, f))
                                    };
                                return this.on(a, f[b], g), g
                            },
                            doDetect: function(a, b, c, d) {
                                var e = this.getTouchList(a, b),
                                    f = e.length,
                                    g = b,
                                    h = e.trigger,
                                    i = f;
                                b == n ? h = r : b == p && (h = q, i = e.length - (a.changedTouches ? a.changedTouches.length : 1)), i > 0 && this.started && (g = o), this.started = !0;
                                var j = this.collectEventData(c, g, e, a);
                                return b != p && d.call(v, j), h && (j.changedLength = i, j.eventType = h, d.call(v, j), j.eventType = g, delete j.changedLength), g == p && (d.call(v, j), this.started = !1), g
                            },
                            determineEventTypes: function() {
                                var b;
                                return b = e.HAS_POINTEREVENTS ? a.PointerEvent ? ["pointerdown", "pointermove", "pointerup pointercancel lostpointercapture"] : ["MSPointerDown", "MSPointerMove", "MSPointerUp MSPointerCancel MSLostPointerCapture"] : e.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], f[n] = b[0], f[o] = b[1], f[p] = b[2], f
                            },
                            getTouchList: function(a, b) {
                                if (e.HAS_POINTEREVENTS) return u.getTouchList();
                                if (a.touches) {
                                    if (b == o) return a.touches;
                                    var c = [],
                                        d = [].concat(s.toArray(a.touches), s.toArray(a.changedTouches)),
                                        f = [];
                                    return s.each(d, function(a) {
                                        s.inArray(c, a.identifier) === !1 && f.push(a), c.push(a.identifier)
                                    }), f
                                }
                                return a.identifier = 1, [a]
                            },
                            collectEventData: function(a, b, c, d) {
                                var e = l;
                                return s.inStr(d.type, "mouse") || u.matchType(k, d) ? e = k : u.matchType(m, d) && (e = m), {
                                    center: s.getCenter(c),
                                    timeStamp: Date.now(),
                                    target: d.target,
                                    touches: c,
                                    eventType: b,
                                    pointerType: e,
                                    srcEvent: d,
                                    preventDefault: function() {
                                        var a = this.srcEvent;
                                        a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault()
                                    },
                                    stopPropagation: function() {
                                        this.srcEvent.stopPropagation()
                                    },
                                    stopDetect: function() {
                                        return v.stopDetect()
                                    }
                                }
                            }
                        },
                        u = e.PointerEvent = {
                            pointers: {},
                            getTouchList: function() {
                                var a = [];
                                return s.each(this.pointers, function(b) {
                                    a.push(b)
                                }), a
                            },
                            updatePointer: function(a, b) {
                                a == p || a != p && 1 !== b.buttons ? delete this.pointers[b.pointerId] : (b.identifier = b.pointerId, this.pointers[b.pointerId] = b)
                            },
                            matchType: function(a, b) {
                                if (!b.pointerType) return !1;
                                var c = b.pointerType,
                                    d = {};
                                return d[k] = c === (b.MSPOINTER_TYPE_MOUSE || k), d[l] = c === (b.MSPOINTER_TYPE_TOUCH || l), d[m] = c === (b.MSPOINTER_TYPE_PEN || m), d[a]
                            },
                            reset: function() {
                                this.pointers = {}
                            }
                        },
                        v = e.detection = {
                            gestures: [],
                            current: null,
                            previous: null,
                            stopped: !1,
                            startDetect: function(a, b) {
                                this.current || (this.stopped = !1, this.current = {
                                    inst: a,
                                    startEvent: s.extend({}, b),
                                    lastEvent: !1,
                                    lastCalcEvent: !1,
                                    futureCalcEvent: !1,
                                    lastCalcData: {},
                                    name: ""
                                }, this.detect(b))
                            },
                            detect: function(a) {
                                if (this.current && !this.stopped) {
                                    a = this.extendEventData(a);
                                    var b = this.current.inst,
                                        c = b.options;
                                    return s.each(this.gestures, function(d) {
                                        !this.stopped && b.enabled && c[d.name] && d.handler.call(d, a, b)
                                    }, this), this.current && (this.current.lastEvent = a), a.eventType == p && this.stopDetect(), a
                                }
                            },
                            stopDetect: function() {
                                this.previous = s.extend({}, this.current), this.current = null, this.stopped = !0
                            },
                            getCalculatedData: function(a, b, c, d, f) {
                                var g = this.current,
                                    h = !1,
                                    i = g.lastCalcEvent,
                                    j = g.lastCalcData;
                                i && a.timeStamp - i.timeStamp > e.CALCULATE_INTERVAL && (b = i.center, c = a.timeStamp - i.timeStamp, d = a.center.clientX - i.center.clientX, f = a.center.clientY - i.center.clientY, h = !0), (a.eventType == r || a.eventType == q) && (g.futureCalcEvent = a), (!g.lastCalcEvent || h) && (j.velocity = s.getVelocity(c, d, f), j.angle = s.getAngle(b, a.center), j.direction = s.getDirection(b, a.center), g.lastCalcEvent = g.futureCalcEvent || a, g.futureCalcEvent = a), a.velocityX = j.velocity.x, a.velocityY = j.velocity.y, a.interimAngle = j.angle, a.interimDirection = j.direction
                            },
                            extendEventData: function(a) {
                                var b = this.current,
                                    c = b.startEvent,
                                    d = b.lastEvent || c;
                                (a.eventType == r || a.eventType == q) && (c.touches = [], s.each(a.touches, function(a) {
                                    c.touches.push({
                                        clientX: a.clientX,
                                        clientY: a.clientY
                                    })
                                }));
                                var e = a.timeStamp - c.timeStamp,
                                    f = a.center.clientX - c.center.clientX,
                                    g = a.center.clientY - c.center.clientY;
                                return this.getCalculatedData(a, d.center, e, f, g), s.extend(a, {
                                    startEvent: c,
                                    deltaTime: e,
                                    deltaX: f,
                                    deltaY: g,
                                    distance: s.getDistance(c.center, a.center),
                                    angle: s.getAngle(c.center, a.center),
                                    direction: s.getDirection(c.center, a.center),
                                    scale: s.getScale(c.touches, a.touches),
                                    rotation: s.getRotation(c.touches, a.touches)
                                }), a
                            },
                            register: function(a) {
                                var b = a.defaults || {};
                                return b[a.name] === c && (b[a.name] = !0), s.extend(e.defaults, b, !0), a.index = a.index || 1e3, this.gestures.push(a), this.gestures.sort(function(a, b) {
                                    return a.index < b.index ? -1 : a.index > b.index ? 1 : 0
                                }), this.gestures
                            }
                        };
                    e.Instance = function(a, b) {
                            var c = this;
                            d(), this.element = a, this.enabled = !0, s.each(b, function(a, c) {
                                delete b[c], b[s.toCamelCase(c)] = a
                            }), this.options = s.extend(s.extend({}, e.defaults), b || {}), this.options.behavior && s.toggleBehavior(this.element, this.options.behavior, !0), this.eventStartHandler = t.onTouch(a, n, function(a) {
                                c.enabled && a.eventType == n ? v.startDetect(c, a) : a.eventType == r && v.detect(a)
                            }), this.eventHandlers = []
                        }, e.Instance.prototype = {
                            on: function(a, b) {
                                var c = this;
                                return t.on(c.element, a, b, function(a) {
                                    c.eventHandlers.push({
                                        gesture: a,
                                        handler: b
                                    })
                                }), c
                            },
                            off: function(a, b) {
                                var c = this;
                                return t.off(c.element, a, b, function(a) {
                                    var d = s.inArray({
                                        gesture: a,
                                        handler: b
                                    });
                                    d !== !1 && c.eventHandlers.splice(d, 1)
                                }), c
                            },
                            trigger: function(a, b) {
                                b || (b = {});
                                var c = e.DOCUMENT.createEvent("Event");
                                c.initEvent(a, !0, !0), c.gesture = b;
                                var d = this.element;
                                return s.hasParent(b.target, d) && (d = b.target), d.dispatchEvent(c), this
                            },
                            enable: function(a) {
                                return this.enabled = a, this
                            },
                            dispose: function() {
                                var a, b;
                                for (s.toggleBehavior(this.element, this.options.behavior, !1), a = -1; b = this.eventHandlers[++a];) s.off(this.element, b.gesture, b.handler);
                                return this.eventHandlers = [], t.off(this.element, f[n], this.eventStartHandler), null
                            }
                        },
                        function(a) {
                            function b(b, d) {
                                var e = v.current;
                                if (!(d.options.dragMaxTouches > 0 && b.touches.length > d.options.dragMaxTouches)) switch (b.eventType) {
                                    case n:
                                        c = !1;
                                        break;
                                    case o:
                                        if (b.distance < d.options.dragMinDistance && e.name != a) return;
                                        var f = e.startEvent.center;
                                        if (e.name != a && (e.name = a, d.options.dragDistanceCorrection && b.distance > 0)) {
                                            var k = Math.abs(d.options.dragMinDistance / b.distance);
                                            f.pageX += b.deltaX * k, f.pageY += b.deltaY * k, f.clientX += b.deltaX * k, f.clientY += b.deltaY * k, b = v.extendEventData(b)
                                        }(e.lastEvent.dragLockToAxis || d.options.dragLockToAxis && d.options.dragLockMinDistance <= b.distance) && (b.dragLockToAxis = !0);
                                        var l = e.lastEvent.direction;
                                        b.dragLockToAxis && l !== b.direction && (b.direction = s.isVertical(l) ? b.deltaY < 0 ? i : g : b.deltaX < 0 ? h : j), c || (d.trigger(a + "start", b), c = !0), d.trigger(a, b), d.trigger(a + b.direction, b);
                                        var m = s.isVertical(b.direction);
                                        (d.options.dragBlockVertical && m || d.options.dragBlockHorizontal && !m) && b.preventDefault();
                                        break;
                                    case q:
                                        c && b.changedLength <= d.options.dragMaxTouches && (d.trigger(a + "end", b), c = !1);
                                        break;
                                    case p:
                                        c = !1
                                }
                            }
                            var c = !1;
                            e.gestures.Drag = {
                                name: a,
                                index: 50,
                                handler: b,
                                defaults: {
                                    dragMinDistance: 10,
                                    dragDistanceCorrection: !0,
                                    dragMaxTouches: 1,
                                    dragBlockHorizontal: !1,
                                    dragBlockVertical: !1,
                                    dragLockToAxis: !1,
                                    dragLockMinDistance: 25
                                }
                            }
                        }("drag"), e.gestures.Gesture = {
                            name: "gesture",
                            index: 1337,
                            handler: function(a, b) {
                                b.trigger(this.name, a)
                            }
                        },
                        function(a) {
                            function b(b, d) {
                                var e = d.options,
                                    f = v.current;
                                switch (b.eventType) {
                                    case n:
                                        clearTimeout(c), f.name = a, c = setTimeout(function() {
                                            f && f.name == a && d.trigger(a, b)
                                        }, e.holdTimeout);
                                        break;
                                    case o:
                                        b.distance > e.holdThreshold && clearTimeout(c);
                                        break;
                                    case q:
                                        clearTimeout(c)
                                }
                            }
                            var c;
                            e.gestures.Hold = {
                                name: a,
                                index: 10,
                                defaults: {
                                    holdTimeout: 500,
                                    holdThreshold: 2
                                },
                                handler: b
                            }
                        }("hold"), e.gestures.Release = {
                            name: "release",
                            index: 1 / 0,
                            handler: function(a, b) {
                                a.eventType == q && b.trigger(this.name, a)
                            }
                        }, e.gestures.Swipe = {
                            name: "swipe",
                            index: 40,
                            defaults: {
                                swipeMinTouches: 1,
                                swipeMaxTouches: 1,
                                swipeVelocityX: .6,
                                swipeVelocityY: .6
                            },
                            handler: function(a, b) {
                                if (a.eventType == q) {
                                    var c = a.touches.length,
                                        d = b.options;
                                    if (c < d.swipeMinTouches || c > d.swipeMaxTouches) return;
                                    (a.velocityX > d.swipeVelocityX || a.velocityY > d.swipeVelocityY) && (b.trigger(this.name, a), b.trigger(this.name + a.direction, a))
                                }
                            }
                        },
                        function(a) {
                            function b(b, d) {
                                var e, f, g = d.options,
                                    h = v.current,
                                    i = v.previous;
                                switch (b.eventType) {
                                    case n:
                                        c = !1;
                                        break;
                                    case o:
                                        c = c || b.distance > g.tapMaxDistance;
                                        break;
                                    case p:
                                        !s.inStr(b.srcEvent.type, "cancel") && b.deltaTime < g.tapMaxTime && !c && (e = i && i.lastEvent && b.timeStamp - i.lastEvent.timeStamp, f = !1, i && i.name == a && e && e < g.doubleTapInterval && b.distance < g.doubleTapDistance && (d.trigger("doubletap", b), f = !0), (!f || g.tapAlways) && (h.name = a, d.trigger(h.name, b)))
                                }
                            }
                            var c = !1;
                            e.gestures.Tap = {
                                name: a,
                                index: 100,
                                handler: b,
                                defaults: {
                                    tapMaxTime: 250,
                                    tapMaxDistance: 10,
                                    tapAlways: !0,
                                    doubleTapDistance: 20,
                                    doubleTapInterval: 300
                                }
                            }
                        }("tap"), e.gestures.Touch = {
                            name: "touch",
                            index: -1 / 0,
                            defaults: {
                                preventDefault: !1,
                                preventMouse: !1
                            },
                            handler: function(a, b) {
                                return b.options.preventMouse && a.pointerType == k ? void a.stopDetect() : (b.options.preventDefault && a.preventDefault(), void(a.eventType == r && b.trigger("touch", a)))
                            }
                        },
                        function(a) {
                            function b(b, d) {
                                switch (b.eventType) {
                                    case n:
                                        c = !1;
                                        break;
                                    case o:
                                        if (b.touches.length < 2) return;
                                        var e = Math.abs(1 - b.scale),
                                            f = Math.abs(b.rotation);
                                        if (e < d.options.transformMinScale && f < d.options.transformMinRotation) return;
                                        v.current.name = a, c || (d.trigger(a + "start", b), c = !0), d.trigger(a, b), f > d.options.transformMinRotation && d.trigger("rotate", b), e > d.options.transformMinScale && (d.trigger("pinch", b), d.trigger("pinch" + (b.scale < 1 ? "in" : "out"), b));
                                        break;
                                    case q:
                                        c && b.changedLength < 2 && (d.trigger(a + "end", b), c = !1)
                                }
                            }
                            var c = !1;
                            e.gestures.Transform = {
                                name: a,
                                index: 45,
                                defaults: {
                                    transformMinScale: .01,
                                    transformMinRotation: 1
                                },
                                handler: b
                            }
                        }("transform"), "function" == typeof define && define.amd ? define(function() {
                            return e
                        }) : "undefined" != typeof b && b.exports ? b.exports = e : a.Hammer = e
                }(window)
            }, {}],
            2: [function(a, c, d) {
                (function(a) {
                    (function() {
                        function b(a, b, c) {
                            for (var d = (c || 0) - 1, e = a ? a.length : 0; ++d < e;)
                                if (a[d] === b) return d;
                            return -1
                        }

                        function e(a, c) {
                            var d = typeof c;
                            if (a = a.cache, "boolean" == d || null == c) return a[c] ? 0 : -1;
                            "number" != d && "string" != d && (d = "object");
                            var e = "number" == d ? c : u + c;
                            return a = (a = a[d]) && a[e], "object" == d ? a && b(a, c) > -1 ? 0 : -1 : a ? 0 : -1
                        }

                        function f(a) {
                            var b = this.cache,
                                c = typeof a;
                            if ("boolean" == c || null == a) b[a] = !0;
                            else {
                                "number" != c && "string" != c && (c = "object");
                                var d = "number" == c ? a : u + a,
                                    e = b[c] || (b[c] = {});
                                "object" == c ? (e[d] || (e[d] = [])).push(a) : e[d] = !0
                            }
                        }

                        function g(a) {
                            return a.charCodeAt(0)
                        }

                        function h(a, b) {
                            for (var c = a.criteria, d = b.criteria, e = -1, f = c.length; ++e < f;) {
                                var g = c[e],
                                    h = d[e];
                                if (g !== h) {
                                    if (g > h || "undefined" == typeof g) return 1;
                                    if (h > g || "undefined" == typeof h) return -1
                                }
                            }
                            return a.index - b.index
                        }

                        function i(a) {
                            var b = -1,
                                c = a.length,
                                d = a[0],
                                e = a[c / 2 | 0],
                                g = a[c - 1];
                            if (d && "object" == typeof d && e && "object" == typeof e && g && "object" == typeof g) return !1;
                            var h = l();
                            h["false"] = h["null"] = h["true"] = h.undefined = !1;
                            var i = l();
                            for (i.array = a, i.cache = h, i.push = f; ++b < c;) i.push(a[b]);
                            return i
                        }

                        function j(a) {
                            return "\\" + Y[a]
                        }

                        function k() {
                            return r.pop() || []
                        }

                        function l() {
                            return s.pop() || {
                                array: null,
                                cache: null,
                                criteria: null,
                                "false": !1,
                                index: 0,
                                "null": !1,
                                number: null,
                                object: null,
                                push: null,
                                string: null,
                                "true": !1,
                                undefined: !1,
                                value: null
                            }
                        }

                        function m(a) {
                            a.length = 0, r.length < w && r.push(a)
                        }

                        function n(a) {
                            var b = a.cache;
                            b && n(b), a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null, s.length < w && s.push(a)
                        }

                        function o(a, b, c) {
                            b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
                            for (var d = -1, e = c - b || 0, f = Array(0 > e ? 0 : e); ++d < e;) f[d] = a[b + d];
                            return f
                        }

                        function p(a) {
                            function c(a) {
                                return a && "object" == typeof a && !Zd(a) && Hd.call(a, "__wrapped__") ? a : new d(a)
                            }

                            function d(a, b) {
                                this.__chain__ = !!b, this.__wrapped__ = a
                            }

                            function f(a) {
                                function b() {
                                    if (d) {
                                        var a = o(d);
                                        Id.apply(a, arguments)
                                    }
                                    if (this instanceof b) {
                                        var f = s(c.prototype),
                                            g = c.apply(f, a || arguments);
                                        return Eb(g) ? g : f
                                    }
                                    return c.apply(e, a || arguments)
                                }
                                var c = a[0],
                                    d = a[2],
                                    e = a[4];
                                return Yd(b, a), b
                            }

                            function r(a, b, c, d, e) {
                                if (c) {
                                    var f = c(a);
                                    if ("undefined" != typeof f) return f
                                }
                                var g = Eb(a);
                                if (!g) return a;
                                var h = Ad.call(a);
                                if (!U[h]) return a;
                                var i = Wd[h];
                                switch (h) {
                                    case N:
                                    case O:
                                        return new i(+a);
                                    case Q:
                                    case T:
                                        return new i(a);
                                    case S:
                                        return f = i(a.source, C.exec(a)), f.lastIndex = a.lastIndex, f
                                }
                                var j = Zd(a);
                                if (b) {
                                    var l = !d;
                                    d || (d = k()), e || (e = k());
                                    for (var n = d.length; n--;)
                                        if (d[n] == a) return e[n];
                                    f = j ? i(a.length) : {}
                                } else f = j ? o(a) : ee({}, a);
                                return j && (Hd.call(a, "index") && (f.index = a.index), Hd.call(a, "input") && (f.input = a.input)), b ? (d.push(a), e.push(f), (j ? Yb : he)(a, function(a, g) {
                                    f[g] = r(a, b, c, d, e)
                                }), l && (m(d), m(e)), f) : f
                            }

                            function s(a) {
                                return Eb(a) ? Nd(a) : {}
                            }

                            function w(a, b, c) {
                                if ("function" != typeof a) return Zc;
                                if ("undefined" == typeof b || !("prototype" in a)) return a;
                                var d = a.__bindData__;
                                if ("undefined" == typeof d && (Xd.funcNames && (d = !a.name), d = d || !Xd.funcDecomp, !d)) {
                                    var e = Fd.call(a);
                                    Xd.funcNames || (d = !D.test(e)), d || (d = H.test(e), Yd(a, d))
                                }
                                if (d === !1 || d !== !0 && 1 & d[1]) return a;
                                switch (c) {
                                    case 1:
                                        return function(c) {
                                            return a.call(b, c)
                                        };
                                    case 2:
                                        return function(c, d) {
                                            return a.call(b, c, d)
                                        };
                                    case 3:
                                        return function(c, d, e) {
                                            return a.call(b, c, d, e)
                                        };
                                    case 4:
                                        return function(c, d, e, f) {
                                            return a.call(b, c, d, e, f)
                                        }
                                }
                                return Ic(a, b)
                            }

                            function Y(a) {
                                function b() {
                                    var a = i ? g : this;
                                    if (e) {
                                        var n = o(e);
                                        Id.apply(n, arguments)
                                    }
                                    if ((f || k) && (n || (n = o(arguments)), f && Id.apply(n, f), k && n.length < h)) return d |= 16, Y([c, l ? d : -4 & d, n, null, g, h]);
                                    if (n || (n = arguments), j && (c = a[m]), this instanceof b) {
                                        a = s(c.prototype);
                                        var p = c.apply(a, n);
                                        return Eb(p) ? p : a
                                    }
                                    return c.apply(a, n)
                                }
                                var c = a[0],
                                    d = a[1],
                                    e = a[2],
                                    f = a[3],
                                    g = a[4],
                                    h = a[5],
                                    i = 1 & d,
                                    j = 2 & d,
                                    k = 4 & d,
                                    l = 8 & d,
                                    m = c;
                                return Yd(b, a), b
                            }

                            function $(a, c) {
                                var d = -1,
                                    f = ib(),
                                    g = a ? a.length : 0,
                                    h = g >= v && f === b,
                                    j = [];
                                if (h) {
                                    var k = i(c);
                                    k ? (f = e, c = k) : h = !1
                                }
                                for (; ++d < g;) {
                                    var l = a[d];
                                    f(c, l) < 0 && j.push(l)
                                }
                                return h && n(c), j
                            }

                            function _(a, b, c, d) {
                                for (var e = (d || 0) - 1, f = a ? a.length : 0, g = []; ++e < f;) {
                                    var h = a[e];
                                    if (h && "object" == typeof h && "number" == typeof h.length && (Zd(h) || mb(h))) {
                                        b || (h = _(h, b, c));
                                        var i = -1,
                                            j = h.length,
                                            k = g.length;
                                        for (g.length += j; ++i < j;) g[k++] = h[i]
                                    } else c || g.push(h)
                                }
                                return g
                            }

                            function ab(a, b, c, d, e, f) {
                                if (c) {
                                    var g = c(a, b);
                                    if ("undefined" != typeof g) return !!g
                                }
                                if (a === b) return 0 !== a || 1 / a == 1 / b;
                                var h = typeof a,
                                    i = typeof b;
                                if (!(a !== a || a && X[h] || b && X[i])) return !1;
                                if (null == a || null == b) return a === b;
                                var j = Ad.call(a),
                                    l = Ad.call(b);
                                if (j == L && (j = R), l == L && (l = R), j != l) return !1;
                                switch (j) {
                                    case N:
                                    case O:
                                        return +a == +b;
                                    case Q:
                                        return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                                    case S:
                                    case T:
                                        return a == vd(b)
                                }
                                var n = j == M;
                                if (!n) {
                                    var o = Hd.call(a, "__wrapped__"),
                                        p = Hd.call(b, "__wrapped__");
                                    if (o || p) return ab(o ? a.__wrapped__ : a, p ? b.__wrapped__ : b, c, d, e, f);
                                    if (j != R) return !1;
                                    var q = a.constructor,
                                        r = b.constructor;
                                    if (q != r && !(Db(q) && q instanceof q && Db(r) && r instanceof r) && "constructor" in a && "constructor" in b) return !1
                                }
                                var s = !e;
                                e || (e = k()), f || (f = k());
                                for (var t = e.length; t--;)
                                    if (e[t] == a) return f[t] == b;
                                var u = 0;
                                if (g = !0, e.push(a), f.push(b), n) {
                                    if (t = a.length, u = b.length, g = u == t, g || d)
                                        for (; u--;) {
                                            var v = t,
                                                w = b[u];
                                            if (d)
                                                for (; v-- && !(g = ab(a[v], w, c, d, e, f)););
                                            else if (!(g = ab(a[u], w, c, d, e, f))) break
                                        }
                                } else ge(b, function(b, h, i) {
                                    return Hd.call(i, h) ? (u++, g = Hd.call(a, h) && ab(a[h], b, c, d, e, f)) : void 0
                                }), g && !d && ge(a, function(a, b, c) {
                                    return Hd.call(c, b) ? g = --u > -1 : void 0
                                });
                                return e.pop(), f.pop(), s && (m(e), m(f)), g
                            }

                            function bb(a, b, c, d, e) {
                                (Zd(b) ? Yb : he)(b, function(b, f) {
                                    var g, h, i = b,
                                        j = a[f];
                                    if (b && ((h = Zd(b)) || ie(b))) {
                                        for (var k = d.length; k--;)
                                            if (g = d[k] == b) {
                                                j = e[k];
                                                break
                                            }
                                        if (!g) {
                                            var l;
                                            c && (i = c(j, b), (l = "undefined" != typeof i) && (j = i)), l || (j = h ? Zd(j) ? j : [] : ie(j) ? j : {}), d.push(b), e.push(j), l || bb(j, b, c, d, e)
                                        }
                                    } else c && (i = c(j, b), "undefined" == typeof i && (i = b)), "undefined" != typeof i && (j = i);
                                    a[f] = j
                                })
                            }

                            function db(a, b) {
                                return a + Ed(Vd() * (b - a + 1))
                            }

                            function eb(a, c, d) {
                                var f = -1,
                                    g = ib(),
                                    h = a ? a.length : 0,
                                    j = [],
                                    l = !c && h >= v && g === b,
                                    o = d || l ? k() : j;
                                if (l) {
                                    var p = i(o);
                                    g = e, o = p
                                }
                                for (; ++f < h;) {
                                    var q = a[f],
                                        r = d ? d(q, f, a) : q;
                                    (c ? !f || o[o.length - 1] !== r : g(o, r) < 0) && ((d || l) && o.push(r), j.push(q))
                                }
                                return l ? (m(o.array), n(o)) : d && m(o), j
                            }

                            function fb(a) {
                                return function(b, d, e) {
                                    var f = {};
                                    d = c.createCallback(d, e, 3);
                                    var g = -1,
                                        h = b ? b.length : 0;
                                    if ("number" == typeof h)
                                        for (; ++g < h;) {
                                            var i = b[g];
                                            a(f, i, d(i, g, b), b)
                                        } else he(b, function(b, c, e) {
                                            a(f, b, d(b, c, e), e)
                                        });
                                    return f
                                }
                            }

                            function gb(a, b, c, d, e, g) {
                                var h = 1 & b,
                                    i = 2 & b,
                                    j = 4 & b,
                                    k = 16 & b,
                                    l = 32 & b;
                                if (!i && !Db(a)) throw new wd;
                                k && !c.length && (b &= -17, k = c = !1), l && !d.length && (b &= -33, l = d = !1);
                                var m = a && a.__bindData__;
                                if (m && m !== !0) return m = o(m), m[2] && (m[2] = o(m[2])), m[3] && (m[3] = o(m[3])), !h || 1 & m[1] || (m[4] = e), !h && 1 & m[1] && (b |= 8), !j || 4 & m[1] || (m[5] = g), k && Id.apply(m[2] || (m[2] = []), c), l && Ld.apply(m[3] || (m[3] = []), d), m[1] |= b, gb.apply(null, m);
                                var n = 1 == b || 17 === b ? f : Y;
                                return n([a, b, c, d, e, g])
                            }

                            function hb(a) {
                                return ae[a]
                            }

                            function ib() {
                                var a = (a = c.indexOf) === rc ? b : a;
                                return a
                            }

                            function jb(a) {
                                return "function" == typeof a && Bd.test(a)
                            }

                            function kb(a) {
                                var b, c;
                                return a && Ad.call(a) == R && (b = a.constructor, !Db(b) || b instanceof b) ? (ge(a, function(a, b) {
                                    c = b
                                }), "undefined" == typeof c || Hd.call(a, c)) : !1
                            }

                            function lb(a) {
                                return be[a]
                            }

                            function mb(a) {
                                return a && "object" == typeof a && "number" == typeof a.length && Ad.call(a) == L || !1
                            }

                            function nb(a, b, c, d) {
                                return "boolean" != typeof b && null != b && (d = c, c = b, b = !1), r(a, b, "function" == typeof c && w(c, d, 1))
                            }

                            function ob(a, b, c) {
                                return r(a, !0, "function" == typeof b && w(b, c, 1))
                            }

                            function pb(a, b) {
                                var c = s(a);
                                return b ? ee(c, b) : c
                            }

                            function qb(a, b, d) {
                                var e;
                                return b = c.createCallback(b, d, 3), he(a, function(a, c, d) {
                                    return b(a, c, d) ? (e = c, !1) : void 0
                                }), e
                            }

                            function rb(a, b, d) {
                                var e;
                                return b = c.createCallback(b, d, 3), tb(a, function(a, c, d) {
                                    return b(a, c, d) ? (e = c, !1) : void 0
                                }), e
                            }

                            function sb(a, b, c) {
                                var d = [];
                                ge(a, function(a, b) {
                                    d.push(b, a)
                                });
                                var e = d.length;
                                for (b = w(b, c, 3); e-- && b(d[e--], d[e], a) !== !1;);
                                return a
                            }

                            function tb(a, b, c) {
                                var d = _d(a),
                                    e = d.length;
                                for (b = w(b, c, 3); e--;) {
                                    var f = d[e];
                                    if (b(a[f], f, a) === !1) break
                                }
                                return a
                            }

                            function ub(a) {
                                var b = [];
                                return ge(a, function(a, c) {
                                    Db(a) && b.push(c)
                                }), b.sort()
                            }

                            function vb(a, b) {
                                return a ? Hd.call(a, b) : !1
                            }

                            function wb(a) {
                                for (var b = -1, c = _d(a), d = c.length, e = {}; ++b < d;) {
                                    var f = c[b];
                                    e[a[f]] = f
                                }
                                return e
                            }

                            function xb(a) {
                                return a === !0 || a === !1 || a && "object" == typeof a && Ad.call(a) == N || !1
                            }

                            function yb(a) {
                                return a && "object" == typeof a && Ad.call(a) == O || !1
                            }

                            function zb(a) {
                                return a && 1 === a.nodeType || !1
                            }

                            function Ab(a) {
                                var b = !0;
                                if (!a) return b;
                                var c = Ad.call(a),
                                    d = a.length;
                                return c == M || c == T || c == L || c == R && "number" == typeof d && Db(a.splice) ? !d : (he(a, function() {
                                    return b = !1
                                }), b)
                            }

                            function Bb(a, b, c, d) {
                                return ab(a, b, "function" == typeof c && w(c, d, 2))
                            }

                            function Cb(a) {
                                return Pd(a) && !Qd(parseFloat(a))
                            }

                            function Db(a) {
                                return "function" == typeof a
                            }

                            function Eb(a) {
                                return !(!a || !X[typeof a])
                            }

                            function Fb(a) {
                                return Hb(a) && a != +a
                            }

                            function Gb(a) {
                                return null === a
                            }

                            function Hb(a) {
                                return "number" == typeof a || a && "object" == typeof a && Ad.call(a) == Q || !1
                            }

                            function Ib(a) {
                                return a && "object" == typeof a && Ad.call(a) == S || !1
                            }

                            function Jb(a) {
                                return "string" == typeof a || a && "object" == typeof a && Ad.call(a) == T || !1
                            }

                            function Kb(a) {
                                return "undefined" == typeof a
                            }

                            function Lb(a, b, d) {
                                var e = {};
                                return b = c.createCallback(b, d, 3), he(a, function(a, c, d) {
                                    e[c] = b(a, c, d)
                                }), e
                            }

                            function Mb(a) {
                                var b = arguments,
                                    c = 2;
                                if (!Eb(a)) return a;
                                if ("number" != typeof b[2] && (c = b.length), c > 3 && "function" == typeof b[c - 2]) var d = w(b[--c - 1], b[c--], 2);
                                else c > 2 && "function" == typeof b[c - 1] && (d = b[--c]);
                                for (var e = o(arguments, 1, c), f = -1, g = k(), h = k(); ++f < c;) bb(a, e[f], d, g, h);
                                return m(g), m(h), a
                            }

                            function Nb(a, b, d) {
                                var e = {};
                                if ("function" != typeof b) {
                                    var f = [];
                                    ge(a, function(a, b) {
                                        f.push(b)
                                    }), f = $(f, _(arguments, !0, !1, 1));
                                    for (var g = -1, h = f.length; ++g < h;) {
                                        var i = f[g];
                                        e[i] = a[i]
                                    }
                                } else b = c.createCallback(b, d, 3), ge(a, function(a, c, d) {
                                    b(a, c, d) || (e[c] = a)
                                });
                                return e
                            }

                            function Ob(a) {
                                for (var b = -1, c = _d(a), d = c.length, e = nd(d); ++b < d;) {
                                    var f = c[b];
                                    e[b] = [f, a[f]]
                                }
                                return e
                            }

                            function Pb(a, b, d) {
                                var e = {};
                                if ("function" != typeof b)
                                    for (var f = -1, g = _(arguments, !0, !1, 1), h = Eb(a) ? g.length : 0; ++f < h;) {
                                        var i = g[f];
                                        i in a && (e[i] = a[i])
                                    } else b = c.createCallback(b, d, 3), ge(a, function(a, c, d) {
                                        b(a, c, d) && (e[c] = a)
                                    });
                                return e
                            }

                            function Qb(a, b, d, e) {
                                var f = Zd(a);
                                if (null == d)
                                    if (f) d = [];
                                    else {
                                        var g = a && a.constructor,
                                            h = g && g.prototype;
                                        d = s(h)
                                    }
                                return b && (b = c.createCallback(b, e, 4), (f ? Yb : he)(a, function(a, c, e) {
                                    return b(d, a, c, e)
                                })), d
                            }

                            function Rb(a) {
                                for (var b = -1, c = _d(a), d = c.length, e = nd(d); ++b < d;) e[b] = a[c[b]];
                                return e
                            }

                            function Sb(a) {
                                for (var b = arguments, c = -1, d = _(b, !0, !1, 1), e = b[2] && b[2][b[1]] === a ? 1 : d.length, f = nd(e); ++c < e;) f[c] = a[d[c]];
                                return f
                            }

                            function Tb(a, b, c) {
                                var d = -1,
                                    e = ib(),
                                    f = a ? a.length : 0,
                                    g = !1;
                                return c = (0 > c ? Sd(0, f + c) : c) || 0, Zd(a) ? g = e(a, b, c) > -1 : "number" == typeof f ? g = (Jb(a) ? a.indexOf(b, c) : e(a, b, c)) > -1 : he(a, function(a) {
                                    return ++d >= c ? !(g = a === b) : void 0
                                }), g
                            }

                            function Ub(a, b, d) {
                                var e = !0;
                                b = c.createCallback(b, d, 3);
                                var f = -1,
                                    g = a ? a.length : 0;
                                if ("number" == typeof g)
                                    for (; ++f < g && (e = !!b(a[f], f, a)););
                                else he(a, function(a, c, d) {
                                    return e = !!b(a, c, d)
                                });
                                return e
                            }

                            function Vb(a, b, d) {
                                var e = [];
                                b = c.createCallback(b, d, 3);
                                var f = -1,
                                    g = a ? a.length : 0;
                                if ("number" == typeof g)
                                    for (; ++f < g;) {
                                        var h = a[f];
                                        b(h, f, a) && e.push(h)
                                    } else he(a, function(a, c, d) {
                                        b(a, c, d) && e.push(a)
                                    });
                                return e
                            }

                            function Wb(a, b, d) {
                                b = c.createCallback(b, d, 3);
                                var e = -1,
                                    f = a ? a.length : 0;
                                if ("number" != typeof f) {
                                    var g;
                                    return he(a, function(a, c, d) {
                                        return b(a, c, d) ? (g = a, !1) : void 0
                                    }), g
                                }
                                for (; ++e < f;) {
                                    var h = a[e];
                                    if (b(h, e, a)) return h
                                }
                            }

                            function Xb(a, b, d) {
                                var e;
                                return b = c.createCallback(b, d, 3), Zb(a, function(a, c, d) {
                                    return b(a, c, d) ? (e = a, !1) : void 0
                                }), e
                            }

                            function Yb(a, b, c) {
                                var d = -1,
                                    e = a ? a.length : 0;
                                if (b = b && "undefined" == typeof c ? b : w(b, c, 3), "number" == typeof e)
                                    for (; ++d < e && b(a[d], d, a) !== !1;);
                                else he(a, b);
                                return a
                            }

                            function Zb(a, b, c) {
                                var d = a ? a.length : 0;
                                if (b = b && "undefined" == typeof c ? b : w(b, c, 3), "number" == typeof d)
                                    for (; d-- && b(a[d], d, a) !== !1;);
                                else {
                                    var e = _d(a);
                                    d = e.length, he(a, function(a, c, f) {
                                        return c = e ? e[--d] : --d, b(f[c], c, f)
                                    })
                                }
                                return a
                            }

                            function $b(a, b) {
                                var c = o(arguments, 2),
                                    d = -1,
                                    e = "function" == typeof b,
                                    f = a ? a.length : 0,
                                    g = nd("number" == typeof f ? f : 0);
                                return Yb(a, function(a) {
                                    g[++d] = (e ? b : a[b]).apply(a, c)
                                }), g
                            }

                            function _b(a, b, d) {
                                var e = -1,
                                    f = a ? a.length : 0;
                                if (b = c.createCallback(b, d, 3), "number" == typeof f)
                                    for (var g = nd(f); ++e < f;) g[e] = b(a[e], e, a);
                                else g = [], he(a, function(a, c, d) {
                                    g[++e] = b(a, c, d)
                                });
                                return g
                            }

                            function ac(a, b, d) {
                                var e = -1 / 0,
                                    f = e;
                                if ("function" != typeof b && d && d[b] === a && (b = null), null == b && Zd(a))
                                    for (var h = -1, i = a.length; ++h < i;) {
                                        var j = a[h];
                                        j > f && (f = j)
                                    } else b = null == b && Jb(a) ? g : c.createCallback(b, d, 3), Yb(a, function(a, c, d) {
                                        var g = b(a, c, d);
                                        g > e && (e = g, f = a)
                                    });
                                return f
                            }

                            function bc(a, b, d) {
                                var e = 1 / 0,
                                    f = e;
                                if ("function" != typeof b && d && d[b] === a && (b = null), null == b && Zd(a))
                                    for (var h = -1, i = a.length; ++h < i;) {
                                        var j = a[h];
                                        f > j && (f = j)
                                    } else b = null == b && Jb(a) ? g : c.createCallback(b, d, 3), Yb(a, function(a, c, d) {
                                        var g = b(a, c, d);
                                        e > g && (e = g, f = a)
                                    });
                                return f
                            }

                            function cc(a, b, d, e) {
                                if (!a) return d;
                                var f = arguments.length < 3;
                                b = c.createCallback(b, e, 4);
                                var g = -1,
                                    h = a.length;
                                if ("number" == typeof h)
                                    for (f && (d = a[++g]); ++g < h;) d = b(d, a[g], g, a);
                                else he(a, function(a, c, e) {
                                    d = f ? (f = !1, a) : b(d, a, c, e)
                                });
                                return d
                            }

                            function dc(a, b, d, e) {
                                var f = arguments.length < 3;
                                return b = c.createCallback(b, e, 4), Zb(a, function(a, c, e) {
                                    d = f ? (f = !1, a) : b(d, a, c, e)
                                }), d
                            }

                            function ec(a, b, d) {
                                return b = c.createCallback(b, d, 3), Vb(a, function(a, c, d) {
                                    return !b(a, c, d)
                                })
                            }

                            function fc(a, b, c) {
                                if (a && "number" != typeof a.length && (a = Rb(a)), null == b || c) return a ? a[db(0, a.length - 1)] : q;
                                var d = gc(a);
                                return d.length = Td(Sd(0, b), d.length), d
                            }

                            function gc(a) {
                                var b = -1,
                                    c = a ? a.length : 0,
                                    d = nd("number" == typeof c ? c : 0);
                                return Yb(a, function(a) {
                                    var c = db(0, ++b);
                                    d[b] = d[c], d[c] = a
                                }), d
                            }

                            function hc(a) {
                                var b = a ? a.length : 0;
                                return "number" == typeof b ? b : _d(a).length
                            }

                            function ic(a, b, d) {
                                var e;
                                b = c.createCallback(b, d, 3);
                                var f = -1,
                                    g = a ? a.length : 0;
                                if ("number" == typeof g)
                                    for (; ++f < g && !(e = b(a[f], f, a)););
                                else he(a, function(a, c, d) {
                                    return !(e = b(a, c, d))
                                });
                                return !!e
                            }

                            function jc(a, b, d) {
                                var e = -1,
                                    f = Zd(b),
                                    g = a ? a.length : 0,
                                    i = nd("number" == typeof g ? g : 0);
                                for (f || (b = c.createCallback(b, d, 3)), Yb(a, function(a, c, d) {
                                        var g = i[++e] = l();
                                        f ? g.criteria = _b(b, function(b) {
                                            return a[b]
                                        }) : (g.criteria = k())[0] = b(a, c, d), g.index = e, g.value = a
                                    }), g = i.length, i.sort(h); g--;) {
                                    var j = i[g];
                                    i[g] = j.value, f || m(j.criteria), n(j)
                                }
                                return i
                            }

                            function kc(a) {
                                return a && "number" == typeof a.length ? o(a) : Rb(a)
                            }

                            function lc(a) {
                                for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                                    var e = a[b];
                                    e && d.push(e)
                                }
                                return d
                            }

                            function mc(a) {
                                return $(a, _(arguments, !0, !0, 1))
                            }

                            function nc(a, b, d) {
                                var e = -1,
                                    f = a ? a.length : 0;
                                for (b = c.createCallback(b, d, 3); ++e < f;)
                                    if (b(a[e], e, a)) return e;
                                return -1
                            }

                            function oc(a, b, d) {
                                var e = a ? a.length : 0;
                                for (b = c.createCallback(b, d, 3); e--;)
                                    if (b(a[e], e, a)) return e;
                                return -1
                            }

                            function pc(a, b, d) {
                                var e = 0,
                                    f = a ? a.length : 0;
                                if ("number" != typeof b && null != b) {
                                    var g = -1;
                                    for (b = c.createCallback(b, d, 3); ++g < f && b(a[g], g, a);) e++
                                } else if (e = b, null == e || d) return a ? a[0] : q;
                                return o(a, 0, Td(Sd(0, e), f))
                            }

                            function qc(a, b, c, d) {
                                return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (a = _b(a, c, d)), _(a, b)
                            }

                            function rc(a, c, d) {
                                if ("number" == typeof d) {
                                    var e = a ? a.length : 0;
                                    d = 0 > d ? Sd(0, e + d) : d || 0
                                } else if (d) {
                                    var f = Ac(a, c);
                                    return a[f] === c ? f : -1
                                }
                                return b(a, c, d)
                            }

                            function sc(a, b, d) {
                                var e = 0,
                                    f = a ? a.length : 0;
                                if ("number" != typeof b && null != b) {
                                    var g = f;
                                    for (b = c.createCallback(b, d, 3); g-- && b(a[g], g, a);) e++
                                } else e = null == b || d ? 1 : b || e;
                                return o(a, 0, Td(Sd(0, f - e), f))
                            }

                            function tc() {
                                for (var a = [], c = -1, d = arguments.length, f = k(), g = ib(), h = g === b, j = k(); ++c < d;) {
                                    var l = arguments[c];
                                    (Zd(l) || mb(l)) && (a.push(l), f.push(h && l.length >= v && i(c ? a[c] : j)))
                                }
                                var o = a[0],
                                    p = -1,
                                    q = o ? o.length : 0,
                                    r = [];
                                a: for (; ++p < q;) {
                                    var s = f[0];
                                    if (l = o[p], (s ? e(s, l) : g(j, l)) < 0) {
                                        for (c = d, (s || j).push(l); --c;)
                                            if (s = f[c], (s ? e(s, l) : g(a[c], l)) < 0) continue a;
                                        r.push(l)
                                    }
                                }
                                for (; d--;) s = f[d], s && n(s);
                                return m(f), m(j), r
                            }

                            function uc(a, b, d) {
                                var e = 0,
                                    f = a ? a.length : 0;
                                if ("number" != typeof b && null != b) {
                                    var g = f;
                                    for (b = c.createCallback(b, d, 3); g-- && b(a[g], g, a);) e++
                                } else if (e = b, null == e || d) return a ? a[f - 1] : q;
                                return o(a, Sd(0, f - e))
                            }

                            function vc(a, b, c) {
                                var d = a ? a.length : 0;
                                for ("number" == typeof c && (d = (0 > c ? Sd(0, d + c) : Td(c, d - 1)) + 1); d--;)
                                    if (a[d] === b) return d;
                                return -1
                            }

                            function wc(a) {
                                for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d;)
                                    for (var f = -1, g = b[c]; ++f < e;) a[f] === g && (Kd.call(a, f--, 1), e--);
                                return a
                            }

                            function xc(a, b, c) {
                                a = +a || 0, c = "number" == typeof c ? c : +c || 1, null == b && (b = a, a = 0);
                                for (var d = -1, e = Sd(0, Cd((b - a) / (c || 1))), f = nd(e); ++d < e;) f[d] = a, a += c;
                                return f
                            }

                            function yc(a, b, d) {
                                var e = -1,
                                    f = a ? a.length : 0,
                                    g = [];
                                for (b = c.createCallback(b, d, 3); ++e < f;) {
                                    var h = a[e];
                                    b(h, e, a) && (g.push(h), Kd.call(a, e--, 1), f--)
                                }
                                return g
                            }

                            function zc(a, b, d) {
                                if ("number" != typeof b && null != b) {
                                    var e = 0,
                                        f = -1,
                                        g = a ? a.length : 0;
                                    for (b = c.createCallback(b, d, 3); ++f < g && b(a[f], f, a);) e++
                                } else e = null == b || d ? 1 : Sd(0, b);
                                return o(a, e)
                            }

                            function Ac(a, b, d, e) {
                                var f = 0,
                                    g = a ? a.length : f;
                                for (d = d ? c.createCallback(d, e, 1) : Zc, b = d(b); g > f;) {
                                    var h = f + g >>> 1;
                                    d(a[h]) < b ? f = h + 1 : g = h
                                }
                                return f
                            }

                            function Bc() {
                                return eb(_(arguments, !0, !0))
                            }

                            function Cc(a, b, d, e) {
                                return "boolean" != typeof b && null != b && (e = d, d = "function" != typeof b && e && e[b] === a ? null : b, b = !1), null != d && (d = c.createCallback(d, e, 3)), eb(a, b, d)
                            }

                            function Dc(a) {
                                return $(a, o(arguments, 1))
                            }

                            function Ec() {
                                for (var a = -1, b = arguments.length; ++a < b;) {
                                    var c = arguments[a];
                                    if (Zd(c) || mb(c)) var d = d ? eb($(d, c).concat($(c, d))) : c
                                }
                                return d || []
                            }

                            function Fc() {
                                for (var a = arguments.length > 1 ? arguments : arguments[0], b = -1, c = a ? ac(me(a, "length")) : 0, d = nd(0 > c ? 0 : c); ++b < c;) d[b] = me(a, b);
                                return d
                            }

                            function Gc(a, b) {
                                var c = -1,
                                    d = a ? a.length : 0,
                                    e = {};
                                for (b || !d || Zd(a[0]) || (b = []); ++c < d;) {
                                    var f = a[c];
                                    b ? e[f] = b[c] : f && (e[f[0]] = f[1])
                                }
                                return e
                            }

                            function Hc(a, b) {
                                if (!Db(b)) throw new wd;
                                return function() {
                                    return --a < 1 ? b.apply(this, arguments) : void 0
                                }
                            }

                            function Ic(a, b) {
                                return arguments.length > 2 ? gb(a, 17, o(arguments, 2), null, b) : gb(a, 1, null, null, b)
                            }

                            function Jc(a) {
                                for (var b = arguments.length > 1 ? _(arguments, !0, !1, 1) : ub(a), c = -1, d = b.length; ++c < d;) {
                                    var e = b[c];
                                    a[e] = gb(a[e], 1, null, null, a)
                                }
                                return a
                            }

                            function Kc(a, b) {
                                return arguments.length > 2 ? gb(b, 19, o(arguments, 2), null, a) : gb(b, 3, null, null, a)
                            }

                            function Lc() {
                                for (var a = arguments, b = a.length; b--;)
                                    if (!Db(a[b])) throw new wd;
                                return function() {
                                    for (var b = arguments, c = a.length; c--;) b = [a[c].apply(this, b)];
                                    return b[0]
                                }
                            }

                            function Mc(a, b) {
                                return b = "number" == typeof b ? b : +b || a.length, gb(a, 4, null, null, null, b)
                            }

                            function Nc(a, b, c) {
                                var d, e, f, g, h, i, j, k = 0,
                                    l = !1,
                                    m = !0;
                                if (!Db(a)) throw new wd;
                                if (b = Sd(0, b) || 0, c === !0) {
                                    var n = !0;
                                    m = !1
                                } else Eb(c) && (n = c.leading, l = "maxWait" in c && (Sd(b, c.maxWait) || 0), m = "trailing" in c ? c.trailing : m);
                                var o = function() {
                                        var c = b - (oe() - g);
                                        if (0 >= c) {
                                            e && Dd(e);
                                            var l = j;
                                            e = i = j = q, l && (k = oe(), f = a.apply(h, d), i || e || (d = h = null))
                                        } else i = Jd(o, c)
                                    },
                                    p = function() {
                                        i && Dd(i), e = i = j = q, (m || l !== b) && (k = oe(), f = a.apply(h, d), i || e || (d = h = null))
                                    };
                                return function() {
                                    if (d = arguments, g = oe(), h = this, j = m && (i || !n), l === !1) var c = n && !i;
                                    else {
                                        e || n || (k = g);
                                        var q = l - (g - k),
                                            r = 0 >= q;
                                        r ? (e && (e = Dd(e)), k = g, f = a.apply(h, d)) : e || (e = Jd(p, q))
                                    }
                                    return r && i ? i = Dd(i) : i || b === l || (i = Jd(o, b)), c && (r = !0, f = a.apply(h, d)), !r || i || e || (d = h = null), f
                                }
                            }

                            function Oc(a) {
                                if (!Db(a)) throw new wd;
                                var b = o(arguments, 1);
                                return Jd(function() {
                                    a.apply(q, b)
                                }, 1)
                            }

                            function Pc(a, b) {
                                if (!Db(a)) throw new wd;
                                var c = o(arguments, 2);
                                return Jd(function() {
                                    a.apply(q, c)
                                }, b)
                            }

                            function Qc(a, b) {
                                if (!Db(a)) throw new wd;
                                var c = function() {
                                    var d = c.cache,
                                        e = b ? b.apply(this, arguments) : u + arguments[0];
                                    return Hd.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
                                };
                                return c.cache = {}, c
                            }

                            function Rc(a) {
                                var b, c;
                                if (!Db(a)) throw new wd;
                                return function() {
                                    return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c)
                                }
                            }

                            function Sc(a) {
                                return gb(a, 16, o(arguments, 1))
                            }

                            function Tc(a) {
                                return gb(a, 32, null, o(arguments, 1))
                            }

                            function Uc(a, b, c) {
                                var d = !0,
                                    e = !0;
                                if (!Db(a)) throw new wd;
                                return c === !1 ? d = !1 : Eb(c) && (d = "leading" in c ? c.leading : d, e = "trailing" in c ? c.trailing : e), V.leading = d, V.maxWait = b, V.trailing = e, Nc(a, b, V)
                            }

                            function Vc(a, b) {
                                return gb(b, 16, [a])
                            }

                            function Wc(a) {
                                return function() {
                                    return a
                                }
                            }

                            function Xc(a, b, c) {
                                var d = typeof a;
                                if (null == a || "function" == d) return w(a, b, c);
                                if ("object" != d) return bd(a);
                                var e = _d(a),
                                    f = e[0],
                                    g = a[f];
                                return 1 != e.length || g !== g || Eb(g) ? function(b) {
                                    for (var c = e.length, d = !1; c-- && (d = ab(b[e[c]], a[e[c]], null, !0)););
                                    return d
                                } : function(a) {
                                    var b = a[f];
                                    return g === b && (0 !== g || 1 / g == 1 / b)
                                }
                            }

                            function Yc(a) {
                                return null == a ? "" : vd(a).replace(de, hb)
                            }

                            function Zc(a) {
                                return a
                            }

                            function $c(a, b, e) {
                                var f = !0,
                                    g = b && ub(b);
                                b && (e || g.length) || (null == e && (e = b), h = d, b = a, a = c, g = ub(b)), e === !1 ? f = !1 : Eb(e) && "chain" in e && (f = e.chain);
                                var h = a,
                                    i = Db(h);
                                Yb(g, function(c) {
                                    var d = a[c] = b[c];
                                    i && (h.prototype[c] = function() {
                                        var b = this.__chain__,
                                            c = this.__wrapped__,
                                            e = [c];
                                        Id.apply(e, arguments);
                                        var g = d.apply(a, e);
                                        if (f || b) {
                                            if (c === g && Eb(g)) return this;
                                            g = new h(g), g.__chain__ = b
                                        }
                                        return g
                                    })
                                })
                            }

                            function _c() {
                                return a._ = zd, this
                            }

                            function ad() {}

                            function bd(a) {
                                return function(b) {
                                    return b[a]
                                }
                            }

                            function cd(a, b, c) {
                                var d = null == a,
                                    e = null == b;
                                if (null == c && ("boolean" == typeof a && e ? (c = a, a = 1) : e || "boolean" != typeof b || (c = b, e = !0)), d && e && (b = 1), a = +a || 0, e ? (b = a, a = 0) : b = +b || 0, c || a % 1 || b % 1) {
                                    var f = Vd();
                                    return Td(a + f * (b - a + parseFloat("1e-" + ((f + "").length - 1))), b)
                                }
                                return db(a, b)
                            }

                            function dd(a, b) {
                                if (a) {
                                    var c = a[b];
                                    return Db(c) ? a[b]() : c
                                }
                            }

                            function ed(a, b, d) {
                                var e = c.templateSettings;
                                a = vd(a || ""), d = fe({}, d, e);
                                var f, g = fe({}, d.imports, e.imports),
                                    h = _d(g),
                                    i = Rb(g),
                                    k = 0,
                                    l = d.interpolate || G,
                                    m = "__p += '",
                                    n = ud((d.escape || G).source + "|" + l.source + "|" + (l === E ? B : G).source + "|" + (d.evaluate || G).source + "|$", "g");
                                a.replace(n, function(b, c, d, e, g, h) {
                                    return d || (d = e), m += a.slice(k, h).replace(I, j), c && (m += "' +\n__e(" + c + ") +\n'"), g && (f = !0, m += "';\n" + g + ";\n__p += '"), d && (m += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"), k = h + b.length, b
                                }), m += "';\n";
                                var o = d.variable,
                                    p = o;
                                p || (o = "obj", m = "with (" + o + ") {\n" + m + "\n}\n"), m = (f ? m.replace(y, "") : m).replace(z, "$1").replace(A, "$1;"), m = "function(" + o + ") {\n" + (p ? "" : o + " || (" + o + " = {});\n") + "var __t, __p = '', __e = _.escape" + (f ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + m + "return __p\n}";
                                var r = "\n/*\n//# sourceURL=" + (d.sourceURL || "/lodash/template/source[" + K++ +"]") + "\n*/";
                                try {
                                    var s = qd(h, "return " + m + r).apply(q, i)
                                } catch (t) {
                                    throw t.source = m, t
                                }
                                return b ? s(b) : (s.source = m, s)
                            }

                            function fd(a, b, c) {
                                a = (a = +a) > -1 ? a : 0;
                                var d = -1,
                                    e = nd(a);
                                for (b = w(b, c, 1); ++d < a;) e[d] = b(d);
                                return e
                            }

                            function gd(a) {
                                return null == a ? "" : vd(a).replace(ce, lb)
                            }

                            function hd(a) {
                                var b = ++t;
                                return vd(null == a ? "" : a) + b
                            }

                            function id(a) {
                                return a = new d(a), a.__chain__ = !0, a
                            }

                            function jd(a, b) {
                                return b(a), a
                            }

                            function kd() {
                                return this.__chain__ = !0, this
                            }

                            function ld() {
                                return vd(this.__wrapped__)
                            }

                            function md() {
                                return this.__wrapped__
                            }
                            a = a ? cb.defaults(Z.Object(), a, cb.pick(Z, J)) : Z;
                            var nd = a.Array,
                                od = a.Boolean,
                                pd = a.Date,
                                qd = a.Function,
                                rd = a.Math,
                                sd = a.Number,
                                td = a.Object,
                                ud = a.RegExp,
                                vd = a.String,
                                wd = a.TypeError,
                                xd = [],
                                yd = td.prototype,
                                zd = a._,
                                Ad = yd.toString,
                                Bd = ud("^" + vd(Ad).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                                Cd = rd.ceil,
                                Dd = a.clearTimeout,
                                Ed = rd.floor,
                                Fd = qd.prototype.toString,
                                Gd = jb(Gd = td.getPrototypeOf) && Gd,
                                Hd = yd.hasOwnProperty,
                                Id = xd.push,
                                Jd = a.setTimeout,
                                Kd = xd.splice,
                                Ld = xd.unshift,
                                Md = function() {
                                    try {
                                        var a = {},
                                            b = jb(b = td.defineProperty) && b,
                                            c = b(a, a, a) && b
                                    } catch (d) {}
                                    return c
                                }(),
                                Nd = jb(Nd = td.create) && Nd,
                                Od = jb(Od = nd.isArray) && Od,
                                Pd = a.isFinite,
                                Qd = a.isNaN,
                                Rd = jb(Rd = td.keys) && Rd,
                                Sd = rd.max,
                                Td = rd.min,
                                Ud = a.parseInt,
                                Vd = rd.random,
                                Wd = {};
                            Wd[M] = nd, Wd[N] = od, Wd[O] = pd, Wd[P] = qd, Wd[R] = td, Wd[Q] = sd, Wd[S] = ud, Wd[T] = vd, d.prototype = c.prototype;
                            var Xd = c.support = {};
                            Xd.funcDecomp = !jb(a.WinRTError) && H.test(p), Xd.funcNames = "string" == typeof qd.name, c.templateSettings = {
                                escape: /<%-([\s\S]+?)%>/g,
                                evaluate: /<%([\s\S]+?)%>/g,
                                interpolate: E,
                                variable: "",
                                imports: {
                                    _: c
                                }
                            }, Nd || (s = function() {
                                function b() {}
                                return function(c) {
                                    if (Eb(c)) {
                                        b.prototype = c;
                                        var d = new b;
                                        b.prototype = null
                                    }
                                    return d || a.Object()
                                }
                            }());
                            var Yd = Md ? function(a, b) {
                                    W.value = b, Md(a, "__bindData__", W)
                                } : ad,
                                Zd = Od || function(a) {
                                    return a && "object" == typeof a && "number" == typeof a.length && Ad.call(a) == M || !1
                                },
                                $d = function(a) {
                                    var b, c = a,
                                        d = [];
                                    if (!c) return d;
                                    if (!X[typeof a]) return d;
                                    for (b in c) Hd.call(c, b) && d.push(b);
                                    return d
                                },
                                _d = Rd ? function(a) {
                                    return Eb(a) ? Rd(a) : []
                                } : $d,
                                ae = {
                                    "&": "&amp;",
                                    "<": "&lt;",
                                    ">": "&gt;",
                                    '"': "&quot;",
                                    "'": "&#39;"
                                },
                                be = wb(ae),
                                ce = ud("(" + _d(be).join("|") + ")", "g"),
                                de = ud("[" + _d(ae).join("") + "]", "g"),
                                ee = function(a, b, c) {
                                    var d, e = a,
                                        f = e;
                                    if (!e) return f;
                                    var g = arguments,
                                        h = 0,
                                        i = "number" == typeof c ? 2 : g.length;
                                    if (i > 3 && "function" == typeof g[i - 2]) var j = w(g[--i - 1], g[i--], 2);
                                    else i > 2 && "function" == typeof g[i - 1] && (j = g[--i]);
                                    for (; ++h < i;)
                                        if (e = g[h], e && X[typeof e])
                                            for (var k = -1, l = X[typeof e] && _d(e), m = l ? l.length : 0; ++k < m;) d = l[k], f[d] = j ? j(f[d], e[d]) : e[d];
                                    return f
                                },
                                fe = function(a, b, c) {
                                    var d, e = a,
                                        f = e;
                                    if (!e) return f;
                                    for (var g = arguments, h = 0, i = "number" == typeof c ? 2 : g.length; ++h < i;)
                                        if (e = g[h], e && X[typeof e])
                                            for (var j = -1, k = X[typeof e] && _d(e), l = k ? k.length : 0; ++j < l;) d = k[j], "undefined" == typeof f[d] && (f[d] = e[d]);
                                    return f
                                },
                                ge = function(a, b, c) {
                                    var d, e = a,
                                        f = e;
                                    if (!e) return f;
                                    if (!X[typeof e]) return f;
                                    b = b && "undefined" == typeof c ? b : w(b, c, 3);
                                    for (d in e)
                                        if (b(e[d], d, a) === !1) return f;
                                    return f
                                },
                                he = function(a, b, c) {
                                    var d, e = a,
                                        f = e;
                                    if (!e) return f;
                                    if (!X[typeof e]) return f;
                                    b = b && "undefined" == typeof c ? b : w(b, c, 3);
                                    for (var g = -1, h = X[typeof e] && _d(e), i = h ? h.length : 0; ++g < i;)
                                        if (d = h[g], b(e[d], d, a) === !1) return f;
                                    return f
                                },
                                ie = Gd ? function(a) {
                                    if (!a || Ad.call(a) != R) return !1;
                                    var b = a.valueOf,
                                        c = jb(b) && (c = Gd(b)) && Gd(c);
                                    return c ? a == c || Gd(a) == c : kb(a)
                                } : kb,
                                je = fb(function(a, b, c) {
                                    Hd.call(a, c) ? a[c] ++ : a[c] = 1
                                }),
                                ke = fb(function(a, b, c) {
                                    (Hd.call(a, c) ? a[c] : a[c] = []).push(b)
                                }),
                                le = fb(function(a, b, c) {
                                    a[c] = b
                                }),
                                me = _b,
                                ne = Vb,
                                oe = jb(oe = pd.now) && oe || function() {
                                    return (new pd).getTime()
                                },
                                pe = 8 == Ud(x + "08") ? Ud : function(a, b) {
                                    return Ud(Jb(a) ? a.replace(F, "") : a, b || 0)
                                };
                            return c.after = Hc, c.assign = ee, c.at = Sb, c.bind = Ic, c.bindAll = Jc, c.bindKey = Kc, c.chain = id, c.compact = lc, c.compose = Lc, c.constant = Wc, c.countBy = je, c.create = pb, c.createCallback = Xc, c.curry = Mc, c.debounce = Nc, c.defaults = fe, c.defer = Oc, c.delay = Pc, c.difference = mc, c.filter = Vb, c.flatten = qc, c.forEach = Yb, c.forEachRight = Zb, c.forIn = ge, c.forInRight = sb, c.forOwn = he, c.forOwnRight = tb, c.functions = ub, c.groupBy = ke, c.indexBy = le, c.initial = sc, c.intersection = tc, c.invert = wb, c.invoke = $b, c.keys = _d, c.map = _b, c.mapValues = Lb, c.max = ac, c.memoize = Qc, c.merge = Mb, c.min = bc, c.omit = Nb, c.once = Rc, c.pairs = Ob, c.partial = Sc, c.partialRight = Tc, c.pick = Pb, c.pluck = me, c.property = bd, c.pull = wc, c.range = xc, c.reject = ec, c.remove = yc, c.rest = zc, c.shuffle = gc, c.sortBy = jc, c.tap = jd, c.throttle = Uc, c.times = fd, c.toArray = kc, c.transform = Qb, c.union = Bc, c.uniq = Cc, c.values = Rb, c.where = ne, c.without = Dc, c.wrap = Vc, c.xor = Ec, c.zip = Fc, c.zipObject = Gc, c.collect = _b, c.drop = zc, c.each = Yb, c.eachRight = Zb, c.extend = ee, c.methods = ub, c.object = Gc, c.select = Vb, c.tail = zc, c.unique = Cc, c.unzip = Fc, $c(c), c.clone = nb, c.cloneDeep = ob, c.contains = Tb, c.escape = Yc, c.every = Ub, c.find = Wb, c.findIndex = nc, c.findKey = qb, c.findLast = Xb, c.findLastIndex = oc, c.findLastKey = rb, c.has = vb, c.identity = Zc, c.indexOf = rc, c.isArguments = mb, c.isArray = Zd, c.isBoolean = xb, c.isDate = yb, c.isElement = zb, c.isEmpty = Ab, c.isEqual = Bb, c.isFinite = Cb, c.isFunction = Db, c.isNaN = Fb, c.isNull = Gb, c.isNumber = Hb, c.isObject = Eb, c.isPlainObject = ie, c.isRegExp = Ib, c.isString = Jb, c.isUndefined = Kb, c.lastIndexOf = vc, c.mixin = $c, c.noConflict = _c, c.noop = ad, c.now = oe, c.parseInt = pe, c.random = cd, c.reduce = cc, c.reduceRight = dc, c.result = dd, c.runInContext = p, c.size = hc, c.some = ic, c.sortedIndex = Ac, c.template = ed, c.unescape = gd, c.uniqueId = hd, c.all = Ub, c.any = ic, c.detect = Wb, c.findWhere = Wb, c.foldl = cc, c.foldr = dc, c.include = Tb, c.inject = cc, $c(function() {
                                var a = {};
                                return he(c, function(b, d) {
                                    c.prototype[d] || (a[d] = b)
                                }), a
                            }(), !1), c.first = pc, c.last = uc, c.sample = fc, c.take = pc, c.head = pc, he(c, function(a, b) {
                                var e = "sample" !== b;
                                c.prototype[b] || (c.prototype[b] = function(b, c) {
                                    var f = this.__chain__,
                                        g = a(this.__wrapped__, b, c);
                                    return f || null != b && (!c || e && "function" == typeof b) ? new d(g, f) : g
                                })
                            }), c.VERSION = "2.4.1", c.prototype.chain = kd, c.prototype.toString = ld, c.prototype.value = md, c.prototype.valueOf = md, Yb(["join", "pop", "shift"], function(a) {
                                var b = xd[a];
                                c.prototype[a] = function() {
                                    var a = this.__chain__,
                                        c = b.apply(this.__wrapped__, arguments);
                                    return a ? new d(c, a) : c
                                }
                            }), Yb(["push", "reverse", "sort", "unshift"], function(a) {
                                var b = xd[a];
                                c.prototype[a] = function() {
                                    return b.apply(this.__wrapped__, arguments), this
                                }
                            }), Yb(["concat", "slice", "splice"], function(a) {
                                var b = xd[a];
                                c.prototype[a] = function() {
                                    return new d(b.apply(this.__wrapped__, arguments), this.__chain__)
                                }
                            }), c
                        }
                        var q, r = [],
                            s = [],
                            t = 0,
                            u = +new Date + "",
                            v = 75,
                            w = 40,
                            x = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
                            y = /\b__p \+= '';/g,
                            z = /\b(__p \+=) '' \+/g,
                            A = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                            B = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                            C = /\w*$/,
                            D = /^\s*function[ \n\r\t]+\w/,
                            E = /<%=([\s\S]+?)%>/g,
                            F = RegExp("^[" + x + "]*0+(?=.$)"),
                            G = /($^)/,
                            H = /\bthis\b/,
                            I = /['\n\r\t\u2028\u2029\\]/g,
                            J = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
                            K = 0,
                            L = "[object Arguments]",
                            M = "[object Array]",
                            N = "[object Boolean]",
                            O = "[object Date]",
                            P = "[object Function]",
                            Q = "[object Number]",
                            R = "[object Object]",
                            S = "[object RegExp]",
                            T = "[object String]",
                            U = {};
                        U[P] = !1, U[L] = U[M] = U[N] = U[O] = U[Q] = U[R] = U[S] = U[T] = !0;
                        var V = {
                                leading: !1,
                                maxWait: 0,
                                trailing: !1
                            },
                            W = {
                                configurable: !1,
                                enumerable: !1,
                                value: null,
                                writable: !1
                            },
                            X = {
                                "boolean": !1,
                                "function": !0,
                                object: !0,
                                number: !1,
                                string: !1,
                                undefined: !1
                            },
                            Y = {
                                "\\": "\\",
                                "'": "'",
                                "\n": "n",
                                "\r": "r",
                                "	": "t",
                                "\u2028": "u2028",
                                "\u2029": "u2029"
                            },
                            Z = X[typeof window] && window || this,
                            $ = X[typeof d] && d && !d.nodeType && d,
                            _ = X[typeof c] && c && !c.nodeType && c,
                            ab = _ && _.exports === $ && $,
                            bb = X[typeof a] && a;
                        !bb || bb.global !== bb && bb.window !== bb || (Z = bb);
                        var cb = p();
                        "function" == typeof define && "object" == typeof define.amd && define.amd ? (Z._ = cb, define(function() {
                            return cb
                        })) : $ && _ ? ab ? (_.exports = cb)._ = cb : $._ = cb : Z._ = cb
                    }).call(this)
                }).call(this, "undefined" != typeof b ? b : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            3: [function(a, b, c) {
                ! function(a, b) {
                    "use strict";
                    "function" == typeof define && define.amd ? define(["exports"], b) : b("object" == typeof c ? c : a.PubSub = {})
                }("object" == typeof window && window || this, function(a) {
                    "use strict";

                    function b(a) {
                        var b;
                        for (b in a)
                            if (a.hasOwnProperty(b)) return !0;
                        return !1
                    }

                    function c(a) {
                        return function() {
                            throw a
                        }
                    }

                    function d(a, b, d) {
                        try {
                            a(b, d)
                        } catch (e) {
                            setTimeout(c(e), 0)
                        }
                    }

                    function e(a, b, c) {
                        a(b, c)
                    }

                    function f(a, b, c, f) {
                        var g, h = j[b],
                            i = f ? e : d;
                        if (j.hasOwnProperty(b))
                            for (g in h) h.hasOwnProperty(g) && i(h[g], a, c)
                    }

                    function g(a, b, c) {
                        return function() {
                            var d = String(a),
                                e = d.lastIndexOf(".");
                            for (f(a, a, b, c); - 1 !== e;) d = d.substr(0, e), e = d.lastIndexOf("."), f(a, d, b)
                        }
                    }

                    function h(a) {
                        for (var c = String(a), d = Boolean(j.hasOwnProperty(c) && b(j[c])), e = c.lastIndexOf("."); !d && -1 !== e;) c = c.substr(0, e), e = c.lastIndexOf("."), d = Boolean(j.hasOwnProperty(c) && b(j[c]));
                        return d
                    }

                    function i(a, b, c, d) {
                        var e = g(a, b, d),
                            f = h(a);
                        return f ? (c === !0 ? e() : setTimeout(e, 0), !0) : !1
                    }
                    var j = {},
                        k = -1;
                    a.publish = function(b, c) {
                        return i(b, c, !1, a.immediateExceptions)
                    }, a.publishSync = function(b, c) {
                        return i(b, c, !0, a.immediateExceptions)
                    }, a.subscribe = function(a, b) {
                        if ("function" != typeof b) return !1;
                        j.hasOwnProperty(a) || (j[a] = {});
                        var c = "uid_" + String(++k);
                        return j[a][c] = b, c
                    }, a.clearAllSubscriptions = function() {
                        j = {}
                    }, a.unsubscribe = function(a) {
                        var b, c, d, e = "string" == typeof a && j.hasOwnProperty(a),
                            f = !e && "string" == typeof a,
                            g = "function" == typeof a,
                            h = !1;
                        if (e) return void delete j[a];
                        for (b in j)
                            if (j.hasOwnProperty(b)) {
                                if (c = j[b], f && c[a]) {
                                    delete c[a], h = a;
                                    break
                                }
                                if (g)
                                    for (d in c) c.hasOwnProperty(d) && c[d] === a && (delete c[d], h = !0)
                            }
                        return h
                    }
                })
            }, {}],
            4: [function(a, b) {
                var c = a("hammerjs"),
                    d = a("lodash"),
                    e = function(a, b, c) {
                        this.index = a, this.dataModel = new function(a, b) {
                            this.data = a, this.index = b, this.getText = function() {
                                return this.data[this.index]
                            }
                        }(c.data, b), this.init = function() {
                            this.angle = c.theta * a, this.elem = document.createElement("li"), this.elem.classList.add("a" + 100 * this.angle), this.elem.style[c.transformProp] = c.rotateFn + "(" + -this.angle + "deg) translateZ(" + c.radius + "px)", this.setText()
                        }, this.setText = function() {
                            this.elem.innerHTML = this.dataModel.getText()
                        }, this.update = function(a) {
                            this.dataModel.index !== a && (this.dataModel.index = a, this.setText())
                        }
                    },
                    f = function(a) {
                        var b = a,
                            f = {
                                panelCount: a.length,
                                rotateFn: "rotateX",
                                interactive: !0,
                                dail_w: 20,
                                dail_h: 5,
                                dail_stroke_color: "#999999",
                                dail_stroke_width: 1
                            };
                        f.transformProp = Modernizr.prefixed("transform"), f.rotation = 0, f.distance = 0, f.last_angle = 0, f.theta = 90 / f.panelCount, f.initselect = b.selectedIndex;
                        var g;
                        if (f.transformProp) {
                            f.data = [];
                            for (var h = 0; h < b.children.length; h++) f.data.push(b.children[h].innerHTML);
                            g = document.createElement("div"), g.classList.add("select-wrapper"), f.id ? g.id = f.id : b.id ? g.id = "select_" + b.id : b.name && (g.id = "select_" + b.name), b.parentNode.appendChild(g);
                            var i = document.createElement("div");
                            i.classList.add("inner"), g.appendChild(i);
                            var j = document.createElement("div");
                            j.classList.add("container"), i.appendChild(j);
                            var k = document.querySelector("#city .dots"),
                                l = document.createElement("ul");
                            l.classList.add("select"), l.addEventListener("transitionend", function() {
                                l.classList.remove("transit")
                            }), j.appendChild(l), j.appendChild(k), j.appendChild(k.cloneNode(!0)), f.radius = Math.round(l.clientHeight / 2 / Math.tan(Math.PI / 5 / f.panelCount)), f.mapping = [];
                            var m = 0;
                            for (h = 0; h < f.panelCount && f.data.length !== h; h++) {
                                var n = m;
                                m >= f.panelCount / 2 && (n = f.data.length - (f.panelCount - m)), m++;
                                var o = new e(h, n, f);
                                o.init(), f.mapping.push(o), l.appendChild(o.elem)
                            }
                            var p = function(a) {
                                    a = a || f.rotation;
                                    var b = f.theta / 2,
                                        c = 180,
                                        d = ((a + b) % c + c) % c;
                                    d -= d % f.theta;
                                    var e = (f.data.length - 1) * f.theta;
                                    return d > e ? a > 0 ? e : 0 : d
                                },
                                q = function() {
                                    var a = p();
                                    for (var b in f.mapping)
                                        if (f.mapping[b].angle === a) return f.mapping[b]
                                },
                                r = function(a) {
                                    for (var b, c = [], d = f.panelCount, e = f.panelCount / 4, g = f.data.length, h = a.index, i = a.dataModel.index, j = i - e; i + e - 1 >= j; j++) b = j, 0 > j && (b = g + j), j > g - 1 && (b = j - g), c.push(b);
                                    var k = c.slice(e - h);
                                    for (c = k.concat(c.slice(0, d - k.length)), h = 0; h < f.mapping.length; h++) f.mapping[h].update(c[h])
                                },
                                s = function(a) {
                                    l.style[f.transformProp] = "translateZ(-" + f.radius + "px) " + f.rotateFn + "(" + f.rotation + "deg)";
                                    var c = q();
                                    if (c) {
                                        var d = c.dataModel,
                                            e = b.selectedIndex;
                                        b.selectedIndex = d.index, a && e !== d.index && f.onChange && f.onChange(b), c.elem.classList.add("on"), l.selected && l.selected !== c.elem && l.selected.classList.remove("on"), l.selected = c.elem, c.angle !== f.last_angle && [0, 90, 120, 270].indexOf(c.angle) >= 0 && (f.last_angle = c.angle, r(c))
                                    }
                                };
                            this.setIndex = function(a) {
                                var b = Math.floor(a / f.panelCount),
                                    c = a - b * f.panelCount;
                                f.rotation = c * f.theta, s(!1)
                            }
                        } else this.setIndex = function(a) {
                            b.selectedIndex = a
                        };
                        this.setIndex(f.initselect), this.getIndex = function() {
                            return b.selectedIndex
                        }, f.transformProp && "undefined" != typeof c && (f.touch = new c(g, {
                            prevent_default: !0,
                            no_mouseevents: !0
                        }), f.touch.on("dragstart", function() {
                            f.distance = 0
                        }), f.touch.on("drag", function(a) {
                            var b = ["up", "down"];
                            b.indexOf(a.gesture.direction) >= 0 && (f.rotation += Math.round(a.gesture.deltaY - f.distance) / 6 * -1, s(!0), f.distance = a.gesture.deltaY)
                        }), f.touch.on("dragend", function() {
                            f.rotation = p(), l.classList.add("transit"), window.requestAnimationFrame(function() {
                                s(!0)
                            })
                        }), f.touch.on("tap", function(a) {
                            var b, c = a.gesture.target;
                            b = d.find(f.mapping, function(a) {
                                return a.elem === c
                            }), b && l.selected !== b.elem && (f.rotation = b.angle, l.classList.add("transit"), window.requestAnimationFrame(function() {
                                s(!0)
                            }))
                        }))
                    };
                b.exports = f
            }, {
                hammerjs: 1,
                lodash: 2
            }],
            5: [function(a, b) {
                var c = function() {
                    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Mobile.*Firefox/i)) {
                        if (window.WebGLRenderingContext) {
                            for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], c = !1, d = 0; 4 > d; d++) try {
                                if (c = a.getContext(b[d]), c && "function" == typeof c.getParameter) return !0
                            } catch (e) {}
                            return "mobile"
                        }
                        return "mobile"
                    }
                    return "desktop"
                };
                b.exports = c
            }, {}],
            6: [function(a) {
                var b = a("pubsub-js"),
                    c = a("./helpers/webgl-detect"),
                    d = a("./modules/experience"),
                    e = a("./modules/tutorial"),
                    f = a("./modules/city"),
                    g = a("./modules/screens"),
                    h = a("./modules/share"),
                    i = function() {
                        var a = window.location.hash.replace("#", "");
                        this.userCity = document.body.dataset.city;
                        var i, j = {
                            FR: "paris",
                            GB: "london",
                            JP: "tokyo",
                            NL: "amsterdam",
                            BR: "sao paulo",
                            US: "washington"
                        };
                        window.geoip_country_code && (i = window.geoip_country_code(), this.geoCity = j[i]), this.userCity || (this.userCity = this.geoCity ? this.geoCity : this.geoCity = "generic"), this.geoCity || (this.geoCity = this.userCity);
                        var k = c();
                        if (!0 === k)
                            if (ga("send", "pageview", {
                                    page: "/webGLversion",
                                    title: "webGLversion"
                                }), this.userMessage = "Happy holidays", this.xp = new d(this), this.tutorial = new e(this), this.city = new f(this), this.share = new h(this), this.pages = new g(this), a) {
                                var l = new XMLHttpRequest;
                                l.open("GET", "http://ec2-54-65-84-140.ap-northeast-1.compute.amazonaws.com:3000/" + a, !1), l.onload = function() {
                                    if (l.status >= 200 && l.status < 400) {
                                        var a = JSON.parse(l.responseText);
                                        a.message.trim().length && (this.userMessage = a.message)
                                    }
                                    b.publish("app.start")
                                }.bind(this), l.onerror = function() {
                                    b.publish("app.start")
                                };
                                try {
                                    l.send()
                                } catch (m) {
                                    b.publish("app.start")
                                }
                            } else b.publish("app.start");
                        else if (document.getElementById("loader").style.display = "none", "mobile" === k) document.getElementById("fallback-mobile").style.display = "block", ga("send", "pageview", {
                            page: "/fallbackMobile",
                            title: "fallbackMobile"
                        });
                        else {
                            document.getElementById("fallback-desktop").style.display = "block";
                            var n = document.getElementById("overlay"),
                                o = document.getElementById("player"),
                                p = document.createElement("iframe"),
                                q = document.getElementById("textarea"),
                                r = document.getElementById("closeOverlay");
                            p.src = "//player.vimeo.com/video/114695314", r.addEventListener("click", function(a) {
                                a.preventDefault(), n.classList.remove("visible"), setTimeout(function() {
                                    o.removeChild(p), n.style.display = "none"
                                }, 500)
                            }, !1), window.console.log("checkIfDesktopDeeplink"), a ? (q.innerHTML = "Someone left you a greeting in Winterlands.<br>Visit this page on your mobile to see it.<br><small>for iOS8 or Android 4.3.3</small>", ga("send", "pageview", {
                                page: "/desktopUncompatible",
                                title: "desktopUncompatible"
                            })) : ga("send", "pageview", {
                                page: "/desktopStandard",
                                title: "desktopStandard"
                            })
                        }
                    };
                new i
            }, {
                "./helpers/webgl-detect": 5,
                "./modules/city": 8,
                "./modules/experience": 9,
                "./modules/screens": 10,
                "./modules/share": 11,
                "./modules/tutorial": 12,
                "pubsub-js": 3
            }],
            7: [function(a, b) {
                b.exports = function(a, b) {
                    return this.size = b ? b : 222, this.init = function() {
                        this.el = document.createElement("canvas"), this.el.setAttribute("width", this.size), this.el.setAttribute("height", this.size), this.index = 0
                    }, this.pause = function() {
                        window.clearTimeout(this.delay), window.clearInterval(this.interval)
                    }, this.play = function(b) {
                        b = b || 0;
                        var c = this.el.getContext("2d"),
                            d = function() {
                                c.clearRect(0, 0, this.size, this.size), c.drawImage(a[this.index++], 0, 0, this.size, this.size, 0, 0, this.size, this.size), a[this.index] || (this.index = 0)
                            }.bind(this);
                        this.delay = window.setTimeout(function() {
                            this.interval = window.setInterval(function() {
                                window.requestAnimationFrame(d)
                            }, 50)
                        }.bind(this), b)
                    }, this.init(), {
                        play: this.play.bind(this),
                        pause: this.pause.bind(this),
                        el: this.el
                    }
                }
            }, {}],
            8: [function(a, b) {
                var c = a("pubsub-js"),
                    d = a("hammerjs"),
                    e = a("./animation"),
                    f = a("../helpers/select");
                b.exports = function(a) {
                    this.init = function() {
                        this.process(), this.bind()
                    }, this.initAnnimation = function() {
                        this.datas.animationLoader = new e(document.querySelectorAll(".swap img.await"), 76), this.els.animLoader.appendChild(this.datas.animationLoader.el), window.console.log("initAnnimation done")
                    }, this.bind = function() {
                        this.datas.select = new f(this.els.select), this.el.addEventListener("transitionend", this.handleTransition.bind(this)), this.els.form.addEventListener("submit", function(a) {
                            a.preventDefault()
                        }), this.datas.tapSubmit = new d(this.els.next), this.datas.tapSubmit.on("tap", this.handleSubmit.bind(this)), this.els.textarea.addEventListener("input", this.handleInput.bind(this)), this.datas.tapFieldset = new d(this.els.fieldset), this.datas.tapFieldset.on("tap", function(a) {
                            this.datas.isLoadingCity || a.gesture.target === this.els.fieldset && (c.publish("webgl.zoom", !1), this.el.classList.add("hide"), this.el.classList.remove("show"))
                        }.bind(this)), this.datas.tapBackZoom = new d(this.els.cityBack), this.datas.tapBackZoom.on("tap", function() {
                            c.publish("webgl.zoom", !1), this.el.classList.add("hide"), this.el.classList.remove("show")
                        }.bind(this)), this.datas.tapLegend = new d(this.els.legend), this.datas.tapLegend.on("tap", function() {
                            this.el.classList.add("select")
                        }.bind(this)), this.datas.tapCity = new d(this.els.cityLabel), this.datas.tapCity.on("tap", function() {
                            this.el.classList.add("select")
                        }.bind(this)), c.subscribe("cityLoaded", function() {
                            window.console.log("we remove wait to " + this.els.next), this.els.next.classList.remove("wait"), this.datas.animationLoader.pause(), this.datas.isLoadingCity = !1
                        }.bind(this)), c.subscribe("webgl.city", function() {
                            window.console.log("we add wait to " + this.els.next), this.els.next.classList.add("wait"), this.datas.animationLoader.play(), this.datas.isLoadingCity = !0
                        }.bind(this)), this.datas.tapClose = new d(this.els.cityClose), this.datas.tapClose.on("tap", function() {
                            this.el.classList.remove("select")
                        }.bind(this)), this.datas.tapBack = new d(this.els.messageBack), this.datas.tapBack.on("tap", this.handleBack.bind(this)), this.datas.tapCityOk = new d(this.els.cityOk), this.datas.currentCity = a.userCity, this.datas.tapCityOk.on("tap", function(a) {
                            this.handleSelectChange(a), window.setTimeout(function() {
                                this.el.classList.remove("select")
                            }.bind(this), 10)
                        }.bind(this)), this.initAnnimation()
                    }, this.handleBack = function() {
                        var a = this.els.fieldset.previousElementSibling;
                        "FIELDSET" === a.nodeName && (this.els.fieldset.classList.add("fade"), this.els.fieldset.classList.remove("show"), a.classList.add("show"), this.els.fieldset = a, this.els.submit.innerHTML = this.els.submit.dataset.next, this.els.submit.parentNode.removeAttribute("disabled"))
                    }, this.handleInput = function() {
                        var a = this.datas.max - this.els.textarea.value.length;
                        this.els.count.classList.toggle("error", 0 > a), this.els.submit.parentNode[0 > a ? "setAttribute" : "removeAttribute"]("disabled", !0), this.els.count.innerHTML = a, this.els.messageLabel.style.display = a !== this.datas.max ? "none" : "", this.els.submit.innerHTML = this.els.submit.dataset[a !== this.datas.max ? "next" : "skip"]
                    }, this.handleSelectChange = function(b) {
                        var d = this.els.options[this.els.select.selectedIndex];
                        window.console.log("site city " + a.userCity), window.console.log("form city " + this.els.form.city.value), this.datas.currentCity !== this.els.form.city.value && (window.console.log("city name diff " + this.datas.currentCity + " " + this.els.form.city.value), this.els.cityLabel.innerHTML = d.innerHTML, b && (c.publish("city", d.value), c.publish("webgl.city", d.value)), this.datas.currentCity = this.els.form.city.value)
                    }, this.handleSubmit = function(a) {
                        if (!this.datas.isLoadingCity) {
                            a.preventDefault(), a.stopPropagation();
                            var b = this.els.fieldset.nextElementSibling;
                            if ("FIELDSET" === b.nodeName) return this.els.fieldset.classList.add("fade"), this.els.fieldset.classList.remove("show"), b.classList.add("show"), this.els.fieldset = b, this.els.submit.innerHTML = this.els.submit.dataset[this.els.textarea.value.length > 0 ? "next" : "skip"], void this.els.submit.parentNode[this.els.textarea.value.length > this.datas.max ? "setAttribute" : "removeAttribute"]("disabled", !0);
                            if (this.els.textarea.value.length > this.datas.max) return;
                            var d = {
                                city: this.els.form.city.value,
                                message: this.els.form.message.value
                            };
                            if (this.datas.information.city !== d.city || this.datas.information.message !== d.message) {
                                this.datas.information = d;
                                var e = new XMLHttpRequest;
                                e.open("POST", "http://ec2-54-65-84-140.ap-northeast-1.compute.amazonaws.com:3000/new", !1), e.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), e.onload = function() {
                                    if (e.status >= 200 && e.status < 400) {
                                        var a = JSON.parse(e.responseText);
                                        c.publish("share", a.hashtag), c.publish("page.share", "show"), this.el.classList.add("hide"), this.el.classList.remove("show")
                                    }
                                }.bind(this), e.onerror = function() {}, e.send(JSON.stringify(this.datas.information))
                            } else c.publish("page.share", "show"), this.el.classList.add("hide"), this.el.classList.remove("show")
                        }
                    }, this.handleTransition = function(a) {
                        this.handleSelectChange(a);
                        var b = a.target;
                        return b.classList.contains("fade") ? void b.classList.remove("fade") : "opacity" === a.propertyName && b.classList.contains("hide") ? void b.classList.remove("hide") : b === this.el ? (b.style.display = "", b.style.visibility = "", void("opacity" === a.propertyName && b.classList.add("hide"))) : void 0
                    }, this.process = function() {
                        var b = a.geoCity;
                        this.el = document.getElementById("city"), this.els = {
                            form: this.el.querySelector("form"),
                            next: this.el.querySelector(".submit"),
                            animLoader: this.el.querySelector(".submit .loader"),
                            submit: this.el.querySelector(".submit span"),
                            fieldset: this.el.querySelector("fieldset"),
                            select: document.getElementById("cities"),
                            options: [].slice.call(this.el.querySelectorAll("option")),
                            cityLabel: this.el.querySelector(".city label span"),
                            cityBack: this.el.querySelector(".city .bt-back"),
                            cityClose: this.el.querySelector(".city .bt-close"),
                            cityOk: this.el.querySelector(".city .bt-action.ok"),
                            zoomin: this.el.querySelector(".city .bt-zoomin"),
                            textarea: document.getElementById("message"),
                            messageLabel: this.el.querySelector(".message label"),
                            messageBack: this.el.querySelector(".message .bt-back"),
                            count: this.el.querySelector(".count"),
                            legend: this.el.querySelector(".legend")
                        }, this.els.options.forEach(function(a) {
                            a.value === b && a.setAttribute("selected", "selected")
                        }, this), this.els.fieldset.classList.add("show"), this.datas = {
                            max: +this.els.textarea.dataset.max,
                            length: this.els.textarea.value.length,
                            information: {}
                        }, this.handleSelectChange(), ga("send", "pageview", {
                            page: "/city?id=" + this.els.form.city.value,
                            title: "city"
                        })
                    }, c.subscribe("app.start", this.init.bind(this))
                }
            }, {
                "../helpers/select": 4,
                "./animation": 7,
                hammerjs: 1,
                "pubsub-js": 3
            }],
            9: [function(a, b) {
                var c, d = a("pubsub-js"),
                    e = a("lodash"),
                    f = a("hammerjs"),
                    g = a("./animation");
                "undefined" != typeof document.hidden ? c = "visibilitychange" : "undefined" != typeof document.mozHidden ? c = "mozvisibilitychange" : "undefined" != typeof document.msHidden ? c = "msvisibilitychange" : "undefined" != typeof document.webkitHidden && (c = "webkitvisibilitychange"), document.hidden = document.hidden || document.mozHidden || document.msHidden || document.webkitHidden, b.exports = function(a) {
                    this.init = function() {
                        this.preload(), this.bind()
                    }, this.bind = function() {
                        d.subscribe("webgl", this.send.bind(this)), this.datas.tapCreate = new f(this.els.create), this.datas.tapCreate.on("tap", this.handleCreateAction.bind(this)), document.body.addEventListener("transitionend", this.handleTransition.bind(this)), document.addEventListener(c, this.handleVisibilityChange.bind(this), !1), d.subscribe("tutorial.done", function() {
                            this.datas.tutorialDone = !0, this.datas.siteAligned && this.handleCreateButton(!0)
                        }.bind(this))
                    }, this.displayStart = function() {
                        this.els.status.classList.remove("show"), this.els.start.classList.add("ready")
                    }, this.fallback = function() {}, this.getAnimation = function() {
                        var a = window.require;
                        a.config({
                            baseUrl: "./js/assets",
                            waitSeconds: 0
                        }), a(["app"], this.start.bind(this))
                    }, this.handleError = function() {}, this.handleStatus = function(a) {
                        switch ("progress" !== a.code, a.code) {
                            case "sign-aligned":
                                this.datas.siteAligned = a.data, this.datas.tutorialDone && this.handleCreateButton(a.data);
                                break;
                            case "ready":
                                break;
                            case "city-ready":
                                window.console && window.console.info("city ready"), d.publish("cityLoaded");
                                break;
                            case "progress":
                                this.datas.webglLoaded = a.data, this.updateLoader();
                                break;
                            case "citysight-complete":
                                d.publish("page.city", "show");
                                break;
                            case "intro-complete":
                                d.publish("page.tutorial", "show")
                        }
                    }, this.handleCreateAction = function() {
                        this.handleCreateButton(), this.send("webgl.zoom", !0)
                    }, this.handleCreateButton = function(a) {
                        a && (this.els.create.style.zIndex = 1), this.els.create.classList.toggle("show", a)
                    }, this.handleTransition = function(a) {
                        a.target === this.el && (this.el.style.display = "none", this.datas.canvas.pause())
                    }, this.handleVisibilityChange = function() {
                        this.els.audio[document.hidden ? "pause" : "play"](), this.send("webgl.playback", document.hidden)
                    }, this.play = function(a) {
                        this.datas.canvas = new g(a), this.els.container.appendChild(this.datas.canvas.el), this.datas.canvas.play(), this.getAnimation()
                    }, this.prefetchAudio = function() {
                        var a, b = new XMLHttpRequest;
                        b.open("GET", this.els.audio.src, !0), b.addEventListener("progress", function(b) {
                            b.lengthComputable && (a = Math.round(b.loaded / b.total * 3) / 10, this.datas.audioLoaded !== a && (this.datas.audioLoaded = a, this.updateLoader()))
                        }.bind(this)), b.send()
                    }, this.preload = function() {
                        this.play([].slice.call(document.querySelectorAll(".swap img.aloader")))
                    }, this.process = function(b) {
                        this.el = document.getElementById("loader"), this.els = {
                            create: document.querySelector(".bt-create"),
                            status: document.querySelector("#loader small"),
                            container: this.el.querySelector(".snow"),
                            audio: this.el.querySelector("audio")
                        }, this.datas = {
                            audioLoaded: 0,
                            webglLoaded: 0,
                            webgl: {
                                container: "xp",
                                assetsDir: "media/assets",
                                city: a.userCity,
                                message: {
                                    text: a.userMessage.toUpperCase(),
                                    lineHeight: 40,
                                    font: "28pt ArcherBook",
                                    color: "#EBE4D4"
                                }
                            }
                        }, e.assign(this.datas.webgl, b || {}), this.init()
                    }, this.send = function(a, b) {
                        var c = a.split(".")[1];
                        switch (c) {
                            case "city":
                                this.app.setCity(b);
                                break;
                            case "message":
                                this.app.setMessage({
                                    text: b
                                });
                                break;
                            case "start":
                                this.app.intro();
                                break;
                            case "zoom":
                                this.app.citySight(b);
                                break;
                            case "playback":
                                this.app && this.app.playback && this.app.playback(b)
                        }
                    }, this.start = function(a) {
                        this.app = new a, this.app.initialize(this.datas.webgl).then(this.fallback.bind(this), this.handleError.bind(this), this.handleStatus.bind(this)), this.prefetchAudio()
                    }, this.updateLoader = function() {
                        var a = Math.floor((this.datas.webglLoaded + this.datas.audioLoaded) / 1.3 * 100);
                        this.els.status.classList.contains("show") || this.els.status.classList.add("show"), this.els.status.innerHTML = [a, "%"].join(""), 100 === a && (this.el.classList.add("fade"), d.publish("page.tutorial", "show"))
                    }, d.subscribe("data", this.process.bind(this)), window.onload = this.process.bind(this)
                }
            }, {
                "./animation": 7,
                hammerjs: 1,
                lodash: 2,
                "pubsub-js": 3
            }],
            10: [function(a, b) {
                var c = a("pubsub-js"),
                    d = a("lodash");
                b.exports = function() {
                    this.init = function() {
                        this.process(), this.bind()
                    }, this.bind = function() {
                        c.subscribe("page", this.handlePage.bind(this)), document.body.addEventListener("transitionend", this.handleTransition.bind(this))
                    }, this.process = function() {
                        this.els = {
                            pages: [].slice.call(document.querySelectorAll("header#intro, main > section[id]"))
                        }, this.datas = {
                            pages: {}
                        }, d.each(this.els.pages, function(a) {
                            this.datas.pages[a.id] = a
                        }, this)
                    }, this.handlePage = function(a, b) {
                        var c, d = a.split(".")[1],
                            e = this.datas.pages[d];
                        e && (this.datas.currentPage = e, e.style.display = "show" === b ? "block" : "", e.style.visibility = "show" === b ? "visible" : "", window.requestAnimationFrame(function() {
                            c = e.classList.toggle(b), "intro" === d && c && window.setTimeout(function() {
                                this.handlePage("page.intro", "show")
                            }.bind(this), 7e3)
                        }.bind(this)))
                    }, this.handleTransition = function(a) {
                        var b = a.target;
                        ~~this.els.pages.indexOf(b) || b.classList.contains("show") || (b.style.display = "", b.style.visibility = "")
                    }, this.startXP = function() {
                        this.datas.tapIntro.enable(!1), c.publish("webgl.start"), c.publish("page.intro", "show")
                    }, c.subscribe("app.start", this.init.bind(this))
                }
            }, {
                lodash: 2,
                "pubsub-js": 3
            }],
            11: [function(a, b) {
                var c = a("pubsub-js"),
                    d = a("lodash"),
                    e = a("hammerjs");
                b.exports = function(a) {
                    this.init = function() {
                        this.process(), this.bind()
                    }, this.bind = function() {
                        this.el.addEventListener("transitionend", this.handleTransition.bind(this)), c.subscribe("city", function(a, b) {
                            this.datas.city = b
                        }.bind(this)), this.els.sharers.forEach(function(a) {
                            a.hammer = new e(a), a.hammer.on("tap", this.handleShare.bind(this))
                        }, this), this.els.back.hammer = new e(this.els.back), this.els.back.hammer.on("tap", function() {
                            this.el.classList.add("hide"), this.el.classList.remove("show"), c.publish("page.city", "show")
                        }.bind(this)), c.subscribe("share", function(a, b) {
                            var c = "";
                            window.console.log("cityname = " + this.datas.city), "generic" !== this.datas.city && (c = "sanfransisco" === this.datas.city ? "sanfrancisco.html" : "shangai" === this.datas.city ? "shanghai.html" : this.datas.city + ".html"), this.datas.shareLink = [this.datas.shareUrl, c + "#" + b].join("/"), this.els.shareLink.setAttribute("href", this.datas.shareLink), this.els.shareLink.innerHTML = this.datas.shareLink.replace("http://", "")
                        }.bind(this))
                    }, this.process = function() {
                        this.el = document.getElementById("share"), this.els = {
                            sharers: [].slice.call(this.el.querySelectorAll(".social .bt-action")),
                            shareLink: this.el.querySelector(".getLink"),
                            back: this.el.querySelector(".bt-back")
                        }, this.els.shareLink.style.display = "none", this.datas = {
                            city: a.userCity,
                            shareUrl: "http://" + document.location.host,
                            socialUrl: {
                                facebook: "//www.facebook.com/sharer.php",
                                twitter: "//twitter.com/intent/tweet",
                                gplus: "https://plus.google.com/share",
                                email: "mailto:"
                            }
                        }, this.datas.shareLink = this.datas.shareUrl
                    }, this.handleShare = function(a) {
                        var b, c = d.find(this.els.sharers, function(b) {
                                return b.contains(a.target)
                            }),
                            e = c.className.replace("bt-action ", ""),
                            f = [this.datas.socialUrl[e]],
                            g = document.querySelector('head meta[name="og:description"]');
                        switch (g = g ? g.getAttribute("content") : "", window.console.log("handleShare " + e), e) {
                            case "facebook":
                                b = ["u=" + encodeURIComponent(this.datas.shareLink)];
                                break;
                            case "twitter":
                                b = ["text=" + encodeURIComponent("Wrap up warm - I’ve left my holiday wishes for you in Winterlands " + this.datas.shareLink + " via @AKQA")];
                                break;
                            case "email":
                                b = ["Subject=" + encodeURIComponent("Greetings from Winterlands"), "Body=" + encodeURIComponent(["Wrap up warm - I’ve left my holiday wishes for you in Winterlands", this.datas.shareLink].join(" "))];
                                break;
                            default:
                                b = ["url=" + encodeURIComponent(this.datas.shareLink)]
                        }
                        f.push(b.join("&")), "email" !== e ? window.open(f.join("?")) : window.location.href = f.join("?")
                    }, this.handleTransition = function(a) {
                        this.els.shareLink.style.display = "block", setTimeout(function() {
                            this.els.shareLink.parentNode.classList.add("show")
                        }.bind(this), 100);
                        var b = a.target;
                        b.classList.contains("hide") && (b.style.display = "", b.style.visibility = "", b.classList.remove("hide")), ga("send", "pageview", {
                            page: "/share",
                            title: "share"
                        })
                    }, c.subscribe("app.start", this.init.bind(this))
                }
            }, {
                hammerjs: 1,
                lodash: 2,
                "pubsub-js": 3
            }],
            12: [function(a, b) {
                var c = a("pubsub-js"),
                    d = a("hammerjs"),
                    e = a("./animation");
                b.exports = function() {
                    this.init = function() {
                        this.process(), this.bind()
                    }, this.bind = function() {
                        this.datas.tapClose = new d(this.els.close), this.el.addEventListener("transitionend", this.handleTransition.bind(this)), this.datas.tapClose.on("tap", this.goNext.bind(this)), this.datas.tapStart = new d(this.els.start), this.datas.tapStart.on("tap", function() {
                            this.goNext(), this.els.audio.play(), c.publish("webgl.start")
                        }.bind(this)), c.subscribe("page.tutorial", function() {
                            window.requestAnimationFrame(function() {
                                this.el.classList.contains("hide") && (this.el.classList.remove("hide"), this.el.classList.add("fadein"), this.el.classList.add("show"), this.el.style.opacity = 1);
                                var a = this.els.screens[this.datas.screenIndex];
                                !a.anim && this.els.animation[this.datas.screenIndex] && (a.anim = new e(this.els.animation[this.datas.screenIndex]), a.querySelector(".info").appendChild(a.anim.el)), a.classList.add("show"), a.anim && window.setTimeout(function() {
                                    a.anim.play(), this.datas.screenIndex > 0 && (this.datas.timeout = window.setTimeout(function() {
                                        this.goNext()
                                    }.bind(this), this.datas.durations[this.datas.screenIndex]))
                                }.bind(this), 400)
                            }.bind(this))
                        }.bind(this))
                    }, this.process = function() {
                        this.el = document.getElementById("tutorial"), this.els = {
                            close: this.el.querySelector(".bt-close"),
                            start: this.el.querySelector(".bt-action"),
                            audio: document.querySelector("audio"),
                            screens: [].slice.call(this.el.querySelectorAll(".screen"))
                        }, this.datas = {
                            animations: ["360", "swipe", "shake"],
                            durations: [4800, 2350, 3900],
                            screenIndex: 0
                        }, this.els.animation = [document.querySelectorAll(".swap img.a360"), document.querySelectorAll(".swap img.aswipe"), document.querySelectorAll(".swap img.ashake")]
                    }, this.goNext = function() {
                        var a = this.els.screens[this.datas.screenIndex],
                            b = this.els.screens[++this.datas.screenIndex];
                        if (window.clearTimeout(this.datas.timeout), a && (a.anim && a.anim.pause(), a.classList.add("fade"), a.classList.remove("show")), !b || b.classList.contains("wait")) {
                            if (this.el.classList.add("hide"), this.el.classList.remove("show"), !b) return void c.publish("tutorial.done");
                            !b.anim && this.els.animation[this.datas.screenIndex] && (b.anim = new e(this.els.animation[this.datas.screenIndex]), b.querySelector(".info").appendChild(b.anim.el)), window.requestAnimationFrame(function() {
                                c.publish("page.intro", "show")
                            }.bind(this))
                        } else !b.anim && this.els.animation[this.datas.screenIndex] && (b.anim = new e(this.els.animation[this.datas.screenIndex]), b.querySelector(".info").appendChild(b.anim.el)), b.classList.add("show"), b.anim && b.anim.play(600), this.datas.timeout = window.setTimeout(function() {
                            this.goNext()
                        }.bind(this), this.datas.durations[this.datas.screenIndex])
                    }, this.handleTransition = function(a) {
                        var b = a.target;
                        return b.classList.contains("hide") ? (b.style.display = "", b.style.visibility = "", this.els.close.style.display = "block", void(this.els.start.style.display = "none")) : b.classList.contains("fadein") ? (b.classList.remove("fadein"), void(b.style.opacity = "")) : void(b === this.els.start && this.els.start.classList.contains("fade") && (this.els.start.classList.remove("fade"), this.els.start.classList.add("hide")))
                    }, c.subscribe("app.start", this.init.bind(this))
                }
            }, {
                "./animation": 7,
                hammerjs: 1,
                "pubsub-js": 3
            }]
        }, {}, [6])
}({}, function() {
    return this
}());
