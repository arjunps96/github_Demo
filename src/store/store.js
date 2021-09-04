import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer/index";
const initialState = {
  pendingArr: [],
  activeArr: [],
  paymentArr: [],
};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware())
);

export default store;
