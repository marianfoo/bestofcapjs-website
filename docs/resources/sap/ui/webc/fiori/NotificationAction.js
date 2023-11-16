/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","sap/ui/core/EnabledPropagator","sap/ui/webc/main/library","./thirdparty/NotificationAction"],function(t,e,i,a){"use strict";var n=a.ButtonDesign;var r=t.extend("sap.ui.webc.fiori.NotificationAction",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-notification-action-ui5",interfaces:["sap.ui.webc.fiori.INotificationAction"],properties:{design:{type:"sap.ui.webc.main.ButtonDesign",defaultValue:n.Transparent},enabled:{type:"boolean",defaultValue:true,mapping:{type:"attribute",to:"disabled",formatter:"_mapEnabled"}},icon:{type:"string",defaultValue:""},text:{type:"string",defaultValue:""}},events:{click:{parameters:{targetRef:{type:"HTMLElement"}}}}}});i.call(r.prototype);return r});
//# sourceMappingURL=NotificationAction.js.map