!function(){var e="asap@1.0.0/asap.js",n={},t=n;define(e,[],function(e,n,t){function i(){for(;s.next;){s=s.next;var e=s.task;s.task=void 0;var n=s.domain;n&&(s.domain=void 0,n.enter());try{e()}catch(t){if(c)throw n&&n.exit(),setTimeout(i,0),n&&n.enter(),t;setTimeout(function(){throw t},0)}n&&n.exit()}f=!1}function o(e){a=a.next={task:e,domain:c&&process.domain,next:null},f||(f=!0,d())}var s={task:void 0,next:null},a=s,f=!1,d=void 0,c=!1;if("undefined"!=typeof process&&process.nextTick)c=!0,d=function(){process.nextTick(i)};else if("function"==typeof setImmediate)d="undefined"!=typeof window?setImmediate.bind(window,i):function(){setImmediate(i)};else if("undefined"!=typeof MessageChannel){var r=new MessageChannel;r.port1.onmessage=i,d=function(){r.port2.postMessage(0)}}else d=function(){setTimeout(i,0)};t.exports=o},{main:!0,map:t})}();