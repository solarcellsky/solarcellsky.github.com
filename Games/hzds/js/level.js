function deleteRenderTarget(e) { gl.deleteFramebuffer(e.frameBuffer), gl.deleteRenderbuffer(e.renderBuffer), gl.deleteTexture(e.texture) }

function createRenderTarget(e, r) {
    var t = { width: e, height: r, sizeArray: new Float32Array([e, r, e / r]), dtxArray: new Float32Array([1 / e, 1 / r]) };
    return t.frameBuffer = gl.createFramebuffer(), t.renderBuffer = gl.createRenderbuffer(), t.texture = gl.createTexture(), gl.bindTexture(gl.TEXTURE_2D, t.texture), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, e, r, 0, gl.RGBA, gl.UNSIGNED_BYTE, null), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.bindFramebuffer(gl.FRAMEBUFFER, t.frameBuffer), gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t.texture, 0), gl.bindRenderbuffer(gl.RENDERBUFFER, t.renderBuffer), gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, e, r), gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, t.renderBuffer), gl.bindTexture(gl.TEXTURE_2D, null), gl.bindRenderbuffer(gl.RENDERBUFFER, null), gl.bindFramebuffer(gl.FRAMEBUFFER, null), t }

function compileShader(e, r) {
    var t = gl.createShader(e);
    if (gl.shaderSource(t, r), gl.compileShader(t), !gl.getShaderParameter(t, gl.COMPILE_STATUS)) {
        var a = gl.getShaderInfoLog(t);
        return gl.deleteShader(t), console.error(a), null }
        // return gl.deleteShader(t), console.log(a), null }
    return t }

function createShader(e, r, t, a) {
    var o = compileShader(gl.VERTEX_SHADER, e),
        n = compileShader(gl.FRAGMENT_SHADER, r);
    if (null == o || null == n) return null;
    var i = gl.createProgram();
    if (gl.attachShader(i, o), gl.attachShader(i, n), gl.deleteShader(o), gl.deleteShader(n), gl.linkProgram(i), !gl.getProgramParameter(i, gl.LINK_STATUS)) {
        var l = gl.getProgramInfoLog(i);
        return console.error(l), null }
    if (t) { i.uniforms = {};
        for (var f = 0; f < t.length; f++) i.uniforms[t[f]] = gl.getUniformLocation(i, t[f]) }
    if (a) { i.attributes = {};
        for (var f = 0; f < a.length; f++) {
            var c = a[f];
            i.attributes[c] = gl.getAttribLocation(i, c) } }
    return i }

function useShader(e) { gl.useProgram(e);
    for (var r in e.attributes) gl.enableVertexAttribArray(e.attributes[r]) }

function unuseShader(e) {
    for (var r in e.attributes) gl.disableVertexAttribArray(e.attributes[r]);
    gl.useProgram(null) }

function createPointFlowers() {
    var e = gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE);
    renderSpec.pointSize = { min: e[0], max: e[1] };
    var r = document.getElementById("sakura_point_vsh").textContent,
        t = document.getElementById("sakura_point_fsh").textContent;
    pointFlower.program = createShader(r, t, ["uProjection", "uModelview", "uResolution", "uOffset", "uDOF", "uFade"], ["aPosition", "aEuler", "aMisc"]), useShader(pointFlower.program), pointFlower.offset = new Float32Array([0, 0, 0]), pointFlower.fader = Vector3.create(0, 10, 0), pointFlower.numFlowers = 120, pointFlower.particles = new Array(pointFlower.numFlowers), pointFlower.dataArray = new Float32Array(8 * pointFlower.numFlowers), pointFlower.positionArrayOffset = 0, pointFlower.eulerArrayOffset = 3 * pointFlower.numFlowers, pointFlower.miscArrayOffset = 6 * pointFlower.numFlowers, pointFlower.buffer = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, pointFlower.buffer), gl.bufferData(gl.ARRAY_BUFFER, pointFlower.dataArray, gl.DYNAMIC_DRAW), gl.bindBuffer(gl.ARRAY_BUFFER, null), unuseShader(pointFlower.program);
    for (var a = 0; a < pointFlower.numFlowers; a++) pointFlower.particles[a] = new BlossomParticle }

