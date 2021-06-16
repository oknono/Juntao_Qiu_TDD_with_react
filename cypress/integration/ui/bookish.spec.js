import axios from "axios";
/* eslint-disable jest/valid-expect */

describe("Bookish Application", () => {
  before(() => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });

  afterEach(() => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });

  beforeEach(() => {
    const books = [
      { name: "Refactoring", id: 1 },
      { name: "Domain-driven design", id: 2 },
      { name: "Building Microservices", id: 3 },
    ];
    return books.map((item) =>
      axios.post("http://localhost:8080/books", item, {
        headers: { "Content-Type": "application/json" },
      })
    );
  });

  it("visits the Bookish website", () => {
    cy.visit("http://localhost:3000");
    cy.get('h1[data-test="heading"]').contains("Bookish");
  });

  it("shows a book list", () => {
    cy.visit("http://localhost:3000");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get('div[data-test="book-item"]').should((books) => {
      expect(books).to.have.length(3);
      const titles = [...books].map(
        (book) => book.querySelector("h2").innerHTML
      );
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
        "Building Microservices",
      ]);
    });
  });
});
