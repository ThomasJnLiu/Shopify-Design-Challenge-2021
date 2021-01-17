import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const MoviesCard = ({ movie, key, onAdd, isNominated }) => {
  if (isNominated) {
    return (
      <div className="movies-card" key={key}>
        <img src={movie.Poster} />
        <button onClick={() => onAdd(movie)} class="nominate-button-disabled">
          <p>Nominated</p>
        </button>
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://www.imdb.com/title/" + movie.imdbID}
        >
          View on IMDB
        </a>
      </div>
    );
  } else {
    return (
      <div className="movies-card" key={key}>
        <img src={movie.Poster} />
        <button onClick={() => onAdd(movie)} class="nominate-button">
          <p>Nominate</p>
        </button>
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://www.imdb.com/title/" + movie.imdbID}
        >
          View on IMDB
        </a>
      </div>
    );
  }
};

export default MoviesCard;
