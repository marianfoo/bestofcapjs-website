sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e,i){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;function s(e,s,l){return l?(0,i.html)`<div class="ui5-uc-root" role="region" aria-roledescription="${(0,i.ifDefined)(this._roleDescription)}" @drop="${this._ondrop}" @ui5-_uci-delete="${(0,i.ifDefined)(this._onItemDelete)}"><div class="${(0,i.classMap)(this.classes.content)}"><${(0,i.scopeTag)("ui5-list",s,l)} accessible-name="${(0,i.ifDefined)(this.accessibleName)}" mode="${(0,i.ifDefined)(this.mode)}" @ui5-selection-change="${(0,i.ifDefined)(this._onSelectionChange)}"><slot slot="header" name="header"></slot><slot></slot></${(0,i.scopeTag)("ui5-list",s,l)}>${this._showNoData?t.call(this,e,s,l):undefined}${this._showDndOverlay?a.call(this,e,s,l):undefined}</div></div>`:(0,i.html)`<div class="ui5-uc-root" role="region" aria-roledescription="${(0,i.ifDefined)(this._roleDescription)}" @drop="${this._ondrop}" @ui5-_uci-delete="${(0,i.ifDefined)(this._onItemDelete)}"><div class="${(0,i.classMap)(this.classes.content)}"><ui5-list accessible-name="${(0,i.ifDefined)(this.accessibleName)}" mode="${(0,i.ifDefined)(this.mode)}" @ui5-selection-change="${(0,i.ifDefined)(this._onSelectionChange)}"><slot slot="header" name="header"></slot><slot></slot></ui5-list>${this._showNoData?t.call(this,e,s,l):undefined}${this._showDndOverlay?a.call(this,e,s,l):undefined}</div></div>`}function t(e,s,t){return t?(0,i.html)`<div class="${(0,i.classMap)(this.classes.noFiles)}"><${(0,i.scopeTag)("ui5-illustrated-message",s,t)} name="Tent"><${(0,i.scopeTag)("ui5-title",s,t)} slot="title" class="title" level="H2">${(0,i.ifDefined)(this._noDataText)}</${(0,i.scopeTag)("ui5-title",s,t)}><span slot="subtitle" class="subtitle">${(0,i.ifDefined)(this._noDataDescription)}</span></${(0,i.scopeTag)("ui5-illustrated-message",s,t)}></div>`:(0,i.html)`<div class="${(0,i.classMap)(this.classes.noFiles)}"><ui5-illustrated-message name="Tent"><ui5-title slot="title" class="title" level="H2">${(0,i.ifDefined)(this._noDataText)}</ui5-title><span slot="subtitle" class="subtitle">${(0,i.ifDefined)(this._noDataDescription)}</span></ui5-illustrated-message></div>`}function a(e,s,t){return t?(0,i.html)`<div class="${(0,i.classMap)(this.classes.dndOverlay)}" @dragenter="${this._ondragenter}" @dragleave="${this._ondragleave}" @dragover="${this._ondragover}"><${(0,i.scopeTag)("ui5-icon",s,t)} name="upload-to-cloud"></${(0,i.scopeTag)("ui5-icon",s,t)}><span class="dnd-overlay-text">${(0,i.ifDefined)(this._dndOverlayText)}</span></div>`:(0,i.html)`<div class="${(0,i.classMap)(this.classes.dndOverlay)}" @dragenter="${this._ondragenter}" @dragleave="${this._ondragleave}" @dragover="${this._ondragover}"><ui5-icon name="upload-to-cloud"></ui5-icon><span class="dnd-overlay-text">${(0,i.ifDefined)(this._dndOverlayText)}</span></div>`}var l=s;e.default=l});
//# sourceMappingURL=UploadCollectionTemplate.lit.js.map