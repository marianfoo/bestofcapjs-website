sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/decorators/customElement","sap/ui/webc/common/thirdparty/base/decorators/property","./types/TitleLevel","./types/WrappingType","./generated/templates/TitleTemplate.lit","./generated/themes/Title.css"],function(e,t,r,l,a,o,d,i,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;t=u(t);r=u(r);l=u(l);a=u(a);o=u(o);d=u(d);i=u(i);n=u(n);function u(e){return e&&e.__esModule?e:{default:e}}var s=void 0&&(void 0).__decorate||function(e,t,r,l){var a=arguments.length,o=a<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,r):l,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,r,l);else for(var i=e.length-1;i>=0;i--)if(d=e[i])o=(a<3?d(o):a>3?d(t,r,o):d(t,r))||o;return a>3&&o&&Object.defineProperty(t,r,o),o};let p=class e extends t.default{get normalizedLevel(){return this.level.toLowerCase()}get h1(){return this.normalizedLevel==="h1"}get h2(){return this.normalizedLevel==="h2"}get h3(){return this.normalizedLevel==="h3"}get h4(){return this.normalizedLevel==="h4"}get h5(){return this.normalizedLevel==="h5"}get h6(){return this.normalizedLevel==="h6"}};s([(0,a.default)({type:d.default,defaultValue:d.default.None})],p.prototype,"wrappingType",void 0);s([(0,a.default)({type:o.default,defaultValue:o.default.H2})],p.prototype,"level",void 0);p=s([(0,l.default)({tag:"ui5-title",renderer:r.default,template:i.default,styles:n.default})],p);p.define();var f=p;e.default=f});
//# sourceMappingURL=Title.js.map