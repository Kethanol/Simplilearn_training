import { Box, CircularProgress } from "@chakra-ui/react";

function Backdrop() {
  return (
    <Box
      height={"100vh"}
      width={"100%"}
      position={"absolute"}
      top={0}
      left={0}
      right={0}
      bottom={0}
      background={"rgba(0, 0, 0, 0.5)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress isIndeterminate size={"130"}></CircularProgress>
    </Box>
  );
}

export default Backdrop;
