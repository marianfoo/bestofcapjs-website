sap.ui.define(["exports","./AnimationQueue"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.duration=e.default=void 0;t=n(t);function n(e){return e&&e.__esModule?e:{default:e}}const o=e=>{let n=null;let o=false;let r;let a;let i;const u=new Promise((t,u)=>{i=a=>{n=n||a;const u=a-n;const s=e.duration-u;if(u<=e.duration){const t=1-s/e.duration;e.advance(t);if(!o){r=requestAnimationFrame(i)}}else{e.advance(1);t()}};a=()=>{o=true;cancelAnimationFrame(r);u(new Error("animation stopped"))}}).catch(e=>e);t.default.push(e.element,()=>{if(typeof e.beforeStart==="function"){e.beforeStart()}requestAnimationFrame(i);return new Promise(e=>{u.then(()=>e())})});return{promise:()=>u,stop:()=>a}};const r=400;e.duration=r;var a=o;e.default=a});
//# sourceMappingURL=animate.js.map