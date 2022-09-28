import MedicinesComponent from "./MedicinesComponent";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  loadMedicines,
  deleteMedicine,
  updateMedicine,
  searchMedicine,
  addMedicines,
} from "./actionCreators";
import { getCachedMedicineData } from "./selectors";
import { getCachedUserData } from "../Login/selectors";
import { useCallback, useEffect, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { applyToast } from "../../Common/Functions/misc";

function MedicinesContainer() {
  var dispatch = useDispatch(),
    { data, loading, loaded } = useSelector(
      getCachedMedicineData,
      shallowEqual
    ),
    { token, isAdmin } = useSelector(getCachedUserData, shallowEqual),
    tokenRef = useRef(token),
    [medicines, setMedicines] = useState([]),
    [dirtyRows, setDirtyRows] = useState([]),
    [invalidRows, setInvalidRows] = useState([]),
    [searchTerm, setSearchTerm] = useState(""),
    toast = useToast(),
    toaster = useCallback(() => applyToast(toast), [toast]);

  useEffect(
    function insideEffect() {
      if (!loaded) dispatch(loadMedicines(toaster(), tokenRef.current));
      else {
        setMedicines(data);
        setDirtyRows(data.map(() => false));
        setInvalidRows(data.map(() => false));
      }
    },
    [dispatch, loaded, toaster, data]
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
      searchMedicine(searchTerm, toaster(), (data) => {
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

    dispatch(addMedicines(newMeds, toaster()));

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
      medicineData={medicines}
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
    ></MedicinesComponent>
  );
}

export default MedicinesContainer;
