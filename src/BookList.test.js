import React from "react";
import { render } from "@testing-library/react";

import BookList from "./BookList";

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
    const { container } = render(<BookList {...props} />);
    const titles = [...container.querySelectorAll("h2")].map(
      (element) => element.innerHTML
    );
    expect(titles).toEqual(["Refactoring", "Domain-driven design"]);
  });
});
