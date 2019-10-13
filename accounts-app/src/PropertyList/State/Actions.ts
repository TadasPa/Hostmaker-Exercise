import PropertyListAPI from "../../API/PropertyList"

export class PropertyListActionTypes {
  static LOADING_IN_PROGRESS = Symbol("LOADING_IN_PROGRESS");
  static DATA_LOAD_ERROR = Symbol("DATA_LOAD_ERROR");
  static DATA_LOAD_SUCCESS = Symbol("DATA_LOAD_SUCCESS");
}

export class PropertyListActions {
  
  static setLoadingInProgress() {
    return {
      type: PropertyListActionTypes.LOADING_IN_PROGRESS
    };
  }

  static setPropertyList(value: any) {
    return {
      type: PropertyListActionTypes.DATA_LOAD_SUCCESS,
      propertyList: value
    };
  }

  static setLoadError(value: any) {
    return {
      type: PropertyListActionTypes.DATA_LOAD_ERROR,
      loadError: value
    };
  }

  static fetchData(): any {
    return async (dispatch: any) => {
      dispatch(PropertyListActions.setLoadingInProgress());
      const propertyList = await PropertyListAPI.retrievePropertyList();
      if (!propertyList) {
        dispatch(PropertyListActions.setLoadError("Property list loading error occured, please try again by refreshing the page."));
      }
      else {
        dispatch(PropertyListActions.setPropertyList(propertyList));
      }
    }
  }
}

export default PropertyListActions; 