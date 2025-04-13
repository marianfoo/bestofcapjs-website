/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/QuickActionBase","sap/m/ToggleButton","sap/m/library"],function(t,e,n){"use strict";var o=t.extend("sap.m.table.columnmenu.QuickGroup",{metadata:{library:"sap.m",aggregations:{items:{type:"sap.m.table.columnmenu.QuickGroupItem",multiple:true}},events:{change:{parameters:{key:{type:"string"},grouped:{type:"boolean"}}}}}});o.prototype.exit=function(){this.destroyContent()};o.prototype.getLabel=function(){var t=sap.ui.getCore().getLibraryResourceBundle("sap.m");return t.getText("table.COLUMNMENU_QUICK_GROUP")};o.prototype.getContent=function(){if(!this._aContent){this._aContent=this.createContent(this.getItems());this._aContent.forEach(function(t){this.addDependent(t)}.bind(this))}return this._aContent};o.prototype.addItem=function(t){this.destroyContent();return this.addAggregation("items",t)};o.prototype.insertItem=function(t,e){this.destroyContent();return this.insertAggregation("items",t,e)};o.prototype.removeItem=function(t){this.destroyContent();return this.removeAggregation("items",t)};o.prototype.removeAllItems=function(){this.destroyContent();return this.removeAllAggregation("items")};o.prototype.destroyItems=function(){this.destroyContent();return this.destroyAggregation("items")};o.prototype.createContent=function(t){return t.map(function(t){return new e({text:t.getLabel(),pressed:t.getGrouped(),press:[t,this.onChange,this]})},this)};o.prototype.destroyContent=function(){if(this._aContent){this._aContent.forEach(function(t){t.destroy()});delete this._aContent}};o.prototype._updateContent=function(){var t=this.getItems();var n=this.getContent();var o,r;for(var s=0;s<t.length;s++){o=t[s];r=n[s];if(!r){r=new e({press:[o,this.onChange,this]})}r.setText(o.getLabel());r.setPressed(o.getGrouped())}for(var i=t.length;i<n.length;i++){n[i].destroy()}};o.prototype.getEffectiveQuickActions=function(){return this.getVisible()&&this.getItems().length?[this]:[]};o.prototype.onChange=function(t,e){e.setProperty("grouped",t.getParameters().pressed,true);this.fireChange({item:e});this.getMenu().close()};o.prototype.getCategory=function(){return n.table.columnmenu.Category.Group};return o});
//# sourceMappingURL=QuickGroup.js.map