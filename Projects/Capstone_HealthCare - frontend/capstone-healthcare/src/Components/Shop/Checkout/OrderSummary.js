import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { FaArrowRight } from "react-icons/fa";

function OrderSummaryItem({ label, value, children }) {
  return (
    <Flex justify={"space-between"} fontSize="2xl">
      <Text fontWeight={"medium"} color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value || value === 0 ? (
        <Text fontWeight={"medium"}>{value}</Text>
      ) : (
        children
      )}
    </Flex>
  );
}

function OrderSummary({ total }) {
  return (
    <Flex
      width={"40%"}
      border={"0.4rem solid rgba(178,245,234, 0.8)"}
      boxShadow={"rgba(17, 17, 26, 0.1) 0 0 1.6rem;"}
      borderRadius={"2rem"}
      direction={"column"}
      align={"center"}
    >
      <Stack padding={"8"} width={"full"} spacing={"8"}>
        <Heading size={"lg"}>Order Summary</Heading>
        <Stack spacing={"6"}>
          <OrderSummaryItem label={"Subtotal"} value={`${total} $`} />
          <OrderSummaryItem label={"Shipping"}>
            <Link href="#" textDecor={"underline"}>
              Shipping taxes
            </Link>
          </OrderSummaryItem>
          <OrderSummaryItem label={"Coupon code"}>
            <Link href="#" textDecor={"underline"}>
              Add coupon code
            </Link>
          </OrderSummaryItem>
          <Flex justify={"space-around"}>
            <Text fontSize={"3xl"} fontWeight={"semibold"}>
              Total
            </Text>
            <Text fontSize={"3xl"} fontWeight={"extrabold"}>
              {`${total} $`}
            </Text>
          </Flex>
        </Stack>
        <Button
          background={"rgba(178,245,234, 0.8)"}
          size="lg"
          fontSize={"xl"}
          rightIcon={<FaArrowRight />}
        >
          Checkout
        </Button>
      </Stack>
    </Flex>
  );
}

export default OrderSummary;
