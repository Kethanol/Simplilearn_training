import { useState } from "react";
import LoginComponent from "./LoginComponent";
import { handleFormValueChangeWrapper } from "../../Common/Functions/misc";
import { useNavigate } from "react-router-dom";

function LoginContainer() {
  var [isLoggingIn, setIsLogginIn] = useState(false);
  var navigate = useNavigate();

  var [formData, setFormData] = useState({
    usernameOrEmail: { value: "", hasError: false },
    password: { value: "", hasError: false },
  });

  function handleTextClick() {
    navigate("/sign-up");
  }

  function populateForm(fieldName, data) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: { ...prevFormData[fieldName], ...data },
    }));
  }

  function handleFormValueChange(fieldName) {
    return handleFormValueChangeWrapper(fieldName, populateForm);
  }

  return (
    <LoginComponent
      formData={formData}
      handleFormValueChange={handleFormValueChange}
      onButtonClick={function onClick() {}}
      onTextClick={handleTextClick}
      isLoggingIn={isLoggingIn}
    />
  );
}

export default LoginContainer;
