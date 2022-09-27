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
} from "@chakra-ui/react";
import Backdrop from "../../Common/Shared/Backdrop";
import { DeleteIcon, TriangleUpIcon } from "@chakra-ui/icons";

function AdminComponent({ medicineData, dataLoading, deleteMed }) {
  return (
    <Box
      height={"100vh"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      <TableContainer
        border={"2px solid #eee"}
        padding="2rem"
        borderRadius={"2rem"}
        width={"85%"}
        maxHeight={"80%"}
        marginTop={"4rem"}
        boxShadow={"rgba(17, 17, 26, 0.1) 0 0 1.6rem;"}
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
                  <Tr key={medicine.id}>
                    <Td fontSize={"2rem"}>
                      <Editable defaultValue={medicine.name}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                    <Td fontSize={"2rem"}>
                      <Editable defaultValue={medicine.description}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                    <Td fontSize={"2rem"}>
                      <Editable defaultValue={medicine.schemaOfTreatment}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                    <Td fontSize={"2rem"} isNumeric>
                      <Editable defaultValue={medicine.minimumAge}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                    <Td fontSize={"2rem"} isNumeric>
                      <Editable defaultValue={`${medicine.price}$`}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>

                    <Td fontSize={0} padding={"0 0 0 .6rem"}>
                      <Tooltip label={"Update medicine"} isDisabled={false}>
                        <IconButton
                          disabled
                          _hover={{ background: "transparent" }}
                          background={"transparent"}
                          icon={
                            <TriangleUpIcon
                              boxSize={"8"}
                              cursor={"pointer"}
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
                              boxSize={"8"}
                              cursor={"pointer"}
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
    </Box>
  );
}

export default AdminComponent;
