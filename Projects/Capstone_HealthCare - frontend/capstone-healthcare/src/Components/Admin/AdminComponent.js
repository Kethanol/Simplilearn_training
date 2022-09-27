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
} from "@chakra-ui/react";
import Backdrop from "../../Common/Shared/Backdrop";
import { DeleteIcon } from "@chakra-ui/icons";

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
                    <Td fontSize={"2rem"}>{medicine.name}</Td>
                    <Td fontSize={"2rem"}>{medicine.description}</Td>
                    <Td fontSize={"2rem"}>{medicine.schemaOfTreatment}</Td>
                    <Td fontSize={"2rem"} isNumeric>
                      {medicine.minimumAge}
                    </Td>
                    <Td fontSize={"2rem"} isNumeric>
                      {medicine.price}$
                    </Td>

                    <Td fontSize={0} padding={0}>
                      <Tooltip label={"Delete medicine"}>
                        <DeleteIcon
                          boxSize={"10"}
                          cursor={"pointer"}
                          onClick={() => deleteMed(medicine.id)}
                        ></DeleteIcon>
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
