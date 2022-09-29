import {
  CloseButton,
  Flex,
  Heading,
  Select,
  Stack,
  Text,
  useColorModeValue as mode,
  useColorModeValue,
} from "@chakra-ui/react";

function QuantitySelect(props) {
  return (
    <Select
      maxW={"25%"}
      {...props}
      aria-label={"Select quantity"}
      focusBorderColor={useColorModeValue("teal.500", "teal.200")}
      fontSize={"xl"}
      textAlign={"center"}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
}

function OrderDetails({ cartMedicines, handleQuantityChange }) {
  return (
    <Flex
      width={"50%"}
      boxShadow={"rgba(17, 17, 26, 0.1) 0 0 1.6rem;"}
      borderRadius={"2rem"}
      direction={"column"}
      align={"center"}
      border={"0.4rem solid rgba(178,245,234, 0.8)"}
      overflowY={"auto"}
    >
      <Stack
        spacing={{
          base: "8", // For accessibility
          md: "10",
        }}
        padding={"4"}
      >
        <Heading fontSize={"3xl"} fontWeight={"extrabold"}>
          {`Shopping cart (${cartMedicines.length} item${
            cartMedicines.length > 1 || cartMedicines.length === 0 ? "s" : ""
          })`}
        </Heading>
      </Stack>

      <Flex
        direction={"column"}
        margin={"2rem 1rem 2rem 1rem"}
        width={"90%"}
        justify={"flex-start"}
        height={"90%"}
      >
        {cartMedicines.map((cartMedicine) => {
          return (
            <Flex
              justify={"space-between"}
              key={cartMedicine.id}
              marginBottom={"2rem"}
            >
              <Text fontWeight={"medium"} fontSize={"2xl"} width={"25%"}>
                {cartMedicine.name}
              </Text>
              <Text
                color={mode("gray.600", "gray.400")}
                fontSize={"xl"}
                width={"25%"}
              >
                {cartMedicine.schemaOfTreatment}
              </Text>
              <QuantitySelect
                value={cartMedicine.quantity}
                onChange={(e) => handleQuantityChange(e, cartMedicine)}
              />
              <CloseButton aria-label="Delete from cart"></CloseButton>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default OrderDetails;
