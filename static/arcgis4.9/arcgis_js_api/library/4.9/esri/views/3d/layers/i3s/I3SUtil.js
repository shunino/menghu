// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../request ../../../../core/Error ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../geometry/SpatialReference ../../../../geometry/support/webMercatorUtils ../../../../tasks/QueryTask ../../../../tasks/support/Query ./I3SBinaryReader ../../support/projectionUtils ../../support/buffer/typedArrayUtil".split(" "),function(W,h,H,m,n,I,v,J,K,L,M,w,x){function t(a){return a&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10)}function y(a,b,c,d,g,e){if(null!=
c){var f=c.mbs;b!==d&&(f=N,w.mbsToMbs(c.mbs,d,f,b));if(0!==z(a,f)&&(e(c),c.children))for(f=0;f<c.children.length;++f)y(a,b,g[c.children[f].id],d,g,e)}}function z(a,b){var c=b[0],d=b[1],g=b[2];b=b[3];var e=0;if(c<a[0])var f=a[0]-c,e=e+f*f;d<a[1]&&(f=a[1]-d,e+=f*f);g<a[2]&&(f=a[2]-g,e+=f*f);c>a[3]&&(f=c-a[3],e+=f*f);d>a[4]&&(f=d-a[4],e+=f*f);g>a[5]&&(f=g-a[5],e+=f*f);if(e>b*b)return 0;if(0<e)return 1;e=Infinity;c-a[0]<e&&(e=c-a[0]);d-a[1]<e&&(e=d-a[1]);g-a[2]<e&&(e=g-a[2]);a[3]-c<e&&(e=a[3]-c);a[4]-
d<e&&(e=a[4]-d);a[5]-g<e&&(e=a[5]-g);return e>b?2:1}function u(a,b,c){var d=[],g=c&&c.missingFields;c=c&&c.originalFields;for(var e=0;e<a.length;e++){for(var f=a[e],k=f.toLowerCase(),h=!1,l=0,q=b;l<q.length;l++){var A=q[l];if(k===A.name.toLowerCase()){d.push(A.name);h=!0;c&&c.push(f);break}}!h&&g&&g.push(f)}return d}function O(a,b){return a.filter(function(a){return a.toLowerCase()!==b.toLowerCase()}).concat([b])}function P(a,b,c,d){b.sort(function(a,b){return a.attributes[c]-b.attributes[c]});var g=
b.map(function(a){return a.attributes[c]}),e=[],f=u(d,a.fields,{originalFields:e});return B(a,g,f).then(function(a){for(var c=0;c<b.length;c++){var g=b[c],d=a[c];g.attributes={};for(var h=0;h<e.length;h++)g.attributes[e[h]]=d[f[h]]}return b})}function Q(a,b){for(var c=[],d=0;d<a.length;d++){var g=a[d];g in b.attributes||c.push(g)}return c}function B(a,b,c){if(null!=a.maxRecordCount&&b.length>a.maxRecordCount){var d=R(b,a.maxRecordCount);return n.all(d.map(function(b){return B(a,b,c)})).then(S)}d=
new L({objectIds:b,outFields:c,orderByFields:[a.objectIdField]});return(new K(a.parsedUrl.path)).execute(d).then(function(a){return a&&a.features&&a.features.length===b.length?a.features.map(function(a){return a.attributes}):n.reject(new m("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer"))})}function T(a,b,c,d,g){for(var e=[],f=0;f<b.attributeData.length;f++){var h=b.attributeData[f],p=a[f];p&&-1!==d.indexOf(p.name)&&(h=I.makeAbsolute(h.href,b.baseUrl),
e.push({url:h,storageInfo:p}))}return n.eachAlways(e.map(function(a){return H(a.url,{responseType:"array-buffer"}).then(function(b){return M.readBinaryAttribute(a.storageInfo,b.data)})})).then(function(a){var b=[];if(!g.ignoreUnavailableFields&&a.some(function(a){return null==a.value})){for(var b=[],d=0;d<a.length;d++)null==a[d].value&&b.push({name:e[d].storageInfo.name,error:a[d].error});return n.reject(new m("scenelayer:attribute-request-failed","Request for scene layer attributes failed",{failedAttributes:b}))}for(var f=
0;f<c.length;f++){for(var h=c[f],k={},d=0;d<a.length;d++)null!=a[d].value&&(k[e[d].storageInfo.name]=C(a[d].value,h));b.push(k)}return b})}function C(a,b){b=a[b];return x.isInt16Array(a)?b===U?null:b:x.isInt32Array(a)?b===V?null:b:b!==b?null:b}function R(a,b){var c=a.length;b=Math.ceil(c/b);for(var d=[],g=0;g<b;g++)d.push(a.slice(Math.floor(c*g/b),Math.floor(c*(g+1)/b)));return d}function S(a){for(var b=[],c=0;c<a.length;c++)b=b.concat(a[c]);return b}function D(a){var b=new v(t(a.store.indexCRS||
a.store.geographicCRS));return b.equals(a.spatialReference)?a.spatialReference:b}function E(a){var b=new v(t(a.store.vertexCRS||a.store.projectedCRS));return b.equals(a.spatialReference)?a.spatialReference:b}function r(a,b,c){if(!J.canProject(a,b))throw new m("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===c&&a.isGeographic)throw new m("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",
{});}function F(a,b,c){var d=D(a);a=E(a);r(d,b,c);r(a,b,c)}Object.defineProperty(h,"__esModule",{value:!0});h.DDS_ENCODING_STRING="image/vnd-ms.dds";h.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS=["image/jpeg","image/png"];h.extractWkid=t;h.getAppropriateTextureEncoding=function(a,b){if(Array.isArray(a)){if(b&&(b=a.indexOf(h.DDS_ENCODING_STRING),-1<b))return b;for(b=0;b<a.length;b++)if(-1<h.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS.indexOf(a[b]))return b;throw Error("Could not find appropriate texture encoding (among "+
a.toString()+")");}return-1};h.findIntersectingNodes=y;h.buildTopNodeMap=function(a,b,c,d){void 0===d&&(d=Number.POSITIVE_INFINITY);if(0>=b)a.clear();else{var g=new Map,e=Number.POSITIVE_INFINITY;a.forEach(function(f,h){var k=c(f);if(h<b)e=Math.min(e,k),g.set(f.id,k);else if(!(k<=e||k>=d)){g.set(f.id,k);h=e=g.get(a.front().id);for(var k=0,l=1;l<b;++l){var q=g.get(a.data[l].id);q<e&&(k=l,h=e,e=q)}a.data[k]=f;e=h}});a.length=Math.min(a.length,b);a.sort(function(a,b){return g.get(b.id)-g.get(a.id)})}};
var N=[0,0,0,0];h.intersectBoundingBoxWithMbs=z;h.findFieldsCaseInsensitive=u;h.whenGraphicAttributes=function(a,b,c,d,g,e){var f=!0===(e&&e.populateObjectId),h=e.ignoreUnavailableFields?void 0:[],p=1===d.length&&"*"===d[0];!p&&f&&(d=O(d,c));d=p?d:u(d,a.fields,{missingFields:h});if(h&&0!==h.length)return n.reject(new m("scenelayer:unknown-fields","This scene layer does not have the requested fields",{unknownFields:h}));if(0===b.length)return n.resolve(b);var f=a.associatedLayer,h=a.attributeStorageInfo,
l=p?a.fields.map(function(a){return a.name}):d;if(f)return P(f,b,c,l);a=Q(l,b[0]);return 0===a.length?n.resolve(b):h?(g=g(),null==g?n.reject(new m("scenelayer:feature-not-loaded","Tried to query attributes for unloaded features")):T(h,g.node,g.indices,a,e).then(function(a){for(var c=0;c<b.length;c++){for(var d=0,e=l;d<e.length;d++){var f=e[d];f in a[c]||(a[c][f]=b[c].attributes[f])}b[c].attributes=a[c]}return b})):n.reject(new m("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available"))};
var U=-Math.pow(2,15),V=-Math.pow(2,31);h.getCachedAttributeValue=C;h.convertFlatRangesToOffsets=function(a,b,c){void 0===c&&(c=2);b=null!=b?b:a.length/c;for(var d=new Uint32Array(b+1),g=0;g<b;g++){var e=a[g*c];d[g]=3*e;var f=(g-1)*c+1;if(0<=f&&e-1!==a[f])throw new m("Face ranges are not continuous");}d[d.length-1]=3*(a[(b-1)*c+1]+1);return d};h.getIndexCrs=D;h.getVertexCrs=E;h.getCacheKeySuffix=function(a,b){return b===w.SphericalECEFSpatialReference?"@ECEF":a.equals(b)?"":null!=b.wkid?"@"+b.wkid:
null};h.checkSpatialReference=r;h.checkSpatialReferences=F;h.checkSceneLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(a=a.store.defaultGeometrySchema,b=!!(null!=a.geometryType&&"triangles"!==a.geometryType||null!=a.topology&&"PerAttributeArray"!==a.topology||null==a.vertexAttributes||null==a.vertexAttributes.position));if(b)throw new m("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{});};h.checkSceneLayerCompatibleWithView=
function(a,b){F(a,b.spatialReference,b.viewingMode)};h.checkPointCloudLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(a=a.store.defaultGeometrySchema,b=!!(null==a.geometryType||"points"!==a.geometryType||null!=a.topology&&"PerAttributeArray"!==a.topology||null!=a.encoding&&""!==a.encoding&&"lepcc-xyz"!==a.encoding||null==a.vertexAttributes||null==a.vertexAttributes.position));if(b)throw new m("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",
{});};h.checkPointCloudLayerCompatibleWithView=function(a,b){r(a.spatialReference,b.spatialReference,b.viewingMode)};h.rendererNeedsTextures=function(a){if(null==a||"simple"!==a.type&&"class-breaks"!==a.type&&"unique-value"!==a.type||("unique-value"===a.type||"class-breaks"===a.type)&&null==a.defaultSymbol)return!0;a=a.getSymbols();if(0===a.length)return!0;for(var b=0;b<a.length;b++){var c=a[b];if("mesh-3d"!==c.type||0===c.symbolLayers.length)return!0;for(var d=0,c=c.symbolLayers.items;d<c.length;d++){var g=
c[d];if("fill"!==g.type||null==g.material||"replace"!==g.material.colorMixMode)return!0}}return!1};var G=function(){return function(){this.material=this.edges=null}}();h.SymbolInfo=G;h.getSymbolInfo=function(a){var b=new G,c=!1,d=!1,g=0;for(a=a.symbolLayers.items;g<a.length;g++){var e=a[g];if("fill"===e.type&&e.enabled){var f=e.material,h=e.edges;f&&!c&&(c=f.color,b.material={color:c?[c.r/255,c.g/255,c.b/255]:null,alpha:c?c.a:null,colorMixMode:f.colorMixMode},c=!0);h&&!d&&(b.edges=e.edges,d=!0)}}return b}});