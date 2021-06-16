import React from "react";
import { Typography } from "@material-ui/core";

import BookListContainer from "./BookListContainer";

const App = () => {
  return (
    <div className="App">
      <Typography variant="h1" component="h1" data-test="heading">
        Bookish
      </Typography>
      <BookListContainer />
    </div>
  );
};

export default App;
