import { useState } from "react";
import LoginComponent from "./LoginComponent";
import {
  handleFormValueChangeWrapper,
  applyFailToast,
} from "../../Common/Functions/misc";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import consts from "../../Common/consts";
import axios from "axios";

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

  var toast = useToast();

  async function logIn() {
    setIsLogginIn(true);

    var userObject = {
      usernameOrEmail: formData.usernameOrEmail.value,
      password: formData.password.value,
    };

    try {
      let url = `${consts.REACT_APP_CAPSTONE_API_URL}${consts.LOGIN_ROUTE}`;

      var { data } = await axios.post(url, JSON.stringify(userObject), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!data.hasSuccess) {
        applyFailToast(toast, "Error while logging in", data.errorReason);
      } else {
        // Store the token
      }
    } catch {
      setIsLogginIn(false);
      applyFailToast(
        toast,
        "Error while logging in",
        "There was an error while logging in. Please try again later."
      );
    }
  }

  return (
    <LoginComponent
      formData={formData}
      handleFormValueChange={handleFormValueChange}
      onButtonClick={logIn}
      onTextClick={handleTextClick}
      isLoggingIn={isLoggingIn}
    />
  );
}

export default LoginContainer;
