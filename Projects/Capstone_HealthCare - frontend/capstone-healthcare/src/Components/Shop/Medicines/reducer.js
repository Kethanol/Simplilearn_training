import initialState from "../../../initialState";
import * as actionTypes from "./actionTypes";

const medicinesReducer = function medicinesReducer(
  state = initialState.medicines,
  action
) {
  switch (action.type) {
    case actionTypes.LOAD_MEDICINES_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }

    case actionTypes.LOAD_MEDICINES_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload.data,
      };
    }

    case actionTypes.LOAD_MEDICINES_FAILED: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    default:
      return state;
  }
};

export default medicinesReducer;
