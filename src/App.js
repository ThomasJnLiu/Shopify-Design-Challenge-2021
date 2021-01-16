import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import APIComponent from "./components/APIComponent";
import Search from "./components/Search";
import MoviesGrid from "./components/MoviesGrid";
import Nominations from "./components/Nominations";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);
  // const url = "http://www.omdbapi.com/?apikey=e95d3a07&s=";
  // const [query, setQuery] = useState("");
  // const [response, setResponse] = useState(false);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchitems = async () => {
  //     const result = await axios(
  //       `http://www.omdbapi.com/?apikey=e95d3a07&s=${query}`
  //     );
  //     if (result.data.Response) {
  //       console.log(result.data.Search);
  //       setResponse(result.data.Response);
  //       setData(result.data);
  //     }
  //   };

  //   fetchitems();
  // }, [query]);

  return (
    <div className="App">
      <Search />
      <Nominations />
    </div>
  );
};

export default App;
