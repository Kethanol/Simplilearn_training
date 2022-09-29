import { Flex, Table, TableContainer } from "@chakra-ui/react";
import Backdrop from "../../../Common/Shared/Backdrop";
import SearchMedicine from "./Search/SearchMedicine";
import TableBody from "./Table/TableBody";
import TableCaptionWrapper from "./Table/TableCaptionWrapper";
import TableFoot from "./Table/TableFoot";
import TableHead from "./Table/TableHead";

function MedicinesComponent({
  searchTerm,
  onSearchTermChange,
  searchMedicine,
  isAdmin,
  addNewRow,
  addMedicines,
  medicineData,
  handleRowChange,
  deleteMed,
  updateMed,
  dirtyRows,
  invalidRows,
  dataLoading,
  addMedicineToCart,
}) {
  console.log(medicineData);
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
      width={"95%"}
      maxHeight={"60%"}
      direction={"column"}
      boxShadow={"rgba(17, 17, 26, 0.1) 0 0 1.6rem;"}
      borderRadius={"2rem"}
      border={"0.4rem solid rgba(178,245,234, 0.8)"}
    >
      <>
        <SearchMedicine
          searchTerm={searchTerm}
          onSearchTermChange={onSearchTermChange}
          searchMedicine={searchMedicine}
        />

        <TableContainer padding={"1rem"} width={"100%"} overflowY={"auto"}>
          <>
            <Table
              variant={"striped"}
              fontSize={"100rem"}
              colorScheme={"teal"}
              size={"lg"}
            >
              <TableCaptionWrapper
                isAdmin={isAdmin}
                addNewRow={addNewRow}
                addMedicines={addMedicines}
                isSaveButtonDisabled={isSaveButtonDisabled}
                renderSaveChangesProps={renderSaveChangesProps}
              />
              <TableHead />
              <TableBody
                medicineData={medicineData}
                handleRowChange={handleRowChange}
                renderEditableBackgroundProps={renderEditableBackgroundProps}
                isAdmin={isAdmin}
                deleteMed={deleteMed}
                updateMed={updateMed}
                dirtyRows={dirtyRows}
                invalidRows={invalidRows}
                addMedicineToCart={addMedicineToCart}
              />
              <TableFoot />
            </Table>
          </>
          {dataLoading && <Backdrop></Backdrop>}
        </TableContainer>
      </>
    </Flex>
  );
}

export default MedicinesComponent;
