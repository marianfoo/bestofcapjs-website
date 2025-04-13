/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/InvisibleText","./WizardStepRenderer","./Button","./TitlePropagationSupport","sap/base/Log","sap/ui/core/library"],function(t,e,i,s,n,o,r,a){"use strict";var u=a.TitleLevel;var p=e.extend("sap.m.WizardStep",{metadata:{properties:{title:{type:"string",group:"Appearance",defaultValue:""},icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:""},validated:{type:"boolean",group:"Behavior",defaultValue:true},optional:{type:"boolean",group:"Appearance",defaultValue:false},_titleLevel:{type:"sap.ui.core.TitleLevel",group:"Appearance",defaultValue:u.H3,visibility:"hidden"}},events:{complete:{parameters:{}},activate:{parameters:{}}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"},_nextButton:{type:"sap.m.Button",multiple:false,visibility:"hidden"}},associations:{subsequentSteps:{type:"sap.m.WizardStep",multiple:true,singularName:"subsequentStep"},nextStep:{type:"sap.m.WizardStep",multiple:false}}},renderer:s});var l=t.ButtonType;o.call(p.prototype,"content",function(){return this.getId()+"-title"});p.prototype.init=function(){this._oResourceBundle=sap.ui.getCore().getLibraryResourceBundle("sap.m");this._oNumberInvisibleText=new i({id:this.getId()+"-NumberedTitle"}).toStatic();this._createNextButton();this._initTitlePropagationSupport()};p.prototype._createNextButton=function(){this._oNextButton=new n(this.getId()+"-nextButton",{text:this._oResourceBundle.getText("WIZARD_STEP")+2,type:l.Emphasized,press:this._complete.bind(this)}).addStyleClass("sapMWizardNextButtonVisible");this.setAggregation("_nextButton",this._oNextButton)};p.prototype.setWizardContext=function(t){["bLast","bReviewStep","sButtonText","bParentAllowsButtonShow"].forEach(function(e){if(typeof t[e]!=="undefined"){this[e]=t[e]}}.bind(this));this._oNextButton.setText(this.sButtonText);this.setLast(this.bLast);this.setButtonVisibility()};p.prototype._getNumberInvisibleText=function(){return this._oNumberInvisibleText};p.prototype._setNumberInvisibleText=function(t){return this._oNumberInvisibleText.setText(this._oResourceBundle.getText("WIZARD_STEP")+t+" "+this.getTitle())};p.prototype.setValidated=function(t){this.setProperty("validated",t,true);this.setButtonVisibility();return this};p.prototype.setNextStep=function(t){this.setAssociation("nextStep",t,true);var e=this._getWizardParent();if(e!==null){e._checkCircularReference(this._getNextStepReference());e._updateProgressNavigator()}return this};p.prototype.setTitle=function(t){var e=this._getWizardParent();this.setProperty("title",t);if(e){e._updateProgressNavigator()}return this};p.prototype.setVisible=function(t){this.setProperty("visible",t,true);r.warning("Don't use the set visible method for wizard steps. If you need to show/hide steps based on some condition - use the branching property of the Wizard instead.");return this};p.prototype._isLeaf=function(){if(this.getNextStep()===null&&this.getSubsequentSteps().length===0){return true}return false};p.prototype._isBranched=function(){return this.getSubsequentSteps().length>1};p.prototype._getNextStepReference=function(){if(this.getNextStep()!==null){return sap.ui.getCore().byId(this.getNextStep())}if(this.getSubsequentSteps().length===1){return sap.ui.getCore().byId(this.getSubsequentSteps()[0])}return null};p.prototype._containsSubsequentStep=function(t){return this.getSubsequentSteps().some(function(e){return e===t})};p.prototype._getWizardParent=function(){var t=this.getParent();while(t&&!t.isA("sap.m.Wizard")){t=t.getParent()}return t};p.prototype.setLast=function(t){this.bLast=t;this.toggleStyleClass("sapMWizardLastActivatedStep",t);this.setButtonVisibility()};p.prototype.setButtonVisibility=function(){var t=this.getValidated()&&this.bParentAllowsButtonShow&&this.bLast;if(typeof t==="undefined"){return}this.displayButton(t)};p.prototype.displayButton=function(t){this._oNextButton.toggleStyleClass("sapMWizardNextButtonHidden",!t);this._oNextButton.toggleStyleClass("sapMWizardNextButtonVisible",t);this._oNextButton.setVisible(t)};p.prototype._activate=function(){this.setLast(true);this.addStyleClass("sapMWizardStepActivated");this.fireActivate()};p.prototype._deactivate=function(){this.removeStyleClass("sapMWizardStepActivated")};p.prototype._complete=function(){var t=this._getWizardParent();this.setLast(this.bReviewStep||false);this.fireComplete();if(t!==null){t._handleNextButtonPress()}};p.prototype.exit=function(){this._oNumberInvisibleText.destroy();this._oNumberInvisibleText=null};return p});
//# sourceMappingURL=WizardStep.js.map