function initPointFlowers() { pointFlower.area = Vector3.create(20, 20, 20), pointFlower.area.x = pointFlower.area.y * renderSpec.aspect, pointFlower.fader.x = 10, pointFlower.fader.y = pointFlower.area.z, pointFlower.fader.z = .1;
    for (var e = 2 * Math.PI, r = Vector3.create(0, 0, 0), t = 0, a = function() {
            return 2 * Math.random() - 1 }, o = 0; o < pointFlower.numFlowers; o++) {
        var n = pointFlower.particles[o];
        r.x = .3 * a() + .8, r.y = .2 * a() - 1, r.z = .3 * a() + .5, Vector3.normalize(r), t = 2 + 1 * Math.random(), n.setVelocity(r.x * t, r.y * t, r.z * t), n.setRotation(a() * e * .5, a() * e * .5, a() * e * .5), n.setPosition(a() * pointFlower.area.x, a() * pointFlower.area.y, a() * pointFlower.area.z), n.setEulerAngles(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2), n.setSize(.9 + .1 * Math.random()) } }

function renderPointFlowers() {
    for (var e = 2 * Math.PI, r = ([pointFlower.area.x, pointFlower.area.y, pointFlower.area.z], function(e, r, t) { Math.abs(e.position[r]) - .5 * e.size > t && (e.position[r] > 0 ? e.position[r] -= 2 * t : e.position[r] += 2 * t) }), t = function(r, t) { r.euler[t] = r.euler[t] % e, r.euler[t] < 0 && (r.euler[t] += e) }, a = 0; a < pointFlower.numFlowers; a++) {
        var o = pointFlower.particles[a];
        o.update(timeInfo.delta, timeInfo.elapsed), r(o, 0, pointFlower.area.x), r(o, 1, pointFlower.area.y), r(o, 2, pointFlower.area.z), t(o, 0), t(o, 1), t(o, 2), o.alpha = 1, o.zkey = camera.matrix[2] * o.position[0] + camera.matrix[6] * o.position[1] + camera.matrix[10] * o.position[2] + camera.matrix[14] }
    pointFlower.particles.sort(function(e, r) {
        return e.zkey - r.zkey });
    for (var n = pointFlower.positionArrayOffset, i = pointFlower.eulerArrayOffset, l = pointFlower.miscArrayOffset, a = 0; a < pointFlower.numFlowers; a++) {
        var o = pointFlower.particles[a];
        pointFlower.dataArray[n] = o.position[0], pointFlower.dataArray[n + 1] = o.position[1], pointFlower.dataArray[n + 2] = o.position[2], n += 3, pointFlower.dataArray[i] = o.euler[0], pointFlower.dataArray[i + 1] = o.euler[1], pointFlower.dataArray[i + 2] = o.euler[2], i += 3, pointFlower.dataArray[l] = o.size, pointFlower.dataArray[l + 1] = o.alpha, l += 2 }
    gl.enable(gl.BLEND), gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    var f = pointFlower.program;
    useShader(f), gl.uniformMatrix4fv(f.uniforms.uProjection, !1, projection.matrix), gl.uniformMatrix4fv(f.uniforms.uModelview, !1, camera.matrix), gl.uniform3fv(f.uniforms.uResolution, renderSpec.array), gl.uniform3fv(f.uniforms.uDOF, Vector3.arrayForm(camera.dof)), gl.uniform3fv(f.uniforms.uFade, Vector3.arrayForm(pointFlower.fader)), gl.bindBuffer(gl.ARRAY_BUFFER, pointFlower.buffer), gl.bufferData(gl.ARRAY_BUFFER, pointFlower.dataArray, gl.DYNAMIC_DRAW), gl.vertexAttribPointer(f.attributes.aPosition, 3, gl.FLOAT, !1, 0, pointFlower.positionArrayOffset * Float32Array.BYTES_PER_ELEMENT), gl.vertexAttribPointer(f.attributes.aEuler, 3, gl.FLOAT, !1, 0, pointFlower.eulerArrayOffset * Float32Array.BYTES_PER_ELEMENT), gl.vertexAttribPointer(f.attributes.aMisc, 2, gl.FLOAT, !1, 0, pointFlower.miscArrayOffset * Float32Array.BYTES_PER_ELEMENT);
    for (var a = 1; 2 > a; a++);
    pointFlower.offset[0] = 0, pointFlower.offset[1] = 0, pointFlower.offset[2] = 0, gl.uniform3fv(f.uniforms.uOffset, pointFlower.offset), gl.drawArrays(gl.POINT, 0, pointFlower.numFlowers), gl.bindBuffer(gl.ARRAY_BUFFER, null), unuseShader(f), gl.enable(gl.DEPTH_TEST), gl.disable(gl.BLEND) }

