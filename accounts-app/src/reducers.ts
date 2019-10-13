import { combineReducers } from "redux";
import PropertyListReducer from "./PropertyList/State/Reducer"

export default combineReducers({
    PropertyList: PropertyListReducer
  });