describe("Bookish Application", function () {
  it("visits the Bookish website", function () {
    cy.visit("http://localhost:3000");
    cy.get('h1[data-test="heading"]').contains("Bookish");
  });
});
