import { Flex } from "@chakra-ui/react";
import OrderDetails from "../Checkout/OrderDetails";
import OrderSummary from "../Checkout/OrderSummary";

function CartComponent() {
  return (
    <Flex
      maxHeight={"30%"}
      height={"30%"}
      width={"95%"}
      justifyContent={"space-between"}
    >
      <OrderDetails />
      <OrderSummary />
    </Flex>
  );
}

export default CartComponent;
