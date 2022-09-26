import { useEffect, useState } from "react";
import SignUpComponent from "./SignUpComponent";
import axios from "axios";
import {
  validateSignUpUsername,
  validateMail,
  validatePassword,
} from "../../Common/Functions/validations";

function SignUpContainer() {
  var [user, setUser] = useState(null);
  var [isSigningUp, setIsSigningUp] = useState(false);
  var [signUpError, setSignUpError] = useState(false);

  var [formData, setFormData] = useState({
    username: { value: "", hasError: false },
    firstName: { value: "", hasError: false },
    lastName: { value: "", hasError: false },
    password: { value: "", hasError: false },
    passwordRepeat: { value: "", hasError: false },
    email: { value: "", hasError: false },
  });

  var { username, password, passwordRepeat, email } = formData;

  function populateForm(fieldName, data) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: { ...prevFormData[fieldName], ...data },
    }));
  }

  function handleFormValueChange(fieldName) {
    return function inner(event) {
      var {
        target: { value },
      } = event;

      populateForm(fieldName, {
        value,
        ...(!value && { hasError: false }),
      });
    };
  }

  function handleFormValueError(fieldName, fieldValue, validationFunc) {
    var hasError = !validationFunc(fieldValue);

    populateForm(fieldName, {
      hasError,
    });

    return !hasError;
  }

  function onButtonClick() {
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

    // API call
  }

  useEffect(() => {
    setIsSigningUp(true);

    axios
      .post("https://localhost:7173/api/user/sign-up", {})
      .then(function afterSignIn() {
        setIsSigningUp(false);
      })
      .catch(() => {
        setIsSigningUp(false);
        setSignUpError(true);
      });
  }, []);

  return (
    <SignUpComponent
      formData={formData}
      handleFormValueChange={handleFormValueChange}
      onButtonClick={onButtonClick}
    />
  );
}

export default SignUpContainer;
