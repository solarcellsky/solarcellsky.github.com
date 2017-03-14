function Orientation(_onUpdate, returnType){
	if(_onUpdate)this.onUpdate = _onUpdate;

	// add functions to this, binded to scope
	this.onScreenOrientation = onScreenOrientation.bind(this);
	this.onDeviceOrientation = onDeviceOrientation.bind(this);

	this.deviceOrientation = {};
	this.screenOrientation = 0;

	// set conversion function
	switch(String(returnType).toLowerCase()){
		case "quaternion":
		case "quat": this.convFn = getQuaternion; break;
		case "matrix": this.convFn = getQuaternion; break;
		case "mat": this.convFn = getMatrix; break;
		case "xyz": this.convFn = getXYZ; break;
		case "xzy": this.convFn = getXZY; break;
		case "yxz": this.convFn = getYXZ; break;
		case "yzx": this.convFn = getYZX; break;
		case "zxy": this.convFn = getZXY; break;
		case "zyx": this.convFn = getZYX; break;
		default: this.convFn = function(){return arguments};
	}

	// add new listeners
	addListeners.call(this);

}

Orientation.prototype.destroy = function(){
	// add new listeners
	removeListeners.call(this);

	this.deviceOrientation = null;
	this.screenOrientation = null;
	this.onScreenOrientation = null;
	this.onDeviceOrientation = null;
}

// ------------------------- LISTENERS -------------------------

function addListeners(){
	this.onScreenOrientation(); // run once on load

	window.addEventListener( 'orientationchange', this.onScreenOrientation, false );
	window.addEventListener( 'deviceorientation', this.onDeviceOrientation, false );
}

function removeListeners(){
	window.removeEventListener( 'orientationchange', this.onScreenOrientation, false );
	window.removeEventListener( 'deviceorientation', this.onDeviceOrientation, false );
}

function onDeviceOrientation( event ) {
	if(!event || event.alpha == null)return;
	this.deviceOrientation = event;

	update.call(this);
}

function onScreenOrientation () {
	this.screenOrientation = window.orientation || 0;
}

function update(){
	var degToRad = Math.PI / 180,
		alpha  = this.deviceOrientation.alpha ? degToRad * this.deviceOrientation.alpha  : 0, // Z
		beta   = this.deviceOrientation.beta  ? degToRad * this.deviceOrientation.beta   : 0, // X
		gamma  = this.deviceOrientation.gamma ? degToRad * this.deviceOrientation.gamma  : 0, // Y
		orient = this.screenOrientation       ? degToRad * this.screenOrientation        : 0; // O
	if(this.onUpdate)this.onUpdate( this.convFn(alpha, beta, gamma, orient) );
}

// ------------------------- CONVERSIONS -------------------------

function getQuaternion(alpha, beta, gamma, orient){
	var _x = beta  ? beta  : 0,
		_y = alpha ? alpha : 0,
		_z = gamma ? - gamma : 0,
		c1 = Math.cos( _x / 2 ),
		c2 = Math.cos( _y / 2 ),
		c3 = Math.cos( _z / 2 ),
		s1 = Math.sin( _x / 2 ),
		s2 = Math.sin( _y / 2 ),
		s3 = Math.sin( _z / 2 ),
		qx = s1 * c2 * c3 + c1 * s2 * s3,
		qy = c1 * s2 * c3 - s1 * c2 * s3,
		qz = c1 * c2 * s3 - s1 * s2 * c3,
		qw = c1 * c2 * c3 + s1 * s2 * s3,
		sqHalf = Math.sqrt( 0.5 ),
		qx2 = qx * sqHalf + qw * -sqHalf,
		qy2 = qy * sqHalf + qz * -sqHalf,
		qz2 = qz * sqHalf - qy * -sqHalf,
		qw2 = qw * sqHalf - qx * -sqHalf,
		sO = Math.sin( - orient / 2 ),
		cO = Math.cos( - orient / 2 );

	return {
		x: qx2 * cO + qy2 * sO, // x
		y: qy2 * cO - qx2 * sO, // y
		z: qz2 * cO + qw2 * sO, // z
		w: qw2 * cO - qz2 * sO // w
	}
}

