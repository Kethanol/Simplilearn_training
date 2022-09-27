import initialState from "../../initialState";
import * as actionTypes from "./actionTypes";

const userReducer = function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case actionTypes.USER_LOGIN_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }

    case actionTypes.USER_LOGIN_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        token: action.payload.token,
      };
    }

    case actionTypes.USER_LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
