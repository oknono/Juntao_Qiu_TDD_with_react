import axios from "axios";
/* eslint-disable jest/valid-expect */

describe("Bookish Application", () => {
  before(() => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });

  beforeEach(() => {
    goToPage();
  });

  it("visits the Bookish website", () => {
    checkPageTitle();
  });

  it("shows a book list", () => {
    checkBookListWithTitles([
      "Refactoring",
      "Domain-driven design",
      "Building Microservices",
      "Acceptance Test Driven Development with React",
    ]);
  });

  it("goes to book details page", () => {
    selectNthBookInList(0);
    cy.url().should("include", "/books/1");
    cy.get("h2.book-title").contains("Refactoring");
  });

  it("searches for a title", () => {
    checkBookListWithTitles([
      "Refactoring",
      "Domain-driven design",
      "Building Microservices",
      "Acceptance Test Driven Development with React",
    ]);
    performSearch("design");
    checkBookListWithTitles(["Domain-driven design"]);
  });
});

const goToPage = () => {
  cy.visit("http://localhost:3000");
};

const checkPageTitle = () => {
  cy.get('h1[data-test="heading"]').contains("Bookish");
};

const checkBookListWithTitles = (expectation = []) => {
  cy.get('div[data-test="book-list"]').should("exist");
  cy.get("div.book-item").should((books) => {
    expect(books).to.have.length(expectation.length);
    const titles = [...books].map((x) => x.querySelector("h2").innerHTML);
    expect(titles).to.deep.equal(expectation);
  });
};

const selectNthBookInList = (n) => {
  cy.get("div.book-item").contains("View Details").eq(n).click();
};
const performSearch = (search) => {
  cy.get('[data-test="search"] input').type(search);
};
