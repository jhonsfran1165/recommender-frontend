import {
  clearPassword,
  clearUsername,
  outHome,
  submitForm,
} from "../triggers/loginTriggers";
import { nameField, passwordField } from "../view/selectors";

// Login
export const login = (username, password) => {
  if (username != null) {
    nameField().clear().type(username);
  }

  if (password != null) {
    passwordField().clear().type(password);
  }

  submitForm();
};

// Logout
export const logout = () => {
  outHome();
};

// Clean Form
export const resetForm = () => {
  clearUsername();
  clearPassword();
};
