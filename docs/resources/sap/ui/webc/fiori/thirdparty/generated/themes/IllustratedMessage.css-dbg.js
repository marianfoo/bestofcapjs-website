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
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-fiori", "sap_fiori_3", async () => _parametersBundle2.default);
  const styleData = {
    packageName: "@ui5/webcomponents-fiori",
    fileName: "themes/IllustratedMessage.css",
    content: ":host(:not([hidden])){display:block}:host{box-sizing:border-box;padding:1rem;width:100%}.ui5-illustrated-message-root{align-items:center;display:flex;flex-direction:column;justify-content:center}.ui5-illustrated-message-illustration{margin-bottom:2rem}.ui5-illustrated-message-title{line-height:1.3;margin-bottom:.5rem;max-width:30rem;text-align:center}.ui5-illustrated-message-subtitle{color:var(--sapContent_LabelColor);font-family:var(--sapFontFamily);font-size:var(--sapFontLargeSize);line-height:1.4;margin-bottom:2rem;max-width:30rem;text-align:center}.ui5-illustrated-message-actions{margin-bottom:2rem}:host([media=dialog]) .ui5-illustrated-message-illustration{margin-bottom:2rem;margin-top:1rem}:host([media=dialog]) .ui5-illustrated-message-title{font-size:var(--sapFontHeader4Size);margin-bottom:.25rem;max-width:20rem}:host([media=dialog]) .ui5-illustrated-message-subtitle{font-size:var(--sapFontSize);max-width:20rem}:host([media=dialog]) .ui5-illustrated-message-actions{margin-bottom:0}:host([media=spot]) .ui5-illustrated-message-illustration{margin-bottom:.5rem;margin-top:.5rem}:host([media=spot]) .ui5-illustrated-message-title{font-size:var(--sapFontHeader5Size);line-height:1.25rem;margin-bottom:.25rem;max-width:16rem}:host([media=spot]) .ui5-illustrated-message-subtitle{font-size:var(--sapFontSize);margin-bottom:1rem;max-width:16rem}:host([media=spot]) .ui5-illustrated-message-actions{margin-bottom:1rem;margin-top:.5rem}:host([media=base]) .ui5-illustrated-message-illustration{display:none}:host([media=base]) .ui5-illustrated-message-title{font-size:var(--sapFontHeader5Size);line-height:1.25rem;margin-bottom:.25rem;max-width:10rem}:host([media=base]) .ui5-illustrated-message-subtitle{font-size:var(--sapFontSize);margin-bottom:0;max-width:10rem}.ui5-illustrated-message-util{left:-9999px;position:fixed;top:-9999px}.sapIllus_MaskTypeAlpha{mask-type:alpha}.sapIllus_BackgroundColor{fill:var(--sapIllus_BackgroundColor)}.sapIllus_BrandColorPrimary{fill:var(--sapIllus_BrandColorPrimary)}.sapIllus_BrandColorSecondary{fill:var(--sapIllus_BrandColorSecondary)}.sapIllus_StrokeDetailColor{fill:var(--sapIllus_StrokeDetailColor)}.sapIllus_Layering1{fill:var(--sapIllus_Layering1)}.sapIllus_Layering2{fill:var(--sapIllus_Layering2)}.sapIllus_ObjectFillColor{fill:var(--sapIllus_ObjectFillColor)}.sapIllus_AccentColor{fill:var(--sapIllus_AccentColor)}.sapIllus_NoColor{fill:var(--sapIllus_NoColor)}.sapIllus_PatternShadow{fill:var(--sapIllus_PatternShadow)}.sapIllus_PatternHighlight{fill:var(--sapIllus_PatternHighlight)}.sapIllus_NoColor_Fill{fill:var(--sapIllus_NoColor)}.sapIllus_BrandColorPrimary_Fill{fill:var(--sapIllus_BrandColorPrimary)}.sapIllus_ObjectFillColor_Fill{fill:var(--sapIllus_ObjectFillColor)}"
  };
  var _default = styleData;
  _exports.default = _default;
});