import { Box, TableCaption, Tooltip, IconButton } from "@chakra-ui/react";

import { AddIcon, CheckIcon } from "@chakra-ui/icons";

function TableCaptionWrapper({
  isAdmin,
  addNewRow,
  addMedicines,
  isSaveButtonDisabled,
  renderSaveChangesProps,
}) {
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
      {isAdmin && (
        <>
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
        </>
      )}
    </Box>
  </TableCaption>;
}

export default TableCaptionWrapper;
