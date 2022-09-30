import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  var navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <Button
      id="help"
      width={"15rem"}
      position={"absolute"}
      padding={"2rem"}
      rounded={"2xl"}
      top={"1rem"}
      right={"2rem"}
      fontSize={"xl"}
      background={"rgba(178,245,234, 1)"}
      onClick={logout}
    >
      LOG OUT
    </Button>
  );
}

export default LogoutButton;
