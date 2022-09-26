import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import FormWrapper from "../Common/FormWrapper";
import FormButton from "../Common/FormButton";

function LoginComponent(props) {
  return (
    <FormWrapper formHeightPercent={40}>
      <FormControl isRequired padding={2} width={"70%"} marginRight={"1rem"}>
        <FormLabel fontSize={"1.65rem"}>Username or Mail</FormLabel>
        <Input
          type={"text"}
          padding={"1.6rem"}
          borderRadius={"1rem"}
          fontSize={"1.6rem"}
        ></Input>
        <FormHelperText fontSize={"1.3rem"}>
          Please, enter your username or your mail
        </FormHelperText>
      </FormControl>

      <FormControl isRequired padding={2} width={"70%"} marginRight={"1rem"}>
        <FormLabel fontSize={"1.65rem"}>Password</FormLabel>
        <Input
          type={"password"}
          padding={"1.6rem"}
          borderRadius={"1rem"}
          fontSize={"1.6rem"}
        ></Input>
        <FormHelperText fontSize={"1.3rem"}>
          Please, enter your password
        </FormHelperText>
      </FormControl>

      <FormControl
        marginRight={"1rem"}
        width={"70%"}
        display={"flex"}
        justifyContent={"center"}
      >
        <FormButton>SIGN IN</FormButton>
      </FormControl>
    </FormWrapper>
  );
}

export default LoginComponent;
