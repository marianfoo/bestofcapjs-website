sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", async () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents", "sap_fiori_3", async () => _parametersBundle2.default);
  const styleData = {
    packageName: "@ui5/webcomponents",
    fileName: "themes/MessageStrip.css",
    content: ".ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host(:not([hidden])){display:inline-block;width:100%}.ui5-message-strip-root{border-radius:var(--sapPopover_BorderCornerRadius);border-style:solid;border-width:var(--_ui5-v1-18-0_message_strip_border_width);box-sizing:border-box;display:flex;height:100%;padding:var(--_ui5-v1-18-0_message_strip_padding);position:relative;width:100%}.ui5-message-strip-root-hide-icon{padding-block:var(--_ui5-v1-18-0_message_strip_padding_block_no_icon);padding-inline:var(--_ui5-v1-18-0_message_strip_padding_inline_no_icon)}.ui5-message-strip-root-hide-close-button{padding-inline-end:1rem}.ui5-message-strip-root--info{background-color:var(--sapInformationBackground);border-color:var(--sapMessage_InformationBorderColor);color:var(--sapTextColor)}.ui5-message-strip-root--info .ui5-message-strip-icon{color:var(--sapInformativeElementColor)}.ui5-message-strip-root--positive{background-color:var(--sapSuccessBackground);border-color:var(--sapMessage_SuccessBorderColor)}.ui5-message-strip-root--positive .ui5-message-strip-icon{color:var(--sapPositiveElementColor)}.ui5-message-strip-root--negative{background-color:var(--sapErrorBackground);border-color:var(--sapMessage_ErrorBorderColor)}.ui5-message-strip-root--negative .ui5-message-strip-icon{color:var(--sapNegativeElementColor)}.ui5-message-strip-root--warning{background-color:var(--sapWarningBackground);border-color:var(--sapMessage_WarningBorderColor)}.ui5-message-strip-root--warning .ui5-message-strip-icon{color:var(--sapCriticalElementColor)}.ui5-message-strip-icon-wrapper{box-sizing:border-box;inset-inline-start:.75rem;position:absolute;top:var(--_ui5-v1-18-0_message_strip_icon_top)}.ui5-message-strip-text{color:var(--sapTextColor);font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontSize);line-height:1.2;width:100%}.ui5-message-strip-close-button{height:1.625rem;inset-inline-end:var(--_ui5-v1-18-0_message_strip_close_button_right);min-height:1.625rem;position:absolute;top:var(--_ui5-v1-18-0_message_strip_close_button_top)}"
  };
  var _default = styleData;
  _exports.default = _default;
});