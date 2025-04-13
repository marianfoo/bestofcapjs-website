/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function(e,t){"use strict";var i,n,r;i=document.querySelector("[src$='createSuite.js']");if(i){n=/^(.*\/)?createSuite.js/.exec(i.getAttribute("src"));if(n){r=n[1]+"../../../../"}}if(r==null){throw new Error("createSuite.js: could not identify script tag!")}function s(e,t){var i=e.length,n=0;if(i===0){t();return}function s(e){i--;if(e.type==="error"){n++}e.target.removeEventListener("load",s);e.target.removeEventListener("error",s);if(i===0&&n===0&&t){t()}}for(var a=0;a<e.length;a++){var o=document.createElement("script");o.addEventListener("load",s);o.addEventListener("error",s);o.src=r+e[a];document.head.appendChild(o)}}window["sap-ui-optimized"]=window["sap-ui-optimized"]||/\.head/.test(s)&&!/pending/.test(s);window["sap-ui-debug-no-reboot"]=true;s(["ui5loader.js"],function(){sap.ui.loader.config({async:true});s(["ui5loader-autoconfig.js"],function(){sap.ui.require(e,t)})})})(["sap/ui/test/starter/_utils"],function(e){"use strict";function t(t){e.addStylesheet("sap/ui/thirdparty/qunit-2.css");e.addStylesheet("sap/ui/test/starter/testsuite.css");return e.whenDOMReady().then(function(){document.body.classList.add("sapUiTstSuite");var e=document.body.querySelector("#qunit");if(e==null){e=document.createElement("div");e.id="qunit";document.body.insertBefore(e,document.body.firstChild)}e.innerHTML=t})}function i(){var e=new URLSearchParams(window.location.search);e.set("testpage",window.location.pathname);e.set("autostart",true);window.location.href=sap.ui.require.toUrl("")+"/../test-resources/sap/ui/qunit/testrunner.html?"+e}function n(n){document.title="Available Unit Tests - "+n.name;var r="<h1 id='qunit-header'>"+document.title+"</h1>"+"<h2 id='qunit-banner' class='testsuite'></h2>"+"<div id='qunit-testrunner-toolbar'>"+"<button id='redirect'>Run All</button>"+"</div>"+"<ol id='qunit-tests'>";n.sortedTests.forEach(function(e){r+="<li class='"+(e.skip?"skipped":"pass")+"'>"+(e.skip?"<em class='qunit-skipped-label'>skipped</em>":"")+"<strong>"+(e.group?"<span class='module-name'>"+e.group+"<span>: ":"")+"<a class='test-name' href='"+e.page+"' target='_blank'>"+e.name+"</a></strong></li>"});r+="</ol>"+"<div id='redirect-hint'><div>"+"<div>Tests will start in</div>"+"<div id='remaining-time'>*</div>"+"<div>Click or press 'ESC' to cancel</div></div></div>";t(r).then(function(){var t=10*(parseInt(e.getAttribute("data-sap-ui-delay"))||2)+9;function n(){if(t===6){i()}else if(t>6){document.getElementById("remaining-time").textContent=String(Math.floor(t/10));t--;setTimeout(n,100)}else{document.removeEventListener("click",r);document.removeEventListener("keydown",r);var e=document.getElementById("redirect-hint");e.parentNode.removeChild(e)}}function r(e){if(e.type==="click"||e.key==="Escape"){t=-1;e.preventDefault()}}document.addEventListener("keydown",r);document.addEventListener("click",r);document.getElementById("redirect").addEventListener("click",i);n()})}function r(i){t("<h1 id='qunit-header'>Failed to load Testsuite</h1>"+"<h2 id='qunit-banner' class='qunit-fail'></h2>"+"<ol id='qunit-tests'>"+"<li class='pass'><strong>"+e.encode(i.message||String(i))+"</strong></li>"+"</ol>")}e.registerResourceRoots();var s=e.getAttribute("data-sap-ui-testsuite")||e.getDefaultSuiteName();var a=e.getSuiteConfig(s);var o=parent.jsUnitTestSuite;if(!o){a.then(n).catch(r);return}window.suite=function(){function e(e){var t=new o;e.sortedTests.forEach(function(e){if(!e.skip){t.addTestPage(e.page,e)}});return t}return a.then(e).catch(function(e){r(e);throw e})};var d=new CustomEvent("sap-ui-testsuite-ready");window.dispatchEvent(d)});
//# sourceMappingURL=createSuite.js.map