/**
 * Audio Manager
 * @author  yinghao.liu@vmlim20.com.cn
 * @date    2015-02-02
 * @version 1.1.0
 *
 * Example:
 *
 * AudioMgr.load([
 *   {name: "bg", src: "bg.mp3", autoplay: true, loop: true},
 *   {name: "enter", src: "enter.mp3"}
 * ], function() {
 *   AudioMgr.play("enter");
 * });
 *
 * Problems:
 *
 * 1. Function load() can't work on iOS devices under version 8.0
 * 2. Function replay() or playFrom() work just as play() on Android devices so far
 *
 * Version 1.1.0
 * Partly fixed the problem on iOS devices under version 8.0 by using WeChat API
 */
(function () {

	"use strict";

	var Audios = {};
	window.AudioMgr = {
		available: false,
		init: function () {
			// not need 'init' but 'load'
			console.log('# audioMgr inited');
		},
		/**
		 * load one audio
		 * @param setting  {String}		//{name: name, src: src, ...}
		 * @param callback {Function}
		 */
		loadOne: function (setting, callback) {
			if (!this.available) return;
			var name = setting.name, src = setting.src;
			if (Audios[name]) {
				console.log("There has been an audio named '" + name + "'!");
				return;
			}
			//document.write("loadOne " + name + "<br/>");
			var auido = new Audio();
			if (setting.autoplay) auido.autoplay = 'autoplay';
			if (setting.loop) auido.loop = 'loop';
			auido.timeout = setting.timeout || 10000;
			auido.callback = callback;
			//auido.addEventListener("load", function () {
			//	document.write("load " + name + "<br/>");
			//});
			//auido.addEventListener("abort", function () {
			//	document.write("abort " + name + "<br/>");
			//});
			//auido.addEventListener("canplay", function () {
			//	document.write("canplay " + name + "<br/>");
			//});
			auido.addEventListener("canplaythrough", function () {
				//document.write("canplaythrough " + name + "<br/>");
				if (!this.callback) return;
				this.callback();
				delete this.timeout;
				delete this.callback;
			});
			auido.addEventListener("pause", function () {
				if (this.onPause) this.onPause();
			});
			auido.src = src;
			auido.load();
			Audios[name] = auido;

			setTimeout(function() {
				if (auido.timeout && auido.callback) {
					auido.callback();
					delete auido.timeout;
					delete auido.callback;
				}
			}, auido.timeout);
		},
		/**
		 * load audios
		 * @param list     {Array}		//[{name: name, src: src, ...}, ...]
		 * @param callback {Function}
		 */
		load: function (list, callback) {
			if (!this.available) return;
			var _counter = list.length;

			var r = navigator.userAgent.match(/iPhone OS ([0-9]{1,})_/);
			if (navigator.userAgent.search("MicroMessenger") != -1 && window.wx && typeof wx.ready == "function" && r && r[1] != "") {
				if (parseInt(r[1]) < 8) {
					// serial loading by using WeChat API
					var __onload = function() {
						if (--_counter < 0)
							callback();
						else
							wx.ready(function() {
								AudioMgr.loadOne(list[list.length-1-_counter], __onload);
							});
					};
					__onload();
				} else {
					// parallel loading by using WeChat API
					var __onload = function() {
						if (!--_counter) callback();
					}
					wx.ready(function() {
						for (var i = 0; i < list.length; ++i) {
							AudioMgr.loadOne(list[i], __onload);
						}
					});
				}
			} else {
				// parallel loading
				var __onload = function() {
					if (!--_counter) callback();
				}
				for (var i = 0; i < list.length; ++i) {
					AudioMgr.loadOne(list[i], __onload);
				}
			}
		},
		/**
		 * play an audio
		 * @param name       {String}
		 * @param onComplete {Function}
		 */
		play: function (name, onComplete) {
			if (!this.available || !Audios[name]) return;
			var audio = Audios[name];
			audio.onPause = onComplete;
			audio.play();
		},
		/**
		 * pause playing an audio
		 * @param name {String}
		 */
		pause: function (name) {
			if (!this.available || !Audios[name]) return;
			var audio = Audios[name];
			audio.pause();
		},
		/**
		 * stop playing an audio
		 * @param name {String}
		 */
		stop: function (name) {
			if (!this.available || !Audios[name]) return;
			var audio = Audios[name];
			audio.pause();
			audio.currentTime = 0;
		},
		/**
		 * replay an audio from beginning
		 * @param name {String}
		 */
		replay: function (name) {
			if (!this.available || !Audios[name]) return;
			var audio = Audios[name];
			audio.currentTime = 0;
			audio.play();
		},
		/**
		 * replay an audio from time setted
		 * @param name {String} seconds
		 */
		playFrom: function (name, time) {
			if (!this.available || !Audios[name]) return;
			var audio = Audios[name];
			audio.currentTime = time;
			//document.write("audio.currentTime " + audio.currentTime + "<br/>");
			audio.play();
		}
	};

	if (window.Audio) AudioMgr.available = true;
})();
