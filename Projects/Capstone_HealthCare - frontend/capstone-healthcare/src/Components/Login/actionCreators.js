import * as actionTypes from "./actionTypes";
import consts from "../../Common/consts";
import axios from "axios";

export function login(userObject, applyToast, toastApplier, callback) {
  return async function (dispatch) {
    dispatch({ type: actionTypes.USER_LOGIN_STARTED });

    try {
      let url = `${consts.REACT_APP_CAPSTONE_API_URL}${consts.LOGIN_ROUTE}`;

      let { data } = await axios.post(url, JSON.stringify(userObject), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!data.hasSuccess) {
        dispatch({ type: actionTypes.USER_LOGIN_FAILED });
        applyToast(
          toastApplier,
          "Error while logging in",
          data.errorReason,
          "error"
        );
      } else {
        dispatch({
          type: actionTypes.USER_LOGIN_SUCCEEDED,
          payload: { token: data.token, isAdmin: data.isAdmin },
        });
        applyToast(toastApplier, "Success", "Login successful", "success");
        callback();
      }
    } catch {
      dispatch({ type: actionTypes.USER_LOGIN_FAILED });
      applyToast(
        toastApplier,
        "Error while logging in",
        "There was an error while logging in. Please try again later.",
        "error"
      );
    }
  };
}
