seajs.config({
    plugins: ['shim', 'text','nocache'],
    alias: {
    	'jquery': 'jquery.min.js',
        'juicer': 'juicer-min.js',
        'jQueryUI': {
            src: 'jqueryui/js/jquery-ui-1.10.3.custom.min.js',
            deps: ['jquery']
        },
        'j.easing' : 'superslides/javascripts/jquery.easing.1.3.js',
        'j.animate' : 'superslides/javascripts/jquery.animate-enhanced.min.js',
        'hammer' : 'superslides/javascripts/hammer.min.js',
        'superslides': {
            src: 'superslides/jquery.superslides.min.js',
            deps: ['jquery']
        },
        'superslidesCSS': 'superslides/stylesheets/superslides.css',
        'highcharts' : 'highcharts/highcharts.js',
        'highchartsmore': {
            src: 'highcharts/highcharts-more.js',
            deps: ['highcharts']
        },
        'cufon' : 'cufon/cufon-yui.js',
        'HelveticaNeue': {
            src: 'cufon/Helvetica_Neue_100.font.js',
            deps: ['cufon']
        }
    },
    paths : {
        'app' : 'http://openweather.u.qiniudn.com/scripts/'
    },
    preload: ['jquery']
});