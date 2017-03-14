/*! Copyright (c) ZUIKU.COM */
define(function(require, exports, module) {
    $.Util = require("mod/se/util");
    var a = function(a, b, c) {
        try {
            $.Util.execAfterMergerHandler(a, b)
        } catch (d) {
            try {
                $.Util.execAfterMergerHandler(c, ["parsererror"].concat(b[1]))
            } catch (d) {
                throw new Error("the runtime handler parse error. " + d.message)
            }
        }
    };
    module.exports = {
        filterScript: function(a) {
            var b = document.createTextNode(a),
                c = document.createElement("div"),
                d = "";
            return c.appendChild(b), d = c.innerHTML, b = null, c = null, d
        },
        getParameter: function(a, b) {
            var c = b || document.location.search,
                d = new RegExp("[?&]" + a + "=([^&#?]*)", "g"),
                e = d.exec(c),
                f = null;
            return null != e && (f = e[1]), null != f && (f = this.filterScript(f)), d = null, f
        },
        parseURL: function(a) {
            var b = /^([^\:\/\?&\#]+\:)\/\/(([\w\W]+)(\:([\w\W]+)\@))?([^\:\/\?&\#]+)(\:([\d]+))?(\/?[^\?&\#\:]*\/)?([^\/&\#\?\:]+)?(\?[^\?#]+)?(\#[\w\W]*)?$/,
                c = a || document.URL,
                d = b.exec(c) || [],
                e = d[9] || "",
                f = d[10] || "",
                g = {
                    url: d[0] || "",
                    protocol: d[1] || "",
                    user: d[3] || "",
                    password: d[5] || "",
                    host: d[6] || "",
                    port: d[8] || "",
                    search: d[11] || "",
                    hash: d[12] || "",
                    pathname: e + f,
                    filename: f
                };
            return b = null, d = null, g
        },
        append: function(a, b) {
            return a += -1 == a.indexOf("?") ? "?" + b : "&" + b
        },
        serialized: function(a) {
            a = a || "";
            for (var b = a.substring(0, 1), c = -1 == "?&".indexOf(b) ? "?" + a : a, d = c || location.search, e = /[\?&]([^\?&=#]+)=([^&#\?]*)/g, f = null, g = {}, h = null, i = null, j = null; null != (f = e.exec(d));) h = f[1], i = decodeURIComponent(this.filterScript(f[2])), h in g ? g[h] instanceof Array && g[h].constructor == Array ? g[h].push(i) : (j = g[h], g[h] = [j].concat(i)) : g[h] = i;
            return e = null, f = null, g
        },
        stringify: function(a) {
            var b = [],
                c = "",
                d = null;
            for (var e in a)
                if (a.hasOwnProperty(e))
                    if (d = a[e], d instanceof Array && d.constructor == Array)
                        for (var f = 0, g = d.length; g > f; f++) b.push(e + "=" + encodeURIComponent(d[f]));
                    else b.push(e + "=" + encodeURIComponent(a[e]));
            return c = b.join("&"), b = null, a = null, c
        },
        head: function(b) {
            var c = b.url,
                d = (b.crossdomain || !1, b.delay || 0),
                e = b.heads || [],
                f = b.before || null,
                g = b.success || null,
                h = b.error || null,
                i = b.timeout || null,
                j = b.runtime || null,
                k = b.complete || null,
                l = null,
                m = null,
                n = new XMLHttpRequest;
            n.open("HEAD", c, !0), a(f, ["before", n], j);
            for (var o = 0, p = e.length; p > o; o++) l = e[o], n.setRequestHeader(l.name, l.value);
            n.setRequestHeader("No-Cache", "1"), n.setRequestHeader("Pragma", "no-cache"), n.setRequestHeader("Cache-Control", "no-cache, no-store"), n.setRequestHeader("Expires", "0"), n.setRequestHeader("Last-Modified", "Thu, 1 Jan 1970 00:00:00 GMT"), n.setRequestHeader("If-Modified-Since", "-1"), n.onreadystatechange = function() {
                var b = this;
                if (b.HEADERS_RECEIVED == b.readyState) {
                    null != m && (clearTimeout(m), m = null);
                    var c = b.status,
                        d = function(a) {
                            for (var b = a.split("\r\n"), c = b.length, d = null, e = null, f = null, g = 0, h = {}, i = 0; c > i; i++) d = b[i], -1 != (g = d.indexOf(": ")) && (e = d.substring(0, g), f = d.substring(e.length + 2), h[e] = f);
                            return h
                        }(b.getAllResponseHeaders());
                    200 === c ? a(g, [c, d], j) : a(h, [c, d], j), a(k, [c, d], j), b = null, n = null
                }
            }, n.send(), d && d > 0 && (m = setTimeout(function() {
                n && null != m && (n.abort(), m = null, a(i, ["timeout", {}], j), a(k, ["timeout", {}], j))
            }))
        }
    }
});
