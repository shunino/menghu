// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../Ground ../core/Logger ../core/accessorSupport/ensureType ../layers/ElevationLayer".split(" "),function(k,b,d,e,f,g){Object.defineProperty(b,"__esModule",{value:!0});var h=e.getLogger("esri.support.groundUtils");b.groundElevationLayers={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer"}};
b.ensureType=function(a){var c;"string"===typeof a?a in b.groundElevationLayers?(a=b.groundElevationLayers[a],a=new g({id:a.id,url:a.url}),c=new d({layers:[a]})):h.warn("Unable to find ground definition for: "+a+'. Try "world-elevation"'):c=f.default(d,a);return c}});