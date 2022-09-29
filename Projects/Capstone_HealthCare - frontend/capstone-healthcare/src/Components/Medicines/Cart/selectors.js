import { createSelector } from "reselect";

function getCartData(state) {
  return {
    cartMedicines: state.cart.medicines,
    loading: state.cart.loading,
    loaded: state.cart.loaded,
    id: state.cart.id,
  };
}

export const getCachedCartData = createSelector(
  getCartData,
  function getCart(cart) {
    return cart;
  }
);
