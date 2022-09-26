import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import FormWrapper from "../Common/FormWrapper";
import FormButton from "../Common/FormButton";

function SignUpComponent(props) {
  return (
    <>
      <FormWrapper formHeightPercent={85}>
        <FormControl isRequired padding={2} width={"70%"} marginRight={"1rem"}>
          <FormLabel fontSize={"1.65rem"}>Username</FormLabel>
          <Input
            type={"text"}
            padding={"1.6rem"}
            borderRadius={"1rem"}
            fontSize={"1.6rem"}
          ></Input>
          <FormHelperText fontSize={"1.3rem"}>
            Please, enter your username
          </FormHelperText>
        </FormControl>

        <FormControl isRequired padding={2} width={"70%"} marginRight={"1rem"}>
          <FormLabel fontSize={"1.65rem"}>Firstname</FormLabel>
          <Input
            type={"text"}
            padding={"1.6rem"}
            borderRadius={"1rem"}
            fontSize={"1.6rem"}
          ></Input>
          <FormHelperText fontSize={"1.3rem"}>
            Please, enter your first name
          </FormHelperText>
        </FormControl>

        <FormControl isRequired padding={2} width={"70%"} marginRight={"1rem"}>
          <FormLabel fontSize={"1.65rem"}>Last name</FormLabel>
          <Input
            type={"text"}
            padding={"1.6rem"}
            borderRadius={"1rem"}
            fontSize={"1.6rem"}
          ></Input>
          <FormHelperText fontSize={"1.3rem"}>
            Please, enter your last name
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

        <FormControl isRequired padding={2} width={"70%"} marginRight={"1rem"}>
          <FormLabel fontSize={"1.65rem"}>Repeat password</FormLabel>
          <Input
            type={"password"}
            padding={"1.6rem"}
            borderRadius={"1rem"}
            fontSize={"1.6rem"}
          ></Input>
          <FormHelperText fontSize={"1.3rem"}>
            Please, repeat your password
          </FormHelperText>
        </FormControl>

        <FormControl isRequired padding={2} width={"70%"} marginRight={"1rem"}>
          <FormLabel fontSize={"1.65rem"}>E-mail address</FormLabel>
          <Input
            type={"email"}
            padding={"1.6rem"}
            borderRadius={"1rem"}
            fontSize={"1.6rem"}
          ></Input>
          <FormHelperText fontSize={"1.3rem"}>
            Please, enter your email
          </FormHelperText>
        </FormControl>

        <FormControl
          marginRight={"1rem"}
          width={"70%"}
          display={"flex"}
          justifyContent={"center"}
        >
          <FormButton>SIGN UP</FormButton>
        </FormControl>
      </FormWrapper>
    </>
  );
}

export default SignUpComponent;
