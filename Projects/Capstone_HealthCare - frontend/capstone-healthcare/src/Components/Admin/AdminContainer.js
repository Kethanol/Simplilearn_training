import AdminComponent from "./AdminComponent";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { loadMedicines, deleteMedicine } from "./actionCreators";
import { getCachedMedicineData } from "./selectors";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { applyToast } from "../../Common/Functions/misc";

function AdminContainer() {
  var dispatch = useDispatch();
  var toast = useToast();
  var { data, loading } = useSelector(getCachedMedicineData, shallowEqual);

  useEffect(
    function insideEffect() {
      dispatch(loadMedicines(applyToast, toast));
    },
    [dispatch, toast]
  );

  function deleteMed(id) {
    dispatch(deleteMedicine(id, applyToast, toast));
  }

  return (
    <AdminComponent
      medicineData={data}
      dataLoading={loading}
      deleteMed={deleteMed}
    ></AdminComponent>
  );
}

export default AdminContainer;
