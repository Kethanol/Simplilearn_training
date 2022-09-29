import { Flex } from "@chakra-ui/react";
import CartContainer from "./Cart/CartContainer";
import MedicinesContainer from "./Medicines/MedicinesContainer";

function ShopComponent({
  isAdmin,
  cartMedicines,
  setCartMedicines,
  addMedicineToCart,
}) {
  return (
    <Flex
      justify={"space-evenly"}
      align={"center"}
      direction={"column"}
      height={"100%"}
    >
      <MedicinesContainer addMedicineToCart={addMedicineToCart} />
      {!isAdmin && (
        <CartContainer
          cartMedicines={cartMedicines}
          setCartMedicines={setCartMedicines}
        />
      )}
    </Flex>
  );
}

export default ShopComponent;
