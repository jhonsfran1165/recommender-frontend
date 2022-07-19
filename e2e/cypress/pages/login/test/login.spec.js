import { invalidUser, validUser } from "../mocks/loginData";
import { login, logout, resetForm } from "../modules/login";
import LoginTest from "../scenarios/LoginPage";
import { visit } from "../view/selectors";

const loginUser = () => {
  describe("Login Users", () => {
    const LoginPage = new LoginTest();

    beforeEach(() => {
      visit();
    });

    // Test Empty Form Fields
    it("Testing Empty Login Fields", () => {
      resetForm();
      LoginPage.validActiveField();
      cy.screenshot();
    });

    // Test login - Invalid Credentials
    it("Testing Login - Invalid Email", () => {
      login(invalidUser.username, invalidUser.password);
      LoginPage.validateErrorMsgEmail("Email is invalid");
      cy.screenshot();
      resetForm();
    });

    it("Testing Login - Invalid Password", () => {
      login(validUser.username, invalidUser.password);
      LoginPage.validateErrorMsgGeneral(
        "Incorrect email and password combination"
      );
      cy.screenshot();
      resetForm();
    });

    // Test login - Without Password
    it("Testing Login - Without Password", () => {
      login(invalidUser.username, null);
      LoginPage.validateErrorMsgPassword("Field is not optional");
      cy.screenshot();
      resetForm();
    });

    // Test login - Valid Credentials
    it("Testing login - Valid Credentials", () => {
      login(validUser.username, validUser.password);

      // validate
      LoginPage.InHomeExpect();
      cy.screenshot();

      logout();

      cy.wait(1000);
    });
  });
};

export { loginUser };
