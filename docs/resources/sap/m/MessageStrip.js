/*!
* OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["./library","sap/ui/core/Control","./MessageStripUtilities","./Text","./Link","./FormattedText","sap/ui/core/library","./MessageStripRenderer","sap/base/Log","sap/m/Button","sap/ui/core/Core","sap/ui/core/Configuration","sap/ui/core/InvisibleText"],function(e,t,i,s,a,o,n,r,l,p,g,u,d){"use strict";var c=n.MessageType;var y=e.ButtonType;var f=t.extend("sap.m.MessageStrip",{metadata:{library:"sap.m",designtime:"sap/m/designtime/MessageStrip.designtime",properties:{text:{type:"string",group:"Appearance",defaultValue:""},type:{type:"sap.ui.core.MessageType",group:"Appearance",defaultValue:c.Information},customIcon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:""},showIcon:{type:"boolean",group:"Appearance",defaultValue:false},showCloseButton:{type:"boolean",group:"Appearance",defaultValue:false},enableFormattedText:{type:"boolean",group:"Appearance",defaultValue:false}},defaultAggregation:"link",aggregations:{link:{type:"sap.m.Link",multiple:false,singularName:"link"},_formattedText:{type:"sap.m.FormattedText",multiple:false,visibility:"hidden"},_text:{type:"sap.m.Text",multiple:false,visibility:"hidden"},_closeButton:{type:"sap.m.Button",multiple:false,visibility:"hidden"}},events:{close:{}},dnd:{draggable:true,droppable:false}},renderer:r});f.prototype.init=function(){this.data("sap-ui-fastnavgroup","true",true);this.setAggregation("_text",new s);this._initCloseButton()};f.prototype.onBeforeRendering=function(){this._normalizeType(this.getType());this._setButtonAriaLabelledBy(this.getType())};f.prototype.setText=function(e){var t=this.getAggregation("_formattedText");if(t){t.setHtmlText(e)}this.getAggregation("_text").setText(e);return this.setProperty("text",e)};f.prototype.close=function(){var e=u.getAnimationMode(),t=e!==u.AnimationMode.none&&e!==u.AnimationMode.minimal;var s=function(){this.setVisible(false);this.fireClose()}.bind(this);if(!t){s();return}i.closeTransitionWithCSS.call(this,s)};f.prototype.setEnableFormattedText=function(e){var t=this.getAggregation("_formattedText");if(e){if(!t){t=new o;t._setUseLimitedRenderingRules(true);this.setAggregation("_formattedText",t)}t.setHtmlText(this.getText())}return this.setProperty("enableFormattedText",e)};f.prototype.setAggregation=function(e,i,s){if(e==="link"&&i instanceof a){var o=this.getId()+"-info"+" "+this.getAggregation("_text").getId(),n=i.getAriaDescribedBy();if(!n.includes(o)){i.addAriaDescribedBy(o)}}t.prototype.setAggregation.call(this,e,i,s);return this};r.getAccessibilityState=function(){var e=i.getAccessibilityState.call(this),t=this.getLink(),s=g.getLibraryResourceBundle("sap.m");if(!t){e.labelledby=this.getId()}e.roledescription=s.getText("MESSAGE_STRIP_ARIA_ROLE_DESCRIPTION");return e};f.prototype.ontouchmove=function(e){e.setMarked()};f.prototype._normalizeType=function(e){if(e===c.None){l.warning(i.MESSAGES.TYPE_NOT_SUPPORTED);this.setProperty("type",c.Information,true)}};f.prototype._initCloseButton=function(){var e=g.getLibraryResourceBundle("sap.m"),t=this.getAggregation("_closeButton");if(!t){var s=new p({type:y.Transparent,tooltip:e.getText("MESSAGE_STRIP_TITLE"),icon:"sap-icon://decline",press:this.close.bind(this)}).addStyleClass(i.CLASSES.CLOSE_BUTTON).addStyleClass("sapUiSizeCompact");this.setAggregation("_closeButton",s);this._setButtonAriaLabelledBy(this.getType())}};f.prototype._setButtonAriaLabelledBy=function(e){var t=this.getAggregation("_closeButton"),i=g.getLibraryResourceBundle("sap.m"),s=i.getText("MESSAGE_STRIP_"+e.toUpperCase()+"_CLOSE_BUTTON");if(!this._oInvisibleText){this._oInvisibleText=new d({text:s}).toStatic()}else{this._oInvisibleText.setText(s)}if(t){t.removeAllAssociation("ariaLabelledBy",true);t.addAssociation("ariaLabelledBy",this._oInvisibleText.getId(),true)}};f.prototype.exit=function(){if(this._oInvisibleText){this._oInvisibleText.destroy();this._oInvisibleText=null}};return f});
//# sourceMappingURL=MessageStrip.js.map