import { PropertyListActionTypes } from "./Actions"

export interface Property {
  owner: string;
  address: {
    line1?: string;
    line2?: string;
    line3?: string;
    line4?: string;
    postCode?: string;
    city?: string;
    country?: string;
  };
  airbnbId: number;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  incomeGenerated: number;
}

export class PropertyListState  {
  isLoading = false;
  propertyList: Property[] = [];
  loadError = "";
};

const PropertyListReducer = (state = new PropertyListState(), action: any) => {
  switch (action.type) {
    case PropertyListActionTypes.LOADING_IN_PROGRESS:
        return Object.assign({}, state, { isLoading: true });
    case PropertyListActionTypes.DATA_LOAD_SUCCESS:
      return Object.assign({}, state, { isLoading: false, propertyList: action.propertyList });
    case PropertyListActionTypes.DATA_LOAD_ERROR:
      return Object.assign({}, state, { isLoading: false, loadError: action.loadError });
     default:
      return state
  }
}

export default PropertyListReducer;