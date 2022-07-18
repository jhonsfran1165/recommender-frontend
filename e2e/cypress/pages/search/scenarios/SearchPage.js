import {
  errorMsgEmail,
  errorMsgPassword,
  headMsg,
  homeTitle,
  kmeansGraphBox,
  recommendationsBox,
  searchBox,
} from "../view/selectors";

class SearchPage {
  validActiveSearchBox = () => {
    searchBox().should("be.visible");
  };

  validKmeansGraph = (name) => {
    kmeansGraphBox().contains(name);
  };

  validateNameBook = (name) => {
    searchBox().contains(name);
  };

  validateRecommendations = () => {
    recommendationsBox().contains(
      "El desarrollo de la comunidad : tecnicas de investigacion social"
    );
    recommendationsBox().contains(
      "Una propuesta de conceptualización y medición del sector informal"
    );
    recommendationsBox().contains(
      "El sector informal urbano en Colombia y las políticas de empleo, 1970-1980"
    );
    recommendationsBox().contains(
      "Trabajo informal y pobreza urbana en America Latina"
    );
  };

  validateNoResultBook = () => {
    searchBox().should("not.be.visible");
  };

  checkErrorMsgEmail = () => {
    errorMsgEmail().should("be.visible");
  };

  checkErrorMsgPassword = () => {
    errorMsgPassword().should("be.visible");
  };

  validateErrorMsgEmail = (msg) => {
    this.checkErrorMsgEmail();
    headMsg(msg);
  };

  validateErrorMsgPassword = (msg) => {
    this.checkErrorMsgPassword();
    headMsg(msg);
  };

  InHomeExpect = () => {
    homeTitle().should(($title) => {
      expect($title.text()).to.include("Busca tus libros");
    });
  };
}

export default SearchPage;
