export const visit = () => cy.visit("/search");
export const form = () => cy.get("form");
export const searchField = () => cy.get('[id="search"]');
export const navLogout = () => cy.get("[id=logout]");
export const searchBox = () => cy.get('[id="searchResults"]');
export const recommendationsBox = () => cy.get('[id="recommendations"]');
export const kmeansBox = () => cy.get('[id="kmeans"]');
export const kmeansGraphBox = () => cy.get(".recharts-legend-wrapper");

// Error login Selectors
export const errorMsgEmail = () =>
  cy.get('[data-supertokens="inputWrapper inputError"]');

export const errorMsgPassword = () =>
  cy.get('[data-supertokens="inputErrorMessage"]');

export const headMsg = (msg) => {
  cy.contains('[data-supertokens="inputErrorMessage"]', msg);
};

// Home page selectors
export const homeTitle = () => cy.contains("h2", "Busca tus libros");
