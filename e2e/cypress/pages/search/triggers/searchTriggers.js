import {
  form,
  kmeansBox,
  navLogout,
  searchBox,
  searchField,
} from "../view/selectors";

// submit form
export const submitForm = () => form().submit();

// clean form
export const clearSearch = () => searchField().clear();

export const clickCopy = (name) => {
  searchBox().contains(name);
  searchBox().find("button").first().click();
};

export const clickKmeans = () => {
  kmeansBox().click();
};

// type data form fields
export const typeSearch = (search) => {
  clearSearch().type(search);
};

// click in nav items list
export const outHome = () => navLogout().click();
