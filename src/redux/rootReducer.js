import { combineReducers } from "redux";
import { HomeReducer } from "./slices/homeSlices";

const rootReducer = combineReducers({
  home: HomeReducer,
});

export default rootReducer;
