/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/Deferred","sap/ui/core/Fragment","sap/ui/model/json/JSONModel"],function(e,t,n){"use strict";var a=function(a,r){var i=sap.ui.getCore().getLibraryResourceBundle("sap.m.designtime");return t.load({name:"sap.m.designtime.LinkTargetSelectDialog"}).then(function(t){var o=new n({selectedKey:a.getTarget(),titleText:i.getText("LINK_DIALOG_TITLE_CHANGE_TARGET"),cancelBtn:i.getText("LINK_DIALOG_CANCEL_BTN"),okBtn:i.getText("LINK_DIALOG_OK_BTN")});t.setModel(o);var s=new e;t.getBeginButton().attachPress(function(e){var n=sap.ui.getCore().byId("targetCombo").getValue();s.resolve(n);t.close()});t.getEndButton().attachPress(function(e){s.resolve(undefined);t.close()});t.attachEventOnce("afterClose",function(e){t.destroy()});t.addStyleClass(r.styleClass);t.open();return s.promise}).then(function(e){if(e===undefined){return[]}return[{selectorControl:a,changeSpecificData:{changeType:"changeLinkTarget",content:e}}]})};return{name:{singular:"LINK_NAME",plural:"LINK_NAME_PLURAL"},palette:{group:"ACTION",icons:{svg:"sap/m/designtime/Link.icon.svg"}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"},rename:{changeType:"rename",domRef:function(e){return e.$()[0]}},settings:function(){return{changeLinkTarget:{name:"LINK_CHANGE_TARGET",isEnabled:function(e){return!!e.getHref()},handler:a}}}},templates:{create:"sap/m/designtime/Link.create.fragment.xml"}}});
//# sourceMappingURL=Link.designtime.js.map