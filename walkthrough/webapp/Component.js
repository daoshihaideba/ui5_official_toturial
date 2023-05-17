sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/Device",
  ],
  function (UIComponent, JSONModel, ResourceModel, Device) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        menifest: "json",
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data model
        var oData = {
          recipient: {
            name: "World",
          },
        };

        var oModel = new JSONModel(oData);
        this.setModel(oModel);
        var InvoiceData = {
          Invoices: [
            {
              ProductName: "Pineapple",
              Quantity: 21,
              ExtendedPrice: 87.2,
              ShipperName: "Fun Inc.",
              ShippedDate: "2015-04-01T00:00:00",
              Status: "A",
            },
            {
              ProductName: "Milk",
              Quantity: 4,
              ExtendedPrice: 10,
              ShipperName: "ACME",
              ShippedDate: "2015-02-18T00:00:00",
              Status: "B",
            },
            {
              ProductName: "Canned Beans",
              Quantity: 3,
              ExtendedPrice: 6.85,
              ShipperName: "ACME",
              ShippedDate: "2015-03-02T00:00:00",
              Status: "B",
            },
            {
              ProductName: "Salad",
              Quantity: 2,
              ExtendedPrice: 8.8,
              ShipperName: "ACME",
              ShippedDate: "2015-04-12T00:00:00",
              Status: "C",
            },
            {
              ProductName: "Bread",
              Quantity: 1,
              ExtendedPrice: 2.71,
              ShipperName: "Fun Inc.",
              ShippedDate: "2015-01-27T00:00:00",
              Status: "A",
            },
          ],
        };
        var InvoiceModel = new JSONModel(InvoiceData);
        this.setModel(InvoiceModel, "invoice");
        // set i18n model
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
        // create the views based on the url/hash
        // set device model
        var oDeviceModel = new JSONModel(Device);
        oDeviceModel.setDefaultBindingMode("OneWay");
        this.setModel(oDeviceModel, "device");
        this.getRouter().initialize();
      },
      getContentDensityClass: function () {
        if (!this._sContentDensityClass) {
          if (!Device.support.touch) {
            this._sContentDensityClass = "sapUiSizeCompact";
          } else {
            this._sContentDensityClass = "sapUiSizeCozy";
          }
        }
        return this._sContentDensityClass;
      },
    });
  }
);
