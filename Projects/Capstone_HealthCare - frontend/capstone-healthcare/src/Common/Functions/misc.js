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

function applyToast(creationFunc, title, description, status) {
  creationFunc({
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
}

export {
  handleFormValueChangeWrapper,
  handleFormValueErrorWrapper,
  applyToast,
};
