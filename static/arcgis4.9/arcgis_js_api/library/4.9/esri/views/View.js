// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("../Graphic ../core/Accessor ../core/Collection ../core/CollectionFlattener ../core/Evented ../core/Handles ../core/lang ../core/Logger ../core/Promise ../core/watchUtils ../core/promiseUtils ../core/scheduling ../geometry/Extent ../geometry/HeightModelInfo ../geometry/SpatialReference ./LayerViewManager ./RefreshManager ./BasemapView ./GroundView ./support/DefaultsFromMap ./input/Input ./navigation/Navigation".split(" "),function(h,k,e,l,m,n,p,q,r,b,d,t,u,v,w,x,y,z,A,f,B,C){var g=q.getLogger("esri.views.View");
return k.createSubclass([r,m],{declaredClass:"esri.views.View",properties:{allLayerViews:{readOnly:!0},basemapView:{},animation:{},resizing:{},interacting:{},graphics:{type:e.ofType(h)},groundView:{},defaultsFromMap:f,heightModelInfo:{readOnly:!0,type:v,dependsOn:["map.heightModelInfo?","defaultsFromMap.heightModelInfo"]},initialExtent:{readOnly:!0,type:u,dependsOn:["defaultsFromMap.extent"]},initialExtentRequired:{},layerViews:{type:e},map:{},ready:{readOnly:!0,dependsOn:"map spatialReference width height initialExtentRequired initialExtent defaultsFromMap.isSpatialReferenceDone map.loaded?".split(" ")},
size:{readOnly:!0,dependsOn:["width","height"],get:function(){return[this.width,this.height]}},spatialReference:{type:w,dependsOn:["defaultsFromMap.spatialReference","defaultsFromMap.vcsWkid","defaultsFromMap.latestVcsWkid"]},stationary:{dependsOn:["animation","interacting","resizing"]},type:{},updating:{},padding:{},width:{},height:{},cursor:{},spatialReferenceWarningDelay:1E3,renderContext:{},input:{readOnly:!0},navigation:{readOnly:!0}},constructor:function(a){this._viewHandles=new n;this._viewHandles.add(this.watch("ready",
function(a,D){this._currentSpatialReference=a?this.spatialReference:null;this.notifyChange("spatialReference");!a&&D&&this.layerViewManager.clear()}.bind(this)));this.allLayerViews=new l({root:this,rootCollectionNames:["basemapView.baseLayerViews","groundView.layerViews","layerViews","basemapView.referenceLayerViews"],getChildrenFunction:function(a){return a.layerViews}});this.defaultsFromMap=new f({view:this});this.input=new B;this.navigation=new C},getDefaults:function(){return p.mixin(this.inherited(arguments),
{layerViews:[],graphics:[],padding:{left:0,top:0,right:0,bottom:0}})},initialize:function(){var a=this.validate().then(function(){this._isValid=!0;this.notifyChange("ready");var a=function(){return b.whenOnce(this,"ready").then(function(){return d.after(0)}.bind(this)).then(function(){if(!this.ready)return a()}.bind(this))}.bind(this);return a()}.bind(this));this.addResolvingPromise(a);this.basemapView=new z({view:this});this.groundView=new A({view:this});this.layerViewManager=new x({view:this});
this.refreshManager=new y({view:this});this._resetInitialViewPropertiesFromContent();var c;b.init(this.defaultsFromMap,"isSpatialReferenceDone",function(a){var b=!!(this.map&&0<this.map.allLayers.length);a&&!this.spatialReference&&b||!c?a&&!this.spatialReference&&b&&!c&&(c=d.after(this.spatialReferenceWarningDelay),c.then(function(){g.warn("#spatialReference","no spatial reference could be derived from the currently added map layers")}).catch(function(){})):(c.cancel(),c=null)}.bind(this),!0)},destroy:function(){this.destroyed||
(this.basemapView.destroy(),this.groundView.destroy(),this.destroyLayerViews(),this.refreshManager.destroy(),this.defaultsFromMap.destroy(),this.defaultsFromMap=null,this.navigation&&(this.navigation.destroy(),this._set("navigation",null)),this._viewHandles.destroy(),this.map=null)},destroyLayerViews:function(){this.layerViewManager.destroy()},_viewHandles:null,_isValid:!1,_readyCycleForced:!1,_userSpatialReference:null,_currentSpatialReference:null,animation:null,basemapView:null,groundView:null,
graphics:null,heightModelInfo:null,_heightModelInfoGetter:function(){return this.getDefaultHeightModelInfo()},interacting:!1,layerViews:null,map:null,_mapSetter:function(a){var c=this._get("map");a!==c&&(a&&a.load&&a.load(),this._forceReadyCycle(),this._resetInitialViewPropertiesFromContent(),this._set("map",a))},padding:null,_readyGetter:function(){return!!(this._isValid&&!this._readyCycleForced&&this.map&&0!==this.width&&0!==this.height&&this.spatialReference&&(!this.map.load||this.map.loaded)&&
(this._currentSpatialReference||!this.initialExtentRequired||this.initialExtent||this.defaultsFromMap&&this.defaultsFromMap.isSpatialReferenceDone)&&this.defaultsFromMap&&this.defaultsFromMap.isTileInfoDone&&this.isSpatialReferenceSupported(this.spatialReference))},spatialReference:null,_spatialReferenceGetter:function(){var a=this._userSpatialReference||this._currentSpatialReference||this.getDefaultSpatialReference()||null;a&&this.isHeightModelInfoRequired&&this.defaultsFromMap&&(a=a.clone(),a.vcsWkid=
this.defaultsFromMap.vcsWkid,a.latestVcsWkid=this.defaultsFromMap.latestVcsWkid);return a},_spatialReferenceSetter:function(a){this._userSpatialReference=a;this._set("spatialReference",a)},stationary:!0,_stationaryGetter:function(){return!this.animation&&!this.interacting&&!this.resizing},type:null,updating:!1,initialExtentRequired:!0,initialExtent:null,_initialExtentGetter:function(){return this.defaultsFromMap&&this.defaultsFromMap.extent},cursor:"default",renderContext:null,input:null,navigation:null,
whenLayerView:function(a){return this.layerViewManager.whenLayerView(a)},getDefaultSpatialReference:function(){return this.get("defaultsFromMap.spatialReference")},getDefaultHeightModelInfo:function(){return this.get("map.supportsHeightModelInfo")&&this.get("map.heightModelInfo")||this.get("defaultsFromMap.heightModelInfo")||null},validate:function(){return d.resolve()},isSpatialReferenceSupported:function(){return!0},isTileInfoRequired:function(){return!1},when:function(a,c,b){this.isResolved()&&
!this.ready&&g.warn("#when()",'Calling view.when() while the view is no longer ready but was already resolved once will resolve immediately. Use watchUtils.whenOnce(view, "ready").then(...) instead.');return this.inherited(arguments)},_resetInitialViewPropertiesFromContent:function(){if(this.defaultsFromMap){var a=this.defaultsFromMap.start.bind(this.defaultsFromMap);this.defaultsFromMap.reset();this._currentSpatialReference=null;this.notifyChange("spatialReference");this._viewHandles.remove("defaultsFromMap");
this._viewHandles.add([b.watch(this,"spatialReference",a),b.watch(this,"initialExtentRequired",a),t.schedule(a)],"defaultsFromMap")}},_forceReadyCycle:function(){this.ready&&(this._readyCycleForced=!0,b.whenFalseOnce(this,"ready",function(){this._readyCycleForced=!1;this.notifyChange("ready")}.bind(this)),this.notifyChange("ready"))}})});