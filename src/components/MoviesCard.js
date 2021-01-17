import React from "react";

const MoviesCard = ({ movie, key, onAdd, isNominated }) => {
  if (isNominated) {
    return (
      <div className="movies-card" key={key}>
        <img src={movie.Poster} />
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
        <p>View on IMDB</p>
        <button onClick={() => onAdd(movie)} class="nominate-button-disabled">
          <p>Nominated</p>
        </button>
      </div>
    );
  } else {
    return (
      <div className="movies-card" key={key}>
        <img src={movie.Poster} />
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
        <p>View on IMDB</p>
        <button onClick={() => onAdd(movie)} class="nominate-button">
          <p>Nominate</p>
        </button>
      </div>
    );
  }
};

export default MoviesCard;