function createEffectProgram(e, r, t, a) {
    var o = {},
        n = ["uResolution", "uSrc", "uDelta"];
    t && (n = n.concat(t));
    var i = ["aPosition"];
    return a && (i = i.concat(a)), o.program = createShader(e, r, n, i), useShader(o.program), o.dataArray = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), o.buffer = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, o.buffer), gl.bufferData(gl.ARRAY_BUFFER, o.dataArray, gl.STATIC_DRAW), gl.bindBuffer(gl.ARRAY_BUFFER, null), unuseShader(o.program), o }

function useEffect(e, r) {
    var t = e.program;
    useShader(t), gl.uniform3fv(t.uniforms.uResolution, renderSpec.array), null != r && (gl.uniform2fv(t.uniforms.uDelta, r.dtxArray), gl.uniform1i(t.uniforms.uSrc, 0), gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, r.texture)) }

function drawEffect(e) { gl.bindBuffer(gl.ARRAY_BUFFER, e.buffer), gl.vertexAttribPointer(e.program.attributes.aPosition, 2, gl.FLOAT, !1, 0, 0), gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4) }

function unuseEffect(e) { unuseShader(e.program) }

function createEffectLib() {
    var e, r, t = document.getElementById("fx_common_vsh").textContent;
    r = document.getElementById("bg_fsh").textContent, effectLib.sceneBg = createEffectProgram(t, r, ["uTimes"], null), r = document.getElementById("fx_brightbuf_fsh").textContent, effectLib.mkBrightBuf = createEffectProgram(t, r, null, null), r = document.getElementById("fx_dirblur_r4_fsh").textContent, effectLib.dirBlur = createEffectProgram(t, r, ["uBlurDir"], null), e = document.getElementById("pp_final_vsh").textContent, r = document.getElementById("pp_final_fsh").textContent, effectLib.finalComp = createEffectProgram(e, r, ["uBloom"], null) }

function createBackground() {}

function initBackground() {}

function renderBackground() { gl.disable(gl.DEPTH_TEST), useEffect(effectLib.sceneBg, null), gl.uniform2f(effectLib.sceneBg.program.uniforms.uTimes, timeInfo.elapsed, timeInfo.delta), drawEffect(effectLib.sceneBg), unuseEffect(effectLib.sceneBg), gl.enable(gl.DEPTH_TEST) }

function createPostProcess() {}

function initPostProcess() {}

function renderPostProcess() { gl.enable(gl.TEXTURE_2D), gl.disable(gl.DEPTH_TEST);
    var e = function(e, r) { gl.bindFramebuffer(gl.FRAMEBUFFER, e.frameBuffer), gl.viewport(0, 0, e.width, e.height), r && (gl.clearColor(0, 0, 0, 0), gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)) };
    e(renderSpec.wHalfRT0, !0), useEffect(effectLib.mkBrightBuf, renderSpec.mainRT), drawEffect(effectLib.mkBrightBuf), unuseEffect(effectLib.mkBrightBuf);
    for (var r = 0; 2 > r; r++) {
        var t = 1.5 + 1 * r,
            a = 2 + 1 * r;
        e(renderSpec.wHalfRT1, !0), useEffect(effectLib.dirBlur, renderSpec.wHalfRT0), gl.uniform4f(effectLib.dirBlur.program.uniforms.uBlurDir, t, 0, a, 0), drawEffect(effectLib.dirBlur), unuseEffect(effectLib.dirBlur), e(renderSpec.wHalfRT0, !0), useEffect(effectLib.dirBlur, renderSpec.wHalfRT1), gl.uniform4f(effectLib.dirBlur.program.uniforms.uBlurDir, 0, t, 0, a), drawEffect(effectLib.dirBlur), unuseEffect(effectLib.dirBlur) }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null), gl.viewport(0, 0, renderSpec.width, renderSpec.height), gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT), useEffect(effectLib.finalComp, renderSpec.mainRT), gl.uniform1i(effectLib.finalComp.program.uniforms.uBloom, 1), gl.activeTexture(gl.TEXTURE1), gl.bindTexture(gl.TEXTURE_2D, renderSpec.wHalfRT0.texture), drawEffect(effectLib.finalComp), unuseEffect(effectLib.finalComp), gl.enable(gl.DEPTH_TEST) }

function createScene() { createEffectLib(), createBackground(), createPointFlowers(), sceneStandBy = !0 }

