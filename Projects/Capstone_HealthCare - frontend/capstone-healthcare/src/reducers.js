import { combineReducers } from "redux";
import initialState from "./initialState";
import userReducer from "./Components/Login/reducer";

var reducer = combineReducers({
  user: userReducer,
});

export default function reducers(state = initialState, action) {
  var initial = reducer(state, action);
  return { ...initial };
}
