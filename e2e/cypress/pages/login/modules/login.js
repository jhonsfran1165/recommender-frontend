import { nameField, passwordField, closeMsg } from "../view/selectors";
import {
  submitForm,
  clearUsername,
  clearPassword,
  onNavbar,
  outHome,
} from "../triggers/loginTriggers";

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
  onNavbar();
  outHome();
};

// Clean Form
export const resetForm = () => {
  clearUsername();
  clearPassword();
};

// close login error message
export const closeError = () => {
  closeMsg().click();
};
