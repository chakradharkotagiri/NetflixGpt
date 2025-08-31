export const checkValidData = (email, password, name) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isValidName = /^[A-Za-z\s]+$/
  .test(name);

  if (!isValidEmail) return "Email ID is not valid";
  if (!isValidPassword) return "Password is not valid";
  if (!isValidName) return "Name cannot be empty ";

  return null;
};
