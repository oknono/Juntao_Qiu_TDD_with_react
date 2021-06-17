import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";

export const useRemoteService = (url, initial) => {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);
      try {
        const result = await axios.get(url);
        setData(result.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return { data, loading, error };
};

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  name: {
    maxHeight: 30,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    maxHeight: 40,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
