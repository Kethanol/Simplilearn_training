import { createSelector } from "reselect";

function getMedicineData(state) {
  return {
    data: state.medicines.data,
    loading: state.medicines.loading,
    loaded: state.medicines.loaded,
  };
}

export const getCachedMedicineData = createSelector(
  getMedicineData,
  function getMedicine(medicine) {
    return medicine;
  }
);
