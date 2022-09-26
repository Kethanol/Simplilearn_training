function validateSignUpUsername(value) {
  if (!value) return true;
  return value.length >= 3 && value.length <= 20;
}

export { validateSignUpUsername };
