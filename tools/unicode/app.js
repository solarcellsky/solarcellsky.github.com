/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-27 14:30:19
 * @version $Id$
 */

function action(pChoice) {
    switch (pChoice) {
        case "CONVERT_FMT1":
            $("#show2").val(ascii($("#source").val()));
            break;
        case "CONVERT_FMT2":
            $("#show2").val(unicode($("#source").val()));
            break;
        case "CONVERT_FMT3":
            $("#show2").val(unicode1($("#source").val()));
            break;
        case "RECONVERT":
            $("#show2").val(reconvert($("#source").val()));
            break;
    }
}

function ascii(str) {
    //return str.replace(/[^\u0000-\u00FF]/g,function($0){return escape($0).replace(/(%u)(\w{4})/gi,"\&#x$2;")}); 
    var value = '';
    for (var i = 0; i < str.length; i++) {
        if (!$("#a4wei").prop('checked')) {
            value += '\&#x' + parseInt(str.charCodeAt(i)).toString(16) + ';';
        } else {
            value += '\&#x' + ("00" + str.charCodeAt(i).toString(16)).slice(-4) + ';';
        }
    }
    return value;
}

function unicode(str) {
    //return str.replace(/[^\u0000-\u00FF]/g,function($0){return escape($0).replace(/(%u)(\w{4})/gi,"\\u$2")}); 
    var value = '';
    for (var i = 0; i < str.length; i++) {
        if (!$("#a4wei").prop('checked')) {
            value += '\\u' + parseInt(str.charCodeAt(i)).toString(16);
        } else {
            value += '\\u' + ("00" + str.charCodeAt(i).toString(16)).slice(-4);
        }
    }
    return value;
}

function unicode1(str) {
    var value = '';
    for (var i = 0; i < str.length; i++)
        value += '&#' + str.charCodeAt(i) + ';';
    return value;
}

function reconvert(str) {
    str = str.replace(/(\\u)(\w{1,4})/gi, function($0) {
        return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{1,4})/g, "$2")), 16)));
    });
    str = str.replace(/(&#x)(\w{1,4});/gi, function($0) {
        return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
    });
    str = str.replace(/(&#)(\d{1,6});/gi, function($0) {
        return String.fromCharCode(parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2")));
    });
    return str;
}