function getMatrix(alpha, beta, gamma, orient){
	var q = getQuaternion(alpha, beta, gamma, orient),
		x = q.x, y = q.y, z = q.z, w = q.w,
		x2 = x + x, y2 = y + y, z2 = z + z,
		xx = x * x2, xy = x * y2, xz = x * z2,
		yy = y * y2, yz = y * z2, zz = z * z2,
		wx = w * x2, wy = w * y2, wz = w * z2;

	return [
		1 - ( yy + zz ),
		xy + wz,
		xz - wy,
		0,
		xy - wz,
		1 - ( xx + zz ),
		yz + wx,
		0,
		xz + wy,
		yz - wx,
		1 - ( xx + yy ),
		0,0,0,0,1 ];
}

function getXYZ(alpha, beta, gamma, orient){
	var mat = getMatrix( alpha, beta, gamma, orient );
	if(mat[8] < 0.99999 )
		return [	Math.atan2( - mat[9], mat[10] ),
			Math.asin( clamp( mat[8], - 1, 1 ) ),
			Math.atan2( - mat[4], mat[0] ) ]
	else return [	Math.atan2( mat[6], mat[5] ),
		Math.asin( clamp( mat[8], - 1, 1 ) ),
		0 ]
}

function getYXZ(alpha, beta, gamma, orient){
	var mat = getMatrix( alpha, beta, gamma, orient );
	if(mat[9] < 0.99999 )
		return [	Math.asin( - clamp( mat[9], - 1, 1 ) ),
			Math.atan2( mat[8], mat[10] ),
			Math.atan2( mat[1], mat[5] )]
	else return [	Math.asin( - clamp( mat[9], - 1, 1 ) ),
		Math.atan2( - mat[2], mat[0] ),
		0 ]
}

function getZXY(alpha, beta, gamma, orient){
	var mat = getMatrix( alpha, beta, gamma, orient );
	if(mat[6] < 0.99999 )
		return [	Math.asin( clamp( mat[6], - 1, 1 ) ),
			Math.atan2( - mat[2], mat[10] ),
			Math.atan2( - mat[4], mat[5] )]
	else return [	Math.asin( clamp( mat[6], - 1, 1 ) ),
		0,
		Math.atan2( mat[1], mat[0] ) ]
}

function getZYX(alpha, beta, gamma, orient){
	var mat = getMatrix( alpha, beta, gamma, orient );
	if(mat[2] < 0.99999 )
		return [	Math.atan2( mat[6], mat[10] ),
			Math.asin( - clamp( mat[2], - 1, 1 ) ),
			Math.atan2( mat[1], mat[0] )]
	else return [	0,
		Math.asin( - clamp( mat[2], - 1, 1 ) ),
		Math.atan2( - mat[4], mat[5] ) ]
}

function getYZX(alpha, beta, gamma, orient){
	var mat = getMatrix( alpha, beta, gamma, orient );
	if(mat[1] < 0.99999 )
		return [	Math.atan2( - mat[9], mat[5] ),
			Math.atan2( - mat[2], mat[0] ),
			Math.asin( clamp( mat[1], - 1, 1 ) )]
	else return [	0,
		Math.atan2( mat[8], mat[10] ),
		Math.asin( clamp( mat[1], - 1, 1 ) ) ]
}

function getXZY(alpha, beta, gamma, orient){
	var mat = getMatrix( alpha, beta, gamma, orient );
	if(mat[4] < 0.99999 )
		return [	Math.atan2( mat[6], mat[5] ),
			Math.atan2( mat[8], mat[0] ),
			Math.asin( - clamp( mat[4], - 1, 1 ) )]
	else return [	Math.atan2( - mat[9], mat[10] ),
		0,
		Math.asin( - clamp( mat[4], - 1, 1 ) ) ]
}

function clamp ( value, min, max ) {
	return Math.max( min, Math.min( max, value ) );
}
