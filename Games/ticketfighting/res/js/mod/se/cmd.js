/*! Copyright (c) ZUIKU.COM */
define(function(require, exports, module) {
    function a(a, b, c) {
        a = "" + a, b = b.replace(/\[\d+\]/, ""), c = c || {};
        var d = $.extend({}, c),
            e = c.args || [];
        return d.args = [a, b].concat(e), a in o ? o[a].apply(null, [d]) : k.execHandler(d)
    }

    function b(a, b) {
        var c = l.parseURL(a),
            d = c.host,
            e = c.pathname,
            f = d + e;
        m.Session.set(f, l.stringify(b)), c = null
    }

    function c(a) {
        var b = l.parseURL(a || document.URL),
            c = b.host,
            d = b.pathname,
            e = c + d,
            f = m.Session.get(e),
            g = l.serialized(f);
        return g
    }

    function d(a) {
        $.extend(!0, q, a)
    }

    function e(a) {
        $.extend(!0, o, a)
    }

    function f(a) {
        var b = a.split("."),
            c = b[0],
            d = b[1],
            e = b[2],
            f = !1;
        try {
            var g = q[c][d][e];
            f = g ? !0 : !1
        } catch (h) {
            f = !1
        } finally {
            return f
        }
    }

    function g(a) {
        var b = {};
        return b = $.extend(!0, b, a)
    }

    function h(a, b) {
        var c = null,
            d = a.split("."),
            e = d[0],
            h = d[1],
            i = d[2];
        if (!f(a)) throw new Error("unknown command (" + a + ")!");
        return c = g(q[e][h][i]), c.data = k.formatData(c.data || "", b || null), c
    }

    function i(a, b) {
        a.traditional = b.traditional || !0, a.type = b.type || a.method, a = $.extend(!0, a, b), a.xhrFields = b.xhrFields || {}, !0 === a.cross && (a.xhrFields.withCredentials = !0);
        var c = a.beforeSend,
            d = a.complete,
            e = function(a, b) {
                !1 !== this.showLoading && n.show(this.loadingText || "加载中..."), c && c.apply(this, [a, b]), c = null
            };
        a.beforeSend = e;
        var f = function(a, b) {
            !1 !== this.showLoading && n.hide(), d && d.apply(this, [a, b]), d = null
        };
        a.complete = f, $.ajax(a)
    }

    function j(a, c, d) {
        var e = h(a, c || null);
        if (null == e) throw new Error("unknown command(" + a + ")");
        switch (e.dataType) {
            case p.J:
            case p.P:
            case p.T:
                i(e, d);
                break;
            case p.R:
                b(e.url, l.serialized(e.data)), (void 0 === e.append || "auto" == e.append || !0 === e.append) && l.append(e.url, e.data), !0 === e.spa || (!0 === e.replace ? location.replace(e.url) : location.href = e.url);
                break;
            default:
                throw new Error("unknown response type(" + e.dataType + ")!")
        }
    }
    var k = $.Util = require("mod/se/util"),
        l = $.Request = require("mod/se/request"),
        m = $.Storage = require("mod/se/storage"),
        n = $.Loading = require("mod/ui/loading"),
        o = {},
        p = {
            J: "json",
            P: "jsonp",
            T: "text",
            R: "redirect"
        },
        q = {};
    module.exports = {
        exec: j,
        existCommand: f,
        fireError: a,
        setRequestInfo: b,
        getRequestInfo: c,
        injectCommands: d,
        injectErrorInfo: e,
        ResponseTypes: p
    }
});
