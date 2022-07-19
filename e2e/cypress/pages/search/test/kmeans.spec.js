import { validUser } from "../../login/mocks/loginData";
import { login, logout } from "../../login/modules/login";
import SearchTest from "../scenarios/SearchPage";
import { clickKmeans } from "../triggers/searchTriggers";
import { visit } from "../view/selectors";

const kmeansSearch = () => {
  describe("Kmeans Clusters", () => {
    const SearchPage = new SearchTest();

    beforeEach(() => {
      visit();
    });

    it("Search kmeans", () => {
      login(validUser.username, validUser.password);
      clickKmeans();

      // kmeans can take longer than this
      cy.wait(20000);

      SearchPage.validKmeansGraph("Cluster 0");
      SearchPage.validKmeansGraph("Cluster 1");
      SearchPage.validKmeansGraph("Cluster 2");
      cy.screenshot();
      logout();
    });
  });
};

export { kmeansSearch };
