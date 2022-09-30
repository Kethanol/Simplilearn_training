import axios from "axios";

function handleFormValueChangeWrapper(fieldName, callback) {
  return function inner(event) {
    var {
      target: { value },
    } = event;

    callback(fieldName, {
      value,
      ...(!value && { hasError: false }),
    });
  };
}

function handleFormValueErrorWrapper(
  fieldName,
  fieldValue,
  validationFunc,
  callback
) {
  var hasError = !validationFunc(fieldValue);

  callback(fieldName, {
    hasError,
  });

  return !hasError;
}

function applyToast(toast) {
  return function inner(title, description, status) {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 3000,
      isClosable: true,
      containerStyle: {
        width: "45rem",
        fontSize: "1.3rem",
      },
    });
  };
}

async function axiosWrapper(method, url, token, data = null) {
  return await axios({
    method,
    url,
    ...(data ? { data } : {}),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function setValidity(medicine) {
  return Object.values(medicine).some((v) => v === "");
}

var renderEditableBackgroundProps = (function () {
  var iconButtonEditableProps = {
    _hover: { background: "transparent" },
  };

  return function inner(dirtyRows, index) {
    if (!dirtyRows[index]) return iconButtonEditableProps;
    else return {};
  };
})();

var renderSaveChangesProps = (function () {
  var iconButtonSaveProps = {
    _hover: { background: "rgba(178,245,234, 0.8)" },
  };

  return function inner(medicineData) {
    if (!medicineData.some((m) => m.id === 0)) return iconButtonSaveProps;
    else return {};
  };
})();

export {
  handleFormValueChangeWrapper,
  handleFormValueErrorWrapper,
  applyToast,
  axiosWrapper,
  setValidity,
  renderEditableBackgroundProps,
  renderSaveChangesProps,
};
