!function($){
var $win = $(window),$body = $('body'), $doc = $(document);
var $ipad = navigator.userAgent.toLowerCase().match(/ipad/i) == "ipad";
var $winos = navigator.platform.toLowerCase().indexOf("win")>-1?true:false;
$.fx.interval = 40;
if (!$.support.transition){$.fn.transition = $.fn.animate;}

var E = {
	p2i:Power2.easeIn,p2o:Power2.easeOut,p2io:Power2.easeInOut,
	p4i:Power2.easeIn,p4o:Power2.easeOut,p4io:Power2.easeInOut,
	// bi:Back.easeIn,bo:Back.easeOut,bio:Back.easeInOut,
	bi:Back.easeIn.config(1),bo:Back.easeOut.config(1),bio:Back.easeInOut.config(1),
	boi:Bounce.easeIn,boo:Bounce.easeOut,boio:Bounce.easeInOut,
	exi:Expo.easeIn,exo:Expo.easeOut,exio:Expo.easeInOut,
	eli:Elastic.easeIn,elo:Elastic.easeOut,elio:Elastic.easeInOut
};
var TM = TweenMax,TL = TimelineMax;
var _w , _h ;
$f = window.$f || {
	// resizeHandle
	rh:function(e){
		var _=$f;
		_w = $win.width();
		_h = $win.height();
		$('#main').css({width:_w,height:_h});
		// $('slides').css({height:_h*})
		$('.box').each(function(index, el) {
			var _bw=$(this).data('w'),_bW=$(this).data('pw'),
				_bh=$(this).data('h'),_bH=$(this).data('ph');
			var _s = Math.min(!_bw||(_sw=_bW*_w/100)>=_bw?1:_sw/_bw,!_bh||(_sh=_bH*_h/100)>=_bh?1:_sh/_bh);
			TweenMax.set(this,{scale:_s});
		});
		$('.sbg img,.sview').each(function(index, element) {
			var _bw=$(this).data('w'),_bh=$(this).data('h'),
				_s = !$(this).hasClass('contain')?Math.max(_w/(_bw||_w),_h/(_bh||_h)):Math.min(_w/(_bw||_w),_h/(_bh||_h));
			TweenMax.set(this,{scale:_s});
		});
		var vh = (_w*960/540)+100;
		var isWXQQ = navigator.userAgent.indexOf('MQQBrowser')>-1 ;
		// isWXQQ = true;
		if(!isWXQQ){
			$('video').css({width:_w,height:(_w*960/540)+100,marginTop:-(vh-_h)/2});
		}else{
			// $('video').css({width:540,height:960,marginTop:0});//(_vh+100-_h)/2
			// TM.set($('video'),{'width':'100%',height:vh, 'z-index': 999,position:'static'});
			// $('video').css({width:'100%',height:'100%',position:'absolute',bottom:'auto',left:0,top:0});
		};
	},
	orientationchange:function(){
		// log(window.orientation);
		if(window.orientation==90||window.orientation==-90){
			$('.pop-tip').stop(true,true).fadeIn(500);
		}else{
			$('.pop-tip').stop(true,true).fadeOut(500);
		}
	},
	loadRender:function(){

		var _ = this,
			_arr = [],
			// img = 'images/320c/320sh5_00{index}.jpg',
			img = 'images/320a/video_{index}.jpg',
			imgHD = 'images/640/640h5_00{index}.jpg';
		var $img = $('.poster'),$btn = $('.play'),
			$video,$load = $('.load');

		var _uios = navigator.userAgent.match(/iPhone OS (.+) like Mac/),
			_uad = navigator.userAgent.match(/Android (.+); /);
		var isQQ =  ($f.isArray(_uios)&&_uios.length>=2&&_uios[1].split('_')[0]<7) || ($f.isArray(_uad)&&_uad.length>=2&&_uad[1].split('.')[0]<4);
		var isWXQQ = navigator.userAgent.indexOf('MQQBrowser')>-1 ;
		// isWXQQ = true;
		// isQQ = true;

		var video = _.video = function(){
			if(isQQ){return {}};
			var _src = !isWXQQ?'video.mp4':'video_2.mp4';
			$video = $('<video class="video-box" id="video" style="'+(isWXQQ?'visibility:hidden;':'display:none;')+'" data-index="1" x-webkit-airplay="true" webkit-playsinline="true" preload="auto" src="'+_src+'"  poster="images/640/640h5_00000.jpg"></video>');
			$video.prependTo('.section.s1')
			$(window).trigger('resize');
			if(isWXQQ){
				setTimeout(function(){
					$video.css({'display':'none','visibility':'visible'});
					// TM.set($video,);
					$(window).trigger('resize');
					TM.set($video,{display:'none',transformOrigin:'center center'/*,height:960,scale:($(window).width())/540,left:'50%',top:'50%',marginLeft:'-270',marginTop:'-450'*/});
					TM.set($video,{'width':'100%',height:($(window).width()*960/540)+120,marginTop:-60, 'z-index': 999,position:'static'});
					TM.set($video,{'object-fit':'cover','object-position':'center'});
				},10);
			};
			var _video = $video[0],first = true;
			return {
				init : function(){
					var _this = this;
					if(first){
						first = false;
						_video.load();
					}
					_video.currentTime = 0;
					if(!isWXQQ){
						_video.play();
						_video.pause();
					}
					var _canplay = true;
					$video.bind('ended.video',function(){
						_this.complete();
					}).bind('play.video',function(){
						$video.show();
					}).bind('canplay.video',function(){
						!!_canplay&&(_canplay=false,V.play());
					});
					setTimeout(function(){
						!!_canplay&&(_canplay=false,V.play());
					},2000);
					if(isWXQQ){
						$video.bind('touchstart.video touchmove.video touchend.video',function(e){
							e.stopPropagation();
							e.preventDefault();
						});
					}
				},
				currentTime : 0,
				end : function(){
					$video.unbind('.video');
				},
				play : function(){
					_video.play();
					if(isWXQQ){
						_video.currentTime = 0;
						setTimeout(function(){
							TM.set($video,{display:'block',visibility:'visible'});
							$img.hide();
						},200);
					}else{
						$img.hide();
					}
				},
				pause : function(){
					_video.pause();
					/*isQQ&&V.replace(null,function(){
						$img.show();
						$video.hide();
					});*/
				},
				complete : function(){
					V.complete();
					if(isWXQQ){
						TM.set($video,{display:'none',visibility:'hidden'});
					}
				}
			}
		}();
		var btn = _.btn = function(){
			var tl ,
				$sta1 = $btn.find('.sta1'),$sta2 = $btn.find('.sta2'),
				$light = $btn.find('.light'),$mask = $('.s1 .mask'),
				$tip = $btn.find('.tip');

			var first = true,state = false;
			return {
				show : function(flag){
					if(!state&&!flag)return;
					state = false;
					TM.killChildTweensOf($btn);
					TM.killTweensOf($btn);
					TM.set($btn,{display:'block',opacity:1,scale:1});
					TM.from($btn,0.35,{opacity:0,scale:0.5,ease:E.bo});
					TM.fromTo($sta1,0.75,{rotationY:0,display:'block',opacity:1},{rotationY:60,display:'block',opacity:0,delay:.35});
					tl = new TL();
					tl.fromTo($sta2,0.5,{scale:1.2,opacity:0},{scale:1.2,opacity:1,delay:1.1,ease:E.p2i});
					tl.to($sta2,0.35,{scale:1,ease:Back.easeOut.config(2)});
					TM.fromTo($light,1,{y:0},{y:160,repeat:-1,delay:1.8});

					if(!first){
						TM.set($tip,{display:'block'});
						TM.fromTo($tip,0.5,{y:-50,opacity:0},{y:0,opacity:1,delay:0.15});
						$mask.addClass('active');
					}else{
						first = false;
					}
				},	
				hide : function(){
					if(!!state)return;
					state =true;

					$tip.hide();
					TM.to($btn,0.35,{opacity:0,onComplete:function(){
						TM.set($btn,{scale:1});
						TM.killChildTweensOf($btn);
						TM.killTweensOf($btn);
					}});
					$mask.removeClass('active');
				},
				play : function(){
					this.hide();
					V.isWait = false;
					V.play();
				},
				stop : function(){
					this.show();
					V.isWait = true;
					V.stop();
				},
				init : function(){
					var _this = this,ofsX,ofsY,size = 138;
					first = true,state = false;
					_this.show(true);
					$btn.find('.inner').on('touchstart.touch',function(e){
						e.preventDefault();  
						e.stopPropagation();
						if(!!state)return;
						_this.play();
						var _ofs = $btn.offset();
						ofsX = _ofs.left , ofsY = _ofs.top;
					}).bind('touchmove.touch',function(e){
						e.preventDefault();  
						e.stopPropagation();
						if(!state)return;
						var touch = e.originalEvent.changedTouches[0],x = touch.pageX,y = touch.pageY;
						if(x<ofsX||x>ofsX+size||y<ofsY||y>ofsY+size){
							$(this).trigger('touchend');
						}
					}).bind('touchend.touch',function(e){
						e.preventDefault();  
						e.stopPropagation();
						if(!state)return;
						if(isWXQQ)return;
						_this.stop();
					});
				},
				end : function(){
					$btn.find('.inner').unbind('.touch');
				}
			}
		}();



		// isQQ = true;
		

		var _sprite = 18,_row = 6 ;
		var lastCalledTime;
		var fps;
		var V = _.V = function(){
			var _init = true;
			var _mp3,$canvas,_canvas,_context,_img,_temp;
			if(isQQ){
				_mp3 = $('<audio src="audio.mp3" preload></audio>').appendTo('body');
				/*var _canvas = $('<canvas class="cvs"></canvas>').prependTo('.section.s1 .sview')[0];
				// _canvas.width = 640;_canvas.height = 1138;
				_canvas.width = 320;_canvas.height = 569;
				_context = _canvas.getContext("2d");
				_context.imageSmoothingEnabled = false;
			    _context.webkitImageSmoothingEnabled = false;
			    _context.mozImageSmoothingEnabled = false;*/
			    var $canvas = $('<div class="canvas"></div>').prependTo('.section.s1 .sview');
			    _canvas = $canvas[0];
			};

			return {
				CUR : 0 ,
				IDX : -1,
				loadCUR : 0,
				All : 70,//70 47
				FRA : 630,//630 420
				Max : 70,//70 47 初始设置停止加载的数量
				MaxAddon : 0,//增加的数量
				playMax : 70,//设置可播放的数量
				isPlay : false,
				isWait : true,
				first : true,
				isComplete : false,
				init : function(){
					var _this = this;
					_this.CUR = 0,_this.isComplete = false;
					_this.first = true;
					if(_init){
						_init = false;
						isQQ&&(V.loader.load(),$load.append('<span class="txt">0%</span>'));
						_this.load();
						setTimeout(function(){
							_.init();
						},15000);
					}else{
						_this.img();
					};

					if(isQQ){
						_this.curTime = 0;
						_mp3[0].currentTime = 0;
						_this.IDX = -1;
						_this.draw();
					}else{
						video.init();
						_this.allTime = $video[0].duration;
					};
				},
				reset : function(){
					this.init();
				},
				play : function(){
					var _this = this ;
					if(!_this.isPlay&&!_this.isComplete){
						_this.start();
					}
					_this.loadend();
				},
				stop : function(loading){
					var _this = this;
					_this.isPlay = false;
					if(isQQ){
						cancelAnimationFrame(_this.animID);
						// clearTimeout(_this.animID);
						_this.animID = null;
						_mp3[0].pause();
						_this.replace(V.CUR);
					}else{
						video.pause();
					}	
					// log('V stop');
				},
				load : function(){
					$load.show();
				},
				loadend : function(){
					$load.hide();
				},
				complete : function(){
					var _this = this;
					_this.stop();
					_this.isComplete = true;
					_this.isWait = true;
					/*btn*/
					btn.end();
					$('.section.s1').trigger('out');
					log('img complete');
				},
				start : function(){
					var _this = this;
					if(_this.first){
						log('V start');
						_this.first = false;
						_this.Max += _this.MaxAddon;
						//按钮事件
						btn.init();
					}else if(!_this.isPlay&&!_this.isWait){
						log('V handle');
						_this.isPlay = true;
						if(isQQ){
							_this.curTime = new Date().getTime();
							$img.hide();
							_this.handle();
							_mp3[0].play();
						}else{
							video.play();
						}
					}
				},
				replace : function(cur,call){
					var _this = this,_img = new Image();
					_img.onload = function(){
						if(cur == _this.CUR){
							_this.img(this.src);
							$f.isFunction(call)&&call();
						}
					};
					_img.src = _.TPL(imgHD,{index:(1000+cur+'').substr(1)});
				},
				animID : null,
				curTime : 0,
				dua : 66,//100
				handle : function(){
					var _ = $f,_this = _.V;
					var _dua = new Date().getTime();
					_this.animID = requestAnimationFrame(arguments.callee);
					/*var _time = _dua>=_this.curTime+_this.dua?2*_this.dua+_this.curTime-_dua:_this.dua;
					_this.animID = setTimeout(arguments.callee,_time);*/
					
					/*FPS*/
					/*if(!lastCalledTime) {
					    lastCalledTime = Date.now();
					    fps = 0;
					}else{
						delta = (new Date().getTime() - lastCalledTime)/1000;
						lastCalledTime = Date.now();
						fps = 1/delta;
						log('fps',fps);
					}*/
					if(_dua+6>=_this.curTime+_this.dua){
						// log('dua',_dua-_this.curTime-_this.dua);
						// log('V handle ++');
						_this.curTime += _this.dua;
						_this.CUR += 1;
						_this.draw();
						if(_this.loadCUR < _this.IDX + _this.Max){
							_this.loader.wakeup();
						}
						//_this.IDX >= _this.All-1 && 
						if(_this.CUR >= _this.FRA-1){
							_this.complete();
						}else if(_this.IDX >= _this.loadCUR){
							_this.stop();
						}
					}
				},
				
				img : function(src){
					var _this = this;
					// log('img CUR'+_this.CUR);
					$img.attr('src',src || _.TPL(imgHD,{index:(1000+_this.CUR+'').substr(1)}) );
					$img.show();
				},
				draw : function(){
					var _this = this,_cur = Math.floor(_this.CUR/_sprite),i = _this.CUR%_sprite;
					if(_cur!=_this.IDX){
						_this.IDX = _cur ;
						if(_cur==0){
							_img = new Image();
							// _img.src = _.TPL(img,{index:(1000+_cur+'').substr(1)});
							_img.src = _.TPL(img,{index:_cur});
						}else{
							_img = _temp;
						}
						/*_img = new Image();
						_img.onload = function(){
							// log(_this.CUR,'-'+((i%_row)*320)+'px -'+(Math.floor(i/_row)*569)+'px',_img.src);
							// _context.drawImage(_img,(i%_row)*320,Math.floor(i/_row)*569,320,569,0,0,320,569);
						};
						_img.src = _.TPL(img,{index:_cur});*/
						$canvas.css({
							'background-image' : 'url('+_img.src+')',
							'background-position' : '-'+((i%_row)*640)+'px -'+(Math.floor(i/_row)*1138)+'px'
						});
						if(_cur+1<_this.All){
							_temp = new Image();
							_temp.src = _.TPL(img,{index:_cur+1});
							// _temp.src = _.TPL(img,{index:(1000+_cur+1+'').substr(1)});
						}
					}else{
						$canvas.css({
							// 'background-image' : 'url('+_img.src+')',
							'background-position' : '-'+((i%_row)*640)+'px -'+(Math.floor(i/_row)*1138)+'px',
						});
						/*log(_this.CUR,'-'+((i%_row)*320)+'px -'+(Math.floor(i/_row)*569)+'px');*/
						// _context.drawImage(_img,(i%6)*320,Math.floor(i/6)*569,320,569,0,0,320,569);
					}
					// log(Math.floor(i/3)*320,(i%3)*569,320,569,0,0,640,1138);
				}
			}
		}();
		for(var i=0;i<V.All;i++){
		 	_arr.push(_.TPL(img,{index:i}));
		 	// _arr.push(_.TPL(img,{index:(1000+i+'').substr(1)}));
		};
		
		V.loader = $f.loader(_arr,function(_,cur,len){
			V.loadCUR = cur ;
			$load.find('.txt').text(Math.floor(cur*100/len)+'%');
			if(cur-V.IDX>=V.Max){
				V.loader.sleep();
			};
			if(cur-V.IDX>=V.playMax){
				V.play();
			}
			// log('handle==>'+cur);
		},function(){
			// log('loader complete');
		});
		
		V.init();

		
		var __arr = [];
		__arr.push('images/intro/sprite.png');
		if(isQQ){__arr.push('audio.mp3');}
		var __loader = $f.loader(__arr).load();
		
	},
	aniInit:function(){
		var _=this,_index = 0;
		$('body').on('touchstart','a,.btn',function(){
			$(this).addClass('active');
		}).on('touchend','a,.btn',function(){
			$(this).removeClass('active');
		});


		var $sec1 = $('.section.s1'),$sec2 = $('.section.s2');

		$sec1.bind('init',function(){
			$(this).show();
			_.V.reset();
			TweenMax.fromTo(this,1,{opacity:0},{opacity:1,onComplete:function(){
				_.V.play();
			}});
		}).bind('out',function(){
			var _this = this;
			TweenMax.to(this,0.3,{opacity:0,onComplete:function(){
				$(_this).hide();
				$sec2.trigger('init');
			}});
		});

		$sec2.append($('#tpl_s2').text());
		$('body').append($('#tpl_share').text());
		var _s2init = false,_addinit = false,_STA_ = false,
			_mp3 = $('<audio src="bg.mp3" preload></audio>').appendTo('body');

		$sec2.bind('init',function(){
			var _this = this;
			var $share = $('.share',this),$replay = $('.replay',this),
				$cbtn = $('.cbtn',this),$cont = $('.cont',this),
				mySwiper;
			if(!_s2init){
				_s2init = true;
				_mp3.bind('ended',function(){
					_mp3[0].currentTime = 0;
					_mp3[0].play();
				})
				$cbtn.bind('tap',function(){
					if(!!_STA_)return;
					_STA_ = true;
					var _sta = $(this).hasClass('state');
					$cbtn[_sta?'removeClass':'addClass']('state');
					var $cur = $cont.eq(_sta?1:0),$tar = $cont.eq(_sta?0:1);
					TweenMax.to($cur,0.5,{rotationY:90,opacity:0,onComplete:function(){
						$cur.hide();
						$tar.show();
						if(!_sta&&!_addinit){
							var _index = 0,$imgs = $(_this).find('.img');
							_addinit = true;
							mySwiper = new Swiper('.swiper-container', {
								direction: 'horizontal',//vertical
								pagination: '.swiper-pagination',
								speed:100,autoplay:4500,autoplayDisableOnInteraction:false,
								loop : true,
								onTransitionEnd: function(swiper) {
									// log(swiper.activeIndex,swiper.previousIndex,swiper.swipeDirection);
									var __idx = (swiper.activeIndex+2)%3;
									if(__idx == _index)return;
									var _dir = swiper.activeIndex > swiper.previousIndex;
									_index = __idx;
									mySwiper.lockSwipes()
									var $cur = $imgs.filter('.cur').removeClass('cur');
									TweenMax.fromTo($cur,0.5,{opacity:1,rotationY:0},{opacity:0,rotationY:!!_dir?-90:90,onComplete:function(){
										$cur.hide();
									}});
									var $tar = $imgs.eq(_index).addClass('cur').show();
									TweenMax.fromTo($tar,0.5,{opacity:0,rotationY:!!_dir?90:-90},{opacity:1,rotationY:0,delay:0.5,onComplete:function(){
										mySwiper.unlockSwipes()
									}});
									//log(swiper);
								},
							});
						};
						if(!_sta){
							mySwiper&&!mySwiper.autoplaying&&mySwiper.startAutoplay();
						}else{
							mySwiper&&mySwiper.autoplaying&&mySwiper.stopAutoplay();
						}
						TweenMax.fromTo($tar,0.5,{rotationY:-90,opacity:0},{rotationY:0,opacity:1,onComplete:function(){
							_STA_ = false;
						}});
					}});
				});
				$replay.bind('tap',function(){
					mySwiper&&mySwiper.autoplaying&&mySwiper.stopAutoplay();
					$(_this).trigger('out');
				});
				$share.bind('tap',function(){
					var $pshare = $('.pop-share');
					$pshare.fadeIn();
					$pshare.one('touchstart',function(){
						$pshare.fadeOut();
					})
				});
			}
			$(_this).find('.o').css({visibility:'hidden'});
			$(this).show();
			_mp3[0].play();
			TweenMax.fromTo(this,1,{opacity:0},{opacity:1,onComplete:function(){
				$(_this).find('.o').css({visibility:'visible'});
				$(_this).trigger('in');
			}});
		}).bind('in',function(){
			TM.staggerFrom($('.t',this),0.5,{opacity:0,rotationX:30,y:30},0.25);
		}).bind('out',function(){
			var _this = this;
			TweenMax.to(this,1,{opacity:0,onComplete:function(){
				$(_this).hide();
				_mp3[0].pause();
				$sec1.trigger('init');
			}});
		});
	},
	
	init:function(){  
	    var _ = this;

	    CSSPlugin.defaultTransformPerspective = 500;
	    // $(window).bind('orientationchange',_.orientationchange);
	    window.addEventListener("onorientationchange" in window ? "orientationchange": "resize", _.orientationchange, false);

	    for(var i in _){i.indexOf('Init')>0&&_[i]!=arguments.callee&&$.isFunction(_[i])&&_[i]();}  
	    return;  
	},
	// init 
	i_:function(){
		var _ = this;
		$win.resize(_.rh).trigger("resize");
		function absorbEvent_(event) {
			var e = event || window.event;
			e.preventDefault && e.preventDefault();
			e.stopPropagation && e.stopPropagation();
			e.cancelBubble = true;
			e.returnValue = false;
			return false;
		}
		_.loadRender();	
		$('video').bind('touchstart touchmove touchend',absorbEvent_);
	},
	
	//
	render:function(tpl,data){
        var _ = this;
        var _tpl = $f.template($.trim(tpl));
        return _tpl(data);
    },
	//TPL
	TPL:function(template, data) {
	  return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
		var keys = key.split("."), v = data[keys.shift()];
		for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
		return (typeof v !== "undefined" && v !== null) ? v : "";
	  });
	},
    // css Init
	ci:function(){
		var _ = this,$f='ci';
		for(var i in _){i.indexOf('i')>0&&i.length==2&&i!=$f&&$.isFunction(_[i])&&_[i]();}
		return;
	},
	videoType:function(){
		var v = document.createElement('video'),types={'webm':'video/webm; codecs="vp8, vorbis"','mp4':'video/mp4; codecs="avc1.42E01E, mp4a.40.2"','ogv':'video/ogg; codecs="theora, vorbis"'};
		if(v.canPlayType){
			for(var _type in types){
				var canPlay = v.canPlayType(types[_type]);
				if(canPlay=='probably')return _type;
			}
		}
		return '';
	},
	endWith:function(str1,str2){
		var str = '*.?+$^[](){}|\\/',arr=str2.split('');
		for(var i=0;i<arr.length;i++){
			if(str.indexOf(arr[i])>-1){
				arr[i] = '\\'+arr[i];
			}
		}
		str2 = arr.join('');
		var reg=new RegExp(str2+'$');
		return reg.test(str1);
	},
	getUrlParam:function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
            var r = window.location.search.substr(1).match(reg);  
                if (r!=null) return unescape(r[2]); return null; 
    },
	hash:function(){
		return !!location.hash?location.hash.substr(1):'';
	},
	accountingNum:function(str){
        if(!str)return '0';
        var _s = (str+'').split('.');
        _s[0] = _s[0].replace(/(\d)(?=(\d{3})+$)/ig,"$1,");
        return _s.join('.');
    },
	pxToInt:function(str){
		return str.indexOf("px")>-1?Math.round(parseFloat(str.split('px')[0])):str;
	},
	shuffleArray: function(arr){
		for(var j, x, i = arr.length; i; j = parseInt(Math.random()* i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
		return arr;
	},
	sizeOf:function(o){
		var counter = 0;
		for(var i in o)counter++;
		return counter;
	},
	objTostr:function(o,s,t){
		var str = "";s = !!s?s:"";var k=!!t?"":" ";
		for(var i in o){
			str+=(s+i+k);
		}
		return str;
	},
	objTostrP:function(o,n,s,t){
		var str = "";s = !!s?s:"";var k=!!t?"":" ";
		for(var i in o){
			str+=(s+o[i][n]+k);
		}
		return str;
	},
	is: function(A, _) {
		var $ = Object.prototype.toString.call(_).slice(8, -1).toLowerCase();
		return _ !== undefined && _ !== null && $ === A.toLowerCase()
	},
	isFunction : function(o){return this.is('function',o);},
	isObject : function(o){return this.is('object',o);},
	isString : function(o){return this.is('string',o);},
	isArray : function(o){return this.is('array',o);},
	isBoolean : function(o){return this.is('boolean',o);},
	isDate : function(o){return this.is('date',o);},
	isNumber : function(o){return this.is('number',o);},
	isUndefined : function(o){return o===undefined;},
	isNull : function(o){return o===null;},
	isEmptyObject : function(o){if(this.isObject(o)){for(var i in o){return false;}return true;}else{return false;}},
	isEmptyArray : function(o){return this.isArray(o)&&o.length==0;},
	isNotEmptyArray : function(o){return this.isArray(o)&&o.length>0;},
	Sc : function(objName,objValue,objHours){
		var str = objName + "=" + escape(objValue);
		!!(objHours==undefined)&&(objHours=24);
		if(objHours > 0){
			var date = new Date();
			var ms = objHours*3600*1000;
			date.setTime(date.getTime() + ms);
			str += "; expires=" + date.toGMTString();
		}
		document.cookie = str;
	},
	Gc : function(objName){
		var arrStr = document.cookie.split("; ");
		for(var i = 0;i < arrStr.length;i ++){
			var temp = arrStr[i].split("=");
			if(temp[0] == objName) return unescape(decodeURIComponent(temp[1]));
		}
   	},
   	Dc:function(name){
		var date = new Date();
		date.setTime(date.getTime() - 10000);
		document.cookie = name + "=; expires=" + date.toGMTString();
   	}
};
$f.loader=function(dom,handle,callback,thread){  
    var $imgs,imgs=[];  
    if($.isArray(dom)){  
        imgs = dom;  
    }else{  
        $imgs = dom.find('img');  
        $imgs.each(function(index, el) {  
            imgs.push($(el).attr('src'));  
        });  
    }  
    var cur = 0,loaded = 0,len = imgs.length,thread = thread || 3,
    	isSleep = false,isComplete = false,d1,d2;
    return {  
        load : function(){
        	d1 = new Date().getTime();
            for(var i=0;i<(len<thread?len:thread);i++){
        		this.handler(); 
        	}
            return this; 
        },  
        loading : function(path){  
            var _ = this,img = new Image();  
            img.onload = img.onerror = function(){
            	loaded ++ ;
            	$f.isFunction(handle)&&handle(_,cur,len);
                _.handler();
            };  
            img.src = path;  
        },  
        handler : function(){  
            var _ = this;
             if(loaded >= len && !isComplete){
            	isComplete = true;
            	d2 = new Date().getTime();
            	log('Complete:',d2-d1);
                $.isFunction(callback)&&callback();  
            }else if(!isSleep && !isComplete){
                _.loading(imgs[cur]);  
                cur ++ ;  
            }
            return this;
        },
        sleep : function(){
        	isSleep = true;
        },
        wakeup : function(){
        	var _ = this;
        	if(!!isSleep){
        		isSleep = false;
        		_.handler();
        	}
        }
    }  
};

(function () {  
    var lastTime = 0;  
    var vendors = ['ms', 'moz', 'webkit', 'o'];  
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {  
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];  
        window.cancelAnimationFrame =  
  window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];  
    }  
  
    if (!window.requestAnimationFrame)  
        window.requestAnimationFrame = function (callback, element) {  
            var currTime = new Date().getTime();  
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));  
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },  
      timeToCall);  
            lastTime = currTime + timeToCall;  
            return id;  
        };  
  
    if (!window.cancelAnimationFrame)  
        window.cancelAnimationFrame = function (id) {  
            clearTimeout(id);  
        };  
} ());
$f.progress=function(opt){//end,start,dua,callback,complete,infi,imd      
    var _timer = null,_d;  
    var optHandle = function(opt){  
        opt = $.extend({dua:10,end:100,start:0,infi:false},opt);  
    }  
    return {      
        init : function(cur){      
            var _ = this;  
            optHandle(opt);  
            _d = cur==undefined? opt.start : cur; 
            !!opt.imd&&_.handler();  
            _.start();      
            return _;    
        },
        stop : function(){    
            var _ = this;    
            if(!!_timer){    
                clearInterval(_timer);    
                _timer = null;    
            }    
        },    
        start : function(_opt,cur){    
            var _ = this;  
            if(_opt){  
                optHandle(_opt);  
                opt = $.extend(opt,_opt);  
            }  
            if(cur!=undefined&&!opt.infi){  
                _d = cur ;  
            }  
            if(!_timer){    
                _timer = window.setInterval(function(){_.handler()},opt.dua||10);    
            }  
        },    
        complete: function(){    
            var _ = this;    
            $f.isFunction(opt.complete)&&opt.complete(_d,opt.end,opt);    
            _.stop();    
        },    
        handler : function(){      
            var _ = this;    
            if(!!opt.infi||_d!==opt.end){  
                _d<opt.end?_d ++:_d--;    
                $f.isFunction(opt.callback)&&opt.callback(_d,opt.end,opt);   
            }  
            if(!opt.infi && _d == opt.end){  
                _.complete();    
                return;    
            }  
        }      
    }      
};


function log(msg) {  
    if (window.console && window.console.log)  
        window.console.log.apply(console,arguments);//+"|date:"+new Date().getTime()  
    else if (window.opera && window.opera.postError)  
        window.opera.postError(msg);  
};

$(function(){$f.i_();});
}(jQuery);

