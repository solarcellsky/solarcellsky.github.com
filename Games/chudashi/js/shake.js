! function(global, factory) {
    "function" == typeof define && define.amd ? define(function() {
        return factory(global, global.document)
    }) : "undefined" != typeof module && module.exports ? module.exports = factory(global, global.document) : global.Shake = factory(global, global.document)
}("undefined" != typeof window ? window : this, function(window, document) {
    "use strict";

    function Shake(options) {
        if (this.hasDeviceMotion = "ondevicemotion" in window, this.options = {
                threshold: 15,
                timeout: 1e3
            }, "object" == typeof options)
            for (var i in options) options.hasOwnProperty(i) && (this.options[i] = options[i]);
        if (this.lastTime = new Date, this.lastX = null, this.lastY = null, this.lastZ = null, "function" == typeof document.CustomEvent) this.event = new document.CustomEvent("shake", {
            bubbles: !0,
            cancelable: !0
        });
        else {
            if ("function" != typeof document.createEvent) return !1;
            this.event = document.createEvent("Event"), this.event.initEvent("shake", !0, !0)
        }
    }
    return Shake.prototype.reset = function() {
        this.lastTime = new Date, this.lastX = null, this.lastY = null, this.lastZ = null
    }, Shake.prototype.start = function() {
        this.reset(), this.hasDeviceMotion && window.addEventListener("devicemotion", this, !1)
    }, Shake.prototype.stop = function() {
        this.hasDeviceMotion && window.removeEventListener("devicemotion", this, !1), this.reset()
    }, Shake.prototype.devicemotion = function(e) {
        var currentTime, timeDifference, current = e.accelerationIncludingGravity,
            deltaX = 0,
            deltaY = 0,
            deltaZ = 0;
        return null === this.lastX && null === this.lastY && null === this.lastZ ? (this.lastX = current.x, this.lastY = current.y, void(this.lastZ = current.z)) : (deltaX = Math.abs(this.lastX - current.x), deltaY = Math.abs(this.lastY - current.y), deltaZ = Math.abs(this.lastZ - current.z), (deltaX > this.options.threshold && deltaY > this.options.threshold || deltaX > this.options.threshold && deltaZ > this.options.threshold || deltaY > this.options.threshold && deltaZ > this.options.threshold) && (currentTime = new Date, timeDifference = currentTime.getTime() - this.lastTime.getTime(), timeDifference > this.options.timeout && (window.dispatchEvent(this.event), this.lastTime = new Date)), this.lastX = current.x, this.lastY = current.y, void(this.lastZ = current.z))
    }, Shake.prototype.handleEvent = function(e) {
        return "function" == typeof this[e.type] ? this[e.type](e) : void 0
    }, Shake
});
