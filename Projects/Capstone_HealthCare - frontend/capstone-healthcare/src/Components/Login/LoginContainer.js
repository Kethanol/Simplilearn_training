import { useState } from "react";
import LoginComponent from "./LoginComponent";
import {
  handleFormValueChangeWrapper,
  applyFailToast,
} from "../../Common/Functions/misc";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { login } from "./actionCreators";
import { getCachedUserData } from "./selectors";

function LoginContainer() {
  var navigate = useNavigate();
  var dispatch = useDispatch();
  var { loading, token } = useSelector(getCachedUserData, shallowEqual);

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

  var toast = useToast();

  function logIn() {
    var userObject = {
      usernameOrEmail: formData.usernameOrEmail.value,
      password: formData.password.value,
    };

    dispatch(login(userObject, applyFailToast, toast));
  }

  return (
    <LoginComponent
      formData={formData}
      handleFormValueChange={handleFormValueChange}
      onButtonClick={logIn}
      onTextClick={handleTextClick}
      isLoggingIn={loading}
    />
  );
}

export default LoginContainer;
