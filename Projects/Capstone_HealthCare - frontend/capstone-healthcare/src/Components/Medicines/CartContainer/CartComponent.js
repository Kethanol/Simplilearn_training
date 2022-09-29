import { Flex } from "@chakra-ui/react";
import OrderDetails from "../Checkout/OrderDetails";
import OrderSummary from "../Checkout/OrderSummary";

function CartComponent({ cartMedicines, total, handleQuantityChange }) {
  return (
    <Flex
      maxHeight={"30%"}
      height={"30%"}
      width={"95%"}
      justifyContent={"space-between"}
    >
      <OrderDetails
        cartMedicines={cartMedicines}
        handleQuantityChange={handleQuantityChange}
      />
      <OrderSummary total={total} />
    </Flex>
  );
}

export default CartComponent;
