/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/base/ManagedObject","sap/ui/base/EventProvider","sap/base/util/array/uniqueSort","sap/base/util/deepExtend"],function(e,n,t,r,i){"use strict";var a=e.extend("sap.ui.base.ManagedObjectObserver",{constructor:function(n){if(!n&&typeof n!=="function"){throw new Error("Missing callback function in ManagedObjectObserver constructor")}e.call(this);this._fnCallback=n}});a.prototype.observe=function(e,t){if(!(e instanceof n)){if(e==null){return}throw new TypeError("ManagedObjectObserver can only handle ManagedObjects, but observe was called for "+e)}A(e,t);l(e,this,t)};a.prototype.unobserve=function(e,t){if(!(e instanceof n)){if(e==null){return}throw new TypeError("ManagedObjectObserver can only handle ManagedObjects, but unobserve was called for "+e)}if(t){A(e,t)}p(e,this,t)};a.prototype.isObserved=function(e,t){if(!(e instanceof n)){if(e==null){return false}throw new TypeError("ManagedObjectObserver can only handle ManagedObjects, but isObserved was called for "+e)}return v(e,this,t)};a.prototype.disconnect=function(){b(this)};a.prototype.getConfiguration=function(e){return d(e,this)};var s={},o=Object.create(null),u=new WeakMap;s.propertyChange=function(e,n,t,r){c("properties",e,n,function(){return{type:"property",old:t,current:r}})};s.aggregationChange=function(e,n,t,r){c("aggregations",e,n,function(){return{type:"aggregation",mutation:t,children:Array.isArray(r)?r:null,child:!Array.isArray(r)?r:null}})};s.parentChange=function(e,n,t,r){c("parent",e,n,function(){return{type:"parent",mutation:t,parent:r}});var i=t==="unset"?"remove":"insert";s.aggregationChange(r,n,i,e)};s.associationChange=function(e,n,t,r){c("associations",e,n,function(){return{type:"association",mutation:t,ids:r}})};s.eventChange=function(e,n,t,r,i,a){c("events",e,n,function(){return{type:"event",mutation:t,listener:r,func:i,data:a}})};s.bindingChange=function(e,n,t,r,i){c("bindings",e,n,function(){return{type:"binding",mutation:t,bindingInfo:r,memberType:i}})};s.objectDestroyed=function(e){c("destroy",e,null,function(){return{type:"destroy"}});f(e)};function f(e){var n=e.getId();if(o[n]){e.detachEvent("EventHandlerChange",O);for(var t=0;t<o[n].listeners.length;t++){var r=u.get(o[n].listeners[t]);if(r){r.delete(n)}}delete o[n]}delete e._observer}function c(e,n,t,r){var i=n.getId(),a=o[i];if(a){var s;for(var u=0;u<a.listeners.length;u++){if(g(a.configurations[u],e,t)){if(!s){s=r();s.name=t;s.object=n}var f=a.listeners[u];f._fnCallback(s)}}}}function g(e,n,t){if(e==null||!n){return false}if(n!="destroy"&&n!="parent"&&!t){return false}return e[n]===true||Array.isArray(e[n])&&e[n].indexOf(t)>-1}function l(e,n,t){h(e,n,t,false)}function d(e,n){var t=e.getId();var r=o[t];if(r&&r.listeners){var a=r.listeners.indexOf(n);if(a>=0){var s=i({},r.configurations[a]);return s}}return null}function p(e,n,t){t=t||d(e,n);h(e,n,t,true)}function v(e,n,t){var r=e.getId(),i=o[r];t=t||d(e,n);if(!i){return false}var a=i.listeners.indexOf(n);if(a===-1){return false}else{return j(i.configurations[a].properties,t.properties)&&j(i.configurations[a].aggregations,t.aggregations)&&j(i.configurations[a].associations,t.associations)&&j(i.configurations[a].bindings,t.bindings)&&j(i.configurations[a].events,t.events)&&E(i.configurations[a].destroy,t.destroy)&&E(i.configurations[a].parent,t.parent)}}function b(e){var n=u.get(e);if(!n){return}n.forEach(function(n){var t=o[n];for(var r=0;r<t.listeners.length;r++){if(t.listeners[r]===e){t.listeners.splice(r,1);t.configurations.splice(r,1)}}if(t.listeners.length===0){delete o[n];t.object._observer=undefined}});u.delete(e)}function h(e,n,r,i){var a=e.getId(),c=o[a],g=u.get(n)||new Set,l,d;if(i){if(!c){return}d=c.listeners.indexOf(n);if(d>=0){l=c.configurations[d]}}else{if(!c){c=o[a]={listeners:[],configurations:[],object:e}}if(g.size===0){u.set(n,g)}g.add(a);d=c.listeners.indexOf(n);if(d===-1){c.listeners.push(n);c.configurations.push(r)}else{l=c.configurations[d]}}if(l){l.properties=l.properties||[];m(l.properties,r.properties,i);l.aggregations=l.aggregations||[];m(l.aggregations,r.aggregations,i);l.associations=l.associations||[];m(l.associations,r.associations,i);l.bindings=l.bindings||[];m(l.bindings,r.bindings,i);l.events=l.events||[];m(l.events,r.events,i);if(r.destroy!=null){if(i){delete l.destroy}else{l.destroy=r.destroy}}if(r.parent!=null){if(i){delete l.parent}else{l.parent=r.parent}}}var p=y(e,"events");if(e._observer&&i){if(!p&&t.hasListener(e,"EventHandlerChange",O)){e.detachEvent("EventHandlerChange",O)}if(!p&&!y(e,"properties")&&!y(e,"aggregations")&&!y(e,"associations")&&!y(e,"destroy")&&!y(e,"parent")&&!y(e,"bindings")){f(e)}}else if(!e._observer&&!i){if(p&&!t.hasListener(e,"EventHandlerChange",O)){e.attachEvent("EventHandlerChange",O)}e._observer=s}}function y(e,n){var t=e.getId(),r=o[t];if(r){var i=r.configurations.filter(function(e){return e.hasOwnProperty(n)&&e[n]&&(e[n]===true||e[n].length>0)});return i.length>0}return false}function O(e){var n=e.getSource(),t=e.mParameters.EventId;if(n.getMetadata().hasEvent(t)){if(e.mParameters.type==="listenerAttached"){s.eventChange(n,t,"insert",e.mParameters.listener,e.mParameters.func,e.mParameters.data)}else if(e.mParameters.type==="listenerDetached"){s.eventChange(n,t,"remove",e.mParameters.listener,e.mParameters.func,e.mParameters.data)}}}function m(e,n,t){if(!n){return}for(var r=0;r<n.length;r++){var i=e.indexOf(n[r]);if(i>-1&&t){e.splice(i,1)}else if(i===-1&&!t){e.push(n[r])}}}function j(e,n){if(!Array.isArray(n)||n.length==0){return true}if(!Array.isArray(e)||e.length==0){return false}var t=r(e.concat(n));return e.length===t.length}function E(e,n){if(n==null){return true}return e===n}function A(e,n){var t=e.getMetadata(),i=Object.keys(t.getAllProperties()),a=Object.keys(t.getAllAggregations()),s=Object.keys(t.getAllAssociations()),o=r(i.concat(a)),u=Object.keys(t.getAllEvents());n.properties=n.properties===true?i:n.properties;n.aggregations=n.aggregations===true?a:n.aggregations;n.associations=n.associations===true?s:n.associations;n.bindings=n.bindings===true?o:n.bindings;n.events=n.events===true?u:n.events;n.destroy=n.destroy==null?false:n.destroy;n.parent=n.parent==null?false:n.parent}return a});
//# sourceMappingURL=ManagedObjectObserver.js.map