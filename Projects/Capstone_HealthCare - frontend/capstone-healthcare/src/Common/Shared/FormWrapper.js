import { Box, Image, Text, FormControl, Checkbox } from "@chakra-ui/react";
import logo from "../../healthcare.png";
import FormButton from "./FormButton";
import Backdrop from "./Backdrop";

function FormWrapper({
  children,
  isDataLoading,
  redirectText,
  buttonText,
  onButtonClick,
  onButtonDisabled,
  onTextClick,
  hasCheckbox,
  checkboxText,
  isCheckboxChecked,
  onCheckboxChange,
}) {
  return (
    <>
      <Box height={"100vh"} width={"100%"} display={"flex"}>
        <Box flexBasis={"45%"} display={"flex"}>
          <Box width={"25%"}></Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            margin={"auto"}
            borderRadius={"2rem"}
            padding={"2rem 0 2rem 0"}
            boxShadow={
              "rgba(0, 0, 0, 0.16) 0px 1rem 3.6rem 0, rgba(0, 0, 0, 0.06) 0 0 0 .1rem;"
            }
            gap={"1.8rem"}
          >
            <>
              {children}

              <Box display={"flex"} justifyContent={"space-evenly"}>
                {hasCheckbox && (
                  <Checkbox
                    flexBasis={"40%"}
                    marginLeft={"2rem"}
                    size={"lg"}
                    isChecked={isCheckboxChecked}
                    onChange={onCheckboxChange}
                  >
                    <Box fontSize={"1.3rem"}>{checkboxText}</Box>
                  </Checkbox>
                )}
                <Text
                  as={"a"}
                  onClick={onTextClick}
                  textAlign="right"
                  marginRight={"4rem"}
                  fontSize={"1.3rem"}
                  textDecoration={"underline"}
                  color={"blue"}
                  cursor={"pointer"}
                  flexBasis={hasCheckbox ? "60%" : "100%"}
                >
                  {redirectText}
                </Text>
              </Box>

              <FormControl
                display={"flex"}
                justifyContent={"center"}
                padding={"0 2rem 0 2rem"}
              >
                <FormButton onClick={onButtonClick} disabled={onButtonDisabled}>
                  {buttonText}
                </FormButton>
              </FormControl>
            </>
          </Box>
        </Box>
        <Box width={"5%"}></Box>
        <Box flexBasis={"55%"} display={"flex"} flexDirection={"column"}>
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
      {isDataLoading && <Backdrop></Backdrop>}
    </>
  );
}

export default FormWrapper;
