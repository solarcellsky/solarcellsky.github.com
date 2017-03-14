var aperture;
(function (b) {
    (function (b) {
        var g = function () {
            function b() {
            }

            b.encode = function (a) {
                for (var f = new Uint8Array(3 * a.length), c = 0, d = 0; d < a.length; d++)for (var e = a.charCodeAt(d), e = 127 >= e ? [e] : 2047 >= e ? [192 | e >> 6, 128 | e & 63] : [224 | e >> 12, 128 | (e & 4032) >> 6, 128 | e & 63], b = 0; b < e.length; b++)f[c] = e[b], ++c;
                a = [];
                for (d = 0; d < f.length; d++)a.push(f[d]);
                for (d = a.length - 1; 0 < d; d--)0 == a[d] && a.splice(d, 1);
                return a
            };
            b.decode = function (a) {
                for (var b = a.length - 1; 0 < b; b--)0 == a[b] && a.splice(b, 1);
                a = new Uint8Array(a);
                for (var b = [], c = 0, d = 0, e = a.length; c <
                e;)128 > a[c] ? (d = a[c], c += 1) : 224 > a[c] ? (d = ((a[c] & 63) << 6) + (a[c + 1] & 63), c += 2) : (d = ((a[c] & 15) << 12) + ((a[c + 1] & 63) << 6) + (a[c + 2] & 63), c += 3), b.push(d);
                a = String.fromCharCode.apply(null, b);
                a.replace(" ", "");
                return a
            };
            return b
        }();
        b.SimpleEncode = g;
        g.prototype.__class__ = "aperture.encrypt.SimpleEncode"
    })(b.encrypt || (b.encrypt = {}))
})(aperture || (aperture = {}));
