import React from "react";
import { Typography } from "@material-ui/core";
import Booklist from "./BookList";

function App() {
  const books = [{ name: "Refactoring" }, { name: "Domain-driven design" }];

  return (
    <div className="App">
      <Typography variant="h1" component="h1" data-test="heading">
        Bookish
      </Typography>
      <Booklist books={books} />
    </div>
  );
}

export default App;
