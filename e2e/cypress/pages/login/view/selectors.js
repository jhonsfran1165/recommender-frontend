export const visit = () => cy.visit("/auth");
export const form = () => cy.get("form");
export const nameField = () => cy.get('[name="email"]');
export const passwordField = () => cy.get('[name="password"]');
export const navLogout = () => cy.get("[id=logout]");

export const btnIniciarSesion = () => cy.contains("button", "SIGN IN");

// Error login Selectors
export const errorMsgEmail = () =>
  cy.get('[data-supertokens="inputWrapper inputError"]');

export const errorMsgGeneral = () =>
  cy.get('[data-supertokens="generalError"]');

export const errorMsgPassword = () =>
  cy.get('[data-supertokens="inputErrorMessage"]');

export const headMsg = (msg) => {
  cy.contains('[data-supertokens="inputErrorMessage"]', msg);
};

// Home page selectors
export const homeTitle = () => cy.contains("h2", "Busca tus libros");
