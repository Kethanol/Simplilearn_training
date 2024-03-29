import FormWrapper from "../../Common/Shared/FormWrapper";
import CustomFormControl from "../../Common/Shared/FormControl";

function LoginComponent({
  formData: { usernameOrEmail, password },
  handleFormValueChange,
  onButtonClick,
  onTextClick,
  isLoggingIn,
  isCheckboxChecked,
  handleCheckboxChange,
}) {
  return (
    <FormWrapper
      isDataLoading={isLoggingIn}
      redirectText={"Do not have an account? Click here to sign up!"}
      buttonText={"SIGN-IN"}
      onButtonDisabled={!usernameOrEmail.value || !password.value}
      onButtonClick={onButtonClick}
      onTextClick={onTextClick}
      hasCheckbox={true}
      checkboxText={"Log in as administrator"}
      isCheckboxChecked={isCheckboxChecked}
      onCheckboxChange={handleCheckboxChange}
    >
      <CustomFormControl
        isInvalid={usernameOrEmail.hasError}
        label={"Username or email"}
        inputType={"text"}
        inputValue={usernameOrEmail.value}
        inputError={usernameOrEmail.hasError}
        inputChangeFn={handleFormValueChange("usernameOrEmail")}
      ></CustomFormControl>
      <CustomFormControl
        isInvalid={password.hasError}
        label={"Password"}
        inputType={"password"}
        inputValue={password.value}
        inputError={password.hasError}
        inputChangeFn={handleFormValueChange("password")}
      ></CustomFormControl>
    </FormWrapper>
  );
}

export default LoginComponent;
