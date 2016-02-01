!function(a, b) {
function c(a) {
return function(b) {
return {}.toString.call(b) == "[object " + a + "]";
};
}
function d() {
return A++;
}
function e(a) {
return a.match(D)[0];
}
function f(a) {
for (a = a.replace(E, "/"); a.match(F); ) a = a.replace(F, "/");
return a = a.replace(G, "$1/");
}
function g(a) {
var b = a.length - 1, c = a.charAt(b);
return "#" === c ? a.substring(0, b) :".js" === a.substring(b - 2) || a.indexOf("?") > 0 || ".css" === a.substring(b - 3) || "/" === c ? a :a + ".js";
}
function h(a) {
var b = v.alias;
return b && x(b[a]) ? b[a] :a;
}
function i(a) {
var b, c = v.paths;
return c && (b = a.match(H)) && x(c[b[1]]) && (a = c[b[1]] + b[2]), a;
}
function j(a) {
var b = v.vars;
return b && a.indexOf("{") > -1 && (a = a.replace(I, function(a, c) {
return x(b[c]) ? b[c] :a;
})), a;
}
function k(a) {
var b = v.map, c = a;
if (b) for (var d = 0, e = b.length; e > d; d++) {
var f = b[d];
if (c = z(f) ? f(a) || a :a.replace(f[0], f[1]), c !== a) break;
}
return c;
}
function l(a, b) {
var c, d = a.charAt(0);
if (J.test(a)) c = a; else if ("." === d) c = f((b ? e(b) :v.cwd) + a); else if ("/" === d) {
var g = v.cwd.match(K);
c = g ? g[0] + a.substring(1) :a;
} else c = v.base + a;
return 0 === c.indexOf("//") && (c = location.protocol + c), c;
}
function m(a, b) {
if (!a) return "";
a = h(a), a = i(a), a = j(a), a = g(a);
var c = l(a, b);
return c = k(c);
}
function n(a) {
return a.hasAttribute ? a.src :a.getAttribute("src", 4);
}
function o(a, b, c) {
var d = U.test(a), e = L.createElement(d ? "link" :"script");
if (c) {
var f = z(c) ? c(a) :c;
f && (e.charset = f);
}
p(e, b, d, a), d ? (e.rel = "stylesheet", e.href = a) :(e.async = !0, e.src = a), 
Q = e, T ? S.insertBefore(e, T) :S.appendChild(e), Q = null;
}
function p(a, b, c, d) {
function e() {
a.onload = a.onerror = a.onreadystatechange = null, c || v.debug || S.removeChild(a), 
a = null, b();
}
var f = "onload" in a;
return !c || !V && f ? void (f ? (a.onload = e, a.onerror = function() {
C("error", {
uri:d,
node:a
}), e();
}) :a.onreadystatechange = function() {
/loaded|complete/.test(a.readyState) && e();
}) :void setTimeout(function() {
q(a, b);
}, 1);
}
function q(a, b) {
var c, d = a.sheet;
if (V) d && (c = !0); else if (d) try {
d.cssRules && (c = !0);
} catch (e) {
"NS_ERROR_DOM_SECURITY_ERR" === e.name && (c = !0);
}
setTimeout(function() {
c ? b() :q(a, b);
}, 20);
}
function r() {
if (Q) return Q;
if (R && "interactive" === R.readyState) return R;
for (var a = S.getElementsByTagName("script"), b = a.length - 1; b >= 0; b--) {
var c = a[b];
if ("interactive" === c.readyState) return R = c;
}
}
function s(a) {
var b = [];
return a.replace(Y, "").replace(X, function(a, c, d) {
d && b.push(d);
}), b;
}
function t(a, b) {
this.uri = a, this.dependencies = b || [], this.exports = null, this.status = 0, 
this._waitings = {}, this._remain = 0;
}
if (!a.seajs) {
var u = a.seajs = {
version:"2.2.0"
}, v = u.data = {}, w = c("Object"), x = c("String"), y = Array.isArray || c("Array"), z = c("Function"), A = 0, B = v.events = {};
u.on = function(a, b) {
var c = B[a] || (B[a] = []);
return c.push(b), u;
}, u.off = function(a, b) {
if (!a && !b) return B = v.events = {}, u;
var c = B[a];
if (c) if (b) for (var d = c.length - 1; d >= 0; d--) c[d] === b && c.splice(d, 1); else delete B[a];
return u;
};
var C = u.emit = function(a, b) {
var c, d = B[a];
if (d) for (d = d.slice(); c = d.shift(); ) c(b);
return u;
}, D = /[^?#]*\//, E = /\/\.\//g, F = /\/[^/]+\/\.\.\//, G = /([^:/])\/\//g, H = /^([^/:]+)(\/.+)$/, I = /{([^{]+)}/g, J = /^\/\/.|:\//, K = /^.*?\/\/.*?\//, L = document, M = e(L.URL), N = L.scripts, O = L.getElementById("seajsnode") || N[N.length - 1], P = e(n(O) || M);
u.resolve = m;
var Q, R, S = L.getElementsByTagName("head")[0] || L.documentElement, T = S.getElementsByTagName("base")[0], U = /\.css(?:\?|$)/i, V = +navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/, "$1") < 536;
u.request = o;
var W, X = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g, Y = /\\\\/g, Z = u.cache = {}, $ = {}, _ = {}, aa = {}, ba = t.STATUS = {
FETCHING:1,
SAVED:2,
LOADING:3,
LOADED:4,
EXECUTING:5,
EXECUTED:6
};
t.prototype.resolve = function() {
for (var a = this, b = a.dependencies, c = [], d = 0, e = b.length; e > d; d++) c[d] = t.resolve(b[d], a.uri);
return c;
}, t.prototype.load = function() {
var a = this;
if (!(a.status >= ba.LOADING)) {
a.status = ba.LOADING;
var b = a.resolve();
C("load", b);
for (var c, d = a._remain = b.length, e = 0; d > e; e++) c = t.get(b[e]), c.status < ba.LOADED ? c._waitings[a.uri] = (c._waitings[a.uri] || 0) + 1 :a._remain--;
if (0 === a._remain) return void a.onload();
var f = {};
for (e = 0; d > e; e++) c = Z[b[e]], c.status < ba.FETCHING ? c.fetch(f) :c.status === ba.SAVED && c.load();
for (var g in f) f.hasOwnProperty(g) && f[g]();
}
}, t.prototype.onload = function() {
var a = this;
a.status = ba.LOADED, a.callback && a.callback();
var b, c, d = a._waitings;
for (b in d) d.hasOwnProperty(b) && (c = Z[b], c._remain -= d[b], 0 === c._remain && c.onload());
delete a._waitings, delete a._remain;
}, t.prototype.fetch = function(a) {
function b() {
u.request(f.requestUri, f.onRequest, f.charset);
}
function c() {
delete $[g], _[g] = !0, W && (t.save(e, W), W = null);
var a, b = aa[g];
for (delete aa[g]; a = b.shift(); ) a.load();
}
var d = this, e = d.uri;
d.status = ba.FETCHING;
var f = {
uri:e
};
C("fetch", f);
var g = f.requestUri || e;
return !g || _[g] ? void d.load() :$[g] ? void aa[g].push(d) :($[g] = !0, aa[g] = [ d ], 
C("request", f = {
uri:e,
requestUri:g,
onRequest:c,
charset:v.charset
}), void (f.requested || (a ? a[f.requestUri] = b :b())));
}, t.prototype.exec = function() {
function a(b) {
return t.get(a.resolve(b)).exec();
}
var c = this;
if (c.status >= ba.EXECUTING) return c.exports;
c.status = ba.EXECUTING;
var e = c.uri;
a.resolve = function(a) {
return t.resolve(a, e);
}, a.async = function(b, c) {
return t.use(b, c, e + "_async_" + d()), a;
};
var f = c.factory, g = z(f) ? f(a, c.exports = {}, c) :f;
return g === b && (g = c.exports), delete c.factory, c.exports = g, c.status = ba.EXECUTED, 
C("exec", c), g;
}, t.resolve = function(a, b) {
var c = {
id:a,
refUri:b
};
return C("resolve", c), c.uri || u.resolve(c.id, b);
}, t.define = function(a, c, d) {
var e = arguments.length;
1 === e ? (d = a, a = b) :2 === e && (d = c, y(a) ? (c = a, a = b) :c = b), !y(c) && z(d) && (c = s(d.toString()));
var f = {
id:a,
uri:t.resolve(a),
deps:c,
factory:d
};
if (!f.uri && L.attachEvent) {
var g = r();
g && (f.uri = g.src);
}
C("define", f), f.uri ? t.save(f.uri, f) :W = f;
}, t.save = function(a, b) {
var c = t.get(a);
c.status < ba.SAVED && (c.id = b.id || a, c.dependencies = b.deps || [], c.factory = b.factory, 
c.status = ba.SAVED);
}, t.get = function(a, b) {
return Z[a] || (Z[a] = new t(a, b));
}, t.use = function(b, c, d) {
var e = t.get(d, y(b) ? b :[ b ]);
e.callback = function() {
for (var b = [], d = e.resolve(), f = 0, g = d.length; g > f; f++) b[f] = Z[d[f]].exec();
c && c.apply(a, b), delete e.callback;
}, e.load();
}, t.preload = function(a) {
var b = v.preload, c = b.length;
c ? t.use(b, function() {
b.splice(0, c), t.preload(a);
}, v.cwd + "_preload_" + d()) :a();
}, u.use = function(a, b) {
return t.preload(function() {
t.use(a, b, v.cwd + "_use_" + d());
}), u;
}, t.define.cmd = {}, a.define = t.define, u.Module = t, v.fetchedList = _, v.cid = d, 
u.require = function(a) {
var b = t.get(t.resolve(a));
return b.status < ba.EXECUTING && b.exec(), b.exports;
};
var ca = /^(.+?\/)(\?\?)?(seajs\/)+/;
v.base = (P.match(ca) || [ "", P ])[1], v.dir = P, v.cwd = M, v.charset = "utf-8", 
v.preload = function() {
var a = [], b = location.search.replace(/(seajs-\w+)(&|$)/g, "$1=1$2");
return b += " " + L.cookie, b.replace(/(seajs-\w+)=1/g, function(b, c) {
a.push(c);
}), a;
}(), u.config = function(a) {
for (var b in a) {
var c = a[b], d = v[b];
if (d && w(d)) for (var e in c) d[e] = c[e]; else y(d) ? c = d.concat(c) :"base" === b && ("/" !== c.slice(-1) && (c += "/"), 
c = l(c)), v[b] = c;
}
return C("config", a), u;
};
}
}(this), define("scripts/cardListData", [ "./vendor/zepto", "./vendor/promise", "./environment" ], function(a, b) {
var c = a("./vendor/zepto"), d = a("./vendor/promise"), e = a("./environment");
b.fetch = function(a) {
a = a || "jsonp.json";
var b = new d(function(b, d) {
c.ajax({
url:e.getHost() + "/weixin/card/" + a,
dataType:"json",
success:function(a) {
b("string" == typeof a ? JSON.parse(a) :a);
},
error:function() {
d();
}
});
});
return b;
};
}), define("scripts/cardLoader", [ "./utils", "./environment", "./vendor/zepto", "./message", "./tpl/loading", "./tpl/template", "./tpl/dialog", "./vendor/promise", "./tpl/mugedaLoad", "./tpl/loader", "./page", "./navibar", "./tpl/navibar", "./custom", "./tpl/customForm", "./promo", "./tpl/promoHtml", "./weixinJs", "wxjs", "./vendor/sha1" ], function(a, b) {
var c = a("./utils"), d = a("./vendor/promise"), e = a("./tpl/mugedaLoad"), f = a("./tpl/loader"), g = a("./page"), h = a("./navibar"), i = a("./environment"), j = a("./custom"), k = (a("./message"), 
{});
b.loadCard = function(a) {
return new d(function(b, d) {
return a ? b(Mu.param) :(n(), void s(k).then(r).then(t).then(p).then(o).then(l).then(D).then(function(a) {
a.cssMode && c.setMode("css"), b(a);
}, function(a) {
d(a);
}));
});
};
var l = function(a) {
return new d(function(b, e) {
d.all([ c.isSlideCard() ? m(a) :u(a), v() ]).then(function(a) {
b(a);
}, function(a) {
e(a);
});
});
}, m = function(a) {
return new d(function(b) {
ga("send", "pageview");
var e = a.customObj;
j.hookMugedaCard(e), window._mrmcp = {
creative_path:base + "cards/" + c.getCrid() + "/",
render_mode:"inline",
ga_url:base + "ga.js"
}, d.all([ c.load("js", "mugeda_client_utils/mugeda_css3_player.js"), c.load("js", "mugeda_client_utils/mugeda_utils.js"), c.load("js", "mugeda_client_utils/mugeda_page.js") ]).then(function() {
window._mrmma_var1 = null, window._mrmma_var2 = null;
var d = $(f({
slide:!0
}));
if ($(document.body).append(d), "" == c.getCrid()) {
var e = JSON.parse(localStorage.getItem("mugedaSlidePreviewData"));
setTimeout(function() {
g();
});
} else $.ajax({
type:"GET",
url:i.getHost() + decodeURIComponent(c.getCrid()),
xhrFields:{
withCredentials:!0
},
success:function(a) {
e = a, g();
},
error:function() {
alert("获取数据失败");
}
});
var g = function() {
j.defineWechatParameters({
title:e.weixinTitle,
desc:e.weixinDesc,
img_url:e.weixinThumb
});
var f = function() {
var a = function(a) {
this.opts = a;
};
a.prototype.load = function(a, c) {
var d = this;
b.bind(this)(function(b) {
if (b) throw b;
this.mugeda = Mugeda.startAnimation("id_" + this.opts.crid, this.opts.script, this.opts.div, "slides/" + this.opts.dir, this.opts.name, function() {
c.call(d);
}.bind(d)), a.call(d);
}.bind(this));
};
var b = function(a) {
window.Mugeda = window.Mugeda || {}, Mugeda.data = Mugeda.data || {};
var b = this.opts.crid;
return Mugeda.data["id_" + b] ? a(null, Mugeda.data["id_" + b]) :void c.load("js", "slides/" + this.opts.dir + this.opts.data).then(function() {
return Mugeda.data["id_" + b] ? (Mugeda.data["id_" + b].metadata && delete Mugeda.data["id_" + b].metadata.adaptMode, 
a(null, Mugeda.data["id_" + b])) :a(new Error(1));
}, function() {
return a(new Error(2));
});
};
return a;
}(), g = d.find("#stage_cut"), h = 0, i = {}, k = {
getCacheStatus:function(a) {
return null != i[a];
}
};
e.pages.forEach(function(c, d) {
var j = $('<div id="stage' + d + '" class="slide_stage"></div>').appendTo(g);
c.div = j[0];
var l = new f(c);
l.load(function() {
this.opts.name == e.pages[0].name && this.mugeda.addEventListener("loadProcess", function(b, c) {
"image" == this.loadProcess && B(a, parseInt(b / c * 100));
});
}, function() {
i[this.opts.name] = !0, this.mugeda.scene.freeze({
mode:"beginning"
}), h++, this.opts.name == k.waitCacheId && k.waitCallback(), this.opts.name == e.pages[0].name && (a.mugedaPage = new MugedaPage({
pages:e.pages,
div:k,
pageHolder:document.getElementById("stage_parent"),
music:decodeURIComponent(MugedaUrl.current.getQueryObj().music)
}), b(a));
var d = c.custom, f = this.mugeda;
d.forEach(function(a) {
for (var b = a.k, c = a.v, d = b.split("/"), e = f.scene, g = 0; g < d.length; g++) e = e.getObjectByName(d[g]), 
g < d.length - 1 && (e = e.scene);
if (2010 == e.data.type) e.text = c; else if (2005 == e.data.type) {
var h = document.location.host, i = c.split("/");
if (i.length > 2) {
var j = i[2], k = [ "cdn-cn.mugeda.com", "mucard.mugeda.com", "card.mugeda.com" ];
if (k.indexOf(j) >= 0 && k.indexOf(h) >= 0) {
var l = new RegExp(i[2]);
c = c.replace(l, h);
}
}
e.src = c;
}
});
});
});
};
});
});
}, n = function() {
window.cardFrame = window.cardFrame || {}, cardFrame.setFootContent = function(a, b) {
window.cardFrame.footContent = {
content:a,
link:b
};
}, cardFrame.footContent = null, cardFrame.disableFoot = !1, cardFrame.setOfficialCustom = function(a) {
window.cardFrame.canOfficialCustom = a;
}, cardFrame.canOfficialCustom = !1, cardFrame.setAsReceipt = function() {
window.cardFrame.isReceiptCard = !0;
}, cardFrame.isReceiptCard = !1, cardFrame.Custom = j, cardFrame.Navibar = h, cardFrame.Page = g, 
cardFrame.Utils = c, cardFrame.showFooter = function(a) {
var b = $('<style>.footer{display:inline-block;height:26px;border-radius:6px;bottom:0;color:#fff;background:rgba(0,0,0,0.3);padding:0 20px;text-align:center;font:normal 12px/26px "Microsoft Yahei";}</style><div style="text-align:center;position:absolute;bottom:5%;width:100%;"><div class="footer">由卡司令提供技术支持</div><div>');
b.appendTo(a);
};
}, o = function(a) {
return new d(function(b) {
var d = $(a.loadTpl);
g.remove(0);
var e = g.setNewPage("loading", {
type:"fix"
});
e.dom.append(d), a.searchObj && /[0-9a-f]{32}/i.test(a.searchObj.m_bizId) && window.cardFrame && cardFrame.showFooter instanceof Function && cardFrame.showFooter(e.dom), 
g.addToLayout(e.id), g.setActive(e.id, !0), a.loadTpl = d, a.loadingPage = e, c.isCustomLoad() && e.dom.find("#mcard-load").css("visibility", "hidden");
var f = d.find(".cacheImage"), i = f.length;
if (i ? (d.hide(), f.each(function() {
this.onload = this.onerror = function() {
0 == --i && (d.show(), b(a));
};
})) :b(a), c.isSlideCard() && "" == c.getCrid()) {
var j = h.getNaviBar("预览", {
hideUserIcon:!0,
rightTpl:$('<span class="btn btnSubmit disabled">发布</span>'),
leftTpl:$('<span class="btn btnCancel">返回</span>'),
notFixed:!0
});
j.navibarTpl.css("position", "absolute"), j.navibarTpl.css("opacity", "0.8"), $(document.body).children().first().before(j.navibarTpl), 
j.navibarTpl.on("click", ".btnSubmit", function() {
var a = "http://weika.mugeda.com/server/cards.php/open?m_path=" + encodeURIComponent(location.href.replace("index.html", "publish_slide.html"));
location.href = a;
}), j.navibarTpl.on("click", ".btnCancel", function() {
var a = localStorage.getItem("previewRefUrl");
a ? window.location.href = decodeURIComponent(a) :history.back();
});
}
var f = d.find(".cacheImage"), i = f.length;
i ? (d.hide(), f.each(function() {
this.onload = this.onerror = function() {
0 == --i && (d.show(), b(a));
};
})) :b(a);
});
}, p = function(a) {
return new d(function(b) {
var c = a.customObj;
if (cardFrame.getCustomObj = function() {
return a.customObj;
}, cardFrame.getQueryObj = function() {
return a.searchObj;
}, a.searchObj.m_profile) var f = {
type:2,
imgUrl:decodeURIComponent(a.searchObj.m_profile),
background:"#FFF",
pieColor:"#FF5500",
text:c.m_slogan,
textColor:"#FFF"
};
var g = (a.bizData || {})._loading || f || {};
$(document).trigger("cardLoader:showLoading", g), q(g).then(function(c) {
a.loadTpl = c, a.loadParam = g, $(document.body).css("background", "black"), d.all([ function() {
return new d(function(a) {
if (g.url) {
var b = new Image();
b.src = g.url, b.onload = b.onerror = function() {
a();
};
} else a();
});
}, function() {
return new d(function(a) {
if (g.curtain) {
var b = new Image();
b.src = g.curtain, b.onload = b.onerror = function() {
a();
};
} else a();
});
} ]).then(function() {
b(a);
});
}, function() {
var c = [];
c.indexOf(MugedaUrl.current.getQueryObj().crid) > -1 ? (g = {
background:"-webkit-radial-gradient(50% 33%, #f00, #800);",
type:"0",
barColor:"rgb(252, 220, 189)",
containerColor:"transparent",
url:"images/logo_lighter.png",
width:140
}, a.loadParam = g, a.loadTpl = e(g)) :a.loadTpl = e({
type:0,
url:"images/5347ba39a3664e9b74000049.png",
width:134,
background:"black"
}), $(document.body).css("background", "black"), b(a);
});
});
}, q = function(a) {
return new d(function(b, c) {
var d = 1 * a.type;
switch (a.background = a.background || "#000", d) {
case 0:
a.curtain && (a.background = "url(" + a.curtain + ")"), a.width = a.width || 280, 
b(e(a));
break;

case 1:
case 2:
b(e(a));
break;

default:
c();
}
});
}, r = function(a) {
return new d(function(b) {
var d = a.searchObj.m_bizId;
return null == d ? b(a) :void $.ajax({
url:i.getHost() + "/custom/" + c.getCrid() + "/" + d + ".json",
dataType:"jsonp",
jsonpCallback:"Mucard_callback",
success:function(c) {
cardFrame.bizData = a.bizData = c, b(a), a.bizId = d;
},
error:function() {
b(a);
}
});
});
}, s = b.getCustomObj = function(a) {
return new d(function(b) {
var d = MugedaUrl.current.getQueryObj(), e = {}, f = d.custom;
if (f) {
var g = c.base64.decode(decodeURIComponent(f));
e = new MugedaUrl("http://a?" + g).getQueryObj();
}
a.customObj = e, a.searchObj = d, d.customId ? w(d.customId).then(function(c) {
a.customId = d.customId, a.customIdObj = c, b(a);
}, function() {
b(a);
}) :b(a);
});
}, t = b.resolveFoot = function(a) {
return new d(function(b) {
var c = a.customObj, d = a.customId, e = a.customIdObj, f = a.bizData;
if (d) for (var g in e) e.hasOwnProperty(g) && (e[g] = decodeURIComponent(e[g]));
if (2 == c._v) {
for (g in c) c.hasOwnProperty(g) && (c[decodeURIComponent(g)] = decodeURIComponent(c[g]), 
decodeURIComponent(g) != g && delete c[g]);
delete c._v;
} else c._footcontent && (c._footcontent = decodeURIComponent(c._footcontent)), 
c._footurl && (c._footurl = decodeURIComponent(c._footurl));
for (var g in e) e.hasOwnProperty(g) && !c.hasOwnProperty(g) && (c[g] = e[g]);
if (delete a.customIdObj, f) {
for (var g in f) if (f.hasOwnProperty(g)) if ("string" == typeof f[g]) f[g] = decodeURIComponent(f[g]); else for (var h in f[g]) f[g].hasOwnProperty(h) && (f[g][h] = decodeURIComponent(f[g][h]));
f._footcontent && (c._footcontent = f._footcontent), f._footurl && (c._footurl = f._footurl);
}
c._footcontent || (c._footcontent = "关注 {{卡司令}} 更多酷炫内容"), c._footurl || (c._footurl = "http://t.cn/RP7kPN1"), 
cardFrame.setFootContent(c._footcontent, c._footurl), b(a);
});
}, u = function(a) {
return new d(function(b, d) {
var e = a.customObj;
window._mrmcp = {
creative_path:base + "cards/" + c.getCrid() + "/",
render_mode:"inline",
ga_url:base + "ga.js"
}, j.hookMugedaCard(e);
var g = base + "cards/" + c.getCrid() + "/loader.js?v=127", h = $(f({}));
$(document.body).append(h), h.find(".foot-mark").bind("click", function() {
ga("send", {
hitType:"event",
eventCategory:MugedaUrl.current.getQueryObj().crid,
eventAction:"点击微卡关注标签",
eventLabel:'在微卡上点击底部的 "关注卡司令更多炫酷内容" 标签'
}), window.open(cardFrame.footContent.link, "_blank");
}), cardFrame.showFootContent = function() {
if (cardFrame.footContent.content && !cardFrame.disableFoot) {
var a = h.find(".foot-mark").html(cardFrame.footContent.content.replace(/\{\{/g, "<span>").replace(/\}\}/g, "</span>"));
a.insertAfter(a.parent().children().last()), setTimeout(function() {
a.css("bottom", "0");
}, 0);
}
};
var i = document.createElement("script");
i.src = g, i.id = "Mugeda_" + c.getCrid(), i.onload = function() {
document.title = _mrmcp.title;
}, i.onerror = function() {
d();
};
var k = function() {
"complete" != document.readyState ? $(document).one("readystatechange", k) :h.append(i);
};
k(), a.stageParent = h, x(a, b, d), $(document).one("mugedaReady", function() {
var a = Mugeda.currentAni;
a.addEventListener("beforeLoadImage", function(a, b, c) {
var d = !0, f = b.dom.map(function(a) {
return a.object && a.object.getPath ? a.object.getPath() :"@";
}).filter(function(a) {
return 0 != a.indexOf("<-") && 0 != a.indexOf("@") ? !0 :void 0;
});
f.length ? f.forEach(function(a) {
e.hasOwnProperty(a) || (d = !1);
}) :d = !1, c.noCache = d;
}), a.addEventListener("scriptReady", function() {
for (var b in e) if (e.hasOwnProperty(b)) {
var c = e[b];
try {
c = JSON.parse(c).u;
} catch (d) {}
null == c && (c = e[b]), c.length - 4 > -1 && (c.lastIndexOf(".png") == c.length - 4 || c.lastIndexOf(".jpg") == c.length - 4) && a.loadImage("dom_back", {
url:c,
dom:[]
});
}
});
});
});
}, v = function() {
return new d(function(a) {
setTimeout(function() {
a();
}, 3e3);
});
}, w = function(a) {
return new d(function(b) {
$.ajax({
url:i.getHost() + "/custom/" + c.getCrid() + "/" + a + ".json",
dataType:"jsonp",
jsonpCallback:"Mucard_callback",
success:function(a) {
b(a);
},
error:function() {
b({});
}
});
});
}, x = function(a, b) {
var c = a.stageParent, d = function(b) {
var g = $("[id$='_stage']"), h = $(b.target);
if (h.hasClass("MugedaStage") || 0 != g.length) {
if (c.unbind("DOMSubtreeModified", d), a.cssMode = g.length > 0, a.cssMode) g.addClass("MugedaStage"); else {
g = h;
var i = $("meta[name=viewport]");
i.attr("content", "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0"), 
Mugeda.updateViewport = function() {};
var j = function(a) {
var b = $(a.target);
"IMG" == b.prop("tagName") && (b.attr("src") || []).indexOf("close_button.png") > -1 && b.bind("load", function() {
g.unbind("DOMNodeInserted", j), H();
});
};
g.bind("DOMNodeInserted", j);
}
a.stage = g, a.cssMode ? (a.loadDiv = $("#mugeda_loading_progress"), f()) :a.stage.bind("DOMSubtreeModified", e);
}
}, e = function(b) {
var c = $(b.target);
"loadingDiv" == c.prop("id") && (a.stage.unbind("DOMSubtreeModified", e), a.loadDiv = c, 
f());
}, f = function() {
var c = a.loadingPage.dom, d = null, e = 0, f = (c.find(".message"), c.find(".process")), g = c.find(".process-frame"), h = a.loadDiv;
a.loadParam && (a.loadParam.background && c.css("background", a.loadParam.background), 
a.loadParam.containerColor && g.css("background-color", a.loadParam.containerColor), 
a.loadParam.barColor && f.css("background-color", a.loadParam.barColor)), g.css("visibility", "visible"), 
h.bind("DOMNodeRemoved", function() {
j();
}), h.bind("DOMSubtreeModified", function() {
var b = this.innerHTML, c = b.match(/Loading\.\.\.(\d+)\/(\d+)/);
if (c && 3 == c.length) {
var f = parseInt(c[1]), g = parseInt(c[2]);
if (isNaN(f) || isNaN(g)) return;
g != d && (e++, d = g);
var h = 0;
a.cssMode ? h = Math.round(100 * (1 + f) / g) :1 == e ? h = Math.round(f / g * 25) :2 == e && (h = 25 + Math.round(f / g * 75)), 
B(a, h);
}
});
var i = !1, j = function() {
i || (i = !0, a.stage.unbind("DOMSubtreeModified"), b(a));
};
};
c.bind("DOMSubtreeModified", d);
}, y = 0, z = 0, A = 0, B = function(a, b) {
y != z && (y = z), z = b, A = (b - y) / 12, C(a, y);
var c = function(a) {
z > y && (y = Math.min(y + A, z), C(a, y), setTimeout(function() {
c(a);
}, 50));
};
c(a);
}, C = function(a, b) {
var c = a.loadingPage.dom, d = c.find(".message"), e = c.find(".process");
if (b = Math.min(100, b), a.searchObj.m_profile) {
var f = a.loadTpl.find(".leftPie"), g = a.loadTpl.find(".rightPie"), h = a.loadTpl.find(".icon"), i = 1e-4, j = Math.min(100, b), k = 360 * j / 100, l = Math.max(180, k), m = Math.min(360, k + 180);
f[0].style.webkitTransform = "rotate(" + l + "deg)", f[0].style.mozTransform = "rotate(" + l + "deg)", 
f[0].style.msTransform = "rotate(" + l + "deg)", f[0].style.transform = "rotate(" + l + "deg)", 
g[0].style.webkitTransform = "rotate(" + m + "deg)", g[0].style.mozTransform = "rotate(" + m + "deg)", 
g[0].style.msTransform = "rotate(" + m + "deg)", g[0].style.transform = "rotate(" + m + "deg)", 
h[0].style.webkitTransform = "rotate(" + i + "deg)", h[0].style.mozTransform = "rotate(" + i + "deg)", 
h[0].style.msTransform = "rotate(" + i + "deg)", h[0].style.transform = "rotate(" + i + "deg)", 
i += .001, l > 180 && (g[0].style.webkitTransition = "none", g[0].style.mozTransition = "none", 
g[0].style.msTransition = "none", g[0].style.transition = "none");
} else b = ~~b, d.html(b + "%"), e.css("width", b + "%"), e.parent().css("visibility", "visible");
}, D = function(a) {
return new d(function(b) {
j.saveCardParam(a[0]), a = a[0], a.bizData && a.bizData.shareInfo && j.setUserWeixinParam(a.bizData.shareInfo), 
H(), $("#stageParent").show(), g.remove(a.loadingPage.id), g.setActive(1);
var c = $(".MugedaStage .symbol");
c.each(function() {
$(this).html().indexOf("酷炫贺卡") > -1 && $(this).remove();
}), a.cssMode || F(), b(a);
});
}, E = function() {
function a() {
var a = document, b = a.createElement("div");
b.style.height = "2500px", a.body.insertBefore(b, a.body.firstChild);
var c = a.documentElement.clientHeight > 2400;
return a.body.removeChild(b), c;
}
var b = document.documentElement, c = b && 0 === b.clientHeight, d = window.top === window;
if ("number" == typeof document.clientWidth) return {
width:document.clientWidth,
height:document.clientHeight
};
if (d && (c || a())) {
var e = document.body;
return {
width:e.clientWidth,
height:e.clientHeight
};
}
return {
width:b.clientWidth,
height:b.clientHeight
};
}, F = function() {
window.MugedaCss3 = window.MugedaCss3 || {};
var a = window.MugedaCss3.getEventPosition;
window.MugedaCss3.getEventPosition = function(b, c) {
var d = a.call(window.MugedaCss3, b, c);
return d.x = d.x / G, d.y = d.y / G, d;
};
}, G = null, H = (document.getElementById("card-title"), function() {
if (window._mrmcp) {
var a = c.windowSize = E(), b = a.width, d = a.height, e = _mrmcp.width, f = _mrmcp.height, g = b / e, h = d / f;
G = $.os.phone ? g :Math.min(g, h), .1 > G && (G = .1);
var i = Math.floor((b - e * G) / 2), j = Math.floor((d - f * G) / 2);
if (f = parseInt(G * f), e = parseInt(G * e), 0 > j && (f += j), k.stage) var l = k.stage[0]; else {
if (!c.isSlideCard()) return;
l = $("#stage_cut")[0];
}
l.style.cssText += "-webkit-transform: scale(" + G + ");transform: scale(" + G + ");-moz-transform: scale(" + G + ");-ms-transform: scale(" + G + ");", 
l.parentNode.style.cssText += "height: " + f + "px;width: " + e + "px;margin-left: " + i + "px;margin-top: " + j + "px;", 
Array.prototype.forEach.call(document.querySelectorAll("[data-audio-icon]"), function(a) {
a.style.top = (1 > -j / G ? 0 :-j / G) + 10 + "px";
});
var m = function(a) {
a.adaption = a.adaption || {}, a.adaption.scale = G, a.adaption.marginTop = a.adaption.marginBottom = j / G, 
a.adaption.marginLeft = a.adaption.marginRight = i / G, a.event && a.event.resize && a.event.resize instanceof Array && a.event.resize.forEach(function(a) {
a.call(Mugeda.scene);
});
};
if (window.MugedaCss3 && MugedaCss3.stage) for (var n in MugedaCss3.stage) MugedaCss3.stage.hasOwnProperty(n) && m(MugedaCss3.stage[n]); else Mugeda && Mugeda.scene && m(Mugeda.scene);
k.mugedaPage && k.mugedaPage.options.scene && m(k.mugedaPage.options.scene.thisAni);
}
});
window.addEventListener("resize", H);
}), define("scripts/cardTipview", [ "./vendor/zepto", "./page", "./tpl/cardTip", "./tpl/template" ], function(a) {
var b = a("./vendor/zepto"), c = a("./page"), d = a("./tpl/cardTip");
window.createMugedaTip = function() {
var a = b(d()), e = c.setNewPage("cardTip", {
background:"rgba(0,0,0,0.7)",
type:"fix"
}), f = "touchstart";
(!window.isMobile || window.isMobile && !window.isMobile()) && (f = "click");
var g = function() {
c.remove(e.id), c.back(), b(document.body).unbind("weixin:shareOK", g);
};
e.dom.append(a), a.one(f, g), b(document.body).bind("weixin:shareOK", g), c.addToLayout(e.id), 
setTimeout(function() {
c.setActive(e.id, !0);
}, 1);
};
}), define("scripts/cardview", [ "./vendor/zepto", "./vendor/promise", "./message", "./tpl/loading", "./tpl/template", "./tpl/dialog", "./navibar", "./tpl/navibar", "./environment", "./gallery", "./page", "./cardTipview", "./tpl/cardTip", "./musicPicker", "./tpl/musicPicker", "./tpl/replyInvite", "./tpl/cardviewBottom", "./tpl/audioIco", "./tpl/customImageMessage", "./custom", "./tpl/customForm", "./utils", "./promo", "./tpl/promoHtml", "./weixinJs", "wxjs", "./vendor/sha1", "./cardLoader", "./tpl/mugedaLoad", "./tpl/loader", "./like", "./customSound", "./user", "./photoservice", "./tpl/audioPlay", "./tpl/caipiao", "./tpl/backgroundMusic", "./tpl/recordAudio", "./tpl/profileCustom" ], function(a, b) {
function c(a) {
if (!a) return !1;
for (;a; ) {
if (a instanceof HTMLElement && ("none" === a.style.display || "hidden" === a.style.visibility || "0" === a.style.opacity)) return !1;
a = a.parentNode;
}
return !0;
}
function d(a) {
var b = a.getBoundingClientRect(), c = document.querySelector("#stageParent").getBoundingClientRect();
return !(b.left > c.right || b.right < c.left || b.top > c.bottom || b.bottom < c.top);
}
function e(a, b) {
if (b instanceof Function) {
var f, g;
if (Mugeda.getMugedaObject) {
var i = Mugeda.getMugedaObject(), j = i && i.getScene();
f = j.getObjectByName(a), g = f && f.dom;
} else f = h(".mugeda_custom.greetings"), g = f && f[0];
c(g) && d(g) ? b(f) :setTimeout(e, 500, a, b);
}
}
function f(b) {
if (b instanceof Function) if (cardFrame.partner) b(cardFrame.partner); else {
var c = MugedaUrl.current.getQueryObj().m_partner;
c && a.async("partners/" + c + "/" + c + ".js", function(a) {
b(cardFrame.partner = a);
});
}
}
function g(b) {
if (b instanceof Function) if (cardFrame.promo) b(cardFrame.promo); else {
var c = new Promise(function(a) {
h.ajax({
url:"promo.json",
type:"get",
dataType:"json",
success:function(b) {
a(b);
}
});
});
c.then(function(c) {
var d = x && c && c[x];
d && a.async("promotion/" + d + "/" + d, function(a) {
b(cardFrame.promo = a);
});
});
}
}
var h = a("./vendor/zepto"), i = (a("./vendor/promise"), a("./message")), j = a("./navibar"), k = a("./gallery"), l = a("./page"), m = a("./environment"), n = (a("./cardTipview"), 
a("./musicPicker")), o = a("./tpl/replyInvite"), p = a("./tpl/cardviewBottom"), q = a("./tpl/audioIco"), r = a("./tpl/customImageMessage"), s = a("./custom"), t = a("./utils"), u = a("./cardLoader"), v = a("./like"), w = null, x = MugedaUrl.current.getQueryObj().crid, y = function() {
var a = MugedaUrl.current.getQueryObj().m_promo;
return a && new MugedaUrl("http://a?" + t.base64.decode(decodeURIComponent(a))).getQueryObj() || {};
}(), z = !!y.promoResult && h.cookie.get("token") === y.activityToken, A = a("./weixinJs"), B = a("./customSound");
window.likeable = [ "559e4895a3664e0e51000955" ], /BRA?\//.test(navigator.userAgent) && (window.oibridge || (window.oibridge = {
setmenu:function() {
var a = [ {
label:"分享",
javascript:"onshare()",
icon:"share"
} ], b = encodeURIComponent(JSON.stringify(a));
window.oiwvjsbridge && window.oiwvjsbridge.setMenu(b);
},
onshare:function() {
cardFrame.getSendInfo(function(a) {
var b = likeable && likeable.some(function(a) {
return a === x;
}) ? "http://weika.mugeda.com/server/card/token?type=base&redirect=" + encodeURIComponent(a.url) :a.url;
window.oiwvjsbridge.doShare(encodeURIComponent(JSON.stringify({
title:a.title,
text:a.desc,
url:b,
thumb_url:a.img_url,
type:"weixin|qq|weibo"
})));
});
},
init:function() {}
}), oibridge.setmenu()), window.showMugedaAlert = function(a) {
a.showConfirm(a || "未知消息");
}, b.init = function(b) {
w = b, u.loadCard(m.isMu()).then(function(b) {
C(b), y.promoResult && g(function(b) {
e("greetings", function() {
var c = z ? function() {
b.showSendInfo instanceof Function && b.showSendInfo();
} :function() {
b.getPromoResult({
urlObject:y,
envir:m,
utils:t,
require:a
}), ga("send", {
hitType:"event",
eventCategory:x,
eventAction:"展示领取界面",
eventLabel:"显示推广活动的兑换券领取界面"
});
};
setTimeout(c, 1e3), h(document).on("custom:forwardingURL", function(a) {
var b = a._args, c = new MugedaUrl("http://weika.mugeda.com/server/card/token");
c.getQueryObj().type = "base", c.getQueryObj().redirect = encodeURIComponent(b.url), 
b.url = c.getURL();
});
});
}), f(function(b) {
e("greetings", function() {
var c = function() {
b.getPromoResult({
urlObject:MugedaUrl.current.getQueryObj(),
envir:m,
utils:t,
require:a
});
};
setTimeout(c, 1e3);
});
});
var c = document.getElementById("custom");
if (!b.cssMode && !t.isSlideCard()) {
var d = function() {
this.length - 1 === Math.floor(this.currentId) && (i.scene.removeEventListener("enterframe", d), 
cardFrame.showFootContent(), c && (c.classList.remove("fade"), c.classList.add("solid")));
}, i = Mugeda.getMugedaObject();
i.scene.addEventListener("enterframe", d);
}
});
};
var C = function(a) {
F(a), h(document).trigger("pc:cardFrameReady", cardFrame);
};
b.defineCustomImageData = function(a) {
D = a;
};
var D = [], E = function() {
if (window.Mugeda && Mugeda.getMugedaObject) {
var a = Mugeda.getMugedaObject(), b = {};
if ("loaded" == a.loadProcess) {
if (window.MugedaCard && MugedaCard.data) for (var c in MugedaCard.data) MugedaCard.data.hasOwnProperty(c) && MugedaCard.data[c] && MugedaCard.data[c].obj && MugedaCard.data[c].obj.length && MugedaCard.data[c].obj[0].data && 2005 == MugedaCard.data[c].obj[0].data.type && "signature" != MugedaCard.data[c].obj[0].cardRefParam && (b[c] = MugedaCard.data[c].obj[0].src);
cardFrame.getCustomImageList = function() {
return b;
}, h(document).trigger("pc:customImageListChange");
} else setTimeout(E, 500);
}
}, F = function(b) {
t.reportGATime(), E(), b.cssMode && (t.setMode("css"), window.MugedaCard = window.MugedaCard || {}, 
window.MugedaCard.finalizeCustomParameters = s.finalizeCustomParametersV2);
var c = b.customObj, d = b.bizData;
s.activeCustom(c);
var f = s.bindWeiParamater(c);
s.defineWeixinBridge(f), s.exportCustomFunction(c);
var o = Mugeda.scene ? Mugeda.scene.scene :null;
if (b.cssMode) var u = h(".定制"); else {
var C = o ? o.getObjectByName("定制") :null, F = o ? o.getObjectByName("发送") :null;
C && (C.visible = !1), F && (F.visible = !1);
}
if (m.isPublic() && (cardFrame.disableFoot = !0), C || b.cssMode && u.length) {
cardFrame.disableFoot = !0, cardFrame.isThreeCircleBtnHidden = function() {
return !1;
};
var G = h(p({
isCustomed:t.getParam("m_bizId")
}));
if (d && null != d.recustom) {
var H = 1 * d.recustom;
0 == H && (G.find(".btn_show_tip").parent().hide(), G.find(".btn_custom").parent().hide());
}
var I = {
tpl:G
};
h(document).trigger("cardview:cardViewBottomTpl", I), G = I.tpl, w.append(G);
var J, K, L, M, N = G.filter("#cardview_button").addClass("hide"), O = G.filter("#cardview_bottom").addClass("hide"), P = G.find(".btn_custom"), Q = G.find(".btn_more"), R = 0, S = function() {
W && W.classList.add("hide"), X && X.classList.add("show"), V && (V.style.display = ""), 
Y.forEach(function(a) {
a.classList.remove("highlight");
});
}, T = function() {
Y.forEach(function(a) {
a.classList.remove("highlight");
}), W && W.classList.remove("hide"), X && X.classList.remove("show"), V && (V.style.display = "none");
}, U = function() {
Y.forEach(function(a) {
a.classList.remove("highlight");
}), this.classList.add("highlight");
}, V = document.getElementById("mask"), W = document.getElementById("custom"), X = document.getElementById("toolbar"), Y = [ J = document.getElementById("btnCustom"), K = document.getElementById("btnSend"), L = document.getElementById("btnCollect"), M = document.getElementById("btnAttend") ];
if (cardFrame.bizData) {
var Z = 4, $ = cardFrame.bizData._hide_customButton || [ "collect" ];
$.indexOf("custom") > -1 && (h(J).parent().remove(), Z--), $.indexOf("send") > -1 && (h(K).parent().remove(), 
Z--), $.indexOf("collect") > -1 && (h(L).parent().remove(), Z--), $.indexOf("follow") > -1 && (h(M).parent().remove(), 
Z--);
var _ = 100 / Z + "%";
h(".buttonWrapper").width(_), cardFrame.bizData._follow && cardFrame.bizData._follow.url && cardFrame.setFootContent(null, cardFrame.bizData._follow.url);
}
W && (W.style.display = "block", setTimeout(function() {
W && (clearTimeout(aa), W.classList.remove("fade"), W.classList.add("solid"));
}, 2e4), e("greetings", function() {
S();
}));
var aa;
V && V.addEventListener("click", function() {
W.classList.remove("fade"), T(), W.classList.contains("solid") || (aa && (aa = clearTimeout(aa)), 
aa = setTimeout(function() {
W.classList.add("fade");
}, 3e3));
}, !1), W && W.addEventListener("click", function() {
ga("send", {
hitType:"event",
eventCategory:x,
eventAction:"点击定制球",
eventLabel:"点击定制球按钮以显示定制栏。"
}), S(), W.classList.contains("solid") || (aa = clearTimeout(aa));
}, !1), aa = setTimeout(function() {
W.classList.add("fade");
}, 3e3), J && "Mucard_public" !== top._CUSTOM_TAG && (J.addEventListener("click", function() {
ga("send", {
hitType:"event",
eventCategory:x,
eventAction:"定制微卡",
eventLabel:"点击定制微卡按钮"
}), T();
navigator.userAgent;
if (u) {
var a = new Function("MugedaBehavior", h(u).attr("onclick"));
if (window.MugedaBehavior) a(window.MugedaBehavior); else {
var b = null;
Object.defineProperty(window, "MugedaBehavior", {
set:function(c) {
setTimeout(function() {
a(window.MugedaBehavior);
}, 0), b = c;
},
get:function() {
return b;
}
});
}
} else C.data && C.data.param && C.data.param.form ? MugedaBehavior.popupForm(JSON.parse(C.data.param.form)) :console.error("we cannot find form data");
}, !1), J.addEventListener("touchstart", U, !1)), cardFrame.getSendInfo = function(a) {
if (a instanceof Function) {
var b = window.weiParam;
b && b.defined ? (b.url = b.url_callback ? url_callback() :cardFrame.getWeixinSendUrl(), 
a(b)) :setTimeout(cardFrame.getSendInfo, 500, a);
}
}, K && (K.addEventListener("click", function() {
ga("send", {
hitType:"event",
eventCategory:x,
eventAction:"发送微卡",
eventLabel:"点击发送微卡按钮"
}), T(), window.createMugedaTip();
}, !1), K.addEventListener("touchstart", U, !1)), L && (L.addEventListener("click", function() {
ga("send", {
hitType:"event",
eventCategory:x,
eventAction:"收藏微卡",
eventLabel:"点击收藏微卡按钮"
}), T(), i.showLoading("收藏中"), a.async("./collectService", function(a) {
a.add().then(function() {
i.hideLoading(!0);
}, function(a) {
a && i.showMessage(a), i.hideLoading(!0);
});
});
}, !1), L.addEventListener("touchstart", U, !1)), M && "Mucard_public" !== top._CUSTOM_TAG && (M.addEventListener("click", function() {
if (ga("send", {
hitType:"event",
eventCategory:x,
eventAction:"关注我们",
eventLabel:"点击关注我们按钮"
}), T(), d && d._footurl) try {
location.assign(decodeURIComponent(d._footurl));
} catch (a) {} else {
var b = cardFrame.footContent.link || "http://mp.weixin.qq.com/s?__biz=MzA3MzMwMTgwNQ==&mid=201265173&idx=1&sn=8a370252d80d26320ba08d3ba114bc6b#rd";
location.assign(b);
}
}, !1), M.addEventListener("touchstart", U, !1));
var ba = .85;
J.style.zoom = ba, K.style.zoom = ba, L.style.zoom = ba, M.style.zoom = ba, N.addClass("init");
var ca = function() {
N.addClass("fade");
}, da = function() {
clearTimeout(ia), N.removeClass("fade"), N.removeClass("init"), fa || (ia = setTimeout(ca, 5e3));
}, ea = window.MugedaCss3 && MugedaCss3.getAnimation ? MugedaCss3.getAnimation() :null, fa = !1;
if (ea) {
var ha = function() {
this.length - 1 === Math.floor(this.currentId) && (ea.scene.removeEventListener("enterframe", ha), 
fa = !0, da());
};
ea.scene.addEventListener("enterframe", ha);
}
var ia = setTimeout(ca, 5e3), ja = function() {
N.addClass("hide"), O.css("display", "none"), setTimeout(function() {
O.css("display", "block"), setTimeout(function() {
O.removeClass("hide");
});
}), window.clearTimeout(R), R = window.setTimeout(function() {
ka(), N.removeClass("init");
}, 5e3);
}, ka = function() {
N.removeClass("hide"), O.addClass("hide"), da();
};
N.on("click", ja), m.isPublic() || (P.on("click", function() {
if (u) {
var a = new Function("MugedaBehavior", h(u).attr("onclick"));
if (window.MugedaBehavior) a(window.MugedaBehavior); else {
var b = null;
Object.defineProperty(window, "MugedaBehavior", {
set:function(c) {
setTimeout(function() {
a(window.MugedaBehavior);
}, 0), b = c;
},
get:function() {
return b;
}
});
}
} else C.data && C.data.param && C.data.param.form ? MugedaBehavior.popupForm(JSON.parse(C.data.param.form)) :console.error("we cannot find form data");
}), Q.attr("title", cardFrame.footContent.content), Q.on("click", function() {
window.cardFrame && cardFrame.footContent && (ga("send", "event", "button", "click", "more button"), 
setTimeout(function() {
window.open(cardFrame.footContent.link, "_blank");
}, 100));
}), G.find(".btn_show_tip").on("click", function() {
window.createMugedaTip();
}), G.find(".btn_collect").on("click", function() {
i.showLoading("收藏中"), a.async("./collectService", function(a) {
a.add().then(function() {
i.hideLoading(!0);
}, function(a) {
a && i.showMessage(a), i.hideLoading(!0);
});
});
})), setTimeout(function() {
N.removeClass("hide");
}, 1e3);
} else cardFrame.isThreeCircleBtnHidden = function() {
return !0;
};
var la = !1;
window.cardFrame.showAudioBtn = function() {
if (la && (!na || B.wxLocalId) && c.custaudio) {
var b = a("./tpl/audioPlay"), d = h(b({})).appendTo(w).filter(".clickSound");
d.css("top", "75%"), d.addClass("transition"), setTimeout(function() {
d.css("opacity", "1"), d.css("left", "50%"), d.css("top", "75%"), setTimeout(function() {
d.removeClass("transition");
}, 1e3);
}, 100), B.soundPlay(d, c.custaudio, s.getBackgroundAudio);
}
};
var ma = c.custaudio || "", na = ma.indexOf(".amr") == ma.length - 4;
if (na) {
delete B.wxLocalId;
var oa = function(a, b) {
a.downloadVoice({
serverId:b,
isShowProgressTips:0,
success:function(a) {
B.wxLocalId = a.localId, window.cardFrame.showAudioBtn();
}
});
};
A.getWx().then(function(a) {
var b = decodeURIComponent(ma);
h.ajax({
type:"GET",
url:b + ".json",
dataType:"jsonp",
jsonpCallback:"Mucard_callback",
success:function(c) {
if (c.media_id) {
var d = parseInt(c.created_at), e = .001 * new Date().getTime() - d;
e > 172800 ? setTimeout(function() {
var c = t.cookie.get("token");
b = "http://weika.mugeda.com/server/wx_resource.php?method=s&token=" + c + "&url=" + encodeURIComponent(b), 
h.ajax({
type:"GET",
url:b,
dataType:"jsonp",
jsonpCallback:"Mucard_callback",
success:function(b) {
oa(a, b.media_id);
},
error:function(a, b) {
alert("Failed: " + b);
}
});
}, 10) :oa(a, c.media_id);
}
},
error:function(a, b) {
alert("Failed: " + b);
}
});
});
}
if (setTimeout(function() {
la = !0, window.cardFrame.showAudioBtn();
}, 5e3), b.cssMode) {
var pa = h(q({}));
w.append(pa);
var qa = null, ra = null;
cardFrame.setIco = function(a) {
ra != a && (ra = a, clearTimeout(qa), "loading" == a ? qa = setTimeout(function() {
cardFrame.setIco("off");
}, 2e3) :"on" == a && (qa = setTimeout(function() {
sa && sa[0].pause();
}, 9e4)), pa.find(".ico").hide(), pa.find("." + a).show());
}, cardFrame.setIco("off");
var sa = null;
if (Mugeda.getAudioCacheAll) {
var ta = Mugeda.getAudioCacheAll();
for (var ua in ta) if (ta.hasOwnProperty(ua)) {
sa = h(ta[ua]), s.getBackgroundAudio = sa[0] ? sa[0] :s.getBackgroundAudio, pa.find(".off").bind("click", function() {
sa.hasPlayed && (sa[0].currentTime = 0), sa[0].play(), cardFrame.setIco("loading");
}), pa.find(".on").bind("click", function() {
sa[0].pause();
}), sa.bind("timeupdate", function() {
("loading" == ra || "off" == ra && !sa[0].paused) && cardFrame.setIco("on");
}), sa.bind("pause", function() {
cardFrame.setIco("off");
}), sa.bind("ended", function() {
cardFrame.setIco("off");
}), sa.bind("playing", function() {
sa.hasPlayed = !0;
}), sa[0].paused || cardFrame.setIco("on");
break;
}
}
}
if (window.cardFrame && cardFrame.isReceiptCard) {
var va = MugedaUrl.current.getQueryObj().error;
if (va) window.localStorage && localStorage.setItem && localStorage.setItem("receiptError", va), 
delete MugedaUrl.current.getQueryObj().error, location.href = MugedaUrl.current.getURL(); else if (window.localStorage && localStorage.getItem) {
var wa = parseInt(localStorage.getItem("receiptError"));
localStorage.removeItem("receiptError"), 1 == wa ? i.showConfirm("抱歉，微信认证失败。") :2 == wa && i.showConfirm("抱歉，没有权限。");
}
}
var xa = MugedaUrl.current.getQueryObj().res_data, ya = {};
if (0 == MugedaUrl.current.getQueryObj().buy && i.showConfirm("你取消了支付流程，可以继续预览定制的卡"), 
xa) try {
var za = JSON.parse(decodeURIComponent(xa));
ya.applyCard = za.applyCard, ya.token = za.token;
} catch (Aa) {
setTimeout(function() {
throw "解析彩票req数据失败：" + xa;
});
}
if (ya.applyCard && cardFrame.getCustomObj().caiPiaoCustomToken) {
var Ba = {
cancel:!1
};
if (h(document).trigger("cardview:showCaipiao", Ba), !Ba.cancel) {
var Ca = null == MugedaUrl.current.getQueryObj().token || cardFrame.getCustomObj().caiPiaoCustomToken == MugedaUrl.current.getQueryObj().token;
if (Ca) var Da = !0;
h('<div class="jumpAni caipiaoLetter" style="width: 25%;position: fixed;right: 0;height: 58px; bottom:81px; background: url(./images/cai_ico.png) no-repeat center; background-size: contain;"></div>').appendTo(w).on("click", function() {
var a = l.setNewPage("cardTip", {
background:"rgba(0,0,0,0.66)",
type:"fix"
});
h('<div style="position: absolute;width: 288px;left: 0;right:0;top:0;bottom:0;text-align: center;height: 217px;margin: auto;"> <img src="./images/dlttc' + (Ca ? "2" :"") + '.png" width="228" height="175" /><br /><img class="cai_btn" style="margin-top: 10px;" src="./images/cai_btn' + (Ca ? "2" :"") + '.png" width="98" height="29" /> <img class="close_btn" src="./images/cai_clo.png" width="15" height="15" style="position: fixed; right: 20px; top: 55px;" /></div>').appendTo(a.dom).on("click", ".cai_btn", function() {
var a = new MugedaUrl("http://weika.mugeda.com/server/cards.php/user/lottery/record"), b = a.getQueryObj(), c = MugedaUrl.current.getQueryObj();
for (var d in c) c.hasOwnProperty(d) && (b[d] = c[d]);
b.type = "got";
var e = new MugedaUrl(ya.applyCard);
e.getQueryObj().m_letokeNotify = 1, b.applyCard = encodeURIComponent(e.getURL()), 
window.open(a.getURL());
}).on("click", ".close_btn", function() {
l.remove(a.id), l.back();
}), l.addToLayout(a.id), l.setActive(a.id, !0);
});
}
}
cardFrame.weixinChooseImage = function(b, c) {
a.async("./photoservice", function(a) {
var d = new a.MugedaImageUploader();
b.imageUploader = d, d.weixinChooseImage(function(d, e) {
"ok" == d ? (t.localStorage.set("supportCustomImage", 1), i.hideLoading(!0), a.customImage(b, function(a) {
i.hideLoading(!0), c && c(a);
})) :"error" == d ? (i.hideLoading(!0), i.showMessage(e)) :i.showLoading(e);
});
});
}, window.MugedaBehavior = window.MugedaBehavior || {};
var Ea = window.MugedaBehavior.popupForm, Fa = !0, Ga = null, Ha = [];
D = [];
var Ia = navigator.userAgent, Ja = Ia.toLowerCase().indexOf("android") > -1 && /BRA?\//.test(Ia) && "559e4895a3664e0e51000955" == x, Ka = function() {
cardFrame.Message.showConfirm('Android用户请复制以下链接，在微信中打开，进行微卡定制送给心爱的TA。<br /><textarea style="resize:none;width:100%;margin-top:6px;" rows="3">' + location.href + "</textarea>", !1, {
labelConfirm:"我知道了",
confirm:function() {
h("#custom").appendTo(h("body"));
}
});
};
window.MugedaBehavior.popupForm = Ja ? Ka :function(b) {
s.setLastFormData(b), m.isMu() && s.saveCardParam(Mu.param);
var e = s.getCardParam().customObj || {};
if (h.isArray(b.items)) for (var f in e) e.hasOwnProperty(f) && b.items.filter(function(a) {
return a.id == f;
}).forEach(function(a) {
[ "input", "textarea", "phone", "email" ].indexOf(a.type) > -1 && (a.value = e[f]);
});
"string" == typeof b.msg && (b.msg = b.msg.replace("或发到您的朋友圈", "")), Fa && setTimeout(function() {
i.setWeixinToolbarBotton(!1);
MugedaUrl.current.getQueryObj().m_bizId;
if (Fa = !1, Ea.call(window, b), m.isMu()) {
c = s.getCardParam().customObj;
for (var e in c) {
var f = c[e], o = f.des, p = f.value, q = "_mcp_" + escape(o || ""), u = document.getElementById(q);
u && void 0 != p && (u.value = p);
}
}
var v = h(window.popupFormDiv).addClass("content");
h(document.body).append(v);
var w = l.setNewPage("popupForm", {
dom:v,
inDom:!0
});
if (navigator.userAgent.toLowerCase().indexOf("micromessenger/6.0.2") > -1) ;
v.find("style").remove(), v.find(".popupFormSubmit").hide(), v.find(".popupFormCancel").hide();
var x = v.find("form");
x.parent().css("position", "absolute"), x.children("div").eq(1).is(".popupFormContent") && (x = x.children("div").eq(1)), 
x.addClass("form-horizontal").children("div").addClass("form-group box").children("label").css("min-width", "100px").addClass("control-label").next().addClass("form-control box-flexible"), 
v.find("textarea").css("height", "90px").css("width", "100%").wrap('<div class="box-flexible"></div>'), 
v.find("select").css("overflow", "hidden"), v.find(".popupFormRadioList").children("h3").each(function() {
h(this).replaceWith('<label style="min-width:100px" class="control-label">' + h(this).html() + "</label>");
}), v.find(".mformradio, .mformcheck").removeClass("form-control").find("label").bind("click", function(a) {
h(a.target).is("input") || h(this).find("[type=radio]").click();
}), v.find(".mformcheck").find("label").each(function() {
var a = h(this).parent();
a.prev().append(h(this)), a.remove();
}), v.find("input").each(function() {
h(this).keypress(function(a) {
var b = window.event ? a.keyCode :a.which;
return "13" == b.toString() ? !1 :void 0;
});
});
var C = s.getCardParam().customObj || {};
if (h.isArray(b.items)) for (var E in C) if (C.hasOwnProperty(E)) try {
var F = v.find('[name="' + E + '"]');
if (F.length) switch (F.attr("type")) {
case "radio":
case "checkbox":
v.find('[name="' + E + '"][value="' + C[E] + '"]').attr("checked", "checked");
break;

default:
v.find('[name="' + E + '"]').val(C[E]);
}
} catch (G) {
setTimeout(function() {
throw new Error("queryselectorall抛出错误，错误的字符串是：" + E);
}, 0);
}
if (window.MugedaCard && MugedaCard.data) for (var H in MugedaCard.data) {
var I = MugedaCard.data[H];
if ("receipt" == I.type) {
var J = I.des;
if ("string" == typeof J) {
var K = v.find("#_map_" + J);
K.length && (Ga = K, Ha.push(H));
}
}
}
var L = [];
if (m.isWeixin() && L.indexOf(t.getCrid()) > -1 && !MugedaUrl.current.getQueryObj().m_bizId) {
var M = h(a("./tpl/caipiao")({
paid:Da
})).appendTo(x), N = M.find("#span_caipiao .number"), O = M.find("#span_caipiao .note");
N.hide(), O.hide();
var P = M.find("#span_caipiao .minus"), Q = M.find("#span_caipiao .add"), R = M.find("#span_caipiao .num"), S = M.find("#span_caipiao .amount");
P.on("click", function() {
if (!P.hasClass("disabled")) {
var a = parseInt(R.text());
a = Math.max(1, a - 1), R.text(a), 1 == a && P.addClass("disabled"), a *= 2, S.text(a);
}
}), Q.on("click", function() {
var a = parseInt(R.text());
a = Math.max(1, a + 1), R.text(a), a *= 2, S.text(a), P.removeClass("disabled");
}), M.on("change", "[name=radio-custom-caipaio]", function() {
setTimeout(function() {
var a = M.find("[name=radio-custom-caipaio]:checked").length > 0;
a ? N.show() :N.hide(), a ? O.show() :O.hide();
});
});
}
m.isPublic() || MugedaUrl.current.getQueryObj().m_bizId || g(function(b) {
b.getPromoBanner({
formDiv:x,
envir:m,
utils:t,
require:a,
promoResult:z ? y.promoResult :""
});
});
var T = !1, U = h('<div class="highLevel"></div>').appendTo(x);
D = [];
for (var V in window.data) for (var W = window.data[V], o = W.formDescription, X = W.obj, Y = !1, Z = 0; Z < X.length; Z++) {
var H = X[Z];
if (!Y && ("image" === H.cardRefParam || "signature" === H.cardRefParam || "masked" === H.cardRefParam)) {
Y = !0;
var $ = {
src:H.srcUserImg || H.oriSrc || H.src,
id:V,
type:H.cardRefParam,
showSrc:H.newSrc || H.src,
ori:H.oriSrc
};
D.push($);
}
}
if (D.length) if (T = !0, m.isApp2() || m.haveURL()) {
var _ = h(r({
env:m.isApp2() ? "APP" :"OTHER"
}));
_.insertBefore(U);
var aa = k.init(h(v.find(".custom-image-list")), D.sort(function(a, b) {
a = a.id, b = b.id;
for (var c = Math.min(a.length, b.length), d = 0; c > d; d++) if (a.charCodeAt(d) != b.charCodeAt(d)) return a.charCodeAt(d) - b.charCodeAt(d);
return a.length - b.length;
}), {
minWidth:96,
src:"src",
padding:16,
ratio:1,
render:!0,
cover:!0,
innerCover:!0,
tplCallback:function(b, c) {
var d = function() {
var a = h('<div class="close"></div>');
b.find(".coverImage").append(a), c.src == c.raw.showSrc && a.hide(), a.one("click", function() {
a.hide(), k.replaceImage(aa, c.id, c.raw.showSrc), c.raw.ori = null, c.raw.imgNew = null;
});
};
!m.isApp() && m.haveURL() ? a.async("./photoservice", function(a) {
var e = c.raw.imageUploader = new a.MugedaImageUploader();
e.initUploader(b.find(".coverImage")[0], function(b, d) {
"ok" == b ? (t.localStorage.set("supportCustomImage", 1), _.filter("#customImagePromptMessage").hide(), 
i.hideLoading(!0), a.customImage(c.raw, function(a) {
k.replaceImage(aa, c.id, a);
})) :"error" == b ? (i.hideLoading(!0), i.showMessage(d)) :i.showLoading(d);
}), d();
}) :d();
},
callback:function(b, c) {
var d = t.localStorage.get("supportCustomImage");
d || _.filter("#customImagePromptMessage").show(), m.isApp2() && a.async("./user", function() {
a.async("./photoservice", function(a) {
a.customImage(b, function(a) {
k.replaceImage(aa, c.id, a);
});
});
});
}
});
} else U.append('<small class="tip-pic customImageItem"><i class="fa fa-light"></i> 你知道吗？下载并使用卡司令APP，还可以为微卡添加头像签名，以及其它酷炫功能哦！<a href="install.html">点击下载</a></small>');
if (cardFrame.setImageCustomFormOff = function(a) {
var b = a || {
voice:!0,
loading:!0,
image:!0,
btn:!0,
caipiao:!0
};
b.voice !== !1 && v.find(".custom_voice").hide(), b.loading !== !1 && v.find(".loading_page").hide(), 
b.image !== !1 && v.find(".custom_image").hide(), b.caipiao !== !1 && v.find(".caipiao_page").hide(), 
b.btn !== !1 && v.find(".highLevelCustomBtn").hide();
}, !(cardFrame.bizData && cardFrame.bizData._hide_customItem && cardFrame.bizData._hide_customItem.indexOf("music") > -1)) {
T = !0;
var ba = h(a("./tpl/backgroundMusic")({}));
U.append(ba);
var ca = ba.find(".choose"), da = ba.find(".preview"), ea = MugedaUrl.current.getQueryObj().music, fa = null;
null != ea ? fa = decodeURIComponent(ea) :MugedaUrl.current.getQueryObj().audio && (fa = decodeURIComponent(MugedaUrl.current.getQueryObj().audio)), 
window.Audio || (window.Audio = function(a) {
this.play = function() {}, this.pause = function() {}, this.load = function() {}, 
this.loop = !0, this.src = a, this.paused = !1, this.addEventListener = function() {}, 
this.removeEventListener = function() {};
});
var ha = new Audio();
fa ? (ea && da.attr("music", fa), da.show(), ha.src = fa.indexOf("/") < 0 ? m.getHost() + "/weixin/card/cards/" + t.getCrid() + "/" + fa :fa) :da.hide();
var ia = !1;
da.on("click", function() {
ia ? (ia = !1, ha.pause(), da.removeClass("stop")) :(ia = !0, ha.play(), da.addClass("stop"));
}), ca.on("click", function() {
if (window.weixinAudioLoader) for (var a in weixinAudioLoader) weixinAudioLoader[a].pause && weixinAudioLoader[a].pause();
ha.pause(), ia = !1, n.selectMusic(function(a) {
0 == a.status && a.url && (ha.src = a.url, da.attr("music", a.url), da.show(), da.removeClass("stop"), 
ha.addEventListener("ended", function() {
ia = !1, this.src = B.audioPath, da.removeClass("stop");
}, !1));
});
});
}
if (!(cardFrame.bizData && cardFrame.bizData._hide_customItem && cardFrame.bizData._hide_customItem.indexOf("voice") > -1)) {
T = !0;
var ba = h(a("./tpl/recordAudio")({}));
U.append(ba);
var ja = ba.find(".recording1"), ka = ba.find(".hint"), la = ba.find(".close"), ma = ba.find(".recording2"), na = "";
m.isApp2() ? ja.on("click", function() {
var a = v.find("textarea"), b = a.length ? a.first().val() :"";
B.addAudio(b).then(function() {
var a = !0;
B.isCustSound && (B.init(), ma.show(), B.audio.addEventListener("ended", function() {
a = !0, this.src = B.audioPath, ma.removeClass("stop");
}, !1), ma.on("click", function() {
a ? (a = !1, B.playAudio(), ma.addClass("stop")) :(a = !0, B.pause(), ma.removeClass("stop"));
}));
}, function(a) {
a && i.showMessage(a);
});
}) :m.isWeixin() && A.wxjs_status.config_ok ? A.getWx().then(function(a) {
var b = function(b, c) {
na = b || na, void 0 === c && (c = !ma.hasClass("stop")), c ? (ma.addClass("stop"), 
a.playVoice({
localId:na
})) :(a.stopVoice({
localId:na
}), ma.removeClass("stop")), ma.show(), la.show(), ma.attr("localId", na);
};
ja.on("click", function() {
ja.hasClass("active") ? (ja.removeClass("active"), ka.css("display", "none"), a.stopRecord({
success:function(a) {
var c = a.localId;
b(c, !0);
}
})) :(ja.addClass("active"), ka.css("display", "block"), a.startRecord());
}), a.onVoiceRecordEnd({
complete:function(a) {
var c = a.localId;
b(c, !0);
}
}), a.onVoicePlayEnd({
success:function(a) {
var c = a.localId;
b(c, !1);
}
}), ma.on("click", function() {
b();
}), la.on("click", function(a) {
b(null, !1), ma.hide(), la.hide(), a.stopPropagation(), ma.attr("localId", "");
});
}) :ja.on("click", function() {
i.showConfirm("该特性需要在卡司令App中使用。您需要现在下载卡司令App吗？", !0, {
labelConfirm:"下载",
confirm:function() {
window.top.location.href = "install.html";
},
cancel:function() {
i.hideConfirm();
}
});
});
}
if (!(cardFrame.bizData && cardFrame.bizData._hide_customItem && cardFrame.bizData._hide_customItem.indexOf("loading") > -1)) {
T = !0, U.append(a("./tpl/profileCustom")({
isWeixin:m.isWeixin() || m.isApp2()
})), x.on("click", ".changeLogo", function() {
m.isOffical() || m.isApp2() ? i.showConfirm("登录卡司令PC端，可完成企业定制，为微卡添加图片或logo，以及更多企业专属功能。\nweika.mugeda.com") :i.showConfirm("此功能需要加入我们的企业定制服务，免费注册，只需30秒。\n企业服务可以上传logo、修改关注链接方便粉丝关注、更方便的定制图片语音。还有企业专属模板！", !0, {
labelConfirm:"立即加入",
labelCancel:"下次再说",
confirm:function() {
window.open("http://weika.mugeda.com/server/page/apply.html?referer=" + encodeURIComponent(location.href) + "&source=custom_form");
},
cancel:function() {
i.hideConfirm();
}
});
});
var oa = null;
x.on("click", "input.custom-logo[type=radio]", function() {
var a = h(this), b = 1 * a.val();
if (oa == b && (x.find("input.custom-logo[type=radio]").prop("checked", !1), b = null), 
oa = b, x.find(".spanPcCustomValue").hide(), x.find(".spanSloganCustomValue").hide(), 
1 == b) {
if (m.isApp2()) {
var c = null, d = null, e = null;
if (window.localStorage) {
var f = localStorage.wechat_userinfo, g = localStorage.wechat_userinfo_time, j = new Date().getTime();
if (f && 7200 > j - g) try {
c = JSON.parse(f), c && c.headimgurl && c.unionid && (d = c.headimgurl, e = c.unionid);
} catch (k) {
i.showConfirm("获取微信用户信息时出错：" + k.toString());
}
}
var l = function(a, c) {
if (a) {
var d = x.find("input#inputProfileImage");
d.length || x.append("<input id='inputProfileImage' type='hidden' value='" + a + "'></input>"), 
d.value = a;
} else i.showConfirm("获取微信用户信息失败" + (c ? "（" + c + "）" :"") + "。请稍后重试。"), x.find("input.custom-logo[type=radio]").prop("checked", !1), 
b = null, oa = b, 1 == b ? x.find(".spanSloganCustomValue").show() :x.find(".spanSloganCustomValue").hide();
}, n = !1;
if (!d && window.mucard && mucard.wechatLogin) {
i.showLoading("获取微信头像"), n = !0;
var o = !1;
mucard.wechatLogin(function(a) {
i.hideLoading(), o = !0;
try {
c = JSON.parse(a), c && c.headimgurl && c.unionid && (d = c.headimgurl, e = c.unionid, 
localStorage.wechat_userinfo = a, localStorage.wechat_userinfo_time = new Date().getTime());
} catch (b) {
i.showConfirm("获取微信用户信息时出错：" + b.toString());
}
l(d);
}), setTimeout(function() {
o || (i.hideLoading(), o = !0, l(null, "等待超时"));
}, 3e4);
}
d || n || l(d);
}
} else 2 == b && x.find(".spanPcCustomValue").show();
var p = a.prop("checked"), q = a.parent().next();
p ? q.show() :q.hide();
}), x.on("change", "#selectSlogan", function() {
1 * h(this).val() == 999 ? h(this).parent().next().show() :h(this).parent().next().hide();
});
}
if (T) {
var pa = h('<div class="highLevelCustomBtn"><a class="normal box-flexible" style="display: block;"><img height="16" width="16" src="./images/logo-plus-orange.png" style="position: relative;top:2px;"> 显示高级定制选项</a></div>').appendTo(x);
U.hide(), pa.on("click", function() {
U.show(), pa.hide(), h(window).trigger("resize");
});
}
window.setTimeout(function() {
var b, c = v.find('input[name="addr_detail"]');
0 != v.find('input[name="adress"]').length ? b = v.find('input[name="adress"]') :0 != v.find('input[custom="address"]').length ? b = v.find('input[custom="address"]') :0 != v.find('input[name="address"]').length && (b = v.find('input[name="address"]')), 
b && !b.attr("hasBindMapselect") && a.async("./map_selector", function(a) {
b.attr("hasBindMapselect", !0), h(document).on("custom:setCustomObj", function(a) {
var b = a._args;
b._mapselect_lat = window.mapselect_lat, b._mapselect_lng = window.mapselect_lng, 
b._mapselect_title = window.mapselect_title, b._mapselect_keyword = window.mapselect_keyword;
}), b.on("click", function() {
a.select({
keywords:b.val(),
success:function(a) {
b.val(a.title), c.val(a.keyword);
},
cancel:function() {
console.log("cancel it");
}
});
});
});
}, 0), v.on("click", ".tip-pic-btn", function() {
h(this).parent().next().toggle(), h(this).find(".tip-pic-btn > .fa").toggleClass("fa-rotate-270");
}), c._bid || d && (d._loading || d._footurl) || MugedaUrl.current.getQueryObj().m_bizId || !m.isWeixin() || window.cardFrame.canOfficialCustom;
var qa = function(a) {
a.srcElement == v[0] && (Fa = !0, setTimeout(function() {
i.setWeixinToolbarBotton(!0);
}), a.srcElement.className.indexOf("page-scroll") > -1 && (w.dom.unbind("DOMNodeRemoved", qa), 
setTimeout(function() {
l.remove(w.id), l.back();
}, 0)));
};
w.dom.bind("DOMNodeRemoved", qa);
var ra = "定制微卡";
document.title = ra;
var sa = j.getNaviBar(ra, {
leftTpl:h('<span class="btn btnCancel' + (h.os.ios ? " needsclick" :"") + '">取消</span>'),
rightTpl:h('<span class="btn btnSubmit">确定</span>'),
hideWeiIcon:!0,
hideUserIcon:!0
});
sa.navibarTpl.on("click", ".btnSubmit", function(a) {
if (M && M.find("[name=radio-custom-caipaio]:checked").length && !Da) {
var b = M.find("#span_caipiao .amount").text();
i.showConfirm("你选择为收卡人随卡附赠" + b + ".00元彩票，我们将会用微信支付完成你的购买流程。要现在购买吗？", !0, {
confirm:function() {
v.find(".popupFormSubmit").trigger("click"), ga("send", {
hitType:"event",
eventCategory:"彩票",
eventAction:"点击支付并预览按钮",
eventLabel:""
});
},
labelConfirm:"支付并预览",
labelCancel:"取消"
});
} else v.find(".popupFormSubmit").trigger("click");
a.preventDefault();
}), sa.navibarTpl.on("click", ".btnCancel", cardFrame.cancelCustomForm = function(a) {
var b = h.os.phone || h.os.tablet ? "touchstart" :"click", c = v.find(".popupFormCancel");
c.trigger("click"), h.os.version && 0 == h.os.version.indexOf("2.3") && c.trigger("click"), 
c.trigger(b), a && a.preventDefault();
}), h(document.body).one("custom:beforeNavigate", function(a) {
var b = a && a._args && a._args.url;
b && (/preview/i.test(b) ? b = b.replace(/preview=(\d+)/i, function(a, b) {
return "preview=" + (+b + 1);
}) :b += "&preview=1", a._args.url = b);
}), v.append(sa.navibarTpl), cardFrame.event = {
dom:v,
data:b
}, h(document).trigger("beforepopupcustomform", cardFrame.event), l.setActive(w.id, !0), 
h(document).trigger("popupcustomform", v);
}, 300);
};
var La = function(a, b, d, e) {
e = e || {};
for (var f = a.split("&"), g = 0; g < D.length; g++) {
var j = D[g];
j.imgNew ? f.push(j.id + "=" + encodeURIComponent(JSON.stringify({
u:j.imgNew.src,
l:0,
t:0,
w:j.imgNew.rawWidth,
h:j.imgNew.rawHeight
}))) :j.ori && j.ori !== j.src && f.push(j.id + "=" + encodeURIComponent(j.src));
}
B.isCustSound && f.push("custaudio=" + encodeURIComponent(B.audioPath));
var k = h(window.popupFormDiv);
if (!c._bid && m.isOffical() && window.cardFrame.canOfficialCustom && k) {
var l = k.find("#weixingfootContent"), n = k.find("#weixingfootUrl");
if (l.length && n.length) {
var o = l.val(), p = n.val();
s.addFootToCustom(f, o, p), window.localStorage && (localStorage.mugeda_foot_content = o, 
localStorage.mugeda_foot_url = p);
}
} else for (var q in c) c.hasOwnProperty(q) && 0 == q.indexOf("_") && f.push(q + "=" + encodeURIComponent(c[q]));
var r = document.getElementById("checkboxProfile"), u = document.getElementById("selectSlogan"), v = document.getElementById("inputSlogan"), w = document.getElementById("inputProfileImage");
if (r) {
var x = r.checked ? 1 :0, y = u.value, z = w ? w.value :"";
999 == y && (y = v.value), s.addCustomProfile(f, x, y, z);
}
for (var g = 0; g < f.length; g++) -1 != f.indexOf("=") && (Ha.indexOf(f[g].split("=")[0]) > -1 ? f.splice(g--, 1) :"_footcontent=%E5%85%B3%E6%B3%A8%20%7B%7B%E6%9C%A8%E7%96%99%E7%98%A9%E5%BE%AE%E5%8D%A1%7D%7D%20%E6%9B%B4%E5%A4%9A%E9%85%B7%E7%82%AB%E5%86%85%E5%AE%B9" == f[g] ? f.splice(g--, 1) :"_footurl=http%3A%2F%2Ft.cn%2FRP7kPN1" == f[g] ? f.splice(g--, 1) :0 == f[g].split("=")[1].indexOf("__") && f.splice(g--, 1));
if (Ga) {
var C = Ga.get(0).selectedIndex, E = C > 0;
e.receiptCard = !0, e["public"] = E;
}
if (k.find("[name=radio-custom-caipaio]:checked").length) {
e.isCaipiao = !0, e.caipiaoIsPaid = Da;
var F = k.find("#span_caipiao .num");
e.caipiaoCount = F ? parseInt(F.text()) :1;
}
var G = k.find(".custMusic .preview"), H = G.attr("music");
H && (e.music = encodeURIComponent(H));
var I = k.find(".custSound .recording2"), J = I.attr("localId");
if (J && A.wxjs_status.config_ok) {
window.alert = function() {};
A.getWx().then(function(b) {
b.uploadVoice({
localId:J,
isShowProgressTips:1,
success:function(b) {
var c = b.serverId, g = t.cookie.get("token"), j = "http://weika.mugeda.com/server/wx_resource.php?token=" + g + "&mediaid=" + c;
i.showLoading("保存录音"), h.ajax({
type:"GET",
url:j,
dataType:"json",
success:function(b) {
i.hideLoading(), 0 === b.status && (f.push("custaudio=" + encodeURIComponent(b.info)), 
a = f.join("&"), d(a, e));
},
error:function() {
i.hideLoading();
}
});
}
});
});
} else a = f.join("&"), d(a, e);
};
window.customImage = La, (likeable && likeable.some(function(a) {
return a === x;
}) || /^!\/.+?\.json/.test(decodeURIComponent(x))) && (v.show(), h(document).on("custom:forwardingURL", function(a) {
var b = a._args, c = new MugedaUrl("http://weika.mugeda.com/server/card/token");
c.getQueryObj().type = "base", c.getQueryObj().redirect = encodeURIComponent(b.url), 
b.url = c.getURL();
}));
};
b.animationReady = F, window.cardFrame = window.cardFrame || {}, cardFrame.showReceiptList = function() {
var a = MugedaUrl.current.getQueryObj().hash;
if (!a) return void i.showConfirm("这张卡片还没有定制哦。");
var b = "https://weika.mugeda.com/card/invite_card.php/list", c = encodeURIComponent(MugedaUrl.current.getURL());
window.open(b + "?redirect=" + c + "&receipt=" + a);
}, cardFrame.replyReceiptCard = function() {
var a = MugedaUrl.current.getQueryObj().hash;
if (!a) return void i.showConfirm("这张卡片还没有定制哦。");
var b = j.getNaviBar("回复", {
leftTpl:h('<span class="btn btnCancel">取消</span>'),
rightTpl:h('<span class="btn btnSubmit">确定</span>')
});
b.navibarTpl.on("click", ".btnSubmit", function() {
l.remove(c.id);
var b = parseInt(c.dom.find(".answer").val()) || 0, d = encodeURIComponent(t.escapeHTML(c.dom.find(".message").val())), e = "https://weika.mugeda.com/card/invite_card.php/attend", f = encodeURIComponent(MugedaUrl.current.getURL());
window.open(e + "?redirect=" + f + "&receipt=" + a + "&value=" + b + "&data=" + d);
}), b.navibarTpl.on("click", ".btnCancel", function() {
l.remove(c.id);
});
var c = l.setNewPage("replyInvitePage", {});
c.dom.append(b.navibarTpl), c.dom.append(o()), l.addToLayout(c.id), l.setActive(c.id, !0);
};
}), define("scripts/collectGallery", [ "./vendor/zepto", "./environment" ], function(a, b) {
var c = a("./vendor/zepto"), d = a("./environment"), e = [], f = 0;
c(window).bind("resize", function() {
for (var a = []; e.length; ) {
var c = e.pop();
c.container.isExist() && (b.adaptSize(c), a.push(c));
}
e = a;
}), b.adaptSize = function(a) {
var b = a.container.find(".imgItem"), c = a.container.innerWidth(), d = Math.ceil(c / (a.minWidth + a.padding)), e = c / d - a.padding;
if (b.children("img ,.preload").height(e * a.ratio), a.oneline && !a.disable) {
var f = a.container.children(), g = f.length, h = 0;
"number" == typeof a.oneline ? h = a.oneline :(a.oneline = "a") ? h = Math.max(1, Math.floor(g / d)) :null != a.oneline && (h = 1);
var i = Math.max(g - d * h, 0);
f.show();
for (var b = [], j = 0; i > j; j++) {
var k = a.notRandom ? g - 1 - j :Math.floor(Math.random() * g);
b.indexOf(k) > -1 ? j-- :(b.push(k), f.eq(k).hide());
}
}
}, b.check = function(a, b, d) {
if (null == d) {
var e = b.container.find(".check");
a ? e.show() :e.hide();
} else c.isArray(d) || (d = [ d ]), d.forEach(function(c) {
var d = b.imageData[c].dom.find(".check");
a ? d.show() :d.hide();
});
}, b.removeItem = function(a, b) {
c.isArray(b) || (b = [ b ]), b.forEach(function(b) {
var c = a.imageData[b];
delete a.imageData[b], c.dom.remove();
});
}, b.replaceImage = function(a, c, d) {
var e = a.imageData[c];
e.src = d;
var f = g(a, c);
e.dom.replaceWith(f), e.dom = f, b.adaptSize(a);
}, b.render = function(a) {
var d = null, e = "s" + f++;
for (var h in a.imageData) {
var i = a.imageData[h];
i.dom === !1 ? (i.dom = g(a, h), i.dom.attr("data-stamp", e), d ? i.dom.insertBefore(d) :i.dom.appendTo(a.container)) :i.dom.attr("data-stamp", e), 
d = i.dom;
}
a.container.children(":not([data-stamp=" + e + "])").each(function() {
c(this).remove()[0].data.dom = !1;
}), b.adaptSize(a);
};
var g = function(a, b) {
var d = a.imageData[b], e = '<div class="imgItem collectItems couldOpen" datasrc="' + encodeURIComponent(d.link) + '" style="overflow: hidden;padding:' + a.padding / 2 + 'px;position:relative;"> <div class="check" style="position:absolute;left:8px;bottom:50%;display:none;"><i class="fa-lg fa-check-circle fa-select fa"></i></div> <div class="preload box-center" style="width:100%;height:100%;border:1px solid white;color:#999999;background: url(./images/refresh.gif) center center no-repeat"></div>' + (a.cover ? ' <div class="coverImage" style="float:left;display:none;width:80px;height:80px;"></div>' :"") + ' <img style="display:none;width: 100%;" src="' + d.src + '"/ >' + (d.title ? ' <div class="text-left" style="margin-left:20px;float:left;white-space: nowrap;overflow: hidden;padding:3px 0;font-size:90%;color:#333;width:45%">' + d.title + "</div>" :"") + "<br>" + (d.time ? ' <div class="text-left" style="margin-left:20px;float:left;white-space: nowrap;overflow: hidden;padding:3px 0;font-size:90%;color:#a1a1a1;width:45%">' + d.time + "</div>" :"") + "</div>", f = c(e);
return c.isFunction(a.tplCallback) && a.tplCallback(f, d), f[0].data = d, f.find("img").bind("load", function() {
a.cover ? (a.innerCover ? c(this).prev(".coverImage").css("background-image", "url(" + c(this).attr("src") + ");background-size: contain;background-position: center center;background-repeat: no-repeat;").show().prev(".preload").remove() :c(this).prev(".coverImage").css("background-image", "url(" + c(this).attr("src") + ");background-size: cover;background-position: center;").show().prev(".preload").remove(), 
c(this).remove()) :c(this).show().prev(".preload").remove();
}).bind("error", function() {
var b = c(this), d = c('<small style="width:100%;height: 100%">加载失败<br />点击重试</small>');
c(this).prev().prev().append(d).css("background", "none");
var e = function(d) {
a.forceSelect || (c(this).css("background", "url(./images/refresh.gif) center center no-repeat"), 
c(this).find("small").remove(), b.attr("src", b.attr("src")), d.stopPropagation());
};
d.parent().one("click", e);
}), f;
};
b.filter = function(a, d) {
var e = {};
for (var f in a.imageData) {
var g = a.imageData[f].raw, h = !0;
if (c.isFunction(d)) h = d(g); else for (var i in d) {
var j = d[i];
if (g[i] != j) {
h = !1;
break;
}
}
h && (e[f] = a.imageData[f]);
}
var k = {};
c.extend(k, a), k.imageData = e, a.num = Object.getOwnPropertyNames(e).length, b.render(k);
}, b.renderCard = function(a, c) {
var e = {};
c.forEach(function(b) {
var c = "i" + f++, g = b.thumb.replace("[HOST]", d.getHost());
g = g.indexOf("//") > -1 ? g :a.base + b.crid + "/" + g, e[c] = {
id:c,
raw:b,
src:g,
title:b.title,
dom:!1
};
}), a.imageData = e, b.render(a);
}, b.init = function(a, d, f) {
var g = {};
return d && d.forEach(function(a) {
g[a.id] = {
id:a.id,
raw:a,
src:a.thumb,
title:a.title,
time:a._date,
link:a.collecturl,
dom:!1
};
}), e.push({
base:f.base,
container:a,
imageData:g,
minWidth:f.minWidth || 100,
padding:f.padding || 32,
ratio:f.ratio,
callback:f.callback,
cover:f.cover || !1,
canSelect:f.canSelect || !1,
oneline:f.oneline || !1,
subTitle:f.subTitle || null,
tplCallback:f.tplCallback || null,
innerCover:f.innerCover || !1,
notRandom:f.notRandom || !1
}), f.render && b.render(e[e.length - 1]), a.on("click", ".imgItem", function() {
var a = c(this);
a.hasClass("couldOpen") && window.open(decodeURIComponent(a.attr("datasrc")));
}), a.on("touchstart", ".imgItem", function() {
var a = c(this);
a.css("background-color", "#e4e4e4");
}), a.on("touchend", ".imgItem", function() {
var a = c(this);
a.css("background-color", "#fff");
}), a.on("click", ".imgItem", function(a) {
c.isFunction(f.callbackSubTitle) && c(a.target).parents("div.subTitle").length ? f.callbackSubTitle(c(this)[0].data.raw, c(this)[0].data) :c.isFunction(f.callback) && f.callback(c(this)[0].data.raw, c(this)[0].data);
}), e[e.length - 1];
};
}), define("scripts/collectService", [ "./vendor/zepto", "./message", "./tpl/loading", "./tpl/template", "./tpl/dialog", "./vendor/promise", "./user", "./environment", "./utils", "./userview", "./tpl/login", "./tpl/register", "./tpl/userinfo", "./navibar", "./tpl/navibar", "./page", "./photoservice", "./weixinJs", "wxjs", "./vendor/sha1", "./gallery", "./collectGallery" ], function(a, b) {
var c = a("./vendor/zepto"), d = a("./message"), e = a("./vendor/promise"), f = a("./user"), g = "http://weika.mugeda.com/server/ucenter.php/ucenter/", h = a("./utils"), i = a("./environment"), j = (a("./userview"), 
{
remove:g + "removeCard",
list:g + "myCollect",
add:g + "collectCard"
});
b.getUserCollectList = function() {
return new e(function(a, b) {
var e = j.list, g = function(f) {
c.ajax({
url:e,
data:f,
xhrFields:{
withCredentials:!0
},
dataType:"jsonp",
jsonpCallback:"Mucard_callback",
success:function(c) {
d.hideLoading(), 0 === c.status ? a(c.data) :l(function() {
b("获取用户收藏列表失败");
});
},
error:function() {
d.hideLoading(), l(function() {
b("获取用户收藏列表失败");
});
}
});
}, k = function() {
d.showLoading("正在加载"), i.isApp2() ? f.getUrid().then(function(a) {
g({
urid:a,
t:+new Date()
});
}, function() {
d.hideLoading(), d.showConfirm("您需要先登录才能查看保存的收藏，是否现在登录？", !0, {
labelConfirm:"立即登录",
labelCancel:"下次再说",
confirm:function() {
c(document.body).trigger("user:login", {
callback:function() {
k();
}
});
},
cancel:function() {
b("用户没有登录");
}
});
}) :i.isWeixin && g({
token:h.cookie.get("token"),
t:+new Date()
});
};
k();
var l = function(a) {
d.showConfirm("获取用户收藏列表失败，是否重试？", !0, {
labelConfirm:"重试",
confirm:function() {
k();
},
cancel:function() {
a();
}
});
};
});
}, b.add = function() {
return new e(function(a, b) {
var e = j.add, g = {}, k = function() {
window.open("http://mp.weixin.qq.com/s?__biz=MzA3MzMwMTgwNQ==&mid=202908196&idx=1&sn=8bb6504461a6cdf7ce809b6ac6bbf9a8#rd ");
}, l = function(f) {
c.ajax({
url:e,
data:f,
dataType:"jsonp",
jsonpCallback:"Mucard_callback",
success:function(e) {
return d.hideLoading(), 0 == e.isfollowed ? (d.showConfirm("关注我们才能收藏，要现在去关注吗？", !0, {
confirm:k,
labelConfirm:"去关注",
labelCancel:"下次再说"
}), void b()) :void (0 === e.status ? ("Ok" != e.error ? "favorited" === e.error ? d.showConfirm("已经收藏过此卡", !1, {
labelConfirm:"我知道了"
}) :n(function() {
d.showConfirm("收藏失败，请稍后重试"), b();
}) :d.showConfirm("收藏成功！\n\n可在微卡列表底部个人中心 > 我的收藏中查看。", !0, {
labelConfirm:"我知道了",
labelCancel:"查看收藏",
cancel:function() {
c(document.body).trigger("user:collect", {
viewMode:"view"
});
}
}), a()) :n(function() {
d.showConfirm("收藏失败，请稍后重试"), b();
}));
},
error:function() {
d.hideLoading(), n(function() {
d.showConfirm("收藏出错，请稍后重试"), b();
});
},
fail:function() {
d.hideLoading(), n(function() {
d.showConfirm("收藏失败，请稍后重试"), b();
});
}
});
};
if (i.isApp2()) f.getUrid().then(function(a) {
g = {
t:+new Date(),
crid:h.getCrid(),
url:encodeURIComponent(location.href),
urid:a,
redirect:encodeURIComponent(location.href),
collecturl:encodeURIComponent(location.href),
isWeixin:i.isWeixin()
}, l(g);
}, function() {
d.hideLoading(), d.showConfirm("您需要先登录才能保存收藏，是否现在登录？", !0, {
labelConfirm:"立即登录",
labelCancel:"下次再说",
confirm:function() {
c(document.body).trigger("user:login", {
callback:function(a) {
a || d.showMessage("收藏失败，请稍后重试"), f.getUrid().then(function(a) {
g = {
t:+new Date(),
crid:h.getCrid(),
url:encodeURIComponent(location.href),
urid:a,
redirect:encodeURIComponent(location.href),
collecturl:encodeURIComponent(location.href),
isWeixin:i.isWeixin()
}, l(g);
});
}
});
},
cancel:function() {
b("用户没有登录");
}
});
}); else if (i.isWeixin()) {
var m = location.href;
h.getParam("successed") && (m = h.removeParam("successed", m)), h.getParam("token") && (m = h.removeParam("token", m)), 
m = m.replace("#wechat_redirect", ""), g = {
t:+new Date(),
crid:h.getCrid(),
url:encodeURIComponent(m),
token:h.cookie.get("token"),
redirect:encodeURIComponent(m),
collecturl:encodeURIComponent(m),
isWeixin:i.isWeixin()
}, g.token ? l(g) :window.location.href = e + "?crid=" + g.crid + "&url=" + g.url + "&redirect=" + g.redirect + "&collecturl=" + g.collecturl + "&isWeixin=" + g.isWeixin + "&t=" + g.t;
} else b("只有在微信和APP环境中，才可以使用收藏功能。");
var n = function(a) {
d.showConfirm("收藏失败，是否重试？", !0, {
labelConfirm:"重试",
confirm:function() {
l(g);
},
cancel:function() {
a();
}
});
};
});
}, b.deleteCollect = function(a) {
return new e(function(b, d) {
var e = j.remove;
i.isApp2() ? f.getUrid().then(function(f) {
c.ajax({
url:e,
data:{
collectid:a,
urid:f
},
dataType:"jsonp",
jsonpCallback:"Mucard_callback",
success:function(a) {
0 == a.status ? b() :d();
},
error:function() {
d();
}
});
}) :i.isWeixin() && c.ajax({
url:e,
data:{
collectid:a,
token:h.cookie.get("token")
},
dataType:"jsonp",
jsonpCallback:"Mucard_callback",
success:function() {
b();
},
error:function() {
d();
}
});
});
};
}), define("scripts/custom", [ "./environment", "./vendor/zepto", "./tpl/customForm", "./tpl/template", "./utils", "./message", "./tpl/loading", "./tpl/dialog", "./vendor/promise", "./promo", "./tpl/promoHtml", "./weixinJs", "wxjs", "./vendor/sha1" ], function(a, b) {
var c = a("./environment"), d = a("./tpl/customForm"), e = a("./utils"), f = a("./vendor/promise"), g = a("./message"), h = a("./promo"), i = a("./weixinJs"), j = function() {
var a = MugedaUrl.current.getQueryObj().m_promo;
return a && new MugedaUrl("http://a?" + a).getQueryObj() || {};
}(), k = !!j.promoResult && $.cookie.get("token") === j.activityToken, l = null, m = MugedaUrl.current.getQueryObj().crid;
b.saveCardParam = function(a) {
l = a;
}, b.getCardParam = function() {
return l || {};
};
var n = null;
b.setLastFormData = function(a) {
n = a;
}, b.activeCustom = function(a) {
var b = function(a) {
a = a.split("/");
for (var b = 0; b < a.length; b++) a[b] = b < a.length - 1 ? "." + a[b] + " .layer" :"." + a[b];
a = a.join(" ");
try {
return $(".MugedaStage " + a);
} catch (c) {
return $();
}
};
if (e.isCssMode()) {
if (window.data = window.data || {}, window._mrmcp && _mrmcp.customInfo && _mrmcp.customInfo.images) {
var c = _mrmcp.customInfo.images;
c.forEach(function(a) {
var c = b(a.name).css("background-image").match(/url\('*(.+?)'*\)/);
c = 2 == c.length ? c[1] :"", data[a.name] = {
obj:[ {
cardRefParam:a.type,
group:a.group,
src:c
} ]
};
});
}
for (var d in a) if (a.hasOwnProperty(d)) {
var f = a[d], g = b(d), h = window.data[d] || {};
if (h.defined = !0, h.obj && h.obj[0]) {
var i = h.obj[0].cardRefParam;
if ("image" == i || "signature" == i || "masked" == i) {
try {
f = JSON.parse(f);
} catch (j) {
f = {
u:f
};
}
if (h.obj[0].oriSrc = h.obj[0].src, h.obj[0].srcUserImg = f.u, h.obj[0].src = f.u, 
new Image().src = f.u, g.css("background-image", "url('" + f.u + "')"), "signature" == i) {
var k = parseInt(g.css("width")) / 2 + "px", l = parseInt(g.css("height")) / 2 + "px";
g.css("border-top-left-radius", k + " " + l), g.css("border-top-right-radius", k + " " + l), 
g.css("border-bottom-right-radius", k + " " + l), g.css("border-bottom-left-radius", k + " " + l);
}
}
} else g.children().html(f);
}
for (var m in a) if (a.hasOwnProperty(m)) {
for (var d in window.data) if (window.data.hasOwnProperty(d) && !window.data[d].defined) {
var g = b(window.data[d].obj[0].group);
g && g.hide();
}
break;
}
}
}, b.bindWeiParamater = function() {
if (e.isCssMode()) {
var a = _mrmcp.metadata;
if (!a) return;
var b = a && a.weixinTitle ? a.weixinTitle :"卡司令", c = a && a.weixinDesc ? a.weixinDesc :"请定义贺卡描述", d = _mrmcp.creative_path + a.thumb;
return b = Q(b), c = Q(c), b = b.replace(/\{\{[a-zA-Z0-9]+\}\}/g, ""), c = c.replace(/\{\{[a-zA-Z0-9]+\}\}/g, ""), 
b = R(b), c = R(c), {
mtitle:b,
mdesc:c,
thumb:d
};
}
}, b.defineWeixinBridge = function(a) {
e.isCssMode() && z(a);
}, b.exportCustomFunction = function(a) {
c.isPublic() && (cardFrame.getFormHTML = function() {
return b.getFormHTML(a);
}, cardFrame.customConfirm = b.customConfirm);
}, b.getFormHTML = function(a) {
var b = C();
return b ? (B(b, a || {}), d(b)) :null;
}, b.hookMugedaCard = function(a) {
v(window, "activateCustomParameters", function(b) {
MugedaCard && MugedaCard.data ? u(a) :b();
}), v(window, "MugedaCard", null, function(a) {
v(a, "showAudioControl", function(a, b) {
A.apply(this, b);
}, function(a) {
window.showAudioControl = a;
}), v(a, "finalizeCustomParameters", function(a, b) {
p.apply(this, b);
}, function() {
window.finalizeCustomParameters = p;
}), v(a, "defineCustomParameters", function(a, c) {
b.defineCustomParametersV2.apply(this, c);
}, function() {
window.defineCustomParameters = b.defineCustomParametersV2;
}), v(a, "defineWechatParameters", function() {
b.defineWechatParameters.apply(this.args);
}, function() {
window.defineWechatParameters = b.defineWechatParameters;
});
}), v(window, "bindWeiEvent", function() {
z(window.weiParam);
});
};
var o = /[\x00-\x1F%\/\.#\?;:$,\+@&=\{\}\|\\^~\[\]'\<\>"]/g;
b.encodeURL = function(a) {
return a.replace(o, function(a) {
return encodeURIComponent(a);
});
};
var p = function(a, c, d) {
window.customImage(a, c, function(a, d) {
d = d || {};
var f = new MugedaUrl("http://a.com/?" + a), g = f.getQueryObj();
for (var h in g) if (g.hasOwnProperty(h)) {
var i = decodeURIComponent(g[h]);
delete g[h], h = decodeURIComponent(h), g[b.encodeURL(h)] = b.encodeURL(i);
}
g._v = "2";
var j = b.getCardParam().bizData;
for (var h in g) g.hasOwnProperty(h) && j && j[h] && delete g[h];
d.isCaipiao && d.caipiaoIsPaid && (g.caiPiaoCustomToken = cardFrame.getCustomObj().caiPiaoCustomToken), 
$(document).trigger("custom:setCustomObj", g);
var k = encodeURIComponent(e.base64.encode(f.getQuerystring()));
if (MugedaUrl.current.getQueryObj().custom = k, delete MugedaUrl.current.getQueryObj().m_profile, 
j && (MugedaUrl.current.getQueryObj().bizId = b.getCardParam().bizId), delete MugedaUrl.current.getQueryObj().customId, 
d.isCaipiao ? (e.config.MAX_CUSTOM_LENGTH = 0, d.caipiaoIsPaid || (MugedaUrl.current.getQueryObj().m_uselottery = 1, 
MugedaUrl.current.getQueryObj().buyCount = d.caipiaoCount || 1)) :delete MugedaUrl.current.getQueryObj().res_data, 
d.music) {
var l = decodeURIComponent(d.music);
/^\/\//.test(l) && (l = "http:" + l), MugedaUrl.current.getQueryObj().music = encodeURIComponent(l);
}
var m = MugedaUrl.current, n = m.getURL();
if (d.receiptCard) {
var o = encodeURIComponent(n), p = d["public"];
m = new MugedaUrl("https://weika.mugeda.com/card/invite_card.php/custom");
var r = m.getQueryObj();
r.redirect = o, r["public"] = p ? 0 :1, r.crid = e.getCrid(), n = m.getURL();
}
if (d.callback) n = d.callback(n), n && q(n, c); else {
var s = {
url:n,
cancel:!1,
callback:function() {
n = s.url, q(n, c);
}
};
if ($(document.body).trigger("custom:beforeNavigate", s), s.cancel) return void (c.cancel = !0);
n = s.url, q(n, c);
}
}, d);
};
c.isMu() && (Mu.finalizeCustomParametersV2 = p);
var q = function(a, c) {
var d = new MugedaUrl(a), f = e.base64.decode(decodeURIComponent(d.getQueryObj().custom)), h = new MugedaUrl("http://a.com/?" + f).getQueryObj(), i = likeable && likeable.some(function(a) {
return a === m;
});
if (i || a.length > e.config.MAX_CUSTOM_LENGTH || h.m_usep) {
var l = h.m_profile ? h.m_profile :"";
delete h.m_profile;
var n = h.m_usep ? 1 * h.m_usep :0;
delete h.m_usep;
var o = {};
for (var p in h) h.hasOwnProperty(p) && (o[decodeURIComponent(p)] = h[p]);
delete o._v, o = b.encodeURL(JSON.stringify(o));
var q = i || a.length > e.config.MAX_CUSTOM_LENGTH ? 1 :0;
q && delete d.getQueryObj().custom, delete h.m_usep;
var s = {
m_usep:n,
m_useid:q,
m_profile:l,
crid:e.getCrid()
};
q && (s.custom = o), d.getQueryObj().m_uselottery && (delete d.getQueryObj().m_uselottery, 
s.m_uselottery = 1, s.partnerId = 800109), d.getQueryObj().buyCount && (s.buyCount = d.getQueryObj().buyCount, 
delete d.getQueryObj().buyCount), s.url = b.encodeURL(d.getURL());
var t = "http://weika.mugeda.com/server/card_custom.php/open" + (i ? "?token=" + $.cookie.get("token") :""), u = {
data:s,
url:t,
goOn:!0,
server:!0
};
$(document).trigger("custom:beforeCustom", u), s = u.data, i && (s.customTime = +new Date());
var v = '<form action="' + u.url + '" method="post">';
for (var w in s) s.hasOwnProperty(w) && (v += '<input type="hidden" name="' + w + '" value="' + s[w] + '"/>');
v += "</form>";
var x = $(v);
s.m_uselottery ? (window.alert = function() {}, u.goOn && x.submit()) :r(c, function() {
u.goOn && x.submit();
});
} else r(c, function() {
function b() {
g.showLoading("正在跳转...");
try {
c.goOn && window.open(a, "_self");
} catch (b) {
msm.m(b, this);
}
}
var c = {
url:a,
goOn:!0
};
$(document).trigger("custom:beforeCustom", c), !cardFrame.promo || !cardFrame.promo.getPromoInfo || j.promoResult && k ? b() :(a = a.replace(/m_promo=.*(?:&|$)/i, ""), 
cardFrame.promo.getPromoInfo().then(function(c) {
var d = new MugedaUrl(a).getQueryObj(), f = d.custom ? e.base64.decode(decodeURIComponent(d.custom)).split("&") :[], f = [];
f.push("activityToken=" + $.cookie.get("token"));
for (var g in c) !c.hasOwnProperty(g) || c[g] instanceof Function || f.push(g + "=" + c[g]);
a += "&m_promo=" + encodeURI(e.base64.encode(f.join("&"))), a += "&m_dgss=1", b();
}, function(a) {
!1 === a ? b() :a && a.error.indexOf("Prize no chance") >= 0 ? g.showConfirm("您已经定制过一次生日好礼的微卡，活动期间礼券有限，每人只能定制一次。是否确认继续定制其他信息?", !0, {
confirm:function() {
b();
},
cancel:function() {
g.hideConfirm();
}
}) :g.showConfirm(a && a.error || "未知错误", !1, {
confirm:function() {
g.hideConfirm();
}
});
}));
});
}, r = function(a, b) {
window.alert = function() {};
var c = {
callback:b,
event:a
};
$(document).trigger("cardview:confirmMessage", c), c.cancel || (a.cancel = !0, n.msg ? g.showConfirm(n.msg, !1, {
confirm:function() {
b(), a.callback();
}
}) :(b(), a.callback()));
};
b.defineWechatParameters = function(a) {
window.weiParam || (window.weiParam = {});
for (var b in a) weiParam[b] = a[b];
weiParam.success_share_callback_report = function(a) {
window.rpWX && window.rpWX("share", a), (weiParam.success_share_callback || function() {})(a);
var b = MugedaUrl.current.getQueryObj().m_bizId;
cardFrame.promotionDisabled || b || h.showPromo(e.getCrid()), $(document.body).trigger("weixin:shareOK");
}, weiParam.defined = !0;
try {
z(window.weiParam);
} catch (c) {}
}, c.isMu() && setTimeout(function() {
b.defineWechatParameters(Mu.param.weiParamater);
}), b.finalizeCustomParametersV2 = p, b.defineCustomParametersV2 = function(a, b) {
window.MugedaCard || (window.MugedaCard = {}), MugedaCard.data = data = MugedaCard.data || {};
for (var c = 0; c < b.length; c++) for (var d = b[c], e = d.formName || new Date().getTime() + "" + MugedaCard.sum++, f = d.formDescription, g = d.mugedaObj, h = d.userUndefined, i = data[e] = {
des:f,
userUndefined:h,
obj:(data[e] ? data[e].obj :[]) || []
}, j = 0; j < g.length; j++) {
var k = g[j].name, l = g[j].attribute;
if ("receipt" == l) i.type = l; else if ("data" != l) {
for (var m = k.split("/"), n = {
scene:a
}, o = 0; o < m.length; o++) {
if (!n.scene) throw "getObjectByName error!";
n = n.scene.getObjectByName(m[o]);
}
n && (n.cardRefParam = l, i.obj.push(n));
}
}
Mugeda.getMugedaObject().evt && (Mugeda.getMugedaObject().evt.stopLoad = !0), activateCustomParameters();
};
var s = {};
b.setUserWeixinParam = function(a) {
"微信转发标题" != a.title && (s.ftitle = a.title), "微信转发描述" != a.desc && (s.fdesc = a.desc), 
a.thumb && "http://url" != decodeURIComponent(a.thumb) && (s.img_url = decodeURIComponent(a.thumb)), 
b.defineWechatParameters(s);
}, c.isMu() && Mu.param && Mu.param.bizData && Mu.param.bizData.shareInfo && b.setUserWeixinParam(Mu.param.bizData.shareInfo);
var t = function(a) {
return new f(function(b, c) {
var d = new Image();
d.src = a, d.onload = function() {
b(d);
}, d.onerror = function() {
c(d);
};
});
}, u = function(a) {
var b = function() {
for (var a in MugedaCard.data) if (MugedaCard.data.hasOwnProperty(a)) {
var b = MugedaCard.data[a];
!b.handled && b.userUndefined && b.userUndefined();
}
}, c = 0;
for (var d in a) if (a.hasOwnProperty(d) && 0 != d.indexOf("_")) {
var e = MugedaCard.data[d];
if (null == e && "string" == typeof d && d.length >= 5 && 0 == d.indexOf("form")) {
var g = d.replace("form", "");
g = g.substr(0, 1).toLowerCase() + g.substr(1), e = MugedaCard.data[g];
}
if (!e) continue;
e.handled = !0, e.value = a[d];
for (var h = 0; h < e.obj.length; h++) {
var i = e.obj[h], j = i.cardRefParam;
if ("image" == j || "signature" == j || "masked" == j) {
c++;
try {
var k = JSON.parse(a[d]);
} catch (l) {
k = {
u:a[d],
l:0,
t:0,
w:0,
h:0
};
}
!function(a, b) {
f.all([ t(b.u, i) ]).then(function(d) {
var e = d[0], f = a.dom, g = a.width, h = a.height, i = e.width, j = e.height, k = b.w || i, l = b.h || j, m = g / k, n = h / l, o = i * m, p = j * n, q = b.l * m, r = b.t * n, s = document.createElement("div");
a.dom.parentElement.replaceChild(s, a.dom), a.oriSrc = a.src, s.className = f.className, 
s.style.cssText = f.style.cssText, "image" == a.cardRefParam || "masked" == a.cardRefParam ? (s.appendChild(f), 
f.setAttribute("style", null), f.className = "", f.style.width = o + "px", f.style.height = p + "px", 
f.style.clip = "rect(" + r + "px " + (q + k * m) + "px " + (r + l * n) + "px " + q + "px)", 
f.style.position = "absolute", f.style.marginLeft = -q + "px", f.style.marginTop = -r + "px", 
a.src = e.src, a.srcUserImg = e.src) :"signature" == a.cardRefParam && (a.srcUserImg = e.src, 
s.style.cssText += "background-image: url(" + e.src + ");background-size:" + o + "px " + p + "px;background-position: " + -q + "px " + -r + "px;"), 
a.dom = s, 0 == --c && Mugeda.getMugedaObject().evt && Mugeda.getMugedaObject().evt.goOnLoad();
}, function() {
0 == --c && Mugeda.getMugedaObject().evt && Mugeda.getMugedaObject().evt.goOnLoad();
});
}(i, k);
} else i[i.cardRefParam] = a[d];
}
}
b(), Mugeda.getMugedaObject().evt && 0 == c && Mugeda.getMugedaObject().evt.goOnLoad();
};
b.activateCustomParametersV2 = u;
var v = function(a, b, c, d) {
var e = null;
Object.defineProperty(a, b, {
set:function(a) {
e = a, $.isFunction(d) && d(a);
},
get:function() {
return $.isFunction(c) ? function() {
var a = this, b = arguments, d = function() {
$.isFunction(e) && e.apply(a, b);
};
c(d, b);
} :e;
}
});
}, w = !1, x = {}, y = {};
Object.defineProperty(y, "imgUrl", {
get:function() {
return x.imgUrl || "http://cdn-cn.mugeda.com/weixin/card/i/card_logo_default.jpg";
},
set:function(a) {
a && (x.imgUrl = a);
}
}), Object.defineProperty(y, "desc", {
get:function() {
return x.desc || "请定义贺卡描述";
},
set:function(a) {
a && (x.desc = a);
}
}), Object.defineProperty(y, "title", {
get:function() {
return x.title || "卡司令";
},
set:function(a) {
a && (x.title = a);
}
}), Object.defineProperty(y, "url_callback", {
get:function() {
return $.isFunction(x.url_callback) ? x.url_callback() :O();
},
set:function(a) {
a && (x.url_callback = a);
}
}), Object.defineProperty(y, "link", {
get:function() {
return $.isFunction(x.url_callback) ? x.url_callback() :O();
}
});
var z = function(a) {
if (y.imgUrl = s.img_url || a.img_url || a.thumb, y.desc = s.fdesc || a.fdesc || a.desc || a.mdesc, 
y.title = s.ftitle || a.ftitle || a.title || a.mtitle, y.url_callback = a.url_callback, 
c.isApp() && window.mucard && mucard.share && mucard.share(y.title, y.desc, y.imgUrl, y.url_callback), 
window.WeixinJSBridge && WeixinJSBridge._hasInit !== !1) {
w = !0;
var b = i.wxjs_status;
b.newapi ? i.getWx().then(function(c) {
[ {
status:"friend_share_ok",
event:"onMenuShareAppMessage",
cb:"send",
ac:"转发"
}, {
status:"timeline_share_ok",
event:"onMenuShareTimeline",
cb:"share",
ac:"分享"
}, {
status:"qq_share_ok",
event:"onMenuShareQQ",
cb:"QQ",
ac:"qq"
}, {
status:"weibo_share_ok",
event:"onMenuShareWeibo",
cb:"weibo",
ac:"微博"
} ].forEach(function(d) {
var e = {
success:function() {
(a.success_share_callback_report || function() {})(d.cb), MugedaTracker && MugedaTracker.fireEvent({
category:"微卡",
action:d.ac,
label:"i=" + P() + "&t=" + new Date().getTime(),
value:0
});
},
cancel:function() {}
};
Object.defineProperty(e, "imgUrl", {
get:function() {
return y.imgUrl;
}
}), Object.defineProperty(e, "desc", {
get:function() {
return y.desc;
}
}), Object.defineProperty(e, "title", {
get:function() {
return y.title;
}
}), Object.defineProperty(e, "link", {
get:function() {
return y.url_callback;
}
}), b[d.status] && c[d.event](e);
});
}) :[ {
event:"menu:share:appmessage",
action:"sendAppMessage",
mes1:"send_app_msg:confirm",
mes2:"send_app_msg:ok",
cb:"send",
ac:"转发"
}, {
event:"menu:share:timeline",
action:"shareTimeline",
mes1:"share_timeline:confirm",
mes2:"share_timeline:ok",
cb:"share",
ac:"分享"
} ].forEach(function(b) {
window.WeixinJSBridge.on(b.event, function() {
window.WeixinJSBridge.invoke(b.action, {
appid:"wx75babd529e23776c",
img_url:y.imgUrl,
img_width:128,
img_height:128,
link:y.link,
desc:y.desc,
title:y.title
}, function(c) {
(c.err_msg == b.mes1 || c.err_msg == b.mes2) && ((a.success_share_callback_report || function() {})(b.cb), 
MugedaTracker && MugedaTracker.fireEvent({
category:"微卡",
action:b.ac,
label:"i=" + P() + "&t=" + new Date().getTime(),
value:0
}));
});
});
});
} else document.addEventListener("WeixinJSBridgeReady", function() {
z(a);
});
};
c.Mu && (b.getBackgroundAudio = c.Mu.backgroundAudio || "");
var A = function(a, c, d) {
var e = null;
if (e = c && c.src ? c :a.getObjectByName(c), b.getBackgroundAudio = e ? e :"", 
e.src) {
var f = e.play;
e.play = function() {
e.muted = !1, f.call(e), e._playing || (cardFrame.setAudioState("load"), setTimeout(function() {
"load" == l && cardFrame.setAudioState("stop");
}, 3e3)), e._playing = !0;
};
var g = e.pause;
e.pause = function() {
e._playing = !1, e.muted = !0, g.call(e);
};
var h = function(b, c, d) {
var e = new MugedaCss3.aObject({
guid:Mugeda.guidGen(),
type:2005,
param:{
imageSrc:d || "",
rawWidth:b || 32,
rawHeight:c || 25,
left:0,
right:b,
top:0,
bottom:c,
scaleX:1,
scaleY:1,
rotate:0,
lineWidth:1,
alpha:1,
width:b,
height:c
}
});
return a.appendChild(e), e.width = b, e.height = c, e.top = -80, e.left = 275, e;
}, i = h(32, 32, "close_button.png");
i.dom.addEventListener("load", function() {
i.setSrc ? (i.top = 8, i.dom.style.cssText += "position: absolute; left:0; top: 0;background-size:contain;", 
i.dom.setAttribute("data-audio-icon", 1), l && cardFrame.setAudioState(l), $(window).trigger("resize")) :(i.setSrc = !0, 
i.src = "data:image/png;base64,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");
});
var j = h(32, 32, "close_button.png");
j.dom.addEventListener("load", function() {
j.setSrc ? (j.top = 8, j.dom.style.cssText += "position: absolute; left:0; top: 0;background-size:contain;", 
j.dom.setAttribute("data-audio-icon", 1), l && cardFrame.setAudioState(l), $(window).trigger("resize")) :(j.setSrc = !0, 
j.src = "data:image/png;base64,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");
});
var k = h(32, 32, "close_button.png");
k.dom.addEventListener("load", function() {
k.setSrc ? (k.top = 8, k.dom.style.cssText += "position: absolute; left:0; top: 0; width: 20px; height: 20px;margin:6px 0 0 6px;", 
k.dom.setAttribute("data-audio-icon", 1), l && cardFrame.setAudioState(l), $(window).trigger("resize")) :(k.setSrc = !0, 
k.src = "images/audioloading.gif");
});
var l = null;
cardFrame.setAudioState = function(a) {
switch (a) {
case "stop":
d ? (j.visible = !1, i.visible = !1, k.visible = !1) :(j.visible = !1, i.visible = !0, 
k.visible = !1);
break;

case "play":
j.visible = !0, i.visible = !1, k.visible = !1, l != a && (e.playTimeout && clearTimeout(e.playTimeout), 
e.playTimeout = setTimeout(function() {
e.pause();
}, 9e4));
break;

case "load":
j.visible = !1, i.visible = !1, k.visible = !0;
}
l = a;
};
var m = function() {
k.visible || (i.visible ? e.play() :e.pause());
};
i.addEventListener("inputend", m), j.addEventListener("inputend", m), cardFrame.setAudioState("stop");
var n = function() {
var a = e.currentTime, b = function() {
e.currentTime != a ? c() :setTimeout(b, 100);
};
setTimeout(b, 10);
var c = function() {
cardFrame.setAudioState("play"), e._playing = !0;
};
};
e.addEventListener("playing", function() {
n();
}), e.autoplay && n(), e.addEventListener("pause", function() {
cardFrame.setAudioState("stop");
});
}
}, B = function(a, b) {
$.isArray(a.items) && a.items.forEach(function(a) {
b.hasOwnProperty(a.id) && (a.valueCustom = b[a.id]);
});
}, C = function() {
var a = [];
if (e.isCssMode()) {
var b = $(".定制");
b.each(function() {
var b = $(this).attr("onclick"), c = D(b);
c && a.push(c);
});
} else if (window.Mugeda && Mugeda.getMugedaObject) {
var c = Mugeda.getMugedaObject();
if (c && c.scene) {
var d = c.scene, f = d.getObjectByName("定制");
if (f && f.param && "form" == f.param.action && f.param.form) {
try {
var g = JSON.parse(f.param.form);
} catch (h) {}
g && a.push(g);
} else {
var i = G(c.aniData, "定制");
0 == i.length && (i = G(c.aniData)), i.forEach(function(b) {
try {
var c = JSON.parse(b.param.form);
} catch (d) {}
c && a.push(c);
});
}
}
}
var j = null;
if (1 == a.length && (j = a[0]), a.length > 1) for (var k = 0; k < a.length; k++) if (a.items && $.isArray(a.items) && a.some(function(a) {
return a.description.indexOf("收卡人") > -1;
})) {
j = a[k];
break;
}
return j;
}, D = function(a) {
var b = new Function("MugedaBehavior", a), c = null, d = {
popupForm:function(a) {
c = a;
}
};
return b(d), c;
}, E = {}, F = {}, G = function(a, b) {
E = {}, F = {}, H(a);
var c = [], d = {
action:"form"
};
return b && (d.name = b), I(a.layers, d, c), c;
}, H = function(a) {
E = function(a) {
var b = {};
return (a.symbols || []).forEach(function(a) {
b[a.id] = a;
}), b;
}(a), F = {};
}, I = function(a, b, c) {
a.forEach(function(a) {
a.units && J(a.units, b, c);
});
}, J = function(a, b, c) {
a.forEach(function(a) {
a.objects && K(a.objects, b, c);
});
}, K = function(a, b, c) {
a.forEach(function(a) {
M(a, b, c);
});
}, L = function(a, b) {
var c = E[a];
if (c.layers) {
var d = [];
return I(c.layers, b, d), d;
}
}, M = function(a, b, c) {
if (a.param) {
var d = 0, e = 0;
for (var f in b) e++, b.hasOwnProperty(f) && a.param[f] == b[f] && d++;
if (d == e && c.push(a), 2014 == a.type && a.items.forEach(function(a) {
M(a, b, c);
}), 2021 == a.type) {
var g = a.param.symbolId, h = L(g, b);
h.forEach(function(a) {
c.push(a);
});
}
}
};
b.customConfirm = function(a, b, c) {
MugedaUrl.current.getQueryObj().customId = a, b && (MugedaUrl.current.getQueryObj().m_bizId = b), 
c && (MugedaUrl.current.getQueryObj().music = c), location.href = MugedaUrl.current.getURL();
}, b.activeCustomId = function(a) {
if (a = a || {}, MugedaCard.data) for (var b in a) if (a.hasOwnProperty(b)) {
var c = a[b], d = MugedaCard.data[b];
if ("_" == b.substr(0, 1)) continue;
if (null == d && "string" == typeof b && b.length >= 5 && 0 == b.indexOf("form")) {
var e = b.replace("form", ""), e = e.substr(0, 1).toLowerCase() + e.substr(1);
d = MugedaCard.data[e];
}
if (!d) continue;
d.handled = !0, d.value = c;
for (var f = 0; f < d.obj.length; f++) {
var g = d.obj[f];
"image" == g.cardRefParam || "signature" == g.cardRefParam || "masked" === g.cardRefParam || (g[g.cardRefParam] = c);
}
}
}, b.addFootToCustom = function(a, b, c) {
b = encodeURIComponent(e.escapeHTML(b)), c = encodeURIComponent(c), a.push("_footcontent=" + b), 
a.push("_footurl=" + c);
}, b.addCustomProfile = function(a, b, c, d) {
c = encodeURIComponent(c), b && (a.push("m_usep=" + (b ? 1 :0)), a.push("m_slogan=" + c), 
a.push("m_profile=" + d));
};
var N = [ "custom", "customId", "crid", "audio", "hash", "s", "plug", "res_data", "music" ];
b.appendUrlParamList = function(a) {
N.push(a);
};
var O = cardFrame.getWeixinSendUrl = function() {
var a = new MugedaUrl(location.href), b = a.getQueryObj();
for (var c in b) b.hasOwnProperty(c) && (N.indexOf(c) > -1 || 0 == c.indexOf("m_") || delete b[c]);
b.s = 1 * (isNaN(b.s) ? 0 :b.s) + 1, b.t = P();
var d = a.getURL(), e = {
url:d
};
return $(document).trigger("custom:forwardingURL", e), e.url;
}, P = function() {
var a = 0;
return window._gaq && window._gaq.push && _gaq.push(function() {
var b = _gat._getTrackers()[0];
a = b._visitCode();
}), a;
}, Q = function(a) {
if (e.isCssMode()) {
var b = new RegExp("\\{\\{(.*)\\}\\}", "g");
return a.replace(b, function(a, b) {
var c = $("." + b);
return c.children().html();
});
}
}, R = function(a) {
for (var b = " 　，。／；‘」、｀,.;[]`", c = 0, d = a.length; d > c; c++) {
var e = a[c];
if (-1 === b.indexOf(e)) break;
}
return a.substr(c);
};
}), define("scripts/customSound", [ "./message", "./vendor/zepto", "./tpl/loading", "./tpl/template", "./tpl/dialog", "./utils", "./environment", "./vendor/promise", "./user", "./photoservice", "./page", "./navibar", "./tpl/navibar", "./weixinJs", "wxjs", "./vendor/sha1" ], function(a, b) {
var c = a("./message"), d = a("./utils"), e = (a("./user"), a("./photoservice")), f = a("./vendor/promise"), g = a("./weixinJs");
b.audio = null, b.isCustSound = !1, b.addAudio = function(a) {
return new f(function(d, f) {
var g = function(a, g, h) {
switch (a) {
case 0:
e.uploadAudioBase64(h, g).then(function(a) {
b.audioPath = a, b.isCustSound = !0, d();
}, function(a) {
f(a);
});
break;

case 1:
c.showMessage("没有音频数据");
}
}, h = function() {
$(document.body).trigger("user:audio", {
viewMode:"select",
callback:function(a) {
a ? (b.audioPath = a.audioUrl, b.isCustSound = !0, d()) :f("没有选中语音");
},
type:"audio"
});
};
window.mucard ? mucard.useCustomAudio(g, h, a, !0) :f("当前版本的APP不支持定制声音。");
});
};
var h = function(a) {
var b = a.indexOf(".amr") == a.length - 4;
return b ? "" :a;
};
b.soundPlay = function(a, c, e) {
var f = !1, i = 0, j = 0, k = !1, l = a.find(".playing"), m = a.find(".still"), n = document.createElement("audio");
n.src = h(c), n.addEventListener("ended", function() {
f = !1, l.hide(), m.show(), e && (e.volume = 1);
});
var o = function() {
p && setTimeout(o, 1e3 / 12), null != q && a.css("left", q + 70 + "px"), null != r && a.css("top", r + 19 + "px");
}, p = !1, q = null, r = null, s = function(b) {
k = !0;
var c = b.touches[0].clientX - i, e = b.touches[0].clientY - j;
return 0 > c ? c = 0 :c > d.windowSize.width - a[0].offsetWidth && (c = d.windowSize.width - a[0].offsetWidth), 
0 > e ? e = 0 :e > d.windowSize.height - a[0].offsetHeight && (e = d.windowSize.height - a[0].offsetHeight), 
r = e, q = c, b.preventDefault(), !1;
}, t = function() {
k = !1, b.left = a.position().left, b.top = a.position().top, document.removeEventListener("touchmove", s, !1), 
document.removeEventListener("touchend", t, !1);
}, u = this;
a.bind("touchend", function() {
a.removeClass("moving"), p = !1, k || (f ? n.ended || (l.hide(), m.show(), u.wxLocalId ? g.getWx().then(function(a) {
a.stopVoice({
localId:u.wxLocalId
});
}) :(n.pause(), e && (e.volume = 1)), f = !1) :(f = !0, l.show(), m.hide(), n.currentTime > 0 && (n.currentTime = 0), 
u.wxLocalId ? g.getWx().then(function(a) {
a.playVoice({
localId:u.wxLocalId
}), a.onVoicePlayEnd({
success:function() {
l.hide(), m.show(), f = !1;
}
});
}) :(n.play(), e && (e.volume = .3))));
}, !1), a.bind("touchstart", function(b) {
i = b.touches[0].clientX - this.offsetLeft, j = b.touches[0].clientY - this.offsetTop, 
a.addClass("moving"), document.addEventListener("touchmove", s, !1), document.addEventListener("touchend", t, !1), 
p = !0, setTimeout(o, 1e3 / 12);
}, !1);
}, b.audioPath = null, b.left = 0, b.top = 0, b.ended = !1, b.init = function() {
b.audio = null == b.audio ? document.createElement("audio") :b.audio, b.audio.src = h(b.audioPath);
}, b.playAudio = function() {
b.audio.src !== b.audioPath && (b.audio.src = h(b.audioPath)), b.audio.play();
}, b.pause = function() {
b.audio.pause();
};
}), define("scripts/environment", [ "./vendor/zepto" ], function(a, b) {
var c = a("./vendor/zepto"), d = navigator.userAgent.toLowerCase();
b.isWeixin = function() {
return "micromessenger" == d.match(/MicroMessenger/i);
}, b.isApp1 = function() {
return null != window.mucard;
}, b.isApp2 = function() {
return d.indexOf("mugedacard") > -1;
}, b.isPublic = function() {
return "Mucard_public" == top._CUSTOM_TAG;
}, b.isMu = function() {
return null != window.Mu;
}, b.getClientName = function() {
return b.isWeixin() ? "weixin" :b.isApp1() ? "AppVer1" :b.isApp2() ? "AppVer2" :"other";
}, b.haveURL = function() {
return null != (window.webkitURL || window.URL);
}, b.isApp = b.isApp1, b.getHost = function() {
var a = location.host, b = [ "ads.oss-cn-hangzhou.aliyuncs.com", "mucard.mugeda.com", "cdn-cn.mugeda.com", "mucard.b0.upaiyun.com", "card.mugeda.com", "card-back.mugeda.com:8080" ], c = "";
return b.forEach(function(b) {
a == b && (c = b);
}), a.indexOf("mugeda.com") > -1 && (c = a), "" == c && (c = "mucard.mugeda.com"), 
"//" + c;
}, b.isOffical = function() {
return null != c.cookie.get("cookie_openid") && c.cookie.get("cookie_openid").length > 0;
};
}), function() {
"use strict";
function a(b, d) {
function e(a, b) {
return function() {
return a.apply(b, arguments);
};
}
var f;
if (d = d || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, 
this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = d.touchBoundary || 10, 
this.layer = b, this.tapDelay = d.tapDelay || 200, this.tapTimeout = d.tapTimeout || 700, 
!a.notNeeded(b)) {
for (var g = [ "onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel" ], h = this, i = 0, j = g.length; j > i; i++) h[g[i]] = e(h[g[i]], h);
c && (b.addEventListener("mouseover", this.onMouse, !0), b.addEventListener("mousedown", this.onMouse, !0), 
b.addEventListener("mouseup", this.onMouse, !0)), b.addEventListener("click", this.onClick, !0), 
b.addEventListener("touchstart", this.onTouchStart, !1), b.addEventListener("touchmove", this.onTouchMove, !1), 
b.addEventListener("touchend", this.onTouchEnd, !1), b.addEventListener("touchcancel", this.onTouchCancel, !1), 
Event.prototype.stopImmediatePropagation || (b.removeEventListener = function(a, c, d) {
var e = Node.prototype.removeEventListener;
"click" === a ? e.call(b, a, c.hijacked || c, d) :e.call(b, a, c, d);
}, b.addEventListener = function(a, c, d) {
var e = Node.prototype.addEventListener;
"click" === a ? e.call(b, a, c.hijacked || (c.hijacked = function(a) {
a.propagationStopped || c(a);
}), d) :e.call(b, a, c, d);
}), "function" == typeof b.onclick && (f = b.onclick, b.addEventListener("click", function(a) {
f(a);
}, !1), b.onclick = null);
}
}
var b = navigator.userAgent.indexOf("Windows Phone") >= 0, c = navigator.userAgent.indexOf("Android") > 0 && !b, d = /iP(ad|hone|od)/.test(navigator.userAgent) && !b, e = d && /OS 4_\d(_\d)?/.test(navigator.userAgent), f = d && /OS [6-7]_\d/.test(navigator.userAgent), g = navigator.userAgent.indexOf("BB10") > 0;
a.prototype.needsClick = function(a) {
switch (a.nodeName.toLowerCase()) {
case "button":
case "select":
case "textarea":
if (a.disabled) return !0;
break;

case "input":
if (d && "file" === a.type || a.disabled) return !0;
break;

case "label":
case "iframe":
case "video":
return !0;
}
return /\bneedsclick\b/.test(a.className);
}, a.prototype.needsFocus = function(a) {
switch (a.nodeName.toLowerCase()) {
case "textarea":
return !0;

case "select":
return !c;

case "input":
switch (a.type) {
case "button":
case "checkbox":
case "file":
case "image":
case "radio":
case "submit":
return !1;
}
return !a.disabled && !a.readOnly;

default:
return /\bneedsfocus\b/.test(a.className);
}
}, a.prototype.sendClick = function(a, b) {
var c, d;
document.activeElement && document.activeElement !== a && document.activeElement.blur(), 
d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), 
c.forwardedTouchEvent = !0, a.dispatchEvent(c);
}, a.prototype.determineEventType = function(a) {
return c && "select" === a.tagName.toLowerCase() ? "mousedown" :"click";
}, a.prototype.focus = function(a) {
var b;
d && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type && "month" !== a.type ? (b = a.value.length, 
a.setSelectionRange(b, b)) :a.focus();
}, a.prototype.updateScrollParent = function(a) {
var b, c;
if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
c = a;
do {
if (c.scrollHeight > c.offsetHeight) {
b = c, a.fastClickScrollParent = c;
break;
}
c = c.parentElement;
} while (c);
}
b && (b.fastClickLastScrollTop = b.scrollTop);
}, a.prototype.getTargetElementFromEventTarget = function(a) {
return a.nodeType === Node.TEXT_NODE ? a.parentNode :a;
}, a.prototype.onTouchStart = function(a) {
var b, c, f;
if (a.targetTouches.length > 1) return !0;
if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], 
d) {
if (f = window.getSelection(), f.rangeCount && !f.isCollapsed) return !0;
if (!e) {
if (c.identifier && c.identifier === this.lastTouchIdentifier) return a.preventDefault(), 
!1;
this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b);
}
}
return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, 
this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault(), 
!0;
}, a.prototype.touchHasMoved = function(a) {
var b = a.changedTouches[0], c = this.touchBoundary;
return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 :!1;
}, a.prototype.onTouchMove = function(a) {
return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, 
this.targetElement = null), !0) :!0;
}, a.prototype.findControl = function(a) {
return void 0 !== a.control ? a.control :a.htmlFor ? document.getElementById(a.htmlFor) :a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
}, a.prototype.onTouchEnd = function(a) {
var b, g, h, i, j, k = this.targetElement;
if (!this.trackingClick) return !0;
if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, 
!0;
if (a.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, g = this.trackingClickStart, 
this.trackingClick = !1, this.trackingClickStart = 0, f && (j = a.changedTouches[0], 
k = document.elementFromPoint(j.pageX - window.pageXOffset, j.pageY - window.pageYOffset) || k, 
k.fastClickScrollParent = this.targetElement.fastClickScrollParent), h = k.tagName.toLowerCase(), 
"label" === h) {
if (b = this.findControl(k)) {
if (this.focus(k), c) return !1;
k = b;
}
} else if (this.needsFocus(k)) return a.timeStamp - g > 100 || d && window.top !== window && "input" === h ? (this.targetElement = null, 
!1) :(this.focus(k), this.sendClick(k, a), d && "select" === h || (this.targetElement = null, 
a.preventDefault()), !1);
return d && !e && (i = k.fastClickScrollParent, i && i.fastClickLastScrollTop !== i.scrollTop) ? !0 :(this.needsClick(k) || (a.preventDefault(), 
this.sendClick(k, a)), !1);
}, a.prototype.onTouchCancel = function() {
this.trackingClick = !1, this.targetElement = null;
}, a.prototype.onMouse = function(a) {
return this.targetElement ? a.forwardedTouchEvent ? !0 :a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() :a.propagationStopped = !0, 
a.stopPropagation(), a.preventDefault(), !1) :!0 :!0;
}, a.prototype.onClick = function(a) {
var b;
return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, 
!0) :"submit" === a.target.type && 0 === a.detail ? !0 :(b = this.onMouse(a), b || (this.targetElement = null), 
b);
}, a.prototype.destroy = function() {
var a = this.layer;
c && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), 
a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), 
a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), 
a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1);
}, a.notNeeded = function(a) {
var b, d, e, f;
if ("undefined" == typeof window.ontouchstart) return !0;
if (d = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [ , 0 ])[1]) {
if (!c) return !0;
if (b = document.querySelector("meta[name=viewport]")) {
if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
if (d > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0;
}
}
if (g && (e = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), e[1] >= 10 && e[2] >= 3 && (b = document.querySelector("meta[name=viewport]")))) {
if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
}
return "none" === a.style.msTouchAction || "manipulation" === a.style.touchAction ? !0 :(f = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [ , 0 ])[1], 
f >= 27 && (b = document.querySelector("meta[name=viewport]"), b && (-1 !== b.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 :"none" === a.style.touchAction || "manipulation" === a.style.touchAction ? !0 :!1);
}, a.attach = function(b, c) {
return new a(b, c);
}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define("scripts/fastclick", [], function() {
return a;
}) :"undefined" != typeof module && module.exports ? (module.exports = a.attach, 
module.exports.FastClick = a) :window.FastClick = a;
}(), define("scripts/gallery", [ "./vendor/zepto", "./environment" ], function(a, b) {
var c = a("./vendor/zepto"), d = a("./environment"), e = [], f = 0;
c(window).bind("resize", function() {
for (var a = []; e.length; ) {
var c = e.pop();
c.container.isExist() && (b.adaptSize(c), a.push(c));
}
e = a;
}), b.adaptSize = function(a) {
var b = a.container.find(".imgItem"), c = a.container.innerWidth(), d = Math.floor((c + a.padding) / (a.minWidth + a.padding)), e = (c - d * a.padding) / d;
if (a.cover ? b.children("img ,.preload, .coverImage").height(e * a.ratio) :b.children("img ,.preload").height(e * a.ratio), 
b.css("width", 100 / d + "%"), a.oneline && !a.disable) {
var f = a.container.children(), g = f.length, h = 0;
"number" == typeof a.oneline ? h = a.oneline :(a.oneline = "a") ? h = Math.max(1, Math.floor(g / d)) :null != a.oneline && (h = 1);
var i = Math.max(g - d * h, 0);
f.show();
for (var b = [], j = 0; i > j; j++) {
var k = a.notRandom ? g - 1 - j :Math.floor(Math.random() * g);
b.indexOf(k) > -1 ? j-- :(b.push(k), f.eq(k).hide());
}
}
}, b.check = function(a, b, d) {
if (null == d) {
var e = b.container.find(".check"), f = b.container.find(".coverImage");
a ? (e.show(), f.css("opacity", .5)) :(e.hide(), f.css("opacity", 1));
} else c.isArray(d) || (d = [ d ]), d.forEach(function(c) {
var d = b.imageData[c].dom.find(".check"), e = b.imageData[c].dom.find(".coverImage");
a ? (d.show(), e.css("opacity", .5)) :(d.hide(), e.css("opacity", 1));
});
}, b.removeItem = function(a, b) {
c.isArray(b) || (b = [ b ]), b.forEach(function(b) {
var c = a.imageData[b];
delete a.imageData[b], c.dom.remove();
});
}, b.replaceImage = function(a, c, d) {
var e = a.imageData[c];
e.src = d;
var f = g(a, c);
e.dom.replaceWith(f), e.dom = f, b.adaptSize(a);
}, b.render = function(a) {
var d = null, e = "s" + f++;
for (var h in a.imageData) {
var i = a.imageData[h];
i.dom === !1 ? (i.dom = g(a, h), i.dom.attr("data-stamp", e), d ? i.dom.insertAfter(d) :i.dom.appendTo(a.container)) :i.dom.attr("data-stamp", e), 
d = i.dom;
}
a.container.children(":not([data-stamp=" + e + "])").each(function() {
c(this).remove()[0].data.dom = !1;
}), b.adaptSize(a);
};
var g = function(a, b) {
var d, e = a.imageData[b];
d = a.isAudio ? '<div class="check" style="position:absolute;right: 14px;bottom:35px;display:none;"><i class="fa-lg fa-check-circle fa-select fa"></i></div>' :'<div class="check" style="position:absolute;right: 14px;bottom:14px;display:none;"><i class="fa-lg fa-check-circle fa-select fa"></i></div>';
var f = '<div class="imgItem" style="float:left;overflow: hidden;padding:' + a.padding / 2 + 'px;position:relative;"> <div class="preload box-center" style="width:100%;height:100%;border:1px solid white;color:#999999;background: url(./images/refresh.gif) center center no-repeat"></div>' + (a.cover ? ' <div class="coverImage" style="display:none;width: 100%;height:100%;"></div>' :"") + ' <img style="display:none;width: 100%;" src="' + e.src + '"/ >' + (a.canSelect ? d :"") + (e.title ? ' <div class="text-center" style="white-space: nowrap;overflow: hidden;padding:3px 0;font-size:90%">' + e.title + "</div>" :"") + (c.isFunction(a.subTitle) ? '<div class="text-center subTitle">' + a.subTitle(e.raw) + "</div>" :"") + "</div>", g = c(f);
return c.isFunction(a.tplCallback) && a.tplCallback(g, e), g[0].data = e, g.find("img").bind("load", function() {
a.cover ? (a.innerCover ? c(this).prev(".coverImage").css("background-image", "url(" + c(this).attr("src") + ");background-size: contain;background-position: center center;background-repeat: no-repeat;").show().prev(".preload").remove() :c(this).prev(".coverImage").css("background-image", "url(" + c(this).attr("src") + ");background-size: cover;background-position: center;background-repeat: no-repeat;").show().prev(".preload").remove(), 
c(this).remove()) :c(this).show().prev(".preload").remove();
}).bind("error", function() {
var b = c(this), d = c('<small style="width:100%;height: 100%">加载失败<br />点击重试</small>');
c(this).prev().prev().append(d).css("background", "none");
var e = function(d) {
a.forceSelect || (c(this).css("background", "url(./images/refresh.gif) center center no-repeat"), 
c(this).find("small").remove(), b.attr("src", b.attr("src")), d.stopPropagation());
};
d.parent().one("click", e);
}), g;
};
b.filter = function(a, d) {
var e = {};
for (var f in a.imageData) {
var g = a.imageData[f].raw, h = !0;
if (c.isFunction(d)) h = d(g); else for (var i in d) {
var j = d[i];
if (g[i] != j) {
h = !1;
break;
}
}
h && (e[f] = a.imageData[f]);
}
var k = {};
c.extend(k, a), k.imageData = e, a.num = Object.getOwnPropertyNames(e).length, b.render(k);
}, b.renderCard = function(a, c) {
var e = {};
c.forEach(function(b) {
var c = "i" + f++, g = b.thumb.replace("[HOST]", d.getHost());
g = g.indexOf("//") > -1 ? g :a.base + b.crid + "/" + g, e[c] = {
id:c,
raw:b,
src:g,
title:b.title,
dom:!1
};
}), a.imageData = e, b.render(a);
}, b.init = function(a, d, g) {
var h = {};
d && d.forEach(function(a) {
var b = "i" + f++;
h[b] = {
id:b,
raw:a,
src:(g.base && -1 == (g.src ? a[g.src] :a).indexOf("http://") ? g.base :"") + (g.src ? a[g.src] :a),
title:g.title ? a[g.title] :null,
link:g.url ? a[g.url] :null,
dom:!1
}, g.isAudio || (h[b] = {
id:b,
raw:a,
src:(g.base && -1 == (g.src ? a[g.src] :a).indexOf("http://") ? g.base :"") + (g.src ? a[g.src] :a),
link:g.url ? a[g.url] :null,
dom:!1
});
}), e.push({
base:g.base,
container:a,
imageData:h,
minWidth:g.minWidth || 100,
padding:g.padding || 32,
ratio:g.ratio,
callback:g.callback,
cover:g.cover || !1,
canSelect:g.canSelect || !1,
oneline:g.oneline || !1,
subTitle:g.subTitle || null,
tplCallback:g.tplCallback || null,
innerCover:g.innerCover || !1,
notRandom:g.notRandom || !1,
isAudio:g.isAudio
}), g.render && b.render(e[e.length - 1]);
var i = -1;
if (a.on("click", ".imgItem", function(b) {
if (c.isFunction(g.callbackSubTitle) && c(b.target).parents("div.subTitle").length) g.callbackSubTitle(c(this)[0].data.raw, c(this)[0].data); else if (c.isFunction(g.callback)) {
var d = !1;
c(b.target).children().each(function() {
c(this).hasClass("audioCheck") && (d = !0, -1 !== i && i !== c(this).parent().index() && l[c(this).parent().index()].flag && (d = !1), 
i = c(this).parent().index());
}), c(b.target).each(function() {
c(this).hasClass("audioCheck") && (d = !0, -1 !== i && i !== c(this).parent().index() && l[c(this).parent().index()].flag && (d = !1), 
i = c(this).parent().index());
}), "i" != b.target.nodeName.toLowerCase() || c(b.target).hasClass("audioCheck") || (d = !0, 
-1 !== i && i !== c(b.target).parent().parent().index() && l[c(b.target).parent().parent().index()].flag && (d = !1), 
i = c(b.target).parent().parent().index()), d ? (l[i].flag ? (l[i].pause(), l[i].flag = !1, 
a.find(".imgItem .audioCheck").eq(i).css("backgroundImage", 'url("images/play.png")')) :(l[i].play(), 
a.find(".imgItem .audioCheck").eq(i).css("backgroundImage", 'url("images/pause.png")'), 
l[i].flag = !0), g.callback(c(this)[0].data.raw, c(this)[0].data)) :g.callback(c(this)[0].data.raw, c(this)[0].data);
}
}), d && /(\.mp3)$/.test(d[0])) {
a.find(".imgItem .preload").hide(), a.find(".imgItem .check").css("zIndex", "99999"), 
a.find(".imgItem").append("<i style='position: absolute;' class='audioCheck'></i>");
var j = a.find(".imgItem").eq(0).width() - 16, k = a.find(".imgItem").eq(0).height() - 16;
a.find(".imgItem .audioCheck").css({
left:"8px",
top:"8px",
height:k + "px",
width:j + "px",
background:"#ffffff",
borderRadius:"5px",
backgroundImage:'url("images/play.png")',
backgroundPosition:"center center",
backgroundRepeat:"no-repeat",
backgroundSize:"64px 64px"
});
var l = [];
d && d.forEach(function(b, c) {
var d = document.createElement("audio");
d.src = b, l[c] = d, l[c].index = c, l[c].flag = !1, l[c].addEventListener("ended", function() {
this.src = l[this.index].src, l[this.index].flag = !1, a.find(".imgItem .audioCheck").eq(this.index).css("backgroundImage", 'url("images/play.png")');
}, !1);
});
}
return e[e.length - 1];
};
}), define("scripts/like", [ "./utils", "./environment", "./vendor/zepto", "./message", "./tpl/loading", "./tpl/template", "./tpl/dialog", "./vendor/promise" ], function(a, b) {
var c = (a("./utils"), function(a) {
var b = Array.prototype.slice.call(arguments, 1);
return a.replace(/\{(\d+)\}/g, function(a, c) {
return b[c];
});
}), d = Object.defineProperty, e = MugedaUrl.current.getQueryObj(), f = function(a) {
$.ajax({
type:"get",
url:c("http://weika.mugeda.com/server/cards.php/like?crid={0}&token={1}{2}&t={3}", e.crid, $.cookie.get("token"), e.customId ? "&hash_id=" + e.customId :"", +new Date()),
dataType:"json",
success:function(b) {
0 === b.status ? a instanceof Function && a() :alert("您已经点过赞了！");
}
});
}, g = function(a) {
$.ajax({
type:"get",
url:c("http://weika.mugeda.com/server/cards.php/unlike?crid={0}&token={1}{2}&t={3}", e.crid, $.cookie.get("token"), e.customId ? "&hash_id=" + e.customId :"", +new Date()),
dataType:"json",
success:function(b) {
0 === b.status ? a instanceof Function && a() :alert(7 === b.status ? "获取授权信息失败。" :b.error);
}
});
}, h = function(a) {
$.ajax({
type:"get",
url:c("http://weika.mugeda.com/server/cards.php/likecount?crid={0}{1}&t={2}", e.crid, e.customId ? "&hash_id=" + e.customId :"", +new Date()),
dataType:"json",
success:function(b) {
0 === b.status ? a instanceof Function && a(b.count) :alert(7 === b.status ? "获取授权信息失败。" :b.error);
}
});
}, i = function(a) {
$.ajax({
type:"get",
url:c("http://weika.mugeda.com/server/cards.php/liked?crid={0}&token={1}{2}&t={3}", e.crid, $.cookie.get("token"), e.customId ? "&hash_id=" + e.customId :"", +new Date()),
dataType:"json",
success:function(b) {
a instanceof Function && a(0 !== b.status);
}
});
}, j = function() {
return likeable && likeable.some(function(a) {
return a === e.crid;
}) || /^!\/.+?\.json/.test(decodeURIComponent(e.crid));
}, k = '<style>.like{position:absolute;z-index:20;right:22px;bottom:36px;text-align:center;padding:4px}.like > .btn{width:37px;height:37px;border-radius:50%;margin:0 auto 4px;background:url(images/button.png) rgba(248,248,248,0.5) no-repeat;background-size:contain}.like > .cnt{height:12px;border-radius:6px;background:rgba(0,0,0,0.4);color:#fff}.like > .cnt > .text{display:block;font:normal 10px/12px tahoma}.heart{display:block;position:absolute;width:32px;height:32px;right:5px;bottom:100px;opacity:0;background:url(images/heart.png) no-repeat;background-size:contain;-webkit-transition:all linear .6s;transition:all linear .6s}.heart.dock{width:28px;height:28px;right:9px;bottom:24px;opacity:1}.like.liked > .btn{background-color:rgba(255,255,255,0.5);background-image:url(images/button_hl.png)}</style><div class="like"><div class="btn"></div><div class="cnt"><span class="text">0</span></div><div class="heart"></div></div>';
d(b, "show", {
value:function() {
if (j()) {
var a = $(k), b = (a.find(".btn"), a.find(".cnt>.text")), c = a.find(".heart");
h(function(a) {
b && b.text(a);
}), i(function(d) {
d && (a.addClass("liked"), c.addClass("dock")), a.on("click", function() {
a.hasClass("liked") ? g(function() {
a.removeClass("liked"), c.removeClass("dock"), b.text(+b.text() - 1);
}) :f(function() {
a.addClass("liked"), c.addClass("dock"), b.text(+b.text() + 1);
});
});
}), a.appendTo($("body"));
}
}
});
}), define("scripts/list", [ "./environment", "./vendor/zepto", "./navibar", "./tpl/navibar", "./tpl/template", "./message", "./tpl/loading", "./tpl/dialog", "./utils", "./vendor/promise", "./gallery", "./cardListData", "./tpl/listV2", "./tpl/help", "./page", "./custom", "./tpl/customForm", "./promo", "./tpl/promoHtml", "./weixinJs", "wxjs", "./vendor/sha1" ], function(a, b) {
var c = a("./environment"), d = (a("./navibar"), a("./utils")), e = a("./message"), f = a("./gallery"), g = a("./cardListData"), h = a("./tpl/listV2"), i = (a("./tpl/help"), 
a("./page"), a("./custom"));
window.ga = window.ga || function() {}, setTimeout(function() {
ga("set", "dimension1", c.getClientName());
}, 0);
var j = null, k = function() {
var a = location.pathname + location.search + location.hash;
a != j && (ga("send", "pageview", a, document.title), j = a);
}, l = function(b) {
MugedaUrl.current.getQueryObj().bid ? a.async("./tpl/list_custom_" + MugedaUrl.current.getQueryObj().bid, function(a) {
b(a({}));
}) :b(h({
showFoot:"1" != sessionStorage.getItem("hideToolBar")
}));
};
b.init = function(b) {
l(function(h) {
$(window).bind("hashchange", function() {
var a = parseInt(location.hash.replace("#", ""));
isNaN(a) && (a = 0), /search/.test(location.hash.replace("#", "")) ? (m.find(".list.clist .search p").remove(), 
m.find(".list.clist .main").hide(), m.find(".list.clist .search").show(), L("search")) :(m.find(".list.clist .main").show(), 
m.find(".list.clist .search").hide(), L(a)), k();
});
var j = {};
e.showLoading("加载微卡列表");
var l = function(a) {
var b = MugedaUrl.current.getQueryObj().bid ? "custom_list_" + MugedaUrl.current.getQueryObj().bid + ".json" :null;
g.fetch(b).then(function(b) {
d.reportGATime(), e.hideLoading(), a(b);
}, function() {
e.hideLoading(), e.showConfirm("加载微卡列表失败，是否重试?", !0, {
labelConfirm:"重试",
labelCancel:"取消",
confirm:function() {
l(a);
}
});
});
};
l(function(a) {
a && $.isArray(a.catalog) || e.showConfirm("加载微卡列表失败，是否重试?", !0, {
labelConfirm:"重试",
labelCancel:"取消",
confirm:function() {
location.reload();
}
});
var b = function(a) {
a.forEach(function(a) {
j[a.id] = a, $.isArray(a.items) && b(a.items);
});
};
b(a.catalog), window.dataCataLog = JSON.stringify(a.catalog);
var c = parseInt(location.hash.replace("#", ""));
isNaN(c) && (c = 0), /search/.test(location.hash.replace("#", "")) ? (m.find(".list.clist .search p").remove(), 
m.find(".list.clist .main").hide(), m.find(".list.clist .search").show(), L("search")) :(L(c), 
m.find(".list.clist .main").show(), m.find(".list.clist .search").hide()), k();
});
var m = $(h);
b.append(m);
var n = function(a) {
if (a.ad && "search" !== a.ad) {
var b = null;
try {
b = JSON.parse(a.url);
} catch (e) {
b = [ a.url ];
}
if ($.isArray(b)) {
var f = b[Math.floor(b.length * Math.random())];
f.indexOf("http://") > -1 || f.indexOf("https://") > -1 ? window.open(f, "_blank") :window.open(c.getHost() + "" + f, "_self");
}
} else if (MugedaUrl.current.getQueryObj().bid) {
var g = window.businessParam || {};
g.url = decodeURIComponent(MugedaUrl.current.getQueryObj().ref), window.customImage = function(b, c, d) {
var e = [];
i.addFootToCustom(e, g.content, g.url), e.push("_bid=" + encodeURIComponent(g.bid)), 
b = e.join("&"), d(b, {
callback:function(b) {
var c = new MugedaUrl(b).getQueryObj().custom;
window.open(location.href.substr(0, location.href.length - location.search.length - window.location.hash.length) + "?" + ("crid=" + ("1" == a.custom_logo ? "_" :"") + a.crid + (a.audio ? "&audio=" + a.audio :"")) + "&custom=" + c, "_self");
}
});
}, i.finalizeCustomParametersV2();
} else if (!a.addition || 0 != a.addition.indexOf("http://") && 0 != a.addition.indexOf("https://")) {
var h = new d.MugedaUrl(location.href.substr(0, location.href.length - location.search.length - window.location.hash.length)), j = h.getQueryObj();
j.crid = ("1" == a.custom_logo ? "_" :"") + a.crid, a.audio && (j.audio = a.audio);
var b = h.getURL();
a.addition && (b += "&" + a.addition), window.open(b, "_self");
} else window.open(a.addition);
}, o = '<div style="position: absolute;right:0;display:block;margin-top: -35px;color:#d60;text-align: right;padding-right: 13px;"><span style="display: inline-block;background-color: rgba(255, 255, 255, 0.75);border-radius:12.5px; padding: 2px 6px 1px 6px;"><i class="fa-official-card fa"></i></span></div>', p = function(a, b) {
b.raw.official_custom && c.isOffical() && !MugedaUrl.current.getQueryObj().bid && a.filter(".imgItem").first().children().eq(1).after($(o));
}, q = function(a) {
return "search" == a.ad ? '<a data-id="' + a.hashId + '" data-sid="' + a.sub_catogory_refid + '"><small class="noCallback" style="color:#888;white-space: nowrap;overflow: hidden;">' + a.title2 + ' <i class="fa fa-caret-down fa-rotate-270""></i></small></a>' :a.ad ? '<a data-id="' + a.cataId + '" data-sid="' + a.sub_catogory_refid + '"><small class="noCallback" style="color:#888;white-space: nowrap;overflow: hidden;">' + a.title2 + ' <i class="fa fa-caret-down fa-rotate-270""></i></small></a>' :'<a data-id="' + a.cataId + '" data-sid="' + a.sub_catogory_refid + '"><small class="noCallback" style="color:#888;white-space: nowrap;overflow: hidden;">更多' + a.title2 + ' <i class="fa fa-caret-down fa-rotate-270""></i></small></a>';
}, r = function(a) {
a.ad ? "1" == a.ad ? window.open(a.url, "_blank") :"search" == a.ad && (location.hash = a.hashId, 
m.find(".list.clist .search").hide()) :(location.hash = a.cataId, null != a.mainId && (B = a.mainId, 
E(B)));
}, s = m.find(".list.clist .main"), t = f.init(s.first(), null, {
minWidth:96,
src:"thumb",
title:"title",
padding:8,
base:c.getHost() + "/weixin/card/cards/",
ratio:140 / 124,
callback:n,
tplCallback:p
}), u = f.init(m.find(".list.clist .rec").first(), null, {
minWidth:96,
src:"thumb",
title:"title",
padding:8,
base:c.getHost() + "/weixin/card/cards/",
ratio:140 / 124,
callback:n,
tplCallback:p,
subTitle:q,
callbackSubTitle:r,
notRandom:!0
}), v = f.init(m.find(".list.clist .search").first(), null, {
minWidth:96,
src:"thumb",
title:"title",
padding:8,
base:c.getHost() + "/weixin/card/cards/",
ratio:140 / 124,
callback:n,
tplCallback:p,
subTitle:q,
callbackSubTitle:r,
notRandom:!0
}), w = m.find(".list.nav .line.red").hide(), x = m.find(".list.nav .cas"), y = m.filter(".list.cas-mask"), z = m.find(".list.nav .cas-frame"), A = m.find(".label-main"), B = null, C = function() {
x.hide(), y.hide(), z.hide(), B ? E(B) :w.hide();
}, D = function() {
x.show(), y.show(), z.show();
}, E = function(a, b) {
var c = (b || m.find('.list.nav .con .it[data-id="' + a + '"]')).children().offset();
null != c && w.css("margin-left", c.left + c.width / 2 - 21.5 + "px").show();
};
$(window).on("resize", function() {
E(B);
});
var F = function(a, b) {
var c = j[a];
if (0 == a) return w.hide(), void (location.hash = 0);
if (null != a && null != c) {
if (c.items && 0 == c.items.length) return void e.showMessage("列表为空");
if (w.show(), E(a, b), c.items) {
{
"none" == x.css("display");
}
c.items.length ? (D(), x.find(".hide").removeClass("more"), x.find(".more").show()) :C(), 
x.empty();
var d = !1;
if (c.items.forEach(function(a) {
if (0 != a.cards.length && !(5 == a.parent && a.cards && a.cards.length < 5 || a.hideCata)) {
if (a.hasNew) var b = $('<div class="item" data-id="' + a.id + '">' + a.title + '<span class="new-label"></span></div>').appendTo(x); else var b = $('<div class="item" data-id="' + a.id + '">' + a.title + "</div>").appendTo(x);
a.hide && (b.addClass("hide"), d = !0);
}
}), x.find(".item .selected").removeClass("selected"), x.find('.item[data-id="' + G + '"]').addClass("selected"), 
d) {
$('<div class="item more">更多' + c.title + "</div>").appendTo(x);
}
} else C(), location.hash = c.id, B = a;
}
}, G = null, H = m.find(".rec-frame"), I = "", J = m.find("#seachOk"), K = m.find("#seachText");
K.on("focus", function() {
$(".cfoot").hide();
}), K.on("blur", function() {
$(".cfoot").show();
}), K.on("keyup", function(a) {
I = K.val(), "" !== I && 13 == a.keyCode && (window.location.hash = "search=" + encodeURIComponent(I));
}), J.on("click", function() {
if (0 == K.width()) K.animate({
width:"175px",
border:"1px solid #bbbbbb",
paddingLeft:"4px"
}, 500, "ease-out", function() {
setTimeout(function() {
K[0].focus();
}, 100);
}); else {
var a = K.val();
"" !== a && (I = a, window.location.hash = "search=" + encodeURIComponent(a));
}
});
var L = function(a) {
if (G != a || "search" === a) {
if (I = decodeURIComponent(window.location.hash.slice(window.location.hash.indexOf("=") + 1)), 
G = a, 0 == a) return N();
H.addClass("highlight");
var b = "search" !== a ? j[a] :j;
null == b && ga("errorTracker.send", {
hitType:"event",
eventCategory:"异常undefined title",
eventAction:a,
eventLabel:navigator.userAgent + "|" + JSON.stringify(j).substr(0, 100) + "|" + window.dataCataLog.substr(0, 50) + "|" + location.href
});
var c = b.title, d = b.parent;
if (d > 0 ? (d = j[d].id, c = j[d].title + '<span style="font-family: simsun,arial,helvetica,clean,sans-serif;"> &gt; </span>' + c, 
document.title = b.title) :0 == d ? d = a :"search" === a && "" !== I && (d = 0, 
c = '搜索<span style="font-family: simsun,arial,helvetica,clean,sans-serif;"> &gt; </span>' + I), 
A.show().html(c), "search" !== a && s.show(), B = d, w.show(), E(d), "search" === a) {
if ("" !== I) {
var e = [], g = I.split(" "), h = new RegExp(g[0]);
for (var i in b) if (b.hasOwnProperty(i) && "0" !== i) if (h.test(b[i].title)) {
if (b[i].hasOwnProperty("items")) for (var k = 0; k < b[i].items.length; k++) for (var l = 0; l < b[i].items[k].cards.length; l++) b[i].items[k].cards[l].ad = "search", 
b[i].items[k].cards[l].hashId = b[i].items[k].id, b[i].items[k].cards[l].url = "/weixin/card/index.html?crid=" + b[i].items[k].cards[l].crid + "&audio=" + b[i].items[k].cards[l].audio, 
b[i].items[k].cards[l].title2 = "更多" + b[i].items[k].title, e.push(b[i].items[k].cards[l]); else if (b[i].hasOwnProperty("cards")) for (var k = 0; k < b[i].cards.length; k++) b[i].cards[k].ad = "search", 
b[i].cards[k].hashId = b[i].id, b[i].cards[k].url = "/weixin/card/index.html?crid=" + b[i].cards[k].crid + "&audio=" + b[i].cards[k].audio, 
b[i].cards[k].title2 = "更多" + b[i].title, e.push(b[i].cards[k]);
} else if (b[i].hasOwnProperty("items")) {
for (var k = 0; k < b[i].items.length; k++) if (h.test(b[i].items[k].title)) for (var l = 0; l < b[i].items[k].cards.length; l++) b[i].items[k].cards[l].ad = "search", 
b[i].items[k].cards[l].hashId = b[i].items[k].id, b[i].items[k].cards[l].url = "/weixin/card/index.html?crid=" + b[i].items[k].cards[l].crid + "&audio=" + b[i].items[k].cards[l].audio, 
b[i].items[k].cards[l].title2 = "更多" + b[i].items[k].title, e.push(b[i].items[k].cards[l]);
} else if (b[i].hasOwnProperty("cards")) for (var k = 0; k < b[i].cards.length; k++) h.test(b[i].cards[k].title) && (b[i].cards[k].ad = "search", 
b[i].cards[k].hashId = b[i].id, b[i].cards[k].url = "/weixin/card/index.html?crid=" + b[i].cards[k].crid + "&audio=" + b[i].cards[k].audio, 
b[i].cards[k].title2 = "更多" + b[i].title, e.push(b[i].cards[k]));
e.sort(function(a, b) {
return a.id - b.id;
});
var m = "";
if (e = e.filter(function(a) {
return "" == m ? (m = a.id, !0) :m == a.id ? !1 :m != a.id ? (m = a.id, !0) :void 0;
}), g.length > 1) for (var l = 1; l < g.length; l++) e = e.filter(function(a) {
var b = new RegExp(g[l]);
return b.test(a.title);
});
e = M(e), f.renderCard(v, e);
}
} else e = M(b.cards), f.renderCard(t, e);
var n = M(j[0].cards);
u.oneline = 1, f.renderCard(u, n), 0 == e.length && "" !== I && $("<p style='margin-left: 10px'>非常抱歉，暂时没有搜索到您需要的微卡！</p>").appendTo(".list.clist .search"), 
window.scrollTo(0, 0);
}
}, M = function(a) {
return a.filter(function(a) {
return c.isApp() ? "undefined" == typeof a.hide ? !0 :-1 === a.hide.toLowerCase().indexOf("a") ? !0 :!1 :c.isWeixin() ? "undefined" == typeof a.hide ? !0 :-1 === a.hide.toLowerCase().indexOf("w") ? !0 :!1 :"undefined" == typeof a.hide ? !0 :-1 === a.hide.toLowerCase().indexOf("o") ? !0 :!1;
});
}, N = function() {
if (j[0]) {
document.title = "推荐微卡", H.removeClass("highlight"), w.hide(), A.hide(), s.hide();
var a = M(j[0].cards);
u.oneline = "a", f.renderCard(t, []), f.renderCard(u, a);
}
};
y.on("click", function() {
C();
}), z.on("click", function() {
C();
}), m.on("click", ".list.nav .con .it", function() {
var a = $(this), b = a.data("id");
F(b, a);
}), x.on("click", ".item", function(a) {
var b = $(this);
if (b.hasClass("more") && !b.hasClass("hide")) return x.find(".hide").addClass("more"), 
b.hide(), void a.stopPropagation();
var c = b.data("id");
location.hash = c, C();
});
var O = m.find(".item-login");
c.isWeixin() ? (O.addClass("weixinBtn"), O.click(function() {
if (location.hash = "userInfo", "" == d.cookie.get("followed")) {
window.localStorage && localStorage.setItem && localStorage.setItem("chkAuth", "a");
var a = location.href.replace("#wechat_redirect", "");
location.href = "http://weika.mugeda.com/server/checkAuthStatus.php?url=" + encodeURIComponent(a);
} else $(document.body).trigger("weixin:official");
})) :c.isApp2() && (O.addClass("userBtn"), e.showLoading("加载用户框架"), a.async("./user", function(b) {
a.async("./userview", function() {
e.hideLoading(), b || e.showConfirm("加载用户框架，请检查网络状况，是否重试？", !0, {
labelConfirm:"重试",
labelCancel:"取消",
confirm:function() {
doUserLoad();
}
}), O.click(function() {
b.showUserForm({
callback:function(a) {
a && $(document.body).trigger("user:userInfo");
}
});
});
});
}));
var P = m.find(".item-help");
P.click(function() {
location.assign("list.html#255");
});
var Q = m.find(".item-about");
Q && Q.click(function() {
location.assign("about.html");
});
});
};
}), define("scripts/main", [ "./vendor/zepto", "./message", "./tpl/loading", "./tpl/template", "./tpl/dialog", "./zeptoExtra", "./page", "./vendor/fastclick", "./weiOfficial", "./tpl/weiofficial", "./navibar", "./tpl/navibar", "./environment", "./utils", "./vendor/promise", "./list", "./gallery", "./cardListData", "./tpl/listV2", "./tpl/help", "./custom", "./tpl/customForm", "./promo", "./tpl/promoHtml", "./weixinJs", "wxjs", "./vendor/sha1" ], function(a, b) {
var c = a("./vendor/zepto"), d = a("./message"), e = a("./zeptoExtra"), f = a("./page"), g = a("./vendor/fastclick"), h = a("./weiOfficial"), i = a("./utils"), j = a("./list"), k = a("./weixinJs");
b.init = function(a) {
if (d) {
if (!(c && e && f && g && h)) return d.hideLoading(), d.pageErr();
new g(document.body), h.init(), i.fixIOSInputProblem(c), k.init(), "#userInfo" === location.hash ? m() :"#photoView" === location.hash ? n() :"#audioView" === location.hash ? o() :"#collectView" === location.hash ? p() :null == a ? (d.showLoading("载入列表"), 
l()) :q();
}
};
var l = function() {
f.removeAll();
var a = f.setNewPage("list", {});
j.init(a.dom), f.addToLayout(a.id), f.setActive(a.id), d.hideLoading(), h.chk();
}, m = function() {
a.async("./userview", function(b) {
l(), a.async("./environment", function(c) {
c.isApp2() ? b.userInfoView() :c.isWeixin() && a.async("./weiOfficial", function(a) {
a.showAttendForm();
});
});
});
}, n = function() {
a.async("./userview", function(a) {
l(), m(), a.userPhotoView();
});
}, o = function() {
a.async("./userview", function(a) {
l(), m(), a.userAudioView();
});
}, p = function() {
a.async("./userview", function(a) {
l(), m(), a.userCollectView();
});
}, q = function() {
a.async("./cardview", function(a) {
var b = f.setNewPage("card", {
type:"scroll",
background:"transparent"
});
b.dom.css("min-height", 0).attr("id", "card-title"), a.init(b.dom), f.addToLayout(b.id), 
f.setActive(b.id), d.hideLoading(), window.messageMuteStage = 0, h.chk();
}), window.getWeiXinUrl = function() {
return window.location.href;
};
};
}), define("scripts/map_selector", [ "./page", "./vendor/zepto", "./tpl/mapselect", "./tpl/template", "./zeptoExtra" ], function(a, b) {
var c, d = (a("./page"), a("./tpl/mapselect")), e = a("./zeptoExtra"), f = {}, g = "", h = function(a) {
return "string" == typeof a;
}, i = {
lng:"",
lat:"",
keyword:"",
title:""
}, j = [], k = function(a, b) {
var d = "";
d = a ? a :e("#mapselect_place")[0].value, i.keyword = d, e("#mapselect_mapcontainer").css("opacity", 0), 
e("#mapselect_loading").show();
var f = new BMap.LocalSearch(g, {
renderOptions:{
map:c,
autoViewport:!0
},
pageCapacity:8,
onMarkersSet:function(a) {
if (a.length > 0) {
i.lng = a[0].marker.getPosition().lng, i.lat = a[0].marker.getPosition().lat, i.keyword = a[0].address + a[0].title, 
i.title = a[0].title, a[0].address || (i.keyword = a[0].title, i.title = a[0].title);
var c;
e.each(a, function(b, d) {
j.push(d), d.marker.addEventListener("click", function(e) {
i.lng = e.target.getPosition().lng, i.lat = e.target.getPosition().lat, i.keyword = a[b].address + a[b].title, 
i.title = a[b].title, a[b].address || (i.keyword = e.target.getTitle(), i.title = e.target.getTitle()), 
c = a[b].address + e.target.getTitle(), a[b].address || (c = e.target.getTitle());
var f = new BMap.InfoWindow("地址：" + c, {
enableMessage:!1,
width:230,
title:e.target.getTitle()
});
d.marker.openInfoWindow(f);
});
}), window.setTimeout(function() {
if (1 == a.length) {
c = a[0].address + a[0].title, a[0].address || (c = a[0].title);
var b = new BMap.InfoWindow("地址：" + c, {
enableMessage:!1,
width:230,
title:a[0].title
});
a[0].marker.openInfoWindow(b);
}
}, 1e3), b && e.isFunction(b) && b();
}
},
onSearchComplete:function() {
e("#mapselect_loading").hide(), e("#mapselect_mapcontainer").css("opacity", 1);
}
});
c.clearOverlays(), f.search(d), j = [], f.disableFirstResultSelection();
}, l = function() {
e("#mapselect_place").blur(), e("#mapselect_mapcontainer").css("opacity", 1), e("#mapselect_loading").hide(), 
e("#mapselect_place").on("focus", function(a) {
if (a.preventDefault(), a.stopPropagation(), !e(this).attr("hasBindAutoComplete")) {
var b = new BMap.Autocomplete({
input:"mapselect_place",
location:c,
onSearchComplete:function() {
e(".tangram-suggestion").css({
width:e(document).width() + "px"
}), e(".tangram-suggestion").find("table tr").on("tap", function() {
e(this).css("background-color", "#dedede");
});
}
});
b.setInputValue(f.keywords), e(this).attr("hasBindAutoComplete", !0), b.addEventListener("onconfirm", function(a) {
var b = a.item.value, c = b.province + b.city + b.district + b.street + b.business;
k(c);
});
}
});
}, m = {
bindMapEvent:function() {
e("#mapselect_search").click(function() {
k();
}), e("#mapselect_cancel").click(function() {
f.cancel && f.cancel(), e("#mapselect_wrap").hide(), e("#mapselect_place").focus();
}), e("#mapselect_confirm").click(function() {
window.mapselect_lng = i.lng, window.mapselect_lat = i.lat, window.mapselect_title = i.title, 
window.mapselect_keyword = i.keyword, f.success && f.success(i), e("#mapselect_wrap").hide(), 
e("#mapselect_place").focus();
}), e("#mapselect_place").click(function(a) {
a.stopPropagation(), e("#mapselect_wrap").css({
"z-index":1e5
});
}), e("#mapselect_place").blur(function() {
e("#mapselect_wrap").css({
"z-index":100
});
}), "" !== f.keywords && window.setTimeout(function() {
k(f.keywords, l);
}, 2e3);
},
init:function(a) {
function b() {
h(), i(), j(), m.bindMapEvent(a);
}
function h() {
c = new BMap.Map("mapselect_mapcontainer");
}
function i() {
var a = function(a) {
g = a && "全国" != a.name ? a.name :"北京市", c.setCenter(g);
}, b = new BMap.LocalCity();
b.get(a);
}
function j() {
var a = new BMap.NavigationControl({
anchor:BMAP_ANCHOR_BOTTOM_RIGHT,
type:BMAP_NAVIGATION_CONTROL_LARGE
});
c.addControl(a);
}
if (0 == e("#mapselect_wrap").length) {
a ? a.append(d({
initkeyword:f.keywords
})) :e("#stageParent").append(d({
initkeyword:f.keywords
}));
var k = !1, l = document.createElement("script");
l.type = "text/javascript", l.src = "http://api0.map.bdimg.com/getscript?v=1.5&ak=FOm6cLbES9zjrtvcDYndkwSR", 
document.getElementsByTagName("body")[0].appendChild(l), l.onload = function() {
k || (b(), k = !0);
};
} else e("#mapselect_wrap").show();
e("#mapselect_place").focus();
},
select:function(a) {
a && (a.keywords && h(a.keywords) && (f.keywords = a.keywords), a.container ? m.init(a.container) :m.init(), 
a.success && e.isFunction(a.success) && (f.success = a.success), a.cancel && e.isFunction(a.cancel) && (f.cancel = a.cancel));
}
};
b.select = m.select;
}), define("scripts/message", [ "./vendor/zepto", "./tpl/loading", "./tpl/template", "./tpl/dialog" ], function(a, b) {
var c, d = a("./vendor/zepto");
b.showMask = function() {
d(":focus").blur(), c ? c.show() :c = d('<div class="full-screen" style="z-index:99;background-color: rgba(0,0,0,0.3);"></div>').appendTo(document.body), 
window.messageMuteStage > 0 && c.hide();
}, b.hideMask = function() {
c && c.hide();
};
var e, f = [];
b.showLoading = function(c) {
f.push(c), b.showMask();
var d = a("./vendor/zepto");
if (e) e.show().find(".message").html(c); else {
var g = a("./tpl/loading")({
message:c
});
e = d(g).appendTo(document.body);
}
window.messageMuteStage > 0 && e.hide();
}, b.hideLoading = function(a) {
a ? f = [] :f.pop(), f.length ? b.showLoading(f.pop()) :(b.hideMask(), e && e.hide());
};
var g = null;
b.showConfirm = function(c, d, e) {
e = e || {}, b.showMask();
var f = a("./vendor/zepto");
c = c.split("\n");
var h = a("./tpl/dialog")({
message:c,
labelOK:e.labelConfirm,
labelNo:e.labelCancel,
confirm:d
});
g = f(h).appendTo(document.body), g.on("click", ".confirm", function(a) {
b.hideMask(), g.remove(), g = null, f.isFunction(e.confirm) && e.confirm(), a.preventDefault();
}), g.on("click", ".cancel", function() {
b.hideMask(), g.remove(), g = null, f.isFunction(e.cancel) && e.cancel(), event.preventDefault();
});
}, b.hideConfirm = function(a) {
if (a) {
if (b.hideMask(), null == g) return;
g.remove(), g = null;
}
};
var h, i, j, k = [];
b.showMessage = function(b, c) {
k.push(b);
var d = a("./vendor/zepto");
if (!h) {
var e = '<div style="position: absolute;top:70%;z-index:102;left:0;width:100%;text-align: center"><span style="background-color:#d60;color: white;padding: 4px 10px;border-radius: 4px;"></span></div>';
h = d(e).appendTo(document.body);
}
var f = function() {
j = null, k.length ? g(k.splice(0, 1)[0]) :(h.hide(), i = !1);
}, g = function(a) {
i || (h.show(), i = !0), h.find("span").html(a), j = setTimeout(f, 3e3);
};
i ? c && j && (clearTimeout(j), f()) :g(k.splice(0, 1)[0]);
};
var l = !1;
b.pageErr = function() {
l || (l = !0, b.showConfirm("加载页面失败，是否重新加载?\n您的网络状况不太好哦。", !0, {
labelConfirm:"重新加载",
labelCancel:"取消",
confirm:function() {
l = !1, b.showLoading("正在重载"), location.reload();
},
cancel:function() {
l = !1;
}
}));
}, b.setWeixinToolbarBotton = function() {
if ("undefined" != typeof WeixinJSBridge && WeixinJSBridge._hasInit !== !1) try {} catch (a) {}
};
}), define("scripts/musicPicker", [ "./vendor/zepto", "./page", "./navibar", "./tpl/navibar", "./tpl/template", "./environment", "./message", "./tpl/loading", "./tpl/dialog", "./tpl/musicPicker" ], function(a, b) {
var c = a("./vendor/zepto"), d = a("./page"), e = a("./navibar"), f = (a("./environment"), 
a("./tpl/musicPicker")), g = "http://mucard.mugeda.com/weixin/card/", h = window.location.href.indexOf("/index.html");
h >= 0 && (g = window.location.href.substr(0, h + 1)), b.selectMusic = function(a) {
var b = e.getNaviBar("挑选背景音乐", {
hideUserIcon:!0,
rightTpl:c('<span class="btn btnSubmit disabled">确定</span>'),
leftTpl:c('<span class="btn btnCancel">取消</span>'),
notFixed:!0
}), g = c(f());
g.children().first().before(b.navibarTpl), g.find(".musicFilter.scene").hide();
var h = d.setNewPage("musicPicker", {
background:"rgba(228,228,228,0.9)",
type:"fix",
transition:!0
});
window.Audio || (window.Audio = function(a) {
this.play = function() {}, this.pause = function() {}, this.load = function() {}, 
this.loop = !0, this.src = a, this.paused = !1, this.addEventListener = function() {}, 
this.removeEventListener = function() {};
});
var i = new Audio();
this.activeAudio = i, this.activeLi = this.selectedLi;
var j = null, k = this, l = "http://cdn-cn.mugeda.com/weixin/card/", m = function(a) {
i.pause(), g.find(".btnSubmit").css("color", "disabled"), a = a || {}, a.style = a.style || -1;
var b = c(g.find(".musicFilter.style")), d = c(g.find("#musick_picker_list")), e = j || {}, f = e.style || {}, h = (e.scene || {}, 
(e.music || []).filter(function(b) {
return b.style.some(function(b) {
return b === a.style;
}) && 0 === b.hide;
})), n = 0;
for (b.find(".custom").remove(), n = 0; n < f.length; n++) {
var o = f[n], p = "<option class='custom' value=" + o.id + ">" + o.name + "</option>";
b.append(p);
}
b.unbind("change"), b.prop("value", a.style), setTimeout(function() {
b.bind("change", function() {
m({
style:b.prop("value")
});
});
}, 1), d.empty();
var q = !1;
for (n = 0; n < h.length; n++) {
var r = h[n], s = -1 == a.style ? !0 :r.style.length ? r.style.indexOf(a.style) >= 0 :!0;
if (s) {
var t = "<li path=" + r.path + "><div class='musicTitle' >" + (r.title.trim() || "[无标题]") + "</div><div class='musicPlay' ></div></li>";
q = !0, d.append(t);
}
}
if (!q) {
var t = "<li path=''><div class='musicTitle' >没有发现匹配的音乐</div><div class='musicPlay' ></div></li>";
d.append(t);
}
d.unbind("click"), setTimeout(function() {
d.bind("click", function(a) {
a = a || window.event;
for (var b = c(a.target); "li" != b.prop("nodeName").toLowerCase(); ) b = b.parent();
var d = b.is(".active");
if (d) k.activeLi = null, b.removeClass("active"), i.src = "", k.audioSrc = "", 
i.pause(), g.find(".btnSubmit").addClass("disabled"); else {
k.selectedLi && k.selectedLi.removeClass("active"), k.activeLi && k.activeLi.removeClass("active"), 
b.addClass("active"), k.activeLi = b, i.pause();
var e = b.attr("path") || "";
e && (i.src = l + e, g.find("li.active .musicPlay").addClass("loading"), i.oncanplay = i.oncanplaythrough = function() {
g.find("li.active .musicPlay").removeClass("loading");
}, k.audioSrc = i.src, i.play()), g.find(".btnSubmit").removeClass("disabled");
}
});
}, 1);
var u = g.find(".loading");
setTimeout(function() {
u.hide();
}, 1);
}, n = function() {
c.ajax({
url:"http://mucard.mugeda.com/weixin/card/music.json?ts=" + new Date().getTime(),
type:"GET",
dataType:"jsonp",
jsonpCallback:"Mucard_music_callback",
success:function(a) {
j = a, m({
style:"5",
scene:-1
});
},
error:function(a, b) {
alert(b);
}
});
}, o = function() {
d.remove(h.id), d.back(), c(document.body).unbind("weixin:shareOK", o);
};
h.dom.append(g), c(document.body).bind("weixin:shareOK", o), b.navibarTpl.on("click", ".btnCancel", function() {
if (h.dom.css("top", "100%"), i && (i.pause(), delete i), window.weixinAudioLoader) for (var b in weixinAudioLoader) weixinAudioLoader[b].play && weixinAudioLoader[b].play();
setTimeout(function() {
o();
}, 500), a && a({
status:-2,
desc:"用户取消了操作"
});
}), b.navibarTpl.on("click", ".btnSubmit", function() {
c(this).is(".disabled") || (h.dom.css("top", "100%"), i && (i.pause(), delete i), 
setTimeout(function() {
o();
}, 500), a && a({
status:0,
url:i.src
}));
}), d.addToLayout(h.id), setTimeout(function() {
d.setActive(h.id, !0, !0);
}, 1), g.find(".loading").show(), j ? m({
style:"5",
scene:-1
}) :n();
};
}), define("scripts/navibar", [ "./tpl/navibar", "./tpl/template", "./environment", "./vendor/zepto", "./message", "./tpl/loading", "./tpl/dialog" ], function(a, b) {
var c = a("./tpl/navibar"), d = a("./environment"), e = a("./message");
return c && d ? (b.getNaviBar = function(f, g) {
var h = {}, i = h.navibarTpl = $(c({
title:f
}));
if (g.hash && (location.hash = g.hash), g.leftTpl && (h.leftTpl = g.leftTpl.appendTo(i.find(".navi-left"))), 
g.cancelLabel && $(i.find(".navi-left")).append('<span class="btn cancelBtn">' + g.cancelLabel + "</span>"), 
g.rightTpl && (h.rightTpl = g.rightTpl.appendTo(i.find(".navi-right"))), g.notFixed && i.css("position", "inherit"), 
g.hideUserIcon || !d.isApp2()) i.find(".userBtn").remove(); else {
var j = i.find(".userBtn");
e.showLoading("加载用户框架");
var k = function() {
a.async("./user", function(c) {
a.async("./userview", function() {
e.hideLoading(), c || e.showConfirm("加载用户框架，请检查网络状况，是否重试？", !0, {
labelConfirm:"重试",
labelCancel:"取消",
confirm:function() {
k();
}
}), i.on("click", ".userBtn", function() {
c.showUserForm(b);
}), j.on("user:status", function() {
a();
});
var a = function() {
c.getLogin().then(function(a) {
a ? j.removeClass("nologin") :j.addClass("nologin");
});
};
a();
});
});
};
k();
}
return i.find(".weixinBtn").remove(), h;
}, b.hide = function(a) {
a.navibarTpl.filter(".navi").animate({
"margin-top":"-48px",
opacity:"0.3"
}, "slow");
}, void (b.show = function(a) {
a.navibarTpl.filter(".navi").animate({
"margin-top":"0px",
opacity:"1"
}, "slow");
})) :!1;
}), define("scripts/page", [ "./vendor/zepto" ], function(a, b) {
var c = a("./vendor/zepto");
if (!c) return !1;
var d = {}, e = [];
b.init = function() {};
var f = 0;
b.setNewPage = function(a, b) {
return d[f] = {
dom:b.dom || c("<div></div>"),
inDom:b.inDom || !1,
id:f,
name:a,
type:b.type || "scroll",
background:b.background || "#fff",
index:f,
transition:b.transition,
top:b.top
}, d[f].dom.css("background", d[f].background).addClass("page-" + d[f].type).addClass("page-" + a), 
d[f].transition && d[f].dom.addClass("transition").addClass("inactive"), d[f++];
}, b.addToLayout = function(a) {
return d[a].inDom ? page[a] :(d[a].inDom = !0, void c(document.body).append(d[a].dom));
}, b.removeAll = function() {
for (id in d) b.remove(id);
}, b.remove = function(a) {
d[a].inDom && (d[a].dom.remove(), delete d[a]);
}, b.setActive = function(a, f, g) {
c(":focus").blur(), f && b.currentId && e.push(b.currentId);
for (var h in d) h == a ? (d[h].dom.removeClass("inactive").css("z-index", 20 + d[h].index), 
d[h].transition && d[h].top && d[h].dom.css("top", d[h].top)) :g ? d[h].dom.css("z-index", d[h].index) :d[h].dom.addClass("inactive").css("z-index", d[h].index);
b.currentId = a, c(window).trigger("resize"), c(document.body).trigger("page:changed", a);
}, b.back = function() {
b.setActive(e.pop(), !1);
}, b.setNewPage("loadMessage", {
dom:c("#layout"),
inDom:!0
});
}), define("scripts/photoservice", [ "./vendor/zepto", "./message", "./tpl/loading", "./tpl/template", "./tpl/dialog", "./environment", "./vendor/promise", "./page", "./navibar", "./tpl/navibar", "./user", "./utils", "./weixinJs", "wxjs", "./vendor/sha1" ], function(a, b) {
var c = a("./vendor/zepto"), d = a("./message"), e = a("./environment"), f = a("./vendor/promise"), g = a("./page"), h = a("./navibar"), i = a("./user"), j = a("./utils"), k = a("./weixinJs");
if (e.isWeixin()) var l = "http://weika.mugeda.com/server/ucenter.php/ucenter/", m = {
remove:l + "removeFile",
list:l + "myImgLib",
upload:"http://weika.mugeda.com/server/app_asset.php/u"
}; else var l = "http://weika.mugeda.com/server", m = {
remove:l + "/app_asset.php/r",
list:l + "/app_asset.php/list",
upload:l + "/app_asset.php/u"
};
var n = {
source:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAADgBAMAAAB2uXByAAAAA3NCSVQICAjb4U/gAAAAMFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAv3aB7AAAAEHRSTlMAESIzRFVmd4iZqrvM3e7/dpUBFQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOC8xMy8xNByR2gEAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAAErElEQVR4nO3cO2/TUBQH8JMmbVNSWibEQ5R8g/IBUBsJhiKQysAACy0wMUD4BnRAogsyEwyVKCxMSGVnCLAyBAkJxJQiFpjKG0rbmMR2HNv3Yd97/hlQfYZOvT9d+z59HyEXHJSD/yHYfrZ8+6Qfc8srDSa4df8ExaM098QefH+FZFG82rICP1+Wct0YurphDO7cUnLek98xBDdrWq8Tp4zAd/vSPKL9rezg23SuEyONrGA2r/MiZaIE/JTR6+RR8tQiuJnh/fXiQAawfTa7R3Q8HXxk4hE5aeAvM4+KyTaTANs1Q5AO68GXph7Rqg7cNijhXpR14Atzj6iuBm0y2KneatAqg4ksRkG7DBKNqsCPdl68oKOgUaOLxrgc/GPrUWFDCj61BmleBrar9mBZBv6294iaEpDxxESzErDKAcsiaF/G3Si0BPADC6QFAVzkgZUkuMPzqJQETccSIRoJ8DUXnE+AN7hgJQ62LbvCfgzHwU2uR9SKgd/4YD0GshqyH0dj4CIfHIuB7DIJqzahyqRXKj74EwE6EfALApyNgA8R4N4IuIgAyxEQUMi9YvbAbYRH1Ad540kYayEIqTVEN0MQUmuCekOgrqEbEyG4hAH3hKD1xDAeoyFYxYClHtjGeH5F7P7ZQoHNAATVa3/yTrh67dfsLvgdBc4HIKih+ANfF3yOAicCENTy/PkN4Vqe32cTagCIgjUUWArAKhpEeV5jJv58XQBhfYM3cx8ECOtsvPnSIED2N08/6h74AwfODwb8igOnPRDWvxJNDgZcx4ETHgjrsL0ue7eBezxwCQeWcxAEsldY+jHigTUcWMrBHMzBHMzBHMxB2/AH+kU0uLSbQH9KfBcNAufYe9Eg/EsK/q0H/7yFf4D7aw6wFdMBrIrA121a6JUlf+0LttCOX+4bQa9wwtdg4avE8HXs6QBcR4ELAQjYT/fDQW9/NNAbNOgtpHCTC9VUyiFYw4AV9M7jJHpvdAG9e+ug95eb4B3wIfQe/WgfxOz5VCIgZPnraASE1Jt6BIRMb9YiIGIHxC/kAPwLAEejIOKwyHgMBBTzdAx8zgedGAgYpzZiIL81944oByB/BpY4jMef38wmQHbjW02A3KMJQTvpg9yzaeUkyO0SpwRwiQc6Asg7WNs/kR2CvKotOUvMOxY6JYK8l+hIQM5LjBxq74OclzjmSkBOTZyWgozlloYUtP+yH3aloP0MZ0oO2o9UjgK0rThFVwHaDvfjKtD2lJ+jBO2eueQqQbtnPqIG7ca+NQ1ocyknfgkpAdrU7RkdaNGeCy0taD6Vrbha0D1mCq6mgKZVMVEkImh6m6ueBhreNysmk4ug2SRnJh00qjnCjUcZaJJFMYMS0CCLkgzKwOxXWy+KiWVg5oIW6qAK3K5mA4VbrSowYy92SJZUDmbqaIea0qRyMEu5yEpECbpvUr2D8oQqMHX6WWoZgts1rVeQlrAOdP9oX+N1VTI1qL1bfkaZSgNqbr+fVifSge5bxVPrPC3ofqrKyuOaLokedLcuCd7wA22KFNB1H8czWbig/iWHbKC7c68WckPn5e3XCOzEq+Vz3d/YWF7J8L+ZQKPYheA/ZsbYyYiTKxIAAAAASUVORK5CYII=",
loaded:!1,
use:!1,
image:new Image()
};
b.customImage = function(a, b) {
d.showLoading("获取图片"), this.customCallback = b, f.all([ p(a), q(a), o(a) ]).then(r).then(function(a) {
var b = {
src:a
};
return d.showLoading("获取图片"), p(b);
}).then(function(c) {
d.hideLoading(), a.imgNew = c, b(c.src);
}, function(a) {
a && d.showMessage("定制图片失败：" + a), d.hideLoading(!0);
});
}, b.deletePhoto = function(a) {
return new f(function(b, d) {
var f = m.remove, g = {}, h = function(a) {
c.ajax({
type:"get",
url:f,
data:a,
dataType:"jsonp",
jsonpCallback:"Mucard_callback",
xhrFields:{
withCredentials:!0
},
success:function() {
b();
},
error:function() {
d();
}
});
};
e.isWeixin() ? i.getToken().then(function(b) {
g = {
token:b,
t:+new Date(),
file:encodeURIComponent(a.join(","))
}, h(g);
}) :e.isApp2() && i.getUrid().then(function(e) {
g = {
urid:e,
t:+new Date(),
files:encodeURIComponent(JSON.stringify(a))
}, c.ajax({
type:"POST",
url:f,
data:g,
xhrFields:{
withCredentials:!0
},
success:function() {
b();
},
error:function() {
d();
}
});
});
});
}, b.getUserPhotoList = function(a) {
var b = "图片";
"audio" == a && (b = "声音");
var g = m.list;
return new f(function(f, h) {
var j = {};
j.seed = new Date().getTime(), j.resourceType = "audio" == a ? "audio" :"image";
var k = function() {
d.showLoading("正在加载"), e.isApp2() ? i.getUrid().then(function(a) {
j.urid = a, c.ajax({
type:"GET",
url:g,
data:j,
xhrFields:{
withCredentials:!0
},
dataType:"json",
success:function(a) {
d.hideLoading(), 0 === a.status ? f(a) :l(function() {
h("获取用户" + b + "列表失败");
});
},
error:function() {
d.hideLoading(), l(function() {
h("获取用户" + b + "列表失败");
});
}
});
}, function() {
d.hideLoading(), d.showConfirm("您需要先登录才能查看保存的" + b + "，是否现在登录？", !0, {
labelConfirm:"立即登录",
labelCancel:"下次再说",
confirm:function() {
c(document.body).trigger("user:login", {
callback:function() {
k();
}
});
},
cancel:function() {
h("用户没有登录");
}
});
}) :e.isWeixin() && i.getToken().then(function(a) {
c.ajax({
type:"get",
url:g,
data:{
token:a,
t:+new Date()
},
dataType:"jsonp",
jsonpCallback:"Mucard_callback",
xhrFields:{
withCredentials:!0
},
success:function(a) {
d.hideLoading(), 0 === a.status ? f(a) :l(function() {
h("获取用户" + b + "列表失败");
});
},
error:function() {
d.hideLoading(), l(function() {
h("获取用户" + b + "列表失败");
});
}
});
}, function() {
d.hideLoading(), d.showConfirm("您需要先登录才能查看保存的" + b + "，是否现在登录？", !0, {
labelConfirm:"立即登录",
labelCancel:"下次再说",
confirm:function() {},
cancel:function() {
h("用户没有登录");
}
});
});
};
k();
var l = function(a) {
d.showConfirm("获取用户" + b + "列表失败，是否重试？", !0, {
labelConfirm:"重试",
confirm:function() {
k();
},
cancel:function() {
a();
}
});
};
});
};
var o = function(a) {
return new f(function(b) {
"masked" == a.type ? (n.use = !0, n.loaded ? b() :(n.image.src = n.source, n.image.onload = function() {
n.width = n.image.width, n.height = n.image.height, n.loaded = !0, b();
})) :(n.use = !1, b());
});
}, p = function(a) {
return new f(function(b, c) {
var e = new Image();
e.src = a.src, e.onload = function() {
a.rawWidth = e.width, a.rawHeight = e.height, a.ratio = e.height / e.width, b(a);
}, e.onerror = function() {
d.showConfirm("读取图片失败，是否重试？", !0, {
labelConfirm:"重试",
confirm:function() {
p(a).then(function(a) {
b(a);
}, function(a) {
c(a);
});
},
cancel:function() {
c("获取源图片失败");
}
});
};
});
}, q = function(a) {
return new f(function(b, c) {
if (e.isApp()) setTimeout(function() {
window.mucard.useCustomImage(function(a, d, e) {
2 == a ? c() :0 != a ? (ga("errorTracker.send", {
hitType:"event",
eventCategory:"获取图片失败",
eventAction:a,
eventLabel:navigator.userAgent
}), c("获取图片失败(" + a + ")")) :b({
type:"local",
data:"data:image/jpg;base64," + decodeURI(d),
user:e
});
}, function() {
b({
type:"online"
});
}, !0);
}, 0); else {
var d = 3;
1 == d ? b({
type:"local",
data:"data:image/jpg;base64,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",
user:"user"
}) :2 == d ? b({
type:"online"
}) :3 == d && (a.imageUploader && a.imageUploader.mediaId ? b({
type:"local",
data:a.imageUploader.mediaId,
user:"user",
mode:"weixin",
weixinCallback:a.imageUploader.weixinCallback
}) :a.imageUploader && a.imageUploader.imgBigData && b({
type:"local",
data:a.imageUploader.imgBigData,
user:"user"
}));
}
});
}, r = function(a) {
var b = a[0], e = a[1];
return new f(function(a, f) {
var i = e.type;
switch (i) {
case "local":
var j = h.getNaviBar("裁剪图片", {
cancelLabel:"取消",
rightTpl:c('<span class="btn okBtn">确认</span>')
});
j.navibarTpl.on("click", ".cancelBtn", function() {
g.remove(l.id), g.back(), f();
});
var k = !1;
j.navibarTpl.on("click", ".okBtn", function() {
k || (k = !0, d.showLoading("生成裁剪"), setTimeout(function() {
k = !1;
var c = 480, h = 756, i = 1.5 * b.rawWidth, j = 1.5 * b.rawHeight;
i > c && (j = c / i * j, i = c), j > h && (i = h / j * i, j = h);
var m = J.getcuttedData(i, e.mode);
d.hideLoading(), "weixin" == e.mode ? e.weixinCallback && e.weixinCallback(m, function(b) {
a(b), g.remove(l.id), g.back();
}, function(a) {
f(a), g.remove(l.id), g.back();
}) :s(e.user, m).then(function(b) {
a(b), g.remove(l.id), g.back();
}, function(a) {
f(a), g.remove(l.id), g.back();
});
}, 100));
});
var l = g.setNewPage("cutter", {
type:"fix"
});
if (l.dom.append(j.navibarTpl), g.addToLayout(l.id), g.setActive(l.id, !0), "masked" == b.type) {
var m, o = b.rawWidth, p = b.rawHeight, q = n.width, r = n.height, u = o / p, v = q / r, w = 1;
if (u > v) {
var x = p * v;
w = x / o;
} else {
var x = (o / masRatio, o * v);
w = x / o;
}
m = (w - .5) / 1.5, w = 100 * m;
for (var y = '<div class="full-screen" style="top:48px;bottom:auto;height:48px;"> <div style="width:100%;max-width:320px;margin:auto;line-height: 48px;position: relative">   <small style="position: absolute;height:48px;">头像比例</small>   <div style="position: absolute;left: 90px;right:0;height:48px;">     <div class="line" style="height:2px;background: #d60;margin-top:23px;"></div>     <img class="hand" src="images/radio.png" style="width: 40px; position: absolute; left: ' + w + '%; margin-left: -20px; top: 4px;"/>   </div> </div></div>', z = c(y).appendTo(l.dom), A = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i), B = z.find(".line")[0], C = 0; B && "BODY" != B.tagName; ) C += B.offsetLeft, 
B = B.offsetParent;
var D = function(a, b) {
A || (a.touches = [ {
clientX:a.clientX,
clientY:a.clientY
} ]);
var c = ((b && A ? a.changedTouches[0] :a.touches[0]).clientX - C) / z.find(".line").width();
c = Math.max(c, 0), c = Math.min(c, 1), E.css("left", 100 * c + "%"), J.changePercent(c);
}, E = z.find(".hand"), F = function(a) {
D(a), a.preventDefault();
}, G = function(a) {
D(a, !0), a.preventDefault(), c(document.body).off(A ? "touchmove" :"mousemove", F), 
c(document.body).off(A ? "touchend" :"mouseup", G);
};
E.on(A ? "touchstart" :"mousedown", function(a) {
D(a), a.preventDefault(), c(document.body).on(A ? "touchmove" :"mousemove", F), 
c(document.body).on(A ? "touchend" :"mouseup", G);
});
}
var H = "masked" == b.type ? 96 :48, I = c('<div class="full-screen" style="top:' + H + 'px;"></div>').appendTo(l.dom), J = t(I, e.data, b.ratio, function() {
d.hideLoading(), J.changePercent(m);
});
break;

case "online":
d.hideLoading(), c(document.body).trigger("user:photo", {
viewMode:"select",
callback:function(b) {
b ? a(b.url) :f(b);
}
});
}
});
}, s = function(b, g, h) {
return h = h || {}, new f(function(f, j) {
var k = m.upload, l = h.isAudio ? "声音" :"图片", o = function() {
d.showLoading("获取用户信息"), i.getUrid().then(function(a) {
d.hideLoading(), q(a, !0);
}, function() {
d.hideLoading(), d.showConfirm("提示：您尚未登录。登录后，" + l + "将保存在您的个人目录中，今后可以反复使用。如果不登录，" + l + "在本次使用后将无法再被用到。\n\n您现在要登录吗？", !0, {
labelConfirm:"立即登录",
labelCancel:"下次再说",
confirm:function() {
a.async("./userview", function(a) {
a.loginView(null, {
callback:function() {
o();
}
});
});
},
cancel:function() {
q(b, !1);
}
});
});
};
e.isApp2() ? o() :setTimeout(function() {
q(b, !1);
});
var p = function(a, b, e) {
var g = "png";
0 == b.indexOf("data:image/png;base64") ? b = b.replace("data:image/png;base64,", "") :0 == b.indexOf("data:image/jpeg;base64") ? (b = b.replace("data:image/jpeg;base64,", ""), 
g = "jpeg") :h.isAudio && (g = "mp3");
var i;
i = c.cookie.get("token") ? "" :e, d.showLoading("上传" + l), c.ajax({
type:"POST",
url:k,
data:{
type:g,
urid:a,
imgdata:b,
login:i,
token:c.cookie.get("token")
},
xhrFields:{
withCredentials:!0
},
dataType:"json",
success:function(a) {
d.hideLoading(), a && 0 === a.status ? f(a.info) :j("上传" + l + "失败");
},
error:function() {
d.hideLoading(), d.showConfirm("上传" + l + "时出现网络问题，是否重试？", !0, {
labelConfirm:"重试",
confirm:function() {
p(a, b, e);
},
cancel:function() {
j("上传" + l + "失败");
}
});
}
});
}, q = function(a, b) {
h.isAudio ? p(a, decodeURIComponent(g), b) :window.mucard && !n.use ? (d.showLoading("压缩" + l), 
mucard.compressToJPEG(g.replace("data:image/png;base64,", ""), function(c) {
d.hideLoading(), p(a, decodeURIComponent(c), b);
})) :p(a, g, b);
};
});
};
b.uploadAudioBase64 = function(a, b) {
return s(a, b, {
isAudio:!0
});
};
var t = function(a, b, d, e) {
var f = u(), g = function() {
a.isExist() ? f.setSize(a.innerWidth(), a.innerHeight()) :c(window).unbind("resize", g);
};
return c(window).bind("resize", g), f.initUI(a[0], a.innerWidth(), a.innerHeight()), 
f.placeImageBase64(function() {
e();
}, b, d), f;
}, u = function() {
var a = void 0, b = void 0, f = void 0, g = void 0, h = void 0, i = void 0, j = void 0, k = void 0, l = void 0, m = void 0, o = void 0, p = void 0, q = void 0, r = void 0, s = void 0, t = void 0, u = new Image(), v = new Image(), w = void 0, x = void 0, y = void 0, z = void 0, A = void 0, B = void 0, C = void 0, D = void 0, E = null;
u.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALpJREFUeNpi/P//fwMDA4M9ED8A4odAfAHEZmRkBNHkA6DBDv9xg/mUGGyAw9DzQCxAqauxgQIGSgHUddhAAqUG74ca9J6qhoNSBixMQRFGNcOhKUMAiT+fqkGCZtl8qhuKnBQZhg2giW9oEv74Ugw0uSqA2ExUsAtkUQI0ue4HYgdquhoE7kPpBmoHCQzsp0V4g4tbSg0VwFUqUmrwejw1jwELuQYD68RAWAEGpEApApRh9KFsAYAAAwDPG50lOOkShAAAAABJRU5ErkJggg==", 
v.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALUlEQVQokWM8c+YMAzZgbGyMVZwJqygeMKqBGMD4//9/rBJnz56ljg2jGogBAEK1CICe2Pz1AAAAAElFTkSuQmCC";
var F, G, H = function(b, c, d) {
if (a = document.createElement("div"), b.innerHTML = "", w = document.createElement("img"), 
w.style.cssText += "position:absolute;left:0;right:0;top:0;bottom:0;", b.appendChild(w), 
b.appendChild(a), a.style.position = "absolute", a.style.top = "0", I(c, d), Q(), 
a.innerHTML = '<span id="mask1" style="position: absolute;background-color: rgba(0,0,0,0.6);left:0;top:0;width:100px;height:100px;-webkit-transform-origin: 0 0;-webkit-transform: translate(-100px, 0);"></span><span id="mask2" style="position: absolute;background-color: rgba(0,0,0,0.6);left:0;top:0;width:100px;height:100px;-webkit-transform-origin: 0 0;-webkit-transform: translate(-100px, 0);"></span><span id="mask3" style="position: absolute;background-color: rgba(0,0,0,0.6);left:0;top:0;width:100px;height:100px;-webkit-transform-origin: 0 0;-webkit-transform: translate(-100px, 0);"></span><span id="mask4" style="position: absolute;background-color: rgba(0,0,0,0.6);left:0;top:0;width:100px;height:100px;-webkit-transform-origin: 0 0;-webkit-transform: translate(-100px, 0);"></span><span id="mask6" style="position: absolute;border: 1px white solid;"><canvas id="maskImg"></canvas></span><span id="mask5" style="position: absolute;background-color: #DD6600; border-radius:20px;border:2px white solid;background-image:url(' + u.src + ');background-repeat:no-repeat;background-position: center;background-position:center;background-repeat:no-repeat;opacity:0.7;"></span>', 
x = document.getElementById("mask1"), y = document.getElementById("mask2"), z = document.getElementById("mask3"), 
A = document.getElementById("mask4"), B = document.getElementById("mask5"), C = document.getElementById("mask6"), 
n.use) {
var e = document.getElementById("maskImg");
E = e.getContext("2d"), E.fillStyle = "#000000";
}
}, I = function(c, d) {
b = c, f = d, a.style.width = c + "px", a.style.height = d + "px", s && (K(), L(m, o, p, q, !0));
}, J = function(a, b, c) {
s = new Image(), s.onload = function() {
D = c, K(!0), a(), w.src = s.src;
}, s.src = b;
}, K = function(a) {
var e = 12, n = s.width, u = s.height, v = n, w = u, x = (b - 2 * e) / v, y = (f - 2 * e) / w, z = Math.min(x, y, 1), A = n * z, B = u * z, C = e + Math.round((b - 2 * e - A) / 2), E = e + Math.round((f - 2 * e - B) / 2);
g = C, h = E, r = D, t = z;
var F = A, G = F * D;
G > B && (G = B, F = G / D), i = C, j = E, k = A, l = B, m = C, o = E, p = F, q = G, 
a && L(C, E, F, G, !0, !0), 200 > n && 0 == s.src.indexOf("weixin://") && setTimeout(function() {
d.showConfirm("看起来微信的图片获取接口在您的设备上工作不正常，获取的图片尺寸太小。您想要暂时停用该接口，切换到系统默认的图片获取接口吗？", !0, {
labelConfirm:"好的",
confirm:function() {
sessionStorage.setItem("disableChooseImage", 1), c(document.body).find(".page-cutter .cancelBtn").click(), 
setTimeout(function() {
c(document.body).find(".page-popupForm .btnCancel").click(), setTimeout(function() {
d.showConfirm("设置成功！请您重新选择图片并操作。如果系统默认的图片获取接口工作不正常，您可以考虑下载并使用卡司令App，获取更好的图片定制体验。", !1);
}, 100);
}, 100);
},
cancel:function() {
d.showConfirm("好的。如果微信图片获取接口工作不正常，您如果可以考虑下载并使用卡司令App，获取更好的图片定制体验。", !1);
}
});
}, 1e3);
}, L = function(a, b, c, d, e, f) {
e && (w.style.cssText += "left:" + i + "px;top:" + j + "px;width:" + k + "px;height:" + l + "px;"), 
(c != F || d != G) && n.use && (f ? (E.canvas.width = c, E.canvas.height = d, O(E.canvas.width, E.canvas.height)) :(E.canvas.style.width = c + "px", 
E.canvas.style.height = d + "px"), F = c, G = d), x.style.cssText += "-webkit-transform: translate(" + i + "px, " + j + "px) scale(" + k / 100 + "," + (b - j) / 100 + ");", 
y.style.cssText += "-webkit-transform: translate(" + i + "px, " + (b + d) + "px) scale(" + k / 100 + "," + (j + l - b - d) / 100 + ");", 
z.style.cssText += "-webkit-transform: translate(" + i + "px, " + b + "px) scale(" + (a - i) / 100 + "," + d / 100 + ");", 
A.style.cssText += "-webkit-transform: translate(" + (c + a) + "px, " + b + "px) scale(" + (i + k - c - a) / 100 + "," + d / 100 + ");", 
B.style.cssText += "left:" + (c + a - 20) + "px;top:" + (b + d - 20) + "px;width:40px;height:40px;", 
C.style.cssText += "left:" + (a - 1) + "px;top:" + (b - 1) + "px;width:" + (c + 2) + "px;height:" + (d + 2) + "px;background-size:contain;opacity:0.8;background-position:center;background-repeat:no-repeat;";
}, M = 1, N = function(a, b, c, d, e, f, g) {
var h = e, i = f;
g > 1 ? i /= g :h *= g, g > 1 ? (a.drawImage(b, 0, 0, c, d, 0, f - i, h, i), a.fillRect(0, 0, e, f - i + 1)) :(a.drawImage(b, 0, 0, c, d, (e - h) / 2, 0, h, i), 
a.fillRect(0, 0, (e - h) / 2 + 1, f), a.fillRect((e + h) / 2 - 1, 0, (e - h) / 2 + 1, f));
}, O = function(a, b) {
a = a || p, b = b || q, n.use && (E.clearRect(0, 0, E.canvas.width, E.canvas.height), 
N(E, n.image, n.width, n.height, a, b, M));
}, P = function(a, b) {
var c = (m - i) / t, d = (o - j) / t, f = p / t, g = q / t;
if ("weixin" == b) return {
startX:Math.round(c),
startY:Math.round(d),
width:Math.round(f),
height:Math.round(g)
};
var h = a / f, k = document.createElement("canvas"), l = k.getContext("2d");
if (k.width = a, k.height = a * r, n.use) {
var u = document.createElement("canvas"), v = k.getContext("2d");
u.width = p, u.height = q, v.drawImage(s, c, d, f, g, 0, 0, f * h, g * h), v.globalCompositeOperation = "destination-out", 
N(v, n.image, n.width, n.height, f * h, g * h, M), l.drawImage(u, 0, 0);
} else l.drawImage(s, c, d, f, g, 0, 0, f * h, g * h);
return e.isApp() ? k.toDataURL("image/png") :k.toDataURL("image/jpeg", .7);
}, Q = function() {
var b, c, d, e = !1, f = !1, g = !1, h = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);
a.addEventListener(h ? "touchstart" :"mousedown", function(i) {
if (i.preventDefault(), !e && (h || (i.touches = [ {
clientX:i.clientX,
clientY:i.clientY
} ]), i.touches && i.touches.length)) {
b = i.touches[0].clientX, c = i.touches[0].clientY;
for (var j = a, k = 0, l = 0; j && "BODY" != j.tagName; ) k += j.offsetTop, l += j.offsetLeft, 
j = j.offsetParent;
var n = b - l + window.pageXOffset, r = c - k + window.pageYOffset;
f = Math.pow(n - (m + p), 2) + Math.pow(r - (o + q), 2) < 576, g = !f && n > m && m + p > n && r > o && o + q > r, 
e = f || g, e && (d = i.touches[0].identifier);
}
}), a.addEventListener(h ? "touchmove" :"mousemove", function(a) {
if (a.preventDefault(), e && (h || (a.touches = [ {
clientX:a.clientX,
clientY:a.clientY
} ]), a.touches && a.touches.length)) {
var d = a.touches[0].clientX - b, f = a.touches[0].clientY - c;
n(d, f);
}
}), a.addEventListener(h ? "touchend" :"mouseup", function(a) {
if (a.preventDefault(), e && (h || (a.changedTouches = [ {
clientX:a.clientX,
clientY:a.clientY
} ]), a.changedTouches && a.changedTouches.length)) for (var f = 0; f < a.changedTouches.length; f++) if (a.changedTouches[f].identifier == d) {
var g = a.changedTouches[f].clientX - b, i = a.changedTouches[f].clientY - c;
n(g, i, !0), e = !1;
break;
}
});
var n = function(a, b, c) {
var d = 64;
if (f) {
var e = r > 1, h = a, n = h * r;
n > b && (n = b, h = b / r);
var s, t;
e ? (t = Math.max(d, q + n), s = t / r) :(s = Math.max(d, p + h), t = s * r), s + m > i + k && (s = i + k - m, 
t = s * r), t + o > j + l && (t = j + l - o, s = t / r), L(m, o, s, t), c && (p = s, 
q = t);
} else if (g) {
var u = Math.max(i, m + a), v = Math.max(j, o + b);
p + u > i + k && (u = i + k - p), q + v > j + l && (v = j + l - q), L(u, v, p, q), 
c && (m = u, o = v);
}
};
}, R = function(a) {
M = a / 1 * 1.5 + .5, n.use && O(E.canvas.width, E.canvas.height);
};
return {
initUI:H,
setSize:I,
placeImageBase64:J,
drawMask:L,
getcuttedData:P,
changePercent:R
};
}, v = "http://wslb.mugeda.com/server/";
b.MugedaImageUploader = function() {
function a() {
this.parentDiv = null, this.inited = !1, this.formElem = null, this.ifElem = null, 
this.process = null;
var a = this;
this.handledEvent = function(b) {
a._handleMessage(b);
};
}
a.prototype.weixinChooseImage = function(a) {
var b = this;
this.callback = a || this.callback || function() {}, k.getWx().then(function(e) {
e.chooseImage({
success:function(f) {
var g = f.localIds;
b._handleWeixinImage(g[0], function(b, f, h) {
e.uploadImage({
localId:g[0],
isShowProgressTips:1,
success:function(e) {
var g = e.serverId, i = j.cookie.get("token"), k = "http://weika.mugeda.com/server/wx_resource.php?token=" + i + "&mediaid=" + g + "&param=" + JSON.stringify(b);
d.showLoading("保存图片"), c.ajax({
type:"GET",
url:k,
dataType:"json",
success:function(b) {
d.hideLoading(), 0 === b.status && (f && f(b.info), a && a(b));
},
error:function(b, c) {
d.hideLoading(), h && h(c), a && a(b);
}
});
}
});
});
}
});
});
}, a.prototype.initUploader = function(a, b) {
this.parentDiv = a, this.inited = !0, this.callback = b || function() {};
var c = document.createElement("form");
c.action = v + "/game_fbb.php?method=server", c.target = "hiddenIframe", c.enctype = "multipart/form-data", 
c.method = "POST", c.style.cssText += "position: absolute; width: 100%; height: 100%; overflow: hidden; opacity:0;", 
this.parentDiv.appendChild(c), this.formElem = c;
var d = navigator.userAgent.match(/Android/i), e = parseInt(sessionStorage.getItem("disableChooseImage"));
if (!d && k.wxjs_status.config_ok && 1 !== e) {
var f = document.createElement("div");
f.style.cssText += "position: absolute; width: 100%; height: 100%; overflow: hidden;", 
this.parentDiv.appendChild(f);
var g = this;
f.onclick = function() {
g.weixinChooseImage();
};
} else {
var h = document.createElement("input");
h.type = "file", h.accept = "image/*", h.style.cssText += "position: absolute; width: 100%; height: 100%; overflow: hidden;", 
h.name = "photo", c.appendChild(h);
var g = this;
h.onchange = function() {
g._handleImageFile.call(g, this.files);
};
}
var i = document.createElement("iframe");
i.name = "hiddenIframe", i.style.display = "none", c.appendChild(i), this.ifElem = i, 
window.addEventListener("message", this.handledEvent);
}, a.prototype.removeUploader = function() {
this.inited && (this.parentDiv.removeChild(this.formElem), window.removeEventListener("message", this.handledEvent), 
this.inited = !1);
}, a.prototype._handleImageFile = function(a) {
if (this._fireEvent("selected", "检查图片类型"), 1 == a.length) {
var b = a[0], c = /image.*/;
b.type && !b.type.match(c) ? this._fireEvent("error", "选择的文件不是有效的图片。", null) :this._handleImage(b);
} else this._fireEvent("error", "用户取消选择文件");
}, a.prototype._handleImage = function(a) {
var b = window.URL;
null == b && (b = window.webkitURL), b && this._handleImageLocally(b, a) || this._handleImageServer(a);
}, a.prototype._handleImageServer = function() {
this._fireEvent("upload", "正在上传图片，可能需要一段时间"), this.formElem.submit();
}, a.prototype._handleWeixinImage = function(a, b) {
this._fireEvent("ok", "处理完毕", {
mediaId:a,
method:"weixin",
weixinCallback:b
});
}, a.prototype._handleImageLocally = function(a, c) {
var f = this, g = function(b, d, e) {
f._fireEvent("scale", "正在缩放图片", null);
var g = new Image();
g.src = e ? e :a.createObjectURL(c), g.onload = function() {
!e && a.revokeObjectURL(this.src);
var c = g.width, h = g.height, i = j(g, c, h, b, 640, 832, d), k = j(g, c, h, b, 160, 208, d);
f._fireEvent("ok", "处理完毕", {
small:k,
big:i,
method:"local"
});
};
}, h = function(a) {
var b = a.naturalWidth, c = a.naturalHeight;
if (b * c > 1048576) {
var d = document.createElement("canvas");
d.width = d.height = 1;
var e = d.getContext("2d");
return e.drawImage(a, -b + 1, 0), 0 === e.getImageData(0, 0, 1, 1).data[3];
}
return !1;
}, i = function(a, b, c) {
var d = document.createElement("canvas");
d.width = b, d.height = c;
var e = d.getContext("2d");
e.drawImage(a, 0, 0, b, c);
for (var f = e.getImageData(0, 0, 1, c).data, g = 0, h = c, i = c; i > g; ) {
var j = f[4 * (i - 1) + 3];
0 === j ? h = i :g = i, i = h + g >> 1;
}
var k = i / c;
return 0 === k ? 1 :k;
}, j = function(a, b, c, d, e, f, g, j) {
var k = e / b, l = f / c, m = Math.min(k, l);
m = Math.min(1, m);
var n = Math.floor(b * m), o = Math.floor(c * m), p = 90 == Math.abs(d) ? o :n, q = 90 == Math.abs(d) ? n :o, r = document.createElement("canvas");
r.width = p, r.height = q;
var s = 1;
!j && g && h(a) && (s = i(a, p, q));
var t = r.getContext("2d");
return t.save(), t.translate(p / 2, q / 2), t.rotate(-d / 180 * Math.PI), t.drawImage(a, -n / 2, -o / 2, n, o / s), 
t.restore(), r.toDataURL("image/jpeg");
}, k = c, l = 131072;
if (k = c.slice ? c.slice(0, l) :c.webkitSlice ? c.webkitSlice(0, l) :c.mozSlice ? c.mozSlice(0, l) :c, 
!window.FileReader) return !1;
this._fireEvent("read", "正在读取图片"), d.showLoading("读取图片(0)");
var m = new FileReader();
d.showLoading("读取图片(1)");
var n = this;
return m.readAsBinaryString(k), d.showLoading("读取图片(2)"), m.onerror = function(a) {
a = a || window.event, d.hideLoading(!0), d.showConfirm("读取本地图片发生错误，错误码：" + a.target.error.code + "\n你的设备可能尚不支持直接从微信获取图片。请你下载对上传图片支持更好的卡司令App并使用。你要现在下载吗？", !0, {
labelConfirm:"下载",
confirm:function() {
window.top.location.href = "install.html";
},
cancel:function() {
d.hideConfirm();
}
}), ga("errorTracker.send", {
hitType:"event",
eventCategory:"图片读取错误",
eventAction:a.target.error.code,
eventLabel:navigator.userAgent
});
}, m.onload = function() {
d.showLoading("读取图片(3)");
var a = new b(this.result);
d.showLoading("读取图片(4)");
try {
var c = e.readFromBinaryFile(a);
} catch (f) {
new Image().src = "http://msm.mugeda.com/?" + f.message, new Image().src = "http://msm.mugeda.com/?" + f.message + "|" + f.stack;
}
d.showLoading("读取图片(5)");
var h = a.getByteAt(0);
d.showLoading("读取图片(6)");
var i = a.getByteAt(1);
d.showLoading("读取图片(7)");
var j = 71 == h && 73 == i || 255 == h && 216 == i || 66 == h && 77 == i || 137 == h && 80 == i;
d.showLoading("读取图片(8)");
var k = 255 == h && 216 == i;
return d.showLoading("读取图片(9)"), j ? (d.showLoading("读取图片(10)"), void (c && c.Orientation ? 8 == c.Orientation ? g(90, k) :3 == c.Orientation ? g(180, k) :6 == c.Orientation ? g(-90, k) :g(0, k) :g(0, k))) :n._fireEvent("error", "选择的文件不是有效的图片。", null);
}, !0;
}, a.prototype._handleMessage = function(a) {
if (a.source == this.ifElem.contentWindow) if (a.data) {
var b = JSON.parse(a.data);
"over" == b.type && this._fireEvent("ok", "处理完毕", {
small:b.data.thumb,
big:b.data.path,
method:"server"
});
} else this._fireEvent("error", a.data.message);
}, a.prototype.beforeSend = function(a) {
if (this.callback2 = a || function() {}, "server" == this.method) {
var b = this;
setTimeout(function() {
b._fireEvent("upload_m_ok", null, b.imgBigData, this.callback2);
});
} else if ("local" == this.method) {
this._fireEvent("upload_m", "正在上传图片", null, this.callback2);
var d = this.imgBigData.split(","), e = d[0].split(";")[0].split(":")[1], f = d[1], b = this;
c.ajax({
type:"POST",
url:v + "game_fbb.php?method=base64",
data:{
type:e,
base64:f
},
xhrFields:{
withCredentials:!0
},
dataType:"json",
success:function(a) {
a.err ? b._fireEvent("error", a.message, null, this.callback2) :b._fireEvent("upload_m_ok", null, a.big, this.callback2);
},
error:function(a, c) {
b._fireEvent("error", c, null, this.callback2);
}
});
}
}, a.prototype._fireEvent = function(a, b, c, d) {
"ok" == a ? (this.imgBigData = c.big, this.imgSmallData = c.small, this.mediaId = c.mediaId, 
this.method = c.method, this.weixinCallback = c.weixinCallback, this.callback(a, null, c)) :"upload_m_ok" == a ? (this.imgBigData = c, 
this.callback2(a, null, c)) :(d || this.callback)(a, b, c);
};
var b = function(a, b, c) {
var d = a, e = b || 0, f = 0;
this.getRawData = function() {
return d;
}, "string" == typeof a ? (f = c || d.length, this.getByteAt = function(a) {
return 255 & d.charCodeAt(a + e);
}, this.getBytesAt = function(a, b) {
for (var c = [], f = 0; b > f; f++) c[f] = 255 & d.charCodeAt(a + f + e);
return c;
}) :"unknown" == typeof a && (f = c || IEBinary_getLength(d), this.getByteAt = function(a) {
return IEBinary_getByteAt(d, a + e);
}, this.getBytesAt = function(a, b) {
return new VBArray(IEBinary_getBytesAt(d, a + e, b)).toArray();
}), this.getLength = function() {
return f;
}, this.getSByteAt = function(a) {
var b = this.getByteAt(a);
return b > 127 ? b - 256 :b;
}, this.getShortAt = function(a, b) {
var c = b ? (this.getByteAt(a) << 8) + this.getByteAt(a + 1) :(this.getByteAt(a + 1) << 8) + this.getByteAt(a);
return 0 > c && (c += 65536), c;
}, this.getSShortAt = function(a, b) {
var c = this.getShortAt(a, b);
return c > 32767 ? c - 65536 :c;
}, this.getLongAt = function(a, b) {
var c = this.getByteAt(a), d = this.getByteAt(a + 1), e = this.getByteAt(a + 2), f = this.getByteAt(a + 3), g = b ? (((c << 8) + d << 8) + e << 8) + f :(((f << 8) + e << 8) + d << 8) + c;
return 0 > g && (g += 4294967296), g;
}, this.getSLongAt = function(a, b) {
var c = this.getLongAt(a, b);
return c > 2147483647 ? c - 4294967296 :c;
}, this.getStringAt = function(a, b) {
for (var c = [], d = this.getBytesAt(a, b), e = 0; b > e; e++) c[e] = String.fromCharCode(d[e]);
return c.join("");
}, this.getCharAt = function(a) {
return String.fromCharCode(this.getByteAt(a));
}, this.toBase64 = function() {
return window.btoa(d);
}, this.fromBase64 = function(a) {
d = window.atob(a);
};
}, e = (function() {
function a() {
var a = null;
return window.ActiveXObject ? a = new ActiveXObject("Microsoft.XMLHTTP") :window.XMLHttpRequest && (a = new XMLHttpRequest()), 
a;
}
function c(b, c, d) {
var e = a();
e ? (c && ("undefined" != typeof e.onload ? e.onload = function() {
"200" == e.status ? c(this) :d && d(), e = null;
} :e.onreadystatechange = function() {
4 == e.readyState && ("200" == e.status ? c(this) :d && d(), e = null);
}), e.open("HEAD", b, !0), e.send(null)) :d && d();
}
function d(c, d, e, f, g, h) {
var i = a();
if (i) {
var j = 0;
f && !g && (j = f[0]);
var k = 0;
f && (k = f[1] - f[0] + 1), d && ("undefined" != typeof i.onload ? i.onload = function() {
"200" == i.status || "206" == i.status || "0" == i.status ? (i.binaryResponse = new b(i.responseText, j, k), 
i.fileSize = h || i.getResponseHeader("Content-Length"), d(i)) :e && e(), i = null;
} :i.onreadystatechange = function() {
if (4 == i.readyState) {
if ("200" == i.status || "206" == i.status || "0" == i.status) {
var a = {
status:i.status,
binaryResponse:new b("unknown" == typeof i.responseBody ? i.responseBody :i.responseText, j, k),
fileSize:h || i.getResponseHeader("Content-Length")
};
d(a);
} else e && e();
i = null;
}
}), i.open("GET", c, !0), i.overrideMimeType && i.overrideMimeType("text/plain; charset=x-user-defined"), 
f && g && i.setRequestHeader("Range", "bytes=" + f[0] + "-" + f[1]), i.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT"), 
i.send(null);
} else e && e();
}
return function(a, b, e, f) {
f ? c(a, function(c) {
var g, h, i = parseInt(c.getResponseHeader("Content-Length"), 10), j = c.getResponseHeader("Accept-Ranges");
g = f[0], f[0] < 0 && (g += i), h = g + f[1] - 1, d(a, b, e, [ g, h ], "bytes" == j, i);
}) :d(a, b, e);
};
}(), {});
return function() {
function a(a) {
if (255 != a.getByteAt(0) || 216 != a.getByteAt(1)) return !1;
for (var b = 2, c = a.getLength(); c > b; ) {
if (255 != a.getByteAt(b)) return f && console.log("Not a valid marker at offset " + b + ", found: " + a.getByteAt(b)), 
!1;
var e = a.getByteAt(b + 1);
if (22400 == e) return f && console.log("Found 0xFFE1 marker"), d(a, b + 4, a.getShortAt(b + 2, !0) - 2);
if (225 == e) return f && console.log("Found 0xFFE1 marker"), d(a, b + 4, a.getShortAt(b + 2, !0) - 2);
b += 2 + a.getShortAt(b + 2, !0);
}
}
function b(a, b, d, e, g) {
for (var h = a.getShortAt(d, g), i = {}, j = 0; h > j; j++) {
var k = d + 12 * j + 2, l = e[a.getShortAt(k, g)];
!l && f && console.log("Unknown tag: " + a.getShortAt(k, g)), i[l] = c(a, k, b, d, g);
}
return i;
}
function c(a, b, c, d, e) {
var f = a.getShortAt(b + 2, e), g = a.getLongAt(b + 4, e), h = a.getLongAt(b + 8, e) + c;
switch (f) {
case 1:
case 7:
if (1 == g) return a.getByteAt(b + 8, e);
for (var i = g > 4 ? h :b + 8, j = [], k = 0; g > k; k++) j[k] = a.getByteAt(i + k);
return j;

case 2:
var l = g > 4 ? h :b + 8;
return a.getStringAt(l, g - 1);

case 3:
if (1 == g) return a.getShortAt(b + 8, e);
for (var i = g > 2 ? h :b + 8, j = [], k = 0; g > k; k++) j[k] = a.getShortAt(i + 2 * k, e);
return j;

case 4:
if (1 == g) return a.getLongAt(b + 8, e);
for (var j = [], k = 0; g > k; k++) j[k] = a.getLongAt(h + 4 * k, e);
return j;

case 5:
if (1 == g) return a.getLongAt(h, e) / a.getLongAt(h + 4, e);
for (var j = [], k = 0; g > k; k++) j[k] = a.getLongAt(h + 8 * k, e) / a.getLongAt(h + 4 + 8 * k, e);
return j;

case 9:
if (1 == g) return a.getSLongAt(b + 8, e);
for (var j = [], k = 0; g > k; k++) j[k] = a.getSLongAt(h + 4 * k, e);
return j;

case 10:
if (1 == g) return a.getSLongAt(h, e) / a.getSLongAt(h + 4, e);
for (var j = [], k = 0; g > k; k++) j[k] = a.getSLongAt(h + 8 * k, e) / a.getSLongAt(h + 4 + 8 * k, e);
return j;
}
}
function d(a, c) {
if ("Exif" != a.getStringAt(c, 4)) return f && console.log("Not valid EXIF data! " + a.getStringAt(c, 4)), 
!1;
var d, g = c + 6;
if (18761 == a.getShortAt(g)) d = !1; else {
if (19789 != a.getShortAt(g)) return f && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), 
!1;
d = !0;
}
if (42 != a.getShortAt(g + 2, d)) return f && console.log("Not valid TIFF data! (no 0x002A)"), 
!1;
if (8 != a.getLongAt(g + 4, d)) return f && console.log("Not valid TIFF data! (First offset not 8)", a.getShortAt(g + 4, d)), 
!1;
var h = b(a, g, g + 8, e.TiffTags, d);
if (h.ExifIFDPointer) {
var i = b(a, g, g + h.ExifIFDPointer, e.Tags, d);
for (var j in i) {
switch (j) {
case "LightSource":
case "Flash":
case "MeteringMode":
case "ExposureProgram":
case "SensingMethod":
case "SceneCaptureType":
case "SceneType":
case "CustomRendered":
case "WhiteBalance":
case "GainControl":
case "Contrast":
case "Saturation":
case "Sharpness":
case "SubjectDistanceRange":
case "FileSource":
i[j] = e.StringValues[j][i[j]];
break;

case "ExifVersion":
case "FlashpixVersion":
i[j] = String.fromCharCode(i[j][0], i[j][1], i[j][2], i[j][3]);
break;

case "ComponentsConfiguration":
i[j] = e.StringValues.Components[i[j][0]] + e.StringValues.Components[i[j][1]] + e.StringValues.Components[i[j][2]] + e.StringValues.Components[i[j][3]];
}
h[j] = i[j];
}
}
if (h.GPSInfoIFDPointer) {
var k = b(a, g, g + h.GPSInfoIFDPointer, e.GPSTags, d);
for (var j in k) {
switch (j) {
case "GPSVersionID":
k[j] = k[j][0] + "." + k[j][1] + "." + k[j][2] + "." + k[j][3];
}
h[j] = k[j];
}
}
return h;
}
var f = !1;
e.Tags = {
36864:"ExifVersion",
40960:"FlashpixVersion",
40961:"ColorSpace",
40962:"PixelXDimension",
40963:"PixelYDimension",
37121:"ComponentsConfiguration",
37122:"CompressedBitsPerPixel",
37500:"MakerNote",
37510:"UserComment",
40964:"RelatedSoundFile",
36867:"DateTimeOriginal",
36868:"DateTimeDigitized",
37520:"SubsecTime",
37521:"SubsecTimeOriginal",
37522:"SubsecTimeDigitized",
33434:"ExposureTime",
33437:"FNumber",
34850:"ExposureProgram",
34852:"SpectralSensitivity",
34855:"ISOSpeedRatings",
34856:"OECF",
37377:"ShutterSpeedValue",
37378:"ApertureValue",
37379:"BrightnessValue",
37380:"ExposureBias",
37381:"MaxApertureValue",
37382:"SubjectDistance",
37383:"MeteringMode",
37384:"LightSource",
37385:"Flash",
37396:"SubjectArea",
37386:"FocalLength",
41483:"FlashEnergy",
41484:"SpatialFrequencyResponse",
41486:"FocalPlaneXResolution",
41487:"FocalPlaneYResolution",
41488:"FocalPlaneResolutionUnit",
41492:"SubjectLocation",
41493:"ExposureIndex",
41495:"SensingMethod",
41728:"FileSource",
41729:"SceneType",
41730:"CFAPattern",
41985:"CustomRendered",
41986:"ExposureMode",
41987:"WhiteBalance",
41988:"DigitalZoomRation",
41989:"FocalLengthIn35mmFilm",
41990:"SceneCaptureType",
41991:"GainControl",
41992:"Contrast",
41993:"Saturation",
41994:"Sharpness",
41995:"DeviceSettingDescription",
41996:"SubjectDistanceRange",
40965:"InteroperabilityIFDPointer",
42016:"ImageUniqueID"
}, e.TiffTags = {
256:"ImageWidth",
257:"ImageHeight",
34665:"ExifIFDPointer",
34853:"GPSInfoIFDPointer",
40965:"InteroperabilityIFDPointer",
258:"BitsPerSample",
259:"Compression",
262:"PhotometricInterpretation",
274:"Orientation",
277:"SamplesPerPixel",
284:"PlanarConfiguration",
530:"YCbCrSubSampling",
531:"YCbCrPositioning",
282:"XResolution",
283:"YResolution",
296:"ResolutionUnit",
273:"StripOffsets",
278:"RowsPerStrip",
279:"StripByteCounts",
513:"JPEGInterchangeFormat",
514:"JPEGInterchangeFormatLength",
301:"TransferFunction",
318:"WhitePoint",
319:"PrimaryChromaticities",
529:"YCbCrCoefficients",
532:"ReferenceBlackWhite",
306:"DateTime",
270:"ImageDescription",
271:"Make",
272:"Model",
305:"Software",
315:"Artist",
33432:"Copyright"
}, e.GPSTags = {
0:"GPSVersionID",
1:"GPSLatitudeRef",
2:"GPSLatitude",
3:"GPSLongitudeRef",
4:"GPSLongitude",
5:"GPSAltitudeRef",
6:"GPSAltitude",
7:"GPSTimeStamp",
8:"GPSSatellites",
9:"GPSStatus",
10:"GPSMeasureMode",
11:"GPSDOP",
12:"GPSSpeedRef",
13:"GPSSpeed",
14:"GPSTrackRef",
15:"GPSTrack",
16:"GPSImgDirectionRef",
17:"GPSImgDirection",
18:"GPSMapDatum",
19:"GPSDestLatitudeRef",
20:"GPSDestLatitude",
21:"GPSDestLongitudeRef",
22:"GPSDestLongitude",
23:"GPSDestBearingRef",
24:"GPSDestBearing",
25:"GPSDestDistanceRef",
26:"GPSDestDistance",
27:"GPSProcessingMethod",
28:"GPSAreaInformation",
29:"GPSDateStamp",
30:"GPSDifferential"
}, e.StringValues = {
ExposureProgram:{
0:"Not defined",
1:"Manual",
2:"Normal program",
3:"Aperture priority",
4:"Shutter priority",
5:"Creative program",
6:"Action program",
7:"Portrait mode",
8:"Landscape mode"
},
MeteringMode:{
0:"Unknown",
1:"Average",
2:"CenterWeightedAverage",
3:"Spot",
4:"MultiSpot",
5:"Pattern",
6:"Partial",
255:"Other"
},
LightSource:{
0:"Unknown",
1:"Daylight",
2:"Fluorescent",
3:"Tungsten (incandescent light)",
4:"Flash",
9:"Fine weather",
10:"Cloudy weather",
11:"Shade",
12:"Daylight fluorescent (D 5700 - 7100K)",
13:"Day white fluorescent (N 4600 - 5400K)",
14:"Cool white fluorescent (W 3900 - 4500K)",
15:"White fluorescent (WW 3200 - 3700K)",
17:"Standard light A",
18:"Standard light B",
19:"Standard light C",
20:"D55",
21:"D65",
22:"D75",
23:"D50",
24:"ISO studio tungsten",
255:"Other"
},
Flash:{
0:"Flash did not fire",
1:"Flash fired",
5:"Strobe return light not detected",
7:"Strobe return light detected",
9:"Flash fired, compulsory flash mode",
13:"Flash fired, compulsory flash mode, return light not detected",
15:"Flash fired, compulsory flash mode, return light detected",
16:"Flash did not fire, compulsory flash mode",
24:"Flash did not fire, auto mode",
25:"Flash fired, auto mode",
29:"Flash fired, auto mode, return light not detected",
31:"Flash fired, auto mode, return light detected",
32:"No flash function",
65:"Flash fired, red-eye reduction mode",
69:"Flash fired, red-eye reduction mode, return light not detected",
71:"Flash fired, red-eye reduction mode, return light detected",
73:"Flash fired, compulsory flash mode, red-eye reduction mode",
77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
89:"Flash fired, auto mode, red-eye reduction mode",
93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",
95:"Flash fired, auto mode, return light detected, red-eye reduction mode"
},
SensingMethod:{
1:"Not defined",
2:"One-chip color area sensor",
3:"Two-chip color area sensor",
4:"Three-chip color area sensor",
5:"Color sequential area sensor",
7:"Trilinear sensor",
8:"Color sequential linear sensor"
},
SceneCaptureType:{
0:"Standard",
1:"Landscape",
2:"Portrait",
3:"Night scene"
},
SceneType:{
1:"Directly photographed"
},
CustomRendered:{
0:"Normal process",
1:"Custom process"
},
WhiteBalance:{
0:"Auto white balance",
1:"Manual white balance"
},
GainControl:{
0:"None",
1:"Low gain up",
2:"High gain up",
3:"Low gain down",
4:"High gain down"
},
Contrast:{
0:"Normal",
1:"Soft",
2:"Hard"
},
Saturation:{
0:"Normal",
1:"Low saturation",
2:"High saturation"
},
Sharpness:{
0:"Normal",
1:"Soft",
2:"Hard"
},
SubjectDistanceRange:{
0:"Unknown",
1:"Macro",
2:"Close view",
3:"Distant view"
},
FileSource:{
3:"DSC"
},
Components:{
0:"",
1:"Y",
2:"Cb",
3:"Cr",
4:"R",
5:"G",
6:"B"
}
}, e.readFromBinaryFile = function(b) {
return a(b);
};
}(), a;
}();
}), define("scripts/promo", [ "./vendor/promise", "./tpl/promoHtml", "./tpl/template" ], function(a, b) {
var c = a("./vendor/promise"), d = a("./tpl/promoHtml"), e = function(a) {
return new c(function(b, c) {
$.ajax({
url:"http://weika.mugeda.com/server/cards.php/cards/recommend",
method:"GET",
dataType:"jsonp",
jsonpCallback:"Mucard_callback",
data:{
crid:a
},
success:function(a) {
b(a);
},
error:function(a) {
c(a);
}
});
});
}, f = function(a) {
var b = $(".sendInfoView");
b && b.remove();
var c = MugedaUrl.current.getQueryObj().res_data;
if (a.recommend) {
var e;
e = d(c ? {
data:a,
res_data:c
} :{
data:a
}), MugedaTracker.fireEvent({
category:"promotion",
action:"view",
value:0,
label:"展示推荐"
});
var f = $("#js-promo");
f[0] ? $("#js-promo").show() :($("#stageParent").append($(e)), f = $("#js-promo"), 
$("#js-promo-show").html(), $("#js-promo-close").on("click", function() {
f.hide(), MugedaTracker.fireEvent({
category:"promotion",
action:"clickCancel",
value:2,
label:"下次吧"
});
}), $("#js-promo-more").on("click", function() {
MugedaTracker.fireEvent({
category:"promotion",
action:"clickMore",
value:1,
label:"更多"
});
var a = encodeURIComponent("http://card.mugeda.com/weixin/card/list.html?m_ref=recommend"), b = encodeURIComponent("http://mp.weixin.qq.com/s?__biz=MzA3MzMwMTgwNQ==&mid=210764570&idx=1&sn=401ef79b4a3d66e858f69434da5257c1#rd");
window.location = c ? "http://m.letoke.com/html/luckyCard/index.html" :"http://weika.mugeda.com/server/cards.php/user/watch?url=" + a + "&watch_url=" + b;
}));
}
};
b.showPromo = function(a) {
e(a).then(f);
};
}), define("scripts/receipt", [ "./tpl/receipt.frame", "./tpl/receipt_item", "./tpl/template", "./vendor/moment", "./vendor/fastclick" ], function(a, b) {
var c = a("./tpl/receipt.frame"), d = a("./tpl/receipt_item"), e = a("./vendor/moment"), f = a("./vendor/fastclick");
new f(document.body);
var g = null, h = null, i = function(a) {
var b = document.createElement("div");
return b.innerHTML = a, b;
};
b.buildFrame = function(a, b) {
for (var d = b.list, f = 0, j = 0, k = 0, l = 0; l < d.length; l++) {
var m = parseInt(d[l].value);
0 == m ? f++ :1 == m ? j++ :2 == m && k++;
}
for (var n = {
title:b.title,
rev:b.replyCount,
time:e(1e3 * b.customTime).format("YYYY-M-D HH:mm"),
thumb:"http://mucard.mugeda.com/weixin/card/cards/" + b.crid + "/" + b.thumb,
back:b.back,
numAttend:f,
numNotAttend:j,
numMaybe:k,
goback:b.redirect,
privateCard:b["private"]
}, o = i(c(n)).childNodes, l = 0; l < o.length; l++) a.appendChild(o[l]);
g = a.getElementsByClassName("main")[0], h = a;
};
var j = function(a) {
var b = e(1e3 * a), c = e(), d = c.diff(b, "hours"), f = c.diff(b, "days"), g = c.diff(b, "months");
return 1 > d ? b.fromNow() :b.format(24 > d ? "Ah:mm" :7 > f ? "dddd" :12 > g ? "M-D" :"YYYY-M-D");
};
b.renderOne = function(a) {
var b = {
attend:parseInt(a.value),
name:a.name,
avatar:a.avatar,
time:j(a.time),
content:decodeURIComponent(a.data).replace(/\n/g, "<br />")
}, c = i(d(b)).childNodes[0];
return c;
}, b.renderAll = function(a) {
for (var c = 0; c < a.length; c++) b.append(b.renderOne(a[c]));
};
var k = function(a, b) {
return a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"));
}, l = function(a, b) {
k(a, b) || (a.className += " " + b);
}, m = function(a, b) {
if (k(a, b)) {
var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
a.className = a.className.replace(c, " ");
}
}, n = null, o = null, p = null, q = function(a) {
if ("all" == a) m(n, "disable"), m(o, "disable"), m(p, "disable"); else {
l(n, "disable"), l(o, "disable"), l(p, "disable");
var b = h.querySelectorAll(".numline ." + a)[0];
m(b, "disable");
}
}, r = "all", s = function(a) {
r = a != r ? a :a = "all", q(a);
for (var b = g.querySelectorAll(".item"), c = 0; c < b.length; c++) {
var d = b[c];
d.style.display = d.querySelectorAll("." + a).length || "all" == a ? "block" :"none";
}
};
b.init = function(a) {
return a ? (a.list.sort(function(a, b) {
return b.time - a.time;
}), b.buildFrame(document.body, a), b.renderAll(a.list), n = h.querySelectorAll(".numline .attend")[0], 
o = h.querySelectorAll(".numline .notattend")[0], p = h.querySelectorAll(".numline .maybe")[0], 
n.addEventListener("click", function() {
s("attend");
}), o.addEventListener("click", function() {
s("notattend");
}), void p.addEventListener("click", function() {
s("maybe");
})) :(alert("抱歉，您没有权限查看回复列表"), void history.back());
}, b.append = function(a) {
g.appendChild(a);
};
}), define("scripts/user", [ "./vendor/zepto", "./message", "./tpl/loading", "./tpl/template", "./tpl/dialog", "./vendor/promise", "./environment", "./utils" ], function(a, b) {
var c = a("./vendor/zepto"), d = a("./message"), e = a("./vendor/promise"), f = a("./environment"), g = a("./utils");
if (!c) return !1;
var h = null, i = function() {
j != h && (h = j, c(".userBtn").trigger("user:status"), c(".gallery").trigger("user:status", j));
}, j = void 0, k = null, l = g.cookie.get("mcardUserName") || "", m = "http://weika.mugeda.com/server", n = "https://weika.mugeda.com/card/app_login.php/login", o = {
login:m + "/app_login.php/login",
register:m + "/app_login.php/add",
check:m + "/app_login.php/check",
out:m + "/app_login.php/out"
};
b.showUserForm = function(a) {
b.getLogin().then(function(b) {
b ? (location.hash = "userInfo", c(document.body).trigger("user:userInfo")) :c(document.body).trigger("user:login", a);
});
}, b.showUserPhoto = function() {
c(document.body).trigger("user:photo");
}, b.login = function(a, b) {
var f = new e(function(e, f) {
return "object" == typeof a ? (c.ajax({
type:"POST",
url:n,
data:a,
xhrFields:{
withCredentials:!0
},
dataType:"json",
success:function(b) {
d.hideLoading(), 0 != b.status ? (d.showConfirm("微信登录出现错误，请重试或使用其他方式登录。", !1), f()) :(d.showMessage("微信登录成功"), 
j = !0, k = b.urid, l = a.username, g.cookie.set("mcardUserName", a.username, 3650, "/"), 
g.cookie.set("headimgurl", a.avatar, 3650, "/"), g.cookie.set("utoken", b.token, 3650, "/"), 
i(), e(b));
},
error:function() {
d.hideLoading(), d.showConfirm("由于网络问题微信登录失败，请重试。", !1), f();
}
}), !1) :(a = ("" || a).replace(/(^\s*)|(\s*$)/g, ""), void (a ? a.length < 6 ? (d.showConfirm("用户名最小长度为6，请检查后重新登录。", !1), 
f()) :/^[a-zA-Z0-9_]+$/.test(a) ? !b || b.length < 6 ? (d.showConfirm("密码格式不正确，请检查后重新登录。", !1), 
f()) :(d.showLoading("正在登录"), c.ajax({
type:"POST",
url:o.login,
data:{
username:a,
password:b
},
xhrFields:{
withCredentials:!0
},
dataType:"json",
success:function(b) {
d.hideLoading(), 0 != b.status ? (d.showConfirm("用户名或密码错误，请重试。", !1), f()) :(d.showMessage("登录成功"), 
j = !0, l = a, g.cookie.set("mcardUserName", a, 3650, "/"), i(), e());
},
error:function() {
d.hideLoading(), d.showConfirm("由于网络问题登录失败，请重试。", !1), f();
}
})) :(d.showConfirm("用户名只能包含字母、数字和下划线，请检查后重新登录。", !1), f()) :(d.showConfirm("用户名为空，请检查后重新登录。", !1), 
f())));
});
return f;
}, b.validateUser = function(a) {
return new e(function(b, c) {
a && (a && 11 == a.length && /^0?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(a) ? b(!1) :c(!0));
});
}, b.validatePwd = function(a) {
return new e(function(b, c) {
!a || a.length < 6 ? c() :b();
});
}, b.validateCaptcha = function(a) {
return new e(function(b, d) {
c.ajax({
type:"POST",
url:o.register,
data:{
nickname:"test_captcha",
pass:"test_captcha",
repass:"test_captcha",
captcha_code:a
},
xhrFields:{
withCredentials:!0
},
dataType:"json",
success:function(a) {
a.error.indexOf("captcha_error") > -1 ? d() :b();
}
});
});
}, b.reg = function(a, b, f, h) {
return new e(function(e, k) {
a = ("" || a).replace(/(^\s*)|(\s*$)/g, ""), d.showLoading("正在注册"), c.ajax({
type:"POST",
url:o.register,
data:{
nickname:a,
pass:b,
repass:f,
captcha_code:h
},
xhrFields:{
withCredentials:!0
},
dataType:"json",
success:function(b) {
d.hideLoading(), 8 == b.status ? (d.showConfirm("手机号 " + a + " 已被占用，请使用其他手机号重新注册。", !1), 
k()) :3 == b.status ? (b.error.indexOf("captcha_error") > -1 ? d.showConfirm("验证码错误，请检查。", !1) :b.error.indexOf("length_error") > -1 ? d.showConfirm("密码长度错误，请检查。", !1) :b.error.indexOf("pass_error") > -1 ? d.showConfirm("两次输入的密码不一致，请检查。", !1) :d.showConfirm("请检查手机号、密码、验证码是否正确。", !1), 
k()) :0 != b.status ? (d.showConfirm("由于网络问题注册失败，请重试。", !1), k()) :(d.showMessage("注册成功"), 
l = a, g.cookie.set("mcardUserName", a, 3650, "/"), j = !0, i(), e());
},
error:function() {
d.hideLoading(), d.showConfirm("由于网络问题注册失败，请重试。", !1), k();
}
});
});
}, b.getLogin = function() {
return new e(function(a) {
void 0 === j ? b.checkLoginFromServer().then(function(b) {
a(b);
}) :a(j);
});
}, b.checkLoginFromServer = function() {
return new e(function(a) {
f.isWeixin() ? a(g.cookie.get("token") ? !0 :!1) :f.isApp2() && c.ajax({
url:o.check,
xhrFields:{
withCredentials:!0
},
dataType:"json",
success:function(b) {
b.urid ? (j = !0, k = b.urid, i(), a(!0)) :(j = !1, k = null, i(), a(!1));
},
error:function() {
j = !1, k = null, i(), a(!1);
}
});
});
}, b.getUserNameFromCookie = function() {
return l = g.cookie.get("mcardUserName") || "";
}, b.logout = function() {
return new e(function(a, b) {
d.showLoading("正在注销"), c.ajax({
type:"POST",
url:o.out,
dataType:"json",
xhrFields:{
withCredentials:!0
},
success:function(c) {
d.hideLoading(), 0 != c.status && 2 != c.status ? (d.showConfirm("由于网络问题注销失败，请重试。", !1), 
b()) :(d.showMessage("注销成功"), g.cookie.set("mcardUserName", "", -1, "/"), g.cookie.set("headimgurl", "", -1, "/"), 
j = !1, k = void 0, i(), a());
},
error:function() {
d.hideLoading(), d.showConfirm("由于网络问题注销失败，请重试。", !1), b();
}
});
});
}, b.getToken = function() {
return new e(function(a, b) {
var c = g.cookie.get("token");
c ? a(c) :b("needLogin");
});
}, b.getUrid = function() {
return new e(function(a, c) {
j && k ? a(k) :j || void 0 == j ? b.checkLoginFromServer().then(function(b) {
b ? a(k) :c("needLogin");
}) :c("needLogin");
});
};
}), define("scripts/userview", [ "./vendor/zepto", "./message", "./tpl/loading", "./tpl/template", "./tpl/dialog", "./user", "./vendor/promise", "./environment", "./utils", "./tpl/login", "./tpl/register", "./tpl/userinfo", "./navibar", "./tpl/navibar", "./page", "./photoservice", "./weixinJs", "wxjs", "./vendor/sha1", "./gallery", "./collectGallery" ], function(a, b) {
var c = a("./vendor/zepto"), d = a("./message"), e = a("./user"), f = a("./tpl/login"), g = a("./tpl/register"), h = a("./tpl/userinfo"), i = a("./navibar"), j = a("./page"), k = a("./photoservice"), l = a("./gallery"), m = a("./collectGallery"), n = a("./utils"), o = a("./environment");
if (!(c && d && e && f && i && j && g)) return !1;
var p = function() {
c(document.body).bind("user:login", q), c(document.body).bind("user:userInfo", s), 
c(document.body).bind("user:photo", v), c(document.body).bind("user:collect", t), 
c(document.body).bind("user:audio", u);
};
setTimeout(function() {
p();
}, 0);
var q = b.loginView = function(a, b) {
b = b || {};
var g, h = i.getNaviBar("登录", {
hideUserIcon:!0,
cancelLabel:"取消"
}), k = c(f({
wexinloginshow:!1
})), l = function(a) {
var a = JSON.parse(a), f = {
from:"wx",
unionid:a.unionid,
username:a.nickname,
avatar:a.headimgurl
};
d.showLoading("正在登录"), e.login(f).then(function() {
j.remove(g.id), j.back(), c.isFunction(b.callback) && b.callback(!0);
});
}, m = function(a) {
var b = JSON.parse(a);
b && 0 == b.status && b.info && b.info.weixinInstalled && (k = c(f({
wexinloginshow:!0
}))), n();
}, n = function() {
k && (k.find(".weixin_login").on("click", function() {
window.mucard && window.mucard.wechatLogin ? mucard.wechatLogin(l) :d.showMessage("微信登录出错，请稍后重试或使用其他方式登录。");
}), k.children().first().before(h.navibarTpl), k.find(".cancelBtn").one("click", function() {
j.remove(g.id), j.back(), c.isFunction(b.callback) && b.callback(!1);
}), k.find(".login").bind("click", function() {
e.login(k.find("input.username").val(), k.find("input.password").val()).then(function() {
j.remove(g.id), j.back(), c.isFunction(b.callback) && b.callback(!0);
});
}), k.find(".register").bind("click", function() {
r({
loginCallback:function() {
j.remove(g.id), j.back(), c.isFunction(b.callback) && b.callback(!0);
}
});
}), k.find("input.username").val(e.getUserNameFromCookie()), g = j.setNewPage("login", {}), 
g.dom.append(k), j.addToLayout(g.id), j.setActive(g.id, !0));
};
if (o.isWeixin()) k = c(f({
wexinloginshow:!0
})), n(); else if (o.isApp2()) if (window.mucard && window.mucard.getEnvironment) mucard.getEnvironment(m); else {
var p = '{"status": 0, "desc": "OK", "info": {"weixinInstalled": true } }';
m(p);
} else {
var p = '{"status": 0, "desc": "OK", "info": {"weixinInstalled": false } }';
m(p);
}
}, r = function(a) {
a = a || {};
var b = i.getNaviBar("注册", {
hideUserIcon:!0,
cancelLabel:"返回"
}), f = c(g({}));
f.children().first().before(b.navibarTpl), f.find(".cancelBtn").one("click", function() {
j.remove(o.id), j.back();
});
var h = 3;
f.find(".confirm_phone").on("click", function() {
if ($this = c(this), !$this.hasClass("disable")) {
c(this).html("已发送验证码").addClass("disable"), 0 >= h && (h = 3);
var a = setInterval(function() {
h--, f.find(".resent").html(h), 0 == h && ($this.removeClass("disable").html("重新发送"), 
clearTimeout(a));
}, 1e3);
}
});
var k;
f.find("input.username").on("blur", function() {
k = !1;
var a = c(this).val();
"" != a ? e.validateUser(a).then(function() {
k = !0, f.find("input.username").next("span").css("display", "block").removeClass("validate_false").addClass("validate_ture");
}, function() {
k = !1, f.find("input.username").next("span").css("display", "block").removeClass("validate_ture").addClass("validate_false");
}) :f.find("input.username").next("span").css("display", "block").removeClass("validate_ture").addClass("validate_false");
});
var l;
f.find("input.password").on("blur", function() {
l = !1;
var a = c(this).val();
"" != a ? e.validatePwd(a).then(function() {
l = !0, f.find("input.password").next("span").css("display", "block").removeClass("validate_false").addClass("validate_ture");
}, function() {
l = !1, f.find("input.password").next("span").css("display", "block").removeClass("validate_ture").addClass("validate_false");
}) :f.find("input.password").next("span").css("display", "block").removeClass("validate_ture").addClass("validate_false");
});
var m;
f.find("input.captcha").on("blur", function() {
m = !1;
var a = c(this).val();
"" != a ? e.validateCaptcha(a).then(function() {
m = !0, f.find(".captchaImg").next("span").css("display", "block").removeClass("validate_false").addClass("validate_ture");
}, function() {
m = !1, f.find(".captchaImg").next("span").css("display", "block").removeClass("validate_ture").addClass("validate_false");
}) :f.find(".captchaImg").next("span").css("display", "block").removeClass("validate_ture").addClass("validate_false");
});
var n = function() {
f.find(".captchaImg").attr("src", "https://weika.mugeda.com/card/captcha.php?" + Math.random());
};
f.find(".captchaImg").bind("click", n), n(), f.find(".register").bind("click", function() {
k && l && m ? e.reg(f.find("input.username").val(), f.find("input.password").val(), f.find("input.password").val(), f.find("input.ver-code").val()).then(function() {
j.remove(o.id), j.back(), c.isFunction(a.loginCallback) && a.loginCallback();
}) :d.showConfirm("注册信息有误，请修改后重试。");
});
var o = j.setNewPage("register", {});
o.dom.append(f), j.addToLayout(o.id), j.setActive(o.id, !0);
}, s = b.userInfoView = function() {
var a = i.getNaviBar("个人中心", {
hideUserIcon:!0
}), b = c(h({
nickname:n.cookie.get("mcardUserName"),
headimgurl:n.cookie.get("headimgurl")
}));
b.children().first().before(a.navibarTpl), b.find(".item-home").one("click", function() {
location.replace("index.html#0");
}), b.find(".logout").bind("click", function() {
e.logout().then(function() {
location.hash = "", j.remove(f.id), j.back();
});
}), b.find(".item-imgLib").bind("click", function() {
location.hash = "photoView", c(document.body).trigger("user:photo", {
viewMode:"view"
});
}), b.find(".item-audioLib").bind("click", function() {
location.hash = "audioView", c(document.body).trigger("user:audio", {
viewMode:"view"
});
}), b.find(".item-collectLib").bind("click", function() {
location.hash = "collectView", c(document.body).trigger("user:collect", {
viewMode:"view"
});
});
var d = b.find(".item-help");
d.click(function() {
location.assign("list.html#255");
}), b.on("touchstart", ".profile-items li", function() {
var a = c(this);
a.css("background-color", "#e4e4e4");
}), b.on("touchend", ".profile-items li", function() {
var a = c(this);
a.css("background-color", "#fff");
}), b.on("touchstart", ".logout", function() {
var a = c(this);
a.css("background-color", "#e4e4e4");
}), b.on("touchend", ".logout", function() {
var a = c(this);
a.css("background-color", "#fff");
}), b.find(".username").html(e.getUserNameFromCookie());
var f = j.setNewPage("userinfo", {
background:"#f0eff5"
});
f.dom.append(b), j.addToLayout(f.id), j.setActive(f.id, !0);
}, t = b.userCollectView = function(b, e) {
e = e || {};
var f = i.getNaviBar("我的收藏", {
hideUserIcon:!0,
cancelLabel:"返回",
rightTpl:c('<span class="btnEdit btn">编辑</span><span class="btnDelete btn btn-disable-grey">删除</span><span class="btnOk btn" style="display: none">确定</span>')
});
f.navibarTpl.on("click", ".btnEdit", function() {
g = "edit";
var a = function() {
c(".gallery").find(".coverImage").css("margin-left", "25px"), c(".gallery").find(".imgItem").removeClass("couldOpen");
};
o(a);
}), f.navibarTpl.on("click", ".btnOk", function() {
c.isFunction(e.callback) && k && e.callback(k), j.remove(p.id), j.back();
}), f.navibarTpl.on("click", ".cancelBtn", function() {
if ("edit" == g) {
g = "view";
var a = function() {
c(".gallery").find(".coverImage").css("margin-left", "0"), c(".gallery").find(".imgItem").addClass("couldOpen");
};
o(a);
} else location.hash = "userInfo", c.isFunction(e.callback) && e.callback(null), 
j.remove(p.id), j.back();
}), f.navibarTpl.on("click", ".btnDelete", function() {
c.isArray(l) && l.length && d.showConfirm("选中" + l.length + "张微卡收藏，确认删除？", !0, {
labelConfirm:"确认",
confirm:function() {
var b = [];
l.forEach(function(a) {
h.imageData[a] && b.push(h.imageData[a].id);
}), d.showLoading("正在删除"), a.async("./collectService", function(a) {
a.deleteCollect(b).then(function() {
d.hideLoading(), m.removeItem(h, l), l = [];
}, function() {
d.hideLoading(), d.showConfirm("删除收藏时出现网络错误，请重试", !1);
});
});
}
});
});
var g = e.viewMode || "view", h = null, k = null, l = null, n = function() {}, o = function(a) {
"select" == g ? (f.navibarTpl.find(".btnEdit").show(), f.navibarTpl.find(".btnDelete").hide(), 
q.find(".message-edit").hide(), q.find(".message-select").show(), h ? (m.check(!1, h), 
h.forceSelect = !1) :n = function() {
m.check(!1, h), h.forceSelect = !1;
}, l = null) :"edit" == g ? (f.navibarTpl.find(".btnEdit").hide(), f.navibarTpl.find(".btnDelete").show(), 
q.find(".message-edit").show(), q.find(".message-select").hide(), h ? (m.check(!1, h), 
h.forceSelect = !0) :n = function() {
m.check(!1, h), h.forceSelect = !0;
}, l = []) :"view" == g && (f.navibarTpl.find(".btnEdit").show(), f.navibarTpl.find(".btnDelete").hide(), 
q.find(".message-edit").show(), q.find(".message-select").hide()), a && c.isFunction(a) && a();
}, p = j.setNewPage("userCollect", {});
p.dom.append(f.navibarTpl), j.addToLayout(p.id), j.setActive(p.id, !0);
var q = c('<div class="content clearfix" style="padding-left:8px;padding-right: 8px;"> <div class="gallery"></div></div>');
p.dom.append(q), o(), a.async("./collectService", function(a) {
a.getUserCollectList().then(function(a) {
if (0 === a.length) return void d.showMessage("还有没有收藏");
var i = function() {
j.currentId == p.id ? (j.remove(p.id), j.back(), t(b, e)) :c(document.body).one("page:changed", function() {
i();
});
};
q.find(".gallery").one("user:status", i), h = m.init(q.find(".gallery").first(), a, {
minWidth:96,
src:null,
title:null,
padding:16,
ratio:1,
callback:function(a, b) {
o(a, b);
},
render:!0,
cover:!0,
canSelect:!0
}), n();
var o = function(a, b) {
var c = b.id;
if (k = a, "select" == g) null != l && c == l ? (m.check(!1, h, c), l = null) :null != l && c != l ? (m.check(!1, h, l), 
m.check(!0, h, c), l = c) :(m.check(!0, h, c), l = c), l ? f.navibarTpl.find(".btnOk").show() :f.navibarTpl.find(".btnOk").hide(); else if ("edit" == g) {
var d = l.indexOf(c);
d > -1 ? (l.splice(d, 1), m.check(!1, h, c)) :(l.push(c), m.check(!0, h, c)), l.length > 0 ? f.navibarTpl.find(".btnDelete").removeClass("btn-disable-grey") :f.navibarTpl.find(".btnDelete").addClass("btn-disable-grey");
}
};
}, function(a) {
d.showMessage(a), j.remove(p.id), j.back();
});
});
}, u = b.userAudioView = function(a, b) {
b = b || {}, b.type = "audio", v(a, b);
}, v = b.userPhotoView = function(a, b) {
b = b || {};
var e = "audio" == b.type ? "语音" :"图片", f = "audio" == b.type, g = i.getNaviBar("我的" + e + "库", {
hideUserIcon:!0,
cancelLabel:"返回",
rightTpl:c('<span class="btnEdit btn">编辑</span><span class="btnDelete btn btn-disable-grey" style="display: none">删除</span><span class="btnOk btn" style="display: none">确定</span>')
});
g.navibarTpl.on("click", ".btnEdit", function() {
h = "edit", r();
}), g.navibarTpl.on("click", ".btnOk", function() {
c.isFunction(b.callback) && n && b.callback(n), j.remove(s.id), j.back();
}), g.navibarTpl.on("click", ".cancelBtn", function() {
"select" == h ? (j.remove(s.id), j.back()) :"edit" == h ? (h = "view", r()) :"view" == h && (location.hash = "userInfo", 
c.isFunction(b.callback) && b.callback(null), j.remove(s.id), j.back());
}), g.navibarTpl.on("click", ".btnDelete", function() {
c.isArray(p) && p.length && d.showConfirm(e + "删除后，若已有微卡使用了这个图片，该微卡可能会显示异常。\n\n选中" + p.length + "个" + e + "，确认删除？", !0, {
labelConfirm:"确认",
confirm:function() {
var a = [];
p.forEach(function(b) {
m.imageData[b] && a.push(f ? m.imageData[b].raw.audioUrl :m.imageData[b].src);
}), d.showLoading("正在删除"), k.deletePhoto(a).then(function() {
d.hideLoading(), l.removeItem(m, p), p = [];
}, function() {
d.hideLoading(), d.showConfirm("删除" + e + "时出现网络错误，请重试", !1);
});
}
});
});
var h = b.viewMode || "view", m = null, n = null, p = null, q = function() {}, r = function() {
"select" == h ? (g.navibarTpl.find(".btnEdit").hide(), g.navibarTpl.find(".btnDelete").hide(), 
g.navibarTpl.find(".btnOk").hide(), t.find(".message-edit").hide(), t.find(".message-select").show(), 
m ? (l.check(!1, m), m.forceSelect = !1) :q = function() {
l.check(!1, m), m.forceSelect = !1;
}, p = null) :"edit" == h ? (g.navibarTpl.find(".btnEdit").hide(), g.navibarTpl.find(".btnDelete").show(), 
t.find(".message-edit").show(), t.find(".message-select").hide(), m ? (l.check(!1, m), 
m.forceSelect = !0) :q = function() {
l.check(!1, m), m.forceSelect = !0;
}, p = []) :"view" == h && (g.navibarTpl.find(".btnEdit").show(), g.navibarTpl.find(".btnDelete").hide(), 
t.find(".message-edit").show(), t.find(".message-select").hide(), m ? (l.check(!1, m), 
m.forceSelect = !1) :q = function() {
l.check(!1, m), m.forceSelect = !1;
}, p = null);
}, s = j.setNewPage("userPhoto", {});
s.dom.append(g.navibarTpl), j.addToLayout(s.id), j.setActive(s.id, !0);
var t = c('<div class="content clearfix" style="padding-left:8px;padding-right: 8px;"> <small class="message-edit"><i class="fa fa-info-circle"></i> <b>提示：</b>请直接在定制微卡过程上传你需要定制的' + (f ? "语音，语音" :"头像图片，图片") + '库会为你自动保存，快捷重复使用节省流量。</small> <small class="message-select"><i class="fa fa-info-circle"></i> <b>选择模式：</b>点击想要使用的' + (f ? "语音" :"图片") + '。然后点击右上角确认选择，或者点击左上角“取消”返回微卡定制。</small> <small class="message-app"><br/><i class="fa fa-info-circle"></i> 如果需要上传新的' + (f ? "语音" :"图片") + '，您需要使用卡司令应用。 <a class="" href="' + o.getHost() + '/card/install.html">点击这里安装</a> 。</small> <div class="gallery clearfix"></div></div>');
s.dom.append(t), (o.isApp2() || !f) && t.find(".message-app").hide();
var u = "audio" == b.type ? "audio" :"image";
if (r(), k.getUserPhotoList(u).then(function(d) {
var e = d.assets, i = d.v, k = function() {
j.currentId == s.id ? (j.remove(s.id), j.back(), v(a, b)) :c(document.body).one("page:changed", function() {
k();
});
};
t.find(".gallery").one("user:status", k), null == i && (e = e.map(function(a) {
return {
url:a
};
})), f && (e = e.map(function(a) {
return a.audioUrl = a.url, a.url = "images/record.png", a.time = a.time.split("-")[1] + "-" + a.time.split("-")[2], 
a;
}));
var o = f ? 90 :100;
m = l.init(t.find(".gallery").first(), e, {
minWidth:o,
src:"url",
title:"0.1.1" == i ? "time" :null,
padding:16,
ratio:1,
callback:function(a, b) {
r(a, b);
},
render:!0,
cover:!0,
canSelect:!0,
tplCallback:function(a) {
f && a.children().addClass("imNotPlaying");
},
isAudio:f
}), q();
var r = function(a, b) {
var c = b.id;
if (n = a, "select" == h) null != p && c == p ? (l.check(!1, m, c), p = null) :null != p && c != p ? (l.check(!1, m, p), 
l.check(!0, m, c), p = c) :(l.check(!0, m, c), p = c), p ? g.navibarTpl.find(".btnOk").show() :g.navibarTpl.find(".btnOk").hide(); else if ("edit" == h) {
var d = p.indexOf(c);
d > -1 ? (p.splice(d, 1), l.check(!1, m, c)) :(p.push(c), l.check(!0, m, c)), p.length > 0 ? g.navibarTpl.find(".btnDelete").removeClass("btn-disable-grey") :g.navibarTpl.find(".btnDelete").addClass("btn-disable-grey");
} else "view" == h && (p = c);
f && y(b, p);
};
}, function(a) {
d.showMessage(a), j.remove(s.id), j.back();
}), f) {
window.Audio || (window.Audio = function(a) {
this.play = function() {}, this.pause = function() {}, this.load = function() {}, 
this.loop = !0, this.src = a, this.paused = !1, this.addEventListener = function() {}, 
this.removeEventListener = function() {};
});
var w = new Audio(), x = function() {
w.currentDom.removeClass("imPlaying");
};
w.addEventListener("ended", x), c(document.body).one("page:changed", function() {
w.currentDom && w.pause(), w.removeEventListener("ended", x);
});
var y = function(a, b) {
var c = a.dom.find(".coverImage"), d = a.id;
b ? (c.addClass("imPlaying"), w.currentId == d ? w.play() :(w.currentDom && w.currentDom.removeClass("imPlaying"), 
w.currentId = d, w.currentDom = c, w.src = a.raw.audioUrl, w.play())) :w.currentDom && (w.currentDom.removeClass("imPlaying"), 
w.currentId = null, w.currentDom = null, w.pause());
};
}
};
}), define("scripts/utils", [ "./environment", "./vendor/zepto", "./message", "./tpl/loading", "./tpl/template", "./tpl/dialog", "./vendor/promise" ], function(a, b) {
var c = a("./environment"), d = a("./message"), e = a("./vendor/promise");
b.config = {
MAX_CUSTOM_LENGTH:1024
}, b.init = function() {
k(), n(), l(), m(function() {
o(), p(g, h);
});
}, b.reportGATime = function() {
var a = new Date().getTime() - window.pageLoadTime;
c.isMu() ? window.ga && ga("send", "timing", "微卡3.0版界面", "界面显示时间", a, document.title) :window._gaq && _gaq.push([ "_trackTiming", "微卡2.0版界面", "界面显示时间", a, document.title, 1 ]);
}, b.fixIOSInputProblem = function(a) {
var b;
a(document).on("focus", "input, textarea, select", function() {
a.os.ios && a(".navi").css("position", "absolute"), b = document.body.scrollTop;
}), a(document).on("blur", "input, textarea, select", function() {
a.os.ios ? (a(".navi").css("position", "fixed"), setTimeout(function() {
a(".navi").css("top", 0);
}, 0)) :setTimeout(function() {
document.body.scrollTop < 0 && window.scrollTo(0, b);
}, 0);
});
}, b.MugedaUrl = window.MugedaUrl, b.cookie = {
get:function(a) {
var b = new RegExp("(^| )" + a + "(?:=([^;]*))?(;|$)"), c = document.cookie.match(b);
return c && c[2] ? unescape(c[2]) :"";
},
set:function(a, b, c) {
var d = new Date(), e = arguments[2] || 24 * (c || 7) * 60, f = arguments[3] || window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/") + 1), g = arguments[4] || ".mugeda.com", h = arguments[5] || !1;
e ? d.setMinutes(d.getMinutes() + parseInt(e)) :"", document.cookie = a + "=" + escape(b) + (e ? ";expires=" + d.toGMTString() :"") + (f ? ";path=" + f :"") + (g ? ";domain=" + g :"") + (h ? ";secure" :"");
}
}, b.localStorage = {
get:function(a) {
if (window.localStorage && localStorage.getItem) try {
return localStorage.getItem(a);
} catch (b) {
return null;
}
},
set:function(a, c, d) {
if (window.localStorage && localStorage.getItem) try {
localStorage.setItem(a, c);
} catch (e) {
if (!d) try {
localStorage.clear(), b.localStorage.set(a, c, !0);
} catch (e) {}
}
}
};
var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
b.base64 = {
decode:function(a) {
function b(a) {
for (var b = "", c = 0, d = c1 = c2 = 0; c < a.length; ) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), 
c++) :d > 191 && 224 > d ? (c2 = a.charCodeAt(c + 1), b += String.fromCharCode((31 & d) << 6 | 63 & c2), 
c += 2) :(c2 = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), b += String.fromCharCode((15 & d) << 12 | (63 & c2) << 6 | 63 & c3), 
c += 3);
return b;
}
var c, d, e, g, h, i, j, k = "", l = 0;
for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < a.length; ) g = f.indexOf(a.charAt(l++)), 
h = f.indexOf(a.charAt(l++)), i = f.indexOf(a.charAt(l++)), j = f.indexOf(a.charAt(l++)), 
c = g << 2 | h >> 4, d = (15 & h) << 4 | i >> 2, e = (3 & i) << 6 | j, k += String.fromCharCode(c), 
64 != i && (k += String.fromCharCode(d)), 64 != j && (k += String.fromCharCode(e));
return k = b(k);
},
encode:function(a) {
var b, c, d, e, g, h, i, j = function(a) {
a = a.replace(/\r\n/g, "\n");
for (var b = "", c = 0; c < a.length; c++) {
var d = a.charCodeAt(c);
128 > d ? b += String.fromCharCode(d) :d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), 
b += String.fromCharCode(63 & d | 128)) :(b += String.fromCharCode(d >> 12 | 224), 
b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128));
}
return b;
}, k = "", l = 0;
for (a = j(a); l < a.length; ) b = a.charCodeAt(l++), c = a.charCodeAt(l++), d = a.charCodeAt(l++), 
e = b >> 2, g = (3 & b) << 4 | c >> 4, h = (15 & c) << 2 | d >> 6, i = 63 & d, isNaN(c) ? h = i = 64 :isNaN(d) && (i = 64), 
k = k + f.charAt(e) + f.charAt(g) + f.charAt(h) + f.charAt(i);
return k;
}
}, b.getCrid = function() {
return g;
}, b.isCustomLoad = function() {
return h;
}, b.isSlideCard = function() {
return i;
}, b.setMode = function(a) {
j = a;
}, b.isCssMode = function() {
return "css" == j;
}, b.getParam = function(a) {
var b = window.location.search, c = new RegExp("(\\?|&)" + a + "=([^&?]*)", "i"), d = b.match(c);
return d ? d[2] :void 0;
}, b.removeParam = function(a, b) {
var c, d = b.split("?")[0], e = [], f = -1 !== b.indexOf("?") ? b.split("?")[1] :"";
if ("" !== f) {
e = f.split("&");
for (var g = e.length - 1; g >= 0; g -= 1) c = e[g].split("=")[0], c === a && e.splice(g, 1);
d = d + "?" + e.join("&");
}
return d;
}, b.escapeHTML = function() {
var a = {
"&":"&amp;",
"<":"&lt;",
">":"&gt;",
'"':"&quot;",
"'":"&#x27;",
"/":"&#x2F;"
}, b = /[&<>"'\/]/g;
return function(c) {
return ("" + c).replace(b, function(b) {
return a[b];
});
};
}(), b.load = function(a, b) {
return new e(function(c, d) {
if ("js" == a) {
var e = document.createElement("script");
e.src = b, document.body.appendChild(e), e.onload = function() {
document.body.removeChild(e), c();
}, e.onerror = function() {
document.body.removeChild(e), d();
};
}
});
};
var g = null, h = !1, i = !1, j = "player", k = function() {
window.APPVER = 2.2, window.MugedaUrl = b.MugedaUrl, window.cardFrame = window.cardFrame || {}, 
window.cardFrame.MugedaUrl = b.MugedaUrl, window.cardFrame.Message = d;
}, l = function() {
var a = b.MugedaUrl.current, e = !1, f = a.getQueryObj();
if ("true" == f.auth && (b.cookie.set("cookie_openid", "1", 3650), delete f.auth, 
e = !0), "false" == f.auth && (b.cookie.set("cookie_openid", "0", -1), delete f.auth, 
e = !0), "1" == f.followed && (b.cookie.set("followed", "1", 7), delete f.followed, 
e = !0), "0" == f.followed && (b.cookie.set("followed", "0", 7), delete f.followed, 
e = !0), "hideToolBar" == MugedaUrl.current.getFragment() && (sessionStorage.setItem("hideToolBar", "1"), 
MugedaUrl.current.setFragment("0"), location.href = MugedaUrl.current.getURL()), 
f.token && b.cookie.set("token", f.token, 3650), "a" == f.weiReg && (b.localStorage.set("weiReg", "a"), 
delete f.weiReg, e = !0), f.crid && (location.hash = ""), f.successed && (delete f.successed, 
d.showConfirm("收藏成功\n可在微卡列表底部个人中心 > 我的收藏中查看。", !0)), f.oid) {
var g = b.localStorage.get("oid"), h = f.oid;
g != h && (b.localStorage.set("oid", "|" + h), b.localStorage.set("wantOid", 1)), 
delete f.oid, e = !0;
}
MugedaUrl.current.getQueryObj().res_data && !MugedaUrl.current.getQueryObj().token && (f.needToken = 1), 
(f.needToken || f.m_needToken) && (f.m_needToken && (f.needToken = f.m_needToken), 
a.setHost("weika.mugeda.com"), a.setProtocol("http"), a.setPort("80"), a.setPathname("/server/cards.php/open"), 
location.href.indexOf("cardX") > -1 && (a.getQueryObj().m_path = encodeURIComponent("http://cdn-cn.mugeda.com/weixin/cardX/index.html")), 
e = !0), e && (c.isApp() || c.isWeixin()) && (window.alert = function() {}, location.href = MugedaUrl.current.getURL());
}, m = function(c) {
var d = b.MugedaUrl.current, f = d.getQueryObj(), g = f.plug;
if (g) {
var h = g.split("|");
h = h.map(function(a) {
return "scripts/" + a + "/index.js";
}), a.async(h, function() {
var a = Array.prototype.map.call(arguments, function(a) {
return a.init();
});
e.all(a).then(c, c);
});
} else setTimeout(c);
}, n = function() {
location.host.indexOf("mugeda.com") > -1 && (document.domain = "mugeda.com"), c.isPublic() || top.location === self.location || top.containIframe || (window.alert = function() {}, 
top.location.href = self.location.href);
}, o = function() {
var a = b.MugedaUrl.current.getQueryObj();
g = a.crid, 0 == (g || "").indexOf("_") ? (g = g.replace("_", ""), h = !0) :0 == (g || "").indexOf("!") && (i = !0, 
g = g.replace("!", ""));
}, p = function(b, c) {
a.async("./main", function(a) {
a.init(b, c);
});
};
}), define("scripts/weiOfficial", [ "./tpl/weiofficial", "./tpl/template", "./navibar", "./tpl/navibar", "./environment", "./vendor/zepto", "./message", "./tpl/loading", "./tpl/dialog", "./page", "./utils", "./vendor/promise" ], function(a, b) {
var c = a("./tpl/weiofficial"), d = a("./navibar"), e = a("./page"), f = (a("./environment"), 
a("./message")), g = (a("./page"), a("./utils"));
b.init = function() {
$(document.body).bind("weixin:official", h);
}, b.chk = function() {
window.localStorage && localStorage.setItem && ("a" == localStorage.getItem("chkAuth") ? localStorage.setItem("chkAuth", "b") :"a" == localStorage.getItem("weiReg") && (localStorage.setItem("weiReg", "b"), 
$(document.body).trigger("weixin:official")));
};
var h = b.showAttendForm = function() {
var b = d.getNaviBar("个人中心", {
hideUserIcon:!0,
hideWeiIcon:!0
}), h = parseInt(g.cookie.get("followed")), i = $(c({
followed:h
}));
i.children().first().before(b.navibarTpl), i.find(".item-home").one("click", function() {
location.replace("list.html");
});
var j = i.find(".nickname"), k = i.find(".headimgurl"), l = function() {
$.ajax({
url:"http://weika.mugeda.com/server/cards.php/userinfo",
dataType:"json",
data:{
token:$.cookie.get("token"),
t:+new Date(),
from:"uc"
},
success:function(a) {
0 == a.status ? (window.localStorage && localStorage.setItem && (localStorage.setItem("nickname", a.nickname), 
localStorage.setItem("headimgurl", a.headimgurl)), j.html(a.nickname), k.attr("src", a.headimgurl)) :f.showMessage("头像昵称加载出错，请稍候再试");
},
error:function() {
f.showMessage("头像昵称加载出错，请稍候再试");
}
});
};
window.localStorage && localStorage.getItem && (localStorage.getItem("nickname") && localStorage.getItem("headimgurl") ? (j.html(localStorage.getItem("nickname")), 
k.attr("src", localStorage.getItem("headimgurl"))) :l()), i.find(".logout").bind("click", function() {
g.cookie.set("cookie_openid", "", -1), g.cookie.set("followed", "", -1), g.cookie.set("token", "", -1), 
location.hash = "", e.remove(q.id), e.back(), f.showMessage("登出成功");
});
var m = i.find(".item-help");
m.click(function() {
location.assign("list.html#255");
});
var n = i.find(".item-about");
n && n.click(function() {
location.assign("about.html");
});
var o = i.find(".item-imgLib");
o.click(function(b) {
location.hash = "photoView", a.async("./userview", function(a) {
a.userPhotoView(b, {
viewMode:"view"
});
});
}), i.on("touchstart", ".profile-items li", function() {
var a = $(this);
a.css("background-color", "#e4e4e4");
}), i.on("touchend", ".profile-items li", function() {
var a = $(this);
a.css("background-color", "#fff");
}), i.on("touchstart", ".logout", function() {
var a = $(this);
a.css("background-color", "#e4e4e4");
}), i.on("touchend", ".logout", function() {
var a = $(this);
a.css("background-color", "#fff");
});
var p = i.find(".item-collectLib");
p.click(function(b) {
location.hash = "collectView", a.async("./userview", function(a) {
a.userCollectView(b, {
viewMode:"view"
});
});
});
var q = e.setNewPage("weiOfficial", {
background:"#f0eff5"
});
q.dom.append(i), e.addToLayout(q.id), e.setActive(q.id, !0);
};
}), define("scripts/weixinJs", [ "wxjs", "./environment", "./vendor/zepto", "./vendor/promise", "./vendor/sha1", "./utils", "./message", "./tpl/loading", "./tpl/template", "./tpl/dialog" ], function(a, b) {
var c = window.wx_mugeda_mock || a("wxjs"), d = a("./environment"), e = a("./vendor/promise"), f = a("./vendor/sha1"), g = a("./utils"), h = Math.floor(1e10 * Math.random()).toString(26), i = /micromessenger\/(\d+).(\d+).?(\d?)\s?/, j = navigator.userAgent.toLowerCase().match(i), k = 0;
j && j.length > 3 && (k = j[1] + "." + j[2] + j[3]);
var l = b.wxjs_status = {
newapi:k > 6.015,
config_ok:void 0,
friend_share_ok:!1,
timeline_share_ok:!1,
qq_share_ok:!1,
weibo_share_ok:!1,
custom_info:null,
last_error:null,
double_checked:!1
}, m = [];
b.getWx = function() {
return new e(function(a) {
l.config_ok ? a(c) :m.push(a);
});
}, b.init = function() {
var a = function(a, b) {
var e = new Date().getTime(), h = window.location.href, i = "jsapi_ticket=" + a + "&noncestr=" + b + "&timestamp=" + e + "&url=" + h, j = f.hash(i);
c.ready(function() {
l.config_ok = l.newapi && void 0 === l.config_ok ? !0 :!1;
var a = g.isSlideCard() && "" == g.getCrid();
a ? c.hideOptionMenu() :c.showOptionMenu(), c.checkJsApi({
jsApiList:[ "chooseImage", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "previewImage", "uploadImage", "downloadImage", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "downloadVoice", "hideOptionMenu", "showOptionMenu", "closeWindow", "hideMenuItems", "showMenuItems", "scanQRCode", "chooseWXPay" ],
success:function(a) {
"checkJsApi:ok" == a.errMsg && (l.friend_share_ok = a.checkResult.onMenuShareAppMessage, 
l.timeline_share_ok = a.checkResult.onMenuShareTimeline, l.qq_share_ok = a.checkResult.onMenuShareQQ, 
l.weibo_share_ok = a.checkResult.onMenuShareWeibo, setTimeout(function() {
m.forEach(function(a) {
a(c);
});
}));
},
fail:function() {}
}), d.isMu() && Mu.cacheAudio();
}), c.error(function(a) {
if (l.newapi) {
if (0 == a.errMsg.indexOf("config:")) {
l.config_ok = !1;
var b = function() {
return window.MugedaTracker ? void MugedaTracker.fireEvent({
category:"exception",
action:"ticket",
label:"source=json&time=" + now_time + "&ticket=" + escape(JSON.stringify(data)),
value:0
}) :setTimeout(b, 2e3);
};
b();
}
a = a || {}, l.last_error = JSON.stringify(a), ga("errorTracker.send", {
hitType:"event",
eventCategory:"微信异常",
eventAction:"微信异常",
eventLabel:"ua=" + navigator.userAgent + "&msg=" + JSON.stringify(a)
});
}
}), c.config({
debug:MugedaUrl.current.getQueryObj().m_dbg ? !0 :!1,
appId:"wx75babd529e23776c",
timestamp:e,
nonceStr:b,
signature:j,
jsApiList:[ "chooseImage", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "previewImage", "uploadImage", "downloadImage", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "downloadVoice", "hideOptionMenu", "showOptionMenu", "closeWindow", "hideMenuItems", "showMenuItems", "scanQRCode", "chooseWXPay" ]
});
};
$.ajax({
url:d.getHost() + "/weixin/card/wx_js_ticket.json",
dataType:"jsonp",
jsonpCallback:"wx_ticket_callback",
success:function(b) {
var c = parseInt(b.creation_time), d = Math.floor(.001 * new Date().getTime());
if (MugedaUrl.current.getQueryObj().m_dbg && alert("token: " + b.ticket + ", time: " + b.creation_time + ", span: " + (d - c)), 
d - c > 7100) {
var e = function() {
return window.MugedaTracker ? void MugedaTracker.fireEvent({
category:"exception",
action:"ticket",
label:"source=json&time=" + d + "&ticket=" + escape(JSON.stringify(b)),
value:0
}) :setTimeout(e, 2e3);
};
e();
} else a(b.ticket, h);
},
error:function() {}
});
};
}), define("scripts/wx_login", [ "./message", "./vendor/zepto", "./tpl/loading", "./tpl/template", "./tpl/dialog", "./user", "./vendor/promise", "./environment", "./utils", "./page" ], function(a) {
var b = a("./message"), c = a("./user"), d = (a("./page"), function(a) {
var b = window.location.search, c = new RegExp("(\\?|&)" + a + "=([^&?]*)", "i"), d = b.match(c);
return d ? d[2] :void 0;
}), e = function(a) {
a = JSON.parse(a);
var e = {
from:"wx",
unionid:a.unionid,
username:a.nickname,
avatar:a.headimgurl
};
b.showLoading("正在登录"), c.login(e).then(function() {
var a = d("url");
a ? window.location.href = decodeURIComponent(a) :window.history.back(-1);
});
};
if (window.mucard) mucard.wechatLogin(e); else var f = setInterval(function() {
window.mucard && (window.clearInterval(f), mucard.wechatLogin(e));
}, 200);
}), define("scripts/zeptoExtra", [ "./vendor/zepto" ], function(a, b, c) {
var d = a("./vendor/zepto");
d.fn.isVisible = function() {
return "none" !== this.css("display");
}, d.fn.isExist = function() {
return d(this).parents("body").length ? !0 :!1;
}, d.cookie = {
get:function(a) {
var b = new RegExp("(^| )" + a + "(?:=([^;]*))?(;|$)"), c = document.cookie.match(b);
return c && c[2] ? unescape(c[2]) :"";
},
set:function(a, b, c) {
var d = new Date(), e = arguments[2] || 24 * (c || 7) * 60, f = arguments[3] || window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/") + 1), g = arguments[4] || null, h = arguments[5] || !1;
e ? d.setMinutes(d.getMinutes() + parseInt(e)) :"", document.cookie = a + "=" + escape(b) + (e ? ";expires=" + d.toGMTString() :"") + (f ? ";path=" + f :"") + (g ? ";domain=" + g :"") + (h ? ";secure" :"");
}
}, function(a) {
var b = function(a, b) {
return function(c) {
var d, e, f;
return this ? (f = this, e = f[a](), d = {
width:[ "left", "right" ],
height:[ "top", "bottom" ]
}, d[a].forEach(function(a) {
e -= parseInt(f.css("padding-" + a), 10), b || (e -= parseInt(f.css("border-" + a + "-width"), 10)), 
c && (e += parseInt(f.css("margin-" + a), 10));
}), e) :null;
};
};
[ "width", "height" ].forEach(function(c) {
var d = c.substr(0, 1).toUpperCase() + c.substr(1);
a.fn["inner" + d] = b(c, !1), a.fn["outer" + d] = b(c, !0);
});
}(d), function(a) {
function b(a) {
var b = this.os = {}, c = this.browser = {}, d = a.match(/Web[kK]it[\/]{0,1}([\d.]+)/), e = a.match(/(Android);?[\s\/]+([\d.]+)?/), f = !!a.match(/\(Macintosh\; Intel /), g = a.match(/(iPad).*OS\s([\d_]+)/), h = a.match(/(iPod)(.*OS\s([\d_]+))?/), i = !g && a.match(/(iPhone\sOS)\s([\d_]+)/), j = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), k = a.match(/Windows Phone ([\d.]+)/), l = j && a.match(/TouchPad/), m = a.match(/Kindle\/([\d.]+)/), n = a.match(/Silk\/([\d._]+)/), o = a.match(/(BlackBerry).*Version\/([\d.]+)/), p = a.match(/(BB10).*Version\/([\d.]+)/), q = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/), r = a.match(/PlayBook/), s = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/), t = a.match(/Firefox\/([\d.]+)/), u = a.match(/MSIE\s([\d.]+)/) || a.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/), v = !s && a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/), w = v || a.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
(c.webkit = !!d) && (c.version = d[1]), e && (b.android = !0, b.version = e[2]), 
i && !h && (b.ios = b.iphone = !0, b.version = i[2].replace(/_/g, ".")), g && (b.ios = b.ipad = !0, 
b.version = g[2].replace(/_/g, ".")), h && (b.ios = b.ipod = !0, b.version = h[3] ? h[3].replace(/_/g, ".") :null), 
k && (b.wp = !0, b.version = k[1]), j && (b.webos = !0, b.version = j[2]), l && (b.touchpad = !0), 
o && (b.blackberry = !0, b.version = o[2]), p && (b.bb10 = !0, b.version = p[2]), 
q && (b.rimtabletos = !0, b.version = q[2]), r && (c.playbook = !0), m && (b.kindle = !0, 
b.version = m[1]), n && (c.silk = !0, c.version = n[1]), !n && b.android && a.match(/Kindle Fire/) && (c.silk = !0), 
s && (c.chrome = !0, c.version = s[1]), t && (c.firefox = !0, c.version = t[1]), 
u && (c.ie = !0, c.version = u[1]), w && (f || b.ios) && (c.safari = !0, f && (c.version = w[1])), 
v && (c.webview = !0), b.tablet = !!(g || r || e && !a.match(/Mobile/) || t && a.match(/Tablet/) || u && !a.match(/Phone/) && a.match(/Touch/)), 
b.phone = !(b.tablet || b.ipod || !(e || i || j || o || p || s && a.match(/Android/) || s && a.match(/CriOS\/([\d.]+)/) || t && a.match(/Mobile/) || u && a.match(/Touch/)));
}
b.call(a, navigator.userAgent), a.__detect = b;
}(d), function(a, b) {
function c(a) {
return a.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();
}
function d(a) {
return e ? e + a :a.toLowerCase();
}
var e, f, g, h, i, j, k, l, m, n, o = "", p = {
Webkit:"webkit",
Moz:"",
O:"o"
}, q = window.document, r = q.createElement("div"), s = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, t = {};
a.each(p, function(a, c) {
return r.style[a + "TransitionProperty"] !== b ? (o = "-" + a.toLowerCase() + "-", 
e = c, !1) :void 0;
}), f = o + "transform", t[g = o + "transition-property"] = t[h = o + "transition-duration"] = t[j = o + "transition-delay"] = t[i = o + "transition-timing-function"] = t[k = o + "animation-name"] = t[l = o + "animation-duration"] = t[n = o + "animation-delay"] = t[m = o + "animation-timing-function"] = "", 
a.fx = {
off:e === b && r.style.transitionProperty === b,
speeds:{
_default:400,
fast:200,
slow:600
},
cssPrefix:o,
transitionEnd:d("TransitionEnd"),
animationEnd:d("AnimationEnd")
}, a.fn.animate = function(c, d, e, f, g) {
return a.isFunction(d) && (f = d, e = b, d = b), a.isFunction(e) && (f = e, e = b), 
a.isPlainObject(d) && (e = d.easing, f = d.complete, g = d.delay, d = d.duration), 
d && (d = ("number" == typeof d ? d :a.fx.speeds[d] || a.fx.speeds._default) / 1e3), 
g && (g = parseFloat(g) / 1e3), this.anim(c, d, e, f, g);
}, a.fn.anim = function(d, e, o, p, q) {
var r, u, v, w = {}, x = "", y = this, z = a.fx.transitionEnd, A = !1;
if (e === b && (e = a.fx.speeds._default / 1e3), q === b && (q = 0), a.fx.off && (e = 0), 
"string" == typeof d) w[k] = d, w[l] = e + "s", w[n] = q + "s", w[m] = o || "linear", 
z = a.fx.animationEnd; else {
u = [];
for (r in d) s.test(r) ? x += r + "(" + d[r] + ") " :(w[r] = d[r], u.push(c(r)));
x && (w[f] = x, u.push(f)), e > 0 && "object" == typeof d && (w[g] = u.join(", "), 
w[h] = e + "s", w[j] = q + "s", w[i] = o || "linear");
}
return v = function(b) {
if ("undefined" != typeof b) {
if (b.target !== b.currentTarget) return;
a(b.target).unbind(z, v);
} else a(this).unbind(z, v);
A = !0, a(this).css(t), p && p.call(this);
}, e > 0 && (this.bind(z, v), setTimeout(function() {
A || v.call(y);
}, 1e3 * e + 25)), this.size() && this.get(0).clientLeft, this.css(w), 0 >= e && setTimeout(function() {
y.each(function() {
v.call(this);
});
}, 0), this;
}, r = null;
}(Zepto), function() {
var a = [ "Webkit", "Moz", "O", "ms" ], b = d.map(a, function(a) {
return a.toLowerCase();
}), c = function(b) {
b = e(b);
var c = document.createElement("div").style, d = b.charAt(0).toUpperCase() + b.substring(1);
if (b in c) return b;
for (var f = 0; f < a.length; f++) if (a[f] + d in c) return a[f] + d;
return null;
}, e = function(a) {
return a.replace(/-+(.)?/g, function(a, b) {
return b ? b.toUpperCase() :"";
});
}, f = function(a) {
var c = a.replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
return -1 !== d.inArray(c.split("-")[0], b) ? "-" + c :c;
}, g = function(a, b, c, d) {
return c = "linear" === b ? "to bottom" === c ? "top" :"left" :-1 !== c.indexOf("ellipse") ? "center, ellispe cover" :"center, circle cover", 
"-" + a + "-" + b + "-gradient(" + c + "," + d + ")";
}, h = function(a, b, c) {
b = "linear" === a ? "to bottom" === b ? "left top, left bottom" :"left top, right top" :"center center, 0px, center center, 100%";
var e, f = [];
c = c.split(",");
for (var g = 0; g < c.length; g++) e = d.trim(c[g]).split(" "), f.push("color-stop(" + e[1] + "," + e[0] + ")");
return "-webkit-gradient(" + a + ", " + b + ", " + f.join(",") + ")";
}, i = function(a) {
var b = document.createElement("div");
return b.style.background = a, -1 !== b.style.background.indexOf("gradient");
}, j = function(a, c) {
if (i(c)) return c;
var e = c.match(/.*?\(([a-z ]+?),(.+?)\)/);
if (!e || e.length < 3) return c;
var f, j, k = d.trim(e[1]), l = d.trim(e[2]);
for (j = 0; j < b.length; j++) if (f = g(b[j], a, k, l), i(f)) return f;
var m = h(a, k, l);
return i(m) ? m :c;
}, k = {}, l = function(a) {
if (k[a]) return k[a];
var b = c(a);
return b ? (b = f(b), k[a] = b, b) :"";
}, m = function(a, b) {
return "display" === a && "box" === b ? l("box-flex").replace("-flex", "") :"transition" !== a && "transition-property" !== a || -1 === b.indexOf("transform") ? "transform" === a && -1 !== b.indexOf("translate3d(") ? "" !== l("perspective") ? b :b.replace("translate3d(", "translate(").replace(/(.*?,.*?)(,.*)/, "$1)") :"background-image" === a && -1 !== b.indexOf("linear-gradient(") ? j("linear", b) :"background-image" === a && -1 !== b.indexOf("radial-gradient(") ? j("radial", b) :b :b.replace("transform", l("transform"));
}, n = d.fn.css;
d.fn.css = function(a, b) {
if ("string" == typeof a) return 1 === arguments.length ? n.call(this, l(a)) :n.call(this, l(a), m(a, b));
for (var c in a) a[l(c)] = m(c, a[c]);
return n.call(this, a);
}, d.css = d.css || {}, d.css.getProp = l;
}(), c.exports = d;
}), define("scripts/tpl/audioIco", [ "./template" ], function(a) {
return a("./template")("audioIco", '<div style="position: fixed; top: 20px; right: 10px;"> <div class="on ico" style="background-image: url(data:image/png;base64,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);background-size:contain;width:32px;height:32px;"></div> <div class="off ico" style="background-image: url(data:image/png;base64,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);background-size:contain;width:32px;height:32px;"></div> <div class="loading ico" style="background-image: url(images/audioloading.gif);width:32px;height:32px;background-position:center;background-size:20px;background-repeat:no-repeat;"></div> </div> ');
}), define("scripts/tpl/audioPlay", [ "./template" ], function(a) {
return a("./template")("audioPlay", '<style> .clickSound { position: fixed; left: -200px; top: 75%; margin-top: -19px; width:135px; background: url("images/audio_corner.png") left center no-repeat; background-size: 8px 11px; padding-left: 7px; vertical-align: middle; margin-left: -70px; } .clickSound > div{ border-radius: 5px; height: 38px; line-height: 38px; background: #abd320; background: -moz-linear-gradient(top, #abd320 0%, #8fc31f 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#abd320), color-stop(100%,#8fc31f)); background: -webkit-linear-gradient(top, #abd320 0%,#8fc31f 100%); background: -o-linear-gradient(top, #abd320 0%,#8fc31f 100%); background: -ms-linear-gradient(top, #abd320 0%,#8fc31f 100%); background: linear-gradient(top, #abd320 0%,#8fc31f 100%); } .clickSound .co{ padding-left: 30px; background-position:13px center; background-repeat: no-repeat; background-size: 10px 18px; } .clickSound .still .co{ background-image: url("images/audio_still.png"); } .clickSound .playing .co{ background-image: url("images/audio_playing.png"); color: #fff; } .clickSound.moving { background: url("images/audio_corner_hot.png") left center no-repeat; } .clickSound.moving > div{ background: #95b232; background: -moz-linear-gradient(top, #95b232 0%, #719527 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#95b232), color-stop(100%,#719527)); background: -webkit-linear-gradient(top, #95b232 0%,#719527 100%); background: -o-linear-gradient(top, #95b232 0%,#719527 100%); background: -ms-linear-gradient(top, #95b232 0%,#719527 100%); background: linear-gradient(top, #95b232 0%,#719527 100%); } .clickSound .playing{ display: none; } </style> <div class="clickSound sm"> <div class="still"><div class="co">点击收听留言</div></div> <div class="playing"><div class="co">收听中 ...</div></div> </div>');
}), define("scripts/tpl/backgroundMusic", [ "./template" ], function(a) {
return a("./template")("backgroundMusic", '<style> .custMusic{ text-align: center; width: 120px; margin: auto; padding-top: 8px; } .custMusic div{ width: 50px; height: 50px; background: url(\'./images/music.png\') no-repeat left top; background-size: 50px 150px; display: inline-block; margin: 0 5px; } .custMusic div.preview{ background-position: 0 -50px; } .custMusic div.preview.stop{ background-position: 0 -100px; } </style> <div class="custom_voice"><div align="center" class="split"><span>定制背景音乐</span></div> <div><a class="tip-pic-btn sm"><i class="fa fa-caret-down fa-rotate-270"></i> 这是什么？</a></div> <small class="tip-pic customImageItem" style="display: none;">你可以选择一段中意的背景音乐。如果不定制，将会用默认的背景音乐。</small> <div class="popupFormInputBox form-group box backgroundMusicItem"> <div class="custMusic"> <div class="choose"></div><div style="display: none;" class="preview"></div> </div> </div></div>');
}), define("scripts/tpl/caipiao", [ "./template" ], function(a) {
return a("./template")("caipiao", function(a) {
"use strict";
var b = this, c = (b.$helpers, a.paid), d = a.hideNum, e = "";
return e += '<div class="caipiao_page"><div align="center" class="split"><span>加送好礼</span></div> <div class="popupFormInputBox form-group box" style="margin-top: 8px;"> <div id="span_caipiao" class="form-group"> <input type="checkbox" ', 
c && (e += "disabled checked "), e += ' name="radio-custom-caipaio" class="custom-radio custom-caipiao" id="checkboxCaipiao" value="1"> <label for="checkboxCaipiao">送注彩票:为TA送上千万幸运<span style="color: #d60;font-size: 80%;border: 1px solid #d60;height: 19px;line-height: 18px;margin: 1px;padding: 0 4px 0 0;border-radius: 6px;"> ', 
e += c ? " 已支付 " :" ¥<span class='amount'>2</span>.00 ", e += " </span></label> ", 
d || (e += " <style>.control .minus, .control .add{width: 24px; height: 24px; background: #DD6600;border-radius: 12px;font-weight: bold;cursor: pointer;margin-right: 4px;margin-left:4px;color: white;display: block;font-size: 20px;display: inline-block;padding: 0;font-size: 120%;}.control .disabled{background: #ccc; color: #686464; }</style><div class='number' style='padding-left: 28px; margin-top: 4px;'><div class='control' style='display: inline-block;line-height: 24px;'><div class='minus disabled' align='center'>-</div><span class='num'>1</span> 注<div class='add' align='center'>＋</div></div></div><div class='note' style='padding-left: 28px; margin-top: 8px; font-size:smaller;color:#d60;'>购彩须知：您购买的彩票发送给好友后，中奖收益归好友。如果彩票没有发送出去，收益归自己。每个收卡人限领1份。如果您想要发送给多人（例如群里），可以投多注。在卡司令公众号中回复“彩票”可以查看购买的彩票信息。</div></div> </div> </div> "), 
e += " </div> </div> </div>", new String(e);
});
}), define("scripts/tpl/cardTip", [ "./template" ], function(a) {
return a("./template")("cardTip", '<style> .cardTip_div{ position:absolute; top:0; left:0; height:0; bottom:0; width:100%; height:100%; background:rgba(0, 0, 0, 0.40); overflow:hidden; } .cardTip_img img{ height:145px; /*width:75px;*/ animation: personShake 0.8s infinite linear; -webkit-animation: personShake 0.8s infinite linear; } @keyframes personShake{ 0% { transform: rotate(0deg); } 50% { transform: rotate(-6deg); } 100% { transform: rotate(0deg); } /* 0% { transform: translate(-13px, 17px); } 8.7% { transform: translate(0, 0); } 17.4% { transform: translate(-13px, 17px); } 26.1% { transform: translate(0, 0); } 34.8% { transform: translate(-13px, 17px); } 100% { transform: translate(-13px, 17px); } */ } @-webkit-keyframes personShake{ /* 0% { -webkit-transform: translate(-13px, 17px); } 8.7% { -webkit-transform: translate(0, 0); } 17.4% { -webkit-transform: translate(-13px, 17px); } 26.1% { -webkit-transform: translate(0, 0); } 34.8% { -webkit-transform: translate(-13px, 17px); } 100% { -webkit-transform: translate(-13px, 17px); } */ 0% { -webkit-transform: rotate(0deg); } 50% { -webkit-transform: rotate(-6deg); } 100% { -webkit-transform: rotate(0deg); } } .cardTip_arrow{ position:absolute; top:15px; right:15px; } .cardTip_weixin{ position:absolute; top:-20px; left:0; right:0; bottom:0; width:160px; height:81.4px; margin:auto; } </style> <div class="cardTip_div"> <div class="cardTip_img cardTip_arrow"> <img class=\'send_arrow_2\' src="images/kasiling gongzai－l-05.png" /> </div>  </div> ');
}), define("scripts/tpl/cardviewBottom", [ "./template" ], function(a) {
return a("./template")("cardviewBottom", ' <style> #mask { position: fixed; left: 0; top: 0; width: 100%; height: 100%; z-index: 32765; } #custom { background: url(images/btn_custom.png); background-size: contain; background-repeat: no-repeat; width: 60px; height: 60px; bottom: 20px; left: 20px; position: fixed; -webkit-transition: all 400ms ease; transition: all 400ms ease; z-index: 32766; opacity: 1; } #custom.fade { -webkit-animation: customButton 3s; opacity: .3; } @-webkit-keyframes customButton { 0% { opacity: 1; } 100% { opacity: .3; } } #custom.hide { opacity: 0; bottom: -60px; } #toolbar { padding: 0 16px; width: 100%; height: 96px; min-height: 100px; position: fixed; bottom: -100%; opacity: 0; background: rgba(0,0,0,0.75); z-index: 32767; -webkit-transition: all 400ms ease-out; transition: all 400ms ease-out; } #toolbar.show { bottom: 0; opacity: 1; } #toolbar > .buttonWrapper { display: inline-block; width: 25%; height: 100%; float: left; text-align: center; } #toolbar > .buttonWrapper:after { content: ""; display: inline-block; vertical-align: middle; height: 100%; width: 0; } #toolbar > .buttonWrapper > .button { display: inline-block; vertical-align: middle; margin: 0 auto; padding: 0; background-color: transparent; } #toolbar > .buttonWrapper > .button > .icon { width: 110px; height: 110px; margin: 0 auto; border: solid 1px rgba(255,255,255,0.3); border-radius: 12px; zoom:0.5; } #toolbar > .buttonWrapper > .button.highlight > .icon { background-color: rgba(255,255,255,0.1); } #toolbar > .buttonWrapper > .button > .text { font: normal 14px "Microsoft YaHei"; color: #fff; text-align: center; margin-top: 6px; overflow: hidden; } #btnCustom > .icon { background: url(images/custom_bk.png) 0 0; } #btnCustom.highlight > .icon { background: url(images/custom_bk.png) 0 -108px; } #btnSend > .icon { background: url(images/custom_bk.png) -108px 0; } #btnSend.highlight > .icon { background: url(images/custom_bk.png) -108px -108px; } #btnCollect > .icon { background: url(images/custom_bk.png) -216px 0; } #btnCollect.highlight > .icon { background: url(images/custom_bk.png) -216px -108px; } #btnAttend > .icon { background: url(images/custom_bk.png) -324px 0; } #btnAttend.highlight > .icon { background: url(images/custom_bk.png) -324px -108px; } </style> <div id="custom" onload="this.classList.add(\'fade\');"></div> <div id="toolbar"> <div class="buttonWrapper"> <div id="btnCustom" class="button"> <div class="icon"></div><div class="text">定制微卡</div> </div> </div> <div class="buttonWrapper"> <div id="btnSend" class="button"><div class="icon"></div><div class="text">发送微卡</div></div> </div> <div class="buttonWrapper"> <div id="btnCollect" class="button"><div class="icon"></div><div class="text">收藏微卡</div></div> </div> <div class="buttonWrapper"> <div id="btnAttend" class="button"><div class="icon"></div><div class="text">关注我们</div></div> </div> </div> <div id="mask" style="display:none"></div>');
}), define("scripts/tpl/customForm", [ "./template" ], function(a) {
return a("./template")("customForm", function(a) {
"use strict";
var b = this, c = (b.$helpers, a.i), d = a.items, e = a.item, f = b.$string, g = a.list, h = (a.r, 
a.g, a.j), i = a.val, j = "";
j += "<form> ";
for (var c = 0; c < d.length; c++) {
j += " ";
var e = d[c];
if (j += " ", "input" == e.type && (j += ' <div class="form-group"> <label class="control-label">', 
j += f(e.description), j += '</label> <input type="text" name="', j += f(e.id), 
j += '" class="form-control" value="', j += f(e.valueCustom || e.value), j += '"> </div> '), 
j += " ", ("number" == e.type || "date" == e.type || "time" == e.type || "email" == e.type) && (j += ' <div class="form-group"> <label class="control-label">', 
j += f(e.description), j += '</label> <input type="', j += f(e.type), j += '" name="', 
j += f(e.id), j += '" class="form-control" value="', j += f(e.valueCustom || e.value), 
j += '"> </div> '), j += " ", "textarea" == e.type && (j += ' <div class="form-group"> <label class="control-label">', 
j += f(e.description), j += '</label> <textarea rows="4" name="', j += f(e.id), 
j += '" class="form-control">', j += f(e.valueCustom || e.value), j += "</textarea> </div> "), 
j += " ", "phone" == e.type && (j += ' <div class="form-group"> <label class="control-label">', 
j += f(e.description), j += '</label> <input type="tel" name="', j += f(e.id), j += '" class="form-control" value="', 
j += f(e.valueCustom || e.value), j += '"> </div> '), j += " ", "email" == e.type && (j += ' <div class="form-group"> <label class="control-label">', 
j += f(e.description), j += '</label> <input type="email" name="', j += f(e.id), 
j += '" class="form-control" value="', j += f(e.valueCustom || e.value), j += '"> </div> '), 
j += " ", "radio" == e.type) {
j += ' <div class="form-radio-group"> <label class="control-label">', j += f(e.description), 
j += "</label> ";
var g = e.value.replace(/\r/g, "").split("\n");
j += " ";
for (var h = 0; h < g.length; h++) {
j += " ";
var i = g[h];
j += ' <div class="radio"> <label> <input type="radio" name="', j += f(e.id), j += '" class="form-radio-control" value="', 
j += f(i), j += '" ', j += f(e.valueCustom == i ? "selected" :""), j += "> ", j += f(i), 
j += " </label> </div> ";
}
j += " </div> ";
}
if (j += " ", "checkbox" == e.type) {
j += ' <div class="form-checkbox-group ', j += f(e.rangeType), j += '"> <label class="control-label">', 
j += f(e.description), j += "</label> ";
var g = e.value.replace(/\r/g, "").split("\n");
j += " ";
for (var h = 0; h < g.length; h++) {
j += " ";
var i = g[h];
j += ' <div class="checkbox"> <label> <input type="checkbox" name="', j += f(e.id), 
j += '" class="form-checkbox-control" value="', j += f(i), j += '" ', j += f(e.valueCustom == i ? "selected" :""), 
j += "> ", j += f(i), j += " </label> </div> ";
}
j += " </div> ";
}
if (j += " ", "select" == e.type) {
j += ' <div class="form-group"> <label class="control-label">', j += f(e.description), 
j += '</label> <select id="disabledSelect" class="form-control" name="', j += f(e.id), 
j += '"> ';
var g = e.value.replace(/\r/g, "").split("\n");
j += " ";
for (var h = 0; h < g.length; h++) {
j += " ";
var i = g[h];
j += ' <option value="', j += f(i), j += '" ', j += f(e.valueCustom == i ? "selected" :""), 
j += ">", j += f(i), j += "</option> ";
}
j += " </select> </div> ";
}
j += " ";
}
return j += " </form>", new String(j);
});
}), define("scripts/tpl/customImageMessage", [ "./template" ], function(a) {
return a("./template")("customImageMessage", function(a) {
"use strict";
var b = this, c = (b.$helpers, a.env), d = "";
return d += '<div class="custom_image"> <div align="center" class="split"><span>   定制图片   </span></div> <div><a class="tip-pic-btn sm"><i class="fa fa-caret-down fa-rotate-270"></i> 这是什么？</a></div> <small class="tip-pic customImageItem" style="display: none;">支持图片定制，如果不定制，将会根据内容显示一个默认图片或者隐藏，不会影响最终效果。</small> ', 
"APP" != c && (d += ' <small class="customImageItem" id="customImagePromptMessage" style="display: none;"> 卡司令试图打开系统对话框选择图像。如果您没有看到该对话框（例如某些三星手机），表明您的设备暂不支持在微信中选择图像，您可以<a href="install.html">点击这里</a>下载卡司令App，并在App中进行图像定制。 </small> '), 
d += ' <div class="custom-image-list clearfix customImageItem"></div> </div> ', 
new String(d);
});
}), define("scripts/tpl/dialog", [ "./template" ], function(a) {
return a("./template")("dialog", function(a) {
"use strict";
var b = this, c = (b.$helpers, a.index), d = a.message, e = b.$string, f = a.confirm, g = a.labelNo, h = a.labelOK, i = "";
i += '<style> .dialog .button{ margin:0; border-top-width: 1px; pading-top:13px; padding-bottom:13px; display:block; padding:10px 0; float: left; color: #fff; border: 1px solid transparent; } .dialog .button:hover{ color: #fff; } .dialog .confirmWrap{ background: #d0d0d0; border-top: 1px solid #e66427; } .dialog .dialog_font{ color: #5a5a5a; } </style> <div class="box-center full-screen dialog fix" style="z-index:100"> <div class="border-radius" style="max-width: 84%; min-width:200px;background: rgba(255,255,255,0.9);overflow: hidden"> <div style="padding:14px 30px;;min-height:100px;background:#eee;max-height:300px;overflow: auto;"> ';
for (var c = 0; c < d.length; c++) i += ' <p class="dialog_font">', i += e(d[c]), 
i += "</p> ";
return i += ' </div> <div class="confirmWrap clearfix"> ', f ? (i += ' <a class="button normal pull-left cancel" style="width:49%;background:#d0d0d0;color:#5a5a5a;" href="#">', 
i += e(g || "取消"), i += '</a> <div style="width:1px;border:none;background:#e66427;height:44px;float:left"></div> <a class="button normal pull-left confirm" style="width:50%;background:#d0d0d0;color:#5a5a5a" href="#">', 
i += e(h || "确定"), i += "</a> ") :(i += ' <a class="button normal pull-left confirm" style="width:100%;background:#d0d0d0;color:#5a5a5a" href="#">', 
i += e(h || "确认"), i += "</a> "), i += " </div> </div> </div>", new String(i);
});
}), define("scripts/tpl/help", [ "./template" ], function(a) {
return a("./template")("help", '<style> .help-page .red{ color: #d60; margin: 2em 0; } </style> <div style="margin-top: 56px;padding-left: 16px; padding-right: 16px;" class="help-page"> <p class="red">问：我是个人，想要定制新的贺卡？</p> <p>答：所有的微卡均支持在微卡中直接定制并转发的功能。目前暂时不开放单个用户特殊需求的微卡定制。但你们可以把想要的微卡创意和形式通过微信发给我们，我们会参考你们的建议，添加新的微卡。</p> <p class="red">问：我想要在微卡中添加我自己的图片</p> <p>答：现在“卡司令App”支持定制个人头像，欢迎在应用商店下载。</p> <p class="red">问：定制和转发要收费吗？</p> <p>答：完全免费，欢迎定制，转发！</p> <p class="red">问：我是企业相关负责人，想要为企业或者我们的客户定制贺卡。</p> <p>答：如果你是企业用户，想要定制贺卡，或者咨询公众号维护事宜，或者商务合作事宜，请直接发信至邮箱 biz@mugeda.com，并提供相关商务联系方式。为保证质量，请至少在需要微卡一周前和我们联系。</p> <p class="red">问：某些节日的贺卡没有？</p> <p>答：我们会在每个节日前一周左右上线对应的节日微卡，请随时关注。我们还提供更多日常微卡包括感谢卡、生日卡、鼓励卡等等，还有更多精彩的游戏放送。</p> <p class="red">问：我有一个公众号，我要想定制微卡与粉丝互动？</p> <p>答：卡司令对公众号提供免费的微卡服务，可以对微卡进行高级定制，例如添加对自己公众号的关注信息，通过自己的公众号发送给粉丝，让公众号和粉丝的关系更亲密。更多服务敬请期待。</p> </div>');
}), define("scripts/tpl/listV2", [ "./template" ], function(a) {
return a("./template")("listV2", function(a) {
"use strict";
var b = this, c = (b.$helpers, a.showFoot), d = "";
return d += '<style> .list.nav { position: fixed; top: 0; left: 0; width: 100%; } .list.nav .line { background: #fafafa; background: -moz-linear-gradient(top, #fafafa 0%, #cdcdcd 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fafafa), color-stop(100%,#cdcdcd)); background: -webkit-linear-gradient(top, #fafafa 0%,#cdcdcd 100%); background: -o-linear-gradient(top, #fafafa 0%,#cdcdcd 100%); background: -ms-linear-gradient(top, #fafafa 0%,#cdcdcd 100%); height: 4px; } .list.nav .line.red { /*background: #d06000; background: -moz-linear-gradient(top, #d06000 0%, #b25200 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#d06000), color-stop(100%,#b25200)); background: -webkit-linear-gradient(top, #d06000 0%,#b25200 100%); background: -o-linear-gradient(top, #d06000 0%,#b25200 100%); background: -ms-linear-gradient(top, #d06000 0%,#b25200 100%); background: linear-gradient(top, #d06000 0%,#b25200 100%);*/ background: #d60; height: 3px; margin-top: -3px; margin-left: -100px; width: 43px; transition: margin-left 0.5s; -moz-transition: margin-left 0.5s; /* Firefox 4 */ -webkit-transition: margin-left 0.5s; /* Safari 和 Chrome */ -o-transition: margin-left 0.5s; /* Opera */ } .list.nav .con { background: #fff; } .list.nav .con .it { display: inline-block; width: 20%; text-align: center; padding-top: 11px; padding-bottom: 11px; } .list.nav .cas-frame { position: fixed; width: 100%; bottom: 0; top: 48px; display: none; } .list.nav .cas { background-color: #fff; opacity: 0.95; -webkit-box-shadow: 0 0 5px 0 rgba(0,0,0,0.25); box-shadow: 0 0 5px 0 rgba(0,0,0,0.25); display: none; overflow: auto; max-height: 100%; } .list.cas-mask { position: fixed; /*background: red;*/ top: 0; left: 0; right: 0; bottom: 0; display: none; } .list.nav .cas .item { width: 50%; display: inline-block; /*font-size: 14px;*/ padding: 13px 0 13px 13px; } .list.nav .cas .item.hide { display: none; } .list.nav .cas .item.hide.more { display: inline-block; } .list.nav .cas .item.selected { background-color: #f1f1f1; display: inline-block !important; } .list.clist .highlight { background: #fef7e5; border-top: 2px #ebebeb solid; border-bottom: 2px #ebebeb solid; } .list.clist { margin: 48px 0; padding: 0; padding-top: 1px; } .list.clist .main, .list.clist .rec { padding: 0 4px; } .list.clist .main { margin-bottom: 16px; } .list.cfoot { position: fixed; bottom: 0; left: 0; right: 0; background: #f7f7f7; height: 56px; } .list.cfoot .item { padding-top:5px; display: inline-block; width: 25%; text-align: center; -webkit-transform: scale(0.6,0.6); transform: scale(0.6, 0.6); margin-top:-12px; } .list.cfoot .line { float: left; } .list.cfoot .line { height: 1px; background-color: rgba(216, 216, 216, 1); width: 25%; } .list.cfoot .line.red { height: 1px; background-color: #d60; width: 25%; } .list.cfoot .list-icon { background: url(images/spritesheet.png) no-repeat; display: block; width: 50px; height: 47px; margin: 0 auto; } .list.cfoot .list-icon-title { display:block; font: normal 22px "Microsoft Yahei"; color: #e66428; } .list.cfoot .list-icon.login { background-position: -119px -5px; width: 50px; height: 47px; } .list.cfoot .list-icon.login.on { background-position: -242px -119px; } .list.cfoot .list-icon.home { background-position: -5px -5px; width: 50px; height: 47px; } .list.cfoot .list-icon.home.on { background-position: -232px -5px; } .list.cfoot .list-icon.help { background-position: -240px -62px; width: 50px; height: 47px; } .list.cfoot .list-icon.about { background-position: -174px -5px; width: 50px; height: 47px; } .list .new-label { display: inline-block; width: 6px; height: 6px; border-radius: 4px; background-color: #d60; position: relative; left: 4px; top: -8px; content: "new"; } </style> <div class="list clist"> <div class="label label-main"></div> <div class="main clearfix"></div> <div class="search clearfix"></div> <div class="highlight rec-frame" style="position: relative"> <div class="label">推荐微卡</div> <div class="rec clearfix"></div> </div> <div style="position: absolute;right: 8px;top: 56px;height: 22px;overflow: hidden;"> <input type="text" class="form-control" placeholder="输入关键字，例如：生日" id="seachText" style="border: none;background:none;outline: none;width: 0px;height:22px;padding: 0px;float:left;margin-right: 4px;font-size: 14px;"> <input type="button" value="" id="seachOk" style="border:none;background-size: 16px;background-color: #ffffff;background-image:url(\'images/search.png\');background-repeat: no-repeat;background-position: center center;outline: none;height: 22px;width:22px;padding: 0px;float: right;" />  </div> </div> ', 
c && (d += ' <div class="list cfoot"> <div style="border-bottom: 1px #d8d8d8 solid;"> <div class="line"></div><div class="line"></div><div class="line"></div> </div> <div class="item item-home" onclick="javascript: location.assign(\'list.html#0\');"><i class="list-icon home"></i><span class="list-icon-title">首页</span></div><div class="item item-help"><i class="list-icon help"></i><span class="list-icon-title">最新</span></div><div class="item item-login"><i class="list-icon login on"></i><span class="list-icon-title">我的</span></div><div class="item item-about"><i class="list-icon about"></i><span class="list-icon-title">关于</span></div><span class="preload-images1" style="display:none"></span><span class="preload-images2" style="display:none"></span><span class="preload-images3" style="display:none"></span><span class="preload-images4" style="display:none"></span> </div> '), 
d += ' <div class="list cas-mask"></div> <div class="list nav"> <div class="con"> <div class="it" data-id="1"><span>节日</span></div><div class="it" data-id="2"><span>日常</span></div><div class="it" data-id="3"><span>邀请</span></div><div class="it" data-id="4"><span>娱乐</span></div><div class="it" data-id="5"><span>动漫</span></div> </div> <div class="line"></div> <div class="line red"></div> <div class="cas-frame"> <div class="cas">  </div> </div> </div>', 
new String(d);
});
}), define("scripts/tpl/list_custom_1", [ "./template" ], function(a) {
return a("./template")("list_custom_1", '<style> .list.nav{ position: fixed; top: 0; left: 0; width: 100%; } .list.nav .line{ background: #fafafa; background: -moz-linear-gradient(top, #fafafa 0%, #cdcdcd 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fafafa), color-stop(100%,#cdcdcd)); background: -webkit-linear-gradient(top, #fafafa 0%,#cdcdcd 100%); background: -o-linear-gradient(top, #fafafa 0%,#cdcdcd 100%); background: -ms-linear-gradient(top, #fafafa 0%,#cdcdcd 100%); height: 4px; } .list.nav .line.red{ /*background: #d06000; background: -moz-linear-gradient(top, #d06000 0%, #b25200 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#d06000), color-stop(100%,#b25200)); background: -webkit-linear-gradient(top, #d06000 0%,#b25200 100%); background: -o-linear-gradient(top, #d06000 0%,#b25200 100%); background: -ms-linear-gradient(top, #d06000 0%,#b25200 100%); background: linear-gradient(top, #d06000 0%,#b25200 100%);*/ background: #d60;; height: 3px; margin-top: -3px; margin-left: -100px; width: 43px; transition: margin-left 0.5s; -moz-transition: margin-left 0.5s; /* Firefox 4 */ -webkit-transition: margin-left 0.5s; /* Safari 和 Chrome */ -o-transition: margin-left 0.5s; /* Opera */ } .list.nav .con{ background: #fff;; } .list.nav .con .it{ display: inline-block; width: 33.333333%; text-align: center; padding-top: 11px; padding-bottom: 11px; color: white; text-shadow:0px 3px 3px #7C7C7C; } .list.nav .cas{ background-color: #fff; opacity: 0.95; -webkit-box-shadow: 0 0 5px 0 rgba(0,0,0,0.25); box-shadow: 0 0 5px 0 rgba(0,0,0,0.25); display: none; } .list.cas-mask{ position: fixed; /*background: red;*/ top:0; left:0; right: 0; bottom: 0; display: none; } .list.nav .cas .item{ width: 50%; display: inline-block; /*font-size: 14px;*/ padding: 13px 0 13px 13px; } .list.nav .cas .item.hide{ display: none; } .list.nav .cas .item.hide.more{ display: inline-block; } .list.nav .cas .item.selected{ background-color: #f1f1f1; display: inline-block!important; } .list.clist .highlight{ background: #fef7e5; border-top: 2px #ebebeb solid; border-bottom: 2px #ebebeb solid; } .list.clist{ margin: 12px 0; padding: 0; padding-top: 1px;; } .list.clist .main, .list.clist .rec{ padding: 0 4px; } .list.clist .main{ margin-bottom: 16px; } .list .new-label { display: inline-block; width: 6px; height: 6px; border-radius: 4px; background-color: #d60; position: relative; left: 4px; top: -8px; content: \'new\'; } /*hide recommand*/ .rec-frame { display: none;; } </style> <div class="list clist"> <div class="label label-main"></div> <div class="main clearfix"></div> <div class="highlight rec-frame"> <div class="label">推荐微卡</div> <div class="rec clearfix"></div> </div> </div> <div class="list cas-mask"></div> <div class="list nav"> <div class="con" style="background: #b0c0c0"> <div class="it" data-id="1" style="background: #e6c4bb"><span>节日贺卡</span></div><div class="it" data-id="2" style="background: #d5d2bf"><span>日常关怀</span></div><div class="it" data-id="3" style="background: #b0c0c0"><span>邀请请帖</span></div></div> </div> <div class="line"></div> <div class="line red"></div> <div class="cas">  </div> </div> <script> window.businessParam = { "url":null,"content":"关注{{吉姆兄弟}}更多酷炫内容","bid":1 }; </script>');
}), define("scripts/tpl/loader", [ "./template" ], function(a) {
return a("./template")("loader", function(a) {
"use strict";
var b = this, c = (b.$helpers, a.slide), d = "";
return d += c ? ' <style> #stage_parent { width: 100%; height: 100%; position: absolute; overflow: hidden; } #stage_cut { -webkit-transform-origin: left top; position: absolute; } #stage_cut .slide_stage { position:absolute; } </style> <div id="stage_parent"> <div id="stage_cut"> </div> </div> ' :' <div id="stageParent" style="display: none;"> <div class="foot-mark"></div> </div> ', 
new String(d);
});
}), define("scripts/tpl/loading", [ "./template" ], function(a) {
return a("./template")("loading", function(a) {
"use strict";
var b = this, c = (b.$helpers, b.$string), d = a.message, e = "";
return e += '<div class="box-center full-screen" style="z-index:100"> <div class="border-radius" style="width: 120px; height: 120px;background: url(./images/logo.png) 46px 32px no-repeat rgba(255,255,255,0.9);background-size: 25px; text-align: center"> <img width="45" height="45" class="rotate" style="margin-top:22px" src="./images/loader.png" /> <div class="box-center message" style="height: 49px;">', 
e += c(d), e += "</div> </div> </div>", new String(e);
});
}), define("scripts/tpl/login", [ "./template" ], function(a) {
return a("./template")("login", function(a) {
"use strict";
var b = this, c = (b.$helpers, a.wexinloginshow), d = "";
return d += '<form class="content form-horizontal form-style"> ', d += c ? ' <div id="wexin_login_group"> <div class="form-group box"> <div class="weixin_login"></div> </div> <p id="wechat_hint" class="text-center">微信账号快速登录</p> <p style="text-indent:30px;margin-top:55px">或者，用卡司令账号登录</p> </div> ' :' <p class="pd530">请使用卡司令账号登录</p> ', 
d += ' <div class="form-group box user-style"> <label class="control-label"></label> <input class="form-control box-flexible username" placeholder="输入注册手机或用户名"/> </div> <div class="form-group box pwd-style"> <label class="control-label"></label> <input type="password" class="form-control box-flexible password" placeholder="输入密码"/> </div> <div class="form-group box login-style"> <a class="button normal box-flexible hot login" style="display: block;margin-right:8px;border-width:1px">登录</a> </div> <div class="form-group register-style"> <a class="register">注册新用户</a> </div> </form> <style> .weixin_login{ background:url(images/weixin_icon.png) 0 0 no-repeat; background-size: contain; width: 80px; height: 80px; margin: 27px auto 0; } .form-style{ padding-left: 0; padding-right: 0; } .user-style{ border-top: 1px solid #d6d6d6; padding: 5px 30px; margin: 0; } .user-style input{ display:inline-block; width: 200px; border: 1px solid transparent; box-shadow: none; } .user-style input:focus{ box-shadow: none; border-color: transparent; } .user-style label{ width: 30px; background:url(images/login_icon.png) -3px 0 no-repeat; background-size: cover; height: 30px; vertical-align: middle; padding: 0!important; } .pwd-style{ border-top:1px solid #d6d6d6; border-bottom:1px solid #d6d6d6; padding: 5px 30px; margin: 0; } .pwd-style label{ width: 30px; background:url(images/login_icon.png) -3px -35px no-repeat; background-size: cover; height: 30px; vertical-align: middle; padding: 0!important; } .pwd-style input{ display:inline-block; width: 200px; border: 1px solid transparent; box-shadow: none; } .pwd-style input:focus{ box-shadow: none; border-color: transparent; } .login-style{ width:78%; margin: 20px auto 10px; } .register-style{ height: 42px; } .register-style a{ display: block; padding-bottom: 20px; width:100px; float: right; padding-top: 10px; color: #0287ff!important; } input.form-control{ padding:6px; } .pd530{ padding: 5px 30px; } </style>', 
new String(d);
});
}), define("scripts/tpl/mapselect", [ "./template" ], function(a) {
return a("./template")("mapselect", function(a) {
"use strict";
var b = this, c = (b.$helpers, b.$string), d = a.initkeyword, e = "";
return e += '<div id="mapselect_wrap"> <div id="mapselect_control"> <div class="mapselect_head"> 选择地址 <span id="mapselect_cancel" class="mapselect_closemap">取消</span> <span id="mapselect_confirm" class="mapselect_closemap">确定</span> </div> <div class="mapselect_inputgroup"> <div class="mapselect_input_bg"> <input type="text" placeholder="请输入地址关键字，用空格隔开" id="mapselect_place" name="mapselect_place" value="', 
e += c(d), e += '"> <input type="button" value="搜索" id="mapselect_search"> </div> </div> </div> <div id="mapselect_mapcontainer"></div> <ul id="mapselect_result"></ul> <div id="mapselect_loading" class="map_loading" style="display:none"></div> </div> <style> #mapselect_control{ height: 90px; position: absolute; z-index: 100; width: 100%; top:0; background: #000; background: rgba(0,0,0,0.7); } #mapselect_wrap{ width: 100%; height: 100%; left:0; top:0; position: absolute; z-index: 100; background: #fff; overflow-y: hidden; } #mapselect_mapcontainer{ width: 100%; height: 100%; background-color: #d2d2d2; } #mapselect_cancel{ float: left; } #mapselect_confirm{ float: right; } .mapselect_head{ text-align: center; height: 38px; line-height: 38px; padding: 0 5px; position:relative; top: 0; background: #f0eff5; border-bottom: 1px solid #f0eff5; } .mapselect_inputgroup{ padding: 10px 5px; height: 55px; overflow: hidden; position: relative; } .map_loading{ background: url(images/ajax-loader.gif) 0 0 no-repeat; height: 16px; width: 16px; position: absolute; top: 150px; left: 50%; } #mapselect_result{ list-style: none; width:100%; margin: 0; position: absolute; top: 15%; background: #fff; padding: 0 10px; max-height: 150px; overflow-y: auto; } #mapselect_result li{ line-height: 25px; margin-bottom: 10px; } .bgcdedede{ background-color: #dedede; } .mapselect_closemap{ color: #e66428; } .mapselect_input_bg{ border-radius: 3px; background: #e4e3e5; } #mapselect_search{ background: url(images/mapselect_searchicon.png) 3px 0 no-repeat; background-size: contain; border: none; overflow: hidden; float: right; width: 20px; height: 15px; text-indent: 390px; margin-top: 5px; padding: 0; margin-right: 15px; } #mapselect_place{ border: none; background: rgba(0,0,0,0); width: 80%; } /*百度地图样式*/ .BMap_bubble_title{ font-size: 13px; font-weight: bold; color: #4c4c4c; } .BMap_bubble_content{ font-size: 12px; color: #4c4c4c; } .tangram-suggestion-main{ z-index: 100001; left: 0!important; } .tangram-suggestion table tr{ height: 40px; } /*隐藏autocomplete的关闭按钮*/ .tangram-suggestion div:last-child{ display:none; } /*百度地图样式*/ </style> ', 
new String(e);
});
}), define("scripts/tpl/mugedaLoad", [ "./template" ], function(a) {
return a("./template")("mugedaLoad", function(a) {
"use strict";
var b = this, c = (b.$helpers, a.type), d = b.$string, e = a.background, f = a.width, g = a.url, h = a.hideProcessBar, i = a.processBackColor, j = a.processFrontColor, k = a.processTextColor, l = a.showFooter, m = a.footAlign, n = a.footMargin, o = a.footWidth, p = a.footerUrl, q = a.pieColor, r = a.textColor, s = a.imgUrl, t = a.text, u = "";
return 0 == c && (u += ' <div id="mcard-load" style="background: ', u += d(e), u += '; background-size: cover;"> <div id="mpqxqenk_o0" class="logo-outer"> <img width="', 
u += d(f), u += '" src="', u += d(g), u += '"> </div> <div id="mpqxqenk_o1" class="process-outer"> ', 
h || (u += ' <div class="process-frame" style="', i && (u += "background:", u += d(i)), 
u += '"> <div class="process" style="', j && (u += "background:", u += d(j)), u += '"></div> </div> '), 
u += ' <small class="message" style="', k && (u += "color:", u += d(k)), u += '">正在努力加载中...</small> </div> ', 
l && (u += ' <div class="foot-frame" style="', m && (u += ";text-align:", u += d(m)), 
n && (u += ";padding:", u += d(n)), u += '"> <img width="', u += d(o), u += '" src="', 
u += d(p), u += '" /> </div> '), u += " </div> "), u += " ", 1 == c && (u += ' <div id="mcard-load" style="background: ', 
u += d(e), u += " url('", u += d(g), u += '\') no-repeat center; position: fixed; left: 0; right: 0; top: 0; bottom: 0; background-size: cover"> <div id="mpqxqenk_o1" class="process-outer" style="margin-left: 33%; border-radius: 17px; padding-top: 8px; background-color: rgba(0,0,0,0.6); width: 120px; position: fixed; top: 50%;"> <div class="process-frame"> <div class="process"></div> </div> <small class="message">正在努力加载中...</small> </div> </div> '), 
u += " ", 2 == c && (u += ' <div id="mcard-load" style="background: black;border:none;"> <style> .logo-outer{ background: rgba(0,0,0,0); border:none; overflow: visible; width: 128px; height:128px; margin-left:auto; margin-right: auto; } .logo-outer .holder{ background: ', 
u += d(e), u += "; border-radius: 64px; width:100%; height:100%; position: relative; padding-top:96px; } .logo-outer .holder .left{ position: absolute; width: 50%; height: 100%; overflow: hidden; left:0; top:0; } .logo-outer .holder .left .leftPie{ position: absolute; width:100%; height:100%; -webkit-transform-origin:right center; -moz-transform-origin:right center; -ms-transform-origin:right center; -webkit-transform:rotate(180deg); -moz-transform:rotate(180deg); -ms-transform:rotate(180deg); /* -webkit-transition: 250ms linear; -moz-transition: 250ms linear; -ms-transition: 250ms linear; */ overflow: hidden; } .logo-outer .holder .pie{ width:200%; height:100%; border-radius: 64px; background: ", 
u += d(q), u += "; position: absolute; } .logo-outer .holder .right .pie{ left: -100%; } .logo-outer .holder .right{ position: absolute; width: 50%; height: 100%; overflow: hidden; left:50%; top:0; } .logo-outer .holder .right .rightPie{ position: absolute; width:100%; height:100%; -webkit-transform-origin:left center; -moz-transform-origin:left center; -ms-transform-origin:left center; -webkit-transform:rotate(180deg); -moz-transform:rotate(180deg); -ms-transform:rotate(180deg); overflow: hidden; } .logo-outer .holder .icon{ border-radius: 62px; width: 120px; height: 120px; position: absolute; left: 4px; top: 4px; } .logo-outer .slogan{ text-align:center; position: absolute; width: 100%; color: ", 
u += d(r), u += '; font-family:\'Microsoft YaHei\', \'微软雅黑\', \'华文细黑\'; left:0; margin-top: 16px; } </style> <div id="mpqxqenk_o0" class="logo-outer"> <div class="holder"> <div class="left"> <div class="leftPie"><div class="pie"></div></div> </div> <div class="right" style=""> <div class="rightPie"><div class="pie"></div></div> </div> <img class="icon cacheImage" src="', 
u += d(s), u += '" style="" /> </div> <div class="slogan"> ', u += d(t), u += " </div> </div> </div> "), 
new String(u);
});
}), define("scripts/tpl/musicPicker", [ "./template" ], function(a) {
return a("./template")("musicPicker", '<style>ul{margin:0;padding:0;list-style:none;} li {height:40px;position:relative;margin:0;padding:0px; border-top:1px solid #aaa;} div .musicTitle{display:inline-block;line-height:40px;padding-left:8px;} div .musicPlay {width: 40px;height: 40px;display: block;position:absolute;right:0px;top:0px;vertical-align: middle;margin-left: 8px;background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);background-size:initial;background-position:center;background-repeat:no-repeat;} li.active{color:white;background:#d60;} li.active div.musicPlay {background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAA3NCSVQICAjb4U/gAAAAMFBMVEX///////////////////////////////////////////////////////////////9Or7hAAAAAEHRSTlMAESIzRFVmd4iZqrvM3e7/dpUBFQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAACvSURBVCiRY2CgI+BuYGDQdkDwGfs3MDDYL0QISP/fyCDM9Q3OZzr/fwNDn9E7AZiA73+givgL9QlQA9zeAwXaOL/qb4AI8P0Hgo1/lX5zP4YI8IMENuQX3GX/gSygv2G+6R9kAdmL9S7/0QX+oWv5i2roOZihvGBr3yn95voMdZgZyGHtnN/0DiA5fQODP9zpDAzM54F+qXO8p4Dk/Q1A739HD6CNaEGoE4AZtLQCALVvZyeF0DLwAAAAAElFTkSuQmCC");} .musicItem {position:absolute;left:0;top:84px;right:0px;bottom:0px;overflow:scroll;} div.filter{width:100%;height:40px;position:absolute;top:44px;left:0;} .musicFilter{width:40%;height:32px;border:1px solid #ddd;margin:4px;background-color:#F0EFF5;} .btnSubmit.disabled{color:#888;} musicItem img.loading{height:32px;} li.active .musicPlay.loading{background-image:url(images/audio_loading.gif);}</style><div class="musicPicker_div"><div align=center class="filter" > <select class="musicFilter scene" ><option value="-1"> -- 选择场合 --</option></select> <select class="musicFilter style"><option value="-1"> -- 选择风格 --</option></select> </div><div class="musicItem" ><ul id="musick_picker_list" ></ul><div align="center" class="loading"> <img width="16" height="16" class="loading" src="images/refresh.gif" style="display: none;"> </div></div></div>');
}), define("scripts/tpl/navibar", [ "./template" ], function(a) {
return a("./template")("navibar", function(a) {
"use strict";
var b = this, c = (b.$helpers, b.$string), d = a.title, e = "";
return e += '<div class="box box-align-center navi fix" style="height:44px;padding:0 8px;background:#f0eff5;position: fixed;top:0; left:0; width:100%;z-index:50"> <div class="main-color navi-left" style="min-width: 80px;"></div> <div class="box-flexible text-center navi-title">', 
e += c(d), e += '</div> <div class="main-color text-right navi-right" style="min-width: 80px;"> <span class="btn userBtn"><i class="fa fa-user"></i></span> <span class="btn weixinBtn"><i class="fa fa-weixin"></i></span> </div> </div>', 
new String(e);
});
}), define("scripts/tpl/profileCustom", [ "./template" ], function(a) {
return a("./template")("profileCustom", function(a) {
"use strict";
var b = this, c = (b.$helpers, a.isWeixin), d = "";
return d += '<div class="loading_page"><div align="center" class="split"><span>定制加载页面</span></div> <div><a class="tip-pic-btn sm"><i class="fa fa-caret-down fa-rotate-270"></i> 这是什么？</a></div> <small class="tip-pic customImageItem" style="display: none;">你可以定制微卡的加载页面效果。如果不定制，不会影响最终效果。</small> <div class="popupFormInputBox form-group box customProfile"> ', 
c && (d += ' <div id="spanProfile" class="form-group"> <input type="radio" name="radio-custom-logo" class="custom-radio custom-logo" id="checkboxProfile" value="1"> <label for="checkboxProfile">在加载页面显示微信头像</label> </div> <div class="spanSloganCustomValue clearfix" style="display: none"> <div id="spanSlogan" class="popupFormSelectList form-group box"> <label class="inputlabel control-label" style="min-width: 100px;">个人宣言:</label> <select id="selectSlogan" class="form-control box-flexible" style="overflow: hidden;"> <option>我想对你说</option> <option>正准备上菜，别急，别急</option> <option>在路上ING</option> <option>分享我的美一刻</option> <option>正在摆pose，稍等</option> <option>一大波美图正在奔来</option> <option>奔跑吧，真心话</option> <option>还在疯狂赶路</option> <option>又任性了，客官稍等</option> <option>后厨加工中……</option> <option value= "999"> --- 自己输入 --- </option> </select> </div> <div id="spanCustomSlogan" class="popupFormInputBox form-group box" style="display: none"> <label class="inputlabel control-label" style="min-width: 100px;">自己输入:</label> <input id="inputSlogan" type="text" name="slogan" class="form-control box-flexible"> </div> </div> '), 
d += ' <div id="spanPcCustom" class="form-group"> <input type="radio" name="radio-custom-logo" class="custom-radio custom-logo" id="spanPcCustomCheckBox" value="2"> <label for="spanPcCustomCheckBox">上传企业logo显示在加载页面</label> </div> <div class="spanPcCustomValue clearfix" style="display: none;margin-bottom: 21px;"> <div style="width: 180px; height:120px;display: inline-block; float: left; background: black url(\'./images/5347ba39a3664e9b74000049.png\') no-repeat;background-size: 80%;background-position: center center;"></div> <a class="button normal changeLogo" style="border-width: 1px; margin: 40px 0 0 16px">更换</a> </div> </div></div>', 
new String(d);
});
}), define("scripts/tpl/promoHtml", [ "./template" ], function(a) {
return a("./template")("promoHtml", function(a) {
"use strict";
var b = this, c = (b.$helpers, a.res_data), d = b.$string, e = a.data, f = a.i, g = "";
for (g += '<style> .promo-content{ width:100%; color:rgba(255,255,255,1); padding:0 25px; height:100%; background-color:rgba(0,0,0,0.73); top:0; left:0; position:absolute; } .promo-content p{ word-wrap: break-word; word-break: normal; margin:5px 0; } .promo-card-list{ padding:0; list-style: none; overflow: hidden; } .promo-card-list li{ float: left; width:33%; } .promo-card-list li img{ width:95%; border:1px solid #fff; } .promo-card-list li p{ margin:0; font-size: 12px; text-align: center; } .promo-more{ display: block; width: 70%; text-align: center; margin: 0 auto; background: #dd6600; color: #fff; border-radius: 3px; padding: 5px; height: 35px; line-height: 25px; clear: both; } .promo-close{ clear: both; text-align: center; color:#969696; font-size: 16px; margin-top: 15px!important; } a.promo-more:hover,a.promo-more:focus,a.promo-more:visited{ color: #fff; } .promo-des{ margin: 55px 0 10px; height: 80px; color: #fff; overflow: hidden; font-size: 16px; font-weight: normal; } .promo-dex-sucss{ font-weight: normal; height:25px; line-height: 25px; font-size: 16px; background:url(images/success_1.png) 100px 0 no-repeat; -webkit-background-size: contain; background-size: contain; color: #dd6600; } </style> <div id="js-promo" class="promo-content"> <div id="js-promo-text" class="promo-des"><div class="promo-dex-sucss">发送成功！</div> ', 
c ? g += " <p>在这个节日里，我们还为你准备了以下幸运卡片，快为朋友们选一个吧！</p> " :(g += " <p>", g += d(e.description), 
g += "</p> "), g += ' </div> <ul id="js-promo-show" class="promo-card-list"> ', 
f = 0; f < e.cards.length; f++) g += ' <li><img src="', g += d(e.cards[f].thumb), 
g += '" alt=""><p>', g += d(e.cards[f].title), g += "</p></li> ";
return g += " </ul> ", g += c ? ' <p><a id="js-promo-more" class="promo-more">点击挑选更多幸运卡片</a></p> ' :' <p><a id="js-promo-more" class="promo-more">点击挑选更多微卡</a></p> ', 
g += ' <p id="js-promo-close" class="promo-close">谢谢了！下次吧</p> </div>', new String(g);
});
}), define("scripts/tpl/recordAudio", [ "./template" ], function(a) {
return a("./template")("recordAudio", '<style> .custSound { text-align: center; width: 100%; margin: auto; padding-top: 8px; } .custSound div { width: 50px; height: 50px; background: url("images/record.png") no-repeat left top; background-size: 50px 200px; display: inline-block; margin: 0 5px; } .custSound div.recording1.active { background-position: 0 -150px; } .recording1.active:before { content: ""; width: 42px; height: 42px; border: 2px solid transparent; display: block; -webkit-animation: spinning 2s linear infinite; border-radius: 21px; margin: 4px; border-top-color: #d60; } @-webkit-keyframes spinning { 0% { -webkit-transform: rotate(0); } 100% { -webkit-transform: rotate(360deg); } } .custSound div.recording2 { background-position: 0 -50px; } .custSound div.recording2.stop { background-position: 0 -100px; } .hint { display: none; color: #d60; font-size: smaller; -webkit-animation: flashing 2s linear infinite; } @-webkit-keyframes flashing { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; } } .recording2 .close { background-image: url("images/cross.png"); width: 24px; height: 24px; display: none; border-radius: 12px; background-color: #f40; background-size: contain; position: relative; top: -16px; right: -16px; }</style> <div class="custom_voice"> <div align="center" class="split"><span>   定制语音   </span></div> <div><a class="tip-pic-btn sm"><i class="fa fa-caret-down fa-rotate-270"></i> 这是什么？</a></div> <small class="tip-pic customImageItem" style="display: none;">你可以为发送的微卡添加一段语音祝福。如果不添加，不会影响最终效果。</small> <div class="popupFormInputBox form-group box customAudioItem"> <div class="custSound"> <div class="recording1"></div> <div style="display: none;" class="recording2"><span class="close"></span></div> <span class="hint">正在录音。再次点击录音按钮停止录音。</span></div> </div> </div>');
}), define("scripts/tpl/register", [ "./template" ], function(a) {
return a("./template")("register", '<form class="content form-horizontal form-style">  <div class="form-group box user-style"> <label class="control-label"></label> <input class="form-control box-flexible username" placeholder="请输入手机号"/> <span></span>  </div> <div class="form-group box pwd-style"> <label class="control-label"></label> <input type="password" class="form-control box-flexible password" placeholder="密码不少于6个字符"/> <span></span> </div> <div class="form-group box captcha-style"> <label class="control-label"></label> <input class="form-control box-flexible ver-code captcha" placeholder="请输入验证码"/> <img class="captchaImg"> <span></span> </div>  <div class="form-group box new-register-style"> <a class="button normal hot box-flexible register" style="display: block;border-width:1px">注册</a> </div> </form> <style> .form-style div span{ display:none; padding:0 10px; margin-top: 10px; margin-left: 5px; } .validate_ture{ background:url(images/validate_ture.png) 0 0 no-repeat; background-size: contain; } .validate_false{ background:url(images/validate_false.png) 0 0 no-repeat; background-size: contain; } .confirm-label{ width: 110px; margin-left: 10px; text-align: center; border-radius: 5px; border: 1px solid transparent; background: #0099FF; color: #fff; line-height: 28px; } .captcha-style{ border-bottom:1px solid #d6d6d6; padding: 5px 30px; margin: 0; } .captcha-style label{ width: 30px; background:url(images/login_icon.png) -3px -65px no-repeat; background-size: cover; height: 30px; vertical-align: middle; padding: 0!important; } .captcha-style input{ display:inline-block; width: 110px; border: 1px solid transparent; box-shadow: none; } .captcha-style input:focus{ box-shadow: none; border-color: transparent; } .captcha-style img{ vertical-align: middle; height:30px; } .disable{ background:#d2d2d2; } .new-register-style{ width:78%; margin: 50px auto 0; } </style>');
}), define("scripts/tpl/replyInvite", [ "./template" ], function(a) {
return a("./template")("replyInvite", '<form class="content form-horizontal"> <div class="form-group box"> <label class="control-label" style="min-width: 100px;">回复</label> <select class="form-control box-flexible answer"> <option value="0" selected="selected">参加</option> <option value="1">不参加</option> <option value="2">不确定</option> </select> </div> <div class="form-group box"> <label class="control-label" style="min-width: 100px;">留言</label> <textarea class="form-control box-flexible message" style="height:90px;" cols="5"></textarea> </div> </form> ');
}), !function() {
function a(a, b) {
return (/string|function/.test(typeof b) ? h :g)(a, b);
}
function b(a, c) {
return "string" != typeof a && (c = typeof a, "number" === c ? a += "" :a = "function" === c ? b(a.call(a)) :""), 
a;
}
function c(a) {
return l[a];
}
function d(a) {
return b(a).replace(/&(?![\w#]+;)|[<>"']/g, c);
}
function e(a, b) {
if (m(a)) for (var c = 0, d = a.length; d > c; c++) b.call(a, a[c], c, a); else for (c in a) b.call(a, a[c], c);
}
function f(a, b) {
var c = /(\/)[^/]+\1\.\.\1/, d = ("./" + a).replace(/[^/]+$/, ""), e = d + b;
for (e = e.replace(/\/\.\//g, "/"); e.match(c); ) e = e.replace(c, "/");
return e;
}
function g(b, c) {
var d = a.get(b) || i({
filename:b,
name:"Render Error",
message:"Template not found"
});
return c ? d(c) :d;
}
function h(a, b) {
if ("string" == typeof b) {
var c = b;
b = function() {
return new k(c);
};
}
var d = j[a] = function(c) {
try {
return new b(c, a) + "";
} catch (d) {
return i(d)();
}
};
return d.prototype = b.prototype = n, d.toString = function() {
return b + "";
}, d;
}
function i(a) {
var b = "{Template Error}", c = a.stack || "";
if (c) c = c.split("\n").slice(0, 2).join("\n"); else for (var d in a) c += "<" + d + ">\n" + a[d] + "\n\n";
return function() {
return "object" == typeof console && console.error(b + "\n\n" + c), b;
};
}
var j = a.cache = {}, k = this.String, l = {
"<":"&#60;",
">":"&#62;",
'"':"&#34;",
"'":"&#39;",
"&":"&#38;"
}, m = Array.isArray || function(a) {
return "[object Array]" === {}.toString.call(a);
}, n = a.utils = {
$helpers:{},
$include:function(a, b, c) {
return a = f(c, a), g(a, b);
},
$string:b,
$escape:d,
$each:e
}, o = a.helpers = n.$helpers;
a.get = function(a) {
return j[a.replace(/^\.\//, "")];
}, a.helper = function(a, b) {
o[a] = b;
}, define("scripts/tpl/template", [], function() {
return a;
});
}(), define("scripts/tpl/userinfo", [ "./template" ], function(a) {
return a("./template")("userinfo", function(a) {
"use strict";
var b = this, c = (b.$helpers, b.$string), d = a.headimgurl, e = a.nickname, f = "";
return f += '<div class="content form-horizontal" style="padding:0;background:#efeff4;min-height:500px"> <div class="userprofile"> <div> <img class="headimgurl" src="', 
f += c(d || "images/defaulthead.png"), f += '" width="73" height="73" alt=""> <span> <span class="nickname">', 
f += c(e || "个人昵称"), f += '</span> </span> </div> </div> <ul class="profile-items"> <li class="item-imgLib"><i class="fa fa-photo"></i>我的图片库<i class="r-arrow"></i></li> <li class="item-audioLib"><i class="fa fa-photo"></i>我的语音库<i class="r-arrow"></i></li> <li class="item-collectLib"><i class="fa fa-heart"></i>我的收藏<i class="r-arrow"></i></li> </ul> <div class="form-group box" style="position:absolute;width:100%;bottom:45px;border:1px solid #dedede;border-right:none;border-left:none;"> <a class="button normal box-flexible hot logout" style="display: block;color:#333;background-color:#fff;padding:0;height:44px;line-height:44px">退出登录</a> </div> <div class="list cfoot"> <div style="border-bottom: 1px #d8d8d8 solid;"> <div class="line"></div><div class="line"></div><div class="line"></div> </div> <div class="item item-login"><i class="list-icon login on"></i><span class="list-icon-title">我的</span></div><div class="item item-home" onclick="javascript: location.assign(\'list.html#0\');"><i class="list-icon home"></i><span class="list-icon-title">首页</span></div><div class="item item-help"><i class="list-icon help"></i><span class="list-icon-title">最新</span></div> </div> </div>', 
new String(f);
});
}), define("scripts/tpl/weiofficial", [ "./template" ], function(a) {
return a("./template")("weiofficial", function(a) {
"use strict";
var b = this, c = (b.$helpers, a.followed), d = "";
return d += c ? ' <div class="content form-horizontal" style="padding:0;background:#efeff4"> <div class="userprofile"> <div> <img class="headimgurl" src="images/defaulthead.png" width="73" height="73" alt=""> <span> <span class="nickname">个人昵称</span>  </span> </div> </div> <ul class="profile-items"> <li class="item-imgLib"><i class="fa fa-photo"></i>我的图片库<i class="r-arrow"></i></li>  <li class="item-collectLib"><i class="fa fa-heart"></i>我的收藏<i class="r-arrow"></i></li>  </ul>  <div class="list cfoot"> <div style="border-bottom: 1px #d8d8d8 solid;"> <div class="line"></div><div class="line"></div><div class="line"></div> </div> <div class="item item-home" onclick="javascript: location.assign(\'list.html#0\');"><i class="list-icon home"></i><span class="list-icon-title">首页</span></div><div class="item item-help"><i class="list-icon help"></i><span class="list-icon-title">最新</span></div><div class="item item-login"><i class="list-icon login on"></i><span class="list-icon-title">我的</span></div><div class="item item-about"><i class="list-icon about"></i><span class="list-icon-title">关于</span></div> </div> </div> ' :' <div class="content form-horizontal" style="background:#efeff4"> <div class="notfollowedpic"></div> <p>您还没有关注我们，暂时不能为您提供专属的个人中心微卡服务。但是您依旧可以挑选喜欢的微卡定制发送。</p> <p><a href="http://mp.weixin.qq.com/s?__biz=MzA3MzMwMTgwNQ==&amp;mid=202908196&amp;idx=1&amp;sn=8bb6504461a6cdf7ce809b6ac6bbf9a8#rd" target="_blank">点击这里</a>马上关注。</p> <p>也可以在微信中搜索“卡司令”添加关注体验最炫动的微卡。</p>  </div> ', 
d += " ", new String(d);
});
}), define("scripts/vendor/fastclick", [], function(a, b, c) {
function d(a, b) {
"use strict";
function c(a, b) {
return function() {
return a.apply(b, arguments);
};
}
var f;
if (b = b || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, 
this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = b.touchBoundary || 10, 
this.layer = a, this.tapDelay = b.tapDelay || 200, !d.notNeeded(a)) {
for (var g = [ "onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel" ], h = this, i = 0, j = g.length; j > i; i++) h[g[i]] = c(h[g[i]], h);
e && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), 
a.addEventListener("mouseup", this.onMouse, !0)), a.addEventListener("click", this.onClick, !0), 
a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchmove", this.onTouchMove, !1), 
a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), 
Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) {
var e = Node.prototype.removeEventListener;
"click" === b ? e.call(a, b, c.hijacked || c, d) :e.call(a, b, c, d);
}, a.addEventListener = function(b, c, d) {
var e = Node.prototype.addEventListener;
"click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function(a) {
a.propagationStopped || c(a);
}), d) :e.call(a, b, c, d);
}), "function" == typeof a.onclick && (f = a.onclick, a.addEventListener("click", function(a) {
f(a);
}, !1), a.onclick = null);
}
}
var e = navigator.userAgent.indexOf("Android") > 0, f = /iP(ad|hone|od)/.test(navigator.userAgent), g = f && /OS 4_\d(_\d)?/.test(navigator.userAgent), h = f && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), i = navigator.userAgent.indexOf("BB10") > 0;
d.prototype.needsClick = function(a) {
"use strict";
switch (a.nodeName.toLowerCase()) {
case "button":
case "select":
case "textarea":
if (a.disabled) return !0;
break;

case "input":
if (f && "file" === a.type || a.disabled) return !0;
break;

case "label":
case "video":
return !0;
}
return /\bneedsclick\b/.test(a.className);
}, d.prototype.needsFocus = function(a) {
"use strict";
switch (a.nodeName.toLowerCase()) {
case "textarea":
return !0;

case "select":
return !e;

case "input":
switch (a.type) {
case "button":
case "checkbox":
case "file":
case "image":
case "radio":
case "submit":
return !1;
}
return !a.disabled && !a.readOnly;

default:
return /\bneedsfocus\b/.test(a.className);
}
}, d.prototype.sendClick = function(a, b) {
"use strict";
var c, d;
document.activeElement && document.activeElement !== a && document.activeElement.blur(), 
d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), 
c.forwardedTouchEvent = !0, a.dispatchEvent(c);
}, d.prototype.determineEventType = function(a) {
"use strict";
return e && "select" === a.tagName.toLowerCase() ? "mousedown" :"click";
}, d.prototype.focus = function(a) {
"use strict";
var b;
f && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type ? (b = a.value.length, 
a.setSelectionRange(b, b)) :a.focus();
}, d.prototype.updateScrollParent = function(a) {
"use strict";
var b, c;
if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
c = a;
do {
if (c.scrollHeight > c.offsetHeight) {
b = c, a.fastClickScrollParent = c;
break;
}
c = c.parentElement;
} while (c);
}
b && (b.fastClickLastScrollTop = b.scrollTop);
}, d.prototype.getTargetElementFromEventTarget = function(a) {
"use strict";
return a.nodeType === Node.TEXT_NODE ? a.parentNode :a;
}, d.prototype.onTouchStart = function(a) {
"use strict";
var b, c, d;
if (a.targetTouches.length > 1) return !0;
if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], 
f) {
if (d = window.getSelection(), d.rangeCount && !d.isCollapsed) return !0;
if (!g) {
if (c.identifier && c.identifier === this.lastTouchIdentifier) return a.preventDefault(), 
!1;
this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b);
}
}
return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, 
this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault(), 
!0;
}, d.prototype.touchHasMoved = function(a) {
"use strict";
var b = a.changedTouches[0], c = this.touchBoundary;
return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 :!1;
}, d.prototype.onTouchMove = function(a) {
"use strict";
return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, 
this.targetElement = null), !0) :!0;
}, d.prototype.findControl = function(a) {
"use strict";
return void 0 !== a.control ? a.control :a.htmlFor ? document.getElementById(a.htmlFor) :a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
}, d.prototype.onTouchEnd = function(a) {
"use strict";
var b, c, d, i, j, k = this.targetElement;
if (!this.trackingClick) return !0;
if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, 
!0;
if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, c = this.trackingClickStart, 
this.trackingClick = !1, this.trackingClickStart = 0, h && (j = a.changedTouches[0], 
k = document.elementFromPoint(j.pageX - window.pageXOffset, j.pageY - window.pageYOffset) || k, 
k.fastClickScrollParent = this.targetElement.fastClickScrollParent), d = k.tagName.toLowerCase(), 
"label" === d) {
if (b = this.findControl(k)) {
if (this.focus(k), e) return !1;
k = b;
}
} else if (this.needsFocus(k)) return a.timeStamp - c > 100 || f && window.top !== window && "input" === d ? (this.targetElement = null, 
!1) :(this.focus(k), this.sendClick(k, a), f && "select" === d || (this.targetElement = null, 
a.preventDefault()), !1);
return f && !g && (i = k.fastClickScrollParent, i && i.fastClickLastScrollTop !== i.scrollTop) ? !0 :(this.needsClick(k) || (a.preventDefault(), 
this.sendClick(k, a)), !1);
}, d.prototype.onTouchCancel = function() {
"use strict";
this.trackingClick = !1, this.targetElement = null;
}, d.prototype.onMouse = function(a) {
"use strict";
return this.targetElement ? a.forwardedTouchEvent ? !0 :a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() :a.propagationStopped = !0, 
a.stopPropagation(), a.preventDefault(), !1) :!0 :!0;
}, d.prototype.onClick = function(a) {
"use strict";
var b;
return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, 
!0) :"submit" === a.target.type && 0 === a.detail ? !0 :(b = this.onMouse(a), b || (this.targetElement = null), 
b);
}, d.prototype.destroy = function() {
"use strict";
var a = this.layer;
e && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), 
a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), 
a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), 
a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1);
}, d.notNeeded = function(a) {
"use strict";
var b, c, d;
if ("undefined" == typeof window.ontouchstart) return !0;
if (c = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [ , 0 ])[1]) {
if (!e) return !0;
if (b = document.querySelector("meta[name=viewport]")) {
if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
if (c > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0;
}
}
if (i && (d = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), d[1] >= 10 && d[2] >= 3 && (b = document.querySelector("meta[name=viewport]")))) {
if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
}
return "none" === a.style.msTouchAction ? !0 :!1;
}, d.attach = function(a, b) {
"use strict";
return new d(a, b);
}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
"use strict";
return d;
}) :"undefined" != typeof c && c.exports ? (c.exports = d.attach, c.exports.FastClick = d) :window.FastClick = d;
}), define("scripts/vendor/promise", [], function(a, b, c) {
!function(a, b) {
var d = b();
"object" == typeof c && c && (c.exports = d), "function" == typeof define && define.amd && define(b), 
a.PromisePolyfill = d, a.Promise || (a.Promise = d);
}("undefined" != typeof global ? global :this, function() {
function a(a) {
return "[object Array]" === Object.prototype.toString.call(a);
}
function b(a, b) {
for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
}
function c(a) {
if (!(this instanceof c)) throw new TypeError(this + "is not a promise");
if ("function" != typeof a) throw new TypeError("Promise resolver " + a + " is not a function");
var b = new d();
this._resolver = b, a(function(a) {
b.resolve(a);
}, function(a) {
b.reject(a);
});
}
function d() {
this._callbacks = [], this._errbacks = [], this._status = "pending", this._result = null;
}
return b(c.prototype, {
then:function(a, b) {
var d, e, f = new this.constructor(function(a, b) {
d = a, e = b;
});
return this._resolver._addCallbacks("function" == typeof a ? c._makeCallback(f, d, e, a) :d, "function" == typeof b ? c._makeCallback(f, d, e, b) :e), 
f;
},
"catch":function(a) {
return this.then(void 0, a);
}
}), c._makeCallback = function(a, b, c, d) {
return function(e) {
var f;
return f = d(e), f === a ? void c(new TypeError("Cannot resolve a promise with itself")) :void b(f);
};
}, c.resolve = function(a) {
return a && a.constructor === this ? a :new this(function(b) {
b(a);
});
}, c.reject = function(a) {
var b = new this(function() {});
return b._resolver._result = a, b._resolver._status = "rejected", b;
}, c.all = function(b) {
var c = this;
return new c(function(d, e) {
function f(a) {
return function(b) {
j[a] = b, g--, g || d(j);
};
}
if (!a(b)) return void e(new TypeError("Promise.all expects an array of values or promises"));
var g = b.length, h = 0, i = b.length, j = [];
if (1 > i) return d(j);
for (;i > h; h++) c.resolve(b[h]).then(f(h), e);
});
}, c.race = function(b) {
var c = this;
return new c(function(d, e) {
if (!a(b)) return void e(new TypeError("Promise.race expects an array of values or promises"));
for (var f = 0, g = b.length; g > f; f++) c.resolve(b[f]).then(d, e);
});
}, c.async = "undefined" != typeof setImmediate ? function(a) {
setImmediate(a);
} :"undefined" != typeof process && process.nextTick ? process.nextTick :function(a) {
setTimeout(a, 0);
}, b(d.prototype, {
fulfill:function(a) {
var b = this._status;
("pending" === b || "accepted" === b) && (this._result = a, this._status = "fulfilled"), 
"fulfilled" === this._status && (this._notify(this._callbacks, this._result), this._callbacks = [], 
this._errbacks = null);
},
reject:function(a) {
var b = this._status;
("pending" === b || "accepted" === b) && (this._result = a, this._status = "rejected"), 
"rejected" === this._status && (this._notify(this._errbacks, this._result), this._callbacks = null, 
this._errbacks = []);
},
resolve:function(a) {
"pending" === this._status && (this._status = "accepted", this._value = a, (this._callbacks && this._callbacks.length || this._errbacks && this._errbacks.length) && this._unwrap(this._value));
},
_unwrap:function(a) {
var b, c = this, d = !1;
return !a || "object" != typeof a && "function" != typeof a ? void c.fulfill(a) :(b = a.then, 
void ("function" == typeof b ? b.call(a, function(a) {
d || (d = !0, c._unwrap(a));
}, function(a) {
d || (d = !0, c.reject(a));
}) :c.fulfill(a)));
},
_addCallbacks:function(a, b) {
var c = this._callbacks, d = this._errbacks;
switch (c && c.push(a), d && d.push(b), this._status) {
case "accepted":
this._unwrap(this._value);
break;

case "fulfilled":
this.fulfill(this._result);
break;

case "rejected":
this.reject(this._result);
}
},
_notify:function(a, b) {
a.length && c.async(function() {
var c, d;
for (c = 0, d = a.length; d > c; ++c) a[c](b);
});
}
}), c.Resolver = d, c;
});
}), define("scripts/vendor/sha1", [], function(a, b) {
"use strict";
var c = {};
c.hash = function(a) {
a = a.utf8Encode();
var b = [ 1518500249, 1859775393, 2400959708, 3395469782 ];
a += String.fromCharCode(128);
for (var d = a.length / 4 + 2, e = Math.ceil(d / 16), f = new Array(e), g = 0; e > g; g++) {
f[g] = new Array(16);
for (var h = 0; 16 > h; h++) f[g][h] = a.charCodeAt(64 * g + 4 * h) << 24 | a.charCodeAt(64 * g + 4 * h + 1) << 16 | a.charCodeAt(64 * g + 4 * h + 2) << 8 | a.charCodeAt(64 * g + 4 * h + 3);
}
f[e - 1][14] = 8 * (a.length - 1) / Math.pow(2, 32), f[e - 1][14] = Math.floor(f[e - 1][14]), 
f[e - 1][15] = 8 * (a.length - 1) & 4294967295;
for (var i, j, k, l, m, n = 1732584193, o = 4023233417, p = 2562383102, q = 271733878, r = 3285377520, s = new Array(80), g = 0; e > g; g++) {
for (var t = 0; 16 > t; t++) s[t] = f[g][t];
for (var t = 16; 80 > t; t++) s[t] = c.ROTL(s[t - 3] ^ s[t - 8] ^ s[t - 14] ^ s[t - 16], 1);
i = n, j = o, k = p, l = q, m = r;
for (var t = 0; 80 > t; t++) {
var u = Math.floor(t / 20), v = c.ROTL(i, 5) + c.f(u, j, k, l) + m + b[u] + s[t] & 4294967295;
m = l, l = k, k = c.ROTL(j, 30), j = i, i = v;
}
n = n + i & 4294967295, o = o + j & 4294967295, p = p + k & 4294967295, q = q + l & 4294967295, 
r = r + m & 4294967295;
}
return c.toHexStr(n) + c.toHexStr(o) + c.toHexStr(p) + c.toHexStr(q) + c.toHexStr(r);
}, b.hash = c.hash, c.f = function(a, b, c, d) {
switch (a) {
case 0:
return b & c ^ ~b & d;

case 1:
return b ^ c ^ d;

case 2:
return b & c ^ b & d ^ c & d;

case 3:
return b ^ c ^ d;
}
}, c.ROTL = function(a, b) {
return a << b | a >>> 32 - b;
}, c.toHexStr = function(a) {
for (var b, c = "", d = 7; d >= 0; d--) b = a >>> 4 * d & 15, c += b.toString(16);
return c;
}, "undefined" == typeof String.prototype.utf8Encode && (String.prototype.utf8Encode = function() {
return unescape(encodeURIComponent(this));
}), "undefined" == typeof String.prototype.utf8Decode && (String.prototype.utf8Decode = function() {
try {
return decodeURIComponent(escape(this));
} catch (a) {
return this;
}
});
}), define("scripts/vendor/zepto", [], function(a, b, c) {
var d = function() {
function a(a) {
return null == a ? String(a) :U[V.call(a)] || "object";
}
function b(b) {
return "function" == a(b);
}
function c(a) {
return null != a && a == a.window;
}
function d(a) {
return null != a && a.nodeType == a.DOCUMENT_NODE;
}
function e(b) {
return "object" == a(b);
}
function f(a) {
return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype;
}
function g(a) {
return "number" == typeof a.length;
}
function h(a) {
return D.call(a, function(a) {
return null != a;
});
}
function i(a) {
return a.length > 0 ? x.fn.concat.apply([], a) :a;
}
function j(a) {
return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
}
function k(a) {
return a in G ? G[a] :G[a] = new RegExp("(^|\\s)" + a + "(\\s|$)");
}
function l(a, b) {
return "number" != typeof b || H[j(a)] ? b :b + "px";
}
function m(a) {
var b, c;
return F[a] || (b = E.createElement(a), E.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"), 
b.parentNode.removeChild(b), "none" == c && (c = "block"), F[a] = c), F[a];
}
function n(a) {
return "children" in a ? C.call(a.children) :x.map(a.childNodes, function(a) {
return 1 == a.nodeType ? a :void 0;
});
}
function o(a, b, c) {
for (w in b) c && (f(b[w]) || Z(b[w])) ? (f(b[w]) && !f(a[w]) && (a[w] = {}), Z(b[w]) && !Z(a[w]) && (a[w] = []), 
o(a[w], b[w], c)) :b[w] !== v && (a[w] = b[w]);
}
function p(a, b) {
return null == b ? x(a) :x(a).filter(b);
}
function q(a, c, d, e) {
return b(c) ? c.call(a, d, e) :c;
}
function r(a, b, c) {
null == c ? a.removeAttribute(b) :a.setAttribute(b, c);
}
function s(a, b) {
var c = a.className || "", d = c && c.baseVal !== v;
return b === v ? d ? c.baseVal :c :void (d ? c.baseVal = b :a.className = b);
}
function t(a) {
try {
return a ? "true" == a || ("false" == a ? !1 :"null" == a ? null :+a + "" == a ? +a :/^[\[\{]/.test(a) ? x.parseJSON(a) :a) :a;
} catch (b) {
return a;
}
}
function u(a, b) {
b(a);
for (var c = 0, d = a.childNodes.length; d > c; c++) u(a.childNodes[c], b);
}
var v, w, x, y, z, A, B = [], C = B.slice, D = B.filter, E = window.document, F = {}, G = {}, H = {
"column-count":1,
columns:1,
"font-weight":1,
"line-height":1,
opacity:1,
"z-index":1,
zoom:1
}, I = /^\s*<(\w+|!)[^>]*>/, J = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, L = /^(?:body|html)$/i, M = /([A-Z])/g, N = [ "val", "css", "html", "text", "data", "width", "height", "offset" ], O = [ "after", "prepend", "before", "append" ], P = E.createElement("table"), Q = E.createElement("tr"), R = {
tr:E.createElement("tbody"),
tbody:P,
thead:P,
tfoot:P,
td:Q,
th:Q,
"*":E.createElement("div")
}, S = /complete|loaded|interactive/, T = /^[\w-]*$/, U = {}, V = U.toString, W = {}, X = E.createElement("div"), Y = {
tabindex:"tabIndex",
readonly:"readOnly",
"for":"htmlFor",
"class":"className",
maxlength:"maxLength",
cellspacing:"cellSpacing",
cellpadding:"cellPadding",
rowspan:"rowSpan",
colspan:"colSpan",
usemap:"useMap",
frameborder:"frameBorder",
contenteditable:"contentEditable"
}, Z = Array.isArray || function(a) {
return a instanceof Array;
};
return W.matches = function(a, b) {
if (!b || !a || 1 !== a.nodeType) return !1;
var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
if (c) return c.call(a, b);
var d, e = a.parentNode, f = !e;
return f && (e = X).appendChild(a), d = ~W.qsa(e, b).indexOf(a), f && X.removeChild(a), 
d;
}, z = function(a) {
return a.replace(/-+(.)?/g, function(a, b) {
return b ? b.toUpperCase() :"";
});
}, A = function(a) {
return D.call(a, function(b, c) {
return a.indexOf(b) == c;
});
}, W.fragment = function(a, b, c) {
var d, e, g;
return J.test(a) && (d = x(E.createElement(RegExp.$1))), d || (a.replace && (a = a.replace(K, "<$1></$2>")), 
b === v && (b = I.test(a) && RegExp.$1), b in R || (b = "*"), g = R[b], g.innerHTML = "" + a, 
d = x.each(C.call(g.childNodes), function() {
g.removeChild(this);
})), f(c) && (e = x(d), x.each(c, function(a, b) {
N.indexOf(a) > -1 ? e[a](b) :e.attr(a, b);
})), d;
}, W.Z = function(a, b) {
return a = a || [], a.__proto__ = x.fn, a.selector = b || "", a;
}, W.isZ = function(a) {
return a instanceof W.Z;
}, W.init = function(a, c) {
var d;
if (!a) return W.Z();
if ("string" == typeof a) if (a = a.trim(), "<" == a[0] && I.test(a)) d = W.fragment(a, RegExp.$1, c), 
a = null; else {
if (c !== v) return x(c).find(a);
d = W.qsa(E, a);
} else {
if (b(a)) return x(E).ready(a);
if (W.isZ(a)) return a;
if (Z(a)) d = h(a); else if (e(a)) d = [ a ], a = null; else if (I.test(a)) d = W.fragment(a.trim(), RegExp.$1, c), 
a = null; else {
if (c !== v) return x(c).find(a);
d = W.qsa(E, a);
}
}
return W.Z(d, a);
}, x = function(a, b) {
return W.init(a, b);
}, x.extend = function(a) {
var b, c = C.call(arguments, 1);
return "boolean" == typeof a && (b = a, a = c.shift()), c.forEach(function(c) {
o(a, c, b);
}), a;
}, W.qsa = function(a, b) {
var c, e = "#" == b[0], f = !e && "." == b[0], g = e || f ? b.slice(1) :b, h = T.test(g);
return d(a) && h && e ? (c = a.getElementById(g)) ? [ c ] :[] :1 !== a.nodeType && 9 !== a.nodeType ? [] :C.call(h && !e ? f ? a.getElementsByClassName(g) :a.getElementsByTagName(b) :a.querySelectorAll(b));
}, x.contains = E.documentElement.contains ? function(a, b) {
return a !== b && a.contains(b);
} :function(a, b) {
for (;b && (b = b.parentNode); ) if (b === a) return !0;
return !1;
}, x.type = a, x.isFunction = b, x.isWindow = c, x.isArray = Z, x.isPlainObject = f, 
x.isEmptyObject = function(a) {
var b;
for (b in a) return !1;
return !0;
}, x.inArray = function(a, b, c) {
return B.indexOf.call(b, a, c);
}, x.camelCase = z, x.trim = function(a) {
return null == a ? "" :String.prototype.trim.call(a);
}, x.uuid = 0, x.support = {}, x.expr = {}, x.map = function(a, b) {
var c, d, e, f = [];
if (g(a)) for (d = 0; d < a.length; d++) c = b(a[d], d), null != c && f.push(c); else for (e in a) c = b(a[e], e), 
null != c && f.push(c);
return i(f);
}, x.each = function(a, b) {
var c, d;
if (g(a)) {
for (c = 0; c < a.length; c++) if (b.call(a[c], c, a[c]) === !1) return a;
} else for (d in a) if (b.call(a[d], d, a[d]) === !1) return a;
return a;
}, x.grep = function(a, b) {
return D.call(a, b);
}, window.JSON && (x.parseJSON = JSON.parse), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
U["[object " + b + "]"] = b.toLowerCase();
}), x.fn = {
forEach:B.forEach,
reduce:B.reduce,
push:B.push,
sort:B.sort,
indexOf:B.indexOf,
concat:B.concat,
map:function(a) {
return x(x.map(this, function(b, c) {
return a.call(b, c, b);
}));
},
slice:function() {
return x(C.apply(this, arguments));
},
ready:function(a) {
return S.test(E.readyState) && E.body ? a(x) :E.addEventListener("DOMContentLoaded", function() {
a(x);
}, !1), this;
},
get:function(a) {
return a === v ? C.call(this) :this[a >= 0 ? a :a + this.length];
},
toArray:function() {
return this.get();
},
size:function() {
return this.length;
},
remove:function() {
return this.each(function() {
null != this.parentNode && this.parentNode.removeChild(this);
});
},
each:function(a) {
return B.every.call(this, function(b, c) {
return a.call(b, c, b) !== !1;
}), this;
},
filter:function(a) {
return b(a) ? this.not(this.not(a)) :x(D.call(this, function(b) {
return W.matches(b, a);
}));
},
add:function(a, b) {
return x(A(this.concat(x(a, b))));
},
is:function(a) {
return this.length > 0 && W.matches(this[0], a);
},
not:function(a) {
var c = [];
if (b(a) && a.call !== v) this.each(function(b) {
a.call(this, b) || c.push(this);
}); else {
var d = "string" == typeof a ? this.filter(a) :g(a) && b(a.item) ? C.call(a) :x(a);
this.forEach(function(a) {
d.indexOf(a) < 0 && c.push(a);
});
}
return x(c);
},
has:function(a) {
return this.filter(function() {
return e(a) ? x.contains(this, a) :x(this).find(a).size();
});
},
eq:function(a) {
return -1 === a ? this.slice(a) :this.slice(a, +a + 1);
},
first:function() {
var a = this[0];
return a && !e(a) ? a :x(a);
},
last:function() {
var a = this[this.length - 1];
return a && !e(a) ? a :x(a);
},
find:function(a) {
var b, c = this;
return b = a ? "object" == typeof a ? x(a).filter(function() {
var a = this;
return B.some.call(c, function(b) {
return x.contains(b, a);
});
}) :1 == this.length ? x(W.qsa(this[0], a)) :this.map(function() {
return W.qsa(this, a);
}) :x();
},
closest:function(a, b) {
var c = this[0], e = !1;
for ("object" == typeof a && (e = x(a)); c && !(e ? e.indexOf(c) >= 0 :W.matches(c, a)); ) c = c !== b && !d(c) && c.parentNode;
return x(c);
},
parents:function(a) {
for (var b = [], c = this; c.length > 0; ) c = x.map(c, function(a) {
return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) :void 0;
});
return p(b, a);
},
parent:function(a) {
return p(A(this.pluck("parentNode")), a);
},
children:function(a) {
return p(this.map(function() {
return n(this);
}), a);
},
contents:function() {
return this.map(function() {
return C.call(this.childNodes);
});
},
siblings:function(a) {
return p(this.map(function(a, b) {
return D.call(n(b.parentNode), function(a) {
return a !== b;
});
}), a);
},
empty:function() {
return this.each(function() {
this.innerHTML = "";
});
},
pluck:function(a) {
return x.map(this, function(b) {
return b[a];
});
},
show:function() {
return this.each(function() {
"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName));
});
},
replaceWith:function(a) {
return this.before(a).remove();
},
wrap:function(a) {
var c = b(a);
if (this[0] && !c) var d = x(a).get(0), e = d.parentNode || this.length > 1;
return this.each(function(b) {
x(this).wrapAll(c ? a.call(this, b) :e ? d.cloneNode(!0) :d);
});
},
wrapAll:function(a) {
if (this[0]) {
x(this[0]).before(a = x(a));
for (var b; (b = a.children()).length; ) a = b.first();
x(a).append(this);
}
return this;
},
wrapInner:function(a) {
var c = b(a);
return this.each(function(b) {
var d = x(this), e = d.contents(), f = c ? a.call(this, b) :a;
e.length ? e.wrapAll(f) :d.append(f);
});
},
unwrap:function() {
return this.parent().each(function() {
x(this).replaceWith(x(this).children());
}), this;
},
clone:function() {
return this.map(function() {
return this.cloneNode(!0);
});
},
hide:function() {
return this.css("display", "none");
},
toggle:function(a) {
return this.each(function() {
var b = x(this);
(a === v ? "none" == b.css("display") :a) ? b.show() :b.hide();
});
},
prev:function(a) {
return x(this.pluck("previousElementSibling")).filter(a || "*");
},
next:function(a) {
return x(this.pluck("nextElementSibling")).filter(a || "*");
},
html:function(a) {
return 0 in arguments ? this.each(function(b) {
var c = this.innerHTML;
x(this).empty().append(q(this, a, b, c));
}) :0 in this ? this[0].innerHTML :null;
},
text:function(a) {
return 0 in arguments ? this.each(function(b) {
var c = q(this, a, b, this.textContent);
this.textContent = null == c ? "" :"" + c;
}) :0 in this ? this[0].textContent :null;
},
attr:function(a, b) {
var c;
return "string" != typeof a || 1 in arguments ? this.each(function(c) {
if (1 === this.nodeType) if (e(a)) for (w in a) r(this, w, a[w]); else r(this, a, q(this, b, c, this.getAttribute(a)));
}) :this.length && 1 === this[0].nodeType ? !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] :c :v;
},
removeAttr:function(a) {
return this.each(function() {
1 === this.nodeType && a.split(" ").forEach(function(a) {
r(this, a);
}, this);
});
},
prop:function(a, b) {
return a = Y[a] || a, 1 in arguments ? this.each(function(c) {
this[a] = q(this, b, c, this[a]);
}) :this[0] && this[0][a];
},
data:function(a, b) {
var c = "data-" + a.replace(M, "-$1").toLowerCase(), d = 1 in arguments ? this.attr(c, b) :this.attr(c);
return null !== d ? t(d) :v;
},
val:function(a) {
return 0 in arguments ? this.each(function(b) {
this.value = q(this, a, b, this.value);
}) :this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
return this.selected;
}).pluck("value") :this[0].value);
},
offset:function(a) {
if (a) return this.each(function(b) {
var c = x(this), d = q(this, a, b, c.offset()), e = c.offsetParent().offset(), f = {
top:d.top - e.top,
left:d.left - e.left
};
"static" == c.css("position") && (f.position = "relative"), c.css(f);
});
if (!this.length) return null;
var b = this[0].getBoundingClientRect();
return {
left:b.left + window.pageXOffset,
top:b.top + window.pageYOffset,
width:Math.round(b.width),
height:Math.round(b.height)
};
},
css:function(b, c) {
if (arguments.length < 2) {
var d, e = this[0];
if (!e) return;
if (d = getComputedStyle(e, ""), "string" == typeof b) return e.style[z(b)] || d.getPropertyValue(b);
if (Z(b)) {
var f = {};
return x.each(b, function(a, b) {
f[b] = e.style[z(b)] || d.getPropertyValue(b);
}), f;
}
}
var g = "";
if ("string" == a(b)) c || 0 === c ? g = j(b) + ":" + l(b, c) :this.each(function() {
this.style.removeProperty(j(b));
}); else for (w in b) b[w] || 0 === b[w] ? g += j(w) + ":" + l(w, b[w]) + ";" :this.each(function() {
this.style.removeProperty(j(w));
});
return this.each(function() {
this.style.cssText += ";" + g;
});
},
index:function(a) {
return a ? this.indexOf(x(a)[0]) :this.parent().children().indexOf(this[0]);
},
hasClass:function(a) {
return a ? B.some.call(this, function(a) {
return this.test(s(a));
}, k(a)) :!1;
},
addClass:function(a) {
return a ? this.each(function(b) {
if ("className" in this) {
y = [];
var c = s(this), d = q(this, a, b, c);
d.split(/\s+/g).forEach(function(a) {
x(this).hasClass(a) || y.push(a);
}, this), y.length && s(this, c + (c ? " " :"") + y.join(" "));
}
}) :this;
},
removeClass:function(a) {
return this.each(function(b) {
if ("className" in this) {
if (a === v) return s(this, "");
y = s(this), q(this, a, b, y).split(/\s+/g).forEach(function(a) {
y = y.replace(k(a), " ");
}), s(this, y.trim());
}
});
},
toggleClass:function(a, b) {
return a ? this.each(function(c) {
var d = x(this), e = q(this, a, c, s(this));
e.split(/\s+/g).forEach(function(a) {
(b === v ? !d.hasClass(a) :b) ? d.addClass(a) :d.removeClass(a);
});
}) :this;
},
scrollTop:function(a) {
if (this.length) {
var b = "scrollTop" in this[0];
return a === v ? b ? this[0].scrollTop :this[0].pageYOffset :this.each(b ? function() {
this.scrollTop = a;
} :function() {
this.scrollTo(this.scrollX, a);
});
}
},
scrollLeft:function(a) {
if (this.length) {
var b = "scrollLeft" in this[0];
return a === v ? b ? this[0].scrollLeft :this[0].pageXOffset :this.each(b ? function() {
this.scrollLeft = a;
} :function() {
this.scrollTo(a, this.scrollY);
});
}
},
position:function() {
if (this.length) {
var a = this[0], b = this.offsetParent(), c = this.offset(), d = L.test(b[0].nodeName) ? {
top:0,
left:0
} :b.offset();
return c.top -= parseFloat(x(a).css("margin-top")) || 0, c.left -= parseFloat(x(a).css("margin-left")) || 0, 
d.top += parseFloat(x(b[0]).css("border-top-width")) || 0, d.left += parseFloat(x(b[0]).css("border-left-width")) || 0, 
{
top:c.top - d.top,
left:c.left - d.left
};
}
},
offsetParent:function() {
return this.map(function() {
for (var a = this.offsetParent || E.body; a && !L.test(a.nodeName) && "static" == x(a).css("position"); ) a = a.offsetParent;
return a;
});
}
}, x.fn.detach = x.fn.remove, [ "width", "height" ].forEach(function(a) {
var b = a.replace(/./, function(a) {
return a[0].toUpperCase();
});
x.fn[a] = function(e) {
var f, g = this[0];
return e === v ? c(g) ? g["inner" + b] :d(g) ? g.documentElement["scroll" + b] :(f = this.offset()) && f[a] :this.each(function(b) {
g = x(this), g.css(a, q(this, e, b, g[a]()));
});
};
}), O.forEach(function(b, c) {
var d = c % 2;
x.fn[b] = function() {
var b, e, f = x.map(arguments, function(c) {
return b = a(c), "object" == b || "array" == b || null == c ? c :W.fragment(c);
}), g = this.length > 1;
return f.length < 1 ? this :this.each(function(a, b) {
e = d ? b :b.parentNode, b = 0 == c ? b.nextSibling :1 == c ? b.firstChild :2 == c ? b :null;
var h = x.contains(E.documentElement, e);
f.forEach(function(a) {
if (g) a = a.cloneNode(!0); else if (!e) return x(a).remove();
e.insertBefore(a, b), h && u(a, function(a) {
null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML);
});
});
});
}, x.fn[d ? b + "To" :"insert" + (c ? "Before" :"After")] = function(a) {
return x(a)[b](this), this;
};
}), W.Z.prototype = x.fn, W.uniq = A, W.deserializeValue = t, x.zepto = W, x;
}();
window.Zepto = d, void 0 === window.$ && (window.$ = d), function(a) {
function b(a) {
return a._zid || (a._zid = m++);
}
function c(a, c, f, g) {
if (c = d(c), c.ns) var h = e(c.ns);
return (q[b(a)] || []).filter(function(a) {
return !(!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g);
});
}
function d(a) {
var b = ("" + a).split(".");
return {
e:b[0],
ns:b.slice(1).sort().join(" ")
};
}
function e(a) {
return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)");
}
function f(a, b) {
return a.del && !s && a.e in t || !!b;
}
function g(a) {
return u[a] || s && t[a] || a;
}
function h(c, e, h, i, k, m, n) {
var o = b(c), p = q[o] || (q[o] = []);
e.split(/\s/).forEach(function(b) {
if ("ready" == b) return a(document).ready(h);
var e = d(b);
e.fn = h, e.sel = k, e.e in u && (h = function(b) {
var c = b.relatedTarget;
return !c || c !== this && !a.contains(this, c) ? e.fn.apply(this, arguments) :void 0;
}), e.del = m;
var o = m || h;
e.proxy = function(a) {
if (a = j(a), !a.isImmediatePropagationStopped()) {
a.data = i;
var b = o.apply(c, a._args == l ? [ a ] :[ a ].concat(a._args));
return b === !1 && (a.preventDefault(), a.stopPropagation()), b;
}
}, e.i = p.length, p.push(e), "addEventListener" in c && c.addEventListener(g(e.e), e.proxy, f(e, n));
});
}
function i(a, d, e, h, i) {
var j = b(a);
(d || "").split(/\s/).forEach(function(b) {
c(a, b, e, h).forEach(function(b) {
delete q[j][b.i], "removeEventListener" in a && a.removeEventListener(g(b.e), b.proxy, f(b, i));
});
});
}
function j(b, c) {
return (c || !b.isDefaultPrevented) && (c || (c = b), a.each(y, function(a, d) {
var e = c[a];
b[a] = function() {
return this[d] = v, e && e.apply(c, arguments);
}, b[d] = w;
}), (c.defaultPrevented !== l ? c.defaultPrevented :"returnValue" in c ? c.returnValue === !1 :c.getPreventDefault && c.getPreventDefault()) && (b.isDefaultPrevented = v)), 
b;
}
function k(a) {
var b, c = {
originalEvent:a
};
for (b in a) x.test(b) || a[b] === l || (c[b] = a[b]);
return j(c, a);
}
var l, m = 1, n = Array.prototype.slice, o = a.isFunction, p = function(a) {
return "string" == typeof a;
}, q = {}, r = {}, s = "onfocusin" in window, t = {
focus:"focusin",
blur:"focusout"
}, u = {
mouseenter:"mouseover",
mouseleave:"mouseout"
};
r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents", a.event = {
add:h,
remove:i
}, a.proxy = function(c, d) {
var e = 2 in arguments && n.call(arguments, 2);
if (o(c)) {
var f = function() {
return c.apply(d, e ? e.concat(n.call(arguments)) :arguments);
};
return f._zid = b(c), f;
}
if (p(d)) return e ? (e.unshift(c[d], c), a.proxy.apply(null, e)) :a.proxy(c[d], c);
throw new TypeError("expected function");
}, a.fn.bind = function(a, b, c) {
return this.on(a, b, c);
}, a.fn.unbind = function(a, b) {
return this.off(a, b);
}, a.fn.one = function(a, b, c, d) {
return this.on(a, b, c, d, 1);
};
var v = function() {
return !0;
}, w = function() {
return !1;
}, x = /^([A-Z]|returnValue$|layer[XY]$)/, y = {
preventDefault:"isDefaultPrevented",
stopImmediatePropagation:"isImmediatePropagationStopped",
stopPropagation:"isPropagationStopped"
};
a.fn.delegate = function(a, b, c) {
return this.on(b, a, c);
}, a.fn.undelegate = function(a, b, c) {
return this.off(b, a, c);
}, a.fn.live = function(b, c) {
return a(document.body).delegate(this.selector, b, c), this;
}, a.fn.die = function(b, c) {
return a(document.body).undelegate(this.selector, b, c), this;
}, a.fn.on = function(b, c, d, e, f) {
"tap" !== b || a.os.tablet || a.os.phone || (b = "click");
var g, j, m = this;
return b && !p(b) ? (a.each(b, function(a, b) {
m.on(a, c, d, b, f);
}), m) :(p(c) || o(e) || e === !1 || (e = d, d = c, c = l), (o(d) || d === !1) && (e = d, 
d = l), e === !1 && (e = w), m.each(function(l, m) {
f && (g = function(a) {
return i(m, a.type, e), e.apply(this, arguments);
}), c && (j = function(b) {
var d, f = a(b.target).closest(c, m).get(0);
return f && f !== m ? (d = a.extend(k(b), {
currentTarget:f,
liveFired:m
}), (g || e).apply(f, [ d ].concat(n.call(arguments, 1)))) :void 0;
}), h(m, b, e, d, c, j || g);
}));
}, a.fn.off = function(b, c, d) {
var e = this;
return b && !p(b) ? (a.each(b, function(a, b) {
e.off(a, c, b);
}), e) :(p(c) || o(d) || d === !1 || (d = c, c = l), d === !1 && (d = w), e.each(function() {
i(this, b, d, c);
}));
}, a.fn.trigger = function(b, c) {
return "tap" !== b || a.os.tablet || a.os.phone || (b = "click"), b = p(b) || a.isPlainObject(b) ? a.Event(b) :j(b), 
b._args = c, this.each(function() {
b.type in t && "function" == typeof this[b.type] ? this[b.type]() :"dispatchEvent" in this ? this.dispatchEvent(b) :a(this).triggerHandler(b, c);
});
}, a.fn.triggerHandler = function(b, d) {
var e, f;
return this.each(function(g, h) {
e = k(p(b) ? a.Event(b) :b), e._args = d, e.target = h, a.each(c(h, b.type || b), function(a, b) {
return f = b.proxy(e), e.isImmediatePropagationStopped() ? !1 :void 0;
});
}), f;
}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
a.fn[b] = function(a) {
return 0 in arguments ? this.bind(b, a) :this.trigger(b);
};
}), a.Event = function(a, b) {
p(a) || (b = a, a = b.type);
var c = document.createEvent(r[a] || "Events"), d = !0;
if (b) for (var e in b) "bubbles" == e ? d = !!b[e] :c[e] = b[e];
return c.initEvent(a, d, !0), j(c);
};
}(d), function(a) {
function b(b, c, d) {
var e = a.Event(c);
return a(b).trigger(e, d), !e.isDefaultPrevented();
}
function c(a, c, d, e) {
return a.global ? b(c || s, d, e) :void 0;
}
function d(b) {
b.global && 0 === a.active++ && c(b, null, "ajaxStart");
}
function e(b) {
b.global && !--a.active && c(b, null, "ajaxStop");
}
function f(a, b) {
var d = b.context;
return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", [ a, b ]) === !1 ? !1 :void c(b, d, "ajaxSend", [ a, b ]);
}
function g(a, b, d, e) {
var f = d.context, g = "success";
d.success.call(f, a, g, b), e && e.resolveWith(f, [ a, g, b ]), c(d, f, "ajaxSuccess", [ b, d, a ]), 
i(g, b, d);
}
function h(a, b, d, e, f) {
var g = e.context;
e.error.call(g, d, b, a), f && f.rejectWith(g, [ d, b, a ]), c(e, g, "ajaxError", [ d, e, a || b ]), 
i(b, d, e);
}
function i(a, b, d) {
var f = d.context;
d.complete.call(f, b, a), c(d, f, "ajaxComplete", [ b, d ]), e(d);
}
function j() {}
function k(a) {
return a && (a = a.split(";", 2)[0]), a && (a == x ? "html" :a == w ? "json" :u.test(a) ? "script" :v.test(a) && "xml") || "text";
}
function l(a, b) {
return "" == b ? a :(a + "&" + b).replace(/[&?]{1,2}/, "?");
}
function m(b) {
b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)), 
!b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data), 
b.data = void 0);
}
function n(b, c, d, e) {
return a.isFunction(c) && (e = d, d = c, c = void 0), a.isFunction(d) || (e = d, 
d = void 0), {
url:b,
data:c,
success:d,
dataType:e
};
}
function o(b, c, d, e) {
var f, g = a.isArray(c), h = a.isPlainObject(c);
a.each(c, function(c, i) {
f = a.type(i), e && (c = d ? e :e + "[" + (h || "object" == f || "array" == f ? c :"") + "]"), 
!e && g ? b.add(i.name, i.value) :"array" == f || !d && "object" == f ? o(b, i, d, c) :b.add(c, i);
});
}
var p, q, r = 0, s = window.document, t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, u = /^(?:text|application)\/javascript/i, v = /^(?:text|application)\/xml/i, w = "application/json", x = "text/html", y = /^\s*$/, z = s.createElement("a");
z.href = window.location.href, a.active = 0, a.ajaxJSONP = function(b, c) {
if (!("type" in b)) return a.ajax(b);
var d, e, i = b.jsonpCallback, j = (a.isFunction(i) ? i() :i) || "jsonp" + ++r, k = s.createElement("script"), l = window[j], m = function(b) {
a(k).triggerHandler("error", b || "abort");
}, n = {
abort:m
};
return c && c.promise(n), a(k).on("load error", function(f, i) {
clearTimeout(e), a(k).off().remove(), "error" != f.type && d ? g(d[0], n, b, c) :h(null, i || "error", n, b, c), 
window[j] = l, d && a.isFunction(l) && l(d[0]), l = d = void 0;
}), f(n, b) === !1 ? (m("abort"), n) :(window[j] = function() {
d = arguments;
}, k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + j), s.head.appendChild(k), b.timeout > 0 && (e = setTimeout(function() {
m("timeout");
}, b.timeout)), n);
}, a.ajaxSettings = {
type:"GET",
beforeSend:j,
success:j,
error:j,
complete:j,
context:null,
global:!0,
xhr:function() {
return new window.XMLHttpRequest();
},
accepts:{
script:"text/javascript, application/javascript, application/x-javascript",
json:w,
xml:"application/xml, text/xml",
html:x,
text:"text/plain"
},
crossDomain:!1,
timeout:0,
processData:!0,
cache:!0
}, a.ajax = function(b) {
var c, e = a.extend({}, b || {}), i = a.Deferred && a.Deferred();
for (p in a.ajaxSettings) void 0 === e[p] && (e[p] = a.ajaxSettings[p]);
d(e), e.crossDomain || (c = s.createElement("a"), c.href = e.url, c.href = c.href, 
e.crossDomain = z.protocol + "//" + z.host != c.protocol + "//" + c.host), e.url || (e.url = window.location.toString()), 
m(e);
var n = e.dataType, o = /\?.+=\?/.test(e.url);
if (o && (n = "jsonp"), e.cache !== !1 && (b && b.cache === !0 || "script" != n && "jsonp" != n) || (e.url = l(e.url, "_=" + Date.now())), 
"jsonp" == n) return o || (e.url = l(e.url, e.jsonp ? e.jsonp + "=?" :e.jsonp === !1 ? "" :"callback=?")), 
a.ajaxJSONP(e, i);
var r, t = e.accepts[n], u = {}, v = function(a, b) {
u[a.toLowerCase()] = [ a, b ];
}, w = /^([\w-]+:)\/\//.test(e.url) ? RegExp.$1 :window.location.protocol, x = e.xhr(), A = x.setRequestHeader;
if (i && i.promise(x), e.crossDomain || v("X-Requested-With", "XMLHttpRequest"), 
v("Accept", t || "*/*"), (t = e.mimeType || t) && (t.indexOf(",") > -1 && (t = t.split(",", 2)[0]), 
x.overrideMimeType && x.overrideMimeType(t)), (e.contentType || e.contentType !== !1 && e.data && "GET" != e.type.toUpperCase()) && v("Content-Type", e.contentType || "application/x-www-form-urlencoded"), 
e.headers) for (q in e.headers) v(q, e.headers[q]);
if (x.setRequestHeader = v, x.onreadystatechange = function() {
if (4 == x.readyState) {
x.onreadystatechange = j, clearTimeout(r);
var b, c = !1;
if (x.status >= 200 && x.status < 300 || 304 == x.status || 0 == x.status && "file:" == w) {
n = n || k(e.mimeType || x.getResponseHeader("content-type")), b = x.responseText;
try {
"script" == n ? (1, eval)(b) :"xml" == n ? b = x.responseXML :"json" == n && (b = y.test(b) ? null :a.parseJSON(b));
} catch (d) {
c = d;
}
c ? h(c, "parsererror", x, e, i) :g(b, x, e, i);
} else h(x.statusText || null, x.status ? "error" :"abort", x, e, i);
}
}, f(x, e) === !1) return x.abort(), h(null, "abort", x, e, i), x;
var B = "async" in e ? e.async :!0;
if (x.open(e.type, e.url, B, e.username, e.password), e.xhrFields) for (q in e.xhrFields) x[q] = e.xhrFields[q];
for (q in u) A.apply(x, u[q]);
return e.timeout > 0 && (r = setTimeout(function() {
x.onreadystatechange = j, x.abort(), h(null, "timeout", x, e, i);
}, e.timeout)), x.send(e.data ? e.data :null), x;
}, a.get = function() {
return a.ajax(n.apply(null, arguments));
}, a.post = function() {
var b = n.apply(null, arguments);
return b.type = "POST", a.ajax(b);
}, a.getJSON = function() {
var b = n.apply(null, arguments);
return b.dataType = "json", a.ajax(b);
}, a.fn.load = function(b, c, d) {
if (!this.length) return this;
var e, f = this, g = b.split(/\s/), h = n(b, c, d), i = h.success;
return g.length > 1 && (h.url = g[0], e = g[1]), h.success = function(b) {
f.html(e ? a("<div>").html(b.replace(t, "")).find(e) :b), i && i.apply(f, arguments);
}, a.ajax(h), this;
};
var A = encodeURIComponent;
a.param = function(b, c) {
var d = [];
return d.add = function(b, c) {
a.isFunction(c) && (c = c()), null == c && (c = ""), this.push(A(b) + "=" + A(c));
}, o(d, b, c), d.join("&").replace(/%20/g, "+");
};
}(d), function(a) {
a.fn.serializeArray = function() {
var b, c, d = [], e = function(a) {
return a.forEach ? a.forEach(e) :void d.push({
name:b,
value:a
});
};
return this[0] && a.each(this[0].elements, function(d, f) {
c = f.type, b = f.name, b && "fieldset" != f.nodeName.toLowerCase() && !f.disabled && "submit" != c && "reset" != c && "button" != c && "file" != c && ("radio" != c && "checkbox" != c || f.checked) && e(a(f).val());
}), d;
}, a.fn.serialize = function() {
var a = [];
return this.serializeArray().forEach(function(b) {
a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value));
}), a.join("&");
}, a.fn.submit = function(b) {
if (0 in arguments) this.bind("submit", b); else if (this.length) {
var c = a.Event("submit");
this.eq(0).trigger(c), c.isDefaultPrevented() || this.get(0).submit();
}
return this;
};
}(d), function(a) {
"__proto__" in {} || a.extend(a.zepto, {
Z:function(b, c) {
return b = b || [], a.extend(b, a.fn), b.selector = c || "", b.__Z = !0, b;
},
isZ:function(b) {
return "array" === a.type(b) && "__Z" in b;
}
});
try {
getComputedStyle(void 0);
} catch (b) {
var c = getComputedStyle;
window.getComputedStyle = function(a) {
try {
return c(a);
} catch (b) {
return null;
}
};
}
}(d), c.exports = d;
}), !function(a) {
"use strict";
var b = function(a, c) {
return b[/string|function/.test(typeof c) ? "compile" :"render"].apply(b, arguments);
}, c = b.cache = {}, d = function(a, b) {
return "string" != typeof a && (b = typeof a, "number" === b ? a += "" :a = "function" === b ? d(a.call(a)) :""), 
a;
}, e = {
"<":"&#60;",
">":"&#62;",
'"':"&#34;",
"'":"&#39;",
"&":"&#38;"
}, f = function(a) {
return d(a).replace(/&(?![\w#]+;)|[<>"']/g, function(a) {
return e[a];
});
}, g = Array.isArray || function(a) {
return "[object Array]" === {}.toString.call(a);
}, h = function(a, b) {
if (g(a)) for (var c = 0, d = a.length; d > c; c++) b.call(a, a[c], c, a); else for (c in a) b.call(a, a[c], c);
}, i = function(a, b) {
var c = /(\/)[^/]+\1\.\.\1/, d = a.replace(/^([^.])/, "./$1").replace(/[^/]+$/, ""), e = d + b;
for (e = e.replace(/\/\.\//g, "/"); e.match(c); ) e = e.replace(c, "/");
return e;
}, j = b.helpers = {
$include:function(a, c, d) {
var e = i(d, a);
return b.render(e, c);
},
$string:d,
$escape:f,
$each:h
}, k = function(b) {
var c = "";
for (var d in b) c += "<" + d + ">\n" + b[d] + "\n\n";
return c && a.console && console.error("Template Error\n\n" + c), function() {
return "{Template Error}";
};
};
b.render = function(a, c) {
var d = b.get(a) || k({
id:a,
name:"Render Error",
message:"No Template"
});
return c ? d(c) :d;
}, b.compile = function(a, b) {
var d = "function" == typeof b, e = c[a] = function(c) {
try {
return d ? new b(c, a) + "" :b;
} catch (e) {
return k(e)();
}
};
return e.prototype = j, d && (b.prototype = j), e.toString = function() {
return b + "";
}, e;
}, b.get = function(a) {
return c[a.replace(/^\.\//, "")];
}, b.helper = function(a, b) {
j[a] = b;
}, "function" == typeof define ? define("scripts/tpl/build/template", [], function() {
return b;
}) :"undefined" != typeof exports ? module.exports = b :a.template = b;
}(this);