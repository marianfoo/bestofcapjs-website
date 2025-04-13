"use strict";sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","./model/models","sap/ui/model/json/JSONModel","sap/ui/core/IconPool","sap/ui/core/ComponentSupport","sap/ui/core/date/Gregorian","sap/ui/model/type/Date","sap/base/Log"],function(e,t,o,n,s,a,i,c,r){function l(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const d=t["support"];const u=l(o);const p=e.extend("org.openui5.bestofui5.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init:function t(){e.prototype.init.call(this);this.getRouter().initialize();this.getRouter().attachRoutePatternMatched(this.onTitleChanged,this);s.registerFont({collectionName:"font-awesome-icons",fontFamily:"fa-brands",fontURI:"resources/font-awesome",lazy:true});s.registerFont({collectionName:"font-awesome-icons-solid",fontFamily:"fa-solid",fontURI:"resources/font-awesome",lazy:true});const o=new n({filter:"all",tokens:[],search:"",route:"",selectedTab:"hotPackagesView",selectKey:"downloads365",sortOrderDecending:true,headerKey:"hotPackages",tagFilter:"tag",timelinePanelExpanded:false,allPackagesCount:0});this.setModel(o,"settings");const a=new n({packages:0,tags:0,timeline:0,contributors:0,applications:0});this.setModel(a,"scrollState");this.getRouter().attachRouteMatched(this.onBeforeRouteMatched,this);this.setModel(u.createDeviceModel(),"device")},getContentDensityClass:function e(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!d.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass},onTitleChanged:async function e(t){try{const e=this.getModel("i18n").getResourceBundle();const o=t.getParameter("config").name;let n=e.getText("component_title");switch(o){case"RouteObjectView":let o=t.getParameter("arguments").name;const s=this.getModel("data");await s.dataLoaded();const a=s.getData();const i=a.packages.findIndex(e=>e.name===o);const c=this.getModel("data").getProperty(`/packages/${i}`);n=`${c.name} - ${n}`;document.querySelector('meta[name="description"]').setAttribute("content",`${n} - ${c.description}`);document.querySelector('meta[property="og:description"]').setAttribute("content",`${n} - ${c.description}`);break;case"default":n=`${e.getText("component_hot")} - ${n}`;break;case"allPackages":n=`${e.getText("component_all")} - ${n}`;break;case"tags":n=`${e.getText("component_tags")} - ${n}`;break;case"timeline":n=`${e.getText("component_timeline")} - ${n}`;break}document.title=n}catch(e){r.warning("Title could not be set")}},onBeforeRouteMatched:function e(t){const o=t.getParameter("name");this.getModel("settings").setProperty("/route",o)}});return p});
//# sourceMappingURL=Component.js.map