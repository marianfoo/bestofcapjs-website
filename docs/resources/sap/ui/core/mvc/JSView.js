/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./View","./JSViewRenderer","./ViewType","sap/base/util/extend","sap/base/util/merge","sap/ui/base/ManagedObject","sap/base/Log"],function(e,i,t,r,n,s,o){"use strict";var a=e.extend("sap.ui.core.mvc.JSView",{metadata:{library:"sap.ui.core"},renderer:i});var p={};a.asyncSupport=true;a._sType=t.JS;a.create=function(i){var n=r({},i);for(var s in n){if(s==="definition"||s==="preprocessors"){delete n[s];o.warning("JSView.create does not support the options definition or preprocessor!")}}n.type=t.JS;return e.create(n)};sap.ui.jsview=function(e,i,t){return c.apply(this,arguments)};function c(e,i,t){var r={},n;if(i&&typeof i=="string"){r.viewName=i;if(typeof arguments[2]=="boolean"){r.async=t}else if(typeof arguments[2]=="object"){r.controller=arguments[2];r.async=!!arguments[3]}if(r.viewName.startsWith("module:")){throw Error("Legacy factory sap.ui.jsview doesn't support typed views!")}n=new a(e,r);return n}else if(i&&typeof i=="object"){p[e]=i;sap.ui.loader._.declareModule(e.replace(/\./g,"/")+".view.js");o.warning("For defining views, use typed views with 'sap.ui.core.mvc.View.extend()'.")}else if(arguments.length==1&&typeof e=="string"||arguments.length==2&&typeof arguments[0]=="string"&&typeof arguments[1]=="boolean"){r.viewName=arguments[0];r.async=!!arguments[1];n=r.id?new a(r.id,r):new a(r);return n}else{throw new Error("Wrong arguments ('"+e+"', '"+i+"')!"+" Either call sap.ui.jsview([sId,] sViewName) to instantiate a View"+" or sap.ui.jsview(sViewName, oViewImpl) to define a View type.")}}a.prototype.initViewSettings=function(e){var i;o.warning("Do not use deprecated sap.ui.core.mvc.JSView: (View: "+(e.id||e.viewName)+"). "+"Use typed views defined by 'sap.ui.core.mvc.View.extend()' and created by 'sap.ui.core.mvc.View.create()'. "+"For further information, have a look at https://sdk.openui5.org/topic/e6bb33d076dc4f23be50c082c271b9f0.","sap.ui.core.mvc.JSView",null,function(){return{type:"sap.ui.core.mvc.JSView",name:e.viewName}});if(Object.getPrototypeOf(this)===a.prototype){if(!p[e.viewName]){var t=e.viewName.replace(/\./g,"/")+".view";if(e.async){i=new Promise(function(e,i){sap.ui.require([t],e,i)})}else{sap.ui.requireSync(t)}}if(e.async){return Promise.resolve(i).then(function(){n(this,p[e.viewName])}.bind(this))}n(this,p[e.viewName])}else if(e.async){return Promise.resolve()}};a.prototype.onControllerConnected=function(e){s.runWithPreprocessors(function(){this.applySettings({content:this.createContent(e)})},{id:this.getAutoPrefixId()?this.createId.bind(this):undefined,settings:this._fnSettingsPreprocessor},this)};return a});
//# sourceMappingURL=JSView.js.map