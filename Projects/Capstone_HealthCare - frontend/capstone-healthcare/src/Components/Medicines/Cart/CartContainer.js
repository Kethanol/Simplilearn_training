import { useState, useEffect } from "react";
import CartComponent from "./CartComponent";

function CartContainer({ cartMedicines, setCartMedicines }) {
  var [total, setTotal] = useState(0);

  useEffect(
    function insideEffect() {
      setTotal(calculateTotal(cartMedicines));
    },
    [cartMedicines]
  );

  function handleQuantityChange(e, cartMedicine) {
    var newValue = +e.target.value,
      newCartMedicine = { ...cartMedicine, quantity: newValue };

    setCartMedicines(
      cartMedicines.map((cm) =>
        cm.id === cartMedicine.id ? newCartMedicine : cm
      )
    );
  }

  function calculateTotal(cartMedicines) {
    if (cartMedicines.length === 0) return 0;
    else
      return cartMedicines.reduce(function reducer(acc, cv) {
        return acc + cv.price * cv.quantity;
      }, 0);
  }

  return (
    <CartComponent
      cartMedicines={cartMedicines}
      total={total}
      handleQuantityChange={handleQuantityChange}
    ></CartComponent>
  );
}

export default CartContainer;
