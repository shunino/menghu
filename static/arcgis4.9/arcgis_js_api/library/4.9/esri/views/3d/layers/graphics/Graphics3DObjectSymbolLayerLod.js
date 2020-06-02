// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojo/errors/CancelError ../../../../Color ../../../../core/asyncUtils ../../../../core/lang ../../../../core/screenUtils ../../../../geometry/support/aaBoundingBox ../../../../symbols/ObjectSymbol3DLayer ./ElevationAligners ./Graphics3DLodInstanceGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ./lodResourceUtils ./primitiveObjectSymbolUtils ../support/FastSymbolUpdates ../../lib/gl-matrix ../../support/projectionUtils ../../webgl-engine/Stage ../../webgl-engine/lib/Util ../../webgl-engine/lib/lodRendering/LodRenderer ../../webgl-engine/lib/lodRendering/LodResources ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(A,T,I,J,B,K,C,D,m,L,M,N,r,O,p,E,y,u,n,z,k,P,Q,t,R){A=function(v){function d(){var a=null!==v&&v.apply(this,arguments)||this;a._instanceIndexToGraphicUid={};return a}I(d,v);Object.defineProperty(d.prototype,"lodRenderer",{get:function(){return this._lodRenderer},enumerable:!0,configurable:!0});d.prototype._prepareResources=function(){var a=this.symbol,b=this._getStageIdHint();this._optionalFields=[];if(!this._isPropertyDriven("size")){var c=p.validateSymbolLayerSize(this.symbol);if(c){this._logWarning(c);
this.reject();return}}a.resource&&a.resource.href?this._prepareModelResources(a.resource.href,b):this._preparePrimitiveResources(a.resource?a.resource.primitive:"sphere",b)};d.prototype._preparePrimitiveResources=function(a,b){if(y.isValidPrimitive(a)){var c=this.symbol,e=this._getMaterialOpacity(),e={specular:[0,0,0],opacity:e,transparent:1>e||this._isPropertyDriven("opacity"),instanced:["transformation"],ambient:w,diffuse:w},f=this.symbolContainer;if("point-3d"===f.type&&f.verticalOffset){var f=
f.verticalOffset,d=f.minWorldLength,h=f.maxWorldLength;e.verticalOffset={screenLength:D.pt2px(f.screenLength),minWorldLength:d||0,maxWorldLength:null!=h?h:Infinity};e.castShadows=!1}this._context.screenSizePerspectiveEnabled&&(e.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings);this._isPropertyDriven("color")?e.externalColor=x:(f=c.material?B.toUnitRGBA(c.material.color):x,e.externalColor=f);this._fastUpdates=u.initFastSymbolUpdatesState(this._context.renderer,this._fastVisualVariableConvertOptions());
this._fastUpdates.enabled?(C.mixin(e,this._fastUpdates.materialParameters),e.instanced.push("featureAttribute"),this._optionalFields.push("featureAttribute")):this._hasPerInstanceColor()&&(e.instanced.push("color"),this._optionalFields.push("color"));e=new R(e,b+"_objectmat");(this._lodResources=y.primitiveLodResources(a,e,b))?(this._resourceBoundingBox=m.create(y.primitiveBoundingBox(a)),this._resourceSize=m.size(this._resourceBoundingBox),this._symbolSize=p.computeSizeWithResourceSize(this._resourceSize,
c),this.finalizeSymbolResources(),this.initializeLodRenderer(),this.resolve()):(this._logWarning("Unknown object symbol primitive: "+a),this.reject())}else this._logWarning("Unknown object symbol primitive: "+a),this.reject()};d.prototype._prepareModelResources=function(a,b){var c=this,e=["transformation"];b={materialParamsMixin:{instanced:e},idHint:b,streamDataSupplier:this._context.streamDataSupplier};this._fastUpdates=u.initFastSymbolUpdatesState(this._context.renderer,this._fastVisualVariableConvertOptions());
this._fastUpdates.enabled?(C.mixin(b.materialParamsMixin,this._fastUpdates.materialParameters),e.push("featureAttribute"),this._optionalFields.push("featureAttribute")):this._hasPerInstanceColor()&&(e.push("color"),this._optionalFields.push("color"));e=this.symbolContainer;if("point-3d"===e.type&&e.verticalOffset){var e=e.verticalOffset,d=e.minWorldLength,g=e.maxWorldLength;b.materialParamsMixin.verticalOffset={screenLength:D.pt2px(e.screenLength),minWorldLength:d||0,maxWorldLength:null!=g?g:Infinity};
b.materialParamsMixin.castShadows=!1}this._symbolLoaderPromise=K.safeCast(E.fetchObjectLodResources(a,b));this._symbolLoaderPromise.then(function(a){c._symbolLoaderPromise=null;if(!c.isRejected()){E.fillEstimatedMinScreenSpaceRadius(a);c._lodResources=a;var b=c._context,e=c._getExternalColorParameters(c.symbol.material),d=c._getMaterialOpacity(),f=c._isPropertyDriven("opacity");a=t.materialsFromLodResources(c._lodResources);c._originalOpacities=a.map(function(a){return a.getParameterValues().opacity||
1});a.forEach(function(a){var c=a.getParameterValues();a.setParameterValues(e);var h=c.opacity*d;a.setParameterValues({opacity:h,transparent:1>h||f||c.transparent});b.screenSizePerspectiveEnabled&&a.setParameterValues({screenSizePerspective:b.sharedResources.screenSizePerspectiveSettings})});c._resourceBoundingBox=t.computeBoundingBox(c._lodResources.levels[0]);c._resourceSize=m.size(c._resourceBoundingBox);c._pivotOffset=c._lodResources.levels[0].pivotOffset;c._symbolSize=p.computeSizeWithResourceSize(c._resourceSize,
c.symbol);c.finalizeSymbolResources();c.initializeLodRenderer();u.updateFastSymbolUpdatesState(c._fastUpdates,c._context.renderer,c._fastVisualVariableConvertOptions())&&c._materials.forEach(function(a){return a.setParameterValues(c._fastUpdates.materialParameters)});c.resolve()}},function(a){c._symbolLoaderPromise=null;if(!c.isFulfilled()){if(!(a instanceof J)){var b="ObjectSymbol3DLayer failed to load";a&&a.message&&(b+=" ("+a.message+")");c._logWarning(b)}c.reject()}})};d.prototype.finalizeSymbolResources=
function(){var a=this._context.stage;this._materials=t.materialsFromLodResources(this._lodResources);this._originalOpacities||(this._originalOpacities=this._materials.map(function(a){return a.getParameterValues().opacity||1}));this._materials.forEach(function(b){a.add(k.ModelContentType.MATERIAL,b)});this._textures=t.texturesFromLodResources(this._lodResources);this._textures.forEach(function(b){a.add(k.ModelContentType.TEXTURE,b)});this._geometries=t.geometriesFromLodResources(this._lodResources);
this._geometries.forEach(function(b){a.add(k.ModelContentType.GEOMETRY,b)})};d.prototype.initializeLodRenderer=function(){var a=this,b=this._context.stage;this._lodRenderer=new Q.LodRenderer(this._lodResources,this._optionalFields,function(b){return{layerUid:a._context.layer.uid,graphicUid:a._instanceIndexToGraphicUid[b]}});b.addRenderPlugin(this._lodRenderer.slots,this._lodRenderer)};d.prototype._getExternalColorParameters=function(a){var b={};this._isPropertyDriven("color")?b.externalColor=x:a&&
a.color?b.externalColor=B.toUnitRGBA(a.color):(b.externalColor=x,b.colorMixMode="ignore");return b};d.prototype.destroy=function(){v.prototype.destroy.call(this);this.isFulfilled()||this.reject();this._symbolLoaderPromise&&this._symbolLoaderPromise.cancel();var a=this._context.stage;this._lodRenderer&&(a.removeRenderPlugin(this._lodRenderer),this._lodRenderer.destroy());this._materials&&this._materials.forEach(function(b){return a.remove(k.ModelContentType.MATERIAL,b.id)});this._textures&&this._textures.forEach(function(b){return a.remove(k.ModelContentType.TEXTURE,
b.id)});this._geometries&&this._geometries.forEach(function(b){return a.remove(k.ModelContentType.GEOMETRY,b.id)})};d.prototype.createGraphics3DGraphic=function(a){var b=a.graphic;if(!this._validateGeometry(b.geometry))return null;var c=r.placePointOnGeometry(b.geometry);if(!c)return this._logWarning("unsupported geometry type for icon symbol: "+b.geometry.type),null;var e="graphic"+b.uid,d=this.getGraphicElevationContext(b);return this._createAs3DShape(b,c,a.renderingInfo,d,e,b.uid)};d.prototype.notifyDestroyGraphicLayer=
function(a){delete this._instanceIndexToGraphicUid[a.instanceIndex]};d.prototype.graphicLayerToGraphicId=function(a){return 0};d.prototype.layerPropertyChanged=function(a,b,c){var e=this;if("opacity"===a){var d=this._isPropertyDriven("opacity");this._materials.forEach(function(a,b){b=e._getMaterialOpacity()*e._originalOpacities[b];a.setParameterValues({opacity:b,transparent:1>b||d})});return!0}if("elevationInfo"===a){this._updateElevationContext();for(var g in b){var h=b[g];if(a=c(h))h=this.getGraphicElevationContext(h.graphic),
a.needsElevationUpdates=r.needsElevationUpdates3D(h.mode),a.elevationContext.set(h)}return!0}return!1};d.prototype.applyRendererDiff=function(a,b,c,e){var d=this,g;for(g in a.diff)switch(g){case "visualVariables":if(u.updateFastSymbolUpdatesState(this._fastUpdates,b,this._fastVisualVariableConvertOptions()))this._materials.forEach(function(a){return a.setParameterValues(d._fastUpdates.materialParameters)});else return!1;break;default:return!1}return!0};Object.defineProperty(d.prototype,"numberOfVertices",
{get:function(){return t.geometriesFromLodLevelResources(this._lodResources.levels[0]).reduce(function(a,b){return a+b.data.getIndices(P.VertexAttrConstants.POSITION).length},0)},enumerable:!0,configurable:!0});d.prototype._createAs3DShape=function(a,b,c,e,d,g){var h=this,f=this.getFastUpdateAttrValues(a);a=!this._fastUpdates.enabled&&this._hasPerInstanceColor()?p.mixinColorAndOpacity(c.color,c.opacity):null;f?function(a){return u.evaluateModelTransform(h._fastUpdates.materialParameters,f,a)}:null;
d=this._context.clippingExtent;z.pointToVector(b,q,this._context.elevationProvider.spatialReference);if(d&&!r.pointInBox2D(q,d))return null;z.pointToVector(b,q,this._context.renderSpatialReference);d="absolute-height"!==e.mode;var m=r.computeElevation(this._context.elevationProvider,b,e,this._context.renderCoordsHelper,d?F:null),l=G,k=S;n.mat4d.identity(G);this._applyObjectRotation(c,l);this._applyObjectRotation(this.symbol,l);this._applyObjectScale(c,l);this._applyAnchor(l);q[0]=b.x;q[1]=b.y;q[2]=
m;z.computeLinearTransformation(b.spatialReference,q,k,this._context.renderSpatialReference)||console.warn("Could not locate symbol object properly, it might be misplaced");c=this._lodRenderer.instanceData;n.mat4d.multiply(k,l,k);l=c.addInstance();this._instanceIndexToGraphicUid[l]=g;c.setTransform(l,k);f&&c.setFeatureAttribute(l,f);a&&c.setColor(l,a);g=new N(this,l,M.perLodInstanceElevationAligner,e);d&&(g.alignedTerrainElevation=F.terrainElevation);g.needsElevationUpdates=r.needsElevationUpdates3D(e.mode);
r.extendPointGraphicElevationContext(g,b,this._context.elevationProvider);return g};d.prototype._applyObjectScale=function(a,b){this._fastUpdates.enabled&&this._fastUpdates.customTransformation||(a=this._isPropertyDriven("size")&&a.size?a.size:this._symbolSize,a=p.computeObjectScale(a,this._symbolSize,this._resourceSize,this._context.renderCoordsHelper.unitInMeters),1===a[0]&&1===a[1]&&1===a[2]||n.mat4d.scale(b,a))};d.prototype._applyObjectRotation=function(a,b){if(!(this._fastUpdates.enabled&&this._fastUpdates.customTransformation&&
a instanceof L))return p.computeObjectRotation(a.heading,a.tilt,a.roll,b)};d.prototype._computeAnchor=function(){switch(this.symbol.anchor){case "center":return n.vec3d.scale(m.center(this._resourceBoundingBox),-1);case "top":var a=m.center(this._resourceBoundingBox);return[-a[0],-a[1],-this._resourceBoundingBox[5]];case "bottom":return a=m.center(this._resourceBoundingBox),[-a[0],-a[1],-this._resourceBoundingBox[2]];default:return this._pivotOffset?n.vec3d.scale(this._pivotOffset,-1,Array(3)):H}};
d.prototype._applyAnchor=function(a){if(!this._fastUpdates.enabled||!this._fastUpdates.customTransformation){var b=this._computeAnchor();b&&n.mat4d.translate(a,b)}};d.prototype._hasPerInstanceColor=function(){return this._isPropertyDriven("color")||this._isPropertyDriven("opacity")};d.prototype._fastVisualVariableConvertOptions=function(){var a=this._resourceBoundingBox?m.size(this._resourceBoundingBox):w,b=this._resourceBoundingBox?this._computeAnchor():H,c=this._context.renderCoordsHelper.unitInMeters,
d=p.computeObjectScale(this._symbolSize,this._symbolSize,this._resourceSize,c);return{modelSize:a,symbolSize:this._symbolSize||w,unitInMeters:c,transformation:{anchor:b,scale:d,rotation:[this.symbol.tilt||0,this.symbol.roll||0,this.symbol.heading||0]}}};return d}(O);var w=[1,1,1],x=[1,1,1,1],H=[0,0,0],q=n.vec3d.create(),G=n.mat4d.create(),S=n.mat4d.create(),F={verticalDistanceToGround:0,terrainElevation:0};return A});