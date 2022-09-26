import {
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";

function SignUpComponent(props) {
  return (
    <Box height={"100vh"} width={"100%"} display={"flex"}>
      <Box width={"50%"} display={"flex"}>
        <Box width={"30%"}></Box>
        <Box
          width={"70%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-end"}
          justifyContent={"center"}
          marginBottom={"5rem"}
        >
          <FormControl
            isRequired
            padding={2}
            width={"70%"}
            marginRight={"1rem"}
          >
            <FormLabel>Username</FormLabel>
            <Input type={"text"}></Input>
            <FormHelperText>Please, enter your username</FormHelperText>
          </FormControl>

          <FormControl
            isRequired
            padding={2}
            width={"70%"}
            marginRight={"1rem"}
          >
            <FormLabel>Firstname</FormLabel>
            <Input type={"text"}></Input>
            <FormHelperText>Please, enter your first name</FormHelperText>
          </FormControl>

          <FormControl
            isRequired
            padding={2}
            width={"70%"}
            marginRight={"1rem"}
          >
            <FormLabel>Last name</FormLabel>
            <Input type={"text"}></Input>
            <FormHelperText>Please, enter your last name</FormHelperText>
          </FormControl>

          <FormControl
            isRequired
            padding={2}
            width={"70%"}
            marginRight={"1rem"}
          >
            <FormLabel>Password</FormLabel>
            <Input type={"password"}></Input>
            <FormHelperText>Please, enter your password</FormHelperText>
          </FormControl>

          <FormControl
            isRequired
            padding={2}
            width={"70%"}
            marginRight={"1rem"}
          >
            <FormLabel>Password</FormLabel>
            <Input type={"password"}></Input>
            <FormHelperText>Please, repeat your password</FormHelperText>
          </FormControl>

          <FormControl
            isRequired
            padding={2}
            width={"70%"}
            marginRight={"1rem"}
          >
            <FormLabel>E-mail address</FormLabel>
            <Input type={"email"}></Input>
            <FormHelperText>Please, enter your email</FormHelperText>
          </FormControl>
          <FormControl
            padding={2}
            marginRight={"1rem"}
            width={"70%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Button type={"submit"} width={"80%"} marginTop={"1rem"}>
              SIGN-UP
            </Button>
          </FormControl>
        </Box>
      </Box>
      <Box width={"50%"} display={"flex"}>
        <Box width={"45%"}></Box>
        <Box width={"55%"}></Box>
      </Box>
    </Box>
  );
}

export default SignUpComponent;
