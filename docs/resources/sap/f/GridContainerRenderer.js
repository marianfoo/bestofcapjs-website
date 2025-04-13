/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,t){var i=t.getId(),r=t.getItems(),n=t.getTooltip_AsString();e.openStart("div",t).class("sapFGridContainer");this.setGridStyles(e,t._getActiveGridStyles());e.accessibilityState(t,{role:"list",roledescription:t._oRb.getText("GRIDCONTAINER_ROLEDESCRIPTION")});if(t.getSnapToRow()){e.class("sapFGridContainerSnapToRow")}if(t.getAllowDenseFill()){e.class("sapFGridContainerDenseFill")}if(t.getWidth()){e.style("width",t.getWidth())}if(t.getMinHeight()){e.style("min-height",t.getMinHeight())}if(n){e.attr("title",n)}e.openEnd();this.renderDummyArea(e,i,"before",r.length>0?0:-1);r.forEach(function(i,r){this.renderItem(e,i,t,r)}.bind(this));this.renderDummyArea(e,i,"after",0);e.close("div")};e.setGridStyles=function(e,t){for(var i in t){e.style(i,t[i])}};e.renderItem=function(e,t,i,r){var n=this.getStylesForItemWrapper(t,i),s=n.styles,a=n.classes,o={role:"listitem"};if(t.getAriaRoleDescription){o.roledescription=t.getAriaRoleDescription()}e.openStart("div",this.generateWrapperId(t,i)).attr("tabindex","0").accessibilityState(i,o);s.forEach(function(t,i){e.style(i,t)});a.forEach(function(t){e.class(t)});e.openEnd();e.renderControl(t);e.close("div")};e.getStylesForItemWrapper=function(e,t){var i=new Map,r=["sapFGridContainerItemWrapper"],n=e.getLayoutData(),s,a;if(n){s=n.getColumns();a=t.getActiveLayoutSettings().getColumns();if(s&&a){s=Math.min(s,a)}if(s){i.set("grid-column","span "+s)}if(t.getInlineBlockLayout()){i.set("grid-row","span 1")}else if(n.getRows()||n.getMinRows()){i.set("grid-row","span "+n.getActualRows())}if(!n.hasAutoHeight()){r.push("sapFGridContainerItemFixedRows")}}if(!e.getVisible()){r.push("sapFGridContainerInvisiblePlaceholder")}return{styles:i,classes:r}};e.generateWrapperId=function(e,t){return t.getId()+"-item-"+e.getId()};e.renderDummyArea=function(e,t,i,r){e.openStart("div",t+"-"+i).class("sapFGridContainerDummyArea").attr("tabindex",r).attr("role","none").openEnd().close("div")};return e},true);
//# sourceMappingURL=GridContainerRenderer.js.map