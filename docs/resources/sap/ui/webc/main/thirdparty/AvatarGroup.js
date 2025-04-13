sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/delegate/ResizeHandler","sap/ui/webc/common/thirdparty/base/delegate/ItemNavigation","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/base/decorators/customElement","sap/ui/webc/common/thirdparty/base/decorators/property","sap/ui/webc/common/thirdparty/base/decorators/slot","sap/ui/webc/common/thirdparty/base/decorators/event","sap/ui/webc/common/thirdparty/base/Keys","./Button","./types/AvatarSize","./types/AvatarGroupType","./types/AvatarColorScheme","./generated/i18n/i18n-defaults","./generated/themes/AvatarGroup.css","./generated/templates/AvatarGroupTemplate.lit"],function(t,e,i,r,o,s,n,a,u,f,d,l,h,p,c,_,v,m){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;e=g(e);i=g(i);r=g(r);o=g(o);n=g(n);a=g(a);u=g(u);f=g(f);l=g(l);h=g(h);p=g(p);c=g(c);v=g(v);m=g(m);function g(t){return t&&t.__esModule?t:{default:t}}var A=void 0&&(void 0).__decorate||function(t,e,i,r){var o=arguments.length,s=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)if(n=t[a])s=(o<3?n(s):o>3?n(e,i,s):n(e,i))||s;return o>3&&s&&Object.defineProperty(e,i,s),s};var w;const I="ui5-avatar-group-overflow-btn";const b=`.${I}`;const B={[h.default.XS]:{[p.default.Individual]:"0.0625rem",[p.default.Group]:"-0.75rem"},[h.default.S]:{[p.default.Individual]:"0.125rem",[p.default.Group]:"-1.25rem"},[h.default.M]:{[p.default.Individual]:"0.125rem",[p.default.Group]:"-1.625rem"},[h.default.L]:{[p.default.Individual]:"0.125rem",[p.default.Group]:" -2rem"},[h.default.XL]:{[p.default.Individual]:"0.25rem",[p.default.Group]:"-2.75rem"}};let y=w=class t extends e.default{constructor(){super();this._itemNavigation=new o.default(this,{getItemsCallback:()=>this._isGroup?[]:this.items.slice(0,this._hiddenStartIndex)});this._colorIndex=0;this._hiddenItems=0;this._onResizeHandler=this._onResize.bind(this)}static async onDefine(){w.i18nBundle=await(0,s.getI18nBundle)("@ui5/webcomponents")}get hiddenItems(){return this.items.slice(this._hiddenStartIndex)}get colorScheme(){return this.items.map(t=>t._effectiveBackgroundColor)}get _customOverflowButton(){return this.overflowButton.length?this.overflowButton[0]:undefined}get _ariaLabelText(){const t=this.hiddenItems.length;const e=this._isGroup?_.AVATAR_GROUP_ARIA_LABEL_GROUP:_.AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL;let i=w.i18nBundle.getText(e);i+=` ${w.i18nBundle.getText(_.AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,this._itemsCount-t,t)}`;if(this._isGroup){i+=` ${w.i18nBundle.getText(_.AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL)}`}else{i+=` ${w.i18nBundle.getText(_.AVATAR_GROUP_MOVE)}`}return i}get _overflowButtonAriaLabelText(){return this._isGroup?undefined:w.i18nBundle.getText(_.AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL)}get _containerAriaHasPopup(){return this._isGroup?this._getAriaHasPopup():undefined}get _overflowButtonAccAttributes(){return{hasPopup:this._isGroup?undefined:this._getAriaHasPopup()}}get _role(){return this._isGroup?"button":"group"}get _hiddenStartIndex(){return this._itemsCount-this._hiddenItems}get _overflowBtnHidden(){return this._hiddenItems===0}get _isGroup(){return this.type===p.default.Group}get _itemsCount(){return this.items.length}get _groupTabIndex(){return this._isGroup?"0":"-1"}get _overflowButton(){return this.shadowRoot.querySelector(b)}get _overflowButtonEffectiveWidth(){const t=this._customOverflowButton?this._customOverflowButton:this._overflowButton;if(!t){return 0}if(this._isGroup){let e=this.items[1];const i=e.offsetLeft-this.offsetLeft;if(!e||e.hidden){e=t}return this.effectiveDir==="rtl"?this._getWidthToItem(e):i}return t.offsetWidth}get firstAvatarSize(){return this.items[0].size}get classes(){return{overflowButton:{"ui5-avatar-group-overflow-btn":true,"ui5-avatar-group-overflow-btn-xs":this.firstAvatarSize==="XS","ui5-avatar-group-overflow-btn-s":this.firstAvatarSize==="S","ui5-avatar-group-overflow-btn-m":this.firstAvatarSize==="M","ui5-avatar-group-overflow-btn-l":this.firstAvatarSize==="L","ui5-avatar-group-overflow-btn-xl":this.firstAvatarSize==="XL"}}}onAfterRendering(){this._overflowItems()}onBeforeRendering(){if(this._customOverflowButton){this._customOverflowButton.nonInteractive=this._isGroup}this._prepareAvatars()}onEnterDOM(){r.default.register(this,this._onResizeHandler)}onExitDOM(){r.default.deregister(this,this._onResizeHandler)}_onResize(){this._overflowItems()}_onkeydown(t){if(this._isGroup){if((0,d.isEnter)(t)){this._fireGroupEvent(t.target)}else if((0,d.isSpace)(t)){t.preventDefault()}}}_onkeyup(t){if(!t.shiftKey&&(0,d.isSpace)(t)&&this._isGroup){this._fireGroupEvent(t.target);t.preventDefault()}}_fireGroupEvent(t){const e=t.classList.contains(I)||t===this._customOverflowButton;this.fireEvent("click",{targetRef:t,overflowButtonClicked:e})}_onClick(t){const e=t.target;const i=e.hasAttribute("ui5-button");t.stopPropagation();if(this._isGroup||i){this._fireGroupEvent(e)}}_onUI5Click(t){const e=t.target;const i=e.hasAttribute("ui5-avatar");t.stopPropagation();if(i){this._fireGroupEvent(e)}}_prepareAvatars(){this._colorIndex=0;this.items.forEach((t,e)=>{const i=this._getNextBackgroundColor();t.interactive=!this._isGroup;if(!t.getAttribute("_color-scheme")){t.setAttribute("_color-scheme",c.default[`Accent${i}`])}if(e!==this._itemsCount-1||this._customOverflowButton){t.style.marginInlineEnd=B[t._effectiveSize][this.type]}})}_onfocusin(t){this._itemNavigation.setCurrentItem(t.target)}_getWidthToItem(t){const e=this.effectiveDir==="rtl";const i=t.offsetLeft-this.offsetLeft;if(e){const e=t.offsetParent;if(!e){return 0}return e.offsetWidth-t.offsetLeft-t.offsetWidth}return i}_overflowItems(){if(this.items.length<2){return}let t=0;for(let e=0;e<this._itemsCount;e++){const i=this.items[e];i.hidden=false;let r=this._getWidthToItem(i)+i.offsetWidth;if(e!==this._itemsCount-1||this._customOverflowButton){r+=this._overflowButtonEffectiveWidth}if(r>this.offsetWidth){t=this._itemsCount-e;break}}this._setHiddenItems(t)}_getNextBackgroundColor(){if(++this._colorIndex>10){this._colorIndex=1}return this._colorIndex}_setHiddenItems(t){const e=this._hiddenItems!==t;this._hiddenItems=t;this.items.forEach((t,e)=>{t.hidden=e>=this._hiddenStartIndex});this._overflowButtonText=`+${t>99?99:t}`;if(e){this.fireEvent("overflow")}}_getAriaHasPopup(){if(this.ariaHaspopup===""){return}return this.ariaHaspopup}};A([(0,a.default)({type:p.default,defaultValue:p.default.Group})],y.prototype,"type",void 0);A([(0,a.default)()],y.prototype,"ariaHaspopup",void 0);A([(0,a.default)({noAttribute:true})],y.prototype,"_overflowButtonText",void 0);A([(0,u.default)({type:HTMLElement,default:true})],y.prototype,"items",void 0);A([(0,u.default)()],y.prototype,"overflowButton",void 0);y=w=A([(0,n.default)({tag:"ui5-avatar-group",renderer:i.default,template:m.default,styles:v.default,dependencies:[l.default]}),(0,f.default)("click",{detail:{targetRef:{type:HTMLElement},overflowButtonClicked:{type:Boolean}}}),(0,f.default)("overflow")],y);y.define();var G=y;t.default=G});
//# sourceMappingURL=AvatarGroup.js.map