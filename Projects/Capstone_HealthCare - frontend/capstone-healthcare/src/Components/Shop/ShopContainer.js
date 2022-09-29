import ShopComponent from "./ShopComponent";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  loadMedicines,
  deleteMedicine,
  updateMedicine,
  searchMedicine,
  addMedicines,
} from "./actionCreators";
import { loadCart } from "./Cart/actionCreators";
import { getCachedMedicineData } from "./selectors";
import { getCachedUserData } from "../Login/selectors";
import { getCachedCartData } from "./Cart/selectors";
import { useCallback, useEffect, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { applyToast } from "../../Common/Functions/misc";

function ShopContainer() {
  var dispatch = useDispatch(),
    { data, loading, loaded } = useSelector(
      getCachedMedicineData,
      shallowEqual
    ),
    { isAdmin, id: userId } = useSelector(getCachedUserData, shallowEqual),
    { cartMedicines, loaded: cartMedicinesLoaded } = useSelector(
      getCachedCartData,
      shallowEqual
    ),
    tokenRef = useRef(localStorage.getItem("token")),
    token = tokenRef.current,
    [medicines, setMedicines] = useState([]),
    [internalCartMedicines, setInternalCartMedicines] = useState([]),
    [dirtyRows, setDirtyRows] = useState([]),
    [invalidRows, setInvalidRows] = useState([]),
    [searchTerm, setSearchTerm] = useState(""),
    toast = useToast(),
    toaster = useCallback(() => applyToast(toast), [toast]);

  useEffect(
    function insideEffect() {
      if (loaded) {
        setMedicines(data);
        setDirtyRows(data.map(() => false));
        setInvalidRows(data.map(() => false));
      } else dispatch(loadMedicines(toaster(), token));
    },
    [dispatch, loaded, data, toaster, token]
  );

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

  function handleRowChange(event, index) {
    var {
        target: { name, value },
      } = event,
      existingMedicine = medicines.find((_, i) => index === i),
      newDirtyRows = [...dirtyRows],
      newInvalidRows = [...invalidRows];

    existingMedicine[name] = value;
    setMedicines(medicines);

    newDirtyRows[index] = true;
    setDirtyRows(newDirtyRows);

    newInvalidRows[index] = setValidity(existingMedicine);
    setInvalidRows(newInvalidRows);
  }

  function setValidity(medicine) {
    return Object.values(medicine).some((v) => v === "");
  }

  function deleteMedicineFromList(index) {
    var newMedicines = medicines.filter((_, i) => i !== index),
      invalidRows = newMedicines.map(setValidity);
    setInvalidRows(invalidRows);

    setMedicines(newMedicines);
  }

  function deleteMed(index) {
    var medicine = medicines.find((_, i) => i === index);

    if (medicine.id === 0) {
      deleteMedicineFromList(index);
    } else {
      dispatch(
        deleteMedicine(medicine.id, toaster(), token, () => {
          deleteMedicineFromList(index);
        })
      );
    }
  }

  function onSearchTermChange(event) {
    var {
      target: { value },
    } = event;

    setSearchTerm(value);
  }

  function searchForMedicine() {
    dispatch(
      searchMedicine(searchTerm, toaster(), token, (data) => {
        setMedicines(data);
      })
    );
  }

  function updateMed(index) {
    var medicine = medicines.find((_, i) => i === index);
    dispatch(
      updateMedicine(medicine, toaster(), token, () => {
        var newDirtyRows = [...dirtyRows];
        newDirtyRows[index] = false;
        setDirtyRows(newDirtyRows);
      })
    );
  }

  function addMeds() {
    var newMeds = medicines.filter((m) => m.id === 0);

    dispatch(addMedicines(newMeds, toaster(), token));

    var dirtyInfo = medicines.map(() => false);
    setDirtyRows(dirtyInfo);
  }

  function addNewRow() {
    var newMedicine = {
        id: 0,
        name: "",
        description: "",
        schemaOfTreatment: "",
        minimumAge: "",
        price: "",
      },
      newInvalidRows = [...invalidRows];

    medicines.push(newMedicine);
    setMedicines(medicines);

    newInvalidRows[medicines.length - 1] = true;
    setInvalidRows(newInvalidRows);
  }

  function setCartMedicineList(newCartMedicines) {
    setInternalCartMedicines(newCartMedicines);
  }

  return (
    <ShopComponent
      medicineData={medicines}
      cartMedicines={internalCartMedicines}
      dataLoading={loading}
      deleteMed={deleteMed}
      updateMed={updateMed}
      handleRowChange={handleRowChange}
      dirtyRows={dirtyRows}
      invalidRows={invalidRows}
      searchTerm={searchTerm}
      onSearchTermChange={onSearchTermChange}
      searchMedicine={searchForMedicine}
      addMedicines={addMeds}
      addNewRow={addNewRow}
      isAdmin={isAdmin}
      setCartMedicines={setCartMedicineList}
    ></ShopComponent>
  );
}

export default ShopContainer;
