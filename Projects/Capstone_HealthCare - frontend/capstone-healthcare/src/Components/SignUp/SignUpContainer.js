import { useState } from "react";
import SignUpComponent from "./SignUpComponent";
import axios from "axios";
import {
  validateSignUpUsername,
  validateMail,
  validatePassword,
} from "../../Common/Functions/validations";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  handleFormValueChangeWrapper,
  handleFormValueErrorWrapper,
  applyToast,
} from "../../Common/Functions/misc";
import consts from "../../Common/consts";

function SignUpContainer() {
  var [isSigningUp, setIsSigningUp] = useState(false);
  var navigate = useNavigate();

  var [formData, setFormData] = useState({
    username: { value: "", hasError: false },
    firstName: { value: "", hasError: false },
    lastName: { value: "", hasError: false },
    password: { value: "", hasError: false },
    passwordRepeat: { value: "", hasError: false },
    email: { value: "", hasError: false },
  });

  var { username, firstName, lastName, password, passwordRepeat, email } =
    formData;

  function populateForm(fieldName, data) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: { ...prevFormData[fieldName], ...data },
    }));
  }

  function handleTextClick() {
    navigate("/login");
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

  async function onButtonClick() {
    var isUsernameValid = handleFormValueError(
      "username",
      username.value,
      validateSignUpUsername
    );

    var isPasswordValid = handleFormValueError(
      "password",
      password.value,
      validatePassword
    );

    var isPasswordRepeatValid = handleFormValueError(
      "passwordRepeat",
      passwordRepeat.value,
      (val) => val === password.value
    );

    var isEmailValid = handleFormValueError("email", email.value, validateMail);

    if (
      !isUsernameValid ||
      !isPasswordValid ||
      !isPasswordRepeatValid ||
      !isEmailValid
    )
      return;

    await signUp();
  }

  var toast = useToast();

  async function signUp() {
    setIsSigningUp(true);

    var userObject = {
      username: username.value,
      password: password.value,
      e_mail: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
    };

    try {
      let url = `${consts.REACT_APP_CAPSTONE_API_URL}${consts.SIGN_UP_ROUTE}`;

      let { data } = await axios.post(url, JSON.stringify(userObject), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!data.hasSuccess) {
        setIsSigningUp(false);
        applyToast(
          toast,
          "Error while creating account",
          data.errorReason,
          "error"
        );
      } else {
        applyToast(toast, "Success", "Sign-up successful", "success");
        navigate("/login");
      }
    } catch {
      setIsSigningUp(false);
      applyToast(
        toast,
        "Error while creating account",
        "There was an error creating the account. Please try again later.",
        "error"
      );
    }
  }

  return (
    <SignUpComponent
      formData={formData}
      handleFormValueChange={handleFormValueChange}
      onButtonClick={onButtonClick}
      isSigningUp={isSigningUp}
      onTextClick={handleTextClick}
    />
  );
}

export default SignUpContainer;
