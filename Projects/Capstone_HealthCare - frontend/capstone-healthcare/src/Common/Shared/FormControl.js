import {
  FormControl,
  FormHelperText,
  FormErrorMessage,
  Input,
  FormLabel,
} from "@chakra-ui/react";

function CustomFormControl({
  isInvalid,
  label,
  inputType,
  inputValue,
  inputError,
  inputChangeFn,
  formHelperText,
  formHelperError,
}) {
  return (
    <FormControl isRequired padding={"0 2rem 0 2rem"} isInvalid={isInvalid}>
      <FormLabel fontSize={"1.65rem"}>{label}</FormLabel>
      <Input
        type={inputType}
        width={"50rem"}
        padding={"1.6rem"}
        borderRadius={"1rem"}
        fontSize={"1.6rem"}
        value={inputValue}
        onChange={inputChangeFn}
      ></Input>
      {!inputValue && (
        <FormHelperText fontSize={"1.3rem"} maxWidth={"50rem"}>
          {formHelperText}
        </FormHelperText>
      )}
      {inputError && (
        <FormErrorMessage fontSize={"1.3rem"}>
          {formHelperError}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

export default CustomFormControl;
