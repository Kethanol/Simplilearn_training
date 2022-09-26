function validateSignUpUsername(value) {
  if (!value) return true;
  return value.length >= 6 && value.length <= 20;
}

function validatePassword(value) {
  if (!value) return true;
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    value
  );
}

function validateMail(value) {
  if (!value) return true;
  return /^\S+@\S+\.\S+$/.test(value);
}

export { validateSignUpUsername, validatePassword, validateMail };