function initScene() { initBackground(), initPointFlowers(), initPostProcess(), camera.position.z = pointFlower.area.z + projection.nearfar[0], projection.angle = 180 * Math.atan2(pointFlower.area.y, camera.position.z + pointFlower.area.z) / Math.PI * 2, Matrix44.loadProjection(projection.matrix, renderSpec.aspect, projection.angle, projection.nearfar[0], projection.nearfar[1]) }

function renderScene() { Matrix44.loadLookAt(camera.matrix, camera.position, camera.lookat, camera.up), gl.bindFramebuffer(gl.FRAMEBUFFER, renderSpec.mainRT.frameBuffer), gl.viewport(0, 0, renderSpec.mainRT.width, renderSpec.mainRT.height), gl.clearColor(242 / 256, 182 / 256, 182 / 256, .1), gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT), renderPointFlowers(), renderPostProcess() }

function todo() { gl.clear(gl.COLOR_BUFFER_BIT), gl.clear(gl.DEPTH_BUFFER_BIT), gl.viewport(0, 0, renderSpec.mainRT.width, renderSpec.mainRT.height);
    var e = "void main() {gl_Position = vec4(0.0, 0.0, 0.0, 1.0);gl_PointSize = 400.0;}",
        r = "void main() {gl_FragColor = vec4(0.97, 0.87,0.87, 1.0);}",
        t = gl.createShader(gl.VERTEX_SHADER),
        a = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(t, e), gl.shaderSource(a, r), gl.compileShader(t), gl.compileShader(a);
    var o = gl.createProgram();
    gl.attachShader(o, t), gl.attachShader(o, a), gl.linkProgram(o), gl.useProgram(o), gl.drawArrays(gl.POINTS, 0, 1) }

function onResize() { makeCanvasFullScreen(document.getElementById("sakura")), setViewports(), sceneStandBy && initScene() }

function setViewports() { renderSpec.setSize(gl.canvas.width, gl.canvas.height), gl.clearColor(.2, .2, .5, 1), gl.viewport(0, 0, renderSpec.width, renderSpec.height);
    var e = function(e, r, t) {
        var a = renderSpec[e];
        a && deleteRenderTarget(a), renderSpec[e] = createRenderTarget(r, t) };
    e("mainRT", renderSpec.width, renderSpec.height), e("wFullRT0", renderSpec.width, renderSpec.height), e("wFullRT1", renderSpec.width, renderSpec.height), e("wHalfRT0", renderSpec.halfWidth, renderSpec.halfHeight), e("wHalfRT1", renderSpec.halfWidth, renderSpec.halfHeight) }

function render() { renderScene() }

function toggleAnimation(e) { animating ^= !0, animating && animate(), e && (e.innerHTML = animating ? "Stop" : "Start") }

function stepAnimation() { animating || animate() }

function animate() {
    var e = new Date;
    timeInfo.elapsed = (e - timeInfo.start) / 1e3, timeInfo.delta = (e - timeInfo.prev) / 1e3, timeInfo.prev = e, animating && requestAnimationFrame(animate), render() }

function makeCanvasFullScreen(e) {
    var r = document.body,
        t = document.documentElement;
    fullw = Math.max(r.clientWidth, r.scrollWidth, t.scrollWidth, t.clientWidth), fullh = Math.max(r.clientHeight, r.scrollHeight, t.scrollHeight, t.clientHeight), e.width = fullw, e.height = fullh }
var Vector3 = {},
    Matrix44 = {};
