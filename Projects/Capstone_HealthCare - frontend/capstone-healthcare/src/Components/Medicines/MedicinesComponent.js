import { Flex } from "@chakra-ui/react";
import CartContainer from "./CartContainer/CartContainer";
import ShopContainer from "./Shop/ShopContainer";

function MedicinesComponent({
  medicineData,
  dataLoading,
  deleteMed,
  updateMed,
  handleRowChange,
  dirtyRows,
  invalidRows,
  searchTerm,
  onSearchTermChange,
  searchMedicine,
  addNewRow,
  addMedicines,
  isAdmin,
  cartMedicines,
  setCartMedicines,
}) {
  var iconButtonEditableProps = {
    _hover: { background: "transparent" },
  };

  var iconButtonSaveProps = {
    _hover: { background: "rgba(178,245,234, 0.8)" },
  };

  function renderEditableBackgroundProps(index) {
    if (!dirtyRows[index]) return iconButtonEditableProps;
    else return {};
  }

  function isSaveButtonDisabled() {
    if (!medicineData.some((m) => m.id === 0)) return true;
    else if (medicineData.some((_, i) => invalidRows[i])) return true;
  }

  function renderSaveChangesProps() {
    if (!medicineData.some((m) => m.id === 0)) return iconButtonSaveProps;
    else return {};
  }

  return (
    <Flex
      justify={"space-evenly"}
      align={"center"}
      direction={"column"}
      height={"100%"}
    >
      <ShopContainer
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
        setCartMedicines={setCartMedicines}
        cartMedicines={cartMedicines}
      />
      <CartContainer
        cartMedicines={cartMedicines}
        setCartMedicines={setCartMedicines}
      />
    </Flex>
  );
}

export default MedicinesComponent;
