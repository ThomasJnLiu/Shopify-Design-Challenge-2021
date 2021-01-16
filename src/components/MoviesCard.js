import React from "react";
import NominateButton from "./NominateButton";

const MoviesCard = ({ movie, key }) => {
  return (
    <div className="movies-card" key={key}>
      <img src={movie.Poster} />
      <h1>{movie.Title}</h1>
      <h2>{movie.Year}</h2>
      <p>View on IMDB</p>
      <NominateButton />
    </div>
  );
};

export default MoviesCard;
