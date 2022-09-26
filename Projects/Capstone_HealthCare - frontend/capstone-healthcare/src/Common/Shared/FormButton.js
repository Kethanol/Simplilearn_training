import { Button } from "@chakra-ui/react";

function FormButton({ children, onClick, disabled }) {
  return (
    <Button
      type={"submit"}
      width={"70%"}
      padding={"2rem"}
      marginTop={"2rem"}
      fontSize={"1.6rem"}
      borderRadius={"2rem"}
      letterSpacing={"0.1rem"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default FormButton;
