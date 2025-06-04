sap.ui.define(
  ["sap/ui/test/Opa5", "sap/ui/test/actions/Press"],
  function (Opa5, Press) {
    "use strict";

    var sViewName = "sap.ui.demo.walkthrough.view.HelloPanel";

    Opa5.createPageObjects({
      onTheAppPage: {
        actions: {
          iPressTheSayHelloWithDialogButton: function () {
            return this.waitFor({
              id: "helloDialogButton",
              viewName: sViewName,
              actions: new Press(),
              errorMessage:
                "Did not find the 'Say Hello With Dialog' button on the HelloPanel view",
            });
          },
          iPressTheOkButtonOnTheDialog: function () {
            return this.waitFor({
              controlType: "sap.m.Button",
              properties: {
                text: "Ok",
              },
              actions: new Press(),
              errorMessage: "Did not find the 'Ok' button on the dialog",
            });
          },
        },

        assertions: {
          iShouldSeeTheHelloDialog: function () {
            return this.waitFor({
              controlType: "sap.m.Dialog",
              success: function () {
                // we set the view busy, so we need to query the parent of the app
                Opa5.assert.ok(true, "The dialog is open");
              },
              errorMessage: "Did not find the dialog control",
            });
          },
          iShouldNotSeeAnyDialog: function () {
            return this.waitFor({
              controlType: "sap.m.Dialog",
              visible: true,
              searchOpenDialogs: true,
              check: function (aDialogs) {
                return aDialogs.length === 0;
              },
              success: function () {
                Opa5.assert.ok(true, "The dialog is closed");
              },
              errorMessage: "The dialog is still open",
            });
          },
        },
      },
    });
  }
);
