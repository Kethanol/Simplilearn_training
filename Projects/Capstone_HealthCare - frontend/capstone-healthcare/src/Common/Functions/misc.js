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

function applyFailToast(creationFunc, title, description) {
  creationFunc({
    title: title,
    description: description,
    status: "error",
    duration: 1500,
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
  applyFailToast,
};
