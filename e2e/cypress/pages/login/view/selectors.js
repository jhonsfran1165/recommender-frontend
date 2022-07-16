export const visit = () => cy.visit("/auth");
export const form = () => cy.get("form");
export const nameField = () => cy.get('[name="email"]');
export const passwordField = () => cy.get('[name="password"]');
export const navbar = () => cy.get(".dropdown-toggle");
export const navLogout = () => cy.get(":nth-child(5) > .nav-item");

export const btnIniciarSesion = () => cy.contains("button", "SIGN IN");

// Error login Selectors
export const errorMsg = () =>
  cy
    .get('[data-supertokens="inputWrapper inputError"]')
    .should("have.length", 2);
export const closeMsg = () => cy.get(".swal2-confirm");
export const headMsg = (msg) => {
  cy.contains('[data-supertokens="inputErrorMessage"]', msg);
};

// Home page selectors
export const homeTitle = () => cy.contains("h2", "Home");
