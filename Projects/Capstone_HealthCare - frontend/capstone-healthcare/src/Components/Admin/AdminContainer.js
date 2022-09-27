import AdminComponent from "./AdminComponent";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { loadMedicines } from "./actionCreators";
import { getCachedMedicineData } from "./selectors";
import { useEffect } from "react";

function AdminContainer() {
  var dispatch = useDispatch();
  var { data, loading } = useSelector(getCachedMedicineData, shallowEqual);

  useEffect(
    function insideEffect() {
      dispatch(loadMedicines());
    },
    [dispatch]
  );

  return (
    <AdminComponent medicineData={data} dataLoading={loading}></AdminComponent>
  );
}

export default AdminContainer;
