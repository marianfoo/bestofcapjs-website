sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(i,e){"use strict";Object.defineProperty(i,"__esModule",{value:true});i.default=void 0;function t(i,t,r){return(0,e.html)`<div class="ui5-wiz-step-root" role="listitem" tabindex="${(0,e.ifDefined)(this.tabIndex)}" aria-current="${(0,e.ifDefined)(this.accInfo.ariaCurrent)}" aria-setsize="${(0,e.ifDefined)(this.accInfo.ariaSetsize)}" aria-posinset="${(0,e.ifDefined)(this.accInfo.ariaPosinset)}" aria-disabled="${(0,e.ifDefined)(this.accInfo.ariaDisabled)}" aria-label="${(0,e.ifDefined)(this.accInfo.ariaLabel)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}"><div class="ui5-wiz-step-main"><div class="ui5-wiz-step-icon-circle">${this.icon?s.call(this,i,t,r):n.call(this,i,t,r)}</div>${this.hasTexts?a.call(this,i,t,r):undefined}</div>${!this.hideSeparator?c.call(this,i,t,r):undefined}</div>`}function s(i,t,s){return s?(0,e.html)`<${(0,e.scopeTag)("ui5-icon",t,s)} class="ui5-wiz-step-icon" name="${(0,e.ifDefined)(this.icon)}"></${(0,e.scopeTag)("ui5-icon",t,s)}>`:(0,e.html)`<ui5-icon class="ui5-wiz-step-icon" name="${(0,e.ifDefined)(this.icon)}"></ui5-icon>`}function n(i,t,s){return(0,e.html)`<span class="ui5-wiz-step-number">${(0,e.ifDefined)(this.number)}</span>`}function a(i,t,s){return(0,e.html)`<div class="ui5-wiz-step-texts"><div class="ui5-wiz-step-title-text">${(0,e.ifDefined)(this.titleText)}</div><div class="ui5-wiz-step-subtitle-text">${(0,e.ifDefined)(this.subtitleText)}</div></div>`}function c(i,t,s){return(0,e.html)`<div class="ui5-wiz-step-hr"></div>`}var r=t;i.default=r});
//# sourceMappingURL=WizardTabTemplate.lit.js.map