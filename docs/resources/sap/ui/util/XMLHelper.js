/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(r){"use strict";var e={};e.parse=function(r){var n;var t;var i=new DOMParser;n=i.parseFromString(r,"application/xml");t=e.getParseError(n);if(t){if(!n.parseError){n.parseError=t}}return n};e.getParseError=function(n){var t={errorCode:-1,url:"",reason:"unknown error",srcText:"",line:-1,linepos:-1,filepos:-1,type:"error"};if(r.browser.firefox&&n&&n.documentElement&&n.documentElement.tagName=="parsererror"){var i=n.documentElement.firstChild.nodeValue,o=/XML Parsing Error: (.*)\nLocation: (.*)\nLine Number (\d+), Column (\d+):(.*)/,a=o.exec(i);if(a){t.reason=a[1];t.url=a[2];t.line=parseInt(a[3]);t.linepos=parseInt(a[4]);t.srcText=a[5];t.type="error"}return t}if(r.browser.webkit&&n&&n.documentElement&&n.getElementsByTagName("parsererror").length>0){var i=e.serialize(n),o=/(error|warning) on line (\d+) at column (\d+): ([^<]*)\n/,a=o.exec(i);if(a){t.reason=a[4];t.url="";t.line=parseInt(a[2]);t.linepos=parseInt(a[3]);t.srcText="";t.type=a[1]}return t}if(!n||!n.documentElement){return t}return{errorCode:0}};e.serialize=function(r){var e=new XMLSerializer;return e.serializeToString(r)};return e});
//# sourceMappingURL=XMLHelper.js.map