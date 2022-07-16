import {
  btnIniciarSesion,
  errorMsg,
  headMsg,
  homeTitle,
} from "../view/selectors";

class LoginPage {
  validActiveField = () => {
    btnIniciarSesion().should("be.visible");
  };

  checkErrorMsg = () => {
    errorMsg().should("be.visible");
  };

  validateErrorMsg = (msg) => {
    this.checkErrorMsg();
    headMsg(msg);
  };

  InHomeExpect = () => {
    homeTitle().should(($title) => {
      expect($title.text()).to.include("Home");
    });
  };
}

export default LoginPage;
