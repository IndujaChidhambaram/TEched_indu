jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"abc/test/integration/NavigationJourneyPhone",
		"abc/test/integration/NotFoundJourneyPhone",
		"abc/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});