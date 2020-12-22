sap.ui.define([
	'sap/ui/base/Object'
], function(Object) {
	"use strict";

	var oDataModel;

	var oDataModel2Helper = Object.extend("zwx.sm.charm.wp.scoping.controller.ODataServiceHelper", {
		
		updateOdataModel: function() {
			if (!oDataModel) {
				oDataModel = this.createODataModel();
			}
			return oDataModel;
		}
	});

	return oDataModel2Helper;
});
