import { Thead, Tr, Th } from "@chakra-ui/react";

function TableHead() {
  return (
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
  );
}

export default TableHead;
