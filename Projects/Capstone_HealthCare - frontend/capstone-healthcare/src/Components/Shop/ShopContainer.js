import ShopComponent from "./ShopComponent";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { loadCart } from "./Cart/actionCreators";
import { getCachedUserData } from "../Login/selectors";
import { getCachedCartData } from "./Cart/selectors";
import { useCallback, useEffect, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { applyToast } from "../../Common/Functions/misc";
import { addMedicineToCart as addToCart } from "../Shop/Cart/actionCreators";

function ShopContainer() {
  var dispatch = useDispatch(),
    { isAdmin, id: userId } = useSelector(getCachedUserData, shallowEqual),
    {
      cartMedicines,
      loaded: cartMedicinesLoaded,
      id: cartId,
    } = useSelector(getCachedCartData, shallowEqual),
    tokenRef = useRef(localStorage.getItem("token")),
    token = tokenRef.current,
    [internalCartMedicines, setInternalCartMedicines] = useState([]),
    toast = useToast(),
    toaster = useCallback(() => applyToast(toast), [toast]);

  useEffect(
    function insideEffect() {
      if (!isAdmin) {
        if (cartMedicinesLoaded) setInternalCartMedicines(cartMedicines);
        else dispatch(loadCart(userId, toaster(), token));
      }
    },
    [
      cartMedicines,
      cartMedicinesLoaded,
      dispatch,
      isAdmin,
      toaster,
      token,
      userId,
    ]
  );

  function addMedicineToCart(medicine) {
    if (internalCartMedicines.length > 0) {
      var medicineExists = internalCartMedicines.some(
        (cm) => cm.name === medicine.name
      );

      if (medicineExists) return;
    }

    var newCartMedicines = [...internalCartMedicines];
    newCartMedicines.push({ ...medicine, quantity: 1 });

    setInternalCartMedicines(newCartMedicines);

    dispatch(addToCart(medicine.id, cartId, toaster, token));
  }

  function setCartMedicineList(newCartMedicines) {
    setInternalCartMedicines(newCartMedicines);
  }

  return (
    <ShopComponent
      cartMedicines={internalCartMedicines}
      isAdmin={isAdmin}
      setCartMedicines={setCartMedicineList}
      addMedicineToCart={addMedicineToCart}
    ></ShopComponent>
  );
}

export default ShopContainer;
