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
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";
import Backdrop from "../../Common/Shared/Backdrop";
import {
  DeleteIcon,
  TriangleUpIcon,
  SearchIcon,
  AddIcon,
  CheckIcon,
} from "@chakra-ui/icons";

function AdminComponent({
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
                <TableCaption
                  position={"relative"}
                  fontSize={"2rem"}
                  textTransform={"uppercase"}
                >
                  Medicine list
                  <Box
                    position={"absolute"}
                    right={"4rem"}
                    bottom={0}
                    transform={"translateY(-10%)"}
                  >
                    <Tooltip label={"Add medicine"}>
                      <IconButton
                        isRound
                        background={"rgba(178,245,234, 0.8)"}
                        width={"4rem"}
                        height={"4rem"}
                        size={"lg"}
                        onClick={addNewRow}
                        icon={<AddIcon boxSize={"8"}></AddIcon>}
                      />
                    </Tooltip>
                    <Tooltip label={"Save changes"}>
                      <IconButton
                        marginLeft={"2rem"}
                        isRound
                        background={"rgba(178,245,234, 0.8)"}
                        width={"4rem"}
                        height={"4rem"}
                        size={"lg"}
                        onClick={addMedicines}
                        disabled={isSaveButtonDisabled()}
                        {...renderSaveChangesProps()}
                        icon={<CheckIcon boxSize={"8"}></CheckIcon>}
                      />
                    </Tooltip>
                  </Box>
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
                      Price ($)
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {medicineData.map((medicine, index) => {
                    return (
                      <Tr
                        key={index}
                        onChange={(e) => handleRowChange(e, index)}
                      >
                        <Td fontSize={"2rem"}>
                          <FormControl isInvalid={medicine.name === ""}>
                            <FormErrorMessage
                              fontSize={"1.3rem"}
                              marginBottom={".5rem"}
                            >
                              Can not be empty
                            </FormErrorMessage>
                            <Input
                              value={medicine.name}
                              name={"name"}
                              border={"none"}
                              outline={"none"}
                              fontSize={"2rem"}
                              padding={"1.5rem"}
                              background={"inherit"}
                              type={"text"}
                            ></Input>
                          </FormControl>
                        </Td>
                        <Td fontSize={"2rem"}>
                          <FormControl isInvalid={medicine.description === ""}>
                            <FormErrorMessage
                              fontSize={"1.3rem"}
                              marginBottom={".5rem"}
                            >
                              Can not be empty
                            </FormErrorMessage>
                            <Input
                              value={medicine.description}
                              name={"description"}
                              border={"none"}
                              outline={"none"}
                              fontSize={"2rem"}
                              padding={"1.5rem"}
                              background={"inherit"}
                              type={"text"}
                            ></Input>
                          </FormControl>
                        </Td>
                        <Td fontSize={"2rem"}>
                          <FormControl
                            isInvalid={medicine.schemaOfTreatment === ""}
                          >
                            <FormErrorMessage
                              fontSize={"1.3rem"}
                              marginBottom={".5rem"}
                            >
                              Can not be empty
                            </FormErrorMessage>
                            <Input
                              value={medicine.schemaOfTreatment}
                              name={"schemaOfTreatment"}
                              border={"none"}
                              outline={"none"}
                              fontSize={"2rem"}
                              padding={"1.5rem"}
                              background={"inherit"}
                              type={"text"}
                            ></Input>
                          </FormControl>
                        </Td>
                        <Td fontSize={"2rem"}>
                          <FormControl isInvalid={medicine.minimumAge === ""}>
                            <FormErrorMessage
                              fontSize={"1.3rem"}
                              marginBottom={".5rem"}
                            >
                              Can not be empty
                            </FormErrorMessage>
                            <Input
                              value={medicine.minimumAge}
                              name={"minimumAge"}
                              border={"none"}
                              outline={"none"}
                              fontSize={"2rem"}
                              padding={"1.5rem"}
                              background={"inherit"}
                              type={"number"}
                              textAlign={"right"}
                            ></Input>
                          </FormControl>
                        </Td>
                        <Td fontSize={"2rem"}>
                          <FormControl isInvalid={medicine.price === ""}>
                            <FormErrorMessage
                              fontSize={"1.3rem"}
                              marginBottom={".5rem"}
                            >
                              Can not be empty
                            </FormErrorMessage>
                            <Input
                              value={medicine.price}
                              name={"price"}
                              border={"none"}
                              outline={"none"}
                              fontSize={"2rem"}
                              padding={"1.5rem"}
                              background={"inherit"}
                              type={"number"}
                              textAlign={"right"}
                            ></Input>
                          </FormControl>
                        </Td>
                        <Td fontSize={0}>
                          <Tooltip label={"Update medicine"}>
                            <IconButton
                              disabled={
                                !dirtyRows[index] ||
                                medicine.id === 0 ||
                                invalidRows[index]
                              }
                              {...renderEditableBackgroundProps(index)}
                              background={"transparent"}
                              icon={
                                <TriangleUpIcon
                                  boxSize={"10"}
                                  onClick={() => updateMed(index)}
                                ></TriangleUpIcon>
                              }
                            />
                          </Tooltip>
                        </Td>

                        <Td fontSize={0}>
                          <Tooltip label={"Delete medicine"}>
                            <IconButton
                              background={"transparent"}
                              icon={
                                <DeleteIcon
                                  boxSize={"10"}
                                  onClick={() => deleteMed(index)}
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
