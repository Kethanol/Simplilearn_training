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
  var { loading } = useSelector(getCachedUserData, shallowEqual);

  var [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  var [formData, setFormData] = useState({
    usernameOrEmail: { value: "", hasError: false },
    password: { value: "", hasError: false },
  });

  function handleTextClick() {
    navigate("/sign-up");
  }

  function handleCheckboxChange(e) {
    var {
      target: { checked },
    } = e;

    setIsCheckboxChecked(checked);
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
      isAdmin: isCheckboxChecked,
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
      isCheckboxChecked={isCheckboxChecked}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
}

export default LoginContainer;
