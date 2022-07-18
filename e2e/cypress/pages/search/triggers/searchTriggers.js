import { form, navLogout, searchField } from "../view/selectors";

// submit form
export const submitForm = () => form().submit();

// clean form
export const clearSearch = () => searchField().clear();

// type data form fields
export const typeSearch = (search) => {
  clearSearch().type(search);
};

// click in nav items list
export const outHome = () => navLogout().click();
