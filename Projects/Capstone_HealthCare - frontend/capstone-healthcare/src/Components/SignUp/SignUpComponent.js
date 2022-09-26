import {
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  Input,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import logo from "../../healthcare.png";

function SignUpComponent(props) {
  return (
    <Box height={"100vh"} width={"100%"} display={"flex"}>
      <Box width={"45%"} display={"flex"}>
        <Box width={"25%"}></Box>
        <Box
          width={"70%"}
          height={"85%"}
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
          <FormControl
            isRequired
            padding={2}
            width={"70%"}
            marginRight={"1rem"}
          >
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

          <FormControl
            isRequired
            padding={2}
            width={"70%"}
            marginRight={"1rem"}
          >
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

          <FormControl
            isRequired
            padding={2}
            width={"70%"}
            marginRight={"1rem"}
          >
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

          <FormControl
            isRequired
            padding={2}
            width={"70%"}
            marginRight={"1rem"}
          >
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
            isRequired
            padding={2}
            width={"70%"}
            marginRight={"1rem"}
          >
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

          <FormControl
            isRequired
            padding={2}
            width={"70%"}
            marginRight={"1rem"}
          >
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
            <Button
              type={"submit"}
              width={"70%"}
              padding={"2rem"}
              marginTop={"2rem"}
              fontSize={"1.6rem"}
              borderRadius={"2rem"}
              letterSpacing={"0.1rem"}
            >
              SIGN-UP
            </Button>
          </FormControl>
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
          <Image src={logo} height={"70%"} marginBottom={"4rem"}></Image>
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

export default SignUpComponent;
