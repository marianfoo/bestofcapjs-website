sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/asset-registries/Themes","sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css","./sap_fiori_3/parameters-bundle.css"],function(t,r,o,e){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;o=_(o);e=_(e);function _(t){return t&&t.__esModule?t:{default:t}}(0,r.registerThemePropertiesLoader)("@ui5/webcomponents-theming","sap_fiori_3",async()=>o.default);(0,r.registerThemePropertiesLoader)("@ui5/webcomponents","sap_fiori_3",async()=>e.default);const i={packageName:"@ui5/webcomponents",fileName:"themes/SplitButton.css",content:':host{vertical-align:middle}.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host(:not([hidden])){background-color:var(--sapButton_Background);border-radius:var(--_ui5-v1-18-0_button_border_radius);box-shadow:var(--_ui5-v1-18-0_split_button_host_default_box_shadow);display:inline-block;height:100%}:host([disabled]:not([hidden])){pointer-events:none}:host([design=Positive]:not([hidden])){background-color:var(--sapButton_Accept_Background);box-shadow:var(--_ui5-v1-18-0_split_button_host_positive_box_shadow)}:host([design=Negative]:not([hidden])){background-color:var(--sapButton_Reject_Background);box-shadow:var(--_ui5-v1-18-0_split_button_host_negative_box_shadow)}:host([design=Attention]:not([hidden])){background-color:var(--sapButton_Attention_Background);box-shadow:var(--_ui5-v1-18-0_split_button_host_attention_box_shadow)}:host([design=Emphasized]:not([hidden])){background-color:var(--sapButton_Emphasized_Background);box-shadow:var(--_ui5-v1-18-0_split_button_host_emphasized_box_shadow)}:host([design=Transparent]:not([hidden])){background-color:var(--sapButton_Lite_Background);box-shadow:var(--_ui5-v1-18-0_split_button_host_transparent_box_shadow)}:host([design=Transparent][disabled]:not([hidden])){background-color:var(--_ui5-v1-18-0_split_button_transparent_disabled_background)}:host([design=Transparent]:not([hidden]):not([disabled]):hover){background-color:var(--_ui5-v1-18-0_split_button_host_transparent_hover_background);box-shadow:var(--_ui5-v1-18-0_split_button_host_transparent_hover_box_shadow)}:host([design=Transparent]:not([hidden]):not([disabled]):hover) .ui5-split-arrow-button:not(:hover),:host([design=Transparent]:not([hidden]):not([disabled]):hover) .ui5-split-text-button:not(:hover){color:var(--_ui5-v1-18-0_split_button_transparent_hover_color)}:host([focused]) .ui5-split-button-root{outline:0}:host([focused]) .ui5-split-button-root:after{border:var(--_ui5-v1-18-0_split_button_focused_border);border-radius:var(--_ui5-v1-18-0_split_button_focused_border_radius);bottom:.125rem;box-sizing:border-box;content:"";left:.125rem;pointer-events:none;position:absolute;right:.125rem;top:.125rem}:host([design=Emphasized][focused]) .ui5-split-button-root:after{border-color:var(--sapContent_ContrastFocusColor)}.ui5-split-button-root{display:inline-block;position:relative;width:inherit}.ui5-split-text-button{background-color:var(--_ui5-v1-18-0_split_text_button_background_color);border-bottom-right-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-color:var(--_ui5-v1-18-0_split_text_button_border_color);border-top-right-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-width:.0625rem;border-right-width:var(--_ui5-v1-18-0_split_button_text_button_right_border_width);margin-right:var(--_ui5-v1-18-0_split_button_text_button_width);vertical-align:top;width:inherit}.ui5-split-text-button:hover{background-color:var(--sapButton_Hover_Background);border:var(--_ui5-v1-18-0_split_text_button_hover_border);border-bottom-right-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-left:var(--_ui5-v1-18-0_split_text_button_hover_border_left);border-right:var(--_ui5-v1-18-0_split_text_button_hover_border_right);border-top-right-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);box-shadow:none}.ui5-split-text-button[design=Emphasized]{border:var(--_ui5-v1-18-0_split_text_button_emphasized_border);border-width:var(--_ui5-v1-18-0_split_text_button_emphasized_border_width)}.ui5-split-text-button[design=Emphasized]:hover{background-color:var(--sapButton_Emphasized_Hover_Background);border:var(--_ui5-v1-18-0_split_text_button_emphasized_hover_border);border-left:var(--_ui5-v1-18-0_split_text_button_emphasized_hover_border_left);border-right:var(--_ui5-v1-18-0_split_text_button_emphasized_hover_border_right)}.ui5-split-text-button[design=Positive]:hover{background-color:var(--sapButton_Accept_Hover_Background);border:var(--_ui5-v1-18-0_split_text_button_positive_hover_border);border-left:var(--_ui5-v1-18-0_split_text_button_positive_hover_border_left);border-right:var(--_ui5-v1-18-0_split_text_button_positive_hover_border_right)}.ui5-split-text-button[design=Negative]:hover{background-color:var(--sapButton_Reject_Hover_Background);border:var(--_ui5-v1-18-0_split_text_button_negative_hover_border);border-left:var(--_ui5-v1-18-0_split_text_button_negative_hover_border_left);border-right:var(--_ui5-v1-18-0_split_text_button_negative_hover_border_right)}.ui5-split-text-button[design=Attention]:hover{background-color:var(--sapButton_Attention_Hover_Background);border:var(--_ui5-v1-18-0_split_text_button_attention_hover_border);border-left:var(--_ui5-v1-18-0_split_text_button_attention_hover_border_left);border-right:var(--_ui5-v1-18-0_split_text_button_attention_hover_border_right)}.ui5-split-text-button[design=Transparent]:hover{background-color:var(--_ui5-v1-18-0_split_button_transparent_hover_background);border:var(--_ui5-v1-18-0_split_text_button_transparent_hover_border);border-left:var(--_ui5-v1-18-0_split_text_button_transparent_hover_border_left);border-right:var(--_ui5-v1-18-0_split_text_button_transparent_hover_border_right)}.ui5-split-text-button[active]{outline:0}.ui5-split-text-button[active][design=Emphasized]{background-color:var(--sapButton_Selected_Background);color:var(--sapButton_Emphasized_Active_TextColor)}.ui5-split-text-button[active][design=Negative]{background-color:var(--sapButton_Reject_Selected_Background);color:var(--sapButton_Reject_Active_TextColor)}.ui5-split-text-button[active][design=Positive]{background-color:var(--sapButton_Accept_Selected_Background);color:var(--sapButton_Accept_Active_TextColor)}.ui5-split-text-button[active][design=Attention]{background-color:var(--sapButton_Attention_Selected_Background);color:var(--sapButton_Attention_Active_TextColor)}.ui5-split-text-button[active][design=Default]{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}.ui5-split-text-button[active][design=Transparent]{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}.ui5-split-arrow-button-wrapper{position:absolute;right:0;top:0}.ui5-split-arrow-button{background-color:var(--_ui5-v1-18-0_split_text_button_background_color);border-bottom-left-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-color:var(--_ui5-v1-18-0_split_text_button_border_color);border-top-left-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);width:2.25rem}.ui5-split-text-button[dir=rtl]:hover{border-bottom-left-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-left:var(--_ui5-v1-18-0_split_text_button_hover_border_left_rtl);border-right:var(--_ui5-v1-18-0_split_text_button_hover_border_right_rtl);border-top-left-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius)}.ui5-split-text-button[design=Emphasized][dir=rtl]:hover{border-left:var(--_ui5-v1-18-0_split_text_button_emphasized_hover_border_left_rtl);border-right:var(--_ui5-v1-18-0_split_text_button_emphasized_hover_border_right_rtl)}.ui5-split-text-button[design=Positive][dir=rtl]:hover{border-left:var(--_ui5-v1-18-0_split_text_button_positive_hover_border_left_rtl);border-right:var(--_ui5-v1-18-0_split_text_button_positive_hover_border_right_rtl)}.ui5-split-text-button[design=Negative][dir=rtl]:hover{border-left:var(--_ui5-v1-18-0_split_text_button_negative_hover_border_left_rtl);border-right:var(--_ui5-v1-18-0_split_text_button_negative_hover_border_right_rtl)}.ui5-split-text-button[design=Attention][dir=rtl]:hover{border-left:var(--_ui5-v1-18-0_split_text_button_attention_hover_border_left_rtl);border-right:var(--_ui5-v1-18-0_split_text_button_attention_hover_border_right_rtl)}.ui5-split-text-button[design=Transparent][dir=rtl]:hover{border-left:var(--_ui5-v1-18-0_split_text_button_transparent_hover_border_left_rtl);border-right:var(--_ui5-v1-18-0_split_text_button_transparent_hover_border_right_rtl)}[dir=rtl] .ui5-split-arrow-button:hover{border-bottom-right-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-top-right-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius)}.ui5-split-arrow-button:hover{background-color:var(--sapButton_Hover_Background);border:var(--_ui5-v1-18-0_split_arrow_button_hover_border);border-bottom-left-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-top-left-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);box-shadow:none}.ui5-split-arrow-button[design=Emphasized]:hover{background-color:var(--sapButton_Emphasized_Hover_Background);border:var(--_ui5-v1-18-0_split_arrow_button_emphasized_hover_border);border-left-width:var(--sapButton_BorderWidth)}.ui5-split-arrow-button-wrapper[dir=rtl] .ui5-split-arrow-button[design=Emphasized]:hover{border-left-width:var(--_ui5-v1-18-0_split_arrow_button_wrapper_emphasized_hover_border_left_width_rtl);border-right-width:var(--sapButton_BorderWidth)}.ui5-split-arrow-button[design=Positive]:hover{background-color:var(--sapButton_Accept_Hover_Background);border:var(--_ui5-v1-18-0_split_arrow_button_positive_hover_border)}.ui5-split-arrow-button[design=Negative]:hover{background-color:var(--sapButton_Reject_Hover_Background);border:var(--_ui5-v1-18-0_split_arrow_button_negative_hover_border)}.ui5-split-arrow-button[design=Attention]:hover{background-color:var(--sapButton_Attention_Hover_Background);border:var(--_ui5-v1-18-0_split_arrow_button_attention_hover_border)}.ui5-split-arrow-button[design=Transparent]:hover{background-color:var(--_ui5-v1-18-0_split_button_transparent_hover_background);border:var(--_ui5-v1-18-0_split_arrow_button_transparent_hover_border)}.ui5-split-arrow-button:before{border:0 solid var(--sapButton_TextColor);border-left-width:.0625rem;box-sizing:border-box;content:"";height:var(--_ui5-v1-18-0_split_button_middle_separator_height);left:var(--_ui5-v1-18-0_split_button_middle_separator_left);pointer-events:none;position:absolute;right:0;top:var(--_ui5-v1-18-0_split_button_middle_separator_top)}.ui5-split-arrow-button[design=Emphasized]:before{border:0 solid var(--sapButton_TextColor);border-left-width:.0625rem;box-sizing:border-box;content:"";height:var(--_ui5-v1-18-0_split_button_middle_separator_height);left:var(--_ui5-v1-18-0_split_button_middle_separator_left);pointer-events:none;position:absolute;right:0;top:var(--_ui5-v1-18-0_split_button_middle_separator_top)}[dir=rtl] .ui5-split-arrow-button:before{border:0 solid var(--sapButton_TextColor);border-left-width:0;border-right-width:.0625rem;box-sizing:border-box;content:"";height:var(--_ui5-v1-18-0_split_button_middle_separator_height);left:0;pointer-events:none;position:absolute;right:var(--_ui5-v1-18-0_split_button_middle_separator_left);top:var(--_ui5-v1-18-0_split_button_middle_separator_top)}.ui5-split-arrow-button:hover:before,.ui5-split-text-button:hover+.ui5-split-arrow-button-wrapper>.ui5-split-arrow-button:before{display:var(--_ui5-v1-18-0_split_button_middle_separator_hover_display)}.ui5-split-arrow-button[design=Transparent]:before{border-color:var(--sapButton_Lite_TextColor)}.ui5-split-arrow-button[design=Emphasized]:before{border-color:var(--sapButton_Emphasized_TextColor)}.ui5-split-arrow-button[design=Positive]:before{border-color:var(--sapButton_Accept_TextColor)}.ui5-split-arrow-button[design=Negative]:before{border-color:var(--sapButton_Reject_TextColor)}.ui5-split-arrow-button[design=Attention]:before{border-color:var(--_ui5-v1-18-0_split_button_attention_separator_color)}.ui5-split-text-button[dir=rtl]{border-radius:0 var(--_ui5-v1-18-0_button_border_radius) var(--_ui5-v1-18-0_button_border_radius) 0;border-width:var(--sapButton_BorderWidth);margin-left:var(--_ui5-v1-18-0_split_button_text_button_width);margin-right:0}.ui5-split-text-button[design=Emphasized][dir=rtl]{border-width:var(--_ui5-v1-18-0_split_text_button_emphasized_border_width_rtl)}.ui5-split-arrow-button-wrapper[dir=rtl]{left:0;right:auto}[dir=rtl] .ui5-split-arrow-button{border-radius:var(--_ui5-v1-18-0_button_border_radius) 0 0 var(--_ui5-v1-18-0_button_border_radius)}.ui5-split-arrow-button[focused]::part(button):after{border-bottom-left-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner);border-top-left-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner)}.ui5-split-text-button[focused]::part(button):after{border-bottom-right-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner);border-top-right-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner)}[dir=rtl] .ui5-split-arrow-button[focused]::part(button):after{border-bottom-left-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_outer);border-bottom-right-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner);border-top-left-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_outer);border-top-right-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner)}.ui5-split-text-button[dir=rtl][focused]::part(button):after{border-bottom-left-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner);border-bottom-right-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_outer);border-top-left-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner);border-top-right-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_outer)}.ui5-split-arrow-button[active][design=Emphasized]{background-color:var(--sapButton_Selected_Background);color:var(--sapButton_Emphasized_Active_TextColor)}.ui5-split-arrow-button[active][design=Negative]{background-color:var(--sapButton_Reject_Selected_Background);color:var(--sapButton_Reject_Active_TextColor)}.ui5-split-arrow-button[active][design=Positive]{background-color:var(--sapButton_Accept_Selected_Background);color:var(--sapButton_Accept_Active_TextColor)}.ui5-split-arrow-button[active][design=Attention]{background-color:var(--sapButton_Attention_Selected_Background);color:var(--sapButton_Attention_Active_TextColor)}.ui5-split-arrow-button[active][design=Default]{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}.ui5-split-arrow-button[active][design=Transparent]{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}'};var n=i;t.default=n});
//# sourceMappingURL=SplitButton.css.js.map