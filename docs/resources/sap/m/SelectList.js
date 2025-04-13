/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/Element","sap/ui/core/delegate/ItemNavigation","sap/ui/core/Item","./SelectListRenderer","sap/base/Log"],function(e,t,i,s,o,n,r){"use strict";var a=e.touch;var l=e.SelectListKeyboardNavigationMode;var u=t.extend("sap.m.SelectList",{metadata:{library:"sap.m",properties:{enabled:{type:"boolean",group:"Behavior",defaultValue:true},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"auto"},maxWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%"},selectedKey:{type:"string",group:"Data",defaultValue:""},selectedItemId:{type:"string",group:"Misc",defaultValue:""},showSecondaryValues:{type:"boolean",group:"Misc",defaultValue:false},_columnRatio:{type:"sap.m.SelectColumnRatio",group:"Appearance",visibility:"hidden"},_tabIndex:{type:"string",group:"Misc",visibility:"hidden",defaultValue:""},keyboardNavigationMode:{type:"sap.m.SelectListKeyboardNavigationMode",group:"Behavior",defaultValue:l.Delimited},hideDisabledItems:{type:"boolean",group:"Behavior",defaultValue:false}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.core.Item",multiple:true,singularName:"item",bindable:"bindable"}},associations:{selectedItem:{type:"sap.ui.core.Item",multiple:false},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{selectionChange:{parameters:{selectedItem:{type:"sap.ui.core.Item"}}},itemPress:{parameters:{item:{type:"sap.ui.core.Item"}}}}},renderer:n});u.prototype._setSelectedIndex=function(e,t){var i;t=t||this.getItems();e=e>t.length-1?t.length-1:Math.max(0,e);i=t[e];if(i){this.setSelection(i)}};u.prototype.updateItems=function(e,t){this.bItemsUpdated=false;this.destroyItems();this.updateAggregation("items");this.bItemsUpdated=true;if(t&&(t.detailedReason==="AddVirtualContext"||t.detailedReason==="RemoveVirtualContext")){this._bHasVirtualContext=true;return}this._bHasVirtualContext=false;this.synchronizeSelection({forceSelection:false});setTimeout(this.synchronizeSelection.bind(this),0)};u.prototype.refreshItems=function(){this.bItemsUpdated=false;this.refreshAggregation("items")};u.prototype._activateItem=function(e){if(e instanceof o&&e&&e.getEnabled()){this.fireItemPress({item:e});if(this.getSelectedItem()!==e){this.setSelection(e);this.fireSelectionChange({selectedItem:e})}}};u.prototype._queryEnabledItemsDomRefs=function(){return this.getItems().reduce(function(e,t){if(t.getEnabled()&&!t.isA("sap.ui.core.SeparatorItem")){e.push(t.getDomRef())}return e},[])};u.prototype._handleARIAActivedescendant=function(){var e=i.closestTo(document.activeElement),t=this.getDomRef();if(e&&t){t.setAttribute("aria-activedescendant",e.getId())}};u.prototype.init=function(){this._iStartTimeout=0;this._iActiveTouchId=0;this._fStartX=0;this._fStartY=0;this._oItemNavigation=null;this._$ItemPressed=null};u.prototype.onBeforeRendering=function(){this.synchronizeSelection({forceSelection:false})};u.prototype.onAfterRendering=function(){if(this.getKeyboardNavigationMode()===l.None){this.destroyItemNavigation()}else{this.createItemNavigation()}};u.prototype.exit=function(){this.destroyItemNavigation();this._$ItemPressed=null};u.prototype.ontouchstart=function(e){if(a.countContained(e.touches,this.getId())>1||!this.getEnabled()){return}e.setMarked();var t=e.targetTouches[0];this._iActiveTouchId=t.identifier;this._fStartX=t.pageX;this._fStartY=t.pageY;this._iStartTimeout=setTimeout(function(){var t=e.srcControl.$();if(t){t.addClass(this.getRenderer().CSS_CLASS+"ItemBasePressed");this._$ItemPressed=t}}.bind(this),100)};u.prototype.ontouchmove=function(e){var t=null;if(!this.getEnabled()){return}t=a.find(e.changedTouches,this._iActiveTouchId);if(t&&(Math.abs(t.pageX-this._fStartX)>10||Math.abs(t.pageY-this._fStartY)>10)){clearTimeout(this._iStartTimeout);if(this._$ItemPressed){this._$ItemPressed.removeClass(this.getRenderer().CSS_CLASS+"ItemBasePressed");this._$ItemPressed=null}}};u.prototype.ontouchend=function(e){var t=null;if(!this.getEnabled()){return}e.setMarked();t=a.find(e.changedTouches,this._iActiveTouchId);if(t){setTimeout(function(){if(this._$ItemPressed){this._$ItemPressed.removeClass(this.getRenderer().CSS_CLASS+"ItemBasePressed");this._$ItemPressed=null}this._iStartTimeout=null}.bind(this),100)}};u.prototype.ontouchcancel=u.prototype.ontouchend;u.prototype.ontap=function(e){if(this.getEnabled()){e.setMarked();this._activateItem(e.srcControl)}};u.prototype.onsapselect=function(e){if(this.getEnabled()){e.setMarked();e.preventDefault();this._activateItem(e.srcControl)}};u.prototype.onAfterFocus=function(e){this._handleARIAActivedescendant()};u.prototype.findFirstEnabledItem=function(e){e=e||this.getItems();for(var t=0;t<e.length;t++){if(e[t].getEnabled()){return e[t]}}return null};u.prototype.setSelection=function(e){this.setAssociation("selectedItem",e,true);this.setProperty("selectedItemId",e instanceof o?e.getId():e);if(typeof e==="string"){e=i.registry.get(e)}this.setProperty("selectedKey",e?e.getKey():"",true);return this};u.prototype.synchronizeSelection=function(e){var t=this.getSelectedKey(),i=this.getItemByKey(""+t),s=true;if(e){s=!!e.forceSelection}if(this.isSelectionSynchronized({selectedKey:t,firstItemWithKey:i,forceSelection:s})){return}if(i&&t!==""){this.setAssociation("selectedItem",i,true);this.setProperty("selectedItemId",i.getId(),true)}else if(s&&!this._bHasVirtualContext&&this.getDefaultSelectedItem()&&(!this.isBound("items")||this.bItemsUpdated)){try{this.setSelection(this.getDefaultSelectedItem())}catch(e){r.warning("Update failed due to exception. Loggable in support mode log",null,null,function(){return{exception:e}})}}};u.prototype.isSelectionSynchronized=function(e){var t=this.getSelectedItem(),i,s,o;if(e){i=e.selectedKey;s=e.firstItemWithKey;o=e.forceSelection}else{i=this.getSelectedKey();s=this.getItemByKey(i);o=this.getForceSelection()}if(o){if(!t){return false}if(i===""&&t.getKey()===""){return true}return i===t.getKey()&&t===s}else{if(t===null&&i===""){return true}if(i===""){return false}return i===(t&&t.getKey())&&t===s}};u.prototype.getForceSelection=function(){return false};u.prototype.findLastEnabledItem=function(e){e=e||this.getItems();return this.findFirstEnabledItem(e.reverse())};u.prototype.getVisibleItems=function(){for(var e=0,t,i=this.getItems(),s=[];e<i.length;e++){t=i[e];if(t.bVisible||t.bVisible===undefined){s.push(t)}}return s};u.prototype._getColumnsPercentages=function(){var e=this.getProperty("_columnRatio"),t,i,s;if(!e){return null}t=e.split(":").map(function(e){return parseInt(e)});i=t[0]+t[1];s=Math.round(t[0]/i*100);return{firstColumn:s+"%",secondColumn:100-s+"%"}};u.prototype.getSelectableItems=function(){return this.getEnabledItems(this.getVisibleItems()).filter(function(e){return!e.isA("sap.ui.core.SeparatorItem")})};u.prototype.findItem=function(e,t){var i="get"+e.charAt(0).toUpperCase()+e.slice(1);for(var s=0,o=this.getItems();s<o.length;s++){if(o[s][i]()===t){return o[s]}}return null};u.prototype.getItemByText=function(e){return this.findItem("text",e)};u.prototype.isItemSelected=function(e){return e&&e.getId()===this.getAssociation("selectedItem")};u.prototype._getNonSeparatorItemsCount=function(){return this.getEnabledItems().filter(function(e){return!e.isA("sap.ui.core.SeparatorItem")}).length};u.prototype.getDefaultSelectedItem=function(e){return null};u.prototype.clearSelection=function(){this.setSelection(null)};u.prototype.createItemNavigation=function(){var e;if(!this._oItemNavigation){this._oItemNavigation=new s(null,null,!this.getEnabled());this._oItemNavigation.attachEvent(s.Events.AfterFocus,this.onAfterFocus,this);this._oItemNavigation.setDisabledModifiers({sapnext:["alt","meta"],sapprevious:["alt","meta"]});this.addEventDelegate(this._oItemNavigation)}e=this.getDomRef();this._oItemNavigation.setRootDomRef(e);this._oItemNavigation.setItemDomRefs(this._queryEnabledItemsDomRefs(e));this._oItemNavigation.setCycling(false);this._oItemNavigation.setSelectedIndex(this.indexOfItem(this.getSelectedItem()));this._oItemNavigation.setPageSize(10)};u.prototype.destroyItemNavigation=function(){if(this._oItemNavigation){this.removeEventDelegate(this._oItemNavigation);this._oItemNavigation.destroy();this._oItemNavigation=null}};u.prototype.getItemNavigation=function(){return this._oItemNavigation};u.prototype.setSelectedItem=function(e){if(typeof e==="string"){this.setAssociation("selectedItem",e,true);e=i.registry.get(e)}if(!(e instanceof o)&&e!==null){return this}if(!e){e=this.getDefaultSelectedItem()}this.setSelection(e);return this};u.prototype.setSelectedItemId=function(e){e=this.validateProperty("selectedItemId",e);this.setSelection(e);return this};u.prototype.setSelectedKey=function(e){e=this.validateProperty("selectedKey",e);var t=this.getItemByKey(e);if(t||e===""){if(!t&&e===""){t=this.getDefaultSelectedItem()}this.setSelection(t);return this}return this.setProperty("selectedKey",e)};u.prototype.getSelectedItem=function(){var e=this.getAssociation("selectedItem");return e===null?null:i.registry.get(e)||null};u.prototype.getItemAt=function(e){return this.getItems()[+e]||null};u.prototype.getFirstItem=function(){return this.getItems()[0]||null};u.prototype.getLastItem=function(){var e=this.getItems();return e[e.length-1]||null};u.prototype.getEnabledItems=function(e){e=e||this.getItems();return e.filter(function(e){return e.getEnabled()})};u.prototype.getItemByKey=function(e){return this.findItem("key",e)};u.prototype.removeItem=function(e){e=this.removeAggregation("items",e);if(this.getItems().length===0){this.clearSelection()}else if(this.isItemSelected(e)){this.setSelection(this.getDefaultSelectedItem())}return e};u.prototype.removeAllItems=function(){var e=this.removeAllAggregation("items",true);this.$().children("li").remove();return e};u.prototype.destroyItems=function(){this.destroyAggregation("items",true);return this};u.prototype.setNoDataText=function(){};return u});
//# sourceMappingURL=SelectList.js.map