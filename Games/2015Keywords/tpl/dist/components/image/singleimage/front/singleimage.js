define("singleimage", ["coms/frontbase", "coms/constants"], function(a) {
    "use strict";
    var e = a("coms/frontbase"),
        d = a("coms/constants");
    return {
        init: function(a, n) {
            var r = new e(a.attrs, n),
                t = a.data || {},
                o = function(a) {
                    if (("none" === a.data.backgroundImage || 'url("none")' === a.data.backgroundImage) && (a.data.backgroundImage = ""), a.data.backgroundType && a.data.backgroundType !== d.BACKGROUND_TYPE.IMAGE || (a.data.dom.style.backgroundImage = /url\(/.test(a.data.backgroundImage) ? a.data.backgroundImage : a.data.backgroundImage ? "url(" + a.data.backgroundImage + ")" : "", a.data.innerHTML && -1 != a.data.innerHTML.indexOf("url(" + a.data.backgroundImage + ")") && (a.data.backgroundImage = "", a.data.dom.style.backgroundImage = ""), t.backgroundImage && t.insideBackgroundImage && t.backgroundImage == t.insideBackgroundImage && (a.data.backgroundImage = "", a.data.dom.style.backgroundImage = "")), /create-by-mobile/i.test(document.body.className)) try {
                        if (!/<img/.test(a.data.dom.innerHTML)) {
                            var e = new Image;
                            e.src = a.data.backgroundImage.replace(/^url\(/, "").replace(/\)$/, ""), a.data.dom.appendChild(e), a.data.dom.style.backgroundImage = "", a.data.innerHTML || (a.data.innerHTML = a.data.dom.innerHTML)
                        }
                    } catch (n) {
                        console.error("singleImage-->mobile-->add image error!! %o", n)
                    }
                };
            r.init(a, {
                setBackgroundImage: o
            });
            var g = $(r.curDom);
            if (0 == r.data.borderWidth && 0 != parseInt(r.data.borderRadius) && (g.css("borderWidth", "1px"), g.find(".c-singleimage").css({
                    borderWidth: "1px",
                    borderColor: "rgba(255, 255, 255, 0)"
                })), !t.newImg) {
                var m = t.scale || .6;
                g.find("img").css({
                    marginLeft: t.marginLeft / m,
                    marginTop: t.marginTop / m
                })
            }
            return r
        }
    }
});
