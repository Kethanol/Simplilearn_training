import * as actionTypes from "./actionTypes";
import consts from "../../../Common/consts";
import { axiosWrapper } from "../../../Common/Functions/misc";

export function loadCart(userId, toaster, token) {
  return async function (dispatch) {
    dispatch({ type: actionTypes.LOAD_CART_STARTED });
    try {
      let url = `${consts.REACT_APP_CAPSTONE_API_URL}${consts.LOAD_CART_ROUTE}?userId=${userId}`;

      let { data } = await axiosWrapper("get", url, token);

      dispatch({
        type: actionTypes.LOAD_CART_SUCCEEDED,
        payload: { id: data.id, cartMedicines: data.cartMedicines },
      });
    } catch (err) {
      dispatch({ type: actionTypes.LOAD_CART_FAILED });
      toaster(
        "Error while retrieving the cart",
        `There was an error while retrieveing the cart: ${err}`,
        "error"
      );
    }
  };
}

export function addMedicineToCart(medicineId, cartId, toaster, token) {
  return async function () {
    try {
      let url = `${consts.REACT_APP_CAPSTONE_API_URL}${consts.ADD_MEDICINE_TO_CART_ROUTE}?medicineId=${medicineId}&cartId=${cartId}`;
      await axiosWrapper("post", url, token);

      toaster(
        "Success",
        `The medicinewas successfully added to the cart`,
        "success"
      );
      //dispatch(loadMedicines(toaster, token));
    } catch (err) {
      toaster(
        `Error while adding the medicine to cart`,
        `There was an error while adding the medicine to cart: ${err}`,
        "error"
      );
    }
  };
}
