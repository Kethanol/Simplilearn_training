import { FormControl } from "@chakra-ui/react";
import FormWrapper from "../../Common/Shared/FormWrapper";
import FormButton from "../../Common/Shared/FormButton";
import CustomFormControl from "../../Common/Shared/FormControl";

function SignUpComponent({
  formData: { username, firstName, lastName, password, passwordRepeat, email },
  handleFormValueChange,
  onButtonClick,
}) {
  return (
    <>
      <FormWrapper formHeightPercent={85}>
        <CustomFormControl
          isInvalid={username.hasError}
          label={"Username"}
          inputType={"text"}
          inputValue={username.value}
          inputError={username.hasError}
          inputChangeFn={handleFormValueChange("username")}
          formHelperText={"Please, enter your username"}
          formHelperError={"Invalid username"}
        ></CustomFormControl>

        <CustomFormControl
          isInvalid={firstName.hasError}
          label={"First name"}
          inputType={"text"}
          inputValue={firstName.value}
          inputError={firstName.hasError}
          inputChangeFn={handleFormValueChange("firstName")}
          formHelperText={"Please, enter your first name"}
          formHelperError={"Invalid first name"}
        ></CustomFormControl>

        <CustomFormControl
          isInvalid={lastName.hasError}
          label={"Last name"}
          inputType={"text"}
          inputValue={lastName.value}
          inputError={lastName.hasError}
          inputChangeFn={handleFormValueChange("lastName")}
          formHelperText={"Please, enter your last name"}
          formHelperError={"Invalid last name"}
        ></CustomFormControl>

        <CustomFormControl
          isInvalid={password.hasError}
          label={"Password"}
          inputType={"password"}
          inputValue={password.value}
          inputError={password.hasError}
          inputChangeFn={handleFormValueChange("password")}
          formHelperText={"Please, enter your password"}
          formHelperError={"Invalid password"}
        ></CustomFormControl>

        <CustomFormControl
          isInvalid={passwordRepeat.hasError}
          label={"Repeat password"}
          inputType={"password"}
          inputValue={passwordRepeat.value}
          inputError={passwordRepeat.hasError}
          inputChangeFn={handleFormValueChange("passwordRepeat")}
          formHelperText={"Please, enter your password again"}
          formHelperError={"Passwords do not match"}
        ></CustomFormControl>

        <CustomFormControl
          isInvalid={email.hasError}
          label={"Email"}
          inputType={"email"}
          inputValue={email.value}
          inputError={email.hasError}
          inputChangeFn={handleFormValueChange("email")}
          formHelperText={"Please, enter your email"}
          formHelperError={"Invalid email"}
        ></CustomFormControl>

        <FormControl
          marginRight={"1rem"}
          width={"70%"}
          display={"flex"}
          justifyContent={"center"}
        >
          <FormButton
            onClick={onButtonClick}
            disabled={
              !username.value ||
              !firstName.value ||
              !lastName.value ||
              !password.value ||
              !passwordRepeat.value ||
              !email.value
            }
          >
            SIGN UP
          </FormButton>
        </FormControl>
      </FormWrapper>
    </>
  );
}

export default SignUpComponent;
