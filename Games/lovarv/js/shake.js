(function() {
	shake = window.shake || {};


    shake.SHAKE_THRESHOLD = 3000;
    shake.last_update = 0;
    shake.x;
    shake.y;
    shake.z;
    shake.last_x;
    shake.last_y;
    shake.last_z;
    shake.max_speed = 5000;
    // shake.enableShake = false;

    shake.deviceMotionHandler = function(eventData) {　　
        var acceleration = eventData.accelerationIncludingGravity;

        var curTime = new Date().getTime();　　
        var diffTime = curTime - shake.last_update;

        　　
        if (diffTime > 100) {
            shake.last_update = curTime;
            shake.x = acceleration.x;　　　　
            shake.y = acceleration.y;　　　　
            shake.z = acceleration.z;
            var speed = Math.abs(shake.x + shake.y + shake.z - shake.last_x - shake.last_y - shake.last_z) / diffTime * 10000;　　　　
            if (speed > shake.SHAKE_THRESHOLD) {
            	shake.stopShake();
                speed = (speed/100).toFixed()
              	tl.startGame(speed);

            };
            shake.last_x = shake.x;　　　　
            shake.last_y = shake.y;　　　　
            shake.last_z = shake.z;　　
        }
    };
    shake.startShake = function(){
    	window.addEventListener('devicemotion', shake.deviceMotionHandler, false);
    };

    shake.stopShake = function(){
    	window.removeEventListener('devicemotion', shake.deviceMotionHandler, false);
    };
    shake.startShake();

})();
