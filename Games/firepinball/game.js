! function(t) {
    "use strict";

    function e(t, e) {
        function i() {}
        i.prototype = t;
        var s = new i;
        for (var n in e) s[n] = e[n];
        return e.toString !== Object.prototype.toString && (s.toString = e.toString), s
    }

    function i(t) {
        return t instanceof Array ? function() {
            return l.iter(t)
        } : "function" == typeof t.iterator ? s(t, t.iterator) : t.iterator
    }

    function s(t, e) {
        if (null == e) return null;
        null == e.__id__ && (e.__id__ = Rn++);
        var i;
        return null == t.hx__closures__ ? t.hx__closures__ = {} : i = t.hx__closures__[e.__id__], null == i && (i = function() {
            return i.method.apply(i.scope, arguments)
        }, i.scope = t, i.method = e, t.hx__closures__[e.__id__] = i), i
    }
    var n = {},
        r = function() {
            return _n.__string_rec(this, "")
        },
        o = function() {};
    n.DateTools = o, o.__name__ = ["DateTools"], o.delta = function(t, e) {
        var i = t.getTime() + e,
            s = new Date;
        return s.setTime(i), s
    };
    var a = function(t, e) {
        e = e.split("u").join(""), this.r = new RegExp(t, e)
    };
    n.EReg = a, a.__name__ = ["EReg"], a.prototype = {
        match: function(t) {
            return this.r.global && (this.r.lastIndex = 0), this.r.m = this.r.exec(t), this.r.s = t, null != this.r.m
        },
        matched: function(t) {
            if (null != this.r.m && t >= 0 && t < this.r.m.length) return this.r.m[t];
            throw new hn("EReg::matched")
        },
        replace: function(t, e) {
            return t.replace(this.r, e)
        },
        __class__: a
    };
    var l = function() {};
    n.HxOverrides = l, l.__name__ = ["HxOverrides"], l.strDate = function(t) {
        var e = t.length;
        switch (e) {
            case 8:
                var i = t.split(":"),
                    s = new Date;
                return s.setTime(0), s.setUTCHours(i[0]), s.setUTCMinutes(i[1]), s.setUTCSeconds(i[2]), s;
            case 10:
                var n = t.split("-");
                return new Date(n[0], n[1] - 1, n[2], 0, 0, 0);
            case 19:
                var r = t.split(" "),
                    o = r[0].split("-"),
                    a = r[1].split(":");
                return new Date(o[0], o[1] - 1, o[2], a[0], a[1], a[2]);
            default:
                throw new hn("Invalid date format : " + t)
        }
    }, l.cca = function(t, e) {
        var i = t.charCodeAt(e);
        return i != i ? void 0 : i
    }, l.substr = function(t, e, i) {
        return null != e && 0 != e && null != i && 0 > i ? "" : (null == i && (i = t.length), 0 > e ? (e = t.length + e, 0 > e && (e = 0)) : 0 > i && (i = t.length + i - e), t.substr(e, i))
    }, l.indexOf = function(t, e, i) {
        var s = t.length;
        for (0 > i && (i += s, 0 > i && (i = 0)); s > i;) {
            if (t[i] === e) return i;
            i++
        }
        return -1
    }, l.remove = function(t, e) {
        var i = l.indexOf(t, e, 0);
        return -1 == i ? !1 : (t.splice(i, 1), !0)
    }, l.iter = function(t) {
        return {
            cur: 0,
            arr: t,
            hasNext: function() {
                return this.cur < this.arr.length
            },
            next: function() {
                return this.arr[this.cur++]
            }
        }
    };
    var h = function() {};
    n.Lambda = h, h.__name__ = ["Lambda"], h.has = function(t, e) {
        for (var s = i(t)(); s.hasNext();) {
            var n = s.next();
            if (n == e) return !0
        }
        return !1
    }, h.exists = function(t, e) {
        for (var s = i(t)(); s.hasNext();) {
            var n = s.next();
            if (e(n)) return !0
        }
        return !1
    };
    var _ = function() {
        this.length = 0
    };
    n.List = _, _.__name__ = ["List"], _.prototype = {
        add: function(t) {
            var e = [t];
            null == this.h ? this.h = e : this.q[1] = e, this.q = e, this.length++
        },
        push: function(t) {
            var e = [t, this.h];
            this.h = e, null == this.q && (this.q = e), this.length++
        },
        remove: function(t) {
            for (var e = null, i = this.h; null != i;) {
                if (i[0] == t) return null == e ? this.h = i[1] : e[1] = i[1], this.q == i && (this.q = e), this.length--, !0;
                e = i, i = i[1]
            }
            return !1
        },
        iterator: function() {
            return new u(this.h)
        },
        __class__: _
    };
    var u = function(t) {
        this.head = t, this.val = null
    };
    n["_List.ListIterator"] = u, u.__name__ = ["_List", "ListIterator"], u.prototype = {
        hasNext: function() {
            return null != this.head
        },
        next: function() {
            return this.val = this.head[0], this.head = this.head[1], this.val
        },
        __class__: u
    }, Math.__name__ = ["Math"];
    var c = function() {};
    n.Reflect = c, c.__name__ = ["Reflect"], c.hasField = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, c.field = function(t, e) {
        try {
            return t[e]
        } catch (i) {
            return i instanceof hn && (i = i.val), null
        }
    }, c.setField = function(t, e, i) {
        t[e] = i
    }, c.callMethod = function(t, e, i) {
        return e.apply(t, i)
    }, c.fields = function(t) {
        var e = [];
        if (null != t) {
            var i = Object.prototype.hasOwnProperty;
            for (var s in t) "__id__" != s && "hx__closures__" != s && i.call(t, s) && e.push(s)
        }
        return e
    }, c.isFunction = function(t) {
        return "function" == typeof t && !(t.__name__ || t.__ename__)
    }, c.compareMethods = function(t, e) {
        return t == e ? !0 : c.isFunction(t) && c.isFunction(e) ? t.scope == e.scope && t.method == e.method && null != t.method : !1
    }, c.deleteField = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e) ? (delete t[e], !0) : !1
    };
    var p = function() {};
    n.Std = p, p.__name__ = ["Std"], p.is = function(t, e) {
        return _n.__instanceof(t, e)
    }, p.string = function(t) {
        return _n.__string_rec(t, "")
    }, p["int"] = function(t) {
        return 0 | t
    }, p.parseInt = function(t) {
        var e = parseInt(t, 10);
        return 0 != e || 120 != l.cca(t, 1) && 88 != l.cca(t, 1) || (e = parseInt(t)), isNaN(e) ? null : e
    }, p.parseFloat = function(t) {
        return parseFloat(t)
    }, p.random = function(t) {
        return 0 >= t ? 0 : Math.floor(Math.random() * t)
    };
    var g = function() {
        this.b = ""
    };
    n.StringBuf = g, g.__name__ = ["StringBuf"], g.prototype = {
        add: function(t) {
            this.b += p.string(t)
        },
        addSub: function(t, e, i) {
            this.b += null == i ? l.substr(t, e, null) : l.substr(t, e, i)
        },
        __class__: g
    };
    var d = function() {};
    n.StringTools = d, d.__name__ = ["StringTools"], d.htmlEscape = function(t, e) {
        return t = t.split("&").join("&").split("<").join("&lt;").split(">").join("&gt;"), e ? t.split('"').join("&quot;").split("'").join("&#039;") : t
    }, d.isSpace = function(t, e) {
        var i = l.cca(t, e);
        return i > 8 && 14 > i || 32 == i
    }, d.ltrim = function(t) {
        for (var e = t.length, i = 0; e > i && d.isSpace(t, i);) i++;
        return i > 0 ? l.substr(t, i, e - i) : t
    }, d.rtrim = function(t) {
        for (var e = t.length, i = 0; e > i && d.isSpace(t, e - i - 1);) i++;
        return i > 0 ? l.substr(t, 0, e - i) : t
    }, d.trim = function(t) {
        return d.ltrim(d.rtrim(t))
    }, d.replace = function(t, e, i) {
        return t.split(e).join(i)
    }, d.hex = function(t, e) {
        var i = "",
            s = "0123456789ABCDEF";
        do i = s.charAt(15 & t) + i, t >>>= 4; while (t > 0);
        if (null != e)
            for (; i.length < e;) i = "0" + i;
        return i
    }, d.fastCodeAt = function(t, e) {
        return t.charCodeAt(e)
    };
    var f = n.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: ["TNull", "TInt", "TFloat", "TBool", "TObject", "TFunction", "TClass", "TEnum", "TUnknown"]
    };
    f.TNull = ["TNull", 0], f.TNull.toString = r, f.TNull.__enum__ = f, f.TInt = ["TInt", 1], f.TInt.toString = r, f.TInt.__enum__ = f, f.TFloat = ["TFloat", 2], f.TFloat.toString = r, f.TFloat.__enum__ = f, f.TBool = ["TBool", 3], f.TBool.toString = r, f.TBool.__enum__ = f, f.TObject = ["TObject", 4], f.TObject.toString = r, f.TObject.__enum__ = f, f.TFunction = ["TFunction", 5], f.TFunction.toString = r, f.TFunction.__enum__ = f, f.TClass = function(t) {
        var e = ["TClass", 6, t];
        return e.__enum__ = f, e.toString = r, e
    }, f.TEnum = function(t) {
        var e = ["TEnum", 7, t];
        return e.__enum__ = f, e.toString = r, e
    }, f.TUnknown = ["TUnknown", 8], f.TUnknown.toString = r, f.TUnknown.__enum__ = f;
    var m = function() {};
    n.Type = m, m.__name__ = ["Type"], m.getEnum = function(t) {
        return null == t ? null : t.__enum__
    }, m.getClassName = function(t) {
        var e = t.__name__;
        return null == e ? null : e.join(".")
    }, m.getEnumName = function(t) {
        var e = t.__ename__;
        return e.join(".")
    }, m.resolveClass = function(t) {
        var e = n[t];
        return null != e && e.__name__ ? e : null
    }, m.resolveEnum = function(t) {
        var e = n[t];
        return null != e && e.__ename__ ? e : null
    }, m.createInstance = function(t, e) {
        var i = e.length;
        switch (i) {
            case 0:
                return new t;
            case 1:
                return new t(e[0]);
            case 2:
                return new t(e[0], e[1]);
            case 3:
                return new t(e[0], e[1], e[2]);
            case 4:
                return new t(e[0], e[1], e[2], e[3]);
            case 5:
                return new t(e[0], e[1], e[2], e[3], e[4]);
            case 6:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
            case 7:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
            case 8:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]);
            default:
                throw new hn("Too many arguments")
        }
        return null
    }, m.createEmptyInstance = function(t) {
        function e() {}
        return e.prototype = t.prototype, new e
    }, m.createEnum = function(t, e, i) {
        var s = c.field(t, e);
        if (null == s) throw new hn("No such constructor " + e);
        if (c.isFunction(s)) {
            if (null == i) throw new hn("Constructor " + e + " need parameters");
            return c.callMethod(t, s, i)
        }
        if (null != i && 0 != i.length) throw new hn("Constructor " + e + " does not need parameters");
        return s
    }, m.createEnumIndex = function(t, e, i) {
        var s = t.__constructs__[e];
        if (null == s) throw new hn(e + " is not a valid enum constructor index");
        return m.createEnum(t, s, i)
    }, m.getEnumConstructs = function(t) {
        var e = t.__constructs__;
        return e.slice()
    }, m["typeof"] = function(t) {
        var e = typeof t;
        switch (e) {
            case "boolean":
                return f.TBool;
            case "string":
                return f.TClass(String);
            case "number":
                return Math.ceil(t) == t % 2147483648 ? f.TInt : f.TFloat;
            case "object":
                if (null == t) return f.TNull;
                var i = t.__enum__;
                if (null != i) return f.TEnum(i);
                var s = _n.getClass(t);
                return null != s ? f.TClass(s) : f.TObject;
            case "function":
                return t.__name__ || t.__ename__ ? f.TObject : f.TFunction;
            case "undefined":
                return f.TNull;
            default:
                return f.TUnknown
        }
    }, m.enumEq = function(t, e) {
        if (t == e) return !0;
        try {
            if (t[0] != e[0]) return !1;
            for (var i = 2, s = t.length; s > i;) {
                var n = i++;
                if (!m.enumEq(t[n], e[n])) return !1
            }
            var r = t.__enum__;
            if (r != e.__enum__ || null == r) return !1
        } catch (o) {
            return o instanceof hn && (o = o.val), !1
        }
        return !0
    }, m.enumConstructor = function(t) {
        return t[0]
    }, m.enumParameters = function(t) {
        return t.slice(2)
    };
    var y = function(t) {
        this.nodeType = t, this.children = [], this.attributeMap = new ys
    };
    n.Xml = y, y.__name__ = ["Xml"], y.parse = function(t) {
        return Cs.parse(t)
    }, y.createElement = function(t) {
        var e = new y(y.Element);
        if (e.nodeType != y.Element) throw new hn("Bad node type, expected Element but found " + e.nodeType);
        return e.nodeName = t, e
    }, y.createPCData = function(t) {
        var e = new y(y.PCData);
        if (e.nodeType == y.Document || e.nodeType == y.Element) throw new hn("Bad node type, unexpected " + e.nodeType);
        return e.nodeValue = t, e
    }, y.createCData = function(t) {
        var e = new y(y.CData);
        if (e.nodeType == y.Document || e.nodeType == y.Element) throw new hn("Bad node type, unexpected " + e.nodeType);
        return e.nodeValue = t, e
    }, y.createComment = function(t) {
        var e = new y(y.Comment);
        if (e.nodeType == y.Document || e.nodeType == y.Element) throw new hn("Bad node type, unexpected " + e.nodeType);
        return e.nodeValue = t, e
    }, y.createDocType = function(t) {
        var e = new y(y.DocType);
        if (e.nodeType == y.Document || e.nodeType == y.Element) throw new hn("Bad node type, unexpected " + e.nodeType);
        return e.nodeValue = t, e
    }, y.createProcessingInstruction = function(t) {
        var e = new y(y.ProcessingInstruction);
        if (e.nodeType == y.Document || e.nodeType == y.Element) throw new hn("Bad node type, unexpected " + e.nodeType);
        return e.nodeValue = t, e
    }, y.createDocument = function() {
        return new y(y.Document)
    }, y.prototype = {
        get_nodeName: function() {
            if (this.nodeType != y.Element) throw new hn("Bad node type, expected Element but found " + this.nodeType);
            return this.nodeName
        },
        get_nodeValue: function() {
            if (this.nodeType == y.Document || this.nodeType == y.Element) throw new hn("Bad node type, unexpected " + this.nodeType);
            return this.nodeValue
        },
        set_nodeValue: function(t) {
            if (this.nodeType == y.Document || this.nodeType == y.Element) throw new hn("Bad node type, unexpected " + this.nodeType);
            return this.nodeValue = t
        },
        get: function(t) {
            if (this.nodeType != y.Element) throw new hn("Bad node type, expected Element but found " + this.nodeType);
            return this.attributeMap.get(t)
        },
        set: function(t, e) {
            if (this.nodeType != y.Element) throw new hn("Bad node type, expected Element but found " + this.nodeType);
            this.attributeMap.set(t, e)
        },
        exists: function(t) {
            if (this.nodeType != y.Element) throw new hn("Bad node type, expected Element but found " + this.nodeType);
            return this.attributeMap.exists(t)
        },
        attributes: function() {
            if (this.nodeType != y.Element) throw new hn("Bad node type, expected Element but found " + this.nodeType);
            return this.attributeMap.keys()
        },
        elements: function() {
            if (this.nodeType != y.Document && this.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var t, e = [], i = 0, s = this.children; i < s.length;) {
                var n = s[i];
                ++i, n.nodeType == y.Element && e.push(n)
            }
            return t = e, l.iter(t)
        },
        elementsNamed: function(t) {
            if (this.nodeType != y.Document && this.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var e, i = [], s = 0, n = this.children; s < n.length;) {
                var r = n[s];
                ++s, r.nodeType == y.Element && function() {
                    var t;
                    if (r.nodeType != y.Element) throw new hn("Bad node type, expected Element but found " + r.nodeType);
                    return t = r.nodeName
                }(this) == t && i.push(r)
            }
            return e = i, l.iter(e)
        },
        firstElement: function() {
            if (this.nodeType != y.Document && this.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var t = 0, e = this.children; t < e.length;) {
                var i = e[t];
                if (++t, i.nodeType == y.Element) return i
            }
            return null
        },
        addChild: function(t) {
            if (this.nodeType != y.Document && this.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + this.nodeType);
            null != t.parent && t.parent.removeChild(t), this.children.push(t), t.parent = this
        },
        removeChild: function(t) {
            if (this.nodeType != y.Document && this.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + this.nodeType);
            return l.remove(this.children, t) ? (t.parent = null, !0) : !1
        },
        toString: function() {
            return xs.print(this)
        },
        __class__: y
    };
    var b = function() {};
    n["awe6.interfaces.IPauseable"] = b, b.__name__ = ["awe6", "interfaces", "IPauseable"], b.prototype = {
        __class__: b
    };
    var v = function() {};
    n["awe6.interfaces.IDisposable"] = v, v.__name__ = ["awe6", "interfaces", "IDisposable"], v.prototype = {
        __class__: v
    };
    var S = function() {};
    n["awe6.interfaces.IUpdateable"] = S, S.__name__ = ["awe6", "interfaces", "IUpdateable"], S.prototype = {
        __class__: S
    };
    var E = function() {};
    n["awe6.interfaces.IProcess"] = E, E.__name__ = ["awe6", "interfaces", "IProcess"], E.__interfaces__ = [b, v, S];
    var w = function(t) {
        this._kernel = t, this._tools = this._kernel.tools, this._isEntity = _n.__instanceof(this, O), this._init()
    };
    n["awe6.core.Process"] = w, w.__name__ = ["awe6", "core", "Process"], w.__interfaces__ = [E], w.prototype = {
        _init: function() {
            this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this.isDisposed = !1, this._age = 0, this._updates = 0
        },
        dispose: function() {
            return this.isDisposed ? void 0 : (this.isDisposed = !0, this.set_isActive(!1), void this._disposer())
        },
        _disposer: function() {},
        getAge: function(t) {
            return null == t && (t = !0), t ? this._age : this._updates
        },
        update: function(t) {
            return null == t && (t = 0), !this.isActive || this.isDisposed ? void 0 : (this._age += t, this._updates++, void this._updater(t))
        },
        _updater: function(t) {
            null == t && (t = 0)
        },
        set_isActive: function(t) {
            return this.isDisposed ? (this.isActive = !1, !1) : (t != this.isActive && (this._isIsActiveSetterBypassed ? this.isActive = t : t ? this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(ei.RESUME, this, !0, !0, !0)) : !this.isActive || this.isDisposed || (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(ei.PAUSE, this, !0, !0, !0))), this._isIsActiveSetterBypassed = !1, this.isActive)
        },
        pause: function() {
            this.isActive && !this.isDisposed && (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(ei.PAUSE, this, !0, !0, !0))
        },
        _pauser: function() {},
        resume: function() {
            return this.isActive || this.isDisposed ? void 0 : (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), void(this._isEntity && this._kernel.messenger.sendMessage(ei.RESUME, this, !0, !0, !0)))
        },
        _resumer: function() {},
        __class__: w
    };
    var I = function() {};
    n["awe6.interfaces.IAssetManager"] = I, I.__name__ = ["awe6", "interfaces", "IAssetManager"], I.prototype = {
        __class__: I
    };
    var T = function() {};
    n["awe6.interfaces.IAssetManagerProcess"] = T, T.__name__ = ["awe6", "interfaces", "IAssetManagerProcess"], T.__interfaces__ = [E, I];
    var A = function(t) {
        w.call(this, t)
    };
    n["awe6.core.AAssetManager"] = A, A.__name__ = ["awe6", "core", "AAssetManager"], A.__interfaces__ = [T], A.__super__ = w, A.prototype = e(w.prototype, {
        _init: function() {
            this._PACKAGE_ID = "assets", w.prototype._init.call(this)
        },
        getAsset: function(t, e, i) {
            null == e && (e = this._kernel.getConfig("settings.assets.packages.default")), null == e && (e = this._PACKAGE_ID);
            var s = t;
            e.length > 0 && (s = e + "." + t);
            var n = m.resolveClass(s);
            return null == n ? null : (null == i && (i = []), m.createInstance(n, i))
        },
        __class__: A
    });
    var C = function() {};
    n["awe6.interfaces.IAgendaManager"] = C, C.__name__ = ["awe6", "interfaces", "IAgendaManager"], C.prototype = {
        __class__: C
    };
    var x = function() {};
    n["awe6.interfaces.IEntityCollection"] = x, x.__name__ = ["awe6", "interfaces", "IEntityCollection"], x.__interfaces__ = [C], x.prototype = {
        __class__: x
    };
    var P = function() {};
    n["awe6.interfaces.IViewable"] = P, P.__name__ = ["awe6", "interfaces", "IViewable"], P.prototype = {
        __class__: P
    };
    var O = function() {};
    n["awe6.interfaces.IEntity"] = O, O.__name__ = ["awe6", "interfaces", "IEntity"], O.__interfaces__ = [x, P, E], O.prototype = {
        __class__: O
    };
    var M = function(t, e, i) {
        null == this.get_view() && (this.view = new Xe(t, i, 0, this)), this.set_id(null == e ? t.tools.createGuid() : e), w.call(this, t)
    };
    n["awe6.core.Entity"] = M, M.__name__ = ["awe6", "core", "Entity"], M.__interfaces__ = [O], M.__super__ = w, M.prototype = e(w.prototype, {
        _init: function() {
            w.prototype._init.call(this), this.agenda = Je.ALWAYS, this._entityAgendaPairs = new ds, this._isAgendaDirty = !0, this._cachedEntities = []
        },
        _updater: function(t) {
            null == t && (t = 0), w.prototype._updater.call(this, t), this._isAgendaDirty && (this._cachedEntities = this._getEntities(this.get_agenda()), m.enumEq(this.get_agenda(), Je.ALWAYS) || (this._cachedEntities = this._cachedEntities.concat(this._getEntities(Je.ALWAYS))), this._isAgendaDirty = !1);
            for (var e = 0, i = this._cachedEntities; e < i.length;) {
                var s = i[e];
                ++e, s.update(t)
            }
        },
        _disposer: function() {
            this.remove(), this._kernel.messenger.removeSubscribers(this), this._kernel.messenger.removeSubscribers(null, null, null, this, null);
            var t = this._getEntities();
            t.reverse();
            for (var e = 0; e < t.length;) {
                var i = t[e];
                ++e, i.dispose()
            }
            for (var s = this._entityAgendaPairs.iterator(); s.hasNext();) {
                var n = s.next();
                this._entityAgendaPairs.remove(n)
            }
            this.get_view().dispose(), w.prototype._disposer.call(this)
        },
        addEntity: function(t, e, i, s) {
            if (null == s && (s = 0), null == i && (i = !1), this.isDisposed || null == t) return null;
            null == e && (e = Je.ALWAYS);
            for (var n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                var r = n.next();
                if (r.entity == t && m.enumEq(r.agenda, e)) return t
            }
            if (this._isAgendaDirty = !0, t.get_parent() != this && (t.remove(i), _n.__instanceof(t, M))) {
                var o = t;
                o._setParent(this)
            }
            var a = new N(t, e);
            return this._entityAgendaPairs.add(a), i && (m.enumEq(e, this.get_agenda()) || e == Je.ALWAYS ? this.get_view().addChild(t.get_view(), s) : (t.get_view().set_priority(s), a.isAddedToView = !0)), t
        },
        removeEntity: function(t, e, i) {
            if (null == i && (i = !1), !this.isDisposed && null != t) {
                for (var s = !1, n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                    var r = n.next();
                    r.entity != t || null != e && !m.enumEq(r.agenda, e) || (this._entityAgendaPairs.remove(r), s = !0)
                }
                if (s) {
                    if (this._isAgendaDirty = !0, _n.__instanceof(t, M)) {
                        var o = t;
                        o._setParent(null)
                    }
                    i && t.get_view().remove()
                }
            }
        },
        remove: function(t) {
            null == t && (t = !1), null != this.get_parent() && this.get_parent().removeEntity(this, null, t)
        },
        getEntities: function(t) {
            return this._getEntities(t)
        },
        _getEntities: function(t) {
            if (!this._isAgendaDirty && (null == t || m.enumEq(t, this.get_agenda()))) return this._cachedEntities;
            for (var e = [], i = this._entityAgendaPairs.iterator(); i.hasNext();) {
                var s = i.next();
                (null == t || m.enumEq(t, s.agenda)) && e.push(s.entity)
            }
            return e.reverse(), e
        },
        getEntitiesByClass: function(t, e, i, s, n) {
            if (null == n && (n = !1), null == s && (s = !1), null == i && (i = !1), n && null != this._kernel.scenes.get_scene()) return this._kernel.scenes.get_scene().getEntitiesByClass(t, e, !0);
            for (var r = [], o = this._getEntities(e), a = 0; a < o.length;) {
                var l = o[a];
                ++a, _n.__instanceof(l, t) && r.push(l), i && (r = r.concat(l.getEntitiesByClass(t, e, !0)))
            }
            return s && null != this.get_parent() && (r = r.concat(this.get_parent().getEntitiesByClass(t, e, !1, !0))), r
        },
        setAgenda: function(t) {
            if (null == t && (t = Je.ALWAYS), m.enumEq(this.get_agenda(), t)) return !1;
            this._isAgendaDirty = !0;
            for (var e = this._entityAgendaPairs.iterator(); e.hasNext();) {
                var i = e.next(),
                    s = m.enumEq(this.get_agenda(), i.agenda) && i.entity.get_view().get_parent() == this.get_view();
                s && i.entity.get_view().remove(), i.isAddedToView = i.isAddedToView || s
            }
            this.agenda = t;
            for (var n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                var r = n.next();
                r.isAddedToView && (m.enumEq(Je.ALWAYS, r.agenda) || m.enumEq(this.get_agenda(), r.agenda)) && this.get_view().addChild(r.entity.get_view())
            }
            return !0
        },
        _setParent: function(t) {
            this.parent = t
        },
        set_id: function(t) {
            return this.id = t, this.id
        },
        get_agenda: function() {
            return this.agenda
        },
        get_parent: function() {
            return this.parent
        },
        get_view: function() {
            return this.view
        },
        __class__: M
    });
    var R = function() {};
    n["awe6.interfaces.IPositionable"] = R, R.__name__ = ["awe6", "interfaces", "IPositionable"], R.prototype = {
        __class__: R
    };
    var B = function(t, e, i, s, n, r, o, a, l, h, _) {
        null == o && (o = 0), null == r && (r = 0), null == n && (n = 20), null == s && (s = 100), this._stateUp = new D(t, e), this._stateOver = new D(t, i), this.x = r, this.y = o, this.set_width(s), this.set_height(n), this._keyType = a, this.onClickCallback = l, this.onRollOverCallback = h, this.onRollOutCallback = _, M.call(this, t)
    };
    n["awe6.core.BasicButton"] = B, B.__name__ = ["awe6", "core", "BasicButton"], B.__interfaces__ = [R], B.__super__ = M, B.prototype = e(M.prototype, {
        _init: function() {
            M.prototype._init.call(this), this.get_view().set_x(this.x), this.get_view().set_y(this.y), this.isOver = !1, this.addEntity(this._stateUp, Je.SUB_TYPE(k.UP), !0), this.addEntity(this._stateOver, Je.SUB_TYPE(k.OVER), !0), this.setAgenda(Je.SUB_TYPE(k.UP))
        },
        _updater: function(t) {
            null == t && (t = 0), M.prototype._updater.call(this, t);
            var e = this._kernel.inputs.mouse,
                i = this._isPointInsideRectangle(e.x + this.get_view().x - this.get_view().globalX, e.y + this.get_view().y - this.get_view().globalY, this.x, this.y, this.width, this.height);
            i && e.set_cursorType(si.BUTTON), i && !this.isOver && this.onRollOver(), !i && this.isOver && (e.set_cursorType(si.AUTO), this.onRollOut()), this.isOver = i, this.isOver && e.getIsButtonDown() && this.setAgenda(Je.SUB_TYPE(k.OVER)), this.isOver && e.getIsButtonRelease() && this.onClick(), null != this._keyType && this._kernel.inputs.keyboard.getIsKeyRelease(this._keyType) && this.onClick()
        },
        _isPointInsideRectangle: function(t, e, i, s, n, r) {
            return i > t ? !1 : s > e ? !1 : t > i + n ? !1 : e > s + r ? !1 : !0
        },
        onClick: function() {
            this.setAgenda(Je.SUB_TYPE(k.UP)), null != this.onClickCallback && this.onClickCallback.apply(this, [])
        },
        onRollOver: function() {
            this.setAgenda(Je.SUB_TYPE(k.OVER)), null != this.onRollOverCallback && this.onRollOverCallback.apply(this, [])
        },
        onRollOut: function() {
            this.setAgenda(Je.SUB_TYPE(k.UP)), null != this.onRollOutCallback && this.onRollOutCallback.apply(this, [])
        },
        set_x: function(t) {
            return this.x = t, null != this.get_view() && this.get_view().set_x(this.x), this.x
        },
        set_y: function(t) {
            return this.y = t, null != this.get_view() && this.get_view().set_y(this.y), this.y
        },
        set_width: function(t) {
            return this.width = t, this.width
        },
        set_height: function(t) {
            return this.height = t, this.height
        },
        __class__: B
    });
    var D = function(t, e) {
        M.call(this, t), this.view = e
    };
    n["awe6.core._BasicButton._HelperState"] = D, D.__name__ = ["awe6", "core", "_BasicButton", "_HelperState"], D.__super__ = M, D.prototype = e(M.prototype, {
        __class__: D
    });
    var k = n["awe6.core._BasicButton._HelperEState"] = {
        __ename__: ["awe6", "core", "_BasicButton", "_HelperEState"],
        __constructs__: ["UP", "OVER"]
    };
    k.UP = ["UP", 0], k.UP.toString = r, k.UP.__enum__ = k, k.OVER = ["OVER", 1], k.OVER.toString = r, k.OVER.__enum__ = k;
    var L = function() {};
    n["awe6.interfaces.IEncrypter"] = L, L.__name__ = ["awe6", "interfaces", "IEncrypter"], L.prototype = {
        __class__: L
    };
    var U = function(t) {
        this._defaultSecret = t
    };
    n["awe6.core.Encrypter"] = U, U.__name__ = ["awe6", "core", "Encrypter"], U.__interfaces__ = [L], U.prototype = {
        decrypt: function(t, e) {
            null == e && (e = "");
            var i;
            return i = "" != e ? e : this._defaultSecret, this._xor(t, i)
        },
        _xor: function(t, e) {
            for (var i = us.alloc(t.length), s = 0, n = 0, r = i.length; r > n;) {
                var o = n++;
                i.set(o, t.b[o] ^ l.cca(e, s)), s++, s >= e.length && (s = 0)
            }
            return i
        },
        __class__: U
    };
    var N = function(t, e) {
        this.entity = t, this.agenda = e, this.isAddedToView = !1
    };
    n["awe6.core._Entity._HelperEntityAgendaPair"] = N, N.__name__ = ["awe6", "core", "_Entity", "_HelperEntityAgendaPair"], N.prototype = {
        __class__: N
    };
    var F = function() {};
    n["awe6.interfaces.IInputJoypad"] = F, F.__name__ = ["awe6", "interfaces", "IInputJoypad"], F.prototype = {
        __class__: F
    };
    var G = function(t, e, i, s, n, r, o, a, l, h, _, u, c, p) {
        this._kernel = t, this._keyUp = null != e ? e : ti.UP, this._keyRight = null != i ? i : ti.RIGHT, this._keyDown = null != s ? s : ti.DOWN, this._keyLeft = null != n ? n : ti.LEFT, this._keyPrimary = null != r ? r : ti.SPACE, this._keySecondary = null != o ? o : ti.Z, this._keyUpAlt = null != a ? a : ti.W, this._keyRightAlt = null != l ? l : ti.D, this._keyDownAlt = null != h ? h : ti.S, this._keyLeftAlt = null != _ ? _ : ti.A, this._keyPrimaryAlt = null != u ? u : ti.Q, this._keySecondaryAlt = null != c ? c : ti.E, this._joypadTouchType = null != p ? p : this._kernel.factory.joypadTouchType, this._isTouchEnabled = this._kernel.factory.joypadTouchType != $e.DISABLED, this._joypadStateCache = {
            age: 0,
            isFire: !1,
            isUp: !1,
            isRight: !1,
            isDown: !1,
            isLeft: !1,
            isPrevFire: !1,
            isPrevUp: !1,
            isPrevRight: !1,
            isPrevDown: !1,
            isPrevLeft: !1
        }
    };
    n["awe6.core.InputJoypad"] = G, G.__name__ = ["awe6", "core", "InputJoypad"], G.__interfaces__ = [F], G.prototype = {
        _checkKeyboard: function(t, e) {
            switch (t[1]) {
                case 0:
                    return this._checkKeyboard(qe.PRIMARY, e) || this._checkKeyboard(qe.SECONDARY, e);
                case 1:
                    return e(this._keyUp) || e(this._keyUpAlt);
                case 2:
                    return e(this._keyRight) || e(this._keyRightAlt);
                case 3:
                    return e(this._keyDown) || e(this._keyDownAlt);
                case 4:
                    return e(this._keyLeft) || e(this._keyLeftAlt);
                case 5:
                    return e(this._keyPrimary) || e(this._keyPrimaryAlt);
                case 6:
                    return e(this._keySecondary) || e(this._keySecondaryAlt)
            }
        },
        getIsButtonDown: function(t) {
            return this._checkKeyboard(t, (Mn = this._kernel.inputs.keyboard, s(Mn, Mn.getIsKeyDown))) || this._isTouchEnabled && this._checkTouchIsDown(t)
        },
        _getTouchButtonPosition: function(t) {
            switch (t[1]) {
                case 1:
                    return {
                        x: .5 * this._kernel.factory.width,
                        y: .25 * this._kernel.factory.height
                    };
                case 2:
                    return {
                        x: .75 * this._kernel.factory.width,
                        y: .5 * this._kernel.factory.height
                    };
                case 3:
                    return {
                        x: .5 * this._kernel.factory.width,
                        y: .75 * this._kernel.factory.height
                    };
                case 4:
                    return {
                        x: .25 * this._kernel.factory.width,
                        y: .5 * this._kernel.factory.height
                    };
                case 0:
                case 5:
                case 6:
                    return {
                        x: .5 * this._kernel.factory.width,
                        y: .5 * this._kernel.factory.height
                    }
            }
        },
        _getClosestTouchButton: function(t, e) {
            null == t && (t = this._mouse.x), null == e && (e = this._mouse.y);
            for (var i = 99999999, s = qe.FIRE, n = 0, r = [qe.FIRE, qe.UP, qe.RIGHT, qe.DOWN, qe.LEFT, qe.PRIMARY]; n < r.length;) {
                var o = r[n];
                ++n;
                var a = this._getTouchButtonPosition(o),
                    l = this._kernel.tools.distance(t, e, a.x, a.y, !0);
                i > l && (i = l, s = o)
            }
            return s
        },
        _getTouchState: function() {
            if (!(null != this._mouse ? !0 : _n.__instanceof(this._kernel.inputs.mouse, Le) ? function(t) {
                var e;
                return t._mouse = _n.__cast(t._kernel.inputs.mouse, Le), e = !0
            }(this) : !1) || this._mouse.getAge() == this._joypadStateCache.age) return this._joypadStateCache;
            var t = {
                    age: this._mouse.getAge(),
                    isFire: !1,
                    isUp: !1,
                    isRight: !1,
                    isDown: !1,
                    isLeft: !1,
                    isPrevFire: this._joypadStateCache.isFire,
                    isPrevUp: this._joypadStateCache.isUp,
                    isPrevRight: this._joypadStateCache.isRight,
                    isPrevDown: this._joypadStateCache.isDown,
                    isPrevLeft: this._joypadStateCache.isLeft
                },
                e = this._joypadTouchType;
            switch (e[1]) {
                case 1:
                    var i = this._getClosestTouchButton();
                    t.isFire = i == qe.FIRE && this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._mouse.getIsButtonDown() && (t.isUp = i == qe.UP, t.isRight = i == qe.RIGHT, t.isDown = i == qe.DOWN, t.isLeft = i == qe.LEFT);
                    break;
                case 2:
                    var s = e[2];
                    null == s && (s = 20), t.isFire = this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, t.isUp = this._mouse.getButtonDragHeight() < -s, t.isRight = this._mouse.getButtonDragWidth() > s, t.isDown = this._mouse.getButtonDragHeight() > s, t.isLeft = this._mouse.getButtonDragWidth() < -s;
                    break;
                case 3:
                    var n = e[2];
                    if (t.isFire = this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._kernel.inputs.mouse.getIsButtonDown()) {
                        null == n && (n = 100);
                        var r = this._mouse.getDeltaX(),
                            o = this._mouse.getDeltaY();
                        t.isUp = -n > o, t.isRight = r > n, t.isDown = o > n, t.isLeft = -n > r
                    }
            }
            return this._joypadStateCache = t, this._joypadStateCache
        },
        _checkTouchIsDown: function(t) {
            var e = this._getTouchState();
            switch (t[1]) {
                case 1:
                    return e.isUp;
                case 2:
                    return e.isRight;
                case 3:
                    return e.isDown;
                case 4:
                    return e.isLeft;
                case 0:
                case 5:
                case 6:
                    return e.isFire
            }
        },
        __class__: G
    };
    var j = function() {};
    n["awe6.interfaces.IResettable"] = j, j.__name__ = ["awe6", "interfaces", "IResettable"], j.prototype = {
        __class__: j
    };
    var H = function() {};
    n["awe6.interfaces.IInputManager"] = H, H.__name__ = ["awe6", "interfaces", "IInputManager"], H.__interfaces__ = [j], H.prototype = {
        __class__: H
    };
    var Y = function(t) {
        w.call(this, t)
    };
    n["awe6.core.InputManager"] = Y, Y.__name__ = ["awe6", "core", "InputManager"], Y.__interfaces__ = [H], Y.__super__ = w, Y.prototype = e(w.prototype, {
        _init: function() {
            w.prototype._init.call(this), this.joypad = this.createJoypad(), this.keyboard = this._inputKeyboard = new ke(this._kernel), this.mouse = this._inputMouse = new Le(this._kernel)
        },
        _updater: function(t) {
            null == t && (t = 0), w.prototype._updater.call(this, t), this._inputKeyboard.update(t), this._inputMouse.update(t)
        },
        _disposer: function() {
            this._inputKeyboard.dispose(), this._inputMouse.dispose(), w.prototype._disposer.call(this)
        },
        createJoypad: function(t, e, i, s, n, r, o, a, l, h, _, u, c) {
            return new G(this._kernel, t, e, i, s, n, r, o, a, l, h, _, u, c)
        },
        reset: function() {
            return this._inputKeyboard.dispose(), this._inputMouse.dispose(), this._init(), !0
        },
        __class__: Y
    });
    var X = function() {};
    n["awe6.interfaces.IMessageManager"] = X, X.__name__ = ["awe6", "interfaces", "IMessageManager"], X.__interfaces__ = [j], X.prototype = {
        __class__: X
    };
    var V = function(t) {
        w.call(this, t)
    };
    n["awe6.core.MessageManager"] = V, V.__name__ = ["awe6", "core", "MessageManager"], V.__interfaces__ = [X], V.__super__ = w, V.prototype = e(w.prototype, {
        _init: function() {
            w.prototype._init.call(this), this._isVerbose = !1, this._subscriptions = new ds, this._messageQueue = new _
        },
        removeSubscribers: function(t, e, i, s, n) {
            for (var r = this._getSubscriptions(t, e, i, s, n, !0), o = r.iterator(); o.hasNext();) {
                var a = o.next();
                this._subscriptions.remove(a), this._isVerbose && os.trace("Removing " + p.string(a.sender) + ":" + p.string(a.message), {
                    fileName: "MessageManager.hx",
                    lineNumber: 80,
                    className: "awe6.core.MessageManager",
                    methodName: "removeSubscribers"
                })
            }
        },
        sendMessage: function(t, e, i, s, n) {
            null == n && (n = !1), null == s && (s = !1), null == i && (i = !1), this._sendMessage(t, e, e, i, s, n)
        },
        reset: function() {
            return this.removeSubscribers(), this._messageQueue = new _, !0
        },
        _updater: function(t) {
            if (null == t && (t = 0), w.prototype._updater.call(this, t), this._isOkToSendMessage())
                for (var e = this._messageQueue.h, i = null; null != e;) {
                    var s;
                    s = function() {
                        var t;
                        return i = e[0], e = e[1], t = i
                    }(this), this._sendMessage(s.message, s.sender, s.target, s.isBubbleDown, s.isBubbleUp, s.isBubbleEverywhere), this._messageQueue.remove(s)
                }
        },
        _isOkToSendMessage: function() {
            return null != this._kernel.scenes.get_scene()
        },
        _sendMessage: function(t, e, i, s, n, r) {
            if (null == r && (r = !1), null == n && (n = !1), null == s && (s = !1), this._isVerbose && os.trace("Sending message: " + p.string(t) + " from " + e.id + "(" + p.string(null == e ? null : _n.getClass(e)) + ") via " + i.id + " (" + p.string(null == i ? null : _n.getClass(i)) + ")", {
                fileName: "MessageManager.hx",
                lineNumber: 119,
                className: "awe6.core.MessageManager",
                methodName: "_sendMessage"
            }), !this._isOkToSendMessage()) return void this._messageQueue.push(new Q(t, e, i, s, n, r));
            if (r) {
                var o = this._kernel.scenes.get_scene().getEntities()[0];
                if (null != o && null != o.get_parent()) return this._sendMessage(t, e, this._kernel.scenes.get_scene().getEntities()[0].get_parent(), !0)
            }
            for (var a = this._getSubscriptions(i, t, null, e), l = !0, h = a.iterator(); h.hasNext();) {
                var _ = h.next();
                if (l = this._send(_, t, e), !l) return
            }
            if (s)
                for (var u = i.getEntities(), c = 0; c < u.length;) {
                    var g = u[c];
                    ++c, this._sendMessage(t, e, g, !0)
                }
            n && null != i.get_parent() && p.is(i.get_parent(), O) && this._sendMessage(t, e, i.get_parent(), !1, !0)
        },
        _send: function(t, e, i) {
            var s = t.handler.apply(t.subscriber, [e, i]);
            return t.isRemovedAfterFirstSend && this._subscriptions.remove(t), s
        },
        _getSubscriptions: function(t, e, i, s, n, r) {
            null == r && (r = !1);
            for (var o = new ds, a = this._subscriptions.iterator(); a.hasNext();) {
                var l = a.next();
                if (null == t || t == l.subscriber || t == l.sender) {
                    if (null != e && !_n.__instanceof(e, l.messageClass)) {
                        var h = m["typeof"](e);
                        switch (h[1]) {
                            case 7:
                                {
                                    h[2]
                                }
                                if (m.getEnum(e) != m.getEnum(l.message) || e[0] != m.enumConstructor(l.message) || e.slice(2).toString() != m.enumParameters(l.message).toString()) continue;
                                break;
                            default:
                                if (e != l.message) continue
                        }
                    }
                    if (null == i || c.compareMethods(l.handler, i)) {
                        if (null != s) {
                            if (r) {
                                if (null != l.senderClassType) continue;
                                if (null == l.sender) continue
                            }
                            if (null != l.senderClassType && !_n.__instanceof(s, l.senderClassType)) continue;
                            if (null != l.sender && l.sender != s) continue
                        }
                        o.head = new gs(l, o.head)
                    }
                }
            }
            return o
        },
        __class__: V
    });
    var W = function() {};
    n["awe6.core._MessageManager._HelperSubscription"] = W, W.__name__ = ["awe6", "core", "_MessageManager", "_HelperSubscription"], W.prototype = {
        __class__: W
    };
    var Q = function(t, e, i, s, n, r) {
        null == r && (r = !1), null == n && (n = !1), null == s && (s = !1), this.message = t, this.sender = e, this.target = i, this.isBubbleDown = s, this.isBubbleUp = n, this.isBubbleEverywhere = r
    };
    n["awe6.core._MessageManager._HelperMessage"] = Q, Q.__name__ = ["awe6", "core", "_MessageManager", "_HelperMessage"], Q.prototype = {
        __class__: Q
    };
    var z = function() {};
    n["awe6.interfaces.IScene"] = z, z.__name__ = ["awe6", "interfaces", "IScene"], z.__interfaces__ = [P, x, E], z.prototype = {
        __class__: z
    };
    var J = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), this.type = e, this.isPauseable = i, this.isMuteable = s, this.isSessionSavedOnNext = n, w.call(this, t)
    };
    n["awe6.core.Scene"] = J, J.__name__ = ["awe6", "core", "Scene"], J.__interfaces__ = [z], J.__super__ = w, J.prototype = e(w.prototype, {
        _init: function() {
            w.prototype._init.call(this), this.isDisposable = !0, this._entity = new M(this._kernel), this.view = this._entity.get_view()
        },
        _updater: function(t) {
            null == t && (t = 0), w.prototype._updater.call(this, t), this._entity.update(t)
        },
        _disposer: function() {
            this._entity.dispose(), this.get_view().dispose(), w.prototype._disposer.call(this)
        },
        addEntity: function(t, e, i, s) {
            return null == s && (s = 0), null == i && (i = !1), this._entity.addEntity(t, e, i, s)
        },
        removeEntity: function(t, e, i) {
            null == i && (i = !1), this._entity.removeEntity(t, e, i)
        },
        getEntities: function(t) {
            return this._entity.getEntities(t)
        },
        getEntitiesByClass: function(t, e, i, s, n) {
            return null == n && (n = !1), null == s && (s = !1), null == i && (i = !1), this._entity.getEntitiesByClass(t, e, i, s, !1)
        },
        get_view: function() {
            return this.view
        },
        setAgenda: function(t) {
            return this._entity.setAgenda(t)
        },
        __class__: J
    });
    var K = function() {};
    n["awe6.interfaces.ISceneManager"] = K, K.__name__ = ["awe6", "interfaces", "ISceneManager"], K.prototype = {
        __class__: K
    };
    var Z = function(t) {
        w.call(this, t)
    };
    n["awe6.core.SceneManager"] = Z, Z.__name__ = ["awe6", "core", "SceneManager"], Z.__interfaces__ = [K], Z.__super__ = w, Z.prototype = e(w.prototype, {
        _init: function() {
            w.prototype._init.call(this), this.view = new Xe(this._kernel)
        },
        _updater: function(t) {
            null == t && (t = 0), w.prototype._updater.call(this, t), null != this.get_scene() && this.get_scene().update(t), null != this._sceneTransition && this._sceneTransition.update(t)
        },
        _disposer: function() {
            null != this.get_scene() && this.get_scene().dispose(), null != this._sceneTransition && this._sceneTransition.dispose(), this.view.dispose(), w.prototype._disposer.call(this)
        },
        setScene: function(t) {
            var e = null;
            if (null != this.get_scene()) {
                e = this.get_scene().type;
                var i = this._kernel.factory.createSceneTransition(t, e);
                null != this._sceneTransition && this._sceneTransition.dispose(), this._sceneTransition = i, this._kernel.inputs.reset(), this.get_scene().isDisposable && (this.get_scene().dispose(), this._kernel.messenger.reset()), this.scene = null
            }
            this._kernel.overlay.hideButtons(), this.scene = this._kernel.factory.createScene(t), this._kernel.overlay.showButton(ni.BACK, null != this._kernel.factory.getBackSceneType(this.get_scene().type)), this._kernel.overlay.showButton(ni.MUTE, this.get_scene().isMuteable && !this._kernel.audio.isMute), this._kernel.overlay.showButton(ni.UNMUTE, this.get_scene().isMuteable && this._kernel.audio.isMute), this._kernel.overlay.showButton(ni.PAUSE, this.get_scene().isPauseable && this._kernel.isActive), this._kernel.overlay.showButton(ni.UNPAUSE, this.get_scene().isPauseable && !this._kernel.isActive), this.view.addChild(this.get_scene().get_view()), null != this._sceneTransition && this.get_scene().get_view().addChild(this._sceneTransition.get_view(), this._tools.BIG_NUMBER + 1)
        },
        back: function() {
            var t = this._kernel.factory.getBackSceneType(this.get_scene().type);
            null != t && this.setScene(t)
        },
        next: function() {
            this.get_scene().isSessionSavedOnNext && null != this._kernel.get_session() && this._kernel.get_session().save();
            var t = this._kernel.factory.getNextSceneType(this.get_scene().type);
            null != t && this.setScene(t)
        },
        restart: function() {
            this.setScene(null == this.get_scene() ? this._kernel.factory.startingSceneType : this.get_scene().type)
        },
        get_scene: function() {
            return this.scene
        },
        __class__: Z
    });
    var q = function() {};
    n["awe6.interfaces.ITextStyle"] = q, q.__name__ = ["awe6", "interfaces", "ITextStyle"], q.prototype = {
        __class__: q
    };
    var $ = function(t, e, i, s, n, r, o, a, l, h) {
        null == l && (l = 0), null == n && (n = !1), null == s && (s = !1), this.font = null != t ? t : "_sans", this.size = null != e ? e : 12, this.color = null != i ? i : 0, this.isBold = s, this.isItalic = n, this.align = null != r ? r : oi.LEFT, this.spacingHorizontal = null != o ? o : 0, this.spacingVertical = null != a ? a : 0, this.thickness = l, this.filters = h
    };
    n["awe6.core.TextStyle"] = $, $.__name__ = ["awe6", "core", "TextStyle"], $.__interfaces__ = [q], $.prototype = {
        toString: function() {
            return p.string(this.font + "," + this.size + "," + this.color + "," + p.string(this.isBold) + "," + p.string(this.isItalic) + "," + p.string(this.align) + "," + this.spacingHorizontal + "," + this.spacingVertical + "," + this.thickness + "," + p.string(this.filters))
        },
        __class__: $
    };
    var te = function() {};
    n["awe6.interfaces.ITools"] = te, te.__name__ = ["awe6", "interfaces", "ITools"], te.__interfaces__ = [L], te.prototype = {
        __class__: te
    };
    var ee = function(t) {
        this._kernel = t, this.BIG_NUMBER = 9999998, this._encrypter = this._kernel.factory.createEncrypter()
    };
    n["awe6.core.Tools"] = ee, ee.__name__ = ["awe6", "core", "Tools"], ee.__interfaces__ = [te], ee.prototype = {
        createGuid: function(t, e) {
            return null == e && (e = ""), null == t && (t = !1), t ? e + function(t) {
                var e, i = t._randomCharacter() + t._randomCharacter() + t._randomCharacter();
                return e = l.substr(i, 0, 10)
            }(this) : e + (this._randomCharacter() + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + this._randomCharacter() + this._randomCharacter())
        },
        _randomCharacter: function() {
            var t = d.hex(0 | p["int"](65536 * (1 + Math.random())), 1);
            return l.substr(t, 1, null)
        },
        ease: function(t, e, i) {
            return t * (1 - i) + e * i
        },
        sortByPriority: function(t, e) {
            var i = t.get_priority(),
                s = e.get_priority();
            return s > i ? -1 : i > s ? 1 : 0
        },
        _isCamelCase: function(t) {
            return t.toUpperCase() == t ? !1 : t.indexOf(" ") > -1 ? !1 : t.indexOf("_") > -1 ? !1 : !0
        },
        _isConstCase: function(t) {
            return t.toUpperCase() != t ? !1 : t.indexOf(" ") > -1 ? !1 : !0
        },
        fromCamelCase: function(t) {
            if (null == t || "" == t) return "";
            for (var e = "", i = t.split(""), s = "", n = 0; n < i.length;) {
                var r = i[n];
                ++n, r.toLowerCase() != r && (e += s), e += r, s = " "
            }
            return e
        },
        toConstCase: function(t) {
            if (null == t || "" == t) return "";
            if (this._isConstCase(t)) return t;
            this._isCamelCase(t) && (t = this.fromCamelCase(t));
            var e = "";
            return t = d.replace(t, "     ", " "), t = d.replace(t, "    ", " "), t = d.replace(t, "   ", " "), t = d.replace(t, "  ", " "), t = d.replace(t, " ", "_"), e = t.toUpperCase()
        },
        limit: function(t, e, i) {
            return t > i ? i : e > t ? e : t
        },
        range: function(t, e, i) {
            var s = i - e;
            if (0 == s) return t;
            var n = t - e;
            return n - Math.floor(n / s) * s + e
        },
        distance: function(t, e, i, s, n) {
            null == n && (n = !1);
            var r = i - t,
                o = s - e,
                a = r * r + o * o;
            return n ? a : Math.sqrt(a)
        },
        shuffle: function(t) {
            for (var e = t.slice(), i = e.length; i > 1;) {
                var s = p.random(i);
                i--;
                var n = e[i];
                e[i] = e[s], e[s] = n
            }
            return e
        },
        serialize: function(t) {
            return ls.run(t)
        },
        unserialize: function(t) {
            return _s.run(t)
        },
        decrypt: function(t, e) {
            return null == e && (e = ""), this._encrypter.decrypt(t, e)
        },
        __class__: ee
    };
    var ie = function() {};
    n["awe6.interfaces.IAudioManager"] = ie, ie.__name__ = ["awe6", "interfaces", "IAudioManager"], ie.prototype = {
        __class__: ie
    };
    var se = function(t) {
        w.call(this, t)
    };
    n["awe6.core.drivers.AAudioManager"] = se, se.__name__ = ["awe6", "core", "drivers", "AAudioManager"], se.__interfaces__ = [ie], se.__super__ = w, se.prototype = e(w.prototype, {
        _init: function() {
            w.prototype._init.call(this), this._sounds = [], this._packageId = this._kernel.getConfig("settings.assets.packages.audio"), null == this._packageId && (this._packageId = this._kernel.getConfig("settings.assets.packages.default")), null == this._packageId && (this._packageId = "assets.audio"), this.set_isMute(!1)
        },
        _updater: function(t) {
            null == t && (t = 0), w.prototype._updater.call(this, t);
            for (var e = 0, i = this._sounds; e < i.length;) {
                var s = i[e];
                ++e, s.isDisposed && l.remove(this._sounds, s)
            }
        },
        _disposer: function() {
            for (var t = 0, e = this._sounds; t < e.length;) {
                var i = e[t];
                ++t, i.dispose()
            }
            this.set_isMute(!1), w.prototype._disposer.call(this)
        },
        start: function(t, e, i, s, n, r, o, a) {
            if (null == o && (o = !1), null == r && (r = 0), null == n && (n = 1), null == s && (s = 0), null == i && (i = 1), null == e && (e = Ke.DEFAULT), o) {
                var l = this._getSounds(t, e);
                if (0 != l.length) return
            }
            this._sounds.push(this._driverSoundFactory(t, e, i, s, n, r, a))
        },
        _driverSoundFactory: function(t, e, i, s, n, r, o) {
            return null == r && (r = 0), null == n && (n = 1), null == s && (s = 0), null == i && (i = 1), new ne(this._kernel, t, this._packageId, e, i, s, n, r, o)
        },
        stop: function(t, e) {
            for (var i = this._getSounds(t, e), s = 0; s < i.length;) {
                var n = i[s];
                ++s, n.stop()
            }
        },
        set_isMute: function(t) {
            return this.isMute = t, this._driverSetIsMute(t), this.isMute
        },
        _driverSetIsMute: function() {},
        _getSounds: function(t, e) {
            var i = [];
            if (null == t && null == e) i = this._sounds.slice();
            else if (null == e)
                for (var s = 0, n = this._sounds; s < n.length;) {
                    var r = n[s];
                    ++s, r.id == t && i.push(r)
                } else if (null == t)
                    for (var o = 0, a = this._sounds; o < a.length;) {
                        var l = a[o];
                        ++o, m.enumEq(l.audioChannelType, e) && i.push(l)
                    } else
                        for (var h = 0, _ = this._sounds; h < _.length;) {
                            var u = _[h];
                            ++h, u.id == t && m.enumEq(u.audioChannelType, e) && i.push(u)
                        }
                return i
        },
        __class__: se
    });
    var ne = function(t, e, i, s, n, r, o, a, l) {
        null == a && (a = 0), null == o && (o = 1), null == r && (r = 0), null == n && (n = 1), this._kernel = t, this.isDisposed = !1, this.id = e, this._packageId = i, this.audioChannelType = null != s ? s : Ke.DEFAULT, -1 == n && (n = this._kernel.tools.BIG_NUMBER), this._loops = n, this._startTime = r, this._volume = o, this._pan = a, this._onCompleteCallback = l, this._init()
    };
    n["awe6.core.drivers._AHelperSound"] = ne, ne.__name__ = ["awe6", "core", "drivers", "_AHelperSound"], ne.__interfaces__ = [v], ne.prototype = {
        _init: function() {
            this._driverInit()
        },
        _driverInit: function() {},
        stop: function() {
            this._driverStop(), this.dispose()
        },
        _driverStop: function() {},
        dispose: function() {
            this.isDisposed || (this.isDisposed = !0, this._driverStop())
        },
        __class__: ne
    };
    var re = function() {};
    n["awe6.interfaces.IFactory"] = re, re.__name__ = ["awe6", "interfaces", "IFactory"], re.prototype = {
        __class__: re
    };
    var oe = function(t, e, i) {
        null == e && (e = !1), this._context = t, this.isDebug = e, this._config = i, this.config = new ys, this.id = "awe6", this.version = "0.0.1", this.author = "unknown", this.isDecached = !1, this.isEyeCandyOptionEnabled = !0, this.isFullScreenOptionEnabled = !0, this.isResetSessionsOptionEnabled = !0, this.width = 600, this.height = 400, this.bgColor = 16711680, this.fullScreenType = Ze.SCALE_ASPECT_RATIO_PRESERVE, this.joypadTouchType = $e.DISABLED, this.secret = "YouMustOverrideThis", this.targetFramerate = 25, this.isFixedUpdates = !0, this.startingSceneType = ri.GAME, this.keyPause = ti.P, this.keyMute = ti.M, this.keyNext = ti.SPACE, this.keyBack = ti.ESCAPE, this.keySpecial = ti.CONTROL, this._configurer(!0), this._driverInit()
    };
    n["awe6.core.drivers.AFactory"] = oe, oe.__name__ = ["awe6", "core", "drivers", "AFactory"], oe.__interfaces__ = [v, re], oe.prototype = {
        _driverInit: function() {
            null != this._config && "<?xml" == l.substr(this._config, 0, 5) && this._traverseElements(y.parse(this._config).firstElement().elements(), ""), this._launchKernel()
        },
        _traverseElements: function(t, e) {
            for (0 != e.length && (e += "."); t.hasNext();) {
                var i, s = t.next();
                if (i = e + function() {
                    var t;
                    if (s.nodeType != y.Element) throw new hn("Bad node type, expected Element but found " + s.nodeType);
                    return t = s.nodeName
                }(this), s.elements().hasNext() && this._traverseElements(s.elements(), i), null != function() {
                    var t;
                    if (s.nodeType != y.Document && s.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + s.nodeType);
                    return t = s.children[0]
                }(this) && "<![CDATA[" == function(t) {
                    var e, i = function() {
                        var t;
                        if (s.nodeType != y.Document && s.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + s.nodeType);
                        return t = s.children[0]
                    }(t).toString();
                    return e = l.substr(i, 0, 9)
                }(this) && function() {
                    var t;
                    if (s.nodeType != y.Document && s.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + s.nodeType);
                    return t = s.children[0]
                }(this).set_nodeValue(function() {
                    var t;
                    if (s.nodeType != y.Document && s.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + s.nodeType);
                    return t = s.children[0]
                }(this).toString().split("<![CDATA[").join("").split("]]>").join("")), null == function() {
                    var t;
                    if (s.nodeType != y.Document && s.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + s.nodeType);
                    return t = s.children[0]
                }(this)) this.config.set(i, "");
                else {
                    var n;
                    if (n = function() {
                        var t;
                        if (s.nodeType != y.Document && s.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + s.nodeType);
                        return t = s.children[0]
                    }(this).nodeType, n != y.Element && n != y.Document) {
                        var r;
                        r = null == function() {
                            var t;
                            if (s.nodeType != y.Document && s.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + s.nodeType);
                            return t = s.children[0]
                        }(this) ? "" : function() {
                            var t;
                            if (s.nodeType != y.Document && s.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + s.nodeType);
                            return t = s.children[0]
                        }(this).get_nodeValue(), this.config.set(i, r)
                    } else this.config.set(i, "")
                }
                for (var o = s.attributes(); o.hasNext();) {
                    var a = o.next(),
                        h = i + "." + a,
                        _ = s.get(a);
                    this.config.set(h, _)
                }
            }
        },
        _configurer: function(t) {
            null == t && (t = !1)
        },
        _launchKernel: function() {
            null == this._concreteKernel && (this._configurer(!1), this._concreteKernel = new Ue(this, this._context))
        },
        _getAssetUrls: function() {
            for (var t = [], e = 0; 1e3 > e;) {
                var i = e++,
                    s = "settings.assets.url" + i;
                this.config.exists(s) && t.push(p.string(this.config.get(s)))
            }
            return t
        },
        onInitComplete: function(t) {
            if (null == this._kernel && null != t) {
                this._kernel = t, this._tools = this._kernel.tools;
                var e = this._tools.toConstCase(d.trim(this.id));
                this.id = l.substr(e, 0, 16);
                var i = d.trim(this.version);
                this.version = l.substr(i, 0, 10);
                var s = d.trim(this.author);
                this.author = l.substr(s, 0, 16)
            }
        },
        createAssetManager: function() {
            return _n.__instanceof(this._kernel.assets, T) ? _n.__cast(this._kernel.assets, T) : new A(this._kernel)
        },
        createEncrypter: function() {
            return new U(this.secret)
        },
        createLogger: function() {
            return null
        },
        createOverlay: function() {
            return new Ne(this._kernel)
        },
        createPreloader: function() {
            return new Fe(this._kernel, this._getAssetUrls(), this.isDecached)
        },
        createScene: function(t) {
            return null == t && (t = this.startingSceneType), new J(this._kernel, t)
        },
        createSceneTransition: function() {
            return new je(this._kernel)
        },
        createSession: function(t) {
            return new xe(this._kernel, t)
        },
        createTextStyle: function() {
            return new $
        },
        getBackSceneType: function() {
            return null
        },
        getNextSceneType: function() {
            return null
        },
        dispose: function() {
            this.isDisposed || null == this._concreteKernel || (this.isDisposed = !0, this._driverDisposer(), this._concreteKernel.dispose(), this._concreteKernel = null, this._kernel = null, this.config = null)
        },
        _driverDisposer: function() {},
        __class__: oe
    };
    var ae = function() {};
    n["awe6.interfaces.IInputKeyboard"] = ae, ae.__name__ = ["awe6", "interfaces", "IInputKeyboard"], ae.prototype = {
        __class__: ae
    };
    var le = function(t) {
        w.call(this, t)
    };
    n["awe6.core.drivers.AInputKeyboard"] = le, le.__name__ = ["awe6", "core", "drivers", "AInputKeyboard"], le.__interfaces__ = [ae], le.__super__ = w, le.prototype = e(w.prototype, {
        _init: function() {
            w.prototype._init.call(this), this._driverInit(), this._reset()
        },
        _driverInit: function() {},
        _updater: function(t) {
            null == t && (t = 0), w.prototype._updater.call(this, t);
            for (var e = new ys, i = [], s = 0, n = this._buffer; s < n.length;) {
                var r = n[s];
                ++s;
                var o;
                o = null == r.keyCode ? "null" : "" + r.keyCode, (null != Fn[o] ? e.existsReserved(o) : e.h.hasOwnProperty(o)) ? i.push(r) : r.isDown ? this._keys[r.keyCode].isDown || (this._onDown(r.keyCode), null != Fn[o] ? e.setReserved(o, !0) : e.h[o] = !0) : this._keys[r.keyCode].isDown && (this._onUp(r.keyCode), null != Fn[o] ? e.setReserved(o, !0) : e.h[o] = !0)
            }
            this._buffer = i.slice();
            for (var a = 0, l = this._keys; a < l.length;) {
                var h = l[a];
                ++a, h.isDown ? h.updatesDown++ : h.updatesUp++, h.isDown ? h.timeDown += t : h.timeUp += t
            }
        },
        _disposer: function() {
            this._keys = null, w.prototype._disposer.call(this)
        },
        _addEvent: function(t, e) {
            this._buffer.push(new _e(t, e))
        },
        _onDown: function(t) {
            var e = this._keys[t];
            e.isUsed = !0, e.isDown = !0, e.timeUpPrevious = e.timeUp, e.updatesUpPrevious = e.updatesUp, e.updatesUp = 0, e.timeUp = 0
        },
        _onUp: function(t) {
            var e = this._keys[t];
            e.isDown = !1, e.timeDownPrevious = e.timeDown, e.updatesDownPrevious = e.updatesDown, e.updatesDown = 0, e.timeDown = 0
        },
        _reset: function() {
            this._buffer = [], this._keys = [];
            for (var t = 0; 512 > t;) {
                var e = t++;
                this._keys[e] = new he(this._kernel)
            }
        },
        getIsKeyDown: function(t) {
            if (null == t) return !1;
            var e = this.getKeyCode(t);
            return this._keys[e].isDown
        },
        getIsKeyPress: function(t) {
            if (null == t) return !1;
            var e = this.getKeyCode(t);
            return 1 == this._keys[e].updatesDown
        },
        getIsKeyRelease: function(t) {
            if (null == t) return !1;
            var e = this.getKeyCode(t);
            return this._keys[e].isUsed && 1 == this._keys[e].updatesUp
        },
        getKeyCode: function(t) {
            switch (t[1]) {
                case 0:
                    return 144;
                case 1:
                    return 12;
                case 2:
                    return 47;
                case 3:
                    return 18;
                case 4:
                    return 8;
                case 5:
                    return 20;
                case 6:
                    return 17;
                case 7:
                    return 46;
                case 8:
                    return 40;
                case 9:
                    return 35;
                case 10:
                    return 13;
                case 11:
                    return 27;
                case 12:
                    return 112;
                case 13:
                    return 121;
                case 14:
                    return 122;
                case 15:
                    return 123;
                case 16:
                    return 124;
                case 17:
                    return 125;
                case 18:
                    return 126;
                case 19:
                    return 113;
                case 20:
                    return 114;
                case 21:
                    return 115;
                case 22:
                    return 116;
                case 23:
                    return 117;
                case 24:
                    return 118;
                case 25:
                    return 119;
                case 26:
                    return 120;
                case 27:
                    return 36;
                case 28:
                    return 45;
                case 29:
                    return 37;
                case 30:
                    return 96;
                case 31:
                    return 97;
                case 32:
                    return 98;
                case 33:
                    return 99;
                case 34:
                    return 100;
                case 35:
                    return 101;
                case 36:
                    return 102;
                case 37:
                    return 103;
                case 38:
                    return 104;
                case 39:
                    return 105;
                case 40:
                    return 107;
                case 41:
                    return 110;
                case 42:
                    return 111;
                case 43:
                    return 108;
                case 44:
                    return 106;
                case 45:
                    return 109;
                case 46:
                    return 34;
                case 47:
                    return 33;
                case 48:
                    return 39;
                case 49:
                    return 16;
                case 50:
                    return 32;
                case 51:
                    return 9;
                case 52:
                    return 38;
                case 53:
                    return 65;
                case 54:
                    return 66;
                case 55:
                    return 67;
                case 56:
                    return 68;
                case 57:
                    return 69;
                case 58:
                    return 70;
                case 59:
                    return 71;
                case 60:
                    return 72;
                case 61:
                    return 73;
                case 62:
                    return 74;
                case 63:
                    return 75;
                case 64:
                    return 76;
                case 65:
                    return 77;
                case 66:
                    return 78;
                case 67:
                    return 79;
                case 68:
                    return 80;
                case 69:
                    return 81;
                case 70:
                    return 82;
                case 71:
                    return 83;
                case 72:
                    return 84;
                case 73:
                    return 85;
                case 74:
                    return 86;
                case 75:
                    return 87;
                case 76:
                    return 88;
                case 77:
                    return 89;
                case 78:
                    return 90;
                case 79:
                    return 48;
                case 80:
                    return 49;
                case 81:
                    return 50;
                case 82:
                    return 51;
                case 83:
                    return 52;
                case 84:
                    return 53;
                case 85:
                    return 54;
                case 86:
                    return 55;
                case 87:
                    return 56;
                case 88:
                    return 57;
                case 89:
                    return 186;
                case 90:
                    return 187;
                case 91:
                    return 189;
                case 92:
                    return 191;
                case 93:
                    return 222;
                case 94:
                    return 219;
                case 95:
                    return 221;
                case 96:
                    return 220;
                case 97:
                    return 192;
                case 98:
                    return 223;
                case 99:
                    var e = t[2];
                    return p["int"](e)
            }
        },
        getKey: function(t) {
            var e = m.getEnumConstructs(ti);
            e.pop();
            for (var i = 0; i < e.length;) {
                var s = e[i];
                ++i;
                var n = m.createEnum(ti, s);
                if (this.getKeyCode(n) == t) return n
            }
            return ti.SUB_TYPE(t)
        },
        __class__: le
    });
    var he = function(t) {
        this.isDown = !1, this.updatesDown = 0, this.updatesUp = t.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = t.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = t.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = t.tools.BIG_NUMBER
    };
    n["awe6.core.drivers._AInputKeyboard._HelperKey"] = he, he.__name__ = ["awe6", "core", "drivers", "_AInputKeyboard", "_HelperKey"], he.prototype = {
        __class__: he
    };
    var _e = function(t, e) {
        this.keyCode = t, this.isDown = e
    };
    n["awe6.core.drivers._AInputKeyboard._HelperKeyEvent"] = _e, _e.__name__ = ["awe6", "core", "drivers", "_AInputKeyboard", "_HelperKeyEvent"], _e.prototype = {
        __class__: _e
    };
    var ue = function() {};
    n["awe6.interfaces.IInputMouse"] = ue, ue.__name__ = ["awe6", "interfaces", "IInputMouse"], ue.prototype = {
        __class__: ue
    };
    var ce = function(t) {
        w.call(this, t)
    };
    n["awe6.core.drivers.AInputMouse"] = ce, ce.__name__ = ["awe6", "core", "drivers", "AInputMouse"], ce.__interfaces__ = [ue], ce.__super__ = w, ce.prototype = e(w.prototype, {
        _init: function() {
            w.prototype._init.call(this), this._driverInit(), this.x = this.y = this._xPrev = this._yPrev = this._deltaX = this._deltaY = this.scroll = this._deltaScroll = 0, this.relativeX = this.relativeY = this.relativeCentralisedX = this.relativeCentralisedY = 0, this.isMoving = !1, this._buffer = [], this._getPosition(), this.isMoving = !1, this.set_isVisible(!0), this.scroll = 0, this.set_cursorType(si.AUTO), this._scrollPrev = 0, this._stillUpdates = 0, this._stillDuration = 0, this._reset()
        },
        _driverInit: function() {},
        _updater: function(t) {
            null == t && (t = 0), this._deltaTimePrev = t, w.prototype._updater.call(this, t), this._handleButton(ii.LEFT, this._buffer.length > 0 ? this._buffer.shift() : this._buttonLeft.isDown, t), this._handleButton(ii.MIDDLE, this._isMiddleDown(), t), this._handleButton(ii.RIGHT, this._isRightDown(), t), this._deltaScroll = this.scroll - this._scrollPrev, this._scrollPrev = this.scroll, this._xPrev = this.x, this._yPrev = this.y, this._getPosition(), this._deltaX = this.x - this._xPrev, this._deltaY = this.y - this._yPrev, this.isMoving = this.x != this._xPrev || this.y != this._yPrev, this.isMoving ? this._stillUpdates = this._stillDuration = 0 : (this._stillUpdates++, this._stillDuration += t), this.relativeX = this.x / this._kernel.factory.width, this.relativeY = this.y / this._kernel.factory.height, this.relativeCentralisedX = 2 * (this.relativeX - .5), this.relativeCentralisedY = 2 * (this.relativeY - .5), this.isWithinBounds = this._isWithinBounds()
        },
        _isMiddleDown: function() {
            return !1
        },
        _isRightDown: function() {
            return !1
        },
        _isWithinBounds: function() {
            return !0
        },
        _getPosition: function() {
            this.x = 0, this.y = 0
        },
        _handleButton: function(t, e, i) {
            null == i && (i = 0);
            var s = this._getButton(t);
            e ? (s.isDown || (s.timeUpPrevious = s.timeUp, s.updatesUpPrevious = s.updatesUp, s.timeUp = s.updatesUp = 0, s.clickX = this.x, s.clickY = this.y), s.timeDown += i, s.updatesDown++, s.isDown = !0) : (s.isDown && (s.timeDownPrevious = s.timeDown, s.updatesDownPrevious = s.updatesDown, s.timeDown = s.updatesDown = 0), s.timeUp += i, s.updatesUp++, s.isDown = !1)
        },
        _disposer: function() {
            w.prototype._disposer.call(this)
        },
        _reset: function() {
            this._buffer = [], this._buttonLeft = new pe(this._kernel), this._buttonMiddle = new pe(this._kernel), this._buttonRight = new pe(this._kernel)
        },
        _getButton: function(t) {
            switch (null == t && (t = ii.LEFT), t[1]) {
                case 0:
                    return this._buttonLeft;
                case 1:
                    return this._buttonMiddle;
                case 2:
                    return this._buttonRight
            }
        },
        getDeltaX: function(t) {
            null == t && (t = !0);
            var e = this._deltaX;
            return t && (e *= 1e3 / this._deltaTimePrev), Math.round(e)
        },
        getDeltaY: function(t) {
            null == t && (t = !0);
            var e = this._deltaY;
            return t && (e *= 1e3 / this._deltaTimePrev), Math.round(e)
        },
        getIsButtonDoubleClick: function(t, e) {
            null == e && (e = 100);
            var i = this._getButton(t);
            return i.isDown ? i.timeUpPrevious <= e : !1
        },
        getIsButtonDown: function(t) {
            var e = this._getButton(t);
            return e.isDown
        },
        getIsButtonRelease: function(t) {
            var e = this._getButton(t);
            return 1 == e.updatesUp
        },
        getButtonDownDuration: function(t, e, i) {
            null == i && (i = !1), null == e && (e = !0);
            var s = this._getButton(t);
            return i ? e ? s.timeDownPrevious : s.updatesDownPrevious : e ? s.timeDown : s.updatesDown
        },
        getButtonDragWidth: function(t) {
            var e = this._getButton(t);
            return e.isDown ? this.x - e.clickX : 0
        },
        getButtonDragHeight: function(t) {
            var e = this._getButton(t);
            return e.isDown ? this.y - e.clickY : 0
        },
        set_isVisible: function(t) {
            return this.isVisible = t, this.isVisible
        },
        set_cursorType: function(t) {
            return this.cursorType = t, this.cursorType
        },
        __class__: ce
    });
    var pe = function(t) {
        this.isDown = !1, this.updatesDown = 0, this.updatesUp = t.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = t.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = t.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = t.tools.BIG_NUMBER
    };
    n["awe6.core.drivers._AInputMouse._HelperButton"] = pe, pe.__name__ = ["awe6", "core", "drivers", "_AInputMouse", "_HelperButton"], pe.prototype = {
        __class__: pe
    };
    var ge = function() {};
    n["awe6.interfaces.ILogger"] = ge, ge.__name__ = ["awe6", "interfaces", "ILogger"], ge.prototype = {
        __class__: ge
    };
    var de = function() {};
    n["awe6.interfaces.IKernel"] = de, de.__name__ = ["awe6", "interfaces", "IKernel"], de.__interfaces__ = [ge, b], de.prototype = {
        __class__: de
    };
    var fe = function(t, e) {
        this.factory = t, this._context = e, this.tools = this._tools = new ee(this), w.call(this, this)
    };
    n["awe6.core.drivers.AKernel"] = fe, fe.__name__ = ["awe6", "core", "drivers", "AKernel"], fe.__interfaces__ = [de], fe.__super__ = w, fe.prototype = e(w.prototype, {
        _init: function() {
            w.prototype._init.call(this), this._view = new Xe(this, this._context, 0, this), this._processes = new _, this._helperFramerate = new me(this.factory.targetFramerate), this._isPreloaded = !1, this.isDebug = this.factory.isDebug, this.isLocal = this._driverGetIsLocal(), this._driverInit(), this.assets = this._assetManagerProcess = new A(this._kernel), this.audio = this._audioManager = new Re(this._kernel), this.inputs = this._inputManager = new Y(this._kernel), this.scenes = this._sceneManager = new Z(this._kernel), this.messenger = this._messageManager = new V(this._kernel), this._view.addChild(this._sceneManager.view, 1), this._addProcess(this._assetManagerProcess), this._addProcess(this._inputManager), this._addProcess(this._sceneManager), this._addProcess(this._messageManager), this._addProcess(this._audioManager), this.set_isEyeCandy(!0), this.set_isFullScreen(!1), this.factory.onInitComplete(this), this.set_session(this.factory.createSession()), this.get_session().reset(), this._preloader = this.factory.createPreloader(), this._addProcess(this._preloader), this._view.addChild(this._preloader.get_view(), 2)
        },
        _driverGetIsLocal: function() {
            return !1
        },
        _driverInit: function() {},
        _driverDisposer: function() {},
        onPreloaderComplete: function() {
            this._isPreloaded = !0, this._removeProcess(this._preloader), this._preloader = null, this._logger = this.factory.createLogger();
            var t = this.factory.createAssetManager();
            t != this._assetManagerProcess && (this._removeProcess(this._assetManagerProcess), this.assets = this._assetManagerProcess = t, this._addProcess(this._assetManagerProcess, !1)), this.overlay = this._overlayProcess = this.factory.createOverlay(), this._addProcess(this._overlayProcess, !0), this._view.addChild(this._overlayProcess.get_view(), 3), this.isDebug && (this._addProcess(this._profiler = new Ge(this)), this._view.addChild(this._profiler.get_view(), this._tools.BIG_NUMBER)), this.scenes.setScene(this.factory.startingSceneType), this.overlay.flash()
        },
        _updater: function(t) {
            null == t && (t = 0), this._helperFramerate.update();
            var e;
            e = this.factory.isFixedUpdates ? 1e3 / this.factory.targetFramerate | 0 : this._helperFramerate.timeInterval, w.prototype._updater.call(this, e);
            for (var i = this._processes.h, s = null; null != i;) {
                var n;
                n = function() {
                    var t;
                    return s = i[0], i = i[1], t = s
                }(this), n.update(e)
            }
            this._view.update(e)
        },
        _disposer: function() {
            for (var t = this._processes.h, e = null; null != t;) {
                var i;
                i = function() {
                    var i;
                    return e = t[0], t = t[1], i = e
                }(this), this._removeProcess(i)
            }
            _n.__instanceof(this.factory, v) && _n.__cast(this.factory, v).dispose(), this.factory = null, this._view.dispose(), this._view = null, this._driverDisposer(), this.assets = this._assetManagerProcess = null, this.audio = this._audioManager = null, this.inputs = this._inputManager = null, this.scenes = this._sceneManager = null, this.messenger = this._messageManager = null, this.overlay = this._overlayProcess = null, this.tools = this._tools = null, this._logger = null, this._preloader = null, this.set_session(null), w.prototype._disposer.call(this)
        },
        getConfig: function(t) {
            return this.factory.config.exists(t) ? this.factory.config.get(t) : null
        },
        log: function(t) {
            null != this._logger ? this._logger.log(t) : this.isDebug && os.trace("LOG: " + p.string(t), {
                fileName: "AKernel.hx",
                lineNumber: 248,
                className: "awe6.core.drivers.AKernel",
                methodName: "log"
            })
        },
        getFramerate: function(t) {
            return null == t && (t = !0), t ? this._helperFramerate.framerate : this.factory.targetFramerate
        },
        _addProcess: function(t, e) {
            null == e && (e = !0), null != t && (e ? this._processes.add(t) : this._processes.push(t))
        },
        _removeProcess: function(t) {
            return null == t ? !1 : (t.dispose(), this._processes.remove(t))
        },
        set_isEyeCandy: function(t) {
            return this.factory.isEyeCandyOptionEnabled ? (this.isEyeCandy = t, this._driverSetIsEyeCandy(t), this.isEyeCandy) : (this.isEyeCandy = !0, this.isEyeCandy)
        },
        _driverSetIsEyeCandy: function() {},
        set_isFullScreen: function(t) {
            return !this.factory.isFullScreenOptionEnabled || m.enumEq(this.factory.fullScreenType, Ze.DISABLED) ? (this.isFullScreen = !1, this.isFullScreen) : (this.isFullScreen = t, this._driverSetIsFullScreen(t), this.isFullScreen)
        },
        _driverSetIsFullScreen: function() {},
        _pauser: function() {
            w.prototype._pauser.call(this), null != this.scenes.get_scene() && this.scenes.get_scene().pause()
        },
        _resumer: function() {
            w.prototype._resumer.call(this), null != this.scenes.get_scene() && this.scenes.get_scene().resume()
        },
        get_session: function() {
            return this.session
        },
        set_session: function(t) {
            return this.session = t, this.get_session()
        },
        __class__: fe
    });
    var me = function(t) {
        this.framerate = t, this._timeAtLastUpdate = p["int"](1e3 * hs.stamp())
    };
    n["awe6.core.drivers._AKernel._HelperFramerate"] = me, me.__name__ = ["awe6", "core", "drivers", "_AKernel", "_HelperFramerate"], me.prototype = {
        update: function() {
            this.timeInterval = p["int"](1e3 * hs.stamp()) - this._timeAtLastUpdate, this.framerate = 1e3 / this.timeInterval, this._timeAtLastUpdate = p["int"](1e3 * hs.stamp())
        },
        __class__: me
    };
    var ye = function() {};
    n["awe6.interfaces.IOverlay"] = ye, ye.__name__ = ["awe6", "interfaces", "IOverlay"], ye.prototype = {
        __class__: ye
    };
    var be = function() {};
    n["awe6.interfaces.IOverlayProcess"] = be, be.__name__ = ["awe6", "interfaces", "IOverlayProcess"], be.__interfaces__ = [P, E, ye];
    var ve = function(t, e, i, s, n, r, o, a, l, h, _, u, c, p, g, d, f) {
        null == f && (f = .35), null == d && (d = 0), null == g && (g = 8), null == i && (i = 30), null == e && (e = 30), null == s && (s = new Xe(t)), null == n && (n = new Xe(t)), null == r && (r = new Xe(t)), null == o && (o = new Xe(t)), null == a && (a = new Xe(t)), null == l && (l = new Xe(t)), null == h && (h = new Xe(t)), null == _ && (_ = new Xe(t)), null == u && (u = new Xe(t)), null == c && (c = new Xe(t)), null == p && (p = new Xe(t)), this._borderView = s, this._buttonBack = new B(t, n, r, e, i), this._buttonMute = new B(t, o, a, e, i), this._buttonUnmute = new B(t, l, h, e, i), this._buttonPause = new B(t, _, u, e, i), this._buttonUnpause = new B(t, c, p, e, i), this._pauseBlur = g, this._pauseColor = d, this._pauseAlpha = f, this._context = new createjs.Container, M.call(this, t, null, this._context)
    };
    n["awe6.core.drivers.AOverlay"] = ve, ve.__name__ = ["awe6", "core", "drivers", "AOverlay"], ve.__interfaces__ = [be], ve.__super__ = M, ve.prototype = e(M.prototype, {
        _init: function() {
            M.prototype._init.call(this), this.get_view().addChild(this._borderView, 4), this._wasMute = this._kernel.audio.isMute, this._driverInit(), this._progressView = new Xe(this._kernel, this._progressContext), this._progressView.set_isVisible(!1), this._pauseView = new Xe(this._kernel, this._pauseContext), this._pauseView.set_isVisible(!1), this._flashView = new Xe(this._kernel, this._flashContext), this._flashView.set_isVisible(!1), this._flashStartingAlpha = 1, this._flashAsTime = !0, this._flashDuration = this._flashStartingDuration = 100, this._buttonBack.onClickCallback = function(t, e) {
                return function() {
                    t(e)
                }
            }(s(this, this.activateButton), ni.BACK), this._buttonMute.onClickCallback = function(t, e) {
                return function() {
                    t(e)
                }
            }(s(this, this.activateButton), ni.MUTE), this._buttonPause.onClickCallback = function(t, e) {
                return function() {
                    t(e)
                }
            }(s(this, this.activateButton), ni.PAUSE), this._buttonUnmute.onClickCallback = function(t, e) {
                return function() {
                    t(e)
                }
            }(s(this, this.activateButton), ni.UNMUTE), this._buttonUnpause.onClickCallback = function(t, e) {
                return function() {
                    t(e)
                }
            }(s(this, this.activateButton), ni.UNPAUSE), this.get_view().addChild(this._flashView, 1), this.get_view().addChild(this._pauseView, 2), this.get_view().addChild(this._progressView, 3), this.addEntity(this._buttonBack, null, !0, 21), this.addEntity(this._buttonUnmute, null, !0, 22), this.addEntity(this._buttonMute, null, !0, 23), this.addEntity(this._buttonUnpause, null, !0, 24), this.addEntity(this._buttonPause, null, !0, 25);
            var t = this._buttonBack.height,
                e = this._buttonBack.width,
                i = this._kernel.factory.width - 4 * e,
                n = t;
            this.positionButton(ni.BACK, i, n), this.positionButton(ni.MUTE, i += e, n), this.positionButton(ni.UNMUTE, i, n), this.positionButton(ni.PAUSE, i += e, n), this.positionButton(ni.UNPAUSE, i, n)
        },
        _driverInit: function() {
            this._progressContext = new createjs.Container, this._pauseContext = new createjs.Container, this._flashContext = new createjs.Container
        },
        _updater: function(t) {
            null == t && (t = 0), M.prototype._updater.call(this, t), this._flashDuration > 0 && (this._flashDuration -= this._flashAsTime ? t : 1, this._flashAlpha = this._tools.limit(this._flashStartingAlpha * (this._flashDuration / this._flashStartingDuration), 0, 1)), this._flashView.set_isVisible(this._flashAlpha > 0), null != this._kernel.factory.keyBack && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyBack) && this.activateButton(this._kernel.isActive ? ni.BACK : ni.UNPAUSE), null != this._kernel.factory.keyPause && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyPause) && this.activateButton(this._kernel.isActive ? ni.PAUSE : ni.UNPAUSE), null != this._kernel.factory.keyMute && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyMute) && this.activateButton(this._kernel.audio.isMute ? ni.UNMUTE : ni.MUTE), null == this.get_pauseEntity() || this._kernel.isActive || (this.get_pauseEntity().update(t), this._pauseView.update(t))
        },
        _disposer: function() {
            null != this.get_pauseEntity() && this.get_pauseEntity().dispose(), this.get_view().dispose(), M.prototype._disposer.call(this)
        },
        _getButton: function(t) {
            switch (t[1]) {
                case 0:
                    return this._buttonBack;
                case 1:
                    return this._buttonMute;
                case 2:
                    return this._buttonUnmute;
                case 3:
                    return this._buttonPause;
                case 4:
                    return this._buttonUnpause;
                case 5:
                    {
                        t[2]
                    }
                    return null
            }
        },
        showButton: function(t, e) {
            null == e && (e = !0);
            var i = this._getButton(t);
            null != i && (e ? this.addEntity(i, null, !0) : this.removeEntity(i, null, !0))
        },
        positionButton: function(t, e, i, s, n) {
            var r = this._getButton(t);
            null != r && (r.set_x(e), r.set_y(i), null != s && r.set_width(s), null != n && r.set_height(n))
        },
        hideButtons: function() {
            this.showButton(ni.BACK, !1), this.showButton(ni.MUTE, !1), this.showButton(ni.UNMUTE, !1), this.showButton(ni.PAUSE, !1), this.showButton(ni.UNPAUSE, !1)
        },
        flash: function(t, e, i, s) {
            null == s && (s = 16777215), null == i && (i = 1), null == e && (e = !0), t = null != t ? t : e ? 500 : .5 * this._kernel.factory.targetFramerate, this._flashDuration = this._flashStartingDuration = t, this._flashAsTime = e, this._flashAlpha = this._flashStartingAlpha = i > 1 ? 1 : 0 > i ? 0 : i
        },
        activateButton: function(t) {
            switch (t[1]) {
                case 0:
                    this._buttonBack.get_view().get_isInViewStack() && (this._kernel.isActive || this.activateButton(ni.UNPAUSE), this._drawPause(!1), this._kernel.resume(), this._kernel.scenes.back());
                    break;
                case 1:
                    this._buttonMute.get_view().get_isInViewStack() && (this.showButton(ni.MUTE, !1), this.showButton(ni.UNMUTE, !0), this._kernel.audio.set_isMute(!0));
                    break;
                case 2:
                    this._buttonUnmute.get_view().get_isInViewStack() && !this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(ni.MUTE, !0), this.showButton(ni.UNMUTE, !1), this._kernel.audio.set_isMute(!1));
                    break;
                case 3:
                    this._buttonPause.get_view().get_isInViewStack() && (this._kernel.pause(), this._drawPause(!0), this._wasMute = this._kernel.audio.isMute, this.showButton(ni.PAUSE, !1), this.showButton(ni.UNPAUSE, !0), this.activateButton(ni.MUTE));
                    break;
                case 4:
                    this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(ni.PAUSE, !0), this.showButton(ni.UNPAUSE, !1), this.activateButton(this._wasMute ? ni.MUTE : ni.UNMUTE), this._kernel.resume(), this._drawPause(!1));
                    break;
                case 5:
                    {
                        t[2]
                    }
            }
        },
        _drawPause: function(t) {
            null == t && (t = !0), this._pauseView.set_isVisible(t)
        },
        get_pauseEntity: function() {
            return this.pauseEntity
        },
        set_pauseEntity: function(t) {
            return null != this.get_pauseEntity() && this.get_pauseEntity().get_view().remove(), this.pauseEntity = t, this._pauseView.addChild(this.get_pauseEntity().get_view()), this.get_pauseEntity()
        },
        __class__: ve
    });
    var Se = function() {};
    n["awe6.interfaces.IProgress"] = Se, Se.__name__ = ["awe6", "interfaces", "IProgress"];
    var Ee = function() {};
    n["awe6.interfaces.IPreloader"] = Ee, Ee.__name__ = ["awe6", "interfaces", "IPreloader"], Ee.__interfaces__ = [Se, P, E];
    var we = function(t, e, i) {
        null == i && (i = !1), this._assets = e, this._isDecached = i, w.call(this, t)
    };
    n["awe6.core.drivers.APreloader"] = we, we.__name__ = ["awe6", "core", "drivers", "APreloader"], we.__interfaces__ = [Ee], we.__super__ = w, we.prototype = e(w.prototype, {
        _init: function() {
            w.prototype._init.call(this), this.progress = 0, null == this.get_view() && (this.view = new Xe(this._kernel)), this._encrypter = this._tools, this._currentProgress = 0, this._currentAsset = 0, this._isComplete = !1, this._assets.length > 0 && this._next()
        },
        _next: function() {
            if (this._currentAsset++, this._currentAsset > this._assets.length) {
                if (!this._isComplete) {
                    try {
                        hs.delay(function(t, e) {
                            return function() {
                                t(e)
                            }
                        }((Mn = this._kernel, s(Mn, Mn.onPreloaderComplete)), this), 100)
                    } catch (t) {
                        t instanceof hn && (t = t.val)
                    }
                    this._isComplete = !0
                }
            } else this._driverLoad(this._assets[this._currentAsset - 1]), this._currentProgress = 0
        },
        _driverLoad: function() {},
        _updater: function(t) {
            null == t && (t = 0), w.prototype._updater.call(this, t), 0 == this._assets.length && this._kernel.onPreloaderComplete(this), this.get_view().set_isVisible(this._age > 100)
        },
        _disposer: function() {
            this.get_view().dispose(), this._driverDisposer(), w.prototype._disposer.call(this)
        },
        _driverDisposer: function() {},
        get_view: function() {
            return this.view
        },
        __class__: we
    });
    var Ie = function(t) {
        this._context = new createjs.Container, M.call(this, t, null, this._context)
    };
    n["awe6.core.drivers.AProfiler"] = Ie, Ie.__name__ = ["awe6", "core", "drivers", "AProfiler"], Ie.__super__ = M, Ie.prototype = e(M.prototype, {
        _init: function() {
            M.prototype._init.call(this), this._marginHeight = 25, this._marginColor = 128, this._backgroundColor = -2147483520, this._fpsColor = 16777215, this._memoryColor = 16744448, this._fpsLabel = "FPS", this._memoryLabel = "MBs", this._width = 60, this._height = 50, this._agePrev = 0
        },
        _updater: function(t) {
            null == t && (t = 0), M.prototype._updater.call(this, t), this._age < this._agePrev + 250 || (this._agePrev = this._age, this._driverUpdate())
        },
        _driverUpdate: function() {},
        __class__: Ie
    });
    var Te = function() {};
    n["awe6.interfaces.ISceneTransition"] = Te, Te.__name__ = ["awe6", "interfaces", "ISceneTransition"], Te.__interfaces__ = [P, Se, E];
    var Ae = function(t, e) {
        null == e && (e = 500), this._duration = e, this._context = new createjs.Container, M.call(this, t, null, this._context)
    };
    n["awe6.core.drivers.ASceneTransition"] = Ae, Ae.__name__ = ["awe6", "core", "drivers", "ASceneTransition"], Ae.__interfaces__ = [Te], Ae.__super__ = M, Ae.prototype = e(M.prototype, {
        _init: function() {
            M.prototype._init.call(this)
        },
        _updater: function(t) {
            null == t && (t = 0), M.prototype._updater.call(this, t), this._age > this._duration && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        get_progress: function() {
            return this._tools.limit(this._age / this._duration, 0, 1)
        },
        __class__: Ae
    });
    var Ce = function() {};
    n["awe6.interfaces.ISession"] = Ce, Ce.__name__ = ["awe6", "interfaces", "ISession"], Ce.prototype = {
        __class__: Ce
    };
    var xe = function(t, e) {
        null == e && (e = ""), this._kernel = t, "" == e && (e = "DEBUG_AWE6"), this.id = e, this._tools = this._kernel.tools, this._version = 1, this._init()
    };
    n["awe6.core.drivers.ASession"] = xe, xe.__name__ = ["awe6", "core", "drivers", "ASession"], xe.__interfaces__ = [Ce], xe.prototype = {
        _init: function() {
            this._driverLoad();
            var t = c.field(this._savedData, "_____VERSION");
            t != this._version && this._driverReset();
            var e = null != c.field(this._savedData, this.id);
            this._data = {}, this._resetter(), this._setter(), e && (this._data = c.field(this._savedData, this.id), this._getter(), this.loadCount++)
        },
        _driverLoad: function() {
            this._savedData = {}
        },
        _driverSave: function() {},
        _driverReset: function() {
            this._savedData = {}
        },
        _getter: function() {
            this.loadCount = this._data.loadCount, this.saveCount = this._data.saveCount
        },
        _setter: function() {
            this._data.loadCount = this.loadCount, this._data.saveCount = this.saveCount
        },
        _resetter: function() {
            this.loadCount = 0, this.saveCount = 0
        },
        reset: function(t) {
            null == t && (t = !1), this._data = {}, this._resetter(), this._setter(), t && (this.saveCount++, this._setter(), this._savedData._____VERSION = this._version, this._savedData[this.id] = this._data, this._driverSave())
        },
        save: function() {
            this.saveCount++, this._setter(), this._savedData._____VERSION = this._version, this._savedData[this.id] = this._data, this._driverSave()
        },
        __class__: xe
    };
    var Pe = function() {};
    n["awe6.interfaces.IPriority"] = Pe, Pe.__name__ = ["awe6", "interfaces", "IPriority"], Pe.prototype = {
        __class__: Pe
    };
    var Oe = function() {};
    n["awe6.interfaces.IView"] = Oe, Oe.__name__ = ["awe6", "interfaces", "IView"], Oe.__interfaces__ = [S, v, R, Pe], Oe.prototype = {
        __class__: Oe
    };
    var Me = function(t, e, i, s) {
        null == i && (i = 0), this.context = e, this.set_priority(i), this.owner = s, w.call(this, t)
    };
    n["awe6.core.drivers.AView"] = Me, Me.__name__ = ["awe6", "core", "drivers", "AView"], Me.__interfaces__ = [Oe], Me.__super__ = w, Me.prototype = e(w.prototype, {
        _init: function() {
            w.prototype._init.call(this), this.globalX = 0, this.globalY = 0, this.set_x(0), this.set_y(0), this.set_isVisible(!0), this._isDirty = !0, this._children = []
        },
        addChild: function(t, e) {
            if (null == e && (e = 0), this.isDisposed || null == t) return null;
            if (t.get_parent() != this && (t.remove(), _n.__instanceof(t, Me))) {
                var i = t;
                this._children.push(i), i._setParent(this)
            }
            return 0 != e && t.set_priority(e), this._isDirty = !0, t
        },
        removeChild: function(t) {
            if (!this.isDisposed && null != t) {
                if (_n.__instanceof(t, Me)) {
                    var e = t;
                    if (e.get_parent() != this) return;
                    l.remove(this._children, e), e._setParent(null)
                }
                this._isDirty = !0
            }
        },
        remove: function() {
            null != this.get_parent() && this.get_parent().removeChild(this)
        },
        clear: function() {
            for (var t = 0, e = this._children; t < e.length;) {
                var i = e[t];
                ++t, this.removeChild(i)
            }
        },
        _updater: function(t) {
            null == t && (t = 0), w.prototype._updater.call(this, t);
            for (var e = 0, i = this._children; e < i.length;) {
                var s = i[e];
                ++e, !s.isActive || s.isDisposed || (s._age += t, s._updates++, s._updater(t))
            }
            this._isDirty && this._draw(), this.globalX = null == this.get_parent() ? this.x : this.x + this.get_parent().globalX, this.globalY = null == this.get_parent() ? this.y : this.y + this.get_parent().globalY
        },
        _disposer: function() {
            this.remove(), this._driverDisposer(), this.clear(), w.prototype._disposer.call(this)
        },
        _driverDisposer: function() {},
        _draw: function() {
            this.isDisposed || (this._children.sort((Mn = this._tools, s(Mn, Mn.sortByPriority))), this._driverDraw(), this._isDirty = !1)
        },
        _driverDraw: function() {},
        _setParent: function(t) {
            this.parent = t
        },
        get_priority: function() {
            return this.priority
        },
        set_priority: function(t) {
            if (t == this.get_priority()) return this.get_priority();
            if (this.priority = t, p.is(this.get_parent(), Me)) {
                var e = this.get_parent();
                null != e && (e._isDirty = !0)
            }
            return this.get_priority()
        },
        set_isVisible: function(t) {
            if (t == this.isVisible) return this.isVisible;
            if (this.isVisible = t, p.is(this.get_parent(), Me)) {
                var e = this.get_parent();
                null != e && e._draw()
            }
            return this.isVisible
        },
        get_parent: function() {
            return this.parent
        },
        get_isInViewStack: function() {
            return this.isVisible ? this.owner == this._kernel ? !0 : null == this.get_parent() ? !1 : this.get_parent().get_isInViewStack() : !1
        },
        set_x: function(t) {
            return this.x = t, this.globalX = null == this.get_parent() ? this.x : this.x + this.get_parent().globalX, this.x
        },
        set_y: function(t) {
            return this.y = t, this.globalY = null == this.get_parent() ? this.y : this.y + this.get_parent().globalY, this.y
        },
        __class__: Me
    });
    var Re = function(t) {
        se.call(this, t)
    };
    n["awe6.core.drivers.createjs.AudioManager"] = Re, Re.__name__ = ["awe6", "core", "drivers", "createjs", "AudioManager"], Re.__super__ = se, Re.prototype = e(se.prototype, {
        _init: function() {
            se.prototype._init.call(this), this._visibilityWasMute = this.isMute, window.document.addEventListener("visibilitychange", s(this, this._onVisibilityChange))
        },
        _disposer: function() {
            window.document.removeEventListener("visibilitychange", s(this, this._onVisibilityChange)), se.prototype._disposer.call(this)
        },
        _driverSoundFactory: function(t, e, i, s, n, r, o) {
            return null == r && (r = 0), null == n && (n = 1), null == s && (s = 0), null == i && (i = 1), new Be(this._kernel, t, this._packageId, e, i, s, n, r, o)
        },
        _driverSetIsMute: function(t) {
            try {
                createjs.Sound.muted = t
            } catch (e) {
                e instanceof hn && (e = e.val)
            }
            try {
                createjs.Sound.setMute(t)
            } catch (i) {
                i instanceof hn && (i = i.val)
            }
        },
        _onVisibilityChange: function() {
            var t = this._getVisibilityPropery();
            t ? (this._visibilityWasMute = this.isMute, this.set_isMute(!0)) : this.set_isMute(this._visibilityWasMute)
        },
        _getVisibilityPropery: function() {
            for (var t = ["hidden", "mozHidden", "msHidden", "oHidden", "webkitHidden"], e = 0; e < t.length;) {
                var i = t[e];
                if (++e, c.hasField(window.document, i)) return c.field(window.document, i)
            }
            return window.document.hidden
        },
        __class__: Re
    });
    var Be = function(t, e, i, s, n, r, o, a, l) {
        null == a && (a = 0), null == o && (o = 1), null == r && (r = 0), null == n && (n = 1), ne.call(this, t, e, i, s, 1 == n ? 0 : n, r, o, a, l)
    };
    n["awe6.core.drivers.createjs._HelperSound"] = Be, Be.__name__ = ["awe6", "core", "drivers", "createjs", "_HelperSound"], Be.__super__ = ne, Be.prototype = e(ne.prototype, {
        _driverInit: function() {
            try {
                this._sound = createjs.Sound.play("assets.audio." + this.id, null, 0, this._startTime, this._loops, this._volume, this._pan)
            } catch (t) {
                t instanceof hn && (t = t.val)
            }
            return null == this._sound ? this.dispose() : (this._sound.addEventListener("complete", s(this, this._onSoundComplete)), void this._driverTransform())
        },
        _driverTransform: function(t) {
            null == t && (t = !1), null != this._sound && (t && (this._volume *= this._sound.volume, this._pan *= this._sound.pan), this._sound.volume = this._volume, this._sound.pan = this._pan)
        },
        _driverStop: function() {
            if (null != this._sound) try {
                this._sound.stop()
            } catch (t) {
                t instanceof hn && (t = t.val)
            }
        },
        _onSoundComplete: function() {
            null != this._onCompleteCallback && this._onCompleteCallback.apply(this, []), this.dispose()
        },
        __class__: Be
    });
    var De = function(t, e, i) {
        oe.call(this, t, e, i)
    };
    n["awe6.core.drivers.createjs.Factory"] = De, De.__name__ = ["awe6", "core", "drivers", "createjs", "Factory"], De.__super__ = oe, De.prototype = e(oe.prototype, {
        _driverInit: function() {
            this.isDebug || (os.trace = function(t) {
                _n.__trace(t, null)
            });
            var t = new createjs.Container;
            if (this._context.addChild(t), this._context = t, this._countConfigsLoaded = 0, this._countConfigsToLoad = 0, "" != this._config) {
                var e;
                e = null != this._config ? this._config : "assets/__config.xml";
                var i = this._context.getStage().canvas.getAttribute("config");
                null != i && "" != i && (e = i), this._loadConfig(e)
            } else this._launchKernel()
        },
        _launchKernel: function() {
            this._displayCredits();
            var t = !0;
            this.config.exists("settings.nativeExperience") && (t = "true" == this.config.get("settings.nativeExperience"));
            var e = this._context.getStage().canvas.getAttribute("nativeExperience");
            null != e && "" != e && (t = "true" == e), this.isNativeExperience = t, oe.prototype._launchKernel.call(this);
            var i = this._concreteKernel.system.isDesktop,
                s = "default";
            this.config.exists("settings.fullScreen") && (s = this.config.get("settings.fullScreen"));
            var n = this._context.getStage().canvas.getAttribute("fullScreen");
            null != n && "" != n && (s = n), this._kernel.set_isFullScreen(i && ("desktop" == s || "all" == s) || !i && ("mobile" == s || "all" == s || "default" == s)), this._kernel.isFullScreen && this.isNativeExperience && !i && (this._concreteKernel.system.requestFullScreen(), this._concreteKernel.system.requestLockScreen())
        },
        _displayCredits: function() {
            os.trace(this.config.exists("settings.asciiArt") ? this.config.get("settings.asciiArt") : "", {
                fileName: "Factory.hx",
                lineNumber: 126,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), os.trace(this.id + " v" + this.version + " by " + this.author, {
                fileName: "Factory.hx",
                lineNumber: 127,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), os.trace("Powered by HSMedia", {
                fileName: "Factory.hx",
                lineNumber: 128,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), os.trace("", {
                fileName: "Factory.hx",
                lineNumber: 129,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            })
        },
        _loadConfig: function(t) {
            if ("<?xml" == l.substr(t, 0, 5)) this._parseXml(t);
            else {
                this.isDecached && (t += "?dc=" + p.random(99999));
                var e = new ns(t);
                try {
                    e.onError = s(this, this._onIOError), e.onData = s(this, this._onComplete), e.request()
                } catch (i) {
                    return i instanceof hn && (i = i.val), void this._onIOError(p.string(i))
                }
                this._countConfigsToLoad++
            }
        },
        _parseXml: function(t) {
            if (this._traverseElements(y.parse(t).firstElement().elements(), ""), this.config.exists("settings.joinXml") && this._countConfigsLoaded < 100) {
                var e = this.config.get("settings.joinXml");
                this.config.remove("settings.joinXml");
                for (var i = e.split(","), s = 0; s < i.length;) {
                    var n = i[s];
                    ++s, this._loadConfig(n)
                }
            }
            this._countConfigsLoaded == this._countConfigsToLoad && this._launchKernel()
        },
        _onIOError: function(t) {
            os.trace("IO Errors Occurred During Config Loading:" + t, {
                fileName: "Factory.hx",
                lineNumber: 182,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), os.trace("Double check your Config path.  Cross domain (or local) file loading of Config is a security risk and is, therefore, disabled on this browser.", {
                fileName: "Factory.hx",
                lineNumber: 183,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), null != this._config && "<?xml" == l.substr(this._config, 0, 5) ? (os.trace("Embedded Config detected, using that to continue ...", {
                fileName: "Factory.hx",
                lineNumber: 186,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), this._countConfigsLoaded = this._countConfigsToLoad, this._parseXml(this._config)) : (os.trace("Use a web server (or local server) to run over http and serve all files from the same domain.  Or embed the Config directlty in the code (e.g. as a Resource).", {
                fileName: "Factory.hx",
                lineNumber: 192,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), os.trace("Unable to continue without Config.", {
                fileName: "Factory.hx",
                lineNumber: 193,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }))
        },
        _onComplete: function(t) {
            this._countConfigsLoaded++;
            var e = t;
            "<?xml" != l.substr(e, 0, 5) && (e = this.createEncrypter().decrypt(us.ofString(e)).toString()), this._parseXml(e)
        },
        _getAssetUrls: function() {
            for (var t = ["bin/assets/audio/BallLost.m4a", "bin/assets/audio/BallLost.ogg", "bin/assets/audio/Bumper1.m4a", "bin/assets/audio/Bumper1.ogg", "bin/assets/audio/Bumper2.m4a", "bin/assets/audio/Bumper2.ogg", "bin/assets/audio/Bumper3.m4a", "bin/assets/audio/Bumper3.ogg", "bin/assets/audio/ButtonOver.m4a", "bin/assets/audio/ButtonOver.ogg", "bin/assets/audio/CenterPin.m4a", "bin/assets/audio/CenterPin.ogg", "bin/assets/audio/Entry.m4a", "bin/assets/audio/Entry.ogg", "bin/assets/audio/EntryComplete.m4a", "bin/assets/audio/EntryComplete.ogg", "bin/assets/audio/FlipperDown1.m4a", "bin/assets/audio/FlipperDown1.ogg", "bin/assets/audio/FlipperDown2.m4a", "bin/assets/audio/FlipperDown2.ogg", "bin/assets/audio/FlipperDown3.m4a", "bin/assets/audio/FlipperDown3.ogg", "bin/assets/audio/FlipperUp1.m4a", "bin/assets/audio/FlipperUp1.ogg", "bin/assets/audio/FlipperUp2.m4a", "bin/assets/audio/FlipperUp2.ogg", "bin/assets/audio/FlipperUp3.m4a", "bin/assets/audio/FlipperUp3.ogg", "bin/assets/audio/JackpotOpen.m4a", "bin/assets/audio/JackpotOpen.ogg", "bin/assets/audio/JackpotRejected.m4a", "bin/assets/audio/JackpotRejected.ogg", "bin/assets/audio/JackpotWin.m4a", "bin/assets/audio/JackpotWin.ogg", "bin/assets/audio/MissionComplete.m4a", "bin/assets/audio/MissionComplete.ogg", "bin/assets/audio/MissionHit.m4a", "bin/assets/audio/MissionHit.ogg", "bin/assets/audio/MissionStart.m4a", "bin/assets/audio/MissionStart.ogg", "bin/assets/audio/MultiplierComplete.m4a", "bin/assets/audio/MultiplierComplete.ogg", "bin/assets/audio/MultiplierHit.m4a", "bin/assets/audio/MultiplierHit.ogg", "bin/assets/audio/MusicGameTable1Mission.m4a", "bin/assets/audio/MusicGameTable1Mission.ogg", "bin/assets/audio/MusicGameTable1Normal.m4a", "bin/assets/audio/MusicGameTable1Normal.ogg", "bin/assets/audio/MusicGameTable2.m4a", "bin/assets/audio/MusicGameTable2.ogg", "bin/assets/audio/MusicMenu.m4a", "bin/assets/audio/MusicMenu.ogg", "bin/assets/audio/PlungerPull.m4a", "bin/assets/audio/PlungerPull.ogg", "bin/assets/audio/PlungerRelease.m4a", "bin/assets/audio/PlungerRelease.ogg", "bin/assets/audio/PolyBumper.m4a", "bin/assets/audio/PolyBumper.ogg", "bin/assets/audio/RescueLaunch.m4a", "bin/assets/audio/RescueLaunch.ogg", "bin/assets/audio/RescueOpen.m4a", "bin/assets/audio/RescueOpen.ogg", "bin/assets/audio/SensorLaunch.m4a", "bin/assets/audio/SensorLaunch.ogg", "bin/assets/audio/Silence.m4a", "bin/assets/audio/Silence.ogg", "bin/assets/audio/Star1.m4a", "bin/assets/audio/Star1.ogg", "bin/assets/audio/Star2.m4a", "bin/assets/audio/Star2.ogg", "bin/assets/audio/Star3.m4a", "bin/assets/audio/Star3.ogg", "bin/assets/audio/TargetHit1.m4a", "bin/assets/audio/TargetHit1.ogg", "bin/assets/audio/TargetHit2.m4a", "bin/assets/audio/TargetHit2.ogg", "bin/assets/audio/TargetHit3.m4a", "bin/assets/audio/TargetHit3.ogg", "bin/assets/audio/TargetsComplete.m4a", "bin/assets/audio/TargetsComplete.ogg", "bin/assets/audio/Transition.m4a", "bin/assets/audio/Transition.ogg", "bin/assets/audio/WallRemoved.m4a", "bin/assets/audio/WallRemoved.ogg", "bin/assets/Blank.png", "bin/assets/fonts/__Structia-webfont.eot", "bin/assets/fonts/__Structia-webfont.svg", "bin/assets/fonts/__Structia-webfont.ttf", "bin/assets/fonts/__Structia-webfont.woff", "bin/assets/fonts/__Structia-webfont.woff2", "bin/assets/game/Ball.png", "bin/assets/game/Bg1.png", "bin/assets/game/Bg1_0.jpg", "bin/assets/game/Bg1_1.jpg", "bin/assets/game/Bg1_2.jpg", "bin/assets/game/Bg1_3.jpg", "bin/assets/game/Bg1_4.jpg", "bin/assets/game/Bg1_fg.png", "bin/assets/game/Bg2_0.jpg", "bin/assets/game/Bumper1.png", "bin/assets/game/Bumper2.png", "bin/assets/game/Bumper3.png", "bin/assets/game/Bumper4.png", "bin/assets/game/Bumper5.png", "bin/assets/game/CenterPin.png", "bin/assets/game/Fg1.png", "bin/assets/game/Fg2.png", "bin/assets/game/Firewall.png", "bin/assets/game/FlipperLeft.png", "bin/assets/game/FlipperRight.png", "bin/assets/game/FlipperSmall.png", "bin/assets/game/Jackpot.png", "bin/assets/game/Light.png", "bin/assets/game/LightBumper.png", "bin/assets/game/LightEntry.png", "bin/assets/game/LightEntryGroup.png", "bin/assets/game/LightFirewall.png", "bin/assets/game/LightLaunch.png", "bin/assets/game/LightRampJackpot.png", "bin/assets/game/LightRampMission.png", "bin/assets/game/LightReentry.png", "bin/assets/game/LightTargetsGroupLeft.png", "bin/assets/game/LightTargetsGroupRight.png", "bin/assets/game/LightTargetsJackpot.png", "bin/assets/game/Plunger.png", "bin/assets/game/PolyBumperLeft.png", "bin/assets/game/PolyBumperRight.png", "bin/assets/game/PolyBumperTop.png", "bin/assets/game/ReboundDoor.png", "bin/assets/gui/Burst.jpg", "bin/assets/gui/Hud.png", "bin/assets/gui/HudLives.png", "bin/assets/gui/InstructionsBg.jpg", "bin/assets/gui/InstructionsPage1A.png", "bin/assets/gui/InstructionsPage1B.png", "bin/assets/gui/InstructionsPage2.png", "bin/assets/gui/InstructionsPage3.png", "bin/assets/gui/Logo.png", "bin/assets/gui/LogoShine.png", "bin/assets/gui/MenuBg.jpg", "bin/assets/gui/Pause.png", "bin/assets/gui/Question.png", "bin/assets/gui/Radial.jpg", "bin/assets/gui/Results0.png", "bin/assets/gui/Results1.png", "bin/assets/gui/Results2.png", "bin/assets/gui/Results3.png", "bin/assets/overlay/ButtonAudioOver.png", "bin/assets/overlay/ButtonAudioUp.png", "bin/assets/overlay/ButtonCrossOver.png", "bin/assets/overlay/ButtonCrossUp.png", "bin/assets/overlay/ButtonFullscreenOver.png", "bin/assets/overlay/ButtonFullscreenUp.png", "bin/assets/overlay/ButtonInstructionsOver.png", "bin/assets/overlay/ButtonInstructionsUp.png", "bin/assets/overlay/ButtonLeaderboardOver.png", "bin/assets/overlay/ButtonLeaderboardUp.png", "bin/assets/overlay/ButtonMenuOver.png", "bin/assets/overlay/ButtonMenuUp.png", "bin/assets/overlay/ButtonNextOver.png", "bin/assets/overlay/ButtonNextUp.png", "bin/assets/overlay/ButtonPreviousOver.png", "bin/assets/overlay/ButtonPreviousUp.png", "bin/assets/overlay/ButtonRestartOver.png", "bin/assets/overlay/ButtonRestartUp.png", "bin/assets/overlay/ButtonStartOver.png", "bin/assets/overlay/ButtonStartUp.png", "bin/assets/overlay/ButtonTextOver.png", "bin/assets/overlay/ButtonTextUp.png", "bin/assets/overlay/ButtonTickOver.png", "bin/assets/overlay/ButtonTickUp.png", "bin/assets/overlay/ButtonWebsiteOver.png", "bin/assets/overlay/ButtonWebsiteUp.png", "bin/assets/overlay/PauseOver.png", "bin/assets/overlay/PauseUp.png", "bin/assets/__Config.xml", "bin/assets/__Icon128.png", "bin/assets/__Icon196.png", "bin/assets/__Icon256.png", "bin/assets/__PreloaderBg.png"], e = [], i = 0, s = t.length; s > i;) {
                var n = i++;
                t[n] = l.substr(t[n], 4, null), ("__" == l.substr(t[n], 0, 2) || t[n].indexOf("/__") > -1) && e.push(t[n])
            }
            for (var r = 0; r < e.length;) {
                var o = e[r];
                ++r, l.remove(t, o)
            }
            return t
        },
        _driverDisposer: function() {
            null != this._context.parent && this._context.parent.removeChild(this._context)
        },
        preventDefaultForKeys: function(t) {
            this._kernel.inputs.keyboard.preventDefaultForKeys(t)
        },
        allowDefaultForKeys: function(t) {
            this._kernel.inputs.keyboard.allowDefaultForKeys(t)
        },
        __class__: De
    });
    var ke = function(t) {
        le.call(this, t)
    };
    n["awe6.core.drivers.createjs.InputKeyboard"] = ke, ke.__name__ = ["awe6", "core", "drivers", "createjs", "InputKeyboard"], ke.__super__ = le, ke.prototype = e(le.prototype, {
        _driverInit: function() {
            this._document = window.document, this._preventDefaultKeyCodes = [], this._document.addEventListener("keydown", s(this, this._onKeyDown)), this._document.addEventListener("keyup", s(this, this._onKeyUp))
        },
        _disposer: function() {
            this._document.removeEventListener("keydown", s(this, this._onKeyDown)), this._document.removeEventListener("keyup", s(this, this._onKeyUp)), le.prototype._disposer.call(this)
        },
        _onKeyDown: function(t) {
            this.isActive && (h.has(this._preventDefaultKeyCodes, t.keyCode) && t.preventDefault(), this._addEvent(t.keyCode, !0))
        },
        _onKeyUp: function(t) {
            this.isActive && (h.has(this._preventDefaultKeyCodes, t.keyCode) && t.preventDefault(), this._addEvent(t.keyCode, !1))
        },
        preventDefaultForKeys: function(t) {
            if (null != t)
                for (var e = 0; e < t.length;) {
                    var i = t[e];
                    ++e;
                    var s = this.getKeyCode(i);
                    h.has(this._preventDefaultKeyCodes, s) || this._preventDefaultKeyCodes.push(s)
                }
        },
        allowDefaultForKeys: function(t) {
            if (null != t)
                for (var e = 0; e < this._preventDefaultKeyCodes.length;) {
                    var i = this.getKey(this._preventDefaultKeyCodes[e]);
                    h.has(t, i) ? this._preventDefaultKeyCodes.splice(e, 1) : e++
                }
        },
        __class__: ke
    });
    var Le = function(t) {
        ce.call(this, t)
    };
    n["awe6.core.drivers.createjs.InputMouse"] = Le, Le.__name__ = ["awe6", "core", "drivers", "createjs", "InputMouse"], Le.__super__ = ce, Le.prototype = e(ce.prototype, {
        _driverInit: function() {
            this._stage = this._kernel._stage, this._isTouch = createjs.Touch.isSupported() && !this._kernel.system.isDesktop, this._isTouch ? (createjs.Touch.enable(this._stage, !0), this._touchX = this._touchY = 0, this._stage.canvas.addEventListener("touchstart", s(this, this._onTouchStart)), this._stage.canvas.addEventListener("touchmove", s(this, this._onTouch)), this._stage.canvas.addEventListener("touchend", s(this, this._onTouchEnd))) : (this._stage.addEventListener("stagemousedown", s(this, this._onMouseDown)), this._stage.addEventListener("stagemouseup", s(this, this._onMouseUp))), window.focus()
        },
        _disposer: function() {
            this._isTouch && (createjs.Touch.disable(this._stage), this._stage.canvas.removeEventListener("touchstart", s(this, this._onTouchStart)), this._stage.canvas.removeEventListener("touchmove", s(this, this._onTouch)), this._stage.canvas.removeEventListener("touchend", s(this, this._onTouchEnd))), this._stage.removeEventListener("stagemousedown", s(this, this._onMouseDown)), this._stage.removeEventListener("stagemouseup", s(this, this._onMouseUp)), ce.prototype._disposer.call(this)
        },
        _isWithinBounds: function() {
            return this._stage.mouseInBounds
        },
        _getPosition: function() {
            this._isTouch ? (this.x = this._touchX, this.y = this._touchY) : (this.x = p["int"](this._tools.limit(this._stage.mouseX / this._stage.scaleX, 0, this._kernel.factory.width)), this.y = p["int"](this._tools.limit(this._stage.mouseY / this._stage.scaleY, 0, this._kernel.factory.height))), this.x = this.x == this._kernel.factory.width ? this._xPrev : this.x, this.y = this.y == this._kernel.factory.height ? this._yPrev : this.y
        },
        _onTouchStart: function(t) {
            this._onMouseDown(t), this._onTouch(t), this.x = this._touchX, this.y = this._touchY
        },
        _onTouchEnd: function(t) {
            this._onMouseUp(t), this._onTouch(t)
        },
        _onTouch: function(t) {
            try {
                this._touchX = p["int"](this._tools.limit((t.targetTouches[0].pageX - p["int"](this._stage.canvas.offsetLeft)) / this._kernel._scaleX, 0, this._kernel.factory.width)), this._touchY = p["int"](this._tools.limit((t.targetTouches[0].pageY - p["int"](this._stage.canvas.offsetTop)) / this._kernel._scaleY, 0, this._kernel.factory.height))
            } catch (e) {
                e instanceof hn && (e = e.val)
            }
            this._stage.mouseInBounds && t.preventDefault(), Le._isSoundTriggered || (this._kernel.audio.start("Silence"), Le._isSoundTriggered = !0, this._kernel.isFullScreen && this._kernel.factory.isNativeExperience && (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen()))
        },
        _onMouseDown: function(t) {
            window.focus(), this.isActive && (this._isTouch || 2 != t.nativeEvent.button) && this._buffer.push(!0)
        },
        _onMouseUp: function(t) {
            this.isActive && (this._isTouch || 2 != t.nativeEvent.button) && this._buffer.push(!1)
        },
        set_isVisible: function(t) {
            return this._stage.cursor = t ? "none" : "auto", ce.prototype.set_isVisible.call(this, t)
        },
        set_cursorType: function(t) {
            switch (t[1]) {
                case 0:
                    this._stage.cursor = "crosshair";
                    break;
                case 1:
                    this._stage.cursor = "auto";
                    break;
                case 2:
                    this._stage.cursor = "pointer";
                    break;
                case 3:
                    this._stage.cursor = "pointer";
                    break;
                case 4:
                    this._stage.cursor = "text";
                    break;
                case 5:
                    var e = t[2];
                    this._stage.cursor = e
            }
            return ce.prototype.set_cursorType.call(this, t)
        },
        __class__: Le
    });
    var Ue = function(t, e) {
        fe.call(this, t, e)
    };
    n["awe6.core.drivers.createjs.Kernel"] = Ue, Ue.__name__ = ["awe6", "core", "drivers", "createjs", "Kernel"], Ue.__super__ = fe, Ue.prototype = e(fe.prototype, {
        _driverGetIsLocal: function() {
            var t, e = window.location.protocol;
            switch (e) {
                case "http:":
                case "https:":
                    t = !1;
                    break;
                default:
                    t = !0
            }
            return t
        },
        _driverInit: function() {
            this.system = new Ye(this), this._scaleX = this._scaleY = 1, this._stage = this._stageDynamic = this._context.getStage(), this._stage.canvas.style.setProperty("-ms-touch-action", "none", ""), this._stage.canvas.style.setProperty("image-rendering", "-o-crisp-edges", ""), this._stage.canvas.style.setProperty("image-rendering", "optimize-contrast", ""), this._stage.canvas.style.setProperty("-ms-interpolation-mode", "nearest-neighbor", ""), this._stage.canvas.style.setProperty("-webkit-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("-moz-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("user-select", "none", ""), this._stage.canvas.style.setProperty("-webkit-touch-callout", "none", ""), this._stage.canvas.style.setProperty("-webkit-user-select", "none", ""), this._stage.canvas.style.setProperty("-moz-user-select", "none", ""), this._stage.canvas.style.setProperty("-ms-user-select", "none", ""), this._stage.tickOnUpdate = !1, this._stage.mouseEnabled = !1, this._stage.canvas.width = this.factory.width, this._stage.canvas.height = this.factory.height;
            var t = new createjs.Shape;
            t.graphics.beginFill("#" + function(t) {
                var e, i = d.hex(t.factory.bgColor, 8);
                return e = l.substr(i, 2, 6)
            }(this)), t.graphics.drawRect(0, 0, this.factory.width, this.factory.height), t.graphics.endFill(), this._stage.addChildAt(t, 0), createjs.Ticker.setFPS(this.factory.targetFramerate), createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED, createjs.Ticker.addEventListener("tick", s(this, this._onEnterFrame)), this._stage.canvas.addEventListener("contextmenu", s(this, this._onContextMenu), !1), window.addEventListener("unload", s(this, this._onUnload))
        },
        _onUnload: function() {
            window.removeEventListener("unload", s(this, this._onUnload)), this.get_session().save()
        },
        _onContextMenu: function(t) {
            t.preventDefault(), t.stopImmediatePropagation(), null != this.overlay && hs.delay(function(t, e) {
                return function() {
                    t(e)
                }
            }((Mn = this.overlay, s(Mn, Mn.activateButton)), ni.PAUSE), 100)
        },
        _driverDisposer: function() {
            this._stage.canvas.removeEventListener("contextmenu", s(this, this._onContextMenu))
        },
        _onEnterFrame: function(t) {
            null != t.paused && 1 == t.paused ? this._stage.tickOnUpdate = !1 : (this._updates++, this._updater(0), this._stage.tickOnUpdate = this.isActive, this._stageDynamic.update(t));
            var e = window.innerWidth + ":" + window.innerHeight;
            this._prevWindowSize != e && this._driverSetIsFullScreen(this.isFullScreen)
        },
        _driverSetIsEyeCandy: function() {},
        _driverSetIsFullScreen: function(t) {
            this._prevWindowSize = window.innerWidth + ":" + window.innerHeight, this._scaleX = this._scaleY = 1;
            var e = this.factory.width,
                i = this.factory.height,
                s = window.innerWidth,
                n = window.innerHeight,
                r = i > e,
                o = n > s;
            this.system.isRotated = !this.system.isDesktop && r != o;
            var a = 0,
                l = 0;
            if (t) {
                var h = Math.min(s / e, n / i),
                    _ = this.factory.fullScreenType;
                switch (_[1]) {
                    case 0:
                    case 1:
                        break;
                    case 2:
                        this._scaleX = s / e, this._scaleY = n / i;
                        break;
                    case 3:
                        this._scaleX = this._scaleY = h;
                        break;
                    case 4:
                        h = .5 > h ? .25 : 1 > h ? .5 : Math.floor(h), this._scaleX = this._scaleY = h;
                        break;
                    case 5:
                        var u = _[2];
                        if (null != u.bleedWidth && null != u.bleedHeight) {
                            var c = e - 2 * p.parseInt(u.bleedWidth),
                                g = i - 2 * p.parseInt(u.bleedHeight);
                            i / e > n / s ? g / e > n / s ? this._scaleX = this._scaleY = n / g : this._scaleY = this._scaleX = s / e : this._scaleY = this._scaleX = i / c > n / s ? n / i : s / c
                        }
                }
                a = Math.round((s - e * this._scaleX) / 2), l = Math.round((n - i * this._scaleY) / 2)
            }
            this._stage.canvas.style.setProperty("width", Math.round(e * this._scaleX) + "px", ""), this._stage.canvas.style.setProperty("height", Math.round(i * this._scaleY) + "px", ""), this._stage.canvas.style.setProperty("margin-left", a + "px", ""), this._stage.canvas.style.setProperty("margin-top", l + "px", "")
        },
        __class__: Ue
    });
    var Ne = function(t, e, i, s, n, r, o, a, l, h, _, u, c, p, g, d, f) {
        ve.call(this, t, e, i, s, n, r, o, a, l, h, _, u, c, p, g, d, f)
    };
    n["awe6.core.drivers.createjs.Overlay"] = Ne, Ne.__name__ = ["awe6", "core", "drivers", "createjs", "Overlay"], Ne.__super__ = ve, Ne.prototype = e(ve.prototype, {
        _driverInit: function() {
            _n.__cast(this._borderView, Xe).context.mouseEnabled = !1, this._context.mouseEnabled = !1, this._pauseContext = new createjs.Container, this._pauseContext.mouseEnabled = !1;
            var t = new createjs.Shape;
            t.graphics.beginFill("#" + d.hex(this._pauseColor, 6)), t.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), t.alpha = this._pauseAlpha, this._pauseContext.addChild(t), this._flashContext = new createjs.Container, this._flashContext.mouseEnabled = !1
        },
        _updater: function(t) {
            null == t && (t = 0), ve.prototype._updater.call(this, t), this._flashContext.alpha = this._flashAlpha, this._flashContext.visible = 0 != this._flashAlpha
        },
        flash: function(t, e, i, s) {
            null == s && (s = 16777215), null == i && (i = 1), null == e && (e = !0), this._flashContext.removeAllChildren();
            var n = new createjs.Shape;
            n.graphics.beginFill("#" + d.hex(s, 6)), n.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), this._flashContext.addChild(n), t = null != t ? t : e ? 500 : .5 * this._kernel.factory.targetFramerate, this._flashDuration = this._flashStartingDuration = t, this._flashAsTime = e, this._flashAlpha = this._flashStartingAlpha = i > 1 ? 1 : 0 > i ? 0 : i
        },
        __class__: Ne
    });
    var Fe = function(t, e, i) {
        we.call(this, t, e, i)
    };
    n["awe6.core.drivers.createjs.Preloader"] = Fe, Fe.__name__ = ["awe6", "core", "drivers", "createjs", "Preloader"], Fe.__super__ = we, Fe.prototype = e(we.prototype, {
        _init: function() {
            we.prototype._init.call(this), this._system = this._kernel.system;
            var t = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
            null != this._proprietaryAudioFormat && "" != this._proprietaryAudioFormat && h.has(t, this._proprietaryAudioFormat) || (this._proprietaryAudioFormat = "mp3"), this._context = new createjs.Container, this._isDesktop = !0;
            try {
                this._isDesktop = this._system.isDesktop
            } catch (e) {
                e instanceof hn && (e = e.val)
            }
            this.view = new Xe(this._kernel, this._context);
            var i = [];
            if (this._manifest = [], createjs.Sound.initializeDefaultPlugins()) {
                var n = this._isSoundDisabled || this._system.isAndroid && this._getIsStockAndroidBrowser();
                this._validSoundFormat = createjs.Sound.getCapability("ogg") ? "ogg" : createjs.Sound.getCapability(this._proprietaryAudioFormat) ? this._proprietaryAudioFormat : "noValidFormat", this._activePlugin = createjs.Sound.activePlugin;
                for (var r = 0, o = this._assets; r < o.length;) {
                    var a = o[r];
                    ++r;
                    var _ = l.substr(a, -3, null);
                    if (h.has(t, _) && (i.push(a), !n && _ == this._validSoundFormat)) {
                        var u;
                        u = "assets.audio." + function() {
                            var t, e = a.split("/").pop();
                            return t = l.substr(e, 0, -4)
                        }(this), this._isFastTestMode || this._manifest.push({
                            src: a,
                            id: u
                        })
                    }
                }
            }
            for (var c = 0; c < i.length;) {
                var p = i[c];
                ++c, l.remove(this._assets, p)
            }
            this._loadQueue = new createjs.LoadQueue(!this._kernel.isLocal && !this._isFastTestMode, ""), this._loadQueue.setMaxConnections(10), this._loadQueue.installPlugin(createjs.Sound);
            var g = this._manifest.concat(this._assets);
            g = this._tools.shuffle(g), this._loadQueue.addEventListener("complete", s(this, this._onComplete)), this._loadQueue.addEventListener("fileerror", s(this, this._onError)), this._loadQueue.addEventListener("error", s(this, this._onError)), hs.delay(function(t, e) {
                return function() {
                    t(e)
                }
            }((Mn = this._loadQueue, s(Mn, Mn.loadManifest)), g), 200)
        },
        _next: function() {},
        get_progress: function() {
            return this._loadQueue.progress
        },
        _onComplete: function() {
            this._isComplete || (this._loadQueue.removeEventListener("complete", s(this, this._onComplete)), this._loadQueue.removeEventListener("fileerror", s(this, this._onError)), this._loadQueue.removeEventListener("error", s(this, this._onError)), this._continue())
        },
        _onError: function(t) {
            os.trace([t, t.title, t.message, t.data], {
                fileName: "Preloader.hx",
                lineNumber: 134,
                className: "awe6.core.drivers.createjs.Preloader",
                methodName: "_onError"
            })
        },
        _continue: function() {
            this._isComplete = !0, this._assets = []
        },
        _getIsStockAndroidBrowser: function() {
            var t, e = this._system.userAgent.indexOf("Android") > -1 && this._system.userAgent.indexOf("Mozilla/5.0") > -1 && this._system.userAgent.indexOf("AppleWebKit") > -1,
                i = new a("AppleWebKit/([\\d.]+)", ""),
                s = i.match(this._system.userAgent);
            t = s ? p.parseFloat(i.matched(1)) : 0;
            var n, r = new a("Chrome/([\\d.]+)", ""),
                o = r.match(this._system.userAgent);
            return n = o ? p.parseFloat(r.matched(1)) : 0, e && (s && 537 > t || o && 37 > n)
        },
        __class__: Fe
    });
    var Ge = function(t) {
        Ie.call(this, t)
    };
    n["awe6.core.drivers.createjs.Profiler"] = Ge, Ge.__name__ = ["awe6", "core", "drivers", "createjs", "Profiler"], Ge.__super__ = Ie, Ge.prototype = e(Ie.prototype, {
        _init: function() {
            Ie.prototype._init.call(this), this._isMemoryEnabled = null != window.performance && null != window.performance.memory, this._width = 75, this._height = 24, this._marginHeight = 12;
            var t = new createjs.Shape;
            this._context.addChild(t), t.alpha = .25, this._isMemoryEnabled && (t.graphics.beginFill("#" + d.hex(this._backgroundColor, 6)), t.graphics.drawRect(0, 0, this._width, this._height), t.graphics.endFill()), t.graphics.beginFill("#" + d.hex(this._marginColor, 6)), t.graphics.drawRect(0, 0, this._width, this._marginHeight), t.graphics.endFill(), t.cache(0, 0, this._width, this._height), this._fpsTextField = new createjs.Text("", "", "#" + d.hex(this._fpsColor, 6)), this._context.addChild(this._fpsTextField), this._isMemoryEnabled && (this._memoryTextField = new createjs.Text("", "", "#" + d.hex(this._memoryColor, 6)), this._memoryTextField.y = 12, this._context.addChild(this._memoryTextField))
        },
        _driverUpdate: function() {
            {
                var t = p["int"](this._kernel.getFramerate(!0));
                p["int"](Math.min(this._height, this._height / this._kernel.factory.targetFramerate * t))
            }
            if (this._fpsTextField.text = this._fpsLabel + ": " + t + " / " + this._kernel.factory.targetFramerate, this._isMemoryEnabled && this._updates % this._kernel.factory.targetFramerate == 0) {
                var e = Math.round(window.performance.memory.usedJSHeapSize / 1024 / 1024),
                    i = Math.round(window.performance.memory.jsHeapSizeLimit / 1024 / 1024);
                this._memoryTextField.text = this._memoryLabel + ": " + e + " / " + i
            }
        },
        __class__: Ge
    });
    var je = function(t, e) {
        Ae.call(this, t, e)
    };
    n["awe6.core.drivers.createjs.SceneTransition"] = je, je.__name__ = ["awe6", "core", "drivers", "createjs", "SceneTransition"], je.__super__ = Ae, je.prototype = e(Ae.prototype, {
        _init: function() {
            Ae.prototype._init.call(this), this._kernel.scenes.get_scene().get_view().context.cache(0, 0, this._kernel.factory.width, this._kernel.factory.height);
            var t = new createjs.Bitmap(this._kernel.scenes.get_scene().get_view().context.cacheCanvas);
            this._kernel.scenes.get_scene().get_view().context.uncache(), this._context.mouseEnabled = !1, this._context.addChild(t)
        },
        _updater: function(t) {
            null == t && (t = 0), Ae.prototype._updater.call(this, t), this.isDisposed || (this._context.alpha = 1 - this.get_progress())
        },
        __class__: je
    });
    var He = function(t, e) {
        xe.call(this, t, e)
    };
    n["awe6.core.drivers.createjs.Session"] = He, He.__name__ = ["awe6", "core", "drivers", "createjs", "Session"], He.__super__ = xe, He.prototype = e(xe.prototype, {
        _init: function() {
            var t = !0;
            null != this._kernel.getConfig("settings.sessionSaved") && (t = "false" != this._kernel.getConfig("settings.sessionSaved")), this._storage = t ? un.getLocalStorage() : un.getSessionStorage(), xe.prototype._init.call(this)
        },
        _driverLoad: function() {
            if (this._savedData = {}, null != window.document.cookie && cn.exists(this._kernel.factory.id) && (this._savedData = this._tools.unserialize(cn.get(this._kernel.factory.id)), this._driverSave(), cn.remove(this._kernel.factory.id)), null != this._storage) {
                var t = this._storage.getItem(this._kernel.factory.id);
                null != t && (this._savedData = this._tools.unserialize(t))
            }
        },
        _driverReset: function() {
            null != this._storage && this._storage.removeItem(this._kernel.factory.id), this._savedData = {}
        },
        _driverSave: function() {
            null != this._storage && this._storage.setItem(this._kernel.factory.id, this._tools.serialize(this._savedData))
        },
        __class__: He
    });
    var Ye = function(t) {
        this._kernel = t, this.isRotated = !1, this.isAndroid = this.isChromeOs = this.isIos = this.isLinux = this.isMacOs = this.isSilk = this.isWindows = this.isWindowsPhone = this.isDesktop = !1, this.userAgent = window.navigator.userAgent, this.isSilk = new a("Silk", "").match(this.userAgent), this.isCocoonjs = 1 == window.navigator.isCocoonJS, this.isCrosswalk = new a("Crosswalk", "").match(this.userAgent), new a("Android", "").match(this.userAgent) ? this.isAndroid = !0 : new a("CrOS", "").match(this.userAgent) ? this.isChromeOs = !0 : new a("iP[ao]d|iPhone", "i").match(this.userAgent) ? this.isIos = !0 : new a("Linux", "").match(this.userAgent) ? this.isLinux = !0 : new a("Mac OS", "").match(this.userAgent) ? this.isMacOs = !0 : new a("Windows", "").match(this.userAgent) && (this.isWindows = !0, new a("Windows Phone", "i").match(this.userAgent) && (this.isWindowsPhone = !0)), (this.isWindows || this.isMacOs || this.isLinux && !this.isSilk) && (this.isDesktop = !0), this.isWindowsPhone && (this.isDesktop = !1)
    };
    n["awe6.core.drivers.createjs.System"] = Ye, Ye.__name__ = ["awe6", "core", "drivers", "createjs", "System"], Ye.prototype = {
        requestFullScreen: function() {
            try {
                var t = window.document.documentElement;
                null != s(t, t.requestFullscreen) ? t.requestFullscreen() : null != t.msRequestFullscreen ? t.msRequestFullscreen() : null != t.mozRequestFullScreen ? t.mozRequestFullScreen() : null != t.webkitRequestFullscreen && t.webkitRequestFullscreen()
            } catch (e) {
                e instanceof hn && (e = e.val)
            }
        },
        requestExitFullScreen: function() {
            try {
                var t = window.document;
                null != s(t, t.exitFullscreen) ? t.exitFullscreen() : null != t.msExitFullscreen ? t.msExitFullscreen() : null != t.mozCancelFullScreen ? t.mozCancelFullScreen() : null != t.webkitExitFullscreen && t.webkitExitFullscreen()
            } catch (e) {
                e instanceof hn && (e = e.val)
            }
        },
        requestLockScreen: function() {
            if (!this.isDesktop) try {
                var t;
                t = this._kernel.factory.width < this._kernel.factory.height ? "portrait-primary" : "landscape-primary";
                var e = window.screen;
                null != e.orientation ? null != e.orientation.lock ? e.orientation.lock(t) : null != e.orientation.lockOrientation && e.orientation.lockOrientation(t) : null != e.mozOrientation ? e.mozLockOrientation(t) : null != e.msOrientation && e.msLockOrientation(t)
            } catch (i) {
                i instanceof hn && (i = i.val)
            }
        },
        __class__: Ye
    };
    var Xe = function(t, e, i, s) {
        Me.call(this, t, e, i, s)
    };
    n["awe6.core.drivers.createjs.View"] = Xe, Xe.__name__ = ["awe6", "core", "drivers", "createjs", "View"], Xe.__super__ = Me, Xe.prototype = e(Me.prototype, {
        _init: function() {
            null == this.context && (this.context = new createjs.Container), Me.prototype._init.call(this)
        },
        _driverDisposer: function() {
            if (null != this.context && null != this.context.parent) try {
                this.context.parent.removeChild(this.context)
            } catch (t) {
                t instanceof hn && (t = t.val)
            }
        },
        _driverDraw: function() {
            null != this._container && null != this._container.parent && this._container.parent.removeChild(this._container), this._container = new createjs.Container, this._container.mouseEnabled = !1, this.context.addChild(this._container);
            for (var t = this._children, e = 0; e < t.length;) {
                var i = t[e];
                ++e, i.isVisible && this._container.addChild(i.context)
            }
        },
        set_x: function(t) {
            return this.context.x = t, Me.prototype.set_x.call(this, t)
        },
        set_y: function(t) {
            return this.context.y = t, Me.prototype.set_y.call(this, t)
        },
        __class__: Xe
    });
    var Ve = function(t, e, i, s) {
        null == s && (s = !0), null == i && (i = 100), null == e && (e = 100), this.isFlippedX = !1, this.isFlippedY = !1, this.width = e, this.height = i, this._context = new createjs.Container, this.setPosition(0, 0), M.call(this, t, null, this._context)
    };
    n["awe6.core.drivers.createjs.extras.gui.GuiEntity"] = Ve, Ve.__name__ = ["awe6", "core", "drivers", "createjs", "extras", "gui", "GuiEntity"], Ve.__interfaces__ = [R], Ve.__super__ = M, Ve.prototype = e(M.prototype, {
        setPosition: function(t, e) {
            this.set_x(t), this.set_y(e)
        },
        set_x: function(t) {
            return this.x = t, this._context.x = this.x, this.x
        },
        set_y: function(t) {
            return this.y = t, this._context.y = this.y, this.y
        },
        __class__: Ve
    });
    var We = function(t, e, i, s, n, r, o) {
        null == o && (o = !1), null == r && (r = !1), null == s && (s = ""), this.textStyle = n, this._isMultiline = r, this._isCached = o, Ve.call(this, t, e, i, !1), this.set_text(s)
    };
    n["awe6.core.drivers.createjs.extras.gui.Text"] = We, We.__name__ = ["awe6", "core", "drivers", "createjs", "extras", "gui", "Text"], We.__super__ = Ve, We.prototype = e(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this), this._textField = new createjs.Text, this._textField.text = this.text;
            var t = !0;
            try {
                t = this._kernel.system.isDesktop
            } catch (e) {
                e instanceof hn && (e = e.val)
            }
            this._draw(), this._context.addChild(this._textField), this._isDirty = !1, this._prevTextStyle = this.textStyle.toString()
        },
        _updater: function(t) {
            null == t && (t = 0), Ve.prototype._updater.call(this, t), this._isDirty = this._isDirty || this._prevTextStyle != this.textStyle.toString(), this._isDirty && this._draw(), this._prevTextStyle = this.textStyle.toString()
        },
        _draw: function() {
            if (this._textField.lineWidth = this.width, this._prevTextStyle != this.textStyle.toString()) {
                var t = this.textStyle.align;
                switch (t[1]) {
                    case 1:
                        this._textField.textAlign = "left";
                        break;
                    case 2:
                        this._textField.textAlign = "center", this._textField.x = .5 * this.width;
                        break;
                    case 3:
                        this._textField.textAlign = "right", this._textField.x = this.width;
                        break;
                    case 0:
                        this._textField.textAlign = "left"
                }
                this._textField.color = "#" + d.hex(this.textStyle.color, 6), this._textField.font = (this.textStyle.isBold ? "bold " : "") + (this.textStyle.isItalic ? "italic " : "") + this.textStyle.size + "px '" + this.textStyle.font + "'", null != this.textStyle.filters && (this._textField.shadow = new createjs.Shadow("#" + d.hex(this.textStyle.filters[0], 6), this.textStyle.filters[1], this.textStyle.filters[2], this.textStyle.filters[3]))
            }
            this._isCached && this._context.cache(0, 0, this.width, this.height), this._isDirty = !1
        },
        set_text: function(t) {
            return null == t && (t = ""), this.text == t ? this.text : (this.text = t, this._textField.text = this.text, this._isDirty = !0, this.text)
        },
        __class__: We
    });
    var Qe = function(t, e, i, s) {
        Me.call(this, t, e, i, s)
    };
    n["awe6.core.drivers.flash.View"] = Qe, Qe.__name__ = ["awe6", "core", "drivers", "flash", "View"], Qe.__super__ = Me, Qe.prototype = e(Me.prototype, {
        _init: function() {
            null == this.context && (this.context = new createjs.Container), Me.prototype._init.call(this)
        },
        _driverDisposer: function() {
            null != this.context.parent && this.context.parent.removeChild(this.context)
        },
        _driverDraw: function() {
            null != this._container && null != this._container.parent && this._container.parent.removeChild(this._container), this._container = new createjs.Container, this._container.mouseEnabled = !1, this.context.addChild(this._container);
            for (var t = this._children, e = 0; e < t.length;) {
                var i = t[e];
                ++e, i.isVisible && this._container.addChild(i.context)
            }
        },
        set_x: function(t) {
            return this.context.x = t, Me.prototype.set_x.call(this, t)
        },
        set_y: function(t) {
            return this.context.y = t, Me.prototype.set_y.call(this, t)
        },
        __class__: Qe
    });
    var ze = function(t, e, i) {
        null == i && (i = 1e3), this._callbackFunction = e, this._duration = i, M.call(this, t)
    };
    n["awe6.extras.Delay"] = ze, ze.__name__ = ["awe6", "extras", "Delay"], ze.__super__ = M, ze.prototype = e(M.prototype, {
        _updater: function(t) {
            null == t && (t = 0), M.prototype._updater.call(this, t), this._duration -= t, this._duration <= 0 && (this._callbackFunction.apply(this, []), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        __class__: ze
    });
    var Je = n["awe6.interfaces.EAgenda"] = {
        __ename__: ["awe6", "interfaces", "EAgenda"],
        __constructs__: ["ALWAYS", "BIRTH", "DEATH", "STANDARD", "ATTACK", "DEFEND", "SUB_TYPE"]
    };
    Je.ALWAYS = ["ALWAYS", 0], Je.ALWAYS.toString = r, Je.ALWAYS.__enum__ = Je, Je.BIRTH = ["BIRTH", 1], Je.BIRTH.toString = r, Je.BIRTH.__enum__ = Je, Je.DEATH = ["DEATH", 2], Je.DEATH.toString = r, Je.DEATH.__enum__ = Je, Je.STANDARD = ["STANDARD", 3], Je.STANDARD.toString = r, Je.STANDARD.__enum__ = Je, Je.ATTACK = ["ATTACK", 4], Je.ATTACK.toString = r, Je.ATTACK.__enum__ = Je, Je.DEFEND = ["DEFEND", 5], Je.DEFEND.toString = r, Je.DEFEND.__enum__ = Je, Je.SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 6, t];
        return e.__enum__ = Je, e.toString = r, e
    };
    var Ke = n["awe6.interfaces.EAudioChannel"] = {
        __ename__: ["awe6", "interfaces", "EAudioChannel"],
        __constructs__: ["DEFAULT", "EFFECTS", "INTERFACE", "MUSIC", "SUB_TYPE"]
    };
    Ke.DEFAULT = ["DEFAULT", 0], Ke.DEFAULT.toString = r, Ke.DEFAULT.__enum__ = Ke, Ke.EFFECTS = ["EFFECTS", 1], Ke.EFFECTS.toString = r, Ke.EFFECTS.__enum__ = Ke, Ke.INTERFACE = ["INTERFACE", 2], Ke.INTERFACE.toString = r, Ke.INTERFACE.__enum__ = Ke, Ke.MUSIC = ["MUSIC", 3], Ke.MUSIC.toString = r, Ke.MUSIC.__enum__ = Ke, Ke.SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 4, t];
        return e.__enum__ = Ke, e.toString = r, e
    };
    var Ze = n["awe6.interfaces.EFullScreen"] = {
        __ename__: ["awe6", "interfaces", "EFullScreen"],
        __constructs__: ["DISABLED", "NO_SCALE", "SCALE_ASPECT_RATIO_IGNORE", "SCALE_ASPECT_RATIO_PRESERVE", "SCALE_NEAREST_MULTIPLE", "SUB_TYPE"]
    };
    Ze.DISABLED = ["DISABLED", 0], Ze.DISABLED.toString = r, Ze.DISABLED.__enum__ = Ze, Ze.NO_SCALE = ["NO_SCALE", 1], Ze.NO_SCALE.toString = r, Ze.NO_SCALE.__enum__ = Ze, Ze.SCALE_ASPECT_RATIO_IGNORE = ["SCALE_ASPECT_RATIO_IGNORE", 2], Ze.SCALE_ASPECT_RATIO_IGNORE.toString = r, Ze.SCALE_ASPECT_RATIO_IGNORE.__enum__ = Ze, Ze.SCALE_ASPECT_RATIO_PRESERVE = ["SCALE_ASPECT_RATIO_PRESERVE", 3], Ze.SCALE_ASPECT_RATIO_PRESERVE.toString = r, Ze.SCALE_ASPECT_RATIO_PRESERVE.__enum__ = Ze, Ze.SCALE_NEAREST_MULTIPLE = ["SCALE_NEAREST_MULTIPLE", 4], Ze.SCALE_NEAREST_MULTIPLE.toString = r, Ze.SCALE_NEAREST_MULTIPLE.__enum__ = Ze, Ze.SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 5, t];
        return e.__enum__ = Ze, e.toString = r, e
    };
    var qe = n["awe6.interfaces.EJoypadButton"] = {
        __ename__: ["awe6", "interfaces", "EJoypadButton"],
        __constructs__: ["FIRE", "UP", "RIGHT", "DOWN", "LEFT", "PRIMARY", "SECONDARY"]
    };
    qe.FIRE = ["FIRE", 0], qe.FIRE.toString = r, qe.FIRE.__enum__ = qe, qe.UP = ["UP", 1], qe.UP.toString = r, qe.UP.__enum__ = qe, qe.RIGHT = ["RIGHT", 2], qe.RIGHT.toString = r, qe.RIGHT.__enum__ = qe, qe.DOWN = ["DOWN", 3], qe.DOWN.toString = r, qe.DOWN.__enum__ = qe, qe.LEFT = ["LEFT", 4], qe.LEFT.toString = r, qe.LEFT.__enum__ = qe, qe.PRIMARY = ["PRIMARY", 5], qe.PRIMARY.toString = r, qe.PRIMARY.__enum__ = qe, qe.SECONDARY = ["SECONDARY", 6], qe.SECONDARY.toString = r, qe.SECONDARY.__enum__ = qe;
    var $e = n["awe6.interfaces.EJoypadTouch"] = {
        __ename__: ["awe6", "interfaces", "EJoypadTouch"],
        __constructs__: ["DISABLED", "DPAD", "JOYSTICK", "SWIPE"]
    };
    $e.DISABLED = ["DISABLED", 0], $e.DISABLED.toString = r, $e.DISABLED.__enum__ = $e, $e.DPAD = ["DPAD", 1], $e.DPAD.toString = r, $e.DPAD.__enum__ = $e, $e.JOYSTICK = function(t) {
        var e = ["JOYSTICK", 2, t];
        return e.__enum__ = $e, e.toString = r, e
    }, $e.SWIPE = function(t) {
        var e = ["SWIPE", 3, t];
        return e.__enum__ = $e, e.toString = r, e
    };
    var ti = n["awe6.interfaces.EKey"] = {
        __ename__: ["awe6", "interfaces", "EKey"],
        __constructs__: ["NUM_LOCK", "CLEAR", "HELP", "ALT", "BACKSPACE", "CAPS_LOCK", "CONTROL", "DELETE", "DOWN", "END", "ENTER", "ESCAPE", "F1", "F10", "F11", "F12", "F13", "F14", "F15", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "HOME", "INSERT", "LEFT", "NUMPAD_0", "NUMPAD_1", "NUMPAD_2", "NUMPAD_3", "NUMPAD_4", "NUMPAD_5", "NUMPAD_6", "NUMPAD_7", "NUMPAD_8", "NUMPAD_9", "NUMPAD_ADD", "NUMPAD_DECIMAL", "NUMPAD_DIVIDE", "NUMPAD_ENTER", "NUMPAD_MULTIPLY", "NUMPAD_SUBTRACT", "PAGE_DOWN", "PAGE_UP", "RIGHT", "SHIFT", "SPACE", "TAB", "UP", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "NUMBER_0", "NUMBER_1", "NUMBER_2", "NUMBER_3", "NUMBER_4", "NUMBER_5", "NUMBER_6", "NUMBER_7", "NUMBER_8", "NUMBER_9", "COLON", "EQUALS", "HYPHEN", "SLASH", "TILDE", "SQUARELEFT", "SQUARERIGHT", "BACKSLASH", "APOSTROPHE", "TOPLEFT", "SUB_TYPE"]
    };
    ti.NUM_LOCK = ["NUM_LOCK", 0], ti.NUM_LOCK.toString = r, ti.NUM_LOCK.__enum__ = ti, ti.CLEAR = ["CLEAR", 1], ti.CLEAR.toString = r, ti.CLEAR.__enum__ = ti, ti.HELP = ["HELP", 2], ti.HELP.toString = r, ti.HELP.__enum__ = ti, ti.ALT = ["ALT", 3], ti.ALT.toString = r, ti.ALT.__enum__ = ti, ti.BACKSPACE = ["BACKSPACE", 4], ti.BACKSPACE.toString = r, ti.BACKSPACE.__enum__ = ti, ti.CAPS_LOCK = ["CAPS_LOCK", 5], ti.CAPS_LOCK.toString = r, ti.CAPS_LOCK.__enum__ = ti, ti.CONTROL = ["CONTROL", 6], ti.CONTROL.toString = r, ti.CONTROL.__enum__ = ti, ti.DELETE = ["DELETE", 7], ti.DELETE.toString = r, ti.DELETE.__enum__ = ti, ti.DOWN = ["DOWN", 8], ti.DOWN.toString = r, ti.DOWN.__enum__ = ti, ti.END = ["END", 9], ti.END.toString = r, ti.END.__enum__ = ti, ti.ENTER = ["ENTER", 10], ti.ENTER.toString = r, ti.ENTER.__enum__ = ti, ti.ESCAPE = ["ESCAPE", 11], ti.ESCAPE.toString = r, ti.ESCAPE.__enum__ = ti, ti.F1 = ["F1", 12], ti.F1.toString = r, ti.F1.__enum__ = ti, ti.F10 = ["F10", 13], ti.F10.toString = r, ti.F10.__enum__ = ti, ti.F11 = ["F11", 14], ti.F11.toString = r, ti.F11.__enum__ = ti, ti.F12 = ["F12", 15], ti.F12.toString = r, ti.F12.__enum__ = ti, ti.F13 = ["F13", 16], ti.F13.toString = r, ti.F13.__enum__ = ti, ti.F14 = ["F14", 17], ti.F14.toString = r, ti.F14.__enum__ = ti, ti.F15 = ["F15", 18], ti.F15.toString = r, ti.F15.__enum__ = ti, ti.F2 = ["F2", 19], ti.F2.toString = r, ti.F2.__enum__ = ti, ti.F3 = ["F3", 20], ti.F3.toString = r, ti.F3.__enum__ = ti, ti.F4 = ["F4", 21], ti.F4.toString = r, ti.F4.__enum__ = ti, ti.F5 = ["F5", 22], ti.F5.toString = r, ti.F5.__enum__ = ti, ti.F6 = ["F6", 23], ti.F6.toString = r, ti.F6.__enum__ = ti, ti.F7 = ["F7", 24], ti.F7.toString = r, ti.F7.__enum__ = ti, ti.F8 = ["F8", 25], ti.F8.toString = r, ti.F8.__enum__ = ti, ti.F9 = ["F9", 26], ti.F9.toString = r, ti.F9.__enum__ = ti, ti.HOME = ["HOME", 27], ti.HOME.toString = r, ti.HOME.__enum__ = ti, ti.INSERT = ["INSERT", 28], ti.INSERT.toString = r, ti.INSERT.__enum__ = ti, ti.LEFT = ["LEFT", 29], ti.LEFT.toString = r, ti.LEFT.__enum__ = ti, ti.NUMPAD_0 = ["NUMPAD_0", 30], ti.NUMPAD_0.toString = r, ti.NUMPAD_0.__enum__ = ti, ti.NUMPAD_1 = ["NUMPAD_1", 31], ti.NUMPAD_1.toString = r, ti.NUMPAD_1.__enum__ = ti, ti.NUMPAD_2 = ["NUMPAD_2", 32], ti.NUMPAD_2.toString = r, ti.NUMPAD_2.__enum__ = ti, ti.NUMPAD_3 = ["NUMPAD_3", 33], ti.NUMPAD_3.toString = r, ti.NUMPAD_3.__enum__ = ti, ti.NUMPAD_4 = ["NUMPAD_4", 34], ti.NUMPAD_4.toString = r, ti.NUMPAD_4.__enum__ = ti, ti.NUMPAD_5 = ["NUMPAD_5", 35], ti.NUMPAD_5.toString = r, ti.NUMPAD_5.__enum__ = ti, ti.NUMPAD_6 = ["NUMPAD_6", 36], ti.NUMPAD_6.toString = r, ti.NUMPAD_6.__enum__ = ti, ti.NUMPAD_7 = ["NUMPAD_7", 37], ti.NUMPAD_7.toString = r, ti.NUMPAD_7.__enum__ = ti, ti.NUMPAD_8 = ["NUMPAD_8", 38], ti.NUMPAD_8.toString = r, ti.NUMPAD_8.__enum__ = ti, ti.NUMPAD_9 = ["NUMPAD_9", 39], ti.NUMPAD_9.toString = r, ti.NUMPAD_9.__enum__ = ti, ti.NUMPAD_ADD = ["NUMPAD_ADD", 40], ti.NUMPAD_ADD.toString = r, ti.NUMPAD_ADD.__enum__ = ti, ti.NUMPAD_DECIMAL = ["NUMPAD_DECIMAL", 41], ti.NUMPAD_DECIMAL.toString = r, ti.NUMPAD_DECIMAL.__enum__ = ti, ti.NUMPAD_DIVIDE = ["NUMPAD_DIVIDE", 42], ti.NUMPAD_DIVIDE.toString = r, ti.NUMPAD_DIVIDE.__enum__ = ti, ti.NUMPAD_ENTER = ["NUMPAD_ENTER", 43], ti.NUMPAD_ENTER.toString = r, ti.NUMPAD_ENTER.__enum__ = ti, ti.NUMPAD_MULTIPLY = ["NUMPAD_MULTIPLY", 44], ti.NUMPAD_MULTIPLY.toString = r, ti.NUMPAD_MULTIPLY.__enum__ = ti, ti.NUMPAD_SUBTRACT = ["NUMPAD_SUBTRACT", 45], ti.NUMPAD_SUBTRACT.toString = r, ti.NUMPAD_SUBTRACT.__enum__ = ti, ti.PAGE_DOWN = ["PAGE_DOWN", 46], ti.PAGE_DOWN.toString = r, ti.PAGE_DOWN.__enum__ = ti, ti.PAGE_UP = ["PAGE_UP", 47], ti.PAGE_UP.toString = r, ti.PAGE_UP.__enum__ = ti, ti.RIGHT = ["RIGHT", 48], ti.RIGHT.toString = r, ti.RIGHT.__enum__ = ti, ti.SHIFT = ["SHIFT", 49], ti.SHIFT.toString = r, ti.SHIFT.__enum__ = ti, ti.SPACE = ["SPACE", 50], ti.SPACE.toString = r, ti.SPACE.__enum__ = ti, ti.TAB = ["TAB", 51], ti.TAB.toString = r, ti.TAB.__enum__ = ti, ti.UP = ["UP", 52], ti.UP.toString = r, ti.UP.__enum__ = ti, ti.A = ["A", 53], ti.A.toString = r, ti.A.__enum__ = ti, ti.B = ["B", 54], ti.B.toString = r, ti.B.__enum__ = ti, ti.C = ["C", 55], ti.C.toString = r, ti.C.__enum__ = ti, ti.D = ["D", 56], ti.D.toString = r, ti.D.__enum__ = ti, ti.E = ["E", 57], ti.E.toString = r, ti.E.__enum__ = ti, ti.F = ["F", 58], ti.F.toString = r, ti.F.__enum__ = ti, ti.G = ["G", 59], ti.G.toString = r, ti.G.__enum__ = ti, ti.H = ["H", 60], ti.H.toString = r, ti.H.__enum__ = ti, ti.I = ["I", 61], ti.I.toString = r, ti.I.__enum__ = ti, ti.J = ["J", 62], ti.J.toString = r, ti.J.__enum__ = ti, ti.K = ["K", 63], ti.K.toString = r, ti.K.__enum__ = ti, ti.L = ["L", 64], ti.L.toString = r, ti.L.__enum__ = ti, ti.M = ["M", 65], ti.M.toString = r, ti.M.__enum__ = ti, ti.N = ["N", 66], ti.N.toString = r, ti.N.__enum__ = ti, ti.O = ["O", 67], ti.O.toString = r, ti.O.__enum__ = ti, ti.P = ["P", 68], ti.P.toString = r, ti.P.__enum__ = ti, ti.Q = ["Q", 69], ti.Q.toString = r, ti.Q.__enum__ = ti, ti.R = ["R", 70], ti.R.toString = r, ti.R.__enum__ = ti, ti.S = ["S", 71], ti.S.toString = r, ti.S.__enum__ = ti, ti.T = ["T", 72], ti.T.toString = r, ti.T.__enum__ = ti, ti.U = ["U", 73], ti.U.toString = r, ti.U.__enum__ = ti, ti.V = ["V", 74], ti.V.toString = r, ti.V.__enum__ = ti, ti.W = ["W", 75], ti.W.toString = r, ti.W.__enum__ = ti, ti.X = ["X", 76], ti.X.toString = r, ti.X.__enum__ = ti, ti.Y = ["Y", 77], ti.Y.toString = r, ti.Y.__enum__ = ti, ti.Z = ["Z", 78], ti.Z.toString = r, ti.Z.__enum__ = ti, ti.NUMBER_0 = ["NUMBER_0", 79], ti.NUMBER_0.toString = r, ti.NUMBER_0.__enum__ = ti, ti.NUMBER_1 = ["NUMBER_1", 80], ti.NUMBER_1.toString = r, ti.NUMBER_1.__enum__ = ti, ti.NUMBER_2 = ["NUMBER_2", 81], ti.NUMBER_2.toString = r, ti.NUMBER_2.__enum__ = ti, ti.NUMBER_3 = ["NUMBER_3", 82], ti.NUMBER_3.toString = r, ti.NUMBER_3.__enum__ = ti, ti.NUMBER_4 = ["NUMBER_4", 83], ti.NUMBER_4.toString = r, ti.NUMBER_4.__enum__ = ti, ti.NUMBER_5 = ["NUMBER_5", 84], ti.NUMBER_5.toString = r, ti.NUMBER_5.__enum__ = ti, ti.NUMBER_6 = ["NUMBER_6", 85], ti.NUMBER_6.toString = r, ti.NUMBER_6.__enum__ = ti, ti.NUMBER_7 = ["NUMBER_7", 86], ti.NUMBER_7.toString = r, ti.NUMBER_7.__enum__ = ti, ti.NUMBER_8 = ["NUMBER_8", 87], ti.NUMBER_8.toString = r, ti.NUMBER_8.__enum__ = ti, ti.NUMBER_9 = ["NUMBER_9", 88], ti.NUMBER_9.toString = r, ti.NUMBER_9.__enum__ = ti, ti.COLON = ["COLON", 89], ti.COLON.toString = r, ti.COLON.__enum__ = ti, ti.EQUALS = ["EQUALS", 90], ti.EQUALS.toString = r, ti.EQUALS.__enum__ = ti, ti.HYPHEN = ["HYPHEN", 91], ti.HYPHEN.toString = r, ti.HYPHEN.__enum__ = ti, ti.SLASH = ["SLASH", 92], ti.SLASH.toString = r, ti.SLASH.__enum__ = ti, ti.TILDE = ["TILDE", 93], ti.TILDE.toString = r, ti.TILDE.__enum__ = ti, ti.SQUARELEFT = ["SQUARELEFT", 94], ti.SQUARELEFT.toString = r, ti.SQUARELEFT.__enum__ = ti, ti.SQUARERIGHT = ["SQUARERIGHT", 95], ti.SQUARERIGHT.toString = r, ti.SQUARERIGHT.__enum__ = ti, ti.BACKSLASH = ["BACKSLASH", 96], ti.BACKSLASH.toString = r, ti.BACKSLASH.__enum__ = ti, ti.APOSTROPHE = ["APOSTROPHE", 97], ti.APOSTROPHE.toString = r, ti.APOSTROPHE.__enum__ = ti, ti.TOPLEFT = ["TOPLEFT", 98], ti.TOPLEFT.toString = r, ti.TOPLEFT.__enum__ = ti, ti.SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 99, t];
        return e.__enum__ = ti, e.toString = r, e
    };
    var ei = n["awe6.interfaces.EMessage"] = {
        __ename__: ["awe6", "interfaces", "EMessage"],
        __constructs__: ["DISPOSE", "INIT", "PAUSE", "RESUME", "SUB_TYPE"]
    };
    ei.DISPOSE = ["DISPOSE", 0], ei.DISPOSE.toString = r, ei.DISPOSE.__enum__ = ei, ei.INIT = ["INIT", 1], ei.INIT.toString = r, ei.INIT.__enum__ = ei, ei.PAUSE = ["PAUSE", 2], ei.PAUSE.toString = r, ei.PAUSE.__enum__ = ei, ei.RESUME = ["RESUME", 3], ei.RESUME.toString = r, ei.RESUME.__enum__ = ei, ei.SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 4, t];
        return e.__enum__ = ei, e.toString = r, e
    };
    var ii = n["awe6.interfaces.EMouseButton"] = {
        __ename__: ["awe6", "interfaces", "EMouseButton"],
        __constructs__: ["LEFT", "MIDDLE", "RIGHT"]
    };
    ii.LEFT = ["LEFT", 0], ii.LEFT.toString = r, ii.LEFT.__enum__ = ii, ii.MIDDLE = ["MIDDLE", 1], ii.MIDDLE.toString = r, ii.MIDDLE.__enum__ = ii, ii.RIGHT = ["RIGHT", 2], ii.RIGHT.toString = r, ii.RIGHT.__enum__ = ii;
    var si = n["awe6.interfaces.EMouseCursor"] = {
        __ename__: ["awe6", "interfaces", "EMouseCursor"],
        __constructs__: ["ARROW", "AUTO", "BUTTON", "HAND", "IBEAM", "SUB_TYPE"]
    };
    si.ARROW = ["ARROW", 0], si.ARROW.toString = r, si.ARROW.__enum__ = si, si.AUTO = ["AUTO", 1], si.AUTO.toString = r, si.AUTO.__enum__ = si, si.BUTTON = ["BUTTON", 2], si.BUTTON.toString = r, si.BUTTON.__enum__ = si, si.HAND = ["HAND", 3], si.HAND.toString = r, si.HAND.__enum__ = si, si.IBEAM = ["IBEAM", 4], si.IBEAM.toString = r, si.IBEAM.__enum__ = si, si.SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 5, t];
        return e.__enum__ = si, e.toString = r, e
    };
    var ni = n["awe6.interfaces.EOverlayButton"] = {
        __ename__: ["awe6", "interfaces", "EOverlayButton"],
        __constructs__: ["BACK", "MUTE", "UNMUTE", "PAUSE", "UNPAUSE", "SUB_TYPE"]
    };
    ni.BACK = ["BACK", 0], ni.BACK.toString = r, ni.BACK.__enum__ = ni, ni.MUTE = ["MUTE", 1], ni.MUTE.toString = r, ni.MUTE.__enum__ = ni, ni.UNMUTE = ["UNMUTE", 2], ni.UNMUTE.toString = r, ni.UNMUTE.__enum__ = ni, ni.PAUSE = ["PAUSE", 3], ni.PAUSE.toString = r, ni.PAUSE.__enum__ = ni, ni.UNPAUSE = ["UNPAUSE", 4], ni.UNPAUSE.toString = r, ni.UNPAUSE.__enum__ = ni, ni.SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 5, t];
        return e.__enum__ = ni, e.toString = r, e
    };
    var ri = n["awe6.interfaces.EScene"] = {
        __ename__: ["awe6", "interfaces", "EScene"],
        __constructs__: ["SPLASH", "INTRO", "SELECT_SESSION", "INSTRUCTIONS", "SETTINGS", "MENU", "AVATAR", "SHOP", "REWARDS", "LEADERBOARD", "GAME", "INTERSTITIAL", "RESULTS", "EXIT", "TEST", "SUB_TYPE"]
    };
    ri.SPLASH = ["SPLASH", 0], ri.SPLASH.toString = r, ri.SPLASH.__enum__ = ri, ri.INTRO = ["INTRO", 1], ri.INTRO.toString = r, ri.INTRO.__enum__ = ri, ri.SELECT_SESSION = ["SELECT_SESSION", 2], ri.SELECT_SESSION.toString = r, ri.SELECT_SESSION.__enum__ = ri, ri.INSTRUCTIONS = ["INSTRUCTIONS", 3], ri.INSTRUCTIONS.toString = r, ri.INSTRUCTIONS.__enum__ = ri, ri.SETTINGS = ["SETTINGS", 4], ri.SETTINGS.toString = r, ri.SETTINGS.__enum__ = ri, ri.MENU = ["MENU", 5], ri.MENU.toString = r, ri.MENU.__enum__ = ri, ri.AVATAR = ["AVATAR", 6], ri.AVATAR.toString = r, ri.AVATAR.__enum__ = ri, ri.SHOP = ["SHOP", 7], ri.SHOP.toString = r, ri.SHOP.__enum__ = ri, ri.REWARDS = ["REWARDS", 8], ri.REWARDS.toString = r, ri.REWARDS.__enum__ = ri, ri.LEADERBOARD = ["LEADERBOARD", 9], ri.LEADERBOARD.toString = r, ri.LEADERBOARD.__enum__ = ri, ri.GAME = ["GAME", 10], ri.GAME.toString = r, ri.GAME.__enum__ = ri, ri.INTERSTITIAL = ["INTERSTITIAL", 11], ri.INTERSTITIAL.toString = r, ri.INTERSTITIAL.__enum__ = ri, ri.RESULTS = ["RESULTS", 12], ri.RESULTS.toString = r, ri.RESULTS.__enum__ = ri, ri.EXIT = ["EXIT", 13], ri.EXIT.toString = r, ri.EXIT.__enum__ = ri, ri.TEST = ["TEST", 14], ri.TEST.toString = r, ri.TEST.__enum__ = ri, ri.SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 15, t];
        return e.__enum__ = ri, e.toString = r, e
    };
    var oi = n["awe6.interfaces.ETextAlign"] = {
        __ename__: ["awe6", "interfaces", "ETextAlign"],
        __constructs__: ["JUSTIFY", "LEFT", "CENTER", "RIGHT"]
    };
    oi.JUSTIFY = ["JUSTIFY", 0], oi.JUSTIFY.toString = r, oi.JUSTIFY.__enum__ = oi, oi.LEFT = ["LEFT", 1], oi.LEFT.toString = r, oi.LEFT.__enum__ = oi, oi.CENTER = ["CENTER", 2], oi.CENTER.toString = r, oi.CENTER.__enum__ = oi, oi.RIGHT = ["RIGHT", 3], oi.RIGHT.toString = r, oi.RIGHT.__enum__ = oi;
    var ai = n["awe6.interfaces.ETextStyle"] = {
        __ename__: ["awe6", "interfaces", "ETextStyle"],
        __constructs__: ["BUTTON", "BODY", "HEADLINE", "SUBHEAD", "SMALLPRINT", "OVERSIZED", "SUB_TYPE"]
    };
    ai.BUTTON = ["BUTTON", 0], ai.BUTTON.toString = r, ai.BUTTON.__enum__ = ai, ai.BODY = ["BODY", 1], ai.BODY.toString = r, ai.BODY.__enum__ = ai, ai.HEADLINE = ["HEADLINE", 2], ai.HEADLINE.toString = r, ai.HEADLINE.__enum__ = ai, ai.SUBHEAD = ["SUBHEAD", 3], ai.SUBHEAD.toString = r, ai.SUBHEAD.__enum__ = ai, ai.SMALLPRINT = ["SMALLPRINT", 4], ai.SMALLPRINT.toString = r, ai.SMALLPRINT.__enum__ = ai, ai.OVERSIZED = ["OVERSIZED", 5], ai.OVERSIZED.toString = r, ai.OVERSIZED.__enum__ = ai, ai.SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 6, t];
        return e.__enum__ = ai, e.toString = r, e
    };
    var li = function(t) {
        this._context = new createjs.Container, this._session = t.get_session(), this._assets = t.assets, this._factory = t.factory, M.call(this, t, null, this._context)
    };
    n["b10ffp.AEntity"] = li, li.__name__ = ["b10ffp", "AEntity"], li.__super__ = M, li.prototype = e(M.prototype, {
        __class__: li
    });
    var hi = function(t) {
        this._kernel = t, this._tools = this._kernel.tools, this._session = this._kernel.get_session(), this._assets = this._kernel.assets, this._factory = t.factory
    };
    n["b10ffp.AVo"] = hi, hi.__name__ = ["b10ffp", "AVo"], hi.prototype = {
        __class__: hi
    };
    var _i = function(t) {
        A.call(this, t)
    };
    n["b10ffp.AssetManager"] = _i, _i.__name__ = ["b10ffp", "AssetManager"], _i.__super__ = A, _i.prototype = e(A.prototype, {
        _init: function() {
            A.prototype._init.call(this), this.overlayPauseUp = this._createView(ui.OVERLAY_PAUSE_UP), this.overlayPauseOver = this._createView(ui.OVERLAY_PAUSE_OVER)
        },
        get_buttonTextOver: function() {
            return this._createView(ui.BUTTON_TEXT_OVER)
        },
        get_buttonTextUp: function() {
            return this._createView(ui.BUTTON_TEXT_UP)
        },
        _createView: function(t) {
            var e, i = new createjs.Container;
            switch (t[1]) {
                case 1:
                    e = "assets/overlay/PauseOver.png";
                    break;
                case 0:
                    e = "assets/overlay/PauseUp.png";
                    break;
                case 3:
                    e = "assets/overlay/ButtonTextOver.png";
                    break;
                case 2:
                    e = "assets/overlay/ButtonTextUp.png"
            }
            var s = new createjs.Bitmap(e);
            return i.addChild(s), new Xe(this._kernel, i)
        },
        getAsset: function(t, e, i) {
            var s = null;
            return null != _i.loadQueue && (s = _i.loadQueue.getResult(t)), null == s && (s = A.prototype.getAsset.call(this, t, e, i)), s
        },
        __class__: _i
    });
    var ui = n["b10ffp.EAsset"] = {
        __ename__: ["b10ffp", "EAsset"],
        __constructs__: ["OVERLAY_PAUSE_UP", "OVERLAY_PAUSE_OVER", "BUTTON_TEXT_UP", "BUTTON_TEXT_OVER"]
    };
    ui.OVERLAY_PAUSE_UP = ["OVERLAY_PAUSE_UP", 0], ui.OVERLAY_PAUSE_UP.toString = r, ui.OVERLAY_PAUSE_UP.__enum__ = ui, ui.OVERLAY_PAUSE_OVER = ["OVERLAY_PAUSE_OVER", 1], ui.OVERLAY_PAUSE_OVER.toString = r, ui.OVERLAY_PAUSE_OVER.__enum__ = ui, ui.BUTTON_TEXT_UP = ["BUTTON_TEXT_UP", 2], ui.BUTTON_TEXT_UP.toString = r, ui.BUTTON_TEXT_UP.__enum__ = ui, ui.BUTTON_TEXT_OVER = ["BUTTON_TEXT_OVER", 3], ui.BUTTON_TEXT_OVER.toString = r, ui.BUTTON_TEXT_OVER.__enum__ = ui;
    var ci = function(t, e, i) {
        this.COLOR_YELLOW = 14268694, this.COLOR_WHITE = 16777215, this.TEXTSTYLE_QUESTION_FACT = ai.SUB_TYPE("QUESTION_FACT"), this.TEXTSTYLE_QUESTION_QUESTION = ai.SUB_TYPE("QUESTION_QUESTION"), this.TEXTSTYLE_QUESTION_TITLE = ai.SUB_TYPE("QUESTION_TITLE"), this.TEXTSTYLE_HUD_SCORE = ai.SUB_TYPE("HUD_SCORE"), this.TEXTSTYLE_HUD_MULTIPLIER = ai.SUB_TYPE("HUD_MULTIPLIER"), this.TEXTSTYLE_RESULTS_SCORE = ai.SUB_TYPE("RESULTS_SCORE"), this.TEXTSTYLE_RESULTS_MESSAGE = ai.SUB_TYPE("RESULTS_MESSAGE"), De.call(this, t, e, i)
    };
    n["b10ffp.Factory"] = ci, ci.__name__ = ["b10ffp", "Factory"], ci.__super__ = De, ci.prototype = e(De.prototype, {
        _configurer: function(t) {
            if (null == t && (t = !1), t) {
                this.id = "b10ffp";
                var e = "1",
                    i = as.getString("revision");
                null != i && (e = as.getString("revision").split("\n")[0]), this.version = "1.1." + e, this.author = "", this.isDecached = !0, this.width = 450, this.height = 675, this.bgColor = 0, this.startingSceneType = ri.MENU, this.targetFramerate = 30
            }
        },
        _launchKernel: function() {
            De.prototype._launchKernel.call(this), this._kernel.set_session(this.createSession("defaultSessionId"))
        },
        createAssetManager: function() {
            return null == this._assets && (this._assets = new _i(this._kernel)), this._assets
        },
        createLogger: function() {
            var t = p.string(this._kernel.getConfig("settings.googleAnalytics.id"));
            return "" != t ? new pi(this._kernel, t) : De.prototype.createLogger.call(this)
        },
        createOverlay: function() {
            var t = new Yi(this._kernel);
            return t
        },
        createPreloader: function() {
            return new di(this._kernel, this._getAssetUrls(), this.isDecached)
        },
        createScene: function(t) {
            switch (t[1]) {
                case 5:
                    return new ts(this._kernel, t);
                case 3:
                    return new qi(this._kernel, t);
                case 11:
                    return new $i(this._kernel, t);
                case 10:
                    return new Zi(this._kernel, t);
                case 12:
                    return new es(this._kernel, t)
            }
            return De.prototype.createScene.call(this, t)
        },
        createSceneTransition: function() {
            var t = new is(this._kernel);
            return t
        },
        createSession: function(t) {
            return new fi(this._kernel, t)
        },
        createTextStyle: function(t) {
            null == t && (t = ai.BODY);
            var e, i = this._kernel.getConfig("settings.font.name"),
                s = [0, 2, 2, 0];
            if (null != t) switch (t[1]) {
                case 1:
                    e = new $(i, 30, this.COLOR_WHITE, !1, !1, oi.CENTER, 0, 0, 0, []);
                    break;
                case 2:
                    e = new $(i, 34, this.COLOR_YELLOW, !1, !1, oi.CENTER, 0, 0, 0, s);
                    break;
                case 3:
                    e = new $(i, 20, this.COLOR_WHITE, !1, !1, oi.CENTER, 0, 0, 0, []);
                    break;
                case 0:
                    e = new $(i, 18, this.COLOR_WHITE, !1, !1, oi.CENTER, 0, 0, 0, s);
                    break;
                case 4:
                    e = new $(i, 14, this.COLOR_WHITE, !1, !1, oi.CENTER, 0, 0, 0, []);
                    break;
                case 6:
                    var n = t[2];
                    switch (n) {
                        case "PRELOADER":
                            e = new $(i, 14, this.COLOR_WHITE, !1, !1, oi.CENTER, 0, 0, 0, s);
                            break;
                        case "RESULTS_MESSAGE":
                            e = new $(i, 30, this.COLOR_WHITE, !1, !1, oi.CENTER, 0, 0, 0, s);
                            break;
                        case "RESULTS_SCORE":
                            e = new $(i, 50, this.COLOR_YELLOW, !1, !1, oi.CENTER, 0, 0, 0, s);
                            break;
                        case "HUD_MULTIPLIER":
                            e = new $(i, 18, this.COLOR_WHITE, !1, !1, oi.CENTER, 0, 0, 0, []);
                            break;
                        case "HUD_SCORE":
                            e = new $(i, 26, this.COLOR_WHITE, !1, !1, oi.RIGHT, 0, 0, 0, []);
                            break;
                        case "QUESTION_TITLE":
                            e = new $(i, 50, this.COLOR_YELLOW, !1, !1, oi.CENTER, 0, 0, 0, s);
                            break;
                        case "QUESTION_QUESTION":
                            e = new $(i, 40, this.COLOR_WHITE, !1, !1, oi.CENTER, 0, 0, 0, s);
                            break;
                        case "QUESTION_FACT":
                            e = new $(i, 30, this.COLOR_YELLOW, !1, !1, oi.CENTER, 0, 0, 0, s);
                            break;
                        default:
                            e = null
                    }
                    break;
                default:
                    e = new $(i, 12, 8421504)
            } else e = new $(i, 12, 8421504);
            return e
        },
        getBackSceneType: function(t) {
            switch (t[1]) {
                case 10:
                case 12:
                    return ri.MENU;
                case 3:
                case 11:
                    return ri.MENU
            }
            return De.prototype.getBackSceneType.call(this, t)
        },
        getNextSceneType: function(t) {
            switch (t[1]) {
                case 5:
                case 3:
                case 11:
                    return ri.GAME;
                case 10:
                    return ri.RESULTS;
                case 12:
                    return ri.GAME
            }
            return De.prototype.getNextSceneType.call(this, t)
        },
        __class__: ci
    });
    var pi = function(t, e) {
        if (this._id = e, this._isTrackerEnabled = !t.isLocal && "true" == t.getConfig("settings.googleAnalytics.enabled"), this._isTrackerEnabled) {
            try {
                this._gaLib = ga
            } catch (i) {
                i instanceof hn && (i = i.val), this._isTrackerEnabled = !1
            }
            os.trace("Google Analytics enabled with property ID " + this._id, {
                fileName: "LoggerGoogleAnalytics.hx",
                lineNumber: 30,
                className: "b10ffp.LoggerGoogleAnalytics",
                methodName: "new"
            })
        }
    };
    n["b10ffp.LoggerGoogleAnalytics"] = pi, pi.__name__ = ["b10ffp", "LoggerGoogleAnalytics"], pi.__interfaces__ = [ge], pi.prototype = {
        log: function(t) {
            var e = l.substr(p.string(t), 0, 25);
            if (this._isTrackerEnabled) {
                var i = p.string(t).split(": ");
                this._gaLib("send", {
                    hitType: "event",
                    eventCategory: i[0],
                    eventAction: i[1],
                    eventLabel: i[2]
                })
            } else os.trace("Logger ... " + e, {
                fileName: "LoggerGoogleAnalytics.hx",
                lineNumber: 49,
                className: "b10ffp.LoggerGoogleAnalytics",
                methodName: "log"
            })
        },
        __class__: pi
    };
    var gi = function() {};
    n["b10ffp.Main"] = gi, gi.__name__ = ["b10ffp", "Main"], gi.main = function() {
        var t = !1,
            e = new createjs.Stage(window.document.getElementById("gameCanvas")),
            i = new createjs.Container;
        e.addChild(i), gi.factory = new ci(i, t, as.getString("config"))
    };
    var di = function(t, e, i) {
        Fe.call(this, t, e, i)
    };
    n["b10ffp.Preloader"] = di, di.__name__ = ["b10ffp", "Preloader"], di.__super__ = Fe, di.prototype = e(Fe.prototype, {
        _init: function() {
            this._session = this._kernel.get_session(), this._proprietaryAudioFormat = "m4a";
            var t = new createjs.Bitmap("assets/__PreloaderBg.png");
            Fe.prototype._init.call(this), this._bg = new createjs.Shape, this._bg.graphics.beginFill("#ffffff"), this._bg.graphics.drawRect(-2, -2, 138, 14), this._bg.graphics.endFill(), this._bg.graphics.beginFill("#404040"), this._bg.graphics.drawRect(0, 0, 134, 10), this._bg.graphics.endFill(), this._fg = new createjs.Shape, this._fg.graphics.beginFill("#d9b916"), this._fg.graphics.drawRect(0, 0, 134, 10), this._fg.graphics.endFill(), this._bg.x = this._fg.x = .5 * (this._kernel.factory.width - 134), this._bg.y = this._fg.y = .575 * (this._kernel.factory.height - 10), this._context.addChild(t), this._context.addChild(this._bg), this._context.addChild(this._fg)
        },
        _updater: function(t) {
            null == t && (t = 0), Fe.prototype._updater.call(this, t), this._fg.scaleX = this.get_progress(), this._isComplete && (this._isLaunched || (null != this._delay && this._delay.update(t), (this._kernel.inputs.keyboard.getIsKeyRelease(this._kernel.factory.keyNext) || this._kernel.inputs.mouse.getIsButtonRelease() || this._isDesktop) && this._launch()))
        },
        _launch: function() {
            Fe.prototype._continue.call(this), _i.loadQueue = this._loadQueue, this._isLaunched = !0
        },
        _continue: function() {
            if (this._isComplete = !0, di.loadQueue = this._loadQueue, !this._isDesktop) {
                var t = this._getAudioHoldDelay();
                if (this._kernel.system.isIos || (t = 0), t >= 0 && (this._delay = new ze(this._kernel, s(this, this._launch), t)), 0 != t) {
                    var e = new Ji(this._kernel, this._kernel.factory.width, 20, this._kernel.getConfig("gui.preloaderComplete"), this._kernel.factory.createTextStyle(ai.SUB_TYPE("PRELOADER")));
                    e.setPosition(0, this._bg.y - 10), this.get_view().addChild(e.get_view())
                }
            }
            this._context.removeChild(this._bg), this._context.removeChild(this._fg)
        },
        _getAudioHoldDelay: function() {
            var t = -1;
            this._kernel.factory.config.exists("settings.audioHoldDelay") && (t = p.parseInt(this._kernel.factory.config.get("settings.audioHoldDelay")));
            try {
                var e = this._kernel.factory._context.getStage().canvas.getAttribute("audioHoldDelay");
                null != e && "" != e && (t = p.parseInt(e))
            } catch (i) {
                i instanceof hn && (i = i.val)
            }
            return t
        },
        __class__: di
    });
    var fi = function(t, e) {
        He.call(this, t, e)
    };
    n["b10ffp.Session"] = fi, fi.__name__ = ["b10ffp", "Session"], fi.__super__ = He, fi.prototype = e(He.prototype, {
        _init: function() {
            this._version = 1, He.prototype._init.call(this)
        },
        _getter: function() {
            He.prototype._getter.call(this), this.highScore = this._data.highScore, this.isScrollDisabled = this._data.isScrollDisabled, null == this.highScore && (this.highScore = 0)
        },
        _setter: function() {
            He.prototype._setter.call(this), this._data.highScore = this.highScore, this._data.isScrollDisabled = this.isScrollDisabled
        },
        _resetter: function() {
            He.prototype._resetter.call(this), this.sponsor = new bi, this.cache = new mi(this._kernel), this.cheats = new yi(this._kernel), this.highScore = 0, this.isScrollDisabled = !1
        },
        setIsTester: function(t) {
            this._isTester = t
        },
        get_isTester: function() {
            return this._kernel.isDebug || this._isTester
        },
        __class__: fi
    });
    var mi = function(t) {
        this._kernel = t, this.seed = p.random(100), this.reset()
    };
    n["b10ffp._Session._HelperCache"] = mi, mi.__name__ = ["b10ffp", "_Session", "_HelperCache"], mi.prototype = {
        reset: function() {
            this.score = 0, this.multiplier = 1, this.lives = 3, this.instructionsPage = 1, this.isInstructions = !1
        },
        __class__: mi
    };
    var yi = function(t) {
        this._kernel = t, this.reset()
    };
    n["b10ffp._Session._HelperCheats"] = yi, yi.__name__ = ["b10ffp", "_Session", "_HelperCheats"], yi.prototype = {
        reset: function(t) {
            null == t && (t = !1), this.bulletTime = this.centerPin = this.lifeSupport = this.microBall = this.sixPack = t
        },
        __class__: yi
    };
    var bi = function() {
        try {
            this._sponsorLib = sponsorLib, this.isEnabled = !0
        } catch (t) {
            t instanceof hn && (t = t.val), this.isEnabled = !1
        }
        this.hasHighscores = !1
    };
    n["b10ffp._Session._HelperSponsor"] = bi, bi.__name__ = ["b10ffp", "_Session", "_HelperSponsor"], bi.prototype = {
        showAd: function(t) {
//            null != this._sponsorLib && this._sponsorLib.showAd(t)
        },
        showMoreGames: function() {
//            null != this._sponsorLib && this._sponsorLib.showMoreGames()
        },
        getIsMoreGamesEnabled: function() {
        	  return false;
           // return null == this._sponsorLib ? !1 : this._sponsorLib.getIsMoreGamesEnabled()
        },
        getIsBrandingEnabled: function() {
           // return null == this._sponsorLib ? !1 : this._sponsorLib.getIsBrandingEnabled()
        },
        getBrandingUrl: function() {
            //return null == this._sponsorLib ? null : this._sponsorLib.getBrandingUrl()
        },
        onBrandingClick: function() {
           // null != this._sponsorLib && this._sponsorLib.onBrandingClick()
        },
        submitScore: function(t) {
           // null != this._sponsorLib && this.hasHighscores && this._sponsorLib.submitScore(t)
        },
        showScoreboard: function() {
           // null != this._sponsorLib && this.hasHighscores && this._sponsorLib.showScoreboard()
        },
        submitAchievement: function(t) {
           // null != this._sponsorLib && this._sponsorLib.submitAchievement(t)
        },
        __class__: bi
    };
    var vi = n["b10ffp.game.EMission"] = {
        __ename__: ["b10ffp", "game", "EMission"],
        __constructs__: ["MISSION_DORMANT", "MISSION_1", "MISSION_2", "MISSION_3", "MISSION_4"]
    };
    vi.MISSION_DORMANT = ["MISSION_DORMANT", 0], vi.MISSION_DORMANT.toString = r, vi.MISSION_DORMANT.__enum__ = vi, vi.MISSION_1 = ["MISSION_1", 1], vi.MISSION_1.toString = r, vi.MISSION_1.__enum__ = vi, vi.MISSION_2 = ["MISSION_2", 2], vi.MISSION_2.toString = r, vi.MISSION_2.__enum__ = vi, vi.MISSION_3 = ["MISSION_3", 3], vi.MISSION_3.toString = r, vi.MISSION_3.__enum__ = vi, vi.MISSION_4 = ["MISSION_4", 4], vi.MISSION_4.toString = r, vi.MISSION_4.__enum__ = vi;
    var Si = n["b10ffp.game.EPinball"] = {
        __ename__: ["b10ffp", "game", "EPinball"],
        __constructs__: ["TABLE_1", "TABLE_2"]
    };
    Si.TABLE_1 = ["TABLE_1", 0], Si.TABLE_1.toString = r, Si.TABLE_1.__enum__ = Si, Si.TABLE_2 = ["TABLE_2", 1], Si.TABLE_2.toString = r, Si.TABLE_2.__enum__ = Si;
    var Ei = n["b10ffp.game.ESymbol"] = {
        __ename__: ["b10ffp", "game", "ESymbol"],
        __constructs__: ["BALL", "BG_1", "BG_2", "BUMPER_1", "BUMPER_2", "BUMPER_3", "BUMPER_4", "BUMPER_5", "CENTER_PIN", "FG_1", "FG_2", "FIREWALL", "FLIPPER_LEFT", "FLIPPER_RIGHT", "FLIPPER_SMALL", "JACKPOT", "LIGHT", "LIGHT_BUMPER", "LIGHT_ENTRY", "LIGHT_ENTRY_GROUP", "LIGHT_FIREWALL", "LIGHT_LAUNCH", "LIGHT_RAMP_JACKPOT", "LIGHT_RAMP_MISSION", "LIGHT_REENTRY", "LIGHT_TARGETS_GROUP_LEFT", "LIGHT_TARGETS_GROUP_RIGHT", "LIGHT_TARGETS_JACKPOT", "MASKED_FG_1", "PLUNGER", "POLY_BUMPER_LEFT", "POLY_BUMPER_RIGHT", "POLY_BUMPER_TOP", "REBOUND_DOOR"]
    };
    Ei.BALL = ["BALL", 0], Ei.BALL.toString = r, Ei.BALL.__enum__ = Ei, Ei.BG_1 = ["BG_1", 1], Ei.BG_1.toString = r, Ei.BG_1.__enum__ = Ei, Ei.BG_2 = ["BG_2", 2], Ei.BG_2.toString = r, Ei.BG_2.__enum__ = Ei, Ei.BUMPER_1 = ["BUMPER_1", 3], Ei.BUMPER_1.toString = r, Ei.BUMPER_1.__enum__ = Ei, Ei.BUMPER_2 = ["BUMPER_2", 4], Ei.BUMPER_2.toString = r, Ei.BUMPER_2.__enum__ = Ei, Ei.BUMPER_3 = ["BUMPER_3", 5], Ei.BUMPER_3.toString = r, Ei.BUMPER_3.__enum__ = Ei, Ei.BUMPER_4 = ["BUMPER_4", 6], Ei.BUMPER_4.toString = r, Ei.BUMPER_4.__enum__ = Ei, Ei.BUMPER_5 = ["BUMPER_5", 7], Ei.BUMPER_5.toString = r, Ei.BUMPER_5.__enum__ = Ei, Ei.CENTER_PIN = ["CENTER_PIN", 8], Ei.CENTER_PIN.toString = r, Ei.CENTER_PIN.__enum__ = Ei, Ei.FG_1 = ["FG_1", 9], Ei.FG_1.toString = r, Ei.FG_1.__enum__ = Ei, Ei.FG_2 = ["FG_2", 10], Ei.FG_2.toString = r, Ei.FG_2.__enum__ = Ei, Ei.FIREWALL = ["FIREWALL", 11], Ei.FIREWALL.toString = r, Ei.FIREWALL.__enum__ = Ei, Ei.FLIPPER_LEFT = ["FLIPPER_LEFT", 12], Ei.FLIPPER_LEFT.toString = r, Ei.FLIPPER_LEFT.__enum__ = Ei, Ei.FLIPPER_RIGHT = ["FLIPPER_RIGHT", 13], Ei.FLIPPER_RIGHT.toString = r, Ei.FLIPPER_RIGHT.__enum__ = Ei, Ei.FLIPPER_SMALL = ["FLIPPER_SMALL", 14], Ei.FLIPPER_SMALL.toString = r, Ei.FLIPPER_SMALL.__enum__ = Ei, Ei.JACKPOT = ["JACKPOT", 15], Ei.JACKPOT.toString = r, Ei.JACKPOT.__enum__ = Ei, Ei.LIGHT = ["LIGHT", 16], Ei.LIGHT.toString = r, Ei.LIGHT.__enum__ = Ei, Ei.LIGHT_BUMPER = ["LIGHT_BUMPER", 17], Ei.LIGHT_BUMPER.toString = r, Ei.LIGHT_BUMPER.__enum__ = Ei, Ei.LIGHT_ENTRY = ["LIGHT_ENTRY", 18], Ei.LIGHT_ENTRY.toString = r, Ei.LIGHT_ENTRY.__enum__ = Ei, Ei.LIGHT_ENTRY_GROUP = ["LIGHT_ENTRY_GROUP", 19], Ei.LIGHT_ENTRY_GROUP.toString = r, Ei.LIGHT_ENTRY_GROUP.__enum__ = Ei, Ei.LIGHT_FIREWALL = ["LIGHT_FIREWALL", 20], Ei.LIGHT_FIREWALL.toString = r, Ei.LIGHT_FIREWALL.__enum__ = Ei, Ei.LIGHT_LAUNCH = ["LIGHT_LAUNCH", 21], Ei.LIGHT_LAUNCH.toString = r, Ei.LIGHT_LAUNCH.__enum__ = Ei, Ei.LIGHT_RAMP_JACKPOT = ["LIGHT_RAMP_JACKPOT", 22], Ei.LIGHT_RAMP_JACKPOT.toString = r, Ei.LIGHT_RAMP_JACKPOT.__enum__ = Ei, Ei.LIGHT_RAMP_MISSION = ["LIGHT_RAMP_MISSION", 23], Ei.LIGHT_RAMP_MISSION.toString = r, Ei.LIGHT_RAMP_MISSION.__enum__ = Ei, Ei.LIGHT_REENTRY = ["LIGHT_REENTRY", 24], Ei.LIGHT_REENTRY.toString = r, Ei.LIGHT_REENTRY.__enum__ = Ei, Ei.LIGHT_TARGETS_GROUP_LEFT = ["LIGHT_TARGETS_GROUP_LEFT", 25], Ei.LIGHT_TARGETS_GROUP_LEFT.toString = r, Ei.LIGHT_TARGETS_GROUP_LEFT.__enum__ = Ei, Ei.LIGHT_TARGETS_GROUP_RIGHT = ["LIGHT_TARGETS_GROUP_RIGHT", 26], Ei.LIGHT_TARGETS_GROUP_RIGHT.toString = r, Ei.LIGHT_TARGETS_GROUP_RIGHT.__enum__ = Ei, Ei.LIGHT_TARGETS_JACKPOT = ["LIGHT_TARGETS_JACKPOT", 27], Ei.LIGHT_TARGETS_JACKPOT.toString = r, Ei.LIGHT_TARGETS_JACKPOT.__enum__ = Ei, Ei.MASKED_FG_1 = ["MASKED_FG_1", 28], Ei.MASKED_FG_1.toString = r, Ei.MASKED_FG_1.__enum__ = Ei, Ei.PLUNGER = ["PLUNGER", 29], Ei.PLUNGER.toString = r, Ei.PLUNGER.__enum__ = Ei, Ei.POLY_BUMPER_LEFT = ["POLY_BUMPER_LEFT", 30], Ei.POLY_BUMPER_LEFT.toString = r, Ei.POLY_BUMPER_LEFT.__enum__ = Ei, Ei.POLY_BUMPER_RIGHT = ["POLY_BUMPER_RIGHT", 31], Ei.POLY_BUMPER_RIGHT.toString = r, Ei.POLY_BUMPER_RIGHT.__enum__ = Ei, Ei.POLY_BUMPER_TOP = ["POLY_BUMPER_TOP", 32], Ei.POLY_BUMPER_TOP.toString = r, Ei.POLY_BUMPER_TOP.__enum__ = Ei, Ei.REBOUND_DOOR = ["REBOUND_DOOR", 33], Ei.REBOUND_DOOR.toString = r, Ei.REBOUND_DOOR.__enum__ = Ei;
    var wi = function(t) {
        li.call(this, t)
    };
    n["b10ffp.game.Location"] = wi, wi.__name__ = ["b10ffp", "game", "Location"], wi.__super__ = li, wi.prototype = e(li.prototype, {
        _init: function() {
            li.prototype._init.call(this), this.set_lives(this._session.cheats.sixPack ? 6 : 3), this.set_multiplier(1), this._pinballs = [], this.setPinballTable(Si.TABLE_1), this.inactiveCount = 0
        },
        _disposer: function() {
            for (var t = 0, e = this._pinballs; t < e.length;) {
                var i = e[t];
                ++t, i.isDisposed || (i.isDisposed = !0, i.set_isActive(!1), i._disposer())
            }
            li.prototype._disposer.call(this)
        },
        setPinballTable: function(t) {
            null != this._pinball && (this._pinball.remove(!0), this._pinball.transition(!1), this._pinball = null);
            for (var e = 0, i = this._pinballs; e < i.length;) {
                var s = i[e];
                ++e, s.vo.type == t && (this._pinball = s, this._pinball.transition(!0), this.addEntity(this._pinball, null, !0, 1))
            }
            if (null == this._pinball) {
                switch (t[1]) {
                    case 0:
                        this._pinballs.push(new Ci(this._kernel, this));
                        break;
                    case 1:
                        this._pinballs.push(new xi(this._kernel, this))
                }
                return void this.setPinballTable(t)
            }
            this._updates > 1 && this._kernel.overlay.flash()
        },
        set_lives: function(t) {
            return this.lives = 0 | (t > 6 ? 6 : 0 > t ? 0 : t), this._session.cache.lives = this.lives, this.lives
        },
        set_multiplier: function(t) {
            return this.multiplier = 0 | (t > 4 ? 4 : 1 > t ? 1 : t), this._session.cache.multiplier = this.multiplier, this.multiplier
        },
        addScore: function(t) {
            var e = 0;
            switch ((0 | t) === t && (e = t), t) {
                case "CircleBumper":
                    e = 10;
                    break;
                case "PolyBumper":
                    e = 5;
                    break;
                case "Target":
                    e = 10;
                    break;
                case "secret":
                    e = -1;
                    break;
                case "group":
                    e = 100;
                    break;
                case "rescueOpen":
                    e = 25;
                    break;
                case "entry":
                    e = 50;
                    break;
                case "hideOut":
                    e = 1e3;
                    break;
                case "launch":
                    e = 0;
                    break;
                case "missionStart":
                    e = 250;
                    break;
                case "missionHit":
                    e = 500;
                    break;
                case "missionComplete":
                    e = 5e3;
                    break;
                default:
                    e = e
            }
            this._session.cache.score += this.multiplier * e, this._session.cache.score < 0 && (this._session.cache.score = 0)
        },
        showQuestion: function() {
            null != this._question && (this._question.isDisposed || this._question.dispose()), this.addEntity(this._question = new Vi(this._kernel, s(this, this._questionAnswered)), null, !0, 2)
        },
        _questionAnswered: function(t) {
            if (!t) {
                var e = this,
                    i = e.lives;
                e.set_lives(i - 1)
            }
            this.addEntity(new ze(this._kernel, s(this, this._questionComplete), t ? 1e3 : 4e3))
        },
        _questionComplete: function() {
            this._pinball.isAcceptingInputs = !0
        },
        __class__: wi
    });
    var Ii = function(t, e, i, s) {
        this._pinball = e, this._bgSymbol = i, this._lightsRampMission = s, li.call(this, t)
    };
    n["b10ffp.game.Mission"] = Ii, Ii.__name__ = ["b10ffp", "game", "Mission"], Ii.__super__ = li, Ii.prototype = e(li.prototype, {
        _init: function() {
            li.prototype._init.call(this), this._listener = {
                onExit: s(this, this._hit)
            }, this._lights = [], this._sensors = [], this.isMissionInProgress = !1, this._configure(vi.MISSION_DORMANT)
        },
        _updater: function(t) {
            null == t && (t = 0), li.prototype._updater.call(this, t)
        },
        _configure: function(t) {
            this._type = t;
            var e = this._type;
            switch (e[1]) {
                case 0:
                    this._lights = [], this._sensors = [], this._maxHits = 1;
                    break;
                case 1:
                    this._lights = [this._getObject("lights.entry"), this._getObject("lightsUpper.rampReentry")], this._sensors = [this._getObject("entryGroup.target1"), this._getObject("entryGroup.target2"), this._getObject("entryGroup.target3")], this._maxHits = 3;
                    break;
                case 2:
                    this._lights = [this._getObject("lights.bumper1"), this._getObject("lights.bumper2"), this._getObject("lights.bumper3"), this._getObject("lights.bumper4")], this._sensors = [this._getObject("bumper1"), this._getObject("bumper2"), this._getObject("bumper3"), this._getObject("bumper4")], this._maxHits = 15;
                    break;
                case 3:
                    this._lights = [this._getObject("lightsUpper.targets1"), this._getObject("lightsUpper.targets2")], this._sensors = [this._getObject("targetGroup1.target1"), this._getObject("targetGroup1.target2"), this._getObject("targetGroup1.target3"), this._getObject("targetGroup2.target1"), this._getObject("targetGroup2.target2"), this._getObject("targetGroup2.target3")], this._maxHits = 6;
                    break;
                case 4:
                    this._lights = [this._getObject("lights.rampMission")], this._sensors = [this._getObject("missionRampTarget")], this._maxHits = 4, this._lightsRampMission.setState(!1)
            }
            for (var i = 0, s = this._sensors; i < s.length;) {
                var n = s[i];
                ++i, n.broadcaster.addListener(this._listener)
            }
            for (var r = 0, o = this._lights; r < o.length;) {
                var a = o[r];
                ++r, a.setState(!1)
            }
            this._hits = this._maxHits, this._bgSymbol.setMission(t)
        },
        _getObject: function(t) {
            return this._pinball.getObject(t)
        },
        _hit: function() {
            this.isMissionInProgress && (this._pinball.location.addScore("missionHit"), this._pinball.startSound("MissionHit"), this._hits--, this._hits <= 0 && this.completeMission())
        },
        _getAchievementName: function() {
            var t = this._type;
            switch (t[1]) {
                case 0:
                    return "";
                case 1:
                    return p.string(this._kernel.getConfig("gui.scenes.game.achievements.mission1.title"));
                case 2:
                    return p.string(this._kernel.getConfig("gui.scenes.game.achievements.mission2.title"));
                case 3:
                    return p.string(this._kernel.getConfig("gui.scenes.game.achievements.mission3.title"));
                case 4:
                    return p.string(this._kernel.getConfig("gui.scenes.game.achievements.mission4.title"))
            }
        },
        completeMission: function() {
            this._pinball.location.addScore("missionComplete"), this._pinball.startSound("MissionComplete"), this._session.sponsor.isEnabled && this._session.sponsor.submitAchievement(this._getAchievementName()), this.reset()
        },
        reset: function() {
            this.isMissionInProgress = !1;
            for (var t = 0, e = this._sensors; t < e.length;) {
                var i = e[t];
                ++t, i.broadcaster.removeListener(this._listener)
            }
            for (var s = 0, n = this._lights; s < n.length;) {
                var r = n[s];
                ++s, r.setState(!0)
            }
            this._hits = 0, this._bgSymbol.setMission(vi.MISSION_DORMANT), this._lightsRampMission.setState(!1), this._kernel.overlay.flash(), this.startMusic()
        },
        newMission: function(t) {
            this.isMissionInProgress || (this.reset(), this.isMissionInProgress = !0, this._lightsRampMission.setState(!0), this._configure(t), this.startMusic(), this._pinball.location.addScore("missionStart"), this._pinball.startSound("MissionStart"))
        },
        startMusic: function() {
            this._kernel.audio.stop(null, Ke.SUB_TYPE(this._pinball)), this._kernel.audio.start(this.isMissionInProgress ? "MusicGameTable1Mission" : "MusicGameTable1Normal", Ke.SUB_TYPE(this._pinball), -1, 0, this.isMissionInProgress ? .5 : .25, 0)
        },
        _disposer: function() {
            this._kernel.audio.stop(null, Ke.SUB_TYPE(this._pinball)), li.prototype._disposer.call(this)
        },
        __class__: Ii
    });
    var Ti = function(t, e, i) {
        this.location = e, this.vo = new Pi(t, i), li.call(this, t)
    };
    n["b10ffp.game.Pinball"] = Ti, Ti.__name__ = ["b10ffp", "game", "Pinball"], Ti.__super__ = li, Ti.prototype = e(li.prototype, {
        _init: function() {
            li.prototype._init.call(this), this.isAcceptingInputs = !0, this._shake = 0, this._x = this._y = 0, this._tiltPower = 1, this._lookAheadX = this._lookAheadY = 0, this._scaler = Math.max(this._factory.width / this.vo.width, this._factory.height / this.vo.height), this._context.scaleX = this._context.scaleY = this._scaler, this.engine = new Ls(s(this, this._createSymbol)), this.engine.importXml(y.parse(this.vo.data)), this.engine.compile(), this.ball = this.getObject("ball"), this.ball.maxSpeed = 18, this._hole = this.getObject("hole"), this.engine.broadcaster.addListener({
                onSound: s(this, this.startSound)
            }), this.engine.render(new on(this._context)), this._optimizeRecursion(this._context), this._removeRecursion(this._context), this._ballSymbol = this.ball.mc._symbol, this.engine.start()
        },
        transition: function(t) {
            null == t && (t = !1)
        },
        getObject: function(t) {
            try {
                var e = t.split(".");
                if (4 == e.length) return this.engine.getContainerByName(e[0]).getContainerByName(e[1]).getContainerByName(e[2]).getObjectByName(e[3]);
                if (3 == e.length) return this.engine.getContainerByName(e[0]).getContainerByName(e[1]).getObjectByName(e[2]);
                if (2 == e.length) return this.engine.getContainerByName(e[0]).getObjectByName(e[1]);
                if (1 == e.length) return this.engine.getObjectByName(e[0])
            } catch (i) {
                i instanceof hn && (i = i.val)
            }
            return null
        },
        startSound: function(t) {
            "GAM_" == l.substr(t, 0, 4) && (t = l.substr(t, 4, 1).toUpperCase() + l.substr(t, 5, null));
            var e;
            switch (t) {
                case "Bumper":
                    e = 3;
                    break;
                case "FlipperDown":
                    e = 3;
                    break;
                case "FlipperUp":
                    e = 3;
                    break;
                case "TargetHit":
                    e = 3;
                    break;
                default:
                    e = 0
            }
            e > 0 && (t += p.random(e) + 1), this._kernel.audio.start(t, Ke.EFFECTS, 1, 0, .5, null, !0)
        },
        setShake: function(t) {
            this._shake = this._tools.limit(Math.max(this._shake, t), 0, 1)
        },
        _updater: function(t) {
            null == t && (t = 0), li.prototype._updater.call(this, t), this._shake *= .7, this._tiltPower = this._tools.limit(this._tiltPower + .01, 0, 1), this._inputs(), this._session.get_isTester() && this._kernel.inputs.joypad.getIsButtonDown(qe.SECONDARY) ? (this._isScrolling = !1, this.ball.position.x = (this._factory.width - this._kernel.inputs.mouse.x + this._x) / this._scaler, this.ball.position.y = (this._kernel.inputs.mouse.y - this._y) / this._scaler, this.ball.velocity.x = this.ball.velocity.y = 0) : this._isScrolling = this.vo.isScrollEnforced || !this._session.isScrollDisabled, this.engine.stepPhysics(), this._cheats(), (this.ball.hasContactWith(this._hole) || this._getIsBallOutSideBounds()) && this._ballLost();
            for (var e = this.ball.contacts.iterator(); e.hasNext();) {
                var i = e.next();
                this.location.addScore(i.classString)
            }
            this._lookAheadX = .050000000000000044 * this._lookAheadX + 30 * this.ball.velocity.x * .95, this._lookAheadY = .050000000000000044 * this._lookAheadY + 30 * this.ball.velocity.y * .95, this.setPosition(this.ball.position.x + this._lookAheadX, this.ball.position.y + this._lookAheadY, 1 - this._tools.limit(this.ball.velocity.getLength(), 0, 25) / 25 * .5), this._ballSymbol.blur(Math.min(this.ball.velocity.getLength() / 25, 1), this.ball.position.x, this.ball.position.y, 3 * this.ball.velocity.x, 3 * this.ball.velocity.y)
        },
        _inputs: function() {
            !this.isAcceptingInputs
        },
        _cheats: function() {
            this._session.cheats.bulletTime && this._getIsJoypadButtonDown(qe.DOWN) || this.engine.stepPhysics(), this.ball.radius = this._session.cheats.microBall ? 8 : 12
        },
        _getIsBallOutSideBounds: function() {
            return this.ball.position.x < 0 || this.ball.position.x > this.vo.width || this.ball.position.y < 0 || this.ball.position.y > this.vo.height
        },
        _vibrate: function(t) {
            null == t && (t = 200);
            try {
                null != (Mn = window.navigator, s(Mn, Mn.vibrate)) && window.navigator.vibrate(t)
            } catch (e) {
                e instanceof hn && (e = e.val)
            }
        },
        _ballLost: function() {
            this.location.lives <= 0 || (this.startSound("BallLost"), this.location.set_lives(this.location.lives - 1), this.location.lives > 0 ? this._ballNew() : this._kernel.audio.stop(null, Ke.SUB_TYPE(this)), this._vibrate())
        },
        _ballNew: function() {},
        _getIsJoypadButtonDown: function(t) {
            var e, i = this._kernel.inputs.joypad,
                s = this._kernel.inputs.mouse;
            switch (t[1]) {
                case 1:
                    e = i.getIsButtonDown(qe.UP) || s.getIsButtonDown() && s.relativeCentralisedY < 0;
                    break;
                case 2:
                    e = i.getIsButtonDown(qe.RIGHT) || s.getIsButtonDown() && s.relativeCentralisedX > 0 && s.relativeCentralisedY > 0;
                    break;
                case 3:
                    e = i.getIsButtonDown(qe.DOWN) || s.getIsButtonDown() && s.relativeCentralisedY > 0;
                    break;
                case 4:
                    e = i.getIsButtonDown(qe.LEFT) || s.getIsButtonDown() && s.relativeCentralisedX < 0 && s.relativeCentralisedY > 0;
                    break;
                case 5:
                case 6:
                case 0:
                    e = i.getIsButtonDown(qe.FIRE) || s.getIsButtonDoubleClick()
            }
            return e && (this.location.inactiveCount = 0), e
        },
        setPosition: function(t, e, i) {
            var s = Math.max(this._factory.width / this.vo.width, this._factory.height / this.vo.height);
            this._isScrolling && 1 != this.ball.level ? (this._scaler = Math.max(s, .09999999999999998 * i + .9 * this._scaler), this._x = .050000000000000044 * (-t * this._scaler + this._factory.width / 2) + .95 * this._x, this._y = .050000000000000044 * (-e * this._scaler + this._factory.height / 2) + .95 * this._y) : (this._scaler = .09999999999999998 * s + .9 * this._scaler, this._x = (this._factory.width - this.vo.width * this._scaler) / 2 * .050000000000000044 + .95 * this._x, this._y = (this._factory.height - this.vo.height * this._scaler) / 2 * .050000000000000044 + .95 * this._y), this._y += this._shake * this._scaler * 30 * (Math.random() - .5), this._x = this._tools.limit(this._x, -this.vo.width * this._scaler + this._factory.width, 0), this._y = this._tools.limit(this._y, -this.vo.height * this._scaler + this._factory.height, 0), this._context.x = -this._x + this._factory.width, this._context.y = this._y, this._context.scaleX = -this._scaler, this._context.scaleY = this._scaler
        },
        _convertSymbolNameToType: function(t) {
            switch (t) {
                case "ball":
                    return Ei.BALL;
                case "bg1":
                    return Ei.BG_1;
                case "bg2":
                    return Ei.BG_2;
                case "bumper1":
                    return Ei.BUMPER_1;
                case "bumper2":
                    return Ei.BUMPER_2;
                case "bumper3":
                    return Ei.BUMPER_3;
                case "bumper4":
                    return Ei.BUMPER_4;
                case "bumper5":
                    return Ei.BUMPER_5;
                case "centerPin":
                    return Ei.CENTER_PIN;
                case "fg1":
                    return Ei.FG_1;
                case "fg2":
                    return Ei.FG_2;
                case "firewall":
                    return Ei.FIREWALL;
                case "flipperLeft":
                    return Ei.FLIPPER_LEFT;
                case "flipperRight":
                    return Ei.FLIPPER_RIGHT;
                case "flipperSmall":
                    return Ei.FLIPPER_SMALL;
                case "jackpot":
                    return Ei.JACKPOT;
                case "Light":
                case "light":
                    return Ei.LIGHT;
                case "lightBumper":
                    return Ei.LIGHT_BUMPER;
                case "lightEntry":
                    return Ei.LIGHT_ENTRY;
                case "lightEntryGroup":
                    return Ei.LIGHT_ENTRY_GROUP;
                case "lightFirewall":
                    return Ei.LIGHT_FIREWALL;
                case "lightLaunch":
                    return Ei.LIGHT_LAUNCH;
                case "lightRampJackpot":
                    return Ei.LIGHT_RAMP_JACKPOT;
                case "lightRampMission":
                    return Ei.LIGHT_RAMP_MISSION;
                case "lightReentry":
                    return Ei.LIGHT_REENTRY;
                case "lightTargetsGroupLeft":
                    return Ei.LIGHT_TARGETS_GROUP_LEFT;
                case "lightTargetsGroupRight":
                    return Ei.LIGHT_TARGETS_GROUP_RIGHT;
                case "lightTargetsJackpot":
                    return Ei.LIGHT_TARGETS_JACKPOT;
                case "maskedFg1":
                    return Ei.MASKED_FG_1;
                case "plunger":
                    return Ei.PLUNGER;
                case "polyBumperLeft":
                    return Ei.POLY_BUMPER_LEFT;
                case "polyBumperRight":
                    return Ei.POLY_BUMPER_RIGHT;
                case "polyBumperTop":
                    return Ei.POLY_BUMPER_TOP;
                case "reboundDoor":
                    return Ei.REBOUND_DOOR;
                default:
                    return null
            }
        },
        _createSymbol: function(t) {
            return new Oi(this._kernel, this._convertSymbolNameToType(t)).createDisplayObject()
        },
        _optimizeRecursion: function(t) {
            if (t.visible = !1, t.isSymbol)
                for (var e = t; null != e;) e.visible = !0, e = e.parent;
            var i = null;
            if (_n.__instanceof(t, createjs.Container) && (i = t), null != i && 0 != i.children.length)
                for (var s = 0, n = i.children; s < n.length;) {
                    var r = n[s];
                    ++s, this._optimizeRecursion(r)
                }
        },
        _removeRecursion: function(t, e) {
            var i = null == e;
            if (i && (e = []), !t.visible) return null != t.parent && e.push(t), e;
            var s = null;
            if (_n.__instanceof(t, createjs.Container) && (s = t), null != s)
                for (var n = 0, r = s.children; n < r.length;) {
                    var o = r[n];
                    ++n, this._removeRecursion(o, e)
                }
            if (t == this._context) {
                for (var a = 0; a < e.length;) {
                    var l = e[a];
                    ++a, null != l.parent && l.parent.removeChild(l)
                }
                return null
            }
            return e
        },
        __class__: Ti
    });
    var Ai = function(t, e, i, n, r, o, a) {
        this._pinball = t, this._isLifeSupport = e, this._targetInner = i, this._targetOuter = n, this._lightInner = r, this._lightOuter = o, this._elements = a, this._targetInner.broadcaster.addListener({
            onEnter: s(this, this._handleTargetInnerEnter)
        }), this._targetOuter.broadcaster.addListener({
            onExit: s(this, this._handleTargetOuterExit)
        }), this.openDoor()
    };
    n["b10ffp.game.PinballRebound"] = Ai, Ai.__name__ = ["b10ffp", "game", "PinballRebound"], Ai.prototype = {
        _handleTargetInnerEnter: function() {
            this._isOpen || (this._pinball.location.addScore("rescueOpen"), this._pinball.startSound("RescueOpen"), this.openDoor())
        },
        _handleTargetOuterExit: function(t) {
            var e = t.movableObject;
            e.position.y < this._targetOuter.getGlobalPosition().y && this.closeDoor()
        },
        openDoor: function() {
            this._isOpen = !0;
            for (var t = 0, e = this._elements; t < e.length;) {
                var i = e[t];
                ++t, i.isEnabled = !1, i.mc.set_visible(!1)
            }
            this._lightOuter.setState(!1), this._lightInner.setState(!0)
        },
        closeDoor: function() {
            if (!this._isLifeSupport) {
                this._isOpen = !1;
                for (var t = 0, e = this._elements; t < e.length;) {
                    var i = e[t];
                    ++t, i.isEnabled = !0, i.mc.set_visible(!0)
                }
                this._lightOuter.setState(!0), this._lightInner.setState(!1)
            }
        },
        __class__: Ai
    };
    var Ci = function(t, e) {
        Ti.call(this, t, e, Si.TABLE_1)
    };
    n["b10ffp.game.PinballTable1"] = Ci, Ci.__name__ = ["b10ffp", "game", "PinballTable1"], Ci.__super__ = Ti, Ci.prototype = e(Ti.prototype, {
        _init: function() {
            Ti.prototype._init.call(this), this._plunger = this.getObject("plunger"), this._tilt = this.getObject("tilt"), this._centerPin = this.getObject("centerPin"), this._flipperTop = this.getObject("flipperTop"), this._flipperLeft = this.getObject("flipperLeft"), this._flipperRight = this.getObject("flipperRight"), this._entryGroupLight1 = this.getObject("entryGroup.light1"), this._entryGroupLight2 = this.getObject("entryGroup.light2"), this._entryGroupLight3 = this.getObject("entryGroup.light3"), this._entryGroupTarget1 = this.getObject("entryGroup.target1"), this._entryGroupTarget2 = this.getObject("entryGroup.target2"), this._entryGroupTarget3 = this.getObject("entryGroup.target3"), this._lightsEntry = this.getObject("lights.entry"), this._lightsTargetsJackpot = this.getObject("lights.targetsJackpot"), this._lightsPlunger = this.getObject("lights.plunger"), this._lightsRampMission = this.getObject("lights.rampMission"), this._lightsRampJackpot = this.getObject("lightsUpper.rampJackpot"), this._hideOut = this.getObject("hideOut"), this._missionRampTarget = this.getObject("missionRampTarget"), this._missionRamp = this.getObject("missionRamp"), this._jackpotRamp = this.getObject("jackpotRamp"), this._reentryRamp = this.getObject("reentryRamp"), this._bgSymbol = this.getObject("bg").mc._symbol, this._fgSymbol = this.getObject("fg").mc._symbol, this._reboundLeft = new Ai(this, this._session.cheats.lifeSupport, this.getObject("left.targetInner"), this.getObject("left.targetOuter"), this.getObject("lights.leftInner"), this.getObject("lights.leftOuter"), [this.getObject("left.lower.door.rect"), this.getObject("left.lower.door.ring")]), this._reboundRight = new Ai(this, this._session.cheats.lifeSupport, this.getObject("right.targetInner"), this.getObject("right.targetOuter"), this.getObject("lights.rightInner"), this.getObject("lights.rightOuter"), [this.getObject("right.lower.door.rect"), this.getObject("right.lower.door.ring")]), this._centerPin.broadcaster.addListener({
                onCollision: s(this, this._handleCenterPin)
            }), this._entryGroupTarget1.broadcaster.addListener({
                onExit: s(this, this._handleEntryTarget)
            }), this._entryGroupTarget2.broadcaster.addListener({
                onExit: s(this, this._handleEntryTarget)
            }), this._entryGroupTarget3.broadcaster.addListener({
                onExit: s(this, this._handleEntryTarget)
            }), this._missionRamp.broadcaster.addListener({
                onExit: s(this, this._handleRamp),
                onEnter: s(this, this._handleMissionRampBoost)
            }), this._jackpotRamp.broadcaster.addListener({
                onExit: s(this, this._handleRamp)
            }), this._reentryRamp.broadcaster.addListener({
                onExit: s(this, this._handleRamp)
            }), this.engine.start(), this.addEntity(this._mission = new Ii(this._kernel, this, this._bgSymbol, this._lightsRampMission)), this._ballNew()
        },
        transition: function(t) {
            null == t && (t = !1), Ti.prototype.transition.call(this, t), t ? this._mission.startMusic() : this._kernel.audio.stop(null, Ke.SUB_TYPE(this))
        },
        _updater: function(t) {
            null == t && (t = 0);
            var e = this;
            Ti.prototype._updater.call(this, t), this._getEntryGroupState() && null == this._delayEntryGroupState1 && this.addEntity(this._delayEntryGroupState1 = new ze(this._kernel, function() {
                e.location.addScore("group"), e._lightsEntry.setState(!1), e._setCenterPinState(!0), e._setEntryGroupState(!1), e.startSound("EntryComplete"), e._delayEntryGroupState1 = null
            }, 1e3)), this._hideOut.occupied && (this.location.addScore("hideOut"), this.location.setPinballTable(Si.TABLE_2), this._jackpotReturn()), this._getTargetGroupState(1) && null == this._delayTargetGroupState1 && this.addEntity(this._delayTargetGroupState1 = new ze(this._kernel, function() {
                e.startSound("TargetsComplete"), e.location.addScore("group"), e._setTargetGroupState(1, !1), e._delayTargetGroupState1 = null
            }, 1e3)), this._getTargetGroupState(2) && null == this._delayTargetGroupState2 && this.addEntity(this._delayTargetGroupState2 = new ze(this._kernel, function() {
                e.startSound("TargetsComplete"), e.location.addScore("group"), e._setTargetGroupState(2, !1), e._delayTargetGroupState2 = null
            }, 1e3)), this._getTargetGroupState(3) && null == this._delayTargetGroupState3 && this.addEntity(this._delayTargetGroupState3 = new ze(this._kernel, function() {
                e.startSound("MultiplierComplete");
                var t = e.location;
                t.set_multiplier(t.multiplier + 1), e.location.addScore("group"), e._setTargetGroupState(3, !1), e._delayTargetGroupState3 = null
            }, 1e3)), this._getTargetGroupState(4) && null == this._delayTargetGroupState4 && this.addEntity(this._delayTargetGroupState4 = new ze(this._kernel, function() {
                e._openJackpot(), e.location.addScore("group"), e._setTargetGroupState(4, !1), e._delayTargetGroupState4 = null
            }, 1e3)), !this._lightsPlunger.state && this.ball.velocity.getLength() > 16 && (this._lightsPlunger.setState(!0), this._lightsRampMission.setState(!1), this.location.addScore("launch")), this.ball.level != this._prevBallLevel && (this._prevBallLevel = this.ball.level, this._bgSymbol.setIsUpper(4 == this.ball.level), this._fgSymbol.visible = 4 != this.ball.level), this.ball.hasContactWith(this._missionRampTarget) && !this._mission.isMissionInProgress && this._mission.newMission(this._getMission())
        },
        _inputs: function() {
            if (Ti.prototype._inputs.call(this), this.isAcceptingInputs) {
                var t = this._getIsJoypadButtonDown(qe.UP),
                    e = this._getIsJoypadButtonDown(qe.RIGHT),
                    i = this._getIsJoypadButtonDown(qe.DOWN),
                    s = this._getIsJoypadButtonDown(qe.LEFT),
                    n = this._getIsJoypadButtonDown(qe.FIRE);
                e ? this._flipperTop.downHandler() : this._flipperTop.upHandler(), e ? this._flipperLeft.downHandler() : this._flipperLeft.upHandler(), s ? this._flipperRight.downHandler() : this._flipperRight.upHandler(), t ? this._prevIsUp || this._tiltPower > .75 && (this.startSound("FlipperUp"), this._tilt.tiltAmount.x = (Math.random() - .5) * this._tiltPower * .75, this._tilt.tiltAmount.y = (Math.random() + 4) * this._tiltPower * .75, this._tiltPower *= .8, this._tilt.downHandler(), this.setShake(this._tiltPower)) : this._prevIsUp && this._tilt.upHandler(), 1 == this.ball.level && (i || n ? (this._prevIsDown || this.startSound("PlungerPull"), this._plunger.downHandler()) : this._plunger.upHandler(), this.location.inactiveCount++), (s && !this._prevIsLeft || e && !this._prevIsRight) && this._shuffleEntryLights(), this._prevIsUp = t, this._prevIsRight = e, this._prevIsDown = i, this._prevIsLeft = s, this._prevIsFire = n
            }
        },
        _ballNew: function() {
            Ti.prototype._ballNew.call(this), this._reset(), this._mission.isMissionInProgress && this._mission.reset(), this.ball.velocity.x = 0, this.ball.velocity.y = 0, this.ball.position.x = 40, this.ball.position.y = 785, this.ball.level = 1, this.ball.contacts = new fs, 1 == this.location.lives && this._openJackpot(), this.isAcceptingInputs = !1, this.location.showQuestion()
        },
        _getMission: function() {
            var t = !this._entryGroupLight1.state,
                e = !this._entryGroupLight2.state,
                i = !this._entryGroupLight3.state;
            return t || e || i ? !t || e || i ? t || !e || i ? t || e || !i ? t && e && !i ? vi.MISSION_2 : t && !e && i ? vi.MISSION_1 : !t && e && i ? vi.MISSION_3 : t && e && i ? vi.MISSION_4 : vi.MISSION_DORMANT : vi.MISSION_4 : vi.MISSION_3 : vi.MISSION_1 : vi.MISSION_2
        },
        _openJackpot: function() {
            this._lightsTargetsJackpot.setState(!0), this._setJackpotState(!0), this.startSound("JackpotOpen")
        },
        _jackpotReturn: function() {
            this._hideOut.releaseBall(), this._setJackpotState(!1), this._lightsTargetsJackpot.setState(!1)
        },
        _setJackpotState: function(t) {
            this._lightsRampJackpot.setState(!t), this._hideOut.isEnabled = t, this._hideOut.transparent = !t, this._hideOut.mc.set_visible(t)
        },
        _setCenterPinState: function(t) {
            this._centerPin.isEnabled = t, this._centerPin.transparent = !t, this._centerPin.mc.set_visible(t)
        },
        _handleCenterPin: function() {
            this._session.cheats.centerPin || (this._setCenterPinState(!1), this.startSound("CenterPin"))
        },
        _getEntryGroupState: function() {
            return !this._entryGroupLight1.state && !this._entryGroupLight2.state && !this._entryGroupLight3.state
        },
        _setEntryGroupState: function(t) {
            this._entryGroupLight1.setState(!t), this._entryGroupLight2.setState(!t), this._entryGroupLight3.setState(!t), this._lightsEntry.setState(!t)
        },
        _getTargetGroupState: function(t) {
            var e = (Mn = this.engine.getContainerByName("targetGroup" + t), s(Mn, Mn.getContainerByName)),
                i = e("target1"),
                n = e("target2"),
                r = e("target3");
            return !i.state && !n.state && !r.state
        },
        _setTargetGroupState: function(t, e) {
            var i = (Mn = this.engine.getContainerByName("targetGroup" + t), s(Mn, Mn.getContainerByName)),
                n = i("target1"),
                r = i("target2"),
                o = i("target3");
            n.setState(!e), r.setState(!e), o.setState(!e)
        },
        _shuffleEntryLights: function() {
            var t, e = !this._entryGroupLight1.state,
                i = !this._entryGroupLight2.state,
                s = !this._entryGroupLight3.state,
                n = !1,
                r = !1,
                o = !1;
            t = (e ? 1 : 0) + (i ? 1 : 0) + (s ? 1 : 0), 0 != t && 3 != t && (!e || i || s ? e || !i || s ? e || i || !s ? e && i && !s ? (n = !0, r = !1, o = !0) : e && !i && s ? (n = !1, r = !0, o = !0) : !e && i && s && (n = !0, r = !0, o = !1) : (n = !0, r = !1, o = !1) : (n = !1, r = !1, o = !0) : (n = !1, r = !0, o = !1), this._entryGroupLight1.setState(!n), this._entryGroupLight2.setState(!r), this._entryGroupLight3.setState(!o))
        },
        _handleEntryTarget: function(t) {
            var e, i = t.fixedObject.name,
                s = p.parseInt(l.substr(i, -1, 1));
            switch (s) {
                case 1:
                    e = this._entryGroupLight1;
                    break;
                case 2:
                    e = this._entryGroupLight2;
                    break;
                case 3:
                    e = this._entryGroupLight3;
                    break;
                default:
                    e = this._entryGroupLight3
            }
            e.state && (e.setState(!1), this.location.addScore("entry"), this.startSound("Entry"))
        },
        _handleMissionRampBoost: function() {
            this.ball.velocity.plus(new ks(25, -40))
        },
        _handleRamp: function() {
            this.startSound("MissionStart")
        },
        _reset: function() {
            this.location.set_multiplier(1), this.location.inactiveCount = 0, this._mission.reset(), this._setEntryGroupState(!1), this._setTargetGroupState(1, !1), this._setTargetGroupState(2, !1), this._setTargetGroupState(3, !1), this._setTargetGroupState(4, !1), this._setCenterPinState(this._session.cheats.centerPin), this._setJackpotState(!1), this._reboundLeft.openDoor(), this._reboundRight.openDoor(), this._lightsTargetsJackpot.setState(!1), this._lightsPlunger.setState(!1), this._lightsRampMission.setState(!0)
        },
        __class__: Ci
    });
    var xi = function(t, e) {
        Ti.call(this, t, e, Si.TABLE_2)
    };
    n["b10ffp.game.PinballTable2"] = xi, xi.__name__ = ["b10ffp", "game", "PinballTable2"], xi.__super__ = Ti, xi.prototype = e(Ti.prototype, {
        _init: function() {
            Ti.prototype._init.call(this), this._tilt = this.getObject("tilt"), this._flipperLeft = this.getObject("flipperLeft"), this._flipperRight = this.getObject("flipperRight"), this._wall = this.getObject("wall"), this._hideOut = this.getObject("hideOut"), this._target1 = this.getObject("targets.target1"), this._target2 = this.getObject("targets.target2"), this._target3 = this.getObject("targets.target3"), this._target4 = this.getObject("targets.target4"), this._target5 = this.getObject("targets.target5"), this._target6 = this.getObject("targets.target6"), this._target7 = this.getObject("targets.target7"), this._target8 = this.getObject("targets.target8"), this._target9 = this.getObject("targets.target9"), this._target10 = this.getObject("targets.target10"), this._target11 = this.getObject("targets.target11"), this._target12 = this.getObject("targets.target12"), this._target13 = this.getObject("targets.target13"), this._target14 = this.getObject("targets.target14"), this._target15 = this.getObject("targets.target15"), this.engine.start()
        },
        transition: function(t) {
            null == t && (t = !1), Ti.prototype.transition.call(this, t), t ? this._kernel.audio.start("MusicGameTable2", Ke.SUB_TYPE(this), -1, 0, .5, 0) : this._kernel.audio.stop(null, Ke.SUB_TYPE(this))
        },
        _disposer: function() {
            this._kernel.audio.stop(null, Ke.SUB_TYPE(this)), Ti.prototype._disposer.call(this)
        },
        _updater: function(t) {
            if (null == t && (t = 0), Ti.prototype._updater.call(this, t), this._wall.rotation += .2, this._wall.mc.set_rotation(180 * this._wall.rotation / Math.PI), this._hideOut.occupied) {
                this.location.addScore("jackpot"), this.startSound("JackpotWin"), this.location.setPinballTable(Si.TABLE_1), this._reset();
                var e = this.location,
                    i = e.lives;
                e.set_lives(i + 1), this._session.sponsor.isEnabled && this._session.sponsor.submitAchievement(p.string(this._kernel.getConfig("gui.scenes.game.achievements.bonus.title")))
            }
            this._getIsAllTargets() && this._wall.isEnabled && (this.startSound("WallRemoved"), this._wall.isEnabled = !1, this._wall.transparent = !0, this._wall.mc.set_visible(!1)), this._updates % this._factory.targetFramerate == 0 && this.location.addScore("secret")
        },
        _inputs: function() {
            if (Ti.prototype._inputs.call(this), this.isAcceptingInputs) {
                var t = this._getIsJoypadButtonDown(qe.UP),
                    e = this._getIsJoypadButtonDown(qe.RIGHT),
                    i = (this._getIsJoypadButtonDown(qe.DOWN), this._getIsJoypadButtonDown(qe.LEFT));
                e ? this._flipperLeft.downHandler() : this._flipperLeft.upHandler(), i ? this._flipperRight.downHandler() : this._flipperRight.upHandler(), t ? this._prevIsUp || this._tiltPower > .75 && (this.startSound("FlipperUp"), this._tilt.tiltAmount.x = (Math.random() - .5) * this._tiltPower * .65, this._tilt.tiltAmount.y = (Math.random() + 4) * this._tiltPower * .65, this._tiltPower *= .8, this._tilt.downHandler(), this.setShake(this._tiltPower)) : this._prevIsUp && this._tilt.upHandler(), this._prevIsUp = t
            }
        },
        _ballLost: function() {
            this.startSound("BallLost"), this.location.setPinballTable(Si.TABLE_1), this._reset()
        },
        _getIsAllTargets: function() {
            return 0 == this._getHitTargetCount()
        },
        _getHitTargetCount: function() {
            var t = 0;
            return t += this._target1.state ? 1 : 0, t += this._target2.state ? 1 : 0, t += this._target3.state ? 1 : 0, t += this._target4.state ? 1 : 0, t += this._target5.state ? 1 : 0, t += this._target6.state ? 1 : 0, t += this._target7.state ? 1 : 0, t += this._target8.state ? 1 : 0, t += this._target9.state ? 1 : 0, t += this._target10.state ? 1 : 0, t += this._target11.state ? 1 : 0, t += this._target12.state ? 1 : 0, t += this._target13.state ? 1 : 0, t += this._target14.state ? 1 : 0, t += this._target15.state ? 1 : 0
        },
        _reset: function() {
            this._wall.isEnabled = !0, this._wall.transparent = !1, this._wall.mc.set_visible(!0), this._target1.setState(!0), this._target2.setState(!0), this._target3.setState(!0), this._target4.setState(!0), this._target5.setState(!0), this._target6.setState(!0), this._target7.setState(!0), this._target8.setState(!0), this._target9.setState(!0), this._target10.setState(!0), this._target11.setState(!0), this._target12.setState(!0), this._target13.setState(!0), this._target14.setState(!0), this._target15.setState(!0), this._hideOut.releaseBall(), this.ball.position.x = 544, this.ball.position.y = 26, this.ball.velocity.x = -6, this.ball.velocity.y = 1, this.ball.level = 4, this.ball.contacts = new fs
        },
        __class__: xi
    });
    var Pi = function(t, e) {
        hi.call(this, t), this.type = e, this.data = this._getData(), this.width = this._getWidth(), this.height = this._getHeight(), this.isScrollEnforced = this._getIsScrollEnforced()
    };
    n["b10ffp.game.PinballVo"] = Pi, Pi.__name__ = ["b10ffp", "game", "PinballVo"], Pi.__super__ = hi, Pi.prototype = e(hi.prototype, {
        _getData: function() {
            var t = this.type;
            switch (t[1]) {
                case 0:
                    return '<Engine gravity="0,0.075" bounceFriction="0.4" slidingFriction="0"><Objects><Decal name="bg" classString="Decal" position="0,0" symbolID="bg1" /><Group classString="Group" name="targetGroup1" position="204,200"><Objects><Decal name="light1" classString="Light" position="-24,15" symbolID="light" /><FixedObject name="target1" classString="Target" position="-29.3989756713298,-1.01998889561583" symbolXScale="-100" symbolRotation="-1.83681443014923" rotation="-3.46782461613793" width="22" height="4" light="light1" switchSoundID="GAM_targetHit" /><Decal name="light2" classString="Light" position="3,6" symbolID="light" /><FixedObject name="target2" classString="Target" position="-2.88071966291912,-10.1795597906528" symbolXScale="-100" symbolRotation="-1.83681443014923" rotation="-3.46782461613793" width="22" height="4" light="light2" switchSoundID="GAM_targetHit" /><Decal name="light3" classString="Light" position="30,-3" symbolID="light" /><FixedObject name="target3" classString="Target" position="23.8541501553361,-19.3297912522579" symbolXScale="-100" symbolRotation="-1.83681443014923" rotation="-3.46782461613793" width="22" height="4" light="light3" switchSoundID="GAM_targetHit" /></Objects></Group><FixedObject name="centerPin" classString="Circle" position="304,819" useSymbol="true" symbolID="centerPin" fillColor="FF6633" radius="11" /><FixedObject classString="Rectangle" position="559,34.05" /><FixedObject classString="Ring" position="418.910583153348,160.109611231101" rotation="3.82663438499757" innerRadius="150" outerRadius="180" fillAngle="2.46056517946161" /><FixedObject classString="Ring" position="218.832505399568,294.492116630669" rotation="5.21818539761265" innerRadius="350" outerRadius="410" fillAngle="1.55072504039696" /><FixedObject classString="ConvexPolygon" position="175,25.05" points="118,27|32,44|-30,-30|94,-30" /><FixedObject classString="ConvexPolygon" position="68,67.05" points="133,6|28,90|-21,-65|79,-79" /><FixedObject classString="ConvexPolygon" position="-38.95,172.05" points="133,-10|76,86|23,-81|99,-143" /><FixedObject classString="ConvexPolygon" position="-79.95,318.05" points="88,117|61,55|81,-148|116,-61" /><Group classString="Group" name="border" position="150,300"><Objects><FixedObject classString="Rectangle" position="138,-315" fillColor="33CC" endLevel="10" width="636" height="30" /><FixedObject classString="Rectangle" position="-165,148" fillColor="33CC" endLevel="10" width="30" height="896" /><FixedObject classString="Rectangle" position="441,148" fillColor="33CC" endLevel="10" width="30" height="896" /><FixedObject classString="Rectangle" position="138,651" bounceFriction="1" slidingFriction="1" fillColor="33CC" endLevel="10" width="636" height="30" /></Objects></Group><Group classString="Tube" position="41,895" fillColor="6666" endLevel="1" rotation="3.14159265358979" width="35"><Segments><Segment type="0" left="true" right="true" len="400" radius="100" angle="0.785398163397448" /><Segment type="1" left="true" right="true" len="100" radius="-1000" angle="0.174532925199433" /><Segment type="1" left="true" right="true" len="100" radius="-300" angle="0.20943951023932" /><Segment type="1" left="true" right="true" len="100" radius="-300" angle="0.314159265358979" /><Segment type="1" left="true" right="true" len="100" radius="-300" angle="0.453785605518526" /><Segment type="1" left="false" right="true" len="100" radius="-195" angle="0.392699081698724" /><Segment type="1" left="false" right="false" len="300" radius="-195" angle="0.392699081698724" /><Segment type="1" left="true" right="true" len="100" radius="-200" angle="1.74532925199433" /><Segment type="0" left="true" right="true" len="100" radius="100" angle="0.785398163397448" /></Segments></Group><FixedObject classString="ConvexPolygon" position="112.5,473.220950323973" symbolXScale="-100" points="10.85,42.9|-40.05,61.1|-32.1,-110.55|11.05,-78.8" /><FixedObject name="hideOut" classString="HideOut" position="461,151" useSymbol="true" symbolID="jackpot" transparent="true" radius="2" holdSoundID="GAM_jackpot" releaseSoundID="GAM_jackpotRelease" releaseVelocity="5,20" /><FixedObject name="hole" classString="Ring" position="305,806" symbolXScale="382.012352817308" symbolYScale="382.012352817308" fillColor="FF0000" transparent="true" rotation="0.785398163397448" innerRadius="76.4024705634615" outerRadius="152.804941126923" fillAngle="1.5707963267949" /><FixedObject classString="Ring" position="393,131.072392135502" symbolXScale="558.027212477225" symbolYScale="558.027212477225" rotation="-2.50734000341505" innerRadius="111.605442495445" outerRadius="223.21088499089" fillAngle="1.87186562276392" /><FixedObject classString="ConvexPolygon" position="508.230561555076,484.220950323973" points="46.3,68.85|-3.35,39.15|75.2,-132.3|80.35,-28.8" /><Group classString="Group" name="right" position="300,747"><Objects><FixedObject name="targetOuter" classString="Rectangle" position="210.176849082147,-75.7079780463771" symbolXScale="140.617756808867" symbolYScale="140.617756808867" fillColor="A0B4D3" transparent="true" width="6.05394521704902" height="30.2697260852452" /><FixedObject name="targetInner" classString="Rectangle" position="166.844186910344,-76.2079780463771" symbolXScale="140.617756808867" symbolYScale="140.617756808867" fillColor="A0B4D3" transparent="true" width="6.05394521704902" height="30.2697260852452" /><Group classString="Group" position="145.1374058578,-58.2693661838388"><Objects><FixedObject classString="Ring" position="-5.63740585780039,-5.13063381616117" symbolXScale="140.617756808867" symbolYScale="140.617756808867" innerRadius="45" outerRadius="52" fillAngle="0.959931088596881" detectCorners="false" /><FixedObject classString="ConvexPolygon" position="-372.1374058578,-528.630633816161" symbolXScale="140.617756808867" symbolYScale="140.617756808867" border="5" points="416.7,543.9|416.7,454.7" /><FixedObject classString="ConvexPolygon" position="-424.8625941422,-584.569366183839" symbolXScale="140.617756808867" symbolYScale="140.617756808867" border="0" points="388.5,680|375.3,659.4|454,610|446.85,645" /><FixedObject classString="Ring" position="-5.63740585780039,12.7693661838388" symbolXScale="140.617756808867" symbolYScale="140.617756808867" innerRadius="45" outerRadius="55" fillAngle="1.22173047639603" detectCorners="false" /><FixedObject classString="ConvexPolygon" position="-405.5874058578,-595.230633816161" symbolXScale="140.617756808867" symbolYScale="140.617756808867" border="0" points="437.85,639.5|413.5,656|419.8,640.9|447.5,613.5" /></Objects></Group><Group classString="Group" name="lower" position="150,74"><Objects><Group classString="Group" name="door" position="55,-52"><Objects><FixedObject name="rect" classString="Rectangle" position="-1,12" useSymbol="true" symbolID="reboundDoor" symbolXScale="-100" fillColor="273F65" rotation="0.941592653589793" width="20.1798173901634" height="74.6653243436047" /><FixedObject name="ring" classString="Ring" position="-29,-41" symbolXScale="140.617756808867" symbolYScale="140.617756808867" fillColor="273F65" innerRadius="50" outerRadius="65" fillAngle="0.841592653589793" detectCorners="false" /></Objects></Group><FixedObject classString="PolyBumper" position="58.9094138058031,12.8679517137098" bounceFriction="0" symbolXScale="140.617756808867" symbolYScale="140.617756808867" border="5.62471027235469" points="10.8275672742828,0|-10.2650962470473,0" hitSegment="1" hitForce="10" hitSoundID="GAM_rescueLaunch" /><FixedObject classString="Rectangle" position="59.7297948023531,53.1552560782947" bounceFriction="0" symbolXScale="140.617756808867" symbolYScale="140.617756808867" width="40.3596347803269" height="80.7192695606537" /><FixedObject classString="ConvexPolygon" position="-377.623173901634,-653.003489534803" symbolXScale="140.617756808867" symbolYScale="140.617756808867" border="0" points="421.758183454415,731.518380393424|286.15,731.5|286.15,682.6|421.758183454415,608.421494313427" /></Objects></Group><FixedObject name="polyBumper4" classString="PolyBumper" position="112,-143" useSymbol="true" symbolID="polyBumperRight" border="6" points="30,85|-9,107|30,10" hitSegment="1" hitForce="12" hitSoundID="GAM_polyBumper" playSymbol="true" /><FixedObject classString="Rectangle" position="256,-50" width="60" height="400" /></Objects></Group><Group classString="Group" name="left" position="309.957326984358,746.979805615551"><Objects><FixedObject name="targetOuter" classString="Rectangle" position="-210.176849082147,-75.7079780463771" symbolXScale="-140.617756808867" symbolYScale="140.617756808867" fillColor="A0B4D3" transparent="true" width="6.05394521704902" height="30.2697260852452" /><FixedObject name="targetInner" classString="Rectangle" position="-166.844186910344,-76.2079780463771" symbolXScale="-140.617756808867" symbolYScale="140.617756808867" fillColor="A0B4D3" transparent="true" width="6.05394521704902" height="30.2697260852452" /><Group classString="Group" position="-145.1374058578,-58.2693661838388"><Objects><FixedObject classString="Ring" position="5.63740585780039,-5.13063381616117" symbolXScale="-140.617756808867" symbolYScale="140.617756808867" rotation="2.18166156499291" innerRadius="45" outerRadius="52" fillAngle="0.959931088596881" detectCorners="false" /><FixedObject classString="ConvexPolygon" position="372.1374058578,-528.630633816161" symbolXScale="-140.617756808867" symbolYScale="140.617756808867" border="5" points="-416.7,543.9|-416.7,454.7" /><FixedObject classString="ConvexPolygon" position="424.8625941422,-584.569366183839" symbolXScale="-140.617756808867" symbolYScale="140.617756808867" border="0" points="-375.3,659.4|-388.5,680|-446.85,645|-454,610" /><FixedObject classString="Ring" position="5.63740585780039,12.7693661838388" symbolXScale="-140.617756808867" symbolYScale="140.617756808867" rotation="1.91986217719376" innerRadius="45" outerRadius="55" fillAngle="1.22173047639603" detectCorners="false" /><FixedObject classString="ConvexPolygon" position="405.5874058578,-595.230633816161" symbolXScale="-140.617756808867" symbolYScale="140.617756808867" border="0" points="-419.8,640.9|-413.5,656|-437.85,639.5|-447.5,613.5" /></Objects></Group><Group classString="Group" name="lower" position="-150,73.6"><Objects><Group classString="Group" name="door" position="-55,-52"><Objects><FixedObject name="rect" classString="Rectangle" position="0,12" useSymbol="true" symbolID="reboundDoor" fillColor="273F65" rotation="-0.941592653589793" width="20.1798173901634" height="74.6653243436047" /><FixedObject name="ring" classString="Ring" position="28,-42" symbolXScale="-140.617756808867" symbolYScale="140.617756808867" fillColor="273F65" rotation="2.3" innerRadius="50" outerRadius="65" fillAngle="0.841592653589793" detectCorners="false" /></Objects></Group><FixedObject classString="PolyBumper" position="-58.9094138058031,12.8679517137098" bounceFriction="0" symbolXScale="-140.617756808867" symbolYScale="140.617756808867" border="5.62471027235469" points="10.2650962470473,0|-10.8275672742828,0" hitSegment="1" hitForce="10" hitSoundID="GAM_rescueLaunch" /><FixedObject classString="Rectangle" position="-59.7297948023531,53.1552560782947" bounceFriction="0" symbolXScale="-140.617756808867" symbolYScale="140.617756808867" width="40.3596347803269" height="80.7192695606537" /><FixedObject classString="ConvexPolygon" position="377.623173901634,-653.003489534803" symbolXScale="-140.617756808867" symbolYScale="140.617756808867" border="0" points="-286.15,731.5|-421.758183454415,731.518380393424|-421.758183454415,608.421494313427|-286.15,682.6" /></Objects></Group><FixedObject name="polyBumper3" classString="PolyBumper" position="-112,-143" useSymbol="true" symbolID="polyBumperLeft" border="6" points="9,107|-30,85|-30,10" hitSegment="2" hitForce="10" hitSoundID="GAM_polyBumper" playSymbol="true" /><FixedObject classString="Rectangle" position="-234,-50" symbolXScale="-100" width="15" height="400" /></Objects></Group><Tilt name="tilt" classString="Tilt" tiltAmount="2,5" position="5.05,4.05" /><FixedObject classString="Ramp" position="398.870194384449,429.158639308855" rotation="0.561996019142174" endLevel="4" width="40" height="20" upperLevel="4" /><FixedObject classString="Ramp" position="143.029805615551,633.268250539957" endLevel="4" width="45" upperLevel="4" /><Group classString="Tube" position="394,438" symbolID="NaN" fillColor="CC6633" startLevel="4" endLevel="4" rotation="-2.61799387799149" width="35" wallWidth="5"><Segments><Segment type="0" left="true" right="true" len="300" radius="100" angle="0.785398163397448" /><Segment type="1" left="true" right="true" len="100" radius="100" angle="2.61799387799149" /><Segment type="1" left="true" right="true" len="100" radius="-250" angle="0.698131700797732" /><Segment type="1" left="true" right="true" len="100" radius="180" angle="2.18166156499291" /><Segment type="0" left="true" right="true" len="200" radius="100" angle="0.785398163397448" /><Segment type="1" left="true" right="true" len="100" radius="-150" angle="0.436332312998582" /><Segment type="0" left="true" right="true" len="70" radius="100" angle="0.785398163397448" /></Segments></Group><FixedObject classString="Ring" position="476,576" rotation="5.16460378957642" innerRadius="50" outerRadius="70" fillAngle="1.22173047639603" /><Group classString="Group" name="targetGroup3" position="260,350"><Objects><FixedObject name="target1" classString="Target" position="29.3431585768423,-2.07826673093508" symbolRotation="1.8007870239852" rotation="3.4317972099739" width="22" height="4" light="light1" switchSoundID="GAM_multiplierHit" /><Decal name="light1" classString="Light" position="24,15" symbolID="light" /><Decal name="light2" classString="Light" position="-3,6" symbolID="light" /><FixedObject name="target2" classString="Target" position="2.51218651240251,-10.2767165103795" symbolRotation="1.8007870239852" rotation="3.4317972099739" width="22" height="4" light="light2" switchSoundID="GAM_multiplierHit" /><Decal name="light3" classString="Light" position="-30,-2" symbolID="light" /><FixedObject name="target3" classString="Target" position="-24.5349223947638,-18.4580305713286" symbolRotation="1.8007870239852" rotation="3.4317972099739" width="22" height="4" light="light3" switchSoundID="GAM_multiplierHit" /></Objects></Group><FixedObject classString="ConvexPolygon" position="400.094060475162,155.411339092872" points="49,36|-30,10.05|-30,-30|-11.95,-73.05" /><FixedObject classString="ConvexPolygon" position="208.991360691144,155.411339092872" symbolXScale="-100" endLevel="1" points="30,10.05|-65,41.55|-10.1,-1.55|30,-30" /><FixedObject classString="Rectangle" position="222.133384338907,105.283762129287" symbolRotation="0.311101590891472" rotation="0.800840979001081" width="45" height="15" /><FixedObject classString="Ramp" position="222.100645636002,105.291385109787" symbolRotation="0.311101590891472" rotation="3.95849066170922" startLevel="1" endLevel="1" width="45" height="15" /><FixedObject classString="ConvexPolygon" position="219.325348442639,273.584954767647" symbolRotation="0.493267505304117" rotation="0.493267505304117" border="5" points="27.8,40.5|46.65,23.9|76.1,14.85|103.25,24.8" /><FixedObject classString="Ring" position="133.106171732281,576" symbolXScale="-100" rotation="-3.24474161238266" innerRadius="50" outerRadius="70" fillAngle="1.22173047639603" /><Group classString="Group" name="targetGroup2" position="402,200"><Objects><FixedObject name="target1" classString="Target" position="29.3989756713298,-1.01998889561583" symbolRotation="1.83681443014923" rotation="3.46782461613793" width="22" height="4" light="light1" switchSoundID="GAM_targetHit" /><Decal name="light1" classString="Light" position="24,15" symbolID="light" /><Decal name="light2" classString="Light" position="-3,6" symbolID="light" /><FixedObject name="target2" classString="Target" position="2.88071966291912,-10.1795597906528" symbolRotation="1.83681443014923" rotation="3.46782461613793" width="22" height="4" light="light2" switchSoundID="GAM_targetHit" /><Decal name="light3" classString="Light" position="-30,-3" symbolID="light" /><FixedObject name="target3" classString="Target" position="-23.8541501553361,-19.3297912522579" symbolRotation="1.83681443014923" rotation="3.46782461613793" width="22" height="4" light="light3" switchSoundID="GAM_targetHit" /></Objects></Group><FixedObject classString="Ring" position="249.132505399568,216.192116630669" rotation="6.18143261178832" innerRadius="200" outerRadius="215" fillAngle="1.17617738291898" /><FixedObject classString="Circle" position="407.57667386609,459.890172786177" radius="5" /><FixedObject classString="Circle" position="446.25,482.75" radius="5" /><Group classString="Group" name="targetGroup4" position="146.015624720257,444.952504019992"><Objects><FixedObject name="target1" classString="Target" position="-10.1559228578299,27.6079223915243" symbolXScale="-100" symbolRotation="-3.0897929428537" rotation="-4.7208031288424" width="22" height="4" light="light1" switchSoundID="GAM_targetHit" /><Decal name="light1" classString="Light" position="7,27" symbolID="light" /><Decal name="light2" classString="Light" position="7,-1" symbolID="light" /><FixedObject name="target2" classString="Target" position="-10.5699721435199,-0.444603410938425" symbolXScale="-100" symbolRotation="-3.0897929428537" rotation="-4.7208031288424" width="22" height="4" light="light2" switchSoundID="GAM_targetHit" /><Decal name="light3" classString="Light" position="7,-29" symbolID="light" /><FixedObject name="target3" classString="Target" position="-10.9074591146875,-28.6999763963424" symbolXScale="-100" symbolRotation="-3.0897929428537" rotation="-4.7208031288424" width="22" height="4" light="light3" switchSoundID="GAM_targetHit" /></Objects></Group><FixedObject classString="PolyBumper" position="443,133.05" bounceFriction="0" symbolXScale="-140.617756808867" symbolYScale="140.617756808867" rotation="2.32809468923524" border="5.62471027235469" points="10.2650962470473,0|-10.8275672742828,0" hitSegment="1" hitForce="10" hitSoundID="GAM_jackpotRejected" /><FixedObject classString="ConvexPolygon" position="456,156.05" points="-15,-40|-47,-10.95|-58.95,-69.05" /><Group classString="Group" name="lights" position="275,470"><Objects><Decal name="leftOuter" classString="Light" position="-175,202" symbolID="light" /><Decal name="leftInner" classString="Light" position="-132,202" symbolID="light" /><Decal name="rightInner" classString="Light" position="192,202" symbolID="light" /><Decal name="rightOuter" classString="Light" position="235,202" symbolID="light" /><Decal name="rampMission" classString="Light" position="102,1" symbolID="lightRampMission" /><Decal name="bumper1" classString="Light" position="33,-273" symbolID="lightBumper" symbolXScale="-100" symbolYScale="-100" /><Decal name="bumper3" classString="Light" position="-39,-193" symbolID="lightBumper" symbolYScale="-100" /><Decal name="bumper2" classString="Light" position="109,-182" symbolID="lightBumper" symbolXScale="-100" /><Decal name="bumper4" classString="Light" position="54,-27" symbolID="lightBumper" /><Decal name="plunger" classString="Light" position="-233,185" symbolID="lightLaunch" /><Decal name="entry" classString="Light" position="29,-327" symbolID="lightEntryGroup" /><Decal name="targetsJackpot" classString="Light" position="-82,-25" symbolID="lightTargetsJackpot" /></Objects></Group><Group classString="Group" name="entryGroup" position="304,130"><Objects><FixedObject classString="ConvexPolygon" position="10.4920626349888,28.9954103671706" border="5" points="-30,-3.6|-30,-30" /><FixedObject classString="ConvexPolygon" position="51.6842872570189,28.9954103671706" border="5" points="-30,-3.6|-30,-30" /><Decal name="light1" classString="Light" position="-41,13" symbolID="lightEntry" /><Decal name="light2" classString="Light" position="0,13" symbolID="lightEntry" /><Decal name="light3" classString="Light" position="41,13" symbolID="lightEntry" /><FixedObject name="target1" classString="Rectangle" position="-40.8000000000001,12.1" lineColor="CC3300" transparent="true" width="5" height="20" /><FixedObject name="target2" classString="Rectangle" position="0.392224622030181,12.1" lineColor="CC3300" transparent="true" width="5" height="20" /><FixedObject name="target3" classString="Rectangle" position="41.5844492440604,12.1" lineColor="CC3300" transparent="true" width="5" height="20" /></Objects></Group><FixedObject name="missionRampTarget" classString="Rectangle" position="425.5,35.05" fillColor="99CC00" lineColor="CC3300" transparent="true" startLevel="4" endLevel="4" width="20" height="20" /><MovableObject name="ball" classString="MovableObject" position="40,785" useSymbol="true" symbolID="ball" autoRender="true" radius="10" velocity="0,0" level="1" /><Decal name="fg" classString="Decal" position="0,0" symbolID="fg1" /><FixedObject name="polyBumper2" classString="PolyBumper" position="386,362" useSymbol="true" symbolID="polyBumperTop" border="6" points="-4,36|-30,30|46,-52" hitSegment="1" hitForce="10" hitSoundID="GAM_polyBumper" playSymbol="true" /><FixedObject name="bumper1" classString="CircleBumper" position="278,227" useSymbol="true" symbolID="bumper1" radius="25" hitThreshold="1" hitSoundID="GAM_bumper" playSymbol="true" /><FixedObject name="bumper2" classString="CircleBumper" position="353,257" useSymbol="true" symbolID="bumper2" radius="25" hitThreshold="1" hitSoundID="GAM_bumper" playSymbol="true" /><FixedObject name="bumper3" classString="CircleBumper" position="266,306" useSymbol="true" symbolID="bumper3" radius="25" hitThreshold="1" hitSoundID="GAM_bumper" playSymbol="true" /><FixedObject name="bumper4" classString="CircleBumper" position="360,411" useSymbol="true" symbolID="bumper4" radius="25" hitThreshold="1" hitSoundID="GAM_bumper" playSymbol="true" /><FixedObject name="flipperTop" classString="PinballFlipper" position="85,340" useSymbol="true" symbolID="flipperSmall" symbolYScale="-100" autoRender="false" fillColor="0" rotation="0.785398163397448" forceMultiplier="0.5" radius1="12" radius2="8" flatLength="65" startAngle="0.785398163397448" endAngle="0" keyCode="37" hitSoundID="GAM_bounce" upSoundID="GAM_flipperUp" downSoundID="GAM_flipperDown" /><FixedObject name="flipperRight" classString="PinballFlipper" position="398,777" useSymbol="true" symbolID="flipperRight" autoRender="false" fillColor="0" rotation="2.70526034059121" forceMultiplier="0.5" radius1="12" radius2="8" flatLength="75" startAngle="2.70526034059121" endAngle="3.57792496658838" keyCode="39" hitSoundID="GAM_bounce" upSoundID="GAM_flipperUp" downSoundID="GAM_flipperDown" /><FixedObject name="flipperLeft" classString="PinballFlipper" position="212,777" useSymbol="true" symbolID="flipperLeft" symbolYScale="-100" autoRender="false" fillColor="0" rotation="0.436332312998582" forceMultiplier="0.5" radius1="12" radius2="8" flatLength="75" startAngle="0.436332312998582" endAngle="-0.436332312998582" keyCode="37" hitSoundID="GAM_bounce" upSoundID="GAM_flipperUp" downSoundID="GAM_flipperDown" /><Group classString="Group" name="lightsUpper" position="333,326"><Objects><Decal name="targets2" classString="Light" position="73,-195" symbolID="lightTargetsGroupRight" /><Decal name="rampJackpot" classString="Light" position="121,96" symbolID="lightRampJackpot" /><Decal name="rampReentry" classString="Light" position="163,129" symbolID="lightReentry" /><Decal name="targets1" classString="Light" position="-137,-169" symbolID="lightTargetsGroupLeft" /></Objects></Group><Decal name="decalMask" classString="Decal" position="0,0" symbolID="maskedFg1" /><FixedObject name="plunger" classString="Plunger" position="40,850" bounceFriction="0.7" useSymbol="true" symbolID="plunger" endLevel="1" width="40" height="100" pullSpeed="12" pullAmount="90" randomFactor="1" hitSoundID="GAM_plungerRelease" keyCode="40" /><FixedObject name="missionRamp" classString="Circle" position="390,435" lineColor="CC3300" transparent="true" radius="25" /><FixedObject name="jackpotRamp" classString="Rectangle" position="447,435" lineColor="CC3300" transparent="true" width="30" height="30" /><FixedObject name="reentryRamp" classString="Rectangle" position="491,463" lineColor="CC3300" transparent="true" width="40" height="40" /><FixedObject classString="Ramp" position="40,610" rotation="3.14159265358979" width="40" height="20" /></Objects></Engine>';
                case 1:
                    return '<Engine gravity="0,0.075" bounceFriction="0.4" slidingFriction="0"><Objects><Decal name="bg" classString="Decal" position="-10,0" symbolID="bg2" /><FixedObject name="hole" classString="Ring" position="280,470" symbolXScale="382.012352817308" symbolYScale="382.012352817308" fillColor="FF0000" transparent="true" rotation="0.698131700797732" innerRadius="200" outerRadius="270" fillAngle="1.74532925199433" /><Group classString="Group" position="514.5,509.5"><Objects><FixedObject classString="ConvexPolygon" position="-6.5,51.5" points="63,105|-63,104|-30,-30|3,-71|62,-40" /><FixedObject classString="ConvexPolygon" position="65.5,-59.5" points="-8,93|-60,34|-2,-97|4,-74" /><FixedObject classString="ConvexPolygon" position="0,-481" symbolYScale="-100" points="62,40|-53,15|-161,-37|68,-46" /><FixedObject classString="ConvexPolygon" position="71,-373" symbolYScale="-100" points="0,0|-44,0|-120,-92|-8,-93" /><FixedObject classString="ConvexPolygon" position="137.5,-281.5" symbolYScale="-100" points="-62,-14|-71,5|-111,-89|-68,-93" /></Objects></Group><Group classString="Tube" position="196,560.95" rotation="1.98967534727354" wallWidth="12"><Segments><Segment type="1" left="false" right="true" len="100" radius="-300" angle="0.872664625997165" /><Segment type="1" left="false" right="true" len="100" radius="-300" angle="0.279252680319093" /><Segment type="1" left="false" right="true" len="100" radius="-260" angle="3.14159265358979" /><Segment type="1" left="false" right="true" len="100" radius="-300" angle="0.279252680319093" /><Segment type="1" left="false" right="true" len="100" radius="-300" angle="0.872664625997165" /></Segments></Group><Group classString="Group" position="42.55,509.5"><Objects><FixedObject classString="ConvexPolygon" position="6.5,51.5" symbolXScale="-100" points="63,104|-63,105|-62,-40|-3,-71|30,-30" /><FixedObject classString="ConvexPolygon" position="-65.5,-59.5" symbolXScale="-100" points="60,34|8,93|-4,-74|2,-97" /><FixedObject classString="ConvexPolygon" position="0,-481" symbolXScale="-100" symbolYScale="-100" points="53,15|-62,40|-68,-46|161,-37" /><FixedObject classString="ConvexPolygon" position="-71,-373" symbolXScale="-100" symbolYScale="-100" points="44,0|0,0|8,-93|120,-92" /><FixedObject classString="ConvexPolygon" position="-137.5,-281.5" symbolXScale="-100" symbolYScale="-100" points="71,5|62,-14|68,-93|111,-89" /></Objects></Group><Group classString="Group" name="border" position="140,300"><Objects><FixedObject classString="Rectangle" position="138,-315" fillColor="CC" endLevel="10" width="636" height="30" /><FixedObject classString="Rectangle" position="-165,148" fillColor="CC" endLevel="10" width="30" height="896" /><FixedObject classString="Rectangle" position="441,148" fillColor="CC" endLevel="10" width="30" height="896" /><FixedObject classString="Rectangle" position="138,440" bounceFriction="1" slidingFriction="1" fillColor="CC" endLevel="10" width="636" height="30" /></Objects></Group><Tilt name="tilt" classString="Tilt" tiltAmount="2,5" position="-4.95,4.05" /><FixedObject classString="CircleBumper" position="280,362" useSymbol="true" symbolID="bumper5" radius="25" hitSoundID="GAM_bumper" playSymbol="true" /><FixedObject classString="CircleBumper" position="176,302" useSymbol="true" symbolID="bumper5" radius="25" hitSoundID="GAM_bumper" playSymbol="true" /><FixedObject classString="CircleBumper" position="176,183" useSymbol="true" symbolID="bumper5" radius="25" hitSoundID="GAM_bumper" playSymbol="true" /><FixedObject classString="CircleBumper" position="280,123" useSymbol="true" symbolID="bumper5" radius="25" hitSoundID="GAM_bumper" playSymbol="true" /><FixedObject classString="CircleBumper" position="383,183" useSymbol="true" symbolID="bumper5" radius="25" hitSoundID="GAM_bumper" playSymbol="true" /><FixedObject classString="CircleBumper" position="383,302" useSymbol="true" symbolID="bumper5" radius="25" hitSoundID="GAM_bumper" playSymbol="true" /><Group classString="Group" name="targets" position="113,196"><Objects><FixedObject name="target8" classString="Target" position="166.5,-170.5" fillColor="3366FF" width="30" height="30" light="light8" switchSoundID="GAM_sensorLaunch" /><FixedObject name="target9" classString="Target" position="232,-162" symbolXScale="-100" fillColor="3366FF" width="30" height="30" light="light9" switchSoundID="GAM_sensorLaunch" /><FixedObject name="target10" classString="Target" position="294,-137" symbolXScale="-100" fillColor="3366FF" width="30" height="30" light="light10" switchSoundID="GAM_sensorLaunch" /><FixedObject name="target11" classString="Target" position="351,-97" symbolXScale="-100" fillColor="3366FF" width="30" height="30" light="light11" switchSoundID="GAM_sensorLaunch" /><FixedObject name="target12" classString="Target" position="394,-39" symbolXScale="-100" fillColor="3366FF" width="30" height="30" light="light12" switchSoundID="GAM_sensorLaunch" /><FixedObject name="target13" classString="Target" position="422,27" symbolXScale="-100" fillColor="3366FF" width="30" height="30" light="light13" switchSoundID="GAM_sensorLaunch" /><FixedObject name="target14" classString="Target" position="429,91" symbolXScale="-100" fillColor="3366FF" width="30" height="30" light="light14" switchSoundID="GAM_sensorLaunch" /><FixedObject name="target1" classString="Target" position="-90.5,161.5" fillColor="3366FF" width="30" height="30" light="light1" switchSoundID="GAM_sensorLaunch" /><Decal name="light1" classString="Light" position="-91,162" symbolID="lightFirewall" symbolRotation="1.04196416375917" /><FixedObject name="target2" classString="Target" position="-98.5,91.5" fillColor="3366FF" width="30" height="30" light="light2" switchSoundID="GAM_sensorLaunch" /><Decal name="light2" classString="Light" position="-99,93" symbolID="lightFirewall" symbolRotation="1.04196416375917" /><FixedObject name="target3" classString="Target" position="-91.5,27.5" fillColor="3366FF" width="30" height="30" light="light3" switchSoundID="GAM_sensorLaunch" /><Decal name="light3" classString="Light" position="-92,29" symbolID="lightFirewall" symbolRotation="1.04196416375917" /><FixedObject name="target4" classString="Target" position="-63.5,-38.5" fillColor="3366FF" width="30" height="30" light="light4" switchSoundID="GAM_sensorLaunch" /><Decal name="light4" classString="Light" position="-64,-38" symbolID="lightFirewall" symbolRotation="1.04196416375917" /><FixedObject name="target5" classString="Target" position="-20.5,-96.5" fillColor="3366FF" width="30" height="30" light="light5" switchSoundID="GAM_sensorLaunch" /><Decal name="light5" classString="Light" position="-21,-96" symbolID="lightFirewall" symbolRotation="1.04196416375917" /><FixedObject name="target6" classString="Target" position="36.5,-136.5" fillColor="3366FF" width="30" height="30" light="light6" switchSoundID="GAM_sensorLaunch" /><Decal name="light6" classString="Light" position="37,-136" symbolID="lightFirewall" symbolRotation="1.04196416375917" /><FixedObject name="target7" classString="Target" position="98.5,-161.5" fillColor="3366FF" width="30" height="30" light="light7" switchSoundID="GAM_sensorLaunch" /><Decal name="light7" classString="Light" position="99,-161" symbolID="lightFirewall" symbolRotation="1.04196416375917" /><FixedObject name="target15" classString="Target" position="421,161" symbolXScale="-100" fillColor="3366FF" width="30" height="30" light="light15" switchSoundID="GAM_sensorLaunch" /><Decal name="light15" classString="Light" position="421,161" symbolID="lightFirewall" symbolRotation="-1.04196416375917" /><Decal name="light10" classString="Light" position="294,-137" symbolID="lightFirewall" symbolRotation="-1.04196416375917" /><Decal name="light11" classString="Light" position="351,-97" symbolID="lightFirewall" symbolRotation="-1.04196416375917" /><Decal name="light14" classString="Light" position="429,91" symbolID="lightFirewall" symbolRotation="-1.04196416375917" /><Decal name="light12" classString="Light" position="394,-39" symbolID="lightFirewall" symbolRotation="-1.04196416375917" /><Decal name="light13" classString="Light" position="422,27" symbolID="lightFirewall" symbolRotation="-1.04196416375917" /><Decal name="light9" classString="Light" position="232,-161" symbolID="lightFirewall" symbolRotation="-1.04196416375917" /><Decal name="light8" classString="Light" position="167,-171" symbolID="lightFirewall" symbolRotation="1.04196416375917" /></Objects></Group><FixedObject classString="Ramp" position="88,483" startLevel="4" endLevel="4" width="35" upperLevel="4" /><FixedObject name="hideOut" classString="HideOut" position="280,242" transparent="true" radius="2" holdSoundID="INT_error" releaseVelocity="0,0" /><FixedObject name="wall" classString="Ring" position="280,242" useSymbol="true" symbolID="firewall" innerRadius="40" outerRadius="80" fillAngle="5.846852994181" /><Group classString="Tube" position="87.75,489" fillColor="FF3366" startLevel="4" endLevel="4" rotation="3.14159265358979" width="35" wallWidth="5"><Segments><Segment type="0" left="true" right="true" len="20" radius="100" angle="0.785398163397448" /><Segment type="1" left="true" right="true" len="100" radius="-50" angle="1.22173047639603" /><Segment type="1" left="true" right="true" len="100" radius="-275" angle="0.785398163397448" /><Segment type="1" left="true" right="true" len="100" radius="80" angle="2.79252680319093" /><Segment type="1" left="true" right="true" len="100" radius="-150" angle="1.5707963267949" /><Segment type="1" left="true" right="true" len="100" radius="-250" angle="0.698131700797732" /></Segments></Group><Decal name="lightJackpot" classString="Light" position="280,243" symbolXScale="40" symbolYScale="40" symbolRotation="1.04196416375917" /><Decal name="lightEntry" classString="Light" position="510,34" symbolXScale="40" symbolYScale="40" symbolRotation="1.04196416375917" /><MovableObject name="ball" classString="MovableObject" position="544,26" useSymbol="true" symbolID="ball" radius="11" velocity="-6,1" level="4" /><Decal name="fg" classString="Decal" position="-10,0" symbolID="fg2" /><FixedObject name="flipperRight" classString="PinballFlipper" position="371,597" useSymbol="true" symbolID="flipperRight" symbolRotation="5.93411945678072" fillColor="0" rotation="2.70526034059121" forceMultiplier="0.5" radius1="12" radius2="8" flatLength="75" startAngle="2.70526034059121" endAngle="3.57792496658838" keyCode="39" hitSoundID="GAM_bounce" upSoundID="GAM_flipperUp" downSoundID="GAM_flipperDown" /><FixedObject name="flipperLeft" classString="PinballFlipper" position="185,597" useSymbol="true" symbolID="flipperLeft" symbolRotation="0.349065850398866" fillColor="0" rotation="0.436332312998582" forceMultiplier="0.5" radius1="12" radius2="8" flatLength="75" startAngle="0.436332312998582" endAngle="-0.436332312998582" keyCode="37" hitSoundID="GAM_bounce" upSoundID="GAM_flipperUp" downSoundID="GAM_flipperDown" /></Objects></Engine>'
            }
        },
        _getWidth: function() {
            var t = this.type;
            switch (t[1]) {
                case 0:
                    return 576;
                case 1:
                    return 566
            }
        },
        _getHeight: function() {
            var t = this.type;
            switch (t[1]) {
                case 0:
                    return 896;
                case 1:
                    return 670
            }
        },
        _getIsScrollEnforced: function() {
            var t = this.type;
            switch (t[1]) {
                case 0:
                    return !1;
                case 1:
                    return !0
            }
        },
        __class__: Pi
    });
    var Oi = function(t, e) {
        hi.call(this, t), this.type = e, this.framerate = this._getFramerate(), this.image = this._getImage(), this.width = this._getWidth(), this.height = this._getHeight(), this.frames = this._getFrames();
        var i = this._getReg();
        this.regX = i.x, this.regY = i.y, this.rotation = this._getRotation()
    };
    n["b10ffp.game.SymbolVo"] = Oi, Oi.__name__ = ["b10ffp", "game", "SymbolVo"], Oi.__super__ = hi, Oi.prototype = e(hi.prototype, {
        _getFramerate: function() {
            this.type;
            return this._factory.targetFramerate / 2
        },
        _getImage: function() {
            var t, e = this.type;
            switch (e[1]) {
                case 0:
                    t = "assets/game/Ball.png";
                    break;
                case 1:
                    t = "assets/game/Bg1_0.jpg";
                    break;
                case 2:
                    t = "assets/game/Bg2_0.jpg";
                    break;
                case 3:
                    t = "assets/game/Bumper1.png";
                    break;
                case 4:
                    t = "assets/game/Bumper2.png";
                    break;
                case 5:
                    t = "assets/game/Bumper3.png";
                    break;
                case 6:
                    t = "assets/game/Bumper4.png";
                    break;
                case 7:
                    t = "assets/game/Bumper5.png";
                    break;
                case 8:
                    t = "assets/game/CenterPin.png";
                    break;
                case 9:
                    t = "assets/game/Fg1.png";
                    break;
                case 10:
                    t = "assets/game/Fg2.png";
                    break;
                case 11:
                    t = "assets/game/Firewall.png";
                    break;
                case 12:
                    t = "assets/game/FlipperLeft.png";
                    break;
                case 13:
                    t = "assets/game/FlipperRight.png";
                    break;
                case 14:
                    t = "assets/game/FlipperSmall.png";
                    break;
                case 15:
                    t = "assets/game/Jackpot.png";
                    break;
                case 16:
                    t = "assets/game/Light.png";
                    break;
                case 17:
                    t = "assets/game/LightBumper.png";
                    break;
                case 18:
                    t = "assets/game/LightEntry.png";
                    break;
                case 19:
                    t = "assets/game/LightEntryGroup.png";
                    break;
                case 20:
                    t = "assets/game/LightFirewall.png";
                    break;
                case 21:
                    t = "assets/game/LightLaunch.png";
                    break;
                case 22:
                    t = "assets/game/LightRampJackpot.png";
                    break;
                case 23:
                    t = "assets/game/LightRampMission.png";
                    break;
                case 24:
                    t = "assets/game/LightReentry.png";
                    break;
                case 25:
                    t = "assets/game/LightTargetsGroupLeft.png";
                    break;
                case 26:
                    t = "assets/game/LightTargetsGroupRight.png";
                    break;
                case 27:
                    t = "assets/game/LightTargetsJackpot.png";
                    break;
                case 28:
                    t = null;
                    break;
                case 29:
                    t = "assets/game/Plunger.png";
                    break;
                case 30:
                    t = "assets/game/PolyBumperLeft.png";
                    break;
                case 31:
                    t = "assets/game/PolyBumperRight.png";
                    break;
                case 32:
                    t = "assets/game/PolyBumperTop.png";
                    break;
                case 33:
                    t = "assets/game/ReboundDoor.png"
            }
            return t
        },
        _getWidth: function() {
            var t = this.type;
            switch (t[1]) {
                case 0:
                    return 26;
                case 1:
                    return null;
                case 2:
                    return null;
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    return 100;
                case 8:
                    return 32;
                case 9:
                    return null;
                case 10:
                    return null;
                case 11:
                    return 170;
                case 12:
                case 13:
                    return 120;
                case 14:
                    return 120;
                case 15:
                    return 80;
                case 16:
                    return 30;
                case 17:
                    return 40;
                case 18:
                    return 30;
                case 19:
                    return 120;
                case 20:
                    return 30;
                case 21:
                    return 50;
                case 22:
                    return 50;
                case 23:
                    return 80;
                case 24:
                    return 50;
                case 25:
                    return 50;
                case 26:
                    return 100;
                case 27:
                    return 60;
                case 28:
                    return null;
                case 29:
                    return 50;
                case 30:
                    return 100;
                case 31:
                    return 100;
                case 32:
                    return 100;
                case 33:
                    return 50
            }
        },
        _getHeight: function() {
            var t = this.type;
            switch (t[1]) {
                case 12:
                case 13:
                    return 100;
                case 19:
                    return 80;
                case 21:
                    return 100;
                case 29:
                    return 120;
                case 30:
                    return 140;
                case 31:
                    return 140;
                case 32:
                    return 140;
                case 33:
                    return 100;
                default:
                    return this.width
            }
        },
        _getFrames: function() {
            var t = this.type;
            switch (t[1]) {
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    return 5;
                case 16:
                    return 5;
                case 17:
                    return 5;
                case 18:
                    return 5;
                case 19:
                    return 5;
                case 20:
                    return 5;
                case 21:
                    return 5;
                case 22:
                    return 5;
                case 23:
                    return 5;
                case 24:
                    return 5;
                case 25:
                    return 5;
                case 26:
                    return 5;
                case 27:
                    return 5;
                case 30:
                    return 5;
                case 31:
                    return 5;
                case 32:
                    return 5;
                default:
                    return 1
            }
        },
        _getReg: function() {
            var t = this.type;
            switch (t[1]) {
                case 12:
                case 13:
                    return {
                        x: 29,
                        y: 36
                    };
                case 14:
                    return {
                        x: 40,
                        y: 40
                    };
                case 29:
                    return {
                        x: 25,
                        y: 50
                    };
                case 30:
                    return {
                        x: 55,
                        y: 10
                    };
                case 31:
                    return {
                        x: 55,
                        y: 10
                    };
                case 32:
                    return {
                        x: 45,
                        y: 85
                    };
                case 33:
                    return {
                        x: 30,
                        y: 45
                    };
                default:
                    return {
                        x: Math.round(this.width / 2),
                        y: Math.round(this.height / 2)
                    }
            }
        },
        _getRotation: function() {
            var t = this.type;
            switch (t[1]) {
                case 12:
                case 13:
                    return -26;
                case 14:
                    return -45;
                default:
                    return 0
            }
        },
        _createSpriteSheet: function() {
            return new createjs.SpriteSheet({
                framerate: this.framerate,
                images: [this._assets.getAsset(this.image)],
                frames: {
                    width: this.width,
                    height: this.height,
                    count: this.frames,
                    regX: this.regX,
                    regY: this.regY
                },
                animations: {
                    idle: [0],
                    run: [0, this.frames],
                    bumper: [1, this.frames - 1, "idle"],
                    on: [0, 0, !1],
                    off: [1, this.frames - 1, "off"]
                }
            })
        },
        _createSprite: function() {
            var t = this.type;
            switch (t[1]) {
                case 0:
                    return new Mi;
                case 1:
                    return new Ri;
                default:
                    return null
            }
        },
        createDisplayObject: function() {
            var t = this._createSprite();
            if (null != t) return t;
            if (null == this.image) return new createjs.DisplayObject;
            if (this.frames <= 1) t = new createjs.Bitmap(this._assets.getAsset(this.image)), t.regX = this.regX, t.regY = this.regY;
            else {
                var e = new createjs.Sprite(this._createSpriteSheet(), "idle");
                t = e
            }
            return t.rotation = this.rotation, t.name = p.string(this.type), t.isSymbol = !0, t.snapToPixel = !0, t
        },
        __class__: Oi
    });
    var Mi = function() {
        createjs.Container.call(this), this.name = p.string(Ei.BALL), this.isSymbol = !0, this.addChild(this._bitmap10 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Ball.png"))), this.addChild(this._bitmap9 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Ball.png"))), this.addChild(this._bitmap8 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Ball.png"))), this.addChild(this._bitmap7 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Ball.png"))), this.addChild(this._bitmap6 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Ball.png"))), this.addChild(this._bitmap5 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Ball.png"))), this.addChild(this._bitmap4 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Ball.png"))), this.addChild(this._bitmap3 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Ball.png"))), this.addChild(this._bitmap2 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Ball.png"))), this.addChild(this._bitmap1 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Ball.png"))), this._bitmap1.isSymbol = !0, this._bitmap2.isSymbol = !0, this._bitmap3.isSymbol = !0, this._bitmap4.isSymbol = !0, this._bitmap5.isSymbol = !0, this._bitmap6.isSymbol = !0, this._bitmap7.isSymbol = !0, this._bitmap8.isSymbol = !0, this._bitmap9.isSymbol = !0, this._bitmap10.isSymbol = !0, this._bitmap2.compositeOperation = this._bitmap3.compositeOperation = this._bitmap4.compositeOperation = this._bitmap5.compositeOperation = this._bitmap6.compositeOperation = this._bitmap7.compositeOperation = this._bitmap8.compositeOperation = this._bitmap9.compositeOperation = this._bitmap10.compositeOperation = "lighter", this._bitmap1.x = -13, this._bitmap1.y = -13, this.blur(0, 0, 0, 0, 0)
    };
    n["b10ffp.game.symbols.Ball"] = Mi, Mi.__name__ = ["b10ffp", "game", "symbols", "Ball"], Mi.__super__ = createjs.Container, Mi.prototype = e(createjs.Container.prototype, {
        blur: function(t, e, i, s, n) {
            this._bitmap2.alpha = .5 * t, this._bitmap3.alpha = .45 * t, this._bitmap4.alpha = .4 * t, this._bitmap5.alpha = .35 * t, this._bitmap6.alpha = .3 * t, this._bitmap7.alpha = .25 * t, this._bitmap8.alpha = .2 * t, this._bitmap9.alpha = .15 * t, this._bitmap10.alpha = .1 * t;
            var r = Math.max(Math.min(-s / 10, 20), -20),
                o = Math.max(Math.min(-n / 10, 20), -20);
            this._bitmap2.x = 2 * r - 13, this._bitmap2.y = 2 * o - 13, this._bitmap3.x = 3 * r - 13, this._bitmap3.y = 3 * o - 13, this._bitmap4.x = 4 * r - 13, this._bitmap4.y = 4 * o - 13, this._bitmap5.x = 5 * r - 13, this._bitmap5.y = 5 * o - 13, this._bitmap6.x = 6 * r - 13, this._bitmap6.y = 6 * o - 13, this._bitmap7.x = 7 * r - 13, this._bitmap7.y = 7 * o - 13, this._bitmap8.x = 8 * r - 13, this._bitmap8.y = 8 * o - 13, this._bitmap9.x = 9 * r - 13, this._bitmap9.y = 9 * o - 13, this._bitmap10.x = 10 * r - 13, this._bitmap10.y = 10 * o - 13
        },
        __class__: Mi
    });
    var Ri = function() {
        createjs.Container.call(this), this.name = p.string(Ei.BG_1), this.isSymbol = !0, this.addChild(this._bitmapDormant = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Bg1_0.jpg"))), this.addChild(this._bitmapMission1 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Bg1_1.jpg"))), this.addChild(this._bitmapMission2 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Bg1_2.jpg"))), this.addChild(this._bitmapMission3 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Bg1_3.jpg"))), this.addChild(this._bitmapMission4 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Bg1_4.jpg"))), this.addChild(this._bitmapOver = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Bg1.png"))), this.addChild(this._bgFg = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Bg1_fg.png"))), this.addChild(this._fg1 = new createjs.Bitmap(_i.loadQueue.getResult("assets/game/Fg1.png"))), this._bitmapDormant.isSymbol = !0, this._bitmapMission1.isSymbol = !0, this._bitmapMission2.isSymbol = !0, this._bitmapMission3.isSymbol = !0, this._bitmapMission4.isSymbol = !0, this._bitmapOver.isSymbol = !0, this._bgFg.isSymbol = !0, this._fg1.isSymbol = !0, this.cache(0, 0, 576, 896)
    };
    n["b10ffp.game.symbols.Bg1"] = Ri, Ri.__name__ = ["b10ffp", "game", "symbols", "Bg1"], Ri.__super__ = createjs.Container, Ri.prototype = e(createjs.Container.prototype, {
        setMission: function(t) {
            if (this._prevMission != t) {
                switch (this._prevMission = t, this._bitmapDormant.visible = !1, this._bitmapMission1.visible = !1, this._bitmapMission2.visible = !1, this._bitmapMission3.visible = !1, this._bitmapMission4.visible = !1, t[1]) {
                    case 1:
                        this._bitmapMission1.visible = !0;
                        break;
                    case 2:
                        this._bitmapMission2.visible = !0;
                        break;
                    case 3:
                        this._bitmapMission3.visible = !0;
                        break;
                    case 4:
                        this._bitmapMission4.visible = !0;
                        break;
                    default:
                        this._bitmapDormant.visible = !0
                }
                this.updateCache()
            }
        },
        setIsUpper: function(t) {
            this._fg1.visible != t && (this._fg1.visible = t, this.updateCache())
        },
        __class__: Ri
    });
    var Bi = function(t, e, i, s) {
        null == s && (s = !0), null == i && (i = 100), null == e && (e = 100), this._assets = _n.__cast(t.assets, _i), this._factory = _n.__cast(t.factory, ci), this._session = _n.__cast(t.get_session(), fi), Ve.call(this, t, e, i, s)
    };
    n["b10ffp.gui.AGuiEntity"] = Bi, Bi.__name__ = ["b10ffp", "gui", "AGuiEntity"], Bi.__super__ = Ve, Bi.prototype = e(Ve.prototype, {
        __class__: Bi
    });
    var Di = function(t, e, i) {
        null == i && (i = 0), null == e && (e = 0), this._session = t.get_session();
        var n = new Qe(t),
            r = new Qe(t);
        B.call(this, t, n, r, 250, 100, e, i, null, (Mn = this._session.sponsor, s(Mn, Mn.onBrandingClick)))
    };
    n["b10ffp.gui.BrandingButton"] = Di, Di.__name__ = ["b10ffp", "gui", "BrandingButton"], Di.__super__ = B, Di.prototype = e(B.prototype, {
        _init: function() {
            B.prototype._init.call(this);
            var t = window.document.createElement("img");
            t.crossOrigin = "anonymous", t.src = this._session.sponsor.getBrandingUrl();
            var e = new createjs.Bitmap(t);
            this.get_view().context.addChild(e)
        },
        __class__: Di
    });
    var ki = function(t, e, i, s) {
        null == e && (e = 1), this._scale = e, Bi.call(this, t, 192, 192, !1), this.setPosition(0 | i, 0 | s)
    };
    n["b10ffp.gui.Burst"] = ki, ki.__name__ = ["b10ffp", "gui", "Burst"], ki.__super__ = Bi, ki.prototype = e(Bi.prototype, {
        _init: function() {
            Bi.prototype._init.call(this), this._context.scaleX = this._scale * (Math.random() < .5 ? -1 : 1), this._context.scaleY = this._scale * (Math.random() < .5 ? -1 : 1), this._context.compositeOperation = "lighter", this._context.mouseEnabled = !1, this._context.mouseChildren = !1, this._sprite = new createjs.Sprite(this._createSpriteSheet(), 0), this._context.addChild(this._sprite), this._drop = 0
        },
        _updater: function(t) {
            null == t && (t = 0), Bi.prototype._updater.call(this, t), this._sprite.gotoAndStop(this._updates - 1), this._updates >= 16 && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer())), this._drop += Math.random(), this._context.y += this._drop
        },
        _createSpriteSheet: function() {
            return new createjs.SpriteSheet({
                framerate: this._factory.targetFramerate,
                images: [this._assets.getAsset("assets/gui/Burst.jpg")],
                frames: {
                    width: 192,
                    height: 192,
                    count: 16,
                    regX: 96,
                    regY: 96
                }
            })
        },
        __class__: ki
    });
    var Li = function(t, e, i, s, n, r, o, a, l) {
        null == n && (n = 0), null == s && (s = 0), null == i && (i = !1), this._kernel = t, this._isWobbling = i, B.call(this, t, this._createView(e, !1), this._createView(e, !0), this._getSize(e), this._getSize(e), s, n, r, o, a, l)
    };
    n["b10ffp.gui.Button"] = Li, Li.__name__ = ["b10ffp", "gui", "Button"], Li.__super__ = B, Li.prototype = e(B.prototype, {
        _createView: function(t, e) {
            null == e && (e = !1);
            var i = new createjs.Container;
            return i.addChild(new createjs.Bitmap(this._kernel.assets.getAsset(this._getUrl(t, e)))), new Xe(this._kernel, i)
        },
        _getUrl: function(t, e) {
            switch (null == e && (e = !1), t[1]) {
                case 0:
                    return e ? "assets/overlay/ButtonAudioOver.png" : "assets/overlay/ButtonAudioUp.png";
                case 1:
                    return e ? "assets/overlay/ButtonCrossOver.png" : "assets/overlay/ButtonCrossUp.png";
                case 2:
                    return e ? "assets/overlay/ButtonFullscreenOver.png" : "assets/overlay/ButtonFullscreenUp.png";
                case 3:
                    return e ? "assets/overlay/ButtonInstructionsOver.png" : "assets/overlay/ButtonInstructionsUp.png";
                case 4:
                    return e ? "assets/overlay/ButtonLeaderboardOver.png" : "assets/overlay/ButtonLeaderboardUp.png";
                case 5:
                    return e ? "assets/overlay/ButtonMenuOver.png" : "assets/overlay/ButtonMenuUp.png";
                case 6:
                    return e ? "assets/overlay/ButtonNextOver.png" : "assets/overlay/ButtonNextUp.png";
                case 7:
                    return e ? "assets/overlay/ButtonPreviousOver.png" : "assets/overlay/ButtonPreviousUp.png";
                case 8:
                    return e ? "assets/overlay/ButtonRestartOver.png" : "assets/overlay/ButtonRestartUp.png";
                case 9:
                    return e ? "assets/overlay/ButtonStartOver.png" : "assets/overlay/ButtonStartUp.png";
                case 10:
                    return e ? "assets/overlay/ButtonTickOver.png" : "assets/overlay/ButtonTickUp.png";
                case 11:
                    return e ? "assets/overlay/ButtonWebsiteOver.png" : "assets/overlay/ButtonWebsiteUp.png"
            }
        },
        _getSize: function(t) {
            switch (t[1]) {
                case 0:
                    return 70;
                case 1:
                    return 110;
                case 2:
                    return 70;
                case 3:
                    return 70;
                case 4:
                    return 70;
                case 5:
                    return 70;
                case 6:
                    return 70;
                case 7:
                    return 70;
                case 8:
                    return 110;
                case 9:
                    return 110;
                case 10:
                    return 110;
                case 11:
                    return 70
            }
        },
        _init: function() {
            B.prototype._init.call(this), this._scale = 0, this.bounce = 1
        },
        _updater: function(t) {
            null == t && (t = 0), B.prototype._updater.call(this, t);
            var e = Math.sin(this._age / 100) * (1.05 - this.bounce) * .25;
            this.bounce *= .8, this.bounce = this._tools.limit(this.bounce, this._isWobbling ? .125 : 0, 1), this.isOver && (this.bounce = 1, e += .1), this._scale = this._tools.ease(0, e, this.bounce);
            var i = this.get_view()._container;
            i.x = i.regX = .5 * this.width | 0, i.y = i.regY = .5 * this.height | 0, i.scaleX = i.scaleY = 1 + this._scale
        },
        onRollOver: function() {
            B.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Ke.INTERFACE, 0, 0, 1)
        },
        __class__: Li
    });
    var Ui = function(t, e, i, s, n, r, o, a) {
        null == s && (s = 0), null == i && (i = 0), null == e && (e = ""), this._title = e.toUpperCase(), this._assets = t.assets, B.call(this, t, this._assets.get_buttonTextUp(), this._assets.get_buttonTextOver(), 150, 45, i, s, n, r, o, a)
    };
    n["b10ffp.gui.ButtonText"] = Ui, Ui.__name__ = ["b10ffp", "gui", "ButtonText"], Ui.__super__ = B, Ui.prototype = e(B.prototype, {
        _init: function() {
            B.prototype._init.call(this), this._scale = 0, this.bounce = 1;
            var t = 5,
                e = 14,
                i = 140,
                s = 30,
                n = this._kernel.factory.createTextStyle(ai.BUTTON);
            this._textUp = new Ji(this._kernel, i, s, this._title, n), this._textOver = new Ji(this._kernel, i, s, this._title, n), this._textUp.set_x(this._textOver.set_x(t)), this._textUp.set_y(this._textOver.set_y(e)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
        },
        _updater: function(t) {
            null == t && (t = 0), B.prototype._updater.call(this, t);
            var e = Math.sin(this._age / 100) * (1.05 - this.bounce) * .25;
            this.bounce *= .8, this.bounce = this._tools.limit(this.bounce, 0, 1), this.isOver && (this.bounce = 1, e += .1), this._scale = this._tools.ease(0, e, this.bounce);
            var i = this.get_view()._container;
            i.x = i.regX = .5 * this.width | 0, i.y = i.regY = .5 * this.height | 0, i.scaleX = i.scaleY = 1 + this._scale
        },
        __class__: Ui
    });
    var Ni = n["b10ffp.gui.EButton"] = {
        __ename__: ["b10ffp", "gui", "EButton"],
        __constructs__: ["AUDIO", "CROSS", "FULLSCREEN", "INSTRUCTIONS", "LEADERBOARD", "MENU", "NEXT", "PREVIOUS", "RESTART", "START", "TICK", "WEBSITE"]
    };
    Ni.AUDIO = ["AUDIO", 0], Ni.AUDIO.toString = r, Ni.AUDIO.__enum__ = Ni, Ni.CROSS = ["CROSS", 1], Ni.CROSS.toString = r, Ni.CROSS.__enum__ = Ni, Ni.FULLSCREEN = ["FULLSCREEN", 2], Ni.FULLSCREEN.toString = r, Ni.FULLSCREEN.__enum__ = Ni, Ni.INSTRUCTIONS = ["INSTRUCTIONS", 3], Ni.INSTRUCTIONS.toString = r, Ni.INSTRUCTIONS.__enum__ = Ni, Ni.LEADERBOARD = ["LEADERBOARD", 4], Ni.LEADERBOARD.toString = r, Ni.LEADERBOARD.__enum__ = Ni, Ni.MENU = ["MENU", 5], Ni.MENU.toString = r, Ni.MENU.__enum__ = Ni, Ni.NEXT = ["NEXT", 6], Ni.NEXT.toString = r, Ni.NEXT.__enum__ = Ni, Ni.PREVIOUS = ["PREVIOUS", 7], Ni.PREVIOUS.toString = r, Ni.PREVIOUS.__enum__ = Ni, Ni.RESTART = ["RESTART", 8], Ni.RESTART.toString = r, Ni.RESTART.__enum__ = Ni, Ni.START = ["START", 9], Ni.START.toString = r, Ni.START.__enum__ = Ni, Ni.TICK = ["TICK", 10], Ni.TICK.toString = r, Ni.TICK.__enum__ = Ni, Ni.WEBSITE = ["WEBSITE", 11], Ni.WEBSITE.toString = r, Ni.WEBSITE.__enum__ = Ni;
    var Fi = n["b10ffp.gui.EQuestion"] = {
        __ename__: ["b10ffp", "gui", "EQuestion"],
        __constructs__: ["QUESTION_1", "QUESTION_2", "QUESTION_3", "QUESTION_4", "QUESTION_5", "QUESTION_6", "QUESTION_7", "QUESTION_8", "QUESTION_9", "QUESTION_10"]
    };
    Fi.QUESTION_1 = ["QUESTION_1", 0], Fi.QUESTION_1.toString = r, Fi.QUESTION_1.__enum__ = Fi, Fi.QUESTION_2 = ["QUESTION_2", 1], Fi.QUESTION_2.toString = r, Fi.QUESTION_2.__enum__ = Fi, Fi.QUESTION_3 = ["QUESTION_3", 2], Fi.QUESTION_3.toString = r, Fi.QUESTION_3.__enum__ = Fi, Fi.QUESTION_4 = ["QUESTION_4", 3], Fi.QUESTION_4.toString = r, Fi.QUESTION_4.__enum__ = Fi, Fi.QUESTION_5 = ["QUESTION_5", 4], Fi.QUESTION_5.toString = r, Fi.QUESTION_5.__enum__ = Fi, Fi.QUESTION_6 = ["QUESTION_6", 5], Fi.QUESTION_6.toString = r, Fi.QUESTION_6.__enum__ = Fi, Fi.QUESTION_7 = ["QUESTION_7", 6], Fi.QUESTION_7.toString = r, Fi.QUESTION_7.__enum__ = Fi, Fi.QUESTION_8 = ["QUESTION_8", 7], Fi.QUESTION_8.toString = r, Fi.QUESTION_8.__enum__ = Fi, Fi.QUESTION_9 = ["QUESTION_9", 8], Fi.QUESTION_9.toString = r, Fi.QUESTION_9.__enum__ = Fi, Fi.QUESTION_10 = ["QUESTION_10", 9], Fi.QUESTION_10.toString = r, Fi.QUESTION_10.__enum__ = Fi;
    var Gi = function(t) {
        Bi.call(this, t, 205, 85, !1)
    };
    n["b10ffp.gui.Hud"] = Gi, Gi.__name__ = ["b10ffp", "gui", "Hud"], Gi.__super__ = Bi, Gi.prototype = e(Bi.prototype, {
        _init: function() {
            Bi.prototype._init.call(this), this._scoreActual = this._scoreDisplay = 0, this._multiplierActual = 0, this._livesActual = 0, this.addEntity(this._panel = new Bi(this._kernel), null, !0, 1), this._panel.set_y(-100);
            var t = new ji(this._kernel, this._assets.getAsset("assets/gui/Hud.png"));
            this._panel.addEntity(t, null, !0, 9), this._panel.addEntity(this._scoreValue = new Ji(this._kernel, 100, 40, "", this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_SCORE)), null, !0, 10), this._scoreValue.setPosition(84, 36), this._panel.addEntity(this._multiplierValue = new Ji(this._kernel, 20, 20, "", this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_MULTIPLIER)), null, !0, 10), this._multiplierValue.setPosition(30, 30);
            var e = new createjs.SpriteSheet({
                images: [this._assets.getAsset("assets/gui/HudLives.png")],
                frames: {
                    width: 100,
                    height: 15,
                    count: 7
                }
            });
            t._context.addChild(this._lives = new createjs.Sprite(e, 2)), this._lives.x = 85, this._lives.y = 20, this.configureScore(this._scoreDisplay), this.configureMultiplier(1), this.configureLives(3), this._helpOverlay = new ji(this._kernel, this._assets.getAsset(this._kernel.system.isDesktop ? "assets/gui/InstructionsPage1A.png" : "assets/gui/InstructionsPage1B.png"), null, 0), this._helpOverlay.set_y(50), this.addEntity(this._helpOverlay, null, !0, 1), this._isHelpOverlayVisible = !1
        },
        _updater: function(t) {
            null == t && (t = 0), Bi.prototype._updater.call(this, t), this.get_view().isVisible && (this._scoreDisplay = Math.round(.5 * this._scoreDisplay + .5 * this._scoreActual), this._scoreValue.set_text(p.string(this._scoreDisplay)), this._helpOverlay.set_alpha(this._tools.ease(this._helpOverlay.get_alpha(), this._isHelpOverlayVisible ? 1 : 0, this._isHelpOverlayVisible ? .1 : .5)), this._helpOverlay.get_view().set_isVisible(this._helpOverlay.get_alpha() > .1))
        },
        configureScore: function(t) {
            var e = this;
            0 == this._scoreActual && t > 0 && null == this._panelTweezer && this.addEntity(this._panelTweezer = new bn(this._kernel, function(t) {
                e._panel.set_y(t)
            }, -100, 0, 0, 2e3, null, fn.EASE_OUT, mn.ELASTIC())), this._scoreActual = t
        },
        configureMultiplier: function(t) {
            if (t != this._multiplierActual && (this._multiplierActual = t, this._multiplierValue.set_text(p.string("x" + t)), this._multiplierActual > 1)) {
                var e = new ki(this._kernel, t / 8 + .5, this._multiplierValue.x + this._multiplierValue.width / 2, this._multiplierValue.y + this._multiplierValue.height / 2);
                this.addEntity(e, null, !0, 100)
            }
        },
        configureLives: function(t) {
            t != this._livesActual && (this._livesActual = t, this._lives.gotoAndStop(this._livesActual))
        },
        configureHelpOverlay: function(t) {
            this._isHelpOverlayVisible = t
        },
        __class__: Gi
    });
    var ji = function(t, e, i, s) {
        null == s && (s = 1), null == i && (i = !1), this._imageElement = e, this._isAdd = i, Bi.call(this, t, null, null, !1), this.set_alpha(s)
    };
    n["b10ffp.gui.Image"] = ji, ji.__name__ = ["b10ffp", "gui", "Image"], ji.__super__ = Bi, ji.prototype = e(Bi.prototype, {
        _init: function() {
            Bi.prototype._init.call(this), this._context.mouseEnabled = !1, this._bitmap = new createjs.Bitmap(this._imageElement), this._context.addChild(this._bitmap), this._bitmap.compositeOperation = this._isAdd ? "lighter" : "source-over"
        },
        configure: function(t, e) {
            null == e && (e = !1), this._isAdd = e, this._bitmap.image = t, this._bitmap.compositeOperation = this._isAdd ? "lighter" : "source-over"
        },
        get_alpha: function() {
            return this._bitmap.alpha
        },
        set_alpha: function(t) {
            return this._bitmap.alpha = t
        },
        __class__: ji
    });
    var Hi = function(t) {
        Bi.call(this, t, 450, 200, !1)
    };
    n["b10ffp.gui.Logo"] = Hi, Hi.__name__ = ["b10ffp", "gui", "Logo"], Hi.__super__ = Bi, Hi.prototype = e(Bi.prototype, {
        _init: function() {
            Bi.prototype._init.call(this), this.addEntity(this._container = new Bi(this._kernel), null, !0, 1), this._container.addEntity(this._image = new ji(this._kernel, this._assets.getAsset("assets/gui/Logo.png")), null, !0, 1), this._container.addEntity(this._shine = new zi(this._kernel, this._assets.getAsset("assets/gui/LogoShine.png"), 2), null, !0, 2)
        },
        _updater: function(t) {
            null == t && (t = 0), Bi.prototype._updater.call(this, t), this._container.set_x(8 * Math.sin(this._age / 1e3)), this._container.set_y(5 * Math.sin(this._age / 600)), Math.random() < .125 && this._createBurst(.5 * Math.random() + .5, .2 * this.width + Math.random() * this.width * .6, .2 * this.height + Math.random() * this.height * .6)
        },
        _createBurst: function(t, e, i) {
            var s = new ki(this._kernel, t, e, i);
            return this.addEntity(s, null, !0, 100), s
        },
        __class__: Hi
    });
    var Yi = function(t) {
        this._assetManager = _n.__cast(t.assets, _i), this._buttonSize = 50, Ne.call(this, t, this._buttonSize, this._buttonSize, null, null, null, null, null, null, null, this._assetManager.overlayPauseUp, this._assetManager.overlayPauseOver, null, null, 4, 0, .75)
    };
    n["b10ffp.gui.Overlay"] = Yi, Yi.__name__ = ["b10ffp", "gui", "Overlay"], Yi.__super__ = Ne, Yi.prototype = e(Ne.prototype, {
        _init: function() {
            Ne.prototype._init.call(this);
            var t = this._kernel.factory.width - this._buttonSize - 10,
                e = 10;
            this.positionButton(ni.PAUSE, t, e), this.positionButton(ni.UNPAUSE, this._buttonSize, e), this.positionButton(ni.BACK, -this._buttonSize, e), this.positionButton(ni.MUTE, -this._buttonSize, e), this.positionButton(ni.UNMUTE, -this._buttonSize, e), this._flashView.set_isVisible(!0), this.set_pauseEntity(new Xi(this._kernel))
        },
        flash: function(t, e, i, s) {
            null == s && (s = 16777215), null == i && (i = 1), null == e && (e = !0), this._flashContext.compositeOperation = 0 == s ? "source-over" : "lighter", Ne.prototype.flash.call(this, t, e, i, s)
        },
        __class__: Yi
    });
    var Xi = function(t) {
        li.call(this, t)
    };
    n["b10ffp.gui.PauseMenu"] = Xi, Xi.__name__ = ["b10ffp", "gui", "PauseMenu"], Xi.__super__ = li, Xi.prototype = e(li.prototype, {
        _init: function() {
            var t = this;
            li.prototype._init.call(this), this._session.sponsor.getIsBrandingEnabled() ? this.addEntity(new Di(this._kernel, 40, 360), null, !0, 0) : this.addEntity(new ji(this._kernel, this._assets.getAsset("assets/gui/Pause.png")), null, !0, 0);
            var e = this._kernel.factory.width / 2,
                i = this._kernel.factory.height / 2;
            this.addEntity(new Li(this._kernel, Ni.START, !0, e - 55, i - 120, null, function() {
                t._kernel.overlay.activateButton(ni.UNPAUSE)
            }), Je.ALWAYS, !0, 1), this.addEntity(new Li(this._kernel, Ni.AUDIO, null, e - 70 - 30 - 10, i, null, function() {
                t._kernel.overlay._wasMute = !t._kernel.overlay._wasMute, t._kernel.overlay.activateButton(ni.UNPAUSE)
            }), Je.ALWAYS, !0, 1), this.addEntity(this._fullScreenButton = new Li(this._kernel, Ni.FULLSCREEN, null, e - 35, i, null, function() {
                t._stageClick(), t._kernel.overlay.activateButton(ni.UNPAUSE)
            }), Je.ALWAYS, !0, 1), this.addEntity(new Li(this._kernel, Ni.MENU, null, e + 40, i, null, function() {
                t._kernel.overlay.activateButton(ni.UNPAUSE), t._kernel.scenes.back()
            }), Je.DEFEND, !0, 1), this.addEntity(new Li(this._kernel, Ni.INSTRUCTIONS, null, e + 40, i, null, function() {
                t._kernel.overlay.activateButton(ni.UNPAUSE), t._pressInstructions()
            }), Je.STANDARD, !0, 1), this._kernel._stage.addEventListener("click", s(this, this._stageClick), !0)
        },
        _pressInstructions: function() {
            try {
                this._kernel.scenes.get_scene()._pressInstructions()
            } catch (t) {
                t instanceof hn && (t = t.val), this._kernel.scenes.setScene(ri.INSTRUCTIONS)
            }
        },
        _updater: function(t) {
            if (null == t && (t = 0), li.prototype._updater.call(this, t), this._isFullScreenClicked = !1, this._prevIsKernelActive != this._kernel.isActive)
                for (var e = 0, i = this.getEntitiesByClass(Ui); e < i.length;) {
                    var s = i[e];
                    ++e, s.bounce = Math.random()
                }
            this._prevIsKernelActive = this._kernel.isActive
        },
        _stageClick: function(t) {
            this._kernel.isActive || this._isFullScreenClicked || this._fullScreenButton.isOver && (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen(), this._isFullScreenClicked = !0, null != t && t.stopPropagation())
        },
        __class__: Xi
    });
    var Vi = function(t, e) {
        this._callback = e, Bi.call(this, t, t.factory.width, t.factory.height, !1)
    };
    n["b10ffp.gui.Question"] = Vi, Vi.__name__ = ["b10ffp", "gui", "Question"], Vi.__super__ = Bi, Vi.prototype = e(Bi.prototype, {
        _init: function() {
            var t = this;
            Bi.prototype._init.call(this);
            var e = 150,
                i = m.createEnumIndex(Fi, this._session.cache.seed++ % m.getEnumConstructs(Fi).length);
            this._vo = new Wi(this._kernel, i), this.addEntity(new ji(this._kernel, this._assets.getAsset("assets/gui/Question.png")), null, !0, 5), this._title = new Ji(this._kernel, 300, 100, p.string(this._kernel.getConfig("gui.scenes.game.questions.title")).toUpperCase(), this._factory.createTextStyle(this._factory.TEXTSTYLE_QUESTION_TITLE)), this._title.setPosition((this._kernel.factory.width - this._title.width) / 2, e), this.addEntity(this._title, null, !0, 10), this._question = new Ji(this._kernel, 300, 300, this._vo.question.toUpperCase(), this._factory.createTextStyle(this._factory.TEXTSTYLE_QUESTION_QUESTION), !0, !1, 1), this._question.setPosition((this._kernel.factory.width - this._question.width) / 2, e + 80), this.addEntity(this._question, null, !0, 10), this._fact = new Ji(this._kernel, 300, 300, this._vo.fact.toUpperCase(), this._factory.createTextStyle(this._factory.TEXTSTYLE_QUESTION_FACT), !0, !1, 1), this._fact.setPosition((this._kernel.factory.width - this._fact.width) / 2, e + 80), this.addEntity(this._buttonTrue = new Li(this._kernel, Ni.TICK, this._session.get_isTester() && this._vo.isTrue, this._factory.width / 3 - 55, 500, ti.LEFT, function(t, e) {
                return function() {
                    t(e)
                }
            }(s(this, this._showAnswer), !0)), null, !0, 10), this.addEntity(this._buttonFalse = new Li(this._kernel, Ni.CROSS, this._session.get_isTester() && !this._vo.isTrue, 2 * this._factory.width / 3 - 55, 500, ti.RIGHT, function(t, e) {
                return function() {
                    t(e)
                }
            }(s(this, this._showAnswer), !1)), null, !0, 10), this.addEntity(new bn(this._kernel, function(e) {
                t._buttonTrue.set_y(e)
            }, this._factory.height, this._buttonTrue.y, 2e3, 2e3, null, fn.EASE_OUT, mn.ELASTIC())), this.addEntity(new bn(this._kernel, function(e) {
                t._buttonFalse.set_y(e)
            }, this._factory.height, this._buttonFalse.y, 2200, 2e3, null, fn.EASE_OUT, mn.ELASTIC())), this.addEntity(new bn(this._kernel, function(e) {
                t.set_x(e)
            }, this._factory.width, this.x, 1e3, 3e3, null, fn.EASE_OUT, mn.ELASTIC()))
        },
        _showAnswer: function(t) {
            var e = this;
            if (!(this._isAnswered || this._age < 3e3)) {
                this._isAnswered = !0;
                for (var i = t == this._vo.isTrue, n = 0, r = this.getEntitiesByClass(bn); n < r.length;) {
                    var o = r[n];
                    ++n, o.remove()
                }
                this.addEntity(new bn(this._kernel, function(t) {
                    e._buttonTrue.set_y(t)
                }, this._buttonTrue.y, this._factory.height, 0, 500, null, fn.EASE_IN, mn.BACK())), this.addEntity(new bn(this._kernel, function(t) {
                    e._buttonFalse.set_y(t)
                }, this._buttonFalse.y, this._factory.height, 50, 500, null, fn.EASE_IN, mn.BACK())), this.addEntity(new bn(this._kernel, function(t) {
                    e.set_x(t)
                }, this.x, -this._factory.width, i ? 500 : 4e3, 500, null, fn.EASE_IN, mn.BACK(), s(this, this.dispose))), this._title.textStyle.color = 16777215, this._title.set_text(p.string(this._kernel.getConfig(i ? "gui.scenes.game.questions.correct" : "gui.scenes.game.questions.incorrect")).toUpperCase()), this.removeEntity(this._question, null, !0), i || this.addEntity(this._fact, null, !0, 11), this._kernel.audio.start(i ? "Star1" : "TargetsComplete", Ke.INTERFACE, 0, 0, 1), this._callback(i)
            }
        },
        __class__: Vi
    });
    var Wi = function(t, e) {
        hi.call(this, t), this.type = e, this.question = this._getQuestion(), this.fact = this._getFact(), this.isTrue = this._getIsTrue()
    };
    n["b10ffp.gui.QuestionVo"] = Wi, Wi.__name__ = ["b10ffp", "gui", "QuestionVo"], Wi.__super__ = hi, Wi.prototype = e(hi.prototype, {
        _getQuestion: function() {
            return p.string(this._kernel.getConfig(function(t) {
                var e, i = t.type;
                return e = function() {
                    var t;
                    switch (i[1]) {
                        case 0:
                            t = "gui.scenes.game.questions.question1";
                            break;
                        case 1:
                            t = "gui.scenes.game.questions.question2";
                            break;
                        case 2:
                            t = "gui.scenes.game.questions.question3";
                            break;
                        case 3:
                            t = "gui.scenes.game.questions.question4";
                            break;
                        case 4:
                            t = "gui.scenes.game.questions.question5";
                            break;
                        case 5:
                            t = "gui.scenes.game.questions.question6";
                            break;
                        case 6:
                            t = "gui.scenes.game.questions.question7";
                            break;
                        case 7:
                            t = "gui.scenes.game.questions.question8";
                            break;
                        case 8:
                            t = "gui.scenes.game.questions.question9";
                            break;
                        case 9:
                            t = "gui.scenes.game.questions.question10"
                    }
                    return t
                }(t)
            }(this)))
        },
        _getFact: function() {
            return p.string(this._kernel.getConfig(function(t) {
                var e, i = t.type;
                return e = function() {
                    var t;
                    switch (i[1]) {
                        case 0:
                            t = "gui.scenes.game.questions.fact1";
                            break;
                        case 1:
                            t = "gui.scenes.game.questions.fact2";
                            break;
                        case 2:
                            t = "gui.scenes.game.questions.fact3";
                            break;
                        case 3:
                            t = "gui.scenes.game.questions.fact4";
                            break;
                        case 4:
                            t = "gui.scenes.game.questions.fact5";
                            break;
                        case 5:
                            t = "gui.scenes.game.questions.fact6";
                            break;
                        case 6:
                            t = "gui.scenes.game.questions.fact7";
                            break;
                        case 7:
                            t = "gui.scenes.game.questions.fact8";
                            break;
                        case 8:
                            t = "gui.scenes.game.questions.fact9";
                            break;
                        case 9:
                            t = "gui.scenes.game.questions.fact10"
                    }
                    return t
                }(t)
            }(this)))
        },
        _getIsTrue: function() {
            return "true" == p.string(this._kernel.getConfig(function(t) {
                var e, i = t.type;
                return e = function() {
                    var t;
                    switch (i[1]) {
                        case 0:
                            t = "gui.scenes.game.questions.question1.answer";
                            break;
                        case 1:
                            t = "gui.scenes.game.questions.question2.answer";
                            break;
                        case 2:
                            t = "gui.scenes.game.questions.question3.answer";
                            break;
                        case 3:
                            t = "gui.scenes.game.questions.question4.answer";
                            break;
                        case 4:
                            t = "gui.scenes.game.questions.question5.answer";
                            break;
                        case 5:
                            t = "gui.scenes.game.questions.question6.answer";
                            break;
                        case 6:
                            t = "gui.scenes.game.questions.question7.answer";
                            break;
                        case 7:
                            t = "gui.scenes.game.questions.question8.answer";
                            break;
                        case 8:
                            t = "gui.scenes.game.questions.question9.answer";
                            break;
                        case 9:
                            t = "gui.scenes.game.questions.question10.answer"
                    }
                    return t
                }(t)
            }(this)))
        },
        __class__: Wi
    });
    var Qi = function(t) {
        Bi.call(this, t, null, null, !1)
    };
    n["b10ffp.gui.Radial"] = Qi, Qi.__name__ = ["b10ffp", "gui", "Radial"], Qi.__super__ = Bi, Qi.prototype = e(Bi.prototype, {
        _init: function() {
            Bi.prototype._init.call(this), this._context.mouseEnabled = !1, this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/Radial.jpg")), this._bitmap.regX = this._bitmap.regY = 256, this._context.addChild(this._bitmap), this._bitmap.compositeOperation = "lighter", this._bitmap.x = .5 * this._kernel.factory.width, this._bitmap.y = .75 * this._kernel.factory.height
        },
        _updater: function(t) {
            null == t && (t = 0), Bi.prototype._updater.call(this, t);
            var e = .5 * (-Math.sin(this._age / 500) / 2 + 1) + .5 * (-Math.sin(this._age / 200) / 2 + 1);
            this._bitmap.alpha = e, this._bitmap.scaleX = this._bitmap.scaleY = 1.5 * e, this._bitmap.rotation = this._updates
        },
        __class__: Qi
    });
    var zi = function(t, e, i) {
        null == i && (i = 1), this._context = new createjs.Container, this._alphaMask = e, this._speed = i, M.call(this, t, null, this._context)
    };
    n["b10ffp.gui.Shine"] = zi, zi.__name__ = ["b10ffp", "gui", "Shine"], zi.__super__ = M, zi.prototype = e(M.prototype, {
        _init: function() {
            M.prototype._init.call(this), this.width = this._alphaMask.width, this.height = this._alphaMask.height, this._context.compositeOperation = "lighter", this._context.cache(0, 0, this.width, this.height), this._canvas = this._context.cacheCanvas, this._context2d = this._canvas.getContext("2d", null)
        },
        _updater: function(t) {
            null == t && (t = 0), M.prototype._updater.call(this, t), this._draw()
        },
        _draw: function() {
            if (this._kernel.isEyeCandy) {
                this._context2d.clearRect(0, 0, this.width, this.height), this._context2d.globalCompositeOperation = "source-out", this._context2d.drawImage(this._alphaMask, 0, 0);
                var t = this._speed * this._age,
                    e = this._rotatePoint(.5 * this.width * Math.sin(t / 900), .5 * this.height, t / 1e3, .5 * this.width, .5 * this.height),
                    i = this._rotatePoint(this.width, .5 * this.height + .5 * this.height * Math.sin(t / 1300), t / 1e3, .5 * this.width, .5 * this.height),
                    s = this._context2d.createLinearGradient(e.x, e.y, i.x, i.y);
                s.addColorStop(.15, "#000000"), s.addColorStop(.3, "#FFFFFF"), s.addColorStop(.5, "#333333"), s.addColorStop(.78, "#a6a6a6"), s.addColorStop(.82, "#bfbfbf"), s.addColorStop(.86, "#a6a6a6"), s.addColorStop(.88, "#FFFFFF"), s.addColorStop(.98, "#000000"), this._context2d.fillStyle = s, this._context2d.globalCompositeOperation = "source-in", this._context2d.fillRect(0, 0, this.width, this.height)
            }
        },
        _rotatePoint: function(t, e, i, s, n) {
            var r = Math.sin(i),
                o = Math.cos(i);
            t -= s, e -= n;
            var a = t * o - e * r,
                l = t * r + e * o;
            return a += s, l += n, {
                x: a,
                y: l
            }
        },
        __class__: zi
    });
    var Ji = function(t, e, i, s, n, r, o, a) {
        null == a && (a = 1), null == o && (o = !1), null == r && (r = !1), null == s && (s = ""), s = d.replace(s, "<BR/>", "\n"), s = d.replace(s, "<br/>", "\n"), We.call(this, t, e, i, s, n, r, o), this.set_alpha(a)
    };
    n["b10ffp.gui.Text"] = Ji, Ji.__name__ = ["b10ffp", "gui", "Text"], Ji.__super__ = We, Ji.prototype = e(We.prototype, {
        set_alpha: function(t) {
            return this._context.alpha = t
        },
        __class__: Ji
    });
    var Ki = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), J.call(this, t, e, i, s, n), this.isPauseable = !0
    };
    n["b10ffp.scenes.AScene"] = Ki, Ki.__name__ = ["b10ffp", "scenes", "AScene"], Ki.__super__ = J, Ki.prototype = e(J.prototype, {
        _init: function() {
            J.prototype._init.call(this), this._kernel.overlay.get_pauseEntity().setAgenda(Je.STANDARD), this._assets = _n.__cast(this._kernel.assets, _i), this._session = _n.__cast(this._kernel.get_session(), fi), this._factory = _n.__cast(this._kernel.factory, ci), this._factory.preventDefaultForKeys([ti.SPACE])
        },
        _disposer: function() {
            this._factory.allowDefaultForKeys([ti.SPACE]), J.prototype._disposer.call(this)
        },
        _createBurst: function(t, e, i) {
            var s = new ki(this._kernel, t, e, i);
            return this.addEntity(s, null, !0, 100), s
        },
        _pressPlay: function(t) {
            null == t && (t = !1), this._kernel.log("button " + (t ? "replay" : "play"));
            var e = t && this._session.cache.score < 1e3;
            this._session.cache.reset(), this._session.setIsTester(this._kernel.inputs.keyboard.getIsKeyDown(ti.SQUARELEFT) && this._kernel.inputs.keyboard.getIsKeyDown(ti.SQUARERIGHT)), this._outro(e ? function(t, e) {
                return function() {
                    t(e)
                }
            }((Mn = this._kernel.scenes, s(Mn, Mn.setScene)), ri.INSTRUCTIONS) : this._session.sponsor.isEnabled && (t || this._session.highScore > 1e3 && Math.random() > .5) ? function(t, e) {
                return function() {
                    t(e)
                }
            }((Mn = this._kernel.scenes, s(Mn, Mn.setScene)), ri.INTERSTITIAL) : (Mn = this._kernel.scenes, s(Mn, Mn.next)))
        },
        _pressInstructions: function() {
            this._kernel.log("button instructions"), this._outro(function(t, e) {
                return function() {
                    t(e)
                }
            }((Mn = this._kernel.scenes, s(Mn, Mn.setScene)), ri.INSTRUCTIONS))
        },
        _pressWebsite: function() {
            //this._kernel.log("url: website"), this._kernel.log("button website"), this._session.sponsor.getIsMoreGamesEnabled() ? this._session.sponsor.showMoreGames() : window.top.location.href = p.string(this._kernel.getConfig("settings.urls.website"))
        },
        _pressLeaderboard: function() {
            this._kernel.log("button leaderboard"), this._session.sponsor.showScoreboard()
        },
        _outro: function(t) {
            this._isOutroCalled || (this._isOutroCalled = !0, null != t && t())
        },
        __class__: Ki
    });
    var Zi = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Ki.call(this, t, e, i, s, n)
    };
    n["b10ffp.scenes.Game"] = Zi, Zi.__name__ = ["b10ffp", "scenes", "Game"], Zi.__super__ = Ki, Zi.prototype = e(Ki.prototype, {
        _init: function() {
            Ki.prototype._init.call(this), this.isPauseable = !0, this._kernel.overlay.get_pauseEntity().setAgenda(Je.DEFEND), this._session.cache.reset(), this._kernel.audio.stop(null, Ke.MUSIC), this.addEntity(this._hud = new Gi(this._kernel), null, !0, 100), this.addEntity(this._location = new wi(this._kernel), null, !0, 1), this._session.get_isTester() && this.addEntity(new Ui(this._kernel, this._kernel.getConfig("gui.buttons.testMode.skip"), (this._kernel.factory.width - 150) / 2, this._factory.height - 50, null, s(this, this._gameOver)), null, !0, 100), this._factory.preventDefaultForKeys([ti.UP, ti.RIGHT, ti.DOWN, ti.LEFT, ti.SPACE])
        },
        _createDelay: function(t, e) {
            null == e && (e = 1e3), null == this._delay && this.addEntity(this._delay = new ze(this._kernel, t, e))
        },
        _gameOver: function() {
            this._kernel.scenes.next()
        },
        _updater: function(t) {
            null == t && (t = 0), Ki.prototype._updater.call(this, t), this._hud.configureScore(this._session.cache.score), this._hud.configureMultiplier(this._location.multiplier), this._hud.configureLives(this._location.lives), this._hud.configureHelpOverlay(this._location.inactiveCount > 5 * this._factory.targetFramerate), 0 == this._location.lives && this._createDelay(s(this, this._gameOver), 3e3)
        },
        _disposer: function() {
            this._kernel.audio.stop(null, Ke.MUSIC), this._factory.allowDefaultForKeys([ti.UP, ti.RIGHT, ti.DOWN, ti.LEFT, ti.SPACE]), Ki.prototype._disposer.call(this)
        },
        __class__: Zi
    });
    var qi = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Ki.call(this, t, e, i, s, n)
    };
    n["b10ffp.scenes.Instructions"] = qi, qi.__name__ = ["b10ffp", "scenes", "Instructions"], qi.__super__ = Ki, qi.prototype = e(Ki.prototype, {
        _init: function() {
            var t = this;
            Ki.prototype._init.call(this), this._kernel.overlay.get_pauseEntity().setAgenda(Je.DEFEND);
            var e = this._session.cache.instructionsPage;
            this.addEntity(new ji(this._kernel, this._assets.getAsset("assets/gui/InstructionsBg.jpg")), null, !0, 0);
            var i;
            switch (e) {
                case 1:
                    i = this._kernel.system.isDesktop ? "assets/gui/InstructionsPage1A.png" : "assets/gui/InstructionsPage1B.png";
                    break;
                case 2:
                    i = "assets/gui/InstructionsPage2.png";
                    break;
                case 3:
                    i = "assets/gui/InstructionsPage3.png";
                    break;
                default:
                    i = "assets/gui/InstructionsPage3.png"
            }
            this.addEntity(this._pageImage = new ji(this._kernel, this._assets.getAsset(i)), null, !0, 6);
            var n = 28,
                r = new Ji(this._kernel, 216, 30, p.string(this._kernel.getConfig("gui.scenes.instructions.title")).toUpperCase(), this._factory.createTextStyle(ai.HEADLINE));
            r.setPosition((this._kernel.factory.width - r.width) / 2, n), this.addEntity(r, null, !0, 10), this.addEntity(this._buttonPlay = new Li(this._kernel, Ni.START, !0, (this._kernel.factory.width - 110) / 2, 500, this._kernel.factory.keyNext, function(t) {
                return function() {
                    t()
                }
            }(s(this, this._pressPlay))), null, !0, 10), this.addEntity(this._buttonPrevious = new Li(this._kernel, Ni.PREVIOUS, null, this._buttonPlay.x - 75, this._buttonPlay.y + 3, ti.LEFT, s(this, this._pressPrevious)), null, !0, 10), this.addEntity(this._buttonNext = new Li(this._kernel, Ni.NEXT, null, this._buttonPlay.x + this._buttonPlay.width + 5, this._buttonPlay.y + 3, ti.RIGHT, s(this, this._pressNext)), null, !0, 10);
            var o = p.string(this._kernel.getConfig("gui.scenes.instructions.page" + e)).toUpperCase(),
                a = new Ji(this._kernel, 300, 200, o, this._factory.createTextStyle(ai.BODY), !0, !1, 1);
            a.setPosition((this._kernel.factory.width - a.width) / 2, n + 50), this.addEntity(a, null, !0, 10), this._session.cache.isInstructions || (this.addEntity(new bn(this._kernel, function(e) {
                t._buttonPlay.set_y(e)
            }, this._factory.height, this._buttonPlay.y, 1200, 2e3, null, fn.EASE_OUT, mn.ELASTIC())), this.addEntity(new bn(this._kernel, function(e) {
                t._buttonPrevious.set_y(e)
            }, this._factory.height, this._buttonPrevious.y, 1e3, 2e3, null, fn.EASE_OUT, mn.ELASTIC())), this.addEntity(new bn(this._kernel, function(e) {
                t._buttonNext.set_y(e)
            }, this._factory.height, this._buttonNext.y, 1400, 2e3, null, fn.EASE_OUT, mn.ELASTIC()))), this._session.cache.isInstructions = !0
        },
        _updater: function(t) {
            null == t && (t = 0), Ki.prototype._updater.call(this, t), this._pageImage.set_x(5 * Math.sin(this._age / 1e3)), this._pageImage.set_y(8 * Math.sin(this._age / 600))
        },
        _pressPrevious: function() {
            this._session.cache.instructionsPage = p["int"](this._tools.range(this._session.cache.instructionsPage - 1, 1, 4)), this._kernel.scenes.restart()
        },
        _pressNext: function() {
            this._session.cache.instructionsPage = p["int"](this._tools.range(this._session.cache.instructionsPage + 1, 1, 4)), this._kernel.scenes.restart()
        },
        _outro: function(t) {
            var e = this;
            if (!this._isOutroCalled) {
                this._isOutroCalled = !0;
                for (var i = 0, s = this.getEntitiesByClass(bn); i < s.length;) {
                    var n = s[i];
                    ++i, n.remove()
                }
                this.addEntity(new bn(this._kernel, function(t) {
                    e._buttonPlay.set_y(t)
                }, this._buttonPlay.y, this._factory.height, 50, 1e3, null, fn.EASE_IN, mn.BACK())), this.addEntity(new bn(this._kernel, function(t) {
                    e._buttonPrevious.set_y(t)
                }, this._buttonPrevious.y, this._factory.height, 0, 1e3, null, fn.EASE_IN, mn.BACK())), this.addEntity(new bn(this._kernel, function(t) {
                    e._buttonNext.set_y(t)
                }, this._buttonNext.y, this._factory.height + 25, 100, 1e3, null, fn.EASE_IN, mn.BACK(), t)), this._kernel.audio.start("TargetsComplete", Ke.INTERFACE, 0, 0, 1)
            }
        },
        __class__: qi
    });
    var $i = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Ki.call(this, t, e, i, s, n)
    };
    n["b10ffp.scenes.Interstitial"] = $i, $i.__name__ = ["b10ffp", "scenes", "Interstitial"], $i.__super__ = Ki, $i.prototype = e(Ki.prototype, {
        _init: function() {
            Ki.prototype._init.call(this), this._kernel.overlay.get_pauseEntity().setAgenda(Je.DEFEND), this.addEntity(new ji(this._kernel, this._assets.getAsset("assets/gui/InstructionsBg.jpg")), null, !0, 0), this.addEntity(new Qi(this._kernel), null, !0, 3), this._kernel.audio.stop(null, Ke.MUSIC), this._showAd()
        },
        _showAd: function() {
            this._session.sponsor.showAd((Mn = this._kernel.scenes, s(Mn, Mn.next)))
        },
        __class__: $i
    });
    var ts = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Ki.call(this, t, e, i, s, n)
    };
    n["b10ffp.scenes.Menu"] = ts, ts.__name__ = ["b10ffp", "scenes", "Menu"], ts.__super__ = Ki, ts.prototype = e(Ki.prototype, {
        _init: function() {
            var t = this;
            Ki.prototype._init.call(this), this.addEntity(new ji(this._kernel, this._assets.getAsset("assets/gui/MenuBg.jpg")), null, !0, 0), this.addEntity(new Qi(this._kernel), null, !0, 3), this.addEntity(this._logo = new Hi(this._kernel), null, !0, 5), this._kernel.audio.start("MusicMenu", Ke.MUSIC, -1, 0, .5, 0, !0);
            var e = this._session.sponsor.isEnabled && !this._session.sponsor.getIsMoreGamesEnabled();
            this.addEntity(this._buttonPlay = new Li(this._kernel, Ni.START, !0, (this._kernel.factory.width - 100) / 2, 500, this._kernel.factory.keyNext, function(t) {
                return function() {
                    t()
                }
            }(s(this, this._pressPlay))), null, !0, 11), e || this.addEntity(this._buttonWebsite = new Li(this._kernel, Ni.WEBSITE, null, this._buttonPlay.x - 70 - 5, this._buttonPlay.y + 3, null, s(this, this._pressWebsite)), null, !0, 10), this.addEntity(this._buttonInstructions = new Li(this._kernel, Ni.INSTRUCTIONS, null, this._buttonPlay.x + this._buttonPlay.width + 5, this._buttonPlay.y + 3, null, s(this, this._pressInstructions)), null, !0, 10), this.addEntity(new bn(this._kernel, function(e) {
                t._logo.set_y(e)
            }, -300, this._logo.y + 20, 600, 3e3, null, fn.EASE_OUT, mn.ELASTIC())), this.addEntity(new bn(this._kernel, function(e) {
                t._buttonPlay.set_y(e)
            }, this._factory.height, this._buttonPlay.y, 1200, 2e3, null, fn.EASE_OUT, mn.ELASTIC())), e || this.addEntity(new bn(this._kernel, function(e) {
                t._buttonWebsite.set_y(e)
            }, this._factory.height, this._buttonWebsite.y, 1e3, 2e3, null, fn.EASE_OUT, mn.ELASTIC())), this.addEntity(new bn(this._kernel, function(e) {
                t._buttonInstructions.set_y(e)
            }, this._factory.height, this._buttonInstructions.y, 1400, 2e3, null, fn.EASE_OUT, mn.ELASTIC())), this._session.sponsor.getIsBrandingEnabled() && this.addEntity(new Di(this._kernel, 40, 230), null, !0, 20)
        },
        _outro: function(t) {
            var e = this;
            if (!this._isOutroCalled) {
                this._isOutroCalled = !0;
                for (var i = 0, s = this.getEntitiesByClass(bn); i < s.length;) {
                    var n = s[i];
                    ++i, n.remove()
                }
                this.addEntity(new bn(this._kernel, function(t) {
                    e._logo.set_y(t)
                }, this._logo.y, -300, 0, 1e3, null, fn.EASE_IN, mn.BACK())), this.addEntity(new bn(this._kernel, function(t) {
                    e._buttonPlay.set_y(t)
                }, this._buttonPlay.y, this._factory.height, 100, 1e3, null, fn.EASE_IN, mn.BACK())), null != this._buttonWebsite && this.addEntity(new bn(this._kernel, function(t) {
                    e._buttonWebsite.set_y(t)
                }, this._buttonWebsite.y, this._factory.height, 50, 1e3, null, fn.EASE_IN, mn.BACK())), this.addEntity(new bn(this._kernel, function(t) {
                    e._buttonInstructions.set_y(t)
                }, this._buttonInstructions.y, this._factory.height + 25, 150, 1e3, null, fn.EASE_IN, mn.BACK(), t)), this._kernel.audio.start("TargetsComplete", Ke.INTERFACE, 0, 0, 1)
            }
        },
        __class__: ts
    });
    var es = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Ki.call(this, t, e, i, s, n)
    };
    n["b10ffp.scenes.Results"] = es, es.__name__ = ["b10ffp", "scenes", "Results"], es.__super__ = Ki, es.prototype = e(Ki.prototype, {
        _init: function() {
            var t = this;
            Ki.prototype._init.call(this), this._stars = this._getStars(this._session.cache.score), this._kernel.log("results " + this._stars);
            var e = this._session.sponsor.isEnabled && !this._session.sponsor.getIsMoreGamesEnabled();
            this.addEntity(new ji(this._kernel, this._assets.getAsset("assets/gui/MenuBg.jpg")), null, !0, 0), this.addEntity(new Qi(this._kernel), null, !0, 2), this.addEntity(this._starsImage = new ji(this._kernel, this._assets.getAsset("assets/gui/Results0.png")), null, !0, 3), this._starsImage.set_y(300), this.addEntity(this._buttonPlay = new Li(this._kernel, Ni.RESTART, !0, (this._kernel.factory.width - 110) / 2, 500, this._kernel.factory.keyNext, function(t, e) {
                return function() {
                    t(e)
                }
            }(s(this, this._pressPlay), !0)), null, !0, 4), e || this.addEntity(this._buttonWebsite = new Li(this._kernel, Ni.WEBSITE, null, this._buttonPlay.x - 75, this._buttonPlay.y + 3, null, s(this, this._pressWebsite)), null, !0, 10), this._buttonInstructions = new Li(this._kernel, Ni.INSTRUCTIONS, null, this._buttonPlay.x + this._buttonPlay.width + 5, this._buttonPlay.y + 3, null, s(this, this._pressInstructions)), this._buttonLeaderboard = new Li(this._kernel, Ni.LEADERBOARD, null, this._buttonPlay.x + this._buttonPlay.width + 5, this._buttonPlay.y + 3, null, s(this, this._pressLeaderboard)), this.addEntity(this._session.sponsor.hasHighscores ? this._buttonLeaderboard : this._buttonInstructions, null, !0, 10);
            var i = this._session.cache.score > this._session.highScore;
            i && (this._session.highScore = this._session.cache.score, this._session.save(), this._session.sponsor.isEnabled && this.addEntity(new ze(this._kernel, function(t, e) {
                return function() {
                    t(e)
                }
            }((Mn = this._session.sponsor, s(Mn, Mn.submitScore)), this._session.cache.score), 4e3)));
            var n = new Ji(this._kernel, 200, 100, p.string(this._kernel.getConfig("gui.scenes.results.message")).toUpperCase(), this._kernel.factory.createTextStyle(this._factory.TEXTSTYLE_RESULTS_MESSAGE), !0);
            n.setPosition((this._kernel.factory.width - n.width) / 2, 40), this.addEntity(n, null, !0, 20);
            var r = new Ji(this._kernel, 200, 100, p.string(this._session.cache.score).toUpperCase(), this._kernel.factory.createTextStyle(this._factory.TEXTSTYLE_RESULTS_SCORE), !0);
            r.setPosition((this._kernel.factory.width - r.width) / 2, n.y + 55), this.addEntity(r, null, !0, 20);
            var o = new Ji(this._kernel, 200, 100, d.replace(this._kernel.getConfig(i ? "gui.scenes.results.win" : "gui.scenes.results.lose"), "__HIGH_SCORE__", p.string(this._session.highScore)).toUpperCase(), this._kernel.factory.createTextStyle(this._factory.TEXTSTYLE_RESULTS_MESSAGE), !0);
            o.setPosition((this._kernel.factory.width - o.width) / 2, r.y + 48), this.addEntity(o, null, !0, 20), this._kernel.audio.start("MusicMenu", Ke.MUSIC, -1, 0, .5, 0, !0), this.addEntity(new bn(this._kernel, function(e) {
                t._starsImage.set_y(e)
            }, -150, this._starsImage.y, 0, 3e3, null, fn.EASE_OUT, mn.ELASTIC())), this.addEntity(new bn(this._kernel, function(e) {
                t._buttonPlay.set_y(e)
            }, this._factory.height, this._buttonPlay.y, 2200, 2e3, null, fn.EASE_OUT, mn.ELASTIC())), e || this.addEntity(new bn(this._kernel, function(e) {
                t._buttonWebsite.set_y(e)
            }, this._factory.height, this._buttonWebsite.y, 2e3, 2e3, null, fn.EASE_OUT, mn.ELASTIC())), this.addEntity(new bn(this._kernel, function(e) {
                t._buttonInstructions.set_y(e)
            }, this._factory.height, this._buttonInstructions.y, 2400, 2e3, null, fn.EASE_OUT, mn.ELASTIC())), this.addEntity(new bn(this._kernel, function(e) {
                t._buttonLeaderboard.set_y(e)
            }, this._factory.height, this._buttonLeaderboard.y, 2400, 2e3, null, fn.EASE_OUT, mn.ELASTIC()))
        },
        _getStars: function(t) {
            return t > 1e5 ? 3 : t > 2e4 ? 2 : t > 2e3 ? 1 : 0
        },
        _updater: function(t) {
            null == t && (t = 0), Ki.prototype._updater.call(this, t);
            var e = this._factory.targetFramerate;
            this._updates == e && this._stars >= 1 && (this._starsImage.configure(this._assets.getAsset("assets/gui/Results1.png")), this._kernel.audio.start("Star1", Ke.EFFECTS, 1, 0, .5, null, !1), this._kernel.overlay.flash(200, !0, .35), this._createBurst(1, 118, this._starsImage.y + 85)), this._updates == (1.5 * e | 0) && this._stars >= 2 && (this._starsImage.configure(this._assets.getAsset("assets/gui/Results2.png")), this._kernel.audio.start("Star2", Ke.EFFECTS, 1, 0, .7, null, !1), this._kernel.overlay.flash(300, !0, .65), this._createBurst(1, 225, this._starsImage.y + 75)), this._updates == (2 * e | 0) && this._stars >= 3 && (this._starsImage.configure(this._assets.getAsset("assets/gui/Results3.png")), this._kernel.audio.start("Star3", Ke.EFFECTS, 1, 0, 1, null, !1), this._kernel.overlay.flash(400, !0, 1), this._createBurst(1, 332, this._starsImage.y + 85)), Math.random() < .125 && this._createBurst(.5 * Math.random() + .5, .4 * this._factory.width + Math.random() * this._factory.width * .2, .15 * this._factory.height + Math.random() * this._factory.height * .05)
        },
        _outro: function(t) {
            var e = this;
            if (!this._isOutroCalled) {
                this._isOutroCalled = !0;
                for (var i = 0, s = this.getEntitiesByClass(bn); i < s.length;) {
                    var n = s[i];
                    ++i, n.remove()
                }
                this.addEntity(new bn(this._kernel, function(t) {
                    e._starsImage.set_y(t)
                }, this._starsImage.y, -150, 0, 1e3, null, fn.EASE_IN, mn.BACK())), this.addEntity(new bn(this._kernel, function(t) {
                    e._buttonPlay.set_y(t)
                }, this._buttonPlay.y, this._factory.height, 100, 1e3, null, fn.EASE_IN, mn.BACK())), null != this._buttonWebsite && this.addEntity(new bn(this._kernel, function(t) {
                    e._buttonWebsite.set_y(t)
                }, this._buttonWebsite.y, this._factory.height, 50, 1e3, null, fn.EASE_IN, mn.BACK())), this.addEntity(new bn(this._kernel, function(t) {
                    e._buttonInstructions.set_y(t)
                }, this._buttonInstructions.y, this._factory.height + 25, 150, 1e3, null, fn.EASE_IN, mn.BACK(), t)), this.addEntity(new bn(this._kernel, function(t) {
                    e._buttonLeaderboard.set_y(t)
                }, this._buttonLeaderboard.y, this._factory.height, 150, 1e3, null, fn.EASE_IN, mn.BACK())), this._kernel.audio.start("TargetsComplete", Ke.INTERFACE, 0, 0, 1)
            }
        },
        __class__: es
    });
    var is = function(t) {
        var e = 500;
        je.call(this, t, e)
    };
    n["b10ffp.scenes.SceneTransition"] = is, is.__name__ = ["b10ffp", "scenes", "SceneTransition"], is.__super__ = je, is.prototype = e(je.prototype, {
        _init: function() {
            je.prototype._init.call(this), this._kernel.audio.start("Transition", Ke.INTERFACE, 0, 0, .5)
        },
        __class__: is
    });
    var ss = function() {};
    n["haxe.IMap"] = ss, ss.__name__ = ["haxe", "IMap"];
    var ns = function(t) {
        this.url = t, this.headers = new _, this.params = new _, this.async = !0
    };
    n["haxe.Http"] = ns, ns.__name__ = ["haxe", "Http"], ns.prototype = {
        request: function(t) {
            var e = this;
            e.responseData = null;
            var i = this.req = un.createXMLHttpRequest(),
                s = function() {
                    if (4 == i.readyState) {
                        var t;
                        try {
                            t = i.status
                        } catch (s) {
                            s instanceof hn && (s = s.val), t = null
                        }
                        if (null != t) {
                            var n = window.location.protocol.toLowerCase(),
                                r = new a("^(?:about|app|app-storage|.+-extension|file|res|widget):$", ""),
                                o = r.match(n);
                            o && (t = null != i.responseText ? 200 : 404)
                        }
                        if (void 0 == t && (t = null), null != t && e.onStatus(t), null != t && t >= 200 && 400 > t) e.req = null, e.onData(e.responseData = i.responseText);
                        else if (null == t) e.req = null, e.onError("Failed to connect or resolve host");
                        else switch (t) {
                            case 12029:
                                e.req = null, e.onError("Failed to connect to host");
                                break;
                            case 12007:
                                e.req = null, e.onError("Unknown host");
                                break;
                            default:
                                e.req = null, e.responseData = i.responseText, e.onError("Http Error #" + i.status)
                        }
                    }
                };
            this.async && (i.onreadystatechange = s);
            var n = this.postData;
            if (null != n) t = !0;
            else
                for (var r = this.params.h, o = null; null != r;) {
                    var l;
                    l = function() {
                        var t;
                        return o = r[0], r = r[1], t = o
                    }(this), null == n ? n = "" : n += "&", n += encodeURIComponent(l.param) + "=" + encodeURIComponent(l.value)
                }
            try {
                if (t) i.open("POST", this.url, this.async);
                else if (null != n) {
                    var _ = this.url.split("?").length <= 1;
                    i.open("GET", this.url + (_ ? "?" : "&") + n, this.async), n = null
                } else i.open("GET", this.url, this.async)
            } catch (u) {
                return u instanceof hn && (u = u.val), e.req = null, void this.onError(u.toString())
            }!h.exists(this.headers, function(t) {
                return "Content-Type" == t.header
            }) && t && null == this.postData && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var c = this.headers.h, p = null; null != c;) {
                var g;
                g = function() {
                    var t;
                    return p = c[0], c = c[1], t = p
                }(this), i.setRequestHeader(g.header, g.value)
            }
            i.send(n), this.async || s(null)
        },
        onData: function() {},
        onError: function() {},
        onStatus: function() {},
        __class__: ns
    };
    var rs = function(t, e) {
        this.high = t, this.low = e
    };
    n["haxe._Int64.___Int64"] = rs, rs.__name__ = ["haxe", "_Int64", "___Int64"], rs.prototype = {
        __class__: rs
    };
    var os = function() {};
    n["haxe.Log"] = os, os.__name__ = ["haxe", "Log"], os.trace = function(t, e) {
        _n.__trace(t, e)
    };
    var as = function() {};
    n["haxe.Resource"] = as, as.__name__ = ["haxe", "Resource"], as.getString = function(t) {
        for (var e = 0, i = as.content; e < i.length;) {
            var s = i[e];
            if (++e, s.name == t) {
                if (null != s.str) return s.str;
                var n = cs.decode(s.data);
                return n.toString()
            }
        }
        return null
    };
    var ls = function() {
        this.buf = new g, this.cache = [], this.useCache = ls.USE_CACHE, this.useEnumIndex = ls.USE_ENUM_INDEX, this.shash = new ys, this.scount = 0
    };
    n["haxe.Serializer"] = ls, ls.__name__ = ["haxe", "Serializer"], ls.run = function(t) {
        var e = new ls;
        return e.serialize(t), e.toString()
    }, ls.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(t) {
            var e = this.shash.get(t);
            return null != e ? (this.buf.b += "R", void(this.buf.b += null == e ? "null" : "" + e)) : (this.shash.set(t, this.scount++), this.buf.b += "y", t = encodeURIComponent(t), this.buf.b += null == t.length ? "null" : "" + t.length, this.buf.b += ":", void(this.buf.b += null == t ? "null" : "" + t))
        },
        serializeRef: function(t) {
            for (var e = typeof t, i = 0, s = this.cache.length; s > i;) {
                var n = i++,
                    r = this.cache[n];
                if (typeof r == e && r == t) return this.buf.b += "r", this.buf.b += null == n ? "null" : "" + n, !0
            }
            return this.cache.push(t), !1
        },
        serializeFields: function(t) {
            for (var e = 0, i = c.fields(t); e < i.length;) {
                var s = i[e];
                ++e, this.serializeString(s), this.serialize(c.field(t, s))
            }
            this.buf.b += "g"
        },
        serialize: function(t) {
            var e = m["typeof"](t);
            switch (e[1]) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    var i = t;
                    if (0 == i) return void(this.buf.b += "z");
                    this.buf.b += "i", this.buf.b += null == i ? "null" : "" + i;
                    break;
                case 2:
                    var s = t;
                    isNaN(s) ? this.buf.b += "k" : isFinite(s) ? (this.buf.b += "d", this.buf.b += null == s ? "null" : "" + s) : this.buf.b += 0 > s ? "m" : "p";
                    break;
                case 3:
                    this.buf.b += t ? "t" : "f";
                    break;
                case 6:
                    var n = e[2];
                    if (n == String) return void this.serializeString(t);
                    if (this.useCache && this.serializeRef(t)) return;
                    switch (n) {
                        case Array:
                            var r = 0;
                            this.buf.b += "a";
                            for (var o = t.length, a = 0; o > a;) {
                                var l = a++;
                                null == t[l] ? r++ : (r > 0 && (1 == r ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == r ? "null" : "" + r), r = 0), this.serialize(t[l]))
                            }
                            r > 0 && (1 == r ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == r ? "null" : "" + r)), this.buf.b += "h";
                            break;
                        case _:
                            this.buf.b += "l";
                            for (var h = t, u = h.h, d = null; null != u;) {
                                var f;
                                d = u[0], u = u[1], f = d, this.serialize(f)
                            }
                            this.buf.b += "h";
                            break;
                        case Date:
                            var y = t;
                            this.buf.b += "v", this.buf.add(y.getTime());
                            break;
                        case ys:
                            this.buf.b += "b";
                            for (var b = t, v = b.keys(); v.hasNext();) {
                                var S = v.next();
                                this.serializeString(S), this.serialize(null != Fn[S] ? b.getReserved(S) : b.h[S])
                            }
                            this.buf.b += "h";
                            break;
                        case fs:
                            this.buf.b += "q";
                            for (var E = t, w = E.keys(); w.hasNext();) {
                                var I = w.next();
                                this.buf.b += ":", this.buf.b += null == I ? "null" : "" + I, this.serialize(E.h[I])
                            }
                            this.buf.b += "h";
                            break;
                        case ms:
                            this.buf.b += "M";
                            for (var T = t, A = T.keys(); A.hasNext();) {
                                var C = A.next(),
                                    x = c.field(C, "__id__");
                                c.deleteField(C, "__id__"), this.serialize(C), C.__id__ = x, this.serialize(T.h[C.__id__])
                            }
                            this.buf.b += "h";
                            break;
                        case us:
                            for (var P = t, O = 0, M = P.length - 2, R = new g, B = ls.BASE64; M > O;) {
                                var D = P.get(O++),
                                    k = P.get(O++),
                                    L = P.get(O++);
                                R.add(B.charAt(D >> 2)), R.add(B.charAt(63 & (D << 4 | k >> 4))), R.add(B.charAt(63 & (k << 2 | L >> 6))), R.add(B.charAt(63 & L))
                            }
                            if (O == M) {
                                var U = P.get(O++),
                                    N = P.get(O++);
                                R.add(B.charAt(U >> 2)), R.add(B.charAt(63 & (U << 4 | N >> 4))), R.add(B.charAt(N << 2 & 63))
                            } else if (O == M + 1) {
                                var F = P.get(O++);
                                R.add(B.charAt(F >> 2)), R.add(B.charAt(F << 4 & 63))
                            }
                            var G = R.b;
                            this.buf.b += "s", this.buf.b += null == G.length ? "null" : "" + G.length, this.buf.b += ":", this.buf.b += null == G ? "null" : "" + G;
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != t.hxSerialize ? (this.buf.b += "C", this.serializeString(m.getClassName(n)), this.useCache && this.cache.push(t), t.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(m.getClassName(n)), this.useCache && this.cache.push(t), this.serializeFields(t))
                    }
                    break;
                case 4:
                    if (_n.__instanceof(t, Un)) {
                        var j = m.getClassName(t);
                        this.buf.b += "A", this.serializeString(j)
                    } else if (_n.__instanceof(t, Nn)) this.buf.b += "B", this.serializeString(m.getEnumName(t));
                    else {
                        if (this.useCache && this.serializeRef(t)) return;
                        this.buf.b += "o", this.serializeFields(t)
                    }
                    break;
                case 7:
                    var H = e[2];
                    if (this.useCache) {
                        if (this.serializeRef(t)) return;
                        this.cache.pop()
                    }
                    this.buf.b += this.useEnumIndex ? "j" : "w", this.serializeString(m.getEnumName(H)), this.useEnumIndex ? (this.buf.b += ":", this.buf.b += p.string(t[1])) : this.serializeString(t[0]), this.buf.b += ":";
                    var Y = t.length;
                    this.buf.b += p.string(Y - 2);
                    for (var X = 2; Y > X;) {
                        var V = X++;
                        this.serialize(t[V])
                    }
                    this.useCache && this.cache.push(t);
                    break;
                case 5:
                    throw new hn("Cannot serialize function");
                default:
                    throw new hn("Cannot serialize " + p.string(t))
            }
        },
        __class__: ls
    };
    var hs = function(t) {
        var e = this;
        this.id = setInterval(function() {
            e.run()
        }, t)
    };
    n["haxe.Timer"] = hs, hs.__name__ = ["haxe", "Timer"], hs.delay = function(t, e) {
        var i = new hs(e);
        return i.run = function() {
            i.stop(), t()
        }, i
    }, hs.stamp = function() {
        return (new Date).getTime() / 1e3
    }, hs.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        run: function() {},
        __class__: hs
    };
    var _s = function(t) {
        this.buf = t, this.length = t.length, this.pos = 0, this.scache = [], this.cache = [];
        var e = _s.DEFAULT_RESOLVER;
        null == e && (e = m, _s.DEFAULT_RESOLVER = e), this.setResolver(e)
    };
    n["haxe.Unserializer"] = _s, _s.__name__ = ["haxe", "Unserializer"], _s.initCodes = function() {
        for (var t = [], e = 0, i = _s.BASE64.length; i > e;) {
            var s = e++;
            t[_s.BASE64.charCodeAt(s)] = s
        }
        return t
    }, _s.run = function(t) {
        return new _s(t).unserialize()
    }, _s.prototype = {
        setResolver: function(t) {
            this.resolver = null == t ? {
                resolveClass: function() {
                    return null
                },
                resolveEnum: function() {
                    return null
                }
            } : t
        },
        get: function(t) {
            return this.buf.charCodeAt(t)
        },
        readDigits: function() {
            for (var t = 0, e = !1, i = this.pos;;) {
                var s = this.buf.charCodeAt(this.pos);
                if (s != s) break;
                if (45 != s) {
                    if (48 > s || s > 57) break;
                    t = 10 * t + (s - 48), this.pos++
                } else {
                    if (this.pos != i) break;
                    e = !0, this.pos++
                }
            }
            return e && (t *= -1), t
        },
        readFloat: function() {
            for (var t = this.pos;;) {
                var e = this.buf.charCodeAt(this.pos);
                if (!(e >= 43 && 58 > e || 101 == e || 69 == e)) break;
                this.pos++
            }
            return p.parseFloat(l.substr(this.buf, t, this.pos - t))
        },
        unserializeObject: function(t) {
            for (;;) {
                if (this.pos >= this.length) throw new hn("Invalid object");
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var e = this.unserialize();
                if ("string" != typeof e) throw new hn("Invalid object key");
                var i = this.unserialize();
                t[e] = i
            }
            this.pos++
        },
        unserializeEnum: function(t, e) {
            if (58 != this.get(this.pos++)) throw new hn("Invalid enum format");
            var i = this.readDigits();
            if (0 == i) return m.createEnum(t, e);
            for (var s = []; i-- > 0;) s.push(this.unserialize());
            return m.createEnum(t, e, s)
        },
        unserialize: function() {
            var t = this.get(this.pos++);
            switch (t) {
                case 110:
                    return null;
                case 116:
                    return !0;
                case 102:
                    return !1;
                case 122:
                    return 0;
                case 105:
                    return this.readDigits();
                case 100:
                    return this.readFloat();
                case 121:
                    var e = this.readDigits();
                    if (58 != this.get(this.pos++) || this.length - this.pos < e) throw new hn("Invalid string length");
                    var i = l.substr(this.buf, this.pos, e);
                    return this.pos += e, i = decodeURIComponent(i.split("+").join(" ")), this.scache.push(i), i;
                case 107:
                    return 0 / 0;
                case 109:
                    return -1 / 0;
                case 112:
                    return 1 / 0;
                case 97:
                    var s = (this.buf, []);
                    for (this.cache.push(s);;) {
                        var n = this.buf.charCodeAt(this.pos);
                        if (104 == n) {
                            this.pos++;
                            break
                        }
                        if (117 == n) {
                            this.pos++;
                            var r = this.readDigits();
                            s[s.length + r - 1] = null
                        } else s.push(this.unserialize())
                    }
                    return s;
                case 111:
                    var o = {};
                    return this.cache.push(o), this.unserializeObject(o), o;
                case 114:
                    var a = this.readDigits();
                    if (0 > a || a >= this.cache.length) throw new hn("Invalid reference");
                    return this.cache[a];
                case 82:
                    var h = this.readDigits();
                    if (0 > h || h >= this.scache.length) throw new hn("Invalid string reference");
                    return this.scache[h];
                case 120:
                    throw new hn(this.unserialize());
                case 99:
                    var u = this.unserialize(),
                        c = this.resolver.resolveClass(u);
                    if (null == c) throw new hn("Class not found " + u);
                    var p = m.createEmptyInstance(c);
                    return this.cache.push(p), this.unserializeObject(p), p;
                case 119:
                    var g = this.unserialize(),
                        f = this.resolver.resolveEnum(g);
                    if (null == f) throw new hn("Enum not found " + g);
                    var y = this.unserializeEnum(f, this.unserialize());
                    return this.cache.push(y), y;
                case 106:
                    var b = this.unserialize(),
                        v = this.resolver.resolveEnum(b);
                    if (null == v) throw new hn("Enum not found " + b);
                    this.pos++;
                    var S = this.readDigits(),
                        E = m.getEnumConstructs(v)[S];
                    if (null == E) throw new hn("Unknown enum index " + b + "@" + S);
                    var w = this.unserializeEnum(v, E);
                    return this.cache.push(w), w;
                case 108:
                    var I = new _;
                    this.cache.push(I);
                    for (this.buf; 104 != this.buf.charCodeAt(this.pos);) I.add(this.unserialize());
                    return this.pos++, I;
                case 98:
                    var T = new ys;
                    this.cache.push(T);
                    for (this.buf; 104 != this.buf.charCodeAt(this.pos);) {
                        var A = this.unserialize();
                        T.set(A, this.unserialize())
                    }
                    return this.pos++, T;
                case 113:
                    var C = new fs;
                    this.cache.push(C);
                    for (var x = (this.buf, this.get(this.pos++)); 58 == x;) {
                        var P = this.readDigits();
                        C.set(P, this.unserialize()), x = this.get(this.pos++)
                    }
                    if (104 != x) throw new hn("Invalid IntMap format");
                    return C;
                case 77:
                    var O = new ms;
                    this.cache.push(O);
                    for (this.buf; 104 != this.buf.charCodeAt(this.pos);) {
                        var M = this.unserialize();
                        O.set(M, this.unserialize())
                    }
                    return this.pos++, O;
                case 118:
                    var R;
                    if (this.buf.charCodeAt(this.pos) >= 48 && this.buf.charCodeAt(this.pos) <= 57 && this.buf.charCodeAt(this.pos + 1) >= 48 && this.buf.charCodeAt(this.pos + 1) <= 57 && this.buf.charCodeAt(this.pos + 2) >= 48 && this.buf.charCodeAt(this.pos + 2) <= 57 && this.buf.charCodeAt(this.pos + 3) >= 48 && this.buf.charCodeAt(this.pos + 3) <= 57 && 45 == this.buf.charCodeAt(this.pos + 4)) {
                        var B = l.substr(this.buf, this.pos, 19);
                        R = l.strDate(B), this.pos += 19
                    } else {
                        var D = this.readFloat(),
                            k = new Date;
                        k.setTime(D), R = k
                    }
                    return this.cache.push(R), R;
                case 115:
                    var L = this.readDigits(),
                        U = this.buf;
                    if (58 != this.get(this.pos++) || this.length - this.pos < L) throw new hn("Invalid bytes length");
                    var N = _s.CODES;
                    null == N && (N = _s.initCodes(), _s.CODES = N);
                    var F, G = this.pos,
                        j = 3 & L;
                    F = 3 * (L >> 2) + (j >= 2 ? j - 1 : 0);
                    for (var H = G + (L - j), Y = us.alloc(F), X = 0; H > G;) {
                        var V = N[d.fastCodeAt(U, G++)],
                            W = N[d.fastCodeAt(U, G++)];
                        Y.set(X++, V << 2 | W >> 4);
                        var Q = N[d.fastCodeAt(U, G++)];
                        Y.set(X++, W << 4 | Q >> 2);
                        var z = N[d.fastCodeAt(U, G++)];
                        Y.set(X++, Q << 6 | z)
                    }
                    if (j >= 2) {
                        var J = N[d.fastCodeAt(U, G++)],
                            K = N[d.fastCodeAt(U, G++)];
                        if (Y.set(X++, J << 2 | K >> 4), 3 == j) {
                            var Z = N[d.fastCodeAt(U, G++)];
                            Y.set(X++, K << 4 | Z >> 2)
                        }
                    }
                    return this.pos += L, this.cache.push(Y), Y;
                case 67:
                    var q = this.unserialize(),
                        $ = this.resolver.resolveClass(q);
                    if (null == $) throw new hn("Class not found " + q);
                    var te = m.createEmptyInstance($);
                    if (this.cache.push(te), te.hxUnserialize(this), 103 != this.get(this.pos++)) throw new hn("Invalid custom data");
                    return te;
                case 65:
                    var ee = this.unserialize(),
                        ie = this.resolver.resolveClass(ee);
                    if (null == ie) throw new hn("Class not found " + ee);
                    return ie;
                case 66:
                    var se = this.unserialize(),
                        ne = this.resolver.resolveEnum(se);
                    if (null == ne) throw new hn("Enum not found " + se);
                    return ne
            }
            throw this.pos--, new hn("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos)
        },
        __class__: _s
    };
    var us = function(t) {
        this.length = t.byteLength, this.b = new jn(t), this.b.bufferValue = t, t.hxBytes = this, t.bytes = this.b
    };
    n["haxe.io.Bytes"] = us, us.__name__ = ["haxe", "io", "Bytes"], us.alloc = function(t) {
        return new us(new Gn(t))
    }, us.ofString = function(t) {
        for (var e = [], i = 0; i < t.length;) {
            var s = d.fastCodeAt(t, i++);
            s >= 55296 && 56319 >= s && (s = s - 55232 << 10 | 1023 & d.fastCodeAt(t, i++)), 127 >= s ? e.push(s) : 2047 >= s ? (e.push(192 | s >> 6), e.push(128 | 63 & s)) : 65535 >= s ? (e.push(224 | s >> 12), e.push(128 | s >> 6 & 63), e.push(128 | 63 & s)) : (e.push(240 | s >> 18), e.push(128 | s >> 12 & 63), e.push(128 | s >> 6 & 63), e.push(128 | 63 & s))
        }
        return new us(new jn(e).buffer)
    }, us.prototype = {
        get: function(t) {
            return this.b[t]
        },
        set: function(t, e) {
            this.b[t] = 255 & e
        },
        getString: function(t, e) {
            if (0 > t || 0 > e || t + e > this.length) throw new hn(bs.OutsideBounds);
            for (var i = "", s = this.b, n = String.fromCharCode, r = t, o = t + e; o > r;) {
                var a = s[r++];
                if (128 > a) {
                    if (0 == a) break;
                    i += n(a)
                } else if (224 > a) i += n((63 & a) << 6 | 127 & s[r++]);
                else if (240 > a) {
                    var l = s[r++];
                    i += n((31 & a) << 12 | (127 & l) << 6 | 127 & s[r++])
                } else {
                    var h = s[r++],
                        _ = s[r++],
                        u = (15 & a) << 18 | (127 & h) << 12 | (127 & _) << 6 | 127 & s[r++];
                    i += n((u >> 10) + 55232), i += n(1023 & u | 56320)
                }
            }
            return i
        },
        toString: function() {
            return this.getString(0, this.length)
        },
        __class__: us
    };
    var cs = function() {};
    n["haxe.crypto.Base64"] = cs, cs.__name__ = ["haxe", "crypto", "Base64"], cs.decode = function(t, e) {
        if (null == e && (e = !0), e)
            for (; 61 == l.cca(t, t.length - 1);) t = l.substr(t, 0, -1);
        return new ps(cs.BYTES).decodeBytes(us.ofString(t))
    };
    var ps = function(t) {
        for (var e = t.length, i = 1; e > 1 << i;) i++;
        if (i > 8 || e != 1 << i) throw new hn("BaseCode : base length must be a power of two.");
        this.base = t, this.nbits = i
    };
    n["haxe.crypto.BaseCode"] = ps, ps.__name__ = ["haxe", "crypto", "BaseCode"], ps.prototype = {
        initTable: function() {
            for (var t = [], e = 0; 256 > e;) {
                var i = e++;
                t[i] = -1
            }
            for (var s = 0, n = this.base.length; n > s;) {
                var r = s++;
                t[this.base.b[r]] = r
            }
            this.tbl = t
        },
        decodeBytes: function(t) {
            {
                var e = this.nbits;
                this.base
            }
            null == this.tbl && this.initTable();
            for (var i = this.tbl, s = t.length * e >> 3, n = us.alloc(s), r = 0, o = 0, a = 0, l = 0; s > l;) {
                for (; 8 > o;) {
                    o += e, r <<= e;
                    var h = i[t.get(a++)];
                    if (-1 == h) throw new hn("BaseCode : invalid encoded char");
                    r |= h
                }
                o -= 8, n.set(l++, r >> o & 255)
            }
            return n
        },
        __class__: ps
    };
    var gs = function(t, e) {
        this.elt = t, this.next = e
    };
    n["haxe.ds.GenericCell"] = gs, gs.__name__ = ["haxe", "ds", "GenericCell"], gs.prototype = {
        __class__: gs
    };
    var ds = function() {};
    n["haxe.ds.GenericStack"] = ds, ds.__name__ = ["haxe", "ds", "GenericStack"], ds.prototype = {
        add: function(t) {
            this.head = new gs(t, this.head)
        },
        remove: function(t) {
            for (var e = null, i = this.head; null != i;) {
                if (i.elt == t) {
                    null == e ? this.head = i.next : e.next = i.next;
                    break
                }
                e = i, i = i.next
            }
            return null != i
        },
        iterator: function() {
            var t = this.head;
            return {
                hasNext: function() {
                    return null != t
                },
                next: function() {
                    var e = t;
                    return t = e.next, e.elt
                }
            }
        },
        __class__: ds
    };
    var fs = function() {
        this.h = {}
    };
    n["haxe.ds.IntMap"] = fs, fs.__name__ = ["haxe", "ds", "IntMap"], fs.__interfaces__ = [ss], fs.prototype = {
        set: function(t, e) {
            this.h[t] = e
        },
        remove: function(t) {
            return this.h.hasOwnProperty(t) ? (delete this.h[t], !0) : !1
        },
        keys: function() {
            var t = [];
            for (var e in this.h) this.h.hasOwnProperty(e) && t.push(0 | e);
            return l.iter(t)
        },
        iterator: function() {
            return {
                ref: this.h,
                it: this.keys(),
                hasNext: function() {
                    return this.it.hasNext()
                },
                next: function() {
                    var t = this.it.next();
                    return this.ref[t]
                }
            }
        },
        __class__: fs
    };
    var ms = function() {
        this.h = {}, this.h.__keys__ = {}
    };
    n["haxe.ds.ObjectMap"] = ms, ms.__name__ = ["haxe", "ds", "ObjectMap"], ms.__interfaces__ = [ss], ms.prototype = {
        set: function(t, e) {
            var i = t.__id__ || (t.__id__ = ++ms.count);
            this.h[i] = e, this.h.__keys__[i] = t
        },
        keys: function() {
            var t = [];
            for (var e in this.h.__keys__) this.h.hasOwnProperty(e) && t.push(this.h.__keys__[e]);
            return l.iter(t)
        },
        __class__: ms
    };
    var ys = function() {
        this.h = {}
    };
    n["haxe.ds.StringMap"] = ys, ys.__name__ = ["haxe", "ds", "StringMap"], ys.__interfaces__ = [ss], ys.prototype = {
        set: function(t, e) {
            null != Fn[t] ? this.setReserved(t, e) : this.h[t] = e
        },
        get: function(t) {
            return null != Fn[t] ? this.getReserved(t) : this.h[t]
        },
        exists: function(t) {
            return null != Fn[t] ? this.existsReserved(t) : this.h.hasOwnProperty(t)
        },
        setReserved: function(t, e) {
            null == this.rh && (this.rh = {}), this.rh["$" + t] = e
        },
        getReserved: function(t) {
            return null == this.rh ? null : this.rh["$" + t]
        },
        existsReserved: function(t) {
            return null == this.rh ? !1 : this.rh.hasOwnProperty("$" + t)
        },
        remove: function(t) {
            return null != Fn[t] ? (t = "$" + t, null != this.rh && this.rh.hasOwnProperty(t) ? (delete this.rh[t], !0) : !1) : this.h.hasOwnProperty(t) ? (delete this.h[t], !0) : !1
        },
        keys: function() {
            var t = this.arrayKeys();
            return l.iter(t)
        },
        arrayKeys: function() {
            var t = [];
            for (var e in this.h) this.h.hasOwnProperty(e) && t.push(e);
            if (null != this.rh)
                for (var e in this.rh) 36 == e.charCodeAt(0) && t.push(e.substr(1));
            return t
        },
        __class__: ys
    };
    var bs = n["haxe.io.Error"] = {
        __ename__: ["haxe", "io", "Error"],
        __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"]
    };
    bs.Blocked = ["Blocked", 0], bs.Blocked.toString = r, bs.Blocked.__enum__ = bs, bs.Overflow = ["Overflow", 1], bs.Overflow.toString = r, bs.Overflow.__enum__ = bs, bs.OutsideBounds = ["OutsideBounds", 2], bs.OutsideBounds.toString = r, bs.OutsideBounds.__enum__ = bs, bs.Custom = function(t) {
        var e = ["Custom", 3, t];
        return e.__enum__ = bs, e.toString = r, e
    };
    var vs = function() {};
    n["haxe.io.FPHelper"] = vs, vs.__name__ = ["haxe", "io", "FPHelper"], vs.i32ToFloat = function(t) {
        var e = 1 - (t >>> 31 << 1),
            i = t >>> 23 & 255,
            s = 8388607 & t;
        return 0 == s && 0 == i ? 0 : e * (1 + Math.pow(2, -23) * s) * Math.pow(2, i - 127)
    }, vs.floatToI32 = function(t) {
        if (0 == t) return 0;
        var e;
        e = 0 > t ? -t : t;
        var i = Math.floor(Math.log(e) / .6931471805599453); - 127 > i ? i = -127 : i > 128 && (i = 128);
        var s = 8388607 & Math.round(8388608 * (e / Math.pow(2, i) - 1));
        return (0 > t ? -2147483648 : 0) | i + 127 << 23 | s
    }, vs.i64ToDouble = function(t, e) {
        var i = 1 - (e >>> 31 << 1),
            s = (e >> 20 & 2047) - 1023,
            n = 4294967296 * (1048575 & e) + 2147483648 * (t >>> 31) + (2147483647 & t);
        return 0 == n && -1023 == s ? 0 : i * (1 + Math.pow(2, -52) * n) * Math.pow(2, s)
    }, vs.doubleToI64 = function(t) {
        var e = vs.i64tmp;
        if (0 == t) e.low = 0, e.high = 0;
        else {
            var i;
            i = 0 > t ? -t : t;
            var s, n = Math.floor(Math.log(i) / .6931471805599453),
                r = 4503599627370496 * (i / Math.pow(2, n) - 1);
            s = Math.round(r);
            var o = 0 | s,
                a = s / 4294967296 | 0;
            e.low = o, e.high = (0 > t ? -2147483648 : 0) | n + 1023 << 20 | a
        }
        return e
    };
    var Ss = function(t) {
        this.__x = t
    };
    n["haxe.xml._Fast.NodeAccess"] = Ss, Ss.__name__ = ["haxe", "xml", "_Fast", "NodeAccess"], Ss.prototype = {
        resolve: function(t) {
            var e = this.__x.elementsNamed(t).next();
            if (null == e) {
                var i;
                throw i = this.__x.nodeType == y.Document ? "Document" : this.__x.get_nodeName(), new hn(i + " is missing element " + t)
            }
            return new As(e)
        },
        __class__: Ss
    };
    var Es = function(t) {
        this.__x = t
    };
    n["haxe.xml._Fast.AttribAccess"] = Es, Es.__name__ = ["haxe", "xml", "_Fast", "AttribAccess"], Es.prototype = {
        resolve: function(t) {
            if (this.__x.nodeType == y.Document) throw new hn("Cannot access document attribute " + t);
            var e = this.__x.get(t);
            if (null == e) throw new hn(this.__x.get_nodeName() + " is missing attribute " + t);
            return e
        },
        __class__: Es
    };
    var ws = function(t) {
        this.__x = t
    };
    n["haxe.xml._Fast.HasAttribAccess"] = ws, ws.__name__ = ["haxe", "xml", "_Fast", "HasAttribAccess"], ws.prototype = {
        resolve: function(t) {
            if (this.__x.nodeType == y.Document) throw new hn("Cannot access document attribute " + t);
            return this.__x.exists(t)
        },
        __class__: ws
    };
    var Is = function(t) {
        this.__x = t
    };
    n["haxe.xml._Fast.HasNodeAccess"] = Is, Is.__name__ = ["haxe", "xml", "_Fast", "HasNodeAccess"], Is.prototype = {
        __class__: Is
    };
    var Ts = function(t) {
        this.__x = t
    };
    n["haxe.xml._Fast.NodeListAccess"] = Ts, Ts.__name__ = ["haxe", "xml", "_Fast", "NodeListAccess"], Ts.prototype = {
        resolve: function(t) {
            for (var e = new _, i = this.__x.elementsNamed(t); i.hasNext();) {
                var s = i.next();
                e.add(new As(s))
            }
            return e
        },
        __class__: Ts
    };
    var As = function(t) {
        if (t.nodeType != y.Document && t.nodeType != y.Element) throw new hn("Invalid nodeType " + t.nodeType);
        this.x = t, this.node = new Ss(t), this.nodes = new Ts(t), this.att = new Es(t), this.has = new ws(t), this.hasNode = new Is(t)
    };
    n["haxe.xml.Fast"] = As, As.__name__ = ["haxe", "xml", "Fast"], As.prototype = {
        get_elements: function() {
            var t = this.x.elements();
            return {
                hasNext: s(t, t.hasNext),
                next: function() {
                    var e = t.next();
                    return null == e ? null : new As(e)
                }
            }
        },
        __class__: As
    };
    var Cs = function() {};
    n["haxe.xml.Parser"] = Cs, Cs.__name__ = ["haxe", "xml", "Parser"], Cs.parse = function(t, e) {
        null == e && (e = !1);
        var i = y.createDocument();
        return Cs.doParse(t, e, 0, i), i
    }, Cs.doParse = function(t, e, i, s) {
        null == i && (i = 0);
        for (var n = null, r = 1, o = 1, a = null, h = 0, _ = 0, u = 0, c = t.charCodeAt(i), f = new g, m = 1, b = -1; c == c;) {
            switch (r) {
                case 0:
                    switch (c) {
                        case 10:
                        case 13:
                        case 9:
                        case 32:
                            break;
                        default:
                            r = o;
                            continue
                    }
                    break;
                case 1:
                    switch (c) {
                        case 60:
                            r = 0, o = 2;
                            break;
                        default:
                            h = i, r = 13;
                            continue
                    }
                    break;
                case 13:
                    if (60 == c) {
                        f.addSub(t, h, i - h);
                        var v = y.createPCData(f.b);
                        f = new g, s.addChild(v), _++, r = 0, o = 2
                    } else 38 == c && (f.addSub(t, h, i - h), r = 18, m = 13, h = i + 1);
                    break;
                case 17:
                    if (93 == c && 93 == t.charCodeAt(i + 1) && 62 == t.charCodeAt(i + 2)) {
                        var S = y.createCData(l.substr(t, h, i - h));
                        s.addChild(S), _++, i += 2, r = 1
                    }
                    break;
                case 2:
                    switch (c) {
                        case 33:
                            if (91 == t.charCodeAt(i + 1)) {
                                if (i += 2, "CDATA[" != l.substr(t, i, 6).toUpperCase()) throw new hn("Expected <![CDATA[");
                                i += 5, r = 17, h = i + 1
                            } else if (68 == t.charCodeAt(i + 1) || 100 == t.charCodeAt(i + 1)) {
                                if ("OCTYPE" != l.substr(t, i + 2, 6).toUpperCase()) throw new hn("Expected <!DOCTYPE");
                                i += 8, r = 16, h = i + 1
                            } else {
                                if (45 != t.charCodeAt(i + 1) || 45 != t.charCodeAt(i + 2)) throw new hn("Expected <!--");
                                i += 2, r = 15, h = i + 1
                            }
                            break;
                        case 63:
                            r = 14, h = i;
                            break;
                        case 47:
                            if (null == s) throw new hn("Expected node name");
                            h = i + 1, r = 0, o = 10;
                            break;
                        default:
                            r = 3, h = i;
                            continue
                    }
                    break;
                case 3:
                    if (!(c >= 97 && 122 >= c || c >= 65 && 90 >= c || c >= 48 && 57 >= c || 58 == c || 46 == c || 95 == c || 45 == c)) {
                        if (i == h) throw new hn("Expected node name");
                        n = y.createElement(l.substr(t, h, i - h)), s.addChild(n), _++, r = 0, o = 4;
                        continue
                    }
                    break;
                case 4:
                    switch (c) {
                        case 47:
                            r = 11;
                            break;
                        case 62:
                            r = 9;
                            break;
                        default:
                            r = 5, h = i;
                            continue
                    }
                    break;
                case 5:
                    if (!(c >= 97 && 122 >= c || c >= 65 && 90 >= c || c >= 48 && 57 >= c || 58 == c || 46 == c || 95 == c || 45 == c)) {
                        var E;
                        if (h == i) throw new hn("Expected attribute name");
                        if (E = l.substr(t, h, i - h), a = E, n.exists(a)) throw new hn("Duplicate attribute");
                        r = 0, o = 6;
                        continue
                    }
                    break;
                case 6:
                    switch (c) {
                        case 61:
                            r = 0, o = 7;
                            break;
                        default:
                            throw new hn("Expected =")
                    }
                    break;
                case 7:
                    switch (c) {
                        case 34:
                        case 39:
                            f = new g, r = 8, h = i + 1, b = c;
                            break;
                        default:
                            throw new hn('Expected "')
                    }
                    break;
                case 8:
                    switch (c) {
                        case 38:
                            f.addSub(t, h, i - h), r = 18, m = 8, h = i + 1;
                            break;
                        case 62:
                            if (e) throw new hn("Invalid unescaped " + String.fromCharCode(c) + " in attribute value");
                            if (c == b) {
                                f.addSub(t, h, i - h);
                                var w = f.b;
                                f = new g, n.set(a, w), r = 0, o = 4
                            }
                            break;
                        case 60:
                            if (e) throw new hn("Invalid unescaped " + String.fromCharCode(c) + " in attribute value");
                            if (c == b) {
                                f.addSub(t, h, i - h);
                                var I = f.b;
                                f = new g, n.set(a, I), r = 0, o = 4
                            }
                            break;
                        default:
                            if (c == b) {
                                f.addSub(t, h, i - h);
                                var T = f.b;
                                f = new g, n.set(a, T), r = 0, o = 4
                            }
                    }
                    break;
                case 9:
                    i = Cs.doParse(t, e, i, n), h = i, r = 1;
                    break;
                case 11:
                    switch (c) {
                        case 62:
                            r = 1;
                            break;
                        default:
                            throw new hn("Expected >")
                    }
                    break;
                case 12:
                    switch (c) {
                        case 62:
                            return 0 == _ && s.addChild(y.createPCData("")), i;
                        default:
                            throw new hn("Expected >")
                    }
                    break;
                case 10:
                    if (!(c >= 97 && 122 >= c || c >= 65 && 90 >= c || c >= 48 && 57 >= c || 58 == c || 46 == c || 95 == c || 45 == c)) {
                        if (h == i) throw new hn("Expected node name");
                        var A = l.substr(t, h, i - h);
                        if (A != function() {
                            var t;
                            if (s.nodeType != y.Element) throw new hn("Bad node type, expected Element but found " + s.nodeType);
                            return t = s.nodeName
                        }(this)) throw new hn("Expected </" + function() {
                            var t;
                            if (s.nodeType != y.Element) throw "Bad node type, expected Element but found " + s.nodeType;
                            return t = s.nodeName
                        }(this) + ">");
                        r = 0, o = 12;
                        continue
                    }
                    break;
                case 15:
                    if (45 == c && 45 == t.charCodeAt(i + 1) && 62 == t.charCodeAt(i + 2)) {
                        var C = y.createComment(l.substr(t, h, i - h));
                        s.addChild(C), _++, i += 2, r = 1
                    }
                    break;
                case 16:
                    if (91 == c) u++;
                    else if (93 == c) u--;
                    else if (62 == c && 0 == u) {
                        var x = y.createDocType(l.substr(t, h, i - h));
                        s.addChild(x), _++, r = 1
                    }
                    break;
                case 14:
                    if (63 == c && 62 == t.charCodeAt(i + 1)) {
                        i++;
                        var P = l.substr(t, h + 1, i - h - 2),
                            O = y.createProcessingInstruction(P);
                        s.addChild(O), _++, r = 1
                    }
                    break;
                case 18:
                    if (59 == c) {
                        var M = l.substr(t, h, i - h);
                        if (35 == M.charCodeAt(0)) {
                            var R;
                            R = p.parseInt(120 == M.charCodeAt(1) ? "0" + l.substr(M, 1, M.length - 1) : l.substr(M, 1, M.length - 1)), f.b += String.fromCharCode(R)
                        } else if (Cs.escapes.exists(M)) f.add(Cs.escapes.get(M));
                        else {
                            if (e) throw new hn("Undefined entity: " + M);
                            f.b += p.string("&" + M + ";")
                        }
                        h = i + 1, r = m
                    } else if (!(c >= 97 && 122 >= c || c >= 65 && 90 >= c || c >= 48 && 57 >= c || 58 == c || 46 == c || 95 == c || 45 == c) && 35 != c) {
                        if (e) throw new hn("Invalid character in entity: " + String.fromCharCode(c));
                        f.b += "&", f.addSub(t, h, i - h), i--, h = i + 1, r = m
                    }
            }
            c = d.fastCodeAt(t, ++i)
        }
        if (1 == r && (h = i, r = 13), 13 == r) {
            if (i != h || 0 == _) {
                f.addSub(t, h, i - h);
                var B = y.createPCData(f.b);
                s.addChild(B), _++
            }
            return i
        }
        if (!e && 18 == r && 13 == m) {
            f.b += "&", f.addSub(t, h, i - h);
            var D = y.createPCData(f.b);
            return s.addChild(D), _++, i
        }
        throw new hn("Unexpected end")
    };
    var xs = function(t) {
        this.output = new g, this.pretty = t
    };
    n["haxe.xml.Printer"] = xs, xs.__name__ = ["haxe", "xml", "Printer"], xs.print = function(t, e) {
        null == e && (e = !1);
        var i = new xs(e);
        return i.writeNode(t, ""), i.output.b
    }, xs.prototype = {
        writeNode: function(t, e) {
            var i = t.nodeType;
            switch (i) {
                case 2:
                    this.output.b += p.string(e + "<![CDATA["), this.write(d.trim(function() {
                        var e;
                        if (t.nodeType == y.Document || t.nodeType == y.Element) throw new hn("Bad node type, unexpected " + t.nodeType);
                        return e = t.nodeValue
                    }(this))), this.output.b += "]]>", this.pretty && (this.output.b += "");
                    break;
                case 3:
                    var s;
                    if (t.nodeType == y.Document || t.nodeType == y.Element) throw new hn("Bad node type, unexpected " + t.nodeType);
                    s = t.nodeValue, s = new a("[\n\r	]+", "g").replace(s, ""), s = "<!--" + s + "-->", this.output.b += null == e ? "null" : "" + e, this.write(d.trim(s)), this.pretty && (this.output.b += "");
                    break;
                case 6:
                    for (var n = function() {
                        var e;
                        if (t.nodeType != y.Document && t.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + t.nodeType);
                        return e = l.iter(t.children)
                    }(this); n.hasNext();) {
                        var r = n.next();
                        this.writeNode(r, e)
                    }
                    break;
                case 0:
                    this.output.b += p.string(e + "<"), this.write(function() {
                        var e;
                        if (t.nodeType != y.Element) throw new hn("Bad node type, expected Element but found " + t.nodeType);
                        return e = t.nodeName
                    }(this));
                    for (var o = t.attributes(); o.hasNext();) {
                        var h = o.next();
                        this.output.b += p.string(" " + h + '="'), this.write(d.htmlEscape(t.get(h), !0)), this.output.b += '"'
                    }
                    if (this.hasChildren(t)) {
                        this.output.b += ">", this.pretty && (this.output.b += "");
                        for (var _ = function() {
                            var e;
                            if (t.nodeType != y.Document && t.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + t.nodeType);
                            return e = l.iter(t.children)
                        }(this); _.hasNext();) {
                            var u = _.next();
                            this.writeNode(u, this.pretty ? e + "	" : e)
                        }
                        this.output.b += p.string(e + "</"), this.write(function() {
                            var e;
                            if (t.nodeType != y.Element) throw new hn("Bad node type, expected Element but found " + t.nodeType);
                            return e = t.nodeName
                        }(this)), this.output.b += ">", this.pretty && (this.output.b += "")
                    } else this.output.b += "/>", this.pretty && (this.output.b += "");
                    break;
                case 1:
                    var c;
                    if (t.nodeType == y.Document || t.nodeType == y.Element) throw new hn("Bad node type, unexpected " + t.nodeType);
                    c = t.nodeValue, 0 != c.length && (this.write(e + d.htmlEscape(c)), this.pretty && (this.output.b += ""));
                    break;
                case 5:
                    this.write("<?" + function() {
                        var e;
                        if (t.nodeType == y.Document || t.nodeType == y.Element) throw new hn("Bad node type, unexpected " + t.nodeType);
                        return e = t.nodeValue
                    }(this) + "?>");
                    break;
                case 4:
                    this.write("<!DOCTYPE " + function() {
                        var e;
                        if (t.nodeType == y.Document || t.nodeType == y.Element) throw new hn("Bad node type, unexpected " + t.nodeType);
                        return e = t.nodeValue
                    }(this) + ">")
            }
        },
        write: function(t) {
            this.output.b += null == t ? "null" : "" + t
        },
        hasChildren: function(t) {
            for (var e = function() {
                var e;
                if (t.nodeType != y.Document && t.nodeType != y.Element) throw new hn("Bad node type, expected Element or Document but found " + t.nodeType);
                return e = l.iter(t.children)
            }(this); e.hasNext();) {
                var i = e.next(),
                    s = i.nodeType;
                switch (s) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (0 != d.ltrim(function() {
                            var t;
                            if (i.nodeType == y.Document || i.nodeType == y.Element) throw new hn("Bad node type, unexpected " + i.nodeType);
                            return t = i.nodeValue
                        }(this)).length) return !0
                }
            }
            return !1
        },
        __class__: xs
    };
    var Ps = function() {
        this.classString = "abstract", this.id = Ps.uid++, this.name = "", this.position = new ks(0, 0), this.velocity = new ks(0, 0), this.rotation = 0, this.autoRender = !0, this.isGrouped = !1, this.isGroup = !1, this.broadcaster = new sn
    };
    n["ice.GameObject"] = Ps, Ps.__name__ = ["ice", "GameObject"], Ps.prototype = {
        clone: function() {
            var t = m.createInstance(_n.getClass(this), []);
            return t.name = this.name, t.position = this.position.clone(), t.velocity = this.velocity.clone(), t.rotation = this.rotation, t.autoRender = this.autoRender, t
        },
        start: function() {},
        stop: function() {},
        compile: function() {},
        render: function() {},
        flipVertical: function() {
            return this
        },
        flipHorizontal: function() {
            return this
        },
        scale: function() {
            return this
        },
        rotate: function() {},
        getBounds: function() {
            return this
        },
        drawShapeAt: function() {},
        getRoot: function() {
            return null != this.parent ? this.parent.getRoot() : this
        },
        getGlobalPosition: function() {
            return this.isGrouped ? this.position.clone().plus(this.parentGroup.getGlobalPosition()) : this.position.clone()
        },
        importObject: function(t) {
            ln.importProp(this, "name", t, "String"), ln.importProp(this, "position", t, "Vector"), ln.importProp(this, "rotation", t), ln.importProp(this, "autoRender", t, "Boolean"), this.autoRender = !1
        },
        _getLocalBounds: function() {
            var t = this.getGlobalPosition(),
                e = {
                    xMin: this.xMin - t.x,
                    xMax: this.xMax - t.x,
                    yMin: this.yMin - t.y,
                    yMax: this.yMax - t.y
                };
            return e
        },
        _getParentBounds: function() {
            var t = this._getLocalBounds();
            return t.xMin += this.position.x, t.xMax += this.position.x, t.yMin += this.position.y, t.yMax += this.position.y, t
        },
        _cloneProp: function(t, e) {
            c.setField(e, t, c.field(this, t))
        },
        sound: function(t) {
            null == this._root && (this._root = this.getRoot()), this._root.broadcaster.broadcastMessage("onSound", t)
        },
        __class__: Ps
    };
    var Os = function() {
        Ps.call(this), this.removeAll()
    };
    n["ice.Container"] = Os, Os.__name__ = ["ice", "Container"], Os.__super__ = Ps, Os.prototype = e(Ps.prototype, {
        start: function() {
            Ps.prototype.start.call(this);
            for (var t = this._children.iterator(); t.hasNext();) {
                var e = t.next();
                e.start()
            }
        },
        stop: function() {
            Ps.prototype.stop.call(this);
            for (var t = this._children.iterator(); t.hasNext();) {
                var e = t.next();
                e.stop()
            }
        },
        render: function(t) {
            for (var e = this._children.iterator(); e.hasNext();) {
                var i = e.next();
                i.render(t)
            }
        },
        addObject: function(t) {
            t.parent = this, this._children.h[t.id] = t;
            var e = this._depths.length;
            return this._depths[e] = t, t.zIndex = e, t
        },
        removeObject: function(t) {
            return this._children.remove(t.id), this._depths = this._depths.splice(t.zIndex, 1), t
        },
        removeAll: function() {
            this._children = new fs, this._nameToItem = new ys, this._depths = []
        },
        getObject: function(t) {
            return this._children.h[t]
        },
        getObjectById: function(t) {
            return this._children.h[t]
        },
        getObjectByDepth: function(t) {
            return this._depths[t]
        },
        _copyInstanceNames: function() {
            for (var t = this._children.iterator(); t.hasNext();) {
                var e = t.next();
                if (Object.prototype.hasOwnProperty.call(e, "name") && null != c.field(e, "name") && "" != c.field(e, "name")) {
                    var i = c.field(e, "name");
                    this._nameToItem.set(i, e)
                }
                if (Object.prototype.hasOwnProperty.call(e, "isGroup") && e.isGroup) {
                    var s;
                    s = _n.__cast(e, Os), s._copyInstanceNames()
                }
            }
        },
        getObjectByName: function(t) {
            return this._nameToItem.get(t)
        },
        getContainerByName: function(t) {
            return this._nameToItem.get(t)
        },
        importObject: function(t) {
            Ps.prototype.importObject.call(this, t), this._importObjects(t)
        },
        _importObjects: function(t) {
            for (var e = t.nodes.resolve("Objects").iterator(); null != e.head;) {
                var i;
                i = function() {
                    var t;
                    return e.val = e.head[0], e.head = e.head[1], t = e.val
                }(this);
                for (var s = i.get_elements(); s.hasNext();) {
                    var n, r = s.next();
                    n = r.att.resolve(r.has.resolve("class") ? "class" : "classString");
                    var o = this._createInstance(n);
                    o.importObject(r), this.addObject(o)
                }
            }
        },
        _applyPropertyToChildren: function(t) {
            if (Object.prototype.hasOwnProperty.call(this, t))
                for (var e = this._children.iterator(); e.hasNext();) {
                    var i = e.next();
                    c.setField(i, t, c.field(this, t))
                }
        },
        _createInstance: function(t) {
            switch (t) {
                case "Group":
                    return new Us;
                case "ConvexPolygon":
                    return new Xs;
                case "Rectangle":
                    return new Ws;
                case "Target":
                    return new en;
                case "Light":
                    return new Gs;
                case "Decal":
                    return new Rs;
                case "Circle":
                    return new Ys;
                case "HideOut":
                    return new Ks;
                case "Ring":
                    return new zs;
                case "PolyBumper":
                    return new Zs;
                case "MovableObject":
                    return new Hs;
                case "Plunger":
                    return new $s;
                case "Ramp":
                    return new tn;
                case "Flipper":
                    return new Vs;
                case "PinballFlipper":
                    return new qs;
                case "CircleBumper":
                    return new Js;
                case "Tilt":
                    return new Ds;
                case "MultiShape":
                    return new Ns;
                case "Tube":
                    return new Fs;
                case "RegularPolygon":
                    return new Qs;
                default:
                    throw new hn("Class with name: " + t + " was not found. Invalid xml?")
            }
        },
        clone: function() {
            for (var t = Ps.prototype.clone.call(this), e = this._children.iterator(); e.hasNext();) {
                var i = e.next();
                t.addObject(i.clone())
            }
            return t._copyInstanceNames(), t
        },
        __class__: Os
    });
    var Ms = function() {
        Ps.call(this), this.useSymbol = !1, this.symbolID = "", this.symbolXScale = 100, this.symbolYScale = 100, this.symbolRotation = 0, this.symbolAlpha = 100, this.fillColor = 6710886, this.fillAlpha = 100, this.lineWidth = 1, this.lineColor = 0, this.lineAlpha = 100
    };
    n["ice.GraphicsObject"] = Ms, Ms.__name__ = ["ice", "GraphicsObject"], Ms.__super__ = Ps, Ms.prototype = e(Ps.prototype, {
        render: function(t) {
            this.mc = t.createEmptyChild("physicsObject_" + this.id, this.zIndex), this.mc.set_x(this.position.x), this.mc.set_y(this.position.y), this._render(this.mc)
        },
        _render: function(t) {
            this.useSymbol ? (t.createChild(this.symbolID, "symbol", 0), t.set_xScale(this.symbolXScale), t.set_yScale(this.symbolYScale), t.set_rotation(this.symbolRotation / Math.PI * 180), t.set_alpha(this.symbolAlpha)) : this.autoRender && this.drawShapeAt(t, 0, 0, this.rotation)
        },
        rotate: function(t) {
            this.symbolRotation += t
        },
        scale: function(t) {
            return this.symbolXScale *= t, this.symbolYScale *= t, this
        },
        clone: function() {
            var t = Ps.prototype.clone.call(this);
            return t.useSymbol = this.useSymbol, t.symbolID = this.symbolID, t.symbolXScale = this.symbolXScale, t.symbolYScale = this.symbolYScale, t.symbolRotation = this.symbolRotation, t.symbolAlpha = this.symbolAlpha, t.fillColor = this.fillColor, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, t.lineColor = this.lineColor, t.lineAlpha = this.lineAlpha, t
        },
        importObject: function(t) {
            Ps.prototype.importObject.call(this, t), ln.importProp(this, "useSymbol", t, "Boolean"), ln.importProp(this, "symbolID", t, "String"), ln.importProp(this, "symbolXScale", t), ln.importProp(this, "symbolYScale", t), ln.importProp(this, "symbolRotation", t), ln.importProp(this, "symbolAlpha", t), ln.importProp(this, "fillColor", t, "Color"), ln.importProp(this, "fillAlpha", t), ln.importProp(this, "lineWidth", t), ln.importProp(this, "lineColor", t, "Color"), ln.importProp(this, "lineAlpha", t)
        },
        __class__: Ms
    });
    var Rs = function(t, e) {
        null == e && (e = 0), null == t && (t = 0), Ms.call(this), this.position.x = t, this.position.y = e, this.classString = "Decal", this.useSymbol = !0
    };
    n["ice.Decal"] = Rs, Rs.__name__ = ["ice", "Decal"], Rs.__super__ = Ms, Rs.prototype = e(Ms.prototype, {
        flipVertical: function(t) {
            return null != t && (this.position.y = 2 * t - this.position.y), this.symbolYScale *= -1, this.symbolRotation *= -1, this
        },
        flipHorizontal: function(t) {
            return null != t && (this.position.x = 2 * t - this.position.x), this.symbolXScale *= -1, this.symbolRotation *= -1, this
        },
        __class__: Rs
    });
    var Bs = function(t, e) {
        null == e && (e = 0), null == t && (t = 0), Ms.call(this), this.position.x = t, this.position.y = e, this.isEnabled = !0, this.bounceFriction = .2, this.slidingFriction = .02, this._useDefaultBounds = !0
    };
    n["ice.PhysicsObject"] = Bs, Bs.__name__ = ["ice", "PhysicsObject"], Bs.__super__ = Ms, Bs.prototype = e(Ms.prototype, {
        drawShape: function(t) {
            this.drawShapeAt(t, this.position.x, this.position.y, this.rotation)
        },
        drawShapeAt: function(t, e, i, s) {
            t.beginFill(this.fillColor, this.fillAlpha), t.lineStyle(this.lineWidth, this.lineColor, this.lineAlpha), this._drawShapeAt(t, e, i, s), t.endFill()
        },
        _drawShapeAt: function(t, e, i, s) {
            null == s && (s = 0)
        },
        flipVertical: function(t, e) {
            return null != t && (this.position.y = 2 * t - this.position.y), e || (this.symbolYScale *= -1, this.symbolRotation *= -1), this
        },
        flipHorizontal: function(t, e) {
            return null != t && (this.position.x = 2 * t - this.position.x), e || (this.symbolXScale *= -1, this.symbolRotation *= -1), this
        },
        detectCollision: function() {
            return !1
        },
        clone: function() {
            var t = Ms.prototype.clone.call(this);
            return t.isEnabled = this.isEnabled, t.bounceFriction = this.bounceFriction, t.slidingFriction = this.slidingFriction, t._useDefaultBounds = this._useDefaultBounds, t
        },
        getObjectRef: function(t) {
            for (var e = this.parent, i = 0, s = t.split("."); i < s.length;) {
                var n = s[i];
                if (++i, "_parent" == n) e = e.parent;
                else {
                    var r = e;
                    e = r.getObjectByName(n)
                }
            }
            return e
        },
        getBounds: function() {
            return this._useDefaultBounds && this.getDefaultBounds(), this
        },
        getDefaultBounds: function() {
            this._getDefaultBounds(this.getGlobalPosition())
        },
        _getDefaultBounds: function() {},
        importObject: function(t) {
            Ms.prototype.importObject.call(this, t), ln.importProp(this, "enabled", t, "Boolean"), ln.importProp(this, "bounceFriction", t), ln.importProp(this, "slidingFriction", t), this.autoRender = !1
        },
        __class__: Bs
    });
    var Ds = function() {
        Ps.call(this), this.classString = "Tilt", this.tiltAmount = new ks(0, -3), this.keyCode = nn.SPACE, this._hasMoved = !1, this._isDown = !1
    };
    n["ice.Tilt"] = Ds, Ds.__name__ = ["ice", "Tilt"], Ds.__super__ = Ps, Ds.prototype = e(Ps.prototype, {
        start: function() {
            nn.addListener(this)
        },
        stop: function() {
            this._isDown && this.upHandler(), nn.removeListener(this)
        },
        downHandler: function() {
            this._isDown || (this._hasMoved = !1, this.getRoot().broadcaster.addListener(this))
        },
        upHandler: function() {
            this._isDown && (this._isDown = !1)
        },
        onKeyDown: function(t) {
            t == this.keyCode && this.downHandler()
        },
        onKeyUp: function(t) {
            t == this.keyCode && this.upHandler()
        },
        onBeforeStepPhysics: function() {
            if (this._hasMoved) return void this.getRoot().broadcaster.removeListener(this);
            for (var t = 0, e = this.getRoot().getMoveableObjects(); t < e.length;) {
                var i = e[t];
                ++t, i.velocity.minus(this.tiltAmount)
            }
            this._hasMoved = !0
        },
        drawShapeAt: function(t) {
            t.createChild("TiltSymbol", "tilt", 0)
        },
        clone: function() {
            var t = Ps.prototype.clone.call(this);
            return t.tiltAmount = this.tiltAmount.clone(), t.keyCode = this.keyCode, t
        },
        importObject: function(t) {
            Ps.prototype.importObject.call(this, t), ln.importProp(this, "tiltAmount", t, "Vector"), ln.importProp(this, "keyCode", t)
        },
        __class__: Ds
    });
    var ks = function(t, e) {
        null == e && (e = 0), null == t && (t = 0), this.reset(t, e)
    };
    n["ice.Vector"] = ks, ks.__name__ = ["ice", "Vector"], ks.max = function(t, e) {
        return new ks(Math.max(t.x, e.x), Math.max(t.y, e.y))
    }, ks.min = function(t, e) {
        return new ks(Math.min(t.x, e.x), Math.min(t.y, e.y))
    }, ks.prototype = {
        toString: function() {
            return this.x + "," + this.y
        },
        reset: function(t, e) {
            return null == e && (e = 0), null == t && (t = 0), this.x = t, this.y = e, this
        },
        clone: function() {
            return new ks(this.x, this.y)
        },
        plus: function(t) {
            return this.x += t.x, this.y += t.y, this
        },
        minus: function(t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        scale: function(t) {
            return this.x *= t, this.y *= t, this
        },
        getLength: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        setLength: function(t) {
            var e = this.getLength();
            return 0 != e ? this.scale(t / e) : this.x = t, this
        },
        getAngle: function() {
            return Math.atan2(this.y, this.x)
        },
        setAngle: function(t) {
            var e = this.getLength();
            return this.x = e * Math.cos(t), this.y = e * Math.sin(t), this
        },
        rotate: function(t) {
            var e = Math.cos(t),
                i = Math.sin(t),
                s = this.x * e - this.y * i;
            return this.y = this.x * i + this.y * e, this.x = s, this
        },
        rotateAround: function(t, e) {
            return this.minus(t), this.rotate(e), this.plus(t), this
        },
        reverse: function() {
            return this.x *= -1, this.y *= -1, this
        },
        __class__: ks
    };
    var Ls = function(t) {
        this._isStarted = !1, this.airFriction = .01, an.setSymbolFactoryCallback(t), Os.call(this), this.gravity = new ks(0, 1), this.isMovableCollisions = !0
    };
    n["ice.containers.Engine"] = Ls, Ls.__name__ = ["ice", "containers", "Engine"], Ls.__super__ = Os, Ls.prototype = e(Os.prototype, {
        render: function(t) {
            this.mc = t, Os.prototype.render.call(this, t)
        },
        start: function() {
            this._isStarted || (this._isStarted = !0, this._isPaused = !1, Os.prototype.start.call(this))
        },
        stop: function() {
            this._isStarted && (this._isStarted = !1, Os.prototype.stop.call(this))
        },
        pause: function() {
            this._isStarted && (this._isPaused = !this._isPaused)
        },
        compile: function() {
            this._copyInstanceNames(), this._fixedObjects = new fs, this._movableObjects = [];
            for (var t = this._children.iterator(); t.hasNext();) {
                var e = t.next();
                this.compileObject(e)
            }
            var i = 0;
            this._leftBounds = [], this._rightBounds = [], this._topBounds = [], this._bottomBounds = [];
            for (var s = this._fixedObjects.iterator(); s.hasNext();) {
                var n = s.next();
                n.getBounds(), this._rightBounds[i] = this._leftBounds[i] = this._bottomBounds[i] = this._topBounds[i] = n, i++
            }
            this._lastIndex = i - 1, this._leftBounds.sort(function(t, e) {
                return t.xMax > e.xMax ? -1 : 1
            }), this._rightBounds.sort(function(t, e) {
                return t.xMin < e.xMin ? -1 : 1
            }), this._topBounds.sort(function(t, e) {
                return t.yMax > e.yMax ? -1 : 1
            }), this._bottomBounds.sort(function(t, e) {
                return t.yMin < e.yMin ? -1 : 1
            });
            for (var r = 0, o = this._movableObjects; r < o.length;) {
                var a = o[r];
                ++r, this.compileMovableObject(a)
            }
            this.updateMovableObjects()
        },
        renderBounds: function(t) {
            for (var e = this._children.iterator(); e.hasNext();) {
                var i = e.next();
                t.lineStyle(1, 1193046), t.moveTo(i.xMin, i.yMin), t.lineTo(i.xMin, i.yMax), t.lineTo(i.xMax, i.yMax), t.lineTo(i.xMax, i.yMin), t.lineTo(i.xMin, i.yMin)
            }
        },
        getGlobalPosition: function() {
            return new ks(0, 0)
        },
        getRoot: function() {
            return this
        },
        stepPhysics: function(t) {
            null == t && (t = 0), this.broadcaster.broadcastMessage("onBeforeStepPhysics", {
                engine: this
            });
            for (var e = this._activeMovableObjects, i = e.length, s = 0; s < e.length;) {
                var n = e[s];
                ++s, n.velocity.plus(this.gravity), n.velocity.scale(1 - this.airFriction), n.position.plus(n.velocity), n.rotationSpeed *= 1 - n.rotationFriction, n.rotation += n.rotationSpeed
            }
            if (this.isMovableCollisions)
                for (var r = 0, o = i - 1; o > r;)
                    for (var a = r++, l = a + 1; i > l;) {
                        var h = l++;
                        e[a].level == e[h].level && e[a].detectCollision(e[h])
                    }
            for (var _ = 0; _ < e.length;) {
                var u = e[_];
                ++_;
                var c = u.position.x - u.radius - u.xMin,
                    p = u.position.x + u.radius - u.xMax,
                    g = u.position.y - u.radius - u.yMin,
                    d = u.position.y + u.radius - u.yMax;
                0 > c + p ? (this.moveLeftBound(u, c), this.moveRightBound(u, p)) : (this.moveRightBound(u, p), this.moveLeftBound(u, c)), 0 > g + d ? (this.moveTopBound(u, g), this.moveBottomBound(u, d)) : (this.moveBottomBound(u, d), this.moveTopBound(u, g));
                for (var f = new fs, m = new fs, y = u.contacts, b = u.activeObjects.iterator(); b.hasNext();) {
                    var v = b.next();
                    if (v.isEnabled) {
                        if (null == v.levels) continue;
                        if (v.levels[u.level] && v.detectCollision(u)) {
                            var S = v.id;
                            f.h[S] = v, null == y.h[S] ? m.h[S] = v : y.remove(S)
                        }
                    }
                }
                for (var E = y.keys(); E.hasNext();) {
                    var w = E.next();
                    y.h[w].broadcaster.broadcastMessage("onExit", {
                        fixedObject: y.h[w],
                        movableObject: u
                    })
                }
                for (var I = m.keys(); I.hasNext();) {
                    var T = I.next();
                    m.h[T].broadcaster.broadcastMessage("onEnter", {
                        fixedObject: m.h[T],
                        movableObject: u
                    })
                }
                u.contacts = f
            }
            this.broadcaster.broadcastMessage("onAfterStepPhysics", {
                engine: this
            })
        },
        compileObject: function(t) {
            if (null != c.field(t, "compile") && t.compile(), _n.__instanceof(t, Us))
                for (var e = t, i = e._children.iterator(); i.hasNext();) {
                    var s = i.next();
                    this.compileObject(s)
                } else _n.__instanceof(t, js) ? this.addFixedObject(t) : _n.__instanceof(t, Hs) && this.addMovableObject(t)
        },
        compileMovableObject: function(t) {
            t.xMin = -1e4, t.xMax = 1e4, t.yMin = -1e4, t.yMax = 1e4, t.activeObjects = new fs, t.rightIndex = -1, t.leftIndex = -1, t.bottomIndex = -1, t.topIndex = -1;
            for (var e = this._fixedObjects.iterator(); e.hasNext();) {
                var i = e.next();
                i.vActive[t.id] = !0, i.hActive[t.id] = !0, t.activeObjects.h[i.id] = i
            }
        },
        updateMovableObjects: function() {
            this._activeMovableObjects = [];
            for (var t = 0, e = this._movableObjects; t < e.length;) {
                var i = e[t];
                ++t, i.isEnabled && this._activeMovableObjects.push(i)
            }
        },
        addMovableObject: function(t) {
            return this._movableObjects.push(t), t
        },
        addFixedObject: function(t) {
            return this._fixedObjects.h[t.id] = t, t.vActive = [], t.hActive = [], t
        },
        moveLeftBound: function(t, e) {
            if (t.xMin += e, 0 > e)
                for (; t.leftIndex > -1;) {
                    var i = this._leftBounds[t.leftIndex];
                    if (!(i.xMax > t.xMin)) break;
                    i.hActive[t.id] = !0, --t.leftIndex, i.vActive[t.id] && (t.activeObjects.h[i.id] = i)
                } else
                    for (; t.leftIndex < this._lastIndex;) {
                        var s = this._leftBounds[t.leftIndex + 1];
                        if (!(s.xMax < t.xMin)) break;
                        s.hActive[t.id] = !1, ++t.leftIndex, s.vActive[t.id] && t.activeObjects.remove(s.id)
                    }
        },
        moveRightBound: function(t, e) {
            if (t.xMax += e, 0 > e)
                for (; t.rightIndex < this._lastIndex;) {
                    var i = this._rightBounds[t.rightIndex + 1];
                    if (!(i.xMin > t.xMax)) break;
                    i.hActive[t.id] = !1, ++t.rightIndex, i.vActive[t.id] && t.activeObjects.remove(i.id)
                } else
                    for (; t.rightIndex > -1;) {
                        var s = this._rightBounds[t.rightIndex];
                        if (!(s.xMin < t.xMax)) break;
                        s.hActive[t.id] = !0, --t.rightIndex, s.vActive[t.id] && (t.activeObjects.h[s.id] = s)
                    }
        },
        moveTopBound: function(t, e) {
            if (t.yMin += e, 0 > e)
                for (; t.topIndex > -1;) {
                    var i = this._topBounds[t.topIndex];
                    if (!(i.yMax > t.yMin)) break;
                    i.vActive[t.id] = !0, --t.topIndex, i.hActive[t.id] && (t.activeObjects.h[i.id] = i)
                } else
                    for (; t.topIndex < this._lastIndex;) {
                        var s = this._topBounds[t.topIndex + 1];
                        if (!(s.yMax < t.yMin)) break;
                        s.vActive[t.id] = !1, ++t.topIndex, s.hActive[t.id] && t.activeObjects.remove(s.id)
                    }
        },
        moveBottomBound: function(t, e) {
            if (t.yMax += e, 0 > e)
                for (; t.bottomIndex < this._lastIndex;) {
                    var i = this._bottomBounds[t.bottomIndex + 1];
                    if (!(i.yMin > t.yMax)) break;
                    i.vActive[t.id] = !1, ++t.bottomIndex, i.hActive[t.id] && t.activeObjects.remove(i.id)
                } else
                    for (; t.bottomIndex > -1;) {
                        var s = this._bottomBounds[t.bottomIndex];
                        if (!(s.yMin < t.yMax)) break;
                        s.vActive[t.id] = !0, --t.bottomIndex, s.hActive[t.id] && (t.activeObjects.h[s.id] = s)
                    }
        },
        importXml: function(t) {
            var e = new As(t.firstElement());
            ln.importProp(this, "gravity", e, "Vector"), ln.importProp(this, "airFriction", e), js.defaultBounceFriction = p.parseFloat(e.att.resolve("bounceFriction")), js.defaultSlidingFriction = p.parseFloat(e.att.resolve("slidingFriction")), this._importObjects(e)
        },
        getMoveableObjects: function() {
            return this._movableObjects
        },
        __class__: Ls
    });
    var Us = function(t, e) {
        null == e && (e = 0), null == t && (t = 0), Os.call(this), this.position.x = t, this.position.y = e, this.isGroup = !0, this.isGrouped = !1
    };
    n["ice.containers.Group"] = Us, Us.__name__ = ["ice", "containers", "Group"], Us.__super__ = Os, Us.prototype = e(Os.prototype, {
        addObject: function(t) {
            return t.isGrouped = !0, t.parentGroup = this, Os.prototype.addObject.call(this, t)
        },
        removeObject: function(t) {
            return t.isGrouped = !1, t.parentGroup = null, Os.prototype.removeObject.call(this, t)
        },
        compile: function() {
            Os.prototype.compile.call(this);
            for (var t = this._children.iterator(); t.hasNext();) {
                var e = t.next();
                e.compile()
            }
        },
        flipVertical: function(t) {
            null == t && (t = this.position.y);
            for (var e = this._children.iterator(); e.hasNext();) {
                var i = e.next();
                i.flipVertical(0)
            }
            return this.position.y = 2 * t - this.position.y, this
        },
        flipHorizontal: function(t) {
            null == t && (t = this.position.x);
            for (var e = this._children.iterator(); e.hasNext();) {
                var i = e.next();
                i.flipHorizontal(0)
            }
            return this.position.x = 2 * t - this.position.x, this
        },
        scale: function(t) {
            for (var e = this._children.iterator(); e.hasNext();) {
                var i = e.next();
                i.scale(t), i.position.scale(t)
            }
            return this
        },
        rotate: function(t) {
            for (var e = this._children.iterator(); e.hasNext();) {
                var i = e.next();
                i.rotate(t), i.position.rotate(t)
            }
        },
        render: function(t) {
            this.mc = t.createEmptyChild("physicsObject_" + this.id, this.zIndex), this.mc.set_x(this.position.x), this.mc.set_y(this.position.y), Os.prototype.render.call(this, this.mc)
        },
        getBounds: function() {
            this.xMin = 999999, this.xMax = -999999, this.yMin = 999999, this.yMax = -999999;
            for (var t = this._children.iterator(); t.hasNext();) {
                var e = t.next();
                e.getBounds(), this.xMin = Math.min(this.xMin, e.xMin), this.xMax = Math.max(this.xMax, e.xMax), this.yMin = Math.min(this.yMin, e.yMin), this.yMax = Math.max(this.yMax, e.yMax)
            }
            return this
        },
        __class__: Us
    });
    var Ns = function(t, e, i) {
        null == i && (i = 0), null == e && (e = 0), null == t && (t = 0), Us.call(this, t, e), this.rotation = i, this.isGroup = !1
    };
    n["ice.containers.groups.MultiShape"] = Ns, Ns.__name__ = ["ice", "containers", "groups", "MultiShape"], Ns.__super__ = Us, Ns.prototype = e(Us.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(Us.prototype.clone.call(this), Ns), t.bounceFriction = this.bounceFriction, t.slidingFriction = this.slidingFriction, t.useSymbol = this.useSymbol, t.symbolID = this.symbolID, t.symbolXScale = this.symbolXScale, t.symbolYScale = this.symbolYScale, t.symbolRotation = this.symbolRotation, t.symbolAlpha = this.symbolAlpha, t.fillColor = this.fillColor, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, t.lineColor = this.lineColor, t.lineAlpha = this.lineAlpha, t.startLevel = this.startLevel, t.endLevel = this.endLevel, t.enabled = this.enabled, t.transparent = this.transparent, t
        },
        compile: function() {
            this._applyPropertyToChildren("bounceFriction"), this._applyPropertyToChildren("slidingFriction"), this._applyPropertyToChildren("fillColor"), this._applyPropertyToChildren("fillAlpha"), this._applyPropertyToChildren("lineWidth"), this._applyPropertyToChildren("lineColor"), this._applyPropertyToChildren("lineAlpha"), this._applyPropertyToChildren("startLevel"), this._applyPropertyToChildren("endLevel"), this._applyPropertyToChildren("enabled"), this._applyPropertyToChildren("transparent"), Us.prototype.compile.call(this)
        },
        render: function(t) {
            this.mc = t.createEmptyChild("physicsObject_" + this.id, this.zIndex), this.mc.set_x(this.position.x), this.mc.set_y(this.position.y), this.useSymbol ? this.mc.createChild(this.symbolID, "symbol", 0) : this.autoRender && this.drawShapeAt(this.mc, 0, 0, 0)
        },
        scale: function(t) {
            return this.symbolXScale *= t, this.symbolYScale *= t, this
        },
        rotate: function(t) {
            this.symbolRotation += t
        },
        flipVertical: function(t) {
            return null != t && (this.position.y = 2 * t - this.position.y), this.symbolYScale *= -1, this
        },
        flipHorizontal: function(t) {
            return null != t && (this.position.x = 2 * t - this.position.x), this.symbolXScale *= -1, this
        },
        drawShape: function(t) {
            this.drawShapeAt(t, this.position.x, this.position.y, 0)
        },
        drawShapeAt: function(t, e, i) {
            for (var s = this._children.iterator(); s.hasNext();) {
                var n = s.next();
                n.drawShapeAt(t, e + n.position.x, i + n.position.y, n.rotation)
            }
        },
        importObject: function(t) {
            Us.prototype.importObject.call(this, t), ln.importProp(this, "useSymbol", t, "Boolean"), ln.importProp(this, "symbolID", t), ln.importProp(this, "symbolXScale", t), ln.importProp(this, "symbolYScale", t), ln.importProp(this, "symbolRotation", t), ln.importProp(this, "symbolAlpha", t), ln.importProp(this, "autoRender", t, "Boolean"), ln.importProp(this, "fillColor", t, "Color"), ln.importProp(this, "fillAlpha", t), ln.importProp(this, "lineWidth", t), ln.importProp(this, "lineColor", t, "Color"), ln.importProp(this, "lineAlpha", t), ln.importProp(this, "startLevel", t), ln.importProp(this, "endLevel", t), ln.importProp(this, "enabled", t, "Boolean"), ln.importProp(this, "transparent", t, "Boolean"), ln.importProp(this, "bounceFriction", t), ln.importProp(this, "slidingFriction", t)
        },
        __class__: Ns
    });
    var Fs = function(t, e, i) {
        null == i && (i = 0), null == e && (e = 0), null == t && (t = 0), this.wallWidth = 10, this.width = 50, Ns.call(this, t, e, i), this.width = 50, this.wallWidth = 10, this._segments = [], this._appendSegment();
        var s = this._appendSegment();
        s.type = 1, this.classString = "Tube"
    };
    n["ice.containers.groups.multishapes.Tube"] = Fs, Fs.__name__ = ["ice", "containers", "groups", "multishapes", "Tube"], Fs.__super__ = Ns, Fs.prototype = e(Ns.prototype, {
        clone: function() {
            var t;
            t = _n.__cast(Ns.prototype.clone.call(this), Fs), t._segments = [];
            for (var e = 0, i = this._segments; e < i.length;) {
                var s = i[e];
                ++e;
                var n = {};
                t._segments.push(n);
                for (var r = 0, o = c.fields(n); r < o.length;) {
                    var a = o[r];
                    ++r, c.setField(n, a, c.field(s, a))
                }
            }
            return this._cloneProp("rotation", t), this._cloneProp("width", t), this._cloneProp("wallWidth", t), t
        },
        _insertSegment: function(t) {
            var e = {
                type: 0,
                len: 100,
                radius: 100,
                angle: Math.PI / 4,
                left: !0,
                right: !0,
                leftWall: null,
                rightWall: null
            };
            return this._segments.splice(t, 0, e), e
        },
        _appendSegment: function() {
            return this._insertSegment(this._segments.length)
        },
        _removeSegment: function(t) {
            this._segments.splice(t, 1)
        },
        flipVertical: function(t) {
            return Ns.prototype.flipVertical.call(this, t), this.rotation = Math.PI - this.rotation, this._mirror(), this
        },
        flipHorizontal: function(t) {
            return Ns.prototype.flipHorizontal.call(this, t), this.rotation *= -1, this._mirror(), this
        },
        _mirror: function() {
            for (var t = 0, e = this._segments; t < e.length;) {
                var i = e[t];
                ++t, i.radius *= -1;
                var s = i.left;
                i.left = i.right, i.right = s
            }
        },
        scale: function(t) {
            Ns.prototype.scale.call(this, t);
            for (var e = 0, i = this._segments; e < i.length;) {
                var s = i[e];
                ++e, 0 == s.type ? s.len *= t : s.radius *= t
            }
            return this.width *= t, this.wallWidth *= t, this
        },
        rotate: function(t) {
            Ns.prototype.rotate.call(this, t), this.rotation += t
        },
        compile: function() {
            this.removeAll(), this._renderPieces = [];
            for (var t = new ks(0, 0), e = this.rotation, i = this.width, s = this.wallWidth, n = 0, r = this._segments; n < r.length;) {
                var o = r[n];
                if (++n, o.leftWall = null, o.rightWall = null, 0 == o.type) {
                    var a = new ks(i / 2 + s / 2, o.len / 2).rotate(e).plus(t),
                        l = new ks(-i / 2 - s / 2, o.len / 2).rotate(e).plus(t),
                        h = new ks(0, o.len / 2).rotate(e).plus(t);
                    if (o.left) {
                        var _ = new Ws(a.x, a.y, e, s, o.len);
                        this.addObject(_), o.leftWall = _
                    }
                    if (o.right) {
                        var u = new Ws(l.x, l.y, e, s, o.len);
                        this.addObject(u), o.rightWall = u
                    }
                    this._renderPieces.push(new Ws(h.x, h.y, e, i, o.len)), t = new ks(0, o.len).rotate(e).plus(t)
                } else {
                    var c, p = new ks(o.radius, 0).rotate(e).plus(t);
                    c = e + (o.radius > 0 ? Math.PI - o.angle : 0);
                    var g = Math.abs(o.radius);
                    if (o.left) {
                        var d = new zs(p.x, p.y, c, o.angle, g - i / 2 - s, g - i / 2, !1);
                        this.addObject(d), o.leftWall = d
                    }
                    if (o.right) {
                        var f = new zs(p.x, p.y, c, o.angle, g + i / 2, g + i / 2 + s, !1);
                        this.addObject(f), o.rightWall = f
                    }
                    this._renderPieces.push(new zs(p.x, p.y, c, o.angle, g - i / 2, g + i / 2)), e += (o.radius < 0 ? 1 : -1) * o.angle, t = p.plus(new ks(g, 0).setAngle(o.radius > 0 ? Math.PI + e : e))
                }
            }
            Ns.prototype.compile.call(this)
        },
        drawShapeAt: function(t, e, i, s) {
            Ns.prototype.drawShapeAt.call(this, t, e, i, s);
            for (var n = 0, r = this._renderPieces; n < r.length;) {
                var o = r[n];
                ++n;
                var a = o.clone();
                a.fillColor = this.fillColor, a.fillAlpha = this.fillAlpha / 5, a.drawShapeAt(t, e + a.position.x, i + a.position.y, a.rotation)
            }
        },
        importObject: function(t) {
            Ns.prototype.importObject.call(this, t), ln.importProp(this, "width", t), ln.importProp(this, "wallWidth", t);
            var e = t.node.resolve("Segments").get_elements();
            for (this._segments = []; e.hasNext();) {
                var i = e.next(),
                    s = this._appendSegment();
                s.type = p.parseInt(i.att.resolve("type")), s.left = "true" == i.att.resolve("left") ? !0 : !1, s.right = "true" == i.att.resolve("right") ? !0 : !1, s.len = p.parseFloat(i.att.resolve("len")), s.radius = p.parseFloat(i.att.resolve("radius")), s.angle = p.parseFloat(i.att.resolve("angle"))
            }
        },
        __class__: Fs
    });
    var Gs = function(t, e) {
        null == e && (e = 0), null == t && (t = 0), Rs.call(this, t, e), this.classString = "Light", this.symbolID = "Light", this.state = !0
    };
    n["ice.decals.Light"] = Gs, Gs.__name__ = ["ice", "decals", "Light"], Gs.__super__ = Rs, Gs.prototype = e(Rs.prototype, {
        setState: function(t) {
            this.state = t, null != this.mc && (this.useSymbol ? this.mc.gotoAndPlay(t ? "on" : "off") : this.mc.set_alpha(t ? 100 : 25))
        },
        start: function() {
            this._initState = this.state
        },
        stop: function() {
            this.setState(this._initState)
        },
        clone: function() {
            var t = Rs.prototype.clone.call(this);
            return t.state = this.state, t
        },
        importObject: function(t) {
            Rs.prototype.importObject.call(this, t), ln.importProp(this, "state", t, "Boolean")
        },
        __class__: Gs
    });
    var js = function(t, e, i) {
        null == e && (e = 0), null == t && (t = 0), this.endLevel = 0, this.startLevel = 0, this.forceMultiplier = 1, this.rotationSpeed = 0, this.transparent = !1, this.nested = !1, Bs.call(this, t, e), this.bounceFriction = js.defaultBounceFriction, this.slidingFriction = js.defaultSlidingFriction, null != i && (this.rotation = i)
    };
    n["ice.physicobjects.FixedObject"] = js, js.__name__ = ["ice", "physicobjects", "FixedObject"], js.__super__ = Bs, js.prototype = e(Bs.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(Bs.prototype.clone.call(this), js), this._cloneProp("enabled", t), this._cloneProp("nested", t), this._cloneProp("transparent", t), this._cloneProp("rotation", t), this._cloneProp("rotationSpeed", t), this._cloneProp("forceMultiplier", t), this._cloneProp("startLevel", t), this._cloneProp("endLevel", t), this._cloneProp("zIndex", t), this._cloneProp("useDefaultBounds", t), this._cloneProp("xMin", t), this._cloneProp("xMax", t), this._cloneProp("yMin", t), this._cloneProp("yMax", t), t
        },
        rotate: function(t) {
            Bs.prototype.rotate.call(this, t), this.rotation += t
        },
        compile: function() {
            this.levels = [];
            for (var t = 0, e = this.endLevel + 1; e > t;) {
                var i = t++;
                this.levels[i] = i >= this.startLevel
            }
        },
        detectCollision: function(t) {
            return this._detectCollision(t, this.getGlobalPosition())
        },
        _detectCollision: function() {
            return !1
        },
        resolveCollision: function(t, e, i) {
            if (this.nested) return this.parent.resolveCollision(t, e, i);
            if (this.transparent) return !0; {
                var s = t.velocity.rotate(-e),
                    n = this.velocity.clone().plus(this.getRoot().velocity.clone().scale(1 / this.forceMultiplier));
                s.x
            }
            if (s.x *= (s.x < 0 ? -1 : 1) * (1 - this.bounceFriction), null != i && (t.position = i.clone().plus(new ks(0, t.radius).setAngle(e)), 0 != this.rotationSpeed)) {
                var r = rn.getDistance(i, this.position) * this.rotationSpeed,
                    o = rn.getAngle(this.position, i) - Math.PI / 2;
                n.x += Math.cos(o) * r, n.y += Math.sin(o) * r
            }
            if ((0 != n.x || 0 != n.y) && (n.rotate(-e), n.x > 0 && (s.x += n.x * this.forceMultiplier * (1 - this.bounceFriction))), t.isRollingEnabled) {
                var a, l = s.y - t.rotationSpeed * t.radius - n.y,
                    h = .7,
                    _ = .6,
                    u = t.mass * l,
                    c = h * t.mass;
                a = Math.abs(u) > c ? _ * t.mass * (0 > l ? 1 : -1) : -u, s.y += a / t.mass, t.rotationSpeed -= a / t.mass / t.radius
            } else s.y -= (s.y - n.y) * this.slidingFriction;
            var p = {
                angle: e,
                bounceSpeed: s.x,
                slidingSpeed: s.y,
                fixedObject: this,
                movableObject: t
            };
            return s.rotate(e), t.contactAngle = e, this.broadcaster.broadcastMessage("onCollision", p), !0
        },
        importObject: function(t) {
            Bs.prototype.importObject.call(this, t), ln.importProp(this, "enabled", t, "Boolean"), ln.importProp(this, "transparent", t, "Boolean"), ln.importProp(this, "forceMultiplier", t), ln.importProp(this, "rotation", t), ln.importProp(this, "startLevel", t), ln.importProp(this, "endLevel", t)
        },
        __class__: js
    });
    var Hs = function(t, e, i) {
        null == e && (e = 0), null == t && (t = 0), this.isStarted = !1, this.rotationFriction = .02, this.rotationSpeed = 0, this.rollingGrip = .5, this.isRollingEnabled = !1, this.mass = 1, this.contactAngle = 0, this.level = 0, this.maxSpeed = 30, this.radius = 20, Bs.call(this, t, e), null != i && (this.radius = i), this.contacts = new fs, this.fillColor = 0, this.bounceFriction = .3, this.rotation = 0, this.classString = "MovableObject"
    };
    n["ice.physicobjects.MovableObject"] = Hs, Hs.__name__ = ["ice", "physicobjects", "MovableObject"], Hs.__super__ = Bs, Hs.prototype = e(Bs.prototype, {
        setEnabled: function(t) {
            this.isEnabled = t, this.parent.updateMovableObjects(), this.isStarted && (t ? this.parent.broadcaster.addListener(this) : this.parent.broadcaster.removeListener(this))
        },
        start: function() {
            this.isStarted || (this.isStarted = !0, this._initVelocity = this.velocity.clone(), this._initPosition = this.position.clone(), this._initLevel = this.level, this.isEnabled && this.parent.broadcaster.addListener(this))
        },
        stop: function() {
            this.isStarted && (this.isStarted = !1, this.velocity = this._initVelocity, this.position = this._initPosition, this.level = this._initLevel, this.mc.set_x(this.position.x), this.mc.set_y(this.position.y), this.getDefaultBounds(), this.isEnabled && this.parent.broadcaster.removeListener(this))
        },
        clone: function() {
            var t;
            return t = _n.__cast(Bs.prototype.clone.call(this), Hs), t.radius = this.radius, t.fillColor = this.fillColor, t.level = this.level, t.contactAngle = this.contactAngle, t.mass = this.mass, t
        },
        scale: function(t) {
            return Bs.prototype.scale.call(this, t), this.radius *= t, this
        },
        hasContactWith: function(t) {
            return this.contacts.h.hasOwnProperty(t.id)
        },
        hasContact: function() {
            for (var t = this.contacts.iterator(); t.hasNext();) {
                {
                    t.next()
                }
                return !0
            }
            return !1
        },
        _getDefaultBounds: function(t) {
            this.xMin = t.x - this.radius, this.xMax = t.x + this.radius, this.yMin = t.y - this.radius, this.yMax = t.y + this.radius
        },
        _drawShapeAt: function(t, e, i, s) {
            null == s && (s = 0), t.drawCircle(e, i, this.radius)
        },
        onAfterStepPhysics: function() {
            this.mc.set_x(this.position.x), this.mc.set_y(this.position.y), this.mc.set_rotation(this.rotation / Math.PI * 180), this.velocity.getLength() > this.maxSpeed && this.velocity.setLength(this.maxSpeed)
        },
        detectCollision: function(t) {
            var e = t,
                i = this.radius + e.radius - rn.getDistance(this.position, e.position);
            if (0 >= i) return !1;
            var s = Math.PI / 2 - rn.getAngle(e.position, this.position);
            this.velocity.rotate(s), this.position.rotate(s), e.velocity.rotate(s), e.position.rotate(s);
            var n = Math.abs(this.mass * this.velocity.y - e.mass * e.velocity.y),
                r = this.mass / (this.mass + e.mass),
                o = {
                    bounceSpeed: this.velocity.y - e.velocity.y,
                    angle: s,
                    movableObject1: this,
                    movableObject2: e
                };
            if (this.position.y -= i * (1 - r), this.velocity.y -= n / this.mass * (1 - this.bounceFriction), this.velocity.x *= 1 - this.slidingFriction, e.position.y += i * r, e.velocity.y += n / e.mass * (1 - this.bounceFriction), e.velocity.x *= 1 - this.slidingFriction, this.isRollingEnabled) {
                var a = e.rotationSpeed * e.radius - this.rotationSpeed * this.radius,
                    l = -a / 5;
                this.velocity.x += l, this.rotationSpeed -= l / this.radius, e.velocity.x -= l, e.rotationSpeed += l / e.radius
            }
            return this.velocity.rotate(-s), this.position.rotate(-s), e.velocity.rotate(-s), e.position.rotate(-s), this.getRoot().broadcaster.broadcastMessage("onMovableCollision", o), !0
        },
        importObject: function(t) {
            Bs.prototype.importObject.call(this, t), ln.importProp(this, "radius", t), ln.importProp(this, "velocity", t, "Vector"), ln.importProp(this, "maxSpeed", t), ln.importProp(this, "dragForce", t), ln.importProp(this, "dragFriction", t), ln.importProp(this, "level", t), ln.importProp(this, "mass", t)
        },
        __class__: Hs
    });
    var Ys = function(t, e, i) {
        null == e && (e = 0), null == t && (t = 0), this.radius = 40, js.call(this, t, e), null != i && (this.radius = i), this.classString = "Circle"
    };
    n["ice.physicobjects.fixedobjects.Circle"] = Ys, Ys.__name__ = ["ice", "physicobjects", "fixedobjects", "Circle"], Ys.__super__ = js, Ys.prototype = e(js.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(js.prototype.clone.call(this), Ys), this._cloneProp("radius", t), t
        },
        scale: function(t) {
            return js.prototype.scale.call(this, t), this.radius *= t, this
        },
        _getDefaultBounds: function(t) {
            this.xMin = t.x - this.radius, this.xMax = t.x + this.radius, this.yMin = t.y - this.radius, this.yMax = t.y + this.radius
        },
        _detectCollision: function(t, e) {
            if (t.radius + this.radius - rn.getDistance(t.position, e) < 0) return !1;
            var i = rn.getAngle(t.position, e),
                s = e.clone().plus(new ks(0, this.radius).setAngle(i));
            return this.resolveCollision(t, i, s)
        },
        _drawShapeAt: function(t, e, i, s) {
            null == s && (s = 0), t.drawCircle(e, i, this.radius)
        },
        importObject: function(t) {
            js.prototype.importObject.call(this, t), ln.importProp(this, "radius", t)
        },
        __class__: Ys
    });
    var Xs = function(t, e, i, s, n) {
        null == e && (e = 0), null == t && (t = 0), this.border = 10, js.call(this, t, e, i), null != s && (this.border = s), this.points = n, null == this.points && (this.points = [new ks(-30, -30), new ks(-30, 30), new ks(30, -30), new ks(30, 30)]), this.compile(), this.classString = "ConvexPolygon"
    };
    n["ice.physicobjects.fixedobjects.ConvexPolygon"] = Xs, Xs.__name__ = ["ice", "physicobjects", "fixedobjects", "ConvexPolygon"], Xs.__super__ = js, Xs.prototype = e(js.prototype, {
        clone: function() {
            var t;
            t = _n.__cast(js.prototype.clone.call(this), Xs), this._cloneProp("border", t), t.points = [];
            for (var e = 0, i = this.points; e < i.length;) {
                var s = i[e];
                ++e, t.points.push(s.clone())
            }
            return t
        },
        scale: function(t) {
            js.prototype.scale.call(this, t);
            for (var e = 0, i = this.points; e < i.length;) {
                var s = i[e];
                ++e, s.scale(t)
            }
            return this.border *= t, this
        },
        flipVertical: function(t) {
            js.prototype.flipVertical.call(this, t);
            for (var e = 0, i = this.points; e < i.length;) {
                var s = i[e];
                ++e, s.y *= -1
            }
            return this.rotation *= -1, this
        },
        flipHorizontal: function(t) {
            js.prototype.flipHorizontal.call(this, t), os.trace("h", {
                fileName: "ConvexPolygon.hx",
                lineNumber: 72,
                className: "ice.physicobjects.fixedobjects.ConvexPolygon",
                methodName: "flipHorizontal"
            });
            for (var e = 0, i = this.points; e < i.length;) {
                var s = i[e];
                ++e, s.x *= -1
            }
            return this.rotation *= -1, this
        },
        compile: function() {
            js.prototype.compile.call(this);
            for (var t = this.points.length, e = new ks(0, 0), i = 0; t > i;) {
                var s = i++;
                e.plus(this.points[s])
            }
            var n = this.middle = e.scale(1 / t);
            this.points.sort(function(t, e) {
                var i = rn.fixAngle(t.clone().minus(n).getAngle()),
                    s = rn.fixAngle(e.clone().minus(n).getAngle());
                return i > s ? 1 : -1
            }), this.segments = [];
            for (var r = 0; t > r;) {
                var o = r++,
                    a = this.segments[o] = {};
                a.p1 = this.points[o], a.p2 = this.points[(o + 1) % t];
                var l = a.p1.clone().minus(n),
                    h = a.p2.clone().minus(n);
                for (a.startAngle = l.getAngle(), a.endAngle = h.getAngle(); a.startAngle < 0;) a.startAngle += 2 * Math.PI;
                for (; a.endAngle < a.startAngle;) a.endAngle += 2 * Math.PI;
                a.lineAngle = rn.getAngle(h, l);
                var _ = l.clone().rotate(-a.lineAngle),
                    u = h.clone().rotate(-a.lineAngle);
                a.y = _.y, a.x1 = _.x, a.x2 = u.x
            }
        },
        _getDefaultBounds: function(t) {
            for (var e = new ks(-99999, -99999), i = new ks(99999, 99999), s = 0, n = this.points; s < n.length;) {
                var r = n[s];
                ++s; {
                    ks.max(e, r.clone().rotate(this.rotation)), ks.min(i, r.clone().rotate(this.rotation))
                }
            }
            e.plus(t), i.plus(t), this.xMin = i.x - this.border, this.xMax = e.x + this.border, this.yMin = i.y - this.border, this.yMax = e.y + this.border
        },
        _detectCollision: function(t, e) {
            for (var i = t.position.clone().minus(e).rotate(-this.rotation).minus(this.middle), s = rn.fixAngle(i.getAngle()), n = 0, r = this.segments; n < r.length;) {
                var o = r[n];
                ++n;
                var a;
                if (a = s < o.startAngle ? s + 2 * Math.PI : s, o.startAngle <= a && o.endAngle >= a) {
                    if (i.rotate(-o.lineAngle), i.y + t.radius > o.y - this.border) {
                        if (i.x > o.x1 && i.x < o.x2) {
                            i.y = o.y - this.border;
                            var l = o.lineAngle - Math.PI / 2 + this.rotation,
                                h = i.rotate(o.lineAngle).plus(this.middle).rotate(this.rotation).plus(e);
                            return this.resolveCollision(t, l, h)
                        }
                        if (i.x > o.x1 - t.radius - this.border && i.x < o.x2 + t.radius + this.border) {
                            var _ = new ks(i.x < 0 ? o.x1 : o.x2, o.y);
                            _.rotate(o.lineAngle).plus(this.middle).rotate(this.rotation).plus(e);
                            var u = new Ys(_.x, _.y, this.border);
                            return u.parent = this, u.nested = !0, u.detectCollision(t)
                        }
                    }
                    return !1
                }
            }
            return !1
        },
        _drawShapeAt: function(t, e, i, s) {
            null == s && (s = 0), this.compile();
            var n = (this.middle.clone().rotate(this.rotation), this.points[0].clone().plus(new ks(0, this.border).setAngle(this.segments[0].lineAngle - Math.PI / 2)).rotate(this.rotation));
            t.moveTo(n.x + e, n.y + i);
            for (var r = this.points.length, o = 0; r > o;) {
                for (var a = o++, l = this.segments[a], h = this.segments[(a + 1) % r], _ = this.points[(a + 1) % r].clone().plus(new ks(0, this.border).setAngle(l.lineAngle - Math.PI / 2)).rotate(this.rotation), u = l.lineAngle - Math.PI / 2 + this.rotation, c = h.lineAngle - Math.PI / 2 + this.rotation; u > c;) c += 2 * Math.PI;
                t.lineTo(_.x + e, _.y + i), t.arcTo(u, c, this.border)
            }
        },
        importObject: function(t) {
            js.prototype.importObject.call(this, t), ln.importProp(this, "border", t), this.points = [];
            for (var e = t.att.resolve("points").split("|"), i = 0; i < e.length;) {
                var s = e[i];
                ++i;
                var n = s.split(",");
                this.points.push(new ks(parseFloat(n[0]), parseFloat(n[1])))
            }
        },
        __class__: Xs
    });
    var Vs = function(t, e, i, s, n, r) {
        null == e && (e = 0), null == t && (t = 0), this.flatLength = 80, this.radius2 = 15, this.radius1 = 30, js.call(this, t, e, i), null != s && (this.radius1 = s), null != n && (this.radius2 = n), null != r && (this.flatLength = r), this.classString = "Flipper"
    };
    n["ice.physicobjects.fixedobjects.Flipper"] = Vs, Vs.__name__ = ["ice", "physicobjects", "fixedobjects", "Flipper"], Vs.__super__ = js, Vs.prototype = e(js.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(js.prototype.clone.call(this), Vs), this._cloneProp("radius1", t), this._cloneProp("radius2", t), this._cloneProp("flatLength", t), t
        },
        scale: function(t) {
            return js.prototype.scale.call(this, t), this.radius1 *= t, this.radius2 *= t, this.flatLength *= t, this
        },
        flipVertical: function(t, e) {
            return js.prototype.flipVertical.call(this, t, e), this.rotation *= -1, this
        },
        flipHorizontal: function(t, e) {
            return js.prototype.flipHorizontal.call(this, t, e), this.rotation = Math.PI - this.rotation, this
        },
        _getDefaultBounds: function(t) {
            var e = new ks(this.flatLength, 0).setAngle(this.rotation).plus(t);
            this.xMin = Math.min(t.x - this.radius1, e.x - this.radius2), this.xMax = Math.max(t.x + this.radius1, e.x + this.radius2), this.yMin = Math.min(t.y - this.radius1, e.y - this.radius2), this.yMax = Math.max(t.y + this.radius1, e.y + this.radius2)
        },
        _detectCollision: function(t, e) {
            var i = e.x,
                s = this.radius1,
                n = this.radius2,
                r = t.radius,
                o = t.position.clone().rotateAround(e, -this.rotation);
            if (o.x + r > i - s && o.x - r < i + this.flatLength + n) {
                var a = Math.max(s, n),
                    l = e.y;
                if (o.y + r > l - a && o.y - r < l + a) {
                    var h = n - s,
                        _ = Math.sqrt(this.flatLength * this.flatLength - h * h),
                        u = Math.atan2(h, Math.abs(_));
                    null != this.tweak && this.tweak(o, l);
                    var c, p, g, d;
                    if (o.y < l ? (c = u - this.rotation, p = i, g = i + _, d = 1) : (c = Math.PI - u - this.rotation, g = i, p = i - _, d = -1), o.rotateAround(e, this.rotation), o.rotateAround(e, c), o.y + r > l - s) {
                        if (!(o.x > p && o.x < g)) {
                            var f = (i - o.x) * d > 0;
                            t.position = o.rotateAround(e, -c);
                            var m = new Ys(0, 0, 0);
                            return m.nested = !0, m.parent = this, f ? (m.position = new ks(i, l), m.radius = s) : (m.position = new ks(i + this.flatLength * Math.cos(this.rotation), l + this.flatLength * Math.sin(this.rotation)), m.radius = n), m.detectCollision(t)
                        }
                        if (o.y + r > l - s) {
                            var y = new ks(o.x, l - s).rotateAround(e, -c);
                            return this.resolveCollision(t, -c - Math.PI / 2, y)
                        }
                    }
                }
            }
            return !1
        },
        _drawShapeAt: function(t, e, i, s) {
            null == s && (s = 0);
            var n = new ks(e, i),
                r = new ks(0, this.flatLength).setAngle(s).plus(n),
                o = this.radius2 - this.radius1,
                a = Math.atan2(o, Math.sqrt(Math.abs(this.flatLength * this.flatLength - o * o))),
                l = Math.PI / 2 + a,
                h = new ks(0, this.radius1).rotate(s + a).plus(n),
                _ = new ks(0, -this.radius2).rotate(s - a).plus(r);
            t.moveTo(h.x, h.y), t.arcTo(s + l, s - l + 2 * Math.PI, this.radius1), t.lineTo(_.x, _.y), t.arcTo(s - l, s + l, this.radius2), t.lineTo(h.x, h.y)
        },
        importObject: function(t) {
            js.prototype.importObject.call(this, t), ln.importProp(this, "radius1", t), ln.importProp(this, "radius2", t), ln.importProp(this, "flatLength", t)
        },
        __class__: Vs
    });
    var Ws = function(t, e, i, s, n) {
        null == e && (e = 0), null == t && (t = 0), this.height = 80, this.width = 80, js.call(this, t, e, i), null != n && (this.height = n), null != s && (this.width = s), this.classString = "Rectangle"
    };
    n["ice.physicobjects.fixedobjects.Rectangle"] = Ws, Ws.__name__ = ["ice", "physicobjects", "fixedobjects", "Rectangle"], Ws.__super__ = js, Ws.prototype = e(js.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(js.prototype.clone.call(this), Ws), this._cloneProp("width", t), this._cloneProp("height", t), t
        },
        scale: function(t) {
            return js.prototype.scale.call(this, t), this.width *= t, this.height *= t, this
        },
        flipVertical: function(t) {
            return js.prototype.flipVertical.call(this, t), this.rotation = Math.PI - this.rotation, this
        },
        flipHorizontal: function(t) {
            return js.prototype.flipHorizontal.call(this, t), this.rotation *= -1, this
        },
        _getDefaultBounds: function(t) {
            var e = new ks(this.width / 2, this.height / 2);
            e.rotate(this.rotation);
            var i = new ks(this.width / 2, -this.height / 2);
            i.rotate(this.rotation);
            var s = Math.max(Math.abs(e.x), Math.abs(i.x)),
                n = Math.max(Math.abs(e.y), Math.abs(i.y));
            this.xMin = t.x - s, this.xMax = t.x + s, this.yMin = t.y - n, this.yMax = t.y + n
        },
        _detectCollision: function(t, e) {
            var i = t.position.clone().rotateAround(e, -this.rotation),
                s = t.radius,
                n = e.x - this.width / 2 - s,
                r = e.x + this.width / 2 + s;
            if (i.x < r && i.x > n) {
                var o = e.y - this.height / 2 - s,
                    a = e.y + this.height / 2 + s;
                if (i.y < a && i.y > o) {
                    {
                        var l, h, _ = new ks,
                            u = new ks;
                        new ks
                    }
                    if (i.y < e.y ? (u.y = o - i.y, _.y = o + s, l = this.rotation - .5 * Math.PI) : (u.y = i.y - a, _.y = a - s, l = this.rotation + .5 * Math.PI), i.x < e.x ? (u.x = n - i.x, _.x = n + s, h = this.rotation + Math.PI) : (u.x = i.x - r, _.x = r - s, h = this.rotation), !(-u.x < s && -u.y < s)) {
                        if (u.x > u.y) {
                            var c = new ks(_.x, i.y).rotateAround(e, this.rotation);
                            return this.resolveCollision(t, h, c)
                        }
                        var p = new ks(i.x, _.y).rotateAround(e, this.rotation);
                        return this.resolveCollision(t, l, p)
                    }
                    var g = s - rn.getDistance(_, i);
                    if (g > 0) {
                        var d = this.rotation + rn.getAngle(i, _),
                            f = _.rotateAround(e, this.rotation);
                        return this.resolveCollision(t, d, f)
                    }
                }
            }
            return !1
        },
        _drawShapeAt: function(t, e, i, s) {
            null == s && (s = 0);
            var n = [],
                r = this.width / 2,
                o = this.height / 2,
                a = new ks(e, i);
            n[0] = new ks(-r, -o).rotate(s).plus(a), n[1] = new ks(r, -o).rotate(s).plus(a), n[2] = new ks(r, o).rotate(s).plus(a), n[3] = new ks(-r, o).rotate(s).plus(a), t.drawPoly(n)
        },
        importObject: function(t) {
            js.prototype.importObject.call(this, t), ln.importProp(this, "width", t), ln.importProp(this, "height", t)
        },
        __class__: Ws
    });
    var Qs = function(t, e, i, s, n) {
        null == n && (n = 5), null == s && (s = 100), null == e && (e = 0), null == t && (t = 0), js.call(this, t, e, i), this.radius = s, this.sides = n, this.classString = "RegularPolygon"
    };
    n["ice.physicobjects.fixedobjects.RegularPolygon"] = Qs, Qs.__name__ = ["ice", "physicobjects", "fixedobjects", "RegularPolygon"], Qs.__super__ = js, Qs.prototype = e(js.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(js.prototype.clone.call(this), Qs), this._cloneProp("radius", t), this._cloneProp("sides", t), t
        },
        scale: function(t) {
            return js.prototype.scale.call(this, t), this.radius *= t, this
        },
        flipVertical: function(t) {
            return js.prototype.flipVertical.call(this, t), this.rotation *= -1, this
        },
        flipHorizontal: function(t) {
            return js.prototype.flipHorizontal.call(this, t), this.rotation = Math.PI - this.rotation, this
        },
        _getDefaultBounds: function(t) {
            var e = 2 * Math.PI / this.sides;
            this.xMax = t.x + Math.cos(Math.round((0 - this.rotation) / e) * e + this.rotation) * this.radius, this.xMin = t.x + Math.cos(Math.round((Math.PI - this.rotation) / e) * e + this.rotation) * this.radius, this.yMax = t.y + Math.sin(Math.round((Math.PI / 2 - this.rotation) / e) * e + this.rotation) * this.radius, this.yMin = t.y + Math.sin(Math.round((1.5 * Math.PI - this.rotation) / e) * e + this.rotation) * this.radius
        },
        _detectCollision: function(t, e) {
            var i = Math.PI / this.sides,
                s = Math.cos(i) * this.radius,
                n = Math.sin(i) * this.radius,
                r = t.position.clone().minus(e),
                o = rn.fixAngle(r.getAngle() - this.rotation),
                a = Math.floor(o / (2 * Math.PI / this.sides)),
                l = 2 * Math.PI * ((a + .5) / this.sides) + this.rotation;
            if (r.rotate(-l), s + t.radius - r.x > 0) {
                if (Math.abs(r.y) < n) return r.x = s, this.resolveCollision(t, l, r.rotate(l).plus(e));
                var h = new ks(s, n * (r.y < 0 ? -1 : 1)),
                    _ = t.radius - rn.getDistance(r, h);
                if (_ > 0) {
                    var u = rn.getAngle(r, h);
                    return this.resolveCollision(t, l + u, h.rotate(l).plus(e))
                }
            }
            return !1
        },
        _drawShapeAt: function(t, e, i, s) {
            null == s && (s = 0), t.drawRegPoly(e, i, this.radius, this.sides, s)
        },
        importObject: function(t) {
            js.prototype.importObject.call(this, t), ln.importProp(this, "radius", t), ln.importProp(this, "sides", t)
        },
        __class__: Qs
    });
    var zs = function(t, e, i, s, n, r, o) {
        null == e && (e = 0), null == t && (t = 0), this.detectCorners = !0, this.fillAngle = Math.PI, this.outerRadius = 40, this.innerRadius = 20, js.call(this, t, e, i), null != r && (this.outerRadius = r), null != n && (this.innerRadius = n), null != s && (this.fillAngle = s), null != o && (this.detectCorners = o), this.classString = "Ring"
    };
    n["ice.physicobjects.fixedobjects.Ring"] = zs, zs.__name__ = ["ice", "physicobjects", "fixedobjects", "Ring"], zs.__super__ = js, zs.prototype = e(js.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(js.prototype.clone.call(this), zs), this._cloneProp("innerRadius", t), this._cloneProp("outerRadius", t), this._cloneProp("fillAngle", t), this._cloneProp("detectCorners", t), t
        },
        scale: function(t) {
            return js.prototype.scale.call(this, t), this.innerRadius *= t, this.outerRadius *= t, this
        },
        flipVertical: function(t) {
            return js.prototype.flipVertical.call(this, t), this.rotation = -(this.rotation + this.fillAngle), this
        },
        flipHorizontal: function(t) {
            return js.prototype.flipHorizontal.call(this, t), this.rotation = Math.PI - (this.rotation + this.fillAngle), this
        },
        _getDefaultBounds: function(t) {
            var e = new ks(0, this.innerRadius).setAngle(this.rotation),
                i = new ks(0, this.innerRadius).setAngle(this.rotation + this.fillAngle),
                s = new ks(0, this.outerRadius).setAngle(this.rotation),
                n = new ks(0, this.outerRadius).setAngle(this.rotation + this.fillAngle);
            this.xMin = this.isAngleBetween(Math.PI) ? t.x - this.outerRadius : t.x + Math.min(e.x, Math.min(i.x, Math.min(s.x, n.x))), this.xMax = this.isAngleBetween(0) ? t.x + this.outerRadius : t.x + Math.max(e.x, Math.max(i.x, Math.max(s.x, n.x))), this.yMin = this.isAngleBetween(1.5 * Math.PI) ? t.y - this.outerRadius : t.y + Math.min(e.y, Math.min(i.y, Math.min(s.y, n.y))), this.yMax = this.isAngleBetween(.5 * Math.PI) ? t.y + this.outerRadius : t.y + Math.max(e.y, Math.max(i.y, Math.max(s.y, n.y)))
        },
        isAngleBetween: function(t) {
            for (; t < this.rotation;) t += 2 * Math.PI;
            for (; t > this.rotation + 2 * Math.PI;) t -= 2 * Math.PI;
            return t <= this.rotation + this.fillAngle
        },
        _detectCollision: function(t, e) {
            var i = t.radius,
                s = rn.getDistance(e, t.position);
            if (s + i > this.innerRadius && s - i < this.outerRadius) {
                var n = rn.getAngle(t.position, e);
                if (this.isAngleBetween(n)) {
                    var r, o;
                    s > (this.outerRadius + this.innerRadius) / 2 ? (r = n, o = this.outerRadius) : (r = n - Math.PI, o = this.innerRadius);
                    var a = e.clone().plus(new ks(0, o).setAngle(n));
                    return this.resolveCollision(t, r, a)
                }
                if (this.detectCorners) {
                    for (; n < this.rotation;) n += 2 * Math.PI;
                    var l, h, _, u;
                    (2 * this.rotation + this.fillAngle) / 2 + Math.PI > n ? (l = 1.5 * Math.PI - (this.rotation + this.fillAngle), h = this.rotation + this.fillAngle + .5 * Math.PI, _ = e.y - this.outerRadius, u = e.y - this.innerRadius) : (l = .5 * Math.PI - this.rotation, h = this.rotation - .5 * Math.PI, _ = e.y + this.innerRadius, u = e.y + this.outerRadius);
                    var c = t.position.clone().rotateAround(e, l);
                    if (c.x - i > e.x) return !1;
                    if (c.y > _ && c.y < u) {
                        var p = new ks(e.x, c.y).rotateAround(e, -l);
                        return this.resolveCollision(t, h, p)
                    }
                    var g = e.clone();
                    g.y = c.y < _ ? _ : u;
                    var d = rn.getDistance(c, g),
                        f = i - d;
                    if (f > 0) {
                        var m = rn.getAngle(c, g),
                            y = g.rotateAround(e, -l);
                        return this.resolveCollision(t, m - l, y)
                    }
                }
            }
            return !1
        },
        _drawShapeAt: function(t, e, i, s) {
            null == s && (s = 0);
            var n = new ks(Math.cos(s) * this.outerRadius + e, Math.sin(s) * this.outerRadius + i);
            t.moveTo(n.x, n.y), t.arcTo(s, s + this.fillAngle, this.outerRadius), t.lineTo(Math.cos(s + this.fillAngle) * this.innerRadius + e, Math.sin(s + this.fillAngle) * this.innerRadius + i), t.arcTo(s + this.fillAngle, s, this.innerRadius), t.lineTo(n.x, n.y)
        },
        importObject: function(t) {
            js.prototype.importObject.call(this, t), ln.importProp(this, "innerRadius", t), ln.importProp(this, "outerRadius", t), ln.importProp(this, "fillAngle", t), ln.importProp(this, "detectCorners", t, "Boolean")
        },
        __class__: zs
    });
    var Js = function(t, e, i) {
        null == e && (e = 0), null == t && (t = 0), this.playSymbol = !1, this.hitSoundID = "", this.hitThreshold = 0, this.hitForce = 5, Ys.call(this, t, e, i), this.classString = "CircleBumper", this.fillColor = 3355443, this.radius = 50
    };
    n["ice.physicobjects.fixedobjects.circles.CircleBumper"] = Js, Js.__name__ = ["ice", "physicobjects", "fixedobjects", "circles", "CircleBumper"], Js.__super__ = Ys, Js.prototype = e(Ys.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(Ys.prototype.clone.call(this), Js), this._cloneProp("hitForce", t), this._cloneProp("hitThreshold", t), this._cloneProp("hitSoundID", t), this._cloneProp("playSymbol", t), t
        },
        start: function() {
            this.broadcaster.addListener(this)
        },
        stop: function() {
            this.broadcaster.removeListener(this)
        },
        compile: function() {
            Ys.prototype.compile.call(this)
        },
        onCollision: function(t) {
            Math.abs(t.bounceSpeed) >= this.hitThreshold && (t.movableObject.velocity.plus(new ks(0, this.hitForce).setAngle(t.angle)), this.sound(this.hitSoundID), this.playSymbol && this.mc.gotoAndPlay("bumper"), this.broadcaster.broadcastMessage("onBump", t))
        },
        _drawShapeAt: function(t, e, i, s) {
            null == s && (s = 0), t.drawCircle(e, i, this.radius)
        },
        importObject: function(t) {
            Ys.prototype.importObject.call(this, t), ln.importProp(this, "hitForce", t), ln.importProp(this, "hitThreshold", t), ln.importProp(this, "hitSoundID", t, "String"), ln.importProp(this, "playSymbol", t, "Boolean")
        },
        __class__: Js
    });
    var Ks = function(t, e, i) {
        null == e && (e = 0), null == t && (t = 0), this.releaseSoundID = "", this.holdSoundID = "", this.randomFactor = 1, this.outerRadius = 20, this.targetRadius = 2, Ys.call(this, t, e, i), this.classString = "HideOut", this.fillColor = 10066329, this.lineWidth = 2, this.releaseVelocity = new ks(0, 0)
    };
    n["ice.physicobjects.fixedobjects.circles.HideOut"] = Ks, Ks.__name__ = ["ice", "physicobjects", "fixedobjects", "circles", "HideOut"], Ks.__super__ = Ys, Ks.prototype = e(Ys.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(Ys.prototype.clone.call(this), Ks), this._cloneProp("targetRadius", t), this._cloneProp("outerRadius", t), this._cloneProp("holdSoundID", t), this._cloneProp("releaseSoundID", t), this._cloneProp("releaseVelocity", t), this._cloneProp("randomFactor", t), t
        },
        start: function() {
            this.broadcaster.addListener(this), this.onEnter = s(this, this._onEnter), this.onExit = null, this.radius = this.targetRadius, this.occupied = !1, this.transparent = !0
        },
        stop: function() {
            this.broadcaster.removeListener(this)
        },
        compile: function() {
            Ys.prototype.compile.call(this)
        },
        holdBall: function(t) {
            this.occupied = !0, this.ball = t, t.position = this.position.clone(), t.onAfterStepPhysics(), t.setEnabled(!1), this.transparent = !1, this.radius = t.radius, this.onExit = null, this.onEnter = null, this.sound(this.holdSoundID)
        },
        releaseBall: function() {
            if (!this.occupied) return null;
            this.occupied = !1;
            var t = this.ball.velocity = this.releaseVelocity.clone();
            return t.x += (Math.random() - .5) * this.randomFactor, t.y += (Math.random() - .5) * this.randomFactor, this.radius = this.targetRadius, this.transparent = !0, this.onExit = s(this, this._onExit), this.ball.setEnabled(!0), this.sound(this.releaseSoundID), this.ball
        },
        _getDefaultBounds: function(t) {
            this.xMin = t.x - this.outerRadius, this.xMax = t.x + this.outerRadius, this.yMin = t.y - this.outerRadius, this.yMax = t.y + this.outerRadius
        },
        _drawShapeAt: function(t, e, i, s) {
            null == s && (s = 0), t.drawCircle(e, i, this.outerRadius), t.drawCircle(e, i, this.targetRadius)
        },
        _onEnter: function(t) {
            this.occupied || (this.holdBall(t.movableObject), this.broadcaster.broadcastMessage("onHoldBall", t))
        },
        _onExit: function() {
            this.occupied || (this.onExit = null, this.onEnter = s(this, this._onEnter))
        },
        importObject: function(t) {
            Ys.prototype.importObject.call(this, t), ln.importProp(this, "targetRadius", t), ln.importProp(this, "outerRadius", t), ln.importProp(this, "holdSoundID", t, "String"), ln.importProp(this, "releaseSoundID", t, "String"), ln.importProp(this, "releaseVelocity", t, "Vector"), ln.importProp(this, "randomFactor", t)
        },
        __class__: Ks
    });
    var Zs = function(t, e, i) {
        null == e && (e = 0), null == t && (t = 0), this.playSymbol = !1, this.hitSoundID = "", this.hitThreshold = 0, this.hitForce = 5, this.hitSegment = 0, Xs.call(this, t, e, i), this.classString = "PolyBumper", this.fillColor = 3355443
    };
    n["ice.physicobjects.fixedobjects.convexpolygons.PolyBumper"] = Zs, Zs.__name__ = ["ice", "physicobjects", "fixedobjects", "convexpolygons", "PolyBumper"], Zs.__super__ = Xs, Zs.prototype = e(Xs.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(Xs.prototype.clone.call(this), Zs), this._cloneProp("hitSegment", t), this._cloneProp("hitForce", t), this._cloneProp("hitThreshold", t), this._cloneProp("hitSoundID", t), this._cloneProp("playSymbol", t), t
        },
        start: function() {
            this.broadcaster.addListener(this)
        },
        stop: function() {
            this.broadcaster.removeListener(this)
        },
        compile: function() {
            Xs.prototype.compile.call(this), this.bumpAngle = this.segments[this.hitSegment].lineAngle - Math.PI / 2 + this.rotation
        },
        onCollision: function(t) {
            t.angle == this.bumpAngle && Math.abs(t.bounceSpeed) >= this.hitThreshold && (t.movableObject.velocity.plus(new ks(0, this.hitForce).setAngle(t.angle)), this.sound(this.hitSoundID), this.playSymbol && this.mc.gotoAndPlay("bumper"), this.broadcaster.broadcastMessage("onBump", t))
        },
        _drawShapeAt: function(t, e, i, s) {
            null == s && (s = 0), Xs.prototype._drawShapeAt.call(this, t, e, i, s);
            for (var n = [], r = 0, o = this.points; r < o.length;) {
                var a = o[r];
                ++r, n.push(a.clone().rotate(s).plus(new ks(e, i)))
            }
            var l = t.createEmptyChild("mid", 1);
            l.beginFill(16777215, this.fillAlpha / 5), l.drawPoly(n), l.endFill();
            var h = this.segments[this.hitSegment],
                _ = new ks(0, this.border).setAngle(h.lineAngle + s - Math.PI / 2),
                u = h.p1.clone().rotate(s).plus(new ks(e, i)),
                c = h.p2.clone().rotate(s).plus(new ks(e, i)),
                p = u.clone().plus(_),
                g = c.clone().plus(_),
                d = t.createEmptyChild("bmp", 2);
            d.beginFill(0, this.fillAlpha / 2), d.drawPoly([p, u, c, g]), d.endFill()
        },
        importObject: function(t) {
            Xs.prototype.importObject.call(this, t), ln.importProp(this, "hitSegment", t), ln.importProp(this, "hitForce", t), ln.importProp(this, "hitThreshold", t), ln.importProp(this, "hitSoundID", t, "String"), ln.importProp(this, "playSymbol", t, "Boolean")
        },
        __class__: Zs
    });
    var qs = function(t, e, i, s, n, r, o, a) {
        null == e && (e = 0), null == t && (t = 0), this.useCustomDetection = !1, this.direction = 0, this.isDown = !1, this.downSoundID = "", this.upSoundID = "", this.hitSoundID = "", this.keyCode = null, this.stepPosition = 1, this.steps = 5, this.endAngle = -.5, this.startAngle = .4, this.flipType = 0, Vs.call(this, t, e, 0, i, s, n), this.classString = "PinballFlipper", this.radius1 = 13, this.radius2 = 6, this.flatLength = 70, this.fillColor = 3355443, this.forceMultiplier = 2.5, null != r && (this.startAngle = r), null != o && (this.endAngle = o), null != a && (this.steps = a), this.rotation = this.startAngle
    };
    n["ice.physicobjects.fixedobjects.flippers.PinballFlipper"] = qs, qs.__name__ = ["ice", "physicobjects", "fixedobjects", "flippers", "PinballFlipper"], qs.__super__ = Vs, qs.prototype = e(Vs.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(Vs.prototype.clone.call(this), qs), this._cloneProp("flipType", t), this._cloneProp("startAngle", t), this._cloneProp("endAngle", t), this._cloneProp("steps", t), this._cloneProp("keyCode", t), this._cloneProp("hitSoundID", t), this._cloneProp("upSoundID", t), this._cloneProp("downSoundID", t), t
        },
        flipVertical: function(t) {
            return Vs.prototype.flipVertical.call(this, t, !0), this.startAngle *= -1, this.rotation = this.startAngle, this.endAngle *= -1, this.symbolYscale *= -1, this
        },
        flipHorizontal: function(t) {
            return Vs.prototype.flipHorizontal.call(this, t, !0), this.startAngle = Math.PI - this.startAngle, this.rotation = this.startAngle, this.endAngle = Math.PI - this.endAngle, this.symbolYscale *= -1, this
        },
        rotate: function(t) {
            this.startAngle += t, this.rotation = this.startAngle, this.endAngle += t
        },
        _render: function(t) {
            this.useSymbol ? t.createChild(this.symbolID, "symbol", 0) : this.autoRender && this.drawShapeAt(t, 0, 0, 0), this.onRender()
        },
        onRender: function() {
            this.mc.set_rotation(this.rotation / Math.PI * 180)
        },
        moveToEnd: function() {
            this.direction = 1, this.moving || this.getRoot().broadcaster.addListener(this), this.moving = !0, this.sound(this.upSoundID), this.broadcaster.broadcastMessage("onFlipperUp", {
                fixedObject: this
            })
        },
        moveToStart: function() {
            this.direction = -1, this.moving || this.getRoot().broadcaster.addListener(this), this.moving = !0, this.sound(this.downSoundID), this.broadcaster.broadcastMessage("onFlipperDown", {
                fixedObject: this
            })
        },
        start: function() {
            null != this.keyCode && nn.addListener(this), this.broadcaster.addListener(this)
        },
        stop: function() {
            nn.removeListener(this), this.broadcaster.removeListener(this)
        },
        compile: function() {
            Vs.prototype.compile.call(this), this.rotation = this.startAngle, 0 == this.flipType ? (this.onBeforeStepPhysics = s(this, this.onBeforeStepPhysics_type0), this.useCustomDetection = !0, this.onCollision = null, this.tweak = null) : (this.onBeforeStepPhysics = s(this, this.onBeforeStepPhysics_type1), this.onCollision = s(this, this._onCollision), this.tweak = s(this, this._tweak))
        },
        _getDefaultBounds: function(t) {
            var e = new ks(this.flatLength, 0).setAngle(this.startAngle).plus(t),
                i = new ks(this.flatLength, 0).setAngle(this.endAngle).plus(t);
            this.xMin = this.isAngleBetween(Math.PI) ? t.x - this.flatLength - this.radius2 : Math.min(Math.min(t.x - this.radius1, e.x - this.radius2), i.x - this.radius2), this.xMax = this.isAngleBetween(0) ? t.x + this.flatLength + this.radius2 : Math.max(Math.max(t.x + this.radius1, e.x + this.radius2), i.x + this.radius2), this.yMin = this.isAngleBetween(1.5 * Math.PI) ? t.y - this.flatLength - this.radius2 : Math.min(Math.min(t.y - this.radius1, e.y - this.radius2), i.y - this.radius2), this.yMax = this.isAngleBetween(.5 * Math.PI) ? t.y + this.flatLength + this.radius2 : Math.max(Math.max(t.y + this.radius1, e.y + this.radius2), i.y + this.radius2)
        },
        isAngleBetween: function(t) {
            for (var e = Math.min(this.startAngle, this.endAngle), i = Math.max(this.startAngle, this.endAngle); e > t;) t += 2 * Math.PI;
            return i > t
        },
        onBeforeStepPhysics_type0: function() {
            var t = !1;
            1 == this.direction && -1 == this.stepPosition && (t = !0), -1 == this.direction && 1 == this.stepPosition && (t = !0), t ? (this.getRoot().broadcaster.removeListener(this), this.moving = !1, this.direction = 0) : (this.stepPosition = -this.direction, this.rotation = -1 == this.direction ? this.startAngle : this.endAngle), this.onRender()
        },
        _detectCollision: function(t, e) {
            if (this.useCustomDetection) {
                if (this.moving) {
                    this.rotationSpeed = (this.endAngle - this.startAngle) * this.direction;
                    var i, s = this.rotationSpeed / this.steps;
                    i = 1 == this.direction ? this.startAngle : this.endAngle;
                    for (var n = !1, r = 0, o = this.steps + 1; o > r;) {
                        var a = r++;
                        this.rotation = i + s * a;
                        var l = Vs.prototype._detectCollision.call(this, t, e);
                        l && (t.position.plus(t.velocity.clone().scale(1 / this.steps)), n = !0)
                    }
                    return this.rotationSpeed = 0, n && this.sound(this.hitSoundID), n
                }
                return Vs.prototype._detectCollision.call(this, t, e)
            }
            return Vs.prototype._detectCollision.call(this, t, e)
        },
        onBeforeStepPhysics_type1: function() {
            var t = !1;
            return 1 == this.direction && this.stepPosition == this.steps && (t = !0), -1 == this.direction && 0 == this.stepPosition && (t = !0), t ? (this.parent.broadcaster.removeListener(this), this.moving = !1, void(this.rotationSpeed = 0)) : (this.stepPosition += this.direction, this.rotationSpeed = (this.endAngle - this.startAngle) / this.steps * this.direction, this.rotation = this.startAngle + (this.endAngle - this.startAngle) / this.steps * this.stepPosition, void this.onRender())
        },
        _onCollision: function() {
            this.moving && this.sound(this.hitSoundID)
        },
        _tweak: function(t, e) {
            this.moving && 1 == this.direction && (this.rotationSpeed > 0 ? e > t.y && (t.y += this.radius2) : e < t.y && (t.y -= this.radius2))
        },
        downHandler: function() {
            this.isDown || (this.isDown = !0, this.moveToEnd())
        },
        upHandler: function() {
            this.isDown && (this.isDown = !1, this.moveToStart())
        },
        onKeyDown: function(t) {
            t == this.keyCode && this.downHandler()
        },
        onKeyUp: function(t) {
            t == this.keyCode && this.upHandler()
        },
        importObject: function(t) {
            Vs.prototype.importObject.call(this, t), ln.importProp(this, "flipType", t), ln.importProp(this, "startAngle", t), ln.importProp(this, "endAngle", t), ln.importProp(this, "steps", t), ln.importProp(this, "keyCode", t), ln.importProp(this, "hitSoundID", t, "String"), ln.importProp(this, "upSoundID", t, "String"), ln.importProp(this, "downSoundID", t, "String")
        },
        __class__: qs
    });
    var $s = function(t, e, i) {
        null == e && (e = 0), null == t && (t = 0), this.keyCode = nn.ENTER, this.hitSoundID = "", this.randomFactor = 1, this.plungerSpeed = 0, this.pullPos = 0, this.pullAmount = 40, this.pullSpeed = 3, Ws.call(this, t, e, i), this.classString = "Plunger", this.fillColor = 3355443, this.width = 30, this.height = 80
    };
    n["ice.physicobjects.fixedobjects.rectangles.Plunger"] = $s, $s.__name__ = ["ice", "physicobjects", "fixedobjects", "rectangles", "Plunger"], $s.__super__ = Ws, $s.prototype = e(Ws.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(Ws.prototype.clone.call(this), $s), this._cloneProp("pullSpeed", t), this._cloneProp("pullAmount", t), this._cloneProp("randomFactor", t), this._cloneProp("hitSoundID", t), this._cloneProp("keyCode", t), t
        },
        compile: function() {
            Ws.prototype.compile.call(this)
        },
        start: function() {
            nn.addListener(this)
        },
        stop: function() {
            nn.removeListener(this)
        },
        _render: function(t) {
            this._centerMovieClip = t.createEmptyChild("cnt", 0), this.useSymbol ? this._centerMovieClip.createChild(this.symbolID, "symbol", 0) : this.autoRender && this.drawShapeAt(this._centerMovieClip, 0, 0, this.rotation)
        },
        _detectCollision: function(t, e) {
            var i = t.position.clone().minus(e).rotate(-this.rotation);
            if (i.x > -this.width / 2 && i.x < this.width / 2 && i.y < this.height / 2) {
                var s = -this.height / 2 + this.pullPos;
                if (i.y > s - t.radius) {
                    i.y = s, i.rotate(this.rotation).plus(e), this.velocity = new ks(0, this.plungerSpeed).rotate(this.rotation);
                    var n = this.rotation - Math.PI / 2;
                    return -1 == this._direction && ("" != this.hitSoundID && this.sound(this.hitSoundID), t.velocity.x += (Math.random() - .5) * this.randomFactor, t.velocity.y += (Math.random() - .5) * this.randomFactor, this.broadcaster.broadcastMessage("onShoot", {
                        fixedObject: this,
                        movableObject: t
                    })), this.resolveCollision(t, n, i)
                }
            }
            return !1
        },
        downHandler: function() {
            this._isDown || (this._isDown = !0, this.pull())
        },
        upHandler: function() {
            this._isDown && (this._isDown = !1, this.release())
        },
        onKeyDown: function(t) {
            t == this.keyCode && this.downHandler()
        },
        onKeyUp: function(t) {
            t == this.keyCode && this.upHandler()
        },
        pull: function() {
            this._isMoving || this.getRoot().broadcaster.addListener(this), this._isMoving = !0, this._direction = 1, this.broadcaster.broadcastMessage("onPull", {
                fixedObject: this
            })
        },
        release: function() {
            this._isMoving || this.getRoot().broadcaster.addListener(this), this._isMoving = !0, this._direction = -1, this.broadcaster.broadcastMessage("onRelease", {
                fixedObject: this
            })
        },
        onBeforeStepPhysics: function() {
            var t = this.pullPos;
            1 == this._direction && (this.pullPos >= this.pullAmount ? (this.pullPos = this.pullAmount, this.getRoot().broadcaster.removeListener(this), this._isMoving = !1, this._direction = 0) : (this.pullPos += this.pullSpeed, this.pullPos = Math.min(this.pullPos, this.pullAmount))), -1 == this._direction && (this.pullPos <= 0 ? (this.pullPos = 0, this.getRoot().broadcaster.removeListener(this), this._isMoving = !1, this._direction = 0) : this.pullPos = 0), this.plungerSpeed = this.pullPos - t;
            var e = new ks(0, this.pullPos).rotate(this.rotation);
            this._centerMovieClip.set_x(e.x), this._centerMovieClip.set_y(e.y)
        },
        importObject: function(t) {
            Ws.prototype.importObject.call(this, t), ln.importProp(this, "pullSpeed", t), ln.importProp(this, "pullAmount", t), ln.importProp(this, "randomFactor", t), ln.importProp(this, "hitSoundID", t, "String"), ln.importProp(this, "keyCode", t)
        },
        __class__: $s
    });
    var tn = function(t, e, i) {
        null == e && (e = 0), null == t && (t = 0), this.upperLevel = 1, this.lowerLevel = 0, Ws.call(this, t, e, i), this.classString = "Ramp", this.transparent = !0, this.autoRender = !1, this.width = 100, this.height = 10
    };
    n["ice.physicobjects.fixedobjects.rectangles.Ramp"] = tn, tn.__name__ = ["ice", "physicobjects", "fixedobjects", "rectangles", "Ramp"], tn.__super__ = Ws, tn.prototype = e(Ws.prototype, {
        clone: function() {
            var t;
            return t = _n.__cast(Ws.prototype.clone.call(this), tn), this._cloneProp("lowerLevel", t), this._cloneProp("upperLevel", t), t
        },
        compile: function() {
            Ws.prototype.compile.call(this), this.transparent = !0
        },
        start: function() {
            this.broadcaster.addListener(this)
        },
        stop: function() {
            this.broadcaster.removeListener(this)
        },
        onExit: function(t) {
            var e = t.movableObject,
                i = e.position.clone().minus(this.getGlobalPosition()).rotate(-this.rotation);
            i.x > -this.width / 2 && i.x < this.width / 2 && (i.y > 0 ? (e.level = this.lowerLevel, this.broadcaster.broadcastMessage("onLowerLevel", t)) : (e.level = this.upperLevel, this.broadcaster.broadcastMessage("onUpperLevel", t)))
        },
        importObject: function(t) {
            Ws.prototype.importObject.call(this, t), ln.importProp(this, "lowerLevel", t), ln.importProp(this, "upperLevel", t)
        },
        __class__: tn
    });
    var en = function(t, e, i) {
        null == e && (e = 0), null == t && (t = 0), this.switchSoundID = "", this.state = !0, this.light = "", Ws.call(this, t, e, i), this.classString = "Target", this.transparent = !0, this.fillColor = 0, this.width = 40, this.height = 3
    };
    n["ice.physicobjects.fixedobjects.rectangles.Target"] = en, en.__name__ = ["ice", "physicobjects", "fixedobjects", "rectangles", "Target"], en.__super__ = Ws, en.prototype = e(Ws.prototype, {
        setState: function(t) {
            this.state = t, this.lightRef.setState(t), this.broadcaster.broadcastMessage("onStateChanged", {
                target: this,
                state: t
            })
        },
        clone: function() {
            var t;
            return t = _n.__cast(Ws.prototype.clone.call(this), en), this._cloneProp("light", t), this._cloneProp("state", t), this._cloneProp("switchSoundID", t), t
        },
        compile: function() {
            Ws.prototype.compile.call(this), this.lightRef = this.getObjectRef(this.light), this.setState(this.state)
        },
        start: function() {
            this.broadcaster.addListener(this), this.initState = this.state
        },
        stop: function() {
            this.broadcaster.removeListener(this), this.state = this.initState
        },
        onEnter: function(t) {
            this.state && (this.setState(!1), this.sound(this.switchSoundID), this.broadcaster.broadcastMessage("onSwitch", t))
        },
        importObject: function(t) {
            Ws.prototype.importObject.call(this, t), ln.importProp(this, "light", t, "String"), ln.importProp(this, "state", t, "Boolean"), ln.importProp(this, "switchSoundID", t, "String")
        },
        __class__: en
    });
    var sn = function() {
        this._listeners = []
    };
    n["ice.utils.Broadcaster"] = sn, sn.__name__ = ["ice", "utils", "Broadcaster"], sn.prototype = {
        addListener: function(t) {
            return -1 == function(e) {
                var i, s = t;
                return i = l.indexOf(e._listeners, s, 0)
            }(this) ? (this._listeners.unshift(t), !0) : !1
        },
        removeListener: function(t) {
            var e = t;
            return l.remove(this._listeners, e)
        },
        broadcastMessage: function(t, e) {
            for (var i = 0, s = this._listeners; i < s.length;) {
                var n = s[i];
                ++i;
                try {
                    var r = c.field(n, t);
                    null != r && r.apply(n, null == e ? [] : [e])
                } catch (o) {
                    o instanceof hn && (o = o.val)
                }
            }
        },
        __class__: sn
    };
    var nn = function() {};
    n["ice.utils.KeyboardHelper"] = nn, nn.__name__ = ["ice", "utils", "KeyboardHelper"], nn._init = function() {
        nn._isInitialized || (nn._isInitialized = !0, nn._listeners = [])
    }, nn.addListener = function(t) {
        nn._init(), -1 == function() {
            var e, i = t;
            return e = l.indexOf(nn._listeners, i, 0)
        }(this) && nn._listeners.push(t)
    }, nn.removeListener = function(t) {
        nn._init();
        var e = t;
        l.remove(nn._listeners, e)
    }, nn.keyUp = function(t) {
        for (var e = 0, i = nn._listeners; e < i.length;) {
            var s = i[e];
            ++e;
            try {
                s.onKeyUp(t)
            } catch (n) {
                n instanceof hn && (n = n.val)
            }
        }
    }, nn.keyDown = function(t) {
        for (var e = 0, i = nn._listeners; e < i.length;) {
            var s = i[e];
            ++e;
            try {
                s.onKeyDown(t)
            } catch (n) {
                n instanceof hn && (n = n.val)
            }
        }
    }, nn.prototype = {
        __class__: nn
    };
    var rn = function() {};
    n["ice.utils.MathHelper"] = rn, rn.__name__ = ["ice", "utils", "MathHelper"], rn.getDistance = function(t, e) {
        return t.clone().minus(e).getLength()
    }, rn.getAngle = function(t, e) {
        return Math.atan2(t.y - e.y, t.x - e.x)
    }, rn.fixAngle = function(t) {
        for (; 0 > t;) t += 2 * Math.PI;
        for (; t > 2 * Math.PI;) t -= 2 * Math.PI;
        return t
    };
    var on = function(t, e) {
        null == e && (e = 0), null == t && (t = new createjs.Container), t.mouseEnabled = !1, t.mouseChildren = !1, this._context = t, this._shape = new createjs.Shape, this._graphics = this._shape.graphics, this._penX = 0, this._penY = 0, this._graphics.beginFill("#00FF00"), this._graphics.beginStroke("#0000FF"), this._graphics.setStrokeStyle(1), this._depth = e
    };
    n["ice.utils.MovieClip"] = on, on.__name__ = ["ice", "utils", "MovieClip"], on.prototype = {
        createEmptyChild: function(t, e) {
            var i = new on(null, e);
            return i._context.name = t, this._context.addChild(i._context), i
        },
        createChild: function(t) {
            var e = an.getSymbol(t);
            null == e ? (this._graphics.beginFill("#ff0000"), this._graphics.drawCircle(0, 0, 15)) : (this._context.addChild(e), this._symbol = e)
        },
        gotoAndStop: function(t) {
            if (null == t && (t = 1), null != this._symbol && _n.__instanceof(this._symbol, createjs.Sprite)) {
                var e = this._symbol;
                e.gotoAndStop(t)
            }
        },
        gotoAndPlay: function(t) {
            if (null == t && (t = ""), null != this._symbol && _n.__instanceof(this._symbol, createjs.Sprite)) {
                var e = this._symbol;
                e.gotoAndPlay(t)
            }
        },
        stop: function() {
            if (null != this._symbol && _n.__instanceof(this._symbol, createjs.Sprite)) {
                var t = this._symbol;
                t.stop()
            }
        },
        play: function() {
            if (null != this._symbol && _n.__instanceof(this._symbol, createjs.Sprite)) {
                var t = this._symbol;
                t.play()
            }
        },
        get_x: function() {
            return this._context.x
        },
        get_y: function() {
            return this._context.y
        },
        get_xScale: function() {
            return 100 * this._context.scaleX
        },
        get_yScale: function() {
            return 100 * this._context.scaleY
        },
        get_alpha: function() {
            return 100 * this._context.alpha
        },
        get_rotation: function() {
            return this._context.rotation
        },
        set_x: function(t) {
            return this._context.x = Math.round(t)
        },
        set_y: function(t) {
            return this._context.y = Math.round(t)
        },
        set_xScale: function(t) {
            return this._context.scaleX = t / 100
        },
        set_yScale: function(t) {
            return this._context.scaleY = t / 100
        },
        set_alpha: function(t) {
            return this._context.alpha = t / 100
        },
        set_rotation: function(t) {
            return this._context.rotation = t
        },
        get_visible: function() {
            return this._context.visible
        },
        set_visible: function(t) {
            return this._context.visible = t
        },
        _colorIntToString: function(t) {
            return "#" + d.hex(t, 6)
        },
        beginFill: function(t, e) {
            null == e && (e = 100), this._graphics.beginFill(this._colorIntToString(t))
        },
        lineStyle: function(t, e, i) {
            null == i && (i = 100), this._graphics.setStrokeStyle(t), this._graphics.beginStroke(this._colorIntToString(e))
        },
        endFill: function() {
            this._graphics.endFill()
        },
        moveTo: function(t, e) {
            this._graphics.moveTo(t, e), this._penX = t, this._penY = e
        },
        lineTo: function(t, e) {
            this._graphics.lineTo(t, e), this._penX = t, this._penY = e
        },
        arcTo: function(t, e, i) {
            for (var s = 10, n = e - t, r = p["int"](Math.abs(Math.ceil(n / 6.283185307179586 / s)) + 1), o = n / r, a = i / Math.cos(o / 2), l = this._penX - Math.cos(t) * i, h = this._penY - Math.sin(t) * i, _ = (2 * Math.PI / 360, 1), u = r + 1; u > _;) {
                var c = _++,
                    g = t + c * o;
                this._graphics.curveTo(Math.cos(g - o / 2) * a + l, Math.sin(g - o / 2) * a + h, Math.cos(g) * i + l, Math.sin(g) * i + h)
            }
        },
        drawPoly: function(t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 0, i = t.length; i > e;) {
                var s = e++;
                this.lineTo(t[s].x, t[s].y)
            }
        },
        drawCircle: function(t, e, i) {
            this._graphics.drawCircle(t, e, i)
        },
        drawRegPoly: function(t, e, i, s, n) {
            for (var r, o, a = n, l = [], h = 6.283185307179586 / s, _ = Math.cos, u = Math.sin; s-- > 0;) a += h, r = i * _(a) + t, o = i * u(a) + e, l.push(new ks(r, o));
            this.drawPoly(l)
        },
        __class__: on
    };
    var an = function() {};
    n["ice.utils.SymbolHelper"] = an, an.__name__ = ["ice", "utils", "SymbolHelper"], an.setSymbolFactoryCallback = function(t) {
        an._symbolFactoryCallback = t
    }, an.getSymbol = function(t) {
        return null == an._symbolFactoryCallback ? null : an._symbolFactoryCallback(t)
    };
    var ln = function() {};
    n["ice.utils.XmlHelper"] = ln, ln.__name__ = ["ice", "utils", "XmlHelper"], ln.importProp = function(t, e, i, s) {
        if (i.has.resolve(e)) {
            var n, r = i.att.resolve(e);
            if (null != s) switch (s) {
                case "Vector":
                    var o = r.split(",");
                    n = new ks(parseFloat(o[0]), parseFloat(o[1]));
                    break;
                case "String":
                    n = null == r ? "null" : "" + r;
                    break;
                case "Boolean":
                    n = "true" == r;
                    break;
                case "Color":
                    n = p.parseInt(r);
                    break;
                default:
                    n = parseFloat(r)
            } else n = parseFloat(r);
            t[e] = n
        }
    };
    var hn = function(t) {
        Error.call(this), this.val = t, this.message = String(t), Error.captureStackTrace && Error.captureStackTrace(this, hn)
    };
    n["js._Boot.HaxeError"] = hn, hn.__name__ = ["js", "_Boot", "HaxeError"], hn.__super__ = Error, hn.prototype = e(Error.prototype, {
        __class__: hn
    });
    var _n = function() {};
    n["js.Boot"] = _n, _n.__name__ = ["js", "Boot"], _n.__unhtml = function(t) {
        return t.split("&").join("&").split("<").join("&lt;").split(">").join("&gt;")
    }, _n.__trace = function(e, i) {
        var s;
        if (s = null != i ? i.fileName + ":" + i.lineNumber + ": " : "", s += _n.__string_rec(e, ""), null != i && null != i.customParams)
            for (var n = 0, r = i.customParams; n < r.length;) {
                var o = r[n];
                ++n, s += "," + _n.__string_rec(o, "")
            }
        var a;
        "undefined" != typeof document && null != (a = document.getElementById("haxe:trace")) ? a.innerHTML += _n.__unhtml(s) + "<br/>" : "undefined" != typeof t && null != t.log && t.log(s)
    }, _n.getClass = function(t) {
        if (t instanceof Array && null == t.__enum__) return Array;
        var e = t.__class__;
        if (null != e) return e;
        var i = _n.__nativeClassName(t);
        return null != i ? _n.__resolveNativeClass(i) : null
    }, _n.__string_rec = function(t, e) {
        if (null == t) return "null";
        if (e.length >= 5) return "<...>";
        var i = typeof t;
        switch ("function" == i && (t.__name__ || t.__ename__) && (i = "object"), i) {
            case "object":
                if (t instanceof Array) {
                    if (t.__enum__) {
                        if (2 == t.length) return t[0];
                        var s = t[0] + "(";
                        e += "	";
                        for (var n = 2, r = t.length; r > n;) {
                            var o = n++;
                            s += 2 != o ? "," + _n.__string_rec(t[o], e) : _n.__string_rec(t[o], e)
                        }
                        return s + ")"
                    }
                    var a = t.length,
                        l = "[";
                    e += "	";
                    for (var h = 0; a > h;) {
                        var _ = h++;
                        l += (_ > 0 ? "," : "") + _n.__string_rec(t[_], e)
                    }
                    return l += "]"
                }
                var u;
                try {
                    u = t.toString
                } catch (c) {
                    return c instanceof hn && (c = c.val), "???"
                }
                if (null != u && u != Object.toString && "function" == typeof u) {
                    var p = t.toString();
                    if ("[object Object]" != p) return p
                }
                var g = null,
                    d = "{\n";
                e += "	";
                var f = null != t.hasOwnProperty;
                for (var g in t)(!f || t.hasOwnProperty(g)) && "prototype" != g && "__class__" != g && "__super__" != g && "__interfaces__" != g && "__properties__" != g && (2 != d.length && (d += ", \n"), d += e + g + " : " + _n.__string_rec(t[g], e));
                return e = e.substring(1), d += "\n" + e + "}";
            case "function":
                return "<function>";
            case "string":
                return t;
            default:
                return String(t)
        }
    }, _n.__interfLoop = function(t, e) {
        if (null == t) return !1;
        if (t == e) return !0;
        var i = t.__interfaces__;
        if (null != i)
            for (var s = 0, n = i.length; n > s;) {
                var r = s++,
                    o = i[r];
                if (o == e || _n.__interfLoop(o, e)) return !0
            }
        return _n.__interfLoop(t.__super__, e)
    }, _n.__instanceof = function(t, e) {
        if (null == e) return !1;
        switch (e) {
            case Bn:
                return (0 | t) === t;
            case kn:
                return "number" == typeof t;
            case Ln:
                return "boolean" == typeof t;
            case String:
                return "string" == typeof t;
            case Array:
                return t instanceof Array && null == t.__enum__;
            case Dn:
                return !0;
            default:
                if (null == t) return !1;
                if ("function" == typeof e) {
                    if (t instanceof e) return !0;
                    if (_n.__interfLoop(_n.getClass(t), e)) return !0
                } else if ("object" == typeof e && _n.__isNativeObj(e) && t instanceof e) return !0;
                return e == Un && null != t.__name__ ? !0 : e == Nn && null != t.__ename__ ? !0 : t.__enum__ == e
        }
    }, _n.__cast = function(t, e) {
        if (_n.__instanceof(t, e)) return t;
        throw new hn("Cannot cast " + p.string(t) + " to " + p.string(e))
    }, _n.__nativeClassName = function(t) {
        var e = _n.__toStr.call(t).slice(8, -1);
        return "Object" == e || "Function" == e || "Math" == e || "JSON" == e ? null : e
    }, _n.__isNativeObj = function(t) {
        return null != _n.__nativeClassName(t)
    }, _n.__resolveNativeClass = function(t) {
        return Function("return typeof " + t + ' != "undefined" ? ' + t + " : null")()
    };
    var un = function() {};
    n["js.Browser"] = un, un.__name__ = ["js", "Browser"], un.getLocalStorage = function() {
        try {
            var t = window.localStorage;
            return t.getItem(""), t
        } catch (e) {
            return e instanceof hn && (e = e.val), null
        }
    }, un.getSessionStorage = function() {
        try {
            var t = window.sessionStorage;
            return t.getItem(""), t
        } catch (e) {
            return e instanceof hn && (e = e.val), null
        }
    }, un.createXMLHttpRequest = function() {
        if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
        if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
        throw new hn("Unable to create XMLHttpRequest object.")
    };
    var cn = function() {};
    n["js.Cookie"] = cn, cn.__name__ = ["js", "Cookie"], cn.set = function(t, e, i, s, n) {
        var r = t + "=" + encodeURIComponent(e);
        if (null != i) {
            var a = o.delta(new Date, 1e3 * i);
            r += ";expires=" + a.toGMTString()
        }
        null != s && (r += ";path=" + s), null != n && (r += ";domain=" + n), window.document.cookie = r
    }, cn.all = function() {
        for (var t = new ys, e = window.document.cookie.split(";"), i = 0; i < e.length;) {
            var s = e[i];
            ++i, s = d.ltrim(s);
            var n = s.split("=");
            n.length < 2 || t.set(n[0], decodeURIComponent(n[1].split("+").join(" ")))
        }
        return t
    }, cn.get = function(t) {
        return cn.all().get(t)
    }, cn.exists = function(t) {
        return cn.all().exists(t)
    }, cn.remove = function(t, e, i) {
        cn.set(t, "", -10, e, i)
    };
    var pn = function(t) {
        if (t instanceof Array && null == t.__enum__) this.a = t, this.byteLength = t.length;
        else {
            var e = t;
            this.a = [];
            for (var i = 0; e > i;) {
                var s = i++;
                this.a[s] = 0
            }
            this.byteLength = e
        }
    };
    n["js.html.compat.ArrayBuffer"] = pn, pn.__name__ = ["js", "html", "compat", "ArrayBuffer"], pn.sliceImpl = function(t, e) {
        var i = new jn(this, t, null == e ? null : e - t),
            s = new Gn(i.byteLength),
            n = new jn(s);
        return n.set(i), s
    }, pn.prototype = {
        slice: function(t, e) {
            return new pn(this.a.slice(t, e))
        },
        __class__: pn
    };
    var gn = function(t, e, i) {
        if (this.buf = t, this.offset = null == e ? 0 : e, this.length = null == i ? t.byteLength - this.offset : i, this.offset < 0 || this.length < 0 || this.offset + this.length > t.byteLength) throw new hn(bs.OutsideBounds)
    };
    n["js.html.compat.DataView"] = gn, gn.__name__ = ["js", "html", "compat", "DataView"], gn.prototype = {
        getInt8: function(t) {
            var e = this.buf.a[this.offset + t];
            return e >= 128 ? e - 256 : e
        },
        getUint8: function(t) {
            return this.buf.a[this.offset + t]
        },
        getInt16: function(t, e) {
            var i = this.getUint16(t, e);
            return i >= 32768 ? i - 65536 : i
        },
        getUint16: function(t, e) {
            return e ? this.buf.a[this.offset + t] | this.buf.a[this.offset + t + 1] << 8 : this.buf.a[this.offset + t] << 8 | this.buf.a[this.offset + t + 1]
        },
        getInt32: function(t, e) {
            var i = this.offset + t,
                s = this.buf.a[i++],
                n = this.buf.a[i++],
                r = this.buf.a[i++],
                o = this.buf.a[i++];
            return e ? s | n << 8 | r << 16 | o << 24 : o | r << 8 | n << 16 | s << 24
        },
        getUint32: function(t, e) {
            var i = this.getInt32(t, e);
            return 0 > i ? i + 4294967296 : i
        },
        getFloat32: function(t, e) {
            return vs.i32ToFloat(this.getInt32(t, e))
        },
        getFloat64: function(t, e) {
            var i = this.getInt32(t, e),
                s = this.getInt32(t + 4, e);
            return vs.i64ToDouble(e ? i : s, e ? s : i)
        },
        setInt8: function(t, e) {
            this.buf.a[t + this.offset] = 0 > e ? e + 128 & 255 : 255 & e
        },
        setUint8: function(t, e) {
            this.buf.a[t + this.offset] = 255 & e
        },
        setInt16: function(t, e, i) {
            this.setUint16(t, 0 > e ? e + 65536 : e, i)
        },
        setUint16: function(t, e, i) {
            var s = t + this.offset;
            i ? (this.buf.a[s] = 255 & e, this.buf.a[s++] = e >> 8 & 255) : (this.buf.a[s++] = e >> 8 & 255, this.buf.a[s] = 255 & e)
        },
        setInt32: function(t, e, i) {
            this.setUint32(t, e, i)
        },
        setUint32: function(t, e, i) {
            var s = t + this.offset;
            i ? (this.buf.a[s++] = 255 & e, this.buf.a[s++] = e >> 8 & 255, this.buf.a[s++] = e >> 16 & 255, this.buf.a[s++] = e >>> 24) : (this.buf.a[s++] = e >>> 24, this.buf.a[s++] = e >> 16 & 255, this.buf.a[s++] = e >> 8 & 255, this.buf.a[s++] = 255 & e)
        },
        setFloat32: function(t, e, i) {
            this.setUint32(t, vs.floatToI32(e), i)
        },
        setFloat64: function(t, e, i) {
            var s = vs.doubleToI64(e);
            i ? (this.setUint32(t, s.low), this.setUint32(t, s.high)) : (this.setUint32(t, s.high), this.setUint32(t, s.low))
        },
        __class__: gn
    };
    var dn = function() {};
    n["js.html.compat.Uint8Array"] = dn, dn.__name__ = ["js", "html", "compat", "Uint8Array"], dn._new = function(t, e, i) {
        var s;
        if ("number" == typeof t) {
            s = [];
            for (var n = 0; t > n;) {
                var r = n++;
                s[r] = 0
            }
            s.byteLength = s.length, s.byteOffset = 0, s.buffer = new pn(s)
        } else if (_n.__instanceof(t, pn)) {
            var o = t;
            null == e && (e = 0), null == i && (i = o.byteLength - e), s = 0 == e ? o.a : o.a.slice(e, e + i), s.byteLength = s.length, s.byteOffset = e, s.buffer = o
        } else {
            if (!(t instanceof Array && null == t.__enum__)) throw new hn("TODO " + p.string(t));
            s = t.slice(), s.byteLength = s.length, s.byteOffset = 0, s.buffer = new pn(s)
        }
        return s.subarray = dn._subarray, s.set = dn._set, s
    }, dn._set = function(t, e) {
        var i = this;
        if (_n.__instanceof(t.buffer, pn)) {
            var s = t;
            if (t.byteLength + e > i.byteLength) throw new hn("set() outside of range");
            for (var n = 0, r = t.byteLength; r > n;) {
                var o = n++;
                i[o + e] = s[o]
            }
        } else {
            if (!(t instanceof Array && null == t.__enum__)) throw new hn("TODO");
            var a = t;
            if (a.length + e > i.byteLength) throw new hn("set() outside of range");
            for (var l = 0, h = a.length; h > l;) {
                var _ = l++;
                i[_ + e] = a[_]
            }
        }
    }, dn._subarray = function(t, e) {
        var i = this,
            s = dn._new(i.slice(t, e));
        return s.byteOffset = t, s
    };
    var fn = n["tweezer.EEase"] = {
        __ename__: ["tweezer", "EEase"],
        __constructs__: ["EASE_IN", "EASE_IN_OUT", "EASE_OUT", "EASE_OUT_IN"]
    };
    fn.EASE_IN = ["EASE_IN", 0], fn.EASE_IN.toString = r, fn.EASE_IN.__enum__ = fn, fn.EASE_IN_OUT = ["EASE_IN_OUT", 1], fn.EASE_IN_OUT.toString = r, fn.EASE_IN_OUT.__enum__ = fn, fn.EASE_OUT = ["EASE_OUT", 2], fn.EASE_OUT.toString = r, fn.EASE_OUT.__enum__ = fn, fn.EASE_OUT_IN = ["EASE_OUT_IN", 3], fn.EASE_OUT_IN.toString = r, fn.EASE_OUT_IN.__enum__ = fn;
    var mn = n["tweezer.ETween"] = {
        __ename__: ["tweezer", "ETween"],
        __constructs__: ["BACK", "BOUNCE", "CIRCULAR", "CUBIC", "ELASTIC", "EXPONENTIAL", "LINEAR", "QUADRATIC", "QUARTIC", "QUINTIC", "SINE"]
    };
    mn.BACK = function(t) {
        var e = ["BACK", 0, t];
        return e.__enum__ = mn, e.toString = r, e
    }, mn.BOUNCE = ["BOUNCE", 1], mn.BOUNCE.toString = r, mn.BOUNCE.__enum__ = mn, mn.CIRCULAR = ["CIRCULAR", 2], mn.CIRCULAR.toString = r, mn.CIRCULAR.__enum__ = mn, mn.CUBIC = ["CUBIC", 3], mn.CUBIC.toString = r, mn.CUBIC.__enum__ = mn, mn.ELASTIC = function(t, e) {
        var i = ["ELASTIC", 4, t, e];
        return i.__enum__ = mn, i.toString = r, i
    }, mn.EXPONENTIAL = ["EXPONENTIAL", 5], mn.EXPONENTIAL.toString = r, mn.EXPONENTIAL.__enum__ = mn, mn.LINEAR = ["LINEAR", 6], mn.LINEAR.toString = r, mn.LINEAR.__enum__ = mn, mn.QUADRATIC = ["QUADRATIC", 7], mn.QUADRATIC.toString = r, mn.QUADRATIC.__enum__ = mn, mn.QUARTIC = ["QUARTIC", 8], mn.QUARTIC.toString = r, mn.QUARTIC.__enum__ = mn, mn.QUINTIC = ["QUINTIC", 9], mn.QUINTIC.toString = r, mn.QUINTIC.__enum__ = mn, mn.SINE = ["SINE", 10], mn.SINE.toString = r, mn.SINE.__enum__ = mn;
    var yn = function() {};
    n["tweezer.TweenFactory"] = yn, yn.__name__ = ["tweezer", "TweenFactory"], yn.createTweenFunction = function(t, e, i, s, n) {
        switch (null == s && (s = fn.EASE_IN), null == n && (n = mn.LINEAR), n[1]) {
            case 0:
                var r = n[2];
                switch (null == r && (r = 1.70158), s[1]) {
                    case 0:
                        return function(s) {
                            return vn.easeIn(s, t, e, i, r)
                        };
                    case 1:
                        return function(s) {
                            return vn.easeInOut(s, t, e, i, r)
                        };
                    case 2:
                        return function(s) {
                            return vn.easeOut(s, t, e, i, r)
                        };
                    case 3:
                        return function(s) {
                            return vn.easeOutIn(s, t, e, i, r)
                        }
                }
                break;
            case 1:
                switch (s[1]) {
                    case 0:
                        return function(s) {
                            return Sn.easeIn(s, t, e, i)
                        };
                    case 1:
                        return function(s) {
                            return Sn.easeInOut(s, t, e, i)
                        };
                    case 2:
                        return function(s) {
                            return Sn.easeOut(s, t, e, i)
                        };
                    case 3:
                        return function(s) {
                            return Sn.easeOutIn(s, t, e, i)
                        }
                }
                break;
            case 2:
                switch (s[1]) {
                    case 0:
                        return function(s) {
                            return En.easeIn(s, t, e, i)
                        };
                    case 1:
                        return function(s) {
                            return En.easeInOut(s, t, e, i)
                        };
                    case 2:
                        return function(s) {
                            return En.easeOut(s, t, e, i)
                        };
                    case 3:
                        return function(s) {
                            return En.easeOutIn(s, t, e, i)
                        }
                }
                break;
            case 3:
                switch (s[1]) {
                    case 0:
                        return function(s) {
                            return wn.easeIn(s, t, e, i)
                        };
                    case 1:
                        return function(s) {
                            return wn.easeInOut(s, t, e, i)
                        };
                    case 2:
                        return function(s) {
                            return wn.easeOut(s, t, e, i)
                        };
                    case 3:
                        return function(s) {
                            return wn.easeOutIn(s, t, e, i)
                        }
                }
                break;
            case 4:
                var o = n[3],
                    a = n[2];
                switch (null == a && (a = .3 * i * (s == fn.EASE_IN_OUT ? 1.5 : 1)), null == o && (o = 0), s[1]) {
                    case 0:
                        return function(s) {
                            return In.easeIn(s, t, e, i, a, o)
                        };
                    case 1:
                        return function(s) {
                            return In.easeInOut(s, t, e, i, a, o)
                        };
                    case 2:
                        return function(s) {
                            return In.easeOut(s, t, e, i, a, o)
                        };
                    case 3:
                        return function(s) {
                            return In.easeOutIn(s, t, e, i, a, o)
                        }
                }
                break;
            case 5:
                switch (s[1]) {
                    case 0:
                        return function(s) {
                            return Tn.easeIn(s, t, e, i)
                        };
                    case 1:
                        return function(s) {
                            return Tn.easeInOut(s, t, e, i)
                        };
                    case 2:
                        return function(s) {
                            return Tn.easeOut(s, t, e, i)
                        };
                    case 3:
                        return function(s) {
                            return Tn.easeOutIn(s, t, e, i)
                        }
                }
                break;
            case 6:
                return function(s) {
                    return An.ease(s, t, e, i)
                };
            case 7:
                switch (s[1]) {
                    case 0:
                        return function(s) {
                            return Cn.easeIn(s, t, e, i)
                        };
                    case 1:
                        return function(s) {
                            return Cn.easeInOut(s, t, e, i)
                        };
                    case 2:
                        return function(s) {
                            return Cn.easeOut(s, t, e, i)
                        };
                    case 3:
                        return function(s) {
                            return Cn.easeOutIn(s, t, e, i)
                        }
                }
                break;
            case 8:
                switch (s[1]) {
                    case 0:
                        return function(s) {
                            return xn.easeIn(s, t, e, i)
                        };
                    case 1:
                        return function(s) {
                            return xn.easeInOut(s, t, e, i)
                        };
                    case 2:
                        return function(s) {
                            return xn.easeOut(s, t, e, i)
                        };
                    case 3:
                        return function(s) {
                            return xn.easeOutIn(s, t, e, i)
                        }
                }
                break;
            case 9:
                switch (s[1]) {
                    case 0:
                        return function(s) {
                            return Pn.easeIn(s, t, e, i)
                        };
                    case 1:
                        return function(s) {
                            return Pn.easeInOut(s, t, e, i)
                        };
                    case 2:
                        return function(s) {
                            return Pn.easeOut(s, t, e, i)
                        };
                    case 3:
                        return function(s) {
                            return Pn.easeOutIn(s, t, e, i)
                        }
                }
                break;
            case 10:
                switch (s[1]) {
                    case 0:
                        return function(s) {
                            return On.easeIn(s, t, e, i)
                        };
                    case 1:
                        return function(s) {
                            return On.easeInOut(s, t, e, i)
                        };
                    case 2:
                        return function(s) {
                            return On.easeOut(s, t, e, i)
                        };
                    case 3:
                        return function(s) {
                            return On.easeOutIn(s, t, e, i)
                        }
                }
        }
    };
    var bn = function(t, e, i, s, n, r, o, a, l, h, _) {
        null == o && (o = 0), null == r && (r = 1e3), null == n && (n = 0), this._updateCallback = e, this._startValue = i, this._endValue = s, this._startDelay = n, this._duration = r, this._endDelay = o, this._easeType = a, this._tweenType = l, this._completeCallback = h, this._isSnap = _, M.call(this, t), this._updater(), this._updates = 0
    };
    n["tweezer.Tweezer"] = bn, bn.__name__ = ["tweezer", "Tweezer"], bn.__super__ = M, bn.prototype = e(M.prototype, {
        _init: function() {
            M.prototype._init.call(this), this._tweenFunction = yn.createTweenFunction(this._startValue, this._endValue - this._startValue, this._duration, this._easeType, this._tweenType)
        },
        _updater: function(t) {
            if (null == t && (t = 0), M.prototype._updater.call(this, t), null != this._updateCallback) {
                var e = this._tweenFunction(Math.min(Math.max(0, this._age - this._startDelay), this._duration));
                this._updateCallback(this._isSnap ? Math.round(e) : e)
            }
            this._age >= this._startDelay + this._duration + this._endDelay && (null != this._completeCallback && this._completeCallback(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        __class__: bn
    });
    var vn = function() {};
    n["tweezer.tweens.Back"] = vn, vn.__name__ = ["tweezer", "tweens", "Back"], vn.easeIn = function(t, e, i, s, n) {
        return i * (t /= s) * t * ((n + 1) * t - n) + e
    }, vn.easeOut = function(t, e, i, s, n) {
        return i * ((t = t / s - 1) * t * ((n + 1) * t + n) + 1) + e
    }, vn.easeInOut = function(t, e, i, s, n) {
        return (t /= s / 2) < 1 ? i / 2 * t * t * (((n *= 1.525) + 1) * t - n) + e : i / 2 * ((t -= 2) * t * (((n *= 1.525) + 1) * t + n) + 2) + e
    }, vn.easeOutIn = function(t, e, i, s, n) {
        return s / 2 > t ? vn.easeOut(2 * t, e, i / 2, s, n) : vn.easeIn(2 * t - s, e + i / 2, i / 2, s, n)
    };
    var Sn = function() {};
    n["tweezer.tweens.Bounce"] = Sn, Sn.__name__ = ["tweezer", "tweens", "Bounce"], Sn.easeIn = function(t, e, i, s) {
        return i - Sn.easeOut(s - t, 0, i, s) + e
    }, Sn.easeOut = function(t, e, i, s) {
        return (t /= s) < .36363636363636365 ? 7.5625 * i * t * t + e : .7272727272727273 > t ? i * (7.5625 * (t -= .5454545454545454) * t + .75) + e : .9090909090909091 > t ? i * (7.5625 * (t -= .8181818181818182) * t + .9375) + e : i * (7.5625 * (t -= .9545454545454546) * t + .984375) + e
    }, Sn.easeInOut = function(t, e, i, s) {
        return s / 2 > t ? .5 * Sn.easeIn(2 * t, 0, i, s) + e : .5 * Sn.easeOut(2 * t - s, 0, i, s) + .5 * i + e
    }, Sn.easeOutIn = function(t, e, i, s) {
        return s / 2 > t ? Sn.easeOut(2 * t, e, i / 2, s) : Sn.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var En = function() {};
    n["tweezer.tweens.Circular"] = En, En.__name__ = ["tweezer", "tweens", "Circular"], En.easeIn = function(t, e, i, s) {
        return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + e
    }, En.easeOut = function(t, e, i, s) {
        return i * Math.sqrt(1 - (t = t / s - 1) * t) + e
    }, En.easeInOut = function(t, e, i, s) {
        return (t /= s / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
    }, En.easeOutIn = function(t, e, i, s) {
        return s / 2 > t ? En.easeOut(2 * t, e, i / 2, s) : En.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var wn = function() {};
    n["tweezer.tweens.Cubic"] = wn, wn.__name__ = ["tweezer", "tweens", "Cubic"], wn.easeIn = function(t, e, i, s) {
        return i * (t /= s) * t * t + e
    }, wn.easeOut = function(t, e, i, s) {
        return i * ((t = t / s - 1) * t * t + 1) + e
    }, wn.easeInOut = function(t, e, i, s) {
        return (t /= s / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
    }, wn.easeOutIn = function(t, e, i, s) {
        return s / 2 > t ? wn.easeOut(2 * t, e, i / 2, s) : wn.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var In = function() {};
    n["tweezer.tweens.Elastic"] = In, In.__name__ = ["tweezer", "tweens", "Elastic"], In.easeIn = function(t, e, i, s, n, r) {
        if (0 == t) return e;
        if (1 == (t /= s)) return e + i;
        var o;
        return 0 == r || r < Math.abs(i) ? (r = i, o = n / 4) : o = n / (2 * Math.PI) * Math.asin(i / r), -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * s - o) * Math.PI / n)) + e
    }, In.easeOut = function(t, e, i, s, n, r) {
        if (0 == t) return e;
        if (1 == (t /= s)) return e + i;
        var o;
        return 0 == r || r < Math.abs(i) ? (r = i, o = n / 4) : o = n / (2 * Math.PI) * Math.asin(i / r), r * Math.pow(2, -10 * t) * Math.sin(2 * (t * s - o) * Math.PI / n) + i + e
    }, In.easeInOut = function(t, e, i, s, n, r) {
        if (0 == t) return e;
        if (2 == (t /= s / 2)) return e + i;
        var o;
        return 0 == r || r < Math.abs(i) ? (r = i, o = n / 4) : o = n / (2 * Math.PI) * Math.asin(i / r), 1 > t ? -.5 * r * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * s - o) * Math.PI / n) + e : r * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * s - o) * Math.PI / n) * .5 + i + e
    }, In.easeOutIn = function(t, e, i, s, n, r) {
        return s / 2 > t ? In.easeOut(2 * t, e, i / 2, s, n, r) : In.easeIn(2 * t - s, e + i / 2, i / 2, s, n, r)
    };
    var Tn = function() {};
    n["tweezer.tweens.Exponential"] = Tn, Tn.__name__ = ["tweezer", "tweens", "Exponential"], Tn.easeIn = function(t, e, i, s) {
        return 0 == t ? e : i * Math.pow(2, 10 * (t / s - 1)) + e - .001 * i
    }, Tn.easeOut = function(t, e, i, s) {
        return t == s ? e + i : 1.001 * i * (-Math.pow(2, -10 * t / s) + 1) + e
    }, Tn.easeInOut = function(t, e, i, s) {
        return 0 == t ? e : t == s ? e + i : (t /= s / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e - 5e-4 * i : i / 2 * 1.0005 * (-Math.pow(2, -10 * --t) + 2) + e
    }, Tn.easeOutIn = function(t, e, i, s) {
        return s / 2 > t ? Tn.easeOut(2 * t, e, i / 2, s) : Tn.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var An = function() {};
    n["tweezer.tweens.Linear"] = An, An.__name__ = ["tweezer", "tweens", "Linear"], An.ease = function(t, e, i, s) {
        return i * t / s + e
    };
    var Cn = function() {};
    n["tweezer.tweens.Quadratic"] = Cn, Cn.__name__ = ["tweezer", "tweens", "Quadratic"], Cn.easeIn = function(t, e, i, s) {
        return i * (t /= s) * t + e
    }, Cn.easeOut = function(t, e, i, s) {
        return -i * (t /= s) * (t - 2) + e
    }, Cn.easeInOut = function(t, e, i, s) {
        return (t /= s / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
    }, Cn.easeOutIn = function(t, e, i, s) {
        return s / 2 > t ? Cn.easeOut(2 * t, e, i / 2, s) : Cn.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var xn = function() {};
    n["tweezer.tweens.Quartic"] = xn, xn.__name__ = ["tweezer", "tweens", "Quartic"], xn.easeIn = function(t, e, i, s) {
        return i * (t /= s) * t * t * t + e
    }, xn.easeOut = function(t, e, i, s) {
        return -i * ((t = t / s - 1) * t * t * t - 1) + e
    }, xn.easeInOut = function(t, e, i, s) {
        return (t /= s / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
    }, xn.easeOutIn = function(t, e, i, s) {
        return s / 2 > t ? xn.easeOut(2 * t, e, i / 2, s) : xn.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var Pn = function() {};
    n["tweezer.tweens.Quintic"] = Pn, Pn.__name__ = ["tweezer", "tweens", "Quintic"], Pn.easeIn = function(t, e, i, s) {
        return i * (t /= s) * t * t * t * t + e
    }, Pn.easeOut = function(t, e, i, s) {
        return i * ((t = t / s - 1) * t * t * t * t + 1) + e
    }, Pn.easeInOut = function(t, e, i, s) {
        return (t /= s / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
    }, Pn.easeOutIn = function(t, e, i, s) {
        return s / 2 > t ? Pn.easeOut(2 * t, e, i / 2, s) : Pn.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var On = function() {};
    n["tweezer.tweens.Sine"] = On, On.__name__ = ["tweezer", "tweens", "Sine"], On.easeIn = function(t, e, i, s) {
        return -i * Math.cos(t / s * (Math.PI / 2)) + i + e
    }, On.easeOut = function(t, e, i, s) {
        return i * Math.sin(t / s * (Math.PI / 2)) + e
    }, On.easeInOut = function(t, e, i, s) {
        return -i / 2 * (Math.cos(Math.PI * t / s) - 1) + e
    }, On.easeOutIn = function(t, e, i, s) {
        return s / 2 > t ? On.easeOut(2 * t, e, i / 2, s) : On.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var Mn, Rn = 0;
    Array.prototype.indexOf && (l.indexOf = function(t, e, i) {
        return Array.prototype.indexOf.call(t, e, i)
    }), n.Math = Math, String.prototype.__class__ = n.String = String, String.__name__ = ["String"], n.Array = Array, Array.__name__ = ["Array"], Date.prototype.__class__ = n.Date = Date, Date.__name__ = ["Date"];
    var Bn = n.Int = {
            __name__: ["Int"]
        },
        Dn = n.Dynamic = {
            __name__: ["Dynamic"]
        },
        kn = n.Float = Number;
    kn.__name__ = ["Float"];
    var Ln = n.Bool = Boolean;
    Ln.__ename__ = ["Bool"];
    var Un = n.Class = {
            __name__: ["Class"]
        },
        Nn = {};
    as.content = [{
        name: "revision",
        data: "NjINCjIwMTUvMTEvMTEgMjA6MzY6MDkNCg"
    }, {
        name: "config",
        data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPGRhdGE+Cgk8c2V0dGluZ3M+CgkJPGZvbnQgbmFtZT0ic3RydWN0aWEtd2ViZm9udCIgLz4KCQk8YXNjaWlBcnQ+CiAgIF9fX19fX19fX19fICBfX19fX19fX19fX19fX19fX19fIF9fX19fX19fX19fX19fXyAgICBfX18gIF9fX19fICBfX19fXyAgX19fICAgX18gICBfXyAKICAvIF9fLyAgXy8gXyBcLyBfXy8gX18vICBfLyBfX18vIC8vIC9fICBfXy8gX18vIF8gXCAgLyBfIFwvICBfLyB8LyAvIF8gKS8gXyB8IC8gLyAgLyAvIAogLyBfL18vIC8vICwgXy8gXy8vIF8vXy8gLy8gKF8gLyBfICAvIC8gLyAvIF8vLyAsIF8vIC8gX19fLy8gLy8gICAgLyBfICAvIF9fIHwvIC9fXy8gL19fCi9fLyAvX19fL18vfF8vX19fL18vIC9fX18vXF9fXy9fLy9fLyAvXy8gL19fXy9fL3xffCAvXy8gIC9fX18vXy98Xy9fX19fL18vIHxfL19fX18vX19fXy8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoJCTwvYXNjaWlBcnQ+CgkJPHVybHM+CgkJCTx3ZWJzaXRlPnBsYXlodG1sLmNvbTwvd2Vic2l0ZT4KCQk8L3VybHM+CgkJPGdvb2dsZUFuYWx5dGljcyBpZD0iVUEtMjI0MDYzMzctMTQiIGVuYWJsZWQ9ImZhbHNlIiAvPgoJPC9zZXR0aW5ncz4KCTxndWk+CgkJPHByZWxvYWRlckNvbXBsZXRlPueCueWHu+W8gOWnizwvcHJlbG9hZGVyQ29tcGxldGU+CgkJPGJ1dHRvbnM+CgkJCTx0ZXN0TW9kZT4KCQkJCTxza2lwPui3s+i/hzwvc2tpcD4KCQkJPC90ZXN0TW9kZT4KCQk8L2J1dHRvbnM+CgkJPHNjZW5lcz4KCQkJPGdhbWU+CgkJCQk8YWNoaWV2ZW1lbnRzPgoJCQkJCTxtaXNzaW9uMSB0aXRsZT0iSGVsaWNvcHRlciBNZWRpY2FsIiAvPgoJCQkJCTxtaXNzaW9uMiB0aXRsZT0iSW50ZXJpb3IgQXR0YWNrIiAvPgoJCQkJCTxtaXNzaW9uMyB0aXRsZT0iTW90b3IgVmVoaWNsZSBJbmNpZGVudCIgLz4KCQkJCQk8bWlzc2lvbjQgdGl0bGU9IkVxdWlwbWVudCBDaGVjayIgLz4KCQkJCQk8Ym9udXMgdGl0bGU9IlJlc2N1ZSBUaGUgS2l0dGVuIiAvPgoJCQkJPC9hY2hpZXZlbWVudHM+CgkJCQk8cXVlc3Rpb25zPgoJCQkJCTx0aXRsZT5UcnVlIG9yIEZhbHNlPzwvdGl0bGU+CgkJCQkJPGNvcnJlY3Q+Q29ycmVjdCE8L2NvcnJlY3Q+CgkJCQkJPGluY29ycmVjdD5MaWZlIExvc3QhPC9pbmNvcnJlY3Q+CgkJCQkJPHF1ZXN0aW9uMSBhbnN3ZXI9InRydWUiPlRvIHJlcG9ydCBhbiBlbWVyZ2VuY3kgd2Ugc2hvdWxkIGRpYWwgOS0xLTE/PC9xdWVzdGlvbjE+CgkJCQkJPGZhY3QxPktub3cgeW91ciBsb2NhbCBlbWVyZ2VuY3kgbnVtYmVyLiA5LTEtMS4gIElmIHRoZXJlIGlzIGEgZmlyZSBhdCB5b3VyIGhvdXNlLCBjaG9vc2Ugb25lIGZhbWlseSBtZW1iZXIgdG8gY2FsbCB0aGUgZmlyZSBkZXBhcnRtZW50IGZyb20gYSBuZWlnaGJvcnMgcGhvbmUuPC9mYWN0MT4KCQkJCQk8cXVlc3Rpb24yIGFuc3dlcj0idHJ1ZSI+SXTigJlzIGRhbmdlcm91cyB0byBwbGF5IHdpdGggbWF0Y2hlcyBvciBsaWdodGVycywgZXZlbiBmb3IgYmlnIGtpZHM/PC9xdWVzdGlvbjI+CgkJCQkJPGZhY3QyPkRvbid0IHBsYXkgd2l0aCBtYXRjaGVzIGFuZCBsaWdodGVycy4gSWYgeW91IHNlZSBtYXRjaGVzIG9yIGEgbGlnaHRlciB3aGVyZSB5b3UgY2FuIHJlYWNoIHRoZW0sIGRvbid0IHRvdWNoIHRoZW0uIEdvIHRlbGwgYSBncm93biB1cCByaWdodCBhd2F5LjwvZmFjdDI+CgkJCQkJPHF1ZXN0aW9uMyBhbnN3ZXI9ImZhbHNlIj5JZiBhIHBhbiBvbiB0aGUgc3RvdmUgY2F0Y2hlcyBmaXJlLCBpdOKAmXMgYmVzdCB0byBjYXJlZnVsbHkgdGFrZSBpdCBvdXRzaWRlPzwvcXVlc3Rpb24zPgoJCQkJCTxmYWN0Mz5QYW4gZmlyZXMgYXJlIHZlcnkgY29tbW9uLCBhbmQgYXJlIHNhZmVseSBwdXQgb3V0IGJ5IHF1aWNrbHkgcGxhY2luZyBhIGxpZCBvdmVyIHRoZSBwYW4uIElmIHRoZXJlIGlzIG5vIGxpZCwgdXNlIGEgd2V0IHRvd2VsIGFuZCBkcmFwZSBpdCBvdmVyIHRoZSBwYW4uPC9mYWN0Mz4KCQkJCQk8cXVlc3Rpb240IGFuc3dlcj0iZmFsc2UiPlNtb2tlIGFsYXJtcyBzaG91bGQgb25seSBiZSBpbiB0aGUga2l0Y2hlbj88L3F1ZXN0aW9uND4KCQkJCQk8ZmFjdDQ+U21va2UgZGV0ZWN0b3JzIHNhdmUgbGl2ZXMuICBBc2sgeW91ciBwYXJlbnRzIHRvIGluc3RhbGwgc21va2UgZGV0ZWN0b3JzIG9uIGV2ZXJ5IGZsb29yIGFuZCwgaWRlYWxseSwgaW4gdGhlIGJlZHJvb21zLiBBc2sgeW91ciBwYXJlbnRzIHRvIHNob3cgeW91IHdoZXJlIGVhY2ggb25lIGlzIGxvY2F0ZWQuPC9mYWN0ND4KCQkJCQk8cXVlc3Rpb241IGFuc3dlcj0idHJ1ZSI+U21va2UgYWxhcm1zIHNob3VsZCBiZSB0ZXN0ZWQgbW9udGhseSBhbmQgYmF0dGVyaWVzIGNoYW5nZWQgdHdpY2UgYSB5ZWFyPzwvcXVlc3Rpb241PgoJCQkJCTxmYWN0NT5SZW1pbmQgeW91ciBwYXJlbnRzIHRvIHRlc3QgeW91ciBzbW9rZSBkZXRlY3RvcnMgZXZlcnkgbW9udGguIE1ha2Ugc3VyZSBldmVyeW9uZSBpbiB5b3VyIGZhbWlseSBpcyBmYW1pbGlhciB3aXRoIGl0cyBwaWVyY2luZyBzb3VuZC4gVGVhY2ggdGhlbSB0aGF0IHRoaXMgc291bmQgbWVhbnMgZGFuZ2VyLCBhbmQgdGhleSBtdXN0IGVzY2FwZSBxdWlja2x5LjwvZmFjdDU+CgkJCQkJPHF1ZXN0aW9uNiBhbnN3ZXI9ImZhbHNlIj5BIEZpcmUgRXNjYXBlIHBsYW4gaXMgb25seSBuZWVkZWQgYXQgc2Nob29sPzwvcXVlc3Rpb242PgoJCQkJCTxmYWN0Nj5IYXZlIGFuIGVzY2FwZSBwbGFuIGF0IGhvbWUgdG9vIC0gYW5kIHByYWN0aWNlIGl0IHdpdGggeW91ciBmYW1pbHkuIEZpbmQgdHdvIHdheXMgb3V0IG9mIGV2ZXJ5IHJvb20gaW4gY2FzZSBvbmUgd2F5IGlzIGJsb2NrZWQgYnkgZmlyZSBvciBzbW9rZS48L2ZhY3Q2PgoJCQkJCTxxdWVzdGlvbjcgYW5zd2VyPSJ0cnVlIj5JbiB0aGUgZXZlbnQgb2YgYSBmaXJlIHlvdSBzaG91bGQgZ2V0IG91dHNpZGU/PC9xdWVzdGlvbjc+CgkJCQkJPGZhY3Q3PkluIGNhc2Ugb2YgZmlyZTogRE9OJ1QgSElERSwgR08gT1VUU0lERSEgRmlyZXMgYXJlIHNjYXJ5LCBidXQgeW91IHNob3VsZCBORVZFUiBoaWRlIGluIGNsb3NldHMgb3IgdW5kZXIgYmVkcyB3aGVuIHRoZXJlIGlzIGEgZmlyZS48L2ZhY3Q3PgoJCQkJCTxxdWVzdGlvbjggYW5zd2VyPSJ0cnVlIj5Zb3Ugc2hvdWxkIGNyYXdsIGxvdyB1bmRlciBzbW9rZSB3aGVuIGVzY2FwaW5nIGEgZmlyZT88L3F1ZXN0aW9uOD4KCQkJCQk8ZmFjdDg+VG8gZXNjYXBlIGR1cmluZyBhIGZpcmU7IEZhbGwgJiBDcmF3bC4gSXQgaXMgZWFzaWVyIHRvIGJyZWF0aCBpbiBhIGZpcmUgaWYgeW91IHN0YXkgbG93IHdoaWxlIGdldHRpbmcgb3V0LiAgVXNlIHRoZSBiYWNrIG9mIHlvdXIgaGFuZCB0byB0ZXN0IGlmIGEgZG9vciBpcyBob3QgYmVmb3JlIHlvdSBvcGVuIGl0LiBJZiBpdCBpcyBob3QsIHRyeSB0byB1c2UgYW5vdGhlciB3YXkgb3V0LjwvZmFjdDg+CgkJCQkJPHF1ZXN0aW9uOSBhbnN3ZXI9ImZhbHNlIj5JZiB5b3VyIGNsb3RoZXMgY2F0Y2ggb24gZmlyZSwgeW91IHNob3VsZCBydW4gZm9yIGhlbHA/PC9xdWVzdGlvbjk+CgkJCQkJPGZhY3Q5PlJ1bm5pbmcgbWFrZXMgZmlyZSBidXJuIGZhc3Rlci4gSWYgeW91ciBjbG90aGVzIGFyZSBvbiBmaXJlOyBTVE9QLCBEUk9QIGFuZCBST0xMIHVudGlsIHRoZSBmaXJlIGlzIG91dC4gU2hvdXQgZm9yIGhlbHAsIGJ1dCBkb24ndCBydW4uPC9mYWN0OT4KCQkJCQk8cXVlc3Rpb24xMCBhbnN3ZXI9InRydWUiPllvdSBzaG91bGQga25vdyB5b3VyIGZpcmUgZXNjYXBlIG1lZXRpbmcgcGxhY2U/PC9xdWVzdGlvbjEwPgoJCQkJCTxmYWN0MTA+Q2hvb3NlIGEgbWVldGluZyBwbGFjZSBvdXRzaWRlLCBzdWNoIGFzIGEgYmlnIHRyZWUgb3IgdGhlIGVuZCBvZiB0aGUgZHJpdmV3YXksIHNvIHlvdSB3aWxsIGtub3cgdGhhdCBldmVyeW9uZSBoYXMgZ290dGVuIG91dCBzYWZlbHkuIE5FVkVSIGdvIGJhY2sgaW50byBhIGJ1cm5pbmcgYnVpbGRpbmcgZm9yIGFueSByZWFzb24uPC9mYWN0MTA+CgkJCQk8L3F1ZXN0aW9ucz4KCQkJPC9nYW1lPgoJCQk8aW5zdHJ1Y3Rpb25zPgoJCQkJPHRpdGxlPuaAjuS5iOeOqTwvdGl0bGU+CgkJCQk8cGFnZTE+PCFbQ0RBVEFbVGFwIGRvd24gdG8gc2hvb3QgeW91ciBiYWxsLiBUYXAgbGVmdCBvciByaWdodCB0byB1c2UgeW91ciBmbGlwcGVycy4gVGFwIHVwIHRvIHRpbHQgdGhlIHRhYmxlLl1dPjwvcGFnZTE+CgkJCQk8cGFnZTI+PCFbQ0RBVEFbU2hvb3QgdGhlIGJhbGwgdGhyb3VnaCB0aGUgd2F0ZXIgc3ByYXkgdG8gc3RhcnQgeW91ciBtaXNzaW9uLCB0aGVuIGZvbGxvdyB0aGUgbGlnaHRzLl1dPjwvcGFnZTI+CgkJCQk8cGFnZTM+PCFbQ0RBVEFbQW5zd2VyIDkxMSB0byBhY3RpdmF0ZSB0aGUgbGFkZGVyIHR1bm5lbCBhbmQgdW5sb2NrIHRoZSBzZWNyZXQgamFja3BvdCBib251cyB0YWJsZSFdXT48L3BhZ2UzPgoJCQk8L2luc3RydWN0aW9ucz4KCQkJPHJlc3VsdHM+CgkJCQk8bWVzc2FnZT5XZWxsIGRvbmUmbHQ7YnIvJmd0O3lvdSBzY29yZWQ8L21lc3NhZ2U+CgkJCQk8d2luPk5ldyBoaWdoIHNjb3JlITwvd2luPgoJCQkJPGxvc2U+SGlnaCBzY29yZSZsdDtici8mZ3Q7X19ISUdIX1NDT1JFX188L2xvc2U+CgkJCTwvcmVzdWx0cz4KCQk8L3NjZW5lcz4KCTwvZ3VpPgo8L2RhdGE+"
    }];
    var Fn = {},
        Gn = Function("return typeof ArrayBuffer != 'undefined' ? ArrayBuffer : null")() || pn;
    null == Gn.prototype.slice && (Gn.prototype.slice = pn.sliceImpl);
    var jn = (Function("return typeof DataView != 'undefined' ? DataView : null")() || gn, Function("return typeof Uint8Array != 'undefined' ? Uint8Array : null")() || dn._new);
    y.Element = 0, y.PCData = 1, y.CData = 2, y.Comment = 3, y.DocType = 4, y.ProcessingInstruction = 5, y.Document = 6, ls.USE_CACHE = !1, ls.USE_ENUM_INDEX = !1, ls.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", _s.DEFAULT_RESOLVER = m, _s.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", cs.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cs.BYTES = us.ofString(cs.CHARS), ms.count = 0, vs.i64tmp = function() {
        var t, e = new rs(0, 0);
        return t = e
    }(this), Cs.escapes = function() {
        var t, e = new ys;
        return null != Fn.lt ? e.setReserved("lt", "<") : e.h.lt = "<", null != Fn.gt ? e.setReserved("gt", ">") : e.h.gt = ">", null != Fn.amp ? e.setReserved("amp", "&") : e.h.amp = "&", null != Fn.quot ? e.setReserved("quot", '"') : e.h.quot = '"', null != Fn.apos ? e.setReserved("apos", "'") : e.h.apos = "'", t = e
    }(this), Ps.uid = 0, Ls._DEFAULT_MS = 40, nn.ENTER = 13, nn.SPACE = 8, nn.CONTROL = 17, nn.SHIFT = 16, nn._isInitialized = !1, on.DEBUG_DISABLE_SYMBOL = !1, on.DEBUG_DISABLE_AUTO_RENDER = !0, on.DEBUG_FORCE_AUTO_RENDER = !1, _n.__toStr = {}.toString, dn.BYTES_PER_ELEMENT = 1, gi.main()
}("undefined" != typeof console ? console : {
    log: function() {}
});