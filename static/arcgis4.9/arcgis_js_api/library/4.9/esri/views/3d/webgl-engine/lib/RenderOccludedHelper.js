// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../lib/gl-matrix ./glUtil3D ./Util ../shaders/OccludedPrograms ../../../webgl/FramebufferObject ../../../webgl/Util".split(" "),function(l,m,e,f,d,g,h,k){return function(){function c(a,b){this._quadVAO=null;this._rctx=b;this._colorFBO=void 0;this._viewportToRestore=e.vec4d.create();this._combineProgram=a.getProgram(g.combinePass)}Object.defineProperty(c.prototype,"enabled",{get:function(){return void 0!==this._colorFBO},set:function(a){a?this.enable():this.disable()},enumerable:!0,
configurable:!0});c.prototype.setupFBOs=function(a){d.assert(this.enabled);this._viewportToRestore=a=a.fullViewport;this._width=a[2];this._height=a[3];this._rctx.setViewport(0,0,this._width,this._height)};c.prototype.prepareColorPass=function(){d.assert(this.enabled);var a=this._rctx,b=a.gl;this._colorFBO.resize(this._width,this._height);a.bindFramebuffer(this._colorFBO);a.setClearColor(0,0,0,0);a.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT)};c.prototype.finish=function(a){var b=this._rctx;b.bindFramebuffer(a);
b.setViewport(this._viewportToRestore[0],this._viewportToRestore[1],this._viewportToRestore[2],this._viewportToRestore[3])};c.prototype.apply=function(){var a=this._rctx,b=this._combineProgram;a.bindProgram(b);a.bindVAO(this._quadVAO);a.bindTexture(this._colorFBO.colorTexture,0);b.setUniform1i("occludedColorMap",0);a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);a.setBlendingEnabled(!0);a.setBlendFunction(770,771);a.drawArrays(5,0,k.vertexCount(this._quadVAO,"geometry"));a.bindVAO(null);a.setDepthWriteEnabled(!0);
a.setDepthTestEnabled(!0);a.setBlendingEnabled(!1)};c.prototype.enable=function(){this.enabled||(this._quadVAO=f.createQuadVAO(this._rctx),this._colorFBO=h.createWithAttachments(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:0,height:0},{colorTarget:0,depthStencilTarget:1}))};c.prototype.disable=function(){this.enabled&&(this._quadVAO.dispose(!0),this._quadVAO=void 0,this._colorFBO.dispose(),this._colorFBO=void 0)};return c}()});