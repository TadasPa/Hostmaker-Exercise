import { PropertyListActionTypes } from "./Actions"

export interface IAddress {
    line1?: string;
    line2?: string;
    line3?: string;
    line4?: string;
    postCode?: string;
    city?: string;
    country?: string;
  }

export interface IProperty {
  owner: string;
  address: IAddress;
  airbnbId: number;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  incomeGenerated: number;
}

export class PropertyListState  {
  isLoading = false;
  propertyList: IProperty[] = [];
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