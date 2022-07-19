import { validUser } from "../../login/mocks/loginData";
import { login, logout } from "../../login/modules/login";
import { invalidSearch, validSearch } from "../mocks/searchData";
import { resetForm, search } from "../modules/search";
import SearchTest from "../scenarios/SearchPage";
import { clickCopy } from "../triggers/searchTriggers";
import { visit } from "../view/selectors";

const searchBook = () => {
  describe("Search Books", () => {
    const SearchPage = new SearchTest();

    beforeEach(() => {
      visit();
    });

    it("Search book", () => {
      login(validUser.username, validUser.password);
      search(validSearch.copyId);

      SearchPage.validActiveSearchBox();
      SearchPage.validateNameBook(validSearch.name);
      cy.screenshot();

      resetForm();
      logout();
    });

    it("Search book - No result", () => {
      login(validUser.username, validUser.password);
      search(invalidSearch.copyId);

      SearchPage.validateNoResultBook();
      cy.screenshot();

      resetForm();
      logout();
    });

    it("Search book recommendation", () => {
      login(validUser.username, validUser.password);
      search(validSearch.copyId);

      SearchPage.validActiveSearchBox();
      SearchPage.validateNameBook(validSearch.name);
      clickCopy(validSearch.name);
      SearchPage.validateRecommendations();
      cy.screenshot();

      logout();
    });
  });
};

export { searchBook };
