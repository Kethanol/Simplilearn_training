import MedicinesComponent from "./MedicinesComponent";

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
