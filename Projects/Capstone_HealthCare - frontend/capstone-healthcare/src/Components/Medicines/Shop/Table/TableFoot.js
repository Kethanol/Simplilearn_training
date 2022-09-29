import { Tfoot, Tr, Th } from "@chakra-ui/react";

function TableFoot() {
  return (
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
  );
}

export default TableFoot;
