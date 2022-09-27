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

export { handleFormValueChangeWrapper, handleFormValueErrorWrapper };
