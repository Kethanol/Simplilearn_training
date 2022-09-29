import initialState from "../../../initialState";
import * as actionTypes from "./actionTypes";

const cartReducer = function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.LOAD_CART_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }

    case actionTypes.LOAD_CART_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        loaded: true,
        id: action.payload.id,
        medicines: action.payload.cartMedicines,
      };
    }

    case actionTypes.LOAD_CART_FAILED: {
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

export default cartReducer;
