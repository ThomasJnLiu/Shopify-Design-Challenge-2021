import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviesGrid from "./MoviesGrid";

const Search = ({ getResult }) => {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  const OnChange = (q) => {
    setText(q);
  };

  const SearchMovie = async () => {
    const result = await axios(
      `http://www.omdbapi.com/?apikey=e95d3a07&s=${text}`
      // `http://www.omdbapi.com/?apikey=e95d3a07&s=avengers`
    );
    setMovies(result.data.Search);
    console.log(result.data.Search);
  };

  useEffect(() => {
    if (movies !== undefined) {
      console.log("movies are defined");
      console.log(movies);
    } else {
      console.log("movies is undefined");
    }
  }, [movies]);

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search movies"
          value={text}
          onChange={(event) => OnChange(event.target.value)}
          autoFocus
        />
      </form>
      <button onClick={SearchMovie} style={{ display: "block" }}>
        Search
      </button>
      <MoviesGrid newMovies={movies} />
      {/* {movies.map((movie, index) => (
        <h1 key={index}>{movie.Title}</h1>
      ))} */}
    </>
  );
};

export default Search;
