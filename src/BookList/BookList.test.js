import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import BookList from "./BookList";

const renderWithRouter = (component) => {
  return { ...render(<Router>{component}</Router>) };
};

describe("BookList component", () => {
  it("shows loading state", () => {
    const props = { loading: true };
    const { container } = render(<BookList {...props} />);
    const content = container.querySelector("p");
    expect(content.innerHTML).toContain("Loading");
  });

  it("shows error state", () => {
    const props = { error: true };
    const { container } = render(<BookList {...props} />);
    const content = container.querySelector("p");
    expect(content.innerHTML).toContain("Error");
  });

  it("renders books", () => {
    const props = {
      books: [
        { name: "Refactoring", id: 1 },
        { name: "Domain-driven design", id: 2 },
      ],
    };
    const { container } = renderWithRouter(<BookList {...props} />);
    const titles = [...container.querySelectorAll("h2")].map(
      (element) => element.innerHTML
    );
    expect(titles).toEqual(["Refactoring", "Domain-driven design"]);
  });
});
