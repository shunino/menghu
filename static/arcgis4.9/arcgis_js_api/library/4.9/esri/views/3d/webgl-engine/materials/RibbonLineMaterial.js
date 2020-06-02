// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/Logger ../../lib/gl-matrix ../../support/geometryUtils ../../support/buffer/InterleavedLayout ../lib/ComponentUtils ../lib/GLMaterial ../lib/Material ../lib/RenderSlot ../lib/Util ./internal/MaterialUtil ../shaders/RibbonLinePrograms".split(" "),function(O,ia,H,V,e,h,P,W,Q,X,R,k,C,S){var Y=V.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial");O=function(w){function a(f,d){d=w.call(this,d)||this;d.params=
C.copyParameters(f,Z);"miter"!==d.params.join&&(d.params.miterLimit=0);d.numVertsAtJoin="wall"===d.params.type?2:4;d.numVertsAtCap=2;d.canBeMerged="screen"===d.params.type&&null==d.params.stippleLength;d.bufferWriter="wall"===d.params.type?new aa:new ba(d.canBeMerged);return d}H(a,w);a.prototype.setColor=function(f){this.params.color=f;this.notifyDirty("matChanged")};a.prototype.getColor=function(){return this.params.color};a.prototype.dispose=function(){};a.prototype.getParams=function(){return this.params};
a.prototype.getParameterValues=function(){var f=C.copyParameters(this.params);f.miterLimit="miter"===f.join?f.miterLimit:0;return f};a.prototype.setParameterValues=function(f){for(var d in f)k.assert("type"!==d,"RibbonLineMaterial: type cannot be changed after creation"),k.assert("stippleLength"!==d||null!=f[d]===(null!=this.params[d]),"RibbonLineMaterial: stippleLength on/off cannot be changed after creation"),this.params[d]=f[d];"miter"!==this.params.join&&(this.params.miterLimit=0);this.notifyDirty("matChanged")};
a.prototype.intersect=function(f,d,b,c,a,l,w,t){if(c.isSelection&&!W.isAllHidden(d.componentVisibilities,f.data.componentOffsets))if(k.isTranslationMatrix(b)){d=f.data;f=d.getVertexAttr()[k.VertexAttrConstants.POSITION].data;d=d.getVertexAttr()[k.VertexAttrConstants.SIZE];l=c.camera;t=c.point;d=((d&&d.data[0])+this.params.width)/2+4;e.vec3d.set3(t[0]-d,t[1]+d,0,F[0]);e.vec3d.set3(t[0]+d,t[1]+d,0,F[1]);e.vec3d.set3(t[0]+d,t[1]-d,0,F[2]);e.vec3d.set3(t[0]-d,t[1]-d,0,F[3]);for(var x=0;4>x;x++)l.unprojectPoint(F[x],
p[x]);h.plane.fromPoints(l.eye,p[0],p[1],I);h.plane.fromPoints(l.eye,p[1],p[2],J);h.plane.fromPoints(l.eye,p[2],p[3],K);h.plane.fromPoints(l.eye,p[3],p[0],L);a=Number.MAX_VALUE;for(x=0;x<f.length-5;x+=3)if(q[0]=f[x]+b[12],q[1]=f[x+1]+b[13],q[2]=f[x+2]+b[14],g[0]=f[x+3]+b[12],g[1]=f[x+4]+b[13],g[2]=f[x+5]+b[14],!(0>h.plane.distance(I,q)&&0>h.plane.distance(I,g)||0>h.plane.distance(J,q)&&0>h.plane.distance(J,g)||0>h.plane.distance(K,q)&&0>h.plane.distance(K,g)||0>h.plane.distance(L,q)&&0>h.plane.distance(L,
g))){l.projectPoint(q,D);l.projectPoint(g,E);if(0>D[2]&&0<E[2]){e.vec3d.subtract(q,g,m);var n=l.frustumPlanes,M=-h.plane.distance(n[4],q),n=M/e.vec3d.dot(m,n[4]);e.vec3d.scale(m,n,m);e.vec3d.add(q,m,q);l.projectPoint(q,D)}else if(0<D[2]&&0>E[2])e.vec3d.subtract(g,q,m),n=l.frustumPlanes,M=-h.plane.distance(n[4],g),n=M/e.vec3d.dot(m,n[4]),e.vec3d.scale(m,n,m),e.vec3d.add(g,m,g),l.projectPoint(g,E);else if(0>D[2]&&0>E[2])continue;n=k.pointLineSegmentDistanceSquared2D(D,E,t);n<a&&(a=n,e.vec3d.set(q,T),
e.vec3d.set(g,U))}b=c.p0;c=c.p1;a<d*d&&(f=k.lineLineDistanceSquared3D(T,U,b,c,ca),d=Number.MAX_VALUE,f.success&&(e.vec3d.subtract(f.pa,b,G),f=e.vec3d.length(G),e.vec3d.scale(G,1/f),d=f/e.vec3d.dist(b,c)),w(d,G))}else Y.error("intersection assumes a translation-only matrix")};a.prototype.getGLMaterials=function(){return{color:da,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:ea}};a.prototype.getAllTextureIds=function(){return[]};return a}(X);var da=function(e){function a(a,d){a=e.call(this,
a,d)||this;a.updateParameters();return a}H(a,e);a.prototype.updateParameters=function(){this.params=this.material.getParameterValues();this.selectProgram()};a.prototype.beginSlot=function(a){return a===R.TRANSPARENT_MATERIAL};a.prototype.getProgram=function(){return this.program};a.prototype.selectProgram=function(){this.program=this.programRep.getProgram(S.colorPass,{screenScale:"screen"===this.params.type,wall:"wall"===this.params.type,stipple:null!=this.params.stippleLength,slice:this.params.slicePlaneEnabled})};
a.prototype.bind=function(a,d){var b=this.program,c=this.params;a.bindProgram(b);b.setUniform4fv("eColor",c.color);b.setUniform1f("miterLimit",c.miterLimit);b.setUniform1f("nearPlane",d.nearFar[0]);"screen"===c.type?(b.setUniform2fv("screenSize",[d.viewport[2],d.viewport[3]]),b.setUniform1f("extLineWidth",c.width*d.pixelRatio)):b.setUniform1f("extLineWidth",c.width);null!=c.stippleLength&&b.setUniform1f("stippleLengthDoubleInv",c.stippleLength?1/(2*c.stippleLength):0);c.polygonOffset&&(a.setPolygonOffsetFillEnabled(!0),
a.setPolygonOffset(0,-4));a.setFaceCullingEnabled(!1);a.setBlendingEnabled(!0);a.setBlendFunctionSeparate(770,771,1,771);a.setDepthTestEnabled(!0);a.setDepthWriteEnabled(1<=c.color[3])};a.prototype.release=function(a){this.params.polygonOffset&&a.setPolygonOffsetFillEnabled(!1);a.setBlendingEnabled(!1);a.setDepthWriteEnabled(!0)};a.prototype.bindView=function(a,d){a=this.program;var b=this.params;C.bindView(d.origin,d.view,a);b.slicePlaneEnabled&&C.bindSlicePlane(d.origin,d.slicePlane,a)};a.prototype.bindInstance=
function(a,d){this.program.setUniformMatrix4fv("model",d.transformation)};a.prototype.getDrawMode=function(a){return 5};return a}(Q),ea=function(e){function a(a,d){a=e.call(this,a,d)||this;a.updateParameters();return a}H(a,e);a.prototype.updateParameters=function(){this.params=this.material.getParameterValues();this.selectProgram()};a.prototype.beginSlot=function(a){return a===R.OPAQUE_MATERIAL};a.prototype.getProgram=function(){return this.program};a.prototype.selectProgram=function(){this.program=
this.programRep.getProgram(S.highlightPass,{screenScale:"screen"===this.params.type,wall:"wall"===this.params.type,stipple:null!=this.params.stippleLength,slice:this.params.slicePlaneEnabled})};a.prototype.bind=function(a,d){var b=this.program,c=this.params;a.bindProgram(b);b.setUniform4fv("eColor",c.color);b.setUniform1f("miterLimit",c.miterLimit);b.setUniform1f("nearPlane",d.nearFar[0]);"screen"===c.type?(b.setUniform2fv("screenSize",[d.viewport[2],d.viewport[3]]),b.setUniform1f("extLineWidth",
c.width*d.pixelRatio)):b.setUniform1f("extLineWidth",c.width);null!=c.stippleLength&&b.setUniform1f("stippleLengthDoubleInv",c.stippleLength?1/(2*c.stippleLength):0);c.polygonOffset&&(a.setPolygonOffsetFillEnabled(!0),a.setPolygonOffset(0,-4));a.setFaceCullingEnabled(!1);a.setDepthTestEnabled(!0);a.setDepthWriteEnabled(1<=c.color[3])};a.prototype.release=function(a){this.params.polygonOffset&&a.setPolygonOffsetFillEnabled(!1);a.setDepthWriteEnabled(!0)};a.prototype.bindView=function(a,d){a=this.program;
var b=this.params;C.bindView(d.origin,d.view,a);b.slicePlaneEnabled&&C.bindSlicePlane(d.origin,d.slicePlane,a)};a.prototype.bindInstance=function(a,d){this.program.setUniformMatrix4fv("model",d.transformation)};a.prototype.getDrawMode=function(a){return 5};return a}(Q),Z={color:[1,1,1,1],width:0,type:"screen",join:"miter",miterLimit:5,polygonOffset:!1,stippleLength:null,slicePlaneEnabled:!1},N=P.newLayout().vec3f(k.VertexAttrConstants.POSITION).vec2f(k.VertexAttrConstants.UV0).vec3f(k.VertexAttrConstants.AUXPOS1).vec3f(k.VertexAttrConstants.AUXPOS2).vec4f(k.VertexAttrConstants.COLOR).f32(k.VertexAttrConstants.SIZE),
ba=function(){function e(a){this.canBeMerged=a;this.vertexBufferLayout=N;this.numVertsAtJoin=4;this.numVertsAtCap=2}e.prototype.allocate=function(a){return N.createBuffer(a)};e.prototype.elementCount=function(a){a=(a.indices[k.VertexAttrConstants.POSITION].length/2+1-2)*this.numVertsAtJoin+2*this.numVertsAtCap;this.canBeMerged&&(a+=2);return a};e.prototype.write=function(a,e,d,b,c){d=e.vertexAttr[k.VertexAttrConstants.POSITION].data;var f=e.indices&&e.indices[k.VertexAttrConstants.POSITION];f&&f.length!==
2*(d.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");f=e.vertexAttr[k.VertexAttrConstants.COLOR]?e.vertexAttr[k.VertexAttrConstants.COLOR].data:fa;e=e.vertexAttr[k.VertexAttrConstants.SIZE]?e.vertexAttr[k.VertexAttrConstants.SIZE].data:ga;var l=d.length/3;a=a.transformation;b=b.position.typedBuffer;var h=0,t=this.vertexBufferLayout.stride/4,q=c*=t;this.canBeMerged&&(c+=t);var n=d[0],g=d[1],m=d[2];if(a)var v=n,y=g,r=m,n=a[0]*v+a[4]*y+a[8]*r+a[12],g=a[1]*v+a[5]*y+a[9]*r+a[13],
m=a[2]*v+a[6]*y+a[10]*r+a[14];var z=d[3],A=d[4],r=d[5];a&&(v=z,y=A,z=a[0]*v+a[4]*y+a[8]*r+a[12],A=a[1]*v+a[5]*y+a[9]*r+a[13],r=a[2]*v+a[6]*y+a[10]*r+a[14]);for(var w=n,p=g,B=m,u=0;u<l;u++)v=3*u,u<l-1&&(z=d[v+3],A=d[v+4],r=d[v+5],a&&(v=z,y=A,z=a[0]*v+a[4]*y+a[8]*r+a[12],A=a[1]*v+a[5]*y+a[9]*r+a[13],r=a[2]*v+a[6]*y+a[10]*r+a[14])),h+=Math.sqrt((w-n)*(w-n)+(p-g)*(p-g)+(B-m)*(B-m)),b[c++]=w,b[c++]=p,b[c++]=B,b[c++]=h,b[c++]=0===u?-1.2:-1,b[c++]=n,b[c++]=g,b[c++]=m,b[c++]=z,b[c++]=A,b[c++]=r,b[c++]=f[0],
b[c++]=f[1],b[c++]=f[2],b[c++]=f[3],b[c++]=e[0],b[c++]=w,b[c++]=p,b[c++]=B,b[c++]=h,b[c++]=0===u?1.2:1,b[c++]=n,b[c++]=g,b[c++]=m,b[c++]=z,b[c++]=A,b[c++]=r,b[c++]=f[0],b[c++]=f[1],b[c++]=f[2],b[c++]=f[3],b[c++]=e[0],0<u&&u<l-1&&(b[c++]=w,b[c++]=p,b[c++]=B,b[c++]=h,b[c++]=-1.2,b[c++]=n,b[c++]=g,b[c++]=m,b[c++]=z,b[c++]=A,b[c++]=r,b[c++]=f[0],b[c++]=f[1],b[c++]=f[2],b[c++]=f[3],b[c++]=e[0],b[c++]=w,b[c++]=p,b[c++]=B,b[c++]=h,b[c++]=1.2,b[c++]=n,b[c++]=g,b[c++]=m,b[c++]=z,b[c++]=A,b[c++]=r,b[c++]=f[0],
b[c++]=f[1],b[c++]=f[2],b[c++]=f[3],b[c++]=e[0]),n=w,g=p,m=B,w=z,p=A,B=r;if(this.canBeMerged){for(u=q;u<q+t;u++)b[u]=b[u+t];d=c-t;for(u=0;u<t;u++)b[c++]=b[d++]}};return e}(),ha=P.newLayout().vec3f(k.VertexAttrConstants.POSITION).vec2f(k.VertexAttrConstants.UV0),aa=function(){function g(){this.vertexBufferLayout=ha;this.numVertsAtCap=this.numVertsAtJoin=2;this.tmpCurrent=e.vec3d.create();this.tmpLast=e.vec3d.create()}g.prototype.allocate=function(a){return N.createBuffer(a)};g.prototype.elementCount=
function(a){return(a.indices[k.VertexAttrConstants.POSITION].length/2+1-2)*this.numVertsAtJoin+2*this.numVertsAtCap};g.prototype.write=function(a,f,d,b,c){d=f.vertexAttr[k.VertexAttrConstants.POSITION].data;(f=f.indices&&f.indices[k.VertexAttrConstants.POSITION])&&f.length!==2*(d.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");f=d.length/3;a=a.transformation;var g=0,l=this.tmpCurrent,h=this.tmpLast;e.vec3d.set3(d[0],d[1],d[2],l);for(var m=0;m<f;m++){var p=3*m;e.vec3d.set(l,
h);e.vec3d.set3(d[p],d[p+1],d[p+2],l);a&&e.mat4d.multiplyVec3(a,l,l);g+=e.vec3d.dist2(h,l);b.position.setVec(c,l);b.uv0.set(c,0,g);b.uv0.set(c,1,-1);++c;b.position.setVec(c,l);b.uv0.set(c,0,g);b.uv0.set(c,1,1);++c}};return g}(),fa=[255,255,255,255],ga=[0,0,0,0],q=e.vec3d.create(),g=e.vec3d.create(),m=e.vec3d.create(),G=e.vec3d.create(),D=e.vec3d.create(),E=e.vec3d.create(),T=e.vec3d.create(),U=e.vec3d.create(),ca={success:!1,dist2:0,pa:e.vec3d.create(),pb:e.vec3d.create()},F=[e.vec3d.create(),e.vec3d.create(),
e.vec3d.create(),e.vec3d.create()],p=[e.vec3d.create(),e.vec3d.create(),e.vec3d.create(),e.vec3d.create()],I=h.plane.create(),J=h.plane.create(),K=h.plane.create(),L=h.plane.create();return O});