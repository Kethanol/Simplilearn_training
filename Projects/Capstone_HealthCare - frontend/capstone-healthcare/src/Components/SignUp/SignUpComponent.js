import FormWrapper from "../../Common/Shared/FormWrapper";
import CustomFormControl from "../../Common/Shared/FormControl";

function SignUpComponent({
  formData: { username, firstName, lastName, password, passwordRepeat, email },
  handleFormValueChange,
  onButtonClick,
  onTextClick,
  isSigningUp,
}) {
  return (
    <>
      <FormWrapper
        isDataLoading={isSigningUp}
        redirectText={"Already have an account? Click here to log in!"}
        buttonText={"SIGN-UP"}
        onButtonDisabled={
          !username.value ||
          !firstName.value ||
          !lastName.value ||
          !password.value ||
          !passwordRepeat.value ||
          !email.value
        }
        onButtonClick={onButtonClick}
        onTextClick={onTextClick}
      >
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
      </FormWrapper>
    </>
  );
}

export default SignUpComponent;
