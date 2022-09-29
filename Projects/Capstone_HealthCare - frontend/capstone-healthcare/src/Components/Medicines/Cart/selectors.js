import { createSelector } from "reselect";

function getCartData(state) {
  return {
    cartMedicines: state.user.cart.cartMedicines,
    loading: state.user.cart.loading,
    loaded: state.user.cart.loaded,
    id: state.user.cart.id,
  };
}

export const getCachedCartData = createSelector(
  getCartData,
  function getCart(cart) {
    return cart;
  }
);
