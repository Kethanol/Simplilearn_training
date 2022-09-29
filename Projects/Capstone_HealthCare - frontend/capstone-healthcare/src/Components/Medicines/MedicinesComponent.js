import { Table, TableContainer, Flex } from "@chakra-ui/react";
import Backdrop from "../../Common/Shared/Backdrop";
import TableHead from "./Table/TableHead";
import TableFoot from "./Table/TableFoot";
import TableBody from "./Table/TableBody";
import TableCaptionWrapper from "./Table/TableCaptionWrapper";
import SearchMedicine from "./Table/SearchMedicine";
import OrderSummary from "./Checkout/OrderSummary";
import OrderDetails from "./Checkout/OrderDetails";

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
      <Flex
        width={"95%"}
        maxHeight={"60%"}
        direction={"column"}
        boxShadow={"rgba(17, 17, 26, 0.1) 0 0 1.6rem;"}
        border={"2px solid #eee"}
        borderRadius={"2rem"}
      >
        <>
          <SearchMedicine
            searchTerm={searchTerm}
            onSearchTermChange={onSearchTermChange}
            searchMedicine={searchMedicine}
          />

          <TableContainer padding="1rem" width={"100%"} overflowY={"auto"}>
            <>
              <Table
                variant={"striped"}
                fontSize={"100rem"}
                colorScheme="teal"
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
                />
                <TableFoot />
              </Table>
            </>
            {dataLoading && <Backdrop></Backdrop>}
          </TableContainer>
        </>
      </Flex>
      <Flex
        maxHeight={"30%"}
        height={"30%"}
        width={"95%"}
        justifyContent={"space-between"}
      >
        <>
          <OrderDetails />
          <OrderSummary />
        </>
      </Flex>
    </Flex>
  );
}

export default MedicinesComponent;
