/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/Lib","sap/ui/core/delegate/ScrollEnablement","sap/m/Title","sap/m/Button","sap/m/Bar","sap/ui/core/ContextMenuSupport","sap/ui/core/util/ResponsivePaddingsEnablement","sap/ui/core/library","sap/ui/core/Element","sap/ui/core/InvisibleText","./TitlePropagationSupport","./PageRenderer","sap/ui/thirdparty/jquery","sap/ui/core/Configuration"],function(e,t,o,a,r,i,n,l,s,u,p,g,d,h,jQuery,f){"use strict";var c=u.AccessibleLandmarkRole;var _=e.ButtonType;var T=e.PageBackgroundDesign;var y=u.TitleLevel;var v=e.TitleAlignment;var b="div";var m="header";var B="footer";var A=t.extend("sap.m.Page",{metadata:{library:"sap.m",properties:{title:{type:"string",group:"Data",defaultValue:null},titleLevel:{type:"sap.ui.core.TitleLevel",group:"Appearance",defaultValue:y.Auto},showNavButton:{type:"boolean",group:"Appearance",defaultValue:false},showHeader:{type:"boolean",group:"Appearance",defaultValue:true},showSubHeader:{type:"boolean",group:"Appearance",defaultValue:true},navButtonText:{type:"string",group:"Misc",defaultValue:null,deprecated:true},navButtonTooltip:{type:"string",group:"Misc",defaultValue:null},enableScrolling:{type:"boolean",group:"Behavior",defaultValue:true},icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null,deprecated:true},backgroundDesign:{type:"sap.m.PageBackgroundDesign",group:"Appearance",defaultValue:T.Standard},navButtonType:{type:"sap.m.ButtonType",group:"Appearance",defaultValue:_.Back,deprecated:true},showFooter:{type:"boolean",group:"Appearance",defaultValue:true},contentOnlyBusy:{type:"boolean",group:"Appearance",defaultValue:false},floatingFooter:{type:"boolean",group:"Appearance",defaultValue:false},titleAlignment:{type:"sap.m.TitleAlignment",group:"Misc",defaultValue:v.Auto}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"},customHeader:{type:"sap.m.IBar",multiple:false},footer:{type:"sap.m.IBar",multiple:false},subHeader:{type:"sap.m.IBar",multiple:false},headerContent:{type:"sap.ui.core.Control",multiple:true,singularName:"headerContent",forwarding:{getter:"_getInternalHeader",aggregation:"contentRight"}},landmarkInfo:{type:"sap.m.PageAccessibleLandmarkInfo",multiple:false},_internalHeader:{type:"sap.m.IBar",multiple:false,visibility:"hidden"}},events:{navButtonTap:{deprecated:true},navButtonPress:{}},dnd:{draggable:false,droppable:true},designtime:"sap/m/designtime/Page.designtime"},renderer:h});l.apply(A.prototype);s.call(A.prototype,{header:{suffix:"intHeader"},subHeader:{selector:".sapMPageSubHeader .sapMIBar"},content:{suffix:"cont"},footer:{selector:".sapMPageFooter:not(.sapMPageFloatingFooter) .sapMIBar"},floatingFooter:{selector:".sapMPageFloatingFooter.sapMPageFooter"}});d.call(A.prototype,"content",function(){return this._headerTitle?this._headerTitle.getId():false});A.FOOTER_ANIMATION_DURATION=350;A.prototype.init=function(){this._initTitlePropagationSupport();this._initResponsivePaddingsEnablement()};A.prototype._hasScrolling=function(){return this.getEnableScrolling()};A.prototype.onBeforeRendering=function(){var e=this.getCustomHeader()||this.getAggregation("_internalHeader"),t=this.getFooter();if(t&&!t.getAriaLabelledBy().length){t.addAriaLabelledBy(this._getFooterToolbarAriaLabelledBy(t.getId()))}if(this._oScroller&&!this._hasScrolling()){this._oScroller.destroy();this._oScroller=null}else if(this._hasScrolling()&&!this._oScroller){this._oScroller=new a(this,null,{scrollContainerId:this.getId()+"-cont",horizontal:false,vertical:true})}if(this._headerTitle){this._headerTitle.setLevel(this.getTitleLevel())}this._ensureNavButton();if(e&&e.setTitleAlignment){e.setTitleAlignment(this.getTitleAlignment())}};A.prototype.onAfterRendering=function(){this.$().toggleClass("sapMPageBusyCoversAll",!this.getContentOnlyBusy());this._sBusySection=this.getContentOnlyBusy()?"cont":null};A.prototype.exit=function(){if(this._oScroller){this._oScroller.destroy();this._oScroller=null}if(this._headerTitle){this._headerTitle.destroy();this._headerTitle=null}if(this._navBtn){this._navBtn.destroy();this._navBtn=null}if(this._appIcon){this._appIcon.destroy();this._appIcon=null}if(this._oHeaderToolbarInvisibleText){this._oHeaderToolbarInvisibleText.destroy();this._oHeaderToolbarInvisibleText=null}if(this._oFooterToolbarInvisibleText){this._oFooterToolbarInvisibleText.destroy();this._oFooterToolbarInvisibleText=null}};A.prototype.setBackgroundDesign=function(e){var t=this.getBackgroundDesign();this.setProperty("backgroundDesign",e,true);this.$().removeClass("sapMPageBg"+t).addClass("sapMPageBg"+this.getBackgroundDesign());return this};A.prototype.setTitle=function(e){var t=!this._headerTitle;this._headerTitle=this._headerTitle||new r(this.getId()+"-title",{level:this.getTitleLevel()});this._headerTitle.setText(e);if(t){this._updateHeaderContent(this._headerTitle,"middle",0)}this.setProperty("title",e,true);return this};A.prototype._ensureNavButton=function(){if(!this.getShowNavButton()){return}var e=this.getNavButtonTooltip()||o.getResourceBundleFor("sap.m").getText("PAGE_NAVBUTTON_TEXT");if(!this._navBtn){this._navBtn=new i(this.getId()+"-navButton",{press:function(){this.fireNavButtonPress();this.fireNavButtonTap()}.bind(this)})}this._navBtn.setType(this.getNavButtonType());this._navBtn.setTooltip(e)};A.prototype.setShowNavButton=function(e){var t=!!this.getShowNavButton();if(e===t){return this}this.setProperty("showNavButton",e,true);if(e){this._ensureNavButton();if(this._appIcon){this._updateHeaderContent(this._appIcon,"left",-1)}this._updateHeaderContent(this._navBtn,"left",0)}else if(this._navBtn){this._updateHeaderContent(this._navBtn,"left",-1)}return this};A.prototype.setShowFooter=function(e){if(this.getDomRef()){e?this.$().addClass("sapMPageWithFooter"):this.$().removeClass("sapMPageWithFooter")}var t=jQuery(this.getDomRef()).find(".sapMPageFooter").last(),o=f.getAnimationMode(),a=o!==f.AnimationMode.none&&o!==f.AnimationMode.minimal;if(!this.getFloatingFooter()){this.setProperty("showFooter",e);return this}this.setProperty("showFooter",e,true);t.removeClass("sapUiHidden");t.toggleClass("sapMPageFooterControlShow",e);t.toggleClass("sapMPageFooterControlHide",!e);if(e){return this}if(a){setTimeout(function(){t.toggleClass("sapUiHidden",!e)},A.FOOTER_ANIMATION_DURATION)}else{t.toggleClass("sapUiHidden",!e)}return this};A.prototype._updateHeaderContent=function(e,t,o){var a=this._getInternalHeader();if(a){switch(t){case"left":if(o==-1){if(a.getContentLeft()){a.removeContentLeft(e)}}else{if(a.indexOfContentLeft(e)!=o){a.insertContentLeft(e,o);a.invalidate()}}break;case"middle":if(o==-1){if(a.getContentMiddle()){a.removeContentMiddle(e)}}else{if(a.indexOfContentMiddle(e)!=o){a.insertContentMiddle(e,o);a.invalidate()}}break;case"right":if(o==-1){if(a.getContentRight()){a.removeContentRight(e)}}else{if(a.indexOfContentRight(e)!=o){a.insertContentRight(e,o);a.invalidate()}}break;default:break}}};A.prototype._getInternalHeader=function(){var e=this.getAggregation("_internalHeader");if(!e){var t=this.getId()+"-intHeader";this.setAggregation("_internalHeader",new n(t,{titleAlignment:this.getTitleAlignment(),ariaLabelledBy:this._getHeaderToolbarAriaLabelledBy(t)}),true);e=this.getAggregation("_internalHeader");if(this.getShowNavButton()&&this._navBtn){this._updateHeaderContent(this._navBtn,"left",0)}if(this.getTitle()&&this._headerTitle){this._updateHeaderContent(this._headerTitle,"middle",0)}}return e};A.prototype._getAnyHeader=function(){var e=this.getCustomHeader();if(e){return e.addStyleClass("sapMPageHeader")}return this._getInternalHeader().addStyleClass("sapMPageHeader")};A.prototype.getScrollDelegate=function(){return this._oScroller};A.prototype._formatLandmarkInfo=function(e,t){if(e){var o=e["get"+t+"Role"]()||"",a=e["get"+t+"Label"]()||"";if(o===c.None){o=""}return{role:o.toLowerCase(),label:a}}return{}};A.prototype._getHeaderTag=function(e){if(e&&e.getHeaderRole()){return b}return m};A.prototype._getSubHeaderTag=function(e){if(e&&e.getSubHeaderRole()){return b}return m};A.prototype._getFooterTag=function(e){if(e&&e.getFooterRole()){return b}return B};A.prototype.scrollTo=function(e,t){if(this._oScroller){this._oScroller.scrollTo(0,e,t)}return this};A.prototype.scrollToElement=function(e,t,o){if(e instanceof p){e=e.getDomRef()}if(this._oScroller){this._oScroller.scrollToElement(e,t,o)}return this};A.prototype.setCustomHeader=function(e){this.setAggregation("customHeader",e);this.toggleStyleClass("sapFShellBar-CTX",!!e&&e.isA("sap.f.ShellBar"));if(e&&this.mEventRegistry["_adaptableContentChange"]){this.fireEvent("_adaptableContentChange",{parent:this,adaptableContent:e})}return this};A.prototype._getAdaptableContent=function(){return this._getAnyHeader()};A.prototype._getHeaderToolbarAriaLabelledBy=function(e){if(!this._oHeaderToolbarInvisibleText){this._oHeaderToolbarInvisibleText=new g(e+"-InvisibleText",{text:o.getResourceBundleFor("sap.m").getText("ARIA_LABEL_TOOLBAR_HEADER_ACTIONS")}).toStatic()}return this._oHeaderToolbarInvisibleText};A.prototype._getFooterToolbarAriaLabelledBy=function(e){if(!this._oFooterToolbarInvisibleText){this._oFooterToolbarInvisibleText=new g(e+"-InvisibleText",{text:o.getResourceBundleFor("sap.m").getText("ARIA_LABEL_TOOLBAR_FOOTER_ACTIONS")}).toStatic()}return this._oFooterToolbarInvisibleText};return A});
//# sourceMappingURL=Page.js.map