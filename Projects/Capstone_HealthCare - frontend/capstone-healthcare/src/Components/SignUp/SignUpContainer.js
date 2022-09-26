import { useEffect, useState } from "react";
import SignUpComponent from "./SignUpComponent";
import axios from "axios";

function SignUpContainer(props) {
  var [user, setUser] = useState(null);
  var [isSigningUp, setIsSigningUp] = useState(false);
  var [hasSignedUp, setHasSignedUp] = useState(false);
  var [signUpError, setSignUpError] = useState(false);

  var [dataError, setDataError] = useState({
    username: false,
    firstName: false,
    password: false,
    passwordRepeat: false,
    email: false,
  });

  useEffect(() => {
    setIsSigningUp(true);

    axios
      .post("https://localhost:7173/api/user/sign-up", {})
      .then(function afterSignIn() {
        setIsSigningUp(false);
        setHasSignedUp(true);
      })
      .catch(() => {
        setIsSigningUp(false);
        setSignUpError(true);
      });
  }, []);

  return <SignUpComponent {...props} />;
}

export default SignUpContainer;
