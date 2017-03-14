/**
 * 快速点击，用以处理zepto tap事件的点透问题
 * @date   2015-01-16
 * @author p_jdslhuang(zerahuang)
 * @description 使用方式
 * 		var fastclick = require("fastclick");  
 * 		fastclick(document.body);  
 */
define('fastclick', function(require, exports, module) {
	;(function () {
		'use strict';

		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/


		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;


			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;


			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;


			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;


			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;


			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;


			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;


			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;

			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;

			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}


			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


		/**
		 * iOS 6.0(+?) requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);

		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}

			return (/\bneedsclick\b/).test(target.className);
		};


		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};


		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function(targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};


		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};


		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};


		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};


		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};


		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};


		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};


		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};


		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};


		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};


		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};


		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};


		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};


		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none') {
				return true;
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none') {
				return true;
			}

			return false;
		};


		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};


		if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {

			// AMD. Register as an anonymous module.
			define(function() {
				return FastClick;
			});
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());
});
define('wg.debug',function(require,exports,module){var _url=require("url");var _loadScript=require("loadJs");var _debug=JSON.parse(_url.getUrlParam("debug")?decodeURIComponent(_url.getUrlParam("debug")):"{}");window.logs=[];var biztype="errorreport";exports.loadScript=loadScript;exports.log=log;exports.error=error;exports.report=report;exports.isdebug=isdebug;exports.setParam=setParam;exports.showLog=showLog;function error(errorHandle){if(isdebug()){window.onerror=function(cause,url,line,row,ReferenceError){log();errorHandle(cause,url,line,row,ReferenceError);}}}
function isdebug(){return JSON.stringify(_debug)!="{}";}
function loadScript(){var url="";if(arguments.length==1){if(typeof arguments[0]=="object"){url=arguments[0].url;}else{url=arguments[0];}}else{url=arguments[0];}
if(_debug.cgiData){for(var i in _debug.cgiData){if(url.indexOf(i)!=-1){window[_debug.cgiData[i].cbname](_debug.cgiData[i].data);return false;}}}
_loadScript.loadScript.apply(this,arguments);}
function log(opt){if(!opt){opt={};}
var nowtime=new Date();var option={time:nowtime.getFullYear()+"/"+(nowtime.getMonth()+1)+"/"+nowtime.getDate()+"&nbsp;"+nowtime.getHours()+":"+nowtime.getMinutes()+":"+(nowtime.getSeconds()+":"+nowtime.getTime()%1000),cgi:"",cbname:"",data:null,params:arguments.callee.caller.arguments};for(var i in option){option[i]=opt[i]||option[i];}
window.logs.push(option);}
function report(){var reportInfo=JSON.stringify({ua:navigator.userAgent,url:"http://"+location.host+location.pathname,logs:window.logs.concat().reverse()});reportInfo=reportInfo.slice(0,4900);var sendData=serialize({biztype:biztype,msgcontent:reportInfo,platform:isMqq()?"1":"2",callback:"hello"});ajax({url:"http://party.wanggou.com/tws64/appointment/CommonAppointSubmit",type:"post",data:sendData,success:function(data){if(data.match(/iRet[^\d]+(\d+)/)&&data.match(/iRet[^\d]+(\d+)/)[1]=="0"){alert("上报成功！请勿重复上报，我们会尽快解决您的问题！");}else{alert("上报失败！为了更好地定位到您的问题，如有需要，您可以把日志截图发给我们。");}},error:function(){}});function serialize(o){var _r="";for(var i in o){_r+=(i+"="+o[i]+"&");}
return _r;}
function ajax(opt){if(!document.getElementById("debug_iframe")){var ifr=document.createElement("iframe");ifr.style.width="1px";ifr.style.height="1px";ifr.style.position="absolute";ifr.style.top="-100px";ifr.id="debug_iframe";ifr.src="http://party.wanggou.com/promote/2014/cross.html";document.body.appendChild(ifr);}
var _t=setInterval(function(){if(document.getElementById("debug_iframe").contentWindow&&document.getElementById("debug_iframe").contentWindow.ajax){document.getElementById("debug_iframe").contentWindow.ajax(opt);clearInterval(_t);}},100);}
function isMqq(){var ua=navigator.userAgent.toLowerCase();return/qq\/(\/[\d\.]+)*/.test(ua)||/qzone\//.test(ua);}}
function showLog(){var tpl="<div style=\"padding:10px;color:white;height: 100%;\">\
                        <div style=\"color: white;border-bottom: 1px solid #aaa;margin-bottom: 20px;\">访问日志：\
                            <div style=\"color: white;position: absolute;right: 10px;top: 10px;\">\
                                <a style=\"text-decoration: underline;\" id=\"debug_report\">日志上报</a>&nbsp;&nbsp;&nbsp;&nbsp;<a style=\"text-decoration: underline; color: white;\" id=\"debug_close\">返回</a>\
                            </div>\
                        </div>\
                        <p style=\"color:wheat;margin-bottom:10px;\">userAgent：{ua}</p>\
                        <ul style=\"height: 75%;overflow-y: scroll;\">{list}</ul>\
                    </div>";var el=document.createElement("div");el.setAttribute("style","width:100%;height:100%;background-color:#333;z-index:900;position:fixed;top:0px;left:0px;");var _t="";for(var len=window.logs.length-1,i=len;i>=0;i--){_t+="<li style='color:white;margin-bottom:20px;word-wrap:break-word;'>【"+(len-i+1)+"】&nbsp;"+JSON.stringify(window.logs[i])+"</li>";}
el.innerHTML=tpl.replace("{list}",_t).replace("{ua}",navigator.userAgent);document.body.appendChild(el);document.getElementById("debug_close").onclick=function(){document.getElementById("debug_report").onclick=document.getElementById("debug_close").onclick=null;document.body.removeChild(el);}
document.getElementById("debug_report").onclick=function(){report();}}
function setParam(name,defaultValue){return(_debug.param&&_debug.param[name])?_debug.param[name]:defaultValue;}});
define("wg.market.kissme",function(require,exports,module){var _login=require("login");var _loadJs=require("loadJs");var _tplParse=require("wg.market.tplparser");var _cookie=require("cookie");var _xss=require("wd.tool.xss");var _promote=require("wg.promote");var _debug=require("wg.debug");var _lazyLoadImg=require("wg.lazyLoadImg");var _speedtime=require('speedtime');var _md5=$md5();var _isWeChatEnv=_promote.env=="weixin";var _clickLocked=false;var _activeId="124451ea-a744-49a4-92ed";var _subscribeId=_isWeChatEnv?["29000","51019"]:["30001","40016"];var _view=null;var _pages=null;var _progressCache={};var _scope={};var _isUserLoggedIn=false;exports.init=function(){if(typeof speedTimePoint!="undefined"){speedTimePoint[3]=new Date();_speedtime.report(speedTimePoint);}
bindEvents();loadedPercent(90);_view=createView("J_view_container");_view.setHashTable(route);_pages=_view.cont;_view.add({id:"home",init:renderHomePage});_view.add({id:"anonymous",init:renderAnonymousPage});_view.add({id:"main",init:renderMainPage});_view.add({id:"share",init:renderSharePage});_view.add({id:"progress",init:renderProgressPage});_view.add({id:"game",init:renderGamePage});_view.add({id:"result",init:renderResultPage});_view.add({id:"gotNothing",init:renderGotNothingPage});_view.add({id:"alreadyKissed",init:renderAlreadyKissedPage});_view.add({id:"expired",init:renderExpiredPage});_view.add({id:"limited",init:renderLimitedPage});_view.add({id:"oops",init:renderOopsPage});_view.add({id:"refuse",init:renderRefusePage});_view.add({id:"theEnd",init:renderTheEndPage});_view.add({id:"senderLimited",init:renderSenderLimitedPage});_view.add({id:"senderExpired",init:renderSenderExpiredPage});_view.add({id:"myCoupon",init:renderMyCouponPage});_view.init();};function route(hash){var splits=hash.split("_");var fragment=splits[0];var args=splits.slice(1);if(fragment=="#share"){return _pages.share.init(args[0],args[1]);}
return _pages.main.init();}
function createView(containerId){_promote.views({nodeid:containerId,freshFunc:function(){_clickLocked=false;hideAllActiveDialog();},eventCore:function(){_promote.addPTAG();_lazyLoadImg.lazyload({threshold:200});debugLog("page:"+this._templateid);setFollowQRCodeImg();}});return _promote.pageview;}
function setFollowQRCodeImg(){$("[tag=follow]").attr("view-data-qrcode","http://wqs.jd.com/promote/2015/kissme/images/follow-qrcode.jpg");}
function bindEvents(){registerFn("click","refresh",refreshPage);registerFn("click","show-rule",showRuleDialog);registerFn("click","to-mall",navigateToMallPage);registerFn("click","share",showShareGuideDialog);registerFn("click","myCoupon",function(e){if($(e.target).closest("#myCoupon_panel").length){$(window).scrollTop(0);return;}
_pages.myCoupon.init();});registerFn("click","play",function(){_pages.game.init();});$(document.body).on("click","[subscribe]",subscribe);}
function registerFn(eventType,fnName,handler){$(document.body).on(eventType,"[fn]",function(e){var fnList=$(e.currentTarget).attr("fn").split(" ");if(fnList.indexOf(fnName)!=-1){return handler(e);}});}
function isFromLoginPage(){return!!getURIQuery(location.href,"fromLogin");}
function renderHomePage(progress,handler){var page=this;var $page=this.p;var $button=$page.find(".J_main_btn");$button.text(progress.isEnd()?"查看我的奖励":"立即接力 拿大红包");$button.off().click(handler);renderSubscribeSection($page);renderFooter($page);setShareConfig(progress);page.end(function(){renderScoreboard($page,progress,"animation");});}
function renderAnonymousPage(progress){return _pages.home.init(progress,function(){_login.login({rurl:setURIQuery(location.href,"fromLogin","yes")});});}
function renderMainPage(){var page=this;var $page=page.p;queryProgress(null,function(data){querySubscribeStatus(function(subscribed){_scope.subscribed=subscribed;if(isFromLoginPage()){subscribe();}
var progress=new Progress(data);setShareConfig(progress);if(_isWeChatEnv&&progress.env=="q"||!_isWeChatEnv&&progress.env=="w"){return showErrorPage("很抱歉您的账号已经参加过活动<br>同一用户只能参加一次");}
if(progress.isEnd()){return _pages.theEnd.init(progress);}
if(progress.isLimited()){return _pages.limited.init(progress);}
if(progress.line){return _pages.progress.init(progress);}
if(isFromLoginPage()){return _pages.game.init();}
_pages.home.init(progress,function(){_pages.game.init();});});});}
function renderSharePage(suin,hid){var page=this;var $page=page.p;var progress;var senderProgress;if(!suin||!hid){return navigateTo("#main",{replace:true});}
queryProgress(null,function(data){querySubscribeStatus(function(subscribed){_scope.subscribed=subscribed;if(isFromLoginPage()){subscribe();}
progress=new Progress(data);setShareConfig(progress);if(suin==progress.uin){return navigateTo("#main",{replace:true});}
if(_isWeChatEnv&&progress.env=="q"||!_isWeChatEnv&&progress.env=="w"){return showErrorPage("很抱歉您的账号已经参加过活动<br>同一用户只能参加一次");}
if(progress.isEnd()){return _pages.theEnd.init(progress);}
if(progress.isLimited()){return _pages.limited.init(progress);}
if(progress.kisslist.concat(progress.kissedlist).some(function(item){return item.uin==suin})){return _pages.alreadyKissed.init(progress,suin);}
queryProgress(suin,function(senderData){senderProgress=new Progress(senderData);if(senderProgress.isLimited()){return _pages.senderLimited.init(progress,senderProgress);}
if(hid!=senderProgress.hid){debugLog("hid不匹配");return showErrorPage();}
if(!senderProgress.line){return _pages.senderExpired.init(progress,senderProgress);}
setShareConfig(progress);_pages.game.init(senderProgress);});});});}
function renderProgressPage(progress){var page=this;var $page=page.p;var personalPrizeValue=getPersonalPrizeValue(progress.personal);var latestInteraction=progress.entrance.concat(progress.kisslist).sort(function(a,b){return b.time-a.time})[0]||{};var statusText=function(text){return text.replace("@contribution",convertToYuan(latestInteraction.add)).replace("@average",buildCardNumberHTML(convertToYuan(progress.average))).replace("@shortOf",progress.shortOf()).replace("@personalPrizeValue",personalPrizeValue).replace("@count",progress.kisslist.length+progress.kissedlist.length);};if(progress.line){if(progress.kisslist.length+progress.kissedlist.length>=5){return renderStatusPage(page,progress,{text:statusText("成功接力@count个好友 目前可分@average元红包<br>继续邀请好友变大红包"),picture:"status_img_09",buttons:[{text:"查看我的红包",fn:"myCoupon",wxptag:"38448.11.1",mqptag:"38449.10.1"},{text:"变大红包",fn:"share",wxptag:"38448.2.1",mqptag:"38449.1.1"}]});}
return renderStatusPage(page,progress,{text:statusText("成功接力@count个好友 红包正在变大<br>再邀@shortOf位好友即可分大红包"),picture:"status_img_10",buttons:[{text:"我要分大红包",fn:"share",wxptag:"38448.2.1",mqptag:"38449.1.1"}]});}
return _pages.gotNothing.init(progress);}
function renderGamePage(senderProgress){var page=this;var $page=this.p;var profile=senderProgress?{nickname:formatNickname(senderProgress.nick),avatar:senderProgress.pic}:null;$page.html(getTemplate("J_page_game_tpl").render({profile:profile}));page.end();GAME();window.onGameStart=function(){window.onGameStart=null;_promote.authorization();};window.onGameOver=function(score){window.onGameOver=null;var callback=function(error,data){if(error){return;}
_pages.result.init(data,new Progress(data));};if(senderProgress){requestKiss(senderProgress,score,callback);}
else{requestJoin(callback);}};}
function getContributionCount(list1,list2,list3){return[].concat(list1,list2,list3).filter(function(item){return item&&item.add;}).length;}
function renderResultPage(resultData,progress){var page=this;var $page=this.p;var personalPrizeValue=getPersonalPrizeValue(resultData.bingolev);var statusText=function(text){return text.replace("@contribution",convertToYuan(resultData.addmoney)).replace("@average",buildCardNumberHTML(convertToYuan(progress.average))).replace("@shortOf",progress.shortOf()).replace("@personalPrizeValue",personalPrizeValue).replace("@count",progress.kisslist.length+progress.kissedlist.length);};var statusData=(function(){if(personalPrizeValue){if(progress.line){if(progress.kisslist.length+progress.kissedlist.length>=5){return{text:statusText("接力成功 获得@personalPrizeValue元小红包<br>继续邀请好友 让红包变更大"),picture:"status_img_17",buttons:[{text:"我要让红包变更大",fn:"share",wxptag:"38448.2.1",mqptag:"38449.1.1"}]};}
return{text:statusText("接力成功 获得@personalPrizeValue元小红包<br>再邀@shortOf位好友接力 瓜分京东大红包"),picture:"status_img_17",buttons:[{text:"我要分大红包",fn:"share",wxptag:"38448.2.1",mqptag:"38449.1.1"}]};}
return{text:statusText("恭喜获得@personalPrizeValue元小红包<br>继续接力瓜分京东大红包"),picture:"status_img_04",buttons:[{text:"查看我的红包",fn:"myCoupon",wxptag:"38448.11.1",mqptag:"38449.10.1"},{text:"继续接力",fn:"play",wxptag:"38448.3.1",mqptag:"38449.2.1"}]};}
if(progress.line){if(progress.kisslist.length+progress.kissedlist.length>=5){return{text:statusText("成功接力@count个好友 目前可分@average元红包<br>继续邀请好友变大红包"),picture:"status_img_09",buttons:[{text:"查看我的红包",fn:"myCoupon",wxptag:"38448.11.1",mqptag:"38449.10.1"},{text:"变大红包",fn:"share",wxptag:"38448.2.1",mqptag:"38449.1.1"}]};}
if(getContributionCount(progress.entrance,progress.kisslist)==1){return{text:statusText("接力成功 京东红包变大！<br>再邀请@shortOf位好友接力 瓜分大红包"),picture:"status_img_03",buttons:[{text:"我要分大红包",fn:"share",wxptag:"38448.2.1",mqptag:"38449.1.1"}]};}
return{text:statusText("成功接力@count个好友 红包正在变大<br>再邀@shortOf位好友即可分大红包"),picture:"status_img_10",buttons:[{text:"我要分大红包",fn:"share",wxptag:"38448.2.1",mqptag:"38449.1.1"}]};}
return"GOT_NOTHING";})();if(statusData=="GOT_NOTHING"){return _pages.gotNothing.init(progress);}
renderStatusPage(page,progress,$.extend(statusData,{onPageShow:function(){if(resultData.addmoney){var money=convertToYuan(progress.money)*100;var addmoney=convertToYuan(resultData.addmoney)*100;renderScoreboard($page,$.extend({},progress,{money:money-addmoney}),false);showAddScore($page,convertToYuan(addmoney,0));setTimeout(function(){renderScoreboard($page,$.extend({},progress,{money:money}),"animation");},1600);return;}
renderScoreboard($page,progress,"animation");}}));}
function showAddScore($page,score){$page.find(".J_add_score").remove();var $score=$('<div class="addScore addScoreShow2s J_add_score">+'+score+'</div>');var $target=$page.find(".J_status_text");$score.insertAfter($target);}
function getPersonalPrizeValue(bingoLevel){if(bingoLevel==2||bingoLevel==4){return 5;}
if(bingoLevel==3||bingoLevel==5){return 10;}}
function renderExpiredPage(progress){return _pages.home.init(progress,function(){_pages.game.init();});}
function renderSenderExpiredPage(progress,senderProgress){var nickname=formatNickname(senderProgress.nick);var page=renderStatusPage(this,progress,{text:"你来晚了 "+nickname+"来不及接收你的吻",picture:"status_img_12",buttons:[{text:"自己去亲拿大红包",cmd:"gameOrProgress",wxptag:"38448.3.1",mqptag:"38449.2.1"}]});page.p.find("[cmd=gameOrProgress]").off().click(function(){if(progress.line){return _pages.progress.init(progress);}
return _pages.game.init();});}
function renderLimitedPage(progress){if(progress.line&&(progress.kisslist.length+progress.kissedlist.length>=5)){return renderStatusPage(this,progress,{text:"你已亲太多人<br>11月1日来分"+buildCardNumberHTML(convertToYuan(progress.average))+"元红包",picture:"status_img_13",buttons:[{text:"查看我的红包",fn:"myCoupon",wxptag:"38448.11.1",mqptag:"38449.10.1"},{text:"告诉小伙伴",fn:"share",wxptag:"38448.2.1",mqptag:"38449.1.1"}]});}
return renderStatusPage(this,progress,{text:"爱的太多 你需要休息",picture:"status_img_12",buttons:[{text:"去放松",fn:"to-mall",wxptag:"38448.8.1",mqptag:"38449.7.1"}]});}
function renderSenderLimitedPage(progress,senderProgress){var page=renderStatusPage(this,progress,{text:"这人太花心 不宜接吻",picture:"status_img_12",buttons:[{text:"去亲其他人",cmd:"gameOrProgress",wxptag:"38448.3.1",mqptag:"38449.2.1"}]});page.p.find("[cmd=gameOrProgress]").off().click(function(){if(progress.line){return _pages.progress.init(progress);}
return _pages.game.init();});}
function renderGotNothingPage(progress){return renderStatusPage(this,progress,{text:"没领到接力棒<br>红包与你擦肩而过 再接再厉",picture:"status_img_05",buttons:[{text:"重新接力拿大红包",fn:"play",wxptag:"38448.3.1",mqptag:"38449.2.1"}]});}
function renderAlreadyKissedPage(progress,suin){var item=progress.kisslist.concat(progress.kissedlist).filter(function(item){return item.uin==suin;})[0];var nickname=formatNickname(item&&item.nick||"");var shortOf=progress.shortOf();var text,buttons;if(progress.line){if(progress.kisslist.length+progress.kissedlist.length>=5){return renderStatusPage(this,progress,{text:"亲过了 目前可分"+buildCardNumberHTML(convertToYuan(progress.average))+"元<br>继续接力变大红包",picture:"status_img_07",buttons:[{text:"变大红包",fn:"share",wxptag:"38448.2.1",mqptag:"38449.1.1"}]});}
return renderStatusPage(this,progress,{text:"你已跟"+nickname+"接力过了<br>再邀"+shortOf+"位好友即可瓜分大红包",picture:"status_img_07",buttons:[{text:"我要分大红包",fn:"share",wxptag:"38448.2.1",mqptag:"38449.1.1"}]});}
return renderStatusPage(this,progress,{text:"你已跟"+nickname+"接力过了<br>继续接力变大红包",picture:"status_img_07",buttons:[{text:"继续接力",fn:"play",wxptag:"38448.3.1",mqptag:"38449.2.1"}]});}
function renderOopsPage(options){if(!options){options={};}
return renderStatusPage(this,new Progress(),{showLogo:true,showScoreboard:false,picture:"status_img_15",text:options.message||"靠嘴不行 买个礼物试试",buttons:[{text:"立即去买",fn:"to-mall",wxptag:"38448.8.1",mqptag:"38449.7.1"}]});}
function renderRefusePage(progress){return renderStatusPage(this,progress,{text:"靠嘴不行 买个礼物试试",picture:"status_img_15",buttons:[{text:"立即去买",fn:"to-mall",wxptag:"38448.8.1",mqptag:"38449.7.1"}]});}
function renderTheEndPage(progress){var page=this;if(progress.line&&(progress.kisslist.length+progress.kissedlist.length>=5)){return renderStatusPage(page,progress,{text:"恭喜你获得京东"+buildCardNumberHTML(convertToYuan(progress.average))+"元红包<br>多亲吻有益身心健康",picture:"status_img_16",buttons:[{text:"去逛逛",fn:"to-mall",wxptag:"38448.8.1",mqptag:"38449.7.1"}]});}
return renderStatusPage(page,progress,{text:"很遗憾 与你发生KISS人数太少<br>与奖金无缘",picture:"status_img_05",buttons:[{text:"去逛逛",fn:"to-mall",wxptag:"38448.8.1",mqptag:"38449.7.1"}]});}
function renderStatusPage(page,progress,statusData){var html=$("#J_page_status_tpl").html();var $page=page.p.html(html);statusData=$.extend({showFriendList:true,showSubscribeSection:true,showWalkthrough:true,showLogo:false,showScoreboard:true,onPageShow:function(){renderScoreboard($page,progress,"animation");}},statusData);renderStatusContent($page,progress,statusData);if(statusData.showFriendList){renderFriendList($page,progress);}
if(statusData.showSubscribeSection){renderSubscribeSection($page);}
if(statusData.showWalkthrough){renderWalkthrough($page);}
$page.find(".J_logo").toggle(statusData.showLogo);renderFooter($page);setShareConfig(progress);page.end(statusData.onPageShow);return page;}
function renderMyCouponPage(){var page=this;var $page=this.p;queryProgress(null,function(data){var progress=new Progress(data);var template=getTemplate("J_page_myCoupon_tpl");var viewData={};viewData.personalPrizeValue=getPersonalPrizeValue(progress.personal);viewData.average=progress.line&&progress.shortOf()<=0?convertToYuan(progress.average):null;viewData.progress=progress;$page.html(template.render(viewData));$page.find("[cmd=progress]").off().click(function(){_pages.progress.init(progress);});renderFooter($page);setShareConfig(progress);page.end();});}
function convertToYuan(value,digits){value=(value||0)/100;if(digits===0){return value.toFixed(0);}
return value.toFixed(2).replace(/0+$/,"").replace(/\.$/,"");}
function buildShareButtonText(progress){var count=progress.kisslist.length+progress.kissedlist.length;if(count==0){return"邀满5位好友，瓜分红包";}
if(count>=5){return"分享邀请好友";}
return"再邀请"+(5-count)+"位好友，瓜分红包";}
function buildCardNumberHTML(num){return' <span class="money">'+(num+"").replace(/./g,"<i>$&</i>")+'</span> '}
function leftPad(str,length){str=str+"";while(str.length<length){str="0"+str;}
return str;}
function renderStatusContent($page,progress,options){progress=progress||{};if(options.picture){options.picture="http://wqs.jd.com/promote/2015/kissme/images/status_img/"+options.picture+".png";}
options.scoreboardMessage="接力人数越多，红包金额越大";var $container=$page.find(".J_status_placeholder").empty();$container.html(getTemplate("J_status_content_tpl").render(options));$container.find(".J_status_text").toggleClass("mt120",!options.showScoreboard);}
function renderScoreboard($page,progress,animation){renderScoreboardNumber([{$elem:$page.find(".J_money_score"),value:"¥"+leftPad(convertToYuan(progress.money,0),11)},{$elem:$page.find(".J_attendance_score"),value:leftPad(progress.number,11)}],animation);}
function renderScoreboardNumber(list,animation){list.forEach(function(item){var $elem=item.$elem;var value=item.value;if(!$elem||$elem.length==0){return;}
$elem.addClass("dataCounter");$elem.attr({"HALO-NUMBER-SCROLL":"","diffrentiation":"1"});var $input=$elem.find("input");if(!$input.length){$input=$("<input type=hidden />").appendTo($elem);}
$input.val(value);});if(animation){NUMBERS.scroll();}
else{NUMBERS.show();}}
function renderWalkthrough($page){var html=getTemplate("J_walkthrough_tpl").render();var $container=$page.find(".J_walkthrough_placeholder");$container.html(html);$container.find(".J_link_walkthrough").prop("href",_isWeChatEnv?"http://wqs.jd.com/promote/2015/1111/strategy_wx.shtml?ptag=38448.6.1":"http://wqs.jd.com/event/juhuodong/double11/preHeat.shtml?ptag=38449.5.1#curTab=0&curScroll=366");}
function renderFooter($page){var $container=$page.find(".J_footer_placeholder");$container.html(getTemplate("J_footer_tpl").render({isWeChatEnv:_isWeChatEnv}));}
function renderFriendList($page,progress){var friendList=progress.kisslist.concat(progress.kissedlist);if(!friendList.length){return;}
friendList=friendList.sort(function(a,b){return b.score-a.score;}).map(function(item){return $.extend({message:(_FRIEND_MESSAGE_LIST[item.time%_FRIEND_MESSAGE_LIST.length]||"").replace("@score",item.score)},item);});var $container=$page.find(".J_friend_list_placeholder");var template=getTemplate("J_friend_list_tpl");$container.html(template.render({list:friendList,pic:progress.pic}));$container.find(".J_refresh").off().click(function(){removeProgressCache();queryProgress(null,function(data){var progress=new Progress(data);renderFriendList($page,progress);renderScoreboard($page,progress,"animation");_lazyLoadImg.lazyload({threshold:200});},{showLoading:true})});}
function removeProgressCache(){_progressCache={};}
function queryProgress(uin,callback,options){var cacheKey=uin||_promote.getUin();var callbackName="callbackQueryRelay";var showLoading=options&&options.showLoading;var url="http://wq.jd.com/pdc/relay/queryrelay?"+serializeParam({suin:uin,callback:callbackName,active:_activeId,_t:Math.random()});if(showLoading){showLoadingAnimation();}
window[callbackName]=function(data){if(showLoading){hideLoadingAnimation();}
_debug.log({cgi:url});_isUserLoggedIn=data.ret==0;if(data.ret==2){return _pages.anonymous.init(new Progress(data));}
if(data.ret!=0){return showErrorPage();}
_progressCache[cacheKey]=data;callback(data);};if(_progressCache[cacheKey]){return window[callbackName](_progressCache[cacheKey]);}
_loadJs.loadScript(url);}
function requestJoin(callback){if(_promote.authorization()===false){return;}
showLoadingAnimation();removeProgressCache();var url="http://wq.jd.com/pdc/relay/startrelay?"+serializeParam({callback:"callbackStartRelay",active:_activeId,t1:createT1Value(),_t:Math.random()});window.callbackStartRelay=function(data){hideLoadingAnimation();_debug.log({cgi:url});if(data.ret==0){return callback(null,data);}
var progress=new Progress(data);if(data.ret==2){_pages.anonymous.init(progress);}
else if(data.ret==14){_pages.limited.init(progress);}
else if(data.ret==16){showErrorPage("很抱歉您的账号已经参加过活动<br>同一用户只能参加一次");}
else if(data.ret==104){_pages.theEnd.init(progress);}
else if(data.ret==147){_pages.refuse.init(progress);}
else{showErrorPage();}
callback("ERROR",data);};_loadJs.loadScript(url);}
function requestKiss(senderProgress,score,callback){if(_promote.authorization()===false){return;}
showLoadingAnimation();removeProgressCache();var url="http://wq.jd.com/pdc/relay/kissrelay?"+serializeParam({callback:"callbackKissRelay",active:_activeId,suin:senderProgress.uin,hid:senderProgress.hid,score:score,t1:createT1Value(),_t:Math.random()});window.callbackKissRelay=function(data){hideLoadingAnimation();_debug.log({cgi:url});if(data.ret==0){return callback(null,data);}
var progress=new Progress(data);if(data.ret==2){_pages.anonymous.init(progress);}
else if(data.ret==13){_pages.senderLimited.init(progress,senderProgress);}
else if(data.ret==14){_pages.limited.init(progress);}
else if(data.ret==15){_pages.alreadyKissed.init(progress,senderProgress.uin);}
else if(data.ret==16){showErrorPage("很抱歉您的账号已经参加过活动<br>同一用户只能参加一次");}
else if(data.ret==104){_pages.theEnd.init(progress);}
else if(data.ret==147){_pages.refuse.init(progress);}
else{showErrorPage();}
callback("ERROR",data);};_loadJs.loadScript(url);}
function querySubscribeStatus(callback){var dfd=simpleDeferred(callback);setTimeout(function(){dfd.fire(false);},5000);if(!_isUserLoggedIn){return dfd.fire(false);}
_promote.querySubscribeActivityV2(_subscribeId[0],function(state){_scope.subscribed=state;dfd.fire(state);});}
function subscribe(){if(_isUserLoggedIn&&!_scope.subscribed){_scope.subscribed=true;_promote.subscribeActivityV2(_subscribeId,function(data){});}}
function renderSubscribeSection($page){if(!_scope.subscribed){var $container=$page.find(".J_subscribe_section_placeholder");$container.html(getTemplate("J_subscribe_section_tpl").render({}));}}
function createT1Value(){return _md5.hex_md5((_isWeChatEnv?"w":"q")+"10.66.120.70"+_promote.getUin());}
function reportSharing(shareType,shareId,idOwner,idctime){window.ShareReport=function(){};shareType=({sharetimeline:1,sendappmessage:2,shareqq:4,sharetopyq:1,sharetowx:2,sharetoqzone:3,sharetoqq:4})[shareType.toLowerCase()];_loadJs.loadScript("http://wq.jd.com/activetmp/helpdraw/sharereport?"+serializeParam({active:"wkissrun1111",hj:_isWeChatEnv?"w":"q",sharetype:shareType,shareid:shareId,idowner:idOwner,idctime:idctime,_t:Math.random()}));}
function setShareConfig(progress){progress=progress||new Progress({});var nickname=formatNickname(progress.nick||getNickname());var money=(function(){var money=Number(convertToYuan(progress.money,0));if(money>=100000000){return(money/100000000).toFixed(2)+"亿";}
if(money>=10000){return(money/10000).toFixed(2)+"万";}
return money+"";})();var config;if(progress.line&&!progress.isLimited()){config={title:_DEFAULT_SHARE_TITLE,desc:"亲"+nickname+"一口，参与瓜分"+money+"元大奖",link:setURIQuery(_DEFAULT_SHARE_LINK,"hash","share_"+progress.uin+"_"+progress.hid),img_url:_DEFAULT_SHARE_IMG_URL2};}else{config={title:_DEFAULT_SHARE_TITLE,desc:Number(money)?"京东大奖金额已达"+money+"元 嘴甜钱多速来":"全民亲亲拿红包",link:_DEFAULT_SHARE_LINK,img_url:_DEFAULT_SHARE_IMG_URL};}
if(_debug.isdebug()){config.title="【内测勿外发】"+config.title;config.desc="【内测勿外发】"+config.desc;config.link=setURIQuery(config.link,"debug",1);}
config.shareCallback=function(shareType,state){hideAllActiveDialog();if(state=="ok"){if(progress.line){return reportSharing(shareType,progress.hid,progress.uin,null);}
return reportSharing(shareType,null,null,null);}};$.extend(window.shareConfig,config);}
function navigateToMallPage(){location.href=_isWeChatEnv?"http://wqs.jd.com/promote/2015/1111/strategy_wx.shtml?ptag=38448.8.1":"http://wqs.jd.com/event/juhuodong/double11/preHeat.shtml?ptag=38449.7.1#curTab=0&curScroll=366";}
function showRuleDialog(){var $dialog=showCustomDialog({templateId:"J_dialog_rule_tpl"});ezscroll.bindscroll($dialog.find("#rulecontent")[0],true);return $dialog;}
function showShareGuideDialog(){return showCustomDialog({templateId:"J_dialog_share_guide_tpl"});}
function showGameOverDialog(){return showCustomDialog({templateId:"J_dialog_game_over_tpl"});}
function showErrorPage(message){return _pages.oops.init({message:message||"靠嘴不行 买个礼物试试"});}
function showErrorDialog(message,debugMessage,callback){if(message==null){message="热吻场面激烈，缓缓一起嗨";}
if($.isFunction(debugMessage)){callback=debugMessage;debugMessage="";}
if(_debug.isdebug()){message+=" "+debugMessage;}
return showWarningDialog(message,callback);}
function showWarningDialog(message,callback){return showCustomDialog({templateId:"J_dialog_warning_tpl",message:message,callback:callback});}
function showSuccessDialog(message,callback){return showCustomDialog({templateId:"J_dialog_success_tpl",message:message,callback:callback});}
function hideAllActiveDialog(){$(".J_dialog").each(function(){$(this).remove();this.callback&&this.callback.call(null,"close");});}
function showCustomDialog(options){hideAllActiveDialog();var callback=options.callback||function(){};var template=getTemplate(options.templateId);var html=template.render(options);var $dialog=$("<div></div>").html(html);$dialog.addClass("J_dialog");$dialog.appendTo("body");$dialog.get(0).callback=callback;$dialog.find("[command]").off().click(function(e){$dialog.get(0).callback=null;$dialog.remove();callback($(e.currentTarget).attr("command"));});return $dialog;}
function showLoadingAnimation(){$("#t_loading").show();}
function hideLoadingAnimation(){$("#t_loading").hide();}
function serializeParam(obj){for(var i in obj){if(obj.hasOwnProperty(i)&&obj[i]==null){delete obj[i];}}
return $.param(obj);}
function getTemplate(id){return _tplParse.Template({tpl:$("#"+id).html()});}
function getNickname(){return _cookie.get("wx_nickname")||_cookie.get("nickname")||"京东用户";}
function formatNickname(nickname){if(!nickname){return"";}
var text=_xss.xss((nickname+"").replace(/(�\d)+/g,"[img]"),"html");var a=document.createElement("a");a.innerHTML=text;return a.innerText;}
function refreshPage(){removeProgressCache();_view.rehash();}
function Progress(data){if(!data){data={};}
this.now=data.now||0;this.uin=data.uin||"";this.nick=data.nick||"";this.pic=data.pic||"";this.env=data.env||"";this.hid=data.hid||"";this.line=data.line||"";this.personal=data.personal||0;this.number=data.number||0;this.money=data.money||0;this.average=data.average||0;this.entrance=data.entrance||[];this.kisslist=data.kisslist||[];this.kissedlist=data.kissedlist||[];}
$.extend(Progress.prototype,{isEnd:function(){return new Date(this.now*1000)>new Date("2015/11/1");},isLimited:function(){return(this.entrance.length+this.kisslist.length+this.kissedlist.length)>=50;},isJoined:function(){return(this.entrance.length+this.kisslist.length+this.kissedlist.length)>0;},getLatestContribution:function(){var list=this.entrance.concat(this.kisslist);list=list.filter(function(item){return item.add;});list=list.sort(function(a,b){return b.time-a.time;});return list[0]&&list[0].add;},shortOf:function(){return Math.max(5-this.kisslist.length-this.kissedlist.length,0);}});function navigateTo(hash,options){window.onhashchange=function(){_view.rehash();};if(!options){options={};}
var oldHash=location.hash.replace(/^#/,"");var newHash=hash.replace(/^#/,"");if(options.replace===true){location.replace("#"+newHash);}else{location.hash="#"+newHash;}
if(newHash==oldHash){_view.rehash();}}
function debugLog(message){try{if(_debug.isdebug()){console.log(message);window.logs.push(message);}}catch(e){}}
function simpleDeferred(cb){var list=cb?[cb]:[];var memory=[];var isFired=false;return{fire:function(){if(!isFired){isFired=true;memory=[].slice.call(arguments);list.forEach(function(cb){cb.apply(null,memory);});}},add:function(cb){if(isFired){cb.apply(null,memory);}
else{list.push(cb);}}}}
function loadImages(list,timeout,callback){var dfd=simpleDeferred(callback);if(!list||list.length==0){return dfd.fire();}
var total=list.length;var loaded=0;setTimeout(function(){dfd.fire();},timeout);list.forEach(function(src){var img=new Image();img.onload=img.onerror=function(){if(++loaded==total){dfd.fire();}};img.src=src;});}});
define('wg.market.tplparser',function(require,exports,module){function Template(options,helper){return this instanceof Template?this.init(options,helper):new Template(options,helper);}
Template.parse=function(self){if(!self.__lines){self.__lines=[];}
var temp,i=0;if(self.right=="}}"){temp=self.tpl.replace(/(}})([^}])/g,"$1 $2").split(new RegExp('(?='+self.left+')|('+self.right+')(?:[^}])'))}else{temp=self.tpl.split(new RegExp('(?='+self.left+')|('+self.right+')'))}
each(filter(temp,function(k,v){return!(new RegExp(self.right)).test(v);}),function(k,v){if((new RegExp('^'+self.left)).test(v)){v=v.replace(/@/g,'data.');if(new RegExp('^'+self.left+'\s*=').test(v)){self.body.push(v.replace(new RegExp('^'+self.left+'\s*=(.*)'),'\ttemp.push($1);\n'));}else{self.body.push(v.replace(new RegExp('^'+self.left+'\s*(.*)'),'$1\n'));}}
else{self.__lines[i]=v;self.body.push('\ttemp.push(this.__lines['+(i++)+']);\n');}})
return self.body.join("");};Template.prototype={init:function(options,helper){this.tpl=options.tpl;this.left=options.left||"<%";this.right=options.right||"%>";this.body=[];this.compiled=null;this.data=options.data;this.helper=helper;},compile:function(){if(!this.compiled){var helper=[];if(this.helper){for(var h in this.helper){helper.push('var '+h+'=this.helper["'+h+'"]');}}
this.compiled=new Function("data",helper.join(";")+';var temp=[];\n'+Template.parse(this)+'\n return temp.join("");');}
return this.compiled;},render:function(data){return this.compile().call(this,data||this.data);}}
function filter(a,fn){var temp=[];for(var i=0,l=a.length;i<l;i++){a[i]&&fn.call(a,i,a[i])&&temp.push(a[i]);}
return temp;}
function each(a,fn){var temp=[];for(var i=0,l=a.length;i<l;i++){fn.call(a,i,a[i]);}
return a;}
exports.Template=Template;});
define('wg.promote',function(require,exports,module){var $=require("zepto");var fastclick=require("fastclick");var debug=require("wg.debug");var views=require("wg.views");var _url=require("url");var cookie=require("cookie");var autoLoadImages=require("lazyLoad");var qqRemind=require("qqRemind");var xss=require("wd.tool.xss");var login=require("login");var _ua=navigator.userAgent.toLowerCase();var env=(function(){return!/mobile|android/.test(_ua)?"pc":_ua.indexOf("micromessenger")>-1?"weixin":/qq\/([\d\.]+)*/.test(_ua)||/qzone\//.test(_ua)?"qq":/jzyc\/\d\.\d/.test(_ua)?"jzyc":"mobile";})();var clickEvent=env=="pc"?"click":"tap";var pageview=null;var initialTime=_url.getUrlParam("time")?new Date(_url.getUrlParam("time")):new Date(),fixtime=new Date();var isInitMusuc=false;var musicObj={};init();bindEvent();exportsArgu();exportsFunc();function init(){fastclick(document.body);window.cgiData={};}
function bindEvent(){$(".msgbox [tag=close]").live(clickEvent,function(){$(this).parents(".msgbox").hide();});$("[goto]").live(clickEvent,function(){var target=$(this).attr("goto");target&&window.scroll(0,$(target).offset().top);});$("[tag=log]").live(clickEvent,function(){debug.showLog();});$("[hash]").live(clickEvent,function(){gohash($(this).attr("hash"));});$("[link]").live(clickEvent,function(){var link=$(this).attr("link");if(link){if(link.indexOf("#")==0){gohash(link);}else{location.href=link;}}});$("[tag=share]").live(clickEvent,function(){if(env=="weixin"){$($(this).attr("view-data")).show();}else{var o={share_url:window.shareConfig&& window.shareConfig.link,title:window.shareConfig&&window.shareConfig.title,desc:window.shareConfig&&window.shareConfig.desc,image_url:window.shareConfig&&window.shareConfig.img_url,share_type:0,back:true};if(window.mqq&&mqq.ui&&mqq.ui.shareMessage){mqq.ui.shareMessage(o,function(result){window.shareConfig&&window.shareConfig.shareCallback&&window.shareConfig.shareCallback("ShareToQQ",result.retCode==0?"ok":"cancel");});}else{debug.loadScript("http://pub.idqqimg.com/qqmobile/qqapi.js?_bid=152",{onLoad:function(){mqq.ui.shareMessage(o,function(result){window.shareConfig&&window.shareConfig.shareCallback&&window.shareConfig.shareCallback("ShareToQQ",result.retCode==0?"ok":"cancel");});}});}}});$("[tag=open]").live(clickEvent,function(){$($(this).attr("view-data")).show();});$("[tag=hide]").live(clickEvent,function(){$($(this).attr("view-data")?$(this).attr("view-data"):this).hide();});$("[tag=follow]").live(clickEvent,function(){if(env=="qq"){(function(uin){if(window.mqq&&mqq.ui&&mqq.ui.showOfficalAccountDetail){mqq.ui.showOfficalAccountDetail({uin:uin,showAIO:true});}else{debug.loadScript("http://pub.idqqimg.com/qqmobile/qqapi.js?_bid=152",{onLoad:function(){mqq.ui.showOfficalAccountDetail({uin:uin,showAIO:true});}});}})(2712384158);}else{window.showWxFollowingJdDialog&&window.showWxFollowingJdDialog({title:$(this).attr("view-data-title")?$(this).attr("view-data-title"):"<div></div>",desc:$(this).attr("view-data-desc")?$(this).attr("view-data-desc"):"需要关注\"京东JD.COM\"服务号，<br>才能及时获取活动提醒哦！",qrcode:$(this).attr("view-data-qrcode")?$(this).attr("view-data-qrcode"):"http://wqs.jd.com/promote/2015/common-images/qrcode_wx_following_jd.jpg",});}});$("body").on("longTap dblclick",function(){if(debug.isdebug()){debug.showLog();}});}
function gohash(hashvalue){window.onhashchange=function(){exports.pageview.rehash();}
location.hash=hashvalue;}
function addRd(url,rd){if(!rd){return url;}
url=url.replace(/？/g,"?");var reg=/ptag[=,]\d+\.\d+\.\d+/i,hasQuery=/\?/.test(url),hasAnchor=url.indexOf('#')>-1;if(reg.test(url)){url=url.replace(reg,"PTAG="+rd);}else{url=hasAnchor?url.replace("#",(hasQuery?"&":"?")+"PTAG="+rd+"#"):(url+(hasQuery?"&":"?")+"PTAG="+rd);}
return url; }
function exportsArgu(){exports.env=env;exports.clickEvent=clickEvent;exports.extraUrl=(function(){return(debug.isdebug()?"&debug=1":"")+(env=="qq"?"&_wv=50177":"");})();}
function exportsFunc(){exports.showDialog=function(dialog,html,callback,btntext){if(!dialog||!html)return;dialog=typeof dialog=='string'?$('#'+dialog):dialog.length?dialog:$(dialog);$(".alertbox").remove();var _ele=document.createElement("div");_ele.className="alertbox";_ele=$(_ele);$("body").append(_ele.html(dialog.html()).hide());_ele.find("[tag=delete]").off().on(clickEvent,function(){_ele.remove();callback&&callback();});_ele.find("[tag=close]").off().on(clickEvent,function(){_ele.remove();});_ele.find("*").each(function(index,ceil){if(typeof html=="string"){if($(ceil).html()=="{text}"){$(ceil).html(html);}
if($(ceil).html()=="{btntext}"){$(ceil).html(btntext?btntext:"确定").off().on(clickEvent,function(){_ele.remove();callback&&callback();});}}else if(html instanceof Array){html.forEach(function(cceil){if($(ceil).html()==cceil.tag){$(ceil).html(cceil.text).off().on(clickEvent,function(){if(cceil.handler){cceil.handler();_ele.remove();}});}});}});_ele.show();return _ele;}
exports.views=function(opt){exports.pageview=views.views({nodeid:opt.nodeid,delayScroll:opt.delayScroll,initFunc:opt.initFunc,eventFunc:opt.eventFunc,changeEffect:opt.changeEffect,freshFunc:opt.freshFunc,eventCore:function(){opt.eventCore&&opt.eventCore.call(this);autoLoadImages.autoLoadImage();exports.addPTAG();this.p.find("[isshow]").each(function(index,ceil){var that=this;caculate($(that).attr("isshow"),function(ret){if(ret){$(that).show();}else{$(that).hide();}})});}});}
exports.getNowTime=function(){return new Date(initialTime.getTime()+(new Date()-fixtime));}
exports.setShare=function(obj){shareConfig&&$.extend(shareConfig,obj);}
exports.addRd=addRd;exports.addPTAG=function(){$("[wxptag],[mqptag]").forEach(function(item,index){var item=$(item);if(env=="weixin"&&item.attr("wxptag")){item.attr("ptag",item.attr("wxptag"));}
if(env=="qq"&&item.attr("mqptag")){item.attr("ptag",item.attr("mqptag"));}
var link=item.attr("href");if(!link){link="javascript:;";}
if(/^http:/.test(link.trim())||/(?:\.[sx]?html$)|(?:\.htm$)/.test(link.trim())){item.attr("href",addRd(link,(env=="weixin"?item.attr("wxptag"):item.attr("mqptag"))));}});}
exports.getUin=function(){var uin=cookie.get("wg_uin")||cookie.get("uin")||cookie.get('uin_cookie')||cookie.get('pt2gguin')||cookie.get('o_cookie')||cookie.get('luin')||cookie.get('buy_uin');return uin?parseInt(uin.replace("o",""),10):"";}
exports.autoLoadImage=function(){autoLoadImages.autoLoadImage();}
exports.getMarketData=function(options){var cgi="http://wq.jd.com/mcoss/mmart/show?callback=getMarketBack&_t="+Math.round(new Date().getTime()/60000);var opt={"actid":"","areaid":[],"options":1,"pc":100,"callback":null,}
for(var k in options){opt[k]=options[k];}
if(!opt.actid||opt.areaid.length==0)return;cgi=cgi+"&actid="+opt.actid+"&areaid="+opt.areaid.join(",")+"&options="+opt.options+"&pc="+opt.pc;var key=opt.areaid.concat(opt.actid).join("_");window.getMarketBack=function(data){window.cgiData[key]=data;opt.callback&&opt.callback(data);}
if(window.cgiData[key]){window.getMarketBack(window.cgiData[key]);}else{debug.loadScript(cgi);}}
exports.getFocusBiData=function(gids,pcs,callback){if(gids.constructor!==Array||pcs.constructor!==Array)return;if(gids.length===0||pcs.length===0)return;var cgi="http://wq.jd.com/mcoss/focusbi/show?gids="+gids.join("|")+"&pcs="+pcs.join(",")+"&callback=getFocusBiback&_t="+Math.random();var key=gids.join("|");window.getFocusBiback=function(data){window.cgiData[key]=data;callback&&callback(data);}
if(window.cgiData[key]){window.getFocusBiback(window.cgiData[key]);}else{debug.loadScript(cgi);}}
exports.getCptData=function(options){var opt={"platform":1,"id":[],"pagesize":100,"category":"","callback":null,}
for(var k in options){opt[k]=options[k];}
if(opt.id.constructor!==Array||opt.id.length===0)return;if(opt.platform===1){var cgi="http://wq.jd.com/mcoss/focuscpt/wxshow?";}else{var cgi="http://wq.jd.com/mcoss/focuscpt/qqshow?";}
cgi=cgi+"id="+opt.id.join("|")+"&tpl=3&pagesize="+opt.pagesize+(opt.category?"&category="+opt.category:"")+"&callback=getCptback&_t="+Math.random();var key=opt.id.join("|");window.getCptback=function(data){window.cgiData[key]=data;opt.callback&&opt.callback(data);}
if(window.cgiData[key]){window.getCptback(window.cgiData[key]);}else{debug.loadScript(cgi);}}
exports.getFixedNick=function(nick){var _t=xss.xss((nick||cookie.get("wx_nickname")||cookie.get("nickname")||"京东用户").replace(/(�\d)+/g,"[img]"),"html");var a=document.createElement("a");a.innerHTML=_t;return a.innerText;}
exports.authorization=function(){if(JD.device.scene=="weixin"&&(!cookie.get("wx_nickname")||cookie.get("wx_nickname")=='京东用户')){location.href="http://wq.jd.com/mlogin/wxv3/Login_BJ?appid=1&rurl="+encodeURIComponent(location.href)+"&scope=snsapi_userinfo";return false;}}
exports.queryAwardPool=function(actid,callback){if(!actid)return;var cgi="http://wq.jd.com/active/queryprizesstatus?active="+actid+"&_t="+Math.random();var key="queryprizesstatus_"+actid;window.QueryPrizesStatus=function(data){if(data.retcode==0){window.cgiData[key]=data;if(data.active==actid){callback&&callback(data.prizes);}}}
if(window.cgiData[key]){window.QueryPrizesStatus(window.cgiData[key]);}else{debug.loadScript(cgi);}}
exports.queryBingos=function(actid,callback){if(!actid)return;var cgi="http://wq.jd.com/active/querybingo?active="+actid+"&_t="+Math.random();var key="querybingo_"+actid;window.BingoCallBack=function(data){debug.log({cgi:url});if(data.errorCode==0&&data.active==actid){window.cgiData[key]=data;callback&&callback(data.bingos);}else if(data.errorCode==2){login.login();}}
if(window.cgiData[key]){window.BingoCallBack(window.cgiData[key]);}else{debug.loadScript(cgi);}}
exports.draw=function(callback,active,level){var url='http://wq.jd.com/active/active_draw?active='+active+(level?("&level="+level):"")+'&ext=hj:'+(env=='weixin'?'w':'q');window.ActiveLotteryCallBack=function(data){debug.log({cgi:url});if(data.ret==2){login.login();}else{callback&&callback(data);}};debug.loadScript(url+'&_t='+Math.random());}
exports.submitInfo=function(biztype,value,callback){var url="http://wq.jd.com/appointment/CommonAppointSubmit?biztype="+biztype+"&msgcontent="+encodeURIComponent(value)+"&platform="+(env=="qq"?"1":"2")+"&callback=SubmitInfo_CallBack";window.SubmitInfo_CallBack=function(data){debug.log({cgi:url});if(data.iRet==9999){login.login();}else{callback(data);}}
debug.loadScript(url+"&_t="+Math.random());}
exports.queryInfo=function(biztype,callback){if(biztype instanceof Array){var url="http://wq.jd.com/appointment/CommonBatchAppointQuery?biztype="+biztype.join("|")+"&callback=QueryInfo_CallBack";}else{var url="http://wq.jd.com/appointment/CommonAppointQuery?biztype="+biztype+"&callback=QueryInfo_CallBack";}
var cacheFlag="appoint_"+(biztype instanceof Array?biztype.join("|"):biztype);window.QueryInfo_CallBack=function(data){debug.log({cgi:url});if(data.iRet==9999){login.login();}else if(data.iRet==0){cgiData[cacheFlag]=data;callback(data);}else{callback(data);}}
if(cgiData[cacheFlag]){window.QueryInfo_CallBack(cgiData[cacheFlag]);}else{debug.loadScript(url+"&_t="+Math.random());}}
exports.showUserForm=function(dialog,id){if(!dialog){return;}
dialog=typeof dialog=='string'?$('#'+dialog):dialog.length?dialog:$(dialog);var errInfo=dialog.find('[tag=errInfo]'),name=dialog.find('[tag=fName]'),phone=dialog.find('[tag=fPhone]'),address=dialog.find('[tag=fAddress]'),msg,obj,info,form;dialog.find('[tag=cancel],[tag=close]').off().on(clickEvent,function(){dialog.hide();});errInfo.length&&errInfo.html('&nbsp;');name.val('');phone.val('');address.val('');exports.queryInfo(id,function(data){if(data.iRet==0&&data.sMsgContent){msg=data.sMsgContent.replace(/\&\#92\;/g,'').replace(/\&quot\;/g,'\"').replace(/\&\#44\;/g,'\,');obj=JSON.parse(msg);name.val(obj.name||'');phone.val(obj.phone||'');address.val(obj.address||'');}});dialog.find('[tag=confirm]').off().on(clickEvent,function(event){var nameVal=$.trim(name.val()),phoneVal=$.trim(phone.val()),addressVal=$.trim(address.val());if(!nameVal){if(errInfo.length){errInfo.html('联系人不能为空！');}else{alert('联系人不能为空！');}
name.focus();return false;}
if(!phoneVal){if(errInfo.length){errInfo.html('电话号码不能为空！');}else{alert('电话号码不能为空！');}
phone.focus();return false;}
if(!/^((13[0-9]|15[0-9]|18[0-9])([0-9]{8})|((86)?(-)?(0[0-9]{2,3})?(-)?([0-9]{7,8})(-)?([0-9]{3,5})?))$/.test(phoneVal)){if(errInfo.length){errInfo.html('号码格式不正确！');}else{alert('号码格式不正确！');}
phone.focus();return false;}
if(!addressVal){if(errInfo.length){errInfo.html('详细地址不能为空！');}else{alert('详细地址不能为空！');}
address.focus();return false;}
errInfo.length&&errInfo.html('&nbsp;');info={name:nameVal,phone:phoneVal,address:addressVal};form=JSON.stringify(info).replace(/\"/g,'\\\"');exports.submitInfo(id,form,function(result){if(result.iRet==0){cgiData['appoint_'+id]=null;alert('提交成功！');}else{alert('提交失败！');}
dialog.hide();});});dialog.show();};exports.subscribeProductBatch=function(list,callback){window.addEventListener("message",function(e){if(!callback||e.data.type!="bookAlert"){return;}
var text=decodeURIComponent(e.data.ret||""),result={};if(text==-1||text==null){text="";}
text.split(",").forEach(function(item){var splits=item.split("|");result[splits[0]]=splits[1]=="0"});callback(result);callback=null;});var $iframe=$('<iframe style="display:none;"></iframe>').appendTo("body");$iframe.appendTo("body");$iframe.prop("src","http://wq.jd.com/bases/presale/msubscribe?"+$.param({usersource:env=="weixin"?"1":"2",returl:"http://wqs.jd.com/halo/bookalert.html",skulist:list.join(",")}));setTimeout(function(){if(callback){callback({});callback=null;}},6000);};exports.querySubscribeProductBatch=function(list,callback){window.psCallback=function(data){var result={};(data.subscribeResultList||[]).forEach(function(item){result[item.skuId]=item.subscribeResult=="0";});callback(result,data);};debug.loadScript("http://wq.jd.com/bases/presalequery/querysubscriberesult?"+$.param({slist:list.join(","),source:env=="weixin"?"1":"2",type:1,_t:Math.random()}));};exports.subscribeProduct=function(skuid,cosspresaleid,globalpresaleid,salestarttime,callback){exports.subscribeProductBatch([[skuid,cosspresaleid,globalpresaleid,salestarttime].join("!")],function(data,rawResp){callback(!!data[skuid],rawResp);});};exports.subscribeProductBySku=function(skuid,callback){queryPresaleSku(skuid,function(data){if(data.retCode==0){cgiData["skuyuyue_"+skuid]=data;exports.subscribeProduct(skuid,"0",data.data.global_presale_id,Math.round(new Date(data.data.sale_start_time.replace(/-/g,"/")).getTime()/1000),callback);}else{callback(false);}});}
exports.querySubscribeProduct=function(globalpresaleid,skuid,callback){exports.querySubscribeProductBatch([globalpresaleid+":"+skuid],function(data,rawResp){callback(!!data[skuid],rawResp);});};exports.querySubscribeProductBySku=function(skuid,callback){queryPresaleSku(skuid,function(data){if(data.retCode==0){exports.querySubscribeProductBatch([data.data.global_presale_id+":"+skuid],function(data,rawResp){callback(!!data[skuid],rawResp);});}else{callback(true);}});};exports.subscribeActivityInMqq=function(options,callback){qqRemind.set(options,function(data){callback(data);});};exports.querySubscribeActivityInMqq=function(itmeid,callback){qqRemind.query({itmeid:itmeid},function(data){var subscribed=(data.data||[]).some(function(item){return item.state==1;});callback(subscribed,data);});};exports.subscribeActivityInWechat=function(activeId,callback){window.callbackSubscribeActiveJ=function(data){callback(data.errNo==0,data);};debug.loadScript("http://wq.jd.com/bases/presale/subscribeactivej?"+$.param({activeid:activeId,callback:"callbackSubscribeActiveJ",_t:Math.random()}));};exports.querySubscribeActivityInWechat=function(activeId,callback){window.psCallback=function(data){var subscribed=(data.subscribeResultList||[]).some(function(item){return item.subscribeResult=="0";});callback(subscribed,data);};debug.loadScript("http://wq.jd.com/bases/presalequery/querysubscriberesult?"+$.param({slist:activeId+":2",source:env=="weixin"?"1":"2",type:2,_t:Math.random()}));};exports.subscribeProductV2=function(skuids,callback){if(!skuids instanceof Array&&typeof skuids!="string"&&typeof skuids!="number"){return;}
var skuids=skuids instanceof Array?skuids:[skuids];window.subProductv2Call=function(data){if(data.retCode){callback(false);}else{var _ret={},_lists=data.list;skuids.forEach(function(ceil){var _o=_lists.filter(function(cceil){return cceil.skuId==ceil;})[0];_ret[ceil]={replyCode:_o.replyCode,replyMsg:_o.replyMsg,saleStartTime:_o.saleStartTime,res:_o.replyCode==9||_o.replyCode==6||_o.replyCode==7||_o.replyCode==8};});callback(_ret);}}
debug.loadScript("http://wq.jd.com/bases/yuyue/item?skuId="+skuids.join(",")+"&dataType=1&callback=subProductv2Call&_t="+Math.random());}
exports.querySubscribeProductV2=function(skuid,callback){queryPresaleSku(skuid,function(data){if(data.retCode==0){window.querysubProductv2callback=function(data){if(data.retCode==0){callback(true);}else{callback(false);}}
debug.loadScript("http://wq.jd.com/bases/yuyue/ItemResult?yuyueId="+data.data.global_presale_id+"&callback=querysubProductv2callback&_t="+Math.random());}else{callback(true);}});}
exports.subscribeActivityV2=function(actives,callback){if(!actives instanceof Array&&typeof actives!="string"&&typeof actives!="number"){return;}
var actives=actives instanceof Array?actives:[actives];window.subActivityv2Callback=function(data){if(data.retCode){callback(false);}else{var _ret={},_lists=data.list;actives.forEach(function(ceil){var _o=_lists.filter(function(cceil){return cceil.activeId==ceil;})[0];_ret[ceil]={replyCode:_o.replyCode,replyMsg:_o.replyMsg,res:_o.replyCode==0||_o.replyCode==10006};});callback(_ret);}}
debug.loadScript("http://wq.jd.com/bases/yuyue/active?activeId="+actives.join(",")+"&callback=subActivityv2Callback&_t="+Math.random());}
exports.querySubscribeActivityV2=function(active,callback){window.querysubActivityv2callback=function(data){if(data.retCode==0){callback(true);}else{callback(false);}}
debug.loadScript("http://wq.jd.com/bases/yuyue/activeResult?activeId="+active+"&callback=querysubActivityv2callback&_t="+Math.random());}
exports.soundLoad=function(soundlist,baseurl,callback){try{createjs;doafterLoad();}catch(e){debug.loadScript("http://wqs.jd.com/promote/resource/js/sound.js",{onLoad:function(){doafterLoad();}});}
function doafterLoad(){if(!isInitMusuc){isInitMusuc=true;if(!createjs.Sound.initializeDefaultPlugins()){return;}
createjs.Sound.alternateExtensions=["mp3"];}
var _count=0;for(var i=0,len=soundlist.length;i<len;i++){if(!musicObj[soundlist[i]]){musicObj[soundlist[i]]=1;var _t=[{id:soundlist[i],src:soundlist[i]+".mp3?t=5"}];createjs.Sound.registerSounds(_t,baseurl);}else if(musicObj[soundlist[i]]&&musicObj[soundlist[i]]==2){_count++;}}
if(_count==soundlist.length){callback&&callback();}else{createjs.Sound.on("fileload",function(){_count++;musicObj[arguments[0].id]=2;if(_count==soundlist.length){callback&&callback();}});}}};exports.soundPlay=function(sound,opt){if(musicObj[sound]==2){createjs.Sound.play(sound,opt);}else{if(typeof console=="object"){console.log(sound+"还未加载");}}}}
function caculate(string,callback){var nowcaculate=string.match(/\([^\(\)]+\)/)&&string.match(/\([^\(\)]+\)/)[0].replace(/[\(\)]/g,"")||string;if(nowcaculate==string){callback&&callback(handlerValue(string));}else{string=string.replace(/\([^\(\)]+\)/,"nowcaculate");caculate(nowcaculate,function(ret){string=string.replace("nowcaculate",ret);caculate(string,callback);});}
function handlerValue(string){var cacuStr=string.split(/\|\||&&/g);var symbols=string.match(/\|\||&&/g);var _t="";cacuStr.forEach(function(ceil,index){var ceilCacuStr=ceil.split(/=|>(?!=)|<(?!=)|>=|<=/);var ceilSymbols=ceil.match(/=|>(?!=)|<(?!=)|>=|<=/);if(!ceilSymbols){if(ceilCacuStr[0]=="isdebug"){if(debug.isdebug()){_t+="true";}else{_t+="false";}}else{if(typeof cacuData=="undefined"){_t+="false";}else{_t+=!!cacuData[ceilCacuStr[0]];}}}else{if(ceilSymbols[0]=="="&&ceilCacuStr[0]=="env"){_t+=env==ceilCacuStr[1];}else{dooperator(ceilSymbols[0],ceilCacuStr);}}
_t+=symbols&&symbols[index]?symbols[index]:"";});return eval(_t);function dooperator(operator,ceilCacuStr){if(ceilCacuStr[0]=="time"){switch(operator){case">":_t+=exports.getNowTime()>new Date(ceilCacuStr[1]);break;case"<":_t+=exports.getNowTime()<new Date(ceilCacuStr[1]);break;case"=":_t+=exports.getNowTime()==new Date(ceilCacuStr[1]);break;case">=":_t+=exports.getNowTime()>=new Date(ceilCacuStr[1]);break;case"<=":_t+=exports.getNowTime()<=new Date(ceilCacuStr[1]);break;default:_t+="false";}}else{if(typeof cacuData=="undefined"){_t+="false";}else{var _value=cacuData[ceilCacuStr[0]]||window[ceilCacuStr[0]];if(_value){switch(operator){case">":_t+=_value>ceilCacuStr[1];break;case"<":_t+=_value<ceilCacuStr[1];break;case"=":_t+=_value==ceilCacuStr[1];break;case">=":_t+=_value>=ceilCacuStr[1];break;case"<=":_t+=_value<=ceilCacuStr[1];break;default:_t+="false";}}else{_t+="false";}}}}}}
function queryPresaleSku(skuid,callback){var url="http://wq.jd.com/bases/presalesku/querypresalesku?callback=yushouWGCB&skuid="+skuid+"&source=2";window.yushouWGCB=function(data){callback&&callback(data);}
if(cgiData["skuyuyue_"+skuid]){window.yushouWGCB(cgiData["skuyuyue_"+skuid]);}else{debug.loadScript(url+"&_t="+Math.random());}}});
define('wg.views',function(require,exports,module){var $=require("zepto");var _url=require("url");var pageStatusKey="wg.views_"+location.pathname;var pageStatusData=JSON.parse(sessionStorage.getItem(pageStatusKey))||{}
var statusRecorder=null;function views(opt){if(typeof opt!="object"){opt={};}
this._firstIn=true;this._option={nodeid:"",delayScroll:0,initFunc:empty(),eventFunc:empty(),freshFunc:empty(),eventCore:empty(),changeEffect:function(tohide,toshow,callback,isnew){tohide.css("opacity",0);setTimeout(function(){tohide.hide().css("opacity","1");toshow.show();callback&&callback();},300);}};this.hLength=history.length;this.hRoute=[];for(var i in this._option){this._option[i]=opt[i]?opt[i]:this._option[i];}
this.hashTable=function(hashvalue){switch(hashvalue){default:}};this.cont={};if(typeof this._option.nodeid=="string"){this._option.nodeid=$("#"+this._option.nodeid);}else{this._option.nodeid=$(this._option.nodeid);}}
views.prototype.init=function(){var _that=this;this._option.initFunc();window.onhashchange=function(){_that._hash(location.hash?location.hash:("#"+_url.getUrlParam("hash")));}
this._hash(location.hash?location.hash:("#"+_url.getUrlParam("hash")));this._option.eventFunc();}
views.prototype.rehash=function(_hashValue){this._hash(_hashValue?_hashValue:(location.hash?location.hash:("#"+_url.getUrlParam("hash"))));}
views.prototype.setHashTable=function(hashtable){if(hashtable){this.hashTable=hashtable;}}
views.prototype._hash=function(_hashvalue){if(!this._firstIn){$("#t_loading").show();}
this.hashTable(_hashvalue);}
views.prototype._intoContent=function(_panelid){var _str='<div tag="views" class="wg_view" id="'+_panelid+'_panel">'+($('#'+_panelid).length>0?$('#'+_panelid).html():$('[pageid='+_panelid+']').html())+'</div>';if(!this._firstIn){$("#t_loading").show();}
if($("#"+_panelid+"_panel").length==0){this._option.nodeid.find("[tag=views]").attr("isusing","no")
this._option.nodeid.append($(_str).attr("isusing","yes").hide());}else{$("#"+_panelid+"_panel").attr("isusing","yes").siblings().attr("isusing","no");}}
views.prototype._finishLoading=function(that,callback){this._option.eventCore.call(that);$("#t_loading").hide();loadedPercent&&loadedPercent(100);this._changeViews(callback);}
views.prototype._startLoading=function(_panelid){this._option.freshFunc();this._intoContent(_panelid);}
views.prototype._changeViews=function(callback){var isForward="",that=this;var nowPanel=this._option.nodeid.find("[isusing=yes]").attr("id").replace("_panel","");if(this.hLength!=history.length||this._firstIn){isForward=true;for(var i=0,len=this.hRoute.length;i<len;i++){if(this.hRoute[i].pos){this.hRoute[i].pos=false;this.hRoute.splice(i+1);break;}}
this.hRoute.push({pos:true,id:nowPanel});}else{for(var i=0,len=this.hRoute.length;i<len;i++){if(this.hRoute[i].pos&&this.hRoute[i].id!=nowPanel){this.hRoute[i].pos=false;break;}}
if(this.hRoute[i+1]&&this.hRoute[i+1].id==nowPanel){isForward=true;this.hRoute[i+1].pos=true;}
if(this.hRoute[i-1]&&this.hRoute[i-1].id==nowPanel){isForward=false;this.hRoute[i-1].pos=true;}
if(!this.hRoute.some(function(ceil){return ceil.pos})){isForward=true;this.hRoute[i+1]={pos:true,id:nowPanel};}}
this.hLength=history.length;if(!this._firstIn){var that=this;this._option.changeEffect(this._option.nodeid.find("[isusing=no]").filter(function(){return $(this).css("display")!="none";}),this._option.nodeid.find("[isusing=yes]"),function(){if(isForward){document.body.scrollTop=0;}else{if(pageStatusData["top_"+nowPanel]){window.scrollTo(0,pageStatusData["top_"+nowPanel]);}}
callback&&callback();},isForward);}else{this._firstIn=false;this._option.nodeid.find("[isusing=yes]").show();setTimeout(function(){if(pageStatusData["top_"+nowPanel]){setTimeout(function(){window.scrollTo(0,pageStatusData["top_"+nowPanel]);},that._option.delayScroll);}
callback&&callback();},0);}}
views.prototype.add=function(opt){var _that=this;this.cont[opt.id]=new ceilView(opt.init,opt.bindEvent,opt.id,function(tpl){_that._startLoading(tpl);},function(callback){_that._finishLoading(this,callback);});}
function empty(){return function(){};}
function ceilView(initFunc,eventFunc,templateid,startLoadFunc,endLoadFunc){this._initFunc=initFunc?initFunc:empty();this._eventFunc=eventFunc?eventFunc:empty();this._templateid=templateid;this._endLoadFunc=endLoadFunc;this._startLoadFunc=startLoadFunc;}
ceilView.prototype.init=function(){var that=this;this._startLoadFunc(this._templateid);this.p=$("#"+this._templateid+"_panel");$(window).off().on('scroll',function(){scrollWatch(that._templateid);});var a=arguments;this._initFunc(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9]);}
ceilView.prototype.end=function(callback){var that=this;this._endLoadFunc(callback);this._eventFunc();}
function scrollWatch(panel){var scrolltop=window.scrollY||document.body.scrollTop;pageStatusData["top_"+panel]=scrolltop;savePageStatus(true);}
function savePageStatus(need1secend){if(need1secend){if(statusRecorder==null){statusRecorder=setTimeout(function(){sessionStorage.setItem(pageStatusKey,JSON.stringify(pageStatusData));clearTimeout(statusRecorder);statusRecorder=null;},100);}}else{sessionStorage.setItem(pageStatusKey,JSON.stringify(pageStatusData));}}
function viewControl(opt){return new views(opt);}
exports.views=viewControl;});
