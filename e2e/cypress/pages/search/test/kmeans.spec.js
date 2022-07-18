import { validUser } from "../../login/mocks/loginData";
import { login, logout } from "../../login/modules/login";
import SearchTest from "../scenarios/SearchPage";
import { clickKmeans } from "../triggers/searchTriggers";
import { visit } from "../view/selectors";

const kmeansSearch = () => {
  describe("Search Books", () => {
    const SearchPage = new SearchTest();

    beforeEach(() => {
      visit();
    });

    it("Search kmeans", () => {
      login(validUser.username, validUser.password);
      clickKmeans();
      SearchPage.validKmeansGraph("Cluster 0");
      SearchPage.validKmeansGraph("Cluster 1");
      SearchPage.validKmeansGraph("Cluster 2");
      logout();
    });
  });
};

export { kmeansSearch };
