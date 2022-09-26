import { combineReducers } from "redux";
import initialState from "./initialState";

var reducer = combineReducers({
  user: {},
});

export default function reducers(state = initialState, action) {
  var initial = reducer(state, action);
  return { ...initial };
}
