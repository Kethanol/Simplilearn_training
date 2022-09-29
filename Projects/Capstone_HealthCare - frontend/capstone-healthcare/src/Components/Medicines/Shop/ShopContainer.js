import ShopComponent from "./ShopComponent";

function ShopContainer({
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
}) {
  return (
    <ShopComponent
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
    />
  );
}

export default ShopContainer;
