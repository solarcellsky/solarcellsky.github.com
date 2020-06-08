define(function(require) {

    require('jquery');
    require('juicer');
    require('highcharts');
    require('highchartsmore');

    var static_url = './';

    var time_zone = 1000 * (new Date().getTimezoneOffset())*(-60);

    var spinner = function(holderid, R1, R2, count, stroke_width, colour) {
        var sectorsCount = count || 12,
            color = colour || "#fff",
            width = stroke_width || 15,
            r1 = Math.min(R1, R2) || 35,
            r2 = Math.max(R1, R2) || 60,
            cx = r2 + width,
            cy = r2 + width,
            r = Raphael(holderid, r2 * 2 + width * 2, r2 * 2 + width * 2),

            sectors = [],
            opacity = [],
            beta = 2 * Math.PI / sectorsCount,

            pathParams = {
                stroke: color,
                "stroke-width": width,
                "stroke-linecap": "round"
            };
        
        for (var i = 0; i < sectorsCount; i++) {
            var alpha = beta * i - Math.PI / 2,
                cos = Math.cos(alpha),
                sin = Math.sin(alpha);
            opacity[i] = 1 / sectorsCount * i;
            sectors[i] = r.path([
                ["M", cx + r1 * cos, cy + r1 * sin],
                ["L", cx + r2 * cos, cy + r2 * sin]
            ]).attr(pathParams);
            if (color == "rainbow") {
                sectors[i].attr("stroke", Raphael.getColor());
            }
        }
        var tick;
        (function ticker() {
            opacity.unshift(opacity.pop());
            for (var i = 0; i < sectorsCount; i++) {
                sectors[i].attr("opacity", opacity[i]);
            }
            r.safari();
            tick = setTimeout(ticker, 1000 / sectorsCount);
        })();
        return function() {
            clearTimeout(tick);
            r.remove();
        };
    };

    var getDates = function(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        var days = ['\u5468\u65E5', '\u5468\u4E00', '\u5468\u4E8C', '\u5468\u4E09', '\u5468\u56DB', '\u5468\u4E94', '\u5468\u516D'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        if (month < 10) month = '0' + month;
        var date = a.getDate();
        if (date < 10) date = '0' + date;
        var day = days[a.getDay()];
        var dates = month + '-' + date + ' , ' + day;
        return dates;
    };

    var getTimes = function(timestamp) {
        var a = new Date(timestamp * 1000);
        var hours = a.getHours();
        if (hours < 10) hours = '0' + hours;
        var minutes = a.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        var times = hours + ':' + minutes;
        return times;
    };

    var degToCompass = function(deg) {
        val = Math.round((deg - 11.25) / 22.5);
        arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        return arr[val % 16];
    };

    var showHourlyForecast = function(forecast) {

        var curdate = new Date((new Date()).getTime() - 180 * 60 * 1000);
        var html = '';
        var cnt = 0;
        for (var i = 0; i < forecast.length; i++) {

            var dt = new Date(forecast[i].dt * 1000);

            if (curdate > dt) continue;
            if (cnt > 10) break;
            cnt++;

            var temp = Math.round(10 * (forecast[i].main.temp)) / 10;
            var tmin = Math.round(10 * (forecast[i].main.temp_min)) / 10;
            var tmax = Math.round(10 * (forecast[i].main.temp_max)) / 10;

            var text = forecast[i].weather[0].description;
            var gust = forecast[i].wind.speed;
            var deg = forecast[i].wind.deg;
            var pressure = forecast[i].main.pressure;
            var humidity =  forecast[i].main.humidity;
            var cloud = forecast[i].clouds.all;
            var icon = forecast[i].weather[0].icon;

            html = html + '<ul class="hourly-item">';
            html = html + '<li>' + getTimes(forecast[i].dt) + '</li><li style="height:80px;background:url(' + static_url + 'weather_icons/s/' + icon + '.png) no-repeat center center;background-size:70px auto"></li>\
                <li>' + text + '</li>\
                <li class="hourly-temp">' + temp + '&deg;</li>\
                <li>' + gust + ' m/s ' + degToCompass(deg) + '</li>\
                <li>' + pressure + ' hpa</li>\
                <li>' + humidity + ' %</li>\
                </ul>';
        }

        $("#hourly-items").append(html);

    };

    var showTemperatureChart = function(daily) {

        var time = new Array();
        var tmp = new Array();
        var tmpr = new Array();
        var rain = new Array();
        var snow = new Array();


        for (var i = 0; i < daily.length - 1; i++) {

            tmp.push(Math.round(10 * (daily[i].temp.day)) / 10);
            var dt = new Date(daily[i].dt * 1000 + time_zone);
            time.push(dt);

            var tmpi = Math.round(10 * (daily[i].temp.min)) / 10;
            var tmpa = Math.round(10 * (daily[i].temp.max)) / 10;
            tmpr.push([tmpi, tmpa]);


            if (daily[i]['rain']) {
                rain.push(Math.round(daily[i]['rain'] * 100) / 100);
            } else {
                rain.push(0);
            }
            if (daily[i]['snow']) {
                snow.push(Math.round(daily[i]['snow'] * 100) / 100);
            } else {
                snow.push(0);
            }
        }


        $('#temperature-charts').highcharts({
            chart: {
                backgroundColor: 'rgba(0, 0, 0, 0)'
            },
            title: NaN,
            xAxis: {
                categories: time,
                labels: {
                    formatter: function() {
                        return Highcharts.dateFormat('%d %b', this.value);
                    },
                    style: {
                        color: '#ffffff'
                    }
                }
            },

            yAxis: [{
                labels: {
                    format: '{value}°C',
                    style: {
                        color: '#ffffff'
                    }
                },
                title: {
                    text: NaN,
                    style: {
                        color: '#ffffff'
                    }
                },
                gridLineColor: 'rgba(255, 255, 255, .1)'
            }, {
                labels: {
                    format: '{value} mm',
                    style: {
                        color: '#eeeeee'
                    }
                },
                opposite: true,
                title: {
                    text: NaN,
                    style: {
                        color: '#4572A7'
                    }
                },
                gridLineColor: 'rgba(255, 255, 255, .1)'
            }],
            tooltip: {
                useHTML: true,
                shared: true,
                formatter: function() {
                    var s = '<small>' + Highcharts.dateFormat('%d %b', this.x) + '</small><table>';
                    $.each(this.points, function(i, point) {
                        console.log(point);
                        if (point.y != 0)
                            s += '<tr><td style="color:' + point.series.color + '">' + point.series.name + ': </td>' +
                                '<td style="text-align: right"><b>' + point.y + '</b></td></tr>';
                    });
                    return s + '</table>';
                },
                backgroundColor: {
                    linearGradient: [0, 0, 0, 50],
                    stops: [
                        [0, 'rgba(96, 96, 96, .8)'],
                        [1, 'rgba(16, 16, 16, .8)']
                    ]
                },
                style: {
                    color: '#FFF'
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            legend: NaN,
            series: [{
                name: 'Snow',
                type: 'column',
                color: '#909090',
                yAxis: 1,
                data: snow,
                stack: 'precipitation'
            }, {
                name: 'Rain',
                type: 'column',
                color: '#00a2ee',
                borderWidth: '0',
                yAxis: 1,
                data: rain,
                stack: 'precipitation'
            }, {
                name: 'Temperature',
                type: 'spline',
                color: '#ffb525',
                marker: {
                    lineWidth: 2,
                    lineColor: '#ffb525',
                    fillColor: '#ffffff'
                },
                data: tmp
            }, {
                name: 'Temperature min',
                data: tmpr,
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                color: '#2572ff',
                fillOpacity: 0.3,
                zIndex: 0
            }]
        });
    };

    var weatherWidget = function(position) {

        if (!position) {
            var latitude = 34.267;
            var longitude = 108.9;
        } else {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
        }

        var _APPID = '607cd461b96f865d29044d4deb1bddf4';

        var data_current = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&lang=zh_cn&appid=' + _APPID + '&callback=?';
        var data_hourly = 'http://api.openweathermap.org/data/2.5/forecast/hourly?lat=' + latitude + '&lon=' + longitude + '&cnt=11&units=metric&lang=zh_cn&appid=' + _APPID + '&callback=?';
        var data_forecast = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + latitude + '&lon=' + longitude + '&cnt=6&units=metric&lang=zh_cn&appid=' + _APPID + '&callback=?';
        var data_temperature = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + latitude + '&lon=' + longitude + '&cnt=15&units=metric&lang=zh_cn&appid=' + _APPID + '&callback=?';

        juicer.register('getDates', getDates);
        juicer.register('getTimes', getTimes);
        juicer.register('degToCompass', degToCompass);

        $.jsonp({
            url: data_current,
            pageCache: true,
            timeout: 10000,
            success: function(data) {

                $.fillmore({
                    src: static_url + 'bg/' + data.weather[0].icon + '.jpg'
                });
                var tpl = require('tpl/weather_current.tpl');
                tpl = juicer(tpl, {
                    data: data
                });
                seajs.use(['cufon', 'HelveticaNeue'], function() {
                    Cufon.replace('.weather-current-temp', {
                        fontFamily: 'Helvetica Neue',
                        fontSize: '200'
                    });
                });
                $('#current').append(tpl).fadeIn();
                $('.loading').fadeOut();
            },
            error: function() {
                $('.loading').remove();
                var error = require('tpl/error.tpl');
                $('#weather').empty();
                $('body').append(error);
            }
        });

        $.jsonp({
            url: data_hourly,
            pageCache: true,
            timeout: 10000,
            success: function(data) {
                showHourlyForecast(data.list);
            },
            error: function() {
                var error = require('tpl/error.tpl');
                $('#weather').empty();
                $('body').append(error);
            }
        });

        $.jsonp({
            url: data_forecast,
            pageCache: true,
            timeout: 10000,
            success: function(data) {
                var tpl = require('tpl/weather_forecast.tpl');
                tpl = juicer(tpl, {
                    data: data
                });
                $('#forecast').append(tpl);
            },
            error: function() {
                var error = require('tpl/error.tpl');
                $('#weather').empty();
                $('body').append(error);
            }
        });

        $.jsonp({
            url: data_temperature,
            pageCache: true,
            timeout: 10000,
            success: function(data) {
                showTemperatureChart(data.list);
            },
            error: function() {
                var error = require('tpl/error.tpl');
                $('#weather').empty();
                $('body').append(error);
            }
        });

        seajs.use(['j.easing', 'j.animate', 'hammer', 'superslides', 'superslidesCSS'], function() {
            var $slides = $('#slides');

            Hammer($slides[0]).on("swipeleft", function(e) {
                $slides.data('superslides').animate('next');
            });

            Hammer($slides[0]).on("swiperight", function(e) {
                $slides.data('superslides').animate('prev');
            });

            $slides.superslides({
                hashchange: true
            });
        });

     };

    var errorHandler = function(error) {
        if (!error) return;
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    };

    var initWeatherWidget = function() {

        if(navigator.geolocation){
           // timeout at 60000 milliseconds (60 seconds)
           var optn = {
                timeout: 60000
            };
           navigator.geolocation.getCurrentPosition(weatherWidget, errorHandler, optn);
        }
        else{
           alert("Sorry, browser does not support geolocation!");
        }

    };

    $(function() {
        spinner('spinner', 120, 120, 16, 15, '#fff');
        initWeatherWidget();
    });

});

/*
 * jQuery JSONP Core Plugin 2.4.0 (2012-08-21)
 *
 * https://github.com/jaubourg/jquery-jsonp
 *
 * Copyright (c) 2012 Julian Aubourg
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
(function($){function noop(){}function genericCallback(data){lastValue=[data]}function callIfDefined(method,object,parameters){return method&&method.apply(object.context||object,parameters)}function qMarkOrAmp(url){return/\?/.test(url)?"&":"?";}var STR_ASYNC="async",STR_CHARSET="charset",STR_EMPTY="",STR_ERROR="error",STR_INSERT_BEFORE="insertBefore",STR_JQUERY_JSONP="_jqjsp",STR_ON="on",STR_ON_CLICK=STR_ON+"click",STR_ON_ERROR=STR_ON+STR_ERROR,STR_ON_LOAD=STR_ON+"load",STR_ON_READY_STATE_CHANGE=STR_ON+"readystatechange",STR_READY_STATE="readyState",STR_REMOVE_CHILD="removeChild",STR_SCRIPT_TAG="<script>",STR_SUCCESS="success",STR_TIMEOUT="timeout",win=window,Deferred=$.Deferred,head=$("head")[0]||document.documentElement,pageCache={},count=0,lastValue,xOptionsDefaults={callback:STR_JQUERY_JSONP,url:location.href},opera=win.opera,oldIE=!!$("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;function jsonp(xOptions){xOptions=$.extend({},xOptionsDefaults,xOptions);var successCallback=xOptions.success,errorCallback=xOptions.error,completeCallback=xOptions.complete,dataFilter=xOptions.dataFilter,callbackParameter=xOptions.callbackParameter,successCallbackName=xOptions.callback,cacheFlag=xOptions.cache,pageCacheFlag=xOptions.pageCache,charset=xOptions.charset,url=xOptions.url,data=xOptions.data,timeout=xOptions.timeout,pageCached,done=0,cleanUp=noop,supportOnload,supportOnreadystatechange,firstChild,script,scriptAfter,timeoutTimer;Deferred&&Deferred(function(defer){defer.done(successCallback).fail(errorCallback);successCallback=defer.resolve;errorCallback=defer.reject;}).promise(xOptions);xOptions.abort=function(){!(done++)&&cleanUp();};if(callIfDefined(xOptions.beforeSend,xOptions,[xOptions])===!1||done){return xOptions;}url=url||STR_EMPTY;data=data?((typeof data)=="string"?data:$.param(data,xOptions.traditional)):STR_EMPTY;url+=data?(qMarkOrAmp(url)+data):STR_EMPTY;callbackParameter&&(url+=qMarkOrAmp(url)+encodeURIComponent(callbackParameter)+"=?");!cacheFlag&&!pageCacheFlag&&(url+=qMarkOrAmp(url)+"_"+(new Date()).getTime()+"=");url=url.replace(/=\?(&|$)/,"="+successCallbackName+"$1");function notifySuccess(json){if(!(done++)){cleanUp();pageCacheFlag&&(pageCache[url]={s:[json]});dataFilter&&(json=dataFilter.apply(xOptions,[json]));callIfDefined(successCallback,xOptions,[json,STR_SUCCESS,xOptions]);callIfDefined(completeCallback,xOptions,[xOptions,STR_SUCCESS])}}function notifyError(type){if(!(done++)){cleanUp();pageCacheFlag&&type!=STR_TIMEOUT&&(pageCache[url]=type);callIfDefined(errorCallback,xOptions,[xOptions,type]);callIfDefined(completeCallback,xOptions,[xOptions,type])}}if(pageCacheFlag&&(pageCached=pageCache[url])){pageCached.s?notifySuccess(pageCached.s[0]):notifyError(pageCached)}else{win[successCallbackName]=genericCallback;script=$(STR_SCRIPT_TAG)[0];script.id=STR_JQUERY_JSONP+count++;if(charset){script[STR_CHARSET]=charset}opera&&opera.version()<11.60?((scriptAfter=$(STR_SCRIPT_TAG)[0]).text="document.getElementById('"+script.id+"')."+STR_ON_ERROR+"()"):(script[STR_ASYNC]=STR_ASYNC);if(oldIE){script.htmlFor=script.id;script.event=STR_ON_CLICK}script[STR_ON_LOAD]=script[STR_ON_ERROR]=script[STR_ON_READY_STATE_CHANGE]=function(result){if(!script[STR_READY_STATE]||!/i/.test(script[STR_READY_STATE])){try{script[STR_ON_CLICK]&&script[STR_ON_CLICK]()}catch(_){}result=lastValue;lastValue=0;result?notifySuccess(result[0]):notifyError(STR_ERROR)}};script.src=url;cleanUp=function(i){timeoutTimer&&clearTimeout(timeoutTimer);script[STR_ON_READY_STATE_CHANGE]=script[STR_ON_LOAD]=script[STR_ON_ERROR]=null;head[STR_REMOVE_CHILD](script);scriptAfter&&head[STR_REMOVE_CHILD](scriptAfter)};head[STR_INSERT_BEFORE](script,(firstChild=head.firstChild));scriptAfter&&head[STR_INSERT_BEFORE](scriptAfter,firstChild);timeoutTimer=timeout>0&&setTimeout(function(){notifyError(STR_TIMEOUT)},timeout)}return xOptions}jsonp.setup=function(xOptions){$.extend(xOptionsDefaults,xOptions)};$.jsonp=jsonp})(jQuery);
/*!
 * jQuery Fillmore
 * Version 1.4.1
 * https://github.com/gregjacobs/jquery-fillmore
 *
 * Add a dynamically-resized background image to any element
 *
 * Copyright (c) 2012 Gregory Jacobs with Aidan Feldman (jux.com)
 * Dual licensed under the MIT and GPL licenses.
 */
(function(a){a.Fillmore=function(c){this.init(c)};a.Fillmore.defaultSettings={src:null,focusX:50,focusY:50,speed:0,onImageLoad:undefined,onImageVisible:undefined,callback:undefined};var b=function(ah,ag,af){function H(c){Z.cssText=c}function G(d,c){return H(prefixes.join(d+";")+(c||""))}function F(d,c){return typeof d===c}function E(d,c){return !!~(""+d).indexOf(c)}function S(f,c){for(var h in f){var g=f[h];if(!E(g,"-")&&Z[g]!==af){return c=="pfx"?g:!0}}return !1}function Q(g,c,j){for(var i in g){var h=c[g[i]];if(h!==af){return j===!1?g[i]:F(h,"function")?h.bind(j||c):h}}return !1}function O(g,f,j){var i=g.charAt(0).toUpperCase()+g.slice(1),h=(g+" "+V.join(i+" ")+i).split(" ");return F(f,"string")||F(f,"undefined")?S(h,f):(h=(g+" "+U.join(i+" ")+i).split(" "),Q(h,f,j))}var ae="2.6.2",ad={},ac=ag.documentElement,ab="modernizr",aa=ag.createElement(ab),Z=aa.style,Y,X={}.toString,W="Webkit Moz O ms",V=W.split(" "),U=W.toLowerCase().split(" "),T={},R={},P={},N=[],M=N.slice,K,J={}.hasOwnProperty,I;!F(J,"undefined")&&!F(J.call,"undefined")?I=function(d,c){return J.call(d,c)}:I=function(d,c){return c in d&&F(d.constructor.prototype[c],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(f){var i=this;if(typeof i!="function"){throw new TypeError}var h=M.call(arguments,1),g=function(){if(this instanceof g){var c=function(){};c.prototype=i.prototype;var e=new c,d=i.apply(e,h.concat(M.call(arguments)));return Object(d)===d?d:e}return i.apply(f,h.concat(M.call(arguments)))};return g}),T.backgroundsize=function(){return O("backgroundSize")};for(var L in T){I(T,L)&&(K=L.toLowerCase(),ad[K]=T[L](),N.push((ad[K]?"":"no-")+K))}return ad.addTest=function(e,c){if(typeof e=="object"){for(var f in e){I(e,f)&&ad.addTest(f,e[f])}}else{e=e.toLowerCase();if(ad[e]!==af){return ad}c=typeof c=="function"?c():c,typeof enableClasses!="undefined"&&enableClasses&&(ac.className+=" "+(c?"":"no-")+e),ad[e]=c}return ad},H(""),aa=Y=null,ad._version=ae,ad._domPrefixes=U,ad._cssomPrefixes=V,ad.testProp=function(c){return S([c])},ad.testAllProps=O,ad}(this,this.document);a.Fillmore.useCss3=b.backgroundsize&&!/i(Phone|Pod|Pad).*OS 4_/.test(window.navigator.userAgent);a.extend(a.Fillmore.prototype,{fillmoreElPosition:"absolute",imageLoaded:false,imageVisible:false,init:function(d){this.settings=a.extend({},a.Fillmore.defaultSettings);var c=this.$containerEl=a(d);c.css("background","transparent");if(c.is("body")){this.fillmoreElPosition="fixed"}else{this.originalContainerOverflow=c[0].style.overflow;c.css("overflow","hidden");if(c.css("position")==="static"){c.css("position","relative");this.containerPositionModified=true}if(c.css("z-index")==="auto"){c.css("z-index",0);this.containerZIndexModified=true}}if(this.$containerEl.is("body")){this.$containerSizingEl=("onorientationchange" in window)?a(document):a(window)}else{this.$containerSizingEl=this.$containerEl}this.createFillmoreEl()},createFillmoreEl:function(){this.$fillmoreEl=a('<div class="fillmoreInner" style="left: 0; top: 0; position: '+this.fillmoreElPosition+'; overflow: hidden; z-index: -999999; margin: 0; padding: 0; height: 100%; width: 100%;" />').appendTo(this.$containerEl)},updateSettings:function(c){this.settings=a.extend(this.settings,c)},getSrc:function(){return this.settings.src},getImageEl:function(){throw new Error("getImageEl() must be implemented in subclass")},getImageSize:function(){if(!this.imageLoaded){return null}else{var c=this.getImageEl()[0];return{width:c.width,height:c.height}}},calculateStretchedSizeAndOffsets:function(){var p=this.getImageEl(),d=p[0];p.css({width:"auto",height:"auto"});var j=d.width||p.width(),l=d.height||p.height(),g=j/l,h=this.settings,i=this.$containerEl,k=this.$containerSizingEl,o=k.outerHeight()||k.height(),m=k.outerWidth()||k.width(),f=0,e=0,n=m,c=n/g;if(c>=o){e=(c-o)*this.settings.focusY/100}else{c=o;n=c*g;f=(n-m)*this.settings.focusX/100}return{offsetLeft:f,offsetTop:e,stretchedWidth:n,stretchedHeight:c}},getViewableImageArea:function(){if(!this.imageLoaded){return null}else{var c=this.$containerEl,d=this.calculateStretchedSizeAndOffsets();return{width:c.innerWidth(),height:c.innerHeight(),offsetLeft:d.offsetLeft,offsetTop:d.offsetTop,stretchedWidth:d.stretchedWidth,stretchedHeight:d.stretchedHeight}}},showImage:function(c){this.imageLoaded=false;this.imageVisible=false;this.loadImage(c)},loadImage:function(){throw new Error("loadImage() must be implemented in subclass")},isLoaded:function(){return this.imageIsVisible()},imageIsLoaded:function(){return this.imageLoaded},imageIsVisible:function(){return this.imageVisible},resize:function(){throw new Error("resize() must be implemented in subclass")},onImageLoad:function(c){this.imageLoaded=true;var d=this.settings.onImageLoad;if(typeof d==="function"){d()}if(this.settings.speed){this.$fillmoreEl.hide().fadeIn(this.settings.speed,a.proxy(this.onImageVisible,this));this.settings.speed=0}else{this.onImageVisible()}},onImageVisible:function(e){this.imageVisible=true;var c=this.settings,d=c.onImageVisible||c.callback;if(typeof d==="function"){d()}},destroy:function(){if(this.containerPositionModified){this.$containerEl.css("position","")}if(this.containerZIndexModified){this.$containerEl.css("z-index","")}this.$containerEl.css("overflow",this.originalContainerOverflow);this.$fillmoreEl.remove()}})})(jQuery);(function(a){a.FillmoreCss3=function(b){a.Fillmore.apply(this,arguments)};a.extend(a.FillmoreCss3.prototype,a.Fillmore.prototype,{$imgEl:null,createFillmoreEl:function(){a.Fillmore.prototype.createFillmoreEl.apply(this,arguments);this.$fillmoreEl.css({"background-repeat":"no-repeat","background-size":"cover"})},updateSettings:function(b){a.Fillmore.prototype.updateSettings.apply(this,arguments);this.$fillmoreEl.css("background-position",this.settings.focusX+"% "+this.settings.focusY+"%")},getImageEl:function(){return this.$imgEl||null},resize:function(){},loadImage:function(b){this.$imgEl=a("<img />").bind("load error",a.proxy(this.onImageLoad,this));this.$imgEl.attr("src",b)},onImageLoad:function(b){var c=this.$imgEl[0].src;this.$fillmoreEl.css("background-image","url('"+c+"')");a.Fillmore.prototype.onImageLoad.apply(this,arguments)}})})(jQuery);(function(a){a.FillmoreImageStretch=function(b){a.Fillmore.apply(this,arguments)};a.extend(a.FillmoreImageStretch.prototype,a.Fillmore.prototype,{$imgEl:null,$oldImage:null,init:function(b){a.Fillmore.prototype.init.apply(this,arguments);this.resizeProxy=a.proxy(this.resize,this);a(window).resize(this.resizeProxy)},getImageEl:function(){return this.$imgEl||null},loadImage:function(b){this.$oldImage=this.$imgEl;this.$imgEl=a('<img style="position: absolute; margin: 0; padding: 0; border: none; z-index: -999999;" />').bind("load error",a.proxy(this.onImageLoad,this)).appendTo(this.$fillmoreEl);this.$imgEl.attr("src",b)},onImageLoad:function(b){var c=b.target,d=this.getImageEl();if(c!==d[0]){return}if(this.$oldImage){this.$oldImage.remove();this.$oldImage=null}a.Fillmore.prototype.onImageLoad.apply(this,arguments);this.resize()},resize:function(){if(this.$imgEl&&this.imageLoaded){try{var c=this.calculateStretchedSizeAndOffsets();var b={left:"-"+c.offsetLeft+"px",top:"-"+c.offsetTop+"px"};this.$fillmoreEl.width(c.stretchedWidth).height(c.stretchedHeight);this.$imgEl.width(c.stretchedWidth).height(c.stretchedHeight).css(b)}catch(d){}}},destroy:function(){a(window).unbind("resize",this.resizeProxy);a.Fillmore.prototype.destroy.apply(this,arguments)}})})(jQuery);(function(b){var a={init:function(h){for(var f=0,c=this.length;f<c;f++){var g=this[f],e=b(g),d=e.data("fillmore");if(!d){if((b.Fillmore.useCss3&&!h.noCss3)||h.forceCss3){d=new b.FillmoreCss3(g)}else{d=new b.FillmoreImageStretch(g)}e.data("fillmore",d)}d.updateSettings(h);d.showImage(h.src)}return this},getSrc:function(){var d=this[0],c;if(d&&(c=b(d).data("fillmore"))){return c.getSrc()}else{return undefined}},getImageSize:function(){var d=this[0],c;if(d&&(c=b(d).data("fillmore"))){return c.getImageSize()}else{return undefined}},getViewableImageArea:function(){var d=this[0],c;if(d&&(c=b(d).data("fillmore"))){return c.getViewableImageArea()}else{return undefined}},isLoaded:function(){var d=this[0],c;if(d&&(c=b(d).data("fillmore"))){return c.isLoaded()}else{return false}},imageIsLoaded:function(){var d=this[0],c;if(d&&(c=b(d).data("fillmore"))){return c.imageIsLoaded()}else{return false}},imageIsVisible:function(){var d=this[0],c;if(d&&(c=b(d).data("fillmore"))){return c.imageIsVisible()}else{return false}},resize:function(){for(var f=0,c=this.length;f<c;f++){var e=b(this[f]),d=e.data("fillmore");if(d){d.resize()}}return this},destroy:function(){for(var f=0,c=this.length;f<c;f++){var e=b(this[f]),d=e.data("fillmore");if(d){d.destroy();e.removeData("fillmore")}}return this}};b.fn.fillmore=function(c){if(typeof c==="string"&&a[c]){return a[c].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments)}else{b.error("Method '"+c+"' does not exist on Fillmore.")}}};b.fillmore=function(c){return b("body").fillmore(c)}})(jQuery);
