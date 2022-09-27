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
} from "@chakra-ui/react";

function AdminComponent() {
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
            <Tr>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"}>Denis</Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
              <Td fontSize={"2rem"} isNumeric>
                Denis
              </Td>
            </Tr>
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
      </TableContainer>
    </Box>
  );
}

export default AdminComponent;
