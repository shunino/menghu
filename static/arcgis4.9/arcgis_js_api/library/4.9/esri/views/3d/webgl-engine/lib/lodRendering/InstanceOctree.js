// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../lib/gl-matrix","../Octree"],function(b,g,h,e,k){Object.defineProperty(g,"__esModule",{value:!0});b=function(b){function d(a,f){var c=b.call(this,[0,0,0],1,{getCenter:function(a){var f=c._instanceData.view.boundingSphere,b=c._tmpCenter;b[0]=f.get(a,0);b[1]=f.get(a,1);b[2]=f.get(a,2);return b},getRadius:function(a){return c._instanceData.view.boundingSphere.get(a,3)}},{maximumDepth:25})||this;c._instanceData=a;c._boundingSphere=
f;c._tmpCenter=e.vec3d.create();c._tmpTranslation=e.vec3d.create();c._tmpModel=e.mat3d.create();return c}h(d,b);d.prototype.addInstance=function(a){var b=this._instanceData.view.boundingSphere,c=this._tmpCenter;this._instanceData.getModel(a,this._tmpModel);e.mat3d.multiplyVec3(this._tmpModel,this._boundingSphere.center,c);this._instanceData.getTranslation(a,this._tmpTranslation);e.vec3d.add(c,this._tmpTranslation);var d=this._boundingSphere.radius*this._instanceData.getScaleFactor(a);b.set(a,0,c[0]);
b.set(a,1,c[1]);b.set(a,2,c[2]);b.set(a,3,d);this.add(a)};d.prototype.removeInstance=function(a){this.remove(a)};return d}(k);g.InstanceOctree=b});