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
