export const checkValidationEmailPassword = (email, password) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test([password]);

  if (!isValidEmail) return "Please check your email id";
  if (!isValidPassword) return "Please check your password";

  return null;
};
