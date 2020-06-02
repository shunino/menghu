// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(b,d){Object.defineProperty(d,"__esModule",{value:!0});b=function(){function a(c,a,e,f,b){void 0===e&&(e=0);this.TypedArrayConstructor=c;this.elementCount=1;c=this.TypedArrayConstructor;void 0===f&&(f=c.BYTES_PER_ELEMENT);var d=0===a.byteLength?0:e;this.data=null==b?new c(a,d):new c(a,d,(b-e)/c.BYTES_PER_ELEMENT);this.elementStride=f/c.BYTES_PER_ELEMENT}a.prototype.get=function(a){return this.data[a*this.elementStride]};a.prototype.set=function(a,b){this.data[a*
this.elementStride]=b};Object.defineProperty(a.prototype,"count",{get:function(){return Math.ceil(this.data.length/this.elementStride)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"buffer",{get:function(){return this.data.buffer},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"typedBuffer",{get:function(){return this.data},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"stride",{get:function(){return this.elementStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT},
enumerable:!0,configurable:!0});a.ElementCount=1;return a}();d.BufferViewSingle=b});