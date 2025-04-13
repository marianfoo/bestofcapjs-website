/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/BindingMode","sap/ui/model/Context","sap/ui/base/ManagedObject","sap/ui/core/mvc/Controller","sap/base/Log","sap/base/util/each","sap/base/util/isEmptyObject"],function(e,t,r,a,o,n,i){"use strict";return a.extend("sap.uxap.component.ObjectPageLayoutUXDrivenFactory",{connectToComponent:function(r){var a=i(r.getData());r.setDefaultBindingMode(e.OneWay);var n=function(){if(a){r.detachRequestCompleted(n)}var e=new t(r,"/headerTitle"),i=this.getView().byId("ObjectPageLayout");if(e.getProperty("")){try{this._oHeader=this.controlFactory(i.getId(),e);i.setHeaderTitle(this._oHeader)}catch(e){o.error("ObjectPageLayoutFactory :: error in header creation from config: "+e)}}}.bind(this);if(a){r.attachRequestCompleted(n)}else{n()}},controlFactory:function(e,t){var a=t.getProperty(""),i,c,s;try{c=sap.ui.requireSync(a.Type.replace(/\./g,"/"));s=c.getMetadata();n(s._mAllEvents,function(e,t){if(typeof a[e]=="string"){a[e]=this.convertEventHandler(a[e])}}.bind(this));i=r.create(a);n(s._mAllProperties,function(e,r){if(a[e]){i.bindProperty(e,"objectPageLayoutMetadata>"+t.getPath()+"/"+e)}})}catch(e){o.error("ObjectPageLayoutFactory :: error in control creation from config: "+e)}return i},convertEventHandler:function(e){var t=window,r=e.split(".");try{n(r,function(e,r){t=t[r]})}catch(r){o.error("ObjectPageLayoutFactory :: undefined event handler: "+e+". Did you forget to require its static class?");t=undefined}return t}})});
//# sourceMappingURL=ObjectPageLayoutUXDrivenFactory.controller.js.map