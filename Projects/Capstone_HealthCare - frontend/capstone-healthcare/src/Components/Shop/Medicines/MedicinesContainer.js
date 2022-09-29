import MedicinesComponent from "./MedicinesComponent";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addMedicineToCart as addToCart } from "../Cart/actionCreators";
import { getCachedCartData } from "../Cart/selectors";
import { useToast } from "@chakra-ui/react";
import { applyToast } from "../../../Common/Functions/misc";
import { useCallback, useRef } from "react";

function MedicinesContainer({
  searchTerm,
  onSearchTermChange,
  searchMedicine,
  isAdmin,
  addNewRow,
  addMedicines,
  isSaveButtonDisabled,
  renderEditableBackgroundProps,
  medicineData,
  handleRowChange,
  renderSaveChangesProps,
  deleteMed,
  updateMed,
  dirtyRows,
  invalidRows,
  dataLoading,
  cartMedicines,
  setCartMedicines,
}) {
  var dispatch = useDispatch(),
    { id: cartId } = useSelector(getCachedCartData, shallowEqual),
    toast = useToast(),
    toaster = useCallback(() => applyToast(toast), [toast]),
    tokenRef = useRef(localStorage.getItem("token"));

  const token = tokenRef.current;

  function addMedicineToCart(medicine) {
    if (cartMedicines.length > 0) {
      var medicineExists = cartMedicines.some(
        (cm) => cm.name === medicine.name
      );

      if (medicineExists) return;
    }

    var newCartMedicines = [...cartMedicines];
    newCartMedicines.push({ ...medicine, quantity: 1 });

    setCartMedicines(newCartMedicines);

    dispatch(addToCart(medicine.id, cartId, toaster, token));
  }

  return (
    <MedicinesComponent
      searchTerm={searchTerm}
      onSearchTermChange={onSearchTermChange}
      searchMedicine={searchMedicine}
      isAdmin={isAdmin}
      addNewRow={addNewRow}
      addMedicines={addMedicines}
      isSaveButtonDisabled={isSaveButtonDisabled}
      renderEditableBackgroundProps={renderEditableBackgroundProps}
      medicineData={medicineData}
      handleRowChange={handleRowChange}
      renderSaveChangesProps={renderSaveChangesProps}
      deleteMed={deleteMed}
      updateMed={updateMed}
      dirtyRows={dirtyRows}
      invalidRows={invalidRows}
      dataLoading={dataLoading}
      addMedicineToCart={addMedicineToCart}
      cartMedicines={cartMedicines}
    />
  );
}

export default MedicinesContainer;
