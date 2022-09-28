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

export {
  handleFormValueChangeWrapper,
  handleFormValueErrorWrapper,
  applyToast,
  axiosWrapper,
};
