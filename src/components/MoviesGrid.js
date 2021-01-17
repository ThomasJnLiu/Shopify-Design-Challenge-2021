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
  // if (newMovies === undefined) {
  // } else {
  //   return (
  //     <div>
  //       {newMovies.map((movie, index) => {
  //         <h1 key={index}>{movie.Title}</h1>;
  //       })}
  //     </div>
  //   );
  // }
};

export default MoviesGrid;
