/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/library","sap/ui/core/Control","sap/ui/core/Core","./InfoLabelRenderer"],function(e,t,r,a,i){"use strict";var o=e.RenderMode;var n=t.TextDirection;var p=r.extend("sap.tnt.InfoLabel",{metadata:{interfaces:["sap.ui.core.IFormContent"],library:"sap.tnt",properties:{text:{type:"string",defaultValue:"",bindable:"bindable"},renderMode:{type:"sap.tnt.RenderMode",defaultValue:o.Loose,group:"Appearance"},colorScheme:{type:"int",group:"Misc",defaultValue:7},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},displayOnly:{type:"boolean",group:"Appearance",defaultValue:false},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:n.Inherit},icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:""}}},renderer:i});p.prototype.init=function(){if(a.getConfiguration().getAccessibility()&&!i._sAriaText){var e=a.getLibraryResourceBundle("sap.tnt");i._sAriaText=e.getText("INFOLABEL_DEFAULT");i._sAriaTextEmpty=e.getText("INFOLABEL_EMPTY")}};p.prototype.getFormDoNotAdjustWidth=function(){return true};return p});
//# sourceMappingURL=InfoLabel.js.map