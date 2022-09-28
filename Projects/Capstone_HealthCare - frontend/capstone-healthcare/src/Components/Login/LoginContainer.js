import { useState } from "react";
import LoginComponent from "./LoginComponent";
import {
  handleFormValueChangeWrapper,
  applyToast,
} from "../../Common/Functions/misc";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { login } from "./actionCreators";
import { getCachedUserData } from "./selectors";

function LoginContainer() {
  var navigate = useNavigate(),
    dispatch = useDispatch(),
    { loading } = useSelector(getCachedUserData, shallowEqual),
    [isCheckboxChecked, setIsCheckboxChecked] = useState(false),
    [formData, setFormData] = useState({
      usernameOrEmail: { value: "", hasError: false },
      password: { value: "", hasError: false },
    }),
    toast = useToast(),
    toaster = applyToast(toast);

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

  function logIn() {
    var userObject = {
      usernameOrEmail: formData.usernameOrEmail.value,
      password: formData.password.value,
      isAdmin: isCheckboxChecked,
    };

    dispatch(
      login(userObject, toaster, (token) => {
        // THIS IS NOT SECURE AT ALL, AS THE TOKEN IS PRONE TO XSS ATTACKS.
        // I WILL DO IT JUST AS AN EXAMPLE

        localStorage.setItem("token", token);

        navigate("/medicines");
      })
    );
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
