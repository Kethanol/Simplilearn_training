import MedicinesComponent from "./MedicinesComponent";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { applyToast, setValidity } from "../../../Common/Functions/misc";

import {
  loadMedicines,
  deleteMedicine,
  updateMedicine,
  searchMedicine,
  addMedicines,
} from "./actionCreators";
import { getCachedMedicineData } from "./selectors";
import { getCachedUserData } from "../../Login/selectors";
import { useCallback, useEffect, useRef, useState } from "react";

function MedicinesContainer({ addMedicineToCart }) {
  var dispatch = useDispatch(),
    { data, loading, loaded } = useSelector(
      getCachedMedicineData,
      shallowEqual
    ),
    { isAdmin } = useSelector(getCachedUserData, shallowEqual),
    [searchTerm, setSearchTerm] = useState(""),
    [medicines, setMedicines] = useState([]),
    [dirtyRows, setDirtyRows] = useState([]),
    [invalidRows, setInvalidRows] = useState([]),
    toast = useToast(),
    toaster = useCallback(() => applyToast(toast), [toast]),
    tokenRef = useRef(localStorage.getItem("token"));

  const token = tokenRef.current;

  useEffect(
    function insideEffect() {
      if (token) {
        if (loaded) {
          setMedicines(data);
          setDirtyRows(data.map(() => false));
          setInvalidRows(data.map(() => false));
        } else dispatch(loadMedicines(toaster(), token));
      }
    },
    [dispatch, loaded, data, toaster, token]
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

  return (
    <MedicinesComponent
      searchTerm={searchTerm}
      onSearchTermChange={onSearchTermChange}
      searchMedicine={searchForMedicine}
      isAdmin={isAdmin}
      addNewRow={addNewRow}
      addMedicines={addMeds}
      medicineData={medicines}
      handleRowChange={handleRowChange}
      deleteMed={deleteMed}
      updateMed={updateMed}
      dirtyRows={dirtyRows}
      invalidRows={invalidRows}
      dataLoading={loading}
      addMedicineToCart={addMedicineToCart}
    />
  );
}

export default MedicinesContainer;
