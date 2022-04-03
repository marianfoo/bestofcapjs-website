import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
export default class QueryControl {
  private view: sap.ui.core.mvc.View;
  // create constructor
  constructor(view) {
    this.view = view;
  }

  public liveSearch(event): void {
    const model = this.view.getModel("settings");
    let value = event.getParameter("value").trim();
    let tokenArray = model.getProperty("/tokens");

    this._applySearchFilter(value, tokenArray);
  }

  public _applySearchFilter(value, valueTypes): void {
    if (!value) {
      value = "";
    }
    // make sure values are set in model, needed for formatter
    this.view.getModel("settings").setProperty("/search", value);
    this.view.getModel("settings").setProperty("/tokens", valueTypes);
    const list = this.view.byId("packagesView").byId("_IDGenList1");
    const listBinding = list.getBinding("items");
    const nameFilter = new Filter({
      path: "name",
      operator: FilterOperator.Contains,
      value1: value,
    });
    const descFilter = new Filter({
      path: "description",
      operator: FilterOperator.Contains,
      value1: value,
    });
    let typeFilters = [];
    for (let i = 0; i < valueTypes.length; i++) {
      let typeFilter = new Filter({
        path: "type",
        operator: FilterOperator.Contains,
        value1: valueTypes[i],
      });
      typeFilters.push(typeFilter);
    }
    const typeFilter = new Filter({
      filters: typeFilters,
      and: false,
    });
    const searchFilter = new Filter({
      filters: [nameFilter, descFilter],
      and: false,
    });
    if (typeFilters.length > 0) {
      listBinding.filter(
        new Filter({
          filters: [searchFilter, typeFilter],
          and: true,
        })
      );
    } else {
      listBinding.filter(searchFilter);
    }
  }

  public onUpdateToken(event): void {
    const model = this.view.getModel("settings");
    let value = model.getProperty("/search");
    value = value.trim();
    let tokenArray = model.getProperty("/tokens");

    let addOrRemove = event.getParameter("type");
    if (addOrRemove === "added") {
      tokenArray.push(event.getParameter("addedTokens")[0].getProperty("key"));
    } else if (addOrRemove === "removed") {
      let removedToken = event.getParameter("removedTokens")[0].getProperty("key");
      tokenArray = tokenArray.filter((token) => token !== removedToken);
    }
    this._applySearchFilter(value, tokenArray);
  }
}
