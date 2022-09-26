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

function SignUpContainer() {
  var [isSigningUp, setIsSigningUp] = useState(false);

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
  var navigate = useNavigate();

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
      await axios.post(
        "https://localhost:7173/api/user/sign-up",
        JSON.stringify(userObject),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/login");
    } catch {
      setIsSigningUp(false);
      toast({
        title: "Error while creating account",
        description:
          "There was an error creating the account. Please try again later.",
        status: "error",
        duration: 1500,
        isClosable: true,
        containerStyle: {
          width: "45rem",
          fontSize: "1.3rem",
        },
        size: "xl",
      });
    }
  }

  return (
    <SignUpComponent
      formData={formData}
      handleFormValueChange={handleFormValueChange}
      onButtonClick={onButtonClick}
      isSigningUp={isSigningUp}
    />
  );
}

export default SignUpContainer;
