/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./QueryPanel","sap/m/HBox","sap/m/CheckBox","sap/ui/layout/Grid"],function(e,t,r,n){"use strict";var o=e.extend("sap.m.p13n.GroupPanel",{metadata:{library:"sap.m",properties:{title:{type:"string",defaultValue:sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("p13n.DEFAULT_TITLE_GROUP")},enableShowField:{type:"boolean",defaultValue:false}}},renderer:{apiVersion:2}});o.prototype.PRESENCE_ATTRIBUTE="grouped";o.prototype.CHANGE_REASON_SHOWIFGROUPED="showifgrouped";o.prototype._createQueryRowGrid=function(e){var t=e.name;var r=this._createKeySelect(t);var o=new n({containerQuery:true,defaultSpan:this.getEnableShowField()?"XL4 L4 M4 S4":"XL6 L6 M6 S6",content:[r]}).addStyleClass("sapUiTinyMargin");if(this.getEnableShowField()){var a=this._createCheckBox(e);o.addContent(a)}return o};o.prototype._createCheckBox=function(e){var n=e.name;var o=new t({alignItems:"Center",items:[new r({enabled:n?true:false,selected:e.hasOwnProperty("showIfGrouped")?e.showIfGrouped:true,select:function(e){var t=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent();var r=e.oSource.getParent().getParent().getContent()[0].getSelectedItem().getKey();this._changeShowIfGrouped(r,e.getParameter("selected"));t.fireChange({reason:"change",item:{name:r,grouped:true,showIfGrouped:e.getParameter("selected")}})}.bind(this),text:this._getResourceText("p13n.GROUP_CHECKBOX")})]});return o};o.prototype._changeShowIfGrouped=function(e,t){var r=this._getP13nModel().getProperty("/items").filter(function(t){return t.name===e});r[0].showIfGrouped=t;this.fireChange({reason:this.CHANGE_REASON_SHOWIFGROUPED,item:r[0]})};o.prototype._getPlaceholderText=function(){return this._getResourceText("p13n.GROUP_PLACEHOLDER")};o.prototype._getRemoveButtonTooltipText=function(){return this._getResourceText("p13n.GROUP_REMOVEICONTOOLTIP")};o.prototype._getRemoveButtonAnnouncementText=function(){return this._getResourceText("p13n.GROUP_REMOVEICONANNOUNCE")};o.prototype._selectKey=function(t){e.prototype._selectKey.apply(this,arguments);var r=t.getParent().getParent();var n=t.getSelectedKey();var o=r.getContent()[0].getContent();o[1].getItems()[0].setEnabled(!!n)};return o});
//# sourceMappingURL=GroupPanel.js.map