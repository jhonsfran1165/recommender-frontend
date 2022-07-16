class LoginPage {
  visit() {
    cy.visit("/auth");
  }

  typeUsername = (username) =>
    cy.get('[name="username"]').clear().type(username);

  typePassword = (password) =>
    cy.get('[name="password"]').clear().type(password);

  submitForm = () => cy.get("form").submit();

  validateModal = () =>
    cy
      .get(".swal2-container")
      .should("be.visible")
      .contains(".swal2-header", "Usuario o la contraseña son incorrectos");

  closeModal = () =>
    cy
      .get(".swal2-container")
      .should("be.visible")
      .get(".swal2-confirm")
      .click();

  resetForm = () => {
    cy.get('[name="username"]').clear();
    cy.get('[name="password"]').clear();
  };
}

export default LoginPage;
