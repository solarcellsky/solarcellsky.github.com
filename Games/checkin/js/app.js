var releaseVer = '3036,806099213';

define(function(require, exports) {
  var init = function(filename) {
    require("jquery");
    var mods = filename.split(',');   //将js的字符串按照','分割成数组形式
    var modName;
    for(var i in mods){
      modName = mods[i];
      if (modName) {
        require.async('./dist/' + modName + '.js?t='+releaseVer, function(mod) {
          if (mod && mod.init) {
            mod.init();
          }
        });
      }
    }
  };
  exports.init = init;
});
(function(){
  var alias = {
    'jquery':'core/jquery-1.9.0',
    //ui
    'ajaxLoad':'public/ui/ajaxLoad/factory',
    'ajaxLoadCss':'public/ui/ajaxLoad/ajax.css',
    'pageNav':'public/ui/pageNav/factory',
    'pageNavCss':'public/ui/pageNav/nav.css',
    'pageNavJeff':'public/ui/pageNavJeff/factoryjeff',
    'pageNavCssCss':'public/ui/pageNavJeff/navjeff.css',
    'scrollbar':'public/ui/scrollbar/factory',
    'scrollbarCss':'public/ui/scrollbar/jquery.mCustomScrollbar.css',
    'fancybox':'public/ui/fancybox/factory',
    'fancyboxCss':'public/ui/fancybox/jquery.fancybox.css',
    'wbFaces':'public/ui/wbFaces/factory',
    'wbFacesCss':'public/ui/wbFaces/faces.css',
    'tipBox':'public/ui/tipBox/factory',
    'tipBoxCss':'public/ui/tipBox/ui-tips-box.css',
    'calendar':'public/ui/calendar/factory',
    'calendarCss':'public/ui/calendar/datepicker.css',
    'time':'public/ui/time/factory',
    'timeCss':'public/ui/time/time.css',
    'highcharts':'public/ui/highcharts/factory',
    'highcharts2':'public/ui/highcharts2/factory',
    'highcharts-map':'public/ui/highcharts2/map',
    'echarts':'public/ui/echarts/factory',
    'nprogress':'public/ui/nprogress/nprogress',
    'nprogressCss':'public/ui/nprogress/nprogress.css',
    'pickadate':'public/ui/pickadate/picker',
    'pickadateCss':'public/ui/pickadate/classic.css',
    'jMinEmoji':'public/ui/jMinEmoji/factory',
    'jMinEmojiCss':'public/ui/jMinEmoji/css/minEmoji.css',
    'captcha':'public/ui/captcha/factory',
    //util
    'mustache':'public/util/mustache/factory',
    'uri':'public/util/uri/factory',
    'easing':'public/util/easing/factory',
    'uploader':'public/util/uploader/factory',
    'jvForm':'public/util/jvForm/factory',
    'moment':'public/util/moment/factory',
    'cookies':'public/util/cookies/factory',
    'inputHint':'public/util/inputHint/factory',
    'clipboard': 'public/util/clipboard/factory',
    'daterangepicker': 'public/util/daterangepicker/factory',
    'eraser':'public/util/eraser/factory',
    'colResizable':'public/util/colResizable/colResizable-1.5.min',
    'juicer': 'public/util/juicer/factory',
    'jQueryRotate': 'public/util/jQueryRotate/factory',
    'touchJs': 'public/util/touchJs/factory',
    //common
    'location': 'dist/util/location',
    'locationV2': 'dist/util/location_v2',
    'ui':'dist/ui.js',
    'store-ui': 'dist/store/common'
  };


  seajs.config({
    alias: alias,
    base: './js/',
    map: [
       [/^(.*\/js\/(.*)\/.*\.(?:css|js))(?:.*)$/i, '$1?'+releaseVer]
    ]
  });
})();
