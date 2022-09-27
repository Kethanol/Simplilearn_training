import { FormControl } from "@chakra-ui/react";
import FormWrapper from "../../Common/Shared/FormWrapper";
import FormButton from "../../Common/Shared/FormButton";
import CustomFormControl from "../../Common/Shared/FormControl";

function SignUpComponent({
  formData: { username, firstName, lastName, password, passwordRepeat, email },
  handleFormValueChange,
  onButtonClick,
  isSigningUp,
}) {
  return (
    <>
      <FormWrapper formHeightPercent={85} isDataLoading={isSigningUp}>
        <CustomFormControl
          isInvalid={username.hasError}
          label={"Username"}
          inputType={"text"}
          inputValue={username.value}
          inputError={username.hasError}
          inputChangeFn={handleFormValueChange("username")}
          formHelperText={
            "Username should be at least 6 characters and at most 20 characters"
          }
          formHelperError={"Invalid username!"}
        ></CustomFormControl>

        <CustomFormControl
          isInvalid={firstName.hasError}
          label={"First name"}
          inputType={"text"}
          inputValue={firstName.value}
          inputError={firstName.hasError}
          inputChangeFn={handleFormValueChange("firstName")}
        ></CustomFormControl>

        <CustomFormControl
          isInvalid={lastName.hasError}
          label={"Last name"}
          inputType={"text"}
          inputValue={lastName.value}
          inputError={lastName.hasError}
          inputChangeFn={handleFormValueChange("lastName")}
        ></CustomFormControl>

        <CustomFormControl
          isInvalid={password.hasError}
          label={"Password"}
          inputType={"password"}
          inputValue={password.value}
          inputError={password.hasError}
          inputChangeFn={handleFormValueChange("password")}
          formHelperText={
            "The password must be consisted of minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
          }
          formHelperError={"Invalid password!"}
        ></CustomFormControl>

        <CustomFormControl
          isInvalid={passwordRepeat.hasError}
          label={"Repeat password"}
          inputType={"password"}
          inputValue={passwordRepeat.value}
          inputError={passwordRepeat.hasError}
          inputChangeFn={handleFormValueChange("passwordRepeat")}
          formHelperText={"Passwords must match"}
          formHelperError={"Passwords do not match!"}
        ></CustomFormControl>

        <CustomFormControl
          isInvalid={email.hasError}
          label={"Email"}
          inputType={"email"}
          inputValue={email.value}
          inputError={email.hasError}
          inputChangeFn={handleFormValueChange("email")}
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
