eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('h.1=h.1||{};h.1.H="";(2(){3 b=2(){3 c=G.F.J();K{u:/u/.5(c),o:/o/.5(c),k:/k/.5(c),n:/n/.5(c),r:/O/.5(c)}};2 a(){}a.t=[];a.y=[];a.i={x:E,z:M};a.w="V";a.s=[];a.6=L;a.P=2(){4 1.9().j(a.t,2(){1.8.7().C().D(a.i.x,a.i.z).N(a.w).6=a.6;4 1.9().j(a.y,2(){3 c=4 1.T();c.12=Q;3 d=4 1.9();d.j(a.s,2(){m(b().r||b().k){1.8.7().11()}1.8.7().6.14.Z="#10";c.S();1.8.7().R.U(4 1.Y())});3 f=0;3 e=0;c.A("X",2(){e++;f++;m(f>v){f=v}});d.A("l",2(g){m(g.B.l*q<W){p(f/q)}13{p(g.B.l)}})})})};1.I=a})();', 62, 67, '|gameCore|function|var|new|test|canvas|getInstance|StageManager|LoaderManager||||||||this|stageSize|loadCore|android|progress|if|qqnews|iphone|onProgress|100|weixin|contentLib|core|ipad|49|stageType|width|loading|height|on|currentTarget|initialize|setRect|640|userAgent|navigator|PATH|Config|toLowerCase|return|null|960|setStageType|micromessenger|start|true|root|removeAllEventListeners|Loading|addChild||50|tick|MainView|backgroundColor|000000|setViewport|isMore|else|style'.split('|'), 0, {}))
