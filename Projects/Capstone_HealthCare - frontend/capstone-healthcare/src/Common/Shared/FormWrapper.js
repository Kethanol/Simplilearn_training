import { Box, Image, Text } from "@chakra-ui/react";
import logo from "../../healthcare.png";

function FormWrapper({ children, formHeightPercent }) {
  return (
    <Box height={"100vh"} width={"100%"} display={"flex"}>
      <Box width={"45%"} display={"flex"}>
        <Box width={"25%"}></Box>
        <Box
          width={"70%"}
          height={`${formHeightPercent}%`}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          borderRadius={"2rem"}
          boxShadow={
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
          }
          gap={"2rem"}
        >
          {children}
        </Box>
      </Box>
      <Box width={"5%"}></Box>
      <Box width={"55%"} display={"flex"} flexDirection={"column"}>
        <Box
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          height={"80%"}
        >
          <Image
            src={logo}
            height={"70%"}
            marginBottom={"4rem"}
            marginTop={"15rem"}
          ></Image>
        </Box>
        <Box height={"20%"} textAlign={"center"}>
          <Text
            fontSize={"3.7rem"}
            fontWeight={"bold"}
            marginTop={"1.5rem"}
            textTransform={"capitalize"}
          >
            Healthcare capstone project
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default FormWrapper;