Vector3.create = function(e, r, t) {
    return { x: e, y: r, z: t } }, Vector3.dot = function(e, r) {
    return e.x * r.x + e.y * r.y + e.z * r.z }, Vector3.cross = function(e, r, t) { e.x = r.y * t.z - r.z * t.y, e.y = r.z * t.x - r.x * t.z, e.z = r.x * t.y - r.y * t.x }, Vector3.normalize = function(e) {
    var r = e.x * e.x + e.y * e.y + e.z * e.z;
    r > 1e-5 && (r = 1 / Math.sqrt(r), e.x *= r, e.y *= r, e.z *= r) }, Vector3.arrayForm = function(e) {
    return e.array ? (e.array[0] = e.x, e.array[1] = e.y, e.array[2] = e.z) : e.array = new Float32Array([e.x, e.y, e.z]), e.array }, Matrix44.createIdentity = function() {
    return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]) }, Matrix44.loadProjection = function(e, r, t, a, o) {
    var n = a * Math.tan(t * Math.PI / 180 * .5) * 2,
        i = n * r;
    e[0] = 2 * a / i, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 2 * a / n, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = -(o + a) / (o - a), e[11] = -1, e[12] = 0, e[13] = 0, e[14] = -2 * o * a / (o - a), e[15] = 0 }, Matrix44.loadLookAt = function(e, r, t, a) {
    var o = Vector3.create(r.x - t.x, r.y - t.y, r.z - t.z);
    Vector3.normalize(o);
    var n = Vector3.create(1, 0, 0);
    Vector3.cross(n, a, o), Vector3.normalize(n);
    var i = Vector3.create(1, 0, 0);
    Vector3.cross(i, o, n), Vector3.normalize(i), e[0] = n.x, e[1] = i.x, e[2] = o.x, e[3] = 0, e[4] = n.y, e[5] = i.y, e[6] = o.y, e[7] = 0, e[8] = n.z, e[9] = i.z, e[10] = o.z, e[11] = 0, e[12] = -(r.x * e[0] + r.y * e[4] + r.z * e[8]), e[13] = -(r.x * e[1] + r.y * e[5] + r.z * e[9]), e[14] = -(r.x * e[2] + r.y * e[6] + r.z * e[10]), e[15] = 1 };
var timeInfo = { start: 0, prev: 0, delta: 0, elapsed: 0 },
    gl, renderSpec = { width: 0, height: 0, aspect: 1, array: new Float32Array(3), halfWidth: 0, halfHeight: 0, halfArray: new Float32Array(3) };
renderSpec.setSize = function(e, r) { renderSpec.width = e, renderSpec.height = r, renderSpec.aspect = renderSpec.width / renderSpec.height, renderSpec.array[0] = renderSpec.width, renderSpec.array[1] = renderSpec.height, renderSpec.array[2] = renderSpec.aspect, renderSpec.halfWidth = Math.floor(e / 2), renderSpec.halfHeight = Math.floor(r / 2), renderSpec.halfArray[0] = renderSpec.halfWidth, renderSpec.halfArray[1] = renderSpec.halfHeight, renderSpec.halfArray[2] = renderSpec.halfWidth / renderSpec.halfHeight };
var projection = { angle: 60, nearfar: new Float32Array([.01, 100]), matrix: Matrix44.createIdentity() },
    camera = { position: Vector3.create(0, 0, 100), lookat: Vector3.create(0, 0, 0), up: Vector3.create(0, 1, 0), dof: Vector3.create(10, 4, 8), matrix: Matrix44.createIdentity() },
    pointFlower = {},
    meshFlower = {},
    sceneStandBy = !1,
    BlossomParticle = function() { this.velocity = new Array(3), this.rotation = new Array(3), this.position = new Array(3), this.euler = new Array(3), this.size = 1, this.alpha = 1, this.zkey = 0 };
BlossomParticle.prototype.setVelocity = function(e, r, t) { this.velocity[0] = e, this.velocity[1] = r, this.velocity[2] = t }, BlossomParticle.prototype.setRotation = function(e, r, t) { this.rotation[0] = e, this.rotation[1] = r, this.rotation[2] = t }, BlossomParticle.prototype.setPosition = function(e, r, t) { this.position[0] = e, this.position[1] = r, this.position[2] = t }, BlossomParticle.prototype.setEulerAngles = function(e, r, t) { this.euler[0] = e, this.euler[1] = r, this.euler[2] = t }, BlossomParticle.prototype.setSize = function(e) { this.size = e }, BlossomParticle.prototype.update = function(e) { this.position[0] += this.velocity[0] * e, this.position[1] += this.velocity[1] * e, this.position[2] += this.velocity[2] * e, this.euler[0] += this.rotation[0] * e, this.euler[1] += this.rotation[1] * e, this.euler[2] += this.rotation[2] * e };
var effectLib = {},
    postProcess = {},
    SceneEnv = {},
    animating = !0;
window.addEventListener("load", function(e) {
        var r = document.getElementById("sakura");
        try { makeCanvasFullScreen(r), gl = r.getContext("webgl") } catch (e) {
            return alert("WebGL not supported." + e), void console.error(e) }
        window.addEventListener("resize", onResize), setViewports(), createScene(), initScene(), timeInfo.start = new Date, timeInfo.prev = timeInfo.start, animate() }),
    function(e, r) { e["r" + r] = e["r" + r] || e["webkitR" + r] || e["mozR" + r] || e["msR" + r] || e["oR" + r] || function(r) { e.setTimeout(r, 1e3 / 60) } }(window, "equestAnimationFrame");
