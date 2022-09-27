import * as actionTypes from "./actionTypes";
import consts from "../../Common/consts";
import axios from "axios";

export function loadMedicines(applyToast, toastApplier) {
  return async function (dispatch) {
    dispatch({ type: actionTypes.LOAD_MEDICINES_STARTED });

    try {
      let url = `${consts.REACT_APP_CAPSTONE_API_URL}${consts.LOAD_MEDICINES_ROUTE}`;

      let { data } = await axios.get(url);
      dispatch({
        type: actionTypes.LOAD_MEDICINES_SUCCEEDED,
        payload: { data },
      });
    } catch (err) {
      dispatch({ type: actionTypes.LOAD_MEDICINES_FAILED });
      applyToast(
        toastApplier,
        "Error while retrieving the medicines",
        `There was an error while retrieveing the medicines: ${err}`,
        "error"
      );
    }
  };
}

export function deleteMedicine(id, applyToast, toastApplier) {
  return async function (dispatch) {
    try {
      let url = `${consts.REACT_APP_CAPSTONE_API_URL}${consts.DELETE_MEDICINE_ROUTE}?medicineId=${id}`;
      await axios.delete(url);
      applyToast(
        toastApplier,
        "Success",
        `The medicine was successfully deleted`,
        "success"
      );
      dispatch(loadMedicines(applyToast, toastApplier));
    } catch (err) {
      applyToast(
        toastApplier,
        `Error while deleting the medicine with the id ${id}`,
        `There was an error while deleting the medicine: ${err}`,
        "error"
      );
    }
  };
}
