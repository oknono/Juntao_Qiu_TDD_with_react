import React from "react";
import { Route, Switch } from "react-router-dom";
import { Typography } from "@material-ui/core";

import BookListContainer from "./BookList/BookListContainer";
import BookDetailContainer from "./BookDetail/BookDetailContainer";

const App = () => {
  return (
    <div className="App">
      <Typography variant="h1" component="h1" data-test="heading">
        Bookish
      </Typography>
      <Switch>
        <Route exact path="/" component={BookListContainer}></Route>
        <Route path="/books/:id" component={BookDetailContainer}></Route>
      </Switch>
    </div>
  );
};

export default App;
