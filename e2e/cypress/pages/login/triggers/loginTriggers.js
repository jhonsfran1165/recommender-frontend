import { form, nameField, navLogout, passwordField } from "../view/selectors";

// submit form
export const submitForm = () => form().submit();

// clean form
export const clearUsername = () => nameField().clear();
export const clearPassword = () => passwordField().clear();

// type data form fields
export const typeUsername = (username) => {
  clearUsername().type(username);
  // nameField().clear().type(username)
};

export const typePassword = (password) => {
  clearPassword().type(password);
  // passwordField().clear().type(password);
};

// click in nav items list
export const outHome = () => navLogout().click();
