sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e,i){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;function o(e,o,n){return n?(0,i.html)`<${(0,i.scopeTag)("ui5-popover",o,n)} class="ui5-shellbar-menu-popover" hide-arrow placement-type="Bottom" @ui5-before-open=${(0,i.ifDefined)(this._menuPopoverBeforeOpen)} @ui5-after-close=${(0,i.ifDefined)(this._menuPopoverAfterClose)}><${(0,i.scopeTag)("ui5-list",o,n)} separators="None" mode="SingleSelect" @ui5-selection-change=${(0,i.ifDefined)(this._menuItemPress)}>${(0,i.repeat)(this._menuPopoverItems,(e,i)=>e._id||i,(i,r)=>t.call(this,e,o,n,i,r))}</${(0,i.scopeTag)("ui5-list",o,n)}></${(0,i.scopeTag)("ui5-popover",o,n)}><${(0,i.scopeTag)("ui5-popover",o,n)} class="ui5-shellbar-overflow-popover" placement-type="Bottom" horizontal-align="${(0,i.ifDefined)(this.popoverHorizontalAlign)}" hide-arrow @ui5-before-open=${(0,i.ifDefined)(this._overflowPopoverBeforeOpen)} @ui5-after-close=${(0,i.ifDefined)(this._overflowPopoverAfterClose)}><${(0,i.scopeTag)("ui5-list",o,n)} separators="None" @ui5-item-click="${(0,i.ifDefined)(this._handleActionListClick)}">${(0,i.repeat)(this._hiddenIcons,(e,i)=>e._id||i,(i,t)=>r.call(this,e,o,n,i,t))}</${(0,i.scopeTag)("ui5-list",o,n)}></${(0,i.scopeTag)("ui5-popover",o,n)}>`:(0,i.html)`<ui5-popover class="ui5-shellbar-menu-popover" hide-arrow placement-type="Bottom" @ui5-before-open=${(0,i.ifDefined)(this._menuPopoverBeforeOpen)} @ui5-after-close=${(0,i.ifDefined)(this._menuPopoverAfterClose)}><ui5-list separators="None" mode="SingleSelect" @ui5-selection-change=${(0,i.ifDefined)(this._menuItemPress)}>${(0,i.repeat)(this._menuPopoverItems,(e,i)=>e._id||i,(i,r)=>t.call(this,e,o,n,i,r))}</ui5-list></ui5-popover><ui5-popover class="ui5-shellbar-overflow-popover" placement-type="Bottom" horizontal-align="${(0,i.ifDefined)(this.popoverHorizontalAlign)}" hide-arrow @ui5-before-open=${(0,i.ifDefined)(this._overflowPopoverBeforeOpen)} @ui5-after-close=${(0,i.ifDefined)(this._overflowPopoverAfterClose)}><ui5-list separators="None" @ui5-item-click="${(0,i.ifDefined)(this._handleActionListClick)}">${(0,i.repeat)(this._hiddenIcons,(e,i)=>e._id||i,(i,t)=>r.call(this,e,o,n,i,t))}</ui5-list></ui5-popover>`}function t(e,o,t,r,n){return(0,i.html)`${(0,i.ifDefined)(r)}`}function r(e,o,t,r,n){return t?(0,i.html)`<${(0,i.scopeTag)("ui5-li",o,t)} data-ui5-external-action-item-id="${(0,i.ifDefined)(r.refItemid)}" icon="${(0,i.ifDefined)(r.icon)}" type="Active" @ui5-_press="${(0,i.ifDefined)(r.press)}">${(0,i.ifDefined)(r.text)}</${(0,i.scopeTag)("ui5-li",o,t)}>`:(0,i.html)`<ui5-li data-ui5-external-action-item-id="${(0,i.ifDefined)(r.refItemid)}" icon="${(0,i.ifDefined)(r.icon)}" type="Active" @ui5-_press="${(0,i.ifDefined)(r.press)}">${(0,i.ifDefined)(r.text)}</ui5-li>`}var n=o;e.default=n});
//# sourceMappingURL=ShellBarPopoverTemplate.lit.js.map