import { clearSearch } from "../triggers/searchTriggers";
import { searchField } from "../view/selectors";

// Login
export const search = (search) => {
  if (search != null) {
    searchField().clear().type(search);
  }
};

// Clean Form
export const resetForm = () => {
  clearSearch();
};
