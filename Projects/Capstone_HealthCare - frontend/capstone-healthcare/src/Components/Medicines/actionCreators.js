import * as actionTypes from "./actionTypes";
import consts from "../../Common/consts";
import axios from "axios";
import { axiosWrapper } from "../../Common/Functions/misc";

export function loadMedicines(toaster, token) {
  return async function (dispatch) {
    dispatch({ type: actionTypes.LOAD_MEDICINES_STARTED });

    try {
      let url = `${consts.REACT_APP_CAPSTONE_API_URL}${consts.LOAD_MEDICINES_ROUTE}`;

      let { data } = await axiosWrapper("get", url, token);

      //let { data } = await axios.get(url);
      dispatch({
        type: actionTypes.LOAD_MEDICINES_SUCCEEDED,
        payload: { data },
      });
    } catch (err) {
      dispatch({ type: actionTypes.LOAD_MEDICINES_FAILED });
      toaster(
        "Error while retrieving the medicines",
        `There was an error while retrieveing the medicines: ${err}`,
        "error"
      );
    }
  };
}

export function deleteMedicine(id, toaster, token, callback) {
  return async function () {
    try {
      let url = `${consts.REACT_APP_CAPSTONE_API_URL}${consts.DELETE_MEDICINE_ROUTE}?medicineId=${id}`;
      await axiosWrapper("delete", url, token);
      toaster("Success", `The medicine was successfully deleted`, "success");
      callback();
    } catch (err) {
      toaster(
        `Error while deleting the medicine with the id ${id}`,
        `There was an error while deleting the medicine: ${err}`,
        "error"
      );
    }
  };
}

export function updateMedicine(medicine, toaster, token, callback) {
  return async function () {
    try {
      let url = `${consts.REACT_APP_CAPSTONE_API_URL}${consts.UPDATE_MEDICINE_ROUTE}`;
      await axiosWrapper("put", url, token, JSON.stringify(medicine));

      toaster("Success", `The medicine was successfully updated`, "success");
      callback();
    } catch (err) {
      toaster(
        `Error while updating the medicine with the id ${medicine.id}`,
        `There was an error while updating the medicine: ${err}`,
        "error"
      );
    }
  };
}

export function addMedicines(medicines, toaster, token) {
  return async function (dispatch) {
    try {
      let url = `${consts.REACT_APP_CAPSTONE_API_URL}${consts.CREATE_MEDICINES_ROUTE}`;
      await axiosWrapper("post", url, token, JSON.stringify(medicines));

      toaster("Success", `The medicines were successfully created`, "success");
      dispatch(loadMedicines(toaster, token));
    } catch (err) {
      toaster(
        `Error while creating medicines`,
        `There was an error while creating medicines: ${err}`,
        "error"
      );
    }
  };
}

export function searchMedicine(medicineName, toaster, callback) {
  return async function () {
    try {
      let url = `${consts.REACT_APP_CAPSTONE_API_URL}${consts.LOAD_MEDICINE_ROUTE}?medicineName=${medicineName}`;

      let { data } = await axios.get(url);
      callback(data);
    } catch (err) {
      toaster(
        "Error while searching for the medicines",
        `There was an error while searching for the medicines: ${err}`,
        "error"
      );
    }
  };
}
