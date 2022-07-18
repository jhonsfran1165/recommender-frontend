import { validUser } from "../../login/mocks/loginData";
import { login, logout } from "../../login/modules/login";
import { validSearch } from "../mocks/searchData";
import { resetForm, search } from "../modules/search";
import SearchTest from "../scenarios/SearchPage";
import { visit } from "../view/selectors";

const searchBook = () => {
  describe("Search Books", () => {
    const SearchPage = new SearchTest();

    beforeEach(() => {
      visit();
    });

    // Test Empty Form Fields
    it("Search Empty Fields", () => {
      login(validUser.username, validUser.password);
      search(validSearch.copyId);

      SearchPage.validActiveSearchBox();
      SearchPage.validateNameBook(validSearch.name);

      resetForm();
      logout();
    });

    // Test login - Invalid Credentials
    // it("Testing Login - Invalid Email", () => {
    //   login(invalidUser.username, invalidUser.password);
    //   LoginPage.validateErrorMsgEmail("Email is invalid");
    //   resetForm();
    // });
  });
};

export { searchBook };
