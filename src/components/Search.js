import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ getResult }) => {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  const OnChange = (q) => {
    setText(q);
  };

  const SearchMovie = async () => {
    const result = await axios(
      `https://www.omdbapi.com/?apikey=e95d3a07&s=${text}`
    );
    setMovies(result.data.Search);
  };

  useEffect(() => {
    getResult(movies);
  }, [movies]);

  return (
    <div className="search">
      <form>
        <h1>Movie Title</h1>
        <input
          type="text"
          placeholder="Search movies"
          value={text}
          onChange={(event) => OnChange(event.target.value)}
          autoFocus
        />
      </form>
      <button onClick={SearchMovie}>Search</button>
    </div>
  );
};

export default Search;
