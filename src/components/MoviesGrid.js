import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesGrid = ({ newMovies, onAdd, nominations }) => {
  if (newMovies === undefined) {
    return (
      <>
        <div className="movies">undefined</div>
      </>
    );
  } else {
    return (
      <div className="movies">
        {newMovies.map((movie, index) => {
          const alreadyNominated = nominations.find(
            (x) => x.imdbID === movie.imdbID
          );
          if (alreadyNominated) {
            return (
              <>
                <MoviesCard
                  key={index}
                  movie={movie}
                  onAdd={onAdd}
                  isNominated
                />
              </>
            );
          }
          return (
            <>
              <MoviesCard key={index} movie={movie} onAdd={onAdd} />
            </>
          );
        })}
      </div>
    );
  }
};

export default MoviesGrid;
