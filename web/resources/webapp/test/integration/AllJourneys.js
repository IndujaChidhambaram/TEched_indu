jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"abc/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"abc/test/integration/pages/App",
	"abc/test/integration/pages/Browser",
	"abc/test/integration/pages/Master",
	"abc/test/integration/pages/Detail",
	"abc/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "abc.view."
	});

	sap.ui.require([
		"abc/test/integration/MasterJourney",
		"abc/test/integration/NavigationJourney",
		"abc/test/integration/NotFoundJourney",
		"abc/test/integration/BusyJourney",
		"abc/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});