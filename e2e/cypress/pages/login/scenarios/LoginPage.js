import {
  btnIniciarSesion,
  errorMsgEmail,
  errorMsgGeneral,
  errorMsgPassword,
  headMsg,
  homeTitle,
} from "../view/selectors";

class LoginPage {
  validActiveField = () => {
    btnIniciarSesion().should("be.visible");
  };

  checkErrorMsgEmail = () => {
    errorMsgEmail().should("be.visible");
  };

  validateErrorMsgGeneral = () => {
    errorMsgGeneral().should("be.visible");
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

export default LoginPage;
