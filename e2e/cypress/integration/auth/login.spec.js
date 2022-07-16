import RegisterPage from "./pages/LoginPage";

describe("Register", () => {
  const registerPage = new RegisterPage();

  it("Does not much", () => {
    expect(true).to.equal(true);
  });

  // Test login - Invalid Credentials
  it("Testing Login - Invalid Credentials", () => {
    registerPage.visit();
    registerPage.typeUsername("jhonsfran");
    registerPage.typePassword("1234");
    registerPage.submitForm();

    cy.wait(1000);

    // modal appears
    registerPage.validateModal();
    registerPage.closeModal();
    registerPage.resetForm();
  });
});
