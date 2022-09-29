import { combineReducers } from "redux";
import initialState from "./initialState";
import userReducer from "./Components/Login/reducer";
import medicinesReducer from "./Components/Shop/Medicines/reducer";
import cartReducer from "./Components/Shop/Cart/reducer";

var reducer = combineReducers({
  user: userReducer,
  medicines: medicinesReducer,
  cart: cartReducer,
});

export default function reducers(state = initialState, action) {
  var initial = reducer(state, action);
  return { ...initial };
}
