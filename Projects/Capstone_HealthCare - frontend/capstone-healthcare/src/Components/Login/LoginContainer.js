import { useState } from "react";
import LoginComponent from "./LoginComponent";
import {
  handleFormValueChangeWrapper,
  handleFormValueErrorWrapper,
} from "../../Common/Functions/misc";

function LoginContainer(props) {
  var [isLoggingIn, setIsLogginIn] = useState(false);

  var [formData, setFormData] = useState({
    usernameOrEmail: { value: "", hasError: false },
    password: { value: "", hasError: false },
  });

  var { usernameOrEmail, password } = formData;

  function populateForm(fieldName, data) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: { ...prevFormData[fieldName], ...data },
    }));
  }

  function handleFormValueChange(fieldName) {
    return handleFormValueChangeWrapper(fieldName, populateForm);
  }

  function handleFormValueError(fieldName, fieldValue, validationFunc) {
    return handleFormValueErrorWrapper(
      fieldName,
      fieldValue,
      validationFunc,
      populateForm
    );
  }

  return (
    <LoginComponent
      formData={formData}
      handleFormValueChange={handleFormValueChange}
      onButtonClick={function onClick() {}}
      isLoggingIn={isLoggingIn}
    />
  );
}

export default LoginContainer;
