import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tooltip,
  Editable,
  EditablePreview,
  EditableInput,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Backdrop from "../../Common/Shared/Backdrop";
import { DeleteIcon, TriangleUpIcon, SearchIcon } from "@chakra-ui/icons";

function AdminComponent({
  medicineData,
  dataLoading,
  deleteMed,
  updateMed,
  handleRowChange,
  dirtyRows,
  searchTerm,
  onSearchTermChange,
  searchMedicine,
}) {
  var iconButtonEditableProps = {
    _hover: { background: "transparent" },
  };

  function renderEditableBackgroundProps(medicineId) {
    if (!dirtyRows[medicineId]) return iconButtonEditableProps;
    else return {};
  }

  return (
    <Box
      height={"100vh"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width={"85%"}
        display={"flex"}
        maxHeight={"90%"}
        flexDirection={"column"}
        boxShadow={"rgba(17, 17, 26, 0.1) 0 0 1.6rem;"}
        border={"2px solid #eee"}
        borderRadius={"2rem"}
      >
        <>
          <InputGroup width={"25%"}>
            <InputRightElement
              padding={"1.7rem"}
              children={
                <IconButton
                  onClick={searchMedicine}
                  background={"transparent"}
                  icon={<SearchIcon boxSize={"6"}></SearchIcon>}
                />
              }
            />
            <Input
              placeholder={"Search for medicine..."}
              padding={"1.7rem"}
              fontSize={"1.5rem"}
              borderRadius={"2rem 0 1rem 0"}
              border={".3rem solid"}
              borderColor={"rgba(178,245,234, 0.8)"}
              borderTop={"none"}
              borderLeft={"none"}
              value={searchTerm}
              onChange={onSearchTermChange}
            ></Input>
          </InputGroup>

          <TableContainer
            padding="1rem"
            width={"100%"}
            maxHeight={"80%"}
            overflowY={"auto"}
          >
            <>
              <Table
                variant={"striped"}
                fontSize={"100rem"}
                colorScheme="teal"
                size={"lg"}
              >
                <TableCaption fontSize={"2rem"} textTransform={"uppercase"}>
                  Medicine list
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th fontSize={"1.7rem"}>Name</Th>
                    <Th fontSize={"1.7rem"}>Description</Th>
                    <Th fontSize={"1.7rem"}>Schema of Treatment</Th>
                    <Th fontSize={"1.7rem"} isNumeric>
                      Minimum Age
                    </Th>
                    <Th fontSize={"1.7rem"} isNumeric>
                      Price
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {medicineData.map((medicine) => {
                    return (
                      <Tr
                        key={medicine.id}
                        onChange={(e) => handleRowChange(e, medicine.id)}
                      >
                        <Td fontSize={"2rem"}>
                          <Editable defaultValue={medicine.name}>
                            <EditablePreview width={"full"} />
                            <EditableInput name="name" />
                          </Editable>
                        </Td>
                        <Td fontSize={"2rem"}>
                          <Editable defaultValue={medicine.description}>
                            <EditablePreview width={"full"} />
                            <EditableInput name="description" />
                          </Editable>
                        </Td>
                        <Td fontSize={"2rem"}>
                          <Editable defaultValue={medicine.schemaOfTreatment}>
                            <EditablePreview width={"full"} />
                            <EditableInput name="schemaOfTreatment" />
                          </Editable>
                        </Td>
                        <Td fontSize={"2rem"} isNumeric>
                          <Editable defaultValue={medicine.minimumAge}>
                            <EditablePreview width={"40%"} />
                            <EditableInput
                              width={"40%"}
                              type={"number"}
                              name={"minimumAge"}
                            />
                          </Editable>
                        </Td>
                        <Td fontSize={"2rem"} isNumeric>
                          <Editable defaultValue={`${medicine.price}`}>
                            <EditablePreview width={"40%"} />
                            <EditableInput
                              width={"40%"}
                              type={"number"}
                              name={"price"}
                            />
                            $
                          </Editable>
                        </Td>

                        <Td fontSize={0} padding={"0 0 0 .6rem"}>
                          <Tooltip
                            label={"Update medicine"}
                            isDisabled={!dirtyRows[medicine.id]}
                          >
                            <IconButton
                              disabled={!dirtyRows[medicine.id]}
                              {...renderEditableBackgroundProps(medicine.id)}
                              background={"transparent"}
                              icon={
                                <TriangleUpIcon
                                  boxSize={"10"}
                                  onClick={() => updateMed(medicine.id)}
                                ></TriangleUpIcon>
                              }
                            />
                          </Tooltip>
                        </Td>

                        <Td fontSize={0} padding={"0 0 0 .6rem"}>
                          <Tooltip label={"Delete medicine"}>
                            <IconButton
                              background={"transparent"}
                              icon={
                                <DeleteIcon
                                  boxSize={"10"}
                                  onClick={() => deleteMed(medicine.id)}
                                ></DeleteIcon>
                              }
                            />
                          </Tooltip>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th fontSize={"1.7rem"}>Name</Th>
                    <Th fontSize={"1.7rem"}>Description</Th>
                    <Th fontSize={"1.7rem"}>Schema of Treatment</Th>
                    <Th fontSize={"1.7rem"} isNumeric>
                      Minimum Age
                    </Th>
                    <Th fontSize={"1.7rem"} isNumeric>
                      Price
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            </>
            {dataLoading && <Backdrop></Backdrop>}
          </TableContainer>
        </>
      </Box>
    </Box>
  );
}

export default AdminComponent;
