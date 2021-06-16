import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";

import Booklist from "./BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const result = await axios.get("http://localhost:8080/books");
      setBooks(result.data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <Typography variant="h1" component="h1" data-test="heading">
        Bookish
      </Typography>
      <Booklist books={books} />
    </div>
  );
};

export default App;
