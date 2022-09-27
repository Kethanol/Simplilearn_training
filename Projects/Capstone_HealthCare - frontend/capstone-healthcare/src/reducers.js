import { combineReducers } from "redux";
import initialState from "./initialState";
import userReducer from "./Components/Login/reducer";
import medicinesReducer from "./Components/Admin/reducer";

var reducer = combineReducers({
  user: userReducer,
  medicines: medicinesReducer,
});

export default function reducers(state = initialState, action) {
  var initial = reducer(state, action);
  return { ...initial };
}
