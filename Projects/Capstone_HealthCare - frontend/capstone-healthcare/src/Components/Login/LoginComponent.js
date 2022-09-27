import { FormControl } from "@chakra-ui/react";
import FormWrapper from "../../Common/Shared/FormWrapper";
import FormButton from "../../Common/Shared/FormButton";
import CustomFormControl from "../../Common/Shared/FormControl";

function LoginComponent({
  formData: { usernameOrEmail, password },
  handleFormValueChange,
  onButtonClick,
  isSigningUp,
}) {
  return (
    <FormWrapper formHeightPercent={35} isDataLoading={isSigningUp}>
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

      <FormControl
        marginRight={"1rem"}
        width={"70%"}
        display={"flex"}
        justifyContent={"center"}
      >
        <FormButton
          onClick={onButtonClick}
          disabled={!usernameOrEmail.value || !password.value}
        >
          SIGN IN
        </FormButton>
      </FormControl>
    </FormWrapper>
  );
}

export default LoginComponent;
