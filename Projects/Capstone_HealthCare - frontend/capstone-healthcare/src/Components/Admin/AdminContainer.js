import AdminComponent from "./AdminComponent";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  loadMedicines,
  deleteMedicine,
  updateMedicine,
} from "./actionCreators";
import { getCachedMedicineData } from "./selectors";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { applyToast } from "../../Common/Functions/misc";

function AdminContainer() {
  var dispatch = useDispatch(),
    toast = useToast(),
    { data, loading, loaded } = useSelector(
      getCachedMedicineData,
      shallowEqual
    ),
    [dirtyRows, setDirtyRows] = useState({}),
    [medicines, setMedicines] = useState([]);

  useEffect(
    function insideEffect() {
      if (!loaded && !loading) dispatch(loadMedicines(applyToast, toast));
      else setMedicines(data);
    },
    [dispatch, toast, loading, loaded, data]
  );

  function handleRowChange(event, medicineId) {
    var {
        target: { name, value },
      } = event,
      existingMedicine = medicines.find((m) => m.id === medicineId);

    existingMedicine[name] = value;

    setMedicines(medicines);

    setDirtyRows((prevDirtyRows) => {
      return { ...prevDirtyRows, [medicineId]: true };
    });
  }

  function deleteMed(id) {
    dispatch(
      deleteMedicine(id, applyToast, toast, () => {
        var newMedicines = medicines.filter((m) => m.id !== id);
        setMedicines(newMedicines);
      })
    );
  }

  function updateMed(id) {
    var medicine = medicines.find((m) => m.id === id);
    dispatch(updateMedicine(medicine, applyToast, toast));
  }

  return (
    <AdminComponent
      medicineData={medicines}
      dataLoading={loading}
      deleteMed={deleteMed}
      updateMed={updateMed}
      handleRowChange={handleRowChange}
      dirtyRows={dirtyRows}
    ></AdminComponent>
  );
}

export default AdminContainer;
