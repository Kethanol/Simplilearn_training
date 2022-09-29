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
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
}

function OrderDetails() {
  return (
    <Flex
      width={"50%"}
      boxShadow={"rgba(17, 17, 26, 0.1) 0 0 1.6rem;"}
      borderRadius={"2rem"}
      direction={"column"}
      align={"center"}
    >
      <Stack
        spacing={{
          base: "8", // For accessibility
          md: "10",
        }}
        padding={"4"}
      >
        <Heading fontSize={"3xl"} fontWeight={"extrabold"}>
          Shopping cart (n items)
        </Heading>
      </Stack>

      <Flex
        direction={"column"}
        margin={"2rem 1rem 2rem 1rem"}
        width={"90%"}
        justify="space-between"
        height={"90%"}
      >
        <Flex justify={"space-between"}>
          <Text fontWeight={"medium"} fontSize={"2xl"}>
            Denis
          </Text>
          <Text color={mode("gray.600", "gray.400")} fontSize={"xl"}>
            Denis
          </Text>
          <QuantitySelect />
          <CloseButton aria-label="Delete from cart"></CloseButton>
        </Flex>
        <Flex justify={"space-between"}>
          <Text fontWeight={"medium"} fontSize={"2xl"}>
            Denis
          </Text>
          <Text color={mode("gray.600", "gray.400")} fontSize={"xl"}>
            Denis
          </Text>
          <QuantitySelect />
          <CloseButton aria-label="Delete from cart"></CloseButton>
        </Flex>
        <Flex justify={"space-between"}>
          <Text fontWeight={"medium"} fontSize={"2xl"}>
            Denis
          </Text>
          <Text color={mode("gray.600", "gray.400")} fontSize={"xl"}>
            Denis
          </Text>
          <QuantitySelect />
          <CloseButton aria-label="Delete from cart"></CloseButton>
        </Flex>
        <Flex justify={"space-between"}>
          <Text fontWeight={"medium"} fontSize={"2xl"}>
            Denis
          </Text>
          <Text color={mode("gray.600", "gray.400")} fontSize={"xl"}>
            Denis
          </Text>
          <QuantitySelect />
          <CloseButton aria-label="Delete from cart"></CloseButton>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default OrderDetails;
