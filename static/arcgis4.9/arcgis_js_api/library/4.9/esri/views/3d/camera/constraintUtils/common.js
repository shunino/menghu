// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../lib/gl-matrix","../../support/mathUtils"],function(k,b,g,h){Object.defineProperty(b,"__esModule",{value:!0});b.hasConstraintType=function(b,c){return 0!==(b&c)};b.adjustRangeForInteraction=function(b,c,e,f,d,a){0!==b&&(e?(a.min=Math.min(a.min,c),a.max=Math.max(a.max,c)):null!=f?(a.min-=Math.max(0,(c-a.min)*(1-f)),a.max+=Math.max(0,(c-a.max)*(1-f))):d&&(a.min-=Math.max(0,c-a.min-d),a.max+=Math.max(0,c-a.max-d)))};b.defaultApplyOptions={selection:0,interactionType:0,
interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0};b.interactionDirectionTowardsConstraintMinimization=function(b,c,e,f,d){e||(e=c.viewForward);g.vec3d.set(e,d);g.vec3d.scale(d,h.sign(g.vec3d.dot(e,f)));return d}});