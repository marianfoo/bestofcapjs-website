sap.ui.define(["exports","./util/whenDOMReady","./EventProvider","./FontFace","./SystemCSSVars","./config/Theme","./theming/applyTheme","./Runtimes","./FeaturesRegistry","./theming/ThemeRegistered"],function(e,t,n,a,i,o,r,s,u,c){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.boot=e.attachBoot=void 0;t=f(t);n=f(n);a=f(a);i=f(i);r=f(r);function f(e){return e&&e.__esModule?e:{default:e}}let d=false;let l;const h=new n.default;const m=e=>{if(!d){h.attachEvent("boot",e);return}e()};e.attachBoot=m;const g=async()=>{if(l!==undefined){return l}const e=async e=>{if(typeof document==="undefined"){e();return}(0,c.attachThemeRegistered)(p);(0,s.registerCurrentRuntime)();const n=(0,u.getFeature)("OpenUI5Support");const f=n?n.isOpenUI5Detected():false;const l=(0,u.getFeature)("F6Navigation");if(n){await n.init()}if(l&&!f){l.init()}await(0,t.default)();await(0,r.default)((0,o.getTheme)());n&&n.attachListeners();(0,a.default)();(0,i.default)();e();d=true;await h.fireEventAsync("boot")};l=new Promise(e);return l};e.boot=g;const p=e=>{const t=(0,o.getTheme)();if(d&&e===t){(0,r.default)(t)}}});
//# sourceMappingURL=Boot.js.map