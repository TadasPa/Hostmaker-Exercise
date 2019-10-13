import { PropertyListActionTypes } from "./Actions"
import { ReducerAction } from "react";

const initialState = {
  isLoading: false,
  propertyList: [],
  loadError: ""
};

const LoginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PropertyListActionTypes.LOADING_IN_PROGRESS:
        return Object.assign({}, state, { isLoading: action.isLoading });
    case PropertyListActionTypes.DATA_LOAD_SUCCESS:
      return Object.assign({}, state, { propertyList: action.propertyList });
    case LoginActionTypes.AUTHENTICATION_ERROR:
      return Object.assign({}, state, { isLoading: action.isLoading, authenticationError: action.authenticationError });
     default:
      return state
  }
}

export default LoginReducer;