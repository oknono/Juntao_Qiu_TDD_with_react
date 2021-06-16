import React from "react";
import { render } from "@testing-library/react";

import BookDetail from "./BookDetail";

describe("BookDetail component", () => {
  it("renders title", () => {
    const props = { book: { name: "Heartache" } };
    const { container } = render(<BookDetail {...props} />);
    const content = container.querySelector("h2");
    expect(content.innerHTML).toContain("Heartache");
  });

  it("renders descriptiom", () => {
    const props = {
      book: { name: "Heartache", description: "A long summer in Sicily" },
    };
    const { container } = render(<BookDetail {...props} />);
    const content = container.querySelector("p.book-description");
    expect(content.innerHTML).toContain("A long summer in Sicily");
  });
});
