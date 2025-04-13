/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","./SemanticContainer"],function(t,n){"use strict";var i=t.ButtonType;var o=n.extend("sap.f.semantic.SemanticTitle",{constructor:function(t,i){n.call(this,t,i);this._iMainActionCount=0;this._aSemanticTextActions=[];this._aSemanticSimpleIconActions=[];this._aSemanticNavIconActions=[];this._aCustomTextActions=[];this._aCustomIconActions=[]}});o.mPlacementMethodMap={titleText:"TextContent",titleIcon:"IconContent",shareIcon:"ShareContent"};o.prototype.addContent=function(t,n){this["_insertSemantic"+o.mPlacementMethodMap[n]].call(this,t);return this};o.prototype.removeContent=function(t,n){this["_removeSemantic"+o.mPlacementMethodMap[n]].call(this,t);return this};o.prototype.destroy=function(){this._aSemanticSimpleIconActions=null;this._aSemanticTextActions=null;this._aCustomTextActions=null;this._aCustomIconActions=null;this._aSemanticNavIconActions=null;return n.prototype.destroy.call(this)};o.prototype.addCustomTextAction=function(t){t.setType(i.Transparent);this._callContainerAggregationMethod("insertAction",t,this._getCustomTextActionInsertIndex());this._aCustomTextActions.push(t);return this};o.prototype.insertCustomTextAction=function(t,n){t.setType(i.Transparent);this._callContainerAggregationMethod("insertAction",t,this._getCustomTextActionInsertIndex(n));this._aCustomTextActions.splice(n,0,t);return this};o.prototype.indexOfCustomTextAction=function(t){return this._aCustomTextActions.indexOf(t)};o.prototype.removeCustomTextAction=function(t){var n=this._aCustomTextActions.indexOf(t),i=this._callContainerAggregationMethod("removeAction",t);this._aCustomTextActions.splice(n,1);return i};o.prototype.removeAllCustomTextActions=function(){var t=[];this._aCustomTextActions.forEach(function(n){var i=this._callContainerAggregationMethod("removeAction",n);if(i){t.push(n)}},this);this._aCustomTextActions=[];return t};o.prototype.destroyCustomTextActions=function(){this.removeAllCustomTextActions().forEach(function(t){t.destroy()});return this};o.prototype.getCustomTextActions=function(){return this._aCustomTextActions.slice()};o.prototype.addCustomIconAction=function(t){t.setType(i.Transparent);this._callContainerAggregationMethod("insertAction",t,this._getCustomIconActionInsertIndex());this._aCustomIconActions.push(t);return this};o.prototype.insertCustomIconAction=function(t,n){t.setType(i.Transparent);this._callContainerAggregationMethod("insertAction",t,this._getCustomIconActionInsertIndex(n));this._aCustomIconActions.splice(n,0,t);return this};o.prototype.indexOfCustomIconAction=function(t){return this._aCustomIconActions.indexOf(t)};o.prototype.removeCustomIconAction=function(t){var n=this._aCustomIconActions.indexOf(t),i=this._callContainerAggregationMethod("removeAction",t);this._aCustomIconActions.splice(n,1);return i};o.prototype.removeAllCustomIconActions=function(){var t=[];this._aCustomIconActions.forEach(function(n){var i=this._callContainerAggregationMethod("removeAction",n);if(i){t.push(n)}},this);this._aCustomIconActions=[];return t};o.prototype.destroyCustomIconActions=function(){this.removeAllCustomIconActions().forEach(function(t){t.destroy()});return this};o.prototype.getCustomIconActions=function(){return this._aCustomIconActions.slice()};o.prototype._insertSemanticTextContent=function(t){var n=this._getControl(t),i=this._isMainAction(t),o;if(t._bIsSingleAction){n._bInOverflow=false}if(this._aSemanticTextActions.indexOf(t)<0){this._aSemanticTextActions.push(t)}if(i){this._iMainActionCount++;o=this._getSemanticTextMainActionInsertIndex()}else{o=this._getSemanticTextActionInsertIndex(t)}this._callContainerAggregationMethod("insertAction",n,o);return this};o.prototype._removeSemanticTextContent=function(t){var n=this._getControl(t),i=this._aSemanticTextActions.indexOf(t),o=this._isMainAction(t);if(o){this._iMainActionCount--}this._aSemanticTextActions.splice(i,1);this._callContainerAggregationMethod("removeAction",n);return this};o.prototype._insertSemanticIconContent=function(t){var n=this._getControl(t),i,o;if(t._bIsSingleAction){n._bInOverflow=false}if(this._isNavigationAction(t)){this._aSemanticNavIconActions.push(t);o=this._getSemanticNavIconActionInsertIndex(t);i="insertNavigationAction"}else{if(this._aSemanticSimpleIconActions.indexOf(t)<0){this._aSemanticSimpleIconActions.push(t)}o=this._getSemanticSimpleIconActionInsertIndex(t);i="insertAction"}this._callContainerAggregationMethod(i,n,o);return this};o.prototype._removeSemanticIconContent=function(t){var n=this._getControl(t),i,o;if(this._isNavigationAction(t)){o=this._aSemanticNavIconActions.indexOf(t);this._aSemanticNavIconActions.splice(o,1);i="removeNavigationAction"}else{o=this._aSemanticTextActions.indexOf(t);this._aSemanticSimpleIconActions.splice(o,1);i="removeAction"}this._callContainerAggregationMethod(i,n);return this};o.prototype._insertSemanticShareContent=function(t){var n=this._getControl(t),i=this._getSemanticShareMenuInsertIndex();this._callContainerAggregationMethod("insertAction",n,i);return this};o.prototype._removeSemanticShareContent=function(t){var n=this._getControl(t);this._callContainerAggregationMethod("removeAction",n);return this};o.prototype._getSemanticTextMainActionInsertIndex=function(){return 0};o.prototype._getCustomTextActionInsertIndex=function(t){var n=this._aCustomTextActions.length;if(t===undefined){return this._iMainActionCount+n}t=t>=n?n:t;t+=this._iMainActionCount;return t};o.prototype._getSemanticTextActionInsertIndex=function(t){this._aSemanticTextActions.sort(this._sortControlByOrder.bind(this));return this._getCustomTextActionInsertIndex()+this._aSemanticTextActions.indexOf(t)-this._iMainActionCount};o.prototype._getCustomIconActionInsertIndex=function(t){var n=this._aCustomIconActions.length,i=this._aCustomTextActions.length+this._aSemanticTextActions.length;if(t===undefined){return i+n}t=t>=n?n:t;t+=i;return t};o.prototype._getSemanticSimpleIconActionInsertIndex=function(t){this._aSemanticSimpleIconActions.sort(this._sortControlByOrder.bind(this));return this._getCustomIconActionInsertIndex()+this._aSemanticSimpleIconActions.indexOf(t)};o.prototype._getSemanticNavIconActionInsertIndex=function(t){this._aSemanticNavIconActions.sort(this._sortControlByOrder.bind(this));return this._aSemanticNavIconActions.indexOf(t)};o.prototype._getSemanticShareMenuInsertIndex=function(){return this._callContainerAggregationMethod("getActions").length};o.prototype._getContainerBar=function(){var t=this._getContainer();if(t){return t.getAggregation("_overflowToolbar")}return null};return o});
//# sourceMappingURL=SemanticTitle.js.map