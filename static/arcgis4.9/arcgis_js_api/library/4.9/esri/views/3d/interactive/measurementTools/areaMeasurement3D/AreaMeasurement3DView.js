// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/Handles ../../../../../core/StackedObjectPool ../directLineMeasurement3D/LaserLineRenderer ../support/Label ../support/LabelSegment ../support/labelUtils ../support/PathSegmentInterpolator ../support/viewUtils ../../../lib/gl-matrix ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryData ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Layer ../../../webgl-engine/lib/Object3D ../../../webgl-engine/lib/Selector ../../../webgl-engine/materials/CheckerBoardMaterial ../../../webgl-engine/materials/ColorMaterial ../../../webgl-engine/materials/DefaultMaterial ../../../webgl-engine/materials/RibbonLineMaterial ../../../webgl-engine/parts/Model".split(" "),
function(u,Q,R,S,G,H,I,n,y,v,F,m,g,C,J,D,K,p,L,M,N,O,w,f){var x=new H(function(){return g.vec3d.create()}),q;(function(c){c[c.Small=12]="Small";c[c.Large=16]="Large"})(q||(q={}));var P={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:1,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,handleRadiusHovered:10,handleRadiusMouse:10,handleRadiusTouch:25,pathLineColor:[1,.5,0,1],pathLineWidth:3,intersectingLineColor:[1,
.2,0,1],perimeterLineColor:[1,.5,0,1],perimeterLineWidth:2,projectionLineColor:[1,.5,0,1],projectionLineWidth:2,projectionLineStippleSize:5,areaColor1:[1,.5,0,.5],areaColor2:[1,1,1,.5],fillColor:[1,.5,0,.5],lineSubdivisions:64,labelDistance:25};u=function(){function c(a,b){void 0===b&&(b={});this._visible=!1;this._laserLineRenderer=null;this._pathSegmentObjects=[];this._perimeterSegmentObjects=[];this._vertexHandleObjects=[];this._projectionLineObjects=[];this._areaLabel=new n(q.Large);this._pathLengthLabel=
new n(q.Small);this._cursorSegmentLengthLabel=new n(q.Small);this._perimeterLengthLabel=new n(q.Small);this._pathLabelSegments=[];this._perimeterLabelSegments=[];this._cursorSegmentLengthLabelSegment=new y;this._listenerHandles=null;this._origin=g.vec3d.create();this._originTransform=g.mat4d.create();this._tempStartPosition=g.vec3d.create();this._tempEndPosition=g.vec3d.create();this._tempHandlePosition=g.vec3d.create();this._tempMat4=g.mat4d.create();this._model=a;this._sceneView=a.sceneView;this._params=
m.copyParameter(P,b);this._layer=new K("path-measurement-tool",{},"path-measurement-tool");this._createMaterials();this._createObjects();this._selector=new L(this._sceneView.viewingMode)}c.prototype.destroy=function(){this.hide()};Object.defineProperty(c.prototype,"requiresCursorPoint",{get:function(){return"initial"===this._model.state||"drawing"===this._model.state},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"visible",{get:function(){return this._visible},set:function(a){a?
this.show():this.hide()},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"testData",{get:function(){return{labels:{area:this._areaLabel,pathLength:this._pathLengthLabel,cursorSegmentLength:this._cursorSegmentLengthLabel,perimeterLength:this._perimeterLengthLabel},laserLineRenderer:this._laserLineRenderer}},enumerable:!0,configurable:!0});c.prototype.show=function(){if(!this._visible){this._visible=!0;var a=this._sceneView._stage;this._laserLineRenderer=new I(this._sceneView.renderCoordsHelper,
{glowColor:this._params.laserLineGlowColor,glowWidth:this._params.laserLineGlowWidth,innerColor:this._params.laserLineInnerColor,innerWidth:this._params.laserLineInnerWidth,globalAlpha:this._params.laserLineGlobalAlpha});a.addRenderPlugin(this._laserLineRenderer.renderSlots,this._laserLineRenderer);this._addToStage(a);this._areaLabel.addToView(this._sceneView);this._pathLengthLabel.addToView(this._sceneView);this._cursorSegmentLengthLabel.addToView(this._sceneView);this._perimeterLengthLabel.addToView(this._sceneView);
this._initializeListeners();this._updateAll(this._model.viewData)}};c.prototype.hide=function(){if(this._visible){this._visible=!1;var a=this._sceneView._stage;a.removeRenderPlugin(this._laserLineRenderer);this._laserLineRenderer=null;this._destroyListeners();this._updatePathLength(0);this._removeFromStage(a);this._areaLabel.removeFromView(this._sceneView);this._pathLengthLabel.removeFromView(this._sceneView);this._cursorSegmentLengthLabel.removeFromView(this._sceneView);this._perimeterLengthLabel.removeFromView(this._sceneView);
this._sceneView.cursor=null}};c.prototype.vertexHandleAt=function(a,b){a=a.toArray();b="touch"===b?this._params.handleRadiusTouch:this._params.handleRadiusMouse;for(var e=this._model.path,d=0;d<e.length;++d)if(m.pointToScreenPositionDistance(e.vertex(d),a,this._sceneView)<b)return d;return null};c.prototype.pick=function(a){for(var b=new Set,e=this._sceneView._stage.getViewContent(),d=this._sceneView._stage.getAll(f.ContentType.LAYER),r=0;r<e.length;r++){var t=d[e[r]];t&&t!==this._layer&&t.isPickable&&
b.add(t.id)}e=this._sceneView.spatialReference;a=[a.screenPoint.x,this._sceneView.height-a.screenPoint.y];d=this._sceneView.sceneIntersectionHelper.pickSelectorInScreen(a,this._selector,b,!0);d=d.minResult;b=g.vec3d.create();this._sceneView.basemapTerrain.isSeeThrough()&&!d.getIntersectionPoint(b)&&(d=this._sceneView.sceneIntersectionHelper.pickSelectorInScreen(a,this._selector,null,!1),d=d.minResult);if(!d.getIntersectionPoint(b))return new c.PickResult;a=this._sceneView.renderCoordsHelper.fromRenderCoords(b,
e);return new c.PickResult("TerrainRenderer"===d.intersector?"surface":"feature",b,a)};c.prototype.overlappingHandles=function(a,b){return m.pointToPointScreenDistance(a,b,this._sceneView)<=this._params.handleRadius};c.prototype.overlapsAnyHandles=function(a,b){void 0===b&&(b=[]);for(var e=this._model.path,d=0;d<e.length;++d)if(!(0<=b.indexOf(d))&&this.overlappingHandles(a,e.vertex(d)))return!0;return!1};c.prototype._createMaterials=function(){this._handleMaterial=new O({diffuse:this._params.handleColor,
transparent:1!==this._params.handleOpacity,opacity:this._params.handleOpacity,castShadows:!1},"handle");this._handleMaterial.renderOccluded=!0;this._pathLineMaterial=new w({width:this._params.pathLineWidth,color:this._params.pathLineColor,polygonOffset:!0},"path-line");this._pathLineMaterial.renderOccluded=!0;this._intersectingPathLineMaterial=new w({width:this._params.pathLineWidth,color:this._params.intersectingLineColor,polygonOffset:!0},"intersecting-path-line");this._intersectingPathLineMaterial.renderOccluded=
!0;this._perimeterLineMaterial=new w({width:this._params.perimeterLineWidth,color:this._params.perimeterLineColor,polygonOffset:!0},"perimeter-line");this._perimeterLineMaterial.renderOccluded=!0;this._intersectingPerimeterLineMaterial=new w({width:this._params.perimeterLineWidth,color:this._params.intersectingLineColor,polygonOffset:!0},"intersecting-perimeter-line");this._intersectingPerimeterLineMaterial.renderOccluded=!0;this._projectionLineMaterial=new w({width:this._params.projectionLineWidth,
color:this._params.projectionLineColor,polygonOffset:!0,stippleLength:0},"projection-line");this._projectionLineMaterial.renderOccluded=!0;this._fillMaterial=new N({color:this._params.fillColor,transparent:1!==this._params.fillColor[3],polygonOffset:!1},"fill");this._fillMaterial.renderOccluded=!0;this._checkerBoardMaterial=new M({color1:this._params.areaColor1,color2:this._params.areaColor2,transparent:!0,polygonOffset:!0},"checker-board");this._checkerBoardMaterial.renderOccluded=!0};c.prototype._createObjects=
function(){this._cursorHandleObject=new p;this._cursorSegmentObject=new p;this._areaObject=new p};c.prototype._addToStage=function(a){a.add(f.ContentType.LAYER,this._layer);a.add(f.ContentType.MATERIAL,this._handleMaterial);a.add(f.ContentType.MATERIAL,this._pathLineMaterial);a.add(f.ContentType.MATERIAL,this._intersectingPathLineMaterial);a.add(f.ContentType.MATERIAL,this._perimeterLineMaterial);a.add(f.ContentType.MATERIAL,this._intersectingPerimeterLineMaterial);a.add(f.ContentType.MATERIAL,this._projectionLineMaterial);
a.add(f.ContentType.MATERIAL,this._fillMaterial);a.add(f.ContentType.MATERIAL,this._checkerBoardMaterial);a.addToViewContent([this._layer.id])};c.prototype._removeFromStage=function(a){a.removeFromViewContent([this._layer.id]);a.remove(f.ContentType.LAYER,this._layer.id);a.remove(f.ContentType.MATERIAL,this._handleMaterial.id);a.remove(f.ContentType.MATERIAL,this._pathLineMaterial.id);a.remove(f.ContentType.MATERIAL,this._intersectingPathLineMaterial.id);a.remove(f.ContentType.MATERIAL,this._perimeterLineMaterial.id);
a.remove(f.ContentType.MATERIAL,this._intersectingPerimeterLineMaterial.id);a.remove(f.ContentType.MATERIAL,this._projectionLineMaterial.id);a.remove(f.ContentType.MATERIAL,this._fillMaterial.id);a.remove(f.ContentType.MATERIAL,this._checkerBoardMaterial.id)};c.prototype._updateMouseCursor=function(){if("drawing"===this._model.state||"initial"===this._model.state)this._sceneView.cursor="crosshair";else if("editing"===this._model.state||"measured"===this._model.state)this._sceneView.cursor=0<this._model.draggedVertices.length?
"grabbing":null!=this._model.hoveredVertexHandle?"pointer":"crosshair"};c.prototype._syncViewData=function(a){var b=this,e=a.pathChanges;"full"===e.change?this._updateAll(a):"incremental"===e.change&&(e.updatedVertices.forEach(function(e){var d=(e-1+b._model.path.length)%b._model.path.length;b._updatePathSegment(a,e);b._updatePathSegment(a,d);b._updateVertexHandle(a,e);b._updateArea(a);b._updatePerimeterSegments(a);b._updateProjectionLines(a);b._updateLaserLine();b._updateLabels(a)}),e.updatedVertices.has(this._model.path.length-
1)&&this._updateCursorSegment(a));var d=e.change;e.clear();return d};c.prototype._updateAfterSyncViewData=function(a){var b=this._model.viewData;"full"!==this._syncViewData(b)&&a&&a(b)};c.prototype._updateOrigin=function(a){m.midpoint(a.positionsRenderCoords,this._origin);g.mat4d.identity(this._originTransform);g.mat4d.translate(this._originTransform,this._origin)};c.prototype._updateAll=function(a){this._updateOrigin(a);this._updatePathLength(a.path.length);this._updatePathSegments(a);this._updatePerimeterSegments(a);
this._updateHandles(a);this._updateMouseCursor();this._updateArea(a);this._updateProjectionLines(a);this._updateLabels(a);this._updateLaserLine()};c.prototype._updateCameraDependent=function(a){this._updateHandles(a);this._updateProjectionLines(a);this._updateLabels(a)};c.prototype._updatePathLength=function(a){this._resizeObject3DArray(this._pathSegmentObjects,a);this._resizeObject3DArray(this._perimeterSegmentObjects,a);this._resizeObject3DArray(this._vertexHandleObjects,a);m.resizeArray(this._pathLabelSegments,
a,function(){return new y});m.resizeArray(this._perimeterLabelSegments,a,function(){return new y})};c.prototype._updatePathSegments=function(a){for(var b=0;b<this._pathSegmentObjects.length;++b)this._updatePathSegment(a,b);this._updateCursorSegment(a)};c.prototype._updatePathSegment=function(a,b){var e=a.path,d=this._pathSegmentObjects[b];a.validMeasurement||b<e.length-1?(this._updatePathSegmentObject(d,a.positionsRenderCoords[b],a.positionsRenderCoords[(b+1)%e.length],this._origin,this._originTransform,
a.intersectingSegments.has(b),this._pathLabelSegments[b],a.validMeasurement?"center":"end"),this._addObject3D(d)):(d.removeAllGeometries(),this._removeObject3D(d))};c.prototype._updateCursorSegment=function(a){a=this._sceneView.renderCoordsHelper;var b=this._model.path,e=this._cursorSegmentObject;0<b.length&&"drawing"===this._model.state&&this._model.cursorPoint?(a.toRenderCoords(b.back,this._tempStartPosition),a.toRenderCoords(this._model.cursorPoint,this._tempEndPosition),this._updatePathSegmentObject(e,
this._tempStartPosition,this._tempEndPosition,this._origin,this._originTransform,!1,this._cursorSegmentLengthLabelSegment,"end"),this._addObject3D(e)):(e.removeAllGeometries(),this._removeObject3D(e))};c.prototype._updatePathSegmentObject=function(a,b,e,d,c,f,g,l){this._createInterpolatedLineGeometry(a,f?this._intersectingPathLineMaterial:this._pathLineMaterial,"path-segment",b,e,d,c,this._model.measurementMode,g,l)};c.prototype._updatePerimeterSegments=function(a){for(var b=0;b<this._perimeterSegmentObjects.length;++b)this._updatePerimeterSegment(a,
b)};c.prototype._updatePerimeterSegment=function(a,b){var e=a.path,d=this._perimeterSegmentObjects[b];a.validMeasurement&&"geodesic"!==this._model.measurementMode?(this._updatePerimeterSegmentObject(d,a.positionsFittedRenderCoords[b],a.positionsFittedRenderCoords[(b+1)%e.length],this._origin,this._originTransform,a.intersectingSegments.has(b),this._perimeterLabelSegments[b]),this._addObject3D(d)):(d.removeAllGeometries(),this._removeObject3D(d))};c.prototype._updatePerimeterSegmentObject=function(a,
b,e,d,c,f,g){this._createInterpolatedLineGeometry(a,f?this._intersectingPerimeterLineMaterial:this._perimeterLineMaterial,"perimeter-segment",b,e,d,c,this._model.measurementMode,g)};c.prototype._updateHandles=function(a){for(var b=0;b<this._vertexHandleObjects.length;++b)this._updateVertexHandle(a,b);this._updateCursorHandle(a)};c.prototype._updateVertexHandle=function(a,b){var e=this._sceneView._stage.getCamera(),d=this._vertexHandleObjects[b];this._updateHandleObject(d,a.positionsRenderCoords[b],
!0,this._model.hoveredVertexHandle===b,this._model.draggedVertices.includes(b),e);this._addObject3D(d)};c.prototype._updateCursorHandle=function(a){a=this._cursorHandleObject;if("drawing"===this._model.state&&this._model.cursorPoint){var b=this._sceneView._stage.getCamera(),e=this._tempHandlePosition;this._sceneView.renderCoordsHelper.toRenderCoords(this._model.cursorPoint,e);this._updateHandleObject(a,e,!0,!1,!1,b);this._addObject3D(a)}else a.removeAllGeometries(),this._removeObject3D(a)};c.prototype._updateHandleObject=
function(a,b,e,d,r,f){a.removeAllGeometries();e&&!r&&(m.scaleTranslateMatrix((d?this._params.handleRadiusHovered:this._params.handleRadius)*f.computePixelSizeAt(b),b,this._tempMat4),a.addGeometry(c._handleGeometry,[this._handleMaterial],this._tempMat4))};c.prototype._updateArea=function(a){switch(this._model.measurementMode){case "euclidean":this._updateAreaEuclidean(a);break;case "geodesic":this._updateAreaGeodesic(a)}};c.prototype._updateAreaEuclidean=function(a){var b=this,e=this._areaObject;if(a.validMeasurement&&
0===a.intersectingSegments.size&&a.triangleIndices){var d=[],c=g.vec3d.create();a.positionsFittedRenderCoords.forEach(function(a){g.vec3d.subtract(a,b._origin,c);d.push(c[0],c[1],c[2])});var f=[];a.positionsProjected.forEach(function(a){f.push(a[0],a[1])});var E=new J({position:{size:3,data:d},uv0:{size:2,data:f}},{position:a.triangleIndices,uv0:a.triangleIndices}),E=new C(E,"area");e.removeAllGeometries();e.addGeometry(E,[this._checkerBoardMaterial],this._originTransform);this._addObject3D(e);this._checkerBoardMaterial.setParameterValues({size:[a.checkerSize,
a.checkerSize]})}else e.removeAllGeometries(),this._removeObject3D(e)};c.prototype._updateAreaGeodesic=function(a){a=this._areaObject;a.removeAllGeometries();this._removeObject3D(a)};c.prototype._updateProjectionLines=function(a){var b=a.path;this._resizeObject3DArray(this._projectionLineObjects,b.length);for(var e=0;e<b.length;++e)this._updateProjectionLine(a,e);for(var d=Infinity,e=0;e<b.length;++e)d=Math.max(this._sceneView._stage.getCamera().computePixelSizeAt(a.positionsRenderCoords[e])),d=Math.max(this._sceneView._stage.getCamera().computePixelSizeAt(a.positionsFittedRenderCoords[e]));
this._projectionLineMaterial.setParameterValues({stippleLength:this._params.projectionLineStippleSize*d})};c.prototype._updateProjectionLine=function(a,b){var e=this._projectionLineObjects[b];e.removeAllGeometries();if(a.validMeasurement&&"euclidean"===this._model.measurementMode){a=g.vec3d.create();g.vec3d.subtract(this._model.viewData.positionsRenderCoords[b],this._origin,a);var d=g.vec3d.create();g.vec3d.subtract(this._model.viewData.positionsFittedRenderCoords[b],this._origin,d);b=new C(D.createPolylineGeometry([a,
d]),"projected-line");e.addGeometry(b,[this._projectionLineMaterial],this._originTransform);this._addObject3D(e)}else this._removeObject3D(e)};c.prototype._updateLabels=function(a){var b=this,e=this._sceneView._stage.getCamera(),d=this._params.labelDistance,c=this._model,f="geodesic"===c.measurementMode,g="drawing"===c.state,l=function(a,c){return a.visible&&c.visible&&b._sceneView.overlay.overlaps(a.textItem,c.textItem)},h=this._areaLabel,k=v.positionLabelOnPoint(h,a.areaCentroid,e);h.text=c.areaLabel;
h.visible=k&&a.validMeasurement&&0===a.intersectingSegments.size&&null!=c.areaLabel;h=this._pathLengthLabel;k=v.positionLabelOnCorner(h,this._pathLabelSegments[a.pathLengthLabelSegmentIndex],this._cursorSegmentLengthLabelSegment,d,e);h.text=c.pathLengthLabel;h.visible=k&&g&&0<c.path.length;h=this._cursorSegmentLengthLabel;k=this._cursorSegmentLengthLabelSegment;k=v.positionLabelOnSegment(h,k,d,"bottom",e);h.text=c.cursorSegmentLengthLabel;h.visible=k&&g&&c.cursorSegmentLength&&0!==c.cursorSegmentLength.value;
l(this._cursorSegmentLengthLabel,this._pathLengthLabel)&&(this._cursorSegmentLengthLabel.visible=!1);l(this._pathLengthLabel,this._areaLabel)&&(this._pathLengthLabel.visible=!1);h=this._perimeterLengthLabel;if(c.validMeasurement&&0===a.intersectingSegments.size)for(g=0;g<a.path.length;++g)if(k=(a.perimeterLengthLabelSegmentIndex+g)%a.path.length,k=f?this._pathLabelSegments[k]:this._perimeterLabelSegments[k],k=v.positionLabelOnSegment(h,k,d,"top",e),h.text=c.perimeterLengthLabel,h.visible=k,l(h,this._areaLabel))h.visible=
!1;else break;else h.visible=!1};c.prototype._lastAddedDraggedVertex=function(){var a=this._model.draggedVertices;return 0<a.length?a.items[a.length-1]:null};c.prototype._getFocusPoint=function(){var a=this._model,b=this._lastAddedDraggedVertex();switch(a.state){case "drawing":return a.cursorPoint?a.cursorPoint:a.path.vertex(null!=b?b:a.path.length-1);case "editing":return null!=b?a.path.vertex(b):null;default:return a.cursorPoint}};c.prototype._updateLaserLine=function(){var a=this._model,b=this._params.laserLineEnabled&&
"measured"!==a.state;this._laserLineRenderer.focusSphereActive=!1;this._laserLineRenderer.segmentActive=!1;a=this._getFocusPoint();b&&a?(b=this._tempHandlePosition,this._sceneView.renderCoordsHelper.toRenderCoords(a,b),this._laserLineRenderer.focusPosition=b,this._laserLineRenderer.focusPlaneActive=!0):this._laserLineRenderer.focusPlaneActive=!1};c.prototype._addObject3D=function(a){a.parentLayer||(this._layer.addObject(a),this._sceneView._stage.add(f.ContentType.OBJECT,a))};c.prototype._removeObject3D=
function(a){a.parentLayer&&(this._layer.removeObject(a),this._sceneView._stage.remove(f.ContentType.OBJECT,a.id))};c.prototype._resizeObject3DArray=function(a,b){var c=this;m.resizeArray(a,b,function(){return new p},function(a){c._removeObject3D(a)})};c.prototype._createInterpolatedLineGeometry=function(a,b,c,d,f,q,w,l,h,k){x.push();var e=this._sceneView.renderCoordsHelper,r=[],u=[],n=function(a,b){var c=x.allocate();g.vec3d.subtract(a,q,c);r.push(c);u.push(b)};if("euclidean"===l){var z=x.allocate();
m.midpoint([d,f],z);l=x.allocate();e.worldUpAtPosition(z,l);n(d,l);n(f,l);h&&h.update(d,f,k)}else{d=this._getSegmentInterpolator(d,f);f=this._params.lineSubdivisions+1&-2;var v=z=null,p=f/2-1,t=f/2;"start"===k?(p=0,t=1):"end"===k&&(p=f-2,t=f-1);for(var A=0;A<f;++A){var y=A/(f-1),B=x.allocate();l=x.allocate();d.eval(y,B);e.worldUpAtPosition(B,l);A===p&&(z=B);A===t&&(v=B);n(B,l)}h&&h.update(z,v,k)}c=new C(D.createPolylineGeometry(r,u),c);a.removeAllGeometries();a.addGeometry(c,[b],w);x.pop()};c.prototype._getSegmentInterpolator=
function(a,b){var c=this._sceneView.spatialReference,d=this._sceneView.renderCoordsHelper.spatialReference;return c.isWebMercator||c.isWGS84?new F.Spherical(a,b,d,d):new F.Linear(a,b)};c.prototype._initializeListeners=function(){var a=this;this._listenerHandles=new G;this._listenerHandles.add(this._model.watch("state",function(){a._updateMouseCursor();a._updateLaserLine()}));this._listenerHandles.add(this._model.draggedVertices.on("change",function(){a._updateLaserLine()}));this._listenerHandles.add(this._model.watch("hoveredVertexHandle",
function(){a._updateMouseCursor();a._updateAfterSyncViewData(function(b){a._updateHandles(b)})}));this._listenerHandles.add(this._model.draggedVertices.on("change",function(){a._updateMouseCursor();a._updateAfterSyncViewData(function(b){a._updateHandles(a._model.viewData)})}));this._listenerHandles.add(this._model.watch("cursorPoint",function(){a._updateAfterSyncViewData(function(b){a._updateCursorSegment(b);a._updateCursorHandle(b);"drawing"===a._model.state&&a._updateLabels(b);a._updateLaserLine()})}));
this._listenerHandles.add(this._sceneView.state.watch("camera",function(){a._updateAfterSyncViewData(function(b){a._updateCameraDependent(a._model.viewData)})}));this._listenerHandles.add(this._model.watch(["unit","measurementMode"],function(){a._updateAll(a._model.viewData)}));this._listenerHandles.add(this._model.watch("viewData",function(b){a._syncViewData(b)}))};c.prototype._destroyListeners=function(){this._listenerHandles.destroy();this._listenerHandles=null};c._handleGeometry=new C(D.createSphereGeometry(1,
32,32),"handle");return c}();(function(c){var a=function(){return function(){}}();c.PickRequest=a;a=function(){return function(a,c,d){void 0===a&&(a=null);void 0===c&&(c=null);void 0===d&&(d=null);this.type=a;this.scenePoint=c;this.mapPoint=d}}();c.PickResult=a})(u||(u={}));return u});