function JavaDe() {
    var monyer = new Array();
    var s = document.getElementById('code').value.split("\\");
    for (i = 1; i < s.length; i++) {
        s[i] = s[i].replace('x', '');
        monyer += String.fromCharCode(parseInt(s[i], 16))
    }
    document.getElementById('show2').value = monyer;
}

function JavaEn() {
    var txt = document.getElementById("show2");
    var hex = document.getElementById("true");
    var monyer = new Array();
    var i, s;
    for (i = 0; i < txt.value.length; i++) {
        s = txt.value.charCodeAt(i).toString(16);
        if (hex.checked) {
            monyer += "\\x" + s;
        } else {
            monyer += new Array(5 - String(s).length).join("0") + s;
        }
    }
    txt.value = monyer;
}