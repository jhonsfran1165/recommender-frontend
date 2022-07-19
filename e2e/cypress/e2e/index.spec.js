import { loginUser } from "../pages/login/test/login.spec";
import { kmeansSearch } from "../pages/search/test/kmeans.spec";
import { searchBook } from "../pages/search/test/search.spec";

// run login test
loginUser();
searchBook();
kmeansSearch();
