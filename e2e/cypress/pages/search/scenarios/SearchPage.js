import {
  errorMsgEmail,
  errorMsgPassword,
  headMsg,
  homeTitle,
  searchBox,
} from "../view/selectors";

class SearchPage {
  validActiveSearchBox = () => {
    searchBox().should("be.visible");
  };

  validateNameBook = (name) => {
    searchBox().contains(name);
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
