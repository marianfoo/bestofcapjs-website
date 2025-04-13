/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.webc.main.GroupHeaderListItem.
sap.ui.define([
	"sap/ui/core/webc/WebComponent",
	"./library",
	"./thirdparty/GroupHeaderListItem"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>GroupHeaderListItem</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.core.webc.WebComponent
	 * @class
	 *
	 * The <code>sap.ui.webc.main.GroupHeaderListItem</code> is a special list item, used only to separate other list items into logical groups.
	 *
	 * @author SAP SE
	 * @version 1.120.28
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @deprecated As of version 1.120, this Web Components consumption model has been discarded. Until an alternative Web Components consumption model is available in the future, use sap.m and sap.f controls with similar functionality.
	 * @alias sap.ui.webc.main.GroupHeaderListItem
	 * @implements sap.ui.webc.main.IListItem
	 */
	var GroupHeaderListItem = WebComponent.extend("sap.ui.webc.main.GroupHeaderListItem", {
		metadata: {
			library: "sap.ui.webc.main",
			tag: "ui5-li-groupheader-ui5",
			interfaces: [
				"sap.ui.webc.main.IListItem"
			],
			properties: {

				/**
				 * Defines the text alternative of the component. Note: If not provided a default text alternative will be set, if present.
				 */
				accessibleName: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines the selected state of the <code>ListItem</code>.
				 */
				selected: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Defines the content of the control
				 */
				text: {
					type: "string",
					defaultValue: "",
					mapping: "textContent"
				}
			}
		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return GroupHeaderListItem;
});
