(function () {
	var getParam = function (name) {
        var url = window.location.search;
        var reg = new RegExp('(\\?|&)' + name + '=([^&?]*)', 'i');
        var arr = url.match(reg);
        if (arr) return arr[2];
    }

    var loader2 = document.getElementById('mcard-load'); // loader是整个黑色的加载页面
    var titleEl = document.getElementsByTagName('title')[0];
    if (titleEl) {
        //titleEl.innerHTML = '';
    }
   

    if(loader2){

    var third = getParam('third');

    if(third === '2'){
    	loader2.style.cssText += 'background-repeat:no-repeat; background-color:#000; background-position: center; position: fixed; left: 0; right: 0; top: 0; bottom: 0; background: url("cards/54102616a3664ede450001c9/lelife-logo.jpg"); background-size: cover';
    	loader2.style.visibility = 'visible';
    	//隐藏原logo
        loader2.querySelector('#mpqxqenk_o0').style.visibility = 'hidden';
        var process = loader2.querySelectorAll('.process-outer')[0];
        process.style.cssText += 'margin-left: auto; margin-right: auto; border-radius: 17px; padding-top: 8px; background-color: rgba(0,0,0,0.6); width: 120px; position: fixed; bottom: 210px; '; 
    }else if(third === '3'){
    	loader2.style.cssText += 'background-repeat:no-repeat; background-color:#000; background-position: center; position: fixed; left: 0; right: 0; top: 0; bottom: 0; background: url("cards/54102616a3664ede450001c9/madison-logo.jpg"); background-size: cover';
    	loader2.style.visibility = 'visible';
        //隐藏原logo
        loader2.querySelector('#mpqxqenk_o0').style.visibility = 'hidden';
        var process = loader2.querySelectorAll('.process-outer')[0];
        process.style.cssText += 'margin-left: auto; margin-right: auto; border-radius: 17px; padding-top: 8px; background-color: rgba(0,0,0,0.6); width: 120px; position: fixed; bottom: 210px; ';
    }else if(third === '1'){
        loader2.style.cssText += 'background-repeat:no-repeat; background-color:#000; background-position: center; position: fixed; left: 0; right: 0; top: 0; bottom: 0; background: url("cards/54102616a3664ede450001c9/unite-logo.jpg"); background-size: cover';
        loader2.style.visibility = 'visible';
        //隐藏原logo
        loader2.querySelector('#mpqxqenk_o0').style.visibility = 'hidden';
        var process = loader2.querySelectorAll('.process-outer')[0];
        process.style.cssText += 'margin-left: auto; margin-right: auto; border-radius: 17px; padding-top: 8px; background-color: rgba(0,0,0,0.6); width: 120px; position: fixed; bottom: 210px; ';
    }


        document.body.style.background = 'black';     
    }
    // if (window.cardFrame) {
    //     cardFrame.setFootContent('', '');
    // } 
    
	_mrmcp = (typeof _mrmcp == 'undefined') ? {} : _mrmcp;
	_mrmcp['campaign_id'] = 'none';
	_mrmcp['owner_id'] = '516ce6ece8ad7eea65000013';
	_mrmcp['creative_id'] = '54102616a3664ede450001c9';
	_mrmcp['ga_url'] = _mrmcp['ga_url'] || (('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js');
	_mrmcp['width'] = _mrmcp['width'] || 320;
	_mrmcp['height'] = _mrmcp['height'] || 504;
	_mrmcp['type'] = 'css3';
	_mrmcp['title'] = '金秋戳螃蟹';
	_mrmcp['track_bot'] = 'http://cdn.mugeda.com/media/pages/track/track_20131030.html';
	var w = _mrmcp['width'];
	var h = _mrmcp['height'];
	if(!_mrmcp['creative_path'])
	{
		var scripts = document.getElementsByTagName('script');
		var src = scripts[scripts.length - 1].getAttribute('src');
		var idx = src.lastIndexOf('/');
		if(idx < 0)
			_mrmcp['creative_path'] = '';
		else
			_mrmcp['creative_path'] = src.substr(0, idx+1);
	}
    var creationTag = "54102616a3664ede450001c9",     // 动画id;
        resourceRelativeDir = _mrmcp['creative_path'] || "",                 // 资源文件的目录
        commonDir = _mrmcp['common_path'] || resourceRelativeDir,                       // mudega_css3_player.js文件的位置
        id = "undefined";                             // 唯一标志，以便在用户脚本中引用这个动画
        hasScript = true;                             // 指示是否包含脚本

    "undefined"==typeof Mugeda&&(Mugeda={data:{}});Mugeda.Loader||(Mugeda.Loader=function(a,b,d,e,f,g){if(!a)throw "creation identify not defined";this.id=a;this.name=g;x=document.getElementById("Mugeda_"+(_mrmcp['loader_id']||_mrmcp['creative_id']));this.dom=b||x;this.resDir=e||"";this.playerLoc=f||"";d=void 0==d?!0:d;b=function(a,b){var c=document.getElementsByTagName("script"),d=!1;for(i=0;i<c.length;i++)if(c[i].src&&-1!=c[i].src.indexOf(a)&&("loaded"==c[i].readyState||"complete"==c[i].readyState)){d=!0;break}d?b&&b():(c=document.createElement("script"),c.src=a,document.getElementsByTagName("head")[0].appendChild(c),c.onload=function(){b&&(b(),b=function(){})})};Mugeda.css3PlayerLoaded||(b(this.playerLoc+"mugeda_css3_player.js"),b(this.playerLoc+"mugeda_utils.js"),Mugeda.css3PlayerLoaded=1);var h=this;b(resourceRelativeDir+this.id+".js",function(){d&&h.start()})},Mugeda.Loader.prototype.start=function(){if(2==Mugeda.css3PlayerLoaded){var a=document.createElement("div");var node = this.dom; while(node){if(node.tagName && node.tagName.toLowerCase() == 'body')break;else	node = node.parentNode;}if(node) this.dom.parentNode.insertBefore(a,this.dom); else if(document.body) {var track=document.getElementById('mugeda_track'); document.body.insertBefore(a, track);} if(w!=null){Mugeda.data['id_'+this.id].wt=w;Mugeda.data['id_'+this.id].ht=h;}   Mugeda.startAnimation("id_"+this.id,hasScript?"actions_"+this.id+".js":"",a,this.resDir,this.name)}else Mugeda.creationToBeLoad=Mugeda.creationToBeLoad||[],Mugeda.creationToBeLoad.push(this)});var loader=new Mugeda.Loader(creationTag,null,null,resourceRelativeDir,commonDir,id);
	var ga_div=document.createElement("div");
	var track_pixel = "";
    var pixels = _mrmcp['additional_pixels']||[];
    if(_mrmcp['impression_pixel']) pixels.push(_mrmcp['impression_pixel']);
	for(var pIndex = 0; pIndex < pixels.length; pIndex++)
	{
	    var pixel = pixels[pIndex];
		var valid = pixel.indexOf('%TRACKURL%') < 0;
		if(valid){ 
			var parTag = pixel.indexOf('?') < 0 ? '?' : '&';
			pixel += parTag + "ts=" + (new Date()).getTime();
			var search = window.location.search;
			if (search){
				var params = search.split('?')[1];
				pixel += "&" + params;
			}
			track_pixel += "<img id='external_impression_tracker' style='display:none' src='"+pixel+"' />";
		}
	}
    var trackString = "<div id='mugeda_track'><script>\n   var _mrmma_campid = 'none';\n   var _mrmma_urid = '516ce6ece8ad7eea65000013';\n   var _mrmma_crid = '54102616a3664ede450001c9';\n   var _mrmma_title = '游戏-戳螃蟹';\n   var _mrmma_circle = 'mugedacn';\n   var _mrmma_width = "+w+";\n   var _mrmma_height = "+h+";\n   var _mrmma_type = 'css3';\n   var title = '游戏-戳螃蟹';\n   title = title.substr(0, Math.min(title.length, 32));\n   var _mrmma_var1 = 'campid=none&urid=516ce6ece8ad7eea65000013&crid=54102616a3664ede450001c9&time=1411364949956';\n   var _mrmma_var2 = 'circle=mugedacn&type=css3&width="+w+"&height="+h+"&display=normal&title=' + title;\n   var isLocal = !window.location || !window.location.host;<\/script>\n <script type='text/javascript'>\n     var _gaq = _gaq || [];\n    if(isLocal){\n        var track_url = 'http://cdn.mugeda.com/media/pages/track/track_20131030.html' + '?' + _mrmma_var1 + '&' + _mrmma_var2;\n        var tracker = document.createElement('iframe'); \n        tracker.id = '54102616a3664ede450001c9'; \n        tracker.src = track_url;\n        tracker.style.display = 'none';\n        tracker.style.width = '1px';\n        tracker.style.height = '1px';\n        var s = document.body.appendChild(tracker); \n    }else{\n        _gaq.push(['_setAccount', 'UA-38551434-1']);\n        _gaq.push(['_setCustomVar', 1, 'Identity Tags', (typeof _mrmma_var1 == 'undefined') ? 'none' : _mrmma_var1]);\n        _gaq.push(['_setCustomVar', 2, 'Property Tags', (typeof _mrmma_var2 == 'undefined') ? 'none' : _mrmma_var2]);\n        _gaq.push(['_trackPageview']);\n\n        (function() { \n	         var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; \n            ga.src = _mrmcp['ga_url']; \n            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); \n        })(); \n    }\n<\/script>\n\n<\/div>" + track_pixel;
    if (document.readyState == 'complete') {
        var div = document.createElement('div');
        div.innerHTML = trackString;
        loader.dom.parentNode.appendChild(div);
        var scripts = div.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            if (scripts[i].src !== '') {
                script.src = scripts[i].src;
            } else {
                script.text = scripts[i].text;
            }
            scripts[i].parentNode.removeChild(scripts[i]);
            i--;
            loader.dom.parentNode.appendChild(script);
        }
    }
    else {
	    document.write(trackString);
    }
    if(_mrmcp['render_mode']!='embedded'&&_mrmcp['render_mode']!='inline'){
        document.body.style.margin='0px';
        document.body.style.padding='0px';
        document.body.style.overflow='hidden';
        document.body.style.backgroundColor='rgb(0, 0, 0)';
    }
})();
