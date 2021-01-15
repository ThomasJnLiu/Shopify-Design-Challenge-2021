import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  const OnChange = (q) => {
    setText(q);
  };

  const SearchMovie = async () => {
    const result = await axios(
      `http://www.omdbapi.com/?apikey=e95d3a07&s=${text}`
    );
    setMovies(result.data.Search);
    console.log(result.data.Search);
    console.log(movies);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search movies"
          value={text}
          onChange={(e) => OnChange(e.target.value)}
          autoFocus
        />
      </form>
      <button onClick={SearchMovie}>Search</button>
    </>
  );
};

export default Search;
