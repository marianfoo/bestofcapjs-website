sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /* eslint no-unused-vars: 0 */

  function block0(context, tags, suffix) {
    return suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-responsive-popover", tags, suffix)} id="${(0, _LitRenderer.ifDefined)(this._id)}-responsive-popover" class="ui5-time-picker-popover" placement-type="Bottom" horizontal-align="Left" allow-target-overlap _hide-header hide-arrow @ui5-after-open="${(0, _LitRenderer.ifDefined)(this.onResponsivePopoverAfterOpen)}" @ui5-after-close="${(0, _LitRenderer.ifDefined)(this.onResponsivePopoverAfterClose)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><${(0, _LitRenderer.scopeTag)("ui5-time-selection-clocks", tags, suffix)} id="${(0, _LitRenderer.ifDefined)(this._id)}-time-sel" value="${(0, _LitRenderer.ifDefined)(this._timeSelectionValue)}" format-pattern="${(0, _LitRenderer.ifDefined)(this._formatPattern)}" @ui5-change="${(0, _LitRenderer.ifDefined)(this.onTimeSelectionChange)}" @close-picker="${this.submitPickers}"></${(0, _LitRenderer.scopeTag)("ui5-time-selection-clocks", tags, suffix)}><div slot="footer" class="ui5-time-picker-footer" @keydown=${this._onfooterkeydown}><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} id="submit" design="Emphasized" @click="${this.submitPickers}">${(0, _LitRenderer.ifDefined)(this.submitButtonLabel)}</${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} id="close" design="Transparent" @click="${this.closePicker}">${(0, _LitRenderer.ifDefined)(this.cancelButtonLabel)}</${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}></div></${(0, _LitRenderer.scopeTag)("ui5-responsive-popover", tags, suffix)}>${this._isPhone ? block1.call(this, context, tags, suffix) : undefined}` : (0, _LitRenderer.html)`<ui5-responsive-popover id="${(0, _LitRenderer.ifDefined)(this._id)}-responsive-popover" class="ui5-time-picker-popover" placement-type="Bottom" horizontal-align="Left" allow-target-overlap _hide-header hide-arrow @ui5-after-open="${(0, _LitRenderer.ifDefined)(this.onResponsivePopoverAfterOpen)}" @ui5-after-close="${(0, _LitRenderer.ifDefined)(this.onResponsivePopoverAfterClose)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><ui5-time-selection-clocks id="${(0, _LitRenderer.ifDefined)(this._id)}-time-sel" value="${(0, _LitRenderer.ifDefined)(this._timeSelectionValue)}" format-pattern="${(0, _LitRenderer.ifDefined)(this._formatPattern)}" @ui5-change="${(0, _LitRenderer.ifDefined)(this.onTimeSelectionChange)}" @close-picker="${this.submitPickers}"></ui5-time-selection-clocks><div slot="footer" class="ui5-time-picker-footer" @keydown=${this._onfooterkeydown}><ui5-button id="submit" design="Emphasized" @click="${this.submitPickers}">${(0, _LitRenderer.ifDefined)(this.submitButtonLabel)}</ui5-button><ui5-button id="close" design="Transparent" @click="${this.closePicker}">${(0, _LitRenderer.ifDefined)(this.cancelButtonLabel)}</ui5-button></div></ui5-responsive-popover>${this._isPhone ? block1.call(this, context, tags, suffix) : undefined}`;
  }
  function block1(context, tags, suffix) {
    return suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-popover", tags, suffix)} id="${(0, _LitRenderer.ifDefined)(this._id)}-popover" class="ui5-time-picker-inputs-popover" placement-type="Bottom" horizontal-align="Left" allow-target-overlap _hide-header hide-arrow @ui5-after-open="${(0, _LitRenderer.ifDefined)(this.onInputsPopoverAfterOpen)}" @ui5-after-close="${(0, _LitRenderer.ifDefined)(this.onInputsPopoverAfterClose)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><div class="popover-content"><${(0, _LitRenderer.scopeTag)("ui5-time-selection-inputs", tags, suffix)} id="${(0, _LitRenderer.ifDefined)(this._id)}-time-sel-inputs" value="${(0, _LitRenderer.ifDefined)(this._timeSelectionValue)}" format-pattern="${(0, _LitRenderer.ifDefined)(this._formatPattern)}" @ui5-change="${(0, _LitRenderer.ifDefined)(this.onTimeSelectionChange)}" @close-inputs="${this.submitInputsPopover}"></${(0, _LitRenderer.scopeTag)("ui5-time-selection-inputs", tags, suffix)}></div><div slot="footer" class="ui5-time-picker-footer" @keydown=${this._onfooterkeydown}><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} id="submitInputs" design="Emphasized" @click="${this.submitInputsPopover}">${(0, _LitRenderer.ifDefined)(this.submitButtonLabel)}</${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} id="closeInputs" design="Transparent" @click="${this.closeInputsPopover}">${(0, _LitRenderer.ifDefined)(this.cancelButtonLabel)}</${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}></div></${(0, _LitRenderer.scopeTag)("ui5-popover", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-popover id="${(0, _LitRenderer.ifDefined)(this._id)}-popover" class="ui5-time-picker-inputs-popover" placement-type="Bottom" horizontal-align="Left" allow-target-overlap _hide-header hide-arrow @ui5-after-open="${(0, _LitRenderer.ifDefined)(this.onInputsPopoverAfterOpen)}" @ui5-after-close="${(0, _LitRenderer.ifDefined)(this.onInputsPopoverAfterClose)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><div class="popover-content"><ui5-time-selection-inputs id="${(0, _LitRenderer.ifDefined)(this._id)}-time-sel-inputs" value="${(0, _LitRenderer.ifDefined)(this._timeSelectionValue)}" format-pattern="${(0, _LitRenderer.ifDefined)(this._formatPattern)}" @ui5-change="${(0, _LitRenderer.ifDefined)(this.onTimeSelectionChange)}" @close-inputs="${this.submitInputsPopover}"></ui5-time-selection-inputs></div><div slot="footer" class="ui5-time-picker-footer" @keydown=${this._onfooterkeydown}><ui5-button id="submitInputs" design="Emphasized" @click="${this.submitInputsPopover}">${(0, _LitRenderer.ifDefined)(this.submitButtonLabel)}</ui5-button><ui5-button id="closeInputs" design="Transparent" @click="${this.closeInputsPopover}">${(0, _LitRenderer.ifDefined)(this.cancelButtonLabel)}</ui5-button></div></ui5-popover>`;
  }
  var _default = block0;
  _exports.default = _default;
});