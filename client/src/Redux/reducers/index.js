import { combineReducers } from "redux";
import sneakers from "./sneakers";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  sneakers,
  loading: loadingBarReducer,
});
