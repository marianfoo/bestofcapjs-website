/*!
	* OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
	*/
sap.ui.define(["sap/base/util/merge","sap/ui/core/Core","sap/ui/core/util/reflection/JsControlTreeModifier","sap/ui/fl/changeHandler/MoveControls"],function(e,t,r,n){"use strict";var o=Object.assign({},n);o.applyChange=function(e,t,r){var o=r.modifier.targets==="jsControlTree";if(o){t._suppressScroll()}var a=n.applyChange.call(this,e,t,r);if(o){t.attachEventOnce("onAfterRenderingDOMReady",function(){t._resumeScroll(false)})}return a};o.revertChange=function(e,t,r){var o=r.modifier.targets==="jsControlTree";if(o){t._suppressScroll()}var a=n.revertChange.call(this,e,t,r);if(o){t.attachEventOnce("onAfterRenderingDOMReady",function(){t._resumeScroll(false)})}return a};o.completeChangeContent=function(e,r,o){var a=t.byId(r.source.id),i=t.byId(r.target.id);var s=Promise.resolve();if(a.isA("sap.uxap.AnchorBar")&&i.isA("sap.uxap.AnchorBar")){s=s.then(this._mapAnchorsToSections.bind(this,r,o))}return s.then(function(){return n.completeChangeContent.apply(this,arguments[0])}.bind(this,arguments))};o._mapAnchorsToSections=function(r,n){return Promise.resolve().then(function(){var o,a;var i=n.modifier;var s=i.bySelector(r.selector,n.appComponent,n.view);var c=s._getVisibleSections();function g(e){var r=t.byId(e),n=r.data("sectionId");return t.byId(n)}var u=[];r.movedElements.forEach(function(e){var t=c[e.targetIndex];var r=Promise.resolve().then(function(){return i.findIndexInParentAggregation(t)}).then(function(t){e.targetIndex=t;o=g(e.id);if(!o||!o.getParent()){throw new Error("Cannot map anchor to section")}a={id:o.getParent().getId(),aggregation:o.sParentAggregationName};e.id=o.getId()});u.push(r)});return Promise.all(u).then(function(){e(r.source,a);e(r.target,a)})})};o.getChangeVisualizationInfo=function(e,t){var n=e.getContent();var o=e.getRevertData()[0];var a=n.movedElements[0].selector;var i=r.bySelector(a,t);var s=i.getParent().getAggregation("_anchorBar");var c=[a];var g=[a];s.getAggregation("content").forEach(function(e){e.getAggregation("customData").some(function(t){if(t.getKey()==="sectionId"&&i.getId()===t.getProperty("value")){g.push(e.getId())}})});return{affectedControls:c,displayControls:g,dependentControls:[n.source.selector],descriptionPayload:{sourceContainer:o.sourceParent,targetContainer:n.target.selector}}};return o},true);
//# sourceMappingURL=MoveObjectPageSection.js